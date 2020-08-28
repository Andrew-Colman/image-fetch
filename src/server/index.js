/* eslint-disable no-unused-vars */
import React from 'react';
import low from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage';
import { nanoid } from 'nanoid';

const axios = require('axios');

const BB_KEY = process.env.REACT_APP_BB_KEY;
const adapter = new LocalStorage('db');
// eslint-disable-next-line import/prefer-default-export
export const db = low(adapter);
// db definition: id: uniq id, img: img src, size: x y

db.defaults({ posts: [] }).write();

// Data is automatically saved to localStorage
// eslint-disable-next-line no-unused-vars
export const saveImage = ({ data }) => {
  db.get('posts')
    .push({ id: data.id, title: `${data.image.url}`, size: 10 })
    .write();
};

export const cacheImage = async (url) => {
  const params = new URLSearchParams();
  params.append('image', url);
  try {
    const result = await axios({
      method: 'post',
      url: `https://api.imgbb.com/1/upload?key=${BB_KEY}`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params,
    });
    console.log(result.data);
    saveImage(result.data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteImage = ({ data }) => {
  db.get('posts')
    .push({ id: data.id, title: `${data.image.url}`, size: 10 })
    .write();
};

export const state = db.getState();
