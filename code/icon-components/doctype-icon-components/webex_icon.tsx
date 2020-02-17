
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function webex_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fillRule="evenodd">
		<path d="m5.2 0c-2.8 0-5.1 2.3-5.1 5.1v53.8c0 2.8 2.3 5.1 5.1 5.1h45.7c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3h-31.9z" fill="#80BC4B"/>
		<path d="m56 20.4v1h-12.8s-6.3-1.3-6.2-6.8c0 0 0.3 5.8 6.1 5.8h12.9z" fill="#60AB38"/>
		<path d="m37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8h12.8l-18.9-20.4z" fill={props.fill} opacity=".5"/>
	</g>
	<path d="m20.5 53.9c5.1-0.3 9.2-4.6 9.2-9.8 0-5.2-4.1-9.5-9.2-9.8v19.6z" fill="#CFE8AF"/>
	<path d="m19.3 53.9c-5.1-0.4-9.1-4.6-9.1-9.8s4-9.5 9.1-9.8v19.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(webex_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
