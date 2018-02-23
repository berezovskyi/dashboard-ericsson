/**
 * Asynchronously loads the component for Popover
 */
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./Popover'),
  loading: () => null,
});
