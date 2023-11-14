 let celciusInput = document.querySelector('#celcius >  input')
 let fahrenheitInput = document.querySelector("#fahrenheit > input")
 let kelvinInput = document.querySelector('#kelvin > input')

 let btn = document.querySelector('.button button')


 function roundnumber(number){
    return Math.round(number*100)/100
 })


 /* Celcius to Fahrenheit and Kelvin */
 celciusInput.addEventListener('click', function(){
      let cTemp = parseFloat(celciusInput.value)
      let ftemp = (ctemp*(9/5)) * 32
      let ktemp = cTemp * 273.15

      fahrenheitInput.value = roundnumber(fTemp)
      kelvinInput.value = roundNumber(kTemp)
 })


 /* Fahrenheit to Celcius and Kelvin */
 fahrenheitInput.addEventListener('input', function(){
     let fTemp = parseFloat(fahrenheitInput.value)
     let cTemp = (fTemp - 32) * (5/9)
     let kTemp = (fTemp - 32) * (5/9) + 273.15

     fahrenheitInput.value = roundNumber(cTemp)
     kelvinInput.value = roundNumber(kTemp)
 })

/* Kelvin to Celcius and Fahrenheit */
fahrenheitInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    celciusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
})


btn.addEventListener('click', ()=>{
    celciusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})
