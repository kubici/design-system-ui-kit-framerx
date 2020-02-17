
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function service_territory_location_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m66.3 59.5c-2.2 0-3.9-1.7-4-3.9 0-2.2 1.8-3.9 4-3.9s3.9 1.7 4 3.9c0 2.1-1.8 3.9-4 3.9z m-18.9 0c-2.2 0-3.9-1.7-4-3.9 0-2.2 1.8-3.9 4-3.9s3.9 1.7 4 3.9c-0.1 2.1-1.8 3.8-4 3.9z m9.4 0c-2.2 0-3.9-1.7-4-3.9 0-2.2 1.8-3.9 4-3.9s3.9 1.7 4 3.9c0 2.1-1.8 3.9-4 3.9z m14.8-39.3h-43.5c-4.4-0.1-8.1 3.4-8.3 7.8v44.4c0.2 4.4 3.8 7.9 8.2 7.8h24.4c-5.1-4.5-13.5-13.8-13.5-23.5 0-9.6 7.7-17.3 17.3-17.3 9.6 0 17.3 7.7 17.3 17.3 0 9.8-8.5 19-13.6 23.5h11.8c4.4 0 8-3.4 8.2-7.8v-44.4c0-4.3-3.8-7.8-8.3-7.8z m-24.3 13.3c-0.1 1.5-1.3 2.7-2.8 2.8h-14.1c-1.5 0-2.8-1.3-2.8-2.8v-2.8c0.1-1.5 1.3-2.7 2.8-2.8h14.1c1.5 0 2.8 1.3 2.8 2.8v2.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(service_territory_location_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
