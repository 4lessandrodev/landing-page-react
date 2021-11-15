import { ThemeProvider } from "styled-components";
import GlobalStyles from '../src/styles/index';
import Theme from '../src/styles/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'ligth',
        value: '#ededed'
      },
      {
        name: 'dark',
        value: '#000000'
      }
    ]
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={ Theme }>
      <GlobalStyles/>
      <Story />
    </ThemeProvider>
  )
];
