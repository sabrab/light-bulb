navigator.bluetooth.requestDevice({
  filters: [{ services: [0xfff0] }]
})
  .then(function(device) {
    // Step 2: Connect to it
    return device.gatt.connect();
  })
  .then(function(server) {
    // Step 3: Get the Service
    return server.getPrimaryService(0xfff0);
  })
  .then(function(service) {
    // Step 4: get the Characteristic
    return service.getCharacteristic(0xfff1);
  })
  .then(function(characteristic) {
    // Step 5: Write to the characteristic
    var data = new Uint8Array([0x07, 0xdf, 0xd9, 0x9b, 0xfd, 0xdd, 0x54, 0x5a, 0x18, 0x3e, 0x5e, 0x7a, 0x3e, 0x3c, 0xbe, 0xaa, 0x8a, 0x21, 0x4b, 0x6b]);
    return characteristic.writeValue(data);
  })
  .catch(function(error) {
     // And of course: error handling!
     console.error('Connection failed!', error);
  });
