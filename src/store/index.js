import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tarefas: [
      { id: 1, titulo: 'Ir ao mercado', concluido: false },
      { id: 2, titulo: 'Comprar Ração', concluido: false },
    ],
  },
  getters: {},
  mutations: {
    adicionarTarefa(state, titulo) {
      if (titulo) {
        state.tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluido: false,
        });
      }
    },
    removerTarefa(state, id) {
      state.tarefas = state.tarefas.filter((e) => e.id !== id);
    },
  },
  actions: {},
  modules: {},
});
