db.createUser(
  {
    user: "testuser",
    pwd: "testpass",
    roles: [
      {
        role: "readWrite",
        db: "projetdb"
      }
    ]
  }
);

db.createCollection("testcollection");
