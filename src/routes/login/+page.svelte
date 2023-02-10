<script>
  import Signin from "../../lib/auth/signin.svelte";
  import {
    signInWithEmail,
    signInWithGoogle,
    signInWithFacebook,
  } from "../../lib/auth/store";

  const login = async (data) => {
    const user_info = data.detail;
    signInWithEmail(user_info);
    console.log("signin in with mail");
  };
</script>

<div class="container d-flex flex-column gap-3 flex-md-row">
  <div class="section section_start">

    <Signin on:signin={login} />
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="d-flex flex-column justify-content-center align-items-center gap-2 section">
    <button on:click|preventDefault={signInWithGoogle} class="btn btn-outline-primary">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
      alt="Google logo"
      class="mr-2"
      style="width: 1.5rem"
    />
    Sign in with Google
  </button>
  <button on:click|preventDefault={signInWithFacebook} class="btn btn-outline-primary">
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg" alt="Facebook logo" class="mr-2" style="width: 1.5rem">
    Sign in with Facebook
  </button>
  

  </div>
  
</div>

<style>

 .container{
    max-width: 700px;
    margin: 5rem auto;
 }

 .section {
    flex: 1;
    padding: 1rem;
  
 }

 .container:before {
  content: "";
  border: 1px solid #ccc;
  align-self: stretch;
 }

  .section_start {
    order: -1;
  }


button {
  /* flex: 0 0 50%; */
  width: fit-content;
}

</style>
