import {MdSnackBar} from "@angular/material";
import {AlgorithmRunner} from "./algorithm-runner";
import {Injectable} from "@angular/core";
import CollectionElements = Cy.CollectionElements;
import {GraphService} from "../graph.service";

@Injectable()
export class DfsAlgorithmRunner extends AlgorithmRunner {

  constructor(graphService: GraphService, private snackBar: MdSnackBar) {
    super(graphService);
  }

  run(): Promise<CollectionElements> {
    this.snackBar.open('Select starting node');
    let cy = this.graphService.getCy();
    return cy.promiseOn('tap', 'node')
      .then((event) => {
        this.snackBar.dismiss();
        let dfs = cy.elements().dfs({roots: event.target, directed: false});
        return Promise.resolve(dfs.path);
      });
  }

  name(): string {
    return 'dfs';
  }
}
