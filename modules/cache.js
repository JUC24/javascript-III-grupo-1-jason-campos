import {categoryRequest} from "./api.js" ;

const cacheObject = {};

const handler = {
  get: function(target, category) {
    if (!(category in target)) {
      target[category] = categoryRequest(category);
    }
    return target[category];
  }
};

const cacheProxy = new Proxy(cacheObject,handler);

export default cacheProxy;