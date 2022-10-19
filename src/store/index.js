import Vue from 'vue';
import Vuex from 'vuex';
import Localbase from 'localbase';

let db = new Localbase('db');
db.config.debug = false

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tarefas: [],
  },
  getters: {},
  mutations: {
    buscarTarefas: (state) => {
      db.collection('tarefas')
        .get()
        .then((tarefasDb) => {
          state.tarefas = tarefasDb;
        });
    },
  },
  actions: {
    adicionarTarefa: ({ commit }, titulo) => {
      if (titulo) {
        db.collection('tarefas')
          .add({
            id: new Date().getTime(),
            titulo,
            concluido: false,
          })
          .then(() => {
            commit('buscarTarefas');
          });
      }
    },

    editarTarefa: ({ commit }, novaTarefa) => {
      db.collection('tarefas')
        .doc({ id: novaTarefa.id })
        .update({
          titulo: novaTarefa.titulo,
        })
        .then(() => {
          commit('buscarTarefas');
        });
    },
    removerTarefa: ({ commit }, id) => {
      db.collection('tarefas')
        .doc({ id: id })
        .delete()
        .then(() => {
          commit('buscarTarefas');
        });
    },
  },
  modules: {},
});
