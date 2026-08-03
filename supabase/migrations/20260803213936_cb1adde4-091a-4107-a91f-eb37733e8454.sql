-- Public read for the public article-images bucket
CREATE POLICY "Public can read article images"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (bucket_id = 'article-images');

-- Only the service role may write/modify/delete storage objects
CREATE POLICY "Service role can insert objects"
ON storage.objects
FOR INSERT
TO service_role
WITH CHECK (true);

CREATE POLICY "Service role can update objects"
ON storage.objects
FOR UPDATE
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "Service role can delete objects"
ON storage.objects
FOR DELETE
TO service_role
USING (true);