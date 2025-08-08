import { Button } from "../button";
import { Card } from "../card";

export function MyCard() {
  return (
    <Card className="w-60 h-80 max-w-sm mt-25 ml-10">
      <div className="relative flex justify-center -mt-15">
        <div className="w-28 h-28 bg-white rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 shadow-xl/8" />

        <img
          src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
          alt="Profile"
          className="rounded-full w-25 h-25 object-cover relative mt-1.5"
        />
      </div>

      <div className="text-center mt-2 px-6">
        <h2 className="text-xl font-semibold">Valentina Pace</h2>
        <p className="text-sm text-muted-foreground">Created at 01/01/1990</p>
        <p className="text-lg mt-5 px-6 font-medium">ID utente:</p>
        <p className="text-3xl text-primary-color font-semibold">1001</p>
      </div>

      <div className=" text-center mt-2 px-6 justify-end">
        <Button
          variant="outline"
          className="w-40 dot-primary-color text-white hover:bg-indigo-800 hover:text-white rounded-3xl"
        >
          Vedi profilo
        </Button>
      </div>
    </Card>
  );
}
