// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Sam-Asah', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['Sam-Asah/First_Repository_Notes'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Samuel Asah Akyeampong',
    twitter: 'Kwabena_Asah',
    //mastodon: '',
    researchGate: '',
    //facebook: '',
    //instagram: '',
    //youtube: '', // example: 'pewdiepie'
    //dribbble: '',
    //behance: '',
    //medium: '',
    //dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    //website: 'https://www.arifszn.com',
    phone: '+233264981173',
    email: 'sammyasah23@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'STATA',
    'SPSS',
    'LATEX',
    //'React.js',
    //'Node.js',
    //'Nest.js',
    'MySQL',
    //'PostgreSQL',
    'Git',
    'Docker',
    //'PHPUnit',
    'Gretl',
   // '',
    '',
  ],
  experiences: [
    {
      company: 'Institute of Economic Development and Economic Research',
      position: ' Junior Researcher (Development Economist)',
      from: 'June 2023',
      to: 'Present',
      companyLink: 'https://ideresearch.org/',
    },
    {
      company: 'Research-Hub Support',
      position: 'Managing Director',
      from: 'July 2019',
      to: 'Present',
      //companyLink: 'https://example.com',
    },
      {
      //company: 'Company Name',
      //position: 'Position',
      //from: 'July 2019',
      //to: 'August 2021',
      //companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'ALX - Data Science',
      body: '',  //Lorem ipsum dolor sit amet
      year: 'March 8, 2024 -- TO -- May 25, 2025',  // March 2022
      link: 'https://www.alxafrica.com/',  //https://example.com
    },
  ],
  educations: [
    {
      institution: 'University of Ghana, Legon',
      degree: 'MPhil Agribusiness',
      from: 'January 2021',
      to: 'December 2022',
    },
    {
      institution: 'The University of Goettingen',
      degree: 'MPhil Sustainable International Agriculture',
      from: 'April 2022',
      to: ' July 2022',
    },
    {
      institution: 'University of Ghana, Legon',
      degree: 'BSc Agribusiness',
      from: '2015',
      to: '2019',
    },
  ],
  publications: [
    {
      //title: 'Publication Title',
     // conferenceName: '',
      //journalName: 'Journal Name',
      //authors: 'John Doe, Jane Smith',
      //link: 'https://example.com',
      //description:
       // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'emerald',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      //'light',
      //'dark',
      'procyon',
      'luxury',
      //'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'pastel',
      //'retro',
      //'cyberpunk',
      'valentine',
      //'halloween',
      'garden',
      'forest',
      //'aqua',
      'lofi',
            'fantasy',
      //'wireframe',
      //'black',
      //'dracula',
      'cmyk',
      'autumn',
      //'business',
      'acid',
      //'lemonade',
      //'night',
      //'coffee',
      'winter',
      //'dim',
      //'nord',
      //'sunset',
      'synthwave',
      
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      'base-content': '#000000', // Forces all default text to pure black
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
