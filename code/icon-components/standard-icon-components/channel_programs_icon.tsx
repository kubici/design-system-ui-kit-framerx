
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function channel_programs_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m49 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30z m23.8 27h-7.9c-0.3-7.1-1.9-13.3-4.3-18 6.6 3.7 11.2 10.3 12.2 18z m-26.8-19.7v19.7h-6.9c0.5-9.4 3.5-16.8 6.9-19.7z m0 25.7v19.7c-3.4-2.9-6.4-10.3-6.9-19.7h6.9z m6 19.7v-19.7h6.9c-0.5 9.4-3.5 16.8-6.9 19.7z m0-25.7v-19.7c3.4 2.9 6.4 10.3 6.9 19.7h-6.9z m-14.6-18c-2.4 4.7-3.9 10.9-4.3 18h-7.9c1-7.7 5.6-14.3 12.2-18z m-12.2 24h7.9c0.3 7.1 1.9 13.3 4.3 18-6.6-3.7-11.2-10.3-12.2-18z m35.4 18c2.4-4.7 3.9-10.9 4.3-18h7.9c-1 7.7-5.6 14.3-12.2 18z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(channel_programs_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
