const costPriceElem = document.querySelector(".cost-price__input");
const quantityElem = document.querySelector(".quantity__input");
const sellingPriceElem = document.querySelector(".selling-price__input");

console.log(costPriceElem);
console.log(quantityElem);
console.log(sellingPriceElem);

const output = document.createElement("div");
output.classList.add("output");

const checkBtn = document.querySelector("#check-btn");
checkBtn.addEventListener("click", (event) => {
  let costPrice = costPriceElem.value;
  let quantity = quantityElem.value;
  let sellingPrice = sellingPriceElem.value;

  if (costPrice === "" || quantity === "" || sellingPrice === "") {
    output.innerHTML = `
        <h2>Please enter valid value/s in upper field/s.</h2>
        <h2>It helps us to give you the most accurate result.</h2>
    `;
  } else {
    let costPriceVal = parseFloat(costPrice);
    let quantityVal = parseFloat(quantity);
    let sellingPriceVal = parseFloat(sellingPrice);

    let totalCP = costPriceVal * quantityVal;
    let totalSP = sellingPriceVal * quantityVal;

    if (totalSP > totalCP) {
      console.log("Entering profit case");
      let profit = totalSP - totalCP;
      let profitPercent = (profit / totalCP) * 100;

      let congratsMessage25 = "Hey you might be good at this !";
      let congratsMessage50 = "Woah this feeling is magical !";
      let congratsMessage75 = "What the !! This might be off all the charts.";

      output.innerHTML = `
            <h2>Oh you made a profit of ${profitPercent}%, which sums up to a total of ₹${profit}.</h2>
        `;
      if (profitPercent >= 75) {
        output.innerHTML += `
            <h2>${congratsMessage75}</h2>
            `;
      } else if (profitPercent >= 50) {
        output.innerHTML += `
            <h2>${congratsMessage50}</h2>
            `;
      } else {
        output.innerHTML += `
            <h2>${congratsMessage25}</h2>
            `;
      }
    } else if (totalCP > totalSP) {
      console.log("Entering loss case");
      let loss = totalCP - totalSP;
      let lossPercent = (loss / totalCP) * 100;

      let consolationMessage25 = "Maybe today's not your day !";
      let consolationMessage50 = "Woah this is brutal !";
      let consolationMessage75 =
        "May have to completely rethink this investment.";

      output.innerHTML = `
            <h2>Oh you made a loss of ${lossPercent}%, which sums up to a total of ₹${loss}.</h2>
        `;
      if (lossPercent >= 75) {
        output.innerHTML += `
            <h2>${consolationMessage75}</h2>
            `;
      } else if (lossPercent >= 50) {
        output.innerHTML += `
            <h2>${consolationMessage50}</h2>
            `;
      } else {
        output.innerHTML += `
            <h2>${consolationMessage25}</h2>
            `;
      }
    } else {
      console.log("Entering no profit no loss case");
      output.innerHTML = `
        <h2>Neither profit nor loss. This one looks fine.</h2>
        `;
    }
  }
  document.body.appendChild(output);
});
