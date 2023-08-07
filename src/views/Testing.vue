






<template>
    <div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <!-- /.card -->

                    <div class="card">
                        <!---------------------------------------------- modal --------------------------------------------------------------->
                        <div class="modal fade" id="modal-default">
                            <div class="modal-dialog">
                                <div class="modal-content bg-default">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Add Domain Data</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="col-md-9" style="margin-left:15%">
                                            <div class="card">
                                                <div class="card-header">
                                                    <ul class="nav nav-pills">
                                                        <li class="nav-item"><a class="nav-link active" href="#activity"
                                                                data-toggle="tab">Activity</a></li>
                                                        <li class="nav-item"><a class="nav-link" href="#timeline"
                                                                data-toggle="tab">Timeline</a></li>
                                                        <li class="nav-item"><a class="nav-link" href="#settings"
                                                                data-toggle="tab">Settings</a></li>
                                                    </ul>
                                                </div><!-- /.card-header -->
                                                <div class="card-body">
                                                    <div class="tab-content">
                                                        <div class="active tab-pane" id="activity">

                                                            <div class="modal-body">
                                                                <form>
                                                                    <div class="card-body">
                                                                        <input v-model.trim="search" type="text"
                                                                            placeholder="Search..." />
                                                                        <button v-on:click="searchbutton()" type="button"
                                                                            class="btn btn-warning btn-sm ml-2"
                                                                            data-toggle="modal">
                                                                            Add
                                                                        </button>
                                                                        <div>
                                                                            <!-- v-for="searchitems in searchitem" :key="searchitems.id" -->
                                                                            <div v-for="searchitems in searchitem"
                                                                                :key="searchitems.id">
                                                                                <div v-if="detailsAreVisible">

                                                                                    <div class="form-group">
                                                                                        <!-- <label>User Name</label> -->
                                                                                        <!-- <input type="text" style="margin-top: -5px"
                                                                    class="form-control form-control-sm" id="addName"
                                                                    v-model="addName" placeholder="User Name...." /> -->
                                                                                        <label v-if="detailsAreVisible">User
                                                                                            Name</label>
                                                                                        <p id="addName" :v-bind="addName"
                                                                                            style="width:100%; height:auto; border:2px solid rgb(235, 231, 231)">
                                                                                            {{ searchitems.name }}</p>
                                                                                    </div>

                                                                                    <div class="form-group">
                                                                                        <!-- <label>Email</label> -->
                                                                                        <!-- <input type="text" style="margin-top:-5px"
                                                                    class="form-control  form-control-sm" id="addEmail"
                                                                    v-model="addEmail" placeholder="Address...."> -->

                                                                                        <p value="addEmail"
                                                                                            style="width:100%; height:auto;border:2px solid rgb(235, 231, 231)">
                                                                                            {{ searchitems.email }}</p>

                                                                                    </div>
                                                                                </div>

                                                                            </div>





                                                                            <!-- <div class="form-group ">
                                                                                <label>Domain Assign</label>
                                                                                <div class="input_field select_option">
                                                                                    <select v-model="addDomain"
                                                                                        style="width: 100%;">
                                                                                        <option disabled value="">
                                                                                            Designation</option>
                                                                                        <option>TO</option>
                                                                                        <option>JO</option>
                                                                                        <option>AO</option>
                                                                                        <option>Officer</option>
                                                                                        <option>SO</option>
                                                                                        <option>EO</option>
                                                                                        -
                                                                                    </select>
                                                                                    <div class="select_arrow"></div>
                                                                                </div>
                                                                                <p>show data : {{ addDomain }}</p>
                                                                            </div> -->


                                                                        </div>


                                                                        <div>

                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>

                                                        </div>
                                                        <!-- /.tab-pane -->
                                                        <div class="tab-pane" id="timeline">
                                                            <!-- The timeline -->
                                                            <div class="modal-body">
                                                                <form>
                                                                    <div class="card-body">
                                                                        <!-- <input v-model.trim="search" type="text"
                                                                            placeholder="Search..." />
                                                                        <button v-on:click="searchbutton()" type="button"
                                                                            class="btn btn-warning btn-sm ml-2"
                                                                            data-toggle="modal">
                                                                            Add
                                                                        </button> -->
                                                                        <div>
                                                                            <!-- v-for="searchitems in searchitem" :key="searchitems.id" -->
                                                                            <div>
                                                                                <!-- v-if="detailsAreVisible" -->
                                                                                <div>

                                                                                    <div class="form-group">
                                                                                        <label>User Name</label>
                                                                                        <input type="text"
                                                                                            style="margin-top: -5px"
                                                                                            class="form-control form-control-sm"
                                                                                            id="addName" v-model="addName"
                                                                                            placeholder="User Name...." />

                                                                                        <!-- <p v-if!="detailsAreVisible"
                                                                                            id="addName" :v-bind="addName"
                                                                                            style="width:100%; height:auto; border:2px solid rgb(235, 231, 231)">
                                                                                            {{ searchitems.name }}</p> -->
                                                                                    </div>

                                                                                    <div class="form-group">
                                                                                        <label>Email</label>
                                                                                        <input type="text"
                                                                                            style="margin-top:-5px"
                                                                                            class="form-control  form-control-sm"
                                                                                            id="addEmail" v-model="addEmail"
                                                                                            placeholder="Address....">

                                                                                        <!-- <p value="addEmail"
                                                                                            style="width:100%; height:auto;border:2px solid rgb(235, 231, 231)">
                                                                                            {{ searchitems.email }}</p> -->

                                                                                    </div>
                                                                                </div>

                                                                            </div>





                                                                            <div class="form-group ">
                                                                                <label>Domain Assign</label>
                                                                                <div class="input_field select_option">
                                                                                    <select v-model="addDomain"
                                                                                        style="width: 100%;">
                                                                                        <option disabled value="">
                                                                                            Designation</option>
                                                                                        <option>TO</option>
                                                                                        <option>JO</option>
                                                                                        <option>AO</option>
                                                                                        <option>Officer</option>
                                                                                        <option>SO</option>
                                                                                        <option>EO</option>
                                                                                        -
                                                                                    </select>
                                                                                    <div class="select_arrow"></div>
                                                                                </div>
                                                                                <p>show data : {{ addDomain }}</p>
                                                                            </div>


                                                                        </div>


                                                                        <div>

                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <!-- /.tab-pane -->

                                                        <div class="tab-pane" id="settings">
                                                            <form class="form-horizontal">
                                                                <div class="form-group row">
                                                                    <label for="inputName"
                                                                        class="col-sm-2 col-form-label">Name</label>
                                                                    <div class="col-sm-10">
                                                                        <input type="email" class="form-control"
                                                                            id="inputName" placeholder="Name">
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <label for="inputEmail"
                                                                        class="col-sm-2 col-form-label">Email</label>
                                                                    <div class="col-sm-10">
                                                                        <input type="email" class="form-control"
                                                                            id="inputEmail" placeholder="Email">
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <label for="inputName2"
                                                                        class="col-sm-2 col-form-label">Name</label>
                                                                    <div class="col-sm-10">
                                                                        <input type="text" class="form-control"
                                                                            id="inputName2" placeholder="Name">
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <label for="inputExperience"
                                                                        class="col-sm-2 col-form-label">Experience</label>
                                                                    <div class="col-sm-10">
                                                                        <textarea class="form-control" id="inputExperience"
                                                                            placeholder="Experience"></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <label for="inputSkills"
                                                                        class="col-sm-2 col-form-label">Skills</label>
                                                                    <div class="col-sm-10">
                                                                        <input type="text" class="form-control"
                                                                            id="inputSkills" placeholder="Skills">
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <div class="offset-sm-2 col-sm-10">
                                                                        <div class="checkbox">
                                                                            <label>
                                                                                <input type="checkbox"> I agree to the <a
                                                                                    href="#">terms and conditions</a>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <div class="offset-sm-2 col-sm-10">
                                                                        <button type="submit"
                                                                            class="btn btn-danger">Submit</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <!-- /.tab-pane -->
                                                    </div>
                                                    <!-- /.tab-content -->
                                                </div><!-- /.card-body -->
                                            </div>
                                            <!-- /.card -->
                                        </div>
                                    </div>
                                    <div class="modal-footer justify-content-between">
                                        <button type="button" class="btn btn-outline-danger btn-sm" data-dismiss="modal">
                                            Close
                                        </button>
                                        <button type="button" class="btn btn-success btn-sm" data-dismiss="modal"
                                            v-on:click.prevent="addData">
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                                <!-- /.modal-content -->
                            </div>
                            <!-- /.modal-dialog -->
                        </div>



                        <!-- modal button -->
                        <div class="card-header" style="display:flex ">
                            <button type="button" class="btn btn-warning btn-sm" data-toggle="modal"
                                data-target="#modal-default" data-bs-whatever="@mdo">
                                <i class="fas fa-plus"></i> Create New User
                            </button>

                            <AssignRoal />

                        </div>






                        <!-- /.card-header -->
                        <div class="user-block mx-3 mt-2" v-for="domain in cars" :key="domain.id">

                            <div class="mx-5">

                                <div>
                                    <!-- <p style="color:rgb(101, 101, 236)">{{ domain.name }}</p> -->
                                    <p style="font-size: 15px; color: rgb(101, 101, 236)" class="text-bold">
                                        {{ domain.name }}
                                    </p>
                                </div>

                                <div style="margin-top: -20px">
                                    <p style="font-size: 12px">{{ domain.email }}</p>
                                </div>
                                <div style="margin-top: -20px">
                                    <p style="font-size: 12px">{{ domain.domainAddress }}</p>
                                </div>
                            </div>
                        </div>



                        <!-- <div> 
                            <h1>rakib</h1>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import AssignRoal from '../components/Constraction/AssignRoal.vue';
export default {
    name: "about",
    data() {
        return {
            detailsAreVisible: false,
            userName: "",
            search: "",
            // selectedDesignation:"",
            cars: [{}],
            searchitem: [{}],
            isloading: false,
            addName: "",
            addEmail: "",
            addDomain: "",
            addStatus: "",

        };
    },

    components: {
        AssignRoal
    },

    methods: {
        onChange(e) {
            console.log(e.target.value);
            this.datashow = e.target.value
        },
        addData() {
            this.cars.push({
                name: this.addName,
                email: this.addEmail,
                domainAddress: this.addDomain,
                status: this.addStatus,
            });
            console.log(this.cars);

            this.addName = "";
            this.addEmail = "";
            this.addDomain = "";
            this.addStatus = "";


        },

        async searchbutton() {
            let response = await axios.post(
                `http://10.140.2.35/cPoint/api/Account/searchUserFromAd?userName=${this.search}`,
                {
                    userName: this.userName,
                    t: true,

                }
            );
            this.detailsAreVisible = !this.detailsAreVisible;

            console.log(response.data);
            // console.log(response.data.displayName);

            this.searchitem.push({
                name: response.data.userName,
                email: response.data.email,
            });
            // localStorage.setItem('user', JSON.stringify(response))

            console.log(this.searchitem);
        },
    },
};
</script>

<style>
th {
    color: #006bd8;
}
</style>
