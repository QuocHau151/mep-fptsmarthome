"use client";

import { UserRole } from "@prisma/client";

import { FormError } from "./form-error";
import { useCurrentRole } from "@/hook/use-current-role";
import { logout } from "@/actions/logout";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();
  const router = useRouter();
  const handleLogout = async () => {
    await logout();
    await router.push("/login");
  };
  if (role !== allowedRole) {
    return (
      <>
        <div className="flex items-center justify-center flex-col">
          <FormError message="Bạn không phải Admin của Page" />
          <Button onClick={handleLogout}>Về trang đăng nhập</Button>
        </div>
      </>
    );
  }

  return <>{children}</>;
};
