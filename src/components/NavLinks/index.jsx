import P from 'prop-types';
import Component from './style';
import MenuLink from '../MenuLink';

export const NavLinks = ({ links = [] }) => {
	return (<Component>
		{links.map((link, index) => (
			<MenuLink key={index} {...link}/>
		))}
	</Component>);
};

NavLinks.prototype = {
	links: P.arrayOf(
		P.shape({
			children: P.node.isRequired,
			href: P.string.isRequired,
			target: P.oneOf(['_blank', '_self'])
		})
	)
};

export default NavLinks;
