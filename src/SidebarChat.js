import { Avatar, IconButton } from '@mui/material'
import {React , useEffect , useState} from 'react';
import db from './firebase';
import "./SidebarChat.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

function SidebarChat({id, name,  addNewChat }) {
    const [seed , setSeed] = useState("");
    const [messages, setMessages] = useState("");

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if (roomName) {
            db.collection("Rooms").add({
                name: roomName,
            });
        }
    };


    useEffect(() => {
        if(id){
            db.collection('Rooms').doc(id).collection('message').orderBy('timestamp','desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            })
        }
    }, [id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 500));
    }, [])


    return !addNewChat ? (
        <Link to={`/rooms/${id}`} key={id} className="link">
            <div className="SidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${name}.svg`}/>
                <div className="sidebar_info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
                <Link to="/" replace>
                    <IconButton onClick= {()=> db.collection("Rooms").doc(id).delete() && Set}>
                        <DeleteIcon  className="delete"/>
                    </IconButton>
                </Link>
            </div>
        </Link>
        
    ) : (
      <div onClick={createChat} className="SidebarChat">
          <h2>Create New Chat</h2>
      </div>  
    );
}

export default SidebarChat
