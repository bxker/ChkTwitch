function getChannelId() {
   
    //Rewritten to use fetch rather than ajax

    //Some detailed comments so I remember what I did
    //Set up the request, we need url, method and headers which are defined as globals to aid reuse
    var request = new Request('https://api.twitch.tv/kraken/search/channels?query=' + channel, {
        headers: v5headers,
        method: 'GET'
    });

    //Make the call using fetch, which returns a promise
    //When the fetch succeeds return the response as json
    //Then manage the data it contained
    //Catch just in case
    fetch(request).then(function(response) {
        //Success, return the response as JSON
        return response.json();
    }).then(function (data){
        //Data contains the JSON from the response
        //Update the global variable with the channel id rather than the name
        channel = data["channels"][0]["_id"];
        //Now we can get the current game
        getCurrentGame();
    }).catch(function (err) {
       console.log(err);
    });