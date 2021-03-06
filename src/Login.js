import React, { useState } from 'react'
import { auth } from './firebase'
import "./Login.css"
import { useDispatch } from 'react-redux';
import { login } from './features/counter/userSlice';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const dispatch = useDispatch();
    const register = () => {
        if (name.length === 0) {
            return alert("Please enter your full name");
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => (
                userAuth.user.updateProfile({
                    displayName: name, photoURL: photoURL,
                }).then(() => {
                    dispatch(login({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: name,
                        photoURL: photoURL,
                    }));
                })
            ))
            .catch(err => {
                alert(err.message);
            })
    }
    const loginUser = (e) => {
        e.perventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                console.log(userAuth);
                // dispatch(login({
                //     email: userAuth.user.email,
                //     uid: userAuth.user.uid,
                //     displayName: userAuth.user.displayName,
                //     photoURL: userAuth.user.photoURL,
                // }))
            })
            .catch(err => {
                alert(err.message);
            })
        setEmail("")
        setPassword("");
        setName("");
        setPhotoURL("");
    }
    return (
        <div className="login">
            <img src="" alt="" />
            <form>
                <input type="text" placeholder="Full name (Required if registered)" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Profile picture URL (Optional)" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={loginUser}>Sign in</button>
            </form>
            <p>Not a member?
                <spam onClick={register} className="login__register">Register Now</spam>
            </p>
        </div>
    )
}

export default Login
