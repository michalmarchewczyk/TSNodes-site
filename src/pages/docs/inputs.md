---
path: "/docs/inputs"
title: "Adding inputs"
id: 5
---

# Adding inputs


## Adding inputs in class constructor
To create inputs, create new instances of `TSNodes.Input` class:
```javascript
new TSNodes.Input(name, defaultValue, elementField, socket);
```
name - input name  
defaultValue - input default value  
elementField - input field visibility  
socket - input socket visibility

You can add inputs to node type in class constructor using `this.addInput`:
```javascript
this.addInput(new TSNodes.Input(name, defaultValue, elementField, socket));
```

You can also use `this.input` method to add inputs:
```javascript
this.input(name, defaultValue, elementField, socket);
```

Example:
```javascript
class node1 extends TSNodes.Node {
  constructor() {
    super(editor, 'Node 1');
    this.input('input 1', 'default value');
    this.input('input 2', '');
    this.addInput(new TSNodes.Input('input 3', '', false));
  }   
}
```
