# Part 3.3: Product Category Management

---

### **User Flow Diagram: 3.3 Product Category Management**

**Objective:** An Admin or Manager can create, read, update, and delete product categories.

**Actor:** Admin, Manager

---

**1. Start: Navigate to Category Management**

- The user is logged in.
- They navigate to the category management page. This could be a dedicated `Categories` link in the main navigation or accessed via `Settings -> Product Categories`.

**2. Category List Screen**

- The user is taken to the "Category List" screen.
- This screen displays a simple table of all current product categories.
- The table could include columns for `Category Name` and `Product Count` (the number of products in that category).
- Each row in the table has `[Edit]` and `[Delete]` action buttons.
- A primary button, `[Add New Category]`, is prominently displayed.

**3. User Decides Next Action**

- **IF** user wants to create a new category -> Clicks `[Add New Category]` -> **Go to Branch A**.
- **IF** user wants to modify an existing category -> Clicks `[Edit]` on a category's row -> **Go to Branch B**.
- **IF** user wants to remove a category -> Clicks `[Delete]` on a category's row -> **Go to Branch C**.

---

#### **Branch A: Creating a New Category**

- **A1. Open "Add New Category" Form**
  - Clicking `[Add New Category]` opens a simple modal pop-up form.
- **A2. User Fills Out Form**
  - The form contains a single field: `Category Name` (Required).
- **A3. User Clicks [Save Category]**
- **A4. System Validates and Creates Category**
- **A5. Confirmation and Return**
  - The form closes, and the user is returned to the **Category List Screen (Step 2)** with a success message.
  - The new category is now visible in the list.
- **End of Flow.**

---

#### **Branch B: Editing an Existing Category**

- **B1. Open "Edit Category" Form**
  - Clicking `[Edit]` opens the modal form, pre-populated with that category's name.
- **B2. User Modifies Name**
- **B3. User Clicks [Save Changes]**
- **B4. System Validates and Updates Category**
- **B5. Confirmation and Return**
  - The user is returned to the **Category List Screen (Step 2)** with a success message.
- **End of Flow.**

---

#### **Branch C: Deleting a Category**

- **C1. Trigger Confirmation Modal**
  - Clicking `[Delete]` opens a confirmation pop-up: "Are you sure you want to delete this category? Products in this category will become 'Uncategorized'."
  - The pop-up has `[Confirm Delete]` and `[Cancel]` buttons.
- **C2. User Confirms Deletion**
- **C3. System Processes Deletion**
  - As per PRD 3.3, the system finds all products associated with this category.
  - It sets their `CategoryID` to `null` or assigns them to a default "Uncategorized" status.
  - The category record itself is then deleted.
- **C4. Confirmation and Return**
  - The user is returned to the **Category List Screen (Step 2)** with a success message.
- **End of Flow.**

---

### **Wireframe Descriptions**

#### **Wireframe: Category List Screen**

**Objective:** Display all product categories and provide entry points for management.

- **`Layout:`** Standard full-page layout, consistent with Users and Suppliers.
- **`Header Area:`**
  - **Component:** `Screen Title`
    - **Text:** "Product Categories"
  - **Component:** `Add New Category Button`
    - **Type:** Primary Button
    - **Label:** "+ Add New Category"
    - **Placement:** Top right.
    - **Action:** Opens the "Add/Edit Category" modal form.
- **`Main Content Area:`**
  - **Component:** `Categories Table`
    - **Columns:** `Category Name`, `Product Count`, `Actions`.
    - **Content of `Actions` column:** `Edit Button` and `Delete Button`.

---

#### **Wireframe: Add/Edit Category Form (Modal)**

**Objective:** A very simple form for creating and editing a category name.

- **`Layout:`** A small, focused modal pop-up.
- **`Header Area:`**
  - **Component:** `Modal Title`
    - **Text (Dynamic):** "Add New Category" or "Edit Category"
- **`Main Content Area (Form):`**
  - **Component:** `Category Name Input Field` (Text Input, Required)
    - **Label:** "Category Name"
- **`Footer/Action Bar:`**
  - **Component:** `Save Button`
    - **Type:** Primary Button
    - **Label (Dynamic):** "Save Category" or "Save Changes"
  - **Component:** `Cancel Button`
    - **Type:** Secondary Button
    - **Label:** "Cancel"

---
