<template>
  <div class="card shadow">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">
            Etkinlik Akisi
          </h3>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        tbody-classes="list"
        :data="tableData"
        :activeRow="activeRow"
      >
        <template slot="columns">
          <th>Program</th>
          <th>Saat</th>
        </template>

        <template slot-scope="{ row }">
          <th scope="row">
            <div class="media align-items-center">
              <a href="#" class="avatar rounded-circle mr-3">
                <img alt="Image placeholder" :src="row.img" />
              </a>
              <div class="media-body">
                <span class="name mb-0 text-sm">{{ row.title }}</span>
                <p class="speaker-name">{{ row.name }}</p>
                <!-- konusmaci ismi -->
              </div>
            </div>
          </th>
          <td class="clock">
            {{ row.clock }}
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
import { db } from "../db/firebase";

export default {
  name: "projects-table",
  props: {
    type: {
      type: String
    },
    title: String
  },
  firestore: {
    speakers: db.collection("speakers")
  },
  data() {
    return {
      activeRow: 0,
      speakers: [],

      tableData: [
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          name: "Batuhan Hasan AKIN",
          clock: "12.40"
        },
        {
          img: "img/theme/angular.jpg",
          title: "Angular Now UI Kit PRO",
          name: "Batuhan Hasan AKIN",
          clock: "13.00"
        },
        {
          img: "img/theme/sketch.jpg",
          name: "Batuhan Hasan AKIN",
          title: "Black Dashboard",
          clock: "13.00"
        },
        {
          img: "img/theme/react.jpg",
          title: "React Material Dashboard",
          name: "Batuhan Hasan AKIN",
          clock: "13.00"
        },
        {
          img: "img/theme/vue.jpg",
          title: "Vue Paper UI Kit PRO",
          name: "Batuhan Hasan AKIN",
          clock: "13.00"
        }
      ]
    };
  }
};
</script>
<style>
.speaker-name {
  color: #808080d6;
  font-size: 13px !important;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.clock {
  font-size: 18px !important;
  font-weight: bold;
  color: gray;
}
</style>
