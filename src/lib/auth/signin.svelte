<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const signIn = async (event) => {
    console.log("signing in");
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    dispatch("signin", data);
  };
</script>

<form on:submit|preventDefault={signIn} class="d-flex justify-content-center">
  <div class="form-group" style={{ width: "100%" }}>
    <div class="form-group" style={{ maxWidth: "50%" }}>
      <label for="email" class="mt-2">Email:</label>
      <input
        class="form-control mt-1"
        type="email"
        name="email"
        required
        placeholder="someone@somewhere.com"
      />

      <label for="password" class="mt-2">Password:</label>
      <input
        type="password"
        class="form-control mt-1"
        name="password"
        required
      />

      <button type="submit" class="btn btn-primary mt-3">Sign in</button>
    </div>
  </div>
</form>
