<template>
	<button v-if="onClick" class="btn" :type="type" @click="onClick">
		<slot>button</slot>
	</button>
	<button v-else class="btn" :type="type">
		<slot>button</slot>
	</button>
</template>

<script>
export default {
	name: 'VButton',
	props: {
		onClick: {
			type: Function,
			required: false,
		},
		type: {
			type: String,
			default: 'button',
		},
	},
};
</script>

<style lang="scss" scoped>
.btn {
	border-radius: 3px;
	border: none;
	padding: 0.4rem 0.6rem;
	background: $dk;
	color: $lt-2;
	transition: all 150ms ease;

	&:hover {
		cursor: pointer;
		filter: brightness(1.1);
	}

	&--small {
		padding: 0.2rem 0.4rem;
		font-size: calc(1em - 3px);
	}

	&--green {
		background: $green;
	}

	&--gray {
		background: $gray;
	}

	&--red {
		background: $red;
	}
}
</style>
