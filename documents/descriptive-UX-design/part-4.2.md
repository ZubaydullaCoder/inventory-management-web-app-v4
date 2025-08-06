Excellent. Let's proceed with the final step of the transaction: **4.2 Checkout & Payments**.

This flow begins immediately after the cart has been finalized (end of Flow 4.1). The focus here is on a swift and error-free payment process, accommodating the different payment methods specified in the PRD (Section 4.2).

---

### **User Flow Diagram: 4.2 Checkout & Payments**

**Objective:** A Cashier finalizes a sale by accepting payment and completing the transaction in the system.

**Actor:** Cashier

---

**1. Start: Initiate Payment**

- The Cashier has finished adding items to the cart and clicks the primary `[Payment]` or `[Checkout]` button on the POS Interface.

**2. Payment Modal Opens**

- A large modal pop-up appears, overlaying the main interface. This modal is the dedicated workspace for handling the payment.
- It clearly displays the final `Total Amount Due`.
- It presents the available payment method options as large, clear buttons: `Cash`, `Card`, `E-Wallet`.
- **Conditional Step:** The `On Account` payment button is also displayed, but it is only **enabled** if a customer has been assigned to the sale (as per PRD 5.3).

**3. Cashier Selects a Payment Method**

- **IF** `Cash` is selected -> **Go to Branch A**.
- **IF** `Card` or `E-Wallet` is selected -> **Go to Branch B**.
- **IF** `On Account` is selected -> **Go to Branch C**.

---

#### **Branch A: Payment by Cash**

- **A1. Enter Amount Received**
  - An input field appears labeled "Amount Received".
  - The Cashier enters the amount of cash the customer handed them.
- **A2. System Calculates Change**
  - The system instantly calculates the difference and displays the `Change Due` in a large, clear format.
- **A3. Cashier Clicks [Complete Sale]** -> **Go to Step 4**.

---

#### **Branch B: Payment by Card or E-Wallet**

- **B1. Enter Reference Number**
  - An optional input field appears labeled "Reference Number" or "Transaction ID".
  - This allows the Cashier to record the ID from the separate physical card terminal for reconciliation purposes.
- **B2. Cashier Clicks [Complete Sale]** -> **Go to Step 4**.

---

#### **Branch C: Payment "On Account"**

- **C1. Confirm On Account Sale**
  - The system shows the customer's name and their current balance.
  - The Cashier confirms this is the correct action.
- **C2. Cashier Clicks [Complete Sale]** -> **Go to Step 4**.

---

**4. System Finalizes Transaction**

- Upon clicking `[Complete Sale]`, the system performs the critical background tasks:
  1.  Creates a permanent, detailed sales record (for Section 4.3).
  2.  Decreases the `Current Stock Quantity` for all items sold (as per Section 3.2.1).
  3.  If the sale was "On Account", adds the total amount to the customer's outstanding debt balance (for Section 5.3).

**5. "Sale Complete" Confirmation Screen**

- The content of the payment modal changes to a confirmation screen.
- It displays a large success message: "Sale Complete!".
- If the payment was cash, it prominently displays the `Change Due`.
- It provides receipt options: `[Print Receipt]` and `[Email Receipt]`.
- A single, large primary button is shown: `[Start New Sale]`.

**6. Cashier Starts New Sale**

- The Cashier gives the customer their change and receipt.
- They click `[Start New Sale]`. The modal closes, and the main POS interface is cleared, ready for the next customer.
- **End of Flow.**

---

### **Wireframe Descriptions**

#### **Wireframe: Payment Modal**

**Objective:** A focused modal for selecting a payment method and finalizing the sale.

- **`Layout:`** A large modal pop-up, potentially two-column.
- **`Header:`** `Modal Title:` "Payment"
- **`Left Column (Summary):`**
  - **Component:** `Total Amount Due Display`
    - **Text:** A very large, bold, and clear display of the final amount (e.g., "$15.75").
    - **Label:** "Total Due"
- **`Right Column (Actions):`**
  - **Component:** `Payment Method Buttons`
    - **Type:** A grid of large, easy-to-tap buttons.
    - **Labels:** `Cash`, `Card`, `E-Wallet`, `On Account` (this last one is greyed out/disabled if no customer is assigned to the sale).
  - **Component:** `Dynamic Input Area`
    - **Behavior:** This area is initially empty. Its content changes based on the payment method selected.
    - **For Cash:** Shows `Amount Received` input field and a `Change Due` display area.
    - **For Card/E-Wallet:** Shows `Reference Number` input field.
  - **Component:** `Complete Sale Button`
    - **Type:** Primary Button. Becomes active once payment details are entered.
    - **Label:** "Complete Sale"

---

#### **Wireframe: Sale Complete Confirmation (Modal State Change)**

**Objective:** To provide clear post-sale information and prepare for the next transaction.

- **`Layout:`** The same modal, with its content replaced.
- **`Header:`** `Confirmation Title:` "Sale Complete!"
- **`Main Content Area:`**
  - **Component:** `Change Due Display`
    - **Visibility:** Only shown for cash transactions.
    - **Text:** Extremely large and prominent text, e.g., "Change Due: $4.25".
  - **Component:** `Receipt Buttons`
    - `[Print Receipt]` Button
    - `[Email Receipt]` Button
- **`Footer/Action Bar:`**
  - **Component:** `New Sale Button`
    - **Type:** Large Primary Button.
    - **Label:** "Start New Sale"
    - **Action:** Closes the modal and resets the POS interface.

---
