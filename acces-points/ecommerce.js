import { setUpJokeBox } from "../modules/home/randomBoxFuntion.js";
import { setUpRenders } from "../modules/ecommerce/rendering.js";
import {renderProducts} from "../modules/ecommerce/varietyProducts.js"
import {setUpchanges} from "../modules/ecommerce/defaultProduct.js";
import {setUpinfo} from "../modules/ecommerce/info.js";
import {setUpColors} from "../modules/ecommerce/changeColor.js";
import {setUpjokes} from "../modules/ecommerce/jokeChanges.js";

setUpJokeBox();
setUpRenders();
renderProducts();
setUpinfo();
setUpchanges();
setUpColors();
setUpjokes();
