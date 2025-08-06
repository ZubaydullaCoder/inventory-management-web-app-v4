Excellent. Let's detail the next critical step in the inventory lifecycle: **3.4.2 Receiving Stock Against a PO**.

This flow begins after a Purchase Order has been created and marked as "Ordered". It covers the physical process of checking in the delivered goods and updating the system's inventory levels automatically. This is based on the user story and workflow in PRD Section 3.5.2.

---

### **User Flow Diagram: 3.4.2 Receiving Stock Against a PO**

**Objective:** A Manager or Admin accurately records the receipt of a shipment, which automatically updates inventory levels.

**Actor:** Manager, Admin

---

**1. Start: Find the "Ordered" Purchase Order**

- The user navigates to the **Purchase Order (PO) List Screen**.
- They locate the specific PO they want to receive. This PO will have a status of "Ordered".
- On the row for that PO, there is a dedicated action button: `[Receive Stock]`.

**2. User Clicks [Receive Stock]**

- Clicking the button opens a "Receive Stock" modal pop-up. This modal is specifically for this task.

**3. "Receive Stock" Modal**

- The modal displays a list of all products that were on the selected PO.
- For each product line item, the system shows:
  - `Product Name`
  - `Expected Quantity` (the amount that was ordered)
  - An editable `Received Quantity` input field, which defaults to the expected quantity.
- **Conditional Step:** For any product that has `Expiration Date Tracking` enabled (as per PRD 3.1.1), an additional `Expiration Date` input field (date picker) will appear and be required for that line item.

**4. User Confirms Quantities**

- The user goes through the list and adjusts the `Received Quantity` for any items where the delivered amount was different from the ordered amount (e.g., a short shipment).
- They enter the expiration dates where required.

**5. User Clicks [Confirm and Add to Stock]**

- The user clicks the primary confirmation button at the bottom of the modal.

**6. System Processes the Receipt (Three Key Actions)**

- Upon confirmation, the system performs the following actions automatically:
  1.  **Updates Inventory:** The `Current Stock Quantity` for each product is increased by its `Received Quantity`.
  2.  **Updates PO Status:** The status of the Purchase Order is changed from "Ordered" to "Completed".
  3.  **Creates Payable:** A new bill is created in the Accounts Payable ledger (Section 6.2) for the amount owed to the supplier for the received goods.

**7. Confirmation and Return**

- The modal closes.
- The user is back on the **PO List Screen**. They can see the PO's status has now changed to "Completed".
- A success message is displayed (e.g., "Stock received successfully. Inventory has been updated.").
- **End of Flow.**

---

### **Wireframe Descriptions**

#### **Wireframe: Purchase Order (PO) List Screen (Modification)**

**Objective:** To add the trigger action for receiving stock.

- **`Component: Purchase Orders Table`**
  - **`Column: Actions`**
    - **Conditional Logic:**
      - **IF** `Status` is "Ordered", this column contains a `[Receive Stock]` button in addition to the `View/Edit` button.
      - **IF** `Status` is "Draft" or "Completed", the `[Receive Stock]` button is not visible.

---

#### **Wireframe: Receive Stock Modal**

**Objective:** A focused interface for confirming the quantity of items received in a shipment.

- **`Layout:`** A modal pop-up that overlays the PO List screen.
- **`Header Area:`**
  - **Component:** `Modal Title`
    - **Text:** "Receive Stock for PO #[PO ID]"
- **`Main Content Area:`**
  - **Component:** `Instructional Text`
    - **Text:** "Confirm the quantities received for each item below. Your inventory will be updated automatically."
  - **Component:** `Received Items Table`
    - **Columns:**
      - `Product Name` (Read-only)
      - `Expected Qty` (Read-only)
      - `Received Qty` (Number Input field)
      - `Expiration Date` (Date Picker Input - **Note:** This field is only visible and required for rows where the product is set to track expiration).
- **`Footer/Action Bar:`**
  - **Component:** `Confirm Button`
    - **Type:** Primary Button
    - **Label:** "Confirm and Add to Stock"
    - **Action:** Triggers the system processing in Step 6.
  - **Component:** `Cancel Button`
    - **Type:** Secondary Button
    - **Label:** "Cancel"
    - **Action:** Closes the modal with no changes.

---
