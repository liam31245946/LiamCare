import Image from "next/image";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

import { FaRegHospital } from "react-icons/fa";


const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex min-h-screen bg-gray-400">
      <section className="flex flex-col justify-center items-center flex-1 p-6">
        <div className="w-full max-w-md bg-gray-100 shadow-lg rounded-xl p-8">
          <Image
            src="/assets/icons/public-health.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-8 h-12 w-auto"
          />

          <RegisterForm user={user} />

          <div className="mt-10 flex items-center justify-center text-sm text-gray-600">
            <FaRegHospital/>
            <p>LiamCare</p>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Register;
