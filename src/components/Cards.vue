<template>
<div class="row">
    <div class="column"  v-for="(i,index) in this.$store.state.animelist[0]" :key="index">
        <a :href="i.url" target="_blank">
            <img :src="`${i.image_url}`" alt="Anime Poster Image">
			<h3>{{i.title}}</h3>
        </a>
    </div>
</div>
</template>

<script>
export default {

}
</script>



<style lang="scss" scoped>
.column {
	float: left;
	width: 33.33%;
	max-width: 33%;
	padding: 0px 8px;
	margin-bottom: 16px;
	img {
		width: 80%;
		height: 500px;
		object-fit: cover;
		border-radius: 16px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
		transition: 0.4s;
	}
	h3 {
		padding: 16px;
		color: #313131;
		transition: .4s;
	}
	&:hover {
		img {
			transform: scale(1.05);
		}
		h3 {
			color: #24C444;
		}
	}

}


/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}



</style>