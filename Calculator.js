
// === Tabs Switch ===
function showTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab=> tab.style.display = 'none');//Actually bro, ye tab variable forEach ke andar hi declare hota hai automatically.// Yahaan tab ek temporary variable hai.Har baar loop me tab ek alag element ko represent karega.
  document.getElementById(tabName).style.display = 'block';
}

/*Hide Tabe using for loop=> 
  for (let i = 0; i < tabs.length; i++) {
  let tab = tabs[i];
  tab.style.display = 'none';
}
*/

// === Basic Calculator ===
const display = document.getElementById('display');

// append() ka kaam hai — calculator ke display me jo likha hai, uske aage naya number ya operator add karna.
function append(value) {
  display.value += value;
}

// Clear entire display
function clearDisplay() {
  display.value = '';//here we are set null and empity value.which is clear complete display of our calculator.
}

//cleardigit() function ka kaam hai calculator display me se last entered number or symbol ko remove karna.
function cleardigit() {
  display.value = display.value.slice(0, -1);
}

// Calculate square root of current number
function squareroot() {
  if (display.value !== '') {
    display.value = Math.sqrt(parseFloat(display.value));
  }
}

// Calculate result
function calculate() {
  try {
    display.value = eval(display.value);//Matlab agar aapke paas koi string hai jisme JavaScript likha hai,toh eval() us string ko run (execute) kar deta hai jaise wo real code ho.
  } catch {
    display.value = 'Error';
  }
}

//  // === Currency Converter ===
//  function convertCurrency() {
//    const usd = document.getElementById('usd').value;
//    const inr = usd * 87; // Example conversion rate
//    document.getElementById('currency-result').innerText = `${usd} USD = ${inr} INR`;
//  }

// === Unit Converter ===
function convertCurrency() {

  // usd = 88.32;
  // eur = 102.30;
  // jpy = 0.58;
  // aud = 57.38;
  // gbp = 116.33;

//   INR → Foreign → Divide
//   Foreign → INR → Multiply

  const amount = document.getElementById('amount').value;
  const type = document.getElementById('conversion-type').value;
  let result;

  // if (type === 'inrTousd') result = amount / 87.87 + ' USD($)';
  // else if (type === 'usdToinr') result = amount * 87.87 + ' INR(₹)';
  // else if (type === 'inrToeur') result = amount / 101.33 + ' EUR(€)';
  // else if (type === 'eurToinr') result = amount * 101.33 + ' INR(₹)';
  // else if (type === 'inrTojpy') result = amount / 0.58 + ' JPY(¥)';
  // else if (type === 'jpyToinr') result = amount * 0.58 + ' INR(₹)';
  // else if (type === 'inrToaud') result = amount * 57.38 + ' AUD(A$)';
  // else if (type === 'audToinr') result = amount / 57.38 + ' INR(₹)';
  // else if (type === 'inrTogbp') result = amount * 116.33 + ' GBP(£)';
  // else if (type === 'gbpToinr') result = amount / 117.33 + ' INR(₹)';

  if (type === 'inrTousd') result = amount / 88.62 + ' USD ($)';
  else if (type === 'usdToinr') result = amount * 88.62 + ' INR (₹)';

  else if (type === 'inrToeur') result = amount / 102.30 + ' EUR (€)';
  else if (type === 'eurToinr') result = amount * 102.30 + ' INR (₹)';

  else if (type === 'inrTojpy') result = amount / 0.58 + ' JPY (¥)';
  else if (type === 'jpyToinr') result = amount * 0.58 + ' INR (₹)';

  else if (type === 'inrToaud') result = amount / 57.38 + ' AUD (A$)';
  else if (type === 'audToinr') result = amount * 57.38 + ' INR (₹)';

  else if (type === 'inrTogbp') result = amount / 116.33 + ' GBP (£)';
  else if (type === 'gbpToinr') result = amount * 116.33 + ' INR (₹)';

  document.getElementById('currency-result').innerText = result;
}

// === Unit Converter ===
function convertUnit() {
  const value = document.getElementById('unitValue').value;
  const type = document.getElementById('unitType').value;
  let result;

  if (type === 'cmToM') result = value / 100 + ' m';
  else if (type === 'mToCm') result = value * 100 + ' cm';
  else if (type === 'kgToLb') result = value * 2.20462 + ' lb';
  else if (type === 'lbToKg') result = value / 2.20462 + ' kg';
  else if (type === 'kgTogm') result = value * 1000 + ' gm';
  else if (type === 'gmToKg') result = value / 1000 + ' kg';

  document.getElementById('unit-result').innerText = result;
}

// === BMI Calculator ===
function calculateBMI() {
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value / 100; // cm to m
  if (weight && height) {
    const bmi = weight / (height * height);
    document.getElementById('bmi-result').innerText = 'BMI: ' + bmi.toFixed(2);
  } else {
    document.getElementById('bmi-result').innerText = 'Please enter both values';
  }
}

// === Tip Calculator ===
function calculateTip() {
  const bill = document.getElementById('bill').value;
  const tipPercent = document.getElementById('tipPercent').value;
  if (bill && tipPercent) {
    const tip = bill * (tipPercent / 100);
    document.getElementById('tip-result').innerText = 'Tip: ' + tip.toFixed(2);
  } else {
    document.getElementById('tip-result').innerText = 'Please fill both fields';
  }
}

// === Age Calculator ===
function calculateAge() {
  const dobInput = document.getElementById('dob').value;
  
  if (!dobInput) {
    document.getElementById('age-result').innerText = 'Please enter your date of birth!';
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById('age-result').innerText = 
    `Age: ${years} years, ${months} months, ${days} days`;
}

// === Show Basic Tab by Default ===
showTab('basic');
