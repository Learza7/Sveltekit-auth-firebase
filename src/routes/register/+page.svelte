<script>
  import Signup from "../../lib/auth/signup.svelte";

  import { signUpWithEmail } from "../../lib/auth/store";

  const register = async (data) => {
    const user_info = data.detail;
    signUpWithEmail(user_info);
  };
</script>

<div class="container hey">
  <Signup on:signup={register} />
</div>

<style>
  .hey {
    margin-top: 10vh;
    transform: translateY(-10%);
  }
</style>
