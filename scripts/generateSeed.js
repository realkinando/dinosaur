async function main(){
        const wallet = hre.ethers.Wallet.createRandom();
        console.log((wallet.mnemonic).phrase);
    }

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });