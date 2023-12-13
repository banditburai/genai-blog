<script>
	import Modal from './Modal.svelte';

	let showModal = false;
</script>

<button class="search-button" on:click={() => (showModal = true)}>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
    <path d="M15.5 14h-.79l-.28-.27a6.51 6.51 0 10-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1114 9.5 4.49 4.49 0 019.5 14z"/>
  </svg>
  <span class="key-combo">⌘+K</span>
</button>

<Modal bind:showModal>
	<h2 slot="header">
		modal
		<small><em>adjective</em> mod·al \ˈmō-dəl\</small>
	</h2>

	<ol class="definition-list">
		<li>of or relating to modality in logic</li>
		<li>
			containing provisions as to the mode of procedure or the manner of taking effect —used of a
			contract or legacy
		</li>
		<li>of or relating to a musical mode</li>
		<li>of or relating to structure as opposed to substance</li>
		<li>
			of, relating to, or constituting a grammatical form or category characteristically indicating
			predication
		</li>
		<li>of or relating to a statistical mode</li>
	</ol>

	<a href="https://www.merriam-webster.com/dictionary/modal">merriam-webster.com</a>
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
</style>