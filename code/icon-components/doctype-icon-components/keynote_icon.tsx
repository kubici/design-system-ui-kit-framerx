
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function keynote_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m5.1 0c-2.8 0-5 2.3-5 5.1v53.8c0 2.8 2.2 5.1 5 5.1h45.8c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3h-32z" fill="#DB7A2A" fillRule="evenodd"/>
	<path d="m17.8 54c-0.2 0-0.4-0.1-0.5-0.2l-4.4-5.3-1.3 1.4v3.4c0 0.4-0.3 0.7-0.7 0.7-0.4 0-0.8-0.3-0.8-0.7v-10.8c0-0.4 0.4-0.7 0.8-0.7 0.4 0 0.7 0.3 0.7 0.7v5.6l5.2-6.1c0.2-0.1 0.4-0.2 0.5-0.2 0.4 0 0.8 0.3 0.8 0.7 0 0.1-0.1 0.3-0.2 0.4l-4.1 4.7 4.6 5.3c0.1 0.1 0.1 0.2 0.1 0.4 0 0.3-0.3 0.7-0.7 0.7z m10.9-0.1h-6.2c-0.6 0-1.1-0.5-1.1-1.1v-9.8c0-0.6 0.5-1.1 1.1-1.1h6.2c0.4 0 0.7 0.3 0.7 0.7 0 0.3-0.3 0.6-0.7 0.6h-5.8v3.9h5.7c0.4 0 0.7 0.3 0.7 0.7 0 0.3-0.3 0.6-0.7 0.6h-5.7v4.2h5.8c0.4 0 0.7 0.2 0.7 0.6 0 0.4-0.3 0.7-0.7 0.7z m12.4-11l-4 5.9v4.5c0 0.4-0.3 0.7-0.8 0.7-0.4 0-0.7-0.3-0.7-0.7v-4.5l-4.1-5.9c0-0.1-0.1-0.3-0.1-0.4 0-0.4 0.3-0.7 0.7-0.7 0.3 0 0.5 0.1 0.7 0.3l3.5 5.4 3.6-5.4c0.1-0.2 0.4-0.3 0.6-0.3 0.4 0 0.7 0.3 0.7 0.7 0 0.1 0 0.3-0.1 0.4z" fill={props.fill}/>
	<g fillRule="evenodd">
		<path d="m56 20.4v1h-12.8s-6.3-1.3-6.2-6.8c0 0 0.3 5.8 6.1 5.8h12.9z" fill="#D25B1F"/>
		<path d="m37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8h12.8l-18.9-20.4z" fill={props.fill} opacity=".5"/>
	</g>
</svg>
  );
};

addPropertyControls(keynote_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
