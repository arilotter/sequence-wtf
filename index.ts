import { initWallet } from "0xsequence";

const wallet = await initWallet();

for (const item of document.getElementsByClassName('connect')) {
    console.log('el', item)
    item.addEventListener('click', () =>
        wallet.connect()
    )
}
for (const item of document.getElementsByClassName('address')) {
    item.addEventListener('click', () =>
    wallet.getAddress().then(alert)
    )
}
