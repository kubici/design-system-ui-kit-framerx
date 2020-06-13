
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function pdf_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m5.1 0c-2.8 0-5.1 2.3-5.1 5.1v53.8c0 2.8 2.3 5.1 5.1 5.1h45.8c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3h-32z" fill="#8C181A"/>
	<path d="m56 20.4v1h-12.8s-6.3-1.3-6.1-6.7c0 0 0.2 5.7 6 5.7h12.9z" fill="#6B0D12"/>
	<path d="m37.1 0v14.6c0 1.7 1.1 5.8 6.1 5.8h12.8l-18.9-20.4z" fill={props.fill} opacity=".5"/>
	<path d="m14.9 49h-3.3v4.1c0 0.4-0.3 0.7-0.8 0.7-0.4 0-0.7-0.3-0.7-0.7v-10.2c0-0.6 0.5-1.1 1.1-1.1h3.7c2.4 0 3.8 1.7 3.8 3.6 0 2-1.4 3.6-3.8 3.6z m-0.1-5.9h-3.2v4.6h3.2c1.4 0 2.4-0.9 2.4-2.3s-1-2.3-2.4-2.3z m10.4 10.7h-3c-0.6 0-1.1-0.5-1.1-1.1v-9.8c0-0.6 0.5-1.1 1.1-1.1h3c3.7 0 6.2 2.6 6.2 6s-2.4 6-6.2 6z m0-10.7h-2.6v9.3h2.6c2.9 0 4.6-2.1 4.6-4.7 0.1-2.5-1.6-4.6-4.6-4.6z m16.3 0h-5.8v3.9h5.7c0.4 0 0.6 0.3 0.6 0.7s-0.3 0.6-0.6 0.6h-5.7v4.8c0 0.4-0.3 0.7-0.8 0.7-0.4 0-0.7-0.3-0.7-0.7v-10.2c0-0.6 0.5-1.1 1.1-1.1h6.2c0.4 0 0.6 0.3 0.6 0.7 0.1 0.3-0.2 0.6-0.6 0.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(pdf_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  