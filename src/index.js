import _ from 'lodash';
import eruda from 'eruda';

eruda.init();

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
