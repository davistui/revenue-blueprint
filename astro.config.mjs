// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

// https://astro.build/config
export default defineConfig({
  site: 'https://blueprint.davistui.com',
  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],
      title: 'The Revenue Blueprint',
      description:
        'A give-away sales course for technical founders: how to build a repeatable commercial system and sell into tech organisations.',
      social: [
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/davistui/' },
        { icon: 'open-book', label: 'davistui.com', href: 'https://davistui.com' },
      ],
      sidebar: [
        { label: 'Start here', link: '/' },
        {
          label: 'Introduction',
          items: [
            { label: 'Why Sales?', link: '/why-sales/' },
            { label: 'How to Use This Guide', link: '/how-to-use/' },
          ],
        },
        {
          label: 'The Blueprint',
          items: [
            { label: 'Why Do Organisations Buy?', link: '/why-organisations-buy/' },
            { label: 'What Do You Sell?', link: '/what-you-sell/' },
            { label: 'How Do You Sell?', link: '/how-you-sell/' },
          ],
        },
        { label: 'Putting It Together', link: '/putting-it-together/' },
        { label: 'Work With Me', link: '/work-with-me/' },
      ],
    }),
  ],
});
