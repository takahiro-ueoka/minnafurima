// Lists -- {name: String}
Lists = new Meteor.Collection("lists");
// Publish complete set of lists to all clients.
Meteor.publish('lists', function () {
  return Lists.find();
});

// Items -- {id: Number
//			name: String,
//			isForSale: Boolean
//			category: String
//			description: String
//			clientName: String
//			clientAddress: String
//			price: Number
//			registrationDate: DateTime
//			removalDate: DateTime
//			isActive: Boolean
Items = new Meteor.Collection("items");

// Items -- {id: Number
//			itemId: Number,
//			Candidate dateTimeList: String (list of DateTimes)
//			appointmentDate: DateTime
//			clientName: String
//			clientAddress: String
Appointments = new Meteor.Collection("appointments");

// Publish all items for requested id.
Meteor.publish('items', function (id) {
  check(id, Number);
  return products.find({id: id});
});

// Publish all appointments for requested id.
Meteor.publish('appointments', function (id) {
  check(id, Number);
  return products.find({id: id});
});


