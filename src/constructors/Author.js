import { uuid } from 'vue-uuid'

export default class Author {
    constructor(author = {}) {
        this.id = uuid.v4()
        this.name = author.name || ''
        this.picture = author.picture || `https://fakeface.rest/face/view/${this.id}?minimum_age=20`
    }
}