<script>
	export let link;
</script>

<div class="flex flex-col items-center  ">
	<img src="/images/header/{link.img}" class="h-10 w-10" />
	<a
		rel="noopener noreferrer"
		href={link.link}
		class="-mb-1 flex items-center border-b-2 border-transparent px-1 text-sm  hover:border-b-violet-900 hover:text-violet-900"
		>{link.text}</a
	>
</div>
