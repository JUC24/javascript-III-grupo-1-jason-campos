import { setUpJokeBox } from "../modules/home/randomBoxFuntion.js";
import { setUpRenders } from "../modules/ecommerce/rendering.js";
import {renderProducts} from "../modules/ecommerce/varietyProducts.js"
import {setUpchanges, defaultImage} from "../modules/ecommerce/defaultProduct.js";
import {setUpinfo, defaultInfo} from "../modules/ecommerce/info.js";
import {setUpColors} from "../modules/ecommerce/changeColor.js";
import {setUpjokes} from "../modules/ecommerce/jokeChanges.js";
import {setUpCart} from "../modules/ecommerce/shopingCart.js";

setUpJokeBox();
setUpRenders();
renderProducts();
setUpinfo();
setUpchanges();
setUpColors();
setUpjokes();
defaultImage();
setUpCart();
defaultInfo();
