var signUpurl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCFkD75bivQJgeFXH9VydGOvPPlT3ZJ8f0';

function signUp() {
      var userObject = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
      };

      fetch(signUpurl, {
        method: "POST",
        body: JSON.stringify(userObject),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
         location.href = "success.html";
        })
        .catch(function (err) {
          console.log(err);
         location.href = "error.html";
        });
    }

    function submitContactForm(event) {
      event.preventDefault();
      console.log("insidecontactform");
          var name = document.querySelector("#Name").value;
          var email = document.querySelector("#email").value;
          var find = document.querySelector("#find-us").value;
          var message = document.getElementsByTagName("textarea")[0].value;

          var contactObj = {
            name: name,
            email: email,
            find: find,
            message: message,
          };

          firebase.database()
            .ref("/contacts/" + email)
            .set(contactObj)
            .then((response) => {
              console.log(response);
               location.href = "success.html";
            })
            .catch((err) => {
              console.log(err);
               location.href = "error.html";
            });
        }
