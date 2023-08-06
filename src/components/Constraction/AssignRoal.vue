<template>
    <div>
        <button type="button" class="btn btn-success ml-5 btn-sm" data-toggle="modal" data-target="#modal-primary">
            Add Assign Role
        </button>

        <div class="modal fade" id="modal-primary">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Assign Role</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>User Id</label>
                            <input type="text" style="margin-top: -5px" class="form-control form-control-sm" id="addName"
                                placeholder="User Name...." />
                        </div>

                        <!-- <div class="form-group">
                            <label>User Role</label>
                            <input type="text" style="margin-top: -5px" class="form-control form-control-sm" id="addName"
                                placeholder="User Name...." />
                        </div> -->
                        <div class="form-group ">
                            <label>Domain Assign</label>
                            <select class="form-control form-control-sm select2" style="width: 100%;">
                                <option selected="selected">Alabama</option>
                                <option>Alaska</option>
                                <option>California</option>
                                <option>Delaware</option>
                                <option>Tennessee</option>
                                <option>Texas</option>
                                <option>Washington</option>
                            </select>
                        </div>

                        <div>
                            <div class="form-group">
                                <label>Assign Role</label>
                                <div class="select2-purple">
                                    <select class="select2 form-control form-control-sm" multiple="multiple"
                                        data-placeholder="Select a State" data-dropdown-css-class="select2-purple"
                                        style="width: 100%;">
                                        <option>Alabama</option>
                                        <option>Alaska</option>
                                        <option>California</option>
                                        <option>Delaware</option>
                                        <option>Tennessee</option>
                                        <option>Texas</option>
                                        <option>Washington</option>
                                    </select>
                                </div>
                            </div>
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
    </div>
</template>

<script>
$(function () {
    //Initialize Select2 Elements
    $('.select2').select2()

    //Initialize Select2 Elements
    $('.select2bs4').select2({
        theme: 'bootstrap4'
    })



})

</script>

