/**
 * Created by hnybom on 25.2.15.
 */

Meteor.subscribe('messages');

Template.body.helpers({
    messages: function () {
        return Messages.find();
    }
});

Template.body.events({
   "submit .sayWhatForm" : function (event) {
       event.preventDefault();
       var text = event.target.saywhat.value;
       Meteor.call("insertMessage", text);

       event.target.saywhat.value = "";
   }
});

Template.body.rendered = function () {
    this.find('.wrapper')._uihooks = {
        insertElement: function (node, next) {
            $('#teemuTop').animate({ top: '-=10px' }, 100);
            $('#teemuTop').animate({ top: '+=10px' }, 100);
            $(node).hide().insertBefore(next).fadeIn();
        }
    }
};