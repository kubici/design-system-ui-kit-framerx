
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function success_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m26 2c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z m13.4 18l-15.3 15.5c-0.6 0.6-1.6 0.6-2.2 0l-8.4-8.5c-0.6-0.6-0.6-1.6 0-2.2l2.2-2.2c0.6-0.6 1.6-0.6 2.2 0l4.4 4.5c0.4 0.4 1.1 0.4 1.5 0l11.2-11.6c0.6-0.6 1.6-0.6 2.2 0l2.2 2.2c0.7 0.6 0.7 1.6 0 2.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(success_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
