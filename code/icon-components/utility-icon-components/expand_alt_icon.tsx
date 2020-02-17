
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function expand_alt_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48.8 2h-15.5c-1 0-1.3 0.9-0.5 1.7l4.9 4.9-9 9c-0.5 0.5-0.5 1.3 0 1.9l3.7 3.7c0.5 0.5 1.3 0.5 1.9 0l9.1-9.1 4.9 4.9c0.8 0.8 1.7 0.5 1.7-0.5v-15.4c0-0.6-0.6-1.1-1.2-1.1z m-45.3 48h15.4c1 0 1.3-1.1 0.5-1.9l-4.9-5 9-9.1c0.5-0.5 0.5-1.4 0-1.9l-3.7-3.7c-0.5-0.5-1.3-0.5-1.9 0l-9 9-5-4.9c-0.9-0.8-1.9-0.5-1.9 0.5v15.4c0 0.7 0.8 1.6 1.5 1.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(expand_alt_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  