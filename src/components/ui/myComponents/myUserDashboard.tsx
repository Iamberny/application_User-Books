import { useUsers } from "../../../hooks/useUsers";
import { MyCardUser } from "./myCard";

export function MyUserDashboard() {
  const { data: users, isLoading } = useUsers();

  if (isLoading) return <p>Caricamento utenti...</p>;

  return (
    <div className="flex flex-wrap mt-6 gap-6 ml-8">
      {users?.map((user: any) => (
        <MyCardUser key={user.id} user={user} />
      ))}
    </div>
  );
}


