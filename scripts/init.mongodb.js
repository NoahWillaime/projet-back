db.getCollection('refuges').insertMany([
  {
    "name": "Refuge de Nancy",
    "address": {
      "street": "rue Jean du Moulin",
      "postalCode": NumberInt(54000),
      "city": "Nancy"
    },
    "phone": "+33145653290",
    "email": "refuge.nancy@fictive.com",
    "userFirstname": "Pierre",
    "userLastname": "Henry",
  },
  {
    "name": "Refuge de Longwy",
    "address": {
      "street": "rue Alfred Merzieres",
      "postalCode": NumberInt(54400),
      "city": "Longwy"
    },
    "phone": "+33123453290",
    "email": "refuge.longwy@fictive.com",
    "userFirstname": "Jean",
    "userLastname": "Pierre",
  }
]);

db.getCollection('benevoles').insertMany([
  {
    "username": "niceuser",
    "password": "nicepassword",
    "firstname": "Pierre",
    "lastname": "Henry",
  },
  {
    "username": "longwyuser",
    "password": "longwypassword",
    "firstname": "Jean",
    "lastname": "Pierre",
  },
]);

db.getCollection('animals').insertMany([
  {
    "name": "Myke",
    "photo": "https://randomuser.me/portraits/women/59.jpg",
    "species": "Dog",
    "breed": "idk",
    "gender": "Male",
    "diet": "Meat and letuce",
    "health": "Good Health",
    "description": "a bit loud",
    "enterDate": ISODate("2018-01-01T23:00:00.000Z"),
    "refugeName": "Refuge de Nancy"
  },
  {
    "name": "Catty",
    "photo": "https://randomuser.me/portraits/women/59.jpg",
    "species": "Cat",
    "breed": "Persian",
    "gender": "Male",
    "diet": "Mise",
    "health": "Not so good Health",
    "description": "Very calm",
    "enterDate": ISODate("2008-01-01T23:00:00.000Z"),
    "refugeName": "Refuge de Nancy"
  },
  {
    "name": "jack",
    "photo": "https://randomuser.me/portraits/women/59.jpg",
    "species": "Sparrow",
    "breed": "pirate",
    "gender": "Female",
    "diet": "salted tears",
    "health": "Probably dead now",
    "description": "IDK",
    "enterDate": ISODate("1974-01-01T23:00:00.000Z"),
    "refugeName": "Refuge de Longwy"
  }
]);

var data = db.getCollection('animals').find({}).map(function(element) {
  return { _id: element._id, refugeName: element.refugeName, name: element.name };
});
data.forEach(function(element) {
  var refuges = db.getCollection('refuges').find({"name": element.refugeName}).map(function(elt) {
    return { _id: elt._id, name: elt.name, animalsIds: elt.animalsIds };
  });
  if (!!refuges) {
    db.getCollection('animals').updateOne({_id: element._id}, { $set: { refugeId: refuges[0]._id } });
  }
});

var user = db.getCollection('benevoles').find({}).map(function(element) {
  return { _id: element._id, firstname: element.firstname, lastname: element.lastname };
});
user.forEach(function(element) {
  var refuges = db.getCollection('refuges').find({"userFirstname": element.firstname, "userLastname": element.lastname}).map(function(elt) {
    return { _id: elt._id, name: elt.name };
  });
  if (!!refuges) {
    db.getCollection('refuges').updateOne({_id: refuges[0]._id}, { $set: { userId: element._id } });
  }
});
