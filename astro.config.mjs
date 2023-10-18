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
				baseUrl: 'https://github.com/BioData-pt/wiki/edit/main/docs/',
			},
			social: {
				github: 'https://github.com/BioData-PT',
			},
			sidebar: [
				{label: 'Home', link:'/'},
				{
					label: 'Internal Systems',
					autogenerate: {directory: 'internal-systems'},
				},
			],
		}),
	],
});
