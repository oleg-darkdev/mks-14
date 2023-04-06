<script>
	import { HorisontalImage } from '../../shared';

	export let desc, title, btnText;
</script>

<div class="rounded-lg border-2 border-violet-700 shadow-md shadow-violet-700 ">
	<HorisontalImage slot="img" img="./images/hero.png" alt="Hello banner" />

	<div class="mx-auto max-w-screen-xl py-6 px-4 md:px-8 md:text-center">
		<div class="max-w-xl md:mx-auto">
			<h3 class="text-3xl font-semibold text-gray-300 sm:text-4xl">{title}</h3>
			{#each desc as text}
				<p class="mt-3 text-gray-300">
					{text}
				</p>
			{/each}
		</div>
		<div class="mt-4 flex items-center gap-3 md:justify-center">
			<button
				on:click
				class="m-2 inline-block rounded-lg bg-violet-700 py-2 px-4 font-medium text-white shadow-md duration-150 hover:bg-gray-700 hover:shadow-none active:bg-gray-900"
			>
				{btnText}
			</button>
		</div>
	</div>
</div>
