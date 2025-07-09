import React, { useState } from 'react';
import { ArrowLeft, Heart, Clock, MapPin, Calendar, Users, Gift, Phone, MessageCircle } from 'lucide-react';
import Timeline from './Timeline';
import RSVPForm from './RSVPForm';
import GiftModal from './GiftModal';
import MapSection from './MapSection';
import ContactSection from './ContactSection';
import GreetingCard from './GreetingCard';

interface WeddingCardProps {
  onBackToIntro: () => void;
}

const WeddingCard: React.FC<WeddingCardProps> = ({ onBackToIntro }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showGiftModal, setShowGiftModal] = useState(false);

  const sections = [
    { id: 'rsvp', label: 'RSVP', icon: Users },
    { id: 'gift', label: 'Send E-Gift', icon: Gift },
    { id: 'map', label: 'Map', icon: MapPin },
    { id: 'contact', label: 'Contact Us', icon: Phone },
    { id: 'greeting', label: 'Leave Greeting', icon: MessageCircle },
  ];

  const handleSectionClick = (sectionId: string) => {
    if (sectionId === 'gift') {
      setShowGiftModal(true);
    } else {
      setActiveModal(sectionId);
    }
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-gold-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={onBackToIntro}
            className="mb-4 flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Introduction
          </button>
          
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gold-400 w-16"></div>
              <Heart className="w-6 h-6 mx-4 text-rose-400" />
              <div className="h-px bg-gold-400 w-16"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
              Hari & Meena
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Together with our families, we cordially invite you to celebrate our wedding
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center">
                <Calendar className="w-6 h-6 text-gold-600 mr-2" />
                <div>
                  <p className="font-semibold text-gray-800">Date</p>
                  <p className="text-gray-600">24 January 2026</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-6 h-6 text-gold-600 mr-2" />
                <div>
                  <p className="font-semibold text-gray-800">Time</p>
                  <p className="text-gray-600">7:30 AM - 1:00 PM</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 text-gold-600 mr-2" />
                <div>
                  <p className="font-semibold text-gray-800">Venue</p>
                  <p className="text-gray-600">Sri Parasakthi Amman Temple</p>
                  <p className="text-gray-600">Kluang, Johor</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <Timeline />

        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className="p-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 bg-white text-gray-700 hover:bg-gold-50"
              >
                <Icon className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm font-medium">{section.label}</p>
              </button>
            );
          })}
        </div>


        {/* Modals */}
        {showGiftModal && (
          <GiftModal onClose={() => setShowGiftModal(false)} />
        )}
        
        {activeModal === 'rsvp' && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <RSVPForm onClose={handleCloseModal} />
              </div>
            </div>
          </div>
        )}
        
        {activeModal === 'map' && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <MapSection onClose={handleCloseModal} />
              </div>
            </div>
          </div>
        )}
        
        {activeModal === 'contact' && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <ContactSection onClose={handleCloseModal} />
              </div>
            </div>
          </div>
        )}
        
        {activeModal === 'greeting' && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <GreetingCard onClose={handleCloseModal} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeddingCard;