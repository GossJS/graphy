import {MdSnackBar} from "@angular/material";
import {AlgorithmRunner} from "./algorithm-runner";
import {Injectable} from "@angular/core";
import {GraphService} from "../graph.service";
import CollectionElements = Cy.CollectionElements;

@Injectable()
export class BfsAlgorithmRunner implements AlgorithmRunner {

  constructor(private graphService: GraphService, private snackBar: MdSnackBar) {
  }

  run(): Promise<CollectionElements> {
    this.snackBar.open('Select starting node');
    let cy = this.graphService.getCy();
    return cy.promiseOn('tap', 'node')
      .then((event) => {
        this.snackBar.dismiss();
        let bfs = cy.elements().bfs({roots: event.target, directed: false});
        return Promise.resolve(bfs.path);
      });
  }
}
