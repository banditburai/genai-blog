<!-- Search.svelte -->
<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      // Initialize PagefindUI once the component has been mounted to the DOM
      new PagefindUI({ element: '#search', resetStyles: false });
      
      // Set up a listener for specific keypresses to focus on the search input
      const keyPressListener = (event) => {
        if (event.key === '/' || event.key === '.') {
          console.log('you pressed the slash');
          event.preventDefault();
          document.querySelector('div#search input').focus();
        }
      };
  
      window.addEventListener('keydown', keyPressListener);
  
      // Clean up the event listener when the component is destroyed
      return () => {
        window.removeEventListener('keydown', keyPressListener);
      };
    });
  </script>
  
  <div id="search" class="ml-3 p-4 -mt-8">
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
  