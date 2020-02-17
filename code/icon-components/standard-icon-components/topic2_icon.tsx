
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function topic2_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m78.2 34.3h-7.9l3.4-13v-0.3c0-0.5-0.4-1-1-1h-6.3c-0.5 0-0.9 0.4-1 0.8l-3.4 13.5h-15.8l3.4-13v-0.3c0-0.5-0.4-1-1-1h-6.3c-0.5 0-0.9 0.4-1 0.8l-3.5 13.4h-8.8c-0.5 0-0.8 0.3-1 0.7l-1.6 6v0.2c0 0.5 0.4 1 1 1h8.3l-3.9 15.2h-8.5c-0.5 0-0.8 0.3-1 0.7l-1.6 6v0.2c0 0.5 0.4 1 1 1h8l-3.4 13.2v0.2c0 0.5 0.4 1 1 1h6.3c0.5 0 0.9-0.3 1-0.8l3.5-13.7h15.7l-3.4 13.2v0.2c0 0.5 0.4 1 1 1h6.3c0.5 0 0.9-0.3 1-0.8l3.5-13.7h8.7c0.5 0 0.9-0.3 1-0.8l1.6-6v-0.2c0-0.5-0.4-1-1-1h-8.2l3.9-15.2h8.4c0.5 0 0.9-0.3 1-0.8l1.6-6v-0.2c0-0.1-0.5-0.5-1-0.5z m-22.2 23.2h-15.8l3.9-15.2h15.7l-3.8 15.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(topic2_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
