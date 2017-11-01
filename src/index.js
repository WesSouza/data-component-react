import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './components/Navigation';
import MeetupHeader from './components/MeetupHeader';

const componentList = {
  Navigation,
  MeetupHeader,
}

const collection = document.querySelectorAll('[data-component]');
Array.from(collection).forEach(element => {
  const componentName = element.getAttribute('data-component');
  const Component = componentList[componentName];

  const propsElement = element.querySelector('[data-props]');
  let props = {};
  if (propsElement) {
    try {
      props = JSON.parse(propsElement.text);
    } catch (e) {
      console.error(e);
      return;
    }
  }

  if (!Component) {
    console.error(`Missing component ${componentName}`);
    return;
  }

  ReactDOM.render(<Component {...props} />, element);
});
