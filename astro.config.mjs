// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://lc-contentlib.github.io",
	integrations: [
		starlight({
			title: "ContentLib",
			logo: {
				src: './public/favicon.svg',
			},
			social: {
				github: "https://github.com/lc-contentlib",
			},
			editLink: {
				baseUrl: "https://github.com/lc-contentlib/lc-contentlib.github.io/edit/main/"
			},
			sidebar: [
				{
					label: "Getting Started",
					autogenerate: { directory: "getting-started" },
				},
				{
					label: "API",
					autogenerate: { directory: "api" },
				},
				{
					label: "Modding Guidance",
					autogenerate: { directory: "modding-guidance" },
				},
				{
					label: "Contributing",
					autogenerate: { directory: "contributing" },
				},
			],
		}),
	],
});
