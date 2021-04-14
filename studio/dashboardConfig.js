export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60772d80153c9d1334fc16c8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9mr31vxc',
                  apiId: 'da8afd80-0a2b-46a7-97ad-a9a4aa52085b'
                },
                {
                  buildHookId: '60772d8099c20f14b6fceec7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-esbqujav',
                  apiId: '8b0597c5-7944-4e36-bae0-dedab3674ebf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iwahjoedi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-esbqujav.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
