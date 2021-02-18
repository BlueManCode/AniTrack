import { createStore } from 'vuex'

export default createStore({
  state: {
    is_dark_theme: JSON.parse(localStorage.getItem('is_dark_theme')) ? JSON.parse(localStorage.getItem('is_dark_theme')) : false,
    is_show_profile: true,
    added_shows: JSON.parse(localStorage.getItem('added_shows'))
  },
  mutations: {
    toggle_theme(state) {
      state.is_dark_theme = !state.is_dark_theme
      localStorage.setItem('is_dark_theme', JSON.stringify(state.is_dark_theme))
      document.getElementById('app').setAttribute("theme", state.is_dark_theme ? "dark" : "light")
    },
    toggle_profile(state) {
      state.is_show_profile = !state.is_show_profile
    }
  },
  actions: {
  },
  modules: {
  }
})
