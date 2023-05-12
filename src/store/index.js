import { createStore } from 'vuex'

export default createStore({
  state: {
    listaGatos: null
  },
  getters: {
  },
  mutations: {
    rellenarListaGatos(state, payload) {
      state.listaGatos = payload;
    }
  },
  actions: {
    async cargarGatos({commit}){
      let key = 'live_vAwkdUXc1nuNIneXkIOiOq1URXa2HxHWplMD5kNaOcXlcvSPytBk2llOgTlHsJW4'
      let url = await 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key='
      let promesa = await fetch(url + key)
      let gatos = await promesa.json();
      commit('rellenarListaGatos', gatos )
      console.log(gatos)
    }
  },
  modules: {
  }
})
