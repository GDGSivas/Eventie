<template>
  <div class="card shadow">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">
            {{title}}
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
        <template slot-scope="{ row }">
          <td>
            <div class="media align-items-center">
              <a href="#" class="avatar rounded-circle mr-3">
                <img alt="Program Image" :src="row.imgUrl"/>
              </a>
              <div class="media-body">
                <span class="name mb-0 text-sm">{{ row.name }}</span>
                <p class="speaker-name">{{ row.speaker.name }}</p>
                {{ row.time }}
              </div>
            </div>
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "programs-table",
  props: {
    type: {
      type: String
    },
    title: String,
    tableData:Array,
    activeRow:Number,
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
.name {
  font-size: 18px !important;
  font-weight: bold;
  color: gray;
}
</style>
