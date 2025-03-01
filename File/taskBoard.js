// Discover section added 
document.querySelector('#taskAssigned2').addEventListener('click',function(){
    window.location.href = '../Blogs.html'
})



// presentDate section
let dateSection = document.getElementById('presentDate')
let today = new Date;
let dateType = {
    weekday:'short',
    month:'short',
    day:'2-digit',
    year:'numeric'
}
let presentDate = today.toLocaleDateString('en-US', dateType)
dateSection.innerText = presentDate;



