import {uniq} from 'lodash';
import insane from 'insane';
import {apiKey as key,
  url,
  sayHi,
  old,
  dog} from "./config";

const ages = [1,21,2,4,5,3,1,2,4,5,3];
console.log(uniq(ages));
console.log(key,old,dog);
console.log(url);
sayHi('ahmed');