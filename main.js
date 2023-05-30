import {searchRandomJokes, generateJoke } from "./componets/searchDadJokesPPT.js";
import { getRandomRequest, renderJoke, getJoke} from "./componets/ramdomDadJokePPT.js";
import { print} from "./componets/printJokejCommerce.js";
import { renderProducts } from "./componets/products.js";
import {initUpdateImg} from "./componets/visualizer.js";


initUpdateImg()
renderProducts()
print();
getRandomRequest()
renderJoke();
getJoke();
searchRandomJokes();
generateJoke();

