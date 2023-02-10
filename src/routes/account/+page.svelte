<script>

  import { ref, child, get } from "firebase/database";
  import { firestore } from "../../lib/firebase/client";

  console.log(firestore)
  let displayName = "";
  let email = "";

 
</script>

<h2>
  Bienvenue dans votre espace client {displayName} !
</h2>
<p>{email}</p>
