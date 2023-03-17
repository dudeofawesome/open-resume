import { watch } from 'turbowatch';
import { TriggerInput } from 'turbowatch/dist/types';

void watch({
  project: __dirname,
  triggers: OpenResumeTriggers(__dirname),
});

export function OpenResumeTriggers(
  dir: string,
  workspace?: string,
): readonly TriggerInput[] {
  return [
    {
      name: 'js',
      expression: [
        'allof',
        [
          'anyof',
          ['match', `${dir}/esbuild.mjs`, 'wholename'],
          ['match', `${dir}/src/**/*.ts`, 'wholename'],
          ['match', `${dir}/types/**/*.ts`, 'wholename'],
          ['match', `${dir}/src/**/*.tsx`, 'wholename'],
          [
            'allof',
            ['match', '*.scss', 'basename'],
            ['not', ['match', `${dir}/src/styles/globals.scss`, 'wholename']],
          ],
          ['allof', ['match', '*.json', 'basename']],
        ],
        ['not', ['match', `${dir}/build/**`, 'wholename']],
      ],
      onChange: ({ spawn }) =>
        spawn`npm run build:js${
          workspace != null ? ` --workspace "${workspace}"` : ''
        }`,
    },
    {
      name: 'css',
      expression: [
        'allof',
        ['match', `${dir}/src/styles/globals.scss`, 'wholename'],
        ['not', ['match', `${dir}/build/**`, 'wholename']],
      ],
      onChange: ({ spawn }) =>
        spawn`npm run build:css${
          workspace != null ? ` --workspace "${workspace}"` : ''
        }`,
    },
    {
      name: 'package.json',
      expression: [
        'allof',
        ['match', 'package.json', 'basename'],
        ['not', ['match', `${dir}/build/**`, 'wholename']],
      ],
      onChange: ({ spawn }) =>
        spawn`npm run build:static${
          workspace != null ? ` --workspace "${workspace}"` : ''
        }`,
    },
  ];
}
