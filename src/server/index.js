import React from 'react';
import low from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage';
import { nanoid } from 'nanoid';

const adapter = new LocalStorage('db');
export const db = low(adapter);
// db definition: id: uniq id, img: img src, size: x y
db.defaults({ posts: [] }).write();

// Data is automatically saved to localStorage
db.get('posts')
  .push({ id: nanoid(10), title: 'lowdb', size: 10 })
  .write();

const state = db.getState();
console.log(state.posts);
export default function index() {
  return (
    <div>
      {state.posts.map((x) => (
        <li key={x.id}>{x.title}</li>
      ))}
    </div>
  );
}
