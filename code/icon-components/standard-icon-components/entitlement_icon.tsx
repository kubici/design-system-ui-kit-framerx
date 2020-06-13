
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function entitlement_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m71.9 19.9h-36.7c-3.7 0-6.9 3.4-6.9 6.9h-2.3c-2.6 0-4.6 2.1-4.6 4.7s2 4.6 4.6 4.6h2.3v9.3h-2.3c-2.6 0-4.6 2-4.6 4.6s2 4.6 4.6 4.6h2.3v9.3h-2.3c-2.6 0-4.6 2.1-4.6 4.6 0 2.6 2 4.6 4.6 4.6h2.3c0 4.6 3.2 6.9 6.9 6.9h36.7c3.7 0 6.9-3.2 6.9-6.9v-46.3c-0.1-3.7-3.2-6.9-6.9-6.9z m-3.8 50.1c0 1.1-0.9 2-2 2h-26.1c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h26.1c1.1 0 2 0.9 2 2v2z m-28.1-19.7l2.1-2.1c0.6-0.6 1.5-0.6 2.1 0l5.2 5.1 12.8-12.7c0.6-0.6 1.5-0.6 2.1 0l2.1 2.1c0.5 0.6 0.5 1.6 0 2.1l-15 14.8c-0.6 0.6-1.3 0.8-2.1 0.8s-1.5-0.2-2.1-0.8l-7.2-7.2c-0.7-0.6-0.7-1.5 0-2.1z m28.1-17.9c0 1.1-0.9 2-2 2h-26.1c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h26.1c1.1 0 2 0.9 2 2v2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(entitlement_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  