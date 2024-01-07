import vueRouter from "./vueRouter";
import quasar from "./quasar";
import pinia from "./pinia";

export default {

    /**
     * @param {App<Element>} app
     */
    install(app) {
        pinia.install(app);
        vueRouter.install(app);
        quasar.install(app);
    },
};
