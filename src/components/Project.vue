<template>
  <v-container>
    <v-layout row>
      <v-flex px-0>
          <h1 class="text-lg-left">{{ title }}</h1>
          <h5 class="text-lg-left">{{ team }}</h5>
          <div  style="width:50%;">
            <p class="text-lg-left">{{ text }}</p>
            <p v-if="urlDownload !== null">
              Lien de téléchargement :
              <v-btn 
                v-if="urlDownload !== null" 
                :href="urlDownload" 
                target="_blank" 
                flat 
                round
                >
                {{urlDownload}}
              </v-btn>
            </p>
          </div>
      </v-flex>
        <v-img :src="imgLogo" 
            min-width="500" 
            min-height="300"
            max-width="500" 
            max-height="300"
          ></v-img>
    </v-layout>
    <v-container>
      <v-layout v-for="(image, index) in images" :key="index">
        <v-img :src="image">

        </v-img>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    },
    urlDownload: {
      type: String,
      default: null
    },
    team: {
      type: String
    },
    imgLogo: {
      type: String
    },
    images: {
      type: Array
    },
    iframeSource: {
      default: "",
      type: String
    }
  }
};
</script>

<style>
</style>
