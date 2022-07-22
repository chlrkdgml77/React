import React, { Fragment, useState } from 'react'
import style from "./Test.module.css"
import Modal from './Modal';

const Test = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (name && age) {
      const users = {id: Math.random(), name, age}
      setUsers((user) => {
        return [...user, users]
      });
      setName("");
      setAge("");
    }
    else if (!name || !age) {
    }
  }

  const nameHandler = (event) => {
    setName(event.target.value);
  }
  const ageHandler = (event) => {
    setAge(event.target.value);
  }

  return (
    <Fragment>
      <form onSubmit={submitHandler} className={style.form}>
        <div className={style["input-container"]}>
          <label htmlFor='username'>Username</label>
          <input type="text" className={style.input} id="username" name="user-name" value={name} onChange={nameHandler}></input>
        </div>
        <div className={style["input-container"]}>
          <label htmlFor='userage'>Age</label>
          <input type="number" className={style.input} id="userage" name="user-age" value={age} onChange={ageHandler}></input>
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