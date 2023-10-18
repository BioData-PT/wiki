import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'BioData.pt Wiki',
			logo: {
				src: './src/assets/logo.webp',
				replacesTitle: true,
			},
			editLink: {
				baseUrl: 'https://github.com/BioData-pt/wiki/edit/main/',
			},
			social: {
				github: 'https://github.com/BioData-PT',
			},
			sidebar: [
				{ label: 'Home', link: '/' },
				{ label: 'New page', link: 'https://github.com/BioData-pt/wiki/new/main/src/content/docs?filename=CHANGE-ME.md&value=---%0Atitle%3A+Type+title+here%0Adescription%3A+Insert+short+description+here%0A---%0A%0AInsert+wiki+content+here+and+do+not+forget+to+change+the+name+of+the+file' },
				{
					label: 'Internal Systems',
					autogenerate: { directory: 'internal-systems' },
				},
			],
		}),
	],
});
