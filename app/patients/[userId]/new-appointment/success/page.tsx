import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";


const RequestSuccess = async ({
  searchParams,
  params: { userId },
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  const doctor = Doctors.find(
    (doctor) => doctor.name === appointment.primaryPhysician
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-col justify-center items-center flex-1 p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 text-center">
          <Link href="/">
            <Image
              src="/assets/icons/public-health.svg"
              height={1000}
              width={1000}
              alt="logo"
              className="h-10 w-auto mx-auto mb-6"
            />
          </Link>

          <Image
            src="/assets/gifs/finish.gif"
            height={300}
            width={280}
            alt="success"
            className="mx-auto mb-6"
          />

          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Your <span className="text-green-500">appointment request</span> has been successfully submitted!
          </h2>
          <p className="text-gray-700 mb-8">
            We'll be in touch shortly to confirm.
          </p>

          <div className="mb-8">
            <p className="text-lg font-medium text-gray-800 mb-4">
              Requested appointment details:
            </p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <Image
                src={doctor?.image!}
                alt="doctor"
                width={50}
                height={50}
                className="rounded-full border border-gray-300"
              />
              <p className="text-gray-800">Dr. {doctor?.name}</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/assets/icons/calendar.svg"
                height={24}
                width={24}
                alt="calendar"
              />
              <p className="text-gray-800">
                {formatDateTime(appointment.schedule).dateTime}
              </p>
            </div>
          </div>

          <Button variant="outline" className="w-full mb-6" asChild>
            <Link href={`/patients/${userId}/new-appointment`}>
              New Appointment
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RequestSuccess;
