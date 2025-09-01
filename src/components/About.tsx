import React from 'react';
import { Shield, Users, Award, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: 'Licensed & Trusted',
      description: 'Fully licensed travel agency with government certification'
    },
    {
      icon: Users,
      title: '1000+ Pilgrims',
      description: 'Successfully served over 1000 satisfied pilgrims'
    },
    {
      icon: Award,
      title: '10+ Years Experience',
      description: 'Decade of expertise in Hajj and Umrah services'
    },
    {
      icon: Heart,
      title: 'Care & Compassion',
      description: 'Dedicated to making your spiritual journey meaningful'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('aboutText')}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8761418/pexels-photo-8761418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pilgrims at Kaaba"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-sm text-gray-600">Happy Pilgrims</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;