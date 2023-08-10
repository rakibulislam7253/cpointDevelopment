<template>
    <div class="background">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class=" my-5">
                    <div class="card-body cardbody-color">
                        <div class="text-center my-4">
                            <img src="../assets/logo/Logo.png"  style="margin-bottom: 60px; width:65%" alt="profile" />
                        </div>
                        <!-- INPUT WITH EMAIL -->

                        <div class="mb-3">
                            <input type="text" id="userName" v-model="userName" class="form-control form-control-sm"
                                placeholder="UserName" />
                        </div>


                        <!-- INPUT WITH PASSWORD -->
                        <input v-if="showPassword" type="text" class="input form-control form-control-sm showinput"
                            v-model="password" />

                        <input v-else type="password" class="input form-control form-control-sm showinput"
                            placeholder="Password..." v-model="password" />





                        <div style="color:red; position:absolute">
                            <p style="margin-left:50px ">{{ errordata }}</p>
                        </div>

                        <!-- SHOW PASSWORD ICON -->
                        <div class="field has-addons">

                            <div class="control mt-5">


                                <p class="button" @click="toggleShow">
                                    <span class="icon is-small is-right">
                                        <FontAwesome v-if="showPassword" icon="fas fa-eye-slash" />
                                        <FontAwesome v-else icon="fas fa-eye" />
                                        <!-- <i v-else class="fas fa-eye" /> -->
                                    </span>
                                </p>

                            </div>



                            <!-- LOGIN BUTTON -->

                            <div class="text-center">
                                <button v-on:click="submitFormAd()" class="btn btn-color btn-success btn-sm mb-2">Login with
                                    AD</button>
                                <button v-on:click="submitForm()" class="btn btn-color btn-primary btn-sm mb-5">Login</button>
                            </div>
                            <div style="color:rgb(41, 125, 221);margin-top:-40px;margin-bottom:60px">
                                <p style="margin-left:45px; color:black">No Account?<a href="/registration"
                                        style="margin-left:10px;cursor:pointer ">Create Account</a></p>
                            </div>

                            <!-- <div class="text-center">
                                <button type="button" class="btn btn-primary">Primary</button>
                                <button class="btn btn-color mb-5">Login</button>
                            </div> -->
                        </div>
                        <!-- <div style="margin-top: 20px">
                            <a href="#" class="ad">Login with AD</a>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>







<script>
import axios from 'axios';
export default {
    name: 'logininventory',
    data() {
        return {
            userName: "",
            password: "",
            showPassword: false,
            errordata: ""
        };
    },
    computed: {
        buttonLabel() {
            return this.showPassword ? "Hide" : "Show";
        },
    },



    methods: {
        toggleShow() {
            this.showPassword = !this.showPassword;
        },


        async submitFormAd() {

            let response = await axios.post('loginWithAd', {
                userName: this.userName,
                 password: this.password,


                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(this.userName),
                //  withCredentials: true,
            });

            console.log(this.userName);
            console.log(this.password);
            console.log('log in with AD');
            console.log(response.data);
            localStorage.setItem('user', JSON.stringify(response))
            this.$router.push('/')

        },

        async submitForm() {

            let response = await axios.post('login', {
                userName: this.userName,
                password: this.password,


                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(this.userName)
                // withCredentials: true,
            });

            // console.log(this.userName);
            // console.log(this.password);
            // console.log(response.data);
            localStorage.setItem('user', JSON.stringify(response))
            this.$router.push('/')

        },



    },

}



</script>





<style>
body{
    overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */
}
.button {
    border: none;
    position: absolute;
    margin-left: 41%;
    margin-top: -75px;
    width: 4%;
    color: rgb(55, 56, 56);
    cursor: pointer;
}

.cardbody-color input {
    width: 80%;
    margin-left: 10%;
}

button {
    width: 80%;
}

a {
    text-decoration: none;
}

.card-body {
    background-color: rgb(255, 255, 255);
    border: 2px solid green;
    width: 56%;
    margin-left: 100px;
    margin-top: 15%;
    border-radius: 5px;
}

.card {
    border: none;
    margin: 90px;
    padding: 0px;
}

.background {
    background-image: url("../assets/logo/Logo-Big.jpg");
    background-size: cover;
    background-position: center;
    min-height: 100vh;
}

.ad {
    color: green;
    font-weight: 500;
    display: flex;
    justify-content: center;
    margin-bottom: 0px;
}
</style>