// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'UniAprende',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Estadística Clásica',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Conceptos Básicos',
              slug: 'estadística-clásica/conceptos-básicos',
            },
          ],
        },
        {
          label: 'Estadística Computacional',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
})
