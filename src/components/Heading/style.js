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

const UpperCase = (isUpper) => css`
	text-transform: ${isUpper ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
	${({ theme, size, isUppserCase }) => css`
		color: ${theme.colors.primary};
		${TitleSize[size](theme)};
		${UpperCase(isUppserCase)};
	`}
`;
