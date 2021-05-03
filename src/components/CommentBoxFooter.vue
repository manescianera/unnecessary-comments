<template>
	<div class="box-footer">
		<form class="box-footer__form" @submit.prevent="addNewComment">
			<VInput
				name="name"
				v-model="newComment.author.name"
				:required="true"
				placeholder="Your name"
			/>
			<VInput
				name="comment"
				v-model="newComment.body"
				:required="true"
				placeholder="Add a comment"
			/>
			<div class="box-footer__buttons">
				<VButton class="btn--green" type="submit" text="Post" />
				<VButton class="btn--gray" type="reset" text="Cancel" />
				<VButton
					class="btn--gray"
					text="Generate"
					:onClick="
						() => {
							return generateComments(1);
						}
					"
				/>
			</div>
		</form>
	</div>
</template>

<script>
import VButton from '@/components/VButton';
import VInput from '@/components/VInput';
import { mapActions } from 'vuex';
import Comment from '@/constructors/Comment';
import Author from '@/constructors/Author';

export default {
	name: 'CommentBoxFooter',
	components: {
		VButton,
		VInput,
	},
	mounted() {
		this.scrollToBottom();
	},
	data() {
		return {
			newComment: new Comment(),
		};
	},
	methods: {
		...mapActions(['addComment']),

		addNewComment() {
			this.addComment(
				new Comment({
					postedAt: this.$luxon(new Date().toISOString(), 't'),
					author: this.newComment.author,
					body: this.newComment.body,
				})
			);

			Object.assign(this.newComment, new Comment());

			this.scrollToBottom();
		},

		scrollToBottom() {
			const el = document.querySelector('.box-comment:last-child');
			if (el) {
				setTimeout(() => {
					el.scrollIntoView();
				}, 300);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.box-footer {
	&__form {
		display: flex;
		flex-direction: column;

		height: 100%;
		padding-top: 1rem;
	}

	&__buttons {
		display: flex;
		& > * {
			margin-right: 0.4rem;

			&:last-child {
				margin-inline: auto 0;
			}
		}
	}
}
</style>
