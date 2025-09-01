import React from 'react';
import { 
  MapPin, 
  Plane, 
  Building, 
  FileText, 
  Bus, 
  DollarSign, 
  Globe, 
  Calendar 
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: MapPin,
      title_en: 'Hajj & Umrah Services',
      title_so: 'Adeegga Xajka iyo Cumrada',
      description_en: 'Complete pilgrimage packages with expert guidance',
      description_so: 'Xirmooyin dhamaystiran oo leh hago takhasuus ah'
    },
    {
      icon: Building,
      title_en: 'Makkah & Madina Hotels',
      title_so: 'Hotelada Makkah iyo Madina',
      description_en: 'Premium accommodation near holy sites',
      description_so: 'Hoy heer sare ah oo u dhow meelaha barakeysan'
    },
    {
      icon: Plane,
      title_en: 'Local & International Ticketing',
      title_so: 'Tikidho Gudaha iyo Dibadda',
      description_en: 'Affordable flight tickets worldwide',
      description_so: 'Tikidho diyaaradeed oo qiimo jaban oo caalami ah'
    },
    {
      icon: FileText,
      title_en: 'Umrah Visas',
      title_so: 'Viisoyinka Cumrada',
      description_en: 'Fast visa processing and documentation',
      description_so: 'Habaynta degdeg ah ee viisada iyo dukumentiyada'
    },
    {
      icon: Bus,
      title_en: 'Makkah & Madina Transport',
      title_so: 'Basaska Makkah iyo Madina',
      description_en: 'Comfortable transportation between holy cities',
      description_so: 'Gaadiid raaxo leh oo u dhexeeya magaalooyinka barakeysan'
    },
    {
      icon: DollarSign,
      title_en: 'Affordable Tickets',
      title_so: 'Tikidho Qiimo Jaban',
      description_en: 'Best prices for your travel needs',
      description_so: 'Qiimaha ugu fiican ee baahiyahaaga safarka'
    },
    {
      icon: Globe,
      title_en: 'Kenya Entry Visas',
      title_so: 'Viisoyinka Dal Ku Galka Kenya',
      description_en: 'Assistance with Kenya visa applications',
      description_so: 'Caawimaad viisada Kenya ee codsashada'
    },
    {
      icon: Calendar,
      title_en: 'Monthly Umrah Packages',
      title_so: 'Xirmooyin Cumro Bil Walba',
      description_en: 'Flexible monthly pilgrimage options',
      description_so: 'Ikhtiyaarooyin macquul ah oo bil walba ah'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('servicesTitle')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {language === 'en' ? service.title_en : service.title_so}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {language === 'en' ? service.description_en : service.description_so}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;