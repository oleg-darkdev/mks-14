<script>
  export let gridElement;
</script>

<div class="relative m-1 h-20 w-20 border border-violet-700 shadow-md shadow-violet-700 rounded-lg">
	<img style="opacity: 0.4;" class="rounded-lg" src={gridElement.img} alt={gridElement.title} srcset="" />
	<span class="absolute  inset-y-1 text-6xl text-gray-100 {gridElement.id.length < 2 ? 'inset-x-6' : 'inset-x-2'}">{ gridElement.id}</span>
</div>
