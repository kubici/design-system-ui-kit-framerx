
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function word_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m5.1 0c-2.8 0-5.1 2.2-5.1 5v53.9c0 2.8 2.3 5.1 5.1 5.1h45.8c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3h-32z" fill="#14A9DA" fillRule="evenodd"/>
	<path d="m14.2 53.9h-3c-0.6 0-1.1-0.5-1.1-1.1v-9.9c0-0.6 0.5-1 1.1-1h3c3.8 0 6.2 2.6 6.2 6 0 3.4-2.4 6-6.2 6z m0-10.7h-2.6v9.3h2.6c3 0 4.7-2.1 4.7-4.6 0-2.6-1.7-4.7-4.7-4.7z m14.5 10.9c-3.6 0-6-2.7-6-6.2s2.4-6.2 6-6.2c3.5 0 5.9 2.6 5.9 6.2 0 3.5-2.4 6.2-5.9 6.2z m0-11.1c-2.7 0-4.4 2.1-4.4 4.9 0 2.8 1.7 4.8 4.4 4.8 2.6 0 4.4-2 4.4-4.8 0-2.8-1.8-4.9-4.4-4.9z m18.4 0.4c0.1 0.1 0.2 0.3 0.2 0.5 0 0.4-0.3 0.7-0.7 0.7-0.2 0-0.4-0.1-0.5-0.2-0.7-0.9-1.9-1.4-3-1.4-2.6 0-4.6 2-4.6 4.9 0 2.8 2 4.8 4.6 4.8 1.1 0 2.2-0.4 3-1.3 0.1-0.2 0.3-0.3 0.5-0.3 0.4 0 0.7 0.4 0.7 0.8 0 0.2-0.1 0.3-0.2 0.5-0.9 1-2.2 1.7-4 1.7-3.5 0-6.2-2.5-6.2-6.2s2.7-6.2 6.2-6.2c1.8 0 3.1 0.7 4 1.7z" fill={props.fill}/>
	<g fillRule="evenodd">
		<path d="m56 20.4v1h-12.8s-6.3-1.3-6.2-6.8c0 0 0.3 5.8 6.1 5.8h12.9z" fill="#0F93D0"/>
		<path d="m37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8h12.8l-18.9-20.4z" fill={props.fill} opacity=".5"/>
	</g>
</svg>
  );
};

addPropertyControls(word_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
