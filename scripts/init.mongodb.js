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
    "firstname": "Pierre",
    "lastname": "Henry",
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
    "firstname": "Jean",
    "lastname": "Pierre",
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
    "photo": "https://www.pets4homes.co.uk/images/classifieds/2018/12/05/2149499/large/beautiful-kc-registered-golden-lab-for-sale-5c082ec2b5b7b.jpg",
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
    "photo": "https://www.thisiscolossal.com/wp-content/uploads/2019/08/cat-hat-8.jpg",
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
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeux5ZErmaNVpISV1_Uz0b_-OMMADLRC9q-Sg8SWu6OTDynZ_u",
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
    return { _id: elt._id, name: elt.name };
  });
  if (!!refuges) {
    db.getCollection('animals').updateOne({_id: element._id}, { $set: { refugeId: refuges[0]._id } });
  }
});

var user = db.getCollection('benevoles').find({}).map(function(element) {
  return { _id: element._id, firstname: element.firstname, lastname: element.lastname };
});
user.forEach(function(element) {
  var refuges = db.getCollection('refuges').find({"firstname": element.firstname, "lastname": element.lastname}).map(function(elt) {
    return { _id: elt._id, name: elt.name };
  });
  if (!!refuges) {
    db.getCollection('refuges').updateOne({_id: refuges[0]._id}, { $set: { userId: element._id, firstname: element.firstname, lastname: element.lastname } });
  }
});

