import { createApp } from "vue";
import App from "./App.vue";
import googleAuth from "./scripts/authentification";

const app = createApp(App);

const gAuthOption = {
  clientId: "260086547840-vikllgh8rl7ttkceo1b5lg0ajd2c9t56.apps.googleusercontent.com",
  scope: "profile email https://www.googleapis.com/auth/plus.login",
};

app.config.globalProperties.$gAuth = googleAuth;
app.config.globalProperties.$gAuth.load(gAuthOption, prompt);

app.mount("#app");
