<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Editar Tarefa </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-2">Informe o novo titulo.</v-card-text>
        <v-text-field
          v-model="titulo"
          class="px-4"
          label="Titulo"
          outlined
        ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="$emit('fecharModal')">
            Cancelar
          </v-btn>
          <v-btn color="blue darken-1" text @click="handleEditar">
            Editar
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
    return { dialog: true, titulo: null };
  },
  created() {
    this.titulo = this.tarefa.titulo;
  },
  methods: {
    handleEditar() {
      let novaTarefa = { titulo: this.titulo, id: this.tarefa.id };
      this.$store.dispatch('editarTarefa', novaTarefa);
      this.$emit('fecharModal');
    },
  },
};
</script>
