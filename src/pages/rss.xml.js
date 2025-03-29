import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Parole & Musica | pensieri campionati',
    description: 'Una specie di blog. Parole povere, flash innocui e pezzi di vita incapaci di ingoiare pezzi di musica, a cui manca il finale.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>it-it</language>`,
  });
}