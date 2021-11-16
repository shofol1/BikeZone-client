import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import firebaseInit from "../firebase/firebase.init";

firebaseInit();
const auth = getAuth();
const useFirbase = () => {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);
  const registerUser = (email, password, history, name) => {
    console.log(name);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        //save user
        saveUser(email, name);
        // ...
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            setError(error.message);
          });
        // history.replace('/')
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const signInWithEmail = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetch(`https://secure-lowlands-55193.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);
  const logingOut = () => {
    signOut(auth)
      .then(() => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const saveUser = (email, displayname) => {
    const user = { email, displayname };
    fetch("https://secure-lowlands-55193.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(user),
    }).then();
  };
  const saveReviews = (comment, rating) => {
    const review = { comment, rating };
    fetch("https://secure-lowlands-55193.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const saveOrder = (name, email, phone, address, orderId) => {
    const userOrder = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      orderId: orderId,
    };
    console.log(userOrder);
    fetch("https://secure-lowlands-55193.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(userOrder),
    })
      .then((res) => res.json)
      .then((data) => console.log(data));
  };
  return {
    saveOrder,
    admin,
    registerUser,
    user,
    signInWithEmail,
    logingOut,
    isLoading,
    setIsLoading,
    error,
    saveReviews,
  };
};
export default useFirbase;
