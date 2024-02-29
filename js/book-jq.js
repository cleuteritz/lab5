$(document).ready(function() {
    $('#don-quixote-img').click(function() {
        // Change the opacities of all images to 0.5
        $('img').fadeTo('slow', 0.5);
        // Change the opacity of the “Don Quixote” image to 1
        $(this).fadeTo('slow', 1);
        // Use the .load() method to specify the URL of the HTML page to load
        $('#details').fadeOut('fast', function() {
            // Full URL of the HTML file
            $(this).load('https://cleuteritz.rhody.dev/lab5/data/cervantes-data.htlm').fadeIn('fast');
        });
    });

    $('#two-cities-img').click(function() {
        // Change the opacities of all images to 0.5
        $('img').fadeTo('slow', 0.5);
        // Change the opacity of the “A Tale of Two Cities” image to 1
        $(this).fadeTo('slow', 1);
        // Use the .load() method to specify the URL of the HTML page to load
        $('#details').fadeOut('fast', function() {
            // Full URL of the HTML file
            $(this).load('https://cleuteritz.rhody.dev/lab5/data/dickens-data.html').fadeIn('fast');
        });
    });

    $('#lotr-img').click(function() {
        // Change the opacities of all images to 0.5
        $('img').fadeTo('slow', 0.5);
        // Change the opacity of the “The Lord of the Rings” image to 1
        $(this).fadeTo('slow', 1);
        // Use the .load() method to specify the URL of the HTML page to load
        $('#details').fadeOut('fast', function() {
            // Full URL of the HTML file
            $(this).load('https://cleuteritz.rhody.dev/lab5/data/tolkein-data.html').fadeIn('fast');
        });
    });
});
