# Section 1.2: First-Time Admin Onboarding & System Configuration

This flow is critical because it's the Admin's first impression of the application's core functionality. The goal is to guide them through the essential setup steps smoothly, ensuring the system is ready for use. Based on the PRD (Sections 2.3 and 2.4), this flow will be triggered only on the Admin's very first login.

---

### **User Flow Diagram: 1.2 First-Time Admin Onboarding**

**Objective:** A new Admin configures the essential business details for the first time.

**Actor:** Admin

---

**1. Start: First-Time Login**

- An Admin user logs in for the first time successfully (following Flow 1.1).
- The system detects that the initial setup has not been completed.

**2. Redirection to Welcome Screen**

- Instead of the Dashboard, the user is redirected to a dedicated "Welcome / Onboarding" screen.
- This screen briefly explains the need to configure the store.
- It has a single, clear call-to-action: a `[Get Started]` button.

**3. User Clicks [Get Started]**

- The user is navigated to the main **System Settings** page.

**4. Admin Configures Settings**

- The Settings page is presented with multiple sections or tabs for organization. The Admin can fill these out in any order.
  - **Action:** Fills out the **Business Profile** form (name, logo, address, etc.) as per Section 2.3.1.
  - **Action:** Selects the desired **Localization** settings (language, currency) as per Section 2.3.2.
  - **Action:** Chooses the **Receipt Customization** options (toggles for what to show, custom message) as per Section 2.3.3.

**5. Admin Saves Configuration**

- The Admin clicks the primary `[Save Settings]` button on the page.

**6. System Processes and Confirms**

- The system validates and saves all the configuration data.
- The system flags the initial setup as "complete" for this user/business.
- A success message is displayed (e.g., "Your settings have been saved!").

**7. Redirection to Dashboard**

- The user is automatically redirected to the **Main Dashboard (7.1)**, which is now populated with their business name and ready for use.
- On all subsequent logins, the Admin will be taken directly to the Dashboard. The Settings page will remain accessible through the main application navigation.
- **End of Flow.**

---

With the flow defined, let's design the wireframes for the screens involved.

### **Wireframe Description: Welcome Screen (First-Time Onboarding)**

**Objective:** Greet the new Admin and funnel them into the required setup process.

- **`Layout:`** Centered, single-column layout to focus the user's attention.
- **`Main Content Area:`**
  - **Component:** `Welcome Title`
    - **Text:** "Welcome to [Application Name]!"
  - **Component:** `Instructional Text`
    - **Text:** "Before you can start making sales, let's get your business configured. It will only take a moment."
  - **Component:** `Get Started Button`
    - **Type:** Primary Button
    - **Label:** "Get Started"
    - **Action:** Navigates the user to the Main Settings Page.

---

### **Wireframe Description: Main Settings Page**

**Objective:** Provide a single, easy-to-navigate page for all core system configurations.

- **`Layout:`** A full-page layout with a clear title and tabbed navigation to organize the different settings categories.

- **`Header Area:`**

  - **Component:** `Screen Title`
    - **Text:** "System Settings & Configuration"

- **`Navigation:`**

  - **Component:** `Tabs`
    - **Labels:** `Business Profile`, `Localization`, `Receipt Customization`, `Data Management`
    - **Purpose:** Allows the user to switch between different settings panels without leaving the page. `Business Profile` is the default selected tab.

- **`Content Panel (dynamically changes based on selected tab):`**

  - **`Tab 1: Business Profile`**

    - `Section Title:` "Business Profile"
    - `Form Fields:`
      - `Business Name` (Text Input, Required)
      - `Business Logo` (Image Upload control with a preview area)
      - `Address` (Text Input)
      - `Contact Phone Number` (Text Input)
      - `Email Address` (Text Input)
      - `Tax ID / INN` (Text Input, Optional)

  - **`Tab 2: Localization`**

    - `Section Title:` "Localization"
    - `Form Fields:`
      - `Display Language` (Dropdown menu with "Uzbek (Latin)", "Russian", "English")
      - `Currency Symbol` (Text Input, pre-filled with "UZS")

  - **`Tab 3: Receipt Customization`**

    - `Section Title:` "Receipt Display Options"
    - `Form Fields (Toggles/Checkboxes):`
      - `Show Business Logo on receipt`
      - `Show Business Address on receipt`
      - `Show Phone Number on receipt`
    - `Form Field:` `Custom Footer Message` (Text Area for a message like "Thank you for your purchase!")

  - **`Tab 4: Data Management`** (Based on PRD 2.4)
    - `Section Title:` "Data Import / Export"
    - `Subsection: Product Import`
      - `Instructional Text:` "Import products in bulk using our CSV template."
      - `[Download Template]` Button
      - `[Upload CSV]` Button
    - `Subsection: Data Export`
      - `Instructional Text:` "Export key data for backup or analysis."
      - `[Export Sales History]` Button
      - `[Export Current Inventory]` Button
      - `[Export Customer List]` Button

- **`Footer/Action Bar:`**
  - **Component:** `Save Settings Button`
    - **Type:** Primary Button
    - **Label:** "Save Settings"
    - **Action:** Saves all changes across all tabs and redirects to the Dashboard (as per the flow).
  - **Component:** `Cancel Link/Button`
    - **Type:** Secondary Button or Text Link
    - **Label:** "Cancel"
    - **Action:** Discards changes and navigates back to the previous screen (or Dashboard if setup was already complete).

---
