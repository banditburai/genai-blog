<script>
	import Modal from './Modal.svelte';
  import Search from './Search.svelte';
  import { onMount } from 'svelte';

	let showModal = false;

  

  onMount(() => {
    function handleKeydown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k' && window.innerWidth >= 600) {
        e.preventDefault();
        showModal = true;
      }
      if (e.key === 'Escape' && showModal) {
        e.preventDefault();
        showModal = false;
      }
    }
  
  window.addEventListener('keydown', handleKeydown);

  return () => {

    window.removeEventListener('keydown', handleKeydown);
  };  
});

$: if (showModal) {
    setTimeout(() => {
      const searchInput = document.querySelector('#search input');
      if (searchInput) {
        searchInput.focus();
      }
    }, 0);
  }

</script>

<button class="search-button" on:click={() => (showModal = true)}>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
    <path d="M15.5 14h-.79l-.28-.27a6.51 6.51 0 10-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1114 9.5 4.49 4.49 0 019.5 14z"/>
  </svg>
  <span class="key-combo">⌘+K</span>
</button>

<Modal bind:showModal>
	<h2 slot="header">		
		
	</h2>

	<Search />
</Modal>


<style>
  .search-button {
    background-color: #3B4252;
    border: none;    
    border-radius: 20px;
    padding: 10px 20px;
    color: white;
    font-family: Arial, sans-serif;
    display: flex;
    align-items: center;
    cursor: pointer;
    transform: scale(0.75); 
  }

  .search-button svg {
    fill: white;
    margin-right: 8px;
  }

  .search-button span {
    display: block;
  }

  .search-button .key-combo {
    background: rgba(255, 255, 255, 0.2); 
    opacity: 100%;   
    border-radius: 4px;
    padding: 2px 5px;
    margin-left: 5px;
    font-size: 0.8em;
  }

  .modal-backdrop {
    backdrop-filter: blur(5px); 
  }

  #search {
    margin-top: 1rem;
  }
</style>