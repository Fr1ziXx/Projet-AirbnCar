import {createPinia} from "pinia";

export default {
    /**
     * @param {App<Element>} app
     */
    install: (app) => {
        const pinia = createPinia();

        app.use(pinia);
    },
};