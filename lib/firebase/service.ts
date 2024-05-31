import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

interface User {
  id: string;
  email: string;
  password: string;
  fullname: string;
  role: string;
}

export async function signUp(
  userData: {
    email: string;
    password: string;
    fullname: string;
    role?: string;
  },
  callback: Function
) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );

  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as User[];
  
  if (data.length > 0) {
    callback({ status: false, message: "Email already exists!" });
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = "member";
    await addDoc(collection(firestore, "users"), userData)
      .then(() => {
        callback({ status: true, message: "Register Success!" });
      })
      .catch((error) => {
        callback({ status: false, message: "Register Failed" });
      });
  }
}

export async function signIn(userData: { email: string }): Promise<User | null> {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as User[];
  
  if (data.length) {
    return data[0];
  } else {
    return null;
  }
}

// This function is for inserting data login with Google in Firebase
export async function signInWithGoogle(userData: any, callback: any) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as User[];
  
  if (data.length > 0) {
    userData.role = data[0].role;
    await updateDoc(doc(firestore, "users", data[0].id), userData)
      .then(() => {
        callback({
          status: true,
          message: "Sign in with Google success",
          data: userData,
        });
      })
      .catch(() => {
        callback({ status: false, message: "Sign in with Google failed" });
      });
  } else {
    userData.role = "member";
    await addDoc(collection(firestore, "users"), userData)
      .then(() => {
        callback({
          status: true,
          message: "Sign in with Google success",
          data: userData,
        });
      })
      .catch(() => {
        callback({ status: false, message: "Sign in with Google failed" });
      });
  }
}
