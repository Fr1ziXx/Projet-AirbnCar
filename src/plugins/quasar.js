import {Quasar} from "quasar";
import quasarLang from "quasar/lang/fr";

import quasarIconSet from 'quasar/icon-set/material-symbols-outlined'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'
// Import Quasar css
import 'quasar/src/css/index.sass'

export default {
    install(app) {
        app.use(Quasar, {
            iconSet: quasarIconSet,
            lang: quasarLang,
            config: {
                dark: 'auto' // or Boolean true/false
            }
        });

        //app.config.globalProperties.$q = useQuasar();
    },
};
