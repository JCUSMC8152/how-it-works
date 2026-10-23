export const expansion = {
  "101": {
    "title": "How Rack-and-Pinion Steering Turns Wheels",
    "options": [
      "Centered",
      "Turn left",
      "Turn right",
      "Return to center"
    ],
    "states": [
      "Centered pinion leaves the rack at its reference position; both wheels point ahead.",
      "Turning the pinion shifts the rack left; the tie rods change both wheel angles in this schematic.",
      "Reversing pinion rotation shifts the rack right and steers the wheels the other way.",
      "Returning the rack to its reference position restores the illustrated straight-ahead geometry."
    ]
  },
  "102": {
    "title": "How a Cam Opens a Valve",
    "options": [
      "Base circle",
      "Rising flank",
      "Cam nose",
      "Falling flank"
    ],
    "states": [
      "Base circle under follower: the illustrated valve spring holds the valve closed.",
      "Rising flank pushes the follower upward, opening the valve against its spring.",
      "Cam nose gives the greatest illustrated valve lift; the follower remains in contact.",
      "Falling flank lets the spring return the follower and close the valve."
    ]
  },
  "103": {
    "title": "How a Flywheel Stores Rotational Energy",
    "options": [
      "0 rad/s",
      "10 rad/s",
      "20 rad/s",
      "30 rad/s"
    ],
    "states": [
      "For invented inertia I = 2 kg m² and speed 0 rad/s, E = ½Iω² = 0 J.",
      "For the same I = 2 kg m² at 10 rad/s, stored rotational energy is 100 J.",
      "At 20 rad/s, stored rotational energy is 400 J: doubling speed quadruples energy.",
      "At 30 rad/s, stored rotational energy is 900 J; slowing the rotor could transfer some of that energy."
    ]
  },
  "104": {
    "title": "How a Belt Drive Transfers Rotation",
    "options": [
      "Equal pulleys",
      "Double output diameter",
      "Half output diameter",
      "Belt slips"
    ],
    "states": [
      "With no slip, 100 rpm input and equal diameters give 100 rpm output in the same direction for an open belt.",
      "A 200 mm output pulley driven by a 100 mm input at 100 rpm turns at 50 rpm ideally.",
      "A 50 mm output pulley driven by a 100 mm input at 100 rpm turns at 200 rpm ideally.",
      "A slipping belt no longer enforces the ideal speed ratio; some input energy becomes heat."
    ]
  },
  "105": {
    "title": "How a Worm Gear Reduces Speed",
    "options": [
      "10 teeth",
      "20 teeth",
      "40 teeth",
      "80 teeth"
    ],
    "states": [
      "A single-start worm at 800 rpm driving 10 wheel teeth gives 80 rpm ideally.",
      "With 20 wheel teeth, the same 800 rpm worm gives 40 rpm output.",
      "With 40 wheel teeth, the same worm gives 20 rpm output.",
      "With 80 wheel teeth, the same worm gives 10 rpm output; actual efficiency depends on geometry and friction."
    ]
  },
  "106": {
    "title": "How a Hydraulic Cylinder Extends and Retracts",
    "options": [
      "Neutral",
      "Extend",
      "Retract",
      "Blocked return"
    ],
    "states": [
      "Neutral valve blocks both work ports in this invented closed-center circuit; the piston is stationary in the snapshot.",
      "Pump feeds the cap end while rod-end fluid returns to tank; the rod extends.",
      "Pump feeds the rod end while cap-end fluid returns to tank; the rod retracts.",
      "With the required return path blocked, sustained ideal piston movement stops; real pressure may rise."
    ]
  },
  "107": {
    "title": "How a Pneumatic Cylinder Uses Compressed Air",
    "options": [
      "Vented",
      "100 kPa difference",
      "200 kPa difference",
      "300 kPa difference"
    ],
    "states": [
      "Both chambers vented: no ideal pressure-difference force on the piston.",
      "For invented effective area 0.001 m² and 100 kPa difference, ideal force is 100 N; the other chamber exhausts.",
      "At 200 kPa difference on the same 0.001 m² area, ideal force is 200 N.",
      "At 300 kPa difference, ideal force is 300 N; compression means actual motion depends on load and airflow."
    ]
  },
  "108": {
    "title": "How a Disc Brake Turns Motion into Heat",
    "options": [
      "Released",
      "Pads contact",
      "Sliding friction",
      "Cooling"
    ],
    "states": [
      "Released pads exert negligible ideal braking torque; the rotor can turn.",
      "Caliper pushes pads against the rotor faces, creating normal forces.",
      "Sliding friction applies torque opposite rotation; mechanical energy transfers into internal energy of brake parts.",
      "After release, the hot rotor transfers heat to surrounding air and nearby parts; cooling takes time."
    ]
  },
  "109": {
    "title": "How a Spring Stores Elastic Energy",
    "options": [
      "0 cm",
      "5 cm",
      "10 cm",
      "15 cm"
    ],
    "states": [
      "Invented spring constant k = 100 N/m, extension 0 m: force 0 N and stored energy 0 J.",
      "At 0.05 m extension, F = kx = 5 N and E = ½kx² = 0.125 J.",
      "At 0.10 m extension, force is 10 N and stored energy is 0.5 J.",
      "At 0.15 m extension, force is 15 N and stored energy is 1.125 J; real springs have finite elastic ranges."
    ]
  },
  "110": {
    "title": "How a Siphon Transfers Liquid",
    "options": [
      "Unprimed",
      "Primed outlet lower",
      "Levels equal",
      "Air enters"
    ],
    "states": [
      "An air-filled high section breaks the liquid column; this schematic siphon does not start itself.",
      "A primed continuous column and a lower receiving surface allow gravity-driven flow from the upper vessel.",
      "When both free surfaces reach equal elevation, this ideal system has no sustained net head to drive flow.",
      "Air entering at the inlet can break the column and stop this siphon; actual behavior depends on geometry."
    ]
  },
  "111": {
    "title": "How a Fuel Cell Produces Electricity",
    "options": [
      "Reactants absent",
      "Anode reaction",
      "External circuit",
      "Cathode reaction"
    ],
    "states": [
      "With no supplied reactants, this fuel-cell schematic cannot sustain electrical output.",
      "At the anode, hydrogen separates into protons and electrons with a catalyst.",
      "Protons pass through the membrane; electrons take the external load path, transferring electrical energy.",
      "At the cathode, oxygen combines with protons and electrons to form water; heat is also released."
    ]
  },
  "112": {
    "title": "How Electrolysis Splits Water",
    "options": [
      "Power off",
      "Cathode",
      "Anode",
      "Products collected"
    ],
    "states": [
      "No external electrical input: no driven water splitting is shown.",
      "With suitable external DC input, reduction at the cathode produces hydrogen in this conceptual cell.",
      "Oxidation at the anode produces oxygen; the electrolyte carries ionic current between electrodes.",
      "Overall 2 H₂O → 2 H₂ + O₂: ideal gas amounts have a 2:1 hydrogen-to-oxygen ratio."
    ]
  },
  "113": {
    "title": "How Regenerative Braking Recovers Energy",
    "options": [
      "Coasting",
      "Motor generates",
      "Battery accepts",
      "Recovery limited"
    ],
    "states": [
      "Coasting: no commanded regenerative braking in this snapshot; drag can still slow the vehicle.",
      "Generator torque opposes rotation, converting some mechanical energy to electrical energy.",
      "For an invented 100 kJ mechanical transfer and 70% overall recovery, 70 kJ enters storage and 30 kJ becomes other energy, mainly heat.",
      "A full, cold or power-limited battery can restrict recovery; friction brakes may provide additional braking."
    ]
  },
  "114": {
    "title": "How a Solar Water Heater Collects Heat",
    "options": [
      "Dark collector",
      "Sunlit absorber",
      "Pump circulates",
      "Heat exchanger"
    ],
    "states": [
      "Without incoming sunlight, no solar heat is added; an unprotected collector can lose stored heat.",
      "The dark absorber converts part of incoming solar radiation to internal energy.",
      "A pump moves heated transfer fluid from collector toward the tank heat exchanger.",
      "Heat flows through the exchanger wall to cooler tank water; the two fluids remain separated in this indirect design."
    ]
  },
  "115": {
    "title": "How District Heating Shares Thermal Energy",
    "options": [
      "Heat source",
      "Supply pipe",
      "Building exchanger",
      "Return pipe"
    ],
    "states": [
      "A central plant supplies heat from a selected source; the network does not create heat by itself.",
      "Insulated supply pipes carry hot network water toward buildings, with some heat loss.",
      "A building heat exchanger transfers energy into a separate indoor loop.",
      "Cooler network water returns to the plant for reheating; it is reused rather than consumed as fuel."
    ]
  },
  "116": {
    "title": "How a Ground-Source Heat Pump Exchanges Heat",
    "options": [
      "Heating mode",
      "Cooling mode",
      "Electric input",
      "Ground imbalance"
    ],
    "states": [
      "In heating mode, the ground loop absorbs heat from the ground and the heat pump delivers heat indoors.",
      "In cooling mode, heat removed from indoors is transferred into the ground.",
      "An invented heating balance is 3 kW from ground + 1 kW electric work = 4 kW indoor heat.",
      "Prolonged uneven heat extraction or rejection changes ground conditions; ground temperature is not an unlimited fixed resource."
    ]
  },
  "117": {
    "title": "How a Thermoelectric Module Moves Heat",
    "options": [
      "Current off",
      "Forward current",
      "Reverse current",
      "Heat rejection limited"
    ],
    "states": [
      "No current: no driven Peltier heat pumping; ordinary conduction can still transfer heat.",
      "Forward current pumps heat from the illustrated left side to the right side; resistive heating also occurs.",
      "Reversing current reverses the Peltier contribution, swapping heating and cooling roles under these assumed conditions.",
      "Poor hot-side heat rejection raises temperatures and reduces useful cooling; a module does not dispose of heat by itself."
    ]
  },
  "118": {
    "title": "How Phase-Change Material Stores Heat",
    "options": [
      "Solid warms",
      "Melting begins",
      "Mixture melts",
      "Liquid warms"
    ],
    "states": [
      "Below the ideal melting point, added heat raises the solid temperature.",
      "At the ideal melting point, added energy begins changing solid into liquid.",
      "For invented mass 2 kg and latent heat 100 kJ/kg, complete melting stores 200 kJ at the ideal phase-change temperature.",
      "After all material melts, further input raises liquid temperature; storage capacity is finite."
    ]
  },
  "119": {
    "title": "How a Hydroelectric Plant Generates Power",
    "options": [
      "Gate closed",
      "5 m head",
      "10 m head",
      "20 m head"
    ],
    "states": [
      "Closed gate: no driven turbine flow in this ideal snapshot.",
      "At invented flow 0.1 m³/s, head 5 m and efficiency 0.8: P = 1000 × 9.81 × 0.1 × 5 × 0.8 = 3924 W.",
      "At the same flow and efficiency with 10 m head, idealized useful power is 7848 W.",
      "At 20 m head, useful power is 15696 W; available flow and environmental constraints still matter."
    ]
  },
  "120": {
    "title": "How an Inverter Makes Alternating Current",
    "options": [
      "Positive pair",
      "Zero interval",
      "Negative pair",
      "Filtered output"
    ],
    "states": [
      "The first diagonal switch pair connects the ideal DC source to give positive load voltage.",
      "During an ideal zero-voltage interval, the load sees zero differential voltage in this simplified switching sequence.",
      "The opposite pair reverses the load connection, producing negative voltage without reversing the battery.",
      "Rapid controlled switching and filtering can approximate a sinusoid; real output has losses and residual ripple."
    ]
  },
  "121": {
    "title": "How DNS Resolves a Name",
    "options": [
      "Local cache",
      "Root referral",
      "Authoritative answer",
      "Cache expires"
    ],
    "states": [
      "A valid cached answer can return the example address without repeating the full DNS lookup.",
      "On a cache miss, the resolver can obtain a referral from root to top-level-domain servers.",
      "The authoritative server provides the requested example record; the resolver returns it to the client.",
      "After its time-to-live expires, the cached record must be refreshed before normal reuse under this simplified policy."
    ]
  },
  "122": {
    "title": "How a Router Selects a Network Path",
    "options": [
      "10.1.2.3",
      "10.2.2.3",
      "192.0.2.5",
      "No default route"
    ],
    "states": [
      "For destination 10.1.2.3, routes 10.0.0.0/8 and 10.1.0.0/16 both match; the longer /16 prefix is selected.",
      "For 10.2.2.3, only the 10.0.0.0/8 example route matches, so the /8 next hop is selected.",
      "For documentation address 192.0.2.5, neither private route matches; the default /0 route is selected.",
      "With no matching route and no default, the router cannot forward this packet using this table."
    ]
  },
  "123": {
    "title": "How TCP Reassembles an Ordered Stream",
    "options": [
      "In order",
      "Out of order",
      "Missing segment",
      "Retransmission"
    ],
    "states": [
      "Segments carrying illustrative bytes 1–3, 4–6 and 7–9 arrive in order and become a contiguous byte stream.",
      "Bytes 7–9 arrive before 4–6; the receiver buffers them rather than delivering a gap as an ordered stream.",
      "The missing bytes 4–6 prevent further contiguous delivery beyond byte 3 in this example.",
      "Retransmitted bytes 4–6 fill the gap; buffered 7–9 can now be delivered in order."
    ]
  },
  "124": {
    "title": "How an Operating System Schedules Tasks",
    "options": [
      "A runs",
      "B runs",
      "A waits for input",
      "A becomes ready"
    ],
    "states": [
      "With an invented one-unit time slice, task A runs while ready task B waits in the queue.",
      "When A’s slice ends, B runs and A returns to the ready queue.",
      "A requests input and blocks; it leaves the ready queue, allowing B to continue.",
      "When the input event completes, A becomes ready again; it does not necessarily preempt immediately."
    ]
  },
  "125": {
    "title": "How Virtual Memory Maps Addresses",
    "options": [
      "Mapped page",
      "Different process",
      "Page absent",
      "Permission denied"
    ],
    "states": [
      "Process A virtual page 1 maps to invented physical frame 7; offset 20 stays offset 20.",
      "Process B can map its own virtual page 1 to physical frame 3, keeping the same virtual address independent.",
      "An absent page triggers a page fault; the operating system may load it or report an invalid access.",
      "A write to a read-only mapping triggers a protection fault rather than an allowed write."
    ]
  },
  "126": {
    "title": "How a Database Transaction Commits",
    "options": [
      "Before transfer",
      "Debit pending",
      "Commit",
      "Rollback instead"
    ],
    "states": [
      "Fictional balances A = 100 and B = 50; total = 150 units before a 20-unit transfer.",
      "Inside the transaction, A is provisionally 80 while the matching credit is pending; this intermediate state is not a completed transfer.",
      "Commit both updates together: A = 80 and B = 70; total remains 150 units.",
      "If the transaction fails before commit and rolls back, A = 100 and B = 50 again."
    ]
  },
  "127": {
    "title": "How Version Control Merges Changes",
    "options": [
      "Common base",
      "Independent edits",
      "Clean merge",
      "Conflicting edits"
    ],
    "states": [
      "Both branches start from a shared version containing lines A and B.",
      "One branch edits line A while the other edits line B; both histories retain the common base.",
      "A three-way merge can combine the nonoverlapping edits into one result.",
      "If both branches change the same line incompatibly, a person must resolve the conflict before completing the merge."
    ]
  },
  "128": {
    "title": "How a Digital Signature Verifies a Message",
    "options": [
      "Sign original",
      "Verify original",
      "Message altered",
      "Wrong public key"
    ],
    "states": [
      "The sender uses a private signing key to sign the original message; the message remains readable.",
      "The matching public key verifies the signature on the unchanged original message in this conceptual example.",
      "Altering the signed message causes verification to fail for that original signature.",
      "An unrelated public key also fails verification; key ownership still requires a trusted association."
    ]
  },
  "129": {
    "title": "How Huffman Coding Shortens Common Symbols",
    "options": [
      "Symbol A",
      "Symbol B",
      "Symbol C",
      "Message ABAC"
    ],
    "states": [
      "Invented code A = 0 uses one bit for the most common symbol.",
      "Code B = 10 uses two bits; no complete code is the prefix of another.",
      "Code C = 11 also uses two bits; decoding follows the tree from root to a leaf.",
      "ABAC encodes as 0 10 0 11 = 010011, six bits instead of eight with a two-bit fixed code; codebook overhead is omitted."
    ]
  },
  "130": {
    "title": "How a Search Engine Builds an Index",
    "options": [
      "Crawl pages",
      "Build postings",
      "Query ocean",
      "Page changes"
    ],
    "states": [
      "The toy crawler reads permitted pages P1: ocean blue and P2: ocean waves.",
      "The inverted index stores ocean → P1,P2; blue → P1; waves → P2.",
      "A query for ocean returns both indexed documents; this simple lookup does not predict ranking.",
      "If P2 changes, the stored index remains stale until recrawling and reindexing occur."
    ]
  },
  "131": {
    "title": "How a Synapse Passes a Chemical Signal",
    "options": [
      "Rest",
      "Signal arrives",
      "Transmitter release",
      "Clearance"
    ],
    "states": [
      "At rest, vesicles hold transmitter in the presynaptic terminal; the cells are separated by a gap.",
      "An arriving action potential opens voltage-gated calcium channels in this representative synapse.",
      "Calcium entry promotes vesicle release; transmitter crosses the cleft and binds postsynaptic receptors.",
      "Reuptake, breakdown or diffusion clears transmitter; the postsynaptic effect depends on receptor type."
    ]
  },
  "132": {
    "title": "How an Action Potential Travels",
    "options": [
      "Rest",
      "Depolarization",
      "Repolarization",
      "Refractory region"
    ],
    "states": [
      "At rest, the membrane maintains ion gradients and a resting voltage; ions are not equally distributed.",
      "Threshold activation opens voltage-gated sodium channels, allowing inward sodium current in this representative axon.",
      "Sodium channels inactivate and potassium conductance rises, returning voltage toward resting levels.",
      "A recovering region is temporarily less excitable, helping propagation proceed into the next excitable region."
    ]
  },
  "133": {
    "title": "How Lymph Returns Tissue Fluid",
    "options": [
      "Filtration",
      "Entry into lymph",
      "One-way valves",
      "Venous return"
    ],
    "states": [
      "Fluid exchange across blood capillaries leaves some excess fluid in the surrounding tissue.",
      "Overlapping endothelial flaps allow excess interstitial fluid to enter initial lymphatic vessels.",
      "Collecting vessels and valves support forward movement; muscle movement and vessel contraction help propel lymph.",
      "Larger lymphatic ducts return lymph to the venous circulation; lymph nodes filter lymph along the route."
    ]
  },
  "134": {
    "title": "How Antibodies Bind Specific Targets",
    "options": [
      "Target present",
      "Matching antibody",
      "Nonmatching antibody",
      "Effector response"
    ],
    "states": [
      "An antigen displays a particular binding feature called an epitope.",
      "A matching antibody binding site can bind the illustrated epitope; molecular fit and chemistry matter.",
      "An antibody with a different binding site does not bind this schematic epitope effectively.",
      "Bound antibody can block interactions or recruit immune mechanisms; binding alone does not guarantee protection."
    ]
  },
  "135": {
    "title": "How a Tendon Reflex Responds to Stretch",
    "options": [
      "Before stretch",
      "Spindle stretched",
      "Spinal response",
      "Muscle contracts"
    ],
    "states": [
      "A muscle spindle monitors muscle length and changes in length.",
      "A brief imposed muscle stretch increases sensory activity from the spindle.",
      "Sensory input excites motor neurons of the same muscle through the spinal cord in this simplified pathway.",
      "Motor output contracts the stretched muscle, opposing the imposed length change; other circuits modify the response."
    ]
  },
  "136": {
    "title": "How Sweat Glands Support Evaporative Cooling",
    "options": [
      "No secretion",
      "Sweat reaches skin",
      "Dry moving air",
      "Humid still air"
    ],
    "states": [
      "No active sweat secretion is shown; other routes still exchange body heat.",
      "Eccrine glands secrete fluid through ducts to the skin surface.",
      "When sweat evaporates into drier moving air, it absorbs latent heat from the skin and surroundings.",
      "In very humid still air, evaporation is restricted; dripping sweat is not equivalent to evaporated sweat."
    ]
  },
  "137": {
    "title": "How a Tooth Detects Heat and Pressure",
    "options": [
      "Enamel surface",
      "Dentin",
      "Pulp",
      "Supporting ligament"
    ],
    "states": [
      "Enamel forms the hard outer crown covering; it has no nerve fibers within the enamel itself.",
      "Dentin under enamel contains microscopic tubules that can transmit effects toward the pulp.",
      "The living pulp contains blood vessels and nerves; it supports sensation and tissue maintenance.",
      "The periodontal ligament supports the tooth in its socket and detects mechanical loading."
    ]
  },
  "138": {
    "title": "How a Placenta Exchanges Materials",
    "options": [
      "Maternal supply",
      "Fetal capillaries",
      "Exchange",
      "Separate return"
    ],
    "states": [
      "Maternal blood enters spaces around chorionic villi in this representative placental region.",
      "Fetal blood travels through capillaries within the villi, generally remaining separated from maternal blood.",
      "Oxygen and nutrients transfer toward fetal blood while carbon dioxide and wastes transfer toward maternal blood through different processes.",
      "Fetal vessels carry blood back toward the fetus while maternal blood drains separately; the barrier is selective, not absolute."
    ]
  },
  "139": {
    "title": "How DNA Replication Copies a Sequence",
    "options": [
      "Separate strands",
      "Add complements",
      "Extend strands",
      "Two copies"
    ],
    "states": [
      "The two template strands separate, exposing bases for complementary copying.",
      "Using A–T and C–G pairing, the illustrative template ATGC selects complement TACG.",
      "Polymerases extend new strands in the 5′ to 3′ direction; leading and lagging synthesis differ in real replication.",
      "Each resulting double helix contains one original strand and one newly synthesized strand: semiconservative replication."
    ]
  },
  "140": {
    "title": "How Cellular Respiration Transfers Energy",
    "options": [
      "Glycolysis",
      "Pyruvate processing",
      "Electron transport",
      "ATP use"
    ],
    "states": [
      "Glycolysis in the cytosol splits glucose into pyruvate, transferring some energy to ATP and electron carriers.",
      "In typical aerobic eukaryotic respiration, pyruvate processing and the citric acid cycle release carbon dioxide and supply more reduced carriers.",
      "Electron transport in the inner mitochondrial membrane helps build a proton gradient; oxygen is the final electron acceptor and water forms.",
      "ATP synthase couples proton flow to ATP production; ATP then supports cellular work and heat is released throughout."
    ]
  },
  "141": {
    "title": "How Ocean Surface Currents Circulate",
    "options": [
      "Wind stress",
      "Rotating Earth",
      "Coastline boundary",
      "Gyre pattern"
    ],
    "states": [
      "Wind exerts stress on the ocean surface and transfers momentum into the upper ocean.",
      "Earth’s rotation deflects moving water rightward in the Northern Hemisphere and leftward in the Southern Hemisphere.",
      "Continental boundaries redirect flow and prevent a current from continuing through land.",
      "Together with pressure gradients, these influences organize broad gyres; actual currents vary in time and depth."
    ]
  },
  "142": {
    "title": "How Upwelling Brings Deep Water Upward",
    "options": [
      "No favorable wind",
      "Alongshore wind",
      "Offshore transport",
      "Deep replacement"
    ],
    "states": [
      "Without favorable alongshore wind, this example does not show wind-driven coastal upwelling.",
      "Alongshore wind transfers momentum to surface water near the illustrated coastline.",
      "In this chosen Northern Hemisphere orientation, net Ekman transport is offshore, to the right of the wind.",
      "Cooler nutrient-rich subsurface water rises to replace displaced surface water; biological response depends on other conditions."
    ]
  },
  "143": {
    "title": "How a Sea Breeze Forms",
    "options": [
      "Morning contrast",
      "Warm land rises",
      "Surface inflow",
      "Evening weakens"
    ],
    "states": [
      "Land begins warming faster than adjacent water under the assumed clear-day conditions.",
      "Warmer air over land expands and rises, contributing to a circulation and pressure differences.",
      "Near-surface air flows from sea toward land while a return branch can occur aloft.",
      "As land heating weakens, this thermally driven circulation can weaken or change; background winds may dominate."
    ]
  },
  "144": {
    "title": "How Lightning Separates and Releases Charge",
    "options": [
      "Charge separates",
      "Field grows",
      "Channel connects",
      "Return stroke"
    ],
    "states": [
      "Collisions involving ice particles in a thunderstorm help separate electric charge into regions.",
      "Separated charge strengthens the electric field; induced charge changes can develop on the ground.",
      "In this negative cloud-to-ground example, a stepped leader approaches and an upward streamer can connect.",
      "A bright return stroke propagates along the established channel; multiple strokes may follow."
    ]
  },
  "145": {
    "title": "How a Rainbow Separates Sunlight",
    "options": [
      "Enter drop",
      "Colors separate",
      "Internal reflection",
      "Exit toward observer"
    ],
    "states": [
      "Sunlight refracts as it enters a spherical water drop.",
      "Different wavelengths bend by slightly different amounts because water’s refractive index depends on wavelength.",
      "For the primary rainbow path, light reflects once from the inside rear surface of the drop.",
      "Light refracts again on exit; different drops send different colors toward an observer at the appropriate angles."
    ]
  },
  "146": {
    "title": "How a Glacier Flows",
    "options": [
      "Snow accumulates",
      "Ice deforms",
      "Base slides",
      "Terminus melts"
    ],
    "states": [
      "Repeated accumulation can compact snow into glacier ice when long-term gain exceeds loss locally.",
      "Under its own weight, glacier ice deforms and flows downslope over long time scales.",
      "Where conditions permit, motion at the glacier bed adds basal sliding; not every glacier slides equally.",
      "A glacier can flow forward while its terminus retreats if melting and other losses exceed replenishment."
    ]
  },
  "147": {
    "title": "How a River Delta Builds Land",
    "options": [
      "River carries sediment",
      "Flow slows",
      "Sediment deposits",
      "Channels shift"
    ],
    "states": [
      "A river carries sediment toward a standing body of water.",
      "As flow spreads and loses transport capacity, some sediment settles; sorting depends on grain size and conditions.",
      "Repeated deposition can build bars and delta surfaces while waves and tides redistribute material.",
      "Channels can shift into new paths, changing where sediment is delivered; subsidence and sea level also affect the delta."
    ]
  },
  "148": {
    "title": "How a Food Web Transfers Energy",
    "options": [
      "Producer input",
      "Primary consumer",
      "Secondary consumer",
      "Detrital route"
    ],
    "states": [
      "Invented producer production contains 1000 energy units available in the selected accounting period.",
      "Assuming an invented 10% transfer to the next level, primary-consumer production is 100 units.",
      "With the same invented fraction, secondary-consumer production is 10 units; real efficiencies vary.",
      "Energy also enters detrital pathways and dissipates as heat through metabolism; nutrients cycle but energy flows through the system."
    ]
  },
  "149": {
    "title": "How Nitrogen Cycles Through Living Systems",
    "options": [
      "Fixation",
      "Assimilation",
      "Recycling",
      "Denitrification"
    ],
    "states": [
      "Nitrogen-fixing microbes convert atmospheric N₂ into biologically usable compounds.",
      "Plants take up available nitrogen compounds; nitrogen moves to animals through feeding.",
      "Decomposition releases ammonium, and nitrifying microbes can convert it through nitrite to nitrate.",
      "Denitrifying microbes under suitable low-oxygen conditions convert nitrate toward gases including N₂, returning nitrogen to the atmosphere."
    ]
  },
  "150": {
    "title": "How Waves Reshape a Coast",
    "options": [
      "Wave attack",
      "Material loosens",
      "Alongshore transport",
      "Deposition"
    ],
    "states": [
      "Waves transfer energy to the coast; repeated impact and water movement can loosen susceptible material.",
      "Loosened particles enter nearshore water, with behavior depending on size and wave conditions.",
      "Waves approaching at an angle can contribute to alongshore sediment transport.",
      "Where transport capacity decreases, some sediment deposits; a beach can gain material in one place while losing it elsewhere."
    ]
  }
};
