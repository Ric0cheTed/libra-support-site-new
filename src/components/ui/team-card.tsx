import Image from "next/image";

type TeamCardProps = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

export default function TeamCard({ name, role, image, bio }: TeamCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <Image
        src={image}
        alt={name}
        width={128}
        height={128}
        className="mx-auto rounded-full mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold text-primary mb-1">{name}</h3>
      <p className="text-gray-600 font-medium mb-2">{role}</p>
      <p className="text-sm text-gray-500">{bio}</p>
    </div>
  );
}
