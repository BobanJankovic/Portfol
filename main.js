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
    var img1info11 = 'l11 111 111 111 11 1 11 1 1 1 1 1 11 1 1 1 11 1 1 1 1 1 111 111 111 11 111 11 111 11 ';
    var img1info12 = 'lorem ipsum asdasf dfsdfsd sdfsdfsdf sdfsdsdfsd sdfsdfsdf sdfsdfsdf sdfdfdf dfdfd dfdfdfdf dfdfd ';
    //var btn = document.createElement("BUTTON");        // Create a <button> element
    //var t = document.createTextNode("CLICK ME");       // Create a text node
    //btn.appendChild(t); 
    //btn.className = "dugme";

    //var klik = $(".dugme");
   


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
            info.append("<button id=dugme1 class=dugme>Click to see Web site</button>");

        });



        holder.append(copy);
    });
    info.on("click", "#dugme1", function(){
    console.log("radi gudme1")
    window.location.href = "natours.html";
    
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
             info.append("<button id=dugme2 class=dugme>Click to see Web site</button>");
        });



        holder.append(copy);
    });
    info.on("click", "#dugme2", function(){
    console.log("radi gudme2")
    window.location.href = "trib.html";
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
             info.append("<button id=dugme3 class=dugme>Click to see Web site</button>");
        });



        holder.append(copy);
    });
    info.on("click", "#dugme3", function(){
    console.log("radi gudme3")
    window.location.href = "https://alphablogboban.herokuapp.com";
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
             info.append("<button id=dugme4 class=dugme>Click to see Web site</button>");
        });



        holder.append(copy);
    });
    info.on("click", "#dugme4", function(){
    console.log("radi gudme4")
    window.location.href = "banking.html";
    
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
             info.append("<button id=dugme5 class=dugme>Click to see Web site</button>");
        });



        holder.append(copy);
    });
    info.on("click", "#dugme5", function(){
    console.log("radi gudme5")
    window.location.href = "nexter.html";
    
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
             info.append("<button id=dugme6 class=dugme>Click to see Web site</button>");
        });



        holder.append(copy);
    });
    info.on("click", "#dugme6", function(){
    console.log("radi gudme6")
    window.location.href = "trillo.html";
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
             info.append("<button id=dugme7 class=dugme>Click to see Web site</button>");
        });



        holder.append(copy);
    });
    info.on("click", "#dugme7", function(){
    console.log("radi gudme7")
    window.location.href = "shop.html";
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
             info.append("<button id=dugme8 class=dugme>Click to see Web site</button>");
        });



        holder.append(copy);
    });
    info.on("click", "#dugme8", function(){
    console.log("radi gudme8")
    window.location.href = "http://financetracker.herokuapp.com/";
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
            info.append("<button id=dugme9 class=dugme>Click to see Web site</button>");
        });



        holder.append(copy);
    });
    info.on("click", "#dugme9", function(){
    console.log("radi gudme9")
    window.location.href = "http://booking-families.herokuapp.com/#/";
    
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
            info.append("<button id=dugme10 class=dugme>Click to see Web site</button>");
        });



        holder.append(copy);
    });
    info.on("click", "#dugme10", function(){
    console.log("radi gudme10")
    window.location.href = "http://indecisionapp.herokuapp.com/";
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
            info.append("<button id=dugme11 class=dugme>Click to see Web site</button>");
        });



        holder.append(copy);
    });
    info.on("click", "#dugme11", function(){
    console.log("radi gudme11")
    window.location.href = "http://expensify.herokuapp.com";
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
            info.append("<button id=dugme12 class=dugme>Click to see Web site</button>");
        });



        holder.append(copy);
    });

info.on("click", "#dugme12", function(){
    console.log("radi gudme12")
    window.location.href = "http://bobanjankovicwinary.herokuapp.com/";
    
});


});


 ///
  // var a = document.createElement('a');
///var linkText = document.createTextNode("my title text");
//a.appendChild(linkText);
//a.title = "my title text";
//a.href = "http://example.com";
//document.body.appendChild(a);
