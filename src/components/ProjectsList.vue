<template>
  <!-- <v-container> -->
    <transition name="fade">
        <v-container 
          grid-list-xl  
          v-if="!show"
        >
            <v-layout row wrap>
                <v-flex 
                  xs12 
                  sm6
                  v-for="project in projects"
                  :key="project.name"
                >
                    <v-hover>
                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 24 : 2}`">
                            <router-link :to="'/' + project.name" class="first-row w-100">
                                <v-img
                                  :src="project.src"
                                  aspect-ratio="1.9"
                                ></v-img>
                            </router-link>
                        </v-card>  
                    </v-hover>
                </v-flex>
            </v-layout>
        </v-container>
    </transition>
  <!-- </v-container> -->
</template>

<script>
export default {
  data() {
    return {
      show: true,
      projects: [
				{
          src: require("@/assets/ImpactLogo.jpg"),
          name: 'Impact'
        },
				{
          src: require('@/assets/ArupLogo.jpg'),
          name: 'ARUP'
        },
        {
          src: require('@/assets/DoughLogo.jpg'),
          name: 'Dough'
        },
        {
          src: require('@/assets/ProteoLogo.png'),
          name: 'Proteo'
        },
				{
          src: require('@/assets/SourceLogo.png'),
					name: 'Source'
				},
        {
          src: require('@/assets/AjustLogo.jpg'),
          name: 'Ajust'
        },
        {
          src: require('@/assets/VahanaLogo.png'),
          name: 'Vahana'
        }
			]
    }
  },
  mounted() {
    this.show = false
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
