const toString = {}.toString;
function isType(type) {
  return function(obj) {
    return toString.call(obj) === '[object ' + type + ']';
  }
}

export const isFunction = isType('CallbackFunction') || isType('Function');