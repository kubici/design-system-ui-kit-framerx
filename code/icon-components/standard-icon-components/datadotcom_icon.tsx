
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function datadotcom_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" {...props}>
	<path d="m71.1 80h-6.8c-0.4-2.4-0.6-4.6-0.6-6.5h-0.1c-3.2 5.1-8.4 7.7-15.6 7.7-6.1 0-10.9-2-14.2-6.3-3.3-4.2-4.9-9.7-4.9-16.3 0-4.3 0.8-8.2 2.4-11.6s4-6.3 7-8.2c3.1-2 6.6-3.1 10.7-3.1 5.9 0 10.6 1.9 14.2 5.6v-21.3h7.2v50.6c0 3 0.3 6.2 0.7 9.4z m-7.9-18.5v-13.7c-1.7-2.2-3.6-3.7-5.7-4.9-2.2-1-4.6-1.5-7.4-1.5-4.2 0-7.5 1.5-10 4.7s-3.6 7.3-3.6 12.3c0 5.2 1.1 9.3 3.4 12.4s5.6 4.6 9.7 4.6 7.4-1.3 9.8-4c2.6-2.5 3.8-5.8 3.8-9.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(datadotcom_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
