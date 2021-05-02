import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import db from '../../firebase';
import './Chat.css';
import ChatInput from './ChatInput/ChatInput';
import Message from './Message/Message';

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  // Get the room's details from DB
  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            {/* Get the room's name. The Q. mark is like Try/Catch => 
            It defaults it to safe value = null
            */}
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="span">An upgraded version will by deployed SOON...</div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>

      <div className="chat__messages">
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
