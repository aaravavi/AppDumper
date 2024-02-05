var startAddress = ptr(0x778aa55000);
var endAddress = ptr(0x778b4b1000);
var size = endAddress.sub(startAddress);

console.log(`[+] Dumping memory region ${startAddress} : ${endAddress}`);

var buffer = Memory.readByteArray(startAddress, parseInt(size, 16));

var filePath = "/data/data/com.hyundai.india.bluelink.prd/files"+startAddress+"_dump.dex";
var fileHande = new File(filePath, "wb");

if(fileHande && fileHande != null){
    fileHande.write(buffer);
    fileHande.flush();
    fileHande.close();
    console.log(`[*] File successfully dumped at ${filePath}`);
}