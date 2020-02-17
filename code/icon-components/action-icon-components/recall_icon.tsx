
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function recall_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m18.2 22.6c-0.5-0.6-0.2-1.6 0.5-1.8h9c6.7 0 12.1 5.7 11.5 12.6-0.6 5.9-5.8 10.3-11.8 10.3h-3.4c-0.8 0-1.6 0.7-1.6 1.6v3.1c0 0.8 0.7 1.6 1.6 1.6h3.6c9.7 0 17.5-7.8 17.7-17.4 0.2-9.9-8.2-18-18.1-18.1h-8.3s-2.7 0.1-1-1.8l5.9-5.8c0.6-0.6 0.6-1.6 0-2.2l-2.2-2.2c-0.6-0.6-1.6-0.6-2.2 0l-14 14.1c-0.6 0.6-0.6 1.6 0 2.2l14.1 14.1c0.6 0.6 1.6 0.6 2.2 0l2.2-2.2c0.6-0.6 0.6-1.6 0-2.2l-5.7-5.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(recall_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
