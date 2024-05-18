console.log('client side javascript file loaded');

fetch('http://localhost:3007/weather?address=sammamish')
    .then(response => {
        return response.json()
    })
    .then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            console.log(data);
        }
    })

const weatherForm = document.querySelector('form')
weatherForm.addEventListener('submit', () => {
    console.log('submit tapped')
})