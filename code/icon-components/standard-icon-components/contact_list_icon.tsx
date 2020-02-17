
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function contact_list_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m26.3 22.7c-4.5 0-8.2 3.5-8.2 7.8v44.3c0 4.3 3.7 7.8 8.2 7.8h43.6c4.5 0 8.2-3.5 8.2-7.8v-44.3c0-4.3-3.7-7.8-8.2-7.8h-43.6z m10.9 18.2c0 1.4-1.2 2.6-2.7 2.6h-2.7c-1.5 0-2.7-1.2-2.7-2.6v-2.6c0-1.4 1.2-2.6 2.7-2.6h2.7c1.5 0 2.7 1.2 2.7 2.6v2.6z m30 0c0 1.4-1.2 2.6-2.7 2.6h-19.1c-1.5 0-2.7-1.2-2.7-2.6v-2.6c0-1.4 1.2-2.6 2.7-2.6h19.1c1.5 0 2.7 1.2 2.7 2.6v2.6z m-30 13.1c0 1.4-1.2 2.6-2.7 2.6h-2.7c-1.5 0-2.7-1.2-2.7-2.6v-2.6c0-1.4 1.2-2.6 2.7-2.6h2.7c1.5 0 2.7 1.2 2.7 2.6v2.6z m25 0c0 1.4-1.2 2.6-2.7 2.6h-14.1c-1.5 0-2.7-1.2-2.7-2.6v-2.6c0-1.4 1.2-2.6 2.7-2.6h14.1c1.5 0 2.7 1.2 2.7 2.6v2.6z m-25 13c0 1.4-1.2 2.6-2.7 2.6h-2.7c-1.5 0-2.7-1.2-2.7-2.6v-2.6c0-1.4 1.2-2.6 2.7-2.6h2.7c1.5 0 2.7 1.2 2.7 2.6v2.6z m30 0c0 1.4-1.2 2.6-2.7 2.6h-19.1c-1.5 0-2.7-1.2-2.7-2.6v-2.6c0-1.4 1.2-2.6 2.7-2.6h19.1c1.5 0 2.7 1.2 2.7 2.6v2.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(contact_list_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
