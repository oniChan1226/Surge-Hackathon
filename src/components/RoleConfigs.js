
export const roleConfigs = {
  User: [
    { label: "Email", type: "email", placeholder: "Enter your email", name: "email", required: true },
    { label: "Password", type: "password", placeholder: "Enter your password", name: "password", required: true },
    { label: "Phone (Optional)", type: "tel", placeholder: "Enter your contact", name: "Phone", required: false }
  ],
  Organization: [
    { label: "Organization Name", type: "text", placeholder: "Enter organization name", name: "organizationName", required: true },
    { label: "Contact Details", type: "number", placeholder: "Enter your contact", name: "contactDetails", required: true },
    { label: "Email", type: "email", placeholder: "Enter your email", name: "email", required: true },
  ],
  "Relief Worker": [
    { label: "Email", type: "email", placeholder: "Enter your email", name: "email", required: true },
    { label: "Password", type: "password", placeholder: "Enter your password", name: "password", required: true },
    { label: "Organization Invite Code", type: "text", placeholder: "Enter organization invote code", name: "organizationCode", required: true }
  ],
  Admin: [
    { label: "Admin ID", type: "text", placeholder: "Enter your admin ID", name: "adminId", required: true },
    { label: "Password", type: "password", placeholder: "Enter your password", name: "password", required: true },
  ],
};