// Track current step
let currentStep = 1;
const totalSteps = 3;

// DOM elements
const form = document.getElementById('membershipForm');
const confirmationStep = document.getElementById('confirmationStep');
const paymentStep = document.getElementById('paymentStep');
const progressBar = document.getElementById('formProgress');
const bankTransferDetails = document.getElementById('bankTransferDetails');
const bankTransferSuccess = document.getElementById('bankTransferSuccess');

// Initialize PayPal buttons
function initPayPal() {
  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: document.getElementById('paymentAmount').textContent.replace('$', '')
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert('Payment completed! Thank you for your membership.');
        // Here you would typically submit the form to your server
      });
    }
  }).render('#paypal-button-container');
}

function validateStep1() {
  if (form.checkValidity()) {
    nextStep();
    updateConfirmationDetails();
  } else {
    form.classList.add('was-validated');
  }
}

function nextStep() {
  if (currentStep < totalSteps) {
    document.querySelector(`.step-${currentStep}`).classList.add('d-none');
    currentStep++;
    document.querySelector(`.step-${currentStep}`).classList.remove('d-none');
    updateProgressBar();
    
    // Initialize PayPal buttons when reaching payment step
    if (currentStep === 3) {
      initPayPal();
    }
  }
}

function prevStep() {
  if (currentStep > 1) {
    document.querySelector(`.step-${currentStep}`).classList.add('d-none');
    currentStep--;
    document.querySelector(`.step-${currentStep}`).classList.remove('d-none');
    updateProgressBar();
  }
}

function updateProgressBar() {
  const progressPercentage = (currentStep / totalSteps
