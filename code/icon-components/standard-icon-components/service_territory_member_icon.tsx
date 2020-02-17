
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function service_territory_member_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m42.7 42.3a7.1 7.1 0 0 1 7.3-7.1 7.1 7.1 0 1 1-7.3 7.1z m7.2-22.3a25.4 25.4 0 1 0 25.2 25.5c0-13.8-11.2-25.5-25.2-25.5z m1 43.9a1.4 1.4 0 0 1-1.9 0c-3.1-2.4-13.5-11.7-13.5-21.6a14.5 14.5 0 0 1 29 0c0 10-10.4 19.1-13.6 21.6z m-24.9 0.3h-1.3a4.8 4.8 0 0 0-4.7 4.8v6.3a4.7 4.7 0 0 0 4.7 4.7h50.6a4.8 4.8 0 0 0 4.7-4.7v-6.3a4.7 4.7 0 0 0-4.7-4.8h-1.6a30.1 30.1 0 0 1-47.7 0z" fill={props.fill} fillRule="evenodd"/>
</svg>
  );
};

addPropertyControls(service_territory_member_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
