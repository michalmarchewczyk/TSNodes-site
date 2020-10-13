---
path: "/docs/nodes"
title: "Creating nodes"
id: 4
---

# Creating nodes

## Creating node types by extending class
You can create node types by extending `TSNodes.Node` class.  
In the class constructor use `super()` to call `TSNodes.Node` class constructor.  

In the `super()` call pass two arguments:
- editor to which bound created node type
- node name

After defining class, you must add it to your editor using `editor.addNode()`.
```javascript
class node1 extends TSNodes.Node {
  constructor() {
    super(editor, 'Node 1')
  }
}
editor.addNode(node1);
```
