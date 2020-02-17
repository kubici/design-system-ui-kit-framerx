
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function skill_entity_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m77.3 55.7l-7.3-10.8v-0.9c0-13.2-10.8-24-24-24-1.9 0-3.8 0.2-5.7 0.7-10.6 2.4-18.3 12.2-18.3 23.3 0 4.9 1.2 9.3 3.6 12.7 4.2 6 7 10.8 5.3 17.3-0.4 1.5-0.1 3 0.9 4.2 0.9 1.2 2.2 1.8 3.7 1.8h19.7c2.3 0 4.3-1.6 4.7-3.8 0.1-0.4 0.2-0.8 0.2-1.2 0.2-1.2 1.2-2 2.4-2h1.4c2.2 0 4.1-1.3 4.7-3.4 0.6-2.3 1.4-5.6 1.5-9.6h5.2c0.9 0 1.8-0.8 2.2-1.6 0.4-0.8 0.3-2.1-0.2-2.7z m-15.9-13.7c-0.8 1.3-2.4 2-4.7 2-12.3 0-13.2 9-13.2 13.3 0 2-1.6 3.7-3.6 3.7h-0.3c-1.7 0-3.1-1.2-3.5-2.9-0.4-1.8-1.6-2.8-2.8-3.7-0.8-0.6-1.6-1.2-2-2.1-1.1-2.3-2.2-5-2.2-8.4 0-7.8 5.4-14.6 12.7-16.3 1.4-0.3 2.7-0.5 4.1-0.5 6.8 0 12.9 4.1 15.5 10.3 0.1 0.3 1.2 2.7 0 4.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(skill_entity_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
