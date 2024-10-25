<template>
  <div></div>
</template>
<script>
import axios from "axios";

export default {
  name: "GetAdminAPI",
  data() {
    return {};
  },
  methods: {
    getUsers() {
      const path = `https://admin.googleapis.com`;
      let userInfo = axios.create();

      userInfo
        .get(path + "/admin/directory/v1/users")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log("err : ", err);
        });
    },
  },
  created() {
    this.getUsers();
  },
};
</script>
<style></style>
