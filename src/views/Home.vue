<template>
  <v-container>
      <v-carousel>
          <v-carousel-item
            v-for="(slide,i) in slides"
            :key="i"
            :src="slide.src"
          ></v-carousel-item>
        </v-carousel>
      <ProjectsList />
  </v-container>
</template>

<script>

import ProjectsList from '../components/ProjectsList'

  export default {
    name: 'home',
    components: {
      ProjectsList
    },
    data() {
      return {
        slides: [
          {
            src: require("@/assets/ImpactLogo.jpg"),
            name: "impact"
          },
          {
            src: require("@/assets/SourceLogo.png"),
            name: "source"
          },
          {
            src: require("@/assets/AjustLogo.jpg"),
            name: "ajust"
          },
          {
            src: require("@/assets/DoughLogo.jpg"),
            name: "dough"
          },
          {
            src: require("@/assets/ProteoLogo.png"),
            name: "proteo"
          },
          {
            src: require("@/assets/ArupLogo.jpg"),
            name: "arup"
          },
          {
            src: require("@/assets/VahanaLogo.png"),
            name: "vahana"
          },
        ]
      }
    },
  }
</script>
