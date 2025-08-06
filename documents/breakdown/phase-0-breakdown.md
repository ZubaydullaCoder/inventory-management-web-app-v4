### **Phase 0: Foundation and Core UI Setup**

**Objective:** To establish the application's visual identity, configure the core layout, and create the foundational UI building blocks. This phase ensures that all subsequent development is built upon a consistent and robust design system.

---

#### **Task 1: Design System & Theme Configuration**

- **Goal:** Centralize all design tokens and configure the application's theme to match the desired minimalist and attractive style.
- **Steps:**
  1.  **Primary Color Integration:** Convert the specified primary color `rgb(22, 134, 209)` to its HSL equivalent, which is required for the shadcn/ui theming system.
  2.  **CSS Variable Definition:** Update `src/app/globals.css` to define the new HSL values for the primary color (`--primary`) and its corresponding foreground color (`--primary-foreground`) for both light and dark modes.
  3.  **Tailwind Configuration:** Update `tailwind.config.mjs` to ensure Tailwind CSS correctly utilizes these newly defined CSS variables for its color palette, making classes like `bg-primary` and `text-primary` available throughout the application.
  4.  **Component Styling:** Verify that core shadcn/ui components, such as `Button`, correctly adopt the new primary color by default, ensuring theme consistency from the ground up.

---

#### **Task 2: Application Shell & Core Layout**

- **Goal:** Create the main application layout that will provide a consistent structure for all authenticated pages.
- **Steps:**
  1.  **Route Grouping:** Establish a route group, for instance `(app)`, within the `src/app` directory. This group will contain all routes that require the main authenticated layout, separating them from public pages like Login.
  2.  **Layout Component:** Create a new `layout.tsx` file within the `src/app/(app)` directory. This Server Component will define the primary user interface shell.
  3.  **Structural Components:**
      - **Sidebar/Navigation:** Implement a sidebar component. This will serve as the main navigation hub, containing links to all major sections as defined in the PRD (e.g., Dashboard, Products, Sales, Users). It will be populated with static data for now.
      - **Header:** Implement a header component. This will be a placeholder for user-specific information (e.g., user name, role) and quick actions like logging out.
      - **Main Content Area:** Define the main content area where the page-specific content will be rendered. The layout will wrap the `children` prop within this area.

---

#### **Task 3: Generic & Reusable Component Scaffolding**

- **Goal:** Develop a set of generic, reusable components based on the recurring patterns identified in the UX design documents. This adheres to the DRY principle and ensures UI consistency.
- **Steps:**
  1.  **Page Header Component:** Create a standardized page header component. This will typically include the page title (e.g., "User Management") and a primary action button (e.g., "+ Add New User"), a pattern seen across multiple wireframes.
  2.  **Data Table Component:** Scaffold a generic, reusable `DataTable` component using `shadcn/ui`'s Table components. This component will be designed to accept static data (`columns` and `data` props) and will serve as the foundation for all list views (e.g., users, products, sales history). It will include placeholders for future features like filtering and pagination controls.
  3.  **Modal/Dialog Component:** Create a standardized `Modal` or `Dialog` component using `shadcn/ui`'s Dialog. This will be used for forms that pop up over the main content, such as "Add/Edit User" or "Create Category," as described in the UX flows. It will include a title, content area, and a footer for action buttons (`Save`, `Cancel`).
  4.  **Form Controls:** Ensure standard form elements like `Input`, `Select` (Dropdown), and `Checkbox` from `shadcn/ui` are correctly styled with the application's theme and are ready for use in the upcoming forms.

---

#### **Task 4: Static Page & Route Structure Creation**

- **Goal:** Create the file structure for all the main application routes defined in the PRD, populating them with the core layout and placeholder content.
- **Steps:**
  1.  **Login Page:** Create a `login/page.tsx` file outside the `(app)` group. This page will have a simple, centered layout distinct from the main application shell.
  2.  **Dashboard Page:** Create the main dashboard page at `src/app/(app)/page.tsx`. This will be the default landing page after login and will contain the core application layout.
  3.  **Module Pages:** Create the folder and `page.tsx` file for each primary feature module inside the `(app)` group. Each page will utilize the core layout and contain a placeholder `PageHeader`.
      - `users/page.tsx`
      - `products/page.tsx`
      - `sales/page.tsx`
      - `customers/page.tsx`
      - `reports/page.tsx`
      - `settings/page.tsx`
      - And all other key sections identified in the PRD.
