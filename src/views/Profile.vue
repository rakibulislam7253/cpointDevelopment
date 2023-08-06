<template>
    <div class="">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Profile</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">User Profile</li>
                        </ol>
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">

                        <!-- Profile Image -->
                        <div class="card card-primary card-outline">
                            <div class="card-body box-profile">
                                <div class="text-center">
                                    <img class=" img-fluid p-2" src="../assets/logo/Logo.png" alt="User profile picture">
                                </div>

                                <h3 class="profile-username text-center">Nina Mcintire</h3>

                                <p class="text-muted text-center">Software Engineer</p>

                                <ul class="list-group list-group-unbordered mb-3">
                                    <li class="list-group-item">
                                        <b>Followers</b> <a class="float-right">1,322</a>
                                    </li>
                                    <li class="list-group-item">
                                        <b>Following</b> <a class="float-right">543</a>
                                    </li>
                                    <li class="list-group-item">
                                        <b>Friends</b> <a class="float-right">13,287</a>
                                    </li>
                                </ul>

                                <a href="#" class="btn btn-primary btn-block"><b>Follow</b></a>
                            </div>
                            <!-- /.card-body -->
                        </div>

                    </div>
                    <!-- /.col -->
                    <div class="col-md-9">
                        <div class="card">


                            <div class="body">
                                <div class="container py-5">
                                    <div class="row text-center text-white">
                                        <div class="col-lg-8 mx-auto">
                                            <h1 class="display-4"> Department Management</h1>
                                            <p class="lead mb-0">Using grid and utilities, create a nice team page.</p>
                                        </div>
                                    </div>
                                </div><!-- End -->


                                <div class="container">
                                    <div class="row text-center">

                                        <!-- Team item -->
                                        <div class="col-xl-3 col-sm-6 mb-5">
                                            <p style="position:absolute; margin:2% 84%; cursor:pointer;">
                                                <i class='fas fa-cog fa-spin'></i>
                                            </p>
                                            <div class="bg-white rounded shadow-sm py-5 px-4"><img
                                                    src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt=""
                                                    width="100"
                                                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                                                <h5 class="mb-0"> Manuella Nevoresky</h5><span
                                                    class="small text-uppercase text-muted">CEO - Founder</span>

                                            </div>
                                        </div><!-- End -->

                                        <!-- Team item -->
                                        <div class="col-xl-3 col-sm-6 mb-5">
                                            <p style="position:absolute; margin:2% 84%; cursor:pointer;">
                                                <i class='fas fa-cog fa-spin'></i>
                                            </p>
                                            <div class="bg-white rounded shadow-sm py-5 px-4"> <img
                                                    src="https://bootstrapious.com/i/snippets/sn-team/teacher-2.jpg" alt=""
                                                    width="100"
                                                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                                                <h5 class="mb-0">Samuel Hardy</h5><span
                                                    class="small text-uppercase text-muted">CEO - Founder</span>

                                            </div>
                                        </div><!-- End -->

                                        <!-- Team item -->
                                        <div class="col-xl-3 col-sm-6 mb-5">
                                            <p style="position:absolute; margin:2% 84%; cursor:pointer;">
                                                <i class='fas fa-cog fa-spin'></i>
                                            </p>
                                            <div class="bg-white rounded shadow-sm py-5 px-4"><img
                                                    src="https://bootstrapious.com/i/snippets/sn-team/teacher-1.jpg" alt=""
                                                    width="100"
                                                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                                                <h5 class="mb-0">Tom Sunderland</h5><span
                                                    class="small text-uppercase text-muted">CEO - Founder</span>

                                            </div>
                                        </div><!-- End -->

                                        <!-- Team item -->
                                        <div class="col-xl-3 col-sm-6 mb-5">
                                            <p style="position:absolute; margin:2% 84%; cursor:pointer;">
                                                <i class='fas fa-cog fa-spin'></i>
                                            </p>

                                            <div class="bg-white rounded shadow-sm py-5 px-4"><img
                                                    src="https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg" alt=""
                                                    width="100"
                                                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                                                <h5 class="mb-0">John Tarly</h5><span
                                                    class="small text-uppercase text-muted">CEO - Founder</span>

                                            </div>
                                        </div><!-- End -->
                                    </div>
                                </div>
                            </div>



                        </div>


                        <!-- /.card -->
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</template>


<style scoped>
.body {
    background: #e8cbc0;
    background: -webkit-linear-gradient(to right, #e8cbc0, #636fa4);
    background: linear-gradient(to right, #e8cbc0, #636fa4);
    min-height: 100vh;
}

.social-link {
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    border-radius: 50%;
    transition: all 0.3s;
    font-size: 0.9rem;
}

.social-link:hover,
.social-link:focus {
    background: #ddd;
    text-decoration: none;
    color: #555;
}
</style>