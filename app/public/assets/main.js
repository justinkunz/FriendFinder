
$(document).on('click', "#submitBtn", function (e) {
    e.preventDefault()
    ansArr = []

    //push all answers to array
    for (i = 1; i < 11; i++) {
        ansArr.push($('#q' + i).val())
    }

    //check if any fields are not filled out
    if (ansArr.indexOf('Select a Response') !== -1 || $('#nameInp').val().trim() === "" || $('#imgLink').val().trim() === "") {
        alert('Please fill out all information to proceed')
        return
    }

    var surveyObj = {
        name: $('#nameInp').val().trim(),
        img: $('#imgLink').val().trim(),
        answers: ansArr
    }

    //post object to api
    $.ajax('api/new_response', {
        type: "POST",
        data: surveyObj
    }).then(function (d) {

        //set up modal with response
        $("#modBod").text('You have matched with ' + d.name)
        $("#viewImg").attr('src', d.img)
        $('#viewRes').modal('toggle')
    });
});

//for dismiss button in modal
$(document).on('click', '#modBtn', function (e) {
    $('#viewRes').modal('toggle')
    location.reload()
})
