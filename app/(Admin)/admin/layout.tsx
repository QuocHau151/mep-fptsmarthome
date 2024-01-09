import LeftBar from "@/components/admin/left-bar";
import NavBar from "@/components/admin/nav";

import { RoleGate } from "@/components/auth/role-gate";
import { UserRole } from "@prisma/client";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RoleGate allowedRole={UserRole.ADMIN}>
          <LeftBar />
          <NavBar />
          {children}
        </RoleGate>
      </body>
    </html>
  );
}
