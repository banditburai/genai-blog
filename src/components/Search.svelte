<!-- Search.svelte -->
<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
    new PagefindUI({
      element: '#search',
      resetStyles: false,
      showSubResults: true
      
    });
  });
  </script>
  
  <div id="search" class="p-4">
    <!-- The search input will be dynamically created by PagefindUI -->
  </div>
  
  <style>
    /* Your styles here. If you want to keep them global, you can keep the is:global directive */
    :global(.dark) {
      --pagefind-ui-primary: #eeeeee;
      --pagefind-ui-text: #eeeeee;
      --pagefind-ui-background: #152028;
      --pagefind-ui-border: #152028;
      --pagefind-ui-tag: #152028;
    }
  </style>
  