import { screen } from '@testing-library/dom';
import RenderWithTheme from '../../styles/render';
import MenuLink from './index';

describe('<MenuLink />', () => {
	it('should be in document', () => {
		RenderWithTheme(<MenuLink href="https://github.com/4lessandrodev" target="_blank">Link</MenuLink>);
		const element = screen.getByRole('link', { name: 'Link' });
		expect(element).toBeInTheDocument();
	});

	it('should have attribute target', () => {
		RenderWithTheme(<MenuLink href="https://github.com/4lessandrodev" target="_blank">Link</MenuLink>);
		const element = screen.getByRole('link', { name: 'Link' });
		expect(element).toHaveAttribute('target', '_blank');
	});

	it('should have attribute href', () => {
		RenderWithTheme(<MenuLink href="https://github.com/4lessandrodev" target="_blank">Link</MenuLink>);
		const element = screen.getByRole('link', { name: 'Link' });
		expect(element).toHaveAttribute('href', 'https://github.com/4lessandrodev');
	});
});
