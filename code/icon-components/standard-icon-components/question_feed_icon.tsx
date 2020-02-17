
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function question_feed_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50 22c-16.6 0-30 12.5-30 28 0 5 1.4 9.6 3.8 13.7 0.3 0.5 0.4 1.1 0.2 1.6l-2.8 8.9c-0.5 1.6 1 3 2.6 2.5l8.8-3.1c0.6-0.2 1.2-0.1 1.7 0.2 4.6 2.7 10 4.2 15.8 4.2 16.6 0 30-12.5 30-28-0.1-15.5-13.5-28-30.1-28z m3 45c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v2z m0.8-12.7c-0.4 0.1-0.8 0.5-0.8 1v1.6c0 1.1-0.9 2.1-2 2.1h-2c-1.1 0-2-1-2-2.1v-1.6c0-3 2-5.7 4.9-6.7 1.1-0.4 2.1-0.9 2.7-1.8 3.4-4.5 0-9.7-4.5-9.8-1.6-0.1-3.2 0.6-4.4 1.7-0.8 0.8-1.4 1.8-1.6 2.8-0.2 0.9-1 1.6-1.9 1.6h-2.1c-1.2 0-2.2-1.2-2-2.4 0.5-2.4 1.6-4.6 3.4-6.3 2.3-2.3 5.4-3.5 8.7-3.4 6.3 0.2 11.5 5.4 11.7 11.7 0.2 5.2-3 9.9-8.1 11.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(question_feed_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
