-- STEP 5: Grant permissions
-- Run this LAST (after all previous steps)

GRANT INSERT ON public.contacts TO anon;
GRANT INSERT ON public.contacts TO authenticated;
GRANT SELECT ON public.contacts TO service_role;
GRANT SELECT ON public.contacts TO authenticated;
