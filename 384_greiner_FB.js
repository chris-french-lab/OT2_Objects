384Greiner = {
metadata: {
  displayName: "384Greiner",
  displayCategory: "tuberack",
  displayVolumeUnits: "uL",
  displayLengthUnits: "mm",
  tags: "20_uL_wells"
},
parameters: {
  format: "regular",
  isTiprack: false,
  //tipLength: optional number (required if isTiprack is true),
},
offset: {
  x: 12.13,
  y: 8.99,
  z: 20,
},
dimensions: {
  overallLength: 127.76,
  overallWidth: 85.48,
  overallHeight: 8.8,
},
grid: {
  row: 16,
  column: 24,
},
spacing: {
  row: 4.5,
  column: 4.5,
},
well: {
  depth: 5.5,
  shape: "circular",
  diameter: 4.0,
  //length: optional number,
 // width: optional number,
  totalLiquidVolume: 20,
},
brand: {
  brand: "Greiner",
  brandId: "Greiner",
}, }


//JSON.stringify(sharedData.createRegularLabware(iceblock12), "null", 4)
