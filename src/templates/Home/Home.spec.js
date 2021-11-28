import { screen } from '@testing-library/react';
import RenderWithTheme from '../../styles/render';
import Home from './index';

test('renders learn react link', () => {
	RenderWithTheme(<Home />);
	const linkElement = screen.getByText(/hello/i);
	expect(linkElement).toBeInTheDocument();
});
