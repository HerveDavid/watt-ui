import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export function remarkOverview() {
	return (tree) => {
		let overview = '';

		tree.children.forEach((node, index) => {
			if (node.type === 'heading' && node.children[0].value === 'Overview') {
				overview = tree.children[index + 1].value;
			}
		});

		tree.data = { ...tree.data, overview };
	};
}

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md', '.svx'],
	remarkPlugins: [remarkOverview]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/watt-ui' : ''
		}
	}
};

export default config;
