-- Add phone column to newsletter_subscribers table
ALTER TABLE public.newsletter_subscribers 
ADD COLUMN phone TEXT;