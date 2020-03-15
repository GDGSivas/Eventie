<template>
  <div>
    <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div class="card card-profile shadow">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img
                      src="img/theme/team-4-800x800.jpg"
                      class="rounded-circle"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
            ></div>
            <div class="text-center">
              <h3>
                {{ users[0].name }}
              </h3>
            </div>
            <div class="card-body pt-0 pt-md-4">
              <div class="row">
                <div class="col">
                  <div
                    class="card-profile-stats d-flex justify-content-center mt-md-5"
                  >
                    <div>
                      <span class="heading"></span>
                      <span class="description"></span>
                    </div>
                    <div>
                      <span class="heading">Puan</span>
                      <span class="description">{{ users[0].point }}</span>
                    </div>
                    <div>
                      <span class="heading"></span>
                      <span class="description"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../db/firebase";

export default {
  name: "user-profile",
  data() {
    return {
      users: []
    };
  },
  firestore() {
    return {
      users: db.collection("users")
    };
  }
};
</script>
<style>
@media only screen and (min-width: 767px) {
  .text-center {
    padding-top: 50px !important;
  }
}
.col-xl-4 order-xl-2 mb-5 mb-xl-0 {
  display: contents;
}
.text-center {
  font-size: 10px;
  margin-top: 10px;
}
</style>
