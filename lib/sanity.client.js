import {
    apiVersion,
    dataset,
    projectId,
    studioUrl,
    useCdn,
  } from 'lib/sanity.api'

  import { createClient } from 'next-sanity'
  
  export function getClient(preview) {
    const client = createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn,
        perspective: 'published',
        encodeSourceMap: preview?.token ? true : false,
        studioUrl,
    });

    if (preview) {
        if (!preview.token) {
            throw new Error('You must provide a token to preview drafts');
        }

        return client.withConfig({
            token: preview.token,
            useCdn: false,
            ignoreBrowserTokenWarning: true,
            perspective: 'previewDrafts',
        });
    }

    return client;
}

  
  export const getSanityImageConfig = () => getClient()
  
 