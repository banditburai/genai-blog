<script>
     import { onMount, onDestroy } from 'svelte';
	export let showModal; // boolean

	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();

    function updateDialogSize() {
    // Close the modal if the screen width is less than 600px
    if (window.innerWidth < 768 && showModal) {
      showModal = false;
      dialog.close();
    } else {
      dialog.style.maxWidth = window.innerWidth < 768 ? '90%' : '45em';
    }
  }

  onMount(() => {
    window.addEventListener('resize', updateDialogSize);
    updateDialogSize();
  });

  onDestroy(() => {
    window.removeEventListener('resize', updateDialogSize);
  });

</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot name="header" />
		<hr />
		<slot />
		<hr />
		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={() => dialog.close()}>
        x
        </button>
	</div>
</dialog>

<style>
    :root {
  --dialog-background: #FFFFFF; 
}

:global(.dark) {
  --dialog-background: #2a3741; 
}
	dialog {
		max-width: 90%;
		border-radius: 0.5em;        
		border: none;
		padding: 0;
        background-color: var(--dialog-background);
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(5px); 
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}

    @media (min-width: 600px) { 
  dialog {
    max-width: 90%; 
  }
}
</style>
