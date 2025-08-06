Excellent. Let's begin detailing the foundational components of the application. This section is critical because it establishes the rules, permissions, and basic configuration that all other modules will depend on.

Here is the detailed breakdown for **Section 2.0**.

---

### **2.0 Core System & User Management**

This section defines the foundational features for user administration, system-wide settings, and data handling.

#### **2.1 User Roles & Permissions (Role-Based Access Control - RBAC)**

The system must support multiple user roles to ensure security and proper delegation of tasks. Access to modules and features will be restricted based on the assigned role.

- **Acceptance Criteria:**
  - An Admin must be able to create, view, edit, and delete users.
  - An Admin must assign one of the three roles (Admin, Manager, Cashier) to each user upon creation.
  - Users must only be able to access features permitted for their role.

##### **2.1.1 Admin**

The Admin has unrestricted access to all parts of the application. This role is intended for the business owner or the primary operator.

- **Permissions:**
  - **CAN** perform all actions available to `Manager` and `Cashier`.
  - **CAN** access and modify all `System Settings` (Section 2.3), including business profile and receipt customization.
  - **CAN** manage the user list, including adding new users, changing roles, and deleting users.
  - **CAN** view all financial reports, including Profit & Loss statements.
  - **CAN** perform all data import and export operations.
  - **CANNOT** be deleted by another Admin.

##### **2.1.2 Manager**

The Manager role is for trusted employees who oversee daily operations, such as a store manager.

- **Permissions:**
  - **CAN** perform all actions available to a `Cashier`.
  - **CAN** access and manage `Inventory & Product Management` (Section 3.0), including adding new products and receiving stock.
  - **CAN** access and manage `Sales & POS` (Section 4.0), including processing returns and viewing sales history.
  - **CAN** access and manage `Customer Management` (Section 5.0) and `Expense Tracking` (Section 6.1).
  - **CAN** view operational reports like Sales Reports and Inventory Reports.
  - **CANNOT** access core `System Settings` (e.g., change the business name or logo).
  - **CANNOT** manage other users (create, edit, or delete users).
  - **CANNOT** view sensitive, high-level financial reports like the full Profit & Loss statement.

##### **2.1.3 Cashier**

The Cashier role is the most restricted, designed for staff whose primary function is to process sales.

- **Permissions:**
  - **CAN** access and operate the `POS Interface` (Section 4.1) to conduct sales.
  - **CAN** view their own sales history for the current work session.
  - **CANNOT** access any other module (Inventory, Reports, Settings, etc.).
  - **CANNOT** process returns or apply discounts unless explicitly enabled by a Manager/Admin during a transaction (an "override" feature).
  - **CANNOT** see business-wide financial data or operational costs.

#### **2.2 User Authentication**

This covers how users securely access the system.

- **Login:**
  - Users must log in using an email address and a password.
  - The system should provide clear error messages for incorrect credentials.
- **Password Security:**
  - Passwords must be securely hashed and stored (not in plain text).
  - Implement a "Forgot Password" feature that sends a password reset link to the user's registered email address.
- **Session Management:**
  - Users should be automatically logged out after a period of inactivity (e.g., 8 hours) for security.

#### **2.3 System Settings & Configuration**

This area allows the Admin to customize the application for their specific business. This should be a single, easy-to-navigate "Settings" page.

##### **2.3.1 Business Profile**

- **Functionality:** The Admin can set up the core details of their business.
- **Data Fields:**
  - `Business Name` (Text)
  - `Business Logo` (Image Upload)
  - `Address` (Street, City, Region) (Text Fields)
  - `Contact Phone Number` (Text)
  - `Email Address` (Text)
  - `Tax ID / INN` (Optional, Text) - Important for official receipts.

##### **2.3.2 Localization**

- **Functionality:** The user can change the display language and currency format.
- **Requirements:**
  - **Language:** A dropdown menu in the main navigation bar or settings page to switch the interface language.
    - Supported languages: Uzbek (Latin script), Russian, English.
  - **Currency:** The system will default to Uzbek So'm (UZS). The Admin can change the currency symbol and format if needed, though UZS will be the primary use case.

##### **2.3.3 Receipt Customization**

- **Functionality:** The Admin can define what information appears on customer receipts.
- **Customizable Elements:**
  - A series of checkboxes or toggles to `Show/Hide` the following on the printed/emailed receipt:
    - Business Logo
    - Business Address
    - Contact Phone Number
    - A custom footer message (e.g., "Thank you for your purchase!"). A text input field should be provided for this message.

#### **2.4 Data Import / Export**

To help users transition from paper-based or other systems, a simple data import/export tool is essential.

- **Functionality:** Allow Admins to perform bulk data operations using CSV files.
- **Requirements:**
  - **Product Import:**
    - The system must provide a downloadable template CSV file with the correct headers.
    - Required columns: `ProductName`, `SKU/Barcode`, `CategoryID`, `CostPrice`, `SellingPrice`, `CurrentStockQuantity`, `SupplierID`, `ExpirationDate` (optional).
    - The system should validate the uploaded file and provide clear error messages for missing required columns or incorrectly formatted data.
  - **Data Export:**
    - The Admin can export key data sets to a CSV file for backup or external analysis.
    - Exportable reports: `Sales History`, `Current Inventory`, `Customer List`.

---

This completes the detailed definition for Section 2.0. We have established a solid foundation for user management and system configuration.
