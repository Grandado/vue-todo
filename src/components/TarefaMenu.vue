<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon>
          <v-icon dark>mdi-cog</v-icon></v-btn
        >
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.click()"
        >
          <v-icon
            left
            :color="item.id == 'edit' ? 'blue darken-2' : 'red darken-3'"
            >{{ item.icon }}</v-icon
          >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <ModalEditar
      v-if="items[0].modal"
      @fecharModal="items[0].modal = false"
      :tarefa="tarefa"
    />
    <ModalExcluir
      v-if="items[1].modal"
      @fecharModal="items[1].modal = false"
      :tarefa="tarefa"
    />
  </div>
</template>

<script>
import ModalEditar from './dialogs/ModalEditar.vue';
import ModalExcluir from './dialogs/ModalExcluir.vue';

export default {
  name: 'TarefaMenu',
  props: ['tarefa'],
  components: { ModalEditar, ModalExcluir },
  data: () => {
    return {
      items: [
        {
          title: 'Editar',
          icon: 'mdi-pencil',
          id: 'edit',
          modal: false,
          click() {
            this.modal = true;
          },
        },
        {
          title: 'Excluir',
          icon: 'mdi-trash-can',
          id: 'delete',
          modal: false,
          click() {
            this.modal = true;
          },
        },
      ],
    };
  },
};
</script>
