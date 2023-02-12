const list1 = document.querySelectorAll('.item-list1')
list1.forEach((item)=>{
    item.addEventListener('mouseover', function(){
        item.style.Zindex = '2'
        item.style.filter = "unset"
    })
    item.addEventListener('mouseleave', function(){
        item.style.filter = "blur(10px)"
    })
   
})


