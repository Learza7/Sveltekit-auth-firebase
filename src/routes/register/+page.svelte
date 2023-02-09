<script>
    import { createUserWithEmailAndPassword } from "firebase/auth";
    import Signup from "../../lib/auth/signup.svelte";
    import { auth, database } from "../../firebase";
    import { goto } from "$app/navigation";
  
  import {ref, set } from "firebase/database";

  
  const register = async (data) => {
      
      const user_info = data.detail;
  
      createUserWithEmailAndPassword(
          auth,
          user_info.email,
          user_info.password

      ).then(
          userCredential => {
              const user = userCredential.user;
            
              set(ref(database, 'users/' + user.uid), {
                  first_name: user_info.first_name,
                  last_name: user_info.last_name,
                  email: user_info.email,
              })
              goto('/account')
          }
      ).catch(
          error => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage)
          }
      )
  }

</script>


  


<div class="container hey">
<Signup on:signup={register}/>
</div>

<style>
    .hey{
      margin-top: 10vh;
      transform: translateY(-10%);
    }
</style>