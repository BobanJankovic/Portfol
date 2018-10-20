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
//------------------------------------------------------
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


    var para1 = document.createElement("P");   
    para1.classList.add("mystylep");                    // Create a <p> element
    var t1 = document.createTextNode('Simple web site with some advanced css properties, everything on this site is done with just pure HTML and CSS, without JS.Some of advanced properties used in this web site: ');      // Create a text node
    para.appendChild(t1); 
    var para2 = document.createElement("P");   
    para2.classList.add("mystylep");                    // Create a <p> element
    var t2 = document.createTextNode('Simple web site with some advanced css properties, everything on this site is done with just pure HTML and CSS, without JS.Some of advanced properties used in this web site: ');      // Create a text node
    para.appendChild(t2); 
    var para3 = document.createElement("P");   
    para3.classList.add("mystylep");                    // Create a <p> element
    var t3 = document.createTextNode('Simple web site with some advanced css properties, everything on this site is done with just pure HTML and CSS, without JS.Some of advanced properties used in this web site: ');      // Create a text node
    para.appendChild(t3); 
     var para4 = document.createElement("P");   
    para4.classList.add("mystylep");                    // Create a <p> element
    var t4 = document.createTextNode('Simple web site with some advanced css properties, everything on this site is done with just pure HTML and CSS, without JS.Some of advanced properties used in this web site: ');      // Create a text node
    para.appendChild(t4); 
    var para5 = document.createElement("P");   
    para5.classList.add("mystylep");                    // Create a <p> element
    var t5 = document.createTextNode('Simple web site with some advanced css properties, everything on this site is done with just pure HTML and CSS, without JS.Some of advanced properties used in this web site: ');      // Create a text node
    para.appendChild(t5);
    var para6 = document.createElement("P");   
    para6.classList.add("mystylep");                    // Create a <p> element
    var t6 = document.createTextNode('Simple web site with some advanced css properties, everything on this site is done with just pure HTML and CSS, without JS.Some of advanced properties used in this web site: ');      // Create a text node
    para.appendChild(t6);
    var para7 = document.createElement("P");   
    para7.classList.add("mystylep");                    // Create a <p> element
    var t7 = document.createTextNode('Simple web site with some advanced css properties, everything on this site is done with just pure HTML and CSS, without JS.Some of advanced properties used in this web site: ');      // Create a text node
    para.appendChild(t7);
    var para8 = document.createElement("P");   
    para8.classList.add("mystylep");                    // Create a <p> element
    var t8 = document.createTextNode('Simple web site with some advanced css properties, everything on this site is done with just pure HTML and CSS, without JS.Some of advanced properties used in this web site: ');      // Create a text node
    para.appendChild(t8);
    var para9 = document.createElement("P");   
    para9.classList.add("mystylep");                    // Create a <p> element
    var t9 = document.createTextNode('Simple web site with some advanced css properties, everything on this site is done with just pure HTML and CSS, without JS.Some of advanced properties used in this web site: ');      // Create a text node
    para.appendChild(t9);
    var para10 = document.createElement("P");   
    para10.classList.add("mystylep");                    // Create a <p> element
    var t10 = document.createTextNode('Simple web site with some advanced css properties, everything on this site is done with just pure HTML and CSS, without JS.Some of advanced properties used in this web site: ');      // Create a text node
    para.appendChild(t10);
    var para11 = document.createElement("P");   
    para11.classList.add("mystylep");                    // Create a <p> element
    var t11 = document.createTextNode('Simple web site with some advanced css properties, everything on this site is done with just pure HTML and CSS, without JS.Some of advanced properties used in this web site: ');      // Create a text node
    para.appendChild(t11);
    var para12 = document.createElement("P");   
    para12.classList.add("mystylep");                    // Create a <p> element
    var t12 = document.createTextNode('Simple web site with some advanced css properties, everything on this site is done with just pure HTML and CSS, without JS.Some of advanced properties used in this web site: ');      // Create a text node
    para.appendChild(t12);
    var img1info1 = para1;
    var img1info2 = para2;
    var img1info3 = para3;
    var img1info4 = para4;
    var img1info5 = para5;
    var img1info6 = para6;
    var img1info7 = para7;
    var img1info8 = para8;
    var img1info9 = para9;
    var img1info10 = para10;
    var img1info11 = para11;
    var img1info12 = para12;
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
