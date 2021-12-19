import P from 'prop-types';
import Heading from '../Heading';
import TextComponent from '../TextComponent/style';
import * as Styled from './style';

export const GridTwoColumn = ({ title, text, imageLink }) => {
	return (
		<Styled.Container>
			<Heading isUpperCase={true}>{title}</Heading>
			<Styled.Section>
				<Styled.TextContainer>
					<TextComponent>{text}</TextComponent>
				</Styled.TextContainer>
				<Styled.ImageContainer>
					<Styled.Image src={imageLink} alt={title} />
				</Styled.ImageContainer>
			</Styled.Section>
		</Styled.Container>
	);
};

GridTwoColumn.prototype = {
	title: P.string.isRequired,
	text: P.string.isRequired,
	imageLink: P.string.isRequired
};

export default GridTwoColumn;
