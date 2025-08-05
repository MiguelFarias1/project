import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const Navbar = async () => {
  const user = await currentUser();

  // Extrai o nome completo do usuário
  const fullName = user?.firstName
    ? `${user.firstName} ${user.lastName || ""}`.trim()
    : "Usuário";

  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">

        <div className="flex flex-col">
          {/* Exibe o nome do usuário */}
          <span className="text-xs leading-3 font-medium">{fullName}</span>
          {/* Exibe o papel do usuário */}
          <span className="text-[10px] text-gray-500 text-right">
            {user?.publicMetadata?.role as string}
          </span>
        </div>
        {/* Botão do usuário do Clerk */}
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;