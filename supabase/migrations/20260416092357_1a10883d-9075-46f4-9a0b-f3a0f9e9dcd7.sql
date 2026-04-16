-- Block all client-side uploads to article-images bucket
CREATE POLICY "Deny public uploads to article-images"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id != 'article-images');

-- Block all client-side updates to article-images bucket
CREATE POLICY "Deny public updates to article-images"
ON storage.objects FOR UPDATE
TO public
USING (bucket_id != 'article-images');

-- Block all client-side deletes from article-images bucket
CREATE POLICY "Deny public deletes from article-images"
ON storage.objects FOR DELETE
TO public
USING (bucket_id != 'article-images');