
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function einstein_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m49.9 28.5c-1-2.4-2.1-4.2-3.3-5.6-1.1-1.3-4.3-3.2-6.1-3.9 0.5-0.7 1.5-1.2 3-1.5-0.1-1-1.1-2.1-3-3.3-1.9-1.2-4.5-1.5-7.8-0.8 0-1.2-0.8-3.3-2.5-6.4-2.4-4.7-12.3-6.2-12.2-4 0.9 2.7 1.3 6.2 1.4 10.3-1.2-1.4-2.5-2.3-3.9-2.7-1.1-0.3-2.1-0.4-3.1-0.2-0.1 0-0.2 0.1-0.3 0.1-0.3 0.2-0.3 0.7-0.1 1 0.6 0.8 0.9 1.4 1.1 1.8 0.2 0.6 0.6 1.4 1.1 2.6-1.5-0.2-3.4 0.3-6 1.5-2.4 1.2-4.4 3.9-6.1 8.2v0.2c0 0.4 0.2 0.7 0.5 0.8 2.3 0.4 3.9 0.8 4.8 1.3 1 0.5 2.1 1.6 3.4 3.1-0.5-0.1-1.3 0.4-2.5 1.5-1.1 0.9-1.9 2.3-2.4 4.3v0.2c0 0.4 0.2 0.7 0.6 0.7 1.7 0.1 3.4 0.4 5 0.9 1.8 0.6 3.2 1.2 4.2 1.9v-5.8c0-1.4-0.1-2.5 1.3-4.2 1.4-1.7 2.8-2.1 6.1-0.8s7-1.4 9.9-0.7c3 0.7 4.5 3.7 4.8 5.8 0.3 2.1 0 3.2 0 5.8v0.4h0.1c1.5-0.9 2.3-1.4 3.5-1.9 0.8-0.4 2.1-0.8 3.8-1.4-0.1-1-0.9-1.9-2.5-2.9 0.5-0.2 2.8-1.7 4.1-2.7 0.8-0.6 1.8-1.5 3.1-2.8 0.1-0.1 0.2-0.5 0-0.8z" fill={props.fill} fillRule="evenodd"/>
	<path d="m22.9 42.5c-0.9-0.5-2.3-0.3-3.1 0.1-0.8 0.4-1.8 1.6-1.8 2.7s0.3 1.8 0.5 2.2c0.1 0.3 0.4 0.6 0.8 1.1 0.1 0.2 0.3 0.2 0.5 0.2l1.4-0.3 3 1.4c0.1 0.1 0.3 0.1 0.4 0l3.3-1.4 1.7 0.3c0.1 0 0.3 0 0.4-0.1 0.8-0.5 1.3-1.2 1.6-1.9 0.4-1.2 0-3.1-1-3.9-0.9-0.9-2.3-1.2-3.7-0.6-1.1 0.4-1.9 0.6-2.5 0.6-0.4 0-0.8-0.2-1.5-0.4z" fill={props.fill} fillRule="evenodd"/>
	<ellipse cx="29.3" cy="38.4" fill={props.fill} fillRule="evenodd" rx="1.5" ry="2.2"/>
	<ellipse cx="20.7" cy="38.4" fill={props.fill} fillRule="evenodd" rx="1.5" ry="2.2"/>
</svg>
  );
};

addPropertyControls(einstein_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  