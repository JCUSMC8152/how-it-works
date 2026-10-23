export const extended = {
  "51": {
    "title": "How a Lever Trades Force for Distance",
    "options": [
      "1 / 1",
      "2 / 1",
      "3 / 1",
      "4 / 1"
    ],
    "states": [
      "Effort arm 0.2 m: 120 N balances 120 N at 0.2 m; both moments are 24 N m. Effort point travels 1 times as far for the same small rotation.",
      "Effort arm 0.4 m: 60 N balances 120 N at 0.2 m; both moments are 24 N m. Effort point travels 2 times as far for the same small rotation.",
      "Effort arm 0.6 m: 40 N balances 120 N at 0.2 m; both moments are 24 N m. Effort point travels 3 times as far for the same small rotation.",
      "Effort arm 0.8 m: 30 N balances 120 N at 0.2 m; both moments are 24 N m. Effort point travels 4 times as far for the same small rotation."
    ]
  },
  "52": {
    "title": "How a Screw Jack Lifts",
    "options": [
      "2 mm",
      "4 mm",
      "8 mm",
      "10 mm"
    ],
    "states": [
      "Lead 2 mm: a 100 mm lift takes 50 turns. For 1000 N load, ideal torque = F × lead / (2π) = 0.32 N m.",
      "Lead 4 mm: a 100 mm lift takes 25 turns. For 1000 N load, ideal torque = F × lead / (2π) = 0.64 N m.",
      "Lead 8 mm: a 100 mm lift takes 12.5 turns. For 1000 N load, ideal torque = F × lead / (2π) = 1.27 N m.",
      "Lead 10 mm: a 100 mm lift takes 10 turns. For 1000 N load, ideal torque = F × lead / (2π) = 1.59 N m."
    ]
  },
  "53": {
    "title": "How a Ratchet Holds Its Place",
    "options": [
      "Forward drive",
      "Reverse attempt",
      "Pawl released",
      "Pawl re-engaged"
    ],
    "states": [
      "Forward rotation lifts the pawl over a sloping tooth face.",
      "Reverse rotation presses a steep tooth face against the engaged pawl: blocked.",
      "Pawl lifted clear: both directions are available in this schematic.",
      "Pawl seated in the next gap: reverse rotation is blocked again."
    ]
  },
  "54": {
    "title": "How Ball Bearings Support a Shaft",
    "options": [
      "Stationary",
      "Inner race turns",
      "Radial load",
      "Poor lubrication"
    ],
    "states": [
      "Inner race, outer race and balls are stationary.",
      "Inner race turns; balls spin and circulate between the races.",
      "A downward shaft load passes through lower ball contacts into the outer race and housing.",
      "Inadequate lubrication can increase friction and wear; no lifetime is predicted."
    ]
  },
  "55": {
    "title": "How an Open Differential Turns Corners",
    "options": [
      "100 / 100 rpm",
      "80 / 120 rpm",
      "60 / 140 rpm",
      "0 / 200 rpm"
    ],
    "states": [
      "100 + 100 = 200 rpm: carrier speed is 100 rpm; no wheel-speed difference.",
      "80 + 120 = 200 rpm: carrier remains 100 rpm while outer wheel runs faster.",
      "60 + 140 = 200 rpm: a larger speed difference still averages 100 rpm.",
      "0 + 200 = 200 rpm: one stopped wheel and one fast wheel can satisfy the gearing; usable traction is not guaranteed."
    ]
  },
  "56": {
    "title": "How a Clutch Connects Rotation",
    "options": [
      "Separated",
      "Slipping",
      "Fully coupled",
      "Release again"
    ],
    "states": [
      "Plates separated: input turns at an illustrative 1000 rpm; output receives no clutch torque.",
      "Plates contact: input 1000 rpm, output 600 rpm in this snapshot; slip generates heat.",
      "Plates coupled: input and output both turn at 1000 rpm under the assumed load.",
      "Clamping removed: input and output can rotate independently; output does not instantly stop."
    ]
  },
  "57": {
    "title": "How a Centrifugal Pump Moves Water",
    "options": [
      "Stopped",
      "Primed and turning",
      "Outlet resistance rises",
      "Air at inlet"
    ],
    "states": [
      "Stopped impeller: no driven pressure rise; other system pressures may still move water.",
      "Primed impeller turns: liquid enters the eye and exits toward the casing outlet.",
      "Greater outlet resistance shifts the operating point toward less flow on a typical fixed-speed pump curve.",
      "Air at the inlet can disrupt pumping; this simplified pump does not self-prime."
    ]
  },
  "58": {
    "title": "How a Check Valve Prevents Backflow",
    "options": [
      "100 / 100 kPa",
      "120 / 100 kPa",
      "100 / 120 kPa",
      "130 / 100 kPa"
    ],
    "states": [
      "Equal pressures: spring holds the valve closed.",
      "20 kPa forward difference exceeds this invented 10 kPa cracking threshold: open.",
      "20 kPa reverse difference pushes the valve toward the seat: closed.",
      "30 kPa forward difference: open; actual flow still depends on valve and system resistance."
    ]
  },
  "59": {
    "title": "How a Zipper Joins Two Edges",
    "options": [
      "Separate tapes",
      "Close slider",
      "Joined teeth",
      "Open slider"
    ],
    "states": [
      "Rows are separated ahead of the slider.",
      "Slider channels bring neighboring teeth into engagement.",
      "Engaged tooth shapes hold the two tapes together behind the slider.",
      "Divider guides teeth apart as the slider travels in the opening direction."
    ]
  },
  "60": {
    "title": "How a Sewing Machine Makes a Lockstitch",
    "options": [
      "Needle descends",
      "Loop forms",
      "Hook carries loop",
      "Take-up tightens"
    ],
    "states": [
      "Needle brings top thread through the fabric beside the bobbin mechanism.",
      "Needle starts rising; top thread forms a loop for the hook to catch.",
      "Hook takes the top-thread loop around the bobbin-thread supply.",
      "Take-up draws the interlock into the fabric; feed advances for the next stitch."
    ]
  },
  "61": {
    "title": "How a Transformer Changes AC Voltage",
    "options": [
      "1 / 2",
      "1 / 1",
      "2 / 1",
      "4 / 1"
    ],
    "states": [
      "Ideal 120 V AC input, turns ratio 0.5: output 60 V AC. At 120 W output, secondary current is 2 A; primary current is 1 A.",
      "Ideal 120 V AC input, turns ratio 1: output 120 V AC. At 120 W output, secondary current is 1 A; primary current is 1 A.",
      "Ideal 120 V AC input, turns ratio 2: output 240 V AC. At 120 W output, secondary current is 0.5 A; primary current is 1 A.",
      "Ideal 120 V AC input, turns ratio 4: output 480 V AC. At 120 W output, secondary current is 0.25 A; primary current is 1 A."
    ]
  },
  "62": {
    "title": "How a Bridge Rectifier Makes One-Way Current",
    "options": [
      "Positive half-cycle",
      "Negative half-cycle",
      "Zero crossing",
      "Smoothing added"
    ],
    "states": [
      "Positive half-cycle: diode pair A conducts; load current flows downward.",
      "Negative half-cycle: diode pair B conducts; load current still flows downward.",
      "At an ideal zero crossing there is no source-driven load current.",
      "A charged smoothing capacitor supplies the load between peaks; output ripple is reduced, not eliminated."
    ]
  },
  "63": {
    "title": "How a Capacitor Stores Energy",
    "options": [
      "0 V",
      "2 V",
      "4 V",
      "6 V"
    ],
    "states": [
      "At 0 V with C = 100 µF: Q = CV = 0 µC; E = ½CV² = 0.0 mJ. Equal and opposite plate charges are shown.",
      "At 2 V with C = 100 µF: Q = CV = 200 µC; E = ½CV² = 0.2 mJ. Equal and opposite plate charges are shown.",
      "At 4 V with C = 100 µF: Q = CV = 400 µC; E = ½CV² = 0.8 mJ. Equal and opposite plate charges are shown.",
      "At 6 V with C = 100 µF: Q = CV = 600 µC; E = ½CV² = 1.8 mJ. Equal and opposite plate charges are shown."
    ]
  },
  "64": {
    "title": "How Induction Cooking Heats a Pan",
    "options": [
      "Coil off",
      "Compatible pan",
      "Unsuitable pan",
      "Pan removed"
    ],
    "states": [
      "Coil off: no driven induction heating; cookware may still retain heat.",
      "Compatible pan above an energized coil: magnetic coupling creates heat in the pan.",
      "This unsuitable pan couples poorly; this teaching model shows no useful induction heating.",
      "Pan removed: a pan-detection controller stops the illustrated drive; real designs vary."
    ]
  },
  "65": {
    "title": "How a Microwave Oven Transfers Energy",
    "options": [
      "Field off",
      "Moist food",
      "Uneven heating",
      "Standing time"
    ],
    "states": [
      "Source off: no microwave energy added; stored heat can still move.",
      "Moist food absorbs microwave energy through dielectric loss; depth depends on composition.",
      "A nonuniform field and food geometry create unequal heating in this schematic.",
      "Source off during standing: conduction redistributes existing heat; uniformity is not guaranteed."
    ]
  },
  "66": {
    "title": "How a Heat Pump Warms a Home",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "states": [
      "For 1 kW electrical input and invented heating COP 1: indoor heat = 1 kW; outside heat absorbed = 0 kW. Energy balance: 0 + 1 = 1 kW.",
      "For 1 kW electrical input and invented heating COP 2: indoor heat = 2 kW; outside heat absorbed = 1 kW. Energy balance: 1 + 1 = 2 kW.",
      "For 1 kW electrical input and invented heating COP 3: indoor heat = 3 kW; outside heat absorbed = 2 kW. Energy balance: 2 + 1 = 3 kW.",
      "For 1 kW electrical input and invented heating COP 4: indoor heat = 4 kW; outside heat absorbed = 3 kW. Energy balance: 3 + 1 = 4 kW."
    ]
  },
  "67": {
    "title": "How Insulation Slows Heat Flow",
    "options": [
      "1 K/W",
      "2 K/W",
      "4 K/W",
      "8 K/W"
    ],
    "states": [
      "With a fixed 20 K temperature difference and R = 1 K/W: heat flow = 20 / 1 = 20 W. This is a whole-path resistance, not a labeled building R-value.",
      "With a fixed 20 K temperature difference and R = 2 K/W: heat flow = 20 / 2 = 10 W. This is a whole-path resistance, not a labeled building R-value.",
      "With a fixed 20 K temperature difference and R = 4 K/W: heat flow = 20 / 4 = 5 W. This is a whole-path resistance, not a labeled building R-value.",
      "With a fixed 20 K temperature difference and R = 8 K/W: heat flow = 20 / 8 = 2.5 W. This is a whole-path resistance, not a labeled building R-value."
    ]
  },
  "68": {
    "title": "How a Vacuum Flask Keeps Drinks Warm",
    "options": [
      "Single wall",
      "Air gap",
      "Vacuum gap",
      "Vacuum and reflective wall"
    ],
    "states": [
      "Single wall: conduction through the wall and exchange with surrounding air remain.",
      "Air gap: gas can conduct heat and may circulate within the gap.",
      "Vacuum gap: very little gas conduction or convection; radiation and solid bridges remain.",
      "Reflective vacuum flask: radiation is reduced too, but neck and stopper paths still leak heat."
    ]
  },
  "69": {
    "title": "How a Loudspeaker Makes Sound",
    "options": [
      "Zero",
      "Positive",
      "Zero crossing",
      "Negative"
    ],
    "states": [
      "Zero current in this ideal static snapshot: cone at its rest position.",
      "Positive current produces outward force; the schematic cone is displaced outward.",
      "At zero current the force contribution is zero; an actual moving cone can still have velocity.",
      "Negative current reverses force; the schematic cone is displaced inward."
    ]
  },
  "70": {
    "title": "How a Dynamic Microphone Detects Sound",
    "options": [
      "Stationary",
      "Moving inward",
      "Moving outward",
      "Moving faster"
    ],
    "states": [
      "Stationary coil: no motion-induced voltage in this ideal model.",
      "Inward motion: positive normalized voltage +1 under the chosen sign convention.",
      "Outward motion: negative normalized voltage −1 under the same convention.",
      "Faster inward motion: normalized voltage +2; not a real sensitivity specification."
    ]
  },
  "71": {
    "title": "How Binary Numbers Represent a Count",
    "options": [
      "0000",
      "0011",
      "1010",
      "1111"
    ],
    "states": [
      "0000 = 0: no place values included.",
      "0011 = 2 + 1 = 3.",
      "1010 = 8 + 2 = 10.",
      "1111 = 8 + 4 + 2 + 1 = 15; the next count needs another bit."
    ]
  },
  "72": {
    "title": "How Logic Gates Combine Decisions",
    "options": [
      "0 and 0",
      "0 and 1",
      "1 and 0",
      "1 and 1"
    ],
    "states": [
      "A=0, B=0: AND=0; OR=0; XOR=0.",
      "A=0, B=1: AND=0; OR=1; XOR=1.",
      "A=1, B=0: AND=0; OR=1; XOR=1.",
      "A=1, B=1: AND=1; OR=1; XOR=0."
    ]
  },
  "73": {
    "title": "How a Transistor Acts as a Switch",
    "options": [
      "Low",
      "High",
      "Low again",
      "High again"
    ],
    "states": [
      "Gate low: ideal n-channel switch off; load current is zero.",
      "Gate high: ideal switch on; a separate supply drives current through the load.",
      "Gate returned low: channel off again; no steady ideal gate current.",
      "Gate high again: channel on; charging the real gate during transitions still takes energy."
    ]
  },
  "74": {
    "title": "How a Cache Reuses an Earlier Result",
    "options": [
      "First request",
      "Repeat request",
      "Source changes",
      "Invalidate and reload"
    ],
    "states": [
      "Cache miss: fetch version 1 from source and store a copy.",
      "Cache hit: reuse valid version 1; no source-body retrieval in this example.",
      "Source is now version 2; the still-fresh cached version 1 may be reused under the invented policy.",
      "Invalidate version 1, retrieve version 2, then store the new copy."
    ]
  },
  "75": {
    "title": "How a Database Index Finds a Record",
    "options": [
      "Scan all rows",
      "Use ordered index",
      "Read matching row",
      "Insert a row"
    ],
    "states": [
      "Without an index, this five-row example checks keys until it finds 42 at the fifth row.",
      "Ordered index compares 42 to 30, follows the right branch, and locates key 42.",
      "The located entry points to row E; the table fetch returns the requested record.",
      "Inserting key 35 adds a table row and requires an index entry too."
    ]
  },
  "76": {
    "title": "How Binary Search Narrows a List",
    "options": [
      "Find 3",
      "Find 11",
      "Find 15",
      "Find 8 (absent)"
    ],
    "states": [
      "Target 3: compare 7, then 3. Found at zero-based index 1 in 2 comparisons.",
      "Target 11: compare 7, then 11. Found at zero-based index 5 in 2 comparisons.",
      "Target 15: compare 7, 11, 13, 15. Found at zero-based index 7 in 4 comparisons.",
      "Target 8: compare 7, 11, 9. Interval becomes empty: not found after 3 comparisons."
    ]
  },
  "77": {
    "title": "How Public-Key Encryption Separates Keys",
    "options": [
      "Publish public key",
      "Encrypt for recipient",
      "Intercept ciphertext",
      "Decrypt with private key"
    ],
    "states": [
      "Recipient shares a public key and keeps the private key secret.",
      "Sender encrypts HELLO for the recipient; the display substitutes an illustrative sealed message.",
      "Observer sees the sealed ciphertext illustration and public key; plaintext is not displayed.",
      "Recipient uses the matching private key: HELLO is shown again."
    ]
  },
  "78": {
    "title": "How Password Hashing Checks a Login",
    "options": [
      "Create record",
      "Correct attempt",
      "Incorrect attempt",
      "Same password, new salt"
    ],
    "states": [
      "Toy record: password ORBIT with salt S1 maps to verifier A. No actual hashing is performed.",
      "Attempt ORBIT with S1 maps to A: comparison matches.",
      "Attempt OTHER with S1 maps to B: comparison does not match.",
      "ORBIT with different salt S2 maps to C: the same password has a different stored verifier."
    ]
  },
  "79": {
    "title": "How a Parity Bit Detects Some Errors",
    "options": [
      "1011 + 1",
      "1001 + 1",
      "0001 + 1",
      "1011 + 0"
    ],
    "states": [
      "1011 plus parity 1: four ones, even. Check passes.",
      "One data bit flipped to 1001: three total ones, odd. Error detected.",
      "Two data bits flipped to 0001: two total ones, even. Error is not detected.",
      "Parity bit flipped to 0: three total ones, odd. Error detected, but its location is unknown."
    ]
  },
  "80": {
    "title": "How RGB Pixels Make a Color Image",
    "options": [
      "255, 0, 0",
      "0, 255, 0",
      "0, 0, 255",
      "255, 255, 255"
    ],
    "states": [
      "Red channel 255, green 0, blue 0: red output in the simplified RGB model.",
      "Red 0, green 255, blue 0: green output.",
      "Red 0, green 0, blue 255: blue output.",
      "All channels 255: reference white in this simplified display space."
    ]
  },
  "81": {
    "title": "How Insulin Helps Regulate Blood Glucose",
    "options": [
      "Before meal",
      "Glucose rises",
      "Insulin response",
      "Return toward balance"
    ],
    "states": [
      "Between meals: the body balances glucose use and production; insulin is not simply absent.",
      "After a meal: rising glucose stimulates beta-cell insulin release in this healthy schematic.",
      "Insulin signaling promotes glucose uptake in muscle and fat and changes liver metabolism.",
      "As glucose approaches balance, beta-cell stimulation decreases; other hormones also contribute."
    ]
  },
  "82": {
    "title": "How Blood Forms a Clot",
    "options": [
      "Intact vessel",
      "Platelet plug",
      "Fibrin network",
      "Repair and removal"
    ],
    "states": [
      "Intact vessel: blood remains fluid; no injury plug is shown.",
      "Injury: activated platelets gather at the damaged wall.",
      "Fibrin fibers reinforce the platelet plug and entrap blood cells.",
      "After repair, controlled breakdown removes the clot; timing is not simulated."
    ]
  },
  "83": {
    "title": "How a Broken Bone Repairs",
    "options": [
      "Hematoma",
      "Soft callus",
      "Hard callus",
      "Remodeling"
    ],
    "states": [
      "Hematoma and early inflammatory response surround the fracture.",
      "A soft callus bridges the break; it is not mature bone.",
      "A hard bony callus replaces much of the temporary bridge.",
      "Remodeling reshapes and reorganizes bone; original geometry is not guaranteed."
    ]
  },
  "84": {
    "title": "How the Inner Ear Senses Motion",
    "options": [
      "Head starts rotating",
      "Steady rotation",
      "Head stops",
      "Head tilts"
    ],
    "states": [
      "Starting rotation: fluid inertia deflects the canal sensory structure.",
      "Steady rotation: the canal signal can diminish as fluid catches up.",
      "Stopping: relative fluid motion can briefly deflect the sensor in the opposite direction.",
      "Tilting: gravity loads otolith structures; the canal and otolith systems provide different information."
    ]
  },
  "85": {
    "title": "How Smell Begins in the Nose",
    "options": [
      "No odor input",
      "Odor reaches receptors",
      "Receptor pattern",
      "Sustained exposure"
    ],
    "states": [
      "No selected odor stimulus: baseline activity is not drawn.",
      "Odor molecules reach mucus and interact with compatible receptors.",
      "A schematic combination of three receptor groups sends a pattern of signals to the bulb.",
      "During sustained exposure, perceived intensity may diminish through adaptation; this does not prove the air is safe."
    ]
  },
  "86": {
    "title": "How Taste Receptors Start a Signal",
    "options": [
      "Sweet",
      "Salty",
      "Sour",
      "Bitter"
    ],
    "states": [
      "Sweet example: a receptor-mediated pathway activates selected taste cells.",
      "Salty example: ion-related pathways activate selected taste cells; real mechanisms vary with context.",
      "Sour example: acidity activates proton-sensitive taste pathways.",
      "Bitter example: a family of receptors triggers signaling; bitterness alone cannot identify a poison."
    ]
  },
  "87": {
    "title": "How Skin Forms a Living Barrier",
    "options": [
      "Intact surface",
      "Water loss",
      "Small surface break",
      "Renewing surface"
    ],
    "states": [
      "Intact outer layer: cells and lipids form a selective barrier.",
      "Water can still diffuse outward; the intact barrier limits rather than eliminates loss.",
      "Surface break: a gap interrupts protection and increases a possible entry path.",
      "Renewal: newer cells move outward as old surface cells are shed."
    ]
  },
  "88": {
    "title": "How Bile Helps Digest Fat",
    "options": [
      "Large fat droplet",
      "Bile disperses fat",
      "Lipase acts",
      "Products reach intestine lining"
    ],
    "states": [
      "Large droplet: relatively little surface area is available to digestive enzymes.",
      "Bile salts help disperse fat into smaller droplets, increasing accessible surface.",
      "Lipase chemically breaks triglycerides into smaller digestion products.",
      "Micelles help carry products to the intestinal surface; bile salts mostly remain in the lumen for later recycling."
    ]
  },
  "89": {
    "title": "How Hemoglobin Carries Oxygen",
    "options": [
      "Before lungs",
      "Lung capillary",
      "Systemic artery",
      "Active tissue"
    ],
    "states": [
      "Returning blood carries less oxygen than newly oxygenated blood, but usually is not oxygen-free.",
      "In lungs, higher oxygen availability favors loading onto hemoglobin.",
      "Arterial blood transports oxygen largely bound to hemoglobin; some is dissolved.",
      "At active tissue, local oxygen demand and conditions favor unloading; not every binding site must empty."
    ]
  },
  "90": {
    "title": "How Light Helps Set the Body Clock",
    "options": [
      "Morning light",
      "Daytime",
      "Evening dimness",
      "Light late at night"
    ],
    "states": [
      "Morning light can provide a timing cue; the direction and size of a shift depend on internal clock time.",
      "Daytime: central timing coordinates many body rhythms, not only sleep.",
      "Evening dimness permits the normal nighttime melatonin signal in this schematic.",
      "Late-night light can suppress melatonin and shift timing depending on exposure and biological phase."
    ]
  },
  "91": {
    "title": "How Earth’s Tilt Creates Seasons",
    "options": [
      "June solstice",
      "September equinox",
      "December solstice",
      "March equinox"
    ],
    "states": [
      "June solstice: Northern Hemisphere tilted toward the Sun; Southern Hemisphere toward winter.",
      "September equinox: the terminator passes near both poles; roughly equal day and night.",
      "December solstice: Southern Hemisphere tilted toward the Sun; Northern Hemisphere toward winter.",
      "March equinox: roughly equal illumination of both hemispheres."
    ]
  },
  "92": {
    "title": "How the Moon’s Phases Change",
    "options": [
      "New Moon",
      "First quarter",
      "Full Moon",
      "Third quarter"
    ],
    "states": [
      "New Moon: the sunlit side mostly faces away from Earth; the Moon lies in the Sun’s direction.",
      "First quarter: about half the visible disk is illuminated; one quarter of the phase cycle has passed.",
      "Full Moon: the sunlit side mostly faces Earth, with the Moon opposite the Sun in the sky.",
      "Third quarter: half the disk is illuminated again, on the opposite side in this north-up view."
    ]
  },
  "93": {
    "title": "How a Solar Eclipse Casts a Shadow",
    "options": [
      "New Moon misses",
      "Partial eclipse",
      "Total eclipse",
      "Annular eclipse"
    ],
    "states": [
      "New Moon away from the orbital node: shadow misses Earth; no eclipse for the illustrated observer.",
      "Observer in penumbra: only part of the solar disk is obscured.",
      "Observer in umbra: the Moon fully covers the solar disk in this schematic.",
      "Observer in antumbra: the apparent Moon is smaller than the Sun, leaving a ring."
    ]
  },
  "94": {
    "title": "How the Moon and Sun Drive Tides",
    "options": [
      "Moon-only schematic",
      "Sun aligned",
      "Sun at right angle",
      "Coastal response"
    ],
    "states": [
      "Moon-only equilibrium schematic: two opposing high-water regions align with the Earth-Moon axis.",
      "Sun and Moon aligned: spring-tide forcing gives a larger modeled range.",
      "Sun and Moon at right angles: neap-tide forcing gives a smaller modeled range.",
      "A real coast can have delayed and unequal tides; this equilibrium picture is not a local forecast."
    ]
  },
  "95": {
    "title": "How River Meanders Move",
    "options": [
      "Curved channel",
      "Outer-bank erosion",
      "Inner-bank deposition",
      "Cutoff"
    ],
    "states": [
      "Curved channel: flow and sediment interact around a bend.",
      "Outer-bank erosion shifts the channel outward in this idealized bend.",
      "Inner-bank deposition builds a point bar as sediment is redistributed.",
      "A new shorter path cuts the neck, leaving a separated old bend that may form an oxbow lake."
    ]
  },
  "96": {
    "title": "How Groundwater Moves Through an Aquifer",
    "options": [
      "Infiltration",
      "Water table",
      "Groundwater flow",
      "Pumping well"
    ],
    "states": [
      "Water infiltrates soil; some is retained or returned to air before reaching the aquifer.",
      "Below the water table, connected pores are saturated with water.",
      "Groundwater flows through connected spaces toward lower hydraulic head.",
      "Pumping lowers nearby head into a cone of depression; impacts depend on pumping and aquifer properties."
    ]
  },
  "97": {
    "title": "How Tectonic Plates Meet",
    "options": [
      "Divergent",
      "Oceanic subduction",
      "Continental collision",
      "Transform"
    ],
    "states": [
      "Divergent: plates separate and new oceanic crust forms at a spreading ridge.",
      "Oceanic subduction: one plate descends beneath another; melting and volcanism can occur above it.",
      "Continental collision: buoyant continental crust shortens and thickens, building mountains.",
      "Transform: plates slide laterally; crust is neither systematically created nor consumed at the boundary."
    ]
  },
  "98": {
    "title": "How Rocks Change Through the Rock Cycle",
    "options": [
      "Magma cools",
      "Sediments become rock",
      "Heat and pressure",
      "Rock melts"
    ],
    "states": [
      "Magma cools and crystallizes into igneous rock.",
      "Sediment is deposited, compacted and cemented into sedimentary rock.",
      "An existing rock changes minerals and texture without full melting: metamorphic rock.",
      "Rock melts into magma; later cooling can start another path."
    ]
  },
  "99": {
    "title": "How Composting Recycles Organic Matter",
    "options": [
      "Balanced and aerated",
      "Too dry",
      "Waterlogged",
      "Mature compost"
    ],
    "states": [
      "Suitable moisture and air support aerobic decomposers; some energy is released as heat.",
      "Too dry: microbial activity is limited by inadequate moisture.",
      "Waterlogged: fewer air-filled pores limit oxygen; anaerobic processes and odors may increase.",
      "Mature material: activity and heating decline as readily available food is depleted."
    ]
  },
  "100": {
    "title": "How Pollination Begins Seed Formation",
    "options": [
      "Pollen on anther",
      "Transfer to stigma",
      "Pollen tube grows",
      "Fertilization"
    ],
    "states": [
      "Pollen remains on anther: transfer has not yet occurred in this story.",
      "Compatible pollen lands on the stigma: pollination has occurred, but fertilization has not.",
      "Pollen tube grows through the style toward an ovule, carrying sperm cells.",
      "Double fertilization begins embryo and endosperm formation; the ovule can develop into a seed."
    ]
  }
};
