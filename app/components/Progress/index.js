/**
 * Asynchronously loads the component for Progress
 */
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./Progress'),
  loading: () => null,
});
