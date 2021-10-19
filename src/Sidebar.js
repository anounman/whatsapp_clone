import {React , useState , useEffect} from "react";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Icon, IconButton } from "@mui/material";
import {isMobile} from 'react-device-detect';
import "./sidebar.css";
import SidebarChat from "./SidebarChat";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Sidebar() {

  const  [room , setRooms] = useState([]);
  const [{user} , dispatch] = useStateValue();

  useEffect(() => {
    db.collection('Rooms').onSnapshot(snapshot => (
      setRooms(snapshot.docs.map(doc => 
        ({
          id : doc.id,
          data : doc.data(),
  
        })
        ))
    ))
  }, [])
  


  return (
    <div className={`sidebar ${isMobile && "sidebar_mobile"}`}>
      <div className="sidebar_header">
        <IconButton>
          <Avatar src={user?.photoURL} />
        </IconButton>
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContanier">
        <IconButton>
            <SearchIcon />
        </IconButton>
        <input placeholder="Search or Start New Chat" type="text" >
            </input>
        </div>
      </div>
      <div className="sidebar_chat">
          <SidebarChat addNewChat/>
          {
            room.map(
              room => (
                <SidebarChat key={room.id} id= {room.id}
                name = {room.data.name} />
              )
            )
          }
          
      </div>
    </div>
  );
}

export default Sidebar;
