const form = document.getElementById('formTransaction')

form.addEventListener('submit', e => {
  e.preventDefault()
  const { description, price } = Object.fromEntries(new FormData(e.target))
  const json = JSON.stringify({description, price})
  // console.log(json);

  fetch('http://localhost:3000/transactions', {
    method: 'POST',
    body: json,
  })
})

fetch('http://localhost:3000/transactions').then(res => res.json()).then(console.log)