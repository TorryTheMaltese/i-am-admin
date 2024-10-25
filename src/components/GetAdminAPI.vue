<template>
  <div></div>
</template>
<script>
export default {
  name: "GetAdminAPI",
  data() {
    return {};
  },
  methods: {
    async authorize() {
      this.handleLogin();
    },
    async handleLogin() {
      try {
        const googleUser = await this.$gAuth.signIn();
        console.log(googleUser);
      } catch (err) {
        console.error(err);
      }
    },
  },
  created() {
    this.authorize();
  },
};
</script>
<style></style>
