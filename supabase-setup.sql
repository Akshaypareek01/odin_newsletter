-- Create newsletter_subscriptions table in Supabase
-- Run this SQL in your Supabase SQL editor

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email ON newsletter_subscriptions(email);

-- Enable Row Level Security (RLS) for better security
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public to insert newsletter subscriptions" ON newsletter_subscriptions;
DROP POLICY IF EXISTS "Allow public to select newsletter subscriptions" ON newsletter_subscriptions;

-- Create a policy that allows anyone (including anonymous users) to insert new subscriptions
CREATE POLICY "Allow public to insert newsletter subscriptions" ON newsletter_subscriptions
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Create a policy that allows anyone to select subscriptions (optional, for debugging)
CREATE POLICY "Allow public to select newsletter subscriptions" ON newsletter_subscriptions
  FOR SELECT TO anon, authenticated
  USING (true);
