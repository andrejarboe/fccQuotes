



let quote = $('.quote').html();
let author = $('.author').html();
const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';

randomRgb();

// Tweet quote
$('.twitter').click(function() {
    window.open('https://twitter.com/intent/tweet/?text='+quote+' -'+author);
    console.log('click');
});

// Get quote
$('.new-quote').click(function() {
    $.getJSON(url, function(data){
        quote = data.quoteText;
        author = data.quoteAuthor;

        $('.quote').text('"' +quote+ '"');
        if(author){
            $('.author').text('-' +author);
        }else{
           $('.author').text('-Anonymous'); 
        }

        randomRgb();

        console.log(author);

    });
});

// Get random rgb
function randomRgb() {
    let colors = [
                    [241, 196, 015], [230, 126, 034],
                    [192, 057, 043], [046, 204, 113],
                    [052, 152, 219], [155, 089, 182]
                ]
    // Get random number from 0 to 5
    let num = Math.floor(Math.random() * colors.length);
    let color = colors[num].toString();
    console.log(num);
    console.log(color);

    document.body.style.backgroundColor = 'rgb('+color+')';
}


