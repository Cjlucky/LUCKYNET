import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Seo } from '@/components/Seo';
import { useToast } from '@/components/ui/use-toast';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  isError?: boolean;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI Career Counsellor. How can I assist you with your career today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userInput = inputValue.toLowerCase().trim();
    
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Check for special prompts first
      if (userInput.includes('intro of college') || 
          userInput.includes('intro for bit sindri') ||
          userInput.includes('introduction for bit sindri') ||
          userInput.includes('college introduction')) {
        
        const introMessage = `Good [Morning/Afternoon/Evening] Seniors.
My name is _________ from _________ Engineering branch of batch 2k25.
I am from _________, district name.
I have done my matriculation from _____ and intermediate from ____________ .
My hobby is _____ and __________.
My strength is __________ and my weakness is ____________.
My aim is to  ______
Thank you Seniors.`;

        setMessages(prev => [
          ...prev,
          {
            id: Date.now() + 1,
            text: introMessage,
            sender: 'ai',
            timestamp: new Date(),
          },
        ]);
        return;
      }

      // Provide a fallback response when API is not available
      const fallbackResponses = [
        "I'm here to help with your career questions. Could you be more specific?",
        "That's an interesting question. Could you tell me more about what you're looking for?",
        "I'd be happy to help. Could you provide some more details?",
        "I'm designed to assist with career guidance. What would you like to know?",
        "I'm still learning, but I'll do my best to help. Could you rephrase your question?"
      ];
      
      const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          text: randomResponse,
          sender: 'ai',
          timestamp: new Date(),
        },
      ]);

    } catch (error) {
      console.error('Error in chat:', error);
      
      // Add error message
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          text: 'I apologize, but I\'m having trouble connecting to the chat service. I\'ll provide a helpful response instead.',
          sender: 'ai',
          timestamp: new Date(),
          isError: true,
        },
      ]);
      
      // Add a fallback response
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            id: Date.now() + 2,
            text: 'Here are some questions I can help with:\n- Career guidance\n- Study tips\n- College information\n- Interview preparation\n\nWhat would you like to know more about?',
            sender: 'ai',
            timestamp: new Date(),
          },
        ]);
      }, 1000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl h-[calc(100vh-8rem)] flex flex-col">
      <Seo
        title="AI Chatbot | Luckynet"
        description="Chat with our AI Career Counsellor to get personalized career guidance and support."
        canonical="/chat"
      />
      
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`flex items-start gap-2 max-w-[80%] ${
                message.sender === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.sender === 'ai' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
                }`}
              >
                {message.sender === 'ai' ? (
                  isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Bot size={18} />
                ) : (
                  <User size={18} />
                )}
              </div>
              <div
                className={`p-3 rounded-2xl ${
                  message.sender === 'ai'
                    ? message.isError
                      ? 'bg-destructive/10 text-destructive-foreground border border-destructive/20'
                      : 'bg-muted rounded-tl-none'
                    : 'bg-primary text-primary-foreground rounded-tr-none'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="flex gap-2">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your career question..."
          className="flex-1"
          disabled={isLoading}
        />
        <Button 
          type="submit" 
          size="icon" 
          disabled={isLoading || !inputValue.trim()}
        >
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </Button>
      </form>
    </div>
  );
}

export default Chat;
