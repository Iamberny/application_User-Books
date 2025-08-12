import { Card } from "../card";
import { Link } from "react-router-dom";

export function MyCardUser() {
  return (
    <Card className="w-60 h-80 max-w-sm mt-25 ml-10">
      <div className="relative flex justify-center -mt-17">
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
        <Link
          to={`/user/1001`}
          className="inline-block w-40 text-center dot-primary-color text-white hover:bg-indigo-800 hover:text-white rounded-3xl border border-input px-4 py-2"
        >
          Vedi profilo
        </Link>
      </div>
    </Card>
  );
}

export function MyCardBook(){
  return (
    <Card className="w-60 h-80 max-w-sm mt-25 ml-10">
      <div className="relative flex justify-center -mt-17">
        <div className="w-26 h-30 bg-white absolute top-0 left-1/2 transform -translate-x-1/2 shadow-xl/8" />

        <img
          src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
          alt="Profile"
          className=" w-20 h-25 object-cover relative mt-1.5"
        />
      </div>

      <div className="text-center mt-2 px-6">
        <h2 className="text-xl font-semibold">Il bosco incantato</h2>
        <p className="text-sm text-muted-foreground">Robert Ansimov</p>
        <p className="text-lg mt-5 px-6 font-medium">ID libro:</p>
        <p className="text-3xl text-primary-color font-semibold">2012</p>
      </div>

      <div className=" text-center mt-2 px-6 flex justify-center gap-2 text-sm">
        <Link
          to={`/book/2012`}
          className="whitespace-nowrap bg-white hover:bg-indigo-700 hover:text-white text-primary-color border border-indigo-600  rounded-3xl px-4 py-2"
        >
          Vedi dettagli
        </Link>

        <Link
          to={`https://www.amazon.it/incantato-Piccola-collezione-bamboline-colori/dp/1474973477/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1ND0MSGTEVKWH&dib=eyJ2IjoiMSJ9.vfc2ZByi1A38o0i_7YocizsmLjz35n1vSQCxVgfRHN-wySLyw8mlTRX1C-6XOH-HMwjDM8Ux88vz4zXYMzYXoDfoAAG5_QUfFHX-3ak59Zfuqhn06ezCARhT9ib9Zkx1ujIgsLSk1DQDRciITx-K-9es_M37k1wNh29RoNTHrRzMrpBG8ohYUwfNtZkItB7cFdM0Kz2yVQqzL-ydVE1AWGwC1KsEHDhK8xKqpzEQoKVLu5n3vSqkRfuD032lADYXB01yLr5T7iV_qtf180DEPf65O90fDlulbiTBhYVzc5c.dgfG_V52xuvlCklbyCM__3daad_SgVKH941uVBoqzrE&dib_tag=se&keywords=il+bosco+incantato&qid=1755015828&sprefix=il+bosco+incantato%2Caps%2C114&sr=8-1`}
          className="inline-block w-40 text-center dot-primary-color text-white hover:bg-indigo-800 hover:text-white rounded-3xl border border-input px-4 py-2"
        >
          Acquista
        </Link>
      </div>
    </Card>
  );
}
