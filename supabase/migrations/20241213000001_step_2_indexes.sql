-- STEP 2: Create indexes for performance
-- Run this AFTER Step 1

CREATE INDEX IF NOT EXISTS idx_contacts_email ON public.contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_company_name ON public.contacts(company_name);
