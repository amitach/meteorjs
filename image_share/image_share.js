if (Meteor.isClient) {
 var img_data = [
   {
    img_src: 'amit.JPG',
    img_alt: 'Me scuba diving :-)'
   },
   {
     img_src: 'bro.jpg',
     img_alt: 'Rahul and Laxman'
   },
   {
     img_src: 'random.jpg',
     img_alt: 'Rahul\'s random click'
   },
   {
     img_src: 'random1.jpg',
     img_alt: 'Rahul\'s random click 1'
   }
 ];
  Template.images.helpers({images: img_data});


  Template.images.events({
    'click .js-image': function(event){
        $(event.target).transition({ opacity: 0 });
        $(event.target).transition({ opacity: 100 });
    }
  });
}

if (Meteor.isServer) {
  console.log("I am the server");
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
