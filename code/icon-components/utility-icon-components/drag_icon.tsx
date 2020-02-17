
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function drag_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m30.9 34.3c0 1.8-2.2 2.5-3.2 1l-2-4.3c-1.1-1.9-3.5-2.3-5.3-1.1l-1.3 1 6.7 15.9c0.3 0.7 1 1.1 1.8 1.1h17.6c0.9 0 1.6-0.6 1.8-1.4l3.1-11.1c0.8-3.1-1-6.1-3.8-7.2l-8-2.7c-11.3-4.1-7.6 8.4-7.4 8.8z m-29.1-5.8h5.8v5.8h-5.8z m12.6-24.5h5.8v5.8h-5.8z m0 38h5.8v5.8h-5.8z m-12.6-26.2h5.8v5.8h-5.8z m0-11.7h5.8v5.8h-5.8z m25.3-0.1h5.8v5.8h-5.8z m12.7 0h5.8v5.8h-5.8z m-38 38.1h5.8v5.8h-5.8z m38-25.3h5.8v5.8h-5.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(drag_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
