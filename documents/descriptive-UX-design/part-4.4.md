Of course. Let's proceed with the final step in the sales lifecycle: **4.4 Returns & Refunds Management**.

This workflow is a direct continuation of the previous one. It begins once a Manager or Admin has found the original transaction and needs to process a return against it. The design must be clear and precise to ensure both inventory and financial records are updated correctly, as per the user story in PRD Section 4.4.

---

### **User Flow Diagram: 4.4 Returns & Refunds Management**

**Objective:** A Manager or Admin processes a customer return, which automatically updates stock levels and financial records.

**Actor:** Manager, Admin

---

**1. Start: Initiate Return from Transaction Detail**

- The user is viewing the **Transaction Detail View** for a specific past sale (as defined in Flow 4.3).
- They click the `[Process Return]` button.

**2. "Process Return" Modal Opens**

- A new modal appears, specifically for handling the return.
- The modal displays a list of all the items that were sold in the original transaction.

**3. User Selects Items and Quantities to Return**

- For each item in the list, there is a checkbox to select it for return.
- Next to each item is a `Return Quantity` input field. The user specifies how many units of that item are being returned.
- **System Validation:** The `Return Quantity` cannot be greater than the quantity originally purchased.

**4. System Calculates Refund Amount**

- As the user selects items and quantities, the system automatically calculates the total refund amount.
- This calculation is based on the original price paid for those specific items, including any pro-rated discounts that were applied during the initial sale.
- The `Total Refund Amount` is clearly displayed on the screen and updates in real-time.

**5. User Confirms the Return**

- After selecting all items to be returned, the user clicks the primary `[Confirm Return]` button.

**6. System Processes the Refund (Three Key Events)**

- Upon confirmation, the system executes the three critical actions specified in the PRD:
  1.  **Increases Stock:** The `Current Stock Quantity` of each returned item is increased by the `Return Quantity`.
  2.  **Creates Financial Record:** A negative sale (refund) record is created to ensure the financial reports (like the P&L statement) remain accurate.
  3.  **Updates Original Transaction:** The refund is logged against the original transaction ID, creating a clear audit trail.

**7. Confirmation and Return**

- A success message is displayed (e.g., "Return successful. Refund amount: [Amount]. Stock has been updated.").
- The modal closes, and the user is returned to the **Transaction Detail View**. This view may now have an updated status, such as "Partially Refunded" or "Fully Refunded", and a link to the refund transaction record.
- **End of Flow.**

---

### **Wireframe Description**

#### **Wireframe: Process Return Modal**

**Objective:** A clear and unambiguous interface for selecting items to be returned and confirming the refund amount.

- **`Layout:`** A large modal pop-up that overlays the Transaction Detail view.
- **`Header Area:`**
  - **Component:** `Modal Title`
    - **Text:** "Process Return for Transaction #[Transaction ID]"
- **`Main Content Area:`**
  - **Component:** `Instructional Text`
    - **Text:** "Select the items and specify the quantity being returned."
  - **Component:** `Returnable Items Table`
    - **Behavior:** This table lists all items from the original sale.
    - **Columns:**
      - `Checkbox` (to select the item for return).
      - `Product Name`.
      - `Original Qty` (Read-only).
      - `Return Qty` (A number input field, enabled when the item is checked).
      - `Unit Price` (Read-only).
      - `Line Refund` (Read-only, auto-calculated).
  - **Component:** `Refund Summary`
    - **Placement:** Below the table.
    - **Label:** "Total Refund Amount"
    - **Value:** A large, bold display of the final calculated refund amount.
- **`Footer/Action Bar:`**
  - **Component:** `Confirm Return Button`
    - **Type:** Primary Button.
    - **Label:** "Confirm Return"
    - **Action:** Triggers the system processing in Step 6.
  - **Component:** `Cancel Button`
    - **Type:** Secondary Button.
    - **Label:** "Cancel"
    - **Action:** Closes the modal with no changes.

---
