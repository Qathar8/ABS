/*
  # Add Gallery Table

  1. New Tables
    - `gallery`
      - `id` (uuid, primary key)
      - `title` (text) - Gallery item title
      - `image_url` (text) - Image URL
      - `type` (text) - Type (photo or video)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on gallery table
    - Add policies for public read access
    - Add policies for authenticated admin write access
*/

-- Create gallery table
CREATE TABLE IF NOT EXISTS gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  image_url text NOT NULL,
  type text NOT NULL CHECK (type IN ('photo', 'video')),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;

-- Policies for gallery
CREATE POLICY "Gallery items are viewable by everyone"
  ON gallery
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Gallery items are editable by authenticated users"
  ON gallery
  FOR ALL
  TO authenticated
  USING (true);

-- Insert sample gallery items
INSERT INTO gallery (title, image_url, type) VALUES
  ('Kaaba View', '/HOMEPAGE.jpeg', 'photo'),
  ('Umrah Group', '/P2.jpeg', 'photo'),
  ('Package Tour', '/PACKAGE.jpeg', 'photo'),
  ('Pilgrims at Masjid Nabawi', 'https://images.pexels.com/photos/8761418/pexels-photo-8761418.jpeg?auto=compress&cs=tinysrgb&w=800', 'photo'),
  ('Hajj Pilgrimage', 'https://images.pexels.com/photos/12871775/pexels-photo-12871775.jpeg?auto=compress&cs=tinysrgb&w=800', 'photo'),
  ('Group Prayer', 'https://images.pexels.com/photos/11375599/pexels-photo-11375599.jpeg?auto=compress&cs=tinysrgb&w=800', 'photo');