let userAddForm = document.getElementById('add-user');
let createBtn = document.getElementById('create-btn');
let firstTd = document.getElementById('check-td');
let firstI = document.getElementById('check');
let toggle = document.getElementById('toggle');
let tBody = document.getElementById('tbody');

// toggle.addEventListener('click', (e) => {

// })
// function togglePromotion(userId){
window.togglePromotion = function(userId) {
    fetch(`/${userId}/toggle`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ userId: userId })
    })
    // .then(response => response.json())
    // // .then(tBody.innerHTML = ``)
    // .catch(error => console.error("Error:", error));

    // .then(response => response.json()) // Expecting JSON response
    // .then(data => {
    //     if (data.success) {
    //         const toggleElement = document.getElementById(`toggle-${id}`);
    //         if (data.promoted) {
    //             toggleElement.innerHTML = '<i class="fa-solid fa-toggle-on" style="color: #e7e9ed;"></i>';
    //         } else {
    //             toggleElement.innerHTML = '<i class="fa-solid fa-toggle-off" style="color: #1d63f2;"></i>';
    //         }
    //     } else {
    //         console.error("Failed to update promotion status");
    //     }
    // })
    // .catch(error => console.error("Error:", error));

    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const toggleElement = document.getElementById(`toggle-${userId}`);

            // Update the inner HTML based on new promoted status
            toggleElement.innerHTML = data.promoted
                ? '<i class="fa-solid fa-toggle-on" style="color: #1d63f2;"></i>'
                : '<i class="fa-solid fa-toggle-off" style="color: #e7e9ed;"></i>';
        } else {
            console.error("Failed to update promotion status");
        }
    })
    .catch(error => console.error("Error:", error));
    
    // .then(response => {
    //     if (response.ok) {
    //         window.location.href = "/home"; // Redirect to /home to refresh the page
    //     } else {
    //         console.error("Failed to update promotion status");
    //     }
    // })
    // .catch(error => console.error("Error:", error));
};

firstTd.addEventListener('click', (e) => {
    e.preventDefault();
    // firstI.style.color = '#34363A';
    if (firstI.classList.contains('fa-square-check')) {
        // firstI.style.color = '#34363A';
        firstI.classList.remove('fa-solid','fa-square-check');
        firstI.classList.add('fa-solid','fa-square-check-new');
        firstI.style.color = '#34363A';

    }else{
        // firstI.style.color = '';
        firstI.classList.remove('fa-solid','fa-square-check-new');
        firstI.classList.add('fa-solid','fa-square-check');
    }
});

createBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userAddForm.classList.remove('add-user-no');
    userAddForm.classList.add('add-user');
})