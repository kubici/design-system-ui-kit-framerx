
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function resource_preference_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m49.9 20a25.4 25.4 0 1 0 25.2 25.5c0-13.8-11.2-25.5-25.2-25.5z m-10.7 35.9a2.8 2.8 0 0 1-3 2.6h-1.9a1.1 1.1 0 0 1-1.1-1v-14.7a1.1 1.1 0 0 1 1.1-1h3.8a1.1 1.1 0 0 1 1.1 1z m27.2-2.9c0 5.5-5.2 6.1-10.9 6.1-5.3 0-7.1-1.8-12.2-1.9a1 1 0 0 1-1-1v-12.7a1.1 1.1 0 0 1 1.1-1 6.7 6.7 0 0 0 6.4-6.7v-3.8a1.1 1.1 0 0 1 1.1-1h1.9a2.8 2.8 0 0 1 3 2.5v6.5a2.8 2.8 0 0 0 3 2.5h4.5a2.8 2.8 0 0 1 3 2.6z m-40.4 11.2h-1.3a4.8 4.8 0 0 0-4.7 4.8v6.3a4.7 4.7 0 0 0 4.7 4.7h50.6a4.8 4.8 0 0 0 4.7-4.7v-6.3a4.7 4.7 0 0 0-4.7-4.8h-1.6a30.1 30.1 0 0 1-47.7 0z" fill={props.fill} fillRule="evenodd"/>
</svg>
  );
};

addPropertyControls(resource_preference_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
