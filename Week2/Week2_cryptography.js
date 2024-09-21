let bytes = new Uint8Array([0, 255, 127, 128]);
console.log(bytes)

let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[0] = 300;
console.log(uint8Arr)


//Bytes to Ascii 
function bytesToAscii(byteArray) {
    return byteArray.map(byte => String.fromCharCode(byte)).join('');
  }
  
  // Example usage:
const byteArray = [72, 101, 108, 108, 111]; // Corresponds to "Hello"
const asciiString = bytesToAscii(byteArray);
console.log(asciiString); // Output: "Hello"



//Ascii to Bytes
function asciiToBytes(asciiString) {
  const byteArray = [];
  for (let i = 0; i < asciiString.length; i++) {
    byteArray.push(asciiString.charCodeAt(i));
  }
  return byteArray;
}

// Example usage:
const ascii = "Hello";
const bytesArray = asciiToBytes(ascii);
console.log(bytesArray); // Output: [72, 101, 108, 108, 111]



