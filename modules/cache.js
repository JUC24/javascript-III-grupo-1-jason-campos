import {categoryRequest} from "./api.js" ;

const cacheObject = {};

const handlerCache = {
  get: function(target, category) {
    if (!(category in target)) {
      target[category] = categoryRequest(category);
    }
    return target[category];
  }
};

const cacheProxy = new Proxy(cacheObject,handlerCache);

export default cacheProxy;