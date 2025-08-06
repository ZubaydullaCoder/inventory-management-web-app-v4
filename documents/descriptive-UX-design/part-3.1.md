# Part 3.1: Core Product Management

---

### **User Flow Diagram: 3.1 Core Product Management**

**Objective:** A Manager or Admin creates, views, and edits products in the inventory.

**Actor:** Manager, Admin

---

**1. Start: Navigate to Products**

- The user is logged in.
- They click on `Products` or `Inventory` in the main application navigation.

**2. Product List Screen**

- The user is taken to the "Product List" screen.
- This screen displays a table of all products.
- Key columns include: `Product Name`, `SKU`, `Category`, `Selling Price`, `Current Stock Quantity`.
- The list should be searchable and filterable (e.g., by category).
- Each product row has an `[Edit]` button.
- A primary button, `[Add New Product]`, is displayed on the page.

**3. User Decides Next Action**

- **IF** user wants to create a new product -> Clicks `[Add New Product]` -> **Go to Branch A**.
- **IF** user wants to modify an existing product -> Clicks `[Edit]` on a product's row -> **Go to Branch B**.

---

#### **Branch A: Creating a New Product**

- **A1. Open "Add New Product" Form**
  - Clicking `[Add New Product]` navigates the user to a dedicated "Add Product" page/form.
- **A2. Admin Fills Out Core Product Details**
  - The user fills in the primary fields as defined in PRD 3.1.1: `Product Name`, `SKU`, `Category`, `Supplier`, `Cost Price`, `Selling Price`, etc.
- **A3. Decision: Does the product have variations?** (As per PRD 3.1.2)
  - The form contains a toggle or checkbox: "This product has multiple options (e.g., size or color)".
  - **IF** this is **NOT** checked -> **Go to Step A5**.
  - **IF** this is **checked** -> **Go to Step A4**.
- **A4. Define Variations**
  - Additional form controls appear.
  - The user defines attributes (e.g., Attribute 1: "Size", Attribute 2: "Color").
  - The user enters the values for each attribute (e.g., For "Size": "Small, Medium, Large").
  - The system generates a list/table of all possible variations (e.g., Small/Red, Medium/Red, etc.).
  - The user can then set a unique `SKU`, `Cost Price`, and `Selling Price` for each variation.
- **A5. User Clicks [Save Product]**
- **A6. System Validates and Creates Product**
  - The system validates all required fields.
  - A new product (and its variations, if any) is created in the database.
- **A7. Confirmation and Return**
  - The user is returned to the **Product List Screen (Step 2)**.
  - A success message is displayed (e.g., "Product created successfully.").
  - The new product is now visible in the list.
- **End of Flow.**

---

#### **Branch B: Editing an Existing Product**

- **B1. Open "Edit Product" Form**
  - Clicking `[Edit]` navigates the user to the product form, pre-populated with that product's data.
- **B2. Admin Modifies Details**
  - The user can update most fields (`Name`, `Price`, `Category`, etc.).
  - (Note: `Current Stock Quantity` is not directly editable here, as it's controlled by sales and stock receiving).
- **B3. User Clicks [Save Changes]**
- **B4. System Validates and Updates Product**
- **B5. Confirmation and Return**
  - The user is returned to the **Product List Screen (Step 2)**.
  - A success message is displayed (e.g., "Product updated successfully.").
  - The list now reflects the updated product information.
- **End of Flow.**

---

Now, let's define the wireframes for these screens. The "Add/Edit Product" form is quite detailed, so I've broken it down carefully based on the PRD.

### **Wireframe Descriptions**

#### **Wireframe: Product List Screen**

**Objective:** Display all products and provide entry points for management.

- **`Layout:`** Standard full-page layout.
- **`Header Area:`**
  - **Component:** `Screen Title`
    - **Text:** "Products"
  - **Component:** `Add New Product Button`
    - **Type:** Primary Button
    - **Label:** "+ Add New Product"
    - **Placement:** Top right.
    - **Action:** Navigates to the "Add/Edit Product" page.
- **`Main Content Area:`**
  - **Component:** `Search & Filter Bar`
    - `Search Input:` "Search by Product Name or SKU..."
    - `Category Filter:` Dropdown menu of all categories.
  - **Component:** `Products Table`
    - **Columns:** `Product Name`, `SKU`, `Category`, `Supplier`, `Selling Price`, `Current Stock Quantity`, `Actions`.
    - **Content of `Actions` column:** `Edit Button` (Icon or Text).

---

#### **Wireframe: Add/Edit Product Page**

**Objective:** A comprehensive form to capture all necessary product details.

- **`Layout:`** A full-page, multi-section form. Could use a two-column layout for efficiency.

- **`Header Area:`**

  - **Component:** `Page Title`
    - **Text (Dynamic):** "Add New Product" or "Edit [Product Name]"

- **`Column 1: Core Information`**

  - **`Section: Basic Details`**
    - `Product Name` (Text Input, Required)
    - `SKU / Barcode` (Text Input, Unique)
    - `Product Description` (Large Text Area, Optional)
  - **`Section: Organization`**
    - `Category` (Dropdown, populated from Section 3.3)
    - `Supplier` (Dropdown, populated from Section 3.4, Optional)

- **`Column 2: Pricing & Inventory`**

  - **`Section: Pricing`**
    - `Cost Price` (Number Input, Required)
    - `Selling Price` (Number Input, Required)
    - `Gross Margin` (Non-editable text, auto-calculated: "Gross Margin: XX%")
  - **`Section: Inventory`**
    - `Current Stock Quantity` (Non-editable text, informational: "Current Stock: XX units")
    - `Low Stock Threshold` (Number Input, Optional)
  - **`Section: Tracking`**
    - `Expiration Date Tracking` (Checkbox/Toggle)
      - **Label:** "Track expiration dates for this item."
      - **Note:** This makes the expiration date field mandatory when _receiving_ stock.

- **`Full-Width Section: Product Variations`**

  - **Component:** `Variations Toggle` (Checkbox)
    - **Label:** "This product has multiple options, like size or color."
  - **Component:** `Variations Setup Area` (This area is hidden until the toggle is checked)
    - `Attribute 1 Name` (Text Input, e.g., "Size")
    - `Attribute 1 Values` (Text Input where user types comma-separated values, e.g., "Small, Medium, Large")
    - `[+ Add another attribute]` Button
    - `[Generate Variations]` Button
  - **Component:** `Variations Table` (Appears after variations are generated)
    - **Columns:** `Variation` (e.g., "Small"), `SKU`, `Cost Price`, `Selling Price`.
    - Each field in the table is editable.

- **`Page Footer/Action Bar:`**
  - **Component:** `Save Button`
    - **Type:** Primary Button
    - **Label (Dynamic):** "Save Product" or "Save Changes"
  - **Component:** `Cancel Link`
    - **Action:** Discards changes and returns to the Product List screen.

---
