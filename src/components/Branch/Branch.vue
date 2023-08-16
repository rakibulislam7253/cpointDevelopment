<template>
    <div>
        <!-- Content Header (Page header) -->
        <!-- <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-0">
                    <div class="col-sm-6">
                        <h4>Branch Information</h4>
                    </div>
                </div>
            </div>
            /.container-fluid
        </section> -->

        <!-- Main content -->

        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <!-- /.card -->

                    <div class="card">
                        <!---------------------------------------------- modal --------------------------------------------------------------->
                        <!-- Add modal -->
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
                                        <form>
                                            <div class="card-body">

                                                <div class="form-group">
                                                    <label>Branch ID</label>
                                                    <input type="text" style="margin-top:-5px"
                                                        class="form-control form-control-sm" id="branch_id"
                                                        v-model="branch_id" placeholder="branch_id">
                                                </div>
                                                <div class="form-group">
                                                    <label>Branch Name</label>
                                                    <input type="text" style="margin-top:-5px"
                                                        class="form-control  form-control-sm" id="branch_name"
                                                        v-model="branch_name" placeholder="Branch Name">
                                                </div>
                                                <div class="form-group">
                                                    <label>Phone</label>
                                                    <input type="text" style="margin-top:-5px"
                                                        class="form-control  form-control-sm" id="addImage" v-model="phone"
                                                        placeholder="Phone">
                                                </div>
                                                <div class="form-group">
                                                    <label>Address</label>
                                                    <input type="text" style="margin-top:-5px"
                                                        class="form-control  form-control-sm" id="address" v-model="address"
                                                        placeholder="Address">
                                                </div>



                                            </div>

                                        </form>
                                    </div>
                                    <div class="modal-footer justify-content-between">
                                        <button type="button" class="btn btn-outline-danger btn-sm" data-dismiss="modal">
                                            Close
                                        </button>
                                        <button type="button" class="btn btn-success btn-sm" data-dismiss="modal"
                                            v-on:click.prevent="addData"> Save changes</button>
                                    </div>
                                </div>
                                <!-- /.modal-content -->
                            </div>
                            <!-- /.modal-dialog -->
                        </div>



                        <!-- Edit modal -->






                        <div class="card-header">
                            <div>
                                <h4>Branch Information</h4>
                            </div>
                            <button type="button" class="btn btn-warning float-right btn-sm add_domain" data-toggle="modal"
                                data-target="#modal-default" data-bs-whatever="@mdo">
                                <i class="fas fa-plus"></i> Add Domain
                            </button>
                        </div>
                        <!-- check edit part -->
                        <div>
                            <div>
                                <input type="text" v-model="branch_id" placeholder="branch_id">
                            </div>
                            <div>
                                <input type="text" v-model="branch_name" placeholder="branch_name">
                            </div>
                            <div>
                                <input type="text" v-model="phone" placeholder="phone_no">
                            </div>
                            <div>
                                <input class="w-25" type="text" v-model="address" placeholder="address">
                            </div>
                            <div>

                                <button type="button" class="btn btn-danger mt-3 px-4"
                                    @click="saveData(haveID)">Save</button>
                            </div>

                            <!-- <div>
                                <button @click="saveData()">Save</button>
                            </div> -->

                        </div>

                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example1" class="table table-bordered table-striped table-sm">
                                <thead>
                                    <tr>
                                        <!-- <th>SL No</th> -->
                                        <th style="text-align: center;"> Id</th>
                                        <th style="text-align: center">Branch Name</th>
                                        <th style="text-align: center;">Phone Number</th>
                                        <th style="text-align: center;">Address</th>
                                        <th style="width:8%;text-align: center">Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <!--  -->
                                    <tr v-for="(domain, index) in branchData" :key="domain.id" style="font-size:12px">
                                        <!-- <td>{{  }}</td> -->
                                        <td>{{ domain.branch_id }}</td>
                                        <td>{{ domain.branch_name }}</td>
                                        <td style="text-align: center">{{ domain.phone_no }}</td>
                                        <td>{{ domain.address1 }}</td>
                                        <td style="display:flex;border:none;">


                                            <button type="button" class="btn btn-secondary btn-xs" data-toggle="modal"
                                                data-target="#modal-primary" data-bs-whatever="@mdo"
                                                style="padding-right:6px" @click="editRow(domain.branch_id)">Edit
                                            </button>




                                            <button class="btn btn-danger btn-xs ml-3"
                                                @click="deleteRow(index)">Delete</button>
                                        </td>

                                    </tr>


                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
</template>
  
<script>

import axios from 'axios';
export default {
    name: "branch",
    data() {
        return {
            branchData: [{}],
            branch_id: '',
            branch_name: '',
            phone: '',
            address: '',
            haveID: '',
        }
    },

    methods: {
        deleteRow(index) {
            this.branchData.splice(index, 1);
        },



        editRow(id) {
            this.haveID = id
            // alert(id)
            //   console.log(this.branchData.filter((data) => (data.branch_id === id))) 
            var dataObj = this.branchData.filter((data) => (data.branch_id === id))
            this.branch_id = dataObj[0].branch_id
            this.branch_name = dataObj[0].branch_name
            this.phone = dataObj[0].phone_no
            this.address = dataObj[0].address1
            console.log(this.haveID);
        },
        saveData(haveID) {
            var dataObj = this.branchData.filter((data) => (data.branch_id === haveID))
            dataObj[0].branch_id = this.branch_id
            dataObj[0].branch_name = this.branch_name
            dataObj[0].phone_no = this.phone
            dataObj[0].address1 = this.address
        },



        addData() {
            const data = {
                'branch_id': this.branch_id,
                'branch_name': this.branch_name,
                'phone_no': this.phone,
                'address1': this.address,
            }
            let response = axios.post('http://10.140.2.35/cPoint/api/Branch/create-branch', {
                'branch_id': this.branch_id,
                'branch_name': this.branch_name,
                'phone_no': this.phone,
                'address1': this.address,

                headers: {
                    "Content-Type": "application/json",
                },
                // body: JSON.stringify(this.branch_id),
                // body: JSON.stringify(response)
            })
            console.warn(response);
            localStorage.setItem('user', JSON.stringify(data))


            // after insert data then clear this insert data
            this.branch_id = '',
                this.branch_name = '';
            this.phone = '';
            this.address = ''
        }

    },

    mounted() {
        fetch('http://10.140.2.35/cPoint/api/Branch/get-branch_list')
            .then(response => response.json())
            .then(data => {
                this.branchData = data;
                // this.branchData=this.data
                console.log(this.branchData);
            })
            .catch(error => {
                console.error(error);
            });





    },

}



$(function () {
    $("#example1").DataTable({
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "buttons": ["copy", "excel", "pdf", "print"]
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    $('#example2').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "ordering": true,
        "info": true,
        "autoWidth": false,
        "responsive": true,
    });
});


</script>
  
<style>
th {
    color: #006bd8;

}

td {
    color: black
}

.pagination {
    margin-left: 76%;

}

.dataTables_filter {
    margin-left: 70%;
}

tbody {
    font-family: var(--ut-base-font-family, var(--a-base-font-family, sans-serif));
}

.flex-wrap {
    margin-top: 10px;
}

.card-body {
    margin-top: -18px;

}

.add_domain {
    position: relative;
    margin-top: -10px;
}
</style>
  