
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function entitlement_template_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m70.5 19.5h-36.7c-3.7 0.1-6.8 3.2-6.9 6.9h-2.3c-2.5 0-4.6 2.1-4.6 4.6v0.1c0 2.5 2 4.6 4.5 4.6h2.4v9.3h-2.3c-2.5 0-4.6 2.1-4.6 4.6 0 2.5 2.1 4.6 4.6 4.6h2.3v9.3h-2.3c-2.5 0-4.6 2-4.6 4.6 0 2.5 2 4.6 4.5 4.6h2.4c0 4.6 3.2 6.9 6.9 6.9h36.7c3.8-0.1 6.8-3.1 6.9-6.9v-46.3c-0.1-3.8-3.1-6.8-6.9-6.9z m-3.3 45.1h-30.5v-30h30.5v30z m-25.2-19.5h19.9c0.4 0 0.8-0.3 0.8-0.7v-4.6c0-0.4-0.3-0.8-0.7-0.8h-20c-0.4 0-0.8 0.3-0.8 0.7v4.6c0 0.4 0.3 0.8 0.7 0.8h0.1z m0 15h4.6c0.4 0 0.8-0.3 0.8-0.7v-9.1c0-0.4-0.3-0.8-0.7-0.8h-4.7c-0.4 0-0.8 0.3-0.8 0.7v9.1c0 0.4 0.3 0.8 0.7 0.8h0.1z m19.8-10.5h-9.2c-0.4 0-0.8 0.3-0.8 0.7v9.1c0 0.4 0.3 0.8 0.7 0.8h9.3c0.4 0 0.8-0.3 0.8-0.7v-9.1c0-0.4-0.3-0.8-0.7-0.8h-0.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(entitlement_template_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
