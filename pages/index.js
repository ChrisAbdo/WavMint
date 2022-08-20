import Head from "next/head";
import { useEffect, useState } from "react";

import Web3 from "web3";

import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Alert from "../components/Alert";

const Home = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);

  // Initialize blockchain data from ABIs
  const loadBlockchainData = async () => {
    if (typeof window.ethereum !== "undefined") {
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);

      const accounts = await web3.eth.getAccounts();

      if (accounts.length > 0) {
        setAccount(accounts[0]);
      }

      const networkId = await web3.eth.net.getId();

      // Event listeners...
      window.ethereum.on("accountsChanged", function (accounts) {
        setAccount(accounts[0]);
      });

      window.ethereum.on("chainChanged", (chainId) => {
        window.location.reload();
      });
    }
  };

  // Enable metamask connection
  const Web3Handler = async () => {
    if (web3) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    }
  };

  useEffect(() => {
    loadBlockchainData();

    if (window.ethereum && account === null) {
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
    }
  }, [account]);

  return (
    <div>
      <Head>
        <title>WavMint</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar Web3Handler={Web3Handler} account={account} />
      <Alert />
      <Landing Web3Handler={Web3Handler} account={account} />
    </div>
  );
};

export default Home;
