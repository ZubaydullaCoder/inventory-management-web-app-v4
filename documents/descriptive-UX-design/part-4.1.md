Excellent. Let's dive into **Part 4: Sales & Point of Sale (POS)**.

This is the most interactive and frequently used part of the application for Cashiers. The design must prioritize speed, simplicity, and accuracy. We will follow the PRD (Sections 4.1 and 4.2) closely.

We'll start with the core process: **4.1 Standard Sale Workflow**, which covers everything from starting a sale to having a cart full of items ready for payment.

---

### **User Flow Diagram: 4.1 Standard Sale Workflow**

**Objective:** A Cashier efficiently adds products to a customer's bill and applies any necessary discounts.

**Actor:** Cashier (with potential for Manager/Admin override)

---

**1. Start: POS Interface is Ready**

- The Cashier is logged in and is viewing the main **POS Interface (4.1)**. The cart is empty, ready for a new sale.

**2. Cashier Adds Items to the Cart**

- The Cashier uses one of the following methods to add a product to the cart on the right panel:
  - **Method A (Tapping):** Clicks/taps on a product's image or name in the product grid/list on the left panel.
  - **Method B (Scanning):** Uses a connected barcode scanner to scan a product's barcode. The system finds the product and adds it.
  - **Method C (Searching):** Types the product name or SKU into the search bar. The product list filters in real-time. The cashier clicks the correct product from the search results.
- When an item is added, it appears as a new line in the cart panel. If the same item is added again, its quantity in the cart increases by one.

**3. Cashier Adjusts Items in the Cart**

- For any item already in the cart, the Cashier can:
  - Click `[+]` or `[-]` buttons next to the item to increase or decrease its quantity.
  - Click a `[Remove]` (or 'X') icon to completely remove the item from the cart.

**4. Cashier Applies a Discount (Optional)**

- The Cashier decides to apply a discount.
- They click a `[Discount]` button on the cart panel.
- This opens a "Apply Discount" modal.
- **Decision:** Is the discount for a single item or the whole cart?
  - **IF Item-level:** The Cashier selects the specific item and enters a percentage or fixed amount to discount.
  - **IF Cart-level:** The Cashier selects the "Entire Bill" option and enters a percentage or fixed amount.

**5. System Checks for Discount Permissions**

- As per PRD 2.1.3, a standard Cashier cannot apply discounts without an override.
- **IF** the logged-in user is a `Manager` or `Admin` -> The discount is applied immediately -> **Go to Step 7**.
- **IF** the logged-in user is a `Cashier` -> **Go to Step 6 (Manager Override Flow)**.

**6. Manager Override Flow**

- The "Apply Discount" modal displays a message: "Manager override required."
- It presents `Manager PIN` or `Password` input fields.
- A Manager or Admin must physically come to the terminal and enter their credentials.
- The system validates the credentials.
  - **IF** credentials are **VALID** -> The discount is applied. The modal closes.
  - **IF** credentials are **INVALID** -> An error message is shown. The discount is not applied.
- The system returns control to the Cashier.

**7. Cart is Updated**

- The cart panel now visually displays the applied discount(s) and recalculates the final total.
- The sale is now ready for the next phase: **Checkout & Payments**.
- **End of this Flow.**

---

### **Wireframe Description**

#### **Wireframe: Main POS Interface**

**Objective:** A single-screen interface optimized for fast transaction processing.

- **`Layout:`** A two-panel, single-page application layout.

- **`Left/Center Panel: Product Selection`**

  - **Component:** `Search Bar`
    - **Placement:** Top of the panel.
    - **Placeholder Text:** "Search by Name/SKU or Scan Barcode"
  - **Component:** `Category Filter`
    - **Type:** A horizontal scrolling list of category buttons (e.g., "All", "Beverages", "Apparel").
    - **Action:** Filters the product grid below.
  - **Component:** `Product Grid/List`
    - **Layout:** A grid of tappable cards or a dense list.
    - **Each Card/Item contains:** `Product Name`, `Selling Price`, and optionally a small `Image`.
    - **Action:** Tapping an item adds it to the cart.

- **`Right Panel: Cart/Bill`**
  - **Component:** `Customer Information Area`
    - **Placement:** Top of the panel.
    - **Default Text:** "Guest Customer"
    - **Action:** An `[Add/Find Customer]` button opens a customer search/add modal (we will detail this in the CRM section).
  - **Component:** `Cart Items List`
    - **Layout:** A vertically scrolling list.
    - **Each Row contains:** `Product Name`, `Quantity` (with `+`/`-` controls), `Price`, and a `Remove` ('X') button.
  - **Component:** `Order Summary`
    - **Placement:** Below the items list.
    - `Subtotal:` (Sum of prices)
    - `Discounts:` (Shows any applied discounts, e.g., "-$5.00")
    - `Taxes:` (If applicable)
    - `Total:` (A large, bold, final amount)
  - **Component:** `Action Bar`
    - **Placement:** Bottom of the panel.
    - `Discount Button:` Secondary button, opens the discount modal.
    - `Hold Sale Button:` Secondary button (for saving a cart to resume later - an advanced feature).
    - `Checkout/Payment Button:` Large, primary button.
      - **Label:** "Payment" or "Checkout"
      - **Action:** Proceeds to the payment finalization step (Flow 4.2).

---

#### **Wireframe: Apply Discount Modal**

- **`Layout:`** A modal pop-up.
- **`Header:`** `Modal Title:` "Apply Discount"
- **`Content:`**
  - `Discount Type:` Tabs or radio buttons: "Item Discount" vs. "Cart Discount".
  - `Item Selection:` (Visible only if "Item Discount" is chosen) A dropdown list of items currently in the cart.
  - `Amount Type:` Tabs or radio buttons: "%" vs. "Fixed Amount".
  - `Amount Input:` A number input field for the discount value.
- **`Manager Override Section` (Visible only if user is a Cashier)**
  - `Instructional Text:` "Manager PIN required to apply discount."
  - `Manager PIN Input:` A secure input field.
- **`Footer/Action Bar:`**
  - `Apply Discount Button:` Primary button.
  - `Cancel Button:` Secondary button.

---
