const form = document.querySelector("form");

const data = [];

/**
 * Pull data for the tool input.
 * @param {string} - Pull data from ElementID as a string.
 * @return {string} - Returns toolInput as string.
 */
const getToolInput = () => {
  const toolInput = document.getElementById("toolInput").value;
  return toolInput;
};

/**
 * Pull data for quantity input and convert it to an int.
 * @param {number} - Pull data from ElementID and convert to int.
 * @return {number} - Returns quantityInput as integer number.
 */
const getQuantityInput = () => {
  const quantityInput = parseInt(
    document.getElementById("quantityInput").value,
    10
  );
  return quantityInput;
};

/**
 * Pull data for value and converting it to a floating point.
 * @param {number} - Pull data from ElementID and convert to floating point.
 * @return {number} - Returns valueInput as Floating Point.
 */
const getValueInput = () => {
  const valueInput = parseFloat(
    document.getElementById("valueInput").value,
    10
  );
  return valueInput;
};

/**
 * Create function to push object data into a data Array and reset form.
 * @param {Object} data - Tool Object.
 * @param {string} tool- Tool description
 * @param {number} quantity - Quantity of tool on hand.
 * @param {number} value - Value of tool
 */
const controller = function submit() {
  data.push({
    tool: getToolInput(),
    quantity: getQuantityInput(),
    value: getValueInput()
  });
  document.getElementById("toolForm").reset();
};

// Event Listener to replace default submit actions.
form.addEventListener("submit", e => {
  e.preventDefault();
  controller();
});
