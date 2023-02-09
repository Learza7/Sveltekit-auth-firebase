import cookie from "cookie";
import { browser } from "$app/environment";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
    FacebookAuthProvider,
} from "firebase/auth";
import { writable } from "svelte/store";
import { auth, database } from "../firebase/client";
import { goto } from "$app/navigation";
import { ref, set } from "firebase/database";

export const user = writable(null);

export async function signOut() {

  auth
    .signOut()
    .then(() => {
        console.log("Signed out goto")
        goto("/")})
    .catch((error) => console.log(error));
}

export async function signInWithEmail(user_info) {
  signInWithEmailAndPassword(auth, user_info.email, user_info.password)
    .then(() => {
    console.log("Signed in goto")
      goto("/account");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });

  //   await signInWithRedirect(auth, new GoogleAuthProvider());
}

export async function signInWithGoogle() {
    signInWithPopup(auth, new GoogleAuthProvider()).then(
        () => {
            console.log("Signed in google")
            goto("/account")
        })
        .catch(
            error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })
}

export async function signInWithFacebook() {
    signInWithPopup(auth, new FacebookAuthProvider()).then(
        () => {
            console.log("Signed in facebook")
            goto("/account")
        })
        .catch(
            error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })
}

export async function signUpWithEmail(user_info) {
    createUserWithEmailAndPassword(
        auth,
        user_info.email,
        user_info.password

    ).then(
        userCredential => {
            const user_created = userCredential.user;
          
            set(ref(database, 'users/' + user_created.uid), {
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



if (browser) {
  auth.onIdTokenChanged(async (newUser) => {
    const tokenCurrentlySet =
      cookie.parse(document.cookie)["token"] !== undefined;
    const token = newUser ? await newUser?.getIdToken() : undefined;
    document.cookie = cookie.serialize("token", token ?? "", {
      path: "/",
      maxAge: token ? undefined : 0,
    });
    user.set(newUser);

    if (!tokenCurrentlySet && token) {
    //   document.location.reload();

    }
  });

  setInterval(async () => {
    if (auth.currentUser) {
      await auth.currentUser.getIdToken(true);
    }
  }, 10 * 60 * 1000);
}
