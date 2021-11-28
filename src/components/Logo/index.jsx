import P from 'prop-types';
import Component from './style';
import Heading from '../Heading';

export const Logo = ({ text, srcImg, link, theme }) => {
	return (<Heading isUppserCase={true} size="large" theme={theme}>
		<Component href={link}>
			{!srcImg && text}
			{!!srcImg && <img src={srcImg} alt={text} />}
		</Component>
	</Heading>);
};

Logo.prototype = {
	text: P.node.isRequired,
	srcImg: P.string,
	link: P.string.isRequired
};

export default Logo;
