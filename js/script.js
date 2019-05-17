axios.get("https://jsonplaceholder.typicode.com/photos")
.then(function(response){
    console.log(response.data);
    $('.btn').click(function(){
        var albumHTML = response.data.map(function(album){
            return $('#tasks').append('<img src=' + album.url + ' alt=' + album.title + '>' + '<p>' + album.title + '</p>');
        });

    });

    
})