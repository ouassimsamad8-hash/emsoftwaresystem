import { useEffect } from 'react';

type Metadata = {
  titre: string;
  description?: string;
};

export function usePageMetadata({ titre, description }: Metadata) {
  useEffect(() => {
    document.title = titre;

    if (description) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');

      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }

      meta.content = description;
    }
  }, [titre, description]);
}
