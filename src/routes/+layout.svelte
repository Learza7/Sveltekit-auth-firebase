<script>
  import { onAuthStateChanged } from "firebase/auth";
  import { onMount } from "svelte";

  import { auth } from "../firebase";

  import { store } from "../lib/auth/store";
  import Navigation from "../lib/auth/Navigation.svelte";
</script>

<Navigation />
<slot />

<style>
  .title {
    text-decoration: none;
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: larger;
    font-weight: bold;
  }

  slot {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .btn {
    position: absolute;
    right: 2rem;
  }
</style>
