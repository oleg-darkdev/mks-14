<script>
	import { CountdownTimer } from '../../entities';
</script>

<div class="flex h-full flex-col justify-center">
	<h2 class="text-center text-2xl text-white">Hejka</h2>
	<div class="flex flex-row flex-wrap items-center ">
		<!-- {#each levelsList as levelInfo}
			<LevelCard on:click={() => selectMode(levelInfo)} {levelInfo} />
		{/each} -->
		<CountdownTimer />
	</div>
</div>
