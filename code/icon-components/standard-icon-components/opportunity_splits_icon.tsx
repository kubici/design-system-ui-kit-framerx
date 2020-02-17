
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function opportunity_splits_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<g fill={props.fill}>
		<path d="m69.3 27.1c-5.2-4.4-11.9-7.1-19.3-7.1-16.5 0-30 13.5-30 30 0 7.4 2.7 14.1 7.1 19.3l42.2-42.2z m-35.3 48.2c4.6 2.9 10.1 4.7 16 4.7 16.5 0 30-13.5 30-30 0-5.9-1.7-11.3-4.7-16l-41.3 41.3z"/>
	</g>
</svg>
  );
};

addPropertyControls(opportunity_splits_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
