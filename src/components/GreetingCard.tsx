import React, { useState, useRef } from 'react';
import { Camera, Type, Palette, Eye, Send, Heart, Star, Flower, X } from 'lucide-react';

interface GreetingCardProps {
  onClose: () => void;
}

const GreetingCard: React.FC<GreetingCardProps> = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState('template1');
  const [selectedFont, setSelectedFont] = useState('font-serif');
  const [message, setMessage] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [guestName, setGuestName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const templates = [
    { id: 'template1', name: 'Rose Gold', class: 'bg-gradient-to-br from-rose-100 to-gold-100' },
    { id: 'template2', name: 'Elegant White', class: 'bg-gradient-to-br from-white to-gray-100' },
    { id: 'template3', name: 'Floral Pink', class: 'bg-gradient-to-br from-pink-100 to-purple-100' },
    { id: 'template4', name: 'Golden Sunset', class: 'bg-gradient-to-br from-yellow-100 to-orange-100' },
  ];

  const fonts = [
    { id: 'font-serif', name: 'Elegant Serif', class: 'font-serif' },
    { id: 'font-sans', name: 'Modern Sans', class: 'font-sans' },
    { id: 'font-mono', name: 'Typewriter', class: 'font-mono' },
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the greeting to a server
    const greetingData = {
      guestName,
      message,
      template: selectedTemplate,
      font: selectedFont,
      image: selectedImage,
    };
    console.log('Greeting submitted:', greetingData);
    alert('Thank you for your greeting! It has been sent to the couple.');
  };

  const PreviewCard = () => {
    const template = templates.find(t => t.id === selectedTemplate);
    const font = fonts.find(f => f.id === selectedFont);
    
    return (
      <div className={`${template?.class} p-8 rounded-3xl shadow-xl max-w-md mx-auto`}>
        <div className="text-center mb-6">
          <Heart className="w-8 h-8 text-rose-500 mx-auto mb-4" />
          <h3 className={`text-2xl font-bold text-gray-800 mb-2 ${font?.class}`}>
            Congratulations Hari & Meena!
          </h3>
        </div>
        
        {selectedImage && (
          <div className="mb-6">
            <img
              src={selectedImage}
              alt="Greeting"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
          </div>
        )}
        
        <div className="bg-white bg-opacity-80 p-6 rounded-xl">
          <div className={`text-gray-800 ${font?.class} leading-relaxed`}>
            {message || 'Your message will appear here...'}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 italic">
              With love,
            </p>
            <p className={`text-lg font-semibold text-gray-800 ${font?.class}`}>
              {guestName || 'Your Name'}
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <Star className="w-6 h-6 text-gold-500 mx-1" />
          <Flower className="w-6 h-6 text-rose-500 mx-1" />
          <Star className="w-6 h-6 text-gold-500 mx-1" />
        </div>
      </div>
    );
  };

  if (showPreview) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-serif font-bold text-gray-800">
            Greeting Preview
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="text-center mb-6">
          <button
            onClick={() => setShowPreview(false)}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            ← Back to Editor
          </button>
        </div>
        
        <PreviewCard />
        
        <div className="text-center mt-8">
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 mr-4"
          >
            <Send className="w-5 h-5 inline mr-2" />
            Send Greeting
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-serif font-bold text-gray-800">
          Leave a Greeting
        </h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <div className="space-y-6">
        {/* Guest Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Camera className="w-4 h-4 inline mr-2" />
            Add Photo (Optional)
          </label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gold-400 transition-colors"
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                className="w-32 h-32 object-cover rounded-lg mx-auto"
              />
            ) : (
              <div>
                <Camera className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Click to upload a photo</p>
              </div>
            )}
          </button>
        </div>

        {/* Template Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Palette className="w-4 h-4 inline mr-2" />
            Choose Template
          </label>
          <div className="grid grid-cols-2 gap-3">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => setSelectedTemplate(template.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedTemplate === template.id
                    ? 'border-gold-500 ring-2 ring-gold-200'
                    : 'border-gray-200 hover:border-gold-300'
                }`}
              >
                <div className={`w-full h-16 rounded ${template.class} mb-2`}></div>
                <p className="text-sm font-medium text-gray-700">{template.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Font Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Type className="w-4 h-4 inline mr-2" />
            Choose Font
          </label>
          <div className="grid grid-cols-3 gap-3">
            {fonts.map((font) => (
              <button
                key={font.id}
                onClick={() => setSelectedFont(font.id)}
                className={`p-3 rounded-lg border-2 transition-all ${
                  selectedFont === font.id
                    ? 'border-gold-500 ring-2 ring-gold-200'
                    : 'border-gray-200 hover:border-gold-300'
                }`}
              >
                <p className={`text-sm ${font.class}`}>{font.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Write your congratulations and wishes for the couple..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
          />
        </div>

        {/* Preview Button */}
        <div className="text-center">
          <button
            onClick={() => setShowPreview(true)}
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Eye className="w-5 h-5 inline mr-2" />
            Preview Greeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default GreetingCard;