export const flattenRoutes = (routes) => {
  let _routes = [];
  if(!routes) return _routes;
  routes.forEach((route, i)=>{
    _routes.push(route)
    if(route.routes){
      _routes.push(...route.routes)
    }
  })
  return _routes;
}

export const addCommas = function(nStr){
  nStr += '';
  var x = nStr.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

export const emptyArray = (length) => {
  console.log(length)
  return Array.apply(null, new Array(length)).fill(0)
}


export const nFormatter = function(num) {
  isNegative = false
  if (num < 0) {
    isNegative = true
  }
  num = Math.abs(num)
  
  //percent
  var toPercent = (formattedNumber) => {
    if(formattedNumber < 1 && formattedNumber > 0) {
      formattedNumber = formattedNumber * 100;
    }
    formattedNumber = Math.round(formattedNumber * 100) / 100;
    return formattedNumber;
  }
  
  if (num >= 1000000000) {
    formattedNumber = (num / 1000000000).toFixed(1).replace(/\.0$/, '');
    formattedNumber = toPercent(formattedNumber) + 'G';
  } else if (num >= 1000000) {
    formattedNumber =  (num / 1000000).toFixed(1).replace(/\.0$/, '');
    formattedNumber = toPercent(formattedNumber) + 'MM';
  } else  if (num >= 1000) {
    formattedNumber =  (num / 1000).toFixed(1).replace(/\.0$/, '');
    formattedNumber = toPercent(formattedNumber) + 'K';
  } else {
    formattedNumber = num;
    formattedNumber = toPercent(formattedNumber);
  }
  if(isNegative) { formattedNumber = '-' + formattedNumber }
  
  return formattedNumber;
}

export const calculatePercentage = (oldFigure, newFigure) => {
  percentChange = ((oldFigure - newFigure) / oldFigure) * 100;
  return percentChange*-1;
}


export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
}

export function average(arr) {
  const sum = function(arr) {
    return _.reduce(arr, function(memo, num) { return memo + num}, 0);
  }
  return sum(arr) / arr.length;
}

export function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
