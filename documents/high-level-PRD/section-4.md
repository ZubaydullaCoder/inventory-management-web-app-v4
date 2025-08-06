Of course. We now move to the most interactive part of the application: the Point of Sale. This section defines the interface and workflows that cashiers will use to conduct transactions. The emphasis here is on speed, simplicity, and accuracy to ensure a smooth customer checkout experience.

---

### **4.0 Sales & Point of Sale (POS)**

This module details the functionality for processing customer sales. The POS interface must be intuitive and optimized for fast-paced retail environments, accessible on both desktop and tablet devices.

#### **4.1 POS Interface & Workflow**

This describes the main screen for conducting sales. It should be designed as a single-page application to minimize loading times.

- **User Story:** "As a Cashier, I need a simple and fast way to add products to a customer's bill, either by tapping on them, searching, or scanning a barcode, so I can check them out quickly."

- **Layout:**

  - **Left/Center Panel (Product Selection):** A grid or list view of products. This area should feature:
    - A search bar to instantly find products by `Name` or `SKU/Barcode`.
    - A filter to browse by `Category`.
    - "Hot Key" products or a "Favorites" tab for frequently sold items.
  - **Right Panel (Cart/Bill):** A running list of items the customer is purchasing. This panel will display:
    - Each product name, quantity, and price.
    - A subtotal, taxes (if applicable), discounts, and a final total.

- **Workflow:**
  1.  The cashier starts a new sale.
  2.  They add items to the cart by:
      - Clicking/tapping on a product in the grid.
      - Scanning the product's barcode with a connected scanner.
      - Searching for the product and adding it from the search results.
  3.  For each item in the cart, the cashier can:
      - Increase or decrease the quantity.
      - Remove the item from the cart.

#### **4.2 Checkout & Payments**

This defines the process of finalizing the sale and accepting payment.

- **User Story:** "As a Cashier, once I've added all items, I need to be able to apply any discounts, accept various payment methods like cash or local e-wallets, and quickly calculate change so the customer doesn't have to wait."

- **Functionality:**
  1.  After all items are in the cart, the cashier clicks a "Checkout" or "Payment" button.
  2.  **Applying Discounts:** Before finalizing, the cashier must have the option to apply a discount:
      - **Item-level discount:** A percentage or fixed amount off a single item.
      - **Cart-level discount:** A percentage or fixed amount off the entire bill.
      - (Note: Applying discounts may require a `Manager` override, as defined in Section 2.1.3).
  3.  **Payment Methods:** The cashier selects the customer's payment method. The system must support:
      - `Cash`: The cashier enters the amount received, and the system calculates and displays the change due.
      - `Card`: For recording that a payment was made via a separate card terminal.
      - `Local E-Wallets (Click, Payme, etc.)`: For recording payments made via these popular Uzbek services. The system should allow for a reference number to be entered.
  4.  Upon successful payment, the sale is completed. This action triggers:
      - The creation of a permanent sales record (Section 4.3).
      - The automatic update of inventory levels (as defined in Section 3.2.1).

#### **4.3 Sales History & Transaction Log**

- **Functionality:** A detailed, searchable log of all completed transactions. This is accessible to `Managers` and `Admins`.
- **Requirements:**
  - The log should be viewable in a table format with columns for: `Transaction ID`, `Date/Time`, `Cashier Name`, `Total Amount`, `Payment Method`, and `Customer Name` (if applicable).
  - Users must be able to filter the transaction log by date range, cashier, or payment method.
  - Clicking on a transaction should show a detailed view of the sale, including all items sold and discounts applied.
  - This screen will be the starting point for processing returns.

#### **4.4 Returns & Refunds Management**

- **User Story:** "As a Manager, when a customer wants to return a product, I need to be able to find their original sale, process a refund, and ensure the product is added back to my inventory automatically."

- **Functionality:** A clear workflow for handling returns.
- **Workflow:**
  1.  The user navigates to the `Sales History` log.
  2.  They find the original transaction using the `Transaction ID` from the customer's receipt or by filtering.
  3.  From the transaction detail view, they click a "Process Return" button.
  4.  The user selects the specific item(s) and quantity being returned.
  5.  The system calculates the refund amount.
  6.  The user confirms the return. This action triggers three events:
      - The `Current Stock Quantity` of the returned item is increased.
      - A financial record is created for the refund (e.g., a negative sale) to ensure financial reports are accurate.
      - The system records the refund against the original transaction.

---

This section outlines the complete sales lifecycle. The next logical step is to manage the people involved in these transactions: the customers.
