
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function product_request_line_item_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m77.8 77.4h-37c-1.2 0-2.3-1-2.3-2.2v-4.7c0-1.2 1-2.3 2.2-2.3h37c1.2 0 2.3 1 2.3 2.2v4.7c0.1 1.2-0.9 2.3-2.2 2.3z m-50.9 0h-4.6c-1.2 0-2.3-1-2.3-2.2v-4.7c0-1.2 1-2.3 2.2-2.3h4.7c1.2 0 2.3 1 2.3 2.2v4.7c0.1 1.2-0.8 2.2-2 2.3h-0.3z m-2.5-28.9c6.8-11.7 22.9-17 33.6-11.8l2.9 1.3c1 0.5 2-0.6 1.7-1.6l-2.8-9.4c-0.3-1 0.3-2 1.2-2.4l3.4-1.3c0.8-0.4 1.7 0 2.1 0.8 0 0.1 0.1 0.2 0.1 0.3l6.8 22.7c0.3 1-0.2 2.1-1.2 2.4l-22 8.6c-0.8 0.4-1.7 0-2.1-0.8 0-0.1-0.1-0.2-0.1-0.3l-1.1-3.5c-0.3-1 0.2-2.1 1.2-2.4l9-3.6c0.7-0.2 1-0.9 0.8-1.6-0.1-0.3-0.3-0.6-0.6-0.7l-1.7-0.8c-8.3-4.1-21 0.1-26 8.4-0.5 0.8-2.3 1-3.2 0.6l-1.7-1.6c-0.9-0.4-0.8-2.4-0.3-3.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(product_request_line_item_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  