
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { Message } from '../types';
import { getGeminiResponse } from '../services/geminiService';

export const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Hello! I'm the DDS Dispatcher. How can I help you optimize your drone operations or find a service today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const responseText = await getGeminiResponse([...messages, userMsg]);
    
    setIsTyping(false);
    setMessages(prev => [...prev, {
      role: 'model',
      text: responseText,
      timestamp: new Date()
    }]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col h-[80vh]">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-600/20">
          <Bot className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-orbitron font-bold text-white">DDS Dispatcher</h2>
          <p className="text-slate-500 text-sm">Powered by Gemini AI • Active Intelligence</p>
        </div>
      </div>

      <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden flex flex-col relative">
        {/* Messages */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
        >
          {messages.map((msg, idx) => (
            <div 
              key={idx}
              className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                msg.role === 'model' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200'
              }`}>
                {msg.role === 'model' ? <Bot className="w-6 h-6" /> : <User className="w-6 h-6" />}
              </div>
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                msg.role === 'model' 
                  ? 'bg-slate-800 text-slate-200 border border-slate-700/50' 
                  : 'bg-blue-600 text-white shadow-lg shadow-blue-600/10'
              }`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                <p className="text-[10px] mt-2 opacity-50">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <Loader2 className="w-6 h-6 animate-spin" />
              </div>
              <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700/50">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="p-6 bg-slate-900 border-t border-slate-800">
          <div className="relative group">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about agricultural services, logistics, or fleet optimization..."
              className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 pr-16 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-500"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white rounded-xl transition-all"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-2 mt-4 text-[10px] text-slate-600 font-medium">
            <Sparkles className="w-3 h-3" />
            AI Suggestion: "What are the best drones for multi-spectral crop analysis?"
          </div>
        </div>
      </div>
    </div>
  );
};
