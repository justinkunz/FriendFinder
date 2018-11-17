
$(document).on('click', "#submitBtn", function (e) {
    e.preventDefault()
    ansArr = []

    for (i = 1; i < 11; i++) {
        ansArr.push($('#q' + i).val())
    }

    if (ansArr.indexOf('Select a Response') !== -1 || $('#nameInp').val().trim() === "" || $('#imgLink').val().trim() === "") {
        alert('Please fill out all information to proceed')
        return
    }
    var surveyObj = {
        name: $('#nameInp').val().trim(),
        img: $('#imgLink').val().trim(),
        answers: ansArr
    }

    $.ajax('api/new_response', {
        type: "POST",
        data: surveyObj
    }).then(function (d) {
        console.log(d)

        $("#modBod").text('You have matched with ' + d.name)
        $("#viewImg").attr('src', d.img)
        $('#viewRes').modal('toggle')
    });
});

$(document).on('click', '#modBtn', function (e) {
    $('#viewRes').modal('toggle')
    location.reload()
})
