-- Migration: Add product_weight column to quote_requests table
-- If the table already exists, run this SQL to add the missing column

-- Check if column doesn't exist and add it
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'quote_requests' 
        AND column_name = 'product_weight'
    ) THEN
        ALTER TABLE quote_requests 
        ADD COLUMN product_weight TEXT;
        
        RAISE NOTICE 'Column product_weight added successfully';
    ELSE
        RAISE NOTICE 'Column product_weight already exists';
    END IF;
END $$;


