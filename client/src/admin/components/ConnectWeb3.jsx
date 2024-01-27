import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function ButtonMetamask() {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const connectMetamask = async () => {
    try {
      if (window.ethereum) {
        if (!isConnected) {
          const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
          });
          const web3 = new Web3(window.ethereum);

          const getAccount = accounts[0];
          setAccount(getAccount);
          // console.log("Address :", getAccount)

          const getBalance = await web3.eth.getBalance(accounts[0]);
          const balanceInEther = web3.utils.fromWei(getBalance, 'ether');
          setBalance(balanceInEther);
          // console.log("Balance :", balanceInEther, " ETH")

          setIsConnected(true);
          console.log('Connect Success');
        } else {
          setAccount('');
          setBalance('');
          setIsConnected(false);
          // console.log('Disconnected');
        }
      } else {
        // console.log('not have metamask');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleNetworkChange = () => {
      connectMetamask();
    };

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleNetworkChange);
      window.ethereum.on('chainChanged', handleNetworkChange);

      return () => {
        window.ethereum.off('accountsChanged', handleNetworkChange);
        window.ethereum.off('chainChanged', handleNetworkChange);
      };
    }
  }, []);

  return (
    <div>
      <div className="bg-primary p-3">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:order-1 md:mr-auto md:ml-0 mb-2 md:mb-0">
            <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="blockchain"><g><path d="M13 14.21v3.1934c0 .3696.2041.709.5303.8828l3 1.5967C16.6768 19.9609 16.8389 20 17 20s.3232-.0391.4697-.1172l3-1.5967C20.7959 18.1123 21 17.7729 21 17.4033V14.21c0-.3696-.2041-.709-.5303-.8828l-3-1.5967c-.293-.1563-.6465-.1563-.9395 0l-3 1.5967C13.2041 13.501 13 13.8403 13 14.21zM15 14.8105l2-1.0645 2 1.0645v1.9922l-2 1.0645-2-1.0645V14.8105zM15.4697 5.3271l-3-1.5967c-.293-.1563-.6465-.1563-.9395 0l-3 1.5967C8.2041 5.501 8 5.8403 8 6.21v3.1934c0 .3696.2041.709.5303.8828l3 1.5967C11.6768 11.9609 11.8389 12 12 12s.3232-.0391.4697-.1172l3-1.5967C15.7959 10.1123 16 9.7729 16 9.4033V6.21C16 5.8403 15.7959 5.501 15.4697 5.3271zM14 8.8027l-2 1.0645-2-1.0645V6.8105l2-1.0645 2 1.0645V8.8027zM6.5303 11.7305l-3 1.5967C3.2041 13.501 3 13.8403 3 14.21v3.1934c0 .3696.2041.709.5303.8828l3 1.5967C6.6768 19.9609 6.8389 20 7 20s.3232-.0391.4697-.1172l3-1.5967C10.7959 18.1123 11 17.7729 11 17.4033V14.21c0-.3696-.2041-.709-.5303-.8828l-3-1.5967C7.1768 11.5742 6.8232 11.5742 6.5303 11.7305zM9 16.8027l-2 1.0645-2-1.0645v-1.9922l2-1.0645 2 1.0645V16.8027z"></path></g></svg>
              <p className="text-xl font-bold ">การเชื่อมต่อกับ Blockchain</p>
            </div>
          </div>

          <div className="md:order-2 md:ml-auto md:mr-0">
            <button
              className={`flex items-center gap-2 shadow-xl bg-orange-600 p-2 rounded-lg text-white btn glass mb-2 md:mb-0 ${isConnected ? 'disconnect-btn' : 'connect-btn'}`}
              onClick={connectMetamask}
            >
              <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 212 189" id="metamask">
                  <g fill="none" fill-rule="evenodd"><polygon fill="#CDBDB2" points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"></polygon><polygon fill="#CDBDB2" points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875" transform="matrix(-1 0 0 1 256.5 0)"></polygon><polygon fill="#393939" points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"></polygon><polygon fill="#F89C35" points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"></polygon><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"></polygon><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"></polygon><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813"></polygon><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"></polygon><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90.563 152.438"></polygon><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719"></polygon><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25"></polygon><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"></polygon><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"></polygon><polygon fill="#DFCEC3" points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"></polygon><polygon fill="#DFCEC3" points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625" transform="matrix(-1 0 0 1 272.25 0)"></polygon><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)"></polygon><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27"></polygon><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"></path><g transform="matrix(-1 0 0 1 211.5 0)"><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"></polygon><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"></polygon><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813"></polygon><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"></polygon><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90 153"></polygon><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719"></polygon><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25"></polygon><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"></polygon><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"></polygon><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)"></polygon><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27"></polygon><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"></path></g></g>
                </svg>
              </div>
              {isConnected ? 'Disconnect' : 'Connect'}
            </button>
          </div>

        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col card h-100 p-3 bg-white rounded-lg shadow-lg pb-10">
          <div class="card-body flex flex-col gap-5">
            <div class="flex flex-wrap justify-between items-center gap-3">
              {/* <h3 class="h6 mb-0">
          Overview
        </h3> */}
            </div>
            <div>
              <h4 class="text-capitalize mb-1">
                Account Metamask
              </h4>
              <div class="flex items-center">
                <div class='md:flex items-center'>
                  <b>Address: &nbsp; </b>{account}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col card h-100 p-3 bg-white rounded-lg shadow-lg pb-10">
          <div class="card-body flex flex-col gap-5">
            <div class="flex flex-wrap justify-between items-center gap-3">
              <h3 class="h6 mb-0">
                Overview
              </h3>
            </div>
            <div>
              <h4 class="text-capitalize mb-1">
                ETH Balance
              </h4>
              <div class="flex items-center">
                <div class='flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" id="eth">
                    <path d="M18.884,14.18a.5.5,0,0,0-.608-.127L12.5,16.941,6.724,14.053A.5.5,0,0,0,6.1,14.8l6,8c.006.008.016.011.023.019a.48.48,0,0,0,.117.1.392.392,0,0,0,.05.033.466.466,0,0,0,.42,0,.392.392,0,0,0,.05-.033.48.48,0,0,0,.117-.1c.007-.008.017-.011.023-.019l6-8A.5.5,0,0,0,18.884,14.18ZM12,17.809V21L8.171,15.9ZM13,21V17.809L16.829,15.9Z"></path><path d="M6.014,12.558a.453.453,0,0,0,.006.082c.005.016.017.028.023.043a.306.306,0,0,0,.01.041c.006.013.021.018.028.03a.489.489,0,0,0,.13.142c.017.012.029.026.046.036s.012.012.019.015l6,3,.014,0a.475.475,0,0,0,.42,0l.014,0,6-3a.435.435,0,0,0,.042-.033.473.473,0,0,0,.086-.069.467.467,0,0,0,.059-.074.532.532,0,0,0,.036-.047c.007-.015.006-.03.012-.044a.384.384,0,0,0,.021-.04.327.327,0,0,0,0-.054.417.417,0,0,0,.008-.105.5.5,0,0,0-.011-.087.474.474,0,0,0-.036-.1.371.371,0,0,0-.016-.047l-6-10c-.007-.011-.02-.015-.027-.025a.48.48,0,0,0-.8,0c-.007.01-.02.014-.027.025l-6,10h0v0a.5.5,0,0,0-.064.232c0,.009-.007.016-.007.025A.443.443,0,0,0,6.014,12.558ZM12,14.691,7.618,12.5,12,10.309Zm1-4.382L17.382,12.5,13,14.691Zm0-1.118V4.305l4.187,6.979Zm-1,0L7.812,11.285,12,4.305Z"></path>
                  </svg>
                  {balance} ETH
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>


  );
}

export default ButtonMetamask;
