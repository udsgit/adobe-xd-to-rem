document.body.addEventListener("click", changePxToRem);

function changePxToRem(e) {

  let toRem = (number) => `${number}px ➡️ (${(number * 0.0625) / 0.25}) ${String(Number((number * 0.0625).toFixed(2)))}rem                        \n`; 

    let rightContainerEl = document.querySelector("[data-auto='stylesContainer']");
    let body = e.currentTarget

    body.querySelectorAll("text").forEach(textEl => {
      textEl.previousElementSibling.style.width = "130px";
      let text = textEl.textContent.trim();
      textEl.textContent = toRem(Number(text));
    });

    rightContainerEl.querySelectorAll("span").forEach(span => {
      let text = span.textContent.trim();

      if(!isNaN(text) && text.length !== 0 && Number(text) !== 0){
        span.textContent = toRem(Number(text))
      }else if(isNaN(text) && text.length !== 0){
          let slice2 = Number(text.slice(0,-2));

          if(!isNaN(slice2) && slice2.length !== 0 && slice2 !== 0){
            span.textContent = toRem(slice2);
          }
          
      }
    })
}

