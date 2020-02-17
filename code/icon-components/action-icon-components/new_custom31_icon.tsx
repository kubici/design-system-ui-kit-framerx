
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom31_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m46.4 20.7l-3.9-12c-0.7-2.2-2.9-3.7-5.3-3.7h-22.4c-2.4 0-4.6 1.5-5.4 3.7l-3.8 12c-2.1 0.6-3.6 2.3-3.6 4.5v9.3c0 2 1.4 3.7 3.2 4.4v6.5c0 0.9 0.7 1.6 1.6 1.6h6.4c0.9 0 1.6-0.7 1.6-1.6v-6.2h22.4v6.2c0 0.9 0.7 1.6 1.6 1.6h6.4c0.9 0 1.6-0.7 1.6-1.6v-6.4c1.8-0.6 3.2-2.3 3.2-4.4v-9.3c0-2.3-1.5-4-3.6-4.6z m-36.4 13.1c-2.2 0-4-1.7-4-3.9s1.8-3.9 4-3.9 4 1.7 4 3.9-1.8 3.9-4 3.9z m17.6-13.2h-15.8c-0.6 0-1-0.5-0.8-1l3-9.3c0.1-0.3 0.4-0.5 0.7-0.5h22.4c0.3 0 0.6 0.2 0.7 0.5l3 9.4c0.2 0.5-0.2 1-0.8 1h-12.4z m13.6 13.2c-2.2 0-4-1.7-4-3.9s1.8-3.9 4-3.9 4 1.7 4 3.9-1.8 3.9-4 3.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_custom31_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
