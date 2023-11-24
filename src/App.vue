<script>
import ProjectCard from './components/ProjectCard.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import { state } from './state.js';

export default {
  name: 'App',
  data() {
    return {
      state
    }
  },

  components: {
    ProjectCard,
    AppHeader,
    AppFooter,
    
},

  methods: {

  },
  mounted() {
    this.state.getProjects()
  }
}
</script>

<template>
  <AppHeader />


  <main>


    <!--

        <div class="container">

    
        <h1 class="text-center text-warning py-5"> My Projects</h1>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">

          <ProjectCard :project="project" v-for="project in this.state.projects.data" />

        </div>
      </div>
        -->

    <RouterView />
  </main>

  <AppFooter />
</template>

<style scoped></style>
