function validationValue(key) {
    var num = parseInt(prompt("Enter "+ key+": "));
    if (isNaN(num)){
        var bool = false;
        while (bool == false){
            num = parseInt(prompt("Enter a integer "+ key+": "));
            if (isNaN(num)){
                bool == false;
            }
            else {
                num = num;
                break
            }
        }
    }
    return num
}

var x = validationValue("number"),
    n = validationValue("power"),
    createHeading = document.createElement("h2");
    createHeading.className = "message";

 document.body.append(createHeading)

 function getPow() {
    var result = Math.pow(parseInt(x), parseInt(n));
    return "Result of x = "+ x + " in power of n = "+ n + " equals " + result;
 }

function validationTag(message){
    var ifExist = document.querySelector('.message');
    if (ifExist){
        return alert(getPow()),message.innerHTML = getPow()
    }
    else {
        return message.innerText = "No heading tag with that name: " + createHeading.className
    }

}

validationTag(createHeading)

