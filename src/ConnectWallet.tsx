import React from 'react'
import { useWallet, useAllWallets } from 'useink'

function ConnectWallet() {
    const { account , connect, disconnect } = useWallet()
    const wallets = useAllWallets()


    if ( !account) {
        return (
          <div>
            {wallets.map((w) => (
              <li key={w.title}>
                {w.installed ? (
                  <button onClick={() => connect(w.extensionName)}>
                    <img src={w.logo.src} alt={w.logo.alt} />
                    Connect to {w.title}
                  </button>
                ) : (
                  <a href={w.installUrl}>
                    <img src={w.logo.src} alt={w.logo.alt} />
                    Install {w.title}
                  </a>
                )}
              </li>
            ))}
          </div>
        )
      }
      return (
        <>
          <p>You are connected as {account?.name || account.address}</p>

          <button onClick={disconnect}>
            Disconnect Wallet
          </button>
        </>
      )
    }
export default ConnectWallet