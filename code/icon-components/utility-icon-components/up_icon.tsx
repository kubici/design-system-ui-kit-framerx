
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function up_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m43.7 38h-35.4c-1 0-1.7-1.3-0.9-2.2l17.3-21.2c0.6-0.8 1.9-0.8 2.5 0l17.5 21.2c0.7 0.9 0.1 2.2-1 2.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(up_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
