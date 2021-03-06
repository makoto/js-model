Model.Utils = {
  extend: function(receiver) {
    var objs = Array.prototype.slice.call(arguments, 1)

    for (var i = 0, length = objs.length; i < length; i++) {
      for (var property in objs[i]) {
        receiver[property] = objs[i][property]
      }
    }

    return receiver
  },

  inArray: function(array, obj) {
    if (array.indexOf) return array.indexOf(obj)

    for (var i = 0, length = array.length; i < length; i++) {
      if (array[i] === obj) return i
    }

    return -1
  },

  isFunction: function(obj) {
    return Object.prototype.toString.call(obj) === "[object Function]"
  }
}
