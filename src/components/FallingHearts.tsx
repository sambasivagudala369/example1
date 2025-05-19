import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface HeartProps {
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
}

const FallingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<HeartProps[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const heart: HeartProps = {
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 4,
        size: 16 + Math.random() * 16,
        delay: Math.random() * 5
      };
      setHearts(prev => [...prev, heart]);
    };

    // Create initial hearts
    for (let i = 0; i < 20; i++) {
      createHeart();
    }

    const interval = setInterval(() => {
      setHearts(prev => {
        if (prev.length > 30) {
          return prev.slice(1);
        }
        return prev;
      });
      createHeart();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart, index) => (
        <div
          key={index}
          className="absolute animate-float text-pink-400 opacity-50"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}px`
          }}
        >
          <Heart fill="currentColor" />
        </div>
      ))}
    </div>
  );
};

export default FallingHearts;