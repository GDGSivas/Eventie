<template>
	<div class="card shadow">
		<img
			alt="Program Image"
			:src="event.imgUrl"
			class="w-100 card-img-top"
      v-if="event.imgUrl"
		/>
		<div class="card-header border-0">
			<div class="row align-items-center">
				<div class="col">
					<h2 class="text-center" v-if="event.name">
						{{ event.name }}
					</h2>
					<p class="text-center mb-0" v-if="event.description">
						{{ event.description }}
					</p>
					<div
						class="badge badge-warning text-center w-100"
						v-if="event.warning"
					>
						{{ event.warning }}
					</div>
				</div>
			</div>
		</div>
		<div class="table-responsive">
			<base-table
				class="table align-items-center table-flush"
				tbody-classes="list"
				:data="tableData"
				:activeRow="-1"
			>
				<template slot-scope="{ row }">
					<td @click="goToProgram($route.params.id, row.id)">
						<div class="media align-items-center">
							<a
								href="#"
								class="avatar rounded-circle mr-3"
								v-if="row.imgUrl"
							>
								<img alt="Program Image" :src="row.imgUrl" />
							</a>
							<div class="media-body">
								<span class="name mb-0 text-sm">{{
									row.name
								}}</span>
								<p class="speaker-name">
									{{ row.speaker.name }}
								</p>
								{{ row.time_start.toDate().customTime() }} -
								{{ row.time_end.toDate().customTime() }}
							</div>
						</div>
					</td>
				</template>
			</base-table>
		</div>
	</div>
</template>
<script>
require("../../components/dateToString");
export default {
	name: "programs-table",
	methods: {
		goToProgram(eventID, programID) {
			this.$router.push({
				name: "programDetail",
				params: { eventID, programID }
			});
		}
	},
	props: {
		tableData: Array,
		event: Object
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
.eventWarning {
	color: red;
}
</style>
