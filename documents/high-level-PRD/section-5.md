Understood. Let's define the functionalities for managing customer information. This section is crucial for businesses that want to build relationships with their customers, offer credit, and understand their purchasing patterns.

---

### **5.0 Customer Relationship Management (CRM)**

This module provides the tools to create and manage a customer database. It allows the business to track customer purchases and, critically, manage sales made on credit (accounts receivable).

#### **5.1 Customer Database**

- **User Story:** "As a Manager, I want to save my regular customers' information so I can easily look them up, see their purchase history, and manage any outstanding balances they have."

- **Functionality:**
  - A dedicated "Customers" page that displays a searchable and sortable list of all customers.
  - The ability to `Create`, `Read`, `Update`, and `Delete` customer profiles.
  - A "Create New Customer" form with the following fields:
    - `Full Name` (Text, Required)
    - `Phone Number` (Text, Unique): This will often serve as the primary customer identifier.
    - `Email Address` (Text, Optional)
    - `Address` (Text, Optional)
  - **POS Integration:** The cashier should have the ability to either:
    - Assign a sale to an existing customer (by searching their name or phone number).
    - Quickly add a new customer directly from the POS screen during checkout.

#### **5.2 Customer Purchase History**

- **User Story:** "When I view a customer's profile, I want to see a complete history of everything they've bought from my store so I can understand their preferences and quickly find past transactions if needed."

- **Functionality:**
  - Within each customer's profile page, there will be a "Purchase History" tab.
  - This tab will display a list of all sales transactions associated with that customer.
  - The list will be a filtered version of the main `Sales History` log (Section 4.3), showing `Transaction ID`, `Date`, and `Total Amount`.
  - Clicking on a transaction in this view will open the full receipt details for that sale.

#### **5.3 Managing Customer Debts (Accounts Receivable)**

This is a vital feature for many small businesses that operate on trust and provide goods on credit.

- **User Story:** "As a business owner, I need to be able to sell to a trusted customer on credit and easily track how much they owe me. When they pay off their debt, I need a simple way to record that payment and update their balance."

- **Workflow:**

  1.  **Selling on Credit:**

      - In the `Checkout & Payments` screen (Section 4.2), alongside "Cash" and "Card", there will be a payment method called **"On Account"** (or `Qarzga` in Uzbek).
      - This payment option is **only enabled** if a customer has been assigned to the sale.
      - When "On Account" is selected, the sale is completed, inventory is updated, but the total amount is added to the customer's outstanding balance instead of being recorded as immediate revenue.

  2.  **Tracking Debts:**

      - The `Customer Profile` page must prominently display the customer's **`Current Outstanding Balance`**.
      - A dedicated report page, "Debtors" or "Accounts Receivable", will list all customers who currently have a non-zero balance. This report should show `Customer Name`, `Phone Number`, and `Total Amount Owed`.

  3.  **Recording a Debt Payment:**
      - From either the customer's profile or the "Debtors" report, there will be a "Record Payment" button next to their balance.
      - Clicking this button opens a simple pop-up or form where the user can enter the `Amount Paid`.
      - Upon confirming the payment, the system will:
        - Reduce the customer's `Current Outstanding Balance` by the amount paid.
        - Create a financial transaction record for the payment received.

---

This section completes the customer management functionality. We've defined how to store customer information, view their history, and manage credit sales.
