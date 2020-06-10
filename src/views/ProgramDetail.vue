<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <div class="card shadow" v-if="program">
                        <img alt="Program Image" :src="program.imgUrl" class="w-100 card-img-top"/>
                        <div class="card-header border-0">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h3 class="mb-0">
                                        {{program.name}} <span class="badge badge-success">{{ program.time_start.toDate().customTime() }} -{{ program.time_end.toDate().customTime() }} </span>
                                    </h3>
                                    <p>{{program.content}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body" v-show="program.speaker">
                            <div class="media align-items-center">
                                <a href="#" class="avatar rounded-circle mr-3">
                                    <img alt="Program Image" :src="program.speaker.imgUrl"/>
                                </a>
                                <div class="media-body">
                                    <span class="name mb-0 text-sm">{{ program.speaker.name }}</span><br>
                                    <span class="badge badge-info">{{program.speaker.expertise}}</span>
                                </div>
                            </div>
                            <div class="mt-4">{{program.speaker.bio}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {db} from "../db/firebase";
    require ("../../src/components/dateToString")

    export default {
        name: 'program-detail',
        firestore(){
            return {
                program:db.collection("events").doc(this.$route.params.eventID).collection('programs').doc(this.$route.params.programID)
            }
        },
        data(){
            return {
                program:null,
            }
        }
  };
</script>
