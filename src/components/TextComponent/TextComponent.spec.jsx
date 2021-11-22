import { screen } from '@testing-library/dom';
import RenderWithTheme from '../../styles/render';
import TextComponent from './index';

describe('<TextComponent />', () => {
	it('should be in document', () => {
		RenderWithTheme(<TextComponent>Title</TextComponent>);
		const element = screen.getByText(/title/i);
		expect(element).toBeInTheDocument();
	});
});
