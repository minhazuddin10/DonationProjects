
document.getElementById("first-btn").addEventListener("click", function () {



    let main_amount_f = getTextFieldValueById("main-amount")



    let first_input_N = getInputFieldValueById("first-input")



    let first_donate_N = getTextFieldValueById("first-donate")

    if (first_input_N <= 0 || isNaN(first_input_N)) {

        alert("Please give here a valid input")
        return
    }


    if (main_amount_f >= first_input_N) {


        let sum_f = first_input_N + first_donate_N

        document.getElementById("first-donate").innerText = sum_f

        let new_main_amount = main_amount_f - sum_f

        document.getElementById("main-amount").innerText = new_main_amount

        let title1 = document.getElementById("title1").innerText

        let div = document.createElement("div")

        div.classList.add("max-w-5xl", "mx-auto", "bg-white", "shadow-md", "rounded-lg", "overflow-hidden", "border-5", "p-5", "mt-3")

        div.innerHTML = `

    <h3 class="text-2xl font-bold"> ${sum_f} ${title1} <h3>

    <p class="text-xl mt-5">Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()}</p>  
    
    `
        document.getElementById("history").appendChild(div)


        document.getElementById("confirmationModal").classList.remove("hidden")

    }
    else {
        alert("you have no sufficient balanced for donate")
    }
})



document.getElementById("sec-btn").addEventListener("click", function () {




    let main_amount_f = getTextFieldValueById("main-amount")



    let sec_input_N = getInputFieldValueById("sec-input")



    let sec_donate_N = getTextFieldValueById("sec-donate")

    if (sec_input_N <= 0 || isNaN(sec_input_N)) {

        alert("Please give here a valid input")
        return
    }


    if (main_amount_f >= sec_input_N) {


        let sum_f_2 = sec_input_N + sec_donate_N

        document.getElementById("sec-donate").innerText = sum_f_2

        let new_main_amount_2 = main_amount_f - sum_f_2

        document.getElementById("main-amount").innerText = new_main_amount_2


        let title2 = document.getElementById("title2").innerText

        let div = document.createElement("div")

        div.classList.add("max-w-5xl", "mx-auto", "bg-white", "shadow-md", "rounded-lg", "overflow-hidden", "border-5", "p-5", "mt-3")

        div.innerHTML = `

    <h3 class="text-2xl font-bold"> ${sum_f_2} ${title2} <h3>

    <p class="text-xl mt-5">Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()}</p>

    
    `
        document.getElementById("history").appendChild(div)






        document.getElementById("confirmationModal").classList.remove("hidden")

    }
    else {
        alert("you have no sufficient balanced for donate")
    }








})



document.getElementById("th-btn").addEventListener("click", function () {





    // let main_amount =document.getElementById("main-amount").innerText
    let main_amount_f = getTextFieldValueById("main-amount")

    // let th_input=document.getElementById("th-input").value

    let th_input_N = getInputFieldValueById("th-input")

    // let th_donate=document.getElementById("th-donate").innerText

    let th_donate_N = getTextFieldValueById("th-donate")

    if (th_input_N <= 0 || isNaN(th_input_N)) {

        alert("Please give here a valid input")
        return
    }

    if (main_amount_f >= th_input_N) {


        let sum_f_3 = th_input_N + th_donate_N

        document.getElementById("th-donate").innerText = sum_f_3

        let new_main_amount_3 = main_amount_f - sum_f_3

        document.getElementById("main-amount").innerText = new_main_amount_3

        let title3 = document.getElementById("title3").innerText

        let div = document.createElement("div")

        div.classList.add("max-w-5xl", "mx-auto", "bg-white", "shadow-md", "rounded-lg", "overflow-hidden", "border-5", "p-5", "mt-3")

        div.innerHTML = `

    <h3 class="text-2xl font-bold"> ${sum_f_3} ${title3} <h3>

    <p class="text-xl mt-5">Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()}</p>



    
    
    
    
    `
        document.getElementById("history").appendChild(div)




        document.getElementById("confirmationModal").classList.remove("hidden")

    }
    else {
        alert("you have no sufficient balanced for donate")
    }








})

document.getElementById("closeModalBtn").addEventListener("click", function () {

    document.getElementById("confirmationModal").classList.add("hidden")


})



document.getElementById("history-tab").addEventListener("click", function () {

    document.getElementById("history-tab").classList.add("bg-[#B4F461]")
    document.getElementById("history").classList.remove("hidden")
    document.getElementById("donate").classList.add("hidden")
    document.getElementById("donation-tab").classList.remove("bg-[#B4F461]")
})

document.getElementById("donation-tab").addEventListener("click", function () {


    document.getElementById("donation-tab").classList.add("bg-[#B4F461]")
    document.getElementById("history").classList.add("hidden")
    document.getElementById("donate").classList.remove("hidden")
    document.getElementById("history-tab").classList.remove("bg-[#B4F461]")


})


document.getElementById("blog").addEventListener("click", function () {

    window.location.href = "./home.html"
    var value = document.getElementById("main-amount").innerText;
    localStorage.setItem("Value", value);
})

