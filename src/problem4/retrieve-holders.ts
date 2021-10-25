import axios from "axios";

type HolderToken = {
  TokenHolderAddress: string,
  TokenHolderQuantity: number,
};

const contract: string = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c";

const apiKey: string = ""; // input your api key

const addresses: string[] = [
  "0x123d475e13aa54a43a7421d94caa4459da021c77",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xfe808b079187cc460f47374580f5fb47c82b87a5",
];

const getTokenHolderList = async () => {
  try {
    const { data } = await axios.get("https://api.bscscan.com/api", {
      params: {
        module: "token",
        action: "tokenholderlist",
        contractaddress: contract,
        apikey: apiKey,
      },
    });
    if (data.status === "1") {
      data.result.forEach((token: HolderToken) => {
        const findedAddress: string | undefined = addresses.find(
          (address) => token.TokenHolderAddress === address
        );
        if (findedAddress) {
          console.log(
            `${token.TokenHolderAddress} ${token.TokenHolderQuantity}`
          );
        }
      });
    }
  } catch (e) {
    console.log(e);
  }
};

getTokenHolderList();
