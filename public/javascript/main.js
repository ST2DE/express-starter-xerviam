$(document).ready(function() {
    $('.delete-btn').click(function() {
        let dataRow = $(this).parent().parent();
        let id = $(this).parent().parent().attr('data-id');

        $.ajax({
            url: '/delete/' + id,
            method: 'post'
        });
        dataRow.animate({
            opacity: 0,
        }, {
            duration: 100,
            queue: false
        }).hide({queue: false})
    });

    $('.edit-btn').click(function() {
        if ($(this).parent().prev().children(".text-input").is(':hidden'))
            return false
        let id = $(this).parent().parent().attr('data-id');
        let text = $(this).parent().prev().children(".text-input").val()
        $.ajax({
            url: '/update/' + id,
            method: 'post',
            data: {
                title: text
            }
        })
        $(this).parent().prev().children(".note-text").text(text)
        $(this).parent().prev().children(".text-input").hide()
        $(this).parent().prev().children(".note-text").fadeIn()
    })

    $('.text-container').dblclick(function() {

        let id = $(this).children().attr('data-id');
        let textNode = $(this).children(".note-text");
        let text = $(this).children(".note-text").text().trim()
        let input = $(this).children(".text-input").attr('value', text)
        
        textNode.hide()
        input.fadeIn()

    })


    $('.done-btn').click(function() {
        $(this).parent().prev().children(".note-text").toggleClass('done')
    })


    $('.show-all').click(function() {
        $('.note-text').parent().parent().hide()
        $('.note-text').parent().parent().fadeIn()
    })
    $('.show-active').click(function() {
        $('.note-text').parent().parent().hide()
        $('.note-text').not('.done').parent().parent().fadeIn()
    })
    $('.show-done').click(function() {
        $('.note-text').parent().parent().hide()
        $('.done').parent().parent().fadeIn()
    })

})