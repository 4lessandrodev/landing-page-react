import { screen } from '@testing-library/dom';
import RenderWithTheme from '../../styles/render';
import GridTwoColumn from './index';

describe('<GridTwoColumn />', () => {
	it('should be in document', () => {
		RenderWithTheme(<GridTwoColumn>Title</GridTwoColumn>);
		const element = screen.getByText(/title/i);
		expect(element).toBeInTheDocument();
	});
});
