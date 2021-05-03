<template>
	<input
		class="input"
		:name="name"
		:value="value"
		:type="type"
		:placeholder="placeholder"
		@input="handleInput"
		autocomplete="off"
		required
	/>
</template>

<script>
export default {
	name: 'VInput',
	props: {
		name: {
			type: String,
		},
		value: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
		},
		type: {
			type: String,
			default: 'text',
		},
		required: {
			type: Boolean,
		},
	},
	methods: {
		handleInput() {
			this.$emit('input', event.target.value);
		},
	},
};
</script>

<style lang="scss" scoped>
.input {
	border-inline: none;
	border-top: none;
	border-bottom: 1px solid #e4e4e4;
	padding: 0.4rem;
	height: 2.4rem;
	margin-bottom: 1rem;
	font-size: 12px;
	color: #292929;
	transition: background 300ms ease;

	&:focus {
		outline: none;
		background: $bg-inner-dk;
	}

	&::placeholder {
		color: $lt-1;
	}
}
</style>
