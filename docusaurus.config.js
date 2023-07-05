/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Деливери менеджер',
  tagline: 'Кто это, задачи, обязанности, как им стать, карта развития',
  url: 'https://tinkoff.github.io',
  baseUrl: '/dm-knowledgebase/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Tinkoff', // Usually your GitHub org/user name.
  projectName: 'dm-knowledgebase', // Usually your repo name.
  trailingSlash: false,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    mermaid: {
      theme: {light: 'base', dark: 'dark'},
      options: {
        flowchart: {
          curve: 'monotoneX',
        },
        themeVariables: {
          'primaryColor': '#E6E9F6',
          'primaryTextColor': '#000000',
          'primaryBorderColor': '#E6E9F6',
          'lineColor': '#5E73E1'
        }
      }
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'DM Knowledge Base',
      logo: {
        alt: 'База знаний профессии Деливери менеджер',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'profession/about',
          position: 'left',
          label: 'Документация',
        },
        {to: 'blog', label: 'Блог', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          href: 'https://github.com/Tinkoff/dm-knowledgebase',
          label: 'Репозиторий',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `© 2006-${new Date().getFullYear()} АО «Тинькофф Банк»`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          lastVersion: 'current',
          versions: {
            current: {
              label: '⚡ 1.0.0',
              //banner: 'unreleased',
            },
          },
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Tinkoff/dm-knowledgebase/edit/main/',
        },
        gtag: {
          trackingID: 'G-CNJ52NL21B',
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['ru', 'en'],
      },
    ],
  ],
};
