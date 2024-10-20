// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'UniAprende',
      customCss: ['./src/styles/custom.css'],
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Estadística Clásica',
          autogenerate: { directory: 'estadística-clásica' },
          collapsed: true,
        },
        {
          label: 'Estadística Computacional',
          autogenerate: { directory: 'estadística-computacional' },
          collapsed: false,
        },
        {
          label: 'Recursos Educativos',
          autogenerate: { directory: 'recursos-educativos' },
          collapsed: false,
        },
        {
          label: 'Datos Estadísticos Institucionales',
          autogenerate: { directory: 'datos-estadísticos-institucionales' },
          collapsed: false,
        },
      ],
    }),
  ],
})
