import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
    return rss({
        title: 'yanis legrand - veilele',
        description: 'Je partage ma veille, mes projets ect...',
        site: 'https://r32-dev.fr',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>fr</language>`,
      });
}