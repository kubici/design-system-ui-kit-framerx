
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function gdoc_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m5.1 0c-2.8 0-5.1 2.3-5.1 5.1v53.8c0 2.8 2.3 5.1 5.1 5.1h45.8c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3h-32z" fill="#3C8CEA" fillRule="evenodd"/>
	<path d="m10.1 37.4h21.6v2.1h-21.6z m0 4.8h21.6v2.1h-21.6z m0 4.8h21.6v2.1h-21.6z m0 4.8h12.3v2.1h-12.3z" fill={props.fill}/>
	<g fillRule="evenodd">
		<path d="m56 20.4v1h-12.8s-6.4-1.3-6.2-6.7c0 0 0.2 5.7 6 5.7h13z" fill="#2D6FE4"/>
		<path d="m37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8h12.8l-18.9-20.4z" fill={props.fill} opacity=".5"/>
	</g>
</svg>
  );
};

addPropertyControls(gdoc_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
