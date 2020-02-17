
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function slide_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m5.2 0c-2.8 0-5.1 2.3-5.1 5.1v53.8c0 2.8 2.2 5.1 5.1 5.1h45.7c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3h-31.9z" fill="#1AB6D9" fillRule="evenodd"/>
	<path d="m10.1 34.8v19.1h19.9v-19.1h-19.9z m18.1 15.4h-16.3v-11.8h16.3v11.8z" fill={props.fill}/>
	<path d="m56 20.4v1h-12.8s-6.3-1.3-6.2-6.8c0 0 0.3 5.8 6.1 5.8h12.9z" fill="#13A3CF" fillRule="evenodd"/>
	<path d="m37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8h12.8l-18.9-20.4z" fill={props.fill} fillRule="evenodd" opacity=".5"/>
</svg>
  );
};

addPropertyControls(slide_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
