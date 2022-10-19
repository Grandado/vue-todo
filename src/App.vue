<template>
  <v-app id="inspire">
    <v-app-bar app color="green darken-3" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Tarefas</v-app-bar-title>
    </v-app-bar>
    
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Vue.js </v-list-item-title>
          <v-list-item-subtitle> Lista de Tarefas </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main> <router-view /></v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: 'Tarefas', icon: 'mdi-view-dashboard', to: '/' },
      { title: 'Sobre', icon: 'mdi-help-box', to: '/sobre' },
    ],
  }),
};
</script>

<!-- <style>
html {
  overflow-y: auto;
}
</style> -->
