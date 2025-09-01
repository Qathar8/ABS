/*
  # Initial Schema for ABS Travel Website

  1. New Tables
    - `packages`
      - `id` (uuid, primary key)
      - `title_en` (text) - Package title in English
      - `title_so` (text) - Package title in Somali
      - `description_en` (text) - Package description in English
      - `description_so` (text) - Package description in Somali
      - `price` (numeric) - Package price
      - `duration` (text) - Package duration
      - `inclusions` (text[]) - What's included in the package
      - `image_url` (text) - Package image URL
      - `type` (text) - Package type (hajj or umrah)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `posts`
      - `id` (uuid, primary key)
      - `title_en` (text) - Post title in English
      - `title_so` (text) - Post title in Somali
      - `content_en` (text) - Post content in English
      - `content_so` (text) - Post content in Somali
      - `image_url` (text, optional) - Post image URL
      - `video_url` (text, optional) - Post video URL
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `testimonials`
      - `id` (uuid, primary key)
      - `name` (text) - Customer name
      - `content_en` (text) - Testimonial in English
      - `content_so` (text) - Testimonial in Somali
      - `rating` (integer) - Rating out of 5
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for authenticated admin write access
*/

-- Create packages table
CREATE TABLE IF NOT EXISTS packages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_en text NOT NULL,
  title_so text NOT NULL,
  description_en text NOT NULL,
  description_so text NOT NULL,
  price numeric NOT NULL DEFAULT 0,
  duration text NOT NULL DEFAULT '',
  inclusions text[] DEFAULT '{}',
  image_url text NOT NULL DEFAULT '',
  type text NOT NULL CHECK (type IN ('hajj', 'umrah')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_en text NOT NULL,
  title_so text NOT NULL,
  content_en text NOT NULL,
  content_so text NOT NULL,
  image_url text,
  video_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  content_en text NOT NULL,
  content_so text NOT NULL,
  rating integer NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Policies for packages
CREATE POLICY "Packages are viewable by everyone"
  ON packages
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Packages are editable by authenticated users"
  ON packages
  FOR ALL
  TO authenticated
  USING (true);

-- Policies for posts
CREATE POLICY "Posts are viewable by everyone"
  ON posts
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Posts are editable by authenticated users"
  ON posts
  FOR ALL
  TO authenticated
  USING (true);

-- Policies for testimonials
CREATE POLICY "Testimonials are viewable by everyone"
  ON testimonials
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Testimonials are editable by authenticated users"
  ON testimonials
  FOR ALL
  TO authenticated
  USING (true);

-- Insert sample data
INSERT INTO packages (title_en, title_so, description_en, description_so, price, duration, inclusions, image_url, type) VALUES
  (
    'Premium Umrah Package',
    'Xirmada Cumrada Premium',
    'Luxury Umrah experience with 5-star accommodation near Haram Sharif',
    'Khibrad Cumro raaxo leh oo leh hoy 5-xiddigood ah oo u dhow Haram Sharif',
    2500,
    '10 Days',
    ARRAY['5-Star Hotels', 'Airport Transfers', 'Ziyarat Tours', 'Group Leader', 'All Meals'],
    'https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&w=800',
    'umrah'
  ),
  (
    'Economy Umrah Package',
    'Xirmada Cumrada Dhaqaale',
    'Affordable Umrah package with comfortable accommodation',
    'Xirmad Cumro ah oo la awoodi karo oo leh hoy raaxo leh',
    1500,
    '7 Days',
    ARRAY['3-Star Hotels', 'Airport Transfers', 'Group Leader', 'Breakfast'],
    'https://images.pexels.com/photos/2233391/pexels-photo-2233391.jpeg?auto=compress&cs=tinysrgb&w=800',
    'umrah'
  ),
  (
    'Hajj Package 2025',
    'Xirmada Xajka 2025',
    'Complete Hajj package with full guidance and premium services',
    'Xirmad Xaj dhamaystiran oo leh hago buuxa iyo adeegyo heer sare ah',
    5500,
    '21 Days',
    ARRAY['4-Star Hotels', 'All Meals', 'Transportation', 'Experienced Guide', 'Medical Support'],
    'https://images.pexels.com/photos/12871775/pexels-photo-12871775.jpeg?auto=compress&cs=tinysrgb&w=800',
    'hajj'
  );

INSERT INTO posts (title_en, title_so, content_en, content_so, image_url) VALUES
  (
    'Umrah Group December 2024 - Arrival Update',
    'Kooxda Cumrada December 2024 - Warbixin Soo Gaadhista',
    'Alhamdulillah! Our December Umrah group has safely arrived in Makkah. The pilgrims are in good health and spirits. May Allah accept their worship and grant them a blessed journey.',
    'Alxamdu lillaahi! Kooxdayada Cumrada December waxay si badbaado ah ugu soo gaaddheen Makkah. Xujajku waxay ku jiraan caafimaad iyo ruux fiican. Eebe ha aqbalo cibaadooda hana siiyo safar barako leh.',
    'https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&w=800'
  ),
  (
    'Hajj 2024 Completion - Alhamdulillah',
    'Xajka 2024 Dhammaadkiisa - Alxamdu lillaahi',
    'Our Hajj pilgrims have successfully completed their pilgrimage. We are proud to announce that all 45 pilgrims have returned home safely with accepted Hajj, InshaAllah. May Allah reward them abundantly.',
    'Xujajkeenna Xajku si guul leh ayey u dhammeeyeen safarkooda. Waxaan ku faanaa in dhammaan 45-ka xujaaj ay si badbaado ah ugu soo laabtreen guriga iyagoo leh Xaj la aqbalay, Inshaa Allaah. Eebe ha ka abaalgudo si ballaaran.',
    'https://images.pexels.com/photos/8761418/pexels-photo-8761418.jpeg?auto=compress&cs=tinysrgb&w=800'
  );

INSERT INTO testimonials (name, content_en, content_so, rating) VALUES
  (
    'Ahmed Mohamed',
    'ABS Travel made my Umrah journey unforgettable. The service was exceptional and the guidance was perfect. I highly recommend them to anyone planning their pilgrimage.',
    'ABS Travel safarkayga Cumrada ma illoobi karo ayey ka dhigtay. Adeeggu wuxuu ahaa mid heer sare ah, hagitaankuna wuu kamali ahaa. Aad baan ugu talinayaa qof kasta oo qorsheynaya safarkooda xujaajnimada.',
    5
  ),
  (
    'Fatima Hassan',
    'Professional service from start to finish. The hotels were excellent and the transportation was very comfortable. May Allah bless the ABS Travel team.',
    'Adeeg xirfad leh tan iyo bilowga ilaa dhammaadka. Hoteeladu waxay ahaayeen kuwo heer sare ah, gaadiidkuna aad buu u raaxo badnaa. Eebe ha barakeeyo kooxda ABS Travel.',
    5
  ),
  (
    'Omar Ali',
    'The best Hajj experience I could have asked for. ABS Travel took care of everything perfectly. The group leader was knowledgeable and caring.',
    'Khibradda Xajka ugu fiican oo aan codsadi karay. ABS Travel wax walba si fiican ayey u qabtay. Hogaamiyaha kooxdu wuxuu ahaa mid aqoon badan oo dano badan.',
    5
  );