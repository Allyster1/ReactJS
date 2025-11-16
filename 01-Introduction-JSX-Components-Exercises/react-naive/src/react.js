export default {
   createElement(type, props, ...children) {
      return { type, props: props || {}, children };
   },
   render(element, container) {
      // No Reconciliation Phase
      container.innherHTML = "";

      const domSubTree = this._createDomElement(element);

      container.appendChild(domSubTree);
   },
   _createDomElement(node) {
      // Check if text or number
      if (typeof node === "string" || typeof node === "number") {
         return document.createTextNode(node);
      }

      // Check if component
      if (typeof node.type === "function") {
         // const component = node.type;
         const element = node.type({ ...node.props, children: node.children });

         return this._createDomElement(element);
      }

      // If react element
      const domElement = document.createElement(node.type);

      // Attach props
      Object.keys(node.props).forEach((key) => {
         domElement.setAttribute(key, node.props[key]);
      });

      // Create children dom elements recursively
      node.children.forEach((child) => {
         domElement.appendChild(this._createDomElement(child));
      });

      return domElement;
   },
};
