/**
 * Created by hnybom on 25.2.15.
 */
Messages = new Mongo.Collection('Messages');

Meteor.methods({
    insertMessage: function(msg) {

        var message = {};

        _.extend(message, {
            message: msg
        });

        Messages.insert(message);
    }
})