const app = document.querySelector('.container-users')
const app2 = document.querySelector('.container-emails')

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then(res => res.json())
.then(data => { 
    data.forEach(user => {
        console.log(user.name)
        const p = document.createElement('p')
        const email = document.createElement('p')
        email.innerHTML = user.email
        p.setAttribute('id', user.id)
        p.innerHTML = user.name 
        p.addEventListener('click', function(){
            window.location.href = `./user.html?id=${user.id}`
        })
        app.appendChild(p)
        app2.appendChild(email)
    });
})
.catch(err => console.log(err))