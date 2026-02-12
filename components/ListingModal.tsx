"use client";

import React, { useState, useEffect, useRef } from 'react';
import { X, Star, Heart, Share, Grid, MapPin, Send, Bot } from 'lucide-react';
import { Listing } from '../types';

// Stub local para evitar dependência de serviço externo (Gemini)
// Mantém a UX do chat, mas com resposta fixa.
const askAboutListingLocation = async (
  question: string,
  listing: Listing
) => {
  const text = `Informações automáticas sobre a vizinhança de "${listing.title}" não estão disponíveis neste ambiente. Consulte o mapa e a descrição do anúncio para mais detalhes.`;
  return { text, mapLinks: [] as any[] };
};

interface ListingModalProps {
  listing: Listing;
  onClose: () => void;
}

const ListingModal: React.FC<ListingModalProps> = ({ listing, onClose }) => {
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'ai', text: string, links?: any[]}[]>([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    const userQ = question;
    setQuestion('');
    setChatHistory(prev => [...prev, { role: 'user', text: userQ }]);
    setLoading(true);

    const { text, mapLinks } = await askAboutListingLocation(userQ, listing);
    
    setLoading(false);
    setChatHistory(prev => [...prev, { role: 'ai', text, links: mapLinks }]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-5xl h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative">
        <button onClick={onClose} className="absolute top-4 left-4 z-10 bg-white/90 p-2 rounded-full hover:shadow-lg transition">
          <X size={20} />
        </button>

        {/* Left: Image & Details - Scrollable */}
        <div className="w-full md:w-3/5 overflow-y-auto p-0 h-full">
           {/* Image Gallery */}
           <div className="w-full h-80 md:h-[400px] bg-black/5 relative">
             <img src={listing.images[0]} className="w-full h-full object-cover" alt="Main" />
             <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-md text-sm font-medium flex items-center gap-2">
                <Grid size={14} /> Show all photos
             </div>
           </div>

           {/* Content */}
           <div className="p-8 pb-32">
             <h1 className="text-3xl font-semibold mb-2">{listing.title}</h1>
             <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-6">
                <span className="flex items-center gap-1 font-medium text-muted">
                  <Star size={14} className="fill-current text-muted" /> {listing.rating}
                </span>
                <span>·</span>
                <span className="underline font-medium text-black">{listing.location}</span>
             </div>

             <div className="border-t border-b py-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <img src={listing.host.image} alt={listing.host.name} className="w-12 h-12 rounded-full object-cover" />
                   <div>
                      <div className="font-semibold text-base text-muted">Hosted by {listing.host.name}</div>
                      <div className="text-sm text-muted opacity-80">{listing.host.superhost ? 'Superhost · ' : ''}3 years hosting</div>
                   </div>
                </div>
             </div>

             <div className="py-6 border-b">
               <h3 className="text-lg font-semibold mb-3">About this place</h3>
               <p className="leading-relaxed text-muted">{listing.description}</p>
             </div>

             <div className="py-6">
               <h3 className="text-lg font-semibold mb-3">Where you'll be</h3>
               <div className="w-full h-48 rounded-xl flex items-center justify-center bg-black/5 text-muted">
                  <div className="flex flex-col items-center">
                    <MapPin size={32} />
                    <span className="text-sm font-medium mt-2">Map Data Protected</span>
                  </div>
               </div>
               <p className="mt-2 text-sm text-muted opacity-80">{listing.location} (Lat: {listing.lat}, Lng: {listing.lng})</p>
             </div>
           </div>
        </div>

        {/* Right: AI Assistant & Booking (Sticky on Desktop) */}
        <div className="w-full md:w-2/5 bg-[#FFFFFF] border-l h-full flex flex-col">
          
          {/* Booking Card Header */}
         <div className="p-6 border-b bg-white shadow-sm z-10">
           <div className="flex justify-between items-end">
             <div>
               <span className="text-2xl font-bold text-[#FF585D]">
{new Intl.NumberFormat("pt-MZ", {
                  style: "decimal",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(listing.price)}{" "}
                MZN
               </span>
               <span className="text-[#484848]/70">
                {listing.finalidade === "aluguer" ? " /mês" : ""}
              </span>
             </div>
             <div className="flex gap-1 text-xs font-semibold text-muted opacity-80 underline">
               2 avaliações
             </div>
           </div>
           <button className="w-full mt-4 bg-brand text-white py-3 rounded-xl font-bold hover:bg-[#ff6f72] transition">
            Reservar
           </button>
         </div>

          {/* AI Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex gap-3 text-sm text-muted bg-black/5 p-3 rounded-lg">
               <Bot size={20} className="text-brand min-w-[20px]" />
               <div>
                 <p className="font-semibold mb-1 text-muted">Gemini Location Expert</p>
                 <p>Ask me anything about the neighborhood! I use Google Maps to find nearby restaurants, transit, and attractions.</p>
               </div>
            </div>

            {chatHistory.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm ${msg.role === 'user' ? 'bg-muted text-white rounded-br-none' : 'bg-white border rounded-bl-none shadow-sm text-muted'}`}>
                  {msg.text}
                  {msg.links && msg.links.length > 0 && (
                    <div className="mt-2 pt-2 border-t flex flex-col gap-1">
                      {msg.links.map((link, l) => (
                        <a key={l} href={link.uri} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline text-xs flex items-center gap-1">
                          <MapPin size={10} /> {link.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border rounded-2xl rounded-bl-none shadow-sm p-3">
                    <div className="flex gap-1">
                     <div className="w-2 h-2 rounded-full animate-bounce bg-muted"></div>
                     <div className="w-2 h-2 rounded-full animate-bounce delay-100 bg-muted"></div>
                     <div className="w-2 h-2 rounded-full animate-bounce delay-200 bg-muted"></div>
                    </div>
                  </div>
                </div>
            )}
            <div ref={chatEndRef}></div>
          </div>

          {/* AI Input */}
          <div className="p-4 bg-white border-t">
             <form onSubmit={handleAsk} className="relative">
               <input 
                 className="w-full rounded-full py-3 pl-4 pr-12 text-sm bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#FF585D]/40 text-muted"
                 placeholder="What's near here? Is it noisy?"
                 value={question}
                 onChange={(e) => setQuestion(e.target.value)}
                 disabled={loading}
               />
               <button 
                type="submit" 
                disabled={loading || !question.trim()}
                className="absolute right-2 top-2 p-1.5 bg-brand text-white rounded-full hover:scale-105 transition disabled:bg-[#484848]/40"
               >
                 <Send size={16} />
               </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingModal;
