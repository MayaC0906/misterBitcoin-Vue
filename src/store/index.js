import { createStore } from 'vuex'
import contact from './modules/contact.js'

const storreOptions = {
    strict: true,
    modules: {
        contact
    }
}

const store = createStore(storreOptions)
export default store
