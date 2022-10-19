<template>
  <div class="d-inline-flex pa-2">
    <DropList
      :items="tarefasComputadas"
      @reorder="$event.apply(tarefasComputadas)"
    >
      <template v-slot:item="{ item, reorder }">
        <Drag :key="item.id" :data="item">
          <Tarefa
            :tarefa="item"
            style="background-color: white"
            :style="
              reorder
                ? { borderLeft: '2px solid #1976D2', marginLeft: '-2px' }
                : {}
            "
          />
          <v-divider />
        </Drag>
      </template>
    </DropList>
  </div>
</template>

<script>
import { Drag, /* Drop, */ DropList } from 'vue-easy-dnd';
import Tarefa from '../components/Tarefa.vue';

export default {
  components: {
    Tarefa,
    Drag,
    DropList,
    /* Drop, */
  },

  data: () => {
    return {};
  },

  computed: {
    tarefasComputadas() {
      return this.$store.state.tarefas;
    },
  },
};
</script>
