/* eslint-disable no-undef */
for(var i = 0; i < foodItems.length; i++){
    //for each cards in foodItems a new div is added to the html
    $('#food-center').append(
        //key used for id to load secondary cards
        `<div class="card" id=${foodItems[i].key}> 
            <h3 class="title">${foodItems[i].title}</h3>
            <img src=${foodItems[i].img} alt="house-sushi-images"></img>
        </div>`
        //Title and image pulled from same source to display on cards
    );
}



$(".card").click(
    function ()
    {
        var title = $(this).children("h3").text();
        var item = mainItems[title.toString()];
        var length = item.length;
        var gridTempRow = "";

        if($(".clicked-food").length) $('.clicked-food').remove();
        
        $('.food-display').append(`<div class="clicked-food"></div>`);

        for(var i = 0; i < length; i++){
            if(i % 4 === 0) gridTempRow += 'min-content ';

            $('.clicked-food').append(
                `<div class="sub-card"> 
                    <h3>${item[i].title}</h3>
                    <img src=${item[i].img} alt="house-sushi-images"></img>
                    <p>${item[i].description}</p>
                </div>`
            );
        }

        $('.clicked-food').css('grid-template-rows', gridTempRow);
});