
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function zoomin_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m31 19h-6v-6c0-0.6-0.4-1-1-1h-4c-0.6 0-1 0.4-1 1v6h-6c-0.6 0-1 0.4-1 1v4c0 0.6 0.4 1 1 1h6v6c0 0.6 0.4 1 1 1h4c0.6 0 1-0.4 1-1v-6h6c0.6 0 1-0.4 1-1v-4c0-0.6-0.4-1-1-1z m18.6 26.2l-11.5-11.4c2.4-3.3 3.9-7.4 3.9-11.8 0-11-9-20-20-20s-20 9-20 20 9 20 20 20c4.4 0 8.5-1.5 11.8-3.9l11.5 11.5c0.6 0.6 1.5 0.6 2.1 0l2.1-2.1c0.6-0.6 0.6-1.6 0.1-2.3z m-27.6-9.2c-7.7 0-14-6.3-14-14s6.3-14 14-14 14 6.3 14 14-6.3 14-14 14z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(zoomin_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
