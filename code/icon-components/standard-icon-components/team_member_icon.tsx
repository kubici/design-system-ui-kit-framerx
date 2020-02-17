
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function team_member_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m57 44h-12c-3.3 0-6 2.7-6 6v9c0 1.1 0.5 2.1 1.2 2.8 0.7 0.7 1.7 1.2 2.8 1.2v9c0 3.3 2.7 6 6 6h4c3.3 0 6-2.7 6-6v-9c1.1 0 2.1-0.4 2.8-1.2 0.7-0.7 1.2-1.7 1.2-2.8v-9c0-3.3-2.7-6-6-6z" fill={props.fill}/>
	<path d="m36.6 66.7c-0.2-0.2-0.5-0.4-0.7-0.6-1.9-2-3-4.5-3-7.1v-9c0-3.2 1.3-6.2 3.4-8.3 0.6-0.6 0.1-1.7-0.7-1.7h-9.6c-3.3 0-6 2.7-6 6v9c0 1.1 0.5 2.1 1.2 2.8 0.7 0.7 1.7 1.2 2.8 1.2v9c0 3.3 2.7 6 6 6h4c0.9 0 1.7-0.2 2.4-0.5 0.4-0.2 0.6-0.5 0.6-0.9v-5.1c0-0.3-0.1-0.6-0.4-0.8z" fill={props.fill}/>
	<path d="m76 40h-9.6c-0.9 0-1.3 1-0.7 1.7 2.1 2.2 3.4 5.1 3.4 8.3v9c0 2.6-1 5.1-3 7.1-0.2 0.2-0.4 0.4-0.7 0.6-0.2 0.2-0.4 0.5-0.4 0.8v5.1c0 0.4 0.2 0.8 0.6 0.9 0.7 0.3 1.5 0.5 2.4 0.5h4c3.3 0 6-2.7 6-6v-9c1.1 0 2.1-0.4 2.8-1.2 0.7-0.7 1.2-1.7 1.2-2.8v-9c0-3.3-2.7-6-6-6z" fill={props.fill}/>
	<circle cx="51" cy="33" fill={props.fill} r="7"/>
	<circle cx="32" cy="29" fill={props.fill} r="7"/>
	<circle cx="70" cy="29" fill={props.fill} r="7"/>
</svg>
  );
};

addPropertyControls(team_member_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
