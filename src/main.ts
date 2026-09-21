import './style.css';
import { App } from './ui/app';

const el = document.querySelector<HTMLElement>('#app');
if (!el) {
  throw new Error('Missing #app root');
}
new App(el);
