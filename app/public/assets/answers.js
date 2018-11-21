$(document).ready()

$.ajax({
    url: '/api/answers',
    method: 'GET'
}).then(function(d){
    data = JSON.parse(d[0].user_data)
    $("#name_ans").html("User's name: " + data.name)
    $('#userPic').attr('src', data.img)
    for(i=0; i<data.answers.length; i++){
        r = i+1
        console.log(data.answers[i])
        $("#q" + r).html(data.answers[i])
        
    }
})

