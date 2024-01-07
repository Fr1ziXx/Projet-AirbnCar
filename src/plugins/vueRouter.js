import router from "../router";

export default {
    /**
     * @param {App<Element>} app
     */
    install: (app) => {
        app.use(router)
    }
}
