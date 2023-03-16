import { oneLine } from 'common-tags';
import { ResumeData } from '@dudeofawesome/open-resume';

import Package from '../package.json';

export const data: ResumeData = {
  theme: {
    colors: {
      primary: 'hsl(0, 100%, 41.2%)',
      primary_muted: 'hsl(0, 100%, 28.6%)',
    },
  },
  package: {
    name: Package.name,
    version: Package.version,
  },
  about: {
    name: 'Louis Orleans',
    label: 'Full Stack Software Engineer',
    summary: oneLine`Throughout my career as a software developer I've focused
      on developing scalable and well documented code. I enjoy working
      collaboratively but can also run with projects on my own. Excited about
      the prospect of joining a product-driven company like yours.`,
    image_url: '/icon.svg',
    email: 'louis@orleans.io',
    phone: '714.386.9047',
    location: 'Brea, California',
    profiles: [
      {
        network: 'github',
        username: 'dudeofawesome',
        url: 'https://github.com/dudeofawesome',
      },
    ],
  },
  sections: [
    {
      title: 'Experience',
      items: [
        {
          title: 'Co-Founder, Flawless Execution',
          location: 'Brea, CA',
          duration: '2020 - Present',
          description: [
            oneLine`Design & develop ecommerce platform to purchase in-game
              items for the Destiny 2 video game`,
            oneLine`Interview and hire international partners to procure
              in-game items to sell`,
            oneLine`Actively build and maintain front end mobile and desktop
              website using Angular`,
            'Strive to reduce operating costs in our Firebase backend',
          ],
        },
        {
          title: 'Freelance Software Developer',
          location: 'Brea, CA',
          duration: '2018 - 2020',
          description: [
            oneLine`Updated and modified existing internal tools for local
              small businesses using Angular, Flutter, and NodeJS`,
            oneLine`Built and maintained reliable and secure multi-tenant
              servers using OpenSUSE, Docker, Ansible, ZFS, BTRFS`,
          ],
        },
        {
          title: 'Senior Software Engineer, Castifi',
          location: 'Irvine, CA',
          duration: '2016 - 2017',
          description: [
            oneLine`Architected and implemented casting and on-set management
              platform for film background actors`,
            'Built web app, Android app, iOS app with Ionic / Angular 4',
            'Built backend with Express / LoopBack',
            'Implemented unit testing and continuous integration via Travis CI',
            'Deployed with AWS, Heroku',
            oneLine`Contributed to
              [Ionic](https://github.com/pulls?q=is%3Apr+author%3Adudeofawesome+ionic),
              [Cordova](https://github.com/pulls?q=is%3Apr+author%3Adudeofawesome+cordova),
              [Ionic Native](https://github.com/pulls?q=is%3Apr+author%3Adudeofawesome+ionic+native),
              [LoopBack plugins](https://github.com/castifi?q=loopback),
              [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/pulls?q=is%3Apr+author%3Adudeofawesome),
              and other open source projects.`,
          ],
        },
        {
          title: 'Head of Software Engineering, Edyza, Inc',
          location: 'Irvine, CA',
          duration: '2016 - 2017',
          description: [
            'Developed backend and frontend software for sensor platform',
            oneLine`Data visualization, analytics, and hardware actuation based
              on sensor data.`,
            oneLine`Designed physical packaging for shipping sensor nodes with
              AutoCAD.`,
          ],
        },
        {
          title: 'Software Engineer, Productive Programming Inc.',
          location: 'Placentia, CA',
          duration: '2015',
          description: [
            oneLine`Developed a wide array of projects, including Windows
              desktop applications, Android apps, web apps, and command line
              applications.`,
            'Provided system testing for other projects.',
          ],
        },
      ],
    },
    {
      title: 'Projects',
      items: [
        {
          title: 'App, Butterfly Reader for Hacker News',
          location: 'Brea, CA',
          duration: '2018 - present',
          description: oneLine`Fast, simple Hacker News client.
            [Open source](https://github.com/dudeofawesome/hn_flutter), built
            with Flutter.
            [On Google Play Store](https://play.google.com/store/apps/details?id=io.orleans.hnflutter).
            Contributed to
            [Flutter library](https://github.com/flutter/flutter/pulls?q=is:pr+author:dudeofawesome)
            & [plugins](https://github.com/pulls?q=is:pr+author:dudeofawesome+language:dart).`,
        },
        {
          title: 'Android app, Home for Cardboard, for Google Cardboard',
          location: 'Brea, CA',
          duration: '2014 - 2016',
          description: oneLine`An alternative home screen to be used with VR
            headsets, such as Google Cardboard. Enables users to play games
            without the need to constantly remove it from the headset. Over
            35,000 users, with 100+ daily downloads.
            [Open source](https://github.com/dudeofawesome/CardboardHome).`,
        },
        {
          title: 'Android app, Sole Champion Mobile Game',
          location: 'Brea, CA',
          duration: '2014',
          description: oneLine`Developed an augmented reality game. Player
            places a card on table, which their phone recognizes, and renders
            the game on top of their table. Players can then move their phone
            for any other view of the game.
            [Open source](https://github.com/dudeofawesome/Sole_Champion).`,
        },
      ],
    },
    {
      title: 'Awards',
      items: [
        {
          title: '1st place project at HackUCI',
          location: 'UCI, CA',
          duration: '2015',
        },
        {
          title: '1st place overall at Citrus Hacks',
          location: 'UCR, CA',
          duration: '2015',
        },
        {
          title: '1st place at LA Hacks 2015 Civic Hack Category',
          location: 'UCLA, CA',
          duration: '2015',
        },
        {
          title: '1st place in Cal Poly Cyber Security Competition',
          location: 'Cal Poly Pomona, CA',
          duration: '2013',
        },
        {
          title: 'Fullerton College Honors Student',
          location: 'Fullerton College, CA',
          duration: '2014 - 2015',
        },
      ],
    },
  ],
  education: [
    {
      name: 'Fullerton College',
      location: 'Fullerton, CA',
      duration: '2015',
      description: 'Computer Science',
    },
  ],
  skills: [
    { name: 'Angular', featured: true },
    { name: 'Flutter', featured: true },
    'React',
    'HTML5 / CSS3',
    { name: 'Node.JS', featured: true },
    'Deno',
    'Ionic',
    { name: 'Docker / Containers', featured: true },
    'Ansible',
    { name: 'Firebase', featured: true },
    'Flux / Redux',
    'LoopBack',
    'AWS',
    'Embedded Systems',
    'CI',
    'CD',
    'Electron',
    'Android',
    'Unity3D',
    'PostgreSQL',
    'MongoDB',
    'Git',
    'Photoshop',
    'AutoCAD',
    'Fusion 360',
    'Laser Cutting',
    { name: '3D Printing', featured: true },
  ],
  languages: [
    {
      name: 'TypeScript',
      featured: true,
      link: 'https://github.com/dudeofawesome?tab=repositories&language=typescript',
    },
    {
      name: 'JavaScript',
      link: 'https://github.com/dudeofawesome?tab=repositories&language=javascript',
    },
    {
      name: 'Dart',
      featured: true,
      link: 'https://github.com/dudeofawesome?tab=repositories&language=dart',
    },
    'SASS',
    {
      name: 'Ruby',
      featured: true,
      link: 'https://github.com/dudeofawesome?tab=repositories&language=ruby',
    },
    {
      name: 'Go',
      link: 'https://github.com/dudeofawesome?tab=repositories&language=go',
    },
    {
      name: 'Bash',
      link: 'https://github.com/dudeofawesome?tab=repositories&language=shell',
    },
    {
      name: 'Java',
      link: 'https://github.com/dudeofawesome?tab=repositories&language=java',
    },
    {
      name: 'Python',
      link: 'https://github.com/dudeofawesome?tab=repositories&language=python',
    },
    {
      name: 'Swift',
      link: 'https://github.com/dudeofawesome?tab=repositories&language=swift',
    },
    {
      name: 'C++',
      link: 'https://github.com/dudeofawesome?tab=repositories&language=c%2B%2B',
    },
    {
      name: 'C#',
      link: 'https://github.com/dudeofawesome?tab=repositories&language=c%23',
    },
    'SQL',
  ],
};
