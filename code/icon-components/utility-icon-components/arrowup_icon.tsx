
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function arrowup_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m41.4 21c0.8-0.8 0.8-1.9 0-2.7l-15-14.7c-0.8-0.8-2-0.8-2.8 0l-15 14.7c-0.8 0.8-0.8 1.9 0 2.7l2.8 2.7c0.8 0.8 2 0.8 2.8 0l4.7-4.6c0.8-0.8 2.2-0.2 2.2 0.9v27c0 1 0.9 2 2 2h4c1.1 0 2-1.1 2-2v-27c0-1.2 1.4-1.7 2.2-0.9l4.7 4.6c0.8 0.8 2 0.8 2.8 0l2.6-2.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(arrowup_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
