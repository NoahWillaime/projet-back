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
    "_id" : ObjectId("5dd47597d2c07771668100d5"),
    "name" : "Myke",
    "photo" : "https://www.pets4homes.co.uk/images/classifieds/2018/12/05/2149499/large/beautiful-kc-registered-golden-lab-for-sale-5c082ec2b5b7b.jpg",
    "species" : "Dog",
    "breed" : "Labrador",
    "gender" : "Male",
    "diet" : "Meat and letuce",
    "health" : "Good Health",
    "description" : "a bit loud",
    "enterDate" : ISODate("2018-01-01T23:00:00.000Z"),
    "refugeName" : "Refuge de Nancy",
    "refugeId" : ObjectId("5dd47597d2c07771668100d1")
  },
  {
    "_id" : ObjectId("5dd47597d2c07771668100d6"),
    "name" : "Catty",
    "photo" : "https://www.thisiscolossal.com/wp-content/uploads/2019/08/cat-hat-8.jpg",
    "species" : "Cat",
    "breed" : "Persian",
    "gender" : "Male",
    "diet" : "Mise",
    "health" : "Not so good Health",
    "description" : "Very calm",
    "enterDate" : ISODate("2008-01-01T23:00:00.000Z"),
    "refugeName" : "Refuge de Nancy",
    "refugeId" : ObjectId("5dd47597d2c07771668100d1")
  },
  {
    "_id" : ObjectId("5dd47597d2c07771668100d7"),
    "name" : "jack",
    "photo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeux5ZErmaNVpISV1_Uz0b_-OMMADLRC9q-Sg8SWu6OTDynZ_u",
    "species" : "Bird",
    "breed" : "Ara",
    "gender" : "Female",
    "diet" : "Seed",
    "health" : "Too much",
    "description" : "IDK",
    "enterDate" : ISODate("1974-01-01T23:00:00.000Z"),
    "refugeName" : "Refuge de Longwy",
    "refugeId" : ObjectId("5dd47597d2c07771668100d2")
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
