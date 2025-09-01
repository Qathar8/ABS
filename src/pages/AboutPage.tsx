import React from 'react';
import { Shield, Users, Award, Heart, Target, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage = () => {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide exceptional Hajj and Umrah services that make the sacred journey accessible, comfortable, and spiritually fulfilling for all pilgrims.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading Islamic travel agency in East Africa, known for our integrity, excellence, and dedication to serving the Muslim community.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'We operate with Islamic principles at our core: honesty, transparency, compassion, and commitment to excellence in everything we do.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Pilgrims Served' },
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Successful Groups' },
    { number: '99%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Serving the Muslim community with dedication and excellence since our establishment
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  ABS Travel Hajj and Umrah Agency Ltd was founded with a simple yet profound mission: 
                  to make the sacred pilgrimage to the Holy Land accessible to every Muslim who desires 
                  to fulfill this fundamental pillar of Islam.
                </p>
                <p>
                  Our journey began over a decade ago when our founders, themselves pilgrims who had 
                  experienced the challenges of organizing Hajj and Umrah, decided to create a service 
                  that would eliminate the stress and uncertainty from the pilgrimage experience.
                </p>
                <p>
                  Today, we are proud to be one of Kenya's most trusted Islamic travel agencies, 
                  with a team of experienced professionals who understand both the spiritual significance 
                  and practical requirements of the pilgrimage.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8761418/pexels-photo-8761418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400`}
                    alt="Team Member"
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mohamed Hassan</h3>
                <p className="text-blue-600 font-semibold mb-3">Managing Director</p>
                <p className="text-gray-600">
                  Over 15 years of experience in Islamic travel and pilgrimage services.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;