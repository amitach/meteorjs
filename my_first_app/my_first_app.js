if (Meteor.isClient) {
  var time_data = {
    current_time: new Date()
  };
  Template.time_template.helpers(time_data);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
