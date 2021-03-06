import React, { useState, useEffect } from 'react'
import "./Feed.css"
import { CalendarViewDay, Create, Image, EventNote, Subscriptions } from '@material-ui/icons'
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id, data: doc.data()
            })));
        });
    }, [posts]);
    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user?.displayName, description: user?.email, message: input, photoUrl: user?.photoURL || "", timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <Create />
                    <form>
                        <input type="text" placeholder="Write a post" value={input} onChange={(e) => setInput(e.target.value)} />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOption">
                    <InputOption Icon={Image} title="Photo" color="#7805f9" />
                    <InputOption Icon={Subscriptions} title="Videos" color="#e7a33e" />
                    <InputOption Icon={EventNote} title="Event" color="#c0c0cd" />
                    <InputOption Icon={CalendarViewDay} title="Write Article" color="#7fc15e" />
                </div>
            </div>
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post name={name} description={description} message={message} photoUrl={photoUrl} key={id} />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
