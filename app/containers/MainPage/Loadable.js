/**
 * Asynchronously loads the component for MainPage
 */
import loadable from 'loadable-components';

export default loadable(() => import('./index'));
