'use strict';

(() => {
  const body = document.querySelector('body');

  // 判斷bg有無active這個class
  const toggleActive = function (el) {
    !el.classList.contains('active')
      ? el.classList.add('active')
      : el.classList.remove('active');
  };

  toggleActive(body);

  setInterval(() => toggleActive(body), 2000);
})();
