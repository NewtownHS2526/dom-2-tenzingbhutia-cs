console.log("DOM Methods Learning Activity - Script Running");

/* 
================================================================================
SECTION 1: getElementById() - Exercises
================================================================================
*/

// ============================================
// EXERCISE 1: DEMO - getElementById
// ============================================
const runDemo1 = document.getElementById('run-demo-1');
const demoBtn1 = document.getElementById('demo-btn-1');
const demoText1 = document.getElementById('demo-text-1');
const demoBox1 = document.getElementById('demo-box-1');
const demoResult1 = document.getElementById('demo-result-1');

if (runDemo1) {
  runDemo1.addEventListener('click', function() {
    console.log("=== DEMO 1: getElementById ===");

    if (demoText1) {
      demoText1.textContent = "Text changed with textContent!";
      demoText1.style.color = "#10b981";
      demoText1.style.fontSize = "20px";
    }

    if (demoBox1) {
      demoBox1.innerHTML = "<strong>HTML</strong> changed!";
      demoBox1.style.backgroundColor = "#fef3c7";
    }

    if (demoBtn1) {
      demoBtn1.textContent = "Clicked!";
      demoBtn1.style.backgroundColor = "#10b981";
    }

    if (demoResult1) {
      demoResult1.innerHTML = `
        <strong>Demo Results:</strong><br>
        ✓ Used getElementById<br>
        ✓ Changed textContent<br>
        ✓ Changed innerHTML<br>
        ✓ Changed styles
      `;
    }

    setTimeout(() => {
      if (demoText1) demoText1.textContent = "Original text";
      if (demoBox1) demoBox1.innerHTML = "Box 1";
      if (demoBtn1) demoBtn1.textContent = "Click Me!";
      if (demoResult1) demoResult1.innerHTML = "";
    }, 3000);
  });
}

// ============================================
// EXERCISE 2: Student Practice - textContent
// ============================================
const practiceBtn1 = document.getElementById('practice-btn-1');

if (practiceBtn1) {
  practiceBtn1.addEventListener('click', function() {
    // TODO:
    // 1. Select #practice-text-1 using getElementById
    // 2. Change its textContent
  });
}

// ============================================
// EXERCISE 3: Student Practice - innerHTML
// ============================================
const practiceBtn2 = document.getElementById('practice-btn-2');

if (practiceBtn2) {
  practiceBtn2.addEventListener('click', function() {
    // TODO:
    // 1. Select #practice-html-1
    // 2. Change its innerHTML with bold and italic text
  });
}

// ============================================
// EXERCISE 4: Student Practice - style
// ============================================
const practiceBtn3 = document.getElementById('practice-btn-3');

if (practiceBtn3) {
  practiceBtn3.addEventListener('click', function() {
    // TODO:
    // 1. Select #practice-style-1
    // 2. Change color, fontSize, and backgroundColor
  });
}

/* 
================================================================================
SECTION 2: getElementsByClassName()
================================================================================
*/

// ============================================
// EXERCISE 1: DEMO
// ============================================
const runDemo2 = document.getElementById('run-demo-2');
const demoResult2 = document.getElementById('demo-result-2');

if (runDemo2) {
  runDemo2.addEventListener('click', function() {
    const demoCards = document.getElementsByClassName('demo-card');

    for (let i = 0; i < demoCards.length; i++) {
      demoCards[i].style.backgroundColor = "#dbeafe";
      demoCards[i].textContent = `Card ${i + 1} Updated`;
    }

    if (demoResult2) {
      demoResult2.textContent = "Updated all demo cards!";
    }
  });
}

// ============================================
// EXERCISE 2: Student Practice - textContent loop
// ============================================
const practiceBtn4 = document.getElementById('practice-btn-4');

if (practiceBtn4) {
  practiceBtn4.addEventListener('click', function() {
    // TODO:
    // 1. Select all .item-text elements
    // 2. Loop through them
    // 3. Update textContent
  });
}

// ============================================
// EXERCISE 3: Student Practice - innerHTML loop
// ============================================
const practiceBtn5 = document.getElementById('practice-btn-5');

if (practiceBtn5) {
  practiceBtn5.addEventListener('click', function() {
    // TODO:
    // 1. Select all .box-item elements
    // 2. Loop and update innerHTML
  });
}

// ============================================
// EXERCISE 4: Student Practice - style loop
// ============================================
const practiceBtn6 = document.getElementById('practice-btn-6');

if (practiceBtn6) {
  practiceBtn6.addEventListener('click', function() {
    // TODO:
    // 1. Select all .color-box elements
    // 2. Loop and update styles
  });
}

/* 
================================================================================
SECTION 3: querySelector()
================================================================================
*/

// ============================================
// EXERCISE 1: DEMOS
// ============================================
const runDemo3a = document.getElementById('run-demo-3a');
const runDemo3b = document.getElementById('run-demo-3b');
const runDemo3c = document.getElementById('run-demo-3c');
const demoResult3 = document.getElementById('demo-result-3');

if (runDemo3a) {
  runDemo3a.addEventListener('click', function() {
    const el = document.querySelector('#query-demo-1');
    if (el) el.textContent = "Selected by ID";
  });
}

if (runDemo3b) {
  runDemo3b.addEventListener('click', function() {
    const el = document.querySelector('.query-box');
    if (el) el.textContent = "First class selected";
  });
}

if (runDemo3c) {
  runDemo3c.addEventListener('click', function() {
    const el = document.querySelector('p.query-text');
    if (el) el.textContent = "Selected by tag";
  });
}

// ============================================
// EXERCISE 2–4: Student Practice
// ============================================
const practiceBtn7 = document.getElementById('practice-btn-7');
const practiceBtn8 = document.getElementById('practice-btn-8');
const practiceBtn9 = document.getElementById('practice-btn-9');

if (practiceBtn7) {
  practiceBtn7.addEventListener('click', function() {
    // TODO: querySelector with ID
  });
}

if (practiceBtn8) {
  practiceBtn8.addEventListener('click', function() {
    // TODO: querySelector with class
  });
}

if (practiceBtn9) {
  practiceBtn9.addEventListener('click', function() {
    // TODO: querySelector with complex selector
  });
}

/* 
================================================================================
FINAL CHALLENGE: Shopping Cart
================================================================================
*/

let cart = [];
let total = 0;

const addToCartButtons = document.getElementsByClassName('add-to-cart');

for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', function() {
    // TODO:
    // 1. Get product name and price using querySelector
    // 2. Add item to cart array
    // 3. Update total
    // 4. Call updateCartDisplay()
  });
}

function updateCartDisplay() {
  // TODO:
  // 1. Update #cart-items
  // 2. Update #cart-total
}

const clearCartBtn = document.getElementById('clear-cart');
if (clearCartBtn) {
  clearCartBtn.addEventListener('click', function() {
    // TODO: Clear cart and reset total
  });
}
