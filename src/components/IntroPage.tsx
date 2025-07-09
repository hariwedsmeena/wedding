import React from 'react';
import { Heart, Calendar } from 'lucide-react';

interface IntroPageProps {
  onOpenCard: () => void;
}

const IntroPage: React.FC<IntroPageProps> = ({ onOpenCard }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-rose-100 via-pink-50 to-gold-100">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-gold-600" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-800 mb-4">
            Save the Date
          </h1>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gold-400 w-16"></div>
            <Heart className="w-6 h-6 mx-4 text-rose-400" />
            <div className="h-px bg-gold-400 w-16"></div>
          </div>
        </div>
        
        <div className="mb-8 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-700 mb-2">
            Hari & Meena
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Are getting married
          </p>
          <p className="text-xl font-medium text-gray-800">
            24 January 2026
          </p>
        </div>

        <button
          onClick={onOpenCard}
          className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
        >
          Open Wedding Invitation
        </button>
      </div>
    </div>
  );
};

export default IntroPage;