
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function service_crew_member_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m77.3 45.5h-5.5v-6.3c0-8.3-4.7-15.5-11.5-19.2v10.9c0 5.6-4.6 10.2-10.2 10.2s-10.2-4.6-10.2-10.2v-11c-7 3.6-11.8 10.9-11.8 19.4v6.3h-5.5c-1.5 0-2.8 1.2-2.8 2.8v0.5c0 1.5 1.2 2.8 2.8 2.8h54.6c1.5 0 2.8-1.2 2.8-2.8v-0.5c0.1-1.6-1.2-2.9-2.7-2.9z m-27.2-10.4c2.3 0 4.2-1.9 4.2-4.2v-13.1c-1.4-0.3-2.8-0.4-4.3-0.4-1.4 0-2.7 0.1-4 0.4v13.1c0 2.3 1.8 4.2 4.1 4.2z"/>
	</g>
	<path d="m50 82.6c-12.7 0-23-11.3-23-25.1h6c0 10.5 7.6 19.1 17 19.1s17-8.6 17-19.1h6c0 13.8-10.3 25.1-23 25.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(service_crew_member_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
