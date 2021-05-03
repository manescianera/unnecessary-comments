<template>
	<div class="box">
		<CommentBoxHeader />
		<CommentBoxBody />
		<CommentBoxFooter />
	</div>
</template>

<script>
import CommentBoxHeader from '@/components/CommentBoxHeader';
import CommentBoxBody from '@/components/CommentBoxBody';
import CommentBoxFooter from '@/components/CommentBoxFooter';

export default {
	name: 'CommentBox',
	components: {
		CommentBoxHeader,
		CommentBoxBody,
		CommentBoxFooter,
	},
};
</script>

<style scoped lang="scss">
.box {
	display: grid;
	grid-template-rows: 1fr 10fr 2fr;

	background: $bg-inner;
	width: 32rem;
	height: 40rem;
	border-radius: 3px;
	box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.3);
}

:is(.box-header, .box-body, .box-footer) {
	padding: 1rem;
}

:is(.box-header, .box-body) {
	background: $bg-inner-dk;
}
</style>
