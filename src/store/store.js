import { createStore } from 'vuex'

//Firebase imports
import { auth } from '../firebase/config'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    updateProfile
} from 'firebase/auth'

const store = createStore({
  state: {
    //The user state will initially be null. After login, this state will be updated
    user: null
  },
  mutations: {
    //Mutation to update the user state
    //Takes in two arguments, the state and the payload. When we call this mutation, the payload will be user object from firebase auth
    //When the user logs out, we call the mutation and the payload will be null
    setUser(state, payload) {
      state.user = payload
      //Log out the user state
      console.log(state.user)
    }
  },
  actions: {
    async signup(context, { email, password, username }) {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      if (response) {
        updateProfile(response.user, username);
        context.commit('setUser', response.user)
        await sendEmailVerification(response.user);
      } else {
        throw new Error('signup failed')
      }
    },

    async login(context, { email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password)
      if (response) {
          context.commit('setUser', response.user)
      } else {
          throw new Error('login failed')
      }
    },

    async logout(context){
      await signOut(auth)

      context.commit('setUser', null)
    }
  }
});

// export the store
export default store