const addTool = document.querySelector("#toolForm");
const tool = [];

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

const addToolHandler = e => {
  e.preventDefault();

  const newTool = new Tool(
    document.querySelector("#toolInput").value,
    document.querySelector("#quantityInput").value,
    document.querySelector("#valueInput").value
  );

  tool.push(newTool);
};

const displayToolData = toolArr => {
  const trows = document.querySelectorAll("tbody tr");
  trows.forEach(row => row.remove());

  const tbody = document.querySelector("tbody");
  toolArr.forEach(g => {
    const growContentClone = document.importNode(
      document.querySelector("#tool-row").content,
      true
    );

    const tdArr = growContentClone.querySelectorAll("td");

    tdArr[0].textContent = g.desc;
    tdArr[1].textContent = g.quantity;
    tdArr[2].textContent = g.value;
    tdArr[3].textContent = g.total;
    tbody.appendChild(growContentClone);
  });
};

// /**
//  * Pull data for the tool input.
//  * @param {string} - Pull data from ElementID as a string.
//  * @return {string} - Returns toolInput as string.
//  */
// const getToolInput = () => {
//   const toolInput = document.getElementById("toolInput").value;
//   return toolInput;
// };

// /**
//  * Pull data for quantity input and convert it to an int.
//  * @param {number} - Pull data from ElementID and convert to int.
//  * @return {number} - Returns quantityInput as integer number.
//  */
// const getQuantityInput = () => {
//   const quantityInput = parseInt(
//     document.getElementById("quantityInput").value,
//     10
//   );
//   return quantityInput;
// };

// /**
//  * Pull data for value and converting it to a floating point.
//  * @param {number} - Pull data from ElementID and convert to floating point.
//  * @return {number} - Returns valueInput as Floating Point.
//  */
// const getValueInput = () => {
//   const valueInput = parseFloat(
//     document.getElementById("valueInput").value,
//     10
//   );
//   return valueInput;
// };

// /**
//  * Create function to push object data into a data Array and reset form.
//  * @param {Object} data - Tool Object.
//  * @param {string} tool- Tool description
//  * @param {number} quantity - Quantity of tool on hand.
//  * @param {number} value - Value of tool
//  */
// const controller = function submit() {
//   data.push({
//     tool: getToolInput(),
//     quantity: getQuantityInput(),
//     value: getValueInput()
//   });
//   document.getElementById("toolForm").reset();
// };

addTool.addEventListener("submit", addToolHandler);
