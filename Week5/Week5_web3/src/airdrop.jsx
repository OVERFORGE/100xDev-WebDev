import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import solana from "./assets/solana.png";
export function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendAirdropToUser() {
    const amount = document.getElementById("publicKey").value;
    await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);

    alert("Airdropped SOL");
  }

  return (
    <div className="pt-28 h-screen">
      <div className="flex justify-between w-full h-full">
        <div>
          <span className="font-bold text-9xl font-poppins text-beige-950 mr-8">
            GET
          </span>
          <span className="font-bold text-9xl font-poppins text-beige-500">
            YOUR
          </span>
          <p className="font-bold text-8xl font-poppins text-beige-950 pl-4 pt-1">
            $SOL
          </p>
          <img
            className="w-5/12 absolute top-1/3 left-48 "
            src={solana}
            alt=""
          />
        </div>

        <div className="w-6/12 flex flex-col mt-28 ml-32 h-full">
          <div className="w-full flex justify-center">
            <input
              id="publicKey"
              type="text "
              placeholder="Enter the Amount"
              className="w-full rounded-3xl placeholder-beige-700 p-4 pl-8 pr-8 border-beige-900 border-2 outline-none outline-4 shadow-2xl font-bold  "
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              className="bg-beige-500 w-44 mt-12 pt-3 pb-3  rounded-3xl text-beige-950 font-bold hover:bg-beige-600 active:bg-beige-700"
              onClick={sendAirdropToUser}
            >
              Send Airdrop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
