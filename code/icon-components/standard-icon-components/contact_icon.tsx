
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function contact_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m74 29h-48c-3.3 0-6 2.7-6 6v29c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6v-29c0-3.3-2.7-6-6-6z m-25.4 34h-17.2c-1.9 0-3.4-2.1-3.4-4.1 0.1-3 3.2-4.8 6.5-6.3 2.3-1 2.6-1.9 2.6-2.9s-0.6-1.9-1.4-2.6c-1.3-1.2-2.1-3-2.1-5 0-3.8 2.3-7 6.3-7s6.3 3.2 6.3 7c0 2-0.7 3.8-2.1 5-0.8 0.7-1.4 1.6-1.4 2.6s0.3 1.9 2.6 2.8c3.3 1.4 6.4 3.4 6.5 6.4 0.2 2-1.3 4.1-3.2 4.1z m23.4-7c0 1.1-0.9 2-2 2h-9c-1.1 0-2-0.9-2-2v-3c0-1.1 0.9-2 2-2h9c1.1 0 2 0.9 2 2v3z m0-11c0 1.1-0.9 2-2 2h-15c-1.1 0-2-0.9-2-2v-3c0-1.1 0.9-2 2-2h15c1.1 0 2 0.9 2 2v3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(contact_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
