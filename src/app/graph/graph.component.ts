import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import cytoscape from 'cytoscape/dist/cytoscape.js';
import edgehandles from 'cytoscape-edgehandles';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, AfterViewInit {

  @ViewChild('graphContainer') container: ElementRef;

  private editMode: boolean;
  private cy: Cy.Instance;

  setEditMode(value) {
    this.editMode = value;
    this.container.nativeElement.classList.toggle('edit-mode', value);
    if (value) {
      this.cy.on('click', this.addNodeOnClickEvent);
      this.cy.edgehandles('enable');
    } else {
      this.cy.off('click', this.addNodeOnClickEvent);
      this.cy.edgehandles('disable');
    }
  }

  constructor() {
  }

  ngOnInit() {
    edgehandles(cytoscape);
  }

  ngAfterViewInit(): void {
    this.cy = cytoscape({
      container: this.container.nativeElement,
      elements: [
        {data: {id: 'a'}},
        {data: {id: 'b'}},
        {data: {id: 'ab', source: 'a', target: 'b'}}
      ],
      layout: {
        name: 'grid'
      }
    });

    let defaults = {
      handleHitThreshold: 12,
      handleColor: '#3f51b5',
      hoverDelay: 0,
      enabled: false,
      loopAllowed: () => true
    };
    this.cy.edgehandles(defaults);
  }

  private addNodeOnClickEvent = (event) => {
    if (event.target === this.cy) {
      let pos = {
        x: event.originalEvent.offsetX,
        y: event.originalEvent.offsetY
      };
      this.cy.add({
        group: "nodes",
        data: {
          id: '' + this.cy.nodes().length
        },
        renderedPosition: pos
      });
    }
  }

}
