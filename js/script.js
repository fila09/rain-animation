"use strict"

function rain() {
   const rainContainer = document.querySelector('.rain');
   let drops = '';

   for (let index = 0; index < 100; index++) {
      const randomAnimate = Math.floor(Math.random() * 98 + 2);
      const randomBottom = Math.floor(Math.random() * 4 + 2);

      drops += `
         <div class="drop" style="
               left: ${index}%;
               bottom: ${randomBottom + 100}%;
               animation-delay: 0.${randomAnimate}s;
               animation-duration: 0.5${randomAnimate}s;">
            <div class="stem" style="
               animation-delay: 0.${randomAnimate}s;
               animation-duration: 0.5${randomAnimate}s;">
            </div>
            <div class="splat" style="
               animation-delay: 0.${randomAnimate}s;
               animation-duration: 0.5${randomAnimate}s;">
            </div>
         </div>
      `;
   }

   rainContainer.innerHTML = drops;
}

window.addEventListener('load', windowLoad);

function windowLoad() {
   rain();
}