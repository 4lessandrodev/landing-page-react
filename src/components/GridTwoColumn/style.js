import styled, { css } from 'styled-components';

export const GridTwoColumn = styled.h1`
	${({ theme }) => css``}
`;

export const Container = styled.div`
	${({ theme }) => css`
		display: grid;
		gap: 10px;
		padding: 20px;
		background-color: ${theme.colors.secondary};
		border: 1px solid black;
		justify-content: center;
	`}
`;

export const Section = styled.div`
	${({ theme }) => css`
		display: grid;
		border: 1px solid white;
		grid-template-columns: 2fr 1fr;
		max-width: 1024px;

		@media ${theme.media.lteLarge}{
			grid-template-columns: 1fr;
		}
	`}
`;

export const TextContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		max-width: 728px;
	`}
`;

export const ImageContainer = styled.div`
	${({ theme }) => css``}
`;

export const Image = styled.img`
	${({ theme }) => css`
		display: flex;
		width: 100%;
	`}
`;

export default GridTwoColumn;
