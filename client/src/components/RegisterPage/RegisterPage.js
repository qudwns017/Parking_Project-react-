import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../_actions/user_action";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./RegisterPage.module.css";

function RegisterPage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [HandPhone, setHandPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onHandPhoneHandler = (event) => {
    setHandPhone(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
      handphone: HandPhone,
    };
    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        navigate("/");
      } else {
        alert("Failed to sign up");
      }
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles.Box}>
        <div className={styles.Box2}>
          <div className={styles.SignUpForm}>
            <h1>회원가입</h1>
            <div className={styles.info} >
            <div className={styles.infoN}>이메일</div>
              <input
                type="email"
                className={styles.input}
                value={Email}
                onChange={onEmailHandler}
              />
            </div>

            <div className={styles.info}>
            <div className={styles.infoN}>이름</div>
              <input
                type="text"
                className={styles.input}
                value={Name}
                onChange={onNameHandler}
              />
            </div>

            <div className={styles.info}>
              <div className={styles.infoN}>비밀번호</div>
              <input
                type="password"
                className={styles.input}
                value={Password}
                onChange={onPasswordHandler}
              />
            </div>

            <div className={styles.info}>
            <div className={styles.infoN}>비밀번호 확인</div>
              <input
                type="password"
                className={styles.input}
                value={ConfirmPassword}
                onChange={onConfirmPasswordHandler}
              />
            </div>

            <div className={styles.info}>
            <div className={styles.infoN}>전화번호</div>
              <input
                type="text"
                className={styles.input}
                value={HandPhone}
                onChange={onHandPhoneHandler}
              />
            </div>

            <div className={styles.info2}>
              <button type="submit">가입하기</button>
              <a href="/">홈으로</a>
            </div>
          </div>
        </div>
        {/* <div className={styles.SignUpForm}>
        <div style={
        styles.title}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                    <div className={styles.info}>이메일
                        <input type='email' className={styles.input}  value={Email} onChange={onEmailHandler} />
                        </div>

                    <div className={styles.info}>이름
                        <input type='text' className={styles.input}  value={Name} onChange={onNameHandler} />
                        </div>

                    <div className={styles.info}>비밀번호
                        <input type='password' className={styles.input}  value={Password} onChange={onPasswordHandler} />
                        </div>

                    <div className={styles.info}>비밀번호 확인
                        <input type='password' className={styles.input}  value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                        </div>

                    <div className={styles.info}>전화번호
                        <input type='text' className={styles.input}  value={HandPhone} onChange={onHandPhoneHandler} />
                        </div> */}
        <div className={styles.empty}></div>
      </div>
    </form>
  );
}

export default RegisterPage;
