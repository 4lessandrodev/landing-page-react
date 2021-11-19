import { screen } from '@testing-library/dom';
import { RenderWithTheme } from '../../styles/render';
import Theme from '../../styles/theme';
import Heading from './index';

describe('<Heading />', () => {
	it('should render with success', () => {
		RenderWithTheme(<Heading>Title</Heading>);
		const element = screen.getByText(/title/i);
		expect(element).toBeInTheDocument();
	});

	it('should render with default styles', () => {
		RenderWithTheme(<Heading>Title</Heading>);
		const element = screen.getByRole('heading', { name: 'Title' });

		expect(element).toHaveStyle({
			'text-transform': 'none'
		});
	});

	it('should render with default size', () => {
		RenderWithTheme(<Heading>Title</Heading>);
		const element = screen.getByRole('heading', { name: 'Title' });

		expect(element).toHaveStyle({
			'font-size': Theme.sizes.medium
		});
	});

	it('should render with large size', () => {
		RenderWithTheme(<Heading size="xlarge">Title</Heading>);
		const element = screen.getByRole('heading', { name: 'Title' });

		expect(element).toHaveStyle({
			'font-size': Theme.sizes.large
		});
	});

	it('should render with default primary color', () => {
		RenderWithTheme(<Heading>Title</Heading>);
		const element = screen.getByRole('heading', { name: 'Title' });

		expect(element).toHaveStyle({
			color: Theme.colors.primary
		});
	});

	it('should render with secondary color', () => {
		RenderWithTheme(<Heading color="secondary">Title</Heading>);
		const element = screen.getByRole('heading', { name: 'Title' });

		expect(element).toHaveStyle({
			color: Theme.colors.secondary
		});
	});

	it('should render with uppercase', () => {
		RenderWithTheme(<Heading isUppserCase={true}>Title</Heading>);
		const element = screen.getByRole('heading', { name: 'Title' });

		expect(element).toHaveStyle({
			'text-transform': 'uppercase'
		});
	});
});
