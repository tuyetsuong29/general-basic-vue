<template>
  <div class="box-infor">
    <info-client
      v-for="user in dataUser"
      v-bind:key="user.id"
      v-bind:value="user"
      v-on:deleteUser="deleteUser"
    ></info-client>
  </div>
</template>
<script>
import InfoClient from './InfoClient.vue';
export default {
  name: 'box-infor',
  components: {
    InfoClient
  },
  props: {
    dataUser: {
      type: Array
    }
  },
  data() {
    return {};
  },
  methods: {
    deleteUser(data) {
      this.$emit('deleteUser', data);
    }
  }
};
</script>
<style>
.box-infor {
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
}
</style>
