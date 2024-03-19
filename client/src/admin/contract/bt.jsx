import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import MyContract from '../contract/abi.json';

function App() {
    const [web3, setWeb3] = useState(null);
    const [contractInstance, setContractInstance] = useState(null);
    const contractAddress = "0x70778936664895C1f6B1f0F8De91535aB56cF4Dd"

    useEffect(() => {
        async function initWeb3() {
            // Modern dapp browsers...
            if (window.ethereum) {
                const web3Instance = new Web3(window.ethereum);
                try {
                    // Request account access if needed
                    await window.ethereum.enable();
                    setWeb3(web3Instance);
                } catch (error) {
                    console.error('User denied account access');
                }
            }
            // Legacy dapp browsers...
            else if (window.web3) {
                const web3Instance = new Web3(window.web3.currentProvider);
                setWeb3(web3Instance);
            }
            // Non-dapp browsers...
            else {
                console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
            }
        }

        initWeb3();
    }, []);

    useEffect(() => {
        async function initContract() {
            if (web3) {
                const contractInstance = new web3.eth.Contract(MyContract, contractAddress);
                setContractInstance(contractInstance);
            }
        }

        initContract();
    }, [web3]);

    const callContractMethod = async () => {
        if (contractInstance) {
            try {
                const result = await contractInstance.methods.getAll().call();
                console.log('Result:', result);
            } catch (error) {
                console.error('Error calling contract method:', error);
            }
        }
    };

    return (
        <div>
            <h1>Smart Contract Interaction</h1>
            <button onClick={callContractMethod}>Call Contract Method</button>
        </div>
    );
}

export default App;
