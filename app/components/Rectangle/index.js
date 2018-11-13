/**
 *
 * Rectangle
 *
 */

import { PixiComponent } from '@inlet/react-pixi';

export default PixiComponent('Rectangle', {
  create: props => new PIXI.Graphics(),
  didMount: (instance, parent) => {},
  willUnmount: (instance, parent) => {},
  applyProps: (instance, oldProps, newProps) => {
    const { fill, x, y, width, height } = newProps;
    instance.clear();
    instance.beginFill(fill);
    instance.drawRect(x, y, width, height);
    instance.endFill();
  },
});
