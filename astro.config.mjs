// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://lc-contentlib.github.io",
	integrations: [
		starlight({
			title: "My Docs",
			social: {
				github: "https://github.com/withastro/starlight",
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
