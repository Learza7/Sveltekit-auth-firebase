<script>
  import { store } from "./store";
  import { GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
  import { onMount } from "svelte";
  import { auth } from "../../firebase";
  import { goto } from "$app/navigation";

  onMount(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        $store = { user };
      } else {
        $store = {};
      }
    });
  });

  const logout = async () => {
    auth
      .signOut()
      .then(() => {
        $store = {};
        goto("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
</script>

<header class="bg-light">
  <nav class="container mx-auto">
    <div class="w-full d-flex justify-content-center align-items-center">
      <div class="w-1/2 d-flex justify-content-center align-items-center">
        <a href="/" class="display-1 text-black text-decoration-none">Odace</a>

        {#if $store.user}
          <div class="position-absolute" style="right: 2rem">
            <a href="/account" class="btn btn-primary text-2xl pt-2 mx-2"
              >Espace Client</a
            >
            <button
              on:click|preventDefault={logout}
              class="btn btn-outline-dark text-2xl pt-2">Sign out</button
            >
          </div>
        {:else}
          <div class="position-absolute" style="right: 2rem">
            <a
              href="/login"
              class="btn btn-primary text-2xl pt-2"
              style="right: 2rem">Sign in</a
            >
            <a href="/register" class="btn btn-outline-dark text-2xl pt-2 mx-2"
              >Sign up</a
            >
          </div>
        {/if}
      </div>
    </div>
  </nav>
</header>
