$(document).ready(function () {

    var img1 = $('.img1');
    var img2 = $('.img2');
    var img3 = $('.img3');
    var img4 = $('.img4');
    var img5 = $('.img5');
    var img6 = $('.img6');
    var img7 = $('.img7');
    var img8 = $('.img8');
    var img9 = $('.img9');
    var img10 = $('.img10');
    var img11 = $('.img11');
    var img12 = $('.img12');

    var holder = $('#holder');
    var info = $('#info');
    var img1info1 = '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 ';
    var img1info2 = '2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fdfd ';
    var img1info3 = '333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333 dfdfd ';
    var img1info4 = 'lo4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444 ';
    var img1info5 = 'lo555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555dfdfd ';
    var img1info6 = 'lo6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f dfdfd ';
    var img1info7 = 'lo7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fdfd ';
    var img1info8 = 'l88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fd ';
    var img1info9 = 'l9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999 ';
    var img1info10 = '10101010101010101010101010101010101010101010101000000000000000000000000000000000000001010101010101 ';
    var img1info11 = 'l11 111 111 111 11 1 11 1 1 1 1 1 11 1 1 1 11 1 1 1 1 1 111 111 111 11 111 11 111 11 111 111 11  ';
    var img1info12 = '1212121212121212121212121212121212121212121221212121212121212121212121212fd dfdfdfdf dfdfd ';

    img1.on('click', function () {
        info.html('');
        holder.html('');
        var self = $(this);
        var copy = self.clone();
        copy.css({
            position: 'absolute',
            width: self.width(),
            height: self.height(),
            top: self.offset().top,
            left: self.offset().left

        });
        copy.animate({
            top: holder.offset().top,
            left: holder.offset().left,
            width: holder.width(),
            height: holder.height()
        }, 1000, function () {
            info.append(img1info1);
        });



        holder.append(copy);
    });
    img2.on('click', function () {
        info.html('');
        holder.html('');
        var self = $(this);
        var copy = self.clone();
        copy.css({
            position: 'absolute',
            width: self.width(),
            height: self.height(),
            top: self.offset().top,
            left: self.offset().left

        });
        copy.animate({
            top: holder.offset().top,
            left: holder.offset().left,
            width: holder.width(),
            height: holder.height()
        }, 1000, function () {
            info.append(img1info2);
        });



        holder.append(copy);
    });
    img3.on('click', function () {
        info.html('');
        holder.html('');
        var self = $(this);
        var copy = self.clone();
        copy.css({
            position: 'absolute',
            width: self.width(),
            height: self.height(),
            top: self.offset().top,
            left: self.offset().left

        });
        copy.animate({
            top: holder.offset().top,
            left: holder.offset().left,
            width: holder.width(),
            height: holder.height()
        }, 1000, function () {
            info.append(img1info3);
        });



        holder.append(copy);
    });
    img4.on('click', function () {
        info.html('');
        holder.html('');
        var self = $(this);
        var copy = self.clone();
        copy.css({
            position: 'absolute',
            width: self.width(),
            height: self.height(),
            top: self.offset().top,
            left: self.offset().left

        });
        copy.animate({
            top: holder.offset().top,
            left: holder.offset().left,
            width: holder.width(),
            height: holder.height()
        }, 1000, function () {
            info.append(img1info4);
        });



        holder.append(copy);
    });
    img5.on('click', function () {
        info.html('');
        holder.html('');
        var self = $(this);
        var copy = self.clone();
        copy.css({
            position: 'absolute',
            width: self.width(),
            height: self.height(),
            top: self.offset().top,
            left: self.offset().left

        });
        copy.animate({
            top: holder.offset().top,
            left: holder.offset().left,
            width: holder.width(),
            height: holder.height()
        }, 1000, function () {
            info.append(img1info5);
        });



        holder.append(copy);
    });
    img6.on('click', function () {
        info.html('');
        holder.html('');
        var self = $(this);
        var copy = self.clone();
        copy.css({
            position: 'absolute',
            width: self.width(),
            height: self.height(),
            top: self.offset().top,
            left: self.offset().left

        });
        copy.animate({
            top: holder.offset().top,
            left: holder.offset().left,
            width: holder.width(),
            height: holder.height()
        }, 1000, function () {
            info.append(img1info6);
        });



        holder.append(copy);
    });
    img7.on('click', function () {
        info.html('');
        holder.html('');
        var self = $(this);
        var copy = self.clone();
        copy.css({
            position: 'absolute',
            width: self.width(),
            height: self.height(),
            top: self.offset().top,
            left: self.offset().left

        });
        copy.animate({
            top: holder.offset().top,
            left: holder.offset().left,
            width: holder.width(),
            height: holder.height()
        }, 1000, function () {
            info.append(img1info7);
        });



        holder.append(copy);
    });
    img8.on('click', function () {
        info.html('');
        holder.html('');
        var self = $(this);
        var copy = self.clone();
        copy.css({
            position: 'absolute',
            width: self.width(),
            height: self.height(),
            top: self.offset().top,
            left: self.offset().left

        });
        copy.animate({
            top: holder.offset().top,
            left: holder.offset().left,
            width: holder.width(),
            height: holder.height()
        }, 1000, function () {
            info.append(img1info8);
        });
        img9.on('click', function () {
        info.html('');
        holder.html('');
        var self = $(this);
        var copy = self.clone();
        copy.css({
            position: 'absolute',
            width: self.width(),
            height: self.height(),
            top: self.offset().top,
            left: self.offset().left

        });
        copy.animate({
            top: holder.offset().top,
            left: holder.offset().left,
            width: holder.width(),
            height: holder.height()
        }, 1000, function () {
            info.append(img1info9);
        });
        img10.on('click', function () {
        info.html('');
        holder.html('');
        var self = $(this);
        var copy = self.clone();
        copy.css({
            position: 'absolute',
            width: self.width(),
            height: self.height(),
            top: self.offset().top,
            left: self.offset().left

        });
        copy.animate({
            top: holder.offset().top,
            left: holder.offset().left,
            width: holder.width(),
            height: holder.height()
        }, 1000, function () {
            info.append(img1info10);
        });
        img11.on('click', function () {
        info.html('');
        holder.html('');
        var self = $(this);
        var copy = self.clone();
        copy.css({
            position: 'absolute',
            width: self.width(),
            height: self.height(),
            top: self.offset().top,
            left: self.offset().left

        });
        copy.animate({
            top: holder.offset().top,
            left: holder.offset().left,
            width: holder.width(),
            height: holder.height()
        }, 1000, function () {
            info.append(img1info11);
        });
        img12.on('click', function () {
        info.html('');
        holder.html('');
        var self = $(this);
        var copy = self.clone();
        copy.css({
            position: 'absolute',
            width: self.width(),
            height: self.height(),
            top: self.offset().top,
            left: self.offset().left

        });
        copy.animate({
            top: holder.offset().top,
            left: holder.offset().left,
            width: holder.width(),
            height: holder.height()
        }, 1000, function () {
            info.append(img1info12);
        });



        holder.append(copy);
    });




        holder.append(copy);
    });




        holder.append(copy);
    });




        holder.append(copy);
    });




        holder.append(copy);
    });










});
