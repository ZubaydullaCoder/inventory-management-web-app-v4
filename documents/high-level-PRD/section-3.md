Excellent. Let's detail the heart of the application: the inventory and product management system. This section will define how the application tracks what the business sells, how much it has, and where it comes from.

---

### **3.0 Inventory & Product Management**

This module covers all functionalities related to creating, tracking, and managing the products a business sells, as well as the suppliers who provide them.

#### **3.1 Product Database**

This defines the central repository of all products. It must be comprehensive yet easy to manage.

- **User Story:** "As a Manager, I want to add, edit, and view all my products in one place so that I can accurately manage my inventory and pricing."

##### **3.1.1 Creating & Editing Products**

- **Functionality:** A dedicated "Products" page with a table view of all products and a button to "Add New Product" or "Edit" an existing one. This will open a form with the following fields:
  - `Product Name` (Text, Required)
  - `SKU (Stock Keeping Unit) / Barcode` (Text, Unique): User can manually enter or scan a barcode to populate this field.
  - `Category` (Dropdown): Select from a list of categories (managed in Section 3.3).
  - `Supplier` (Dropdown, Optional): Select from a list of suppliers (managed in Section 3.4).
  - `Cost Price` (Number, Required): The price paid to the supplier for the product.
  - `Selling Price` (Number, Required): The price the customer pays. The system should display a calculated gross margin percentage based on cost and selling price.
  - `Current Stock Quantity` (Number): This field is typically non-editable directly in this form. It is updated automatically via stock control actions (sales, purchases, audits). It is displayed for information.
  - `Low Stock Threshold` (Number, Optional): The quantity at which this product should appear in "Low Stock" alerts.
  - `Expiration Date Tracking` (Checkbox/Toggle): If checked, an `Expiration Date` field will be required when receiving new stock of this item.

##### **3.1.2 Product Variations**

- **Functionality:** For products that come in different versions (e.g., size, color), the system should allow for variations without creating entirely new product entries.
- **Requirements:**
  - When creating a product, the user can define attributes like "Size" or "Color".
  - They can then generate variations based on these attributes (e.g., Small, Medium, Large).
  - Each variation will have its own unique SKU, stock quantity, and potentially its own price, but will be grouped under a single parent product.

#### **3.2 Stock Control**

This defines the mechanisms for maintaining accurate inventory levels.

##### **3.2.1 Automatic Stock Updates**

- **User Story:** "As a business owner, I want the system to automatically update my stock levels whenever I make a sale or receive a new shipment, so I don't have to do it manually and can trust my inventory data."
- **Requirements:**
  - **On Sale:** When a sale is successfully completed in the POS module (Section 4.0), the stock quantity of each product sold must decrease by the quantity sold.
  - **On Purchase Received:** When a purchase order is marked as "Received" (Section 3.5.2), the stock quantity of each product in the order must increase by the quantity received.
  - **On Return:** When a customer return is processed (Section 4.4), the stock quantity for the returned item must increase.

##### **3.2.2 Low Stock Thresholds & Alerts**

- **Functionality:** The system must proactively notify users when products are running out.
- **Requirements:**
  - When a product's `Current Stock Quantity` falls to or below its `Low Stock Threshold`, it must be automatically added to a "Low Stock" list.
  - This list should be prominently displayed on the main Dashboard (Section 7.1).

##### **3.2.3 Expiration Date Tracking & Alerts**

- **Functionality:** For businesses with perishable goods, this feature is critical to reduce waste.
- **Requirements:**
  - For products with `Expiration Date Tracking` enabled, the system must prompt for an expiration date when receiving new stock.
  - The system must have a dashboard widget and a dedicated report for "Expired" or "Expiring Soon" products (e.g., within the next 30 days).

##### **3.2.4 Manual Stock Audits (Stock Takes)**

- **User Story:** "As a manager, I need a way to periodically count my physical inventory and compare it to the system's numbers, so I can correct any discrepancies from theft, loss, or error."
- **Functionality:** A "Stock Take" feature that allows users to efficiently perform a physical inventory count.
- **Workflow:**
  1.  User initiates a new "Stock Take".
  2.  The system presents a list of all products. The user can filter by category or supplier.
  3.  The user goes through the physical store and enters the `Counted Quantity` for each item.
  4.  Upon completion, the system generates a "Discrepancy Report" showing:
      - `Product Name`
      - `Expected Quantity` (what the system thought it had)
      - `Counted Quantity` (the physical count)
      - `Variance` (the difference)
  5.  The user can then approve the stock take, and the system will update its `Current Stock Quantity` to match the `Counted Quantity`.

#### **3.3 Product Categories & Organization**

- **Functionality:** A simple settings page where a Manager/Admin can manage product categories.
- **Requirements:**
  - Users can `Create`, `Read`, `Update`, and `Delete` categories (e.g., "Beverages", "Electronics", "Apparel").
  - Deleting a category should not delete the products within it; instead, the products should become "Uncategorized".

#### **3.4 Supplier (Dealer) Management**

- **Functionality:** A basic CRM for managing suppliers.
- **Requirements:**
  - A "Suppliers" page to `Create`, `Read`, `Update`, and `Delete` supplier profiles.
  - Each supplier profile should contain:
    - `Supplier Name` (Text, Required)
    - `Contact Person` (Text, Optional)
    - `Phone Number` (Text, Optional)
    - `Email` (Text, Optional)
    - `Address` (Text, Optional)
  - The system should allow viewing a history of all purchase orders associated with a specific supplier.

#### **3.5 Purchase Order (PO) Management**

This formalizes the process of ordering and receiving new stock.

##### **3.5.1 Creating Purchase Orders**

- **User Story:** "As a manager, I want to create a purchase order to send to my supplier, so I have a clear record of what I ordered, when, and at what cost."
- **Functionality:** A workflow to create a new PO.
- **Workflow:**
  1.  User clicks "Create New Purchase Order".
  2.  Select a `Supplier` from the list.
  3.  Add products to the PO, specifying the `Quantity` to order and the `Cost Price` per item (this should pre-fill from the product database but be editable).
  4.  The system calculates the total cost of the order.
  5.  The user can save the PO with a status of "Draft" or "Ordered".

##### **3.5.2 Receiving Stock**

- **User Story:** "When my new shipment arrives, I want to easily mark the purchase order as received in the system so my inventory levels are updated automatically and accurately."
- **Functionality:** A simple process to check in a delivery against a PO.
- **Workflow:**
  1.  User finds the relevant PO (status "Ordered").
  2.  User clicks a "Receive Stock" button.
  3.  The system displays the items from the PO. The user can confirm the quantities received (and edit if there was a short shipment).
  4.  If any products track expiration, the user is prompted to enter the `Expiration Date` for the incoming batch.
  5.  Upon confirmation, the system:
      - Updates the `Current Stock Quantity` for all received products.
      - Changes the PO status to "Completed".
      - Creates a corresponding entry in Accounts Payable (Section 6.2) for the amount owed to the supplier.

---

This section provides a comprehensive definition for managing products and inventory. We are now ready to define how these products are sold.
