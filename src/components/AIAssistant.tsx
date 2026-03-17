import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Modality } from '@google/genai';
import { MessageCircle, X, Send, Image as ImageIcon, Volume2, Loader2 } from 'lucide-react';
import Markdown from 'react-markdown';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  imageUrl?: string;
  isAudioLoading?: boolean;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      text: '你好！我是 Anytime Karate 蒔刻的 AI 助手。有什麼我可以幫忙的嗎？你可以問我關於課程的問題，或者上傳照片讓我分析！',
    },
  ]);
  const [input, setInput] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSend = async () => {
    if (!input.trim() && !selectedImage) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      imageUrl: selectedImage || undefined,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setSelectedImage(null);
    setIsLoading(true);

    try {
      let responseText = '';
      
      if (userMessage.imageUrl) {
        // Image analysis using gemini-3.1-pro-preview
        const base64Data = userMessage.imageUrl.split(',')[1];
        const mimeType = userMessage.imageUrl.split(';')[0].split(':')[1];
        
        const response = await ai.models.generateContent({
          model: 'gemini-3.1-pro-preview',
          contents: {
            parts: [
              {
                inlineData: {
                  data: base64Data,
                  mimeType: mimeType,
                },
              },
              {
                text: userMessage.text || '請描述這張圖片',
              },
            ],
          },
        });
        responseText = response.text || '抱歉，我無法分析這張圖片。';
      } else {
        // Text chat using gemini-3.1-pro-preview with history
        const history = messages.map(msg => ({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: msg.text }]
        }));
        
        history.push({
          role: 'user',
          parts: [{ text: userMessage.text }]
        });

        const response = await ai.models.generateContent({
          model: 'gemini-3.1-pro-preview',
          contents: history,
          config: {
            systemInstruction: '你是 Anytime Karate 蒔刻的 AI 助手。請用繁體中文回答問題，語氣要友善、專業。',
          },
        });
        
        responseText = response.text || '抱歉，我現在無法回答。';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          text: responseText,
        },
      ]);
    } catch (error) {
      console.error('Error generating content:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          text: '抱歉，發生了一些錯誤，請稍後再試。',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTTS = async (messageId: string, text: string) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === messageId ? { ...msg, isAudioLoading: true } : msg))
    );

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-preview-tts',
        contents: [{ parts: [{ text }] }],
        config: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const audio = new Audio(`data:audio/pcm;rate=24000;base64,${base64Audio}`);
        audio.play();
      }
    } catch (error) {
      console.error('Error generating speech:', error);
    } finally {
      setMessages((prev) =>
        prev.map((msg) => (msg.id === messageId ? { ...msg, isAudioLoading: false } : msg))
      );
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-primary-gold text-primary-dark rounded-full shadow-lg hover:bg-yellow-500 transition-colors z-50"
        style={{ backgroundColor: 'var(--color-primary-gold)', color: 'var(--color-primary-dark)' }}
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-gray-200">
          {/* Header */}
          <div 
            className="p-4 flex justify-between items-center text-white"
            style={{ backgroundColor: 'var(--color-primary-dark)' }}
          >
            <h3 className="font-bold text-lg">AI 助手</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    msg.role === 'user'
                      ? 'bg-primary-teal text-white rounded-br-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                  }`}
                  style={msg.role === 'user' ? { backgroundColor: 'var(--color-primary-teal)' } : {}}
                >
                  {msg.imageUrl && (
                    <img src={msg.imageUrl} alt="Uploaded" className="w-full rounded-lg mb-2" />
                  )}
                  <div className="prose prose-sm max-w-none">
                    <Markdown>{msg.text}</Markdown>
                  </div>
                  {msg.role === 'assistant' && (
                    <button
                      onClick={() => handleTTS(msg.id, msg.text)}
                      disabled={msg.isAudioLoading}
                      className="mt-2 text-gray-500 hover:text-primary-teal transition-colors flex items-center gap-1 text-xs"
                    >
                      {msg.isAudioLoading ? (
                        <Loader2 size={14} className="animate-spin" />
                      ) : (
                        <Volume2 size={14} />
                      )}
                      朗讀
                    </button>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none p-3 text-gray-500 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin" />
                  思考中...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            {selectedImage && (
              <div className="mb-2 relative inline-block">
                <img src={selectedImage} alt="Preview" className="h-16 rounded-lg border border-gray-200" />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                >
                  <X size={12} />
                </button>
              </div>
            )}
            <div className="flex items-center gap-2">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleImageUpload}
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="p-2 text-gray-500 hover:text-primary-teal transition-colors"
                style={{ color: 'var(--color-primary-teal)' }}
              >
                <ImageIcon size={20} />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="輸入訊息..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-primary-teal text-gray-800"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || (!input.trim() && !selectedImage)}
                className="p-2 bg-primary-gold text-primary-dark rounded-full disabled:opacity-50 transition-colors"
                style={{ backgroundColor: 'var(--color-primary-gold)', color: 'var(--color-primary-dark)' }}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
