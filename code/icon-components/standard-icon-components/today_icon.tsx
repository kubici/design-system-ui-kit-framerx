
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function today_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30z m0 54c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24z m3-25.2v-12.8c0-1.1-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2v14c0 0.8 0.3 1.6 0.9 2.1l9.6 9.6c0.8 0.8 2 0.8 2.8 0l1.4-1.4c0.8-0.8 0.8-2 0-2.8l-8.7-8.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(today_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
