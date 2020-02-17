
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function fulfillment_order_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m24.3 36.5c0.7 0 1.4 0.1 2 0.3l-10.8-30.6-1-3c-0.3-0.9-1.2-1.3-2-1l-9.4 3.1c-0.9 0.3-1.3 1.2-1 2l1 3c0.3 0.9 1.2 1.3 2 1l4.9-1.6 9.9 28.1c1.3-0.8 2.8-1.3 4.4-1.3z m16.9-7.3l-9.9 3.5c-1 0.4-2.2-0.2-2.5-1.2l-3.5-9.9c-0.4-1 0.2-2.2 1.2-2.5l9.9-3.5c1-0.4 2.2 0.2 2.5 1.2l3.5 9.9c0.4 1-0.2 2.1-1.2 2.5z m-9.4-16.3l-6.7 2.3c-1 0.4-2.2-0.2-2.5-1.2l-2.3-6.7c-0.4-1 0.2-2.2 1.2-2.5l6.7-2.3c1-0.4 2.2 0.2 2.5 1.2l2.3 6.7c0.4 0.9-0.1 2.1-1.2 2.5z m18.1 22.6l-1-3c-0.3-0.9-1.2-1.3-2-1l-18.2 6.3c1.9 1.2 3.2 3.2 3.6 5.5l16.7-5.7c0.8-0.3 1.2-1.2 0.9-2.1z m-25.6 3.6c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5c0-3.1-2.5-5.5-5.5-5.5z"/>
	</g>
</svg>
  );
};

addPropertyControls(fulfillment_order_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
