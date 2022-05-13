<script>
	import { count } from './stores.ts';

	function increment() {
		count.update(n => n + 1);
	}
</script>

<button on:click={increment}>
	+
</button>