import { createApp } from 'vue';
import App from '@src/components/Application.vue';

// Say something
console.log('[EVTW] : Renderer execution started');

// Mount application
createApp(App).mount('#app');
