<script>
  export let text;
</script>

<div class="flex">
	<div class="flex-shrink-0">
		<div
			class="flex h-12 w-12 items-center justify-center rounded-md dark:bg-violet-700 dark:text-gray-900"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				class="h-7 w-7"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
			</svg>
		</div>
	</div>
	<div class="ml-4">
		<h4 class="text-lg font-medium leading-6 dark:text-gray-50">{text.title}</h4>
		<p class="mt-2 dark:text-gray-400">
			{text.desc}
		</p>
	</div>
</div>
