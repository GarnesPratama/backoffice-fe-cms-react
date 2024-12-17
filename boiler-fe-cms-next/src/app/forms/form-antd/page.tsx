import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import FormComponent from "@/components/FormElements/Form";

export const metadata: Metadata = {
  title: "Next.js Form Layout | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Layout page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const FormLayout = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="FormLayout" />
      <FormComponent />
    </DefaultLayout>
  );
};

export default FormLayout;
