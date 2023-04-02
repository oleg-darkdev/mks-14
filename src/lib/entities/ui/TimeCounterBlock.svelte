<script>
	export let title, desc;
</script>

<div class="h-full rounded-lg border-2 border-violet-700  shadow-md shadow-violet-700">
	<slot name="timer" />
	<div class="py-6">
		<div class="mx-auto max-w-screen-xl px-4 md:px-8 md:text-center">
			<div class="max-w-xl md:mx-auto">
				<h3 class="text-3xl font-semibold text-gray-300 sm:text-4xl">{title}</h3>
				<p class="mt-3 text-gray-300">
					{desc}
				</p>
			</div>
			<div class="mt-4 flex items-center gap-3 md:justify-center">
				<slot name="btn"/>
			</div>
		</div>
	</div>
</div>
