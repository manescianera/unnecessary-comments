<template>
	<button v-if="onClick" class="btn" :type="type" @click="onClick">
		{{ text }}
	</button>
	<button v-else class="btn" :type="type">{{ text }}</button>
</template>

<script>
export default {
	name: 'VButton',
	props: {
		onClick: {
			type: Function,
		},
		type: {
			type: String,
			default: 'button',
		},
		text: {
			type: String,
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
