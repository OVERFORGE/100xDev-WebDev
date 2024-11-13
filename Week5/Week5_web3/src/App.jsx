import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletConnectButton,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Airdrop } from "./airdrop";

function App() {
  console.log(WalletDisconnectButton);
  return (
    <div className="bg-beige-100 h-screen">
      <ConnectionProvider
        endpoint={
          "https://solana-devnet.g.alchemy.com/v2/m9kOW5RTuFJtplq-IwfPhCuvs6IIdAaZ"
        }
      >
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="pt-8 pr-24 pl-24">
              <div className="flex flex-row-reverse ">
                <div className="ml-4">
                  <WalletMultiButton />
                </div>
                <div>
                  <WalletDisconnectButton />
                </div>
              </div>

              <Airdrop />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App;
