import {categoryRequest} from "./api.js" ;

const cacheObject = {};
const handlerCache = {
  get: function(handlerCache, category) {
    if (!(category in handlerCache)) {
      handlerCache[category] = categoryRequest(category);
    }
    return handlerCache[category];
  }
};

const cacheProxy = new Proxy(cacheObject,handlerCache);

export {cacheProxy};