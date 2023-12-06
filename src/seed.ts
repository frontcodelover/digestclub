import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const DEFAULT_TAGS = [
  {
    id: '8fc45134-1a0a-40e2-b6ac-103c3376d158',
    name: 'React',
    slug: 'react',
    description: "Facebook's JavaScript library for building user interfaces.",
  },
  {
    id: 'ed6f83fa-7cad-460f-86df-c2ea1ed17ba4',
    name: 'OpenSource',
    slug: 'open-source',
    description:
      'Software that is freely accessible, modifiable, and distributable by anyone.',
  },
  {
    id: '074514c3-850e-4065-8cb6-b85c4445d5e2',
    name: 'JavaScript',
    slug: 'javascript',
    description:
      'A programming language commonly used to create interactive effects within web browsers.',
  },
  {
    id: '38e51ea0-dd34-423c-b692-d41d72b36a2e',
    name: 'TypeScript',
    slug: 'typescript',
    description:
      'A superset of JavaScript that adds static typing to the language.',
  },
  {
    id: '7e53b7a1-ebfd-4924-aee4-61762cd3aaee',
    name: 'Programming',
    slug: 'programming',
    description:
      'The act of writing, testing, and maintaining the source code of computer programs.',
  },
  {
    id: '02bc36de-ce59-46bb-8bee-664b9f655d54',
    name: 'News',
    slug: 'news',
    description:
      'Current information or reports about recent events or developments.',
  },
  {
    id: 'd4a86be1-d4db-4e96-b15e-3f2130ab0522',
    name: 'Career',
    slug: 'career',
    description:
      'Information and advice related to professional paths, employment, and work opportunities.',
  },
  {
    id: '97ca577a-34e6-4f88-b5b2-3a330d59bc0d',
    name: 'Security',
    slug: 'security',
    description:
      'Measures taken to protect systems, networks, and data from cyber threats and unauthorized access.',
  },
  {
    id: 'bdb71122-fe7c-40b4-aa5b-4275fbf9e073',
    name: 'Frontend',
    slug: 'frontend',
    description:
      'The part of a website or application that users interact with directly.',
  },
  {
    id: '3ca53b47-f2b0-4165-9aeb-dd0eded5df78',
    name: 'Backend',
    slug: 'backend',
    description:
      'The part of a website or application that operates behind the scenes, handling data processing and server-side operations.',
  },
  {
    id: '800c04dc-1d84-476e-a5c4-4d8267b369f9',
    name: 'Vue',
    slug: 'vue',
    description:
      'A progressive JavaScript framework used for building user interfaces.',
  },
  {
    id: 'b7286469-5210-45e8-b254-386315886e4b',
    name: 'Database',
    slug: 'database',
    description:
      'A structured collection of data stored and accessed electronically.',
  },
  {
    id: '6c215964-b34e-4377-b14b-8b587e35310c',
    name: 'NextJs',
    slug: 'nextjs',
    description:
      'A React framework that enables server-side rendering and other optimizations for React applications.',
  },
  {
    id: '6c215964-b34e-4377-b14b-8b587e35310c',
    name: 'NuxtJs',
    slug: 'nuxtjs',
    description:
      'A Vue framework that enables server-side rendering and other optimizations for Vue applications.',
  },

  {
    id: '5e7e54fc-3f9b-47eb-a622-8a10a6e1d5ec',
    name: 'AI',
    slug: 'ai',
    description:
      'Artificial Intelligence, the simulation of human intelligence processes by machines.',
  },
  {
    id: 'efaf86b3-b48f-447d-8242-56003344be9b',
    name: 'Github',
    slug: 'github',
    description:
      'A platform for hosting and collaborating on Git repositories.',
  },
  {
    id: 'e59c7d8b-966f-4cc9-9aa8-2b2915d093d0',
    name: 'Web3',
    slug: 'web3',
    description:
      'The decentralized version of the internet, often associated with blockchain technology and cryptocurrencies.',
  },
  {
    id: '8a548306-f7ff-4304-934d-4bca116a1ea3',
    name: 'PHP',
    slug: 'php',
    description: 'A server-side scripting language used for web development.',
  },
  {
    id: 'a1a87a80-f49a-4e9f-92b1-d48786cd454f',
    name: 'Python',
    slug: 'python',
    description:
      'A versatile programming language known for its readability and simplicity.',
  },
  {
    id: '943f1699-8f34-4d65-9c60-9098fa5a747c',
    name: 'Django',
    slug: 'django',
    description:
      'A high-level Python web framework that encourages rapid development and clean, pragmatic design.',
  },
  {
    id: '7941df8c-e601-4876-a293-23171bae8df7',
    name: 'Laravel',
    slug: 'laravel',
    description:
      'A PHP web framework used for building web applications following the MVC pattern.',
  },
  {
    id: 'f83ab7f1-5d6d-4714-9201-599d37bbcc6d',
    name: 'Symfony',
    slug: 'symfony',
    description: 'A PHP framework for building web applications.',
  },
  {
    id: '7892bdb7-2abf-4ac1-bfc1-9fe5f4133547',
    name: 'Go',
    slug: 'go',
    description:
      'A statically typed, compiled programming language designed for simplicity and efficiency.',
  },
  {
    id: 'b3c85d76-e40b-4e39-82f6-00a5c985ac37',
    name: 'Data',
    slug: 'data',
    description: 'Information that can be stored, manipulated, and retrieved.',
  },
  {
    id: '8433abb2-bbba-46ad-b70c-03c9d7a0dd16',
    name: 'iOS',
    slug: 'ios',
    description: "Apple's mobile operating system used in iPhones and iPads.",
  },
  {
    id: 'a470d416-0f6f-4ab0-a841-c5b91c1d76a8',
    name: 'Android',
    slug: 'android',
    description:
      "Google's mobile operating system used in many smartphones and tablets.",
  },
  {
    id: 'b1b78851-59a5-443e-a9be-6626639e3cb6',
    name: 'Swift',
    slug: 'swift',
    description:
      'A programming language developed by Apple for iOS, macOS, watchOS, and tvOS app development.',
  },
  {
    id: 'ce6bad39-fd36-4798-996c-c259768c929a',
    name: 'React Native',
    slug: 'react-native',
    description: 'A framework for building native applications using React.',
  },
  {
    id: '185e8490-7344-41ba-906b-d8412c12e1fc',
    name: 'Design',
    slug: 'design',
    description:
      'The process of creating solutions for visual and functional problems.',
  },
  {
    id: '2d199433-ca9a-48bd-8268-ef99ba113b67',
    name: 'Tailwind',
    slug: 'tailwind',
    description:
      'A utility-first CSS framework for building custom designs quickly.',
  },
  {
    id: '4ab312e3-9697-42f3-84d5-6bda307bca33',
    name: 'Ruby',
    slug: 'ruby',
    description:
      'A dynamic, object-oriented programming language known for its simplicity and productivity.',
  },
  {
    id: '0715aeb0-a074-4c19-9873-8b32a8052bf0',
    name: 'Kotlin',
    slug: 'kotlin',
    description:
      'A statically typed programming language developed by JetBrains and adopted for Android development.',
  },
  {
    id: '742ae0c8-41e5-4237-913c-5e3372d979aa',
    name: 'Redux',
    slug: 'redux',
    description:
      'A predictable state container for JavaScript apps, often used with React.',
  },
  {
    id: 'd4dda0d4-58f5-4e8b-a648-61caf7bc59df',
    name: 'Codepen',
    slug: 'codepen',
    description:
      'An online community for testing and showcasing user-created HTML, CSS, and JavaScript code snippets.',
  },
  {
    id: '35fdc96c-6963-4b30-82e1-89b49d402af9',
    name: 'Game dev',
    slug: 'game-dev',
    description:
      'The process of creating video games, including design, development, and testing.',
  },
  {
    id: '64ac5a5b-ce7d-4d0c-99b3-35d1ae06afcf',
    name: 'Angular',
    slug: 'angular',
    description: 'A TypeScript-based open-source web application framework.',
  },
  {
    id: '5d71b643-dbf5-434d-b356-9b8848426e15',
    name: 'Blockchain',
    slug: 'blockchain',
    description:
      'A decentralized and distributed ledger technology used for secure and transparent record-keeping.',
  },
  {
    id: '0fbed9fd-c6ea-4645-b09d-dc30e2fad416',
    name: 'Crypto',
    slug: 'crypto',
    description:
      'Short for cryptocurrency, a digital or virtual currency secured by cryptography.',
  },
  {
    id: 'b4b6b8a0-9b0a-4e9e-8b0a-9b8b8b8b8b8b',
    name: 'Event',
    slug: 'event',
    description:
      'A planned and organized occasion, often with a specific purpose.',
  },
  {
    id: 'b4b6b8a0-9b0a-4e9e-8b0a-9b8b8b8b8b8b',
    name: 'Web dev',
    slug: 'web-dev',
    description:
      'Internet development, the process of creating websites and applications for the web.',
  },
] as const;

async function main() {
  const tags = await Promise.all(
    DEFAULT_TAGS.map((tag) =>
      prisma.tags.upsert({
        where: { id: tag.id },
        update: {},
        create: tag,
      })
    )
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    await prisma.$disconnect();
    process.exit(1);
  });
