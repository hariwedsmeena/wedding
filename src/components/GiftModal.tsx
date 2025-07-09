import React, { useState } from 'react';
import { X, Gift, Heart, QrCode } from 'lucide-react';

interface GiftModalProps {
  onClose: () => void;
}

const GiftModal: React.FC<GiftModalProps> = ({ onClose }) => {
  const [selectedRecipient, setSelectedRecipient] = useState<string | null>(null);

  const recipients = [
    { id: 'hari', name: 'Hari', color: 'blue' },
    { id: 'meena', name: 'Meena', color: 'rose' },
  ];

  const handleRecipientSelect = (recipientId: string) => {
    setSelectedRecipient(recipientId);
  };

  const handleBackToSelection = () => {
    setSelectedRecipient(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif font-bold text-gray-800">
              Send E-Gift
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {!selectedRecipient ? (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <Gift className="w-16 h-16 text-gold-600 mx-auto mb-4" />
                <p className="text-gray-600">
                  Choose who you'd like to send your gift to:
                </p>
              </div>

              {recipients.map((recipient) => (
                <button
                  key={recipient.id}
                  onClick={() => handleRecipientSelect(recipient.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    recipient.color === 'blue'
                      ? 'border-blue-200 hover:border-blue-400 hover:bg-blue-50'
                      : 'border-rose-200 hover:border-rose-400 hover:bg-rose-50'
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <Heart className={`w-6 h-6 mr-3 ${
                      recipient.color === 'blue' ? 'text-blue-500' : 'text-rose-500'
                    }`} />
                    <span className="text-lg font-semibold text-gray-800">
                      Gift to {recipient.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <button
                onClick={handleBackToSelection}
                className="mb-4 text-gray-600 hover:text-gray-800 transition-colors"
              >
                ← Back to selection
              </button>
              
              <div className="mb-6">
                <QrCode className="w-16 h-16 text-gold-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Gift for {recipients.find(r => r.id === selectedRecipient)?.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  Scan the QR code below to send your gift
                </p>
              </div>

              {/* Placeholder QR Code */}
              <div className="bg-gray-100 p-8 rounded-2xl mb-6">
                <div className="w-48 h-48 mx-auto bg-white rounded-lg shadow-inner flex items-center justify-center">
                  <div className="text-center">
                    <QrCode className="w-24 h-24 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">QR Code</p>
                    <p className="text-xs text-gray-400">
                      Bank details for {recipients.find(r => r.id === selectedRecipient)?.name}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-600 space-y-2">
                <p><strong>Bank:</strong> Example Bank</p>
                <p><strong>Account:</strong> 1234567890</p>
                <p><strong>Name:</strong> {recipients.find(r => r.id === selectedRecipient)?.name}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GiftModal;