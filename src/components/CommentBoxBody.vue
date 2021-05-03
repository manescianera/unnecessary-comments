<template>
	<transition-group class="box-body" name="list-fade" mode="in-out" tag="div">
		<VComment
			v-for="comment in visibleComments"
			:key="comment.id"
			:comment="comment"
		/>
	</transition-group>
</template>

<script>
import VComment from '@/components/VComment';
import { mapGetters, mapActions } from 'vuex';

export default {
	name: 'CommentBoxBody',
	components: {
		VComment,
	},
	data() {
		return {
			comments: [],
		};
	},
	computed: {
		...mapGetters(['visibleComments']),
	},
	methods: {
		...mapActions(['removeComment']),
	},
};
</script>

<style lang="scss" scoped>
.box-body {
	position: relative;

	display: flex;
	flex-direction: column;

	overflow: auto;
	// Works on ff only.
	scrollbar-width: thin;
}

.list-fade-enter-active,
.list-fade-leave-active {
	transition: opacity 3000ms ease, transform 500ms;
}

.list-fade-enter-active {
	background: rgba(52, 143, 85, 0.1);

	&:hover {
		background: rgba(52, 143, 85, 0.15);
	}
}

.list-fade-leave-active {
	position: absolute;
	left: 1rem;
	right: 1rem;
	transition: opacity 300ms;
}

.list-fade-enter,
.list-fade-leave-to {
	opacity: 0;
}

.list-fade-enter {
	transform: scale(0);
}

.list-fade-move {
	transition: transform 300ms ease;
}
</style>
