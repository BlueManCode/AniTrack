import { createStore } from 'vuex'

export default createStore({
  state: {
    is_dark_theme: JSON.parse(localStorage.getItem('is_dark_mode')) ? JSON.parse(localStorage.getItem('is_dark_mode')) : false,
    show_model: false  
  },
  mutations: {
    toggle_theme (state) {
      state.is_dark_theme = !state.is_dark_theme
      localStorage.setItem('is_dark_mode', JSON.stringify(state.is_dark_theme))
      document
      .getElementById("app")
      .setAttribute("theme", state.is_dark_theme ? "dark" : "light");
    },
    toggle_model (state) {
      state.show_model = !state.show_model
    }
  },
  actions: {
  },
  modules: {
  }
})
