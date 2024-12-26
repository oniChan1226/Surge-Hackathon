// navConfig.js

import { LayoutDashboard, Logs, HandHelping, Leaf, HandHeart, Mails, Settings2, Download } from 'lucide-react';

export const navConfig = {
  individual: [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/individual/reports", label: "All Reports", icon: Logs },
    { to: "/individual/report-a-need", label: "Report a need", icon: HandHelping },
  ],
  "relief worker": [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/resources", label: "Available Resources", icon: Leaf },
    { to: "/add-resource", label: "Add Resource", icon: HandHeart },
  ],
  "org admin": [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/org-admin/requests", label: "Requests", icon: Mails },
    { to: "/resources", label: "Available Resources", icon: Leaf },
    { to: "/add-resource", label: "Add Resource", icon: HandHeart },
  ],
  admin: [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/reports", label: "User Reports", icon: Logs },
    { to: "/resources", label: "Available Resources", icon: Leaf },
    { to: "/employees", label: "Configuration", icon: Settings2 },
    { to: "", label: "Generate Reports", icon: Download },
  ],
};
