<template>
	<div class="box-header">
		<span
			class="box-header__hidden"
			v-if="hiddenCommentsCount"
			@click="INCREMENT_MAX_VISIBLE(20)"
		>
			{{ hiddenCommentsCount }} earlier
			{{ hiddenCommentsCount > 1 ? 'comments' : 'comment' }}
		</span>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import VButton from '@/components/VButton';

export default {
	name: 'CommentBoxHeader',
	components: {
		VButton,
	},
	computed: {
		...mapGetters(['hiddenCommentsCount', 'visibleComments']),
	},
	methods: {
		...mapMutations(['INCREMENT_MAX_VISIBLE']),
	},
};
</script>

<style lang="scss" scoped>
.box-header {
	&__hidden {
		color: $dk;

		&:hover {
			cursor: pointer;
			color: $md;
			text-decoration: underline;
		}
	}
}
</style>
