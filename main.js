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
    var t1 = document.createTextNode('Simple web site with some advanced css properties,web site is developed respecting BEM naming convention, everything on this site is done with just pure HTML and SCSS/CSS, without JS and this web site is mobile-friendly. Some of advanced properties used in this web site : clip-path, background-video,box-decoration-break, animations, @keyframes, linear-gradient etc... ');      // Create a text node
    para1.appendChild(t1); 

    var para2 = document.createElement("P");   
    para2.classList.add("mystylep");                    // Create a <p> element
    var t2 = document.createTextNode('Single page web site made of HTML and CSS, this was my first web site built with Code Camp.');      // Create a text node
    para2.appendChild(t2); 

    var para3 = document.createElement("P");  
    para3.classList.add("mystylep");                    // Create a <p> element
    var t3 = document.createTextNode('Ruby on Rails web app built with regular MVC architectural pattern. This app represents functionality and connections of database(tables) through models.Main goal why students develop this app is to learn how to create models without the use of the rails generate command and to learn how to style rails apps using bootstrap. Full user functionalities such as categories, authentication login (Devise), gravatar pictures, RESTful routes for posts and etc. Admin login is also implemented to have full control on features for the site. If you want to see whole functionality of this app login as admin user with username (boban0092@gmail.com), password (4268559) and enjoy .');      // Create a text node
    para3.appendChild(t3); 

    var para4 = document.createElement("P");   
    para4.classList.add("mystylep");                    // Create a <p> element
    var t4 = document.createTextNode('Complete banking web app, built only with HTML, CSS and JS, app consist of functionality for users to add new account through forms, where users submits theirs new account. Random Id is given to every account and every user\'s account is remembered in local storage. Users also have options for editing and deleting theirs banking account. ');      // Create a text node
    para4.appendChild(t4);

    var para5 = document.createElement("P");   
    para5.classList.add("mystylep");                    // Create a <p> element
    var t5 = document.createTextNode("Simple one page web site that represents implementation of some modern css porperties and techniques of SCSS,layout design is based on CSS GRID system. Web site is developed respecting BEM naming convention, it is made of HTML and SCSS/CSS. ");      // Create a text node
    para5.appendChild(t5);

    var para6 = document.createElement("P");   
    para6.classList.add("mystylep");                    // Create a <p> element
    var t6 = document.createTextNode('Simple  responsive landing page that represents implementation of some modern css poroperties and techniques of SCSS, web site is developed respecting BEM naming convention.This is a fictional booking app for hotel, flight, car rental and tour all in one platform.  ');      // Create a text node
    para6.appendChild(t6);

    var para7 = document.createElement("P");   
    para7.classList.add("mystylep");                    // Create a <p> element
    var t7 = document.createTextNode('Web site is built in coordination with "Krojaceva skola" from Belgrade, it was some kind of course where you are building comercial web site from scratch. It is responsive and is made of HTML, SCSS/CSS  and JS . ');      // Create a text node
    para7.appendChild(t7);

    var para8 = document.createElement("P");   
    para8.classList.add("mystylep");                    // Create a <p> element
    var t8 = document.createTextNode('This is Ruby on Rails web app for finance (stock) tracking. Users can track stocks, upto 10 per user, profile page will display all the current stock prices. Users can search for stock symbols using search bar (here is the list of all stock symbols: https://iextrading.com/trading/eligible-symbols/). Users also can choose to add a stock from results of search to their portfolio if they want, functionality for adding or look for a friends and theirs stock list is also implemented in this app. There is opportunity for viewing the portfolio stocks of yours friends, what they are tracking and theirs investing ideas. Authentication system is implemented provided by Devise, and app is mobile-friendly.If you want to see whole functionality log in as: username: boban0092@gmail.com, password:4268559 and enjoy.');      // Create a text node
    para8.appendChild(t8);

    var para9 = document.createElement("P");   
    para9.classList.add("mystylep");                    // Create a <p> element
    var t9 = document.createTextNode('Wepp app built with regular MVC architectural pattern. App is for tourist agency and allow us to book our desire destinations.Backend of app is done with Ruby on Rails and Frontend is done with React with Redux. In application there are many different implementations like relational database system with many to many association, authentication system generated with gem Devise, layout (views), is compose of many different React with Redux components.App is still in development phase, my end goal is to make app with all functionality like real booking app, to add features such as adding comments, reservations, mail sender, payment system etc. ');      // Create a text node
    para9.appendChild(t9);

    var para10 = document.createElement("P");   
    para10.classList.add("mystylep");                    // Create a <p> element
    var t10 = document.createTextNode('This is hello React web app, it is built of React components. It represents passing props between components and modifying component\'s state in real time securing dynamic behaviour of our app, this project was bootstrapped by command create-react-app.It is a basic ToDo list react application which uses many necessary tools and techniques provided by react js library,application is wrapped and proccessed by a Webapck.SCSS is used for styling the front-end layout with some Flex-box use. Media queries are used to make it mobile/tablet compatible. Local storage is used for storage of items.');      // Create a text node
    para10.appendChild(t10);

    var para11 = document.createElement("P");   
    para11.classList.add("mystylep");                    // Create a <p> element
    var t11 = document.createTextNode('This app is made of React with Redux architecture, app allows users to add new expenses. Data manipulation is enabled through CRUD as four basic functions of persistent storage. Users have opportunity to edit or delete their expenses , app owns functionality for adding expenses with a date picker, ability to sort expenses by amount or creation date, search feature and opportunity for users to edit or delete theirs expenses. In this app Firebase Realtime Database is implemented to store data as JSON, and to establish synchronization in realtime for every connected user. App owns ability to authenticate users by integrating with federated identity providers. The Firebase Authentication SDK provides methods that allow users to sign in with their Google account. ');      // Create a text node
    para11.appendChild(t11);

    var para12 = document.createElement("P");   
    para12.classList.add("mystylep");                    // Create a <p> element
    var t12 = document.createTextNode('Complete web site made for winery, its done by PSD to HTML workflow. This website is built using HTML, SCSS and JS, web site is also mobile-friendly (responsive) .');      // Create a text node
    para12.appendChild(t12);

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
   

 $('.big-button').after("#shadow:active");

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
            info.append("<button id=dugme1 class=big-button data-action=submit>Launch Website</button>");

        });



        holder.append(copy);
    });
    info.on("click", "#dugme1", function(){
    console.log("radi gudme1")
    window.open(
  "green.html",
  '_blank' // <- This is what makes it open in a new window.
);
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
             info.append("<button id=dugme2 class=big-button data-action=submit>Launch Website</button>");
        });



        holder.append(copy);
    });
    info.on("click", "#dugme2", function(){
    console.log("radi gudme2")
    //window.location.href = "trib.html";
    window.open(
  "trib.html",
  '_blank' // <- This is what makes it open in a new window.
);
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
             info.append("<button id=dugme3 class=big-button data-action=submit>Launch Website</button>");
        });



        holder.append(copy);
    });
    info.on("click", "#dugme3", function(){
    console.log("radi gudme3")
    //window.location.href = "https://alphablogboban.herokuapp.com";
     window.open(
  "https://alphablogboban.herokuapp.com",
  '_blank' // <- This is what makes it open in a new window.
);
    
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
             info.append("<button id=dugme4 class=big-button data-action=submit>Launch Website</button>");
        });



        holder.append(copy);
    });
    info.on("click", "#dugme4", function(){
    console.log("radi gudme4")
    //window.location.href = "banking.html";
    window.open(
  "banking.html",
  '_blank' // <- This is what makes it open in a new window.
);
    
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
            info.append("<button id=dugme5 class=big-button data-action=submit>Launch Website</button>");
        });



        holder.append(copy);
    });
    info.on("click", "#dugme5", function(){
    console.log("radi gudme5")
    //window.location.href = "houses.html";
    window.open(
  "houses.html",
  '_blank' // <- This is what makes it open in a new window.
);
    
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
             info.append("<button id=dugme6 class=big-button data-action=submit>Launch Website</button>");
        });

     holder.append(copy);
    });
    info.on("click", "#dugme6", function(){
    console.log("radi gudme6")
    //window.location.href = "booking.html";
     window.open(
  "booking.html",
  '_blank' // <- This is what makes it open in a new window.
);
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
             info.append("<button id=dugme7 class=big-button data-action=submit>Launch Website</button>");
        });



        holder.append(copy);
    });
    info.on("click", "#dugme7", function(){
    console.log("radi gudme7")
    //window.location.href = "shop.html";
    window.open(
  "shop.html",
  '_blank' // <- This is what makes it open in a new window.
);
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
             info.append("<button id=dugme8 class=big-button data-action=submit>Launch Website</button>");
        });



        holder.append(copy);
    });
    info.on("click", "#dugme8", function(){
    console.log("radi gudme8")
    //window.location.href = "http://financetracker.herokuapp.com/";
    window.open(
  "https://inistocktracker.herokuapp.com",
  '_blank' // <- This is what makes it open in a new window.
);
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
             info.append("<button id=dugme9 class=big-button data-action=submit>Launch Website</button>");
        });



        holder.append(copy);
    });
    info.on("click", "#dugme9", function(){
    console.log("radi gudme9")
    //window.location.href = "http://booking-families.herokuapp.com/#/";
    window.open(
  "http://booking-families.herokuapp.com/#/",
  '_blank' // <- This is what makes it open in a new window.
);
    
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
             info.append("<button id=dugme10 class=big-button data-action=submit>Launch Website</button>");
        });



        holder.append(copy);
    });
    info.on("click", "#dugme10", function(){
    console.log("radi gudme10")
    //window.location.href = "http://indecisionapp.herokuapp.com/";
    window.open(
  "http://indecisionapp.herokuapp.com/",
  '_blank' // <- This is what makes it open in a new window.
);
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
             info.append("<button id=dugme11 class=big-button data-action=submit>Launch Website</button>");
        });



        holder.append(copy);
    });
    info.on("click", "#dugme11", function(){
    console.log("radi gudme11")
    //window.location.href = "http://expensify.herokuapp.com";
     window.open(
  "https://cc-expensify.herokuapp.com/",
  '_blank' // <- This is what makes it open in a new window.
);
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
             info.append("<button id=dugme12 class=big-button data-action=submit>Launch Website</button>");
        });



        holder.append(copy);
    });

info.on("click", "#dugme12", function(){
    console.log("radi gudme12")
    //window.location.href = "http://bobanjankovicwinary.herokuapp.com/";
     window.open(
  "http://bobanjankovicwinary.herokuapp.com/",
  '_blank' // <- This is what makes it open in a new window.
);
    
});


});


 ///
  // var a = document.createElement('a');
///var linkText = document.createTextNode("my title text");
//a.appendChild(linkText);
//a.title = "my title text";
//a.href = "http://example.com";
//document.body.appendChild(a);
