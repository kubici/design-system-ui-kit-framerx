
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function help_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m28.4 38h-5c-0.8 0-1.4-0.6-1.4-1.4v-1.5c0-4.2 2.7-8 6.7-9.4 1.2-0.4 2.3-1.1 3.2-2.1 5-6 0.4-13.2-5.6-13.4-2.2-0.1-4.3 0.7-5.9 2.2-1.3 1.2-2.1 2.7-2.3 4.4-0.1 0.6-0.7 1.1-1.5 1.1h-5c-0.9 0-1.6-0.7-1.5-1.6 0.4-3.8 2.1-7.2 4.8-9.9 3.2-3 7.3-4.6 11.7-4.5 8.3 0.3 15.1 7.1 15.4 15.4 0.3 7-4 13.3-10.5 15.7-0.9 0.4-1.5 1.1-1.5 2v1.5c0 0.9-0.8 1.5-1.6 1.5z m1.6 10.5c0 0.8-0.7 1.5-1.5 1.5h-5c-0.8 0-1.5-0.7-1.5-1.5v-5c0-0.8 0.7-1.5 1.5-1.5h5c0.8 0 1.5 0.7 1.5 1.5v5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(help_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  