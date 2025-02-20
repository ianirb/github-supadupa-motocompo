/*
  # Create newsletter subscribers table

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `status` (text)
      - `subscription_source` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `newsletter_subscribers` table
    - Add policy for authenticated users to read all subscribers
    - Add policy for anon and authenticated users to insert new subscribers
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  status text NOT NULL DEFAULT 'active',
  subscription_source text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to read all subscribers
CREATE POLICY "Authenticated users can read all subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow anyone to insert new subscribers
CREATE POLICY "Anyone can insert new subscribers"
  ON newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);