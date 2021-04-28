<template>
	<div class="box"></div>
</template>

<script>
export default {
	name: 'CommentBox',
};
</script>

<style scoped lang="scss">
.box {
	display: flex;
	flex-direction: column;

	background: #fff;
	width: 24em;
	height: 32em;
	border-radius: 3px;
	padding: 1em;
	box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.3);
}
</style>
