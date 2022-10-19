<template>
  <div>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="campoInput"
        label="Qual sua tarefa?"
        outlined
        clearable
        @keyup.enter="handleAddTarefa"
      ></v-text-field>
    </v-col>

    <ListaTarefas />
  </div>
</template>

<script>
import ListaTarefas from '../components/ListaTarefas.vue';

export default {
  name: 'Home',

  components: { ListaTarefas },

  data() {
    return {
      campoInput: null,
    };
  },

  created() {
    this.$store.commit('buscarTarefas');
  },

  methods: {
    handleAddTarefa() {
      this.$store.dispatch('adicionarTarefa', this.campoInput);
      this.campoInput = null;
    },
  },
};
</script>
