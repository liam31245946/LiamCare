import Image from "next/image";
import Link from "next/link";
import { FaRegHospital } from "react-icons/fa";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex min-h-screen bg-gray-50">
      {isAdmin && <PasskeyModal />}

      <section className="flex flex-col justify-center items-center flex-1 p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          <Image
            src="/assets/icons/public-health.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-8 h-12 w-auto"
          />

          <PatientForm />

          <div className="mt-10 flex items-center justify-between text-sm text-gray-600">
          <FaRegHospital/>
          <p>LiamCare </p>
            <Link href="/?admin=true" className="text-blue-500 hover:underline">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <div className="hidden md:block md:w-1/2">
        <Image
          src="/assets/images/docdocdoc.png"
          height={1000}
          width={1000}
          alt="patient"
          className="side-img max-w-[50%]"
        />
      </div>
    </div>
  );
};

export default Home;
