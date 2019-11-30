<style src="./button.less"></style>
<script lang="typescript">
  import { createEventDispatcher } from 'svelte';
    
  export let text = '';

  const dispatch = createEventDispatcher();

  function onClick(event: any) {
    dispatch('click', event)
  }
</script>

<button class="button" on:click={onClick}>
  {text} (button is working)
</button>


