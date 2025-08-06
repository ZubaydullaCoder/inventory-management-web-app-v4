# Part 2: User & Access Management

This entire section is performed by the `Admin` role, as defined in PRD Section 2.1. The core tasks are creating, viewing, editing, and deleting users. We'll design a flow that allows the Admin to manage their team efficiently.

---

### **User Flow Diagram: 2.0 User & Access Management**

**Objective:** An Admin manages the user accounts for the application.

**Actor:** Admin

---

**1. Start: Navigate to User Management**

- The Admin is logged in and on the Main Dashboard or another application page.
- The Admin clicks on a `Users` or `User Management` link in the main navigation menu.

**2. User List Screen**

- The Admin is taken to the "User List" screen.
- This screen displays a table of all current users.
- The table includes columns for `Name`, `Email`, and `Role` (Admin, Manager, Cashier).
- Each row in the table has two action buttons: `[Edit]` and `[Delete]`.
- A primary button, `[Add New User]`, is prominently displayed on the page.

**3. Admin Decides Next Action**

- **IF** Admin wants to create a new user -> Clicks `[Add New User]` -> **Go to Branch A**.
- **IF** Admin wants to modify an existing user -> Clicks `[Edit]` on a user's row -> **Go to Branch B**.
- **IF** Admin wants to remove a user -> Clicks `[Delete]` on a user's row -> **Go to Branch C**.

---

#### **Branch A: Creating a New User**

- **A1. Open "Add New User" Form**
  - Clicking `[Add New User]` opens a modal pop-up or navigates to a new "Create User" page.
- **A2. Admin Fills Out Form**
  - The form contains fields for:
    - `Full Name`
    - `Email Address`
    - `Password` (and a `Confirm Password` field)
    - `Role` (A dropdown menu with "Admin", "Manager", "Cashier")
- **A3. Admin Clicks [Save User]**
- **A4. System Validates and Creates User**
  - The system validates the data (e.g., email format, password match).
  - A new user record is created in the database.
- **A5. Confirmation and Return**
  - The form closes, and the Admin is returned to the **User List Screen (Step 2)**.
  - A success message is displayed (e.g., "User created successfully.").
  - The new user is now visible in the list.
- **End of Flow.**

---

#### **Branch B: Editing an Existing User**

- **B1. Open "Edit User" Form**
  - Clicking `[Edit]` opens a form pre-populated with that user's data.
- **B2. Admin Modifies Details**
  - The Admin can change the `Full Name` and `Role`.
  - (Note: Email is often non-editable. Password can be a separate "Reset Password" function for security).
- **B3. Admin Clicks [Save Changes]**
- **B4. System Validates and Updates User**
- **B5. Confirmation and Return**
  - The form closes, and the Admin is returned to the **User List Screen (Step 2)**.
  - A success message is displayed (e.g., "User updated successfully.").
  - The list now reflects the updated user information.
- **End of Flow.**

---

#### **Branch C: Deleting a User**

- **C1. Trigger Confirmation Modal**
  - Clicking `[Delete]` **does not** immediately delete the user.
  - A confirmation pop-up appears: "Are you sure you want to delete this user? This action cannot be undone."
  - The pop-up has two buttons: `[Confirm Delete]` and `[Cancel]`.
- **C2. System Checks User Role**
  - Upon clicking `[Confirm Delete]`, the system first checks the role of the user being deleted.
  - **IF** user role is `Manager` or `Cashier` -> **Go to Step C3**.
  - **IF** user role is `Admin` -> **Go to Step C4 (Error Flow)**.
- **C3. User Deleted**
  - The user record is removed from the database.
  - The Admin is returned to the **User List Screen (Step 2)**.
  - A success message is displayed (e.g., "User deleted successfully.").
- **End of Flow.**
- **C4. Error: Cannot Delete Admin**
  - As per PRD 2.1.1, an Admin cannot be deleted by another Admin.
  - The system displays an error message (e.g., "Error: Admin accounts cannot be deleted.").
  - The confirmation pop-up closes, and the user list remains unchanged.
- **End of Flow.**

---

### **Wireframe Descriptions**

#### **Wireframe: User List Screen**

**Objective:** Display all users and provide entry points for management actions.

- **`Layout:`** Standard full-page layout.
- **`Header Area:`**
  - **Component:** `Screen Title`
    - **Text:** "User Management"
  - **Component:** `Add New User Button`
    - **Type:** Primary Button
    - **Label:** "+ Add New User"
    - **Placement:** Top right, aligned with the title.
    - **Action:** Opens the "Add/Edit User" form (in "Add" mode).
- **`Main Content Area:`**
  - **Component:** `Users Table`
    - **Columns:**
      - `Full Name`
      - `Email Address`
      - `Role`
      - `Actions`
    - **Rows:** Each row represents a user.
    - **Content of `Actions` column:**
      - `Edit Button` (Icon or Text) - Action: Opens the "Add/Edit User" form with that user's data.
      - `Delete Button` (Icon or Text) - Action: Triggers the delete confirmation modal.

---

#### **Wireframe: Add/Edit User Form (Modal/Popup)**

**Objective:** A single form to handle both creating and editing a user.

- **`Layout:`** A modal pop-up that overlays the User List screen.
- **`Header Area:`**
  - **Component:** `Modal Title`
    - **Text (Dynamic):** "Add New User" or "Edit User"
- **`Main Content Area (Form):`**
  - **Component:** `Full Name Input Field`
    - **Type:** Text Input
    - **Label:** "Full Name"
  - **Component:** `Email Address Input Field`
    - **Type:** Text Input
    - **Label:** "Email Address"
    - **(Note):** This field would be read-only when in "Edit" mode.
  - **Component:** `Password Section` (Only shown in "Add" mode)
    - `Password Input Field` (Type: Password)
    - `Confirm Password Input Field` (Type: Password)
  - **Component:** `Role Selection`
    - **Type:** Dropdown Menu
    - **Label:** "Role"
    - **Options:** "Admin", "Manager", "Cashier"
- **`Footer/Action Bar:`**
  - **Component:** `Save Button`
    - **Type:** Primary Button
    - **Label (Dynamic):** "Save User" or "Save Changes"
    - **Action:** Submits the form.
  - **Component:** `Cancel Button`
    - **Type:** Secondary Button
    - **Label:** "Cancel"
    - **Action:** Closes the modal without saving changes.

---
