---
path: "/docs/quick-start"
title: "Quick start"
id: 1
---

# Quick start

## Installation

1. Install via npm
    ```bash
    npm install tsnodes
    ```

1. Import library
    ```javascript
    import TSNodes from 'tsnodes';
    ```

1. Add styling
    ```javascript
    import 'tsnodes/lib/styles/default_dark/index.css';
    ```

## Setup

1. Creating editor
    ```javascript
    const editor = new TSNodes.Editor();
    ```

1. Rendering all editor components and adding them to document
    ```javascript
    const view = editor.view.render();
    window.document.querySelector('.editor').appendChild(view);

    const graphs = editor.graphs.render();
    window.document.querySelector('.graphs').appendChild(graphs);

    const nodes = editor.nodes.render();
    window.document.querySelector('.nodes').appendChild(nodes);

    const info = editor.info.render();
    window.document.querySelector('.info').appendChild(info);
    ```

## Creating nodes

1. Creating node type

    ```javascript
    class node1 extends TSNodes.Node {
      constructor() {
        super(editor, 'Node 1');
      }   
    }
    editor.addNode(node1);
    ```

1. Adding inputs and outputs

    ```javascript
    class node1 extends TSNodes.Node {
         constructor() {
           super(editor, 'Node 1');
           this.input('input 1', 'default value');
           this.input('input 2', '', );
           this.addInput(new TSNodes.Input('input 3', '', false));
           this.output('output 1', function1);
           this.addOutput(new TSNodes.Output('output2', function2, false));
         }   
       }
    ```
