
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function catalog_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m61.8 29.4l8.9 8.9c2 1.9 2 5.1 0 7l-23.2 23.1v-31.8l7.2-7.2c1.9-2 5.2-2 7.1 0z m18.2 33.1v12.5c0 2.8-2.2 5-5 5h-31.2l22.5-22.5h8.7c2.8 0 5 2.3 5 5z m-60 6.3v-43.8c0-2.8 2.2-5 5-5h12.5c2.8 0 5 2.2 5 5v43.8c0 6.2-5 11.2-11.2 11.2s-11.3-5-11.3-11.2z m11.2 5c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.3 5 5 5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(catalog_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  