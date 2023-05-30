import {searchRandomJokes, generateJoke } from "./componets/homeMpdules/searchDadJokesPPT.js";
import { getRandomRequest, renderJoke, getJoke} from "./componets/homeMpdules/ramdomDadJokePPT.js";
import { print} from "./componets/homeMpdules/printJokejCommerce.js";
import { renderProducts } from "./componets/ecommerceModules/products.js";
import {initUpdateImg} from "./componets/ecommerceModules/visualizer.js";
import { setUpInfo } from "./componets/ecommerceModules/info.js";


searchRandomJokes();
generateJoke();
getJoke();
getRandomRequest()
print();
renderJoke();
renderProducts();
initUpdateImg();
setUpInfo();



