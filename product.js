import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                       *//* empty css                      */let d=document.querySelector(".iconCart"),n=document.querySelector(".cart"),l=document.querySelector(".container"),m=document.querySelector(".close");d.addEventListener("click",function(){n.style.right=="-100%"?(n.style.right="0",l.style.transform="translateX(-400px)"):(n.style.right="-100%",l.style.transform="translateX(0)")});m.addEventListener("click",function(){n.style.right="-100%",l.style.transform="translateX(0)"});let r=[{id:1,name:"Яйця інкубаційні Фавероль",price:60,unit:"шт",desc:"Кількість обмежена",image:"images/1eggs-faverol.jpg"},{id:2,name:"Яйця інкубаційні Маран",price:60,unit:"шт",desc:"Кількість обмежена",image:"images/2maran-eggs.jpg"},{id:4,name:"Яйця інкубаційні Ухейілюй",price:70,unit:"шт",desc:"Кількість обмежена",image:"images/4uheilui.jpg"},{id:3,name:"Яйця інкубаційні Амераукан",price:70,unit:"шт",desc:"Кількість обмежена",image:"images/3ameraukan.jpg"},{id:5,name:"Яйця перепілки",price:5,unit:"шт",desc:"В наявності",image:"images/5quail-eggs.jpg"},{id:6,name:"М'ясо перепілки",price:250,unit:"кг",desc:"В наявності",image:"images/6quail.jpg"},{id:7,name:"М'ясо бойлера",price:0,unit:"кг",desc:"Очікується",image:"images/7chicken.jpg"},{id:8,name:"М'ясо індика",price:0,unit:"кг",desc:"Очікується",image:"images/8turk.jpg"},{id:9,name:"М'ясо вутки",price:0,unit:"кг",desc:"Очікується",image:"images/9duck.jpg"}];o();function o(){let t=document.querySelector(".listProduct");t.innerHTML="",r!=null&&r.forEach(e=>{let a=document.createElement("div");a.classList.add("item"),a.innerHTML=`<img src="${e.image}" alt="product name">
            <h2>${e.name}</h2>
            <div class="desc">${e.desc}</div>
            <div class="price">₴${e.price}  / 1 ${e.unit}</div>
            <button onclick="addCart(${e.id})">Додати до кошика</button>`,t.appendChild(a)})}let c=[];function u(){var t=document.cookie.split("; ").find(e=>e.startsWith("listCart="));t?c=JSON.parse(t.split("=")[1]):c=[]}u();g();function g(){let t=document.querySelector(".listCart");t.innerHTML="";let e=document.querySelector(".totalQuantity"),a=0;c&&c.forEach(i=>{if(i){let s=document.createElement("div");s.classList.add("item"),s.innerHTML=`<img src="${i.image}">
                    <div class="content">
                        <div class="name">${i.name}</div>
                        <div class="price">$${i.price} / 1 product</div>
                    </div>
                    <div class="quantity">
                        <button onclick="changeQuantity(${i.id}, '-')">-</button>
                        <span class="value">${i.quantity}</span>
                        <button onclick="changeQuantity(${i.id}, '+')">+</button>
                    </div>`,t.appendChild(s),a=a+i.quantity}}),e.innerText=a}
//# sourceMappingURL=product.js.map
