# Section 1.1: User Login Flow

---

### **User Flow Diagram: 1.1 User Login**

**Objective:** A registered user securely logs into the application.

**Actors:** Admin, Manager, Cashier

---

**1. Start: User Navigates to Login Screen**

- The user (Admin, Manager, or Cashier) opens the application URL and is presented with the Login Screen.

**2. Login Screen**

- The screen displays two input fields:
  - `Email Address`
  - `Password`
- The screen displays two primary actions:
  - A `[Login]` button.
  - A `Forgot Password?` link.

**3. User Enters Credentials and Clicks [Login]**

**4. System Validates Credentials**

- The system checks if the provided email and password match a registered user.
  - **IF** credentials are **VALID** -> **Go to Step 5**
  - **IF** credentials are **INVALID** -> **Go to Step 6**

**5. Successful Login & Redirection**

- The system authenticates the user and creates a secure session.
- The system checks the user's role to determine their landing page.
  - **IF** user role is `Admin` or `Manager` -> Redirect to **Main Dashboard (7.1)**.
  - **IF** user role is `Cashier` -> Redirect to **POS Interface (4.1)**.
- **End of Flow.**

**6. Incorrect Credentials**

- The system displays a clear error message on the Login Screen (e.g., "The email or password you entered is incorrect.").
- The input fields are preserved (or cleared, based on preference, but preserving the email is common).
- The user is returned to the **Login Screen (Step 2)** to try again.
- **End of Flow.**

---

### **Branch: 1.1.3 Forgot Password / Password Reset**

**A. Start: User Clicks `Forgot Password?`**

- The user clicks the `Forgot Password?` link on the **Login Screen (Step 2)**.

**B. Password Reset Screen**

- The user is taken to a new screen.
- The screen displays one input field:
  - `Email Address`
- The screen displays a `[Send Reset Link]` button.

**C. User Enters Email and Submits**

**D. System Validates Email**

- The system checks if the email exists in the user database.
  - **IF** email **EXISTS** -> **Go to Step E**
  - **IF** email **DOES NOT EXIST** -> **Go to Step F**

**E. Reset Link Sent**

- The system generates a secure, single-use password reset link.
- The system sends an email containing this link to the user's registered address.
- The screen displays a confirmation message (e.g., "If an account with that email exists, a password reset link has been sent.").
- **End of Flow.**

**F. Email Not Found**

- For security reasons (to prevent email enumeration), the system displays the _same_ confirmation message as in Step E. The user experience is identical whether the email exists or not.
- **End of Flow.**

**(Note: The flow for what happens _after_ the user clicks the link in their email would be a separate, subsequent flow, typically involving a "Create New Password" screen.)**

---

Excellent. Now that we've locked in the user flow, let's translate it into the structural blueprints for the necessary screens.

Here are the wireframe descriptions for the **Login Screen** and the **Forgot Password Screen**. Remember, the focus here is on structure, placement, and function—not on visual aesthetics like colors or specific fonts.

---

### **Wireframe Description: Login Screen**

**Objective:** Allow a user to enter their credentials to access the system.

- **`Layout:`** A simple, centered single-column layout designed for clarity and focus.

- **`Header (Optional but Recommended):`**

  - **Component:** `Application Logo`
  - **Purpose:** Provides branding and identifies the application.

- **`Main Content Area (Centered Form):`**

  - **Component:** `Screen Title`
    - **Text:** "Login" or "Welcome Back"
    - **Purpose:** Clearly states the purpose of the screen.
  - **Component:** `Email Address Input Field`
    - **Type:** Text Input
    - **Label:** "Email Address"
    - **Purpose:** To capture the user's registered email.
  - **Component:** `Password Input Field`
    - **Type:** Password Input (masks characters)
    - **Label:** "Password"
    - **Purpose:** To securely capture the user's password.
  - **Component:** `Login Button`
    - **Type:** Primary Button
    - **Label:** "Login"
    - **Action:** Submits the form for authentication (triggers step 4 in the user flow).
  - **Component:** `Forgot Password Link`
    - **Type:** Text Link
    - **Label:** "Forgot Password?"
    - **Action:** Navigates the user to the "Password Reset Screen" (triggers branch 1.1.3).

- **`Interaction State (Error):`**
  - **Trigger:** Invalid credentials submitted.
  - **Change:** An `Error Message Box` appears above the input fields.
  - **Message Text:** "The email or password you entered is incorrect."

---

### **Wireframe Description: Password Reset Screen**

**Objective:** Allow a user to initiate the password reset process by submitting their email address.

- **`Layout:`** A simple, centered single-column layout, consistent with the Login Screen.

- **`Header (Optional but Recommended):`**

  - **Component:** `Application Logo`
  - **Purpose:** Maintains brand consistency and context.

- **`Main Content Area (Centered Form):`**

  - **Component:** `Screen Title`
    - **Text:** "Reset Password"
    - **Purpose:** Clearly states the purpose of the screen.
  - **Component:** `Instructional Text`
    - **Text:** "Enter your email address below, and we will send you a link to reset your password."
    - **Purpose:** Guides the user on what to do.
  - **Component:** `Email Address Input Field`
    - **Type:** Text Input
    - **Label:** "Email Address"
    - **Purpose:** To capture the email of the account needing a password reset.
  - **Component:** `Send Reset Link Button`
    - **Type:** Primary Button
    - **Label:** "Send Reset Link"
    - **Action:** Submits the email to the system (triggers step D in the user flow).
  - **Component:** `Back to Login Link`
    - **Type:** Text Link
    - **Label:** "Back to Login"
    - **Action:** Navigates the user back to the Login Screen.

- **`Interaction State (Confirmation):`**
  - **Trigger:** The `[Send Reset Link]` button is clicked.
  - **Change:** The form area is replaced or overlaid with a `Confirmation Message Box`.
  - **Message Text:** "If an account with that email exists, a password reset link has been sent."

---
