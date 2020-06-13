
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function brand_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m79.4 39.1c-2.9-11.9-15.4-19.1-29.2-19.1-16.7 0-30.2 13.4-30.2 30s13.5 30 30.3 30c23.2 0 21.4-11.8 14-16.4-4.4-2.8-6.8-9.1-2.4-13.6 8.1-8.4 21.2 5 17.5-10.9z m-45.7 20.9c-3.5 0-6.3-2.8-6.3-6.2s2.8-6.2 6.3-6.2 6.2 2.8 6.2 6.2-2.7 6.2-6.2 6.2z m1.3-23.8c0-3.5 2.8-6.2 6.2-6.2 3.5 0 6.2 2.8 6.2 6.2s-2.8 6.2-6.2 6.2c-3.5 0.1-6.2-2.6-6.2-6.2z m13.7 36.3c-3.5 0-6.2-2.8-6.2-6.2s2.8-6.2 6.2-6.2c3.5 0 6.2 2.8 6.2 6.2s-2.7 6.2-6.2 6.2z m11.3-32.5c-3.5 0-6.2-2.8-6.2-6.2s2.8-6.2 6.2-6.2c3.5 0 6.2 2.8 6.2 6.2s-2.7 6.2-6.2 6.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(brand_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  