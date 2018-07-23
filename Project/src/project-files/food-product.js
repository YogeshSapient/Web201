var cartItems = [];
var tbClients = [];
//Code for tab functionality
//localStorage.removeItem("cartItems");
$(document).ready(function () {


    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })
    $(".add-cart").click(function () {
        alert($(this).attr("id"));
        var id = $(this).attr("id");
        Add(id);
    });
    BindData();
})




function Add(id) {
    var foodImage = "#foodImage" + id;
    var foodName = "#foodName" + id;
    var foodPrice = "#foodPrice" + id;
    var foodOfferPrice = "#foodName" + id;
    var productID=id;
    var cart = JSON.stringify({
        foodImage: $(foodImage).attr('src'),
        foodName: $(foodName).text(),
        foodPrice: $(foodPrice).text(),
        foodOfferPrice: $(foodOfferPrice).text(),
        productID:productID
    });
    cartItems.push(cart);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    cartItems = JSON.parse(localStorage.getItem("cartItems"));

    BindData();
}

function BindData() {
    debugger;
    tbClients = localStorage.getItem("cartItems"); //Retrieve the stored data 
    tbClients = JSON.parse(tbClients); //Converts string to object 
    $("#cartItem").text(" " + "(" + tbClients.length + "  " + "Items" + ")");
}


Handlebars.registerHelper('if-equals', function (listItem, categoryID, options) {
    if (listItem.categoryID === categoryID) {
        return options.fn(this);
    }
});

var context = {
    list: [{
            categoryID: '1',
            productID: '1',
            foodImage: 'Images/FoodImages/1.jpg',
            foodName: 'yogeshPatta Gobi Mattar, Baked Lauki.',
            foodPrice: '110',
            foodOfferPrice: '99'
                },
        {
            categoryID: '1',
            productID: '2',
            foodImage: 'Images/FoodImages/1.jpg',
            foodName: 'Patta Gobi Mattar, Baked Lauki.',
            foodPrice: '120',
            foodOfferPrice: '99'
                },
        {
            categoryID: '1',
            productID: '3',
            foodImage: 'Images/FoodImages/1.jpg',
            foodName: 'Patta Gobi Mattar, Baked Lauki.',
            foodPrice: '130',
            foodOfferPrice: '99'
                },
        {
            categoryID: '1',
            productID: '4',
            foodImage: 'Images/FoodImages/1.jpg',
            foodName: 'Patta Gobi Mattar, Baked Lauki.',
            foodPrice: '140',
            foodOfferPrice: '99'
                },
        {
            categoryID: '1',
            productID: '5',
            foodImage: 'Images/FoodImages/1.jpg',
            foodName: 'Patta Gobi Mattar, Baked Lauki.',
            foodPrice: '150',
            foodOfferPrice: '99'
                },
        {
            categoryID: '1',
            productID: '6',
            foodImage: 'Images/FoodImages/1.jpg',
            foodName: 'Patta Gobi Mattar, Baked Lauki.',
            foodPrice: '160',
            foodOfferPrice: '99'
                },
        {
            categoryID: '2',
            productID: '7',
            foodImage: 'Images/FoodImages/1.jpg',
            foodName: 'Patta Gobi Mattar, Baked Lauki.',
            foodPrice: '180',
            foodOfferPrice: '99'
                },
        {
            categoryID: '2',
            productID: '8',
            foodImage: 'Images/FoodImages/1.jpg',
            foodName: 'Patta Gobi Mattar, Baked Lauki.',
            foodPrice: '180',
            foodOfferPrice: '99'
                },
        {
            categoryID: '3',
            productID: '9',
            foodImage: 'Images/FoodImages/1.jpg',
            foodName: 'Patta Gobi Mattar, Baked Lauki.',
            foodPrice: '180',
            foodOfferPrice: '99'
                },
        {
            categoryID: '3',
            productID: '10',
            foodImage: 'Images/FoodImages/1.jpg',
            foodName: 'Patta Gobi Mattar, Baked Lauki.',
            foodPrice: '180',
            foodOfferPrice: '99'
                },
        {
            categoryID: '3',
            productID: '11',
            foodImage: 'Images/FoodImages/1.jpg',
            foodName: 'Patta Gobi Mattar, Baked Lauki.',
            foodPrice: '180',
            foodOfferPrice: '99'
                },
        {
            categoryID: '4',
            productID: '12',
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