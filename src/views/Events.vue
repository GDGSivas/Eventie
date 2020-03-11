<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>
        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <eventsTable
                            title="Etkinlikler"
                            :tableData="events"
                            :activeRow="activeRow"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import EventsTable from './Tables/EventsTable'
    import {db} from "../db/firebase";
    export default {
        name: 'events',
        firestore: {
          events: db.collection("events")
        },
        components: {
          EventsTable
        },
        data(){
            return {
                events: [],
                activeRow:-1, //todo: firebaseden çekilecek
            }
        }
    };
</script>
