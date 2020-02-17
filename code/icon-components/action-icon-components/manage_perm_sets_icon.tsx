
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function manage_perm_sets_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m45 2h-38c-2.8 0-5 2.2-5 5v38c0 2.7 2.2 5 5 5h38c2.7 0 5-2.2 5-5v-38c0-2.8-2.2-5-5-5z m-1.6 43h-34.8c-0.9 0-1.6-0.7-1.6-1.6v-34.8c0-0.9 0.7-1.6 1.6-1.6h34.8c0.9 0 1.6 0.7 1.6 1.6v34.8c0 0.9-0.7 1.6-1.6 1.6z m-21.5-33.1h-8.3c-0.9 0-1.7 0.7-1.7 1.7v8.3c0 0.9 0.7 1.7 1.7 1.7h8.3c0.9 0 1.7-0.7 1.7-1.7v-8.3c-0.1-0.9-0.8-1.7-1.7-1.7z m16.5 0h-8.3c-0.9 0-1.7 0.7-1.7 1.7v8.3c0 0.9 0.7 1.7 1.7 1.7h8.3c0.9 0 1.7-0.7 1.7-1.7v-8.3c0-0.9-0.8-1.7-1.7-1.7z m-16.5 16.6h-8.3c-0.9 0-1.7 0.7-1.7 1.7v8.3c0 0.9 0.7 1.7 1.7 1.7h8.3c0.9 0 1.7-0.7 1.7-1.7v-8.3c-0.1-1-0.8-1.7-1.7-1.7z m16.5 0h-8.3c-0.9 0-1.7 0.7-1.7 1.7v8.3c0 0.9 0.7 1.7 1.7 1.7h8.3c0.9 0 1.7-0.7 1.7-1.7v-8.3c0-1-0.8-1.7-1.7-1.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(manage_perm_sets_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
