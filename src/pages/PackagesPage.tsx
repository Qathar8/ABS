import React from 'react';
import Packages from '../components/Packages';
import { useLanguage } from '../contexts/LanguageContext';

const PackagesPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('packagesTitle')}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose from our carefully designed packages for your spiritual journey to the Holy Land
          </p>
        </div>
      </section>

      <Packages />

      {/* Package Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Our Packages
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✈️</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Flight Tickets</h3>
              <p className="text-gray-600">Round-trip flights with reputable airlines</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Accommodation</h3>
              <p className="text-gray-600">Comfortable hotels near Haram Sharif</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚌</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Transportation</h3>
              <p className="text-gray-600">Private bus transfers and local transport</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Experienced guides for spiritual support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;