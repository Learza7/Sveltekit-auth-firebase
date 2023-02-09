<script>
  import { database } from "../../lib/firebase/client";
  import { ref, child, get } from "firebase/database";


  let displayName = "";
  let email = "";

  // get(child(ref(database), "users/" + user.uid))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       displayName =
  //         snapshot.val().first_name + " " + snapshot.val().last_name;
  //       email = snapshot.val().email;
  //     } else {
  //       console.log("No data available");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  // faire avec des props
</script>

<h2>
  Bienvenue dans votre espace client {displayName} !
</h2>
<p>{email}</p>
