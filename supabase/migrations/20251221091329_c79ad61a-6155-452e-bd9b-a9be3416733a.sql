-- Create coding_stats table to store historical data
CREATE TABLE public.coding_stats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  platform TEXT NOT NULL,
  username TEXT NOT NULL,
  total_solved INTEGER DEFAULT 0,
  easy_solved INTEGER DEFAULT 0,
  medium_solved INTEGER DEFAULT 0,
  hard_solved INTEGER DEFAULT 0,
  rating INTEGER DEFAULT 0,
  ranking INTEGER DEFAULT 0,
  badges INTEGER DEFAULT 0,
  streak INTEGER DEFAULT 0,
  score INTEGER DEFAULT 0,
  additional_data JSONB DEFAULT '{}',
  fetched_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for efficient querying
CREATE INDEX idx_coding_stats_platform ON public.coding_stats(platform);
CREATE INDEX idx_coding_stats_fetched_at ON public.coding_stats(fetched_at DESC);

-- Enable RLS but allow public read access (this is public portfolio data)
ALTER TABLE public.coding_stats ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read coding stats (public portfolio)
CREATE POLICY "Anyone can view coding stats"
ON public.coding_stats
FOR SELECT
USING (true);

-- Allow edge functions to insert/update via service role
CREATE POLICY "Service role can insert stats"
ON public.coding_stats
FOR INSERT
WITH CHECK (true);

-- Enable realtime for live updates
ALTER PUBLICATION supabase_realtime ADD TABLE public.coding_stats;