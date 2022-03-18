import { InsertEmoticon, Mic} from '@mui/icons-material';
import { AttachFile, SearchOutlined } from '@mui/icons-material';
import MoreVert from '@mui/icons-material/MoreVert';
import {isMobile} from 'react-device-detect';
import { Avatar, IconButton } from '@mui/material';
import {React , useState , useEffect} from 'react';
import { useParams } from 'react-router';
import "./Chat.css";
import db from './firebase';
import firebase from "firebase";
// import { useStateValue } from './StateProvider';
function Chat() {
    const [input , setInput] = useState("");
    const [seed , setSeed] = useState("");
    const [message , setMessage] = useState([]);
    const {roomId} = useParams();
    const [roomName , setRoomName] = useState("");
    const [user , setUser] = useState();

        useEffect((e) => {
           try{
            if (roomId != '/') {
                db.collection("Rooms").doc(roomId).onSnapshot(
                    snapshot => (setRoomName(snapshot.data().name))
                    )


                    db.collection('Rooms').doc(roomId).collection("message").orderBy("timestamp","asc").onSnapshot(snapshot => {
                        setMessage(snapshot.docs.map(doc => doc.data()))
                    });
                            
            }

            let data = localStorage.getItem('data');
            setUser((JSON.parse(data)).user);
      
        }
            catch (e){
                alert(e.message);
            }
        }   , [roomId])
        
        useEffect(() => {
            setSeed(Math.floor(Math.random() * 500));
        }, [])
    const searchButton = (e) => {};
    const sendMessage = (e) => {
            e.preventDefault();

            db.collection("Rooms").doc(roomId).collection("message").add({
                message: input,
                name: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                profile: user.photoURL,
            })
    
            setInput("");

    };


    return (
        <div className={`chat ${isMobile && "chat_mobile"}`}>
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${roomName}.svg`}/>
                <div className="chat_headerinfo">
                    <h3>{roomName}</h3>
                    <p>Last seen{" "}
                    {new Date(
                        message[message.length -1 ]?.timestamp?.toDate()
                    ).toUTCString()}
                    </p>
                </div>
                <div className="chat_header_right">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton >
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                {message.map((message) => (
                    <p className={`chat_message ${message.name == user.displayName && "chat_reciver"}`}>
                    <span className="chat_name">
                        <span className="chat_name_profile">
                            <Avatar sx={{height: 24 , width:24}} src={message.profile}/>                            
                        </span>
                    {message.name}
                    </span>
                    {message.message} 
                    <span className="time_stamp">
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                    </span>
                    </p>
                    
                ))}
                
            </div>
            <div className="chat_fotter">
                    <IconButton onClick=''>
                        <InsertEmoticon />
                    </IconButton>
                <form>
                    <input value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text" placeholder="Enter a message" />
                    <button type="submit" onClick={sendMessage} >
                        Send A Message</button>
                </form>
                <IconButton >
                    <Mic />
                </IconButton>
            </div>
        </div>
        )
}

export default Chat;
