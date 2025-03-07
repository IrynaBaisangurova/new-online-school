import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                       *//* empty css                      */let s=document.querySelector(".iconCart"),i=document.querySelector(".cart"),c=document.querySelector(".container"),o=document.querySelector(".close");s.addEventListener("click",function(){i.style.right=="-100%"?(i.style.right="0",c.style.transform="translateX(-400px)"):(i.style.right="-100%",c.style.transform="translateX(0)")});o.addEventListener("click",function(){i.style.right="-100%",c.style.transform="translateX(0)"});let n=[];function u(){var e=document.cookie.split("; ").find(a=>a.startsWith("listCart="));e?n=JSON.parse(e.split("=")[1]):n=[]}u();d();function d(){let e=document.querySelector(".listCart");e.innerHTML="";let a=document.querySelector(".totalQuantity"),l=0;n&&n.forEach(t=>{if(t){let r=document.createElement("div");r.classList.add("item"),r.innerHTML=`<img src="${t.image}">
                    <div class="content">
                        <div class="name">${t.name}</div>
                        <div class="price">₴${t.price} / 1 ${t.unit}</div>
                    </div>
                    <div class="quantity">
                        <button onclick="changeQuantity(${t.id}, '-')">-</button>
                        <span class="value">${t.quantity}</span>
                        <button onclick="changeQuantity(${t.id}, '+')">+</button>
                    </div>`,e.appendChild(r),l=l+t.quantity}}),a.innerText=l}
//# sourceMappingURL=product.js.map
