const maleImages = ["https://randomuser.me/api/portraits/men/1.jpg",
"https://randomuser.me/api/portraits/men/2.jpg",
"https://randomuser.me/api/portraits/men/3.jpg",
"https://randomuser.me/api/portraits/men/4.jpg",
"https://randomuser.me/api/portraits/men/5.jpg",
"https://randomuser.me/api/portraits/men/6.jpg",
"https://randomuser.me/api/portraits/men/7.jpg",
"https://randomuser.me/api/portraits/men/8.jpg",
"https://randomuser.me/api/portraits/men/9.jpg",
"https://randomuser.me/api/portraits/men/10.jpg"
    ];
const femaleImages = [
    "https://randomuser.me/api/portraits/women/1.jpg",
"https://randomuser.me/api/portraits/women/2.jpg",
"https://randomuser.me/api/portraits/women/3.jpg",
"https://randomuser.me/api/portraits/women/4.jpg",
"https://randomuser.me/api/portraits/women/5.jpg",
"https://randomuser.me/api/portraits/women/6.jpg",
"https://randomuser.me/api/portraits/women/7.jpg",
"https://randomuser.me/api/portraits/women/8.jpg",
"https://randomuser.me/api/portraits/women/9.jpg",
"https://randomuser.me/api/portraits/women/10.jpg"

];
const otherImages = [
    "https://randomuser.me/api/portraits/lego/1.jpg",
"https://randomuser.me/api/portraits/lego/2.jpg",
"https://randomuser.me/api/portraits/lego/3.jpg",
"https://randomuser.me/api/portraits/lego/4.jpg",
"https://randomuser.me/api/portraits/lego/5.jpg",
"https://randomuser.me/api/portraits/lego/6.jpg",
"https://randomuser.me/api/portraits/lego/7.jpg",
"https://randomuser.me/api/portraits/lego/8.jpg",
"https://randomuser.me/api/portraits/lego/9.jpg",
"https://randomuser.me/api/portraits/lego/10.jpg"

];

const photo = document.querySelector('.js-image');
export function image(gender, num){

    if(gender === "male"){
       
        photo.src = maleImages[num]
       }

   else if(gender === "female"){
       photo.src = femaleImages[num];
       
   }

   else {
       photo.src = otherImages[num];
       
   }

}