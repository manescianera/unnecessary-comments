import Author from '@/constructors/Author'
import { uuid } from 'vue-uuid'

export default class Comment {
    constructor(comment = {}) {
        this.id = uuid.v4()
        this.author = new Author(comment.author) || new Author()
        this.postedAt = comment.postedAt || ''
        this.body = comment.body || ''
    }
}