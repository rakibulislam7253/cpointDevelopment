<template>
    <div class="wrapper">
        <navber />
        <sidebar />

        <div class="content-wrapper">

            <router-view />
        </div>

        <footer class="main-footer">
            <div class="float-right d-none d-sm-block">
                <b>Version</b> 3.2.0
            </div>
            <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
        </footer>

        <aside class="control-sidebar control-sidebar-dark">

        </aside>

    </div>
</template>

<script>

import Navber from "./nav/Nevbar.vue"
import Sidebar from "./nav/Sidebar.vue"
export default {
    components: {
        Navber,
        Sidebar
    }
}
</script>