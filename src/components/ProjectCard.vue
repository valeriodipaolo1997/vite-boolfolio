<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card mb-5">

            <img :src="project.thumb" alt="">

            <div class="card-body shadow">

                <h3><strong>Title:</strong>{{ project.title }}</h3>

                <div><strong>Description:</strong>{{ project.description }}</div>

                <div><strong>Content:</strong>{{ project.content }}</div>

                <div><strong>Project Url:</strong>{{ project.project_url }}</div>

                <div><strong>Git_url:</strong>{{ project.git_url }}</div>





            </div>

            <RouterLink :to="{ name: 'project', params: { slug: project.slug } }" class="text-white btn btn-primary">View
            </RouterLink>
        </div>
    </div>
</template>

<style scoped></style>