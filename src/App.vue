<template>
	<div id="app">
		<CommentBox />
	</div>
</template>

<script>
import CommentBox from './components/CommentBox.vue';
import { mapActions } from 'vuex';
import Comment from '@/constructors/Comment';
import Author from '@/constructors/Author';
import axios from 'axios';
import { scrollIntoView } from '@/helpers';

export default {
	name: 'App',
	components: {
		CommentBox,
	},
	mounted() {
		scrollIntoView('.box-comment:last-child');
		this.generateComments(10);
	},
	methods: {
		...mapActions(['addComment']),
	},
};
</script>

<style lang="scss">
* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	text-decoration: none;
	font-family: 'Open Sans', sans-serif;
	font-size: $rem;
	scroll-behavior: smooth;
	font-smooth: antialiased;
}

:is(html, body) {
	width: 100%;
	height: 100%;
}

body {
	display: grid;
	place-items: center;
	background: $bg-outer;
}
</style>
