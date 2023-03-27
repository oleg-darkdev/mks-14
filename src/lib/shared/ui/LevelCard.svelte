<script>
  export let levelInfo;
</script>

<div class="card card-height w-96 m-2 bg-primary text-primary-content">
	<div class="card-body">
		<h2 class="card-title">{levelInfo.title}</h2>
		<p>{levelInfo.desc}</p>
		<div class="card-actions justify-end">
			<button on:click class="btn">Start</button>
		</div>
	</div>
</div>


<style>
  .card-height {
    max-height: 250px;
    height: auto;
  }
</style>
