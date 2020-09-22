window.addEventListener("DOMContentLoaded", function (e) {
    let loader = document.querySelector('.loader');
    let bodyContent = document.getElementById('bodyContent');
    setTimeout(() => {
        loader.style.display = 'none';
        bodyContent.style.display = "block";
    }, 3000);
})

let bellBtn = document.getElementById('bellBtn');
let bellNotificationDiv = document.getElementById('bellNotificationDiv');
let bellNotification = document.getElementById('bell-notification');
let table = document.getElementById('table');
let showMoreBtn = document.getElementById('showMore');
let tableValues = ['facebook.com', '3456', '765', '40%', '$11111'];
let navContent = ['home', 'dashboard', 'inbox', 'products'];
let changeStatsBtn = document.getElementById('changeStatsBtn');
let lineGraph = document.getElementById('line-graph');


/* change image on dropdown change */
changeStatsBtn.addEventListener('change', function (e) {
    let srcValue = e.target.value;
    switch (srcValue) {
        case 'Last 6 months':
            lineGraph.src = "./images/line-graph1.png";
            break;
        case 'Last 4 months':
            lineGraph.src = "./images/line-graph2.png";
            break;
        case 'Last 2 months':
            lineGraph.src = "./images/line-graph3.png";
            break;

        default:
            break;
    }
})


/*show tabs based on nav click*/
function showTabContent(e, imgIds) {
    for (let index = 0; index < navContent.length; index++) {
        document.getElementById(navContent[index]).style.display = "none";
    }
    document.getElementById(e).style.display = "block";   
}


/*show/hide bell content on click*/
bellNotificationDiv.style.display = 'none'
bellBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (bellNotificationDiv.style.display === "none") {
        bellNotificationDiv.style.display = "block";
    } else {
        bellNotificationDiv.style.display = "none";
    }
    bellNotification.style.display = 'none';
})

/*load table content on showmore click*/
showMoreBtn.addEventListener('click', function (e) {
    let tbody1 = table.children[1];
    e.preventDefault();
    let tr = document.createElement('tr');
    for (let index = 0; index < 5; index++) {
        let td = document.createElement('td');
        td.innerHTML = tableValues[index];
        tr.appendChild(td);
    }

    tbody1.appendChild(tr)
    table.appendChild(tbody1);

})