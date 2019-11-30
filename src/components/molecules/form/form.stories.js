import { action } from '@storybook/addon-actions';

import Form from './form.svelte';

export default {
  title: 'Atoms | Form',
};

export const text = () => ({
  Component: Form,
  props: { text: 'Wow Button' },
  on: { click: action('clicked') },
});
