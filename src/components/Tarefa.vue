<template>
  <div>
    <v-list-item-group multiple color="green darken-1">
      <v-list-item @click="tarefaRes.concluido = !tarefaRes.concluido">
        <template v-slot:default="{}">
          <v-list-item-action>
            <v-checkbox
              :input-value="tarefa.concluido"
              color="success"
            ></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title
              :class="{ 'text-decoration-line-through': tarefaRes.concluido }"
              >{{ tarefaRes.titulo }}</v-list-item-title
            >
          </v-list-item-content>

          <v-list-item-action icon>
            <TarefaMenu :tarefa="tarefa" />
          </v-list-item-action>
        </template>
      </v-list-item>
      <v-divider></v-divider>
    </v-list-item-group>
  </div>
</template>

<script>
import TarefaMenu from './TarefaMenu.vue';

export default {
  components: { TarefaMenu },
  props: ['tarefa'],

  data() {
    return { tarefaRes: this.tarefa };
  },
};
</script>

<style></style>
