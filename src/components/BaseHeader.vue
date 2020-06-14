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
                <base-alert type="danger" v-if="notification"><b>{{notification.title}}</b> {{notification.body}}
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
			askPermission,
			getPermission
		}
	}
</script>
<style>
</style>
