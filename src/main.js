const div = dom.find('#test>.red')[0];
console.log(div);
dom.style(div, 'color', 'red');

const divList = dom.find('.red')[0];
dom.each(divList, (n) => console.log(n));
