Locastyle.prototype.duplicateForm = (function() {
  'use strict';

  function init() {
    multiplyForm();
    verifyFormNumbers();
    addValueToDataForm();
    removeForm();
  }

  var config = {
    selectors: {
      form: '[data-form]',
      parent: '[data-form-parent]'
    },
    classes: {
      hide: 'dNone'
    },
    actions: {
      duplicate: '[data-duplicate-form]',
      remove: '[data-remove-form]'
    }
  };

  function multiplyForm() {
    $(config.actions.duplicate).on('click', function(el) {
      el.preventDefault();
      var cloneLast = $(config.selectors.form).last().clone();
      cloneLast.appendTo(config.selectors.parent);

      addValueToDataForm();
      verifyFormNumbers();
      removeForm();
    });
  }

  function cleanLastRow() {
    $(config.selectors.form).last().find('input, select, textarea').val('');
  }

  function addValueToDataForm() {
    $(config.selectors.form).each(function(i, el) {
      $(el).attr('data-form', i);
    });
  }

  function verifyFormNumbers() {
    if ($(config.selectors.form).length > 1) {
      $(config.actions.remove).removeClass(config.classes.hide);
    } else {
      $(config.actions.remove).addClass(config.classes.hide);
    }
  }

  function removeForm() {
    $(config.actions.remove).on('click', function(el) {
      el.preventDefault();
      if($(config.selectors.form).length > 1) {
        $(this).parents().eq(1).remove();
      }
      verifyFormNumbers();
    });
  }

  return {
    init: init
  };

}());
