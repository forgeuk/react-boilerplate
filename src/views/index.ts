import Home from './Home';
import Example from './Example';
import Error from './Error';

export default [
  { path: '/', component: Home },
  { path: '/example', component: Example },
  { path: undefined, component: Error },
];
