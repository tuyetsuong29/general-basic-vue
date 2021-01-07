<template>
  <div class="info-client">
    <p>{{ value.name }}</p>
    <p>{{ value.email }}</p>
    <button v-on:click="handleDelete">Delete</button>
  </div>
</template>
<script>
export default {
  name: 'info-client',
  data() {
    return {};
  },
  props: {
    value: {
      type: Object,
      default: null
    }
  },
  methods: {
    handleDelete() {
      let data = {
        id: this.value.id
      };
      console.log('handleDelete-user');
      this.$emit('deleteUser', data);
    }
  }
};
</script>
<style>
.info-client {
  width: 30%;
  height: 30%;
  border: 1px solid black;
  margin: 0 5px 0 5px;
}
button {
  font-size: 12px;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  border-radius: 10px;
  padding-bottom: 0.5rem;
}
</style>
