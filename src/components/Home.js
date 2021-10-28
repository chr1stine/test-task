import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const Home = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.loggedIn);
  const history = useHistory();
  const [enabled, setEnabled] = useState(false);

  const loginRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    if (loggedIn) {
      history.push('/profile');
    }
  }, [loggedIn]);

  async function inputChangeHandler() {
    if (loginRef.current.value === '' && passwordRef.current.value === '') {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }

  async function handleClick() {
    dispatch({
      type: 'sign in',
      payload: {
        login: loginRef.current.value,
        password: passwordRef.current.value
      }
    });
  }

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      логин: <input ref={loginRef} onChange={inputChangeHandler} type="text" />
      пароль: <input ref={passwordRef} onChange={inputChangeHandler} type="text" />
      <button onClick={handleClick} disabled={!enabled}>
        войти
      </button>
    </div>
  );
};

export default Home;
