import Component from './index';

export default {
	title: 'Section',
	component: Component,
	argTypes: {
		children: { type: '' },
		background: { options: ['light', 'dark'], control: { type: 'select' } }
	},
	args: {
		children: (
			<span>
				<h1>Title</h1>
				<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eligendi officiis unde nam, in iusto necessitatibus ipsa repudiandae impedit quidem maxime cupiditate non, velit incidunt error ducimus saepe nesciunt et.</div>
			</span>
		)
	}
};

export const Template = (args) => (<Component { ...args}/>);
Template.args = {
	background: 'light'
};
