
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function maintenance_asset_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m46.5 30.5c0.2 0.5 0.6 0.8 1.1 0.8h27.5c1.3 0 2.7 0.3 3.9 0.8 0.5 0.3 1.1-0.1 1.1-0.8 0.1-2.8-2.1-5-4.9-5.1h-30.2c-0.3 0-0.6 0.2-0.6 0.5 0 0.1 0 0.3 0.1 0.4l2 3.4z m28.6 5.9h-28.4c-1.8 0-3.4-1-4.4-2.5l-4.4-7.6c-0.8-1.6-2.5-2.6-4.3-2.6h-8.5c-2.8 0-5 2.2-5 5v45.9c-0.1 2.8 2.1 5 4.9 5.1h50.1c2.8 0 5-2.2 5-5v-33.2c0.1-2.8-2.1-5-4.9-5.1h-0.1z m-13.1 33.3c-1.1 1.2-2.9 1.2-4.1 0.1l-0.1-0.1-9.9-9.9c-0.6 0.3-1.3 0.4-2 0.5-4.2 0.5-8-2.6-8.5-6.8v-0.8c0-0.7 0.1-1.5 0.3-2.2 0.1-0.2 0.3-0.4 0.6-0.3 0.1 0 0.1 0 0.1 0.1l4.3 4.3c0.3 0.3 0.9 0.3 1.2 0l3-3c0.3-0.3 0.3-0.9 0-1.2l-4.3-4.3c-0.2-0.2-0.1-0.5 0.1-0.6l0.1-0.1c0.7-0.2 1.5-0.3 2.2-0.3 4.2 0 7.6 3.4 7.6 7.7v0.8c-0.1 0.7-0.3 1.3-0.5 2l9.9 9.9c1.3 1.1 1.5 2.9 0.4 4.2-0.2 0-0.2 0.1-0.4 0z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(maintenance_asset_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
