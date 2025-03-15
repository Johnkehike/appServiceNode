// import img1 from './assets/1.jpg';
// import img2 from './assets/2.jpg';
// import img3 from './assets/3.jpg';
// import img4 from './assets/4.jpg';
// import img5 from './assets/4.jpg';

let tBody = document.getElementById('tbody');


const initialArray = [
    {
        id: 1,
        img: './assets/1.jpg',
        name: "Jese Leos",
        userRole: 'Administrator',
        isActive: true,
        promoted: true,
        rating: 4.7,
        lastLogin: '20 Nov 2024',
        social: {
            facebook: 'www.facebook.com',
            linkedIn: 'www.linkedIn.com',
            twitter: 'www.twitter.com',
            google: 'www.google.com'
        }
    },
    {
        id: 2,
        img: './assets/2.jpg',
        name: "Abina Leos",
        userRole: 'Administrator',
        isActive: true,
        promoted: true,
        rating: 5.0,
        lastLogin: '26 Oct 2024',
        social: {
            facebook: 'www.facebook.com',
            linkedIn: 'www.linkedIn.com',
            twitter: 'www.twitter.com',
            google: 'www.google.com'
        }
    },
    {
        id: 3,
        img: './assets/3.jpg',
        name: "James Abednigo",
        userRole: 'Moderator',
        isActive: false,
        promoted: false,
        rating: 4.0,
        lastLogin: '03 Jan 2025',
        social: {
            facebook: 'www.facebook.com',
            linkedIn: 'www.linkedIn.com',
            twitter: 'www.twitter.com',
            google: 'www.google.com'
        }
    },
    {
        id: 4,
        img: './assets/4.jpg',
        name: "Phil Thomson",
        userRole: 'Viewer',
        isActive: true,
        promoted: false,
        rating: 4.9,
        lastLogin: '26 Nov 2024',
        social: {
            facebook: 'www.facebook.com',
            linkedIn: 'www.linkedIn.com',
            twitter: 'www.twitter.com',
            google: 'www.google.com'
        }
    },
    {
        id: 5,
        img: './assets/5.jpg',
        name: "Ndidiamaka Baby",
        userRole: 'Moderator',
        isActive: true,
        promoted: true,
        rating: 4.7,
        lastLogin: '20 Feb 2025',
        social: {
            facebook: 'www.facebook.com',
            linkedIn: 'www.linkedIn.com',
            twitter: 'www.twitter.com',
            google: 'www.google.com',
            instagram: 'www.instagram.com'
        }
    }
]

function shuffleArray(array) {
    return array
        .map(value => ({ value, sort: Math.random() })) 
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value); 
};



function items(){
    
    
    
    const numCopies = 20;
    // const newArray = Array.from({length: numCopies}, () => initialArray).flat(1);
    const newArray = Array.from({ length: numCopies }, () => shuffleArray([...initialArray])).flat();
    
    console.log(newArray);

    let currentPage = 1;
    const totalPages = Math.ceil(newArray.length / 10);

    function showItems(page){
        const startIndex = (page - 1) * 10;
        const endIndex = startIndex + 10;
        const pageItems = newArray.slice(startIndex, endIndex);
        tBody.innerHTML = "";

        pageItems.forEach((item, index) => {
           console.log(item.social.facebook);
            // item.social.facebook

            let tr = document.createElement('tr');
            tr.addEventListener('mouseover', (e) => {
                tr.style.backgroundColor = '#F3F5F7';
            });
            tr.addEventListener('mouseleave', (e) => {
                tr.style.backgroundColor = '';
            });
            let firstTd = document.createElement('td');
            let firstI = document.createElement('i');
            firstI.classList.add('fa-solid', 'fa-square-check');
            firstI.setAttribute('id', 'check');
            // firstI.style.color = "#ffffff";
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
            firstTd.appendChild(firstI);

            let secondTd = document.createElement('td');
            let profileDiv = document.createElement('div');
            profileDiv.classList.add('profile');
            profileDiv.setAttribute('id', 'profile');
            let profileImgDiv = document.createElement('div');
            profileImgDiv.classList.add('profile-img');
            profileImgDiv.setAttribute('id','profile-img');

            let img = document.createElement('img');
            // img.classList.add();
            img.setAttribute('src',`${item.img}`);

            profileImgDiv.appendChild(img);
            profileDiv.append(profileImgDiv,`${item.name}`);
            secondTd.appendChild(profileDiv);

            let thirdTd = document.createElement('td');
            let userRole = document.createElement('button');
            item.userRole === 'Administrator'?userRole.classList.add('admin') && userRole.setAttribute('id', 'admin') :
            item.userRole === 'Moderator'?userRole.classList.add('moderator') && userRole.setAttribute('id', 'moderator') :
            userRole.classList.add('viewer') && userRole.setAttribute('id', 'viewer');
            let userRoleI = document.createElement('i');
            item.userRole === 'Administrator'? userRoleI.classList.add('fa-solid', 'fa-user-tie') :
            item.userRole === 'Moderator'? userRoleI.classList.add('fa-solid', 'fa-user-pen') :
            userRoleI.classList.add('fa-solid', 'fa-eye');
            userRole.append(userRoleI, ` ${item.userRole}`);
            thirdTd.appendChild(userRole);

            let foruthTd = document.createElement('td');
            let isActiveDiv = document.createElement('div');
            item.isActive? isActiveDiv.classList.add('active') : 
            isActiveDiv.classList.add('inactive');
            item.isActive? isActiveDiv.setAttribute('id', 'active') :
            isActiveDiv.setAttribute('id','inactive');
            let isActiveI = document.createElement('i');
            isActiveI.classList.add('fa-solid', 'fa-circle');
            item.isActive? isActiveDiv.append(isActiveI, 'Active') :
            isActiveDiv.append(isActiveI, 'Inactive');
            foruthTd.appendChild(isActiveDiv);

            let fifthTd = document.createElement('td');
            let socialDiv = document.createElement('div');
            socialDiv.classList.add('social');
            socialDiv.setAttribute('id', 'social');
            const socialIcons = {
                linkedIn: 'fa-linkedin',
                facebook: 'fa-facebook',
                twitter: 'fa-twitter',
                google: 'fa-google',
                instagram: 'fa-instagram'
            };
            socialDiv.innerHTML = ''; 

                Object.keys(item.social).forEach((key) => {

                    if (socialIcons[key]) {
                        let socialLink = document.createElement('a');
                        socialLink.classList.add('social-link');
                        socialLink.setAttribute('href', item.social[key]);
                
                        let socialIcon = document.createElement('i');
                        socialIcon.classList.add('fa-brands', socialIcons[key]);
                
                        socialLink.appendChild(socialIcon);
                        socialDiv.appendChild(socialLink);
                    }
                });
            
            fifthTd.appendChild(socialDiv);

            let sixTd = document.createElement('td');
            let toggleDiv = document.createElement('div');
            toggleDiv.classList.add('toggle');
            let toggleI = document.createElement('i');
            item.promoted ? (toggleI.classList.add('fa-solid', 'fa-toggle-on'),toggleI.style.color = "#1d63f2"):
            (toggleI.classList.add('fa-solid', 'fa-toggle-off'), toggleI.style.color ="#e7e9ed");
            toggleI.addEventListener('click', (e) => {
                e.preventDefault();
            
                if (toggleI.classList.contains('fa-toggle-on')) {
                    toggleI.classList.remove('fa-toggle-on');
                    toggleI.classList.add('fa-toggle-off');
                    toggleI.style.color = "#e7e9ed";
                } else {
                    toggleI.classList.remove('fa-toggle-off');
                    toggleI.classList.add('fa-toggle-on');
                    toggleI.style.color = "#1d63f2";
                }
            });
            toggleDiv.appendChild(toggleI);
            sixTd.appendChild(toggleDiv);

            let seventhTd = document.createElement('td');
            let ratingDiv = document.createElement('div');
            ratingDiv.classList.add('rating');
            ratingDiv.setAttribute('id','rating');
            let ratingI = document.createElement('i');
            item.rating > 4 ? ratingI.classList.add('fa-solid', 'fa-arrow-up') :
            ratingI.classList.add('fa-solid', 'fa-arrow-down');
            const rating = item.rating.toFixed(1);
            // item.rating.toFixed(1);
            ratingDiv.append(ratingI, ` `, rating);
            seventhTd.appendChild(ratingDiv);

            let eightTd = document.createElement('td');
            eightTd.classList.add('date');
            eightTd.textContent = `${item.lastLogin}`;

            let tenthTd = document.createElement('td');
            let ellipsis = document.createElement('i');
            ellipsis.classList.add('fa-solid', 'fa-ellipsis');
            tenthTd.appendChild(ellipsis);
            tr.append(firstTd,secondTd,thirdTd,foruthTd,fifthTd,sixTd,seventhTd,eightTd,tenthTd);
            tBody.append(tr);
            



        })
    }


    const pagination = document.getElementById('page-navigation');
    pagination.innerHTML = "";
function renderPagination(totalPages) {


    // let currentPage = 1;
    pagination.innerHTML = ""; // Clear pagination before rendering

    let pageItemOneContainer = document.createElement('div');
    pageItemOneContainer.classList.add('item-container');
    let leftArrow = document.createElement('i');
    leftArrow.classList.add('fa-solid', 'fa-chevron-left');
    leftArrow.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            showItems(currentPage);
            renderPagination(totalPages);
        }
    });
    pageItemOneContainer.appendChild(leftArrow);
    pagination.append(pageItemOneContainer);

    let pageNumbers = document.createElement('div');
    pageNumbers.classList.add('page-numbers');

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === 2 || i === 3 || i === totalPages || i === currentPage) {
            let secondItemContainer = document.createElement('div');
            secondItemContainer.classList.add('item-container');
            let mainItem = document.createElement('a');
            mainItem.href = "#";
            mainItem.textContent = i;
            // if (i === currentPage) mainItem.classList.add('active'); // Highlight current page
            if (i === currentPage) (secondItemContainer.classList.remove('item-container'), secondItemContainer.classList.add('item-container-active'));
            mainItem.addEventListener("click", (event) => {
                event.preventDefault();
                currentPage = i;
                showItems(currentPage);
                renderPagination(totalPages);
            });
            secondItemContainer.appendChild(mainItem);
            pagination.append(secondItemContainer);
        } else if (i === 4) {
            // Insert the ellipsis after page 3 if there are more pages
            let elipsContainer = document.createElement('div');
            elipsContainer.classList.add('item-container');
            let elips = document.createElement('i');
            elips.classList.add('fa-solid', 'fa-ellipsis');
            elipsContainer.appendChild(elips);
            pagination.append(elipsContainer);
        }
    }

    let pageItemTwoContainer = document.createElement('div');
    pageItemTwoContainer.classList.add('item-container');
    let rightArrow = document.createElement('i');
    rightArrow.classList.add('fa-solid', 'fa-chevron-right');
    rightArrow.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            showItems(currentPage);
            renderPagination(totalPages);
        }
    });
    pageItemTwoContainer.appendChild(rightArrow);
    pagination.append(pageItemTwoContainer);
};
function setupPage() {
        // const pagination = document.querySelector("#pagination");
        const pagination = document.getElementById('page-navigation');
        pagination.innerHTML = "";
        let pageItemOneContainer = document.createElement('div');
        pageItemOneContainer.classList.add('item-container');
        pageItemOneContainer.setAttribute('id', 'item-container');
        let leftArrow = document.createElement('i');
        leftArrow.classList.add('fa-solid', 'fa-chevron-left');
        pageItemOneContainer.appendChild(leftArrow);
        pagination.append(pageItemOneContainer);

        for(let i = 1; i <= totalPages; i++){
            let secondItemContainer = document.createElement('div');
            secondItemContainer.classList.add('item-container');
            secondItemContainer.setAttribute('id','item-container');
            let mainItem = document.createElement('a');
            mainItem.href = "#";
            mainItem.textContent = i;
            secondItemContainer.appendChild(mainItem);
            secondItemContainer.addEventListener("click", (event) => {
                event.preventDefault();
                currentPage = i;
                showItems(currentPage);
            });
            pagination.append(secondItemContainer);

        };

        let elipsContainer = document.createElement('div');
        elipsContainer.classList.add('item-container');
        elipsContainer.setAttribute('id','item-container');
        let elips = document.createElement('i');
        elips.classList.add('fa-solid', 'fa-ellipsis');
        elipsContainer.appendChild(elips);
        pagination.append(elipsContainer);

        let pageItemTwoContainer = document.createElement('div');
        pageItemTwoContainer.classList.add('item-container');
        pageItemTwoContainer.setAttribute('id','item-container');
        let rightArrow = document.createElement('i');
        rightArrow.classList.add('fa-solid', 'fa-chevron-right');
        pageItemTwoContainer.appendChild(rightArrow);
        pagination.append(pageItemTwoContainer);
     
    
    }
    showItems(currentPage);
    renderPagination(totalPages);








}


export { items }


