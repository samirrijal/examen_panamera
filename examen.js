
//Main Heading and Illustration Animation
const mainHeading = document.querySelector(`.main-heading`)
const mainHeadingLetters = mainHeading.textContent.split(``)
mainHeading.textContent = ``
mainHeadingLetters.forEach(mainHeadingLetter => {
mainHeading.innerHTML += `<span class="main-heading-letter">${mainHeadingLetter}</span>`
})
gsap.set(`.main-heading-letter`, {display: `inline-block`})
gsap.fromTo(`.main-heading-letter`, {y: `100%`}, {y: 0, stagger: 0.05, duration: 0.75, ease: `back.out(3)`})

gsap.fromTo(`.illustration`, {y: 0}, {y: 20, yoyo: true, repeat: -1, ease: Power0.easeNone(), duration: 1.3})


//Results functionality

/*Deficiente, Suspendido, Bien Apto*/


let select = document.querySelectorAll(`.select-marks`)
const resultText = document.querySelectorAll(`.result-text`)
const finalResult = document.querySelector(`.final-result`)

//Form Handler (Combo Notas)
const comboNotas = document.addEventListener(`submit`, e => {
    e.preventDefault()
    
    //Select DOM
    //Subjects value DOM
    const matesSelect = document.querySelector(`#mates`)
    const cienciasSelect = document.querySelector(`#ciencias`)
    const fisicaSelect = document.querySelector(`#fisica`)
    const historiaSelect = document.querySelector(`#historia`)
    const literaturaSelect = document.querySelector(`#literatura`)
    const mates = parseInt(matesSelect.value)
    const ciencias = parseInt(cienciasSelect.value)
    const fisica = parseInt(fisicaSelect.value)
    const historia = parseInt(historiaSelect.value)
    const literatura = parseInt(literaturaSelect.value)
   
    //Result text DOM
    const resultContainer = document.querySelector(`.result-container`)
    const aprobadas = document.querySelector(`.aprobadas`)
    const suspendidas = document.querySelector(`.suspendidas`)
    const alta = document.querySelector(`.alta`)
    let promedio = document.querySelector(`.promedio`)
    resultContainer.style.display = 'flex'
    document.querySelector(`.illustration`).style.display = `none`;
    
    /****Logic****/
    //Average
    promedio.textContent = parseFloat((mates + ciencias + fisica + historia + literatura) / 5).toFixed(2)
    fisica
        //Highest
    if (mates > ciencias && mates > fisica && mates > historia && mates > literatura)
        alta.textContent = mates
    else if (ciencias > mates && ciencias > fisica && ciencias > historia && ciencias > literatura)
        alta.textContent = ciencias
    else if (fisica > mates && fisica > ciencias && fisica > historia && fisica > literatura)
        alta.textContent = fisica
    else if (historia > mates && historia > ciencias && historia > fisica && historia > literatura)
        alta.textContent = historia
    else 
        alta.textContent = literatura

        
        //Failed
        const failed = []
        const passed = []
        if (mates <= 4)
        failed.push(mates)
        else
        passed.push(mates)
        
        if (ciencias <= 4)
        failed.push(ciencias)
        else
        passed.push(ciencias)
        
        if (fisica <= 4)
        failed.push(fisica)
        else
        passed.push(fisica)

        if (historia <= 4)
        failed.push(historia)
        else
        passed.push(historia)

        if (literatura <= 4)
        failed.push(literatura)
        else
        passed.push(literatura)
        
        aprobadas.textContent = passed.length
        suspendidas.textContent = failed.length

     //Result
    if (promedio.textContent > 3.5)
        finalResult.textContent = `Alumno pasa curso 🎉`
    else if (passed.length === 2)
        finalResult.textContent = `Alumno pasa curso 🎉`
    else
        finalResult.textContent = `Alumno repite curso 😢`
})


//Select handler
const handleChange = (option) => {
    let color = '#7bcb03'
    let text = ''
    if (option.value < 3) {
        color = `#c50000`
    }
    if (option.value === `3` || option.value === `4`) {
        color = `orangered`
    }
    if (option.value === `0`) {
        text = `Sin conocimiento`
    }
    else if (option.value === `1` || option.value === `2`) {
        text = `Muy deficiente`
    }
    else if (option.value === `3` || option.value === `4`) {
        text = `Suspendido`
    }
    else if (option.value === `5`) {
        text = `Aprobado`
    }
    else if (option.value === `6`) {
        text = `Bien`
    }
    else if (option.value === `7`) {
        text = `Bien apto`
    }
    else if (option.value === `8`) {
        text = `Notable`
    }
    else if (option.value === `9`) {
        text = `Excelente`
    }
    else if (option.value === `10`) {
        text = `Matrícula de honor`
    }

    if (option.id === "mates") {
        document.querySelector(`.mates-result`).value = text
        document.querySelector(`.mates-result`).style.backgroundColor = color
        document.querySelector(`.mates-result`).style.color = `white`
    }
    if (option.id === "ciencias") {
        document.querySelector(`.ciencias-result`).value = text
        document.querySelector(`.ciencias-result`).style.backgroundColor = color
        document.querySelector(`.ciencias-result`).style.color = `white`
    }
    if (option.id === "fisica") {
        document.querySelector(`.fisica-result`).value = text
        document.querySelector(`.fisica-result`).style.backgroundColor = color
        document.querySelector(`.fisica-result`).style.color = `white`
    }
    if (option.id === "historia") {
        document.querySelector(`.historia-result`).value = text
        document.querySelector(`.historia-result`).style.backgroundColor = color
        document.querySelector(`.historia-result`).style.color = `white`
    }
    if (option.id === "literatura") {
        document.querySelector(`.literatura-result`).value = text
        document.querySelector(`.literatura-result`).style.backgroundColor = color
        document.querySelector(`.literatura-result`).style.color = `white`
    }
}