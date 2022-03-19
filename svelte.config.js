import path from 'path';
import vercel from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

const preprocess = sveltePreprocess({
  scss: {
    includePaths: ['src'],
  },
  postcss: {
    plugins: [autoprefixer],
    configFilePath: 'postcss.config.js',
  }
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess,

  kit: {
    adapter: vercel(),
    vite: {
      resolve: {
        alias: {
          "src": path.resolve("./src"),
        },
      },
    },
  },
};

export default config;
