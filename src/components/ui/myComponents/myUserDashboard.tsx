import { useUsers } from "../../../hooks/useUsers";
import { MyCardUser } from "./myCard";
import { SkeletonUserCard } from "./mySkeleton";

export function MyUserDashboard() {
  const { data: users, isLoading } = useUsers();

  if (isLoading)
    return (
      <div className="flex flex-wrap mt-6 gap-6 ml-8 mb-5">
        {Array.from({ length: 6 }).map((_, idx) => (
          <SkeletonUserCard key={idx} />
        ))}
      </div>
    );

  return (
    <div className="flex flex-wrap mt-6 gap-6 ml-8 mb-5">
      {users?.map((user: any) => (
        <MyCardUser key={user.id} user={user} />
      ))}
    </div>
  );
}
