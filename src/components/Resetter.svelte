<script>
	import { count } from './stores.ts';

	function reset() {
		count.set(0);
	}
</script>

<button on:click={reset}>
	reset
</button>