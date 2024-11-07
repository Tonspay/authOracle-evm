const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Testing account:", deployer.address);
  
    let tgm = await ethers.getContractAt("TGMiniapp","0x7f15a1acc164636fdbb8f112fae40825d1ebf1da");

    const verfiyData = Buffer.from("617574685f646174653d313733303937383435330a636861745f696e7374616e63653d383831343531373737343332333436303933310a636861745f747970653d707269766174650a757365723d7b226964223a313530373734333731392c2266697273745f6e616d65223a2277696b6967222c226c6173745f6e616d65223a22222c22757365726e616d65223a226361727a79676f64222c226c616e67756167655f636f6465223a22656e222c22616c6c6f77735f77726974655f746f5f706d223a747275657d","hex")
    const hash = "0xc613aff5820c2af8fe6223a69deb0bd676c8e3e63b41c74708446f13eeed4649"
    const apiToken = Buffer.from("373334353433363836333a4141456d583678484d43624436496751564957555f6c7733335348526c797243367641","hex")
    console.log("Generate hash : ",
        await tgm.generator(
          apiToken,
          verfiyData,
        ))
  
        
        console.log(
          "Sign message"
          ,
          await tgm.verfi(
            verfiyData,
            hash
          )
        )
  } 
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });