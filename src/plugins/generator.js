import axios from 'axios'
import { DateTime } from 'luxon'
import store from '../store'
import Comment from '../constructors/Comment'
import Author from '../constructors/Author'
import { scrollIntoView } from '../helpers/index.js'


// API call to get random first and last names, generate picture for comment author.
const getAuthor = async () => {
    try {
        const res = await axios.get(
            'https://randomuser.me/api/?nat=US'
        );
        const person = res.data.results[0];
            
        return new Author({
            name: `${person.name.first} ${person.name.last}`,
            picture: `https://fakeface.rest/face/view/${person.login.uuid}?minimum_age=20&gender=${person.gender}`,
        });
    } catch (err) {
        console.log(err);
    }
}


// API call to get a random "useless fact" for comment body.
const getText = async () => {
    try {
        const res = await axios.get(
            'https://uselessfacts.jsph.pl/random.json?language=en'
        );

        return res.data.text;
    } catch (err) {
        console.log(err);
    }
}


// Generate n comments.
const Generator = {
    install(Vue, options) {
        Vue.prototype.generateComments = async (n) => {
			for (let i = 0; i < n; i++) {
				// Random delay (1 - 10s). First iteration calls instantly.
				const delay =
					i > 0 ? Math.floor(Math.random() * 10 + 1) * 1000 : 0;
				await new Promise((resolve) => {
					setTimeout(resolve, delay);
				});

                store.dispatch('addComment', new Comment({
                    author: await getAuthor(),
                    postedAt: DateTime.fromISO(new Date().toISOString()).toFormat('t'),
                    body: await getText(),
                }))

                // Scroll to the bottom only when 1 comment is generated (with the 'Generate' button).
                if (n === 1) { scrollIntoView('.box-comment:last-child') }
			}
		}
    }
}

export default Generator