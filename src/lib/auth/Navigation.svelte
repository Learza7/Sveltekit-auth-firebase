<script>
  import { user, signOut } from "./store";
</script>

<header class="bg-light">
  <nav class="container mx-auto">
    <div class="w-full d-flex justify-content-center align-items-center">
      <div class="w-1/2 d-flex justify-content-center align-items-center">
        <a href="/" class="display-1 text-black text-decoration-none">Odace</a>

        {#if $user}
          <div class="position-absolute" style="right: 2rem">
            <a href="/account" class="btn btn-primary text-2xl pt-2 mx-2"
              >Espace Client</a
            >
            <button
              on:click|preventDefault={signOut}
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
