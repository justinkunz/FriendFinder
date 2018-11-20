 function logic(ans, data) {

    var ansDiffs = []

    //loop through each entry in database
    for (i = 0; i < data.length; i++) {

        otherUser = JSON.parse(data[i].user_data).answers
        var totalDiff = 0

        //loop through all answers in array
        for (j = 0; j < 10; j++) {

            diff = parseInt(ans[j]) - parseInt(otherUser[j])

            //if difference is negitive, negate (ie 5-2 and 2-5 should both = 3)
            if (diff < 0) {
                diff = diff * -1
            }
            totalDiff += diff
        }

        ansDiffs.push(totalDiff)
    }

    //return object with info of the most similar user
    return {
        name: JSON.parse(data[ansDiffs.indexOf(Math.min(...ansDiffs))].user_data).name,
        img: JSON.parse(data[ansDiffs.indexOf(Math.min(...ansDiffs))].user_data).img,
        dif: Math.min(...ansDiffs)
    }


}

module.exports = logic
