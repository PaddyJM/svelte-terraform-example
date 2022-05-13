<script>
	import { count } from './components/stores.ts';
	import Incrementer from './components/Incrementer.svelte';
	import Decrementer from './components/Decrementer.svelte';
	import Resetter from './components/Resetter.svelte';
	import { onDestroy } from 'svelte';

	let countValue;

	count.subscribe(value => {
		countValue = value;
	});

	const unsubscribe = count.subscribe(value => {
	countValue = value;
	});

	onDestroy(unsubscribe)
</script>

<h1>Hello world!</h1>

<img alt="A hot day in Lacedaemon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Menelaion.jpg/420px-Menelaion.jpg">

<h1>The count is {countValue}</h1>

<Incrementer/>
<Decrementer/>
<Resetter/>