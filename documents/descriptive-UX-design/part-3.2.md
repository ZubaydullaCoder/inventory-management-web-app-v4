# Part 3.2: Supplier (Dealer) Management

---

### **User Flow Diagram: 3.2 Supplier (Dealer) Management**

**Objective:** An Admin or Manager can create, read, update, and delete supplier profiles.

**Actor:** Admin, Manager

---

**1. Start: Navigate to Suppliers**

- The user is logged in.
- They click on `Suppliers` (or `Inventory -> Suppliers`) in the main application navigation.

**2. Supplier List Screen**

- The user is taken to the "Supplier List" screen.
- This screen displays a table of all current suppliers.
- The table includes columns for `Supplier Name`, `Contact Person`, and `Phone Number`.
- Each row in the table has `[Edit]` and `[Delete]` action buttons.
- A primary button, `[Add New Supplier]`, is prominently displayed on the page.

**3. User Decides Next Action**

- **IF** user wants to create a new supplier -> Clicks `[Add New Supplier]` -> **Go to Branch A**.
- **IF** user wants to modify an existing supplier -> Clicks `[Edit]` on a supplier's row -> **Go to Branch B**.
- **IF** user wants to remove a supplier -> Clicks `[Delete]` on a supplier's row -> **Go to Branch C**.

---

#### **Branch A: Creating a New Supplier**

- **A1. Open "Add New Supplier" Form**
  - Clicking `[Add New Supplier]` opens a modal pop-up form.
- **A2. Admin/Manager Fills Out Form**
  - The form contains fields as per the PRD: `Supplier Name` (Required), `Contact Person`, `Phone Number`, `Email`, `Address`.
- **A3. User Clicks [Save Supplier]**
- **A4. System Validates and Creates Supplier**
- **A5. Confirmation and Return**
  - The form closes, and the user is returned to the **Supplier List Screen (Step 2)**.
  - A success message is displayed (e.g., "Supplier created successfully.").
  - The new supplier is now visible in the list.
- **End of Flow.**

---

#### **Branch B: Editing an Existing Supplier**

- **B1. Open "Edit Supplier" Form**
  - Clicking `[Edit]` opens the modal form, pre-populated with that supplier's data.
- **B2. Admin/Manager Modifies Details**
- **B3. User Clicks [Save Changes]**
- **B4. System Validates and Updates Supplier**
- **B5. Confirmation and Return**
  - The user is returned to the **Supplier List Screen (Step 2)** with a success message.
- **End of Flow.**

---

#### **Branch C: Deleting a Supplier**

- **C1. Trigger Confirmation Modal**
  - Clicking `[Delete]` opens a confirmation pop-up: "Are you sure you want to delete this supplier?" with `[Confirm Delete]` and `[Cancel]` buttons.
- **C2. User Confirms Deletion**
- **C3. Supplier Deleted**
  - The supplier record is removed from the database.
  - The user is returned to the **Supplier List Screen (Step 2)** with a success message.
- **End of Flow.**

---

### **Wireframe Descriptions**

#### **Wireframe: Supplier List Screen**

**Objective:** Display all suppliers and provide entry points for management actions.

- **`Layout:`** Standard full-page layout.
- **`Header Area:`**
  - **Component:** `Screen Title`
    - **Text:** "Suppliers"
  - **Component:** `Add New Supplier Button`
    - **Type:** Primary Button
    - **Label:** "+ Add New Supplier"
    - **Placement:** Top right.
    - **Action:** Opens the "Add/Edit Supplier" modal form.
- **`Main Content Area:`**
  - **Component:** `Suppliers Table`
    - **Columns:** `Supplier Name`, `Contact Person`, `Phone Number`, `Email`, `Actions`.
    - **Rows:** Each row represents a supplier. Clicking on the `Supplier Name` itself could navigate to a "Supplier Detail Page" where their purchase order history is displayed (as per PRD 3.4).
    - **Content of `Actions` column:** `Edit Button` and `Delete Button`.

---

#### **Wireframe: Add/Edit Supplier Form (Modal)**

**Objective:** A simple, consistent form to handle creating and editing a supplier.

- **`Layout:`** A modal pop-up that overlays the Supplier List screen.
- **`Header Area:`**
  - **Component:** `Modal Title`
    - **Text (Dynamic):** "Add New Supplier" or "Edit Supplier"
- **`Main Content Area (Form):`**
  - **Component:** `Supplier Name Input Field` (Text Input, Required)
  - **Component:** `Contact Person Input Field` (Text Input, Optional)
  - **Component:** `Phone Number Input Field` (Text Input, Optional)
  - **Component:** `Email Input Field` (Text Input, Optional)
  - **Component:** `Address Input Field` (Text Area, Optional)
- **`Footer/Action Bar:`**
  - **Component:** `Save Button`
    - **Type:** Primary Button
    - **Label (Dynamic):** "Save Supplier" or "Save Changes"
  - **Component:** `Cancel Button`
    - **Type:** Secondary Button
    - **Label:** "Cancel"

---
