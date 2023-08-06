<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h4>Domain Information</h4>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>

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
                          <input type="text" style="margin-top:-5px" class="form-control form-control-sm" id="addName"
                            v-model="addName" placeholder="Domain Name....">
                        </div>
                        <div class="form-group">
                          <label>Domain Address</label>
                          <input type="text" style="margin-top:-5px" class="form-control  form-control-sm" id="addAddress"
                            v-model="addAddress" placeholder="Address....">
                        </div>
                        <div class="form-group">
                          <label>Domain Image</label>
                          <input type="text" style="margin-top:-5px" class="form-control  form-control-sm" id="addImage"
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
              <button type="button" class="btn btn-warning float-right btn-sm" data-toggle="modal"
                data-target="#modal-default" data-bs-whatever="@mdo">
                <i class="fas fa-plus"></i> Add Domain
              </button>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>SL No</th>
                    <th>Domain Name</th>
                    <th>Domain Address</th>
                    <th>Domain Image</th>
                    <th>Status <span style="font-size: 10px">(Active / Not)</span></th>
                  </tr>
                </thead>
                <tbody>

                  <tr v-for="(domain, index) in cars" :key="domain.id">
                    <td>{{ index + 1 - 1 }}</td>
                    <td>{{ domain.name }}</td>
                    <td>{{ domain.address }}</td>
                    <td>{{ domain.address }}</td>
                    <td>{{ domain.status }}</td>
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
  name: "about",
  data() {
    return {
      cars: [
        { }
      ],
      addName: '',
      addAddress: '',
      addStatus: '',
    }
  },
  methods: {
    addData() {
      this.cars.push({
        'name': this.addName,
        'address': this.addAddress,
        'status': this.addStatus,
      });
      
      this.addName = '',
        this.addAddress = '';
      this.addStatus = '';
    }
  }

}




$(function () {
  $("#example1")
    .DataTable({
      responsive: true,
      lengthChange: false,
      autoWidth: false,
      buttons: ["copy", "csv", "excel", "pdf", "print"],
    })
    .buttons()
    .container()
    .appendTo("#example1_wrapper .col-md-6:eq(0)");
  $("#example2").DataTable({
    paging: true,
    lengthChange: false,
    searching: false,
    ordering: true,
    info: true,
    autoWidth: false,
    responsive: true,
  });
});

$(function () {
  var Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
  });

  $(".swalDefaultSuccess").click(function () {
    Toast.fire({
      icon: "success",
      title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    });
  });
  $(".swalDefaultInfo").click(function () {
    Toast.fire({
      icon: "info",
      title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    });
  });
  $(".swalDefaultError").click(function () {
    Toast.fire({
      icon: "error",
      title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    });
  });
  $(".swalDefaultWarning").click(function () {
    Toast.fire({
      icon: "warning",
      title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    });
  });
  $(".swalDefaultQuestion").click(function () {
    Toast.fire({
      icon: "question",
      title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    });
  });

  $(".toastrDefaultSuccess").click(function () {
    toastr.success("Lorem ipsum dolor sit amet, consetetur sadipscing elitr.");
  });
  $(".toastrDefaultInfo").click(function () {
    toastr.info("Lorem ipsum dolor sit amet, consetetur sadipscing elitr.");
  });
  $(".toastrDefaultError").click(function () {
    toastr.error("Lorem ipsum dolor sit amet, consetetur sadipscing elitr.");
  });
  $(".toastrDefaultWarning").click(function () {
    toastr.warning("Lorem ipsum dolor sit amet, consetetur sadipscing elitr.");
  });

  $(".toastsDefaultDefault").click(function () {
    $(document).Toasts("create", {
      title: "Toast Title",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    });
  });
  $(".toastsDefaultTopLeft").click(function () {
    $(document).Toasts("create", {
      title: "Toast Title",
      position: "topLeft",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    });
  });
  $(".toastsDefaultBottomRight").click(function () {
    $(document).Toasts("create", {
      title: "Toast Title",
      position: "bottomRight",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    });
  });
  $(".toastsDefaultBottomLeft").click(function () {
    $(document).Toasts("create", {
      title: "Toast Title",
      position: "bottomLeft",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    });
  });
  $(".toastsDefaultAutohide").click(function () {
    $(document).Toasts("create", {
      title: "Toast Title",
      autohide: true,
      delay: 750,
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    });
  });
  $(".toastsDefaultNotFixed").click(function () {
    $(document).Toasts("create", {
      title: "Toast Title",
      fixed: false,
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    });
  });
  $(".toastsDefaultFull").click(function () {
    $(document).Toasts("create", {
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      title: "Toast Title",
      subtitle: "Subtitle",
      icon: "fas fa-envelope fa-lg",
    });
  });
  $(".toastsDefaultFullImage").click(function () {
    $(document).Toasts("create", {
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      title: "Toast Title",
      subtitle: "Subtitle",
      image: "../../dist/img/user3-128x128.jpg",
      imageAlt: "User Picture",
    });
  });
  $(".toastsDefaultSuccess").click(function () {
    $(document).Toasts("create", {
      class: "bg-success",
      title: "Toast Title",
      subtitle: "Subtitle",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    });
  });
  $(".toastsDefaultInfo").click(function () {
    $(document).Toasts("create", {
      class: "bg-info",
      title: "Toast Title",
      subtitle: "Subtitle",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    });
  });
  $(".toastsDefaultWarning").click(function () {
    $(document).Toasts("create", {
      class: "bg-warning",
      title: "Toast Title",
      subtitle: "Subtitle",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    });
  });
  $(".toastsDefaultDanger").click(function () {
    $(document).Toasts("create", {
      class: "bg-danger",
      title: "Toast Title",
      subtitle: "Subtitle",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    });
  });
  $(".toastsDefaultMaroon").click(function () {
    $(document).Toasts("create", {
      class: "bg-maroon",
      title: "Toast Title",
      subtitle: "Subtitle",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    });
  });
});


</script>

<style>
th {
  color: #006bd8;
}
</style>
