<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const signUp = async (event) => {
    console.log("signing up");
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    dispatch("signup", data);
  };
</script>

<form on:submit|preventDefault={signUp} class="d-flex justify-content-center">
  <div class="form-group" style="width: 25%">
    <label for="first_name" class="mt-2">First name:</label>
    <input type="text" class="form-control mt-1" name="first_name" required />

    <label for="last_name" class="mt-2">Last name:</label>
    <input type="text" class="form-control mt-1" name="last_name" required />

    <label for="email" class="mt-2">Email:</label>
    <input type="email" class="form-control mt-1" name="email" required />

    <label for="password" class="mt-2">Password:</label>
    <input type="password" class="form-control mt-1" name="password" required />

    <button type="submit" class="btn btn-primary mt-3">Sign up</button>
  </div>
</form>
