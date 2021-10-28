import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile(props) {
  const login = useSelector((state) => state.login);
  return <h1>{login}</h1>;
}
