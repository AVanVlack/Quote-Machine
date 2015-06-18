//Warning: Big Wall of Text.
var quotes = ['Because of your smile, you make life more beautiful.',"When you love someone, the best thing you can offer is your presence. How can you love if you are not there?","There is no way to happiness - happiness is the way.","In order to heal others, we first need to heal ourselves. And to heal ourselves, we need to know how to deal with ourselves.","Many people are alive but don't touch the miracle of being alive.","Anger is like a storm rising up from the bottom of your consciousness. When you feel it coming, turn your focus to your breath.","To be beautiful means to be yourself. You don't need to be accepted by others. You need to accept yourself.","Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.","Understanding someone's suffering is the best gift you can give another person. If you don't understand, you can't love.","Walk as if you are kissing the Earth with your feet.","We have more possibilities available in each moment than we realize.","Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.","Keeping your body healthy is an expression of gratitude to the whole cosmos - the trees, the clouds, everything.", "Every path, every street in the world is your walking meditation path.", "To think in terms of either pessimism or optimism oversimplifies the truth. The problem is to see reality as it is","Breath is aligned with both body and mind and it alone can bring them together.","In English we say 'we are' but it's proper to say 'we are becoming' because things are becoming.","We have more possibilities available in each moment than we realize.","You have to do it by yourself.  You can not do it alone." ]
var quoteEl = document.getElementById("quote-text");
var newButton = document.getElementById("new-quote");
var tweetButton = document.getElementById("tweet-me");

function updateQuote(){
	//Get random quote and store in currentQuote
	quote = (quotes[Math.floor(Math.random()*quotes.length)]);
	//Update quote text
	quoteEl.innerHTML = quote;
	//Update twitter button url
	var twitterURL = 'https://twitter.com/intent/tweet?text=' + encodeURI(quote + " -Nhat Hanh");
	tweetButton.href = twitterURL;
}

//When button gets clicked:
newButton.addEventListener('click', function(){
	//Call changeQuote with currentQuote
	updateQuote();
})

window.onload = function(){
	updateQuote();
}
