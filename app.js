"use strict";

var element = document.querySelector('.header__cities');
var choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  renderChoiceLimit: -1,
  choices: [{
    value: 'Москва',
    label: 'Москва',
    selected: true,
    disabled: true
  }, {
    value: 'Казань',
    label: 'Казань',
    selected: false,
    disabled: true
  }, {
    value: 'Уфа',
    label: 'Уфа',
    selected: false,
    disabled: true
  }, {
    value: 'Пермь',
    label: 'Пермь',
    selected: false,
    disabled: true
  }]
});
console.log('1');
var elementCategory = document.querySelector('.boxbotton__category');
var choicesCategory = new Choices(elementCategory, {
  searchEnabled: false,
  shouldSort: false,
  renderChoiceLimit: -1,
  choices: [{
    value: 'Категория',
    label: 'Категория',
    selected: true,
    disabled: true
  }, {
    value: 'Диваны',
    label: 'Диваны',
    selected: false,
    disabled: true
  }, {
    value: 'Кресла',
    label: 'Кресла',
    selected: false,
    disabled: true
  }, {
    value: 'Пуфы',
    label: 'Пуфы',
    selected: false,
    disabled: true
  }, {
    value: 'Кровати',
    label: 'Кровати',
    selected: false,
    disabled: true
  }, {
    value: 'Тумбы',
    label: 'Тумбы',
    selected: false,
    disabled: true
  }, {
    value: 'Комоды',
    label: 'Комоды',
    selected: false,
    disabled: true
  }, {
    value: 'Стулья',
    label: 'Стулья',
    selected: false,
    disabled: true
  }, {
    value: 'Столы',
    label: 'Столы',
    selected: false,
    disabled: true
  }, {
    value: 'Аксессуары',
    label: 'Аксессуары',
    selected: false,
    disabled: true
  }]
});
console.log('2');
document.querySelector('#burger').addEventListener('click', function () {
  document.querySelector('#menu').classList.toggle('is-active');
});
document.querySelector('#close').addEventListener('click', function () {
  document.querySelector('#menu').classList.remove('is-active');
});
console.log('3'); //input 

var inputSearch = document.querySelector(".input-search");
var iconSearch = document.querySelector(".boxBotton__search");

if (inputSearch.value != '') {
  iconSearch.styles.color = '#A65CF0';
}

console.log('4'); // hero__swiper

var swiper = new Swiper('.hero__swiper', {
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoplay: {
    delay: 5000
  }
});
console.log('5'); // offer__swiper

var swiper = new Swiper('.offer__swiper', {
  direction: 'horizontal',
  loop: false,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.offer__click-arrow_next',
    prevEl: '.offer__click-arrow_prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 31
    },
    585: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 30
    },
    1020: {
      slidesPerGroup: 3,
      slidesPerView: 'auto',
      spaceBetween: 31
    }
  }
});
console.log('6'); // useful__swiper

var swiper = new Swiper('.useful-swiper', {
  direction: 'horizontal',
  loop: false,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.useful__click-arrow_prev',
    prevEl: '.useful__click-arrow_next'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 32
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 32
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 32
    },
    1101: {
      slidesPerView: 2,
      spaceBetween: 32
    }
  }
});
console.log('7'); //product__swiper

var product = document.querySelector('.product');

if (product) {
  var swiper = new Swiper('.product', {
    navigation: {
      nextEl: '.product__btn-arrow-next',
      prevEl: '.product__btn-arrow-prev'
    },
    direction: 'horizontal',
    loop: false,
    slideToClickedSlide: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      340: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 32
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 32
      }
    }
  });
}

console.log('8'); //description__swiper

var descriptionList = document.querySelector('.description__box');

if (descriptionList) {
  var myswiper = new Swiper('.description__box', {
    slideToClickedSlide: true,
    // loop: true,
    slidesPerView: 1,
    spaceBetween: 5
  });
  var descriptionSlideNav = document.querySelectorAll('.description__slide-nav');
  descriptionSlideNav.forEach(function (el, index) {
    el.setAttribute('data-index', index);
    el.addEventListener('click', function (e) {
      var index = parseInt(e.currentTarget.dataset.index);
      myswiper.slideTo(index);
    });
  });
}

console.log('9'); //modal

var modal = document.querySelector('.description__slide');

if (modal) {
  var descriptionModal = document.querySelectorAll('.description__btn');

  var _modal = new GraphModal();
}

console.log('10'); //scale__swiper

var modalScaleSwiper = document.querySelector('.modal-scale__swiper');

if (modalScaleSwiper) {
  var _swiper = new Swiper(".modal-scale__swiper", {
    slidesPerView: 4,
    freeMode: true,
    // loop: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.modal-scale__click-arrow_prev',
      prevEl: '.modal-scale__click-arrow_next'
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      600: {
        slidesPerView: 2
      },
      800: {
        slidesPerView: 3
      },
      1100: {
        slidesPerView: 4
      }
    }
  });

  var swiper2 = new Swiper(".modal-scale__swiper2", {
    loop: true,
    thumbs: {
      swiper: _swiper
    }
  });
}

console.log('11'); //validation__modal

var validationModal = document.querySelector('.modal__form');

if (validationModal) {
  new JustValidate('.modal__form', {
    rules: {
      name: {
        required: true,
        minLength: 3,
        maxLength: 30
      },
      tel: {
        required: true,
        minLength: 11,
        phone: 111 - 222 - 3333
      }
    },
    messages: {
      name: 'Недопустимый формат',
      tel: 'Недопустимый формат'
    }
  });
}

console.log('12'); //polzunok 

var rangeSlider = document.querySelector('#rangeSlider');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 200000],
    connect: true,
    step: 1,
    range: {
      'min': [0],
      'max': [200000]
    }
  });
  var input0 = document.querySelector('#rangeInput0');
  var input1 = document.querySelector('#rangeInput1');
  var inputs = [input0, input1];
  var list = document.querySelector('.catalog__box-list');
  rangeSlider.noUiSlider.on('update', function (value, handle) {
    inputs[handle].value = Math.round(value[handle]);
  });

  var setRangeSlider = function setRangeSlider(i, value) {
    var arr = [null, null];
    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach(function (el, index) {
    el.addEventListener('change', function (e) {
      setRangeSlider(index, e.currentTarget.value);

      if (index == 0) {
        if (document.querySelector("[data-number=\"from\"]")) {
          document.querySelector("[data-number=\"from\"]").remove();
        }

        list.insertAdjacentHTML('afterbegin', "<li class=\"catalog__box-item catalog__box-btn_bone\" data-number=\"from\">\u041E\u0442 ".concat(e.currentTarget.value, "\n        <button class=\"catalog__box-btn catalog__btn-from\">\n        <svg class=\"catalog__btn-cross\" width=\"7\" height=\"7\" viewBox=\"0 0 7 7\"><use xlink:href=\"../images/sprite.svg#icon__close\"></use></svg></button></li>"));
      } else if (index == 1) {
        if (document.querySelector("[data-number=\"before\"]")) {
          document.querySelector("[data-number=\"before\"]").remove();
        }

        list.insertAdjacentHTML('afterbegin', "<li class=\"catalog__box-item catalog__box-btn_bone\" data-number=\"before\">\u0414\u043E ".concat(e.currentTarget.value, "\n        <button class=\"catalog__box-btn catalog__btn-before\">\n        <svg class=\"catalog__btn-cross\" width=\"7\" height=\"7\" viewBox=\"0 0 7 7\"><use xlink:href=\"../images/sprite.svg#icon__close\"></use></svg></button></li>"));
      }
    });
  });
  rangeSlider.noUiSlider.on('change', function (values, handle) {
    var value = Math.round(values[handle]);

    if (handle == 0) {
      if (document.querySelector("[data-number=\"from\"]")) {
        document.querySelector("[data-number=\"from\"]").remove();
      }

      list.insertAdjacentHTML('afterbegin', "<li class=\"catalog__box-item catalog__box-btn_bone\" data-number=\"from\">\u041E\u0442 ".concat(value, "\n        <button class=\"catalog__box-btn catalog__btn-from\">\n        <svg width=\"7\" height=\"7\" viewBox=\"0 0 7 7\"><use xlink:href=\"../images/sprite.svg#icon__close\"></use></svg></button></li>"));
    } else if (handle == 1) {
      if (document.querySelector("[data-number=\"before\"]")) {
        document.querySelector("[data-number=\"before\"]").remove();
      }

      list.insertAdjacentHTML('afterbegin', "<li class=\"catalog__box-item catalog__box-btn_bone\" data-number=\"before\">\u0414\u043E ".concat(value, "\n        <button class=\"catalog__box-btn catalog__btn-before\">\n        <svg width=\"7\" height=\"7\" viewBox=\"0 0 7 7\"><use xlink:href=\"../images/sprite.svg#icon__close\"></use></svg></button></li>"));
    }
  });
  list.addEventListener('click', function (e) {
    if (e.target.classList.contains('catalog__btn-from') || e.target.classList.contains('catalog__btn-before')) {
      e.target.closest('.catalog__box-item').remove();

      if (e.target.classList.contains('catalog__btn-from')) {
        rangeSlider.noUiSlider.set(0, null);
      } else if (e.target.classList.contains('catalog__btn-before')) {
        rangeSlider.noUiSlider.set([null, 200000]);
      }

      ;
    }
  });
}

console.log('13'); //filter

var filterСatalog = document.querySelector('.catalog__filtr');

if (filterСatalog) {
  var inputCheck = document.querySelectorAll('.check-true');

  var _list = document.querySelector('.catalog__box-list');

  inputCheck.forEach(function (el) {
    el.addEventListener('change', function (e) {
      var self = e.currentTarget;

      if (self.checked === true) {
        var color = self.closest('.catalog__block').dataset.color;

        _list.insertAdjacentHTML('afterbegin', "<li class=\"catalog__box-item\" data-btn-color=\"".concat(color, "\" data-filter-check=\"").concat(self.value, "\">\n          ").concat(self.value, "\n          <button class=\"catalog__box-btn\">\n          <svg class=\"catalog__btn-cross\" width=\"7\" height=\"7\" viewBox=\"0 0 7 7\"><use xlink:href=\"../images/sprite.svg#icon__close\"></use></svg>\n          </button></li>"));
      } else {
        document.querySelector("[data-filter-check=\"".concat(self.value, "\"]")).closest('.catalog__box-item').remove();
      }
    });
  });

  _list.addEventListener('click', function (e) {
    if (e.target.classList.contains('catalog__box-btn')) {
      var check = e.target.closest('.catalog__box-item').dataset.filterCheck;

      if (document.querySelector(".check-true[value=\"".concat(check, "\"]"))) {
        document.querySelector(".check-true[value=\"".concat(check, "\"]")).checked = false;
      }

      e.target.closest('.catalog__box-item').remove();
    }
  }); //seleckt_see 


  document.querySelectorAll('.catalog__btn-breakpoint').forEach(function (el) {
    el.addEventListener('click', function (event) {
      var btnSee = event.currentTarget.dataset.btnSee;
      this.classList.toggle('catalog__btn-breakpoint-up');
      document.querySelector("[data-see=\"".concat(btnSee, "\"]")).classList.toggle('catalog__filtr-category_see');
    });
  });
  console.log('seleckt_see'); //polzunok_breakpoint

  var rangeSliderSee = document.querySelector('#rangeSliderSee');

  if (rangeSliderSee) {
    noUiSlider.create(rangeSliderSee, {
      start: [0, 200000],
      connect: true,
      step: 1,
      range: {
        'min': [0],
        'max': [200000]
      }
    });

    var _input = document.querySelector('#rangeSeeInput0');

    var _input2 = document.querySelector('#rangeSeeInput1');

    var _inputs = [_input, _input2];

    var _list2 = document.querySelector('.catalog__box-list');

    rangeSliderSee.noUiSlider.on('update', function (value, handle) {
      _inputs[handle].value = Math.round(value[handle]);
    });

    var _setRangeSlider = function _setRangeSlider(i, value) {
      var arr = [null, null];
      arr[i] = value;
      rangeSliderSee.noUiSlider.set(arr);
    };

    _inputs.forEach(function (el, index) {
      el.addEventListener('change', function (e) {
        _setRangeSlider(index, e.currentTarget.value);

        if (index == 0) {
          if (document.querySelector("[data-number=\"from\"]")) {
            document.querySelector("[data-number=\"from\"]").remove();
          }

          _list2.insertAdjacentHTML('afterbegin', "<li class=\"catalog__box-item catalog__box-btn_bone\" data-number=\"from\">\u041E\u0442 ".concat(e.currentTarget.value, "\n        <button class=\"catalog__box-btn catalog__btn-from\">\n        <svg class=\"catalog__btn-cross\" width=\"7\" height=\"7\" viewBox=\"0 0 7 7\"><use xlink:href=\"../images/sprite.svg#icon__close\"></use></svg></button></li>"));
        } else if (index == 1) {
          if (document.querySelector("[data-number=\"before\"]")) {
            document.querySelector("[data-number=\"before\"]").remove();
          }

          _list2.insertAdjacentHTML('afterbegin', "<li class=\"catalog__box-item catalog__box-btn_bone\" data-number=\"before\">\u0414\u043E ".concat(e.currentTarget.value, "\n        <button class=\"catalog__box-btn catalog__btn-before\">\n        <svg class=\"catalog__btn-cross\" width=\"7\" height=\"7\" viewBox=\"0 0 7 7\"><use xlink:href=\"../images/sprite.svg#icon__close\"></use></svg></button></li>"));
        }
      });
    });

    rangeSliderSee.noUiSlider.on('change', function (values, handle) {
      var value = Math.round(values[handle]);

      if (handle == 0) {
        if (document.querySelector("[data-number=\"from\"]")) {
          document.querySelector("[data-number=\"from\"]").remove();
        }

        _list2.insertAdjacentHTML('afterbegin', "<li class=\"catalog__box-item catalog__box-btn_bone\" data-number=\"from\">\u041E\u0442 ".concat(value, "\n        <button class=\"catalog__box-btn catalog__btn-from\">\n        <svg width=\"7\" height=\"7\" viewBox=\"0 0 7 7\"><use xlink:href=\"../images/sprite.svg#icon__close\"></use></svg></button></li>"));
      } else if (handle == 1) {
        if (document.querySelector("[data-number=\"before\"]")) {
          document.querySelector("[data-number=\"before\"]").remove();
        }

        _list2.insertAdjacentHTML('afterbegin', "<li class=\"catalog__box-item catalog__box-btn_bone\" data-number=\"before\">\u0414\u043E ".concat(value, "\n        <button class=\"catalog__box-btn catalog__btn-before\">\n        <svg width=\"7\" height=\"7\" viewBox=\"0 0 7 7\"><use xlink:href=\"../images/sprite.svg#icon__close\"></use></svg></button></li>"));
      }
    });

    _list2.addEventListener('click', function (e) {
      if (e.target.classList.contains('catalog__btn-from') || e.target.classList.contains('catalog__btn-before')) {
        e.target.closest('.catalog__box-item').remove();

        if (e.target.classList.contains('catalog__btn-from')) {
          rangeSliderSee.noUiSlider.set(0, null);
        } else if (e.target.classList.contains('catalog__btn-before')) {
          rangeSliderSee.noUiSlider.set([null, 200000]);
        }

        ;
      }
    });
  }

  console.log('13'); // btn-still

  var limitQuantity = 9;
  var listFurniture = document.querySelectorAll('.furnitur');
  listFurniture.forEach(function (el) {
    if (el.children.length > limitQuantity) {
      var fullLength = el.children.length;
      var rangeLength = fullLength - limitQuantity;
      var arr = Array.from(el.children);
      var hiddenItems = arr.slice(fullLength - rangeLength, fullLength);
      hiddenItems.forEach(function (el) {
        el.classList.add('catalog__hide');
      });
      el.insertAdjacentHTML('beforeend', "\n        <button href=\"#\" class=\"catalog__filtr-category-btn btn-furnitur\">+ \u0415\u0449\u0435 ".concat(hiddenItems.length, "</button>\n      "));
    }
  });
  var catalogMore = document.querySelectorAll('.btn-furnitur');
  catalogMore.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var parent = e.currentTarget.closest('.furnitur');

      if (!el.classList.contains('btn-furnitur--expand')) {
        el.classList.add('btn-furnitur--expand');
        el.textContent = 'Свернуть';
        parent.querySelectorAll('.furnitur-elem').forEach(function (el) {
          el.classList.remove('catalog__hide');
        });
      } else {
        var fullLength = parent.children.length;
        var rangeLength = fullLength - limitQuantity;
        var arr = Array.from(parent.children);
        var hiddenItems = arr.slice(fullLength - rangeLength, fullLength - 1);
        hiddenItems.forEach(function (el) {
          el.classList.add('catalog__hide');
        });
        el.classList.remove('btn-furnitur--expand');
        el.textContent = "+ \u0415\u0449\u0435 ".concat(hiddenItems.length);
      }
    });
  });
  var listСolor = document.querySelectorAll('.color');
  listСolor.forEach(function (el) {
    if (el.children.length > limitQuantity) {
      var fullLength = el.children.length;
      var rangeLength = fullLength - limitQuantity;
      var arr = Array.from(el.children);
      var hiddenItems = arr.slice(fullLength - rangeLength, fullLength);
      hiddenItems.forEach(function (el) {
        el.classList.add('catalog__hide');
      });
      el.insertAdjacentHTML('beforeend', "\n        <button href=\"#\" class=\"catalog__filtr-category-btn btn-color\">+ \u0415\u0449\u0435 ".concat(hiddenItems.length, "</button>\n      "));
    }
  });
  var catalogMoreColor = document.querySelectorAll('.btn-color');
  catalogMoreColor.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var parent = e.currentTarget.closest('.color');

      if (!el.classList.contains('btn-color--expand')) {
        el.classList.add('btn-color--expand');
        el.textContent = 'Свернуть';
        parent.querySelectorAll('.color-elem').forEach(function (el) {
          el.classList.remove('catalog__hide');
        });
      } else {
        var fullLength = parent.children.length;
        var rangeLength = fullLength - limitQuantity;
        var arr = Array.from(parent.children);
        var hiddenItems = arr.slice(fullLength - rangeLength, fullLength - 1);
        hiddenItems.forEach(function (el) {
          el.classList.add('catalog__hide');
        });
        el.classList.remove('btn-color--expand');
        el.textContent = "+ \u0415\u0449\u0435 ".concat(hiddenItems.length);
      }
    });
  });
}

console.log('13_filter'); //pagination

var pag = document.querySelector('.catalog__tab-btn');

if (pag) {
  document.querySelectorAll('.catalog__tab-btn').forEach(function (stepr) {
    stepr.addEventListener('click', function (event) {
      var path = event.currentTarget.dataset.path;
      document.querySelectorAll('.catalog__product-list').forEach(function (stepContent) {
        stepContent.classList.remove('catalog__product-aktive');
      });
      document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('catalog__product-aktive');
      document.querySelectorAll('.catalog__tab-btn').forEach(function (StepBtn) {
        StepBtn.classList.remove('catalog__tab-btn_active');
      });
      this.classList.add('catalog__tab-btn_active');
    });
  });
}

console.log('14'); //validation

var validation = document.querySelector('.welcome__form');

if (validation) {
  new JustValidate('.welcome__form', {
    rules: {
      name: {
        required: true,
        minLength: 3,
        maxLength: 30
      },
      tel: {
        required: true,
        minLength: 11,
        phone: 111 - 222 - 3333
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: 'Недопустимый формат',
      tel: 'Недопустимый формат',
      email: 'Недопустимый формат'
    }
  });
}

console.log('15');
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2l0aWVzJyk7XG52YXIgY2hvaWNlcyA9IG5ldyBDaG9pY2VzKGVsZW1lbnQsIHtcbiAgc2VhcmNoRW5hYmxlZDogZmFsc2UsXG4gIHNob3VsZFNvcnQ6IGZhbHNlLFxuICByZW5kZXJDaG9pY2VMaW1pdDogLTEsXG4gIGNob2ljZXM6IFt7XG4gICAgdmFsdWU6ICfQnNC+0YHQutCy0LAnLFxuICAgIGxhYmVsOiAn0JzQvtGB0LrQstCwJyxcbiAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICBkaXNhYmxlZDogdHJ1ZVxuICB9LCB7XG4gICAgdmFsdWU6ICfQmtCw0LfQsNC90YwnLFxuICAgIGxhYmVsOiAn0JrQsNC30LDQvdGMJyxcbiAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IHRydWVcbiAgfSwge1xuICAgIHZhbHVlOiAn0KPRhNCwJyxcbiAgICBsYWJlbDogJ9Cj0YTQsCcsXG4gICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIGRpc2FibGVkOiB0cnVlXG4gIH0sIHtcbiAgICB2YWx1ZTogJ9Cf0LXRgNC80YwnLFxuICAgIGxhYmVsOiAn0J/QtdGA0LzRjCcsXG4gICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIGRpc2FibGVkOiB0cnVlXG4gIH1dXG59KTtcbmNvbnNvbGUubG9nKCcxJyk7XG52YXIgZWxlbWVudENhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveGJvdHRvbl9fY2F0ZWdvcnknKTtcbnZhciBjaG9pY2VzQ2F0ZWdvcnkgPSBuZXcgQ2hvaWNlcyhlbGVtZW50Q2F0ZWdvcnksIHtcbiAgc2VhcmNoRW5hYmxlZDogZmFsc2UsXG4gIHNob3VsZFNvcnQ6IGZhbHNlLFxuICByZW5kZXJDaG9pY2VMaW1pdDogLTEsXG4gIGNob2ljZXM6IFt7XG4gICAgdmFsdWU6ICfQmtCw0YLQtdCz0L7RgNC40Y8nLFxuICAgIGxhYmVsOiAn0JrQsNGC0LXQs9C+0YDQuNGPJyxcbiAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICBkaXNhYmxlZDogdHJ1ZVxuICB9LCB7XG4gICAgdmFsdWU6ICfQlNC40LLQsNC90YsnLFxuICAgIGxhYmVsOiAn0JTQuNCy0LDQvdGLJyxcbiAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IHRydWVcbiAgfSwge1xuICAgIHZhbHVlOiAn0JrRgNC10YHQu9CwJyxcbiAgICBsYWJlbDogJ9Ca0YDQtdGB0LvQsCcsXG4gICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIGRpc2FibGVkOiB0cnVlXG4gIH0sIHtcbiAgICB2YWx1ZTogJ9Cf0YPRhNGLJyxcbiAgICBsYWJlbDogJ9Cf0YPRhNGLJyxcbiAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IHRydWVcbiAgfSwge1xuICAgIHZhbHVlOiAn0JrRgNC+0LLQsNGC0LgnLFxuICAgIGxhYmVsOiAn0JrRgNC+0LLQsNGC0LgnLFxuICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogdHJ1ZVxuICB9LCB7XG4gICAgdmFsdWU6ICfQotGD0LzQsdGLJyxcbiAgICBsYWJlbDogJ9Ci0YPQvNCx0YsnLFxuICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogdHJ1ZVxuICB9LCB7XG4gICAgdmFsdWU6ICfQmtC+0LzQvtC00YsnLFxuICAgIGxhYmVsOiAn0JrQvtC80L7QtNGLJyxcbiAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IHRydWVcbiAgfSwge1xuICAgIHZhbHVlOiAn0KHRgtGD0LvRjNGPJyxcbiAgICBsYWJlbDogJ9Ch0YLRg9C70YzRjycsXG4gICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIGRpc2FibGVkOiB0cnVlXG4gIH0sIHtcbiAgICB2YWx1ZTogJ9Ch0YLQvtC70YsnLFxuICAgIGxhYmVsOiAn0KHRgtC+0LvRiycsXG4gICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIGRpc2FibGVkOiB0cnVlXG4gIH0sIHtcbiAgICB2YWx1ZTogJ9CQ0LrRgdC10YHRgdGD0LDRgNGLJyxcbiAgICBsYWJlbDogJ9CQ0LrRgdC10YHRgdGD0LDRgNGLJyxcbiAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IHRydWVcbiAgfV1cbn0pO1xuY29uc29sZS5sb2coJzInKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51JykuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG59KTtcbmNvbnNvbGUubG9nKCczJyk7IC8vaW5wdXQgXG5cbnZhciBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtc2VhcmNoXCIpO1xudmFyIGljb25TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJveEJvdHRvbl9fc2VhcmNoXCIpO1xuXG5pZiAoaW5wdXRTZWFyY2gudmFsdWUgIT0gJycpIHtcbiAgaWNvblNlYXJjaC5zdHlsZXMuY29sb3IgPSAnI0E2NUNGMCc7XG59XG5cbmNvbnNvbGUubG9nKCc0Jyk7IC8vIGhlcm9fX3N3aXBlclxuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLmhlcm9fX3N3aXBlcicsIHtcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIGxvb3A6IHRydWUsXG4gIHNsaWRlVG9DbGlja2VkU2xpZGU6IHRydWUsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgY2xpY2thYmxlOiB0cnVlXG4gIH0sXG4gIGF1dG9wbGF5OiB7XG4gICAgZGVsYXk6IDUwMDBcbiAgfVxufSk7XG5jb25zb2xlLmxvZygnNScpOyAvLyBvZmZlcl9fc3dpcGVyXG5cbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcub2ZmZXJfX3N3aXBlcicsIHtcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIGxvb3A6IGZhbHNlLFxuICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLm9mZmVyX19jbGljay1hcnJvd19uZXh0JyxcbiAgICBwcmV2RWw6ICcub2ZmZXJfX2NsaWNrLWFycm93X3ByZXYnXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgMzIwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMVxuICAgIH0sXG4gICAgNTg1OiB7XG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDMwXG4gICAgfSxcbiAgICAxMDIwOiB7XG4gICAgICBzbGlkZXNQZXJHcm91cDogMyxcbiAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMzFcbiAgICB9XG4gIH1cbn0pO1xuY29uc29sZS5sb2coJzYnKTsgLy8gdXNlZnVsX19zd2lwZXJcblxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy51c2VmdWwtc3dpcGVyJywge1xuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgbG9vcDogZmFsc2UsXG4gIHNsaWRlVG9DbGlja2VkU2xpZGU6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcudXNlZnVsX19jbGljay1hcnJvd19wcmV2JyxcbiAgICBwcmV2RWw6ICcudXNlZnVsX19jbGljay1hcnJvd19uZXh0J1xuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDMyMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMzJcbiAgICB9LFxuICAgIDQwMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMzJcbiAgICB9LFxuICAgIDgwMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMzJcbiAgICB9LFxuICAgIDExMDE6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDMyXG4gICAgfVxuICB9XG59KTtcbmNvbnNvbGUubG9nKCc3Jyk7IC8vcHJvZHVjdF9fc3dpcGVyXG5cbnZhciBwcm9kdWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QnKTtcblxuaWYgKHByb2R1Y3QpIHtcbiAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5wcm9kdWN0Jywge1xuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5wcm9kdWN0X19idG4tYXJyb3ctbmV4dCcsXG4gICAgICBwcmV2RWw6ICcucHJvZHVjdF9fYnRuLWFycm93LXByZXYnXG4gICAgfSxcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICBsb29wOiBmYWxzZSxcbiAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiB0cnVlLFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAzMjA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNlxuICAgICAgfSxcbiAgICAgIDM0MDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICBzcGFjZUJldHdlZW46IDMwXG4gICAgICB9LFxuICAgICAgODAwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzJcbiAgICAgIH0sXG4gICAgICAxMTAwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzJcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5jb25zb2xlLmxvZygnOCcpOyAvL2Rlc2NyaXB0aW9uX19zd2lwZXJcblxudmFyIGRlc2NyaXB0aW9uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbl9fYm94Jyk7XG5cbmlmIChkZXNjcmlwdGlvbkxpc3QpIHtcbiAgdmFyIG15c3dpcGVyID0gbmV3IFN3aXBlcignLmRlc2NyaXB0aW9uX19ib3gnLCB7XG4gICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogdHJ1ZSxcbiAgICAvLyBsb29wOiB0cnVlLFxuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiA1XG4gIH0pO1xuICB2YXIgZGVzY3JpcHRpb25TbGlkZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXNjcmlwdGlvbl9fc2xpZGUtbmF2Jyk7XG4gIGRlc2NyaXB0aW9uU2xpZGVOYXYuZm9yRWFjaChmdW5jdGlvbiAoZWwsIGluZGV4KSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgIG15c3dpcGVyLnNsaWRlVG8oaW5kZXgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuY29uc29sZS5sb2coJzknKTsgLy9tb2RhbFxuXG52YXIgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb25fX3NsaWRlJyk7XG5cbmlmIChtb2RhbCkge1xuICB2YXIgZGVzY3JpcHRpb25Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXNjcmlwdGlvbl9fYnRuJyk7XG5cbiAgdmFyIF9tb2RhbCA9IG5ldyBHcmFwaE1vZGFsKCk7XG59XG5cbmNvbnNvbGUubG9nKCcxMCcpOyAvL3NjYWxlX19zd2lwZXJcblxudmFyIG1vZGFsU2NhbGVTd2lwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtc2NhbGVfX3N3aXBlcicpO1xuXG5pZiAobW9kYWxTY2FsZVN3aXBlcikge1xuICB2YXIgX3N3aXBlciA9IG5ldyBTd2lwZXIoXCIubW9kYWwtc2NhbGVfX3N3aXBlclwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICAvLyBsb29wOiB0cnVlLFxuICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLm1vZGFsLXNjYWxlX19jbGljay1hcnJvd19wcmV2JyxcbiAgICAgIHByZXZFbDogJy5tb2RhbC1zY2FsZV9fY2xpY2stYXJyb3dfbmV4dCdcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAzMjA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMVxuICAgICAgfSxcbiAgICAgIDYwMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyXG4gICAgICB9LFxuICAgICAgODAwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDNcbiAgICAgIH0sXG4gICAgICAxMTAwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDRcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHZhciBzd2lwZXIyID0gbmV3IFN3aXBlcihcIi5tb2RhbC1zY2FsZV9fc3dpcGVyMlwiLCB7XG4gICAgbG9vcDogdHJ1ZSxcbiAgICB0aHVtYnM6IHtcbiAgICAgIHN3aXBlcjogX3N3aXBlclxuICAgIH1cbiAgfSk7XG59XG5cbmNvbnNvbGUubG9nKCcxMScpOyAvL3ZhbGlkYXRpb25fX21vZGFsXG5cbnZhciB2YWxpZGF0aW9uTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Zvcm0nKTtcblxuaWYgKHZhbGlkYXRpb25Nb2RhbCkge1xuICBuZXcgSnVzdFZhbGlkYXRlKCcubW9kYWxfX2Zvcm0nLCB7XG4gICAgcnVsZXM6IHtcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIG1pbkxlbmd0aDogMyxcbiAgICAgICAgbWF4TGVuZ3RoOiAzMFxuICAgICAgfSxcbiAgICAgIHRlbDoge1xuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgbWluTGVuZ3RoOiAxMSxcbiAgICAgICAgcGhvbmU6IDExMSAtIDIyMiAtIDMzMzNcbiAgICAgIH1cbiAgICB9LFxuICAgIG1lc3NhZ2VzOiB7XG4gICAgICBuYW1lOiAn0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRgicsXG4gICAgICB0ZWw6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJ1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnNvbGUubG9nKCcxMicpOyAvL3BvbHp1bm9rIFxuXG52YXIgcmFuZ2VTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFuZ2VTbGlkZXInKTtcblxuaWYgKHJhbmdlU2xpZGVyKSB7XG4gIG5vVWlTbGlkZXIuY3JlYXRlKHJhbmdlU2xpZGVyLCB7XG4gICAgc3RhcnQ6IFswLCAyMDAwMDBdLFxuICAgIGNvbm5lY3Q6IHRydWUsXG4gICAgc3RlcDogMSxcbiAgICByYW5nZToge1xuICAgICAgJ21pbic6IFswXSxcbiAgICAgICdtYXgnOiBbMjAwMDAwXVxuICAgIH1cbiAgfSk7XG4gIHZhciBpbnB1dDAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFuZ2VJbnB1dDAnKTtcbiAgdmFyIGlucHV0MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYW5nZUlucHV0MScpO1xuICB2YXIgaW5wdXRzID0gW2lucHV0MCwgaW5wdXQxXTtcbiAgdmFyIGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZ19fYm94LWxpc3QnKTtcbiAgcmFuZ2VTbGlkZXIubm9VaVNsaWRlci5vbigndXBkYXRlJywgZnVuY3Rpb24gKHZhbHVlLCBoYW5kbGUpIHtcbiAgICBpbnB1dHNbaGFuZGxlXS52YWx1ZSA9IE1hdGgucm91bmQodmFsdWVbaGFuZGxlXSk7XG4gIH0pO1xuXG4gIHZhciBzZXRSYW5nZVNsaWRlciA9IGZ1bmN0aW9uIHNldFJhbmdlU2xpZGVyKGksIHZhbHVlKSB7XG4gICAgdmFyIGFyciA9IFtudWxsLCBudWxsXTtcbiAgICBhcnJbaV0gPSB2YWx1ZTtcbiAgICByYW5nZVNsaWRlci5ub1VpU2xpZGVyLnNldChhcnIpO1xuICB9O1xuXG4gIGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaW5kZXgpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgc2V0UmFuZ2VTbGlkZXIoaW5kZXgsIGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG5cbiAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbnVtYmVyPVxcXCJmcm9tXFxcIl1cIikpIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbnVtYmVyPVxcXCJmcm9tXFxcIl1cIikucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIFwiPGxpIGNsYXNzPVxcXCJjYXRhbG9nX19ib3gtaXRlbSBjYXRhbG9nX19ib3gtYnRuX2JvbmVcXFwiIGRhdGEtbnVtYmVyPVxcXCJmcm9tXFxcIj5cXHUwNDFFXFx1MDQ0MiBcIi5jb25jYXQoZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCBcIlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2F0YWxvZ19fYm94LWJ0biBjYXRhbG9nX19idG4tZnJvbVxcXCI+XFxuICAgICAgICA8c3ZnIGNsYXNzPVxcXCJjYXRhbG9nX19idG4tY3Jvc3NcXFwiIHdpZHRoPVxcXCI3XFxcIiBoZWlnaHQ9XFxcIjdcXFwiIHZpZXdCb3g9XFxcIjAgMCA3IDdcXFwiPjx1c2UgeGxpbms6aHJlZj1cXFwiLi4vaW1hZ2VzL3Nwcml0ZS5zdmcjaWNvbl9fY2xvc2VcXFwiPjwvdXNlPjwvc3ZnPjwvYnV0dG9uPjwvbGk+XCIpKTtcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gMSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW51bWJlcj1cXFwiYmVmb3JlXFxcIl1cIikpIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbnVtYmVyPVxcXCJiZWZvcmVcXFwiXVwiKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgXCI8bGkgY2xhc3M9XFxcImNhdGFsb2dfX2JveC1pdGVtIGNhdGFsb2dfX2JveC1idG5fYm9uZVxcXCIgZGF0YS1udW1iZXI9XFxcImJlZm9yZVxcXCI+XFx1MDQxNFxcdTA0M0UgXCIuY29uY2F0KGUuY3VycmVudFRhcmdldC52YWx1ZSwgXCJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhdGFsb2dfX2JveC1idG4gY2F0YWxvZ19fYnRuLWJlZm9yZVxcXCI+XFxuICAgICAgICA8c3ZnIGNsYXNzPVxcXCJjYXRhbG9nX19idG4tY3Jvc3NcXFwiIHdpZHRoPVxcXCI3XFxcIiBoZWlnaHQ9XFxcIjdcXFwiIHZpZXdCb3g9XFxcIjAgMCA3IDdcXFwiPjx1c2UgeGxpbms6aHJlZj1cXFwiLi4vaW1hZ2VzL3Nwcml0ZS5zdmcjaWNvbl9fY2xvc2VcXFwiPjwvdXNlPjwvc3ZnPjwvYnV0dG9uPjwvbGk+XCIpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJhbmdlU2xpZGVyLm5vVWlTbGlkZXIub24oJ2NoYW5nZScsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xuICAgIHZhciB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWVzW2hhbmRsZV0pO1xuXG4gICAgaWYgKGhhbmRsZSA9PSAwKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW51bWJlcj1cXFwiZnJvbVxcXCJdXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1udW1iZXI9XFxcImZyb21cXFwiXVwiKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgbGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBcIjxsaSBjbGFzcz1cXFwiY2F0YWxvZ19fYm94LWl0ZW0gY2F0YWxvZ19fYm94LWJ0bl9ib25lXFxcIiBkYXRhLW51bWJlcj1cXFwiZnJvbVxcXCI+XFx1MDQxRVxcdTA0NDIgXCIuY29uY2F0KHZhbHVlLCBcIlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2F0YWxvZ19fYm94LWJ0biBjYXRhbG9nX19idG4tZnJvbVxcXCI+XFxuICAgICAgICA8c3ZnIHdpZHRoPVxcXCI3XFxcIiBoZWlnaHQ9XFxcIjdcXFwiIHZpZXdCb3g9XFxcIjAgMCA3IDdcXFwiPjx1c2UgeGxpbms6aHJlZj1cXFwiLi4vaW1hZ2VzL3Nwcml0ZS5zdmcjaWNvbl9fY2xvc2VcXFwiPjwvdXNlPjwvc3ZnPjwvYnV0dG9uPjwvbGk+XCIpKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZSA9PSAxKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW51bWJlcj1cXFwiYmVmb3JlXFxcIl1cIikpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW51bWJlcj1cXFwiYmVmb3JlXFxcIl1cIikucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIGxpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgXCI8bGkgY2xhc3M9XFxcImNhdGFsb2dfX2JveC1pdGVtIGNhdGFsb2dfX2JveC1idG5fYm9uZVxcXCIgZGF0YS1udW1iZXI9XFxcImJlZm9yZVxcXCI+XFx1MDQxNFxcdTA0M0UgXCIuY29uY2F0KHZhbHVlLCBcIlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2F0YWxvZ19fYm94LWJ0biBjYXRhbG9nX19idG4tYmVmb3JlXFxcIj5cXG4gICAgICAgIDxzdmcgd2lkdGg9XFxcIjdcXFwiIGhlaWdodD1cXFwiN1xcXCIgdmlld0JveD1cXFwiMCAwIDcgN1xcXCI+PHVzZSB4bGluazpocmVmPVxcXCIuLi9pbWFnZXMvc3ByaXRlLnN2ZyNpY29uX19jbG9zZVxcXCI+PC91c2U+PC9zdmc+PC9idXR0b24+PC9saT5cIikpO1xuICAgIH1cbiAgfSk7XG4gIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhdGFsb2dfX2J0bi1mcm9tJykgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXRhbG9nX19idG4tYmVmb3JlJykpIHtcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5jYXRhbG9nX19ib3gtaXRlbScpLnJlbW92ZSgpO1xuXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXRhbG9nX19idG4tZnJvbScpKSB7XG4gICAgICAgIHJhbmdlU2xpZGVyLm5vVWlTbGlkZXIuc2V0KDAsIG51bGwpO1xuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhdGFsb2dfX2J0bi1iZWZvcmUnKSkge1xuICAgICAgICByYW5nZVNsaWRlci5ub1VpU2xpZGVyLnNldChbbnVsbCwgMjAwMDAwXSk7XG4gICAgICB9XG5cbiAgICAgIDtcbiAgICB9XG4gIH0pO1xufVxuXG5jb25zb2xlLmxvZygnMTMnKTsgLy9maWx0ZXJcblxudmFyIGZpbHRlctChYXRhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGFsb2dfX2ZpbHRyJyk7XG5cbmlmIChmaWx0ZXLQoWF0YWxvZykge1xuICB2YXIgaW5wdXRDaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjay10cnVlJyk7XG5cbiAgdmFyIF9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGFsb2dfX2JveC1saXN0Jyk7XG5cbiAgaW5wdXRDaGVjay5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgc2VsZiA9IGUuY3VycmVudFRhcmdldDtcblxuICAgICAgaWYgKHNlbGYuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB2YXIgY29sb3IgPSBzZWxmLmNsb3Nlc3QoJy5jYXRhbG9nX19ibG9jaycpLmRhdGFzZXQuY29sb3I7XG5cbiAgICAgICAgX2xpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgXCI8bGkgY2xhc3M9XFxcImNhdGFsb2dfX2JveC1pdGVtXFxcIiBkYXRhLWJ0bi1jb2xvcj1cXFwiXCIuY29uY2F0KGNvbG9yLCBcIlxcXCIgZGF0YS1maWx0ZXItY2hlY2s9XFxcIlwiKS5jb25jYXQoc2VsZi52YWx1ZSwgXCJcXFwiPlxcbiAgICAgICAgICBcIikuY29uY2F0KHNlbGYudmFsdWUsIFwiXFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhdGFsb2dfX2JveC1idG5cXFwiPlxcbiAgICAgICAgICA8c3ZnIGNsYXNzPVxcXCJjYXRhbG9nX19idG4tY3Jvc3NcXFwiIHdpZHRoPVxcXCI3XFxcIiBoZWlnaHQ9XFxcIjdcXFwiIHZpZXdCb3g9XFxcIjAgMCA3IDdcXFwiPjx1c2UgeGxpbms6aHJlZj1cXFwiLi4vaW1hZ2VzL3Nwcml0ZS5zdmcjaWNvbl9fY2xvc2VcXFwiPjwvdXNlPjwvc3ZnPlxcbiAgICAgICAgICA8L2J1dHRvbj48L2xpPlwiKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZmlsdGVyLWNoZWNrPVxcXCJcIi5jb25jYXQoc2VsZi52YWx1ZSwgXCJcXFwiXVwiKSkuY2xvc2VzdCgnLmNhdGFsb2dfX2JveC1pdGVtJykucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIF9saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXRhbG9nX19ib3gtYnRuJykpIHtcbiAgICAgIHZhciBjaGVjayA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jYXRhbG9nX19ib3gtaXRlbScpLmRhdGFzZXQuZmlsdGVyQ2hlY2s7XG5cbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoZWNrLXRydWVbdmFsdWU9XFxcIlwiLmNvbmNhdChjaGVjaywgXCJcXFwiXVwiKSkpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVjay10cnVlW3ZhbHVlPVxcXCJcIi5jb25jYXQoY2hlY2ssIFwiXFxcIl1cIikpLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLmNhdGFsb2dfX2JveC1pdGVtJykucmVtb3ZlKCk7XG4gICAgfVxuICB9KTsgLy9zZWxlY2t0X3NlZSBcblxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nX19idG4tYnJlYWtwb2ludCcpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBidG5TZWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYnRuU2VlO1xuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdjYXRhbG9nX19idG4tYnJlYWtwb2ludC11cCcpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNlZT1cXFwiXCIuY29uY2F0KGJ0blNlZSwgXCJcXFwiXVwiKSkuY2xhc3NMaXN0LnRvZ2dsZSgnY2F0YWxvZ19fZmlsdHItY2F0ZWdvcnlfc2VlJyk7XG4gICAgfSk7XG4gIH0pO1xuICBjb25zb2xlLmxvZygnc2VsZWNrdF9zZWUnKTsgLy9wb2x6dW5va19icmVha3BvaW50XG5cbiAgdmFyIHJhbmdlU2xpZGVyU2VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmdlU2xpZGVyU2VlJyk7XG5cbiAgaWYgKHJhbmdlU2xpZGVyU2VlKSB7XG4gICAgbm9VaVNsaWRlci5jcmVhdGUocmFuZ2VTbGlkZXJTZWUsIHtcbiAgICAgIHN0YXJ0OiBbMCwgMjAwMDAwXSxcbiAgICAgIGNvbm5lY3Q6IHRydWUsXG4gICAgICBzdGVwOiAxLFxuICAgICAgcmFuZ2U6IHtcbiAgICAgICAgJ21pbic6IFswXSxcbiAgICAgICAgJ21heCc6IFsyMDAwMDBdXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgX2lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmdlU2VlSW5wdXQwJyk7XG5cbiAgICB2YXIgX2lucHV0MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYW5nZVNlZUlucHV0MScpO1xuXG4gICAgdmFyIF9pbnB1dHMgPSBbX2lucHV0LCBfaW5wdXQyXTtcblxuICAgIHZhciBfbGlzdDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZ19fYm94LWxpc3QnKTtcblxuICAgIHJhbmdlU2xpZGVyU2VlLm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICh2YWx1ZSwgaGFuZGxlKSB7XG4gICAgICBfaW5wdXRzW2hhbmRsZV0udmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlW2hhbmRsZV0pO1xuICAgIH0pO1xuXG4gICAgdmFyIF9zZXRSYW5nZVNsaWRlciA9IGZ1bmN0aW9uIF9zZXRSYW5nZVNsaWRlcihpLCB2YWx1ZSkge1xuICAgICAgdmFyIGFyciA9IFtudWxsLCBudWxsXTtcbiAgICAgIGFycltpXSA9IHZhbHVlO1xuICAgICAgcmFuZ2VTbGlkZXJTZWUubm9VaVNsaWRlci5zZXQoYXJyKTtcbiAgICB9O1xuXG4gICAgX2lucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaW5kZXgpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF9zZXRSYW5nZVNsaWRlcihpbmRleCwgZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcblxuICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbnVtYmVyPVxcXCJmcm9tXFxcIl1cIikpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1udW1iZXI9XFxcImZyb21cXFwiXVwiKS5yZW1vdmUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfbGlzdDIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgXCI8bGkgY2xhc3M9XFxcImNhdGFsb2dfX2JveC1pdGVtIGNhdGFsb2dfX2JveC1idG5fYm9uZVxcXCIgZGF0YS1udW1iZXI9XFxcImZyb21cXFwiPlxcdTA0MUVcXHUwNDQyIFwiLmNvbmNhdChlLmN1cnJlbnRUYXJnZXQudmFsdWUsIFwiXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXRhbG9nX19ib3gtYnRuIGNhdGFsb2dfX2J0bi1mcm9tXFxcIj5cXG4gICAgICAgIDxzdmcgY2xhc3M9XFxcImNhdGFsb2dfX2J0bi1jcm9zc1xcXCIgd2lkdGg9XFxcIjdcXFwiIGhlaWdodD1cXFwiN1xcXCIgdmlld0JveD1cXFwiMCAwIDcgN1xcXCI+PHVzZSB4bGluazpocmVmPVxcXCIuLi9pbWFnZXMvc3ByaXRlLnN2ZyNpY29uX19jbG9zZVxcXCI+PC91c2U+PC9zdmc+PC9idXR0b24+PC9saT5cIikpO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDEpIHtcbiAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW51bWJlcj1cXFwiYmVmb3JlXFxcIl1cIikpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1udW1iZXI9XFxcImJlZm9yZVxcXCJdXCIpLnJlbW92ZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF9saXN0Mi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBcIjxsaSBjbGFzcz1cXFwiY2F0YWxvZ19fYm94LWl0ZW0gY2F0YWxvZ19fYm94LWJ0bl9ib25lXFxcIiBkYXRhLW51bWJlcj1cXFwiYmVmb3JlXFxcIj5cXHUwNDE0XFx1MDQzRSBcIi5jb25jYXQoZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCBcIlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2F0YWxvZ19fYm94LWJ0biBjYXRhbG9nX19idG4tYmVmb3JlXFxcIj5cXG4gICAgICAgIDxzdmcgY2xhc3M9XFxcImNhdGFsb2dfX2J0bi1jcm9zc1xcXCIgd2lkdGg9XFxcIjdcXFwiIGhlaWdodD1cXFwiN1xcXCIgdmlld0JveD1cXFwiMCAwIDcgN1xcXCI+PHVzZSB4bGluazpocmVmPVxcXCIuLi9pbWFnZXMvc3ByaXRlLnN2ZyNpY29uX19jbG9zZVxcXCI+PC91c2U+PC9zdmc+PC9idXR0b24+PC9saT5cIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJhbmdlU2xpZGVyU2VlLm5vVWlTbGlkZXIub24oJ2NoYW5nZScsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xuICAgICAgdmFyIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZXNbaGFuZGxlXSk7XG5cbiAgICAgIGlmIChoYW5kbGUgPT0gMCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW51bWJlcj1cXFwiZnJvbVxcXCJdXCIpKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW51bWJlcj1cXFwiZnJvbVxcXCJdXCIpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgX2xpc3QyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIFwiPGxpIGNsYXNzPVxcXCJjYXRhbG9nX19ib3gtaXRlbSBjYXRhbG9nX19ib3gtYnRuX2JvbmVcXFwiIGRhdGEtbnVtYmVyPVxcXCJmcm9tXFxcIj5cXHUwNDFFXFx1MDQ0MiBcIi5jb25jYXQodmFsdWUsIFwiXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXRhbG9nX19ib3gtYnRuIGNhdGFsb2dfX2J0bi1mcm9tXFxcIj5cXG4gICAgICAgIDxzdmcgd2lkdGg9XFxcIjdcXFwiIGhlaWdodD1cXFwiN1xcXCIgdmlld0JveD1cXFwiMCAwIDcgN1xcXCI+PHVzZSB4bGluazpocmVmPVxcXCIuLi9pbWFnZXMvc3ByaXRlLnN2ZyNpY29uX19jbG9zZVxcXCI+PC91c2U+PC9zdmc+PC9idXR0b24+PC9saT5cIikpO1xuICAgICAgfSBlbHNlIGlmIChoYW5kbGUgPT0gMSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW51bWJlcj1cXFwiYmVmb3JlXFxcIl1cIikpIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbnVtYmVyPVxcXCJiZWZvcmVcXFwiXVwiKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9saXN0Mi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBcIjxsaSBjbGFzcz1cXFwiY2F0YWxvZ19fYm94LWl0ZW0gY2F0YWxvZ19fYm94LWJ0bl9ib25lXFxcIiBkYXRhLW51bWJlcj1cXFwiYmVmb3JlXFxcIj5cXHUwNDE0XFx1MDQzRSBcIi5jb25jYXQodmFsdWUsIFwiXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXRhbG9nX19ib3gtYnRuIGNhdGFsb2dfX2J0bi1iZWZvcmVcXFwiPlxcbiAgICAgICAgPHN2ZyB3aWR0aD1cXFwiN1xcXCIgaGVpZ2h0PVxcXCI3XFxcIiB2aWV3Qm94PVxcXCIwIDAgNyA3XFxcIj48dXNlIHhsaW5rOmhyZWY9XFxcIi4uL2ltYWdlcy9zcHJpdGUuc3ZnI2ljb25fX2Nsb3NlXFxcIj48L3VzZT48L3N2Zz48L2J1dHRvbj48L2xpPlwiKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfbGlzdDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2F0YWxvZ19fYnRuLWZyb20nKSB8fCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhdGFsb2dfX2J0bi1iZWZvcmUnKSkge1xuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcuY2F0YWxvZ19fYm94LWl0ZW0nKS5yZW1vdmUoKTtcblxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXRhbG9nX19idG4tZnJvbScpKSB7XG4gICAgICAgICAgcmFuZ2VTbGlkZXJTZWUubm9VaVNsaWRlci5zZXQoMCwgbnVsbCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXRhbG9nX19idG4tYmVmb3JlJykpIHtcbiAgICAgICAgICByYW5nZVNsaWRlclNlZS5ub1VpU2xpZGVyLnNldChbbnVsbCwgMjAwMDAwXSk7XG4gICAgICAgIH1cblxuICAgICAgICA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zb2xlLmxvZygnMTMnKTsgLy8gYnRuLXN0aWxsXG5cbiAgdmFyIGxpbWl0UXVhbnRpdHkgPSA5O1xuICB2YXIgbGlzdEZ1cm5pdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mdXJuaXR1cicpO1xuICBsaXN0RnVybml0dXJlLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCA+IGxpbWl0UXVhbnRpdHkpIHtcbiAgICAgIHZhciBmdWxsTGVuZ3RoID0gZWwuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgdmFyIHJhbmdlTGVuZ3RoID0gZnVsbExlbmd0aCAtIGxpbWl0UXVhbnRpdHk7XG4gICAgICB2YXIgYXJyID0gQXJyYXkuZnJvbShlbC5jaGlsZHJlbik7XG4gICAgICB2YXIgaGlkZGVuSXRlbXMgPSBhcnIuc2xpY2UoZnVsbExlbmd0aCAtIHJhbmdlTGVuZ3RoLCBmdWxsTGVuZ3RoKTtcbiAgICAgIGhpZGRlbkl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NhdGFsb2dfX2hpZGUnKTtcbiAgICAgIH0pO1xuICAgICAgZWwuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBcIlxcbiAgICAgICAgPGJ1dHRvbiBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiY2F0YWxvZ19fZmlsdHItY2F0ZWdvcnktYnRuIGJ0bi1mdXJuaXR1clxcXCI+KyBcXHUwNDE1XFx1MDQ0OVxcdTA0MzUgXCIuY29uY2F0KGhpZGRlbkl0ZW1zLmxlbmd0aCwgXCI8L2J1dHRvbj5cXG4gICAgICBcIikpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBjYXRhbG9nTW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tZnVybml0dXInKTtcbiAgY2F0YWxvZ01vcmUuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgcGFyZW50ID0gZS5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJy5mdXJuaXR1cicpO1xuXG4gICAgICBpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLWZ1cm5pdHVyLS1leHBhbmQnKSkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdidG4tZnVybml0dXItLWV4cGFuZCcpO1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9ICfQodCy0LXRgNC90YPRgtGMJztcbiAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mdXJuaXR1ci1lbGVtJykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdjYXRhbG9nX19oaWRlJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGZ1bGxMZW5ndGggPSBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICB2YXIgcmFuZ2VMZW5ndGggPSBmdWxsTGVuZ3RoIC0gbGltaXRRdWFudGl0eTtcbiAgICAgICAgdmFyIGFyciA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKTtcbiAgICAgICAgdmFyIGhpZGRlbkl0ZW1zID0gYXJyLnNsaWNlKGZ1bGxMZW5ndGggLSByYW5nZUxlbmd0aCwgZnVsbExlbmd0aCAtIDEpO1xuICAgICAgICBoaWRkZW5JdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NhdGFsb2dfX2hpZGUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1mdXJuaXR1ci0tZXhwYW5kJyk7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gXCIrIFxcdTA0MTVcXHUwNDQ5XFx1MDQzNSBcIi5jb25jYXQoaGlkZGVuSXRlbXMubGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHZhciBsaXN00KFvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbG9yJyk7XG4gIGxpc3TQoW9sb3IuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoID4gbGltaXRRdWFudGl0eSkge1xuICAgICAgdmFyIGZ1bGxMZW5ndGggPSBlbC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICB2YXIgcmFuZ2VMZW5ndGggPSBmdWxsTGVuZ3RoIC0gbGltaXRRdWFudGl0eTtcbiAgICAgIHZhciBhcnIgPSBBcnJheS5mcm9tKGVsLmNoaWxkcmVuKTtcbiAgICAgIHZhciBoaWRkZW5JdGVtcyA9IGFyci5zbGljZShmdWxsTGVuZ3RoIC0gcmFuZ2VMZW5ndGgsIGZ1bGxMZW5ndGgpO1xuICAgICAgaGlkZGVuSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2F0YWxvZ19faGlkZScpO1xuICAgICAgfSk7XG4gICAgICBlbC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIFwiXFxuICAgICAgICA8YnV0dG9uIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJjYXRhbG9nX19maWx0ci1jYXRlZ29yeS1idG4gYnRuLWNvbG9yXFxcIj4rIFxcdTA0MTVcXHUwNDQ5XFx1MDQzNSBcIi5jb25jYXQoaGlkZGVuSXRlbXMubGVuZ3RoLCBcIjwvYnV0dG9uPlxcbiAgICAgIFwiKSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGNhdGFsb2dNb3JlQ29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWNvbG9yJyk7XG4gIGNhdGFsb2dNb3JlQ29sb3IuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgcGFyZW50ID0gZS5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJy5jb2xvcicpO1xuXG4gICAgICBpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLWNvbG9yLS1leHBhbmQnKSkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdidG4tY29sb3ItLWV4cGFuZCcpO1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9ICfQodCy0LXRgNC90YPRgtGMJztcbiAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xvci1lbGVtJykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdjYXRhbG9nX19oaWRlJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGZ1bGxMZW5ndGggPSBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICB2YXIgcmFuZ2VMZW5ndGggPSBmdWxsTGVuZ3RoIC0gbGltaXRRdWFudGl0eTtcbiAgICAgICAgdmFyIGFyciA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKTtcbiAgICAgICAgdmFyIGhpZGRlbkl0ZW1zID0gYXJyLnNsaWNlKGZ1bGxMZW5ndGggLSByYW5nZUxlbmd0aCwgZnVsbExlbmd0aCAtIDEpO1xuICAgICAgICBoaWRkZW5JdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NhdGFsb2dfX2hpZGUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1jb2xvci0tZXhwYW5kJyk7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gXCIrIFxcdTA0MTVcXHUwNDQ5XFx1MDQzNSBcIi5jb25jYXQoaGlkZGVuSXRlbXMubGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmNvbnNvbGUubG9nKCcxM19maWx0ZXInKTsgLy9wYWdpbmF0aW9uXG5cbnZhciBwYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZ19fdGFiLWJ0bicpO1xuXG5pZiAocGFnKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nX190YWItYnRuJykuZm9yRWFjaChmdW5jdGlvbiAoc3RlcHIpIHtcbiAgICBzdGVwci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIHBhdGggPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGF0aDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nX19wcm9kdWN0LWxpc3QnKS5mb3JFYWNoKGZ1bmN0aW9uIChzdGVwQ29udGVudCkge1xuICAgICAgICBzdGVwQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdjYXRhbG9nX19wcm9kdWN0LWFrdGl2ZScpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFyZ2V0PVxcXCJcIi5jb25jYXQocGF0aCwgXCJcXFwiXVwiKSkuY2xhc3NMaXN0LmFkZCgnY2F0YWxvZ19fcHJvZHVjdC1ha3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nX190YWItYnRuJykuZm9yRWFjaChmdW5jdGlvbiAoU3RlcEJ0bikge1xuICAgICAgICBTdGVwQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2NhdGFsb2dfX3RhYi1idG5fYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnY2F0YWxvZ19fdGFiLWJ0bl9hY3RpdmUnKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmNvbnNvbGUubG9nKCcxNCcpOyAvL3ZhbGlkYXRpb25cblxudmFyIHZhbGlkYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tZV9fZm9ybScpO1xuXG5pZiAodmFsaWRhdGlvbikge1xuICBuZXcgSnVzdFZhbGlkYXRlKCcud2VsY29tZV9fZm9ybScsIHtcbiAgICBydWxlczoge1xuICAgICAgbmFtZToge1xuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgbWluTGVuZ3RoOiAzLFxuICAgICAgICBtYXhMZW5ndGg6IDMwXG4gICAgICB9LFxuICAgICAgdGVsOiB7XG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBtaW5MZW5ndGg6IDExLFxuICAgICAgICBwaG9uZTogMTExIC0gMjIyIC0gMzMzM1xuICAgICAgfSxcbiAgICAgIGVtYWlsOiB7XG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBlbWFpbDogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgbWVzc2FnZXM6IHtcbiAgICAgIG5hbWU6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcbiAgICAgIHRlbDogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxuICAgICAgZW1haWw6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJ1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnNvbGUubG9nKCcxNScpOyJdLCJmaWxlIjoiYXBwLmpzIn0=
