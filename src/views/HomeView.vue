<script>

import ProjectCard from '../components/ProjectCard.vue';
import { state } from '../state.js';
export default {
    name: 'HomeView',
    data() {
        return {
            state
        }
    },
    components: {
        ProjectCard
    },
    mounted() {
        this.state.getLatestProjects()
    }
}
</script>


    



<template>
    <section class="latest py-5 bg-secondary">
        <div class="container">
            <h1 class="text-uppercase text-center py-4 text-primary">My latest projects</h1>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                <ProjectCard :project="project" v-for="project in this.state.latestProjects" />
            </div>
        </div>

    </section>
</template>


<style lang="scss" scoped></style>