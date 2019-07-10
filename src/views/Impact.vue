
<template>
    <v-container>
        <project
            :title="title"
            :team="team"
            :text="text"
            :img-logo="imgLogo"
            :images="images"
            :urlDownload="urlDownload"
        ></project>
        <iframe src="//v.calameo.com/?bkcode=00591251281982ccff4b6&mode=mini"
            width="100%"
            height="500"
            frameborder="0"
            scrolling="no"
            allowtransparency
            allowfullscreen
            style="margin:0 auto;"
        >
        </iframe>
    </v-container>
</template>
<script>
import Project from '@/components/Project.vue'
export default {
    components: {
        Project
    },
    data() {
        return {
            title: "Impact",
            team: "ICAN - Antoine de Seguins, Félix Joubert, Nicolas Decelle et Rémy Stucky",
            text: "Impact est un jeu de tir en trois dimensions à la première personne.Le joueur y affronte des structures dynamiques et a pour objectif de les vaincre.Les structures dynamiques sont composées d’une granularité de cubes dans laquellele joueur peut sculpter grâce à la mécanique principale : l’impact de force.A l’aide de cette mécanique le joueur pourra modeler les structures qu’il affronteafin d’esquiver leurs mécanismes de défense mais aussi fouiller celles-ci dans le but deréveler et détruire leurs points faibles.",
            images: [
                require("@/assets/ImpactImg1.png"),
                require("@/assets/ImpactImg2.png"),
                require("@/assets/ImpactImg3.png")
            ],
            imgLogo: require("@/assets/ImpactLogo.jpg"),
            urlDownload: "https://impacteam.itch.io/impact"
        }
    }
}
</script>

<style>
h4 {
  margin: 50px 0 0 0;
}

.img-space {
  margin-bottom: 60px;
}
</style>
