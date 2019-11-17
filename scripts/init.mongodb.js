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
      }
]);

db.getCollection('refuges').insertMany([
  {
    "name": "Refuge de Nancy",
    "address": {
      "street": "rue Jean du Moulin",
      "postalCode": NumberInt(54000),
      "city": "Nancy"
    },
    "phone": "+33145653290",
    "email": "refuge.nancy@fictive.com"
  },
  {
    "name": "Refuge de Longwy",
    "address": {
      "street": "rue Alfred Merzieres",
      "postalCode": NumberInt(54400),
      "city": "Longwy"
    },
    "phone": "+33123453290",
    "email": "refuge.longwy@fictive.com"
  }
]);

db.getCollection('people').find({});
