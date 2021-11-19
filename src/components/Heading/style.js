import styled, { css } from 'styled-components';

const TitleSize = {
	small: (theme) => css`
		font-size: ${theme.sizes.small};
	`,
	medium: (theme) => css`
		font-size: ${theme.sizes.medium};
	`,
	xlarge: (theme) => css`
		font-size: ${theme.sizes.large};
	`,
	large: (theme) => css`
		font-size: ${theme.sizes.huge};
	`
};

const TitleColor = {
	primary: (theme) => css`
		color: ${theme.colors.primary};
	`,
	secondary: (theme) => css`
		color: ${theme.colors.secondary};
	`
};

const UpperCase = (isUpper) => css`
	text-transform: ${isUpper ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
	${({ theme, size, isUppserCase, color }) => css`
		${TitleColor[color](theme)};
		${TitleSize[size](theme)};
		${UpperCase(isUppserCase)};
	`}
`;
