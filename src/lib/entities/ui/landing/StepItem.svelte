<script>
	export let step;
</script>

<div class="mx-auto grid grid-cols-4 justify-center space-y-8 p-8 lg:space-y-0">
	<div class="col-span-full flex items-center justify-center lg:col-span-1">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#6d28d9" class="h-16 w-16">
			<path
				d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"
			/>
			<path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z" />
			<path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z" />
		</svg>
	</div>
	<div
		class="col-span-full flex max-w-3xl flex-col justify-center text-center lg:col-span-3 lg:text-left"
	>
		<span class="text-xs uppercase tracking-wider dark:text-violet-400"
			>Step {step.id} {step.subtitle}</span
		>
		<span class="text-xl font-bold md:text-2xl">{step.title}</span>
		{#each step.desc as desc}
			<span class="mt-4 dark:text-gray-300">{desc}</span>
		{/each}
	</div>
</div>
