import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Automatically determine base path:
// - Locally: defaults to '/'
// - GitHub Actions: inspects GITHUB_REPOSITORY (e.g. 'owner/repository-name')
//   - If repository is '<username>.github.io', base is '/'
//   - If a custom domain is configured (CUSTOM_DOMAIN=true or BASE_PATH='/'), base is '/'
//   - Otherwise, base is '/<repository-name>/'
function getBasePath(): string {
  if (process.env.BASE_PATH) {
    return process.env.BASE_PATH.endsWith('/') ? process.env.BASE_PATH : `${process.env.BASE_PATH}/`;
  }
  if (process.env.BASE_URL) {
    return process.env.BASE_URL.endsWith('/') ? process.env.BASE_URL : `${process.env.BASE_URL}/`;
  }
  if (process.env.CUSTOM_DOMAIN === 'true' || process.env.GITHUB_PAGES_CUSTOM_DOMAIN === 'true') {
    return '/';
  }
  if (process.env.GITHUB_REPOSITORY) {
    const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
    if (repo && (repo.toLowerCase().endsWith('.github.io') || repo.toLowerCase().endsWith('.github.com'))) {
      return '/';
    }
    return repo ? `/${repo}/` : '/';
  }
  return '/';
}

// Generates 404.html from index.html for smooth client-side refreshes on GitHub Pages
function githubPagesSpaPlugin() {
  return {
    name: 'github-pages-spa',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');
      const notFoundPath = path.join(distDir, '404.html');
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath);
      }
    },
  };
}

export default defineConfig(() => {
  return {
    base: getBasePath(),
    plugins: [react(), tailwindcss(), githubPagesSpaPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

