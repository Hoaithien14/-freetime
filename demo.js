
//1 BÀI TOÁN SLIDER CHẠY TỰ ĐỘNG SAU 7s
// const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
// const imgContainer = document.querySelector(".aspect-ratio-169")
// let imgNuber = imgPosition.length
// let index = 0
// imgPosition.forEach(function(image,index){
// image.style.left = index*100 + "%"
// })
// function imgSlide (){
// index++;
// console.log(index)
// if (index>=imgNuber) {index=0}
// imgContainer.style.left = "-"+index*100 + "%"
// }
// setInterval(imgSlide,7000)
// -------------------------------------------------------------------------------------------------------------------------------------
// 

//2 form adress-form khuyến mãi 
// bắt sự kiện click vào
const adressbtn = document.querySelector('#adress-form')
// console.log(adressbtn);
adressbtn.addEventListener("click",function(){
  document.querySelector('.adress-form').style.display = "flex"
})
//3 bắt sự kiện đóng close form khuyến mãi
const adressclose = document.querySelector('#adress-close')
adressclose.addEventListener("click",function(){
  document.querySelector('.adress-form').style.display = "none"
})


//------------------------------BÀI TOÁN 1: nút tiến lùi slider ( slider js cách 2 thuần )---------------------------------------------------------------------------------------------------------------------------------
// tất cả 2 cái let and right
let index = 0
const imgNuber = document.querySelectorAll('.aspect-ratio-169 img')
// tất cả
// riêng
const rightbtn = document.querySelector('.right-btn')
rightbtn.addEventListener("click",function(){
  // bài toán index next tới điểm dừng
    index = index+1
    if(index>imgNuber.length-1){
      index = 0
    }
  document.querySelector(".aspect-ratio-169").style.right = index *100+"%"
})
const leftbtn = document.querySelector('.left-btn')
leftbtn.addEventListener("click",function(){
 
  // bài toán index lùi tới điểm dừng
  index = index-1
    if(index<=0){
      index = imgNuber.length-1
    }
  document.querySelector(".aspect-ratio-169").style.right = index*100+"%"
  })


  // ---------------------

  // -----------------BÀI TOÁN 2: slider dot kích sẽ chạy ảnh chuyển-----------
const imgNuberLi = document.querySelectorAll('.dot-container .dot')
let dotactive = document.querySelector('.active')
// SỬ DỤNG HÀM FOREACH
imgNuberLi.forEach(function(dot,index){
   dot.addEventListener("click",function(){
     removeactive()
  document.querySelector(".aspect-ratio-169").style.right = index*100+"%"
      dot.classList.add("active")
   })
})
function removeactive (){
  let dotactive = document.querySelector(".active")
  dotactive.classList.remove("active")
}
// ------------------------

// ----------------------------BÀI TOÁN 3: IMGAUTO SLIDER CHẠY TỰ Đụng------------------
// gán let index = 0 ở trên r
function imgAuto(){
   index = index + 1
   if(index>imgNuber.length-1){
    index = 0
  }
  //ẢNH CHẠY TỰ ĐỘNG CỘNG VỚI NÚT DOT TỚI LÙI CHẠY THEO
  removeactive()
  document.querySelector(".aspect-ratio-169").style.right = index*100+"%"
  imgNuberLi[index].classList.add("active")
  // console.log(index)
}
setInterval(imgAuto,5000)

// ---------------------------BÀI TOÁN 4 ẢNH CHẠY TỰ ĐỘNG CỘNG VỚI NÚT DOT TỚI LÙI CHẠY THEO-----------------------------------------------
// ĐOẠN CODE Ở TRÊN
// removeactive()
// document.querySelector(".aspect-ratio-169").style.right = index*100+"%"
// imgNuberLi[index].classList.add("active")



// ------------------------------ BÀI TOÁN 5 CLICK VÀO NÚT TỚI ẢNH THÌ NÚT DOTBTN CHẠY THEO TỪNG CLICK ------------------------------
