onload = function ()
{
    var grounds = ['img/bg_alisa2.jpg',
        'img/bg_alisa3.jpg',
        'img/bg_alisa.jpg'];
    var t = 4; // время показа очередного фонового изображения в секундах

    setInterval (function ()
    {
        var p = grounds.shift ();
        document.getElementById('header').style.backgroundImage = 'url(' + p + ')';
        grounds.push (p);
    }, t * 1000);

}