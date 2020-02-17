
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function rating_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m28.9 43v5c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-5c0-0.6 0.5-0.9 1-0.8 0 0 1 0.3 2 0.3s2.1-0.3 2.1-0.3c0.6-0.1 1 0.3 0.9 0.8z m-17.9-32.2v-6.8c0-1.1-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2v6.8c-1.8 1-3 3-3 5.2 0 3.3 2.7 6 6 6s6-2.7 6-6c0-2.2-1.2-4.2-3-5.2z m-1 15.4s-1.1 0.3-2.1 0.3-2-0.3-2-0.3c-0.5-0.1-1 0.2-1 0.8v21c0 1.1 0.9 2 2 2h2c1.1 0 2-0.9 2-2v-21c0.1-0.6-0.3-0.9-0.9-0.8z m36 4s-1.1 0.3-2.1 0.3-2-0.3-2-0.3c-0.5-0.1-1 0.2-1 0.8v17c0 1.1 0.9 2 2 2h2c1.1 0 2-0.9 2-2v-17c0.1-0.5-0.3-0.9-0.9-0.8z m1-15.4v-10.8c0-1.1-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2v10.8c-1.8 1-3 3-3 5.2 0 3.3 2.7 6 6 6s6-2.7 6-6c0-2.2-1.2-4.2-3-5.2z m-18 12v-22.8c0-1.1-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2v22.8c-1.8 1-3 3-3 5.2 0 3.3 2.7 6 6 6s6-2.7 6-6c0-2.2-1.2-4.2-3-5.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(rating_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
