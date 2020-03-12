<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <programs-table
                            title="Etkinlik Akışı"
                            :tableData="programs"
                            :activeRow="activeRow"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import ProgramsTable from './Tables/ProgramsTable'
    import {db} from "../db/firebase";

    export default {
        name: 'programs',
        components: {
            ProgramsTable
        },
        firestore(){
            return {
                programs:db.collection("events").doc(this.$route.params.id).collection('programs')
            }
        },
        data(){
            return {
                programs:[],
                activeRow:-1,
            }
        }
  };
</script>
