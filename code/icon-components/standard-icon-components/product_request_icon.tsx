
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function product_request_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m77.4 78.1h-36.9c-1.2 0-2.3-1-2.3-2.2v-4.7c0-1.2 1-2.3 2.2-2.3h37c1.2 0 2.3 1 2.3 2.2v4.7c0.1 1.2-0.9 2.3-2.3 2.3 0.1 0 0.1 0 0 0z m-50.8 0h-4.6c-1.2 0-2.3-1-2.3-2.2v-4.7c0-1.2 1-2.3 2.2-2.3h4.7c1.2 0 2.3 1 2.3 2.2v4.7c0.1 1.2-0.9 2.2-2.1 2.3h-0.2z m27.2-20.5c-1.2 0-2.3-1-2.3-2.2v-4.7c0-1.2 1-2.3 2.2-2.3h23.7c1.2 0 2.3 1 2.3 2.2v4.7c0 1.2-1 2.3-2.2 2.3h-23.7z m8.8-20.5c-1.2 0-2.3-1-2.3-2.2v-4.7c0-1.2 1-2.3 2.2-2.3h14.9c1.2 0 2.3 1 2.3 2.2v4.7c0 1.2-1 2.3-2.2 2.3h-14.9z m-41.8 21.1c-1.2-10.7 7.2-21.8 17.2-23.7l2.7-0.6c0.5-0.1 0.9-0.6 0.8-1.2 0-0.3-0.2-0.5-0.4-0.6l-6.7-4.5c-0.7-0.5-0.8-1.4-0.3-2v-0.1l1.7-2.5c0.4-0.7 1.4-0.9 2-0.4h0.1l16.1 10.9c0.7 0.4 0.9 1.4 0.4 2v0.1l-11 16.2c-0.4 0.7-1.4 0.9-2 0.4h-0.1l-2.5-1.7c-0.7-0.4-0.9-1.4-0.4-2v-0.1l4.4-6.7c0.3-0.4 0.3-1.1-0.2-1.4-0.2-0.2-0.5-0.3-0.8-0.2l-1.6 0.3c-7.8 1.5-14.4 10.3-13.7 17.9 0 0.7-1.1 1.7-1.9 1.9h-1.9c-0.9 0.1-1.9-1.1-1.9-2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(product_request_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
