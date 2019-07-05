<template>
    <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex 
            xs12 
            sm6 
            v-for="project in projects"
            :key="project.name"

          >
              <v-card>
                <v-img
                  :src="project.src"
                  height="150px"
                ></v-img>
              </v-card>
    </v-flex>
  </v-layout>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
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
			],
			projectsChunked: [],
    }
  },
  // mounted() {
	// 	this.projectsChunked = this.chunk(this.projects, 2)
	// },
  // methods: {
  //   chunk(arr, size){
  //     var chunkedArr = [];
      
	// 		var noOfChunks = Math.ceil(arr.length/size);

	// 		console.log(noOfChunks);

  // 		for(var i=0; i<noOfChunks; i++){
  //       chunkedArr.push(arr.slice(i*size, (i+1)*size));
	// 		}

  //     this.$emit('projectsFromChild', this.projects)
  //  		return chunkedArr;
	// 	}
  // }
}
</script>

<style>

</style>
