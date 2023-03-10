doBruh();

function doBruh(){
    console.log(multiBox(9));
    console.log(capitalize("bRUh MomeNt"))
    console.log(lastLetter("yo yo ma"));
}

function multiBox(number){
    return number + 7;
}

function capitalize(message){
    let lowerMessage = message.toLowerCase();
    lowerMessage = lowerMessage.replace(lowerMessage[0], lowerMessage[0].toUpperCase());
    return lowerMessage;
}

function lastLetter(message){
    return message[message.length - 1];
}