/**
 * Created by henriny on 28/02/15.
 */
Meteor.subscribe('messages');

Template.king.helpers({
    messages: function () {
        return Messages.find();
    }
});

Template.king.rendered = function () {
    this.find('.wrapper')._uihooks = {
        insertElement: function (node, next) {

            animate = function(i){
                $('#teemuTop').animate({ top: '-=10px' }, 100);
                $('#teemuTop').animate({ top: '+=10px' }, 100);
                if(i > 0)
                    setTimeout(animate(i - 1), 1);
            };

            animate(5);

            $(node).hide().insertBefore(next).fadeIn();
        }
    }
};