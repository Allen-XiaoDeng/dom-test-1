window.dom = {
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  style(node, name, value) {
      // dom.style(div, 'color', 'red')
    if (arguments.length === 3) {
      node.style[name] = value;
    } else if (arguments.length === 2) {
      // dom.style(div, 'color')
      if (typeof name === 'string') {
        return node.style[name];
        // dom.style(div, {color: 'red'})
      } else if (name instanceof Object) {
        const object = name;
        for (let key in object) { 
          node.style[key] = object[key];
        }
      }
    }
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
};
