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