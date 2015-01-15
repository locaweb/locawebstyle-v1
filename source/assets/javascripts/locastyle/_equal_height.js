Locastyle.prototype.equalHeight = (function() {
  'use strict';

  function init(){
    setEqualHeight();
  }

  function setEqualHeight() {
    var maxHeight = 0;

    $('[data-equal-height] > *').each(function() {
      maxHeight = Math.max(maxHeight, $(this).height());
    }).height(maxHeight);
  }

  return {
    init: init
  };

}());
