
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function error_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m26 2c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.8-24-24-24z m-18 24c0-9.9 8.1-18 18-18 3.9 0 7.5 1.2 10.4 3.3l-25.1 25.1c-2.1-2.9-3.3-6.5-3.3-10.4z m18 18c-3.9 0-7.5-1.2-10.4-3.3l25.1-25.1c2.1 2.9 3.3 6.5 3.3 10.4 0 9.9-8.1 18-18 18z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(error_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
