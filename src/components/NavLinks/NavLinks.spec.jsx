import { screen } from '@testing-library/dom';
import RenderWithTheme from '../../styles/render';
import NavLinks from './index';
import theme from '../../styles/theme';

import mock from './mock';

describe('<NavLinks />', () => {
	it('should be in document', () => {
		RenderWithTheme(<NavLinks links={ mock }/>);
		const element = screen.getAllByRole('link');
		expect(element).toHaveLength(5);
	});

	it('should not render links', () => {
		RenderWithTheme(<NavLinks links={ [] }/>);
		const element = screen.queryAllByRole('link');
		expect(element).toHaveLength(0);
	});

	it('should not render links to mobile', () => {
		RenderWithTheme(<NavLinks links={ mock }/>);
		const element = screen.getByText(/link 01/i).parentElement;
		expect(element).toHaveStyleRule('flex-flow', 'column wrap', {
			media: theme.media.lteMedium
		});
	});

	it('should match snapshot', () => {
		const { container } = RenderWithTheme(<NavLinks links={mock} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
