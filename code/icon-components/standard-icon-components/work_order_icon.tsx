
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function work_order_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m65.2 52.2c-3.6 1.4-5 4.8-5.2 5.3-0.3 0.7-0.8 0.8-0.8 0.8h-18c-0.3 0-0.6-0.4-0.8-0.7-1.5-3.5-5-6.1-9-6.1-3.7 0-6.9 2-8.6 5-0.2 0.4-0.8 0.5-1.2 0.2-1-0.9-1.6-2.2-1.6-3.6 0 0-0.6-11.6 3.3-17.6 0.7-1 1.2-1.4 2.1-1.4h38c0.4 0 0.8 0 1.2 0.3 0 0 4.2 6.4 4.8 7 0.5 0.5 1 0.9 2.3 1.2 0.8 0.2 8.1 2.8 8.1 2.8 0.4 0.2 0.3 0.7 0.3 1.1v6.5c0 1.4-0.4 2.7-1.4 3.6-0.4 0.3-0.9 0.2-1.1-0.2-1.7-3-4.8-5-8.5-5-1.5 0-2.7 0.3-3.9 0.8" fill={props.fill}/>
	<ellipse cx="69" cy="61.1" fill={props.fill} rx="4.9" ry="4.9"/>
	<ellipse cx="31.5" cy="61.1" fill={props.fill} rx="4.9" ry="4.9"/>
</svg>
  );
};

addPropertyControls(work_order_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  