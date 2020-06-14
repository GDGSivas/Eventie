<template>
    <div class="header" :class="{[`bg-${type}`]: type}">
        <div class="container-fluid">
            <div class="header-body">
                <button class="btn btn-warning btn-block" v-if="permission=='default'" @click="askPermission">
                    Bildirimleri Aç
                </button>
                <base-alert type="danger" v-if="permission=='denied'">Bildirimleri engellediğiniz için bildirim
                    alamayacaksınız!
                </base-alert>
                <base-alert type="warning" dismissible v-if="notification">
                    <span class="alert-inner--icon mr-2"><i class="ni ni-notification-70"></i></span>
                    <span class="alert-inner--text"><b>{{notification.title}}</b> {{notification.body}}</span>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"
                            @click="()=>{this.notification=null}">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </base-alert>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
	import {askPermission, getPermission} from "../db/firebase";

	export default {
		name: 'base-header',
		props: {
			type: {
				type: String,
				default: 'primary',
				description: 'Header background type'
			}
		},
		data: () => ({
			notification: null,
			permission: getPermission()
		}),
		mounted() {
			const vm = this;
			window.EventBus.$on("getMessage", function (message) {
				vm.notification = message.notification;
			});
			window.EventBus.$on("changedPermission", function () {
				vm.permission = getPermission();
			});
		},
		methods: {
			askPermission
		}
	}
</script>
<style>
</style>
