
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function underline_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m44.5 42h-37c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h37c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5z m-19.2-4c-7.5-0.4-13.3-6.9-13.3-14.4v-13.6c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v13.7c0 4.3 3.2 8 7.5 8.3 4.7 0.3 8.5-3.4 8.5-8v-14c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v14c0 8-6.7 14.4-14.7 14z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(underline_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  