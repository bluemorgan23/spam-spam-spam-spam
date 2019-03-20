const display = document.querySelector("#display-container")

const emailArray = customers.map(customer => {
    return customer.contacts.email.forEach(email => {
         display.innerHTML += `
         <h2>${email}</h2>
         `
    })
});
