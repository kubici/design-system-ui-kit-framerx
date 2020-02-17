
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function box_notes_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m5.1 0c-2.8 0-5.1 2.3-5.1 5.1v53.8c0 2.8 2.3 5.1 5.1 5.1h45.8c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3h-32z" fill="#277A84"/>
	<path d="m56 20.4v1h-12.8s-6.4-1.3-6.2-6.7c0 0 0.2 5.7 6 5.7h13z" fill="#1E5B60"/>
	<path d="m37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8h12.8l-18.9-20.4z" fill={props.fill} opacity=".5"/>
	<path d="m27.1 39.3l2.1-2.1h-18.7s-0.4 0-0.4 0.4 0 1.2 0 1.4c0 0.2 0.2 0.3 0.4 0.3h16.6z m-7.3 7.3l2.1-2.1h-11.4s-0.4 0-0.4 0.4v1.3s0.2 0.4 0.4 0.4h9.3z m-5.1 7.3l0.3-2.1h-4.5s-0.4 0-0.4 0.4 0 1.2 0 1.3c0 0.2 0.2 0.4 0.4 0.4h4.2z m0.9 0s1.7-0.1 2-0.1c0.3-0.1 0.4-0.2 0.5-0.3l13.1-13.1s-0.5 0.4-1.6-0.7c-0.8-0.9-0.4-1.4-0.4-1.4s-12.8 12.7-13 13c-0.3 0.2-0.3 0.4-0.3 0.5 0 0.1-0.3 2.1-0.3 2.1z m15.1-17.2c-0.2 0.2-0.9 1-1 1.1-0.1 0.1-0.2 0.2-0.1 0.6 0.1 0.3 0.7 1.3 1.6 1.6 0 0 0.3 0.1 0.6-0.2 0.2-0.2 1.1-1 1.1-1s0.2-0.2 0-0.7c-0.2-0.4-0.8-1.2-1.6-1.5-0.4-0.2-0.6 0.1-0.6 0.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(box_notes_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
