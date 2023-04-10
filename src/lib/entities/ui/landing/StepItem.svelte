<script>
	export let step;
</script>

<div class="card w-96 border-2 border-violet-700 bg-gray-900 shadow-md shadow-violet-700  ">
	<div class="card-body">
		<span class="text-xs uppercase tracking-wider text-violet-700">Sposób {step.id}</span>

		<h2 class="card-title">{step.subtitle}</h2>
		<p class="mt-2 max-w-sm text-gray-300">{step.desc}</p>
		<div class="card-actions justify-end">
			<a href="{step.link}" target="_blank" class="btn bg-primary ">{step.title}</a>
		</div>
	</div>
</div>
