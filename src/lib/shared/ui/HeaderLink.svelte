<script>
	export let link;
</script>

<a rel="noopener noreferrer" href={link.link} class="flex items-center">
	<figure class="flex flex-col items-center px-1">
		<img src="/images/header/{link.img}" class="h-12 w-auto" />
		<figcaption class="text-center text-xs ">{link.text}</figcaption>
	</figure>
</a>
