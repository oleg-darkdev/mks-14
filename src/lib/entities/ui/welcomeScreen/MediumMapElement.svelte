<script>
  export let gridElement;
</script>

<div class="relative m-1 h-32 w-32 border border-violet-700 shadow-md shadow-violet-700 rounded-lg">
	<img style="opacity: 0.4;" class="rounded-lg" src={gridElement.img} alt={gridElement.title} srcset="" />
	<span class="absolute inset-x-10 inset-y-3 text-8xl text-gray-100">{gridElement.id}</span>
</div>
