import { createApp, h, type Component } from 'vue'
import { createI18n } from 'vue-i18n'
import { uiMessages } from '@thekestongroup/ui'
import SiteLayout from './components/SiteLayout.vue'
import './style.css'

const i18n = createI18n({ legacy: false, locale: 'en', fallbackLocale: 'en', messages: uiMessages })

/** Mounts one page inside the shared header and footer. */
export function mountPage(page: Component) {
  createApp({ render: () => h(SiteLayout, null, { default: () => h(page) }) })
    .use(i18n)
    .mount('#app')
}
