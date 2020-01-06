var now = moment();
var currentDate = now.format("MMM Do YYYY");

$("#currentDay").text("Today's Date: " + currentDate);



$(document).ready(function () {

    hourArr = $('.hour').toArray()
    for (i = 0; i < hourArr.length; i++) {

        $(hourArr[i]).siblings('textarea').text(localStorage.getItem($(hourArr[i]).attr('data-time')))
    }
});

for (i = 0; i < 9; i++) {
    let rowBlock = $('<div>').addClass('row')
    let timeBlock = $('<div>').addClass('hour').text(moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA')).css('width', '10%')
    timeBlock.attr('data-time', moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'))
    let taskBlock = $('<textarea>').css('width', '80%')
    let saveButton = $('<button>').addClass('saveBtn').html('<i class="fas fa-save"></i>')

    $('.container').append(rowBlock)
    $(rowBlock).append(timeBlock)
    $(timeBlock).after(taskBlock)
    $(taskBlock).after(saveButton)

    if (now.isSame(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(taskBlock).addClass('present')
    } else if (now.isBefore(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(taskBlock).addClass('future')
    } else if (now.isAfter(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(taskBlock).addClass('past')
    }
}

$('.saveBtn').on('click', function () {

    localStorage.setItem($(this).siblings('div.hour').attr('data-time'), $(this).siblings('textarea').val())
})



