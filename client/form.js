/**
 * Created by henriny on 28/02/15.
 */
Template.form.events({
    "submit .sayWhatForm" : function (event) {
        event.preventDefault();
        var text = event.target.saywhat.value;
        Meteor.call("insertMessage", text);

        event.target.saywhat.value = "";
    }
});