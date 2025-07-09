import React from 'react';
import { Phone, Mail, User, Users, X } from 'lucide-react';

interface ContactSectionProps {
  onClose: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onClose }) => {
  const contacts = [
    {
      category: 'Bride\'s Family',
      people: [
        { name: 'Meena', role: 'Bride', phone: '+60 12-345-6789', email: 'meena@example.com' },
        { name: 'Mr. Raman', role: 'Father', phone: '+60 12-345-6788', email: 'raman@example.com' },
        { name: 'Mrs. Kamala', role: 'Mother', phone: '+60 12-345-6787', email: 'kamala@example.com' },
      ]
    },
    {
      category: 'Groom\'s Family',
      people: [
        { name: 'Hari', role: 'Groom', phone: '+60 12-345-6790', email: 'hari@example.com' },
        { name: 'Mr. Krishnan', role: 'Father', phone: '+60 12-345-6791', email: 'krishnan@example.com' },
        { name: 'Mrs. Sita', role: 'Mother', phone: '+60 12-345-6792', email: 'sita@example.com' },
      ]
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-serif font-bold text-gray-800">
          Contact Us
        </h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {contacts.map((group, groupIndex) => (
          <div key={groupIndex} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-gold-600" />
              {group.category}
            </h3>
            
            {group.people.map((person, personIndex) => (
              <div key={personIndex} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center mb-3">
                  <User className="w-5 h-5 text-gold-600 mr-2" />
                  <div>
                    <h4 className="font-semibold text-gray-800">{person.name}</h4>
                    <p className="text-sm text-gray-600">{person.role}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <a
                    href={`tel:${person.phone}`}
                    className="flex items-center text-gray-600 hover:text-gold-600 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {person.phone}
                  </a>
                  
                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center text-gray-600 hover:text-gold-600 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {person.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center bg-gold-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Need Help?
        </h3>
        <p className="text-gray-600">
          Feel free to reach out to any of our family members for questions about the wedding, 
          directions, or any other assistance you may need. We're here to help make your 
          experience wonderful!
        </p>
      </div>
    </div>
  );
};

export default ContactSection;