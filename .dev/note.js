import Commponent from '../src/components/Button.svelte';

const component = new Commponent({
	target: document.body,
	props: {
		text: 'wow',
		clickHandler: () => {
			console.log('text');
		}
	}
});

export default component;