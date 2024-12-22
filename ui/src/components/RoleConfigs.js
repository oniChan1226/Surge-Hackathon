
export const roleConfigs = {
  User: [
    { label: "Email", type: "email", placeholder: "Enter your email", name: "email", required: true },
    { label: "Password", type: "password", placeholder: "Enter your password", name: "password", required: true },
    { label: "Phone (Optional)", type: "tel", placeholder: "Enter your contact", name: "phone", required: false }
  ],
  Organization: [
    { label: "Organization Name", type: "text", placeholder: "Enter organization name", name: "organizationName", required: true },
    { label: "Contact Details", type: "number", placeholder: "Enter your contact", name: "contactDetails", required: true },
    { label: "Email", type: "email", placeholder: "Enter your email", name: "email", required: true },
    { label: "Password", type: "password", placeholder: "Enter your password", name: "password", required: true },
  ],
  "Relief Worker": [
    { label: "Email", type: "email", placeholder: "Enter your email", name: "email", required: true },
    { label: "Password", type: "password", placeholder: "Enter your password", name: "password", required: true },
    { label: "Organization Invite Code", type: "text", placeholder: "Enter organization invote code", name: "organizationCode", required: true }
  ],
  Admin: [
    { label: "Admin Email", type: "email", placeholder: "Enter your admin email", name: "email", required: true },
    { label: "Password", type: "password", placeholder: "Enter your password", name: "password", required: true },
  ],
};