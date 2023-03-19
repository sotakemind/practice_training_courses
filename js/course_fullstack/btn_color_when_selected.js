    onload = function () {

        // slider

        function slider() {
            var grounds = ['img/dev/dev-2.jpg',
                'img/dev/dev-3.jpg'];
            var t = 3; // время показа очередного фонового изображения в секундах

            setInterval (function ()
            {
                var p = grounds.shift ();
                document.getElementById('header').style.backgroundImage = 'url(' + p + ')';
                grounds.push (p);
            }, t * 1000);
        }

        slider();

        console.log(x);

    }


