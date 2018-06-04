import { Parameter } from "../src/models/parameter.model";
var data = require('../src/default/data/Parameters.json');
var seeder = require('mongoose-seeder');

class Seeder{
    constructor(){ }

    async seedParameters(){
        data.parameter.forEach((p) => {
            var param = new Parameter(p);
            param.save((err) => {
                if(err) console.error(err);
            });
        });
    }
}

var instance = new Seeder();
export default instance
