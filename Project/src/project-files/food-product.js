 //Code for tab functionality
 $(document).ready(function () {
     $('ul.tabs li').click(function () {
         var tab_id = $(this).attr('data-tab');
         $('ul.tabs li').removeClass('current');
         $('.tab-content').removeClass('current');
         $(this).addClass('current');
         $("#" + tab_id).addClass('current');
     })
 })


 Handlebars.registerHelper('if-equals', function (listItem, categoryID, options) {
     if (listItem.categoryID === categoryID) {
         return options.fn(this);
     }
 });

 var context = {
     list: [{
             categoryID: '1',
             foodImage: 'Images/FoodImages/1.jpg',
             foodName: 'yogeshPatta Gobi Mattar, Baked Lauki.',
             foodPrice: '180',
             foodOfferPrice: '99'
                },
         {
             categoryID: '1',
             foodImage: 'Images/FoodImages/1.jpg',
             foodName: 'Patta Gobi Mattar, Baked Lauki.',
             foodPrice: '180',
             foodOfferPrice: '99'
                },
         {
             categoryID: '1',
             foodImage: 'Images/FoodImages/1.jpg',
             foodName: 'Patta Gobi Mattar, Baked Lauki.',
             foodPrice: '180',
             foodOfferPrice: '99'
                },
         {
             categoryID: '1',
             foodImage: 'Images/FoodImages/1.jpg',
             foodName: 'Patta Gobi Mattar, Baked Lauki.',
             foodPrice: '180',
             foodOfferPrice: '99'
                },
         {
             categoryID: '1',
             foodImage: 'Images/FoodImages/1.jpg',
             foodName: 'Patta Gobi Mattar, Baked Lauki.',
             foodPrice: '180',
             foodOfferPrice: '99'
                },
         {
             categoryID: '1',
             foodImage: 'Images/FoodImages/1.jpg',
             foodName: 'Patta Gobi Mattar, Baked Lauki.',
             foodPrice: '180',
             foodOfferPrice: '99'
                },
         {
             categoryID: '2',
             foodImage: 'Images/FoodImages/1.jpg',
             foodName: 'Patta Gobi Mattar, Baked Lauki.',
             foodPrice: '180',
             foodOfferPrice: '99'
                },
         {
             categoryID: '2',
             foodImage: 'Images/FoodImages/1.jpg',
             foodName: 'Patta Gobi Mattar, Baked Lauki.',
             foodPrice: '180',
             foodOfferPrice: '99'
                },
         {
             categoryID: '3',
             foodImage: 'Images/FoodImages/1.jpg',
             foodName: 'Patta Gobi Mattar, Baked Lauki.',
             foodPrice: '180',
             foodOfferPrice: '99'
                },
         {
             categoryID: '3',
             foodImage: 'Images/FoodImages/1.jpg',
             foodName: 'Patta Gobi Mattar, Baked Lauki.',
             foodPrice: '180',
             foodOfferPrice: '99'
                },
         {
             categoryID: '3',
             foodImage: 'Images/FoodImages/1.jpg',
             foodName: 'Patta Gobi Mattar, Baked Lauki.',
             foodPrice: '180',
             foodOfferPrice: '99'
                },
         {
             categoryID: '4',
             foodImage: 'Images/FoodImages/1.jpg',
             foodName: 'Patta Gobi Mattar, Baked Lauki.',
             foodPrice: '180',
             foodOfferPrice: '99'
                }
            ]
 };
 var source = document.getElementById("entry-BreakfastTemplate").innerHTML;
 var template = Handlebars.compile(source);
 var html = template(context);
 var div = document.createElement(div);
 div.innerHTML = html;
 document.getElementById("breakfast").appendChild(div);

 var source1 = document.getElementById("entry-LunchTemplate").innerHTML;
 var template1 = Handlebars.compile(source1);
 var html1 = template1(context);
 var lunch = document.createElement(lunch);
 lunch.innerHTML = html1;
 document.getElementById("lunch").appendChild(lunch);

 var source2 = document.getElementById("entry-SnacksTemplate").innerHTML;
 var template2 = Handlebars.compile(source2);
 var html2 = template2(context);
 var snacks = document.createElement(snacks);
 snacks.innerHTML = html2;
 document.getElementById("snacks").appendChild(snacks);


 var source3 = document.getElementById("entry-DinnerTemplate").innerHTML;
 var template3 = Handlebars.compile(source3);
 var html3 = template3(context);
 var dinner = document.createElement(dinner);
 dinner.innerHTML = html3;
 document.getElementById("dinner").appendChild(dinner);