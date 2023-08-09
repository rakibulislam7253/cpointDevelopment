<template>
    <div class="background">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="my-5">
                    <div class="card-body cardbody-color">
                        <div class="text-center my-4">
                            <img src="../assets/logo/Logo.png" class="w-50" style="margin-bottom: 60px" alt="profile" />
                        </div>
                        <!-- INPUT WITH EMAIL -->
                        <div class="form_wrapper" >
                            <div class="form_container" style="margin-top:-25px">
                                <div class="row clearfix">
                                    <div class="">
                                        <form @submit.prevent="submittedSignUp" >
                                            <div class="row clearfix" style="margin-top:-18px">
                                                <div class="col_half">
                                                    <div class="input_field" style="width:105%">
                                                        <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                                        <input type="text" v-model="firstName" name="FirstName"
                                                            placeholder="First Name" />
                                                    </div>
                                                </div>
                                                <div class="col_half">
                                                    <div class="input_field" style="width:105%;margin-left:-10px " >
                                                        <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                                        <input type="text" v-model="lastName" name="LastName"
                                                            placeholder="Last Name" required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="input_field" style="margin-top:-17px">
                                                <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                                <input type="text" v-model="userName" name="User Name"
                                                    placeholder="User Name" required />
                                            </div>
                                            <div class="input_field" style="margin-top:-10px">
                                                <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                                                <input type="email" v-model="email" name="email" placeholder="Email"
                                                    required />
                                            </div>
                                            <!-- department -->
                                            <div class="input_field select_option" style="margin-top:-10px">
                                                <select v-model="selectedDepartment">
                                                    <option disabled value="">Department</option>
                                                    <option v-for="item in data" :key="item.id">
                                                        {{ item.department_name }}
                                                    </option>
                                                </select>
                                                <div class="select_arrow"></div>
                                            </div>

                                            <!-- Designation -->
                                            <div class="input_field select_option" style="margin-top:-10px">
                                                <select v-model="selectedModule">
                                                    <option disabled value="">Designation</option>
                                                    <option v-for="item in designation" :key="item.id">
                                                        {{ item.designation_name }}
                                                    </option>
                                                </select>
                                                <div class="select_arrow"></div>
                                            </div>
                                            <!-- role -->
                                            <div class="input_field select_option" style="margin-top:-10px">
                                                <select v-model="selectedRole">
                                                    <option disabled value="">Role</option>
                                                    <option v-for="item in role" :key="item.id">
                                                        {{ item.name }}
                                                    </option>
                                                </select>
                                                <div class="select_arrow"></div>
                                            </div>
                                            <!-- Module -->
                                            <div class="input_field select_option" style="margin-top:-10px">
                                                <select v-model="selectedDesignation">
                                                    <option disabled value="">Module_name</option>
                                                    <option v-for="item in moduledata" :key="item.id">
                                                        {{ item.module_name }}
                                                    </option>
                                                </select>
                                                <div class="select_arrow"></div>
                                            </div>
                                            <!-- branch -->
                                            <div class="input_field select_option" style="margin-top:-10px">
                                                <select v-model="selectBranch">
                                                    <option disabled value="">Branch</option>
                                                    <option v-for="item in branch" :key="item.id">
                                                        {{ item.branch_name }} {{ item.branch_id }}
                                                    </option>
                                                </select>
                                                <div class="select_arrow"></div>
                                            </div>

                                            <div class="input_field" style="margin-top:-10px">
                                                <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                                <input type="password" v-model="password" name="password"
                                                    placeholder="Password" required />
                                            </div>

                                            <input class="button" type="submit" value="Sign Up" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <p class="credit" style="margin-top:-15px">Already have an account? <a href="/login">Sign In</a></p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "registration",

    data() {
        return {
            // fetch data variable
            data: null,
            designation: null,
            role: null,
            moduledata: null,
            branch: null,
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            selectedDepartment: "",
            selectedRole: "",
            selectedModule: "",
            selectedDesignation: "",
            selectBranch: ""
        };
    },

    mounted() {
        // Department
        fetch("http://10.140.2.35/cPoint/api/Department/get-department_list")
            .then((response) => response.json())
            .then((data) => {
                this.data = data;
            })
            .catch((error) => {
                console.error(error);
            });

        // Designation
        fetch("http://10.140.2.35/cPoint/api/Designation/get-designation_list")
            .then((response) => response.json())
            .then((data) => {
                this.designation = data;
            })
            .catch((error) => {
                console.error(error);
            });

        // Role
        fetch("http://10.140.2.35/cPoint/api/Role/get_roles")
            .then((response) => response.json())
            .then((data) => {
                this.role = data;
            })
            .catch((error) => {
                console.error(error);
            });
        // module
        fetch("http://10.140.2.35/cPoint/api/Module/get-module_list")
            .then((response) => response.json())
            .then((data) => {
                this.moduledata = data;
            })
            .catch((error) => {
                console.error(error);
            });
        // branch
        fetch("http://10.140.2.35/cPoint/api/Branch/get-branch_by_name")
            .then((response) => response.json())
            .then((data) => {
                this.branch = data;
            })
            .catch((error) => {
                console.error(error);
            });
    },

    methods: {
        submittedSignUp() {
            const data = {
                firstName: this.firstName,
                lastName: this.lastName,
                userName: this.userName,
                email: this.email,
                Designation: this.selectedDesignation,
                Role: this.selectedRole,
                Department: this.selectedDepartment,
                Branch: this.selectBranch,
            };

            console.log(data);
        },
    },
};
</script>

<style>
body {
    overflow-y: hidden;
    /* Hide vertical scrollbar */
    overflow-x: hidden;
    /* Hide horizontal scrollbar */
}

.card-body {
    background-color: rgb(255, 255, 255);
    border: 2px solid green;
    width: 60%;
    margin-left: 100px;
    margin-top: 5%;
    border-radius: 5px;
    /* height: 20px; */
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

.clearfix:after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
}

.clearfix:after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
}

.form_wrapper {
    background: #fff;
    width: 400px;
    max-width: 100%;
    box-sizing: border-box;
    padding: 25px;
    margin-left: 3%;
    margin-top: -7%;
    position: relative;
    z-index: 1;
    /* border-top: 5px solid #f5ba1a; */
    /* -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); */
    /* -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); */
    /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); */
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    -webkit-transition: none;
    transition: none;
    -webkit-animation: expand 0.8s 0.6s ease-out forwards;
    animation: expand 0.8s 0.6s ease-out forwards;
    opacity: 0;
}

.form_wrapper h2 {
    font-size: 1.5em;
    line-height: 1.5em;
    margin: 0;
}

.form_wrapper .title_container {
    text-align: center;
    padding-bottom: 15px;
}

.form_wrapper h3 {
    font-size: 1.1em;
    font-weight: normal;
    line-height: 1.5em;
    margin: 0;
}

.form_wrapper label {
    font-size: 12px;
}

.form_wrapper .row {
    margin: 10px -15px;
}

.form_wrapper .row>div {
    padding: 0 15px;
    box-sizing: border-box;
}

.form_wrapper .col_half {
    width: 50%;
    float: left;
}

.form_wrapper .input_field {
    position: relative;
    margin-bottom: 20px;
    -webkit-animation: bounce 0.6s ease-out;
    animation: bounce 0.6s ease-out;
}

.form_wrapper .input_field>span {
    position: absolute;
    left: 0;
    top: 0;
    color: #333;
    height: 100%;
    border-right: 1px solid #cccccc;
    text-align: center;
    width: 30px;
}

.form_wrapper .input_field>span>i {
    padding-top: 10px;
}

.form_wrapper .textarea_field>span>i {
    padding-top: 10px;
}

.form_wrapper input[type="text"],
.form_wrapper input[type="email"],
.form_wrapper input[type="password"] {
    width: 100%;
    padding: 8px 10px 9px 35px;
    height: 35px;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    outline: none;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.form_wrapper input[type="text"]:hover,
.form_wrapper input[type="email"]:hover,
.form_wrapper input[type="password"]:hover {
    background: #fafafa;
}

.form_wrapper input[type="text"]:focus,
.form_wrapper input[type="email"]:focus,
.form_wrapper input[type="password"]:focus {
    -webkit-box-shadow: 0 0 2px 1px rgba(255, 169, 0, 0.5);
    -moz-box-shadow: 0 0 2px 1px rgba(255, 169, 0, 0.5);
    box-shadow: 0 0 2px 1px rgba(255, 169, 0, 0.5);
    border: 1px solid #f5ba1a;
    background: #fafafa;
}

.form_wrapper input[type="submit"] {
    background: #049e3f;
    height: 35px;
    line-height: 35px;
    width: 100%;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.1em;
    margin-bottom: 10px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.form_wrapper input[type="submit"]:hover {
    background: #049e3f;
}

.form_wrapper input[type="submit"]:focus {
    background: #049e3f;
}

.form_wrapper input[type="checkbox"],
.form_wrapper input[type="radio"] {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.form_container .row .col_half.last {
    border-left: 1px solid #cccccc;
}

.checkbox_option label {
    margin-right: 1em;
    position: relative;
}

.checkbox_option label:before {
    content: "";
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    margin-right: 0.5em;
    vertical-align: -2px;
    border: 2px solid #cccccc;
    padding: 0.12em;
    background-color: transparent;
    background-clip: content-box;
    transition: all 0.2s ease;
}

.checkbox_option label:after {
    border-right: 2px solid #000000;
    border-top: 2px solid #000000;
    content: "";
    height: 20px;
    left: 2px;
    position: absolute;
    top: 7px;
    transform: scaleX(-1) rotate(135deg);
    transform-origin: left top;
    width: 7px;
    display: none;
}

.checkbox_option input:hover+label:before {
    border-color: #000000;
}

.checkbox_option input:checked+label:before {
    border-color: #000000;
}

.checkbox_option input:checked+label:after {
    -moz-animation: check 0.8s ease 0s running;
    -webkit-animation: check 0.8s ease 0s running;
    animation: check 0.8s ease 0s running;
    display: block;
    width: 7px;
    height: 20px;
    border-color: #000000;
}

.radio_option label {
    margin-right: 1em;
}

.radio_option label:before {
    content: "";
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    margin-right: 0.5em;
    border-radius: 100%;
    vertical-align: -3px;
    border: 2px solid #cccccc;
    padding: 0.15em;
    background-color: transparent;
    background-clip: content-box;
    transition: all 0.2s ease;
}

.radio_option input:hover+label:before {
    border-color: #000000;
}

.radio_option input:checked+label:before {
    background-color: #000000;
    border-color: #000000;
}

.select_option {
    position: relative;
    width: 100%;
}

.select_option select {
    display: inline-block;
    width: 100%;
    height: 35px;
    padding: 0px 15px;
    cursor: pointer;
    color: #7b7b7b;
    border: 1px solid #cccccc;
    border-radius: 0;
    background: #fff;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    transition: all 0.2s ease;
}

.select_option select::-ms-expand {
    display: none;
}

.select_option select:hover,
.select_option select:focus {
    color: #000000;
    background: #fafafa;
    border-color: #000000;
    outline: none;
}

.select_arrow {
    position: absolute;
    top: calc(50% - 4px);
    right: 15px;
    width: 0;
    height: 0;
    pointer-events: none;
    border-width: 8px 5px 0 5px;
    border-style: solid;
    border-color: #7b7b7b transparent transparent transparent;
}

.select_option select:hover+.select_arrow,
.select_option select:focus+.select_arrow {
    border-top-color: #000000;
}

.credit {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 15px;
    color: #2e260f;
}

.credit a {
    color: #e1a70a;
}

@-webkit-keyframes check {
    0% {
        height: 0;
        width: 0;
    }

    25% {
        height: 0;
        width: 7px;
    }

    50% {
        height: 20px;
        width: 7px;
    }
}

@keyframes check {
    0% {
        height: 0;
        width: 0;
    }

    25% {
        height: 0;
        width: 7px;
    }

    50% {
        height: 20px;
        width: 7px;
    }
}

@-webkit-keyframes expand {
    0% {
        -webkit-transform: scale3d(1, 0, 1);
        opacity: 0;
    }

    25% {
        -webkit-transform: scale3d(1, 1.2, 1);
    }

    50% {
        -webkit-transform: scale3d(1, 0.85, 1);
    }

    75% {
        -webkit-transform: scale3d(1, 1.05, 1);
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        opacity: 1;
    }
}

@keyframes expand {
    0% {
        -webkit-transform: scale3d(1, 0, 1);
        transform: scale3d(1, 0, 1);
        opacity: 0;
    }

    25% {
        -webkit-transform: scale3d(1, 1.2, 1);
        transform: scale3d(1, 1.2, 1);
    }

    50% {
        -webkit-transform: scale3d(1, 0.85, 1);
        transform: scale3d(1, 0.85, 1);
    }

    75% {
        -webkit-transform: scale3d(1, 1.05, 1);
        transform: scale3d(1, 1.05, 1);
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
}

@-webkit-keyframes bounce {
    0% {
        -webkit-transform: translate3d(0, -25px, 0);
        opacity: 0;
    }

    25% {
        -webkit-transform: translate3d(0, 10px, 0);
    }

    50% {
        -webkit-transform: translate3d(0, -6px, 0);
    }

    75% {
        -webkit-transform: translate3d(0, 2px, 0);
    }

    100% {
        -webkit-transform: translate3d(0, 0, 0);
        opacity: 1;
    }
}

@keyframes bounce {
    0% {
        -webkit-transform: translate3d(0, -25px, 0);
        transform: translate3d(0, -25px, 0);
        opacity: 0;
    }

    25% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
    }

    50% {
        -webkit-transform: translate3d(0, -6px, 0);
        transform: translate3d(0, -6px, 0);
    }

    75% {
        -webkit-transform: translate3d(0, 2px, 0);
        transform: translate3d(0, 2px, 0);
    }

    100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
}

@media (max-width: 600px) {
    .form_wrapper .col_half {
        width: 100%;
        float: none;
    }

    .bottom_row .col_half {
        width: 50%;
        float: left;
    }

    .form_container .row .col_half.last {
        border-left: none;
    }

    .remember_me {
        padding-bottom: 20px;
    }
}
</style>
