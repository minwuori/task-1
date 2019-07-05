var bemxjst = require('bem-xjst');

// bem-xjst содержит два движка: BEMHTML и BEMTREE (начиная с v5.0.0)
// Выбираем движок BEMHTML
var bemhtml = bemxjst.bemhtml;

// Добавляем шаблоны с помощью метода compile
var templates = bemhtml.compile(function() {
    block('text').tag()('span');
});

// Добавляем данные в формате BEMJSON
var bemjson = [
    { block: 'text', content: 'Первый' },
    { block: 'text', content: 'Второй' }
];

// Применяем шаблоны
var html = templates.apply(bemjson);