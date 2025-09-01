import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Post } from '../types';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';

const GroupsUpdates = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      // Fallback to sample data
      setPosts(samplePosts);
    } finally {
      setLoading(false);
    }
  };

  const samplePosts: Post[] = [
    {
      id: '1',
      title_en: 'Umrah Group December 2024 - Arrival Update',
      title_so: 'Kooxda Cumrada December 2024 - Warbixin Soo Gaadhista',
      content_en: 'Alhamdulillah! Our December Umrah group has safely arrived in Makkah. The pilgrims are in good health and spirits. May Allah accept their worship.',
      content_so: 'Alxamdu lillaahi! Kooxdayada Cumrada December waxay si badbaado ah ugu soo gaaddheen Makkah. Xujajku waxay ku jiraan caafimaad iyo ruux fiican. Eebe ha aqbalo cibaadooda.',
      image_url: 'https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&w=800',
      created_at: '2024-12-15T10:30:00Z'
    },
    {
      id: '2',
      title_en: 'Hajj 2024 Completion - Alhamdulillah',
      title_so: 'Xajka 2024 Dhammaadkiisa - Alxamdu lillaahi',
      content_en: 'Our Hajj pilgrims have successfully completed their pilgrimage. We are proud to announce that all 45 pilgrims have returned home safely with accepted Hajj, InshaAllah.',
      content_so: 'Xujajkeenna Xajku si guul leh ayey u dhammeeyeen safarkooda. Waxaan ku faanaa in dhammaan 45-ka xujaaj ay si badbaado ah ugu soo laabtreen guriga iyagoo leh Xaj la aqbalay, Inshaa Allaah.',
      image_url: 'https://images.pexels.com/photos/8761418/pexels-photo-8761418.jpeg?auto=compress&cs=tinysrgb&w=800',
      created_at: '2024-07-20T14:15:00Z'
    }
  ];

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading updates...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('groupsUpdates')}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with our pilgrimage groups and their spiritual journeys
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Updates Yet</h3>
              <p className="text-gray-500">Check back soon for updates from our pilgrimage groups.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {post.image_url && (
                    <div className="h-64 overflow-hidden">
                      <img
                        src={post.image_url}
                        alt={language === 'en' ? post.title_en : post.title_so}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>Makkah, Saudi Arabia</span>
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {language === 'en' ? post.title_en : post.title_so}
                    </h2>

                    <div className="text-gray-700 leading-relaxed">
                      {language === 'en' ? post.content_en : post.content_so}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GroupsUpdates;