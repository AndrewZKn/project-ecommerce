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

// myInput.addEventListener("keyup", onClick)


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

/* comment-----------------------------------------------------------------------------------------------------------------------------------------> */

const textarea =document.querySelector('.container__new-text')

const commentBox = document.querySelector('.container__comment-new-user')
// function buttonToggle(){
//   let input =document.querySelector('.container__comment-input')
//   let button = document.createElement('div')
//   button.setAttribute('class', 'container__comment-new')
//   input.appendChild(button)
//   return button.innerHTML = `
//     <div class="container__new-image">
//       <img class="container__new-img" src="https://ik.imagekit.io/fyhbxzra7/portpolio__journey/journey__image/frog.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676105308499" width="40">
//       <textarea class="container__new-text"></textarea>
//     </div>
//     <div class="container__new-button">
//       <button class="container__new-button-btn" id="container__new-button-btn-post" type="button">Post comment</button>
//       <button class="container__new-button-btn" type="button">Cancel</button>
//     </div>
// }

const post = document.getElementById('container__new-button-btn-post')
post.addEventListener('click', showUser)
function showUser(){
  var user = document.createElement('div')
  user.setAttribute('class', 'container__comment-athour')
  commentBox.appendChild(user)
  
  return user.innerHTML = `
      <div class="container__comment-athour">
        <div class="container__author-box">
            <img class="container__author-image" src="https://ik.imagekit.io/fyhbxzra7/portpolio__journey/journey__image/owl.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676105309180" >
            <div class="container__author-content">
                <span class="container__author-span">Andrew Zoldyck</span>
                <span class="container__author--span">Shared publicly - Jan 2020</span>
            </div>
        </div>
        <div class="container__author-word">
            <p class="container__author-box-text" id="content">
              ${textarea.value}
            </p>
        </div>
      </div>
      <div class="container__comment-action">
          <div class="container__action">
              <div class="container__action-boxicon">
                  <i class="container__action-icon fa-regular fa-thumbs-up"></i>
                  <span class="container__action-span">Like</span>
              </div>
              <div class="container__action-boxicon">
                  <i class="container__action-icon fa-regular fa-comment"></i>
                  <span class="container__action-span">comment</span>
              </div>
              <div class="container__action-boxicon">
                  <i class="fa-solid fa-share"></i>
                  <span class="container__action-span">share</span>
              </div>
            </div>
      </div>
    `
}

function saveData(){
  const textarea = document.querySelector('.container__new-text').value
  const data = []
  data.push(
    {
      textarea:textarea
    }
  )
  localStorage.setItem("data", JSON.stringify(data))
  console.log(data)
}
function keydown(){
  textarea.addEventListener('keydown', ()=>{
    if(event.key == 'Enter'){
      saveData(textarea.value)
      showUser()
      textarea.value =''
    }
  })
}

keydown()
