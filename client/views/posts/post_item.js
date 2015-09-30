/**
 * Created by aboba on 30.09.15.
 */


Template.postItem.helpers({
   domain: function() {
       var a = document.createElement("a");
       a.href = this.url;
       return a.hostname;
   }
});