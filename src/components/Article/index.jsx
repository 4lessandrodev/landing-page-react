import P from 'prop-types';
import Component from './style';

export const Section = ({ children, background = 'light' }) => {
	return (<Component background={background}>{ children }</Component>);
};

Section.prototype = {
	children: P.node.isRequired,
	background: P.oneOf(['light', 'dark'])
};

export default Section;
