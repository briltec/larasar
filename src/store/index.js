import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

// import example from './module-example'
// import Auth from '../boot/auth.js'
import showcase from './showcase'
=======
>>>>>>> modemb/dev
=======
>>>>>>> modemb/dev
=======
>>>>>>> modemb/dev
import users from './users'

Vue.use(Vuex)
// Vue.use(Auth)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      // example,
      showcase,
=======
>>>>>>> modemb/dev
=======
>>>>>>> modemb/dev
=======
>>>>>>> modemb/dev
      users
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  /*
    if we want some HMR magic for it, we handle
    the hot update like below. Notice we guard this
    code with "process.env.DEV" -- so this doesn't
    get into our production build (and it shouldn't).
  */

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  if (process.env.DEV && module.hot) {
    module.hot.accept(['./showcase'], () => {
      const newShowcase = require('./showcase').default
      Store.hotUpdate({ modules: { showcase: newShowcase } })
    })
  }
=======
=======
>>>>>>> modemb/dev
=======
>>>>>>> modemb/dev
  // if (process.env.DEV && module.hot) {
  //   module.hot.accept(['./showcase'], () => {
  //     const newShowcase = require('./showcase').default
  //     Store.hotUpdate({ modules: { showcase: newShowcase } })
  //   })
  // }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> modemb/dev
=======
>>>>>>> modemb/dev
=======
>>>>>>> modemb/dev

  return Store
}
