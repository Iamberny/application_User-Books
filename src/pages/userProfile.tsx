import MyEditUser from "../components/ui/myComponents/myEditUser";
import MyMenu from "../components/ui/myComponents/myMenu";


function UserProfile() {
  return (
    <div>
      <MyMenu />
      <h1 className="text-left text-2xl font-bold ml-15 -mt-10">Narrify</h1>

      <div className="mt-12  mx-auto ">
        <MyEditUser />
      </div>
    </div>
  );
}

export default UserProfile;
