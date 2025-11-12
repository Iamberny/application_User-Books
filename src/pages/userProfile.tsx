import EditUser from "@/components/modified_components/EditUser";
import TopMenu from "@/components/modified_components/TopMenu";
import TitleLink from "@/components/modified_components/TitleLink";

function UserProfile() {
  return (
    <div>
      <TopMenu />
      <div className="-mt-8">
        <TitleLink />
      </div>

      <div className="mt-12  mx-auto ">
        <EditUser />
      </div>
    </div>
  );
}

export default UserProfile;
