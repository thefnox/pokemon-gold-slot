/**
 *
 * Asynchronously loads the component for Layout
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
