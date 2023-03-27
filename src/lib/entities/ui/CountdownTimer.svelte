<script>
	import { tweened } from 'svelte/motion';
	let original = 5 * 60; 
	let timer = tweened(original);

	setInterval(() => {
		if ($timer > 0) $timer--;
	}, 1000);

	$: minutes = Math.floor($timer / 60);
	$: minname = minutes > 1 ? 'mins' : 'min';
	$: seconds = Math.floor($timer - minutes * 60);
</script>

<span class="font-mono countdown text-6xl">
	<span style="--value:{seconds};" />
</span>
