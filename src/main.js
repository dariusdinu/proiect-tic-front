import { createApp } from "vue";
import App from "./App.vue";
import TheHeader from "./components/TheHeader.vue";
import ConfirmDialog from "./components/ConfirmDialog.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.component("the-header", TheHeader);
app.component("confirm-dialog", ConfirmDialog);

app.use(store);
app.use(router);
app.mount("#app");
