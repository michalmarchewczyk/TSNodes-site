---
path: "/docs/setup"
title: "Editor setup"
id: 3
---

# Editor setup


## Creating editor

To create new editor use `TSNodes.editor` class:
```javascript
const editor = new TSNodes.editor();
```


## Rendering editor view

To render editor view use method `editor.view.render()` to get HTMLElement and add it to page:
```javascript
const view = editor.view.render();
window.document.querySelector('.view').appendChild(view);
```


## Rendering other editor elements

### Graphs list
To render graphs list use `editor.graphs.render()` to get HTMLElement and add it to page:
```javascript
const graphs = editor.graphs.render();
window.document.querySelector('.graphs').appendChild(graphs);
```

### Nodes list
To render nodes list use `editor.nodes.render()` to get HTMLElement and add it to page:
```javascript
const nodes = editor.nodes.render();
window.document.querySelector('.nodes').appendChild(nodes);
```

### Editor info
To render editor info element use `editor.info.render()` to get HTMLElement and add it to page:
```javascript
const info = editor.info.render();
window.document.querySelector('.info').appendChild(info);
```
