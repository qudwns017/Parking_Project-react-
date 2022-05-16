import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import LoginM from "../Login/LoginM";
import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        navigate("/");
      } else {
        alert("로그온 상태가 아닙니다.");
      }
    });
  };

  return (
    <div className="Login">
      {/* 로그인 모달창 */}
      {openModal && (
        <div
          id="LoginM"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <LoginM closeModal={setOpenModal} />
        </div>
      )}
      <div className={styles.RLogin}>
        <a
          className={styles.openModalBtn1}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          로그인
        </a>

        <Link to="/register">
          <a className={styles.openModalBtn2}>회원가입</a>
        </Link>
        <a className={styles.openModalBtn3} onClick={onClickHandler}>
          로그아웃
        </a>
      </div>
    </div>
  );
}

export default Login;
