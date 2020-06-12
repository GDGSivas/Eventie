<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <programs-table
                            :event="activeEvent"
                            :tableData="programs"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import ProgramsTable from './Tables/ProgramsTable';
    import {db} from "../db/firebase";
    const eventss = db.collection("events");

    export default {
        name: 'eventDetail',
        components: {
            ProgramsTable
        },
        firestore(){
            return {
                programs: eventss.doc(this.$route.params.id).collection('programs').orderBy('time_start'),
                activeEvent: eventss.doc(this.$route.params.id)
            }
        },
        data(){
            return {
                programs:[],
                activeEvent: {},
            }
        }
  };
</script>
