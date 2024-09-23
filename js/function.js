

function getInputFieldValueById(value){

    let result=document.getElementById(value).value

    let result_int=parseFloat(result)

    return result_int
}

function getTextFieldValueById(value){

    let result=document.getElementById(value).innerText

    let result_int=parseFloat(result)

    return result_int
}

