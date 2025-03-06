import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                       *//* empty css                      */let o=document.querySelector(".iconCart"),a=document.querySelector(".cart"),c=document.querySelector(".container"),d=document.querySelector(".close");o.addEventListener("click",function(){a.style.right=="-100%"?(a.style.right="0",c.style.transform="translateX(-400px)"):(a.style.right="-100%",c.style.transform="translateX(0)")});d.addEventListener("click",function(){a.style.right="-100%",c.style.transform="translateX(0)"});let r=null;fetch("https://IrynaBaisangurova.github.io/data.json").then(t=>t.json()).then(t=>{r=t,u()});function u(){let t=document.querySelector(".listProduct");t.innerHTML="",r!=null&&r.forEach(e=>{let n=document.createElement("div");n.classList.add("item"),n.innerHTML=`<img src="${e.image}" alt="">
            <h2>${e.name}</h2>
             <div class="desc">${e.desc}</div>
            <div class="price">₴${e.price} / 1 ${e.unit}</div>
            <button onclick="addCart(${e.id})">Додати до кошика</button>`,t.appendChild(n)})}let l=[];function m(){var t=document.cookie.split("; ").find(e=>e.startsWith("listCart="));t?l=JSON.parse(t.split("=")[1]):l=[]}m();y();function y(){let t=document.querySelector(".listCart");t.innerHTML="";let e=document.querySelector(".totalQuantity"),n=0;l&&l.forEach(i=>{if(i){let s=document.createElement("div");s.classList.add("item"),s.innerHTML=`<img src="${i.image}">
                    <div class="content">
                        <div class="name">${i.name}</div>
                        <div class="price">₴${i.price} / 1 ${i.unit}</div>
                    </div>
                    <div class="quantity">
                        <button onclick="changeQuantity(${i.id}, '-')">-</button>
                        <span class="value">${i.quantity}</span>
                        <button onclick="changeQuantity(${i.id}, '+')">+</button>
                    </div>`,t.appendChild(s),n=n+i.quantity}}),e.innerText=n}
//# sourceMappingURL=product.js.map
