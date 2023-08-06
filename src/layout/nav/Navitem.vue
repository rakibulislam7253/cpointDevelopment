<template>
    <li class="nav-item">
        <router-link :to="link" class="nav-link"  :class="{ active: isActive()}">
            <i class="icon" :class="icon"></i>
            <p><slot /></p>
        </router-link>
    </li>
</template>



<script>
export default {
    props: {
        icon: {
            type: String,
            default: null,
        },
        link: {
            type: [String, Object],
            default: null
        }
    },
    methods: {
        isActive() {
            if (typeof this.link === "object") {
                return this.$route.name === this.link.name;
            }
            else {
                return this.$route.path === this.link;
            }
        }
    }
}

</script>
