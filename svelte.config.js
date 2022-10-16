import path from 'path';
import adapter from '@sveltejs/adapter-static';
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
    adapter: adapter({
      fallback: "index.html",
      precompress: true,
    }),
    prerender: {
      default: true,
    },
    vite: {
      resolve: {
        alias: {
          "src": path.resolve("./src"),
        },
      },
      build: {
        minify: 'terser',
      },
    },
  },
};

export default config;
