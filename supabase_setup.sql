-- Create quote_requests table
CREATE TABLE IF NOT EXISTS quote_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  
  -- Contact Information
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  company_name TEXT,
  email TEXT NOT NULL,
  
  -- Product & Printing Details
  product_type TEXT,
  production_quantity TEXT,
  width TEXT,
  height TEXT,
  bottom_side TEXT,
  printing_method TEXT,
  function TEXT,
  formulation TEXT,
  material TEXT,
  print_count TEXT,
  product_information TEXT,
  additional_input TEXT,
  attached_file_url TEXT,
  
  -- Production Options
  shape TEXT,
  surface TEXT
);

-- Create storage bucket for attachments
INSERT INTO storage.buckets (id, name, public)
VALUES ('quote-attachments', 'quote-attachments', true)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policies
CREATE POLICY "Anyone can upload quote attachments"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'quote-attachments');

CREATE POLICY "Anyone can view quote attachments"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'quote-attachments');

-- Enable RLS (Row Level Security)
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert quote requests
CREATE POLICY "Anyone can submit quote requests"
ON quote_requests FOR INSERT
TO public
WITH CHECK (true);

-- Create policy to allow authenticated users to view all quote requests
CREATE POLICY "Authenticated users can view quote requests"
ON quote_requests FOR SELECT
TO authenticated
USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON quote_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quote_requests_email ON quote_requests(email);
CREATE INDEX IF NOT EXISTS idx_quote_requests_company_name ON quote_requests(company_name);

-- Create contacts table for contact form submissions
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  
  -- Contact Information
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT,
  message TEXT NOT NULL
);

-- Enable RLS (Row Level Security) for contacts table
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contact messages
CREATE POLICY "Anyone can submit contact messages"
ON contacts FOR INSERT
TO public
WITH CHECK (true);

-- Create policy to allow authenticated users to view all contact messages
CREATE POLICY "Authenticated users can view contact messages"
ON contacts FOR SELECT
TO authenticated
USING (true);

-- Create indexes for contacts table
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
