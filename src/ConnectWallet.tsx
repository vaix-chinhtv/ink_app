import { useWallet, useAllWallets, useContract, useTx, useTransfer } from 'useink'
import metadata from './contract.json'
function ConnectWallet() {
    const { account , connect, disconnect } = useWallet()
    const wallets = useAllWallets()
    const CONTRACT_ADDRESS = "5CpWuLkLBF8Zq2Ve7DTRTTrGgAbojnPALGD7yDzx3iWiXz41";
  const contract = useContract(CONTRACT_ADDRESS, metadata)
  const deposit = useTx(contract, 'deposit')
  const reward = useTx(contract, 'reward')

  const transfer = useTransfer()
  const receiver = '5EyR7vEk7DtvEWeefGcXXMV6hKwB8Ex5uvjHufm466mbjJkR'
  const amount = 1_000_000;

  const handleDeposit = async () => {
    const args:[] = []
      const res = await deposit.signAndSend(args, {value: amount})
      console.log({res});
  }

  const handleReward = async () => {
    const args = [["5EyR7vEk7DtvEWeefGcXXMV6hKwB8Ex5uvjHufm466mbjJkR"]]
      const res = await reward.signAndSend(args)
      console.log({res});
  }

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

          <button
        type="button"
        disabled={transfer?.isSubmitting}
        onClick={() => transfer?.signAndSend(receiver, amount)}
      >
        Send $$$
      </button>
          <button onClick={() => handleDeposit()} >Deposit</button>
          <button onClick={() => handleReward()} >Reward</button>
        </>
      )
    }
export default ConnectWallet