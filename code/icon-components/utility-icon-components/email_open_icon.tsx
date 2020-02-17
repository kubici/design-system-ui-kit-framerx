
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function email_open_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m45.8 28.1c0-0.8-1-1.3-1.7-0.7l-14.6 13.5c-1 0.9-2.2 1.4-3.6 1.4s-2.6-0.5-3.6-1.3l-14.5-13.6c-0.7-0.6-1.7-0.2-1.7 0.7-0.1-0.2-0.1 18-0.1 18 0 1.8 1.5 3.3 3.3 3.3h33.1c1.8 0 3.3-1.5 3.3-3.3v-18z m-0.2-7.5c0.2-0.2 0.3-0.4 0.3-0.6 0-0.3-0.1-0.5-0.3-0.7l-18.8-17.3c-0.5-0.5-1.2-0.5-1.7 0l-18.6 17.2c-0.1 0.1-0.1 0.2-0.2 0.2v0.1c0 0.1-0.1 0.2-0.1 0.3 0 0.3 0.1 0.5 0.3 0.7l18.5 17.2c0.5 0.5 1.2 0.5 1.7 0l18.9-17.1c0 0.1 0 0 0 0z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(email_open_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
