
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom37_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m80 56h-13v-11.8c2.7 2.3 6.2 3.8 10 3.8 1.7 0 3-1.3 3-3s-1.3-3-3-3c-5.5 0-10-4.9-10-11v-3c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2h-6c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2v3c0 6.1-4.9 11-11 11s-11-4.9-11-11v-3c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2h-6c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2v3c0 6.1-4.5 11-10 11-1.7 0-3 1.3-3 3s1.3 3 3 3c3.8 0 7.3-1.4 10-3.8v11.8h-13c-1.1 0-2 0.9-2 2v4.8c0 1.1 0.9 2.2 2 2.2h4v10.8c0 1.1 0.9 2.2 2 2.2h6c1.1 0 2-1.1 2-2.2v-4c0-3.3 2.7-5.8 6-5.8h20c3.3 0 6 2.5 6 5.8v4c0 1.1 0.9 2.2 2 2.2h6c1.1 0 2-1.1 2-2.2v-10.8h4c1.1 0 2-1.1 2-2.2v-4.8c0-1.1-0.9-2-2-2z m-41-12.1c3 2.5 6.8 4.1 11 4.1s8-1.5 11-4.1v12.1h-22v-12.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom37_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  