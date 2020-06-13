
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function product_transfer_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m75.6 20.5h-3.6a1.8 1.8 0 0 0-1.7 1.8v8.3c0 1-1.2 1.8-1.9 0.9a26 26 0 0 0-22.1-8.5 22.7 22.7 0 0 0-8.8 2.6 22.9 22.9 0 0 0-4 2.5 1.9 1.9 0 0 0-0.2 2.7l2.5 2.5a1.8 1.8 0 0 0 2.2 0.2 28.6 28.6 0 0 1 4.6-2.5c0.7-0.2 1.6-0.4 2.4-0.7a19.5 19.5 0 0 1 18.5 6.4c1.5 1.7 0.4 2.7-0.8 2.7h-8.3a1.9 1.9 0 0 0-1.9 1.8v3.6a1.9 1.9 0 0 0 1.9 1.7h21.6a1.5 1.5 0 0 0 1.4-1.5v-22.7a1.8 1.8 0 0 0-1.8-1.8z m-10.8 41.9a1.7 1.7 0 0 0-2.4 0 18.9 18.9 0 0 1-6.9 4.4c-0.7 0.2-1.5 0.4-2.4 0.7a19.5 19.5 0 0 1-18.5-6.4c-1.4-1.7-0.4-2.7 0.8-2.7h8.3a1.8 1.8 0 0 0 1.8-1.8v-3.6a1.8 1.8 0 0 0-1.8-1.7h-21.5a1.6 1.6 0 0 0-1.6 1.5v22.7a1.8 1.8 0 0 0 1.8 1.8h3.5a1.8 1.8 0 0 0 1.8-1.8v-8.3c0-1 1.2-1.7 1.9-0.9a25.9 25.9 0 0 0 22.1 8.5 22.7 22.7 0 0 0 8.8-2.6 25.9 25.9 0 0 0 6.7-4.8 1.7 1.7 0 0 0 0-2.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(product_transfer_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  