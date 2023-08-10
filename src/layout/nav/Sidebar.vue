<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/" class="brand-link">
            <img src="../../assets/logo/logo-only.png" alt="AdminLTE Logo" class="img-size-50 py-2 px-1 mr-2 bg-white"
                style="opacity: .8">
            <span style="font-weight: bolder;color: rgb(229, 243, 255); font-family: 'Times New Roman', Times, serif;"
                class="mt-2">Citizens Bank </span>
        </a>

        <div class="sidebar">
            <br>
            <div class="form-inline">
                <div class="input-group" data-widget="sidebar-search">
                    <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
                    <div class="input-group-append">
                        <button class="btn btn-sidebar">
                            <i class="fas fa-search fa-fw"></i>
                        </button>
                    </div>
                </div>
            </div>

            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <!-- <i class="fa-regular fa-gallery-thumbnails fa-beat-fade"></i> -->
                 

                   <!-- Constraction Management -->
                   <li class="nav-item  menu-open">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-edit"></i>
                            <p>
                                Constraction
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">

                                <Navitem link="/UOM">
                                    <i class="far fa-object-ungroup nav-icon"></i>
                                    <p>Unit Of Management</p>
                                </Navitem>
                               
                            </li><br>
                        </ul>
                    </li>
                 
                 
                    <!-- Domain Management -->
                    <li class="nav-item  menu-open">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-edit"></i>
                            <p>
                                Domain Management
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">

                                <Navitem link="/domaininfo">
                                    <i class="far fa-object-ungroup nav-icon"></i>
                                    <p>Domain Information</p>
                                </Navitem>
                                <a href="pages/forms/general.html" class="nav-link">

                                </a>
                            </li>

                        </ul>
                    </li>
                  


                    <Navitem icon="fas fa-home" link="/">
                        Home
                    </Navitem>
                    
                    <Navitem icon="fas fa-info-circle" link="/about">
                        About
                    </Navitem>

                    <Navitem icon="fas fa-info-circle" link="/login">
                        Login
                    </Navitem>
                    <!-- <Navitem icon="fas fa-info-circle" link="/registration">
                        Sign Up
                    </Navitem> -->

                    <Navitem icon="far fa-object-ungroup nav-icon" link="/gallery">
                        Gallery
                    </Navitem>
                    <Navitem icon="fas fa-info-circle" link="/datatable">
                        DataTable
                    </Navitem>
                    <Navitem icon="fas  fa-calendar" style="color: #497ad0;" link="/calender">
                        Calender
                    </Navitem>
                    
                    <Navitem icon="fas  fa-calendar" style="color: #497ad0;" link="/testing">
                        Testing
                    </Navitem>

                </ul>


            </nav>

        </div>

    </aside>
    <aside class="control-sidebar control-sidebar-dark">
        <!-- Control sidebar content goes here -->
    </aside>
</template>



<script>
import Navitem from './Navitem.vue'
export default {
    components: {
        Navitem
    }
}



var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
}

</script>




<style>
ul,
#myUL {
    list-style-type: none;
}

#myUL {
    margin: 0;
    padding: 0;
}

.caret {
    cursor: pointer;
    -webkit-user-select: none;
    /* Safari 3.1+ */
    -moz-user-select: none;
    /* Firefox 2+ */
    -ms-user-select: none;
    /* IE 10+ */
    user-select: none;
}

.caret::before {
    content: "\25B6";
    color: black;
    display: inline-block;
    margin-right: 6px;
}

.caret-down::before {
    -ms-transform: rotate(90deg);
    /* IE 9 */
    -webkit-transform: rotate(90deg);
    /* Safari */

    transform: rotate(90deg);
}

.nested {
    display: none;
}

.active {
    display: block;
}
</style>