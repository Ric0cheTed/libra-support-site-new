import Image from "next/image";

export default function TeamCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <Image
        src="/images/staff-placeholder.webp"
        alt="Team Member"
        width={128}
        height={128}
        className="mx-auto rounded-full mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold text-primary mb-1">Jane Doe</h3>
      <p className="text-gray-600">Care Team Member</p>
    </div>
  );
}
