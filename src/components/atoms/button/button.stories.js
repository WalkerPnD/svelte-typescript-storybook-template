import { action } from '@storybook/addon-actions';

import Button from './button.svelte';

export default {
  title: 'Atoms | Button',
};

export const text = () => ({
  Component: Button,
  props: { text: 'Wow Button' },
  on: { click: action('clicked') },
});

export const emoji = () => ({
  Component: Button,
  props: {
    text: '😀 😎 👍 💯',
  },
  on: { click: action('clicked') },
});
