
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom4_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m6.6 12.2l16.9-9.5c1.5-0.9 3.5-0.9 5.1 0l16.9 9.5c1.5 0.9 2.5 2.6 2.5 4.3v19c0 1.8-0.9 3.4-2.5 4.3l-16.9 9.5c-1.5 0.9-3.5 0.9-5.1 0l-16.9-9.5c-1.5-0.9-2.6-2.5-2.6-4.3v-19c0-1.8 1.1-3.4 2.6-4.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_custom4_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  