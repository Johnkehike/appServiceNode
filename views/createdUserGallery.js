let userAddForm = document.getElementById('add-user');
let createBtn = document.getElementById('create-btn');
// let updateBtn = document.getElementById('')
let checkAll = document.getElementById('check-all');
let toggle = document.getElementById('toggle');
let tBody = document.getElementById('tbody');


window.document.querySelectorAll('.fa-ellipsis').forEach((editContainer) => {
    editContainer.addEventListener('click', (e) => {
        e.preventDefault();
        const childElement = e.target.children[0]; // Get the first child element
        let parentTd = e.target.closest('.last-td');

        let editBox = parentTd.querySelector('.edit-container-no, .edit-container');

        if (editBox) {
            // Toggle between 'edit-container-no' and 'edit-container'
            if (editBox.classList.contains('edit-container-no')) {
                editBox.classList.remove('edit-container-no');
                editBox.classList.add('edit-container');
            } else {
                editBox.classList.remove('edit-container');
                editBox.classList.add('edit-container-no');
            }
        }
        
    });
});


createBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userAddForm.classList.remove('add-user-no');
    userAddForm.classList.add('add-user');
});

document.getElementById('mark-x').addEventListener('click', (e) => {
    e.preventDefault();
    userAddForm.classList.remove('add-user');
    userAddForm.classList.add('add-user-no');
});

document.addEventListener('click', (event) => {
    document.querySelectorAll('.edit-container').forEach((openEditBox) => {
        if (!openEditBox.closest('.last-td').contains(event.target)) {
            openEditBox.classList.remove('edit-container');
            openEditBox.classList.add('edit-container-no');
        }
    });
});



window.document.querySelectorAll('edit-btn').forEach((update) => {
    update.addEventListener('click', (e) => {
        e.preventDefault();
        userAddForm.classList.remove('update-user-no');
        userAddForm.classList.add('update-user');
    });
});

checkAll.addEventListener('click', (e) => {
    document.querySelectorAll('.check-td').forEach((eachItem) => {
        if (eachItem.children[0].getAttribute('id') === 'check') {
            eachItem.children[0].style.color = '#34363A';
            eachItem.children[0].setAttribute('id', 'uncheck');
            checkAll.children[0].style.color = '#34363A';
            checkAll.children[0].setAttribute('id','uncheck-all')
        } else {
            eachItem.children[0].style.color = '';
            eachItem.children[0].setAttribute('id', 'check');
            checkAll.children[0].style.color = '';
            checkAll.children[0].setAttribute('id','check-all');
        }
    })
});





window.togglePromotion = function(userId) {
    const toggleElement = document.getElementById(`toggle-${userId}`);
    
    fetch(`/${userId}/toggle`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ userId: userId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            toggleElement.innerHTML = data.promoted
                ? '<i class="fa-solid fa-toggle-on" style="color: #1d63f2;"></i>'
                : '<i class="fa-solid fa-toggle-off" style="color: #e7e9ed;"></i>';
        } else {
            console.error("Failed to update promotion status");
        }
    })
    .catch(error => console.error("Error:", error));
};

window.document.querySelectorAll('.check-td').forEach((firstTd, index) => {
    firstTd.addEventListener('click', (e) => {
        console.log(firstTd);
        if (firstTd.children[0].getAttribute('id') === 'check') {
            firstTd.children[0].style.color = '#34363A';
            firstTd.children[0].setAttribute('id', 'uncheck');
        } else {
            firstTd.children[0].style.color = '';
            firstTd.children[0].setAttribute('id', 'check');
        }
    })
});

