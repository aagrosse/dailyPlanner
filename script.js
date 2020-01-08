var now = moment();
var currentDate = now.format("MMM Do YYYY");

// Set date in Jumbotron
$("#currentDay").text("Today's Date: " + currentDate);



$(document).ready(function () {

// For loop to get and print tasks from local storage
    hourArr = $('.hour').toArray()
    for (i = 0; i < hourArr.length; i++) {

        $(hourArr[i]).siblings('textarea').text(localStorage.getItem($(hourArr[i]).attr('data-time')))
    }
});


// For loop to print rows with timeblocks, taskblocks, and save buttons
for (i = 0; i < 9; i++) {
    var rowBlock = $('<div>').addClass('row')
    var timeBlock = $('<div>').addClass('hour col-md-2').text(moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'))
    timeBlock.attr('data-time', moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'))
    var taskBlock = $('<textarea>').addClass('col-md-9')
    var saveButton = $('<button>').addClass('saveBtn col-md-1').html('<i class="fas fa-save"></i>')

    // Placing content created above into the proper elements
    $('.container').append(rowBlock)
    $(rowBlock).append(timeBlock)
    $(timeBlock).after(taskBlock)
    $(taskBlock).after(saveButton)


// if else statement to determine the color of the row
    if (now.isSame(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(taskBlock).addClass('present')
    } else if (now.isBefore(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(taskBlock).addClass('future')
    } else if (now.isAfter(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(taskBlock).addClass('past')
    }
}

// Save click event to store data in local storage
$('.saveBtn').on('click', function () {

    localStorage.setItem($(this).siblings('div.hour').attr('data-time'), $(this).siblings('textarea').val())
})

console.log('data-time', moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'))

