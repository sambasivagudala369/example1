import React, { useState, useEffect } from 'react';
import { Moon, Sun, Heart } from 'lucide-react';
import FallingHearts from './components/FallingHearts';
import LoveStage from './components/LoveStage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  const loveStages = [
    {
      title: "First Sight",
      content: "The moment I saw you, time stood still. Your smile lit up the room, and I knew my life would never be the same. That magical first encounter marked the beginning of our beautiful journey together.",
      image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80&w=3096&ixlib=rb-4.0.3"
    },
    {
      title: "Attraction",
      content: "Every little thing about you drew me in - your laugh, your kindness, your spirit. The way you see the world, the way you care for others, it all made my heart skip a beat.",
      image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3"
    },
    {
      title: "Romance",
      content: "Our dates, our adventures, our quiet moments together - each one more precious than gold. Every second spent with you feels like a beautiful dream I never want to wake up from.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3"
    },
    {
      title: "Intimacy",
      content: "You've become my confidant, my best friend, my everything. The trust we've built, the understanding we share - it's rare and precious. You know me better than anyone else.",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=3269&ixlib=rb-4.0.3"
    },
    {
      title: "Commitment",
      content: "Today, on this special Valentine's Day, I want to tell you that you're the one. My heart is yours, completely and forever. Will you continue this beautiful journey with me?",
      image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80&w=3096&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-rose-50 text-gray-900'}`}>
      <FallingHearts />
      
      <nav className="fixed top-0 w-full bg-opacity-90 backdrop-blur-sm z-50 p-4 flex items-center justify-between">
        <div className="flex gap-4">
          {loveStages.map((stage, index) => (
            <button
              key={index}
              onClick={() => setActiveStage(index)}
              className={`px-4 py-2 rounded-full transition-all duration-300
                ${activeStage === index 
                  ? (darkMode 
                    ? 'bg-pink-600 text-white shadow-[0_0_15px_rgba(236,72,153,0.5)]' 
                    : 'bg-pink-400 text-white shadow-[0_0_15px_rgba(244,114,182,0.5)]')
                  : (darkMode 
                    ? 'text-gray-300 hover:bg-gray-800' 
                    : 'text-gray-700 hover:bg-pink-100')}
                font-medium`}
            >
              {stage.title}
            </button>
          ))}
        </div>
        
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full transition-all duration-300 ${
            darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-rose-100 text-gray-700'
          }`}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </nav>

      <main className="pt-24 pb-12 px-4">
        <LoveStage 
          stage={loveStages[activeStage]} 
          darkMode={darkMode}
        />
      </main>
    </div>
  );
}

export default App;