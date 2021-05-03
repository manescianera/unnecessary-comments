<template>
	<div class="box-comment">
		<div>
			<img
				class="box-comment__photo"
				:src="comment.author.picture"
				:alt="comment.author.name"
			/>
		</div>
		<div>
			<div class="box-comment__header">
				<span class="box-comment__author">{{
					comment.author.name
				}}</span>
				<span class="box-comment__time">{{ comment.postedAt }}</span>
				<VButton
					class="btn--red btn--small"
					:onClick="
						() => {
							return removeComment(comment);
						}
					"
					text="Delete"
				/>
			</div>
			<div class="box-comment__body">
				<p class="box-comment__text">{{ comment.body }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import VButton from '@/components/VButton';
import { mapActions } from 'vuex';

export default {
	name: 'VComment',
	components: {
		VButton,
	},
	props: {
		comment: {
			type: Object,
			required: true,
		},
	},
	methods: {
		...mapActions(['removeComment']),
	},
};
</script>

<style lang="scss" scoped>
.box-comment {
	display: flex;
	padding: 0.4rem;
	padding-bottom: 1rem;
	border-radius: 3px;
	transition: all 300ms ease-in-out;

	&:hover {
		background: $bg-inner-lt;

		& .btn {
			opacity: 1;
		}
	}

	& > div {
		&:first-child {
			flex: 1;
		}
		&:last-child {
			flex: 7;
			padding-left: 0.6rem;
		}
	}

	&__header {
		display: flex;
		align-items: center;
		padding-block: 0.2rem;

		& .btn {
			opacity: 0;
			margin-left: auto;
			transition: opacity 300ms ease-in-out;
		}
	}

	&__author {
		margin-right: 0.8rem;
		font-weight: bold;
	}

	&__photo {
		object-fit: cover;
		width: 3rem;
		height: 3rem;
		border-radius: 1000px;
	}

	&__time {
		font-size: calc(1em - 2px);
		font-weight: bold;
		color: $lt-1;
	}

	&__text {
		color: $dk;
		overflow-wrap: break-word;
		padding-block: 0.2rem;
	}
}
</style>
