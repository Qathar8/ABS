import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    packages: 'Packages',
    gallery: 'Gallery',
    groupsUpdates: 'Groups Updates',
    contact: 'Contact',
    admin: 'Admin',
    
    // Hero
    heroTitle: 'Your Trusted Partner for Hajj & Umrah',
    heroSubtitle: 'Experience the spiritual journey of a lifetime with our expert guidance and premium services',
    bookNow: 'Book Now',
    contactUs: 'Contact Us',
    
    // About
    aboutTitle: 'About ABS Travel',
    aboutText: 'ABS Travel Hajj and Umrah Agency Ltd is your trusted partner in organizing sacred pilgrimages to the Holy Land. With years of experience and deep understanding of Islamic traditions, we ensure every aspect of your spiritual journey is handled with care and professionalism.',
    
    // Services
    servicesTitle: 'Our Services',
    hajjUmrahService: 'Hajj & Umrah Services',
    makkahMadinaHotels: 'Makkah & Madina Hotels',
    ticketing: 'Local & International Ticketing',
    umrahVisas: 'Umrah Visas',
    transport: 'Makkah & Madina Transport',
    affordableTickets: 'Affordable Tickets',
    kenyaVisas: 'Kenya Entry Visas',
    monthlyPackages: 'Monthly Umrah Packages',
    
    // Packages
    packagesTitle: 'Hajj & Umrah Packages',
    viewDetails: 'View Details',
    
    // Testimonials
    testimonialsTitle: 'What Our Pilgrims Say',
    
    // Contact
    contactTitle: 'Contact Us',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    whatsapp: 'WhatsApp',
    
    // Footer
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved',
    
    // Admin
    adminLogin: 'Admin Login',
    managePackages: 'Manage Packages',
    managePosts: 'Manage Posts',
    addNew: 'Add New',
    edit: 'Edit',
    delete: 'Delete',
    save: 'Save',
    cancel: 'Cancel',
  },
  so: {
    // Navigation
    home: 'Hoyga',
    about: 'Naga',
    services: 'Adeegyada',
    packages: 'Xirmooyin',
    gallery: 'Sawirada',
    groupsUpdates: 'Wararka Kooxaha',
    contact: 'Xiriir',
    admin: 'Maamule',
    
    // Hero
    heroTitle: 'Shariigaaga Aaminsan ee Xajka iyo Cumrada',
    heroSubtitle: 'La kulaan safarka ruuxiga ah ee nolosha oo aan ku haginayo khibradda iyo adeegyada heer sare ah',
    bookNow: 'Boos Hadda',
    contactUs: 'Nala Soo Xiriir',
    
    // About
    aboutTitle: 'Naga ABS Travel',
    aboutText: 'ABS Travel Hajj iyo Umrah Agency Ltd waa shariigaaga aaminsan ee habaynta safarka ruuxiga ah ee Dhulka Barakeysan. Sanado khibrad ah iyo faham qoto dheer oo ku saabsan dhaqanka Islaamka ayaan ku hubineynaa in dhinac kasta oo safarkaaga ruuxiga ah loo maareeyo si taxadar iyo xirfad leh.',
    
    // Services
    servicesTitle: 'Adeegyadayada',
    hajjUmrahService: 'Adeegga Xajka iyo Cumrada',
    makkahMadinaHotels: 'Hotelada Makkah iyo Madina',
    ticketing: 'Tikidho Gudaha iyo Dibadda',
    umrahVisas: 'Viisoyinka Cumrada',
    transport: 'Gaadiidka Makkah iyo Madina',
    affordableTickets: 'Tikidho Qiimo Jaban',
    kenyaVisas: 'Viisoyinka Dal Ku Galka Kenya',
    monthlyPackages: 'Xirmooyin Cumro Bil Walba',
    
    // Packages
    packagesTitle: 'Xirmooyin Xajka iyo Cumrada',
    viewDetails: 'Eeg Faahfaahinta',
    
    // Testimonials
    testimonialsTitle: 'Waxa Sheegaan Dadka Xajka Tegay',
    
    // Contact
    contactTitle: 'Nala Soo Xiriir',
    address: 'Cinwaanka',
    phone: 'Telefoonka',
    email: 'Boostada',
    whatsapp: 'WhatsApp',
    
    // Footer
    quickLinks: 'Xiriirro Degdeg Ah',
    followUs: 'Na Raac',
    allRightsReserved: 'Dhammaan xuquuqda way xifdhan yihiin',
    
    // Admin
    adminLogin: 'Galitaanka Maamulaha',
    managePackages: 'Maamul Xirmooyin',
    managePosts: 'Maamul Boostooyin',
    addNew: 'Ku Dar Cusub',
    edit: 'Wax Ka Beddel',
    delete: 'Tirtir',
    save: 'Kaydi',
    cancel: 'Jooji',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};