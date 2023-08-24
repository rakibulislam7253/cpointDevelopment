<template>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">

        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <a href="/" class="nav-link">Home</a>
            </li>
            <!-- <li class="nav-item d-none d-sm-inline-block">
                <a href="#" class="nav-link">Contact</a>
            </li> -->
        </ul>

        <ul class="navbar-nav ml-auto">
            <li>
                <!-- <div style="float:right">

                    <img src="../../assets/images/user.png" style="width:5%;" />
                    {{ data1.firstName }} {{ data1.lastName }}
                </div> -->
                <div>

                </div>

            </li>

            <li class="nav-item dropdown">
                <a class="nav-link " data-toggle="dropdown" href="#">
                    <img src="../../assets/images/user.png" class="img-circle elevation-2 dropdown"
                        style="width:5%;float:right" />
                    <p v-if="user" style="float:right;color:black" class="pr-2 text-semibold"> {{ user.firstName }} {{
                        user.lastName
                    }}</p>
                    <p v-if="!user" style="float:right;color:black" class="pr-2 text-semibold"> you are not Logged</p>
                </a>
                <div class="dropdown-menu dropdown-menu-right">


                    <a href="/profile" class="dropdown-item">
                        <i class="fas fa-user mr-2"></i> My Profile
                    </a>


                    <div class="dropdown-divider"></div>
                    <a href="javascript:void(0)" @click="handleClick" class="dropdown-item">
                        <i class="fas fa-sign-out-alt mr-2"></i> Log Out
                    </a>


                    <div class="dropdown-divider"></div>
                    <div class="dropdown-divider"></div>

                </div>
            </li>

        </ul>
    </nav>
</template>
<script>
import axios from "axios";

import {mapGetters} from 'vuex'
export default {
    name: "Nevbar",
    data() {
        return {
            // data1: [],
            // user: null
        }
    },
    methods: {
        handleClick(){
            localStorage.removeItem('token');
            this.$store.dispatch('user',null)
            this.$router.push('/login');
        }
    },
    computed:{
        ...mapGetters(['user'])
    },
    async created() {
        // const userToken=localStorage.getItem('user')
        // const userTockenParse=JSON.parse(userToken)
        // console.log("userTockenParse : ", userTockenParse.data.jwt);
        const response = await axios.get('refresh-user-token', {
            headers:
            {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
        this.$store.dispatch('user',response.data);
        // this.data1 = response.data
        this.user = response.data
        console.log(response.data);
    }

}

</script>