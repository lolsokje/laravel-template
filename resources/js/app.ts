import { createInertiaApp, Head, Link } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import '../css/app.css';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m.js';

const appName = window.document.getElementsByName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title: string): string => `${title} - ${appName}`,
    // @ts-ignore
    resolve: (name: string): Promise<any> => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    // @ts-ignore
    setup ({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component('InertiaHead', Head)
            .component('InertiaLink', Link)
            .mount(el);
    },
});
