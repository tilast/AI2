function Point(x, y) {
  var _x = x,
      _y = y;

  return {
    getX: function() {
      return _x;
    },
    getY: function() {
      return _y;
    }
  };
};

City.id = 0;

function City(name, coords) {
  var _name   = name,
      _coords = coords,
      _id     = City.id++;

  return {
    getName: function() {
      return _name;
    },
    getCoords: function() {
      return _coords;
    },
    getId: function() {
      return _id;
    }
  };
}

function main() {
  var point = new Point(10, 2);
  var cityList = [new City('Kyiv', point), new City('Lviv', point)];
}

window.addEventListener('load', main);
