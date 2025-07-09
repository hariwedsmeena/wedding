import React from 'react';
import { MapPin, Navigation, ExternalLink, X } from 'lucide-react';

interface MapSectionProps {
  onClose: () => void;
}

const MapSection: React.FC<MapSectionProps> = ({ onClose }) => {
  const venueDetails = {
    name: 'Sri Parasakthi Amman Temple',
    address: 'Kluang, Johor, Malaysia',
    googleMapsUrl: 'https://www.google.com/maps/place/Sri+Parasakthi+Amman+Temple+Kluang,+Johor/@2.0160971,103.3199787,17z/data=!3m1!4b1!4m6!3m5!1s0x31d06dd149f7da4f:0x76cb5d63409b4539!8m2!3d2.0160971!4d103.3199787!16s%2Fg%2F11b6htvkwc?entry=tts&g_ep=EgoyMDI1MDQxNi4xIPu8ASoASAFQAw%3D%3D&skid=70905c01-5fd7-4323-b384-bfaa1e9512ab',
    wazeUrl: 'https://www.waze.com/live-map/directions/my/johor-darul-tazim/kluang/sri-parasakthi-amman-temple-kluang,-johor?navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location&to=place.ChIJT9r3SdFt0DEROUWbQGNdy3Y'
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-serif font-bold text-gray-800">
          Venue Location
        </h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-center mb-4">
          <MapPin className="w-6 h-6 text-gold-600 mr-2" />
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              {venueDetails.name}
            </h3>
            <p className="text-gray-600">{venueDetails.address}</p>
          </div>
        </div>
      </div>

      {/* OpenStreetMap Embed */}
      <div className="mb-6">
        <div className="bg-gray-100 rounded-2xl p-4">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=103.315%2C2.010%2C103.325%2C2.020&layer=mapnik&marker=2.0160971%2C103.3199787"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
            title="Venue Location"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="grid md:grid-cols-2 gap-4">
        <a
          href={venueDetails.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <Navigation className="w-5 h-5 mr-2" />
          Open in Google Maps
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
        
        <a
          href={venueDetails.wazeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <Navigation className="w-5 h-5 mr-2" />
          Open in Waze
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
      
      <div className="mt-6 text-center text-gray-600">
        <p className="text-sm">
          Click on the buttons above to get directions to the venue using your preferred navigation app.
        </p>
      </div>
    </div>
  );
};

export default MapSection;