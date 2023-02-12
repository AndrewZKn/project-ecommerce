/*  logic-----------------------------------------------------------------------------------------------------------------------------------------> */

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

/* slider-----------------------------------------------------------------------------------------------------------------------------------------> */


//  Slider
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const removeActiveClasses = () =>
  panels.forEach((panel) => panel.classList.remove("active"));

//Input value
const myInput = document.getElementById("myInput");

myInput.addEventListener("keyup", onClick)


function onClick() {
    let valueItem = myInput.value;
    Array.from(panels).forEach(function(ele) {
       let priceItem = ele.querySelector('.info').lastElementChild.textContent;
       let nameItem = ele.querySelector('.info').firstElementChild.textContent.toLocaleLowerCase();
       console.log(priceItem)
       console.log(nameItem)
       if(priceItem.indexOf(valueItem) !== -1 || nameItem.indexOf(valueItem) !== -1 ) {
            ele.style.display = 'block';
       } else {
            ele.style.display = 'none';
       }
    })
}
