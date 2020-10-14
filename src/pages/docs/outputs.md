---
path: "/docs/outputs"
title: "Adding outputs"
id: 6
---

# Adding outputs

## Adding outputs in class constructor
To create outputs, create new instances of `TSNodes.Output` class:
```javascript
new TSNodes.Output(name, fn, visible);
```
name - output name  
fn - output function  
visible - output visibility

You can add outputs to node type in class constructor using `this.addOutput`:
```javascript
this.addOutput(new TSNodes.Output(name, fn, visible));
```

You can also use `this.output` method to add outputs:
```javascript
this.output(name, fn, visible);
```

Example:
```javascript
class node1 extends TSNodes.Node {
  constructor() {
    super(editor, 'Node 1');
    this.output('output 1', function1);
    this.addOutput(new TSNodes.Output('output2', function2, false));
  }   
}
```
