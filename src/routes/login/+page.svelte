<script>
  import { signInWithEmailAndPassword } from "firebase/auth";
  import Signin from "../../lib/auth/signin.svelte";
  import { auth } from "../../firebase";
  import { goto } from "$app/navigation";



  const login = async (data) => {
    const user_info = data.detail;

    signInWithEmailAndPassword(auth, user_info.email, user_info.password)
      .then((userCredential) => {
        const user = userCredential.user;

        goto("/account");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
</script>

<div class="container hey">
  <Signin on:signin={login} />
</div>

<style>
  .hey {
    margin-top: 10vh;
    transform: translateY(-10%);
  }
</style>
