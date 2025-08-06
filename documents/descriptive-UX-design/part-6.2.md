Excellent. Let's proceed with **6.2 Accounts Payable Management**.

This feature is a direct consequence of our inventory management flow and is critical for tracking money owed to suppliers. As specified in the PRD (Section 6.2), the creation of a bill is an _automatic_ system event, making the user's primary job here to view what is owed and record payments.

---

### **User Flow Diagram: 6.2 Accounts Payable Management**

**Objective:** A Manager or Admin tracks all unpaid bills to suppliers and records payments made against them.

**Actor:** Manager, Admin

---

**Part 1: Automatic Bill Creation (System Workflow - No User Action)**

- **1. Trigger Event:** A user completes the "Receive Stock" workflow (Flow 3.4.2) for a Purchase Order.
- **2. System Action:** The system automatically generates a corresponding bill in the Accounts Payable ledger.
- **3. Bill Details:** This new bill record contains the `Supplier Name`, a link to the original `PO ID`, the `Bill Date` (date of receipt), and the `Amount Owed` (based on the value of goods received).

---

#### **Part 2: Viewing and Paying Bills (Manager/Admin Workflow)**

- **1. Start: Navigate to Accounts Payable**
  - The user is logged in.
  - They click on `Accounts Payable` or `Financials -> Bills to Pay` in the main navigation.
- **2. Accounts Payable Ledger Screen**
  - The user is taken to a screen that lists all **unpaid** bills. This is the "Accounts Payable Ledger".
  - The screen displays a table with columns for `Supplier Name`, `Bill ID` (linkable to the PO), `Bill Date`, and `Amount Owed`.
  - Each row represents an unpaid bill and has a primary action button: `[Record Payment]`.
- **3. User Selects a Bill to Pay**
  - The user identifies the bill they have paid and clicks the `[Record Payment]` button on that row.
- **4. "Record Payment" Modal Opens**
  - A modal pop-up appears, pre-filled with the context of the bill.
  - It displays the `Supplier Name` and the total `Amount Owed`.
  - It contains two input fields for confirmation:
    - `Payment Amount` (pre-filled with the full amount, but editable for partial payments)
    - `Payment Date` (a date picker, defaulting to today)
- **5. User Confirms Payment Details**
  - The user verifies the details and clicks the `[Confirm Payment]` button.
- **6. System Processes the Payment**
  - The system marks the bill as "Paid". This action removes it from the active "Bills to Pay" list.
  - A financial record is created for the cash outflow, which is essential for accurate profit calculation.
- **7. Confirmation and Return**
  - The modal closes. The user is returned to the **Accounts Payable Ledger Screen (Step 2)**.
  - The bill that was just paid is now gone from the list.
  - A success message is displayed (e.g., "Payment recorded successfully.").
- **End of Part 2.**

---

### **Wireframe Descriptions**

#### **Wireframe: Accounts Payable Ledger Screen**

**Objective:** To provide a clear, actionable list of all outstanding bills owed to suppliers.

- **`Layout:`** Standard full-page layout.
- **`Header Area:`**
  - `Screen Title:` "Accounts Payable (Bills to Pay)"
- **`Main Content Area:`**
  - `Instructional Text:` "Showing all unpaid bills from suppliers."
  - `Bills Table:`
    - **Columns:** `Supplier Name`, `Bill ID / Original PO`, `Bill Date`, `Amount Owed`.
    - **Action Column:** Contains a `[Record Payment]` button for each row.
  - `Empty State:` If all bills are paid, a message appears: "Excellent! All supplier bills are paid up."

---

#### **Wireframe: Record Payment to Supplier Modal**

**Objective:** A simple form to confirm and record a payment made to a supplier.

- **`Layout:`** A focused modal pop-up.
- **`Header Area:`**
  - `Modal Title:` "Record Payment for Bill #[Bill ID]"
- **`Main Content Area (Form):`**
  - `Supplier Name Display:` Read-only text.
  - `Amount Owed Display:` Read-only text.
  - `Payment Amount:` (Number Input, pre-filled, required)
  - `Payment Date:` (Date Picker, required)
- **`Footer/Action Bar:`**
  - `Confirm Payment Button:` Primary Button.
  - `Cancel Button:` Secondary Button.

---
