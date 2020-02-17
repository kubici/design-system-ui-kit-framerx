
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function salesforce1_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m21.7 11.9c1.7-1.7 4-2.8 6.6-2.8 3.4 0 6.4 1.9 8 4.7 1.4-0.6 2.9-1 4.5-1 6.2 0 11.2 5 11.2 11.2s-5 11.2-11.2 11.2c-0.8 0-1.5-0.1-2.2-0.2-1.4 2.5-4.1 4.2-7.2 4.2-1.3 0-2.5-0.3-3.6-0.8-1.4 3.3-4.7 5.6-8.6 5.6-4 0-7.5-2.5-8.8-6.1-0.6 0.1-1.2 0.2-1.8 0.2-4.8 0-8.7-3.9-8.7-8.7 0-3.2 1.7-6 4.3-7.5-0.5-1.2-0.8-2.6-0.8-4 0-5.5 4.5-10 10.1-10 3.5 0.1 6.4 1.6 8.2 4" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(salesforce1_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  