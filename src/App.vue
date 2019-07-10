<template>
  <v-app>
    <v-container>
      <v-layout 
        column
      >
        <h1 class="display-2 font-weight-bold">Antoine de Seguins</h1>
        <h2 class="">Game Designer Junior</h2>

        <v-container>
            <v-toolbar>
                <v-layout justify-center align-center fill-height>
                    <v-toolbar-items>
                        <v-btn 
                          v-for="item in navBarItems" 
                          :key="item.title"
                          :to="item.path"
                          flat>{{ item.title }}
                        </v-btn>
                    </v-toolbar-items>
                </v-layout>
            </v-toolbar>
        </v-container>
    </v-layout>
    </v-container>
    <router-view />
    <v-container>
        <v-btn flat href="https://www.linkedin.com/in/antoine-de-seguins-b7420112a/" target="_blank"><ion-icon name="logo-linkedin" size="large"></ion-icon></v-btn>
        <v-btn flat href="https://twitter.com/Adeseguins" target="_blank"><ion-icon name="logo-twitter" size="large"></ion-icon></v-btn>
        <v-btn flat href="mailto:antoinedeseguins@gmail.com" target="_blank"><ion-icon name="logo-google" size="large"></ion-icon></v-btn> 
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      navBarItems: [
        { title: "Accueil", path: "/" },
        { title: "Projects de Game Design", path: "/gameDesign" },
        { title: "CV", path: "/about" },
        { title: "Contact", path: "/contact" }
      ]
    }
  }
}
</script>

<style>
#app, html {
    font-family: 'Helvetica 55Roman';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>

