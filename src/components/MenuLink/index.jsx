import P from 'prop-types';
import Component from './style';

export const MenuLink = ({ children, href, target }) => {
	return (<Component href={href} target={target}>{ children }</Component>);
};

MenuLink.prototype = {
	children: P.node.isRequired,
	href: P.string.isRequired,
	target: P.oneOf(['_blank', '_self'])
};

export default MenuLink;
