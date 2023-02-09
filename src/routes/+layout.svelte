<script>

  import Navigation from "../lib/auth/Navigation.svelte";




</script>

<Navigation />
<slot />

<style>
  

  slot {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>
