import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import { FaRegHospital } from "react-icons/fa";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <section className="flex flex-col justify-center items-center flex-1 p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          <Image
            src="/assets/icons/public-health.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-8 h-12 w-auto"
          />

          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />

          <div className="mt-10 flex items-center justify-center text-sm text-gray-600">
          <FaRegHospital/>
            <p>LiamCare</p>
          </div>
        </div>
      </section>

      <div className="hidden md:block md:w-1/2">
        <Image
          src="/assets/images/serve.png"
          height={1500}
          width={1500}
          alt="appointment"
          className="side-img max-w-[50%]"
        />
      </div>
    </div>
  );
};

export default Appointment;
