<template>
  <router-view></router-view>
  <box-infor
    v-bind:dataUser="dataUser"
    v-on:deleteUser="handledeleteUser"
  ></box-infor>
</template>
<script>
import BoxInfor from '../components/infoclient/BoxInfor.vue';
export default {
  name: 'home-header',
  components: {
    BoxInfor
  },
  data() {
    return {
      dataUser: [
        {
          id: 1,
          name: 'Donald J. Trump',
          email: 'test1gmail.com',
          active: true
        },
        { id: 2, name: 'Joe Biden', email: 'test2gmail.com', active: false },
        {
          id: 3,
          name: 'Nguyen Lan Anh',
          email: 'test3gmail.com',
          active: true
        },
        { id: 4, name: 'J.MAX', email: 'test4gmail.com', active: false },
        { id: 5, name: 'Tran Hung', email: 'test5gmail.com', active: true },
        { id: 6, name: 'Lam Le', email: 'test6gmail.com', active: true }
      ]
    };
  },
  methods: {
    handledeleteUser(data) {
      let chooseDelete = -1;
      this.dataUser.map((u, i) => {
        console.log('run', u.id, i, data.id);
        if (u.id === data.id) {
          chooseDelete = i;
        }
      });
      if (chooseDelete != -1) {
        this.dataUser.splice(chooseDelete, 1);
      }
    }
  }
};
</script>
<style></style>
