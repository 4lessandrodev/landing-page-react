import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,500;0,700;1,200&display=swap');

	*{
		margin: 0;
		padding: 0;
	}

	html {
		font-size: 62.5%;
	}

	body{
		background-color: #ededed;
		font-size: 1.6rem;
		font-family: 'Roboto Mono', monospace;
	}
`;

export default GlobalStyles;
