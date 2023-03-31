<script>
  export let gridElement;
</script>

<div class="relative m-1 h-60 w-60 border border-violet-700 shadow-md shadow-violet-700 rounded-lg">
	<img style="opacity: 0.4;" class="rounded-lg" src={gridElement.img} alt={gridElement.title} srcset="" />
	<span class="absolute inset-x-20 inset-y-2 text-gray-100" style="font-size: 140px;">{gridElement.id}</span>
</div>
