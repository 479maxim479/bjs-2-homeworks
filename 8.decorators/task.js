// function cachingDecoratorNew(func) {
//   let cache = [];
//   function wrapper(...args) {
//     let hash = args.join(','); // получаем правильный хэш
//     let objectInCache = cache.find(cacheItem => cacheItem.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
//     if (objectInCache) {
//       console.log('Из кэша: ' + objectInCache.value);
//       return 'Из кэша: ' + objectInCache.value;
//     }
//     let value = func.call(this, ...args);
//     console.log('Вычисляем: ' + value);
//     cache.push({ hash, value }); // добавляем элемент с правильной структурой
//     if (cache.length > 5) {
//       cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
//     }
//     return 'Вычисляем: ' + value;
//   }
//   return wrapper;
// }

function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find(item => item.hash === hash);
    let value = func.call(this, ...args);
    if (objectInCache) {
      console.log('Из кэша: ' + objectInCache.value);
      return 'Из кэша: ' + objectInCache.value;
    }
    console.log('Вычисляем: ' + value);
    cache.push({ hash, value }); // добавляем элемент с правильной структурой
    if (cache.length > 5) {
      cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
    }
    return 'Вычисляем: ' + value;
  }
  return wrapper;
}




function debounceDecoratorNew(func, ms) {
  let timeout = null;
  function wrapper(...args) {
    wrapper.allCount++;
    if (timeout) {
      wrapper.count++;
      func.call(this, ...rest);
    }
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      wrapper.count++;
      func.call(this, ...rest);
    }, ms);
  };
  wrapper.count = 0;
  wrapper.allCount = 0;;
  return wrapper;
}