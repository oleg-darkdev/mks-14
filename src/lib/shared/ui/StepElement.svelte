<script>
	export let step, idStep, stepsLength;
</script>

<div class="flex ">
	<div class="mr-6 flex flex-col items-center ">
		<div class="h-10 w-px {idStep == 0 ? 'opacity-0' : 'bg-violet-700 '} sm:h-full" />
		<div>
			<div class="flex text-violet-700 h-8 w-8 items-center justify-center rounded-full border border-violet-700 text-xs font-medium">
				{idStep + 1}
			</div>
		</div>
		<div class="h-full w-px {stepsLength == idStep ? 'opacity-0' : 'bg-violet-700 '} " />
	</div>
	<div class="flex flex-col pb-6 sm:flex-row sm:items-center sm:pb-0">
		<div class="sm:mr-5">
			<div
				class="my-3 border border-violet-700 shadow-md shadow-violet-700 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 sm:h-24 sm:w-24"
			>
        <img src="{step.img}" class="w-24 bg-violet-700 rounded-full" alt="">

				<!-- <svg
					class="text-deep-purple-accent-400 h-12 w-12 sm:h-16 sm:w-16"
					stroke="#661AE6"
					viewBox="0 0 52 52"
				>
					<polygon
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						points="29 13 14 29 25 29 23 39 38 23 27 23"
					/>
				</svg> -->
			</div>
		</div>
		<div>
			<p class="text-xl font-semibold text-violet-700">{step.title}</p>
			<p class="text-sm text-gray-400">
				{step.desc}
			</p>
		</div>
	</div>
</div>
