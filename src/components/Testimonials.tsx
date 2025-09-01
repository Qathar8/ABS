import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t, language } = useLanguage();

  const testimonials = [
    {
      name: 'Ahmed Mohamed',
      content_en: 'ABS Travel made my Umrah journey unforgettable. The service was exceptional and the guidance was perfect.',
      content_so: 'ABS Travel safarkayga Cumrada ma illoobi karo ayey ka dhigtay. Adeeggu wuxuu ahaa mid heer sare ah, hagitaankuna wuu kamali ahaa.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Fatima Hassan',
      content_en: 'Professional service from start to finish. The hotels were excellent and the transportation was very comfortable.',
      content_so: 'Adeeg xirfad leh tan iyo bilowga ilaa dhammaadka. Hoteeladu waxay ahaayeen kuwo heer sare ah, gaadiidkuna aad buu u raaxo badnaa.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Omar Ali',
      content_en: 'The best Hajj experience I could have asked for. ABS Travel took care of everything perfectly.',
      content_so: 'Khibradda Xajka ugu fiican oo aan codsadi karay. ABS Travel wax walba si fiican ayey u qabtay.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('testimonialsTitle')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative group"
            >
              <Quote className="h-8 w-8 text-blue-600 mb-4 opacity-50" />
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {language === 'en' ? testimonial.content_en : testimonial.content_so}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;