/**
 * Asynchronously loads the component for Buttons
 */
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./Button'),
  loading: () => null,
});
