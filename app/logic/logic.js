 function logic(ans, data) {

    var ansDiffs = []

    for (i = 0; i < data.length; i++) {

        otherUser = JSON.parse(data[i].user_data).answers
        var totalDiff = 0
        for (j = 0; j < 10; j++) {

            diff = parseInt(ans[j]) - parseInt(otherUser[j])

            if (diff < 0) {
                diff = diff * -1
            }
            totalDiff += diff
        }
        ansDiffs.push(totalDiff)
    }

    return {
        name: JSON.parse(data[ansDiffs.indexOf(Math.min(...ansDiffs))].user_data).name,
        img: JSON.parse(data[ansDiffs.indexOf(Math.min(...ansDiffs))].user_data).img,
        dif: Math.min(...ansDiffs)
    }


}

module.exports = logic
