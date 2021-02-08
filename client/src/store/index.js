import { createStore } from 'vuex'

export default createStore({
  state: {
    is_dark_theme: JSON.parse(localStorage.getItem('is_dark_theme')) ? JSON.parse(localStorage.getItem('is_dark_theme')) : false
  },
  mutations: {
    toggle_theme(state) {
      state.is_dark_theme = !state.is_dark_theme
      localStorage.setItem('is_dark_theme', JSON.stringify(state.is_dark_theme))
      document.getElementById('app').setAttribute("theme", state.is_dark_theme ? "dark" : "light")
    }
  },
  actions: {
  },
  modules: {
  }
})
