import React from 'react';
import Services from '../components/Services';
import { useLanguage } from '../contexts/LanguageContext';

const ServicesPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('servicesTitle')}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive Islamic travel services designed to make your pilgrimage experience seamless and memorable
          </p>
        </div>
      </section>

      <Services />

      {/* Additional Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🕋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sacred Journey</h3>
              <p className="text-gray-600">We understand the spiritual significance of your pilgrimage and ensure every detail supports your religious obligations.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">All our services meet the highest standards of quality and comfort to ensure your complete satisfaction.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">Our dedicated team is available round the clock to assist you throughout your journey.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;