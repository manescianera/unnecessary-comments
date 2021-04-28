<template>
	<div id="app">
		<CommentBox />
	</div>
</template>

<script>
import CommentBox from './components/CommentBox.vue';

export default {
	name: 'App',
	components: {
		CommentBox,
	},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	text-decoration: none;
	font-family: 'Roboto', sans-serif;
}

:is(html, body) {
	width: 100%;
	height: 100%;
}

body {
	display: grid;
	place-items: center;
	background: #e1e1e1;
}
</style>
