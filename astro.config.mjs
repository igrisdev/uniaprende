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
          autogenerate: { directory: 'estadística-clásica' },
        },
        {
          label: 'Estadística Clásica 2do Formato',
          autogenerate: { directory: 'estadística-clásica2' },
        },
        {
          label: 'Estadística Computacional',
          autogenerate: { directory: 'estadística-clásica' },
        },
        {
          label: 'Recursos Educativos',
          autogenerate: { directory: 'estadística-clásica' },
        },
        {
          label: 'Datos Estadísticos Institucionales',
          autogenerate: { directory: 'estadística-clásica' },
        },
      ],
    }),
  ],
})

// {
//   label: 'Estadística Clásica',
//   items: [
//     // Each item here is one entry in the navigation menu.
//     {
//       label: 'Conceptos Básicos',
//       slug: 'estadística-clásica/conceptos-básicos',
//     },
//   ],
// },
