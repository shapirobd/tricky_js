// Write a function called createAccount which creates a bank account given a PIN number and an initial deposit amount. The return value should be an object with four methods on it:

// checkBalance: Given the correct PIN, return the current balance. (If the PIN is invalid, return “Invalid PIN.”)
// deposit: Given the correct PIN and a deposit amount, increment the account balance by the amount. (If the PIN is invalid, return “Invalid PIN.”)
// withdraw: Given the correct PIN and a withdrawal amount, decrement the account balance by the amount. You also shouldn’t be able to withdraw more than you have. (If the PIN is invalid, return “Invalid PIN.”)
// changePin: Given the old PIN and a new PIN, change the PIN number to the new PIN. (If the old PIN is invalid, return “Invalid PIN.”)

function createAccount(pin, amount = 0) {
	let balance = amount;
	return {
		checkBalance: function (enteredPin) {
			if (enteredPin === pin) return `$${balance}`;
			return "Invalid PIN.";
		},
		deposit: function (enteredPin, depositAmount) {
			if (enteredPin === pin) {
				balance += depositAmount;
				return `Succesfully deposited $${depositAmount}. Current balance: $${balance}.`;
			}
			return "Invalid PIN.";
		},
		withdraw: function (enteredPin, withdrawAmount) {
			if (enteredPin === pin) {
				if (withdrawAmount > balance) {
					return "Withdrawal amount exceeds account balance. Transaction cancelled.";
				}
				balance -= withdrawAmount;
				return `Succesfully withdrew $${withdrawAmount}. Current balance: $${balance}.`;
			}
			return "Invalid PIN.";
		},
		changePin: function (oldPin, newPin) {
			if (oldPin === pin) {
				pin = newPin;
				return "PIN successfully changed!";
			}
			return "Invalid PIN.";
		},
	};
}

module.exports = { createAccount };
