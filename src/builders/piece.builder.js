import Piece from '../models/piece.model';
import Parameter from '../models/parameter.model';

export class PieceBuilder {
    constructor(){
        this.parameters = [];
        this.name = "";
    }

    /**
     *
     * @param parameter : { name: "Temperature", value: "100" }
     * @returns {PieceBuilder}
     */
    makeNewParameter(parameter){
        if(parameter.name == undefined || parameter.value == undefined) return this;
        this.parameters.push(new Parameter({
            name: parameter.name,
            value: parameter.value
        }));
        return this;
    }

    makeName(name){
        this.name = name;
        return this;
    }

    build(){
        //this.parameters.forEach((param) => param.save());
        var piece =  new Piece({
            name: this.name,
            parameters: this.parameters
        });
        //piece.save();
        return piece;
    }

}