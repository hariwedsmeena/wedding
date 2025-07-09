import React, { useState } from 'react';
import IntroPage from './components/IntroPage';
import WeddingCard from './components/WeddingCard';

function App() {
  const [showCard, setShowCard] = useState(false);

  const handleOpenCard = () => {
    setShowCard(true);
  };

  const handleBackToIntro = () => {
    setShowCard(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-gold-50">
      {!showCard ? (
        <IntroPage onOpenCard={handleOpenCard} />
      ) : (
        <WeddingCard onBackToIntro={handleBackToIntro} />
      )}
    </div>
  );
}

export default App;