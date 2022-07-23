import React, { Fragment, useState, useRef } from 'react'
import style from "./Test.module.css"
import Modal from './Modal';

const Test = () => {

  const nameInput = useRef();
  const ageInput = useRef();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "경고: 입력칸이 비었습니다",
        message: "이름과 나이를 입력해주세요"
      });
      return;
    }
    if (parseInt(age) < 1) {
      setError({
        title: "경고: 음수",
        message: "나이는 1 이상이어야 합니다"
      });
      return;
    }
    if (name && age) {
      const users = {id: Math.random(), name, age}
      setUsers((user) => {
        return [...user, users]
      });
      setName("");
      setAge("");
    }
  }

  const nameHandler = (event) => {
    setName(event.target.value);
  }
  const ageHandler = (event) => {
    setAge(event.target.value);
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Fragment>
      {error && <Modal title={error.title} message={error.message} onConfirm={errorHandler}></Modal>}
      <form onSubmit={submitHandler} className={style.form}>
        <div className={style["input-container"]}>
          <label htmlFor='username'>Username</label>
          <input type="text" className={style.input} id="username" name="user-name" value={name} onChange={nameHandler} ref={nameInput}></input>
        </div>
        <div className={style["input-container"]}>
          <label htmlFor='userage'>Age</label>
          <input type="number" className={style.input} id="userage" name="user-age" value={age} onChange={ageHandler} ref={ageInput}></input>
        </div>
        <button className={style.btn}>Add User</button>
      </form>
      {
        users.map((user) => {
          return (
            <div className={style.userList} key={user.id}>
              <h4>{user.name}</h4>
              <p>{user.age}</p>
            </div>
          )
        })
      }
    </Fragment>
  )
}

export default Test