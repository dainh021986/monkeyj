import { Component, OnInit } from '@angular/core';

import { FileUploader } from 'ng2-file-upload';
import { MathService } from '../services/math.service';


@Component({
    selector: 'app-math',
    templateUrl: '../views/math.component.html',
    styleUrls: ['../views/math.component.css'],
})
export class MathComponent implements OnInit {
    title = 'math';
    jsonFormSchema: string;
    public uploader: FileUploader = new FileUploader( { url: 'http://localhost:3001/upload'} );
    constructor(private mathService: MathService) { }

    ngOnInit() {
        this.mathService.loadJsonSchema();
        this.jsonFormSchema = this.mathService.jsonFormSchema;
    }

}
