const checkIcon = document.querySelectorAll('#check')

for (let i = 0; i < checkIcon.length ; i++ ) {
    checkIcon[i].addEventListener('click', function(){
        if(checkIcon[i].classList.contains('fa-regular')) {
    checkIcon[i].classList.remove('fa-regular')
   checkIcon[i].classList.add('fa-solid')
   }
   else {
    checkIcon[i].classList.add('fa-regular')
   checkIcon[i].classList.remove('fa-solid')
   }
    })
}