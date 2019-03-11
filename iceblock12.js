iceblock12 = {
metadata: {
  displayName: "iceblock12",
  displayCategory: "tuberack",
  displayVolumeUnits: "uL",
  displayLengthUnits: "mm",
  tags: "Use 1.50 mL eppendorf tubes only",
},
parameters: {
  format: "irregular",
  isTiprack: false,
  //tipLength: optional number (required if isTiprack is true),
},
offset: {
  x: 37,
  y: 27,
  z: 20,
},
dimensions: {
  overallLength: 127.76,
  overallWidth: 85.48,
  overallHeight: 54,
},
grid: {
  row: 3,
  column: 4,
},
spacing: {
  row: 15,
  column: 15,
},
well: {
  depth: 36.9,
  shape: "circular",
  diameter: 11.5,
  //length: optional number,
 // width: optional number,
  totalLiquidVolume: 1500,
},
brand: {
  brand: "Block",
  brandId: "Block",
}, }


//JSON.stringify(sharedData.createRegularLabware(iceblock12), "null", 4)
