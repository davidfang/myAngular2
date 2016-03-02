import {Injectable} from 'angular2/core';
export class Crisis {
    constructor(public id:number, public name:string) {}
}
@Injectable()
export class CrisisService {
    getCrises() { return crisesPromise;}
    getCrisis(id:number | string) {
        return crisesPromise.then(crises => crises.filter(c => c.id === +id)[0]);
    }
}
var crises = [
    new Crisis(1,'aaaaaaaaaa'),
    new Crisis(2,'bbbbbbbbbb'),
    new Crisis(3,'cccccccccc'),
    new Crisis(4,'dddddddddd'),
    new Crisis(5,'eeeeeeeeee'),
];
var crisesPromise  = Promise.resolve(crises);