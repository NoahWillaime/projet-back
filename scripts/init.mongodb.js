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
  },
  {
    "name": "Refuge de Montpellier",
    "address": {
      "street": "rue Leclerc",
      "postalCode": NumberInt(34000),
      "city": "Montpellier"
    },
    "phone": "+33123453290",
    "email": "refuge.montpellier@fictive.com",
    "firstname": "Alexandre",
    "lastname": "Labbe",
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
  {
    "username": "alexuser",
    "password": "alexpassword",
    "firstname": "Alexandre",
    "lastname": "Labbe",
  },
]);

db.getCollection('animals').insertMany([
  {
    "name": "Myke",
    "photo": "https://www.pets4homes.co.uk/images/classifieds/2018/12/05/2149499/large/beautiful-kc-registered-golden-lab-for-sale-5c082ec2b5b7b.jpg",
    "species": "Chien",
    "breed": "non connue",
    "gender": "Male",
    "diet": "Croquettes et poissons",
    "health": "En bonne santé",
    "description": "Très calme et docile",
    "enterDate": ISODate("2018-01-01T23:00:00.000Z"),
    "refugeName": "Refuge de Nancy"
  },
  {
    "name": "Coco",
    "photo": "http://www.parc-auxois.fr/wp-content/uploads/2019/06/perruche-calopsitte.jpg",
    "species": "Oiseau",
    "breed": "Perruche",
    "gender": "Female",
    "diet": "Graine",
    "health": "Bonne santé",
    "description": "Très belle crête",
    "enterDate": ISODate("2018-10-01T23:00:00.000Z"),
    "refugeName": "Refuge de Nancy"
  },

  {
    "name": "Double",
    "photo": "https://www.maxitendance.com/wp-content/uploads/2017/11/quimera-chat-chimere-instagram-3.jpg",
    "species": "Chat",
    "breed": "Sauvage",
    "gender": "Male",
    "diet": "Souris et oiseaux",
    "health": "Petit souffle au coeur",
    "description": "Essaye de vous nourir avec des souris",
    "enterDate": ISODate("2018-10-01T23:00:00.000Z"),
    "refugeName": "Refuge de Nancy"
  },
  {
    "name": "Catty",
    "photo": "https://www.thisiscolossal.com/wp-content/uploads/2019/08/cat-hat-8.jpg",
    "species": "Chat",
    "breed": "Persian",
    "gender": "Female",
    "diet": "Croquettes et souris",
    "health": "Ok",
    "description": "Peut être assez bruyante",
    "enterDate": ISODate("2019-10-01T23:00:00.000Z"),
    "refugeName": "Refuge de Longwy"
  },
  {
    "name": "Diamond",
    "photo": "http://www.peakpx.com/wallpaper/958/397/150/purple-yellow-and-red-bird-on-brown-tree-branch-wallpaper.jpg",
    "species": "Oiseau",
    "breed": "Diamand de Gould",
    "gender": "Male",
    "diet": "Graines",
    "health": "Ok",
    "description": "Peut vous reveiller le matin",
    "enterDate": ISODate("2019-10-01T23:00:00.000Z"),
    "refugeName": "Refuge de Longwy"
  },
  {
    "name": "King",
    "photo": "https://cdn.shopify.com/s/files/1/0014/5870/0353/products/product-image-596986373_1080x1080_crop_center.progressive.jpg?v=1538058059",
    "species": "Chat",
    "breed": "Sauvage",
    "gender": "Male",
    "diet": "Croquettes",
    "health": "Ok",
    "description": "Vous prend de haut",
    "enterDate": ISODate("2019-10-01T23:00:00.000Z"),
    "refugeName": "Refuge de Montpellier"
  },
  {
    "name": "Nala",
    "photo": "http://www.ict-historic.eu/wp-content/uploads/2018/11/accueil-shot-chat-male-croise-siamois-seal-point-poil-mi-long-6-2.jpg__350x350_q85_crop-2.jpg",
    "species": "Chat",
    "breed": "Sauvage",
    "gender": "Femal",
    "diet": "Croquettes",
    "health": "Ok",
    "description": "Vous prend de haut",
    "enterDate": ISODate("2017-09-01T23:00:00.000Z"),
    "refugeName": "Refuge de Montpellier"
  },
  {
    "name": "Spicy",
    "photo": "https://www.animar.fr/wp-content/uploads/2019/04/categorie-chien.jpg",
    "species": "Chien",
    "breed": "Inconnnu",
    "gender": "Male",
    "diet": "Croquettes",
    "health": "Ok",
    "description": "Adore sortir",
    "enterDate": ISODate("2017-09-01T23:00:00.000Z"),
    "refugeName": "Refuge de Montpellier"
  },
  {
    "name": "Jack",
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeux5ZErmaNVpISV1_Uz0b_-OMMADLRC9q-Sg8SWu6OTDynZ_u",
    "species": "Oiseau",
    "breed": "Ara",
    "gender": "Female",
    "diet": "Un peu de tout",
    "health": "Assez vieux",
    "description": "Tiens en longévité",
    "enterDate": ISODate("1974-01-01T23:00:00.000Z"),
    "refugeName": "Refuge de Montpellier"
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

