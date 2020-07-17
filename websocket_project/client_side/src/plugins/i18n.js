import Vue from 'vue';
import VueI18n from 'vue-i18n';
import viLang from '../lang/vi.json';
import enLang from '../lang/en.json';

import enVuetify from 'vuetify/lib/locale/en'


Vue.use(VueI18n);

const messages = {
    vi: viLang,
    en: {
        ...enVuetify,
        ...enLang,
        $vuetify: enVuetify,
    }
}

export default new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages
})