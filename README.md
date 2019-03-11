# Objects
Objects generated and created by its use in the French lab. Check 3D Models for further details

Object created by:

| File  | Creator |
| ------------- | ------------- |
| iceblock12.js  | Felipe A. Millacura  |

Objects can be created either using Python as specified at https://docs.opentrons.com/labware.html#create 
i.e 

plate_name = 'iceblock12'
if plate_name not in labware.list():
    custom_plate = labware.create(
        plate_name,                    # name of you labware
        grid=(3, 4),                    # specify amount of (columns, rows)
        spacing=(15, 15),               # distances (mm) between each (column, row)
        diameter=(11),                     # diameter (mm) of each well on the plate
        depth= 36.9,                       # depth (mm) of each well on the plate
        offset=(37, 27, 20)                # offset values for the A1 well 
        volume=(1500)                       #total volume in uL
        
Or via JavaScript by compiling the Labware designer as specified at https://github.com/chris-french-lab/opentrons/tree/edge/labware-designer and the final labware should look like iceblock12.js
