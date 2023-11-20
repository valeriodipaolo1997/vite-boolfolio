<script>
export default {
    name: 'AppHeader',
    data() {
        return {
        }
    }
}
</script>
<template>
     <header>
        <nav class="navbar navbar-expand-sm navbar-light bg-primary p-0">
            <div class="container">
                <ul class="list-unstyled d-flex gap-3 m-0">
                    <li>
                        <RouterLink class="nav-link py-3" active-class="active text-white" to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-link py-3" active-class="active text-white" to="/about">About</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-link py-3" active-class="active text-white" to="/contacts">Contacts
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-link py-3" active-class="active text-white" to="/projects">Projects
                        </RouterLink>
                    </li>
                </ul>

            </div>
        </nav>
    </header>
</template>
<style lang="scss" scoped></style>