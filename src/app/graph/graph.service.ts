import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import * as cytoscape from 'cytoscape/dist/cytoscape.js';
import {GraphOptions} from '../common/graph-options';

@Injectable()
export class GraphService {

  private static readonly DEFAULT_OPTIONS: GraphOptions = {
    directed: false,
    showEdgeLabels: false
  };

  private cy: Cy.Instance;
  private options = GraphService.DEFAULT_OPTIONS;
  private editSubject = new Subject<boolean>();
  editObservable = this.editSubject.asObservable();

  constructor() {
  }

  editModeOn() {
    this.editSubject.next(true);
  }

  editModeOff() {
    this.editSubject.next(false);
  }

  initialize(container): Cy.Instance {
    this.cy = cytoscape(this.getConfig(container));
    return this.cy;
  }

  getCy(): Cy.Instance {
    return this.cy;
  }

  private getConfig(container) {
    return {
      container: container,
      elements: [
        {data: {id: 'a', label: 'A'}},
        {data: {id: 'b', label: 'B'}},
        {data: {id: 'c', label: 'C'}},
        {data: {id: 'ab', source: 'a', target: 'b', weight: '1'}},
        {data: {id: 'bc', source: 'b', target: 'c', weight: '1'}},
        {data: {id: 'ac', source: 'a', target: 'c', weight: '100'}}
      ],
      layout: {
        name: 'grid'
      },
      style: [{
        'selector': 'node',
        'style': {
          'content': 'data(label)',
        }
      }, {
        'selector': 'edge',
        'style': {
          'text-margin-y': '-12px',
          'content': 'data(weight)',
          'curve-style': 'bezier'
        }
      }, {
        'selector': 'node.default-color',
        'style': {
          'background-color': '#666666'
        }
      }, {
        'selector': 'node.lighter-color',
        'style': {
          'background-color': '#cccccc'
        }
      }, {
        'selector': 'node.primary-color',
        'style': {
          'background-color': '#3f51b5'
        }
      }, {
        'selector': 'node.secondary-color',
        'style': {
          'background-color': '#579cff'
        }
      }, {
        'selector': 'edge.default-color',
        'style': {
          'line-color': '#aaaaaa',
          'target-arrow-color': '#aaaaaa'
        }
      }, {
        'selector': 'edge.lighter-color',
        'style': {
          'line-color': '#dddddd',
          'target-arrow-color': '#dddddd'
        }
      }, {
        'selector': 'edge.primary-color',
        'style': {
          'line-color': '#7285ee',
          'target-arrow-color': '#7285ee'
        }
      }, {
        'selector': 'edge.secondary-color',
        'style': {
          'line-color': '#bbd7ff',
          'target-arrow-color': '#bbd7ff'
        }
      }, {
        'selector': '.hover',
        'style': {
          'background-color': '#4580e5',
          'line-color': '#4580e5',
          'target-arrow-color': '#4580e5'
        }
      }, {
        'selector': 'edge.directed',
        'style': {
          'target-arrow-shape': 'triangle'
        }
      }, {
        'selector': 'edge.labelled',
        'style': {
          'content': 'data(label)',
        }
      }, {
        'selector': '.highlighted',
        'style': {
          'background-color': '#61bffc',
          'line-color': '#61bffc',
          'target-arrow-color': '#61bffc',
          'transition-property': 'background-color, line-color, target-arrow-color',
          'transition-duration': '0.5s'
        }
      }, {
        selector: '.edgehandles-hover',
        css: {
          'background-color': '#ff4081'
        }
      }, {
        selector: '.edgehandles-source',
        css: {
          'border-width': 2,
          'border-color': '#ff4081'
        }
      }, {
        selector: '.edgehandles-target',
        css: {
          'border-width': 2,
          'border-color': '#ff4081'
        }
      }, {
        selector: '.edgehandles-preview, .edgehandles-ghost-edge',
        css: {
          'line-color': '#ff4081',
          'target-arrow-color': '#ff4081',
          'source-arrow-color': '#ff4081'
        }
      }
      ],
      wheelSensitivity: 0.2,
      boxSelectionEnabled: true
    };
  }

  setOptions(options: GraphOptions) {
    this.options = options;
  }

  getOptions(): GraphOptions {
    return this.options;
  }

  isDirected() {
    return this.options.directed;
  }
}
