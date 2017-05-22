$(function() {
    $('send-btn').click(sendForm);
});



function sendForm(e){
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/svirgunzinovij@gmail.com", 
        method: "POST",
        data: {
            name: $('#guestName').val(),
            email: $('guestEmail').val(),
            comment: $('guestComment').val()
        },
        dataType: "json"
    })
    .done(function() {
        $('form').html('<h1>Thank you!</h1>');  
    });
}

