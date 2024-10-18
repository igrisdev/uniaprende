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
          label: 'Estadística Computacional',
          autogenerate: { directory: 'estadística-computacional' },
        },
        {
          label: 'Recursos Educativos',
          autogenerate: { directory: 'recursos-educativos' },
        },
        {
          label: 'Datos Estadísticos Institucionales',
          autogenerate: { directory: 'datos-estadísticos-institucionales' },
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
