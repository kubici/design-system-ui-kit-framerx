
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function folder_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m51.5 15.5a4.5 4.5 0 0 1 4.5 4.5v31a4.5 4.5 0 0 1-4.5 4.5h-47a4.5 4.5 0 0 1-4.5-4.5v-38a4.5 4.5 0 0 1 4.5-4.5h11.5c3.8 0 4.2 1.2 6.7 4.5 2.1 2.7 7.2 2.5 10.4 2.5z" fill="#003462"/>
	<path d="m51.5 18.1h-42.3a4.5 4.5 0 0 0-4.5 4.5v2.9l4.5-6.5h42.3l4.5 6.5v-2.9a4.5 4.5 0 0 0-4.5-4.5z" fill="#87c8f2"/>
	<path d="m4.6 55.5h46.9a4.5 4.5 0 0 0 4.5-4.5v-27.5a4.5 4.5 0 0 0-4.5-4.5h-42.2a4.5 4.5 0 0 0-4.6 4.5v27.5a4.7 4.7 0 0 1 0 0.7 2.3 2.3 0 0 1-4.6 0 4.5 4.5 0 0 0 4.5 3.8z" fill="#00a1e0"/>
</svg>
  );
};

addPropertyControls(folder_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
