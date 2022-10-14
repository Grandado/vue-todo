<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Excluir Tarefa </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-2"
          >Tem certeza que deseja excluir a tarefa?</v-card-text
        >

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="$emit('fecharModal')">
            Cancelar
          </v-btn>
          <v-btn color="blue darken-1" text @click="handleExcluir">
            Excluir
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['tarefa'],
  data() {
    return { dialog: true };
  },

  methods: {
    handleExcluir() {
      this.$store.dispatch('removerTarefa', this.tarefa.id);
      this.$emit('fecharModal');
    },
  },
};
</script>
