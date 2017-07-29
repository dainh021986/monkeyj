import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export  class MathService {
    jsonFormSchema: string;
    constructor(  private route: ActivatedRoute,
                  private router: Router,
                  private http: Http) {}

    loadJsonSchema() {
        return this.http.get('assets/json/schema.json')
            .map( schema => schema.text())
            .subscribe(schema => {
                this.jsonFormSchema = schema;
            });

    }

    onSubmit() {
        return;
    }
}
