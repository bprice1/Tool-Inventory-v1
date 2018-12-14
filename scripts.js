const toolForm = document.querySelector("#tool-form");
const tool = [];
let quantityTotal = 0;
let valueTotal = 0;
let colorValue = "";

/** Function constructor to build tool array.
 * @param {Object} Tool - Tool
 * @param {string} Tool.desc - Tool description
 * @param {string} Tool.quantity - Tool quantity
 * @param {string} Tool.value - Tool value
 */
const Tool = function Tool(desc, quantity, value, total) {
  this.desc = desc;
  this.quantity = quantity;
  this.value = value;
  this.total = total;
};

const displayToolData = () => {
  const trows = document.querySelectorAll("tbody tr");
  trows.forEach(row => row.remove());

  const tbody = document.querySelector("tbody");
  tool.forEach(g => {
    const growContentClone = document.importNode(
      document.querySelector("#tool-row").content,
      true
    );

    const tdArr = growContentClone.querySelectorAll("td");

    tdArr[0].textContent = g.desc;
    tdArr[1].textContent = g.quantity;
    tdArr[2].textContent = g.value;
    tdArr[3].textContent = g.total;
    colorValue = g.value;
    tbody.appendChild(growContentClone);
  });
};

const toolFormHandler = e => {
  e.preventDefault();

  /** Pull data for quantity input and convert it to an int.
   * @param {number} - Pull data from ElementID and convert to int.
   * @return {number} - Returns quantityInput as integer number.
   */
  const getQuantityInput = () => {
    const quantityInput = parseInt(
      document.querySelector("#quantity-input").value,
      10
    );
    return quantityInput;
  };

  /** Pull data for value and converting it to a floating point.
   * @param {number} - Pull data from ElementID and convert to floating point.
   * @return {number} - Returns valueInput as Floating Point.
   */
  const getValueInput = () => {
    const valueInput = parseFloat(
      document.querySelector("#value-input").value,
      10
    );
    return valueInput;
  };

  const totalInput = getValueInput() * getQuantityInput();

  const newTool = new Tool(
    document.querySelector("#tool-input").value,
    getQuantityInput(),
    getValueInput(),
    totalInput
  );

  /** Total quantities pulled from inputs.
   * @param {number} - Total quantities pulled from inputs.
   * @return {number} - Returns quantityTotal.
   */
  const getQuantityTotal = function getQuantityTotal() {
    quantityTotal += getQuantityInput();
    quantityTotal = parseInt(quantityTotal, 10);
    return quantityTotal;
  };

  /** Total values pulled from inputs.
   * @param {number} - Total values pulled from inputs.
   * @return {number} - Returns valueTotal.
   */
  const getValueTotal = function getValueTotal() {
    valueTotal += totalInput;
    valueTotal = parseFloat(valueTotal, 10);
    return valueTotal;
  };

  document.querySelector("#t-quantity").textContent = getQuantityTotal();
  document.querySelector("#t-value").textContent = getValueTotal();

  toolForm.reset();
  tool.push(newTool);

  displayToolData();

  // Adjust colors for '#t-value' where the 'total value' is > 1000.
  const tvalues = document.querySelectorAll("#tool-total");
  tvalues.forEach(tvalue => {
    // Get this value as integer
    const v = Number.parseInt(tvalue.textContent, 10);

    if (v > 1000) {
      // Add a class to the parent element - <tr>
      tvalue.parentElement.classList.add("is-high-value");
    } else {
      tvalue.parentElement.classList.add("is-normal-value");
    }
  });
};

toolForm.addEventListener("submit", toolFormHandler);
