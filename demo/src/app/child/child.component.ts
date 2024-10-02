import { Component } from "@angular/core";

@Component({
    selector: 'app-child',
    template: `
        <h2>{{ title }} Component</h2>
    `,
    //templateUrl: './child.component.html',
    standalone: true
})
export class ChildComponent {
    title: string = 'Child';
}