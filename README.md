# Objects
Objects generated and created by its use in the French lab. Check 3D Models for further details

Object created by:

| File  | Creator |
| ------------- | ------------- |
| iceblock12.js  | Felipe A. Millacura  |

Objects can be created either within your Python script as specified at https://docs.opentrons.com/labware.html#create 
i.e 
```python
plate_name = 'iceblock12'
if plate_name not in labware.list():
    custom_plate = labware.create(
        plate_name,                    # name of you labware
        grid=(3, 4),                    # specify amount of (columns, rows)
        spacing=(15, 15),               # distances (mm) between each (column, row)
        diameter=(11),                     # diameter (mm) of each well on the plate
        depth= 36.9,                       # depth (mm) of each well on the plate
        offset=(37, 27, 20),                # offset values for the A1 well 
        volume=(1500)                       #total volume in uL
```
Or via JavaScript by compiling the Labware designer as specified at https://github.com/chris-french-lab/opentrons/tree/edge/labware-designer. The final labware should looks like iceblock12.js

```javascript
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
```
