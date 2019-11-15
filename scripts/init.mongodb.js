db.getCollection('animals').insertMany([
      {
        "name": "Myke",
        "photo": "https://randomuser.me/portraits/women/59.jpg",
        "species": "Dog",
        "breed": "idk",
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
        "diet": "salted tears",
        "health": "Probably dead now",
        "description": "IDK",
        "enterDate": ISODate("1974-01-01T23:00:00.000Z"),
      }
])

db.getCollection('people').find({});
