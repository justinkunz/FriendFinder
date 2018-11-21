$(document).ready()

$.ajax({
    url: '/api/all',
    Method: 'GET',
}).then(function (d) {
    console.log(d)
    for (i = 0; i < d.length; i++) {
        var tempData = JSON.parse(d[i].user_data)
        console.log(tempData)
        var tempHTML = $(
        "<p class='lead'>User ID: " + d[i].id + "</p> \
         <p class='lead'>Name: " + tempData.name + "</p> \
         <a href='answers/" + d[i].id + "'>Click here to view my answers!</a><br> \
         <img class='userImg' src='" + tempData.img + "'> \
         <hr class='my-4'>")

        $("#users").append(tempHTML)
    }
})

