/**
 * Created by hnybom on 25.2.15.
 */
Meteor.publish("messages", function () {
    return Messages.find({}, {sort: {created: -1}, limit: 10});
});