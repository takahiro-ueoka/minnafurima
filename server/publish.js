// Lists -- {name: String}
Lists = new Meteor.Collection("lists");

// Publish complete set of lists to all clients.
Meteor.publish('lists', function () {
  return Lists.find();
});


// products -- {text: String,
//           done: Boolean,
//           tags: [String, ...],
//           list_id: String,
//           timestamp: Number}
products = new Meteor.Collection("products");

// Publish all items for requested list_id.
Meteor.publish('products', function (list_id) {
  check(list_id, String);
  return products.find({list_id: list_id});
});

