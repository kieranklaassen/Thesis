'use strict';

(function () {
  var Toon;

  Toon = function () {
    function Toon() {
      this.toon1 = 0;
      this.toon2 = 0;
      this.middentoon = 0;
    }

    Toon.prototype.spiegel = function () {
      return verschil() * -1 + this.middentoon;
    };

    Toon.prototype.midden = function () {
      return this.middentoon - verschil() / 2;
    };

    Toon.prototype.spiegelMidden = function () {
      return this.middentoon + verschil() / 2;
    };

    Toon.prototype.verschil = function () {
      return this.toon1 - this.middentoon;
    };

    return Toon;
  }();
}).call(undefined);
