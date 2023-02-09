<script>
  import Signin from "../../lib/auth/signin.svelte";
  import { signInWithEmail, signInWithGoogle, signInWithFacebook } from "../../lib/auth/store";

  const login = async (data) => {
    const user_info = data.detail;
    signInWithEmail(user_info);
    console.log("signin in with mail");
  };
  
</script>

<div class="container hey">
  <Signin on:signin={login} />
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="google-btn" on:click|preventDefault={signInWithGoogle}>
    <div class="google-icon-wrapper">
      <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Sign in with Google"/>
    </div>
    <p class="btn-text"><b>Sign in with google</b></p>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="google-btn" on:click|preventDefault={signInWithFacebook}>
    <div class="google-icon-wrapper">
      <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Sign in with Google"/>
    </div>
    <p class="btn-text"><b>FACEBOOK</b></p>
  </div>
</div>

<style>

@import url(https://fonts.googleapis.com/css?family=Roboto:500);

  .hey {
    margin-top: 10vh;
    transform: translateY(-10%);
  }
  .google-btn {
  width: 184px;
  height: 42px;
  background-color: blue;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
  }
  .google-icon-wrapper {
    position: absolute;
    margin-top: 1px;
    margin-left: 1px;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    background-color: white;
  }
  .google-icon {
    position: absolute;
    margin-top: 11px;
    margin-left: 11px;
    width: 18px;
    height: 18px;
  }
  .btn-text {
    float: right;
    margin: 11px 11px 0 0;
    color: white;
    font-size: 14px;
    letter-spacing: 0.2px;
    font-family: "Roboto";
  }
  .google-btn:hover {
    box-shadow: 0 0 6px blue;
  }
  .google-btn:active {
    background: green;
  }



</style>
