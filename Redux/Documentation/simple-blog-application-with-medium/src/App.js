import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBlogs } from './features/counter/blogSlice';
import { selectUser } from './features/counter/userSlice';
import './App.css';

function App() {

  const [userId, setUserId] = useState("");
  const dispatch = useDispatch;
  const blogs = useSelector(selectBlogs.length);
  const user = useSelector(selectUser);
  console.log(blogs);

  const onSubmit = () => {
    dispatch(userId);
  };

  return (
    <>
      <input onChange={(e) => setUserId(e.target.value)} value={userId} />
      <button onClick={onSubmit} />
      <div>User data: {JSON.stringify(user)}</div>
      {blogs.map((blog) => (
        <div key={blog.id}>{blog.name}</div>
      ))}
    </>
  );
}

export default App;