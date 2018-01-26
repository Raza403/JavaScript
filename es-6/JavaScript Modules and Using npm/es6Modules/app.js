import {uniq} from 'lodash';
import insane from 'insane';
import {apiKey as key,
  url,
  sayHi,
  old,
  dog} from "./config";

import User,{creatURL, gravatar, createURL} from './user';

const ahmed = new User('ahmed', 'raza403@gmail.com', 'devbros.tk');
console.log(ahmed);

const link = createURL('ahmed');
console.log(`This is ${link}`);

const image = gravatar(ahmed.email);
console.log(image);