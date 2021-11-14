import { screen } from '@testing-library/react';
import Home from './index';
import { RenderTheme } from '../../styles/render';

test('renders learn react link', () => {
	RenderTheme(<Home />);
	const linkElement = screen.getByText(/hello/i);
	expect(linkElement).toBeInTheDocument();
});
