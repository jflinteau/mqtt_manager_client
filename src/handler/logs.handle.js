import Card from '../models/card.model';
import Logs from '../models/log.model';


function handleNewLogs ( cardId, parameter, value) {
    Card.find({"cardId": cardId}).then((card) => {
       if(card.length > 1) Promise.reject("Too many cards");
       new Promise((resolve, reject) => {
           if(card[0].pieces == undefined) reject('No pieces');
           card[0].pieces.forEach(piece => {
               piece.parameters.forEach(param => {
                   if(param.name === parameter) param.value = Number(value);
               });
           });
           resolve(card[0]);
       }).then( card => new Logs({ card: card, cardId: card.cardId}).save())
           .catch(err => {
               throw new Error(err)
           });
    })
    .catch(err => {
        console.error(err);
    });
}

export {
    handleNewLogs
}
