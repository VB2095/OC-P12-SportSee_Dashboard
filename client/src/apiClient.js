const axios = require("axios");

// Requêter un utilisateur avec un ID donné.
axios
  .get("http://localhost:3000/user/18")
  .then(function (response) {
    // en cas de réussite de la requête
    console.log(response);
  })
  .catch(function (error) {
    // en cas d’échec de la requête
    console.log(error);
  })
  .finally(function () {
    // dans tous les cas
  });
