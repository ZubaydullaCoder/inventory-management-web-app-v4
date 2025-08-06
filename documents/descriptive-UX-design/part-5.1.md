Of course. Let's proceed with **Part 5: Customer Relationship Management (CRM)**.

This module is essential for businesses that want to build relationships with their customers, track their purchase history, and manage credit sales (Accounts Receivable). We will break this down into logical steps, starting with the foundational task of managing the customer database itself.

We'll begin with **5.1 Customer Database Management**, which covers the core CRUD (Create, Read, Update, Delete) operations as defined in PRD Section 5.1. This will follow our consistent design pattern.

---

### **User Flow Diagram: 5.1 Customer Database Management**

**Objective:** A Manager or Admin can create, view, edit, and delete customer profiles.

**Actor:** Manager, Admin

---

**1. Start: Navigate to Customers**

- The user is logged in.
- They click on `Customers` in the main application navigation.

**2. Customer List Screen**

- The user is taken to the "Customer List" screen.
- This screen displays a searchable table of all customers.
- The table includes key columns: `Full Name`, `Phone Number`, `Email`, and `Current Outstanding Balance`.
- Each row has `[View/Edit]` and `[Delete]` action buttons.
- A primary button, `[Add New Customer]`, is displayed.

**3. User Decides Next Action**

- **IF** user wants to create a new customer -> Clicks `[Add New Customer]` -> **Go to Branch A**.
- **IF** user wants to modify an existing customer -> Clicks `[View/Edit]` -> **Go to Branch B**.
- **IF** user wants to remove a customer -> Clicks `[Delete]` -> **Go to Branch C**.

---

#### **Branch A: Creating a New Customer**

- **A1. Open "Add New Customer" Form**
  - Clicking `[Add New Customer]` opens a modal pop-up form.
- **A2. User Fills Out Form**
  - The form contains fields as per the PRD: `Full Name` (Required), `Phone Number` (Unique, Required), `Email` (Optional), `Address` (Optional).
- **A3. User Clicks [Save Customer]**
- **A4. System Validates and Creates Customer**
- **A5. Confirmation and Return**
  - The form closes, and the user is returned to the **Customer List Screen (Step 2)** with a success message.
- **End of Flow.**

---

#### **Branch B: Editing an Existing Customer**

- **B1. Navigate to Customer Profile Page**
  - Clicking `[View/Edit]` on a customer's row takes the user to that customer's dedicated "Profile Page".
- **B2. User Edits Details**
  - On the profile page, the customer's details are displayed. An `[Edit]` button allows the user to make the fields editable or opens a modal to edit the information.
- **B3. User Clicks [Save Changes]**
- **B4. System Validates and Updates Customer**
- **B5. Confirmation**
  - The profile page updates with the new information and displays a success message.
- **End of Flow.** (We will detail the full Profile Page in the next step, 5.2).

---

#### **Branch C: Deleting a Customer**

- **C1. Trigger Confirmation Modal**
  - Clicking `[Delete]` opens a confirmation pop-up: "Are you sure you want to delete this customer? All associated sales history will remain but will be unlinked from this customer."
- **C2. User Confirms Deletion**
- **C3. Customer Deleted**
  - The customer record is removed.
  - The user is returned to the **Customer List Screen (Step 2)** with a success message.
- **End of Flow.**

---

### **Wireframe Descriptions**

#### **Wireframe: Customer List Screen**

**Objective:** Display all customers and provide entry points for management.

- **`Layout:`** Standard full-page layout.
- **`Header Area:`**
  - `Screen Title:` "Customers"
  - `Add New Customer Button:` Primary Button, "+ Add New Customer", top right.
- **`Main Content Area:`**
  - `Search Bar:` "Search by Name or Phone Number..."
  - `Customers Table:`
    - **Columns:** `Full Name`, `Phone Number`, `Email`, `Current Outstanding Balance`, `Actions`.
    - **Content of `Actions` column:** `View/Edit Button` and `Delete Button`.

---

#### **Wireframe: Add/Edit Customer Form (Modal)**

**Objective:** A simple form for creating or editing customer details.

- **`Layout:`** A modal pop-up.
- **`Header Area:`**
  - `Modal Title (Dynamic):` "Add New Customer" or "Edit Customer"
- **`Main Content Area (Form):`**
  - `Full Name Input Field` (Text Input, Required)
  - `Phone Number Input Field` (Text Input, Required, Unique)
  - `Email Input Field` (Text Input, Optional)
  - `Address Input Field` (Text Area, Optional)
- **`Footer/Action Bar:`**
  - `Save Button (Dynamic):` "Save Customer" or "Save Changes"
  - `Cancel Button`

#### **Note on POS Integration:**

As defined in the PRD, this customer database directly enables two key workflows within the POS interface (Flow 4.1 & 4.2):

1.  **Assigning a Sale:** An `[Add/Find Customer]` button on the POS cart allows the Cashier to search this database by name/phone and link a customer to the current sale.
2.  **Adding a Customer at Checkout:** The same interface allows the Cashier to quickly open the "Add New Customer" modal to create a new customer profile on the fly without leaving the POS screen.

This covers the basic management of the customer database. The next step is to define the detailed view of a single customer.

Shall we proceed with **5.2 Customer Purchase History & Profile View**?
