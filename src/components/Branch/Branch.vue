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
                                                    <label>Domain Name</label>
                                                    <input type="text" style="margin-top:-5px"
                                                        class="form-control form-control-sm" id="addName" v-model="addName"
                                                        placeholder="Domain Name....">
                                                </div>
                                                <div class="form-group">
                                                    <label>Domain Address</label>
                                                    <input type="text" style="margin-top:-5px"
                                                        class="form-control  form-control-sm" id="addAddress"
                                                        v-model="addAddress" placeholder="Address....">
                                                </div>
                                                <div class="form-group">
                                                    <label>Domain Image</label>
                                                    <input type="text" style="margin-top:-5px"
                                                        class="form-control  form-control-sm" id="addImage"
                                                        v-model="addStatus">
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

                        <div class="card-header">
                            <div >
                                <h4>Branch Information</h4>
                            </div>
                            <button type="button" class="btn btn-warning float-right btn-sm add_domain" data-toggle="modal"
                                data-target="#modal-default" data-bs-whatever="@mdo">
                                <i class="fas fa-plus"></i> Add Domain
                            </button>
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
                                    <tr v-for="domain in branchData" :key="domain.id" style="font-size:12px">
                                        <td>{{ domain.branch_id }}</td>
                                        <td>{{ domain.branch_name }}</td>
                                        <td style="text-align: center">{{ domain.phone_no }}</td>
                                        <td>{{ domain.address1 }}</td>
                                        <td style="display:flex;border:none;">
                                            <button class="btn btn-secondary btn-xs "
                                                style="padding-right:6px">Edit</button>
                                            <button class="btn btn-danger btn-xs ml-3">Delete</button>
                                        </td>
                                        <!-- <td>   </td> -->
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

export default {
    name: "branch",
    data() {
        return {
            branchData: [{}],
            cars: [{}],

            addName: '',
            addAddress: '',
            addStatus: '',
        }
    },

    methods: {
        addData() {
            this.branchData.push({
                'name': this.addName,
                'address': this.addAddress,
                'status': this.addStatus,
            });


            this.addName = '',
                this.addAddress = '';
            this.addStatus = '';
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
.add_domain{
    position: relative;
    margin-top:-10px;
}
</style>
  