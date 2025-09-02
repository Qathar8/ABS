import React, { useEffect, useState } from 'react';
import { Clock, Users, Star, CheckCircle } from 'lucide-react';
import { Package } from '../types';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';

const Packages = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const { data, error } = await supabase
        .from('packages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPackages(data || []);
    } catch (error) {
      console.error('Error fetching packages:', error);
      // Fallback to sample data
      setPackages(samplePackages);
    } finally {
      setLoading(false);
    }
  };

  const samplePackages: Package[] = [
    {
      id: '1',
      title_en: 'Premium Umrah Package',
      title_so: 'Xirmada Cumrada Premium',
      description_en: 'Luxury Umrah experience with 5-star accommodation',
      description_so: 'Khibrad Cumro raaxo leh oo leh hoy 5-xiddigood ah',
      price: 2500,
      duration: '10 Days',
      inclusions: ['5-Star Hotels', 'Airport Transfers', 'Ziyarat Tours', 'Group Leader'],
      image_url: '/P2.jpeg',
      type: 'umrah',
      created_at: new Date().toISOString()
    },
    {
      id: '2',
      title_en: 'Economy Umrah Package',
      title_so: 'Xirmada Cumrada Dhaqaale',
      description_en: 'Affordable Umrah package with comfortable accommodation',
      description_so: 'Xirmad Cumro ah oo la awoodi karo oo leh hoy raaxo leh',
      price: 1500,
      duration: '7 Days',
      inclusions: ['3-Star Hotels', 'Airport Transfers', 'Group Leader'],
      image_url: '/PACKAGE.jpeg',
      type: 'umrah',
      created_at: new Date().toISOString()
    },
    {
      id: '3',
      title_en: 'Hajj Package 2025',
      title_so: 'Xirmada Xajka 2025',
      description_en: 'Complete Hajj package with full guidance',
      description_so: 'Xirmad Xaj dhamaystiran oo leh hago buuxa',
      price: 5500,
      duration: '21 Days',
      inclusions: ['4-Star Hotels', 'All Meals', 'Transportation', 'Experienced Guide'],
      image_url: 'https://images.pexels.com/photos/12871775/pexels-photo-12871775.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'hajj',
      created_at: new Date().toISOString()
    }
  ];

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading packages...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('packagesTitle')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image_url}
                  alt={language === 'en' ? pkg.title_en : pkg.title_so}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {pkg.type.toUpperCase()}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'en' ? pkg.title_en : pkg.title_so}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {language === 'en' ? pkg.description_en : pkg.description_so}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    ${pkg.price.toLocaleString()}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {pkg.inclusions.slice(0, 3).map((inclusion, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">{inclusion}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  {t('viewDetails')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;