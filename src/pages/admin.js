import DashboardLayout from "@/components/Layout/DashboardLayout";
import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const AdminPage = () => {
  return <div>AdminPage</div>;
};

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
