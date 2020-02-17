
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function service_territory_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m56.6 62.1a7.4 7.4 0 0 1-7.4-7.2 7.3 7.3 0 0 1 7.4-7.2 7.2 7.2 0 1 1 0 14.4z m15.2-42.1h-43.5a8.1 8.1 0 0 0-8.3 7.8v44.4a8.1 8.1 0 0 0 8.2 7.8h24.4c-5.1-4.5-13.6-13.8-13.6-23.5a17.3 17.3 0 0 1 34.7 0c0 9.8-8.6 19-13.7 23.5h11.8a8.1 8.1 0 0 0 8.2-7.8v-44.4c0.1-4.2-3.6-7.8-8.2-7.8z m-24.2 13.4a2.9 2.9 0 0 1-2.7 2.7h-14.1a2.9 2.9 0 0 1-2.8-2.7v-2.8a2.9 2.9 0 0 1 2.8-2.7h14a2.9 2.9 0 0 1 2.8 2.7z" fill={props.fill} fillRule="evenodd"/>
</svg>
  );
};

addPropertyControls(service_territory_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
