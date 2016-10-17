//This program is a work in progress. I'm still investigating all the different things I need to do at the end.

//A typical card deck.
var deck = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

/*
//Setting up alternate card decks
var deck0 = [];

//For all the cards in the deck, re-add them into the deck four times with the four different face types 
for(var i = 0; i < deck.length; i++){
    for(var j = 1; j <= 4; j++){
        deck0.push({n: deck[i], f: j});
    }
}

//Setting the original to the alternate. There should be 52 cards in the deck now.
deck = deck0;
//delete deck0;
*/
//Setting the iteration rate to 20 per second. Else this program will cause a runtime error (due to the shuffling function still to come)
frameRate(20);

//Modifying the array prototype to produce an easy result.
/*
Array.prototype.returnSelf = function(){
    return this;
};
println(deck.returnSelf());
*/
// (Because Oh noes guy is annoying and doesn't understand that functions are perfectly fine in a loop, I have defined part of the shuffle function right here.)
var shuffle0 = function(){
    this.sort(function(){
        return random() < random();
    });
};

//The true shuffle function.
Array.prototype.shuffle = function(iterations){
    //The iterations make the shuffling more random. Optimally, I would set this to three.
    while(iterations--){
        shuffle0.apply(this);
    }
};

/*
//This, initially, was testing the shuffle function. Try uncommenting it.
println(deck);
deck.shuffle(3);
println(deck);
*/

//No deck starts out perfect. Deep shuffling should occur.
deck.shuffle(20);
println(deck);
draw = function() {
    
    //Shuffle the deck.
    deck.shuffle(3);
    
    /* 
    To create the famous 29-hand, your hand (of four) should be:
    
    5 5 5 J
    
    Then you should have the cut card be the other 5, but it needs to be the same face as the jack. 
    
    When you count this (labeling the fives 5_1, 5_2, 5_3, and 5_4 in no particular order), the points will total to:
                                         Total:
    5_1 5_2 5_3     = 15->2             |  2
    5_1 5_3 5_4     = 15->4             |  4
    5_1 5_2 5_4     = 15->6             |  6
    5_2 5_3 5_4     = 15->8             |  8
    J 5_1           = 15->10            |  10
    J 5_2           = 15->12            |  12
    J 5_3           = 15->14            |  14
    J 5_4           = 15->16            |  16
    5_1 5_2 5_3 5_4 = Four of a kind->12|  28
    J 5_1           = Correct Jack->1   |  29
    
    The problem with this is that the cut card is entirely random out of the deck (excluding the top and last cards). This creates an extra 1/34 multiplier to be applied to the final odds of creating this hand.
    
    Also, the 5s and jacks must be spaced between other cards, due to the way the cards are dealt.
    
    So we get this pseudocode:
    
    if the first or second card is a five or jack, skip one, check if jack or five, or two "error" cards that would obviously be put in the "crib" or extra hand. 
    
    repeat the previous statement six times for each card
    
    pick random out of deck that is not first or last
    
    if it is a 5 with the same face as the jack, success, stop the program
    
    Here is the real code:
    */
    
    //Thing.
};
