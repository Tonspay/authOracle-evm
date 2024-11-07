const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

const theethers = require("ethers")

  describe("Test auth oracle", function () {
    it("Should works ", async function () {
      const [owner, addr1 ,addr2,addr3,addr4,addr5,addr6] = await ethers.getSigners();
      console.log("begian")
      const TGMiniapp = (await ethers.getContractFactory("TGMiniapp"));
      const tgm = await TGMiniapp.connect(addr1).deploy();

      const verfiyData = Buffer.from("617574685f646174653d313733303937383435330a636861745f696e7374616e63653d383831343531373737343332333436303933310a636861745f747970653d707269766174650a757365723d7b226964223a313530373734333731392c2266697273745f6e616d65223a2277696b6967222c226c6173745f6e616d65223a22222c22757365726e616d65223a226361727a79676f64222c226c616e67756167655f636f6465223a22656e222c22616c6c6f77735f77726974655f746f5f706d223a747275657d","hex")
      const hash = "0xc613aff5820c2af8fe6223a69deb0bd676c8e3e63b41c74708446f13eeed4649"

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
    });

});