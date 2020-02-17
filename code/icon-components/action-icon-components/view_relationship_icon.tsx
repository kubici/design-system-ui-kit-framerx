
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function view_relationship_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m36 20c0-2.2-1.8-4-4-4h-26c-2.2 0-4 1.8-4 4v26c0 2.2 1.8 4 4 4h26c2.2 0 4-1.8 4-4v-26z m7 22h-3v-6h3c0.6 0 1-0.4 1-1v-26c0-0.6-0.4-1-1-1h-26c-0.6 0-1 0.4-1 1v3h-6v-3c0-3.9 3.1-7 7-7h26c3.9 0 7 3.1 7 7v26c0 3.9-3.1 7-7 7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(view_relationship_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
