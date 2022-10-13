<template>
  <div>
    <v-list-item
      :class="{ 'blue lighten-4': tarefa.concluido }"
      @click="tarefaRes.concluido = !tarefaRes.concluido"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="tarefa.concluido"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': tarefa.concluido }"
            >{{ tarefa.titulo }}</v-list-item-title
          >
        </v-list-item-content>

        <v-list-item-action icon @click.stop="handleRemoverTarefa(tarefa.id)">
          <v-btn icon>
            <v-icon color="red darken-3">mdi-trash-can</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  data() {
    return { tarefaRes: this.tarefa };
  },
  props: ['tarefa'],

  methods: {
    handleRemoverTarefa(id) {
      this.$store.commit('removerTarefa', id);
    },
  },
};
</script>

<style></style>
