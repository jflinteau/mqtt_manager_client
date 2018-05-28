import { Message } from "../src/models/message.model";
import { Card } from "../src/models/card.model";

test("Add a message to MongoDB", () => {
    var message = new Message({
        content: "This is a test"
    });

    message.save((err, result) => {
        if(err) return handleError(err);

        expect(err).toBe(null);
        expect(result).toBeDefined();
    });
});

test("Add a card to MongoDB", () => {
    var card = new Card();
    card.save((err, result) => {
        expect(err).toBe(null);
        expect(result).toBeDefined();
    })
})

test("Remove test messages from MongoDB", () => {
    Message.deleteMany({content: /This is a test/}, (err) => {
        expect(err).toBe(null);
    });
});
