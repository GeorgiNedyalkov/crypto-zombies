var abi = x; /* Generated ABI by the compiler*/
var ZombieFeedingContract = web3.eth.contract(abi);
var contractAddress = "Contract address on Ethereum after deployment";
var zombieFeeding = ZombieFeedingContract.at(contractAddress);

let zombieId = 1;
let kittyId = 1;

let apiUrl = "https://api.cryptokitties.co/kitties/" + kittyId;
$.get(apiUrl, function (data) {
    let imgUrl = data.img_url;
    // do something to display image.
})

// When the user clicks on a kitty:
$(".kittyImage").click(function (e) {
    // Call our contract feedOnKitty method
    ZombieFeedingContract.feedOnKitty(zombieId, kittyId);
})

// Listen for a NewZombie event from our contract so we can display it:
ZombieFactory.NewZombie(function (error, result) {
    if (error) return;
    // this function will display the zombie
    generateZombie(result.zombieId, result.name, result.dna);
})