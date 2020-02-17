
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function datadotcom_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m42.5 49.1h-5.3c-0.3-1.9-0.5-3.6-0.5-5.1h-0.1c-2.5 4-6.6 6-12.2 6-4.8 0-8.5-1.6-11.1-4.9-2.6-3.3-3.8-7.6-3.8-12.8 0-3.4 0.6-6.4 1.9-9.1s3.1-4.9 5.5-6.4c2.4-1.6 5.2-2.4 8.4-2.4 4.6 0 8.3 1.5 11.1 4.4v-16.7h5.6v39.6c0 2.4 0.2 4.9 0.5 7.4z m-6.2-14.5v-10.7c-1.3-1.7-2.8-2.9-4.5-3.8-1.7-0.8-3.6-1.2-5.8-1.2-3.3 0-5.9 1.2-7.8 3.7-1.9 2.5-2.8 5.7-2.8 9.6 0 4.1 0.9 7.3 2.7 9.7 1.8 2.4 4.4 3.6 7.6 3.6 3.2 0 5.8-1 7.7-3.1 2-2 2.9-4.6 2.9-7.8z" fill={props.fill}/>
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
  
