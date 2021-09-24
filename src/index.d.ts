declare module '*.css';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<unknown, unknown, never>;
  export default component;
}
