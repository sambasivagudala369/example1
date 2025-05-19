import React from 'react';
import { Heart } from 'lucide-react';

interface LoveStageProps {
  stage: {
    title: string;
    content: string;
    image: string;
  };
  darkMode: boolean;
}

const LoveStage: React.FC<LoveStageProps> = ({ stage, darkMode }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${
        darkMode ? 'bg-gray-800 shadow-pink-900/20' : 'bg-white shadow-pink-200'
      }`}>
        <div className="relative h-96">
          <img
            src={stage.image}
            alt={stage.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8">
              <h2 className="text-4xl font-bold text-white flex items-center gap-2">
                {stage.title}
                <Heart className="text-pink-400" fill="currentColor" />
              </h2>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <p className={`text-xl leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {stage.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoveStage;