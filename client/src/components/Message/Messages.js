import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Message.module.css';

function Messages() {

  return (
    <>
    <div className="background">
      <div className="image">사진</div>
      <div className="menu">목록</div>
    </div>
    
    </>
  );
}

export default Messages;