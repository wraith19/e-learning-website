const questions = {
    //Power PLant Operations
    "chp-operations": {
        basic: [
            {
                id: 1,
                question: "What is the primary purpose of a coal handling plant?",
                options: ["To generate electricity", "To store raw materials", "To manage the process of receiving, storing, and transporting coal to the boiler", "To reduce emissions"],
                answer: "To manage the process of receiving, storing, and transporting coal to the boiler"
            },
            {
                id: 2,
                question: "What transportation methods are typically used to deliver coal to the plant?",
                options: ["Train, truck, barge", "Air, pipeline, conveyor", "Road only", "Airplane and boat"],
                answer: "Train, truck, barge"
            },
            {
                id: 3,
                question: "Which equipment is used for unloading coal from transportation vehicles?",
                options: ["Fans", "Hoppers and conveyors", "Steam turbines", "Generators"],
                answer: "Hoppers and conveyors"
            },
            {
                id: 4,
                question: "What is the function of conveyors in a coal handling plant?",
                options: ["Store the coal", "Transport coal within the plant", "Increase coal's calorific value", "Generate power"],
                answer: "Transport coal within the plant"
            },
            {
                id: 5,
                question: "Which component ensures the plant has a steady supply of coal during high demand periods?",
                options: ["Generators", "Pulverizers", "Storage bins and silos", "Fans"],
                answer: "Storage bins and silos"
            },
            {
                id: 6,
                question: "What is the primary reason for blending coal from different sources?",
                options: ["To increase ash content", "To maintain consistent coal quality", "To reduce the cost of transportation", "To speed up combustion"],
                answer: "To maintain consistent coal quality"
            },
            {
                id: 7,
                question: "What type of system is used to retrieve coal from storage bins when needed?",
                options: ["Reclaiming system", "Conveyor belts", "Unloading hoppers", "Fans"],
                answer: "Reclaiming system"
            },
            {
                id: 8,
                question: "Why is coal pulverized before being fed into the boiler?",
                options: ["To make it easier to transport", "To remove moisture content", "To increase the surface area for better combustion", "To change its chemical composition"],
                answer: "To increase the surface area for better combustion"
            },
            {
                id: 9,
                question: "What device is commonly used to pulverize coal?",
                options: ["Crusher", "Mill or grinder", "Silo", "Conveyor belt"],
                answer: "Mill or grinder"
            },
            {
                id: 10,
                question: "What is a \"coal-air slurry\"?",
                options: ["A mixture of coal dust and water", "A mixture of pulverized coal and air", "A type of fuel used in gas turbines", "A type of ash"],
                answer: "A mixture of pulverized coal and air"
            },
            {
                id: 11,
                question: "What role does moisture control play in coal preparation?",
                options: ["It improves combustion efficiency", "It reduces ash content", "It increases the calorific value", "It changes the coal’s color"],
                answer: "It improves combustion efficiency"
            },
            {
                id: 12,
                question: "How is steam generated in the power plant?",
                options: ["By direct coal combustion", "Through electrolysis of water", "By using heat from coal combustion to boil water", "Using solar energy"],
                answer: "By using heat from coal combustion to boil water"
            },
            {
                id: 13,
                question: "What drives the turbines in a thermal power plant?",
                options: ["Hot air", "Coal", "High-pressure steam", "Electricity"],
                answer: "High-pressure steam"
            },
            {
                id: 14,
                question: "What is fly ash?",
                options: ["Ash that floats on water", "Fine ash collected from combustion", "Heavy ash at the bottom of the boiler", "Ash used to fertilize crops"],
                answer: "Fine ash collected from combustion"
            },
            {
                id: 15,
                question: "How is fly ash typically captured?",
                options: ["Through hoppers", "With electrostatic precipitators or baghouse filters", "By cooling the coal", "Using water jets"],
                answer: "With electrostatic precipitators or baghouse filters"
            },
            {
                id: 16,
                question: "What is bottom ash?",
                options: ["Residual ash collected at the top of the boiler", "Light ash that is carried away by air", "Heavier ash that settles at the bottom of the boiler", "Recycled ash used for concrete"],
                answer: "Heavier ash that settles at the bottom of the boiler"
            },
            {
                id: 17,
                question: "Which industry commonly uses fly ash as a raw material?",
                options: ["Agriculture", "Cement and construction", "Pharmaceutical", "Textile manufacturing"],
                answer: "Cement and construction"
            },
            {
                id: 18,
                question: "What is a key operational goal in coal handling plants?",
                options: ["Maximizing coal storage", "Optimizing efficiency and minimizing costs", "Increasing moisture in coal", "Reducing power generation"],
                answer: "Optimizing efficiency and minimizing costs"
            },
            {
                id: 19,
                question: "Which method helps minimize coal spillage in the plant?",
                options: ["Frequent unloading", "Slow conveyor speeds", "Using automated control systems", "Increasing ash production"],
                answer: "Using automated control systems"
            },
            {
                id: 20,
                question: "What ensures continuous fuel delivery to the boiler?",
                options: ["Manual feeding", "Conveyor and reclaiming systems", "Fans and blowers", "Storage tanks"],
                answer: "Conveyor and reclaiming systems"
            },
            {
                id: 21,
                question: "How is environmental compliance achieved in coal handling plants?",
                options: ["By increasing coal usage", "Through regular maintenance and pollution control systems", "By reducing electricity production", "By eliminating ash disposal"],
                answer: "Through regular maintenance and pollution control systems"
            },
            {
                id: 22,
                question: "What is one way to reduce operating costs in a coal plant?",
                options: ["Increasing storage space", "Automating operations and processes", "Using more expensive coal", "Reducing conveyor maintenance"],
                answer: "Automating operations and processes"
            },
            {
                id: 23,
                question: "Which system retrieves coal from silos for combustion?",
                options: ["Conveying system", "Reclaiming system", "Ash handling system", "Steam generation system"],
                answer: "Reclaiming system"
            },
            {
                id: 24,
                question: "What happens if coal has excessive moisture?",
                options: ["It combusts faster", "It reduces combustion efficiency", "It increases ash production", "It is easier to transport"],
                answer: "It reduces combustion efficiency"
            },
            {
                id: 25,
                question: "What is the role of the boiler in a coal plant?",
                options: ["To store coal", "To generate electricity directly", "To convert water into steam", "To filter ash"],
                answer: "To convert water into steam"
            },
            {
                id: 26,
                question: "What is the final product of the power plant after steam drives the turbines?",
                options: ["Heat", "Electricity", "Coal slurry", "Compressed air"],
                answer: "Electricity"
            },
            {
                id: 27,
                question: "What process captures pollutants from combustion gases?",
                options: ["Steam generation", "Pulverization", "Electrostatic precipitation", "Conveyor operation"],
                answer: "Electrostatic precipitation"
            },
            {
                id: 28,
                question: "What does regular equipment maintenance in coal plants prevent?",
                options: ["Increased coal consumption", "Equipment breakdowns and downtime", "Faster ash production", "Steam leakage"],
                answer: "Equipment breakdowns and downtime"
            },
            {
                id: 29,
                question: "What tool can plants use to monitor efficiency?",
                options: ["Electrostatic precipitators", "Data analysis tools", "Water pumps", "Boilers"],
                answer: "Data analysis tools"
            },
            {
                id: 30,
                question: "What is an example of ash utilization?",
                options: ["Water treatment", "Adding fly ash to the cement", "Generating electricity", "Coal transportation"],
                answer: "Adding fly ash to the cement"
            }
        ],
        advanced: [
            {
                id: 1,
                question: "What is the main purpose of integrating blending systems in a coal handling plant?",
                options: ["To control moisture content only", "To optimize fuel cost and maintain consistent calorific value", "To reduce the amount of coal used in combustion", "To increase the ash content in fuel"],
                answer: "To optimize fuel cost and maintain consistent calorific value"
            },
            {
                id: 2,
                question: "Which of the following is a major factor influencing the design of a coal unloading system?",
                options: ["Wind direction at the plant site", "Mode of coal transportation (rail, truck, or barge)", "Coal rank and grade", "Distance between storage bins and the power plant"],
                answer: "Mode of coal transportation (rail, truck, or barge)"
            },
            {
                id: 3,
                question: "What type of conveyor belt is most suitable for long-distance coal transport in a power plant?",
                options: ["Trough belt conveyor", "Roller conveyor", "Chain conveyor", "Bucket conveyor"],
                answer: "Trough belt conveyor"
            },
            {
                id: 4,
                question: "Which environmental regulation primarily governs fly ash disposal in coal handling plants?",
                options: ["Clean Air Act", "Clean Water Act", "Hazardous Waste Management Rule", "Coal Combustion Residuals (CCR) Rule"],
                answer: "Coal Combustion Residuals (CCR) Rule"
            },
            {
                id: 5,
                question: "In which scenario is bucket elevator usage preferred over belt conveyors?",
                options: ["For transporting coal over long horizontal distances", "When vertical transportation of coal is required", "To minimize the moisture content in coal", "When blending different types of coal"],
                answer: "When vertical transportation of coal is required"
            },
            {
                id: 6,
                question: "What is the primary advantage of using automated control systems in coal handling plants?",
                options: ["Reducing power plant efficiency", "Minimizing operator involvement and human errors", "Increasing coal moisture content", "Reducing fuel quality variations"],
                answer: "Minimizing operator involvement and human errors"
            },
            {
                id: 7,
                question: "Which factor determines the number and capacity of storage silos in a coal handling plant?",
                options: ["Coal rank only", "Average and peak load demand of the power plant", "Amount of ash produced", "Availability of transportation vehicles"],
                answer: "Average and peak load demand of the power plant"
            },
            {
                id: 8,
                question: "How does excessive moisture in coal affect the efficiency of the power plant?",
                options: ["Reduces the energy required for combustion", "Increases combustion efficiency by slowing down the burn rate", "Leads to incomplete combustion and lower boiler efficiency", "Helps generate more steam for the turbines"],
                answer: "Leads to incomplete combustion and lower boiler efficiency"
            },
            {
                id: 9,
                question: "Which equipment is used to regulate the amount of coal fed into the pulverizer?",
                options: ["Conveyor belt", "Gravimetric or volumetric feeders", "Bucket elevator", "Fly ash separator"],
                answer: "Gravimetric or volumetric feeders"
            },
            {
                id: 10,
                question: "Which material handling system minimizes dust generation in coal handling?",
                options: ["Open-belt conveyor systems", "Enclosed conveyors and transfer chutes", "Bucket elevators with water sprays", "Manual loading and unloading"],
                answer: "Enclosed conveyors and transfer chutes"
            },
            {
                id: 11,
                question: "What is the role of primary crushers in coal handling plants?",
                options: ["To separate ash from coal", "To reduce the size of coal lumps for further processing", "To increase the calorific value of coal", "To blend different grades of coal"],
                answer: "To reduce the size of coal lumps for further processing"
            },
            {
                id: 12,
                question: "Which monitoring technique is used to detect belt misalignment in conveyors?",
                options: ["Thermal imaging sensors", "Ultrasonic sensors", "Belt drift switches", "Pressure gauges"],
                answer: "Belt drift switches"
            },
            {
                id: 13,
                question: "What is the advantage of using a reversible belt conveyor?",
                options: ["To reduce motor consumption", "To minimize the number of transfer points", "To enable the transportation of coal in both directions", "To increase blending efficiency"],
                answer: "To enable the transportation of coal in both directions"
            },
            {
                id: 14,
                question: "What type of pulverizer is commonly used for lignite coal?",
                options: ["Bowl mill", "Ball mill", "Vertical spindle mill", "Tube mill"],
                answer: "Vertical spindle mill"
            },
            {
                id: 15,
                question: "Which operational strategy helps prevent coal spillage in transfer points?",
                options: ["Increasing conveyor speed beyond design limits", "Using anti-spill skirts and belt plows", "Reducing the width of the conveyor belt", "Transporting wet coal only"],
                answer: "Using anti-spill skirts and belt plows"
            },
            {
                id: 16,
                question: "How do electrostatic precipitators remove fly ash from flue gases?",
                options: ["By using centrifugal force", "By applying an electric charge to ash particles", "Through chemical absorption", "By trapping ash in water droplets"],
                answer: "By applying an electric charge to ash particles"
            },
            {
                id: 17,
                question: "Which system is essential for controlling dust emissions in the unloading area?",
                options: ["Air ventilation system", "Dust suppression system with water sprays", "Fly ash handling system", "Ash settling ponds"],
                answer: "Dust suppression system with water sprays"
            },
            {
                id: 18,
                question: "What can happen if coal in storage silos is not reclaimed regularly?",
                options: ["Increase in ash production", "Coal hardening and spontaneous combustion", "Higher moisture absorption from the air", "Faster coal movement in conveyors"],
                answer: "Coal hardening and spontaneous combustion"
            },
            {
                id: 19,
                question: "What type of maintenance approach ensures smooth coal handling operations?",
                options: ["Reactive maintenance", "Preventive and predictive maintenance", "Periodic shutdowns only", "Equipment replacement every year"],
                answer: "Preventive and predictive maintenance"
            },
            {
                id: 20,
                question: "Which parameter is monitored to ensure coal handling plant efficiency?",
                options: ["Boiler pressure only", "Conveyor belt speed and coal feed rate", "Water temperature", "Flue gas emissions only"],
                answer: "Conveyor belt speed and coal feed rate"
            },
            {
                id: 21,
                question: "What does the term 'redundant system' refer to in coal handling operations?",
                options: ["Systems that are no longer in use", "Backup equipment in case of failure", "Dual processing systems to reduce coal quantity", "Waste systems for ash disposal"],
                answer: "Backup equipment in case of failure"
            },
            {
                id: 22,
                question: "What is the main drawback of using wet ash handling systems?",
                options: ["High water consumption", "Increased ash collection", "Lower power consumption", "Reduced emissions"],
                answer: "High water consumption"
            },
            {
                id: 23,
                question: "What happens during the stacking process in a coal yard?",
                options: ["Coal is burned for power", "Coal is arranged in layers for storage", "Fly ash is captured for recycling", "Ash is removed from boilers"],
                answer: "Coal is arranged in layers for storage"
            },
            {
                id: 24,
                question: "Which component ensures coal flow continuity in the reclaim system?",
                options: ["Coal air lock system", "Vibratory feeder", "Steam turbine", "Water spray system"],
                answer: "Vibratory feeder"
            },
            {
                id: 25,
                question: "What is the function of an over-belt magnet in a coal handling plant?",
                options: ["To crush oversized coal", "To remove ferrous metal contaminants from coal", "To blend different grades of coal", "To prevent ash leakage"],
                answer: "To remove ferrous metal contaminants from coal"
            },
            {
                id: 26,
                question: "Which design feature minimizes belt wear in coal conveyors?",
                options: ["Skirt boards at transfer points", "Increasing conveyor angle", "Using high-speed belts only", "Transporting uncrushed coal"],
                answer: "Skirt boards at transfer points"
            },
            {
                id: 27,
                question: "Which factor impacts coal storage silo design the most?",
                options: ["Fuel combustion rate", "Storage duration and capacity needs", "Conveyor type used in the plant", "Boiler type"],
                answer: "Storage duration and capacity needs"
            },
            {
                id: 28,
                question: "What operational issue is caused by improper ash handling?",
                options: ["Reduced power generation", "Blockages in conveyors", "Contamination of fresh coal", "Increased efficiency"],
                answer: "Blockages in conveyors"
            },
            {
                id: 29,
                question: "Which sensor helps detect fire hazards in coal handling systems?",
                options: ["Proximity sensor", "Infrared flame detector", "Ultrasonic sensor", "Tachometer"],
                answer: "Infrared flame detector"
            },
            {
                id: 30,
                question: "Which automation system is most commonly used in coal handling plants?",
                options: ["Distributed Control System (DCS)", "Hydraulic Control System", "Mechanical relay systems", "Analog instrumentation"],
                answer: "Distributed Control System (DCS)"
            }
        ]
    },
    "auxiliary-operations": {
        basic: [
            {
                id: 1,
                question: "Which type of power plant uses the kinetic energy of flowing water to generate electricity?",
                options: ["Steam Power Plant", "Hydroelectric Power Plant", "Nuclear Power Plant", "Wind Power Plant"],
                answer: "Hydroelectric Power Plant"
            },
            {
                id: 2,
                question: "What drives the turbines in steam power plants?",
                options: ["Wind energy", "High-pressure steam", "Flowing water", "Solar heat"],
                answer: "High-pressure steam"
            },
            {
                id: 3,
                question: "Which energy source powers wind turbine generator systems?",
                options: ["Kinetic energy of wind", "Solar energy", "Geothermal heat", "Fossil fuels"],
                answer: "Kinetic energy of wind"
            },
            {
                id: 4,
                question: "What links the turbine and generator in a turbine generator system?",
                options: ["Stator", "Rotor", "Coupling", "Actuator"],
                answer: "Coupling"
            },
            {
                id: 5,
                question: "Which component uses electromagnetic induction to generate electricity?",
                options: ["Turbine", "Coupling", "Generator", "Governor"],
                answer: "Generator"
            },
            {
                id: 6,
                question: "Which is a primary function of the governing system in a turbine generator?",
                options: ["Generate electricity", "Maintain grid stability", "Increase fuel consumption", "Reduce generator speed"],
                answer: "Maintain grid stability"
            },
            {
                id: 7,
                question: "Governing systems protect equipment by regulating:",
                options: ["Voltage output", "Turbine speed and output", "Generator alignment", "Cooling systems"],
                answer: "Turbine speed and output"
            },
            {
                id: 8,
                question: "What ensures that a generator produces electricity at the desired frequency?",
                options: ["Speed regulation", "Load balancing", "Phase synchronization", "Voltage boost"],
                answer: "Speed regulation"
            },
            {
                id: 9,
                question: "What function prevents the turbine from exceeding safe speed limits?",
                options: ["Startup management", "Overspeed protection", "Load sharing", "Voltage regulation"],
                answer: "Overspeed protection"
            },
            {
                id: 10,
                question: "Load sharing in multi-generator systems helps prevent:",
                options: ["Excessive speed", "Overloading", "Voltage loss", "Phase mismatch"],
                answer: "Overloading"
            },
            {
                id: 11,
                question: "Which governing system relies on a combination of mechanical and hydraulic components?",
                options: ["Mechanical-Hydraulic", "Electro-Hydraulic", "Digital/Electronic", "Pneumatic"],
                answer: "Mechanical-Hydraulic"
            },
            {
                id: 12,
                question: "What governing system uses programmable logic controllers (PLCs)?",
                options: ["Mechanical-Hydraulic", "Digital/Electronic", "Pneumatic", "Fluidic"],
                answer: "Digital/Electronic"
            },
            {
                id: 13,
                question: "What component measures turbine rotational speed in mechanical-hydraulic systems?",
                options: ["Flyball governor", "Servo valve", "PLC", "Stator sensor"],
                answer: "Flyball governor"
            },
            {
                id: 14,
                question: "Hydraulic actuators in mechanical-hydraulic systems control:",
                options: ["Generator output", "Turbine control valves", "Cooling systems", "Exciter current"],
                answer: "Turbine control valves"
            },
            {
                id: 15,
                question: "Which component in electro-hydraulic systems processes speed feedback signals?",
                options: ["Stator", "PLC", "Rotor", "Hydraulic actuator"],
                answer: "PLC"
            },
            {
                id: 16,
                question: "Human-Machine Interfaces (HMIs) in governing systems provide:",
                options: ["Real-time data and control access", "Increased power output", "Speed boost functionality", "Valve repair instructions"],
                answer: "Real-time data and control access"
            },
            {
                id: 17,
                question: "Accurate speed sensing in governing systems is crucial for:",
                options: ["Maintaining desired turbine speed", "Cooling turbine blades", "Reducing power output", "Limiting frequency regulation"],
                answer: "Maintaining desired turbine speed"
            },
            {
                id: 18,
                question: "What kind of control system continuously monitors turbine speed?",
                options: ["Closed-loop feedback", "Open-loop feedforward", "Manual control", "Static loop control"],
                answer: "Closed-loop feedback"
            },
            {
                id: 19,
                question: "Speed droop allows generators to:",
                options: ["Share load automatically", "Overproduce electricity", "Avoid synchronization", "Limit energy conversion"],
                answer: "Share load automatically"
            },
            {
                id: 20,
                question: "A 5% speed droop means the generator’s speed decreases by 5% as:",
                options: ["Load increases from no load to full load", "Voltage decreases", "Turbine heat rises", "Maintenance intervals shorten"],
                answer: "Load increases from no load to full load"
            },
            {
                id: 21,
                question: "What enables plant technicians to diagnose issues remotely?",
                options: ["Manual controls", "Remote access capabilities", "Mechanical switches", "Fixed sensors"],
                answer: "Remote access capabilities"
            },
            {
                id: 22,
                question: "Centralized control systems allow operators to:",
                options: ["Increase grid frequency", "Monitor and adjust turbine behavior from a single interface", "Limit generator efficiency", "Reduce turbine blade speed"],
                answer: "Monitor and adjust turbine behavior from a single interface"
            },
            {
                id: 23,
                question: "Modern governing systems include advanced:",
                options: ["Flywheels", "Control algorithms", "Passive sensors", "Fixed actuators"],
                answer: "Control algorithms"
            },
            {
                id: 24,
                question: "Retrofit options help operators:",
                options: ["Avoid power production", "Limit system upgrades", "Upgrade governing systems without full replacement", "Reduce system efficiency"],
                answer: "Upgrade governing systems without full replacement"
            },
            {
                id: 25,
                question: "A faulty speed sensor can lead to:",
                options: ["Improved speed control", "Incorrect speed measurements", "Lower power output", "No grid connection"],
                answer: "Incorrect speed measurements"
            },
            {
                id: 26,
                question: "Which component may experience mechanical binding in governing systems?",
                options: ["Rotor", "Hydraulic actuator", "Stator coil", "Exciter"],
                answer: "Hydraulic actuator"
            },
            {
                id: 27,
                question: "Condition monitoring involves:",
                options: ["Analyzing component health using advanced techniques", "Manual inspection only", "Ignoring vibration analysis", "Extending maintenance intervals"],
                answer: "Analyzing component health using advanced techniques"
            },
            {
                id: 28,
                question: "What improves system resilience during failures?",
                options: ["Manual overrides", "Redundant components", "Excessive damping", "Limited data logs"],
                answer: "Redundant components"
            },
            {
                id: 29,
                question: "Which organization sets standards for governing systems?",
                options: ["IEEE", "NASA", "WTO", "FDA"],
                answer: "IEEE"
            },
            {
                id: 30,
                question: "Complying with regulatory standards ensures:",
                options: ["Decreased power output", "Safe and reliable operation", "Manual grid adjustment", "Frequent system shutdowns"],
                answer: "Safe and reliable operation"
            }
        ],
        advanced: []
    },
    "water-chemistry": {
        basic: [
            {
                id: 1,
                question: "What is the primary purpose of water in thermal power plants?",
                options: ["Electricity generation", "Cooling and steam production", "Waste disposal", "Cleaning machinery"],
                answer: "Cooling and steam production"
            },
            {
                id: 2,
                question: "What is one major reason for maintaining optimal water quality in thermal power plants?",
                options: ["Reduce fuel consumption", "Increase water consumption", "Prevent corrosion and scaling", "Minimize noise"],
                answer: "Prevent corrosion and scaling"
            },
            {
                id: 3,
                question: "Which component is used in thermal power plants to drive the generator?",
                options: ["Pump", "Turbine", "Condenser", "Cooling tower"],
                answer: "Turbine"
            },
            {
                id: 4,
                question: "What is the first step in water treatment for thermal power plants?",
                options: ["Demineralization", "Softening", "Pretreatment", "Disinfection"],
                answer: "Pretreatment"
            },
            {
                id: 5,
                question: "Which process involves adding chemicals to neutralize particles in water?",
                options: ["Flocculation", "Coagulation", "Filtration", "Sedimentation"],
                answer: "Coagulation"
            },
            {
                id: 6,
                question: "In which process do particles settle to the bottom of a tank?",
                options: ["Coagulation", "Sedimentation", "Filtration", "Disinfection"],
                answer: "Sedimentation"
            },
            {
                id: 7,
                question: "Which ions are primarily responsible for water hardness?",
                options: ["Sodium and potassium", "Calcium and magnesium", "Iron and zinc", "Chloride and sulfate"],
                answer: "Calcium and magnesium"
            },
            {
                id: 8,
                question: "What is the purpose of ion exchange softening?",
                options: ["To remove dissolved solids", "To disinfect the water", "To replace hard ions with sodium", "To remove microorganisms"],
                answer: "To replace hard ions with sodium"
            },
            {
                id: 9,
                question: "What does reverse osmosis remove from water?",
                options: ["Organic particles only", "Dissolved salts and impurities", "Sediments only", "Bacteria only"],
                answer: "Dissolved salts and impurities"
            },
            {
                id: 10,
                question: "Which parameter is often adjusted to control water pH in thermal power plants?",
                options: ["Conductivity", "Alkalinity", "Dissolved solids", "Temperature"],
                answer: "Alkalinity"
            },
            {
                id: 11,
                question: "What is added to water to kill microorganisms?",
                options: ["Sodium ions", "Coagulants", "Disinfectants", "Scale inhibitors"],
                answer: "Disinfectants"
            },
            {
                id: 12,
                question: "Which water treatment method uses a semi-permeable membrane?",
                options: ["Ion exchange", "Reverse osmosis", "Coagulation", "Filtration"],
                answer: "Reverse osmosis"
            },
            {
                id: 13,
                question: "Why is it important to monitor dissolved solids in boiler water?",
                options: ["They can cause scale and corrosion", "They increase oxygen levels", "They reduce water hardness", "They cool the boiler"],
                answer: "They can cause scale and corrosion"
            },
            {
                id: 14,
                question: "What device is commonly used to monitor pH levels continuously?",
                options: ["Thermometer", "pH analyzer", "Pressure gauge", "Turbidity sensor"],
                answer: "pH analyzer"
            },
            {
                id: 15,
                question: "Which chemical process is used to treat cooling tower water?",
                options: ["Ion exchange", "Disinfection only", "pH control and biocides", "Filtration only"],
                answer: "pH control and biocides"
            },
            {
                id: 16,
                question: "Why is deaeration necessary in boiler feed water treatment?",
                options: ["To cool the water", "To remove oxygen", "To add chemicals", "To increase pH"],
                answer: "To remove oxygen"
            },
            {
                id: 17,
                question: "What is the function of scale inhibitors?",
                options: ["Increase water hardness", "Reduce corrosion", "Prevent scale deposits", "Increase conductivity"],
                answer: "Prevent scale deposits"
            },
            {
                id: 18,
                question: "Which is a common method of disinfection in water treatment?",
                options: ["Filtration", "Sedimentation", "Chlorination", "Coagulation"],
                answer: "Chlorination"
            },
            {
                id: 19,
                question: "What does pH measure in water?",
                options: ["Hardness", "Turbidity", "Acidity or alkalinity", "Conductivity"],
                answer: "Acidity or alkalinity"
            },
            {
                id: 20,
                question: "What process is primarily used for removing heavy metals in wastewater treatment?",
                options: ["Biological treatment", "Physical-chemical treatment", "Sedimentation", "Reverse osmosis"],
                answer: "Physical-chemical treatment"
            },
            {
                id: 21,
                question: "What is the final step in wastewater treatment?",
                options: ["Sedimentation", "Filtration", "Disinfection", "Demineralization"],
                answer: "Disinfection"
            },
            {
                id: 22,
                question: "Which component is used to cool water in thermal power plants?",
                options: ["Boiler", "Condenser", "Cooling tower", "Generator"],
                answer: "Cooling tower"
            },
            {
                id: 23,
                question: "What kind of microorganisms are often found in cooling water systems?",
                options: ["Bacteria and algae", "Viruses only", "Large fish", "Insects"],
                answer: "Bacteria and algae"
            },
            {
                id: 24,
                question: "Which regulation step requires power plants to submit regular reports on emissions?",
                options: ["Environmental impact assessment", "Environmental monitoring and reporting", "Water recycling", "Heat dissipation"],
                answer: "Environmental monitoring and reporting"
            },
            {
                id: 25,
                question: "What is the purpose of a demineralization process?",
                options: ["Increase hardness", "Reduce mineral salts", "Disinfect water", "Add nutrients"],
                answer: "Reduce mineral salts"
            },
            {
                id: 26,
                question: "Why is continuous monitoring of water quality crucial?",
                options: ["To maximize water flow", "To maintain water chemistry for optimal plant efficiency", "To prevent heat loss", "To increase water hardness"],
                answer: "To maintain water chemistry for optimal plant efficiency"
            },
            {
                id: 27,
                question: "What is the primary environmental consideration for power plants?",
                options: ["Heat production", "Water consumption", "Pollution control", "Electricity output"],
                answer: "Pollution control"
            },
            {
                id: 28,
                question: "What kind of maintenance is essential for long equipment life in water treatment?",
                options: ["Preventive maintenance", "Minimal maintenance", "Occasional cleaning", "Emergency repairs only"],
                answer: "Preventive maintenance"
            },
            {
                id: 29,
                question: "Which chemical is used to control the pH of water?",
                options: ["Sulfuric acid", "Sodium hydroxide", "Chlorine", "Phosphate"],
                answer: "Sodium hydroxide"
            },
            {
                id: 30,
                question: "What is a common issue in cooling towers due to water chemistry?",
                options: ["Overheating", "Scaling, corrosion, and microbial growth", "Noise generation", "Increased water flow"],
                answer: "Scaling, corrosion, and microbial growth"
            }
        ],
        advanced: [
            {
                id: 1,
                question: "What is the primary objective of maintaining high-purity water in thermal power plants?",
                options: ["To enhance steam temperature", "To prevent deposition, corrosion, and fouling in equipment", "To increase water hardness", "To minimize the use of chemicals"],
                answer: "To prevent deposition, corrosion, and fouling in equipment"
            },
            {
                id: 2,
                question: "Which process in thermal power plants is used to convert dissolved gases like oxygen and carbon dioxide into inert compounds?",
                options: ["Filtration", "Deaeration", "Ion exchange", "Reverse osmosis"],
                answer: "Deaeration"
            },
            {
                id: 3,
                question: "Why is maintaining a pH range of 9.0–10.5 crucial for boiler feedwater?",
                options: ["To increase water solubility", "To prevent acidic corrosion", "To maintain conductivity", "To promote scale formation"],
                answer: "To prevent acidic corrosion"
            },
            {
                id: 4,
                question: "What is the primary risk associated with high levels of dissolved solids in boiler water?",
                options: ["Reduced thermal conductivity", "Increased risk of scaling and corrosion", "Lowered water pH", "Increased water flow rate"],
                answer: "Increased risk of scaling and corrosion"
            },
            {
                id: 5,
                question: "Which of the following is a benefit of passivation in water treatment systems?",
                options: ["Reduces dissolved solids", "Forms a protective oxide layer on metal surfaces", "Increases water alkalinity", "Removes biological contaminants"],
                answer: "Forms a protective oxide layer on metal surfaces"
            },
            {
                id: 6,
                question: "What is the purpose of continuous data logging and analysis in water treatment systems?",
                options: ["To enhance pH levels", "To track and troubleshoot water quality trends", "To increase oxygen levels in water", "To boost microbial growth"],
                answer: "To track and troubleshoot water quality trends"
            },
            {
                id: 7,
                question: "Which water treatment process uses a concentrated salt solution to regenerate resin beads?",
                options: ["Coagulation", "Flocculation", "Ion exchange softening", "Reverse osmosis"],
                answer: "Ion exchange softening"
            },
            {
                id: 8,
                question: "What is the role of biocides in cooling tower water treatment?",
                options: ["To increase dissolved solids", "To remove scale deposits", "To control microbial growth", "To increase alkalinity"],
                answer: "To control microbial growth"
            },
            {
                id: 9,
                question: "Why is reverse osmosis typically paired with demineralization for boiler feedwater?",
                options: ["It is faster than ion exchange", "It provides an additional layer of dissolved mineral removal", "It reduces the need for chemical additives", "It increases water conductivity"],
                answer: "It provides an additional layer of dissolved mineral removal"
            },
            {
                id: 10,
                question: "What is the primary role of sodium hydroxide in water treatment?",
                options: ["To disinfect water", "To control pH and prevent rapid changes", "To promote corrosion", "To increase water turbidity"],
                answer: "To control pH and prevent rapid changes"
            },
            {
                id: 11,
                question: "What does a high conductivity reading in boiler water typically indicate?",
                options: ["Increased purity of water", "High levels of dissolved ions and potential for scaling", "Low pH levels", "Lower dissolved solids"],
                answer: "High levels of dissolved ions and potential for scaling"
            },
            {
                id: 12,
                question: "Which component is primarily responsible for scale prevention in thermal power plants?",
                options: ["Disinfectants", "Scale inhibitors", "Flocculants", "Coagulants"],
                answer: "Scale inhibitors"
            },
            {
                id: 13,
                question: "Why is water softening critical before it enters the boiler?",
                options: ["To increase dissolved oxygen", "To reduce hardness and prevent scaling", "To increase water pH", "To add dissolved solids"],
                answer: "To reduce hardness and prevent scaling"
            },
            {
                id: 14,
                question: "What process utilizes chemical precipitation to remove heavy metals and specific contaminants in wastewater treatment?",
                options: ["Filtration", "Sedimentation", "Physical-chemical treatment", "Ion exchange"],
                answer: "Physical-chemical treatment"
            },
            {
                id: 15,
                question: "Which element’s presence is closely monitored in boiler feedwater to prevent embrittlement?",
                options: ["Sodium", "Sulfur", "Oxygen", "Chloride"],
                answer: "Chloride"
            },
            {
                id: 16,
                question: "What kind of system is typically employed to automatically control chemical dosing in water treatment?",
                options: ["Pressure control system", "Temperature control system", "Automated control system", "Cooling system"],
                answer: "Automated control system"
            },
            {
                id: 17,
                question: "Why is turbidity monitoring essential in thermal power plants’ water treatment?",
                options: ["To track microbial growth", "To detect the presence of suspended particles", "To control pH levels", "To reduce conductivity"],
                answer: "To detect the presence of suspended particles"
            },
            {
                id: 18,
                question: "What is a key reason for using ultraviolet (UV) irradiation in water treatment?",
                options: ["To increase pH levels", "To kill harmful microorganisms", "To reduce dissolved solids", "To stabilize water temperature"],
                answer: "To kill harmful microorganisms"
            },
            {
                id: 19,
                question: "In cooling towers, which issue is NOT directly addressed by pH control?",
                options: ["Microbial growth", "Scale formation", "Corrosion", "Decreased water hardness"],
                answer: "Decreased water hardness"
            },
            {
                id: 20,
                question: "What is the role of deaerators in thermal power plants?",
                options: ["To filter impurities", "To remove dissolved oxygen and prevent corrosion", "To increase boiler feedwater pH", "To promote biological growth"],
                answer: "To remove dissolved oxygen and prevent corrosion"
            },
            {
                id: 21,
                question: "Which process is crucial to ensure that no scaling agents pass through into the boiler feedwater system?",
                options: ["Reverse osmosis", "Coagulation", "Deaeration", "Chlorination"],
                answer: "Reverse osmosis"
            },
            {
                id: 22,
                question: "What chemical reaction forms the basis of the ion exchange softening process?",
                options: ["Acid-base reaction", "Substitution of calcium and magnesium ions with sodium ions", "Hydrolysis reaction", "Oxidation reaction"],
                answer: "Substitution of calcium and magnesium ions with sodium ions"
            },
            {
                id: 23,
                question: "Which type of microorganisms are commonly associated with biofouling in water systems?",
                options: ["Viruses", "Algae and bacteria", "Fungi only", "Parasitic worms"],
                answer: "Algae and bacteria"
            },
            {
                id: 24,
                question: "Which is a common additive for passivating metal surfaces in boilers?",
                options: ["Sulfuric acid", "Sodium phosphate", "Ammonia", "Chlorine"],
                answer: "Sodium phosphate"
            },
            {
                id: 25,
                question: "What is the main purpose of environmental impact assessments for thermal power plants?",
                options: ["To evaluate economic feasibility", "To assess potential environmental effects and propose mitigations", "To reduce the plant's water usage", "To increase fuel efficiency"],
                answer: "To assess potential environmental effects and propose mitigations"
            },
            {
                id: 26,
                question: "How does activated sludge function in biological wastewater treatment?",
                options: ["By filtering out dissolved solids", "By providing microorganisms to degrade organic pollutants", "By adding dissolved oxygen to water", "By increasing water conductivity"],
                answer: "By providing microorganisms to degrade organic pollutants"
            },
            {
                id: 27,
                question: "Which is the primary purpose of pH adjustment in water treatment processes?",
                options: ["To increase water hardness", "To ensure compatibility with treatment chemicals and prevent corrosion", "To remove suspended solids", "To decrease water flow"],
                answer: "To ensure compatibility with treatment chemicals and prevent corrosion"
            },
            {
                id: 28,
                question: "What key function does data analysis provide in water quality monitoring systems?",
                options: ["Immediate removal of contaminants", "Predictive maintenance and operational adjustments", "Increase of water hardness", "Decrease of pH fluctuations"],
                answer: "Predictive maintenance and operational adjustments"
            },
            {
                id: 29,
                question: "In which water treatment step are sand or multimedia filters typically used?",
                options: ["Disinfection", "Filtration after sedimentation", "Softening", "Coagulation"],
                answer: "Filtration after sedimentation"
            },
            {
                id: 30,
                question: "What is the role of scale inhibitors in water treatment?",
                options: ["To neutralize pH levels", "To interfere with crystallization of minerals and prevent deposit formation", "To lower dissolved oxygen levels", "To remove suspended particles"],
                answer: "To interfere with crystallization of minerals and prevent deposit formation"
            }
        ]
    },
    "turbine-operation": {
          basic: [
            {
              id: 1,
              question: "Which of the following is not a common type of turbine?",
              options: ["Steam", "Gas", "Hydroelectric", "Nuclear"],
              answer: "Nuclear"
            },
            {
              id: 2,
              question: "What is the primary function of turbine blades?",
              options: ["Generate electricity", "Convert fluid energy into rotational energy", "Regulate voltage", "Cool the system"],
              answer: "Convert fluid energy into rotational energy"
            },
            {
              id: 3,
              question: "Which component houses the windings where electrical current is induced?",
              options: ["Rotor", "Stator", "Exciter", "Shaft"],
              answer: "Stator"
            },
            {
              id: 4,
              question: "Turbine operation relies on which fundamental principle?",
              options: ["Energy conversion", "Voltage regulation", "Excitation", "Load balancing"],
              answer: "Energy conversion"
            },
            {
              id: 5,
              question: "Which parameter is not critical in turbine operation?",
              options: ["Temperature", "Pressure", "Flow rate", "Magnetic polarity"],
              answer: "Magnetic polarity"
            },
            {
              id: 6,
              question: "What influences rotor dynamics?",
              options: ["Voltage", "Exciter size", "Blade shape and shaft dynamics", "Cooling system"],
              answer: "Blade shape and shaft dynamics"
            },
            {
              id: 7,
              question: "What is the function of the exciter in a generator?",
              options: ["Induce current in the stator", "Provide DC to the rotor", "Synchronize frequency", "Monitor temperature"],
              answer: "Provide DC to the rotor"
            },
            {
              id: 8,
              question: "The rotor in a generator is responsible for?",
              options: ["Generating the magnetic field", "Inducing voltage in the stator", "Maintaining temperature", "Voltage regulation"],
              answer: "Generating the magnetic field"
            },
            {
              id: 9,
              question: "What provides the mechanical input to the generator?",
              options: ["Exciter", "Turbine shaft rotation", "Cooling system", "Stator windings"],
              answer: "Turbine shaft rotation"
            },
            {
              id: 10,
              question: "Electrical current is induced in which part of the generator?",
              options: ["Rotor", "Stator windings", "Exciter", "Shaft"],
              answer: "Stator windings"
            },
            {
              id: 11,
              question: "Turbine generators typically synchronize to a grid frequency of:",
              options: ["40 Hz", "45 Hz", "50 or 60 Hz", "70 Hz"],
              answer: "50 or 60 Hz"
            },
            {
              id: 12,
              question: "What is essential for seamless integration with the power grid?",
              options: ["Phase alignment", "Cooling system", "Blade optimization", "Condition monitoring"],
              answer: "Phase alignment"
            },
            {
              id: 13,
              question: "Which is a key focus of operational control in turbines?",
              options: ["Temperature monitoring", "Voltage alignment", "Rotor lubrication", "Load switching"],
              answer: "Temperature monitoring"
            },
            {
              id: 14,
              question: "Excessive vibrations in turbine systems indicate the need for:",
              options: ["Vibration analysis", "Frequency regulation", "Voltage regulation", "Thermodynamic recalibration"],
              answer: "Vibration analysis"
            },
            {
              id: 15,
              question: "Which of the following is not a strategy for optimizing turbine efficiency?",
              options: ["Real-time monitoring", "Preventive maintenance", "Increasing rotor size indefinitely", "Process improvements"],
              answer: "Increasing rotor size indefinitely"
            },
            {
              id: 16,
              question: "Preventive maintenance includes:",
              options: ["Regular inspections", "Ignoring minor issues", "Reducing monitoring activities", "Increasing operational load"],
              answer: "Regular inspections"
            },
            {
              id: 17,
              question: "Condition monitoring uses advanced sensors for:",
              options: ["Voltage regulation", "Early problem detection", "Phase synchronization", "Fluid dynamics"],
              answer: "Early problem detection"
            },
            {
              id: 18,
              question: "Troubleshooting protocols in turbine systems should be:",
              options: ["Structured and systematic", "Casual and unscheduled", "Reactive only to failure", "Minimally detailed"],
              answer: "Structured and systematic"
            },
            {
              id: 19,
              question: "Efficiency improvements in modern turbines can reach up to:",
              options: ["10%", "15%", "25%", "40%"],
              answer: "25%"
            },
            {
              id: 20,
              question: "Which advancement contributes to a 75% reduction in emissions?",
              options: ["Enhanced blade design", "Improved lubrication systems", "Carbon capture technologies", "Increased rotor speed"],
              answer: "Carbon capture technologies"
            },
            {
              id: 21,
              question: "Hydroelectric turbines primarily utilize:",
              options: ["Kinetic energy", "Potential energy", "Magnetic energy", "Chemical energy"],
              answer: "Potential energy"
            },
            {
              id: 22,
              question: "Which process ensures generator voltage stability?",
              options: ["Voltage regulation", "Rotor balancing", "Blade realignment", "Pressure adjustment"],
              answer: "Voltage regulation"
            },
            {
              id: 23,
              question: "High temperatures in a turbine system primarily require:",
              options: ["Vibration analysis", "Cooling systems", "Magnetic field adjustment", "Voltage increase"],
              answer: "Cooling systems"
            },
            {
              id: 24,
              question: "The main advantage of flexible turbine operations is:",
              options: ["Adaptation to variable load demands", "Reduced maintenance", "Decreased efficiency", "Increased downtime"],
              answer: "Adaptation to variable load demands"
            },
            {
              id: 25,
              question: "What drives up to 25% gains in turbine efficiency?",
              options: ["Advanced materials and aerodynamics", "Random testing", "Generator cooling", "Reduced inspections"],
              answer: "Advanced materials and aerodynamics"
            },
            {
              id: 26,
              question: "Which of the following is a key aspect of thermodynamic principles in turbine operation?",
              options: ["Vibration analysis", "Temperature and pressure management", "Excitation control", "Phase synchronization"],
              answer: "Temperature and pressure management"
            },
            {
              id: 27,
              question: "The primary purpose of a turbine's casing is to:",
              options: ["Enclose and support internal components", "Generate magnetic fields", "Induce electrical current", "Control fluid temperature"],
              answer: "Enclose and support internal components"
            },
            {
              id: 28,
              question: "What role does real-time monitoring play in turbine operations?",
              options: ["Reducing load demand", "Identifying performance issues as they occur", "Increasing unplanned downtime", "Limiting operational efficiency"],
              answer: "Identifying performance issues as they occur"
            },
            {
              id: 29,
              question: "In turbine-generator synchronization, what happens if frequency matching fails?",
              options: ["Increased energy output", "Reduced vibration", "System instability or grid failure", "Enhanced generator performance"],
              answer: "System instability or grid failure"
            },
            {
              id: 30,
              question: "Which system component is essential for managing heat in a turbine generator?",
              options: ["Exciter", "Cooling system", "Stator windings", "Phase aligner"],
              answer: "Cooling system"
            }
          ],
    },
    "esp": {
      basic: [
        {
          id: 1,
          question: "What is the primary purpose of an Electrostatic Precipitator (ESP)?",
          options: ["Generate electricity", "Remove particulate matter from exhaust gases", "Control turbine speed", "Increase combustion efficiency"],
          answer: "Remove particulate matter from exhaust gases"
        },
        {
          id: 2,
          question: "ESPs are most commonly used in which type of power plants?",
          options: ["Nuclear", "Coal-fired", "Solar", "Wind"],
          answer: "Coal-fired"
        },
        {
          id: 3,
          question: "Which of the following pollutants does an ESP help reduce?",
          options: ["Carbon dioxide", "Soot and ash", "Methane", "Nitrogen oxides"],
          answer: "Soot and ash"
        },
        {
          id: 4,
          question: "Why are ESPs critical for public health?",
          options: ["They increase power output.", "They reduce harmful particulate emissions.", "They lower fuel consumption.", "They cool the exhaust gases."],
          answer: "They reduce harmful particulate emissions."
        },
        {
          id: 5,
          question: "Which component of an ESP creates the electrostatic charge?",
          options: ["Collecting plates", "Discharge electrodes", "Rapping mechanism", "Power supply"],
          answer: "Discharge electrodes"
        },
        {
          id: 6,
          question: "What is the function of the collecting plates in an ESP?",
          options: ["Generate high voltage", "Collect charged particles", "Shake off dust", "Ionize gases"],
          answer: "Collect charged particles"
        },
        {
          id: 7,
          question: "The rapping mechanism in an ESP is used to:",
          options: ["Dislodge accumulated dust from collecting plates", "Provide high voltage", "Ionize the exhaust gases", "Measure gas flow"],
          answer: "Dislodge accumulated dust from collecting plates"
        },
        {
          id: 8,
          question: "What provides the high voltage in an ESP?",
          options: ["Rapping mechanism", "Power supply", "Collecting plates", "Exhaust fan"],
          answer: "Power supply"
        },
        {
          id: 9,
          question: "What is the first step in the ESP process?",
          options: ["Ionization of gases", "Collection of particles", "Rapping action", "Clean gas exit"],
          answer: "Ionization of gases"
        },
        {
          id: 10,
          question: "What happens to the dust particles after the rapping mechanism is activated?",
          options: ["They remain on the plates", "They are ionized again", "They fall into a hopper", "They are expelled into the atmosphere"],
          answer: "They fall into a hopper"
        },
        {
          id: 11,
          question: "Which of the following describes the final step in the ESP process?",
          options: ["Dust collection", "Clean gas exit", "Particle ionization", "Voltage regulation"],
          answer: "Clean gas exit"
        },
        {
          id: 12,
          question: "Which type of ESP is best for handling dry particulate matter?",
          options: ["Dry ESP", "Wet ESP", "Tubular ESP", "Vertical ESP"],
          answer: "Dry ESP"
        },
        {
          id: 13,
          question: "In which applications are wet ESPs typically used?",
          options: ["Handling dry ash", "Removing moist or sticky particulates", "Filtering liquid waste", "Controlling gaseous emissions"],
          answer: "Removing moist or sticky particulates"
        },
        {
          id: 14,
          question: "Which ESP design is most common in power plants?",
          options: ["Tubular type", "Plate type", "Wet type", "Horizontal type"],
          answer: "Plate type"
        },
        {
          id: 15,
          question: "What percentage of particulate matter can ESPs typically remove from flue gases?",
          options: ["50%", "75%", "Over 99%", "90%"],
          answer: "Over 99%"
        },
        {
          id: 16,
          question: "One of the cost-effective benefits of ESPs is their:",
          options: ["High installation cost", "Low operating and maintenance costs", "Complex operation", "High fuel usage"],
          answer: "Low operating and maintenance costs"
        },
        {
          id: 17,
          question: "How do ESPs help power plants comply with regulations?",
          options: ["By increasing energy output", "By reducing particulate emissions", "By cooling exhaust gases", "By improving fuel efficiency"],
          answer: "By reducing particulate emissions"
        },
        {
          id: 18,
          question: "The rapping mechanism ensures:",
          options: ["Collecting plates do not become overloaded with dust", "High voltage is maintained", "Exhaust gases are cooled", "Voltage supply is regulated"],
          answer: "Collecting plates do not become overloaded with dust"
        },
        {
          id: 19,
          question: "What happens to the dislodged dust in an ESP?",
          options: ["It re-enters the exhaust stream", "It is collected in a hopper", "It is ionized again", "It is vented into the air"],
          answer: "It is collected in a hopper"
        },
        {
          id: 20,
          question: "Which component should be regularly checked to ensure proper ionization?",
          options: ["Rapping mechanism", "Discharge electrodes", "Collecting plates", "Hopper"],
          answer: "Discharge electrodes"
        },
        {
          id: 21,
          question: "Regular cleaning of which part is crucial to maintaining ESP efficiency?",
          options: ["Collecting plates", "Power supply", "Exhaust ducts", "Gas outlets"],
          answer: "Collecting plates"
        },
        {
          id: 22,
          question: "What system component should be monitored for continuous power delivery?",
          options: ["Rapping mechanism", "Power supply", "Hopper", "Exhaust outlet"],
          answer: "Power supply"
        },
        {
          id: 23,
          question: "A power supply failure in an ESP would primarily affect:",
          options: ["Dust collection", "Electrostatic field generation", "Rapping frequency", "Gas flow rate"],
          answer: "Electrostatic field generation"
        },
        {
          id: 24,
          question: "Which issue can reduce ESP efficiency over time?",
          options: ["Increased gas flow", "Accumulated dust on components", "Frequent rapping", "Clean exhaust ducts"],
          answer: "Accumulated dust on components"
        },
        {
          id: 25,
          question: "What do continuous emission monitoring systems (CEMS) track?",
          options: ["Voltage levels", "Particulate emissions", "Rapping cycles", "Power output"],
          answer: "Particulate emissions"
        },
        {
          id: 26,
          question: "Why is compliance with emission regulations critical for power plants?",
          options: ["To increase output", "To avoid fines and operational shutdowns", "To reduce costs", "To enhance fuel efficiency"],
          answer: "To avoid fines and operational shutdowns"
        },
        {
          id: 27,
          question: "Which gas is typically cleaned using ESPs in coal-fired plants?",
          options: ["Flue gas", "Nitrogen gas", "Hydrogen gas", "Methane gas"],
          answer: "Flue gas"
        },
        {
          id: 28,
          question: "What type of particulate matter can ESPs effectively capture?",
          options: ["Gaseous pollutants", "Dust, ash, and soot", "Water vapor", "Volatile organic compounds"],
          answer: "Dust, ash, and soot"
        },
        {
          id: 29,
          question: "Which of the following is NOT a type of ESP?",
          options: ["Dry ESP", "Horizontal ESP", "Wet ESP", "Tubular ESP"],
          answer: "Horizontal ESP"
        },
        {
          id: 30,
          question: "What is a significant environmental benefit of using ESPs?",
          options: ["Promoting cleaner air", "Increasing plant efficiency", "Reducing power output", "Reducing water usage"],
          answer: "Promoting cleaner air"
        }
      ],
    },
      

    //Ferro Operations
    "furnace-operations": {
        basic: [
            {
                id: 1,
                question: "What is the primary purpose of a Submerged Arc Furnace (SAF)?",
                options: ["To cool metal", "To melt and refine metal", "To shape metal", "To polish metal"],
                answer: "To melt and refine metal"
            },
            {
                id: 2,
                question: "How does the SAF achieve high temperatures for smelting?",
                options: ["By using gas burners", "By electric arcs", "By sunlight", "By chemical reactions"],
                answer: "By electric arcs"
            },
            {
                id: 3,
                question: "Why is continuous operation important in SAFs?",
                options: ["For consistent production", "For color change", "For cooling purposes", "For storage capacity"],
                answer: "For consistent production"
            },
            {
                id: 4,
                question: "What materials are typically processed in an SAF?",
                options: ["Plastic", "Metal ores", "Wood", "Ceramic"],
                answer: "Metal ores"
            },
            {
                id: 5,
                question: "What is the main function of the furnace shell in an SAF?",
                options: ["To control temperature", "To contain the reaction zone", "To store raw materials", "To cool the furnace"],
                answer: "To contain the reaction zone"
            },
            {
                id: 6,
                question: "What material is commonly used for constructing the furnace shell?",
                options: ["Aluminum", "Glass", "Heavy-duty steel plates", "Plastic"],
                answer: "Heavy-duty steel plates"
            },
            {
                id: 7,
                question: "Where are electrodes positioned in the SAF?",
                options: ["Horizontally above the furnace", "Vertically, dipping into the molten bath", "Outside the furnace", "In storage tanks"],
                answer: "Vertically, dipping into the molten bath"
            },
            {
                id: 8,
                question: "What is the role of electrodes in SAF operations?",
                options: ["To provide cooling", "To create electric arcs for heating", "To store materials", "To provide insulation"],
                answer: "To create electric arcs for heating"
            },
            {
                id: 9,
                question: "Why are cooling systems used in SAFs?",
                options: ["To lower production speed", "To control slag formation", "To manage intense heat", "To reduce electricity usage"],
                answer: "To manage intense heat"
            },
            {
                id: 10,
                question: "What cooling method is typically used in SAFs?",
                options: ["Air cooling", "Chemical cooling", "Water cooling", "None of the above"],
                answer: "Water cooling"
            },
            {
                id: 11,
                question: "What does size reduction in raw material preparation involve?",
                options: ["Increasing material size", "Measuring weight", "Crushing and sizing", "Painting materials"],
                answer: "Crushing and sizing"
            },
            {
                id: 12,
                question: "Why is chemical analysis conducted on SAF raw materials?",
                options: ["To increase production speed", "To monitor material proportions", "To ensure correct alloy composition", "To improve color of metal"],
                answer: "To ensure correct alloy composition"
            },
            {
                id: 13,
                question: "What is the purpose of blending raw materials?",
                options: ["To change material color", "To mix in correct proportions", "To cool down materials", "To make materials harder"],
                answer: "To mix in correct proportions"
            },
            {
                id: 14,
                question: "Why is moisture control important in SAF operations?",
                options: ["To prevent overheating", "To reduce chemical reactions", "To avoid disruptions in melting", "To change metal hardness"],
                answer: "To avoid disruptions in melting"
            },
            {
                id: 15,
                question: "How are raw materials loaded into the SAF?",
                options: ["By hand", "Using charging systems like hoppers or cranes", "Using conveyor belts", "Manually by shovels"],
                answer: "Using charging systems like hoppers or cranes"
            },
            {
                id: 16,
                question: "Why is monitoring feed rates important in SAFs?",
                options: ["To maintain temperature", "To prevent material loss", "To stabilize the melting process", "To increase speed"],
                answer: "To stabilize the melting process"
            },
            {
                id: 17,
                question: "What is one main reaction that occurs in SAFs?",
                options: ["Oxidation of metals", "Melting of slag only", "Reduction of metal oxides", "Cooling of metal"],
                answer: "Reduction of metal oxides"
            },
            {
                id: 18,
                question: "How does slag form in an SAF?",
                options: ["By melting water", "By separation of impurities", "By cooling molten metal", "By mixing with other metals"],
                answer: "By separation of impurities"
            },
            {
                id: 19,
                question: "Why is slag removal necessary?",
                options: ["To purify the molten metal", "To increase slag weight", "To change metal color", "To enhance cooling"],
                answer: "To purify the molten metal"
            },
            {
                id: 20,
                question: "What role does slag play in SAFs?",
                options: ["Insulates the furnace", "Protects molten metal from contaminants", "Reduces production speed", "Changes furnace temperature"],
                answer: "Protects molten metal from contaminants"
            },
            {
                id: 21,
                question: "What metals are commonly produced using SAFs?",
                options: ["Copper", "Iron and steel", "Aluminum", "Tin"],
                answer: "Iron and steel"
            },
            {
                id: 22,
                question: "What is the purpose of the electrical power supply in an SAF?",
                options: ["To provide light", "To generate the arc for melting", "To cool the electrodes", "To shape the metal"],
                answer: "To generate the arc for melting"
            },
            {
                id: 23,
                question: "At what voltage do SAF electrodes typically operate?",
                options: ["1,000 volts", "100,000 volts", "10 volts", "10,000 volts"],
                answer: "100,000 volts"
            },
            {
                id: 24,
                question: "What is the primary heat source in an SAF?",
                options: ["Gas burners", "Electric arcs", "Solar energy", "Steam"],
                answer: "Electric arcs"
            },
            {
                id: 25,
                question: "What happens to impurities during SAF operations?",
                options: ["They form slag", "They evaporate", "They solidify on the electrodes", "They enhance metal quality"],
                answer: "They form slag"
            },
            {
                id: 26,
                question: "What is the purpose of slag in metal production?",
                options: ["To protect the furnace shell", "To remove impurities", "To cool the metal", "To store raw materials"],
                answer: "To remove impurities"
            },
            {
                id: 27,
                question: "How is molten metal extracted from an SAF?",
                options: ["By ladles during metal tapping", "Through cooling systems", "By hand scooping", "Using cranes"],
                answer: "By ladles during metal tapping"
            },
            {
                id: 28,
                question: "What is metal tapping in SAF?",
                options: ["Cooling metal", "Extracting molten metal", "Mixing metals", "Removing electrodes"],
                answer: "Extracting molten metal"
            },
            {
                id: 29,
                question: "What type of lining is used in SAFs?",
                options: ["Plastic lining", "Refractory lining", "Steel lining", "Ceramic lining"],
                answer: "Refractory lining"
            },
            {
                id: 30,
                question: "Why is refractory lining used in SAFs?",
                options: ["To insulate the furnace and withstand high temperatures", "To increase metal strength", "To enhance chemical reactions", "To prevent melting"],
                answer: "To insulate the furnace and withstand high temperatures"
            }
        ],
        advanced: [
            {
                id: 1,
                question: "Which of the following factors primarily influences the rate of iron oxide reduction in a Submerged Arc Furnace?",
                options: ["Electrode voltage", "Temperature and chemical composition of the raw materials", "Size of the furnace shell", "Furnace cooling rate"],
                answer: "Temperature and chemical composition of the raw materials"
            },
            {
                id: 2,
                question: "What is the primary purpose of using reducing agents like carbon monoxide in the SAF?",
                options: ["To form slag", "To reduce iron oxides to metallic iron", "To improve electrode efficiency", "To stabilize molten metal"],
                answer: "To reduce iron oxides to metallic iron"
            },
            {
                id: 3,
                question: "In a submerged arc furnace, what role does the slag-metal equilibrium play in production?",
                options: ["It helps in the removal of impurities from the molten metal.", "It increases the energy consumption of the furnace.", "It improves the hardness of the slag.", "It decreases the melting point of the raw materials."],
                answer: "It helps in the removal of impurities from the molten metal."
            },
            {
                id: 4,
                question: "What is the main function of the fluxes added to the raw materials in the SAF process?",
                options: ["To increase the temperature of the furnace", "To promote slag formation and control its composition", "To prevent electrode erosion", "To enhance the alloying of metals"],
                answer: "To promote slag formation and control its composition"
            },
            {
                id: 5,
                question: "How does the electrode system contribute to the stability of the SAF operation?",
                options: ["By maintaining a constant temperature within the furnace", "By controlling the rate of slag formation", "By stabilizing the electric arc and ensuring efficient heat generation", "By acting as a physical barrier to molten metal"],
                answer: "By stabilizing the electric arc and ensuring efficient heat generation"
            },
            {
                id: 6,
                question: "What would happen if the voltage supplied to the electrodes were reduced in an SAF?",
                options: ["The electrodes would overheat", "The melting process would slow down, reducing efficiency", "The slag would become thicker and more viscous", "The temperature in the furnace would increase rapidly"],
                answer: "The melting process would slow down, reducing efficiency"
            },
            {
                id: 7,
                question: "Which of the following materials are most commonly used in the construction of SAF electrode holders?",
                options: ["Copper", "Water-cooled steel", "Magnesium oxide", "Ceramic"],
                answer: "Water-cooled steel"
            },
            {
                id: 8,
                question: "What is the significance of electrode cooling in SAF operations?",
                options: ["It prevents electrodes from disintegrating due to high temperatures", "It reduces the amount of electricity required", "It helps in increasing the slag volume", "It accelerates the melting rate of the raw materials"],
                answer: "It prevents electrodes from disintegrating due to high temperatures"
            },
            {
                id: 9,
                question: "Why is it important to control the chemical composition of slag in SAFs?",
                options: ["To prevent overheating of the furnace", "To ensure impurities are effectively separated from the molten metal", "To increase the metal yield", "To reduce the amount of energy consumed"],
                answer: "To ensure impurities are effectively separated from the molten metal"
            },
            {
                id: 10,
                question: "What could be a potential consequence of excessive slag buildup in an SAF?",
                options: ["Increased efficiency of the melting process", "Reduction in the temperature of the furnace", "Impurities remaining in the molten metal, affecting its quality", "Decreased molten metal production rate"],
                answer: "Impurities remaining in the molten metal, affecting its quality"
            },
            {
                id: 11,
                question: "In the context of SAFs, what is the effect of increasing the temperature beyond optimal levels?",
                options: ["It may increase energy efficiency", "It may lead to excessive wear of the refractory lining", "It will cause the slag to form at a faster rate", "It improves the quality of the slag"],
                answer: "It may lead to excessive wear of the refractory lining"
            },
            {
                id: 12,
                question: "What is the primary function of the refractory lining in an SAF?",
                options: ["To reduce the melting point of raw materials", "To insulate the furnace and protect it from thermal and chemical damage", "To prevent the formation of slag", "To improve the conductivity of the furnace"],
                answer: "To insulate the furnace and protect it from thermal and chemical damage"
            },
            {
                id: 13,
                question: "How does the refractory material in SAFs protect the furnace structure from molten metal?",
                options: ["By lowering the temperature of the molten metal", "By preventing direct contact between molten metal and the furnace shell", "By forming a barrier to prevent chemical reactions", "By cooling the furnace more efficiently"],
                answer: "By preventing direct contact between molten metal and the furnace shell"
            },
            {
                id: 14,
                question: "What is the main purpose of tapping in SAF operations?",
                options: ["To remove excess slag", "To extract molten metal for further processing", "To cool down the furnace", "To adjust the electrode position"],
                answer: "To extract molten metal for further processing"
            },
            {
                id: 15,
                question: "How does the electrode descent affect the SAF melting process?",
                options: ["It increases the temperature in the furnace", "It establishes the electric arc needed for melting the charge material", "It increases the rate of slag formation", "It improves material flow within the furnace"],
                answer: "It establishes the electric arc needed for melting the charge material"
            },
            {
                id: 16,
                question: "What is the role of the tapping hole in an SAF?",
                options: ["To allow the addition of raw materials", "To control the electrode voltage", "To remove slag and molten metal from the furnace", "To monitor furnace temperature"],
                answer: "To remove slag and molten metal from the furnace"
            },
            {
                id: 17,
                question: "What is a key consideration when determining the rate at which raw materials are charged into an SAF?",
                options: ["The temperature of the furnace", "The chemical composition of the materials", "The flow rate of molten metal", "The speed of electrode descent"],
                answer: "The chemical composition of the materials"
            },
            {
                id: 18,
                question: "What is the purpose of slag analysis during the tapping process?",
                options: ["To determine the temperature of the molten metal", "To optimize the composition and quality of the metal", "To measure the rate of electrode consumption", "To monitor the rate of raw material charging"],
                answer: "To optimize the composition and quality of the metal"
            },
            {
                id: 19,
                question: "Which of the following is most critical for the successful operation of an SAF?",
                options: ["A high-quality raw material feed", "Constant cooling of the furnace shell", "Frequent electrode replacements", "Low voltage supply to the furnace"],
                answer: "A high-quality raw material feed"
            },
            {
                id: 20,
                question: "How does automated control in SAFs optimize the melting process?",
                options: ["By reducing the need for manual supervision", "By maintaining optimal temperature, power, and material flow", "By increasing the electrode consumption rate", "By cooling the furnace rapidly"],
                answer: "By maintaining optimal temperature, power, and material flow"
            },
            {
                id: 21,
                question: "What is one key challenge when maintaining electrodes in SAFs?",
                options: ["Ensuring they stay cool enough to prevent cracking", "Preventing excessive wear due to high temperatures and chemical reactions", "Ensuring they are not submerged in molten metal", "Preventing them from producing electric arcs"],
                answer: "Preventing excessive wear due to high temperatures and chemical reactions"
            },
            {
                id: 22,
                question: "Why is real-time monitoring of furnace conditions important in SAFs?",
                options: ["To decrease energy consumption", "To predict and prevent equipment failure", "To improve the quality of slag", "To increase electrode life"],
                answer: "To predict and prevent equipment failure"
            },
            {
                id: 23,
                question: "What type of control system is typically used in modern SAFs for process optimization?",
                options: ["Manual control systems", "Feedback-based automated control systems", "Batch-process control systems", "Water-cooling control systems"],
                answer: "Feedback-based automated control systems"
            },
            {
                id: 24,
                question: "How can predictive maintenance in SAFs help reduce operational downtime?",
                options: ["By forecasting and addressing potential equipment issues before they occur", "By reducing the overall production speed", "By continuously replacing worn electrodes", "By removing slag more frequently"],
                answer: "By forecasting and addressing potential equipment issues before they occur"
            },
            {
                id: 25,
                question: "What is the impact of moisture content in raw materials on the SAF operation?",
                options: ["It can increase the efficiency of the furnace", "It can interfere with the melting process and create safety hazards", "It can improve the quality of the slag", "It has no significant impact"],
                answer: "It can interfere with the melting process and create safety hazards"
            },
            {
                id: 26,
                question: "Which parameter is monitored to control the energy efficiency in an SAF?",
                options: ["Electrode consumption", "Temperature", "Power consumption", "Slag composition"],
                answer: "Power consumption"
            },
            {
                id: 27,
                question: "How does the slag’s viscosity impact SAF operations?",
                options: ["It influences the rate of metal flow during tapping", "It prevents impurities from entering the furnace", "It determines the rate of electrode erosion", "It has no impact on furnace operation"],
                answer: "It influences the rate of metal flow during tapping"
            },
            {
                id: 28,
                question: "What is the purpose of slag foaming in some SAF processes?",
                options: ["To stabilize the arc and reduce electrode consumption", "To increase the cooling rate of the furnace", "To prevent slag formation", "To reduce the metal yield"],
                answer: "To stabilize the arc and reduce electrode consumption"
            },
            {
                id: 29,
                question: "What does an increase in electrode consumption typically indicate in SAF operations?",
                options: ["Higher energy efficiency", "Excessive wear due to operational issues", "Improved furnace stability", "Better slag quality"],
                answer: "Excessive wear due to operational issues"
            },
            {
                id: 30,
                question: "What is the purpose of raw material preheating in SAFs?",
                options: ["To improve furnace cooling", "To reduce the moisture content and save energy", "To enhance slag quality", "To speed up slag formation"],
                answer: "To reduce the moisture content and save energy"
            }
        ]
    },
    "baghouse-operations": {
        basic: [
            {
                id: 1,
                question: "What are ferro alloys primarily combined with?",
                options: ["Carbon", "Iron", "Aluminum", "Copper"],
                answer: "Iron"
            },
            {
                id: 2,
                question: "Which industry uses ferro alloys extensively?",
                options: ["Textile", "Automotive", "Steel production", "Agriculture"],
                answer: "Steel production"
            },
            {
                id: 3,
                question: "What is a major driving force for the ferro alloys market?",
                options: ["Decline in construction projects", "High demand for plastics", "Growth of metal-intensive industries", "Shift to renewable energy sources"],
                answer: "Growth of metal-intensive industries"
            },
            {
                id: 4,
                question: "What is the primary role of a bag house in ferro alloys production?",
                options: ["Cooling molten alloys", "Filtering hazardous particulates and emissions", "Storing raw materials", "Recycling waste gases"],
                answer: "Filtering hazardous particulates and emissions"
            },
            {
                id: 5,
                question: "How does a bag house contribute to worker safety?",
                options: ["By reducing noise levels", "By filtering pollutants from the air", "By improving structural integrity", "By controlling furnace temperature"],
                answer: "By filtering pollutants from the air"
            },
            {
                id: 6,
                question: "What compliance does a bag house ensure?",
                options: ["Financial regulations", "Environmental regulations", "Trade agreements", "Patent laws"],
                answer: "Environmental regulations"
            },
            {
                id: 7,
                question: "What is the function of fabric filters in a bag house?",
                options: ["Cooling gases", "Capturing particulate matter", "Increasing gas pressure", "Monitoring emissions"],
                answer: "Capturing particulate matter"
            },
            {
                id: 8,
                question: "What component collects particulates after filtration?",
                options: ["Hopper", "Inlet", "Outlet", "Cleaning mechanism"],
                answer: "Hopper"
            },
            {
                id: 9,
                question: "What cleaning mechanism is commonly used in bag houses?",
                options: ["Manual scrubbing", "Pulse-jet cleaning", "Heat treatment", "Air drying"],
                answer: "Pulse-jet cleaning"
            },
            {
                id: 10,
                question: "What should be done to identify potential issues in a bag house early?",
                options: ["Conduct regular inspections", "Increase gas flow", "Reduce cleaning frequency", "Use smaller filters"],
                answer: "Conduct regular inspections"
            },
            {
                id: 11,
                question: "Why is preventive maintenance important for a bag house?",
                options: ["To reduce energy efficiency", "To ensure continuous operation and avoid failures", "To eliminate emissions monitoring", "To shorten filter lifespan"],
                answer: "To ensure continuous operation and avoid failures"
            },
            {
                id: 12,
                question: "Which parameter should be continuously monitored in a bag house?",
                options: ["Emissions levels", "Noise levels", "Bag color", "Gas temperature only"],
                answer: "Emissions levels"
            },
            {
                id: 13,
                question: "When should filter bags be replaced?",
                options: ["Only when a failure occurs", "At recommended intervals based on usage and condition", "Every two weeks", "After every cleaning cycle"],
                answer: "At recommended intervals based on usage and condition"
            },
            {
                id: 14,
                question: "What is a key goal of optimizing bag house performance?",
                options: ["Reducing cleaning frequency", "Maximizing dust collection efficiency", "Minimizing regulatory compliance", "Eliminating hoppers"],
                answer: "Maximizing dust collection efficiency"
            },
            {
                id: 15,
                question: "What energy savings can a well-maintained bag house achieve?",
                options: ["10%", "25%", "45%", "70%"],
                answer: "45%"
            },
            {
                id: 16,
                question: "What factor is critical for maintaining high dust collection efficiency?",
                options: ["Smaller bag size", "Continuous emissions monitoring", "Slower air flow", "Irregular maintenance"],
                answer: "Continuous emissions monitoring"
            },
            {
                id: 17,
                question: "What is the purpose of continuous emissions monitoring?",
                options: ["To reduce energy consumption", "To ensure pollutants are within regulatory limits", "To increase dust generation", "To simplify filter replacement"],
                answer: "To ensure pollutants are within regulatory limits"
            },
            {
                id: 18,
                question: "What should emissions data be used for?",
                options: ["Discarding after recording", "Reporting compliance to regulators", "Only internal audits", "Increasing emissions"],
                answer: "Reporting compliance to regulators"
            },
            {
                id: 19,
                question: "What does an environmental compliance audit verify?",
                options: ["Worker productivity", "Bag house emissions controls", "Furnace efficiency", "Material storage processes"],
                answer: "Bag house emissions controls"
            },
            {
                id: 20,
                question: "What action should be taken based on emissions data?",
                options: ["Ignore minor increases", "Adjust bag house operations proactively", "Increase gas pressure", "Replace all components immediately"],
                answer: "Adjust bag house operations proactively"
            },
            {
                id: 21,
                question: "How do bag houses promote sustainability in ferro alloy production?",
                options: ["By increasing emissions", "By mitigating environmental impact", "By eliminating waste completely", "By reducing market demand"],
                answer: "By mitigating environmental impact"
            },
            {
                id: 22,
                question: "Which practice reduces the carbon footprint of a bag house?",
                options: ["Overusing cleaning mechanisms", "Optimizing bag house operations", "Increasing filter size excessively", "Disabling monitoring systems"],
                answer: "Optimizing bag house operations"
            },
            {
                id: 23,
                question: "What can cause a bag house to fail?",
                options: ["Continuous operation", "Poor maintenance practices", "Low dust levels", "Over-cleaning"],
                answer: "Poor maintenance practices"
            },
            {
                id: 24,
                question: "What is the result of ignoring a high-pressure drop in a bag house?",
                options: ["Increased energy efficiency", "Decreased filtration efficiency", "Improved compliance", "Better cleaning cycles"],
                answer: "Decreased filtration efficiency"
            },
            {
                id: 25,
                question: "How can emissions compliance failures be avoided?",
                options: ["Skipping regular cleaning", "Conducting proactive maintenance", "Ignoring emission data", "Disabling monitoring systems"],
                answer: "Conducting proactive maintenance"
            },
            {
                id: 26,
                question: "What is a critical factor in effective bag house operation?",
                options: ["Improper bag size selection", "Routine maintenance and optimization", "Increasing dust particle size", "Ignoring pressure drops"],
                answer: "Routine maintenance and optimization"
            },
            {
                id: 27,
                question: "How should operational data be analyzed?",
                options: ["To find ways to skip maintenance", "To identify optimization strategies", "To ignore emissions", "To over-report cleaning cycles"],
                answer: "To identify optimization strategies"
            },
            {
                id: 28,
                question: "What best practice ensures effective bag cleaning?",
                options: ["Skipping cleaning cycles", "Monitoring bag cleaning cycles", "Avoiding maintenance audits", "Using fixed pressure levels"],
                answer: "Monitoring bag cleaning cycles"
            },
            {
                id: 29,
                question: "What is the benefit of reviewing case studies on bag houses?",
                options: ["Reducing monitoring efforts", "Learning from successful implementations", "Ignoring best practices", "Replacing current practices entirely"],
                answer: "Learning from successful implementations"
            },
            {
                id: 30,
                question: "What can benchmarking against high-performing facilities uncover?",
                options: ["Ways to reduce filtration", "Opportunities to improve efficiency", "Reasons to delay inspections", "Benefits of skipping compliance"],
                answer: "Opportunities to improve efficiency"
            }
        ],
        advanced: [],
    },
    "rmhs-operations": {
        basic: [
            {
                id: 1,
                question: "What is the primary raw material in ferroalloy production?",
                options: ["Limestone", "Coke", "Iron Ore", "Manganese Ore"],
                answer: "Iron Ore"
            },
            {
                id: 2,
                question: "What is the role of coke in ferroalloy production?",
                options: ["It acts as a flux.", "It removes impurities.", "It provides carbon for chemical reactions.", "It is used to cool the furnace."],
                answer: "It provides carbon for chemical reactions."
            },
            {
                id: 3,
                question: "Why is limestone used in ferroalloy production?",
                options: ["To increase iron content", "To enhance strength", "To remove impurities as slag", "To reduce cost"],
                answer: "To remove impurities as slag"
            },
            {
                id: 4,
                question: "What does accurate batching ensure?",
                options: ["Faster processing", "Consistent product quality", "Lower energy usage only", "Less operator involvement"],
                answer: "Consistent product quality"
            },
            {
                id: 5,
                question: "How does accurate batching optimize costs?",
                options: ["By increasing waste", "By reducing raw material usage", "By eliminating process automation", "By avoiding blending"],
                answer: "By reducing raw material usage"
            },
            {
                id: 6,
                question: "What is the effect of accurate batching on product yield?",
                options: ["Maximizes yield", "Minimizes yield", "Makes no difference", "Creates unpredictable results"],
                answer: "Maximizes yield"
            },
            {
                id: 7,
                question: "How are raw materials delivered to the plant?",
                options: ["Pipelines", "Trucks or railcars", "Manual carriers", "Airlifting systems"],
                answer: "Trucks or railcars"
            },
            {
                id: 8,
                question: "What is the function of storage bunkers in RMHS?",
                options: ["To dispose of waste materials", "To store raw materials for continuous supply", "To homogenize the raw materials", "To cool the materials"],
                answer: "To store raw materials for continuous supply"
            },
            {
                id: 9,
                question: "Why are multiple compartments in bunkers useful?",
                options: ["To store mixed batches", "To segregate different raw materials", "To enhance visual inspection", "To avoid mechanical mixing"],
                answer: "To segregate different raw materials"
            },
            {
                id: 10,
                question: "What do weigh feeders do in the batching process?",
                options: ["Cool raw materials", "Adjust furnace temperature", "Control material weight precisely", "Replace manual feeding"],
                answer: "Control material weight precisely"
            },
            {
                id: 11,
                question: "Which weighing system provides real-time measurements?",
                options: ["Load cells", "Thermal sensors", "Pressure gauges", "Mechanical springs"],
                answer: "Load cells"
            },
            {
                id: 12,
                question: "How do weigh feeders maintain batch accuracy?",
                options: ["By constant manual adjustments", "By monitoring and adjusting material flow rates", "By homogenizing the materials", "By replacing mechanical mixing"],
                answer: "By monitoring and adjusting material flow rates"
            },
            {
                id: 13,
                question: "What is the first step in batch formulation?",
                options: ["Mixing the materials", "Performing chemical analysis", "Storing the materials in bunkers", "Starting the furnace"],
                answer: "Performing chemical analysis"
            },
            {
                id: 14,
                question: "Why is chemical composition analysis crucial?",
                options: ["To increase production speed", "To ensure the final alloy meets specifications", "To reduce furnace usage", "To replace mechanical systems"],
                answer: "To ensure the final alloy meets specifications"
            },
            {
                id: 15,
                question: "What does batch formulation specify?",
                options: ["The furnace temperature", "The amount of each raw material", "The type of bunker design", "The cooling process"],
                answer: "The amount of each raw material"
            },
            {
                id: 16,
                question: "What is the purpose of batch homogenization?",
                options: ["To improve furnace capacity", "To ensure consistent chemical composition", "To reduce blending costs", "To eliminate quality control steps"],
                answer: "To ensure consistent chemical composition"
            },
            {
                id: 17,
                question: "Which equipment is used for mechanical mixing?",
                options: ["Load cells", "Rotating drums or paddles", "Storage bunkers", "Conveyor belts"],
                answer: "Rotating drums or paddles"
            },
            {
                id: 18,
                question: "What happens after batch blending?",
                options: ["The batch is discarded.", "The batch is fed to the furnace.", "The batch is stored indefinitely.", "The batch is reheated."],
                answer: "The batch is fed to the furnace."
            },
            {
                id: 19,
                question: "What do automated batching systems manage?",
                options: ["Manual material handling", "Precise raw material delivery", "Unnecessary blending", "Furnace maintenance"],
                answer: "Precise raw material delivery"
            },
            {
                id: 20,
                question: "How do sensors improve batching accuracy?",
                options: ["By automating all furnace operations", "By monitoring raw material flow and weights", "By replacing bunkers", "By eliminating process calculations"],
                answer: "By monitoring raw material flow and weights"
            },
            {
                id: 21,
                question: "What do software algorithms optimize in RMHS?",
                options: ["Manual inspections", "Batch sizes and compositions", "Furnace cooling", "Worker operations"],
                answer: "Batch sizes and compositions"
            },
            {
                id: 22,
                question: "Which parameter is monitored during the batching process?",
                options: ["Worker schedules", "Furnace design", "Chemical composition", "Truck deliveries"],
                answer: "Chemical composition"
            },
            {
                id: 23,
                question: "How is final product quality ensured?",
                options: ["Regular quality checks and analysis", "Increasing furnace temperatures", "Reducing blending operations", "Ignoring chemical deviations"],
                answer: "Regular quality checks and analysis"
            },
            {
                id: 24,
                question: "What is a key safety measure for workers?",
                options: ["Wearing personal protective equipment (PPE)", "Avoiding regular inspections", "Increasing batching speed", "Ignoring dust control systems"],
                answer: "Wearing personal protective equipment (PPE)"
            },
            {
                id: 25,
                question: "How is dust controlled in RMHS?",
                options: ["By using water sprays and ventilation systems", "By reducing material movement", "By increasing storage space", "By storing all materials indoors"],
                answer: "By using water sprays and ventilation systems"
            },
            {
                id: 26,
                question: "What is the purpose of preventive maintenance?",
                options: ["To fix issues after they occur", "To proactively address potential issues", "To avoid equipment inspections", "To reduce material blending"],
                answer: "To proactively address potential issues"
            },
            {
                id: 27,
                question: "What is involved in troubleshooting?",
                options: ["Random repairs", "Identifying and addressing root causes of problems", "Ignoring equipment performance data", "Reducing preventive maintenance schedules"],
                answer: "Identifying and addressing root causes of problems"
            },
            {
                id: 28,
                question: "What is a focus area for continuous improvement in RMHS?",
                options: ["Eliminating all automation", "Optimizing raw material handling and batching", "Increasing downtime", "Avoiding data collection"],
                answer: "Optimizing raw material handling and batching"
            },
            {
                id: 29,
                question: "How does team involvement aid continuous improvement?",
                options: ["By reducing suggestions", "By encouraging collaboration and innovation", "By avoiding operator training", "By limiting automation"],
                answer: "By encouraging collaboration and innovation"
            },
            {
                id: 30,
                question: "What role does automation play in RMHS improvement?",
                options: ["Reduces efficiency", "Increases accuracy and efficiency", "Increases production costs", "Eliminates manual quality control"],
                answer: "Increases accuracy and efficiency"
            }
        ],
        advanced: []
    },
    "Control Desk Operations": {
        basic: [
            {
                id: 1,
                question: "What is the primary role of ferro alloys?",
                options: ["Reduce costs in manufacturing", "Enhance properties of steel and other alloys", "Replace raw materials", "Improve energy efficiency"],
                answer: "Enhance properties of steel and other alloys"
            },
            {
                id: 2,
                question: "Which of the following industries heavily relies on ferro alloys?",
                options: ["Agriculture", "Construction", "Textile", "Tourism"],
                answer: "Construction"
            },
            {
                id: 3,
                question: "What is essential for producing high-quality ferro alloys?",
                options: ["Large quantities of raw materials", "Precise control of processes", "Minimizing worker involvement", "Random furnace adjustments"],
                answer: "Precise control of processes"
            },
            {
                id: 4,
                question: "Why is the ferro alloys industry critical in the global market?",
                options: ["Limited supply of raw materials", "Growing demand for steel and advanced alloys", "High production costs", "Exclusive production in specific regions"],
                answer: "Growing demand for steel and advanced alloys"
            },
            {
                id: 5,
                question: "What is the main goal of process optimization at the control desk?",
                options: ["Increase emissions", "Maximize efficiency and productivity", "Reduce employee workload", "Replace automation systems"],
                answer: "Maximize efficiency and productivity"
            },
            {
                id: 6,
                question: "How does the control desk ensure quality assurance?",
                options: ["Automating all production", "Monitoring key parameters", "Ignoring minor deviations", "Outsourcing quality checks"],
                answer: "Monitoring key parameters"
            },
            {
                id: 7,
                question: "Which of the following is a key function of the control desk for safety?",
                options: ["Ignoring minor incidents", "Responding to emergencies", "Only monitoring emissions", "Automating repairs"],
                answer: "Responding to emergencies"
            },
            {
                id: 8,
                question: "Real-time data at the control desk is used for:",
                options: ["Reporting incidents to authorities", "Making strategic decisions", "Minimizing energy usage only", "Ignoring historical data"],
                answer: "Making strategic decisions"
            },
            {
                id: 9,
                question: "What is the role of furnace control systems?",
                options: ["Monitor raw materials", "Adjust furnace parameters like temperature and pressure", "Replace process monitoring systems", "Reduce production costs"],
                answer: "Adjust furnace parameters like temperature and pressure"
            },
            {
                id: 10,
                question: "Which component helps track critical production data?",
                options: ["Emergency protocols", "Process monitoring sensors", "Manual inspection", "Furnace operators"],
                answer: "Process monitoring sensors"
            },
            {
                id: 11,
                question: "What is the purpose of data analytics at the control desk?",
                options: ["Replace physical inspections", "Visualize and optimize production processes", "Reduce furnace temperatures", "Store unused data"],
                answer: "Visualize and optimize production processes"
            },
            {
                id: 12,
                question: "What is the focus of emergency response systems?",
                options: ["Analyzing historical data", "Quickly resolving incidents safely", "Increasing production speed", "Monitoring temperature alone"],
                answer: "Quickly resolving incidents safely"
            },
            {
                id: 13,
                question: "What does material charging involve?",
                options: ["Randomly adding raw materials", "Blending raw materials and additives carefully", "Overloading the furnace", "Replacing additives"],
                answer: "Blending raw materials and additives carefully"
            },
            {
                id: 14,
                question: "How is temperature control critical in alloy production?",
                options: ["It ensures maximum emissions", "It maintains ideal conditions for alloying", "It reduces the use of sensors", "It improves manual monitoring"],
                answer: "It maintains ideal conditions for alloying"
            },
            {
                id: 15,
                question: "Energy consumption is monitored during:",
                options: ["Material storage", "Process monitoring", "Marketing strategies", "Data collection only"],
                answer: "Process monitoring"
            },
            {
                id: 16,
                question: "What is the benefit of process automation?",
                options: ["Reduces alloy quality", "Ensures consistent output", "Increases manual adjustments", "Limits production flexibility"],
                answer: "Ensures consistent output"
            },
            {
                id: 17,
                question: "How is energy efficiency achieved?",
                options: ["Reducing furnace temperature without monitoring", "Implementing strategies to minimize emissions", "Using outdated technologies", "Increasing energy usage"],
                answer: "Implementing strategies to minimize emissions"
            },
            {
                id: 18,
                question: "What does yield improvement focus on?",
                options: ["Increasing raw material waste", "Maximizing valuable component recovery", "Automating operator roles", "Using fewer raw materials"],
                answer: "Maximizing valuable component recovery"
            },
            {
                id: 19,
                question: "Production flexibility allows:",
                options: ["Rapid adaptation to market demands", "Ignoring customer orders", "Fixed output patterns", "Continuous manual adjustments"],
                answer: "Rapid adaptation to market demands"
            },
            {
                id: 20,
                question: "How is chemical composition controlled?",
                options: ["Automating all furnace processes", "Precise control of alloying elements", "Ignoring industry specifications", "Reducing quality checks"],
                answer: "Precise control of alloying elements"
            },
            {
                id: 21,
                question: "What ensures defect-free alloys?",
                options: ["Random sampling", "Advanced inspection procedures", "Manual temperature monitoring", "Ignoring impurities"],
                answer: "Advanced inspection procedures"
            },
            {
                id: 22,
                question: "Traceability involves:",
                options: ["Documenting each batch of alloys", "Automating material inputs", "Storing data only when needed", "Ignoring defective batches"],
                answer: "Documenting each batch of alloys"
            },
            {
                id: 23,
                question: "What mitigates production hazards?",
                options: ["Comprehensive safety measures", "Automating material handling", "Ignoring potential risks", "Reducing inspections"],
                answer: "Comprehensive safety measures"
            },
            {
                id: 24,
                question: "What is key to emergency response?",
                options: ["Random drills", "Well-rehearsed incident plans", "Ignoring minor incidents", "Avoiding operator training"],
                answer: "Well-rehearsed incident plans"
            },
            {
                id: 25,
                question: "What technology predicts equipment failures?",
                options: ["Industry 3.0", "Predictive analytics", "Manual monitoring", "Outdated sensors"],
                answer: "Predictive analytics"
            },
            {
                id: 26,
                question: "Sustainability initiatives aim to:",
                options: ["Increase emissions", "Reduce environmental impact", "Eliminate automation", "Replace existing alloys"],
                answer: "Reduce environmental impact"
            },
            {
                id: 27,
                question: "What does Industry 4.0 integration involve?",
                options: ["IoT and smart automation", "Limiting cloud computing", "Manual data analysis", "Ignoring technological advancements"],
                answer: "IoT and smart automation"
            }
        ],
        advanced: []
    },
    "briquetting-operations": {
        basic: [
        ],
        advanced: [
            {
                id: 1,
                question: "Which of the following is a primary purpose of ferro alloys in steel production?",
                options: ["Enhancing corrosion resistance", "Improving ductility", "Reducing manufacturing costs", "Increasing plasticity"],
                answer: "Enhancing corrosion resistance"
            },
            {
                id: 2,
                question: "What is the primary environmental concern in ferro alloy production?",
                options: ["High labor costs", "Dust and gas emissions", "Lack of raw materials", "Overuse of water resources"],
                answer: "Dust and gas emissions"
            },
            {
                id: 3,
                question: "What does the briquetting process primarily aim to achieve?",
                options: ["Increase material flexibility", "Minimize manual labor", "Convert fine materials into compact briquettes", "Replace raw materials in the furnace"],
                answer: "Convert fine materials into compact briquettes"
            },
            {
                id: 4,
                question: "What step is necessary to optimize the moisture content during raw material preparation?",
                options: ["Screening", "Mixing", "Crushing", "Curing"],
                answer: "Mixing"
            },
            {
                id: 5,
                question: "What is the primary role of binders in briquette formulation?",
                options: ["Improve thermal conductivity", "Enhance durability and strength", "Increase moisture absorption", "Promote faster curing"],
                answer: "Enhance durability and strength"
            },
            {
                id: 6,
                question: "Which component ensures a consistent feed rate into the pug mill?",
                options: ["Belt conveyor", "Screw feeder", "Tripper car", "Pug sealer"],
                answer: "Screw feeder"
            },
            {
                id: 7,
                question: "What is the function of a pug mill in the briquetting process?",
                options: ["Reducing the curing time", "Screening impurities", "Mixing and conditioning raw materials", "Compressing briquettes into final shapes"],
                answer: "Mixing and conditioning raw materials"
            },
            {
                id: 8,
                question: "What is the main benefit of the extruder in the briquetting process?",
                options: ["Achieving uniform briquette density", "Reducing energy consumption", "Transporting briquettes", "Removing impurities"],
                answer: "Achieving uniform briquette density"
            },
            {
                id: 9,
                question: "Which equipment is responsible for the transportation of briquettes to the curing area?",
                options: ["Screw feeder", "Pug mill", "Tripper car", "Extruder"],
                answer: "Tripper car"
            },
            {
                id: 10,
                question: "How does screening improve raw material preparation?",
                options: ["By increasing particle density", "By eliminating excess moisture", "By ensuring uniform particle size distribution", "By accelerating the curing process"],
                answer: "By ensuring uniform particle size distribution"
            },
            {
                id: 11,
                question: "What is the primary purpose of curing in briquetting?",
                options: ["Improve material handling", "Enhance briquette strength and durability", "Reduce waste generation", "Optimize the extruder process"],
                answer: "Enhance briquette strength and durability"
            },
            {
                id: 12,
                question: "Which of the following is NOT a curing method?",
                options: ["Air curing", "Steam curing", "Chemical curing", "Heat treatment"],
                answer: "Chemical curing"
            },
            {
                id: 13,
                question: "Which test evaluates the density and hardness of briquettes?",
                options: ["Spectrometric analysis", "Porosity testing", "Crushing strength test", "Moisture control test"],
                answer: "Crushing strength test"
            },
            {
                id: 14,
                question: "Why is it important to control particle size in briquette formation?",
                options: ["To simplify quality control", "To improve thermal conductivity", "To ensure consistent briquette quality and density", "To facilitate curing process"],
                answer: "To ensure consistent briquette quality and density"
            },
            {
                id: 15,
                question: "What equipment is used to analyze the chemical composition of briquettes?",
                options: ["Pug mill", "Spectrometer", "Belt conveyor", "Curing chamber"],
                answer: "Spectrometer"
            },
            {
                id: 16,
                question: "What is a key benefit of waste heat recovery in briquetting plants?",
                options: ["Decreased curing time", "Reduced material handling costs", "Energy cost reduction through preheating", "Enhanced particle size distribution"],
                answer: "Energy cost reduction through preheating"
            },
            {
                id: 17,
                question: "What percentage of energy savings is typically achievable through efficient briquetting processes?",
                options: ["5%", "10%", "15%", "20%"],
                answer: "15%"
            },
            {
                id: 18,
                question: "Which automation strategy can predict equipment failures in briquetting plants?",
                options: ["Real-time monitoring", "Process optimization", "Predictive maintenance", "Automated material handling"],
                answer: "Predictive maintenance"
            },
            {
                id: 19,
                question: "How can process automation improve briquetting plant efficiency?",
                options: ["By increasing curing time", "By optimizing material handling speed", "By minimizing energy waste", "By improving manual labor efficiency"],
                answer: "By minimizing energy waste"
            },
            {
                id: 20,
                question: "Which of the following is a sustainable practice in briquetting plants?",
                options: ["Increasing dust emissions", "Recycling waste materials", "Using non-renewable binders", "Avoiding automation technologies"],
                answer: "Recycling waste materials"
            },
            {
                id: 21,
                question: "What is a major challenge in ferro alloy production?",
                options: ["High material flexibility", "Inconsistent raw material quality", "Overproduction of briquettes", "Low market demand"],
                answer: "Inconsistent raw material quality"
            },
            {
                id: 22,
                question: "Which emerging technology might revolutionize briquetting?",
                options: ["Plasma briquetting", "Rotary sieving", "Hydro-pneumatic extrusion", "Vacuum drying"],
                answer: "Plasma briquetting"
            },
            {
                id: 23,
                question: "What is the typical payback period for investments in briquetting technology?",
                options: ["1 year", "2 years", "3 years", "5 years"],
                answer: "2 years"
            },
            {
                id: 24,
                question: "Which element of plant layout is crucial for minimizing downtime?",
                options: ["Spare parts inventory", "Efficient material flow", "Energy-efficient motors", "Automated curing chambers"],
                answer: "Efficient material flow"
            },
            {
                id: 25,
                question: "What is the role of collaboration in the future of ferro alloy briquetting?",
                options: ["Reducing equipment costs", "Accelerating process timelines", "Driving innovation through partnerships", "Eliminating manual labor requirements"],
                answer: "Driving innovation through partnerships"
            }
        ],
        section6: [
            {
                id: 26,
                question: "Why is preventive maintenance critical in briquetting plants?",
                options: ["To reduce curing time", "To prevent downtime and ensure performance", "To eliminate manual operations", "To avoid using binders"],
                answer: "To prevent downtime and ensure performance"
            },
            {
                id: 27,
                question: "Which safety measure is essential for handling high-temperature operations?",
                options: ["Automated monitoring systems", "Routine calibration of spectrometers", "Emergency response drills", "Regular material screening"],
                answer: "Emergency response drills"
            },
            {
                id: 28,
                question: "Which equipment is most susceptible to material leakage if improperly sealed?",
                options: ["Extruder", "Tripper car", "Pug sealer", "Belt conveyor"],
                answer: "Pug sealer"
            },
            {
                id: 29,
                question: "What contributes most to consistent briquette density?",
                options: ["Manual feeding into extruders", "Controlled feeding rates", "High binder content", "Extended curing times"],
                answer: "Controlled feeding rates"
            },
            {
                id: 30,
                question: "What is the primary reason for integrating advanced control systems?",
                options: ["Simplify manual operations", "Reduce production output", "Optimize briquetting parameters", "Increase binder usage"],
                answer: "Optimize briquetting parameters"
            }
        ]
    },
    //Mech maintenance
    "maintenance-of-feed-pump": {
        basic: [
            {
                id: 1,
                question: "What is the primary purpose of feed water pumps in power plants?",
                options: ["To supply fuel to the boiler", "To deliver water to the boiler for steam generation", "To cool down the turbines", "To generate electricity directly"],
                answer: "To deliver water to the boiler for steam generation"
            },
            {
                id: 2,
                question: "Why is routine mechanical maintenance of feed water pumps important?",
                options: ["It increases fuel consumption", "It helps prevent catastrophic failures and reduces downtime", "It reduces water usage in the plant", "It improves the aesthetic appearance of the pump"],
                answer: "It helps prevent catastrophic failures and reduces downtime"
            },
            {
                id: 3,
                question: "Which maintenance procedure involves applying lubricants to reduce friction and wear?",
                options: ["Visual inspection", "Lubrication", "Cleaning", "Temperature monitoring"],
                answer: "Lubrication"
            },
            {
                id: 4,
                question: "What is one of the main benefits of regular inspections and repairs on feed water pumps?",
                options: ["Shortens the lifespan of the pump", "Minimizes the need for replacements", "Increases noise levels during operation", "Reduces the efficiency of the pump"],
                answer: "Minimizes the need for replacements"
            },
            {
                id: 5,
                question: "Which method is used to monitor potential imbalances or bearing failures in feed water pumps?",
                options: ["Temperature monitoring", "Vibration analysis", "Flow rate monitoring", "Visual inspection"],
                answer: "Vibration analysis"
            },
            {
                id: 6,
                question: "What should be done to prevent clogging and ensure efficient operation of feed water pumps?",
                options: ["Applying lubricants frequently", "Cleaning the pump to remove dirt and debris", "Reducing the flow rate", "Ignoring minor leaks"],
                answer: "Cleaning the pump to remove dirt and debris"
            },
            {
                id: 7,
                question: "What safety measure ensures proper isolation of equipment before maintenance begins?",
                options: ["Flow rate monitoring", "Emergency procedures", "Lockout/Tagout procedures", "Vibration analysis"],
                answer: "Lockout/Tagout procedures"
            },
            {
                id: 8,
                question: "Which personal protective equipment (PPE) is essential during pump maintenance?",
                options: ["Helmet and earplugs only", "Gloves, safety glasses, and footwear", "Lab coat and tie", "Respirator only"],
                answer: "Gloves, safety glasses, and footwear"
            },
            {
                id: 9,
                question: "What is a key indicator used to detect potential overheating issues in the feed water pump?",
                options: ["Vibration analysis", "Flow rate changes", "Temperature monitoring", "Cleaning frequency"],
                answer: "Temperature monitoring"
            },
            {
                id: 10,
                question: "Why is it crucial to know and practice emergency procedures during maintenance?",
                options: ["To extend the maintenance time", "To reduce the cost of maintenance", "To be prepared for accidents or unexpected events", "To increase the water temperature in the boiler"],
                answer: "To be prepared for accidents or unexpected events"
            }
        ],
    },
    "maintenance-of-boiler": {
        basic: [
            {
                id: 1,
                question: "What type of fuel is primarily used in pulverized fuel boilers?",
                options: ["Diesel", "Wood", "Finely ground coal", "Natural gas"],
                answer: "Finely ground coal"
            },
            {
                id: 2,
                question: "What is the normal working pressure of the pulverized fuel boiler in Sarda Metals and Alloys Ltd.?",
                options: ["100 KG/CM2", "107.97 KG/CM2", "120 KG/CM2", "135 KG/CM2"],
                answer: "107.97 KG/CM2"
            },
            {
                id: 3,
                question: "Which component in the water and steam circuit separates steam from water?",
                options: ["Feedwater pump", "Superheater", "Steam drum", "Economizer"],
                answer: "Steam drum"
            },
            {
                id: 4,
                question: "What is the maximum working temperature of the boiler in Sarda Metals and Alloys Ltd.?",
                options: ["300°C", "400°C", "500°C", "540°C"],
                answer: "540°C"
            },
            {
                id: 5,
                question: "What device is used to remove particulate matter from flue gases in pulverized fuel boilers?",
                options: ["Superheater", "Economizer", "Electrostatic precipitator", "Induced draft fan"],
                answer: "Electrostatic precipitator"
            },
            {
                id: 6,
                question: "Which fan supplies primary air to the pulverized coal to transport it into the furnace?",
                options: ["Forced draft fan", "Primary air fan", "Induced draft fan", "Cooling fan"],
                answer: "Primary air fan"
            },
            {
                id: 7,
                question: "What does the economizer do in a pulverized fuel boiler?",
                options: ["Converts steam to water", "Removes ash from the furnace", "Preheats feedwater", "Increases fuel combustion rate"],
                answer: "Preheats feedwater"
            },
            {
                id: 8,
                question: "At what temperature is flue gas typically released from the boiler?",
                options: ["950°C", "300°C", "155°C", "120°C"],
                answer: "155°C"
            },
            {
                id: 9,
                question: "What is the function of a steam turbine in a pulverized fuel boiler system?",
                options: ["To preheat the air", "To generate electricity", "To collect fly ash", "To remove impurities"],
                answer: "To generate electricity"
            },
            {
                id: 10,
                question: "Which material is commonly used for the superheater tubes in pulverized fuel boilers?",
                options: ["Cast iron", "Alloy steel", "Copper", "Aluminum"],
                answer: "Alloy steel"
            },
            {
                id: 11,
                question: "What is the purpose of the steam drum in a pulverized fuel boiler?",
                options: ["Fuel injection", "Steam and water separation", "Air preheating", "Ash collection"],
                answer: "Steam and water separation"
            },
            {
                id: 12,
                question: "Where is fly ash collected in a pulverized fuel boiler system?",
                options: ["Steam drum", "Economizer hopper", "Chimney", "Coal mill"],
                answer: "Economizer hopper"
            },
            {
                id: 13,
                question: "Which of these fans creates a positive pressure to push air into the furnace?",
                options: ["Induced draft fan", "Primary air fan", "Forced draft fan", "Recirculation fan"],
                answer: "Forced draft fan"
            },
            {
                id: 14,
                question: "Which component ensures the desired particle size of pulverized coal?",
                options: ["Electrostatic precipitator", "Coal mills", "Superheater", "Economizer"],
                answer: "Coal mills"
            },
            {
                id: 15,
                question: "What is the main function of the induced draft fan?",
                options: ["Supplies air for combustion", "Collects ash", "Draws flue gases through the boiler", "Preheats water"],
                answer: "Draws flue gases through the boiler"
            },
            {
                id: 16,
                question: "The balanced draft system in boilers includes which of the following components?",
                options: ["Only forced draft fan", "Only induced draft fan", "Both forced and induced draft fans", "Only primary air fan"],
                answer: "Both forced and induced draft fans"
            },
            {
                id: 17,
                question: "What type of ash is removed from the bottom of the furnace?",
                options: ["Fly ash", "Bottom ash", "Surface ash", "Precipitator ash"],
                answer: "Bottom ash"
            },
            {
                id: 18,
                question: "In which component is air preheated before entering the furnace?",
                options: ["Economizer", "Forced draft fan", "Air preheater", "Superheater"],
                answer: "Air preheater"
            },
            {
                id: 19,
                question: "What is the temperature range of air entering the boiler after passing through the air preheater?",
                options: ["50°C", "120°C", "340°C", "500°C"],
                answer: "340°C"
            },
            {
                id: 20,
                question: "Which device is used to minimize environmental emissions from the boiler?",
                options: ["Steam turbine", "Electrostatic precipitator", "Economizer", "Superheater"],
                answer: "Electrostatic precipitator"
            },
            {
                id: 21,
                question: "Where is bottom ash typically collected?",
                options: ["Economizer hopper", "Steam drum", "Furnace bottom", "Superheater"],
                answer: "Furnace bottom"
            },
            {
                id: 22,
                question: "What is the function of the coal mills in pulverized fuel boilers?",
                options: ["To increase air temperature", "To grind coal into fine powder", "To collect ash", "To preheat water"],
                answer: "To grind coal into fine powder"
            },
            {
                id: 23,
                question: "The steam from the boiler is directed to which component to generate mechanical energy?",
                options: ["Electrostatic precipitator", "Forced draft fan", "Steam turbine", "Coal mill"],
                answer: "Steam turbine"
            },
            {
                id: 24,
                question: "Which chemical is typically dosed into the steam drum to maintain phosphate levels?",
                options: ["Na3PO4", "H2SO4", "NaCl", "CaCO3"],
                answer: "Na3PO4"
            },
            {
                id: 25,
                question: "The maximum operating pressure of the pulverized fuel boiler is:",
                options: ["120 KG/CM2", "135 KG/CM2", "145 KG/CM2", "160 KG/CM2"],
                answer: "135 KG/CM2"
            },
            {
                id: 26,
                question: "Which of the following is used to handle and transport fly ash to storage?",
                options: ["Forced draft fan", "Pneumatic ash conveying system", "Primary air fan", "Steam turbine"],
                answer: "Pneumatic ash conveying system"
            },
            {
                id: 27,
                question: "What is the primary byproduct of the combustion process in a pulverized fuel boiler?",
                options: ["Water", "Bottom ash and fly ash", "Carbon monoxide", "Steam"],
                answer: "Bottom ash and fly ash"
            },
            {
                id: 28,
                question: "Which of the following devices helps to prevent fly ash from exiting through the chimney?",
                options: ["Coal mill", "Steam drum", "Electrostatic precipitator", "Superheater"],
                answer: "Electrostatic precipitator"
            },
            {
                id: 29,
                question: "Which component transfers heat to the feed water as it exits the boiler?",
                options: ["Air preheater", "Superheater", "Economizer", "Forced draft fan"],
                answer: "Economizer"
            },
            {
                id: 30,
                question: "What is the required temperature for primary air after preheating before it enters the coal mill?",
                options: ["150°C", "300°C", "340°C", "500°C"],
                answer: "340°C"
            },
        ],
        advanced: [
            {
                id: 1,
                question: "What principle is primarily responsible for the efficiency of pulverized fuel boilers in converting fuel energy into steam energy?",
                options: ["Natural circulation", "Staged combustion", "Preheating combustion air", "Pulverization of coal"],
                answer: "Pulverization of coal"
            },
            {
                id: 2,
                question: "The balanced draft system is essential in pulverized fuel boilers because it:",
                options: ["Prevents backflow of combustion gases", "Increases air-fuel mixing efficiency", "Controls air supply and exhaust for stable combustion", "Reduces fuel consumption by minimizing air intake"],
                answer: "Controls air supply and exhaust for stable combustion"
            },
            {
                id: 3,
                question: "The optimal particle size of coal for combustion in a pulverized fuel boiler is approximately:",
                options: ["75 microns", "100 microns", "150 microns", "200 microns"],
                answer: "200 microns"
            },
            {
                id: 4,
                question: "The function of an attemperator in the superheater section is to:",
                options: ["Lower the steam temperature", "Increase combustion temperature", "Remove impurities from steam", "Increase steam pressure"],
                answer: "Lower the steam temperature"
            },
            {
                id: 5,
                question: "Which parameter is controlled by adjusting the forced draft and induced draft fans?",
                options: ["Combustion temperature", "Furnace pressure", "Steam quality", "Fuel feed rate"],
                answer: "Furnace pressure"
            },
            {
                id: 6,
                question: "Why is excess air necessary for efficient combustion in pulverized fuel boilers?",
                options: ["It minimizes ash production", "It prevents slag formation", "It reduces nitrogen oxide formation", "It ensures complete combustion of fuel"],
                answer: "It ensures complete combustion of fuel"
            },
            {
                id: 7,
                question: "What is the significance of installing cyclone separators in the steam drum?",
                options: ["To improve air-fuel mixing", "To remove moisture from the steam", "To increase combustion temperature", "To reduce ash content in the furnace"],
                answer: "To remove moisture from the steam"
            },
            {
                id: 8,
                question: "How does the economizer improve the efficiency of the pulverized fuel boiler?",
                options: ["By reheating steam", "By reducing fuel consumption", "By transferring heat from flue gases to feedwater", "By separating moisture from steam"],
                answer: "By transferring heat from flue gases to feedwater"
            },
            {
                id: 9,
                question: "In pulverized fuel boilers, what is the role of electrostatic precipitators (ESPs) in environmental management?",
                options: ["Cooling the flue gases", "Collecting particulate matter", "Increasing boiler efficiency", "Reducing combustion air temperature"],
                answer: "Collecting particulate matter"
            },
            {
                id: 10,
                question: "What is the approximate increase in feedwater temperature in the economizer section?",
                options: ["From 100°C to 150°C", "From 162°C to 300°C", "From 50°C to 200°C", "From 200°C to 500°C"],
                answer: "From 162°C to 300°C"
            },
            {
                id: 11,
                question: "The purpose of primary air fans in the pulverized fuel boiler is to:",
                options: ["Supply combustion air to the furnace", "Transport pulverized coal to the furnace", "Control the temperature of flue gases", "Increase steam generation rate"],
                answer: "Transport pulverized coal to the furnace"
            },
            {
                id: 12,
                question: "Why is alloy steel commonly used in the construction of superheaters?",
                options: ["For corrosion resistance at low temperatures", "For high tensile strength", "To withstand high temperatures and pressure", "To reduce the cost of the boiler"],
                answer: "To withstand high temperatures and pressure"
            },
            {
                id: 13,
                question: "In a pulverized fuel boiler, the optimal air-to-coal ratio for complete combustion is approximately:",
                options: ["4 kg/kg of coal", "5 kg/kg of coal", "6 kg/kg of coal", "7 kg/kg of coal"],
                answer: "5 kg/kg of coal"
            },
            {
                id: 14,
                question: "In the balanced draft system, induced draft fans are critical because they:",
                options: ["Regulate air intake temperature", "Ensure negative pressure in the furnace", "Direct air into the furnace for combustion", "Increase the velocity of steam"],
                answer: "Ensure negative pressure in the furnace"
            },
            {
                id: 15,
                question: "Why is it necessary to maintain high-pressure levels in the feedwater system?",
                options: ["To enhance steam turbine efficiency", "To prevent steam leaks in the superheater", "To ensure efficient steam-water separation", "To facilitate continuous water flow to the boiler"],
                answer: "To facilitate continuous water flow to the boiler"
            },
            {
                id: 16,
                question: "Which component removes the bottom ash in a pulverized fuel boiler?",
                options: ["Electrostatic precipitator", "Ash hoppers", "Cyclone separators", "Forced draft fan"],
                answer: "Ash hoppers"
            },
            {
                id: 17,
                question: "How does the height of the chimney affect the performance of pulverized fuel boilers?",
                options: ["Increases boiler pressure", "Reduces fuel consumption", "Ensures proper dispersion of flue gases", "Decreases flue gas temperature"],
                answer: "Ensures proper dispersion of flue gases"
            },
            {
                id: 18,
                question: "Why is it essential to maintain phosphate levels in the steam drum?",
                options: ["To control the water level in the drum", "To prevent scale formation", "To improve the steam temperature", "To increase combustion efficiency"],
                answer: "To prevent scale formation"
            },
            {
                id: 19,
                question: "The staged combustion technique in pulverized fuel boilers helps to:",
                options: ["Increase the ash melting point", "Control nitrogen oxide emissions", "Reduce carbon dioxide emissions", "Improve feedwater preheating"],
                answer: "Control nitrogen oxide emissions"
            },
            {
                id: 20,
                question: "The function of superheaters in a pulverized fuel boiler is to:",
                options: ["Increase steam temperature above saturation", "Preheat air for combustion", "Remove impurities from steam", "Preheat feedwater"],
                answer: "Increase steam temperature above saturation"
            },
            {
                id: 21,
                question: "In the electrostatic precipitator, what gives fly ash particles an electrical charge?",
                options: ["Grounded collection plates", "High-voltage electrodes", "Induced draft fan", "Primary air fan"],
                answer: "High-voltage electrodes"
            },
            {
                id: 22,
                question: "How is negative pressure maintained inside a pulverized fuel boiler furnace?",
                options: ["By forced draft fans only", "By the height of the chimney", "By balancing forced and induced draft fans", "By reducing fuel feed rate"],
                answer: "By balancing forced and induced draft fans"
            },
            {
                id: 23,
                question: "To reduce the chances of slagging, it is essential to:",
                options: ["Use high moisture coal", "Maintain low furnace temperatures", "Control the pulverized coal fineness", "Increase the air-fuel ratio"],
                answer: "Control the pulverized coal fineness"
            },
            {
                id: 24,
                question: "Why is primary air heated before entering the coal mill?",
                options: ["To improve the moisture removal from coal", "To reduce the pulverization of coal", "To minimize ash formation", "To lower the coal burning rate"],
                answer: "To improve the moisture removal from coal"
            },
            {
                id: 25,
                question: "What type of flow is typically created in the furnace of a pulverized fuel boiler?",
                options: ["Laminar flow", "Radial flow", "Cyclonic flow", "Parallel flow"],
                answer: "Cyclonic flow"
            },
            {
                id: 26,
                question: "In the boiler system, which component directly follows the superheater?",
                options: ["Air preheater", "Economizer", "Steam turbine", "Coal mill"],
                answer: "Steam turbine"
            },
            {
                id: 27,
                question: "The use of staged elevations for coal injection in the furnace helps to:",
                options: ["Optimize fuel combustion efficiency", "Reduce air intake", "Lower boiler exit temperature", "Increase the boiler pressure"],
                answer: "Optimize fuel combustion efficiency"
            },
            {
                id: 28,
                question: "Electrostatic precipitators rely on what kind of plates for fly ash collection?",
                options: ["Insulated plates", "Magnetized plates", "Grounded collection plates", "Preheated plates"],
                answer: "Grounded collection plates"
            },
            {
                id: 29,
                question: "Which process prevents overheating of the economizer tubes?",
                options: ["Using only dry air for combustion", "Controlling the feedwater flow rate", "Lowering the flue gas temperature", "Increasing air preheater efficiency"],
                answer: "Controlling the feedwater flow rate"
            },
            {
                id: 30,
                question: "What is a key environmental benefit of using electrostatic precipitators in pulverized fuel boilers?",
                options: ["Increasing fuel efficiency", "Reducing particulate emissions", "Improving combustion rate", "Decreasing furnace temperature"],
                answer: "Reducing particulate emissions"
            }
        ]
    },
    "maintenance-of-generator": {
        basic: [
            {
                id: 1,
                question: "What is the power output capacity of the Siemens generator discussed?",
                options: ["60MW", "80MW", "100MW", "120MW"],
                answer: "80MW"
            },
            {
                id: 2,
                question: "Which component of the generator is stationary and houses the windings?",
                options: ["Rotor", "Stator", "Bearings", "Cooling system"],
                answer: "Stator"
            },
            {
                id: 3,
                question: "What is one of the key maintenance strategies mentioned for ensuring smooth operation of generator parts?",
                options: ["Rewinding", "Lubrication", "Voltage adjustment", "Software update"],
                answer: "Lubrication"
            },
            {
                id: 4,
                question: "How often is a visual inspection of stator windings recommended?",
                options: ["Daily", "Weekly", "Monthly", "Yearly"],
                answer: "Monthly"
            },
            {
                id: 5,
                question: "Which tool is used for vibration analysis of the generator’s bearings?",
                options: ["Thermal camera", "Vibration meter", "Oscilloscope", "Pressure gauge"],
                answer: "Vibration meter"
            },
            {
                id: 6,
                question: "What procedure is suggested for maintaining the generator's cooling system?",
                options: ["Replacement", "Weekly cleaning", "Pressure testing", "Monthly oil change"],
                answer: "Pressure testing"
            },
            {
                id: 7,
                question: "What kind of maintenance involves detecting issues before they escalate?",
                options: ["Reactive maintenance", "Emergency maintenance", "Preventive maintenance", "Predictive maintenance"],
                answer: "Preventive maintenance"
            },
            {
                id: 8,
                question: "Which part of the generator rotates and contains the magnetic core and windings?",
                options: ["Stator", "Bearings", "Rotor", "Cooling system"],
                answer: "Rotor"
            },
            {
                id: 9,
                question: "What is one of the purposes of regular generator cleaning?",
                options: ["Improve fuel efficiency", "Remove dust and debris", "Increase output capacity", "Enhance software updates"],
                answer: "Remove dust and debris"
            },
            {
                id: 10,
                question: "Why might bearings in a generator need to be replaced?",
                options: ["To improve electrical conductivity", "To reduce temperature fluctuation", "Due to wear and tear affecting smooth operation", "For better magnetic field generation"],
                answer: "Due to wear and tear affecting smooth operation"
            }
        ]
    },
    "maintenance-of-turbine": {
        basic: [
            {
                id: 1,
                question: "What is one primary benefit of proper maintenance of turbines?",
                options: ["Increased noise", "Enhanced efficiency", "Higher fuel consumption", "Reduced lifespan"],
                answer: "Enhanced efficiency"
            },
            {
                id: 2,
                question: "Regular turbine maintenance helps in preventing which of the following?",
                options: ["Decreased fuel costs", "Premature wear and tear", "Increase in size", "Lower operating temperatures"],
                answer: "Premature wear and tear"
            },
            {
                id: 3,
                question: "What type of inspection is used to detect visible damage, wear, or leaks in turbine components?",
                options: ["Temperature monitoring", "Vibration analysis", "Visual inspection", "Oil analysis"],
                answer: "Visual inspection"
            },
            {
                id: 4,
                question: "Which of the following is NOT a focus of preventative maintenance in turbines?",
                options: ["Lubrication and filtration", "Component cleaning", "Component resizing", "Scheduled overhauls"],
                answer: "Component resizing"
            },
            {
                id: 5,
                question: "Vibration analysis in turbines is primarily used to detect which issues?",
                options: ["Temperature fluctuations", "Oil degradation", "Imbalances and bearing wear", "Increased airflow"],
                answer: "Imbalances and bearing wear"
            },
            {
                id: 6,
                question: "What does temperature monitoring in turbines help identify?",
                options: ["Misalignment", "Overheating and potential bearing failure", "Oil contamination", "Reduced air pressure"],
                answer: "Overheating and potential bearing failure"
            },
            {
                id: 7,
                question: "Oil analysis in turbine maintenance is useful for detecting which of the following?",
                options: ["Electrical faults", "Contamination and wear particles", "Temperature imbalances", "Misalignment"],
                answer: "Contamination and wear particles"
            },
            {
                id: 8,
                question: "Which component cleaning process in turbines helps improve airflow and combustion efficiency?",
                options: ["Bearing replacement", "Filter replacement", "Blade and combustion chamber cleaning", "Oil refill"],
                answer: "Blade and combustion chamber cleaning"
            },
            {
                id: 9,
                question: "What common issue can cause abnormal vibration patterns in turbines?",
                options: ["Oil contamination", "Temperature drops", "Misalignment or bearing wear", "Clean filters"],
                answer: "Misalignment or bearing wear"
            },
            {
                id: 10,
                question: "In turbine maintenance, what might fluctuating oil pressure indicate?",
                options: ["Filter efficiency", "Component misalignment", "Leaks, pump failure, or contamination", "Enhanced lifespan"],
                answer: "Leaks, pump failure, or contamination"
            }
        ],
        advanced: []
    },
    "maintenance-of-acc": {
        basic: [
            {
                id: 1,
                question: "What is the primary function of an Air Cooled Condenser (ACC)?",
                options: ["Increase turbine efficiency", "Cool steam into water using air", "Heat water to produce steam", "Store condensed water for reuse"],
                answer: "Cool steam into water using air"
            },
            {
                id: 2,
                question: "Why are ACCs preferred in locations with scarce water resources?",
                options: ["They require less energy", "They do not use water for cooling", "They operate at higher efficiency", "They reduce heat loss"],
                answer: "They do not use water for cooling"
            },
            {
                id: 3,
                question: "What type of power plant is most likely to benefit from ACCs?",
                options: ["Hydropower plants", "Wind power plants", "Thermal power plants", "Nuclear power plants"],
                answer: "Thermal power plants"
            },
            {
                id: 4,
                question: "Which component of an ACC is responsible for blowing air across heat exchanger coils?",
                options: ["Heat exchanger", "Fans", "Steam drum", "Condensate tank"],
                answer: "Fans"
            },
            {
                id: 5,
                question: "What happens to the water collected in the condensate collection system of an ACC?",
                options: ["It is discarded", "It is cooled and reused in the system", "It is used for cleaning purposes", "It evaporates"],
                answer: "It is cooled and reused in the system"
            },
            {
                id: 6,
                question: "The steam distribution system in an ACC primarily:",
                options: ["Reheats the steam", "Circulates steam evenly across the heat exchanger", "Stores steam", "Releases excess steam"],
                answer: "Circulates steam evenly across the heat exchanger"
            },
            {
                id: 7,
                question: "In an ACC, the steam condenses into water after:",
                options: ["Losing heat to the air", "Absorbing heat from fans", "Passing through the turbine", "Reaching high pressure"],
                answer: "Losing heat to the air"
            },
            {
                id: 8,
                question: "What type of cycle does an ACC system follow?",
                options: ["Open cycle", "Continuous cycle", "Single-pass system", "Intermittent cycle"],
                answer: "Continuous cycle"
            },
            {
                id: 9,
                question: "In a direct ACC, the steam:",
                options: ["Contacts air directly", "Contacts a secondary coolant", "Is cooled using water", "Flows through multiple systems"],
                answer: "Contacts air directly"
            },
            {
                id: 10,
                question: "What distinguishes an indirect ACC from a direct ACC?",
                options: ["It has higher efficiency", "It uses a secondary coolant for heat transfer", "It requires less maintenance", "It operates without fans"],
                answer: "It uses a secondary coolant for heat transfer"
            },
            {
                id: 11,
                question: "What is one of the main environmental benefits of using ACCs?",
                options: ["Reduced greenhouse gas emissions", "No water required for cooling", "Eliminates the need for turbines", "Operates without energy input"],
                answer: "No water required for cooling"
            },
            {
                id: 12,
                question: "Why are ACCs particularly suitable for arid regions?",
                options: ["They use renewable energy", "They reduce operational costs", "They minimize water requirements", "They operate faster"],
                answer: "They minimize water requirements"
            },
            {
                id: 13,
                question: "What factor significantly impacts the efficiency of an ACC?",
                options: ["Steam pressure", "Ambient air temperature", "Water temperature", "Boiler capacity"],
                answer: "Ambient air temperature"
            },
            {
                id: 14,
                question: "How can fan capacity influence the efficiency of an ACC?",
                options: ["Larger fans improve cooling capacity", "Smaller fans are more energy-efficient", "Fans have no impact on efficiency", "Fans increase steam pressure"],
                answer: "Larger fans improve cooling capacity"
            },
            {
                id: 15,
                question: "What maintenance action ensures efficient heat transfer in an ACC?",
                options: ["Cleaning heat exchanger coils", "Replacing fan blades regularly", "Increasing steam flow", "Reducing fan speeds"],
                answer: "Cleaning heat exchanger coils"
            },
            {
                id: 16,
                question: "Regular inspection of fan motors prevents:",
                options: ["Corrosion", "Reduced airflow", "Steam condensation", "Temperature fluctuations"],
                answer: "Reduced airflow"
            },
            {
                id: 17,
                question: "Why is cleaning the condensate collection tank essential?",
                options: ["To remove debris and prevent blockages", "To increase water storage capacity", "To cool the water faster", "To avoid evaporation"],
                answer: "To remove debris and prevent blockages"
            },
            {
                id: 18,
                question: "A common issue with ACCs in hot climates is:",
                options: ["Fan failure", "Reduced efficiency due to high ambient temperatures", "Increased corrosion", "Steam leakage"],
                answer: "Reduced efficiency due to high ambient temperatures"
            },
            {
                id: 19,
                question: "Accumulation of dust and debris in ACC components can lead to:",
                options: ["Increased operational costs", "System shutdown", "Reduced cooling efficiency", "Water contamination"],
                answer: "Reduced cooling efficiency"
            },
            {
                id: 20,
                question: "Corrosion in ACC systems is mainly caused by:",
                options: ["High water usage", "Temperature and environmental exposure", "Low-quality fans", "Poor lubrication"],
                answer: "Temperature and environmental exposure"
            },
            {
                id: 21,
                question: "How do ACCs contribute to ESG goals?",
                options: ["By improving turbine efficiency", "By conserving water resources and reducing environmental impact", "By eliminating the need for fans", "By minimizing plant size requirements"],
                answer: "By conserving water resources and reducing environmental impact"
            },
            {
                id: 22,
                question: "Regulatory alignment of ACCs is achieved by:",
                options: ["Reducing operational costs", "Meeting water usage and environmental protection requirements", "Increasing plant power output", "Lowering maintenance needs"],
                answer: "Meeting water usage and environmental protection requirements"
            }
        ],
        advanced: [],
    },
    "maintenance-of-chp": {
        basic: [
            {
                id: 1,
                question: "What does a Coal Handling Plant (CHP) do in a thermal power plant?",
                options: ["Produces electricity", "Handles waste products", "Stores and feeds coal to boilers", "Monitors emissions"],
                answer: "Stores and feeds coal to boilers"
            },
            {
                id: 2,
                question: "Why is maintaining a CHP important?",
                options: ["To reduce manpower requirements", "To minimize unplanned downtimes", "To increase coal quality", "To monitor boiler performance"],
                answer: "To minimize unplanned downtimes"
            },
            {
                id: 3,
                question: "Which component crushes coal into smaller sizes?",
                options: ["Conveyor", "Stacker", "Coal crusher", "Feeder"],
                answer: "Coal crusher"
            },
            {
                id: 4,
                question: "What is the function of stackers and reclaimers?",
                options: ["Crush coal", "Monitor equipment", "Stack and reclaim coal in the yard", "Clean conveyor belts"],
                answer: "Stack and reclaim coal in the yard"
            },
            {
                id: 5,
                question: "Conveyors are used to:",
                options: ["Transport coal through the plant", "Increase boiler efficiency", "Monitor coal quality", "Clean coal dust"],
                answer: "Transport coal through the plant"
            },
            {
                id: 6,
                question: "What does regular maintenance prevent?",
                options: ["Boiler overheating", "Breakdown of equipment", "Increased coal cost", "Overheating of belts"],
                answer: "Breakdown of equipment"
            },
            {
                id: 7,
                question: "How does maintenance extend equipment lifespan?",
                options: ["By using low-quality coal", "By reducing usage", "By performing timely checks and repairs", "By avoiding routine inspections"],
                answer: "By performing timely checks and repairs"
            },
            {
                id: 8,
                question: "Which type of maintenance is carried out after equipment failure?",
                options: ["Predictive", "Preventive", "Corrective", "Routine"],
                answer: "Corrective"
            },
            {
                id: 9,
                question: "What defines predictive maintenance?",
                options: ["Repairing equipment immediately after failure", "Using monitoring tools to predict failures", "Cleaning equipment daily", "Periodic replacement of parts"],
                answer: "Using monitoring tools to predict failures"
            },
            {
                id: 10,
                question: "What is the primary goal of preventive maintenance?",
                options: ["Reducing coal flow", "Repairing broken equipment", "Preventing equipment failures", "Cleaning all components"],
                answer: "Preventing equipment failures"
            },
            {
                id: 11,
                question: "What is a key task in coal crusher maintenance?",
                options: ["Replacing all motors annually", "Inspecting for wear and damage", "Increasing crushing speed", "Monitoring coal temperature"],
                answer: "Inspecting for wear and damage"
            },
            {
                id: 12,
                question: "Why is lubricating bearings important?",
                options: ["It prevents belt misalignment", "It reduces overheating and damage", "It speeds up conveyors", "It improves coal flow"],
                answer: "It reduces overheating and damage"
            },
            {
                id: 13,
                question: "What should be cleaned regularly in conveyors?",
                options: ["Belts and rollers", "Control panels", "Motors", "Coal crushers"],
                answer: "Belts and rollers"
            },
            {
                id: 14,
                question: "Inspecting stackers and reclaimers helps to:",
                options: ["Improve combustion efficiency", "Avoid structural failures", "Reduce energy consumption", "Speed up the feeder system"],
                answer: "Avoid structural failures"
            },
            {
                id: 15,
                question: "What should be replaced in coal crushers when worn out?",
                options: ["Conveyor belts", "Hammers or jaws", "Bearings", "Motors"],
                answer: "Hammers or jaws"
            },
            {
                id: 16,
                question: "What is a key conveyor maintenance task?",
                options: ["Lubricating belts", "Cleaning dust build-up on rollers", "Increasing conveyor length", "Adjusting coal feed rates"],
                answer: "Cleaning dust build-up on rollers"
            },
            {
                id: 17,
                question: "What is essential in stacker-reclaimer maintenance?",
                options: ["Inspecting structural integrity", "Increasing stacking speed", "Reducing lubrication intervals", "Adding more motors"],
                answer: "Inspecting structural integrity"
            },
            {
                id: 18,
                question: "What should be monitored in feeding systems?",
                options: ["Feed rate to match boiler demand", "Belt tension", "Air flow to the feeder", "Stacker speed"],
                answer: "Feed rate to match boiler demand"
            },
            {
                id: 19,
                question: "What can cause conveyor belt slippage?",
                options: ["Dust on crushers", "Incorrect belt tension", "Overfeeding of coal", "Misaligned stackers"],
                answer: "Incorrect belt tension"
            },
            {
                id: 20,
                question: "Blockages in feeders are caused by:",
                options: ["Dust build-up", "Incorrect feed rates", "Motor failures", "Electrical issues"],
                answer: "Dust build-up"
            },
            {
                id: 21,
                question: "What should be checked if motors are overheating?",
                options: ["Belt alignment", "Motor voltage and lubrication", "Coal quality", "Stacker speed"],
                answer: "Motor voltage and lubrication"
            },
            {
                id: 22,
                question: "How do you resolve inconsistent coal flow?",
                options: ["Check feeders, conveyors, and crushers for blockages", "Increase belt speed", "Clean stackers regularly", "Adjust feeder size"],
                answer: "Check feeders, conveyors, and crushers for blockages"
            },
            {
                id: 23,
                question: "What is critical for proper conveyor alignment?",
                options: ["Reducing motor speed", "Regular realignment checks", "Increasing coal feed rates", "Cleaning coal dust"],
                answer: "Regular realignment checks"
            },
            {
                id: 24,
                question: "What is the purpose of the lock-out/tag-out procedure?",
                options: ["Speed up maintenance", "Prevent accidental equipment start-ups", "Monitor coal levels", "Inspect belts for wear"],
                answer: "Prevent accidental equipment start-ups"
            },
            {
                id: 25,
                question: "How can dust exposure be minimized?",
                options: ["By increasing ventilation", "By lubricating motors", "By using vibration sensors", "By adjusting feeders"],
                answer: "By increasing ventilation"
            },
            {
                id: 26,
                question: "Which safety equipment is NOT essential in CHP maintenance?",
                options: ["Helmets", "Steel-toed boots", "Thermal cameras", "Gloves"],
                answer: "Thermal cameras"
            },
            {
                id: 27,
                question: "What is vibration monitoring used for?",
                options: ["Checking belt tension", "Detecting early signs of equipment failure", "Monitoring dust levels", "Adjusting motor alignment"],
                answer: "Detecting early signs of equipment failure"
            },
            {
                id: 28,
                question: "Thermal imaging identifies:",
                options: ["Misaligned conveyors", "Overheating components", "Low-quality coal", "Misaligned feeders"],
                answer: "Overheating components"
            },
            {
                id: 29,
                question: "Wear monitoring involves tracking:",
                options: ["Dust build-up", "Structural changes", "Component wear levels using sensors", "Motor speed"],
                answer: "Component wear levels using sensors"
            },
            {
                id: 30,
                question: "Lubrication analysis helps:",
                options: ["Predict equipment wear and failures", "Increase conveyor speed", "Reduce dust exposure", "Improve belt alignment"],
                answer: "Predict equipment wear and failures"
            }
        ],
        advanced: []
    },
    "maintenance-of-compressors": {
        basic: [
            {
                id: 1,
                question: "What is the primary function of a compressor?",
                options: ["Reduce the temperature of gases", "Increase the pressure of a gas by reducing its volume", "Maintain air circulation in industrial settings", "Purify gases for industrial use"],
                answer: "Increase the pressure of a gas by reducing its volume"
            },
            {
                id: 2,
                question: "Which industry is highlighted in the presentation as relying heavily on compressors?",
                options: ["Automobile manufacturing", "Ferro alloys industry", "Pharmaceutical industry", "Textile industry"],
                answer: "Ferro alloys industry"
            },
            {
                id: 3,
                question: "What are the two main categories of compressors?",
                options: ["Hydraulic and Pneumatic", "Positive Displacement and Dynamic", "Centrifugal and Reciprocating", "Electric and Gas-Powered"],
                answer: "Positive Displacement and Dynamic"
            },
            {
                id: 4,
                question: "Which compressor type uses pistons to compress air?",
                options: ["Centrifugal", "Reciprocating", "Screw", "Axial"],
                answer: "Reciprocating"
            },
            {
                id: 5,
                question: "How does a screw compressor work?",
                options: ["Air is drawn into a cylinder and compressed by a piston.", "Helical screws rotate, trapping and compressing air.", "Rotating blades accelerate air, converting speed into pressure.", "Air is compressed through a series of axial fans."],
                answer: "Helical screws rotate, trapping and compressing air"
            },
            {
                "id": 6,
                "question": "Which part of a centrifugal compressor converts speed into pressure?",
                "options": ["Piston", "Diffuser", "Blades", "Rotor"],
                "answer": "Diffuser"
            },
            {
                id: 7,
                question: "What is the role of a reciprocating compressor's discharge valve?",
                options: ["Draw air into the system", "Compress air using helical screws", "Release compressed air from the cylinder", "Separate contaminants from air"],
                answer: "Release compressed air from the cylinder"
            },
            {
                id: 8,
                question: "How do compressors assist in furnace operations?",
                options: ["By providing compressed air for combustion", "By cooling the furnace walls", "By stabilizing furnace temperature", "By mixing alloys"],
                answer: "By providing compressed air for combustion"
            },
            {
                id: 9,
                question: "What role do compressors play in gas handling?",
                options: ["Purify industrial waste gases", "Compress gases like oxygen, nitrogen, and CO2", "Increase gas temperature for smelting", "Reduce gas emissions"],
                answer: "Compress gases like oxygen, nitrogen, and CO2"
            },
            {
                id: 10,
                question: "What maintenance tools are powered by compressors?",
                options: ["Hydraulic jacks", "Pneumatic tools like drills and sanders", "Electric screwdrivers", "Welding equipment"],
                answer: "Pneumatic tools like drills and sanders"
            },
            {
                id: 11,
                question: "What does the capacity of a compressor measure?",
                options: ["Airflow rate (CFM or m³/h)", "Pressure output (bar or psi)", "Energy efficiency", "Noise levels"],
                answer: "Airflow rate (CFM or m³/h)"
            },
            {
                id: 12,
                question: "Why is durability important when selecting a compressor?",
                options: ["It determines the compressor's pressure output.", "It ensures reliability in harsh environments.", "It minimizes noise pollution.", "It reduces operational costs."],
                answer: "It ensures reliability in harsh environments"
            },
            {
                id: 13,
                question: "What is a common cause of pressure loss in compressors?",
                options: ["Excessive vibration", "Air leaks", "Overheating", "Belt wear"],
                answer: "Air leaks"
            },
            {
                id: 14,
                question: "What should be regularly inspected to avoid overheating?",
                options: ["Air filters", "Belts and hoses", "Pressure gauges", "Cooling systems"],
                answer: "Belts and hoses"
            },
            {
                id: 15,
                question: "Which maintenance task is essential for lubricated compressors?",
                options: ["Monitoring air purity", "Replacing air filters", "Changing oil regularly", "Adjusting pressure settings"],
                answer: "Changing oil regularly"
            },
            {
                id: 16,
                question: "Excessive vibration in a compressor may indicate:",
                options: ["Pressure relief valve failure", "Alignment issues", "Overloading", "Air contamination"],
                answer: "Alignment issues"
            },
            {
                id: 17,
                question: "What is the purpose of pressure relief valves?",
                options: ["To reduce noise levels", "To release excess pressure and prevent accidents", "To maintain air purity", "To control air temperature"],
                answer: "To release excess pressure and prevent accidents"
            },
            {
                id: 18,
                question: "Why is proper ventilation important in compressor areas?",
                options: ["To reduce operational noise", "To maintain air quality", "To avoid overheating and hazardous gas buildup", "To conserve energy"],
                answer: "To avoid overheating and hazardous gas buildup"
            },
            {
                id: 19,
                question: "What safety measure is crucial for personnel handling compressors?",
                options: ["Wearing protective footwear", "Regular training on compressor operation and maintenance", "Using vibration-dampening mounts", "Cleaning air filters weekly"],
                answer: "Regular training on compressor operation and maintenance"
            },
            {
                id: 20,
                question: "What is the role of filters and dryers in a compressed air system?",
                options: ["Increase air pressure", "Remove contaminants and moisture from the air", "Distribute compressed air throughout the facility", "Store compressed air"],
                answer: "Remove contaminants and moisture from the air"
            },
            {
                id: 21,
                question: "What is the main function of storage tanks in a compressed air system?",
                options: ["Increase pressure levels", "Provide a buffer between demand and supply", "Compress air", "Purify air"],
                answer: "Provide a buffer between demand and supply"
            },
            {
                id: 22,
                question: "What percentage of waste heat from compressors can be recycled?",
                options: ["10%", "15%", "25%", "30%"],
                answer: "15%"
            },
            {
                id: 23,
                question: "How can noise pollution from compressors be reduced?",
                options: ["Increasing air pressure", "Using soundproof enclosures", "Decreasing energy efficiency", "Eliminating storage tanks"],
                answer: "Using soundproof enclosures"
            },
            {
                id: 24,
                question: "What is a key trend for energy efficiency in compressors?",
                options: ["Reducing airflow rates", "Developing more efficient compressor models", "Eliminating pressure relief valves", "Increasing maintenance intervals"],
                answer: "Developing more efficient compressor models"
            },
            {
                id: 25,
                question: "What does CFM stand for in compressor capacity?",
                options: ["Cubic Feet per Minute", "Compressor Flow Management", "Compressed Fluid Measurement", "Cubic Flow Monitoring"],
                answer: "Cubic Feet per Minute"
            },
            {
                id: 26,
                question: "Which gas is commonly compressed for chemical processes in the ferro alloys industry?",
                options: ["Helium", "Oxygen", "Hydrogen", "Argon"],
                answer: "Oxygen"
            },
            {
                id: 27,
                question: "Which type of compressor is best suited for high-pressure requirements?",
                options: ["Screw compressor", "Reciprocating compressor", "Centrifugal compressor", "Axial compressor"],
                answer: "Reciprocating compressor"
            },
            {
                id: 28,
                question: "What is a common energy-saving feature in modern compressors?",
                options: ["Adjustable air filters", "Heat recovery systems", "Manual control systems", "Overpressure limiters"],
                answer: "Heat recovery systems"
            },
            {
                id: 29,
                question: "What can indicate mechanical failure in a compressor?",
                options: ["Overheating and noise", "Increased airflow", "Low air pressure", "Dust accumulation"],
                answer: "Overheating and noise"
            },
            {
                id: 30,
                question: "Why are predictive maintenance techniques useful for compressors?",
                options: ["They allow for emergency repairs.", "They help identify issues before failure occurs.", "They reduce pressure requirements.", "They improve air storage capacity."],
                answer: "They help identify issues before failure occurs"
            }
        ],
        advanced: [],
    },
    "maintenance-of-esp": {
        basic: [
            {
                id: 1,
                question: "What is the primary purpose of an Electrostatic Precipitator (ESP)?",
                options: ["Heat the exhaust gases", "Filter out dust and particulate matter from exhaust gases", "Compress air for power plants", "Remove carbon monoxide from emissions"],
                answer: "Filter out dust and particulate matter from exhaust gases"
            },
            {
                id: 2,
                question: "Which industry commonly uses ESPs?",
                options: ["Textile manufacturing", "Coal-fired power plants", "Automotive assembly", "Food processing"],
                answer: "Coal-fired power plants"
            },
            {
                id: 3,
                question: "What is one key reason ESPs are used in power plants?",
                options: ["To increase combustion efficiency", "To reduce air pollution", "To produce electricity", "To manage water consumption"],
                answer: "To reduce air pollution"
            },
            {
                id: 4,
                question: "How do ESPs help ensure compliance in power plants?",
                options: ["By reducing energy consumption", "By meeting environmental air quality regulations", "By increasing ash production", "By lowering boiler temperature"],
                answer: "By meeting environmental air quality regulations"
            },
            {
                id: 5,
                question: "How do ESPs contribute to public health?",
                options: ["They purify drinking water.", "They remove harmful particles from exhaust gases.", "They neutralize toxic gases.", "They reduce greenhouse gas emissions."],
                answer: "They remove harmful particles from exhaust gases."
            },
            {
                id: 6,
                question: "What is the role of discharge electrodes in an ESP?",
                options: ["Filter particulate matter", "Provide the high voltage needed for ionization", "Collect dust particles", "Shake the collecting plates"],
                answer: "Provide the high voltage needed for ionization"
            },
            {
                id: 7,
                question: "What do collecting plates do in an ESP?",
                options: ["Neutralize gases", "Attract and collect charged particles", "Generate high voltage", "Cool the exhaust gases"],
                answer: "Attract and collect charged particles"
            },
            {
                id: 8,
                question: "What is the function of the rapping mechanism in an ESP?",
                options: ["Ionize the exhaust gases", "Shake the collecting plates to dislodge dust", "Generate high voltage", "Filter out gases"],
                answer: "Shake the collecting plates to dislodge dust"
            },
            {
                id: 9,
                question: "What is the power supply’s role in an ESP?",
                options: ["Remove ash from the system", "Provide high voltage for the electrostatic charge", "Ensure the dust hopper is emptied regularly", "Neutralize harmful gases"],
                answer: "Provide high voltage for the electrostatic charge"
            },
            {
                id: 10,
                question: "What happens during the ionization step in an ESP?",
                options: ["Dust is shaken off collecting plates.", "Gas particles are given a negative charge.", "Particulate matter is neutralized.", "Dust exits with exhaust gases."],
                answer: "Gas particles are given a negative charge."
            },
            {
                id: 11,
                question: "What causes dust particles to stick to the collecting plates?",
                options: ["Magnetic attraction", "Electrostatic attraction", "Gravitational force", "Chemical bonding"],
                answer: "Electrostatic attraction"
            },
            {
                id: 12,
                question: "Where does the dust go after being dislodged from the plates?",
                options: ["Back into the exhaust stream", "Into a hopper for collection", "Into a secondary filter", "Released into the air"],
                answer: "Into a hopper for collection"
            },
            {
                id: 13,
                question: "Which type of ESP is designed for dry particulate matter?",
                options: ["Tubular ESP", "Wet ESP", "Dry ESP", "Hybrid ESP"],
                answer: "Dry ESP"
            },
            {
                id: 14,
                question: "What is a wet ESP used for?",
                options: ["Filtering moist or sticky particulates", "Neutralizing toxic gases", "Cooling exhaust gases", "Compressing air"],
                answer: "Filtering moist or sticky particulates"
            },
            {
                id: 15,
                question: "Which type of ESP uses large vertical plates for dust collection?",
                options: ["Plate-type ESP", "Tubular-type ESP", "Rotary ESP", "Hybrid ESP"],
                answer: "Plate-type ESP"
            },
            {
                id: 16,
                question: "What is the efficiency of ESPs in removing particulate matter?",
                options: ["Up to 50%", "Over 99%", "Approximately 70%", "Less than 30%"],
                answer: "Over 99%"
            },
            {
                id: 17,
                question: "Why are ESPs considered cost-effective?",
                options: ["They have low installation costs.", "They require minimal operating and maintenance costs.", "They eliminate the need for filters.", "They reduce power plant size."],
                answer: "They require minimal operating and maintenance costs."
            },
            {
                id: 18,
                question: "How do ESPs promote environmental compliance?",
                options: ["By increasing fuel efficiency", "By helping power plants meet air quality standards", "By reducing water usage", "By producing less ash"],
                answer: "By helping power plants meet air quality standards"
            },
            {
                id: 19,
                question: "What should be regularly checked on the electrodes and plates?",
                options: ["Dust build-up and corrosion", "Temperature levels", "Gas flow rate", "Rapping frequency"],
                answer: "Dust build-up and corrosion"
            },
            {
                id: 20,
                question: "Why is monitoring the power supply essential in ESPs?",
                options: ["To maintain the electrostatic field", "To reduce noise levels", "To increase fuel efficiency", "To prevent ash build-up"],
                answer: "To maintain the electrostatic field"
            },
            {
                id: 21,
                question: "What is the role of the rapping mechanism in maintenance?",
                options: ["Replace damaged plates", "Dislodge dust from collecting plates", "Cool the exhaust gases", "Monitor power supply"],
                answer: "Dislodge dust from collecting plates"
            },
            {
                id: 22,
                question: "What can cause decreased efficiency in an ESP?",
                options: ["Overheating of the power supply", "Dust accumulation or wear on components", "Increased airflow", "Overuse of rapping mechanisms"],
                answer: "Dust accumulation or wear on components"
            },
            {
                id: 23,
                question: "What is a common result of power supply failure in an ESP?",
                options: ["Reduced airflow", "Loss of the electrostatic field", "Increased gas temperature", "Corrosion of plates"],
                answer: "Loss of the electrostatic field"
            },
            {
                id: 24,
                question: "What environmental factor can lead to corrosion in ESPs?",
                options: ["High oxygen levels", "High temperatures and corrosive gases", "Low humidity", "Cold air intake"],
                answer: "High temperatures and corrosive gases"
            },
            {
                id: 25,
                question: "What is a key requirement for ESP regulatory compliance?",
                options: ["Regular training of operators", "Meeting limits on particulate matter emissions", "Reducing energy consumption", "Installing wet ESPs"],
                answer: "Meeting limits on particulate matter emissions"
            },
            {
                id: 26,
                question: "How are emissions monitored in real-time?",
                options: ["Using air filters", "Through Continuous Emissions Monitoring Systems (CEMS)", "Manual inspections", "Rapping mechanisms"],
                answer: "Through Continuous Emissions Monitoring Systems (CEMS)"
            },
            {
                id: 27,
                question: "Why is monitoring emissions important?",
                options: ["To reduce noise pollution", "To avoid fines and operational shutdowns", "To increase plant capacity", "To improve combustion efficiency"],
                answer: "To avoid fines and operational shutdowns"
            },
            {
                id: 28,
                question: "What is the primary advantage of a plate-type ESP over tubular types?",
                options: ["Higher efficiency", "Larger collection surfaces", "Reduced maintenance", "Better corrosion resistance"],
                answer: "Larger collection surfaces"
            },
            {
                id: 29,
                question: "How do ESPs help with cleaner power generation?",
                options: ["By increasing boiler temperature", "By capturing harmful particulates from exhaust gases", "By reducing noise pollution", "By neutralizing greenhouse gases"],
                answer: "By capturing harmful particulates from exhaust gases"
            },
            {
                id: 30,
                question: "Which gas byproduct is most commonly reduced using ESPs in coal power plants?",
                options: ["Carbon dioxide", "Sulfur dioxide", "Particulate matter like soot and ash", "Methane"],
                answer: "Particulate matter like soot and ash"
            }
        ],
        advanced: []
    },
    "maintenance-of-pumps": {
        basic: [
            {
                id: 1,
                question: "What is the primary purpose of pumps in power plants?",
                options: ["Generating electricity", "Circulating fluids", "Storing fuel", "Heating water"],
                answer: "Circulating fluids"
            },
            {
                id: 2,
                question: "Which industry uses pumps to manage high-temperature smelting processes?",
                options: ["Chemical", "Ferro Alloys", "Textile", "Automotive"],
                answer: "Ferro Alloys"
            },
            {
                id: 3,
                question: "What is a common function of pumps in both power plants and ferro alloys industries?",
                options: ["Electrical power generation", "Cooling system management", "Material grinding", "Fuel storage"],
                answer: "Cooling system management"
            },
            {
                id: 4,
                question: "Which pump type is the most commonly used in power plants?",
                options: ["Positive Displacement Pumps", "Slurry Pumps", "Centrifugal Pumps", "Vacuum Pumps"],
                answer: "Centrifugal Pumps"
            },
            {
                id: 5,
                question: "What is a unique feature of positive displacement pumps?",
                options: ["Consistent flow rate", "Low efficiency", "Used for gas compression", "Limited to water movement"],
                answer: "Consistent flow rate"
            },
            {
                id: 6,
                question: "Which pump is best suited for thick, viscous fluids?",
                options: ["Centrifugal Pumps", "Slurry Pumps", "Vacuum Pumps", "Positive Displacement Pumps"],
                answer: "Slurry Pumps"
            },
            {
                id: 7,
                question: "What is the primary function of vacuum pumps?",
                options: ["Remove solids from liquids", "Create a vacuum by removing air or gases", "Transfer high-viscosity fluids", "Increase fluid pressure"],
                answer: "Create a vacuum by removing air or gases"
            },
            {
                id: 8,
                question: "What generates the flow in a centrifugal pump?",
                options: ["Piston movement", "Rotating impeller", "Vacuum suction", "Magnetic field"],
                answer: "Rotating impeller"
            },
            {
                id: 9,
                question: "How do positive displacement pumps transfer fluid?",
                options: ["By creating centrifugal force", "By trapping fluid and forcing it through the system", "By evaporating liquid into gas", "By compressing air"],
                answer: "By trapping fluid and forcing it through the system"
            },
            {
                id: 10,
                question: "What is the output pressure mechanism in slurry pumps?",
                options: ["Impeller speed", "Vacuum suction", "Piston displacement", "Mechanical design for viscous materials"],
                answer: "Mechanical design for viscous materials"
            },
            {
                id: 11,
                question: "What fluid is typically moved by centrifugal pumps in power plants?",
                options: ["Steam", "Lubricant", "Fuel oil", "Slurry"],
                answer: "Steam"
            },
            {
                id: 12,
                question: "Which pump type is ideal for handling coal slurries in power plants?",
                options: ["Positive Displacement Pumps", "Slurry Pumps", "Centrifugal Pumps", "Vacuum Pumps"],
                answer: "Slurry Pumps"
            },
            {
                id: 13,
                question: "Where are vacuum pumps typically used in a power plant?",
                options: ["Cooling towers", "Boiler systems", "Fuel lines or gas systems", "Slurry handling units"],
                answer: "Fuel lines or gas systems"
            },
            {
                id: 14,
                question: "What is a common sign of pump malfunction?",
                options: ["Increased flow rate", "Overheating", "Reduced power consumption", "Silent operation"],
                answer: "Overheating"
            },
            {
                id: 15,
                question: "What issue is caused by air pockets in a pump system?",
                options: ["Increased pressure", "Reduced efficiency", "Vibration", "Over-lubrication"],
                answer: "Reduced efficiency"
            },
            {
                id: 16,
                question: "What component should be checked for excessive wear in centrifugal pumps?",
                options: ["Electrical wiring", "Impeller", "Lubricant type", "Vacuum chamber"],
                answer: "Impeller"
            },
            {
                id: 17,
                question: "What safety feature prevents pump rupture?",
                options: ["Seals", "Pressure relief valves", "Bearings", "Lubrication systems"],
                answer: "Pressure relief valves"
            },
            {
                id: 18,
                question: "Which safety measure is critical when handling chemical pumps?",
                options: ["Electrical grounding", "Ventilation", "Protective gear", "Monitoring noise levels"],
                answer: "Protective gear"
            },
            {
                id: 19,
                question: "Why is ventilation necessary for pumps handling gases?",
                options: ["To prevent overheating", "To ensure safe airflow", "To remove toxic gases", "To lubricate bearings"],
                answer: "To remove toxic gases"
            },
            {
                id: 20,
                question: "What is the purpose of preventive maintenance?",
                options: ["Increase pump speed", "Reduce downtime", "Eliminate lubrication", "Replace seals annually"],
                answer: "Reduce downtime"
            },
            {
                id: 21,
                question: "How often should pumps be inspected?",
                options: ["Monthly", "Bi-annually", "Annually", "Quarterly"],
                answer: "Monthly"
            },
            {
                id: 22,
                question: "What is a key maintenance step for impellers?",
                options: ["Increasing size", "Continuous operation", "Balancing", "Changing materials"],
                answer: "Balancing"
            },
            {
                id: 23,
                question: "Which maintenance step ensures smooth operation of bearings?",
                options: ["Cleaning", "Seal replacement", "Lubrication", "Ventilation"],
                answer: "Lubrication"
            },
            {
                id: 24,
                question: "What should be documented during pump inspections?",
                options: ["Operational hours", "Lubricant grade", "Findings and photographic evidence", "Manufacturer's specifications"],
                answer: "Findings and photographic evidence"
            },
            {
                id: 25,
                question: "What cleaning frequency is recommended for slurry pumps?",
                options: ["Weekly", "Monthly", "Quarterly", "Annually"],
                answer: "Quarterly"
            },
            {
                id: 26,
                question: "What should be done if impeller erosion exceeds 10%?",
                options: ["Continue operation", "Apply lubricant", "Replace or refurbish", "Reduce pressure"],
                answer: "Replace or refurbish"
            },
            {
                id: 27,
                question: "How often should lubrication be scheduled for most pumps?",
                options: ["Monthly", "Bi-annually", "Quarterly", "Annually"],
                answer: "Bi-annually"
            },
            {
                id: 28,
                question: "What is the primary factor in choosing a pump type?",
                options: ["Manufacturer", "Industry standards", "Fluid properties", "Cost"],
                answer: "Fluid properties"
            },
            {
                id: 29,
                question: "What type of pump is suited for precise chemical dosing?",
                options: ["Centrifugal Pumps", "Vacuum Pumps", "Positive Displacement Pumps", "Slurry Pumps"],
                answer: "Positive Displacement Pumps"
            },
            {
                id: 30,
                question: "Which type of vacuum pump is commonly used?",
                options: ["Rotary vane", "Piston", "Gear", "Axial flow"],
                answer: "Rotary vane"
            }
        ],
        advanced: []
    },
    "maintenance-of-wtp": {
        basic: [
            {
                id: 1,
                question: "What is the primary purpose of a Water Treatment Plant (WTP)?",
                options: ["Generating electricity", "Treating raw water for use", "Recycling wastewater", "Producing chemicals"],
                answer: "Treating raw water for use"
            },
            {
                id: 2,
                question: "Why is maintenance crucial for WTPs?",
                options: ["To increase water pressure", "To ensure consistent water quality and minimize downtime", "To maximize energy consumption", "To extend distribution pipelines"],
                answer: "To ensure consistent water quality and minimize downtime"
            },
            {
                id: 3,
                question: "What is one benefit of routine WTP maintenance?",
                options: ["Increased water wastage", "Shortened equipment life", "Prevention of unscheduled shutdowns", "Higher operational costs"],
                answer: "Prevention of unscheduled shutdowns"
            },
            {
                id: 4,
                question: "What is the primary function of the intake system in a WTP?",
                options: ["Filtration of fine particles", "Drawing water from the source", "Dosing chemicals", "Settling suspended solids"],
                answer: "Drawing water from the source"
            },
            {
                id: 5,
                question: "Which component adds chemicals to remove impurities?",
                options: ["Filtration system", "Coagulation and flocculation tanks", "Sedimentation basins", "Disinfection chamber"],
                answer: "Coagulation and flocculation tanks"
            },
            {
                id: 6,
                question: "Where are suspended particles allowed to settle in a WTP?",
                options: ["Sedimentation basins", "Filtration system", "Disinfection tanks", "Storage tanks"],
                answer: "Sedimentation basins"
            },
            {
                id: 7,
                question: "What should be done to intake screens to ensure proper operation?",
                options: ["Replace them monthly", "Inspect and clear debris regularly", "Paint them to prevent rust", "Run high-pressure water through them"],
                answer: "Inspect and clear debris regularly"
            },
            {
                id: 8,
                question: "What issue is addressed by cleaning coagulation and flocculation tanks?",
                options: ["Chemical imbalance", "Impeller wear", "Sediment accumulation", "Pump vibration"],
                answer: "Chemical imbalance"
            },
            {
                id: 9,
                question: "Why is it important to monitor settling performance in sedimentation basins?",
                options: ["To optimize chemical dosing", "To identify cracks", "To increase water temperature", "To prevent backflow"],
                answer: "To optimize chemical dosing"
            },
            {
                id: 10,
                question: "What does backwashing the filtration system achieve?",
                options: ["Reduces chemical residues", "Removes trapped particles", "Increases tank capacity", "Prevents corrosion"],
                answer: "Removes trapped particles"
            },
            {
                id: 11,
                question: "Which component requires regular inspection to maintain disinfectant levels?",
                options: ["Filtration media", "UV lamps", "Storage tanks", "Mixing chambers"],
                answer: "UV lamps"
            },
            {
                id: 12,
                question: "What is a sign of misalignment in pumps and motors?",
                options: ["Decreased flow rate", "Excessive vibration", "High chlorine levels", "Reduced chemical efficiency"],
                answer: "Excessive vibration"
            },
            {
                id: 13,
                question: "What is a common cause of clogged filters in WTPs?",
                options: ["Excessive sludge removal", "Accumulation of debris and particles", "Misaligned pipes", "Over-lubrication"],
                answer: "Accumulation of debris and particles"
            },
            {
                id: 14,
                question: "How can chemical imbalance in a WTP be resolved?",
                options: ["Backwashing filters", "Calibrating dosing pumps", "Increasing pump speed", "Reducing sedimentation time"],
                answer: "Calibrating dosing pumps"
            },
            {
                id: 15,
                question: "What is a solution to sludge accumulation in sedimentation basins?",
                options: ["Increase water flow", "Regularly clean and remove sludge", "Reduce chemical dosage", "Replace sedimentation tanks annually"],
                answer: "Regularly clean and remove sludge"
            },
            {
                id: 16,
                question: "What should be regularly tested to detect WTP issues early?",
                options: ["Operational pressure", "Water quality and chemical levels", "Pump alignment", "Electrical systems"],
                answer: "Water quality and chemical levels"
            },
            {
                id: 17,
                question: "Which preventive measure prolongs equipment life?",
                options: ["Continuous operation", "Scheduled inspections and lubrication", "Delayed repairs", "Increasing chemical dosage"],
                answer: "Scheduled inspections and lubrication"
            },
            {
                id: 18,
                question: "What is one reason to replace filter media?",
                options: ["Corrosion of pipes", "Worn-out filtration effectiveness", "High UV lamp intensity", "High chemical residue levels"],
                answer: "Worn-out filtration effectiveness"
            },
            {
                id: 19,
                question: "Which maintenance task helps maintain proper pressure in the distribution system?",
                options: ["Cleaning storage tanks", "Inspecting pumps", "Monitoring and repairing leaks", "Removing sludge"],
                answer: "Monitoring and repairing leaks"
            },
            {
                id: 20,
                question: "What is critical for preventing contamination in storage tanks?",
                options: ["Increasing pressure", "Regular cleaning and inspection", "Adding UV lamps", "Reducing flow rate"],
                answer: "Regular cleaning and inspection"
            },
            {
                id: 21,
                question: "Which component is responsible for removing bacteria in water?",
                options: ["Coagulation tank", "Filtration system", "Disinfection systems", "Storage tanks"],
                answer: "Disinfection systems"
            },
            {
                id: 22,
                question: "What tool is used to monitor filter performance?",
                options: ["Pressure gauges", "Chlorine dosing pumps", "UV intensity meters", "Sludge scrapers"],
                answer: "Pressure gauges"
            },
            {
                id: 23,
                question: "What action is taken if pressure in a filter becomes too high?",
                options: ["Increase water flow", "Perform backwashing", "Add more media", "Replace pipes"],
                answer: "Perform backwashing"
            },
            {
                id: 24,
                question: "What maintenance task ensures even flow in coagulation tanks?",
                options: ["Increasing chemical dosage", "Checking mixers for obstruction", "Cleaning sedimentation basins", "Backwashing filters"],
                answer: "Checking mixers for obstruction"
            },
            {
                id: 25,
                question: "How are cracks in sedimentation basins addressed?",
                options: ["By lowering flow rates", "Through timely repairs or reinforcements", "Replacing tank walls", "Adding chemical seals"],
                answer: "Through timely repairs or reinforcements"
            },
            {
                id: 26,
                question: "Which maintenance step helps prevent sludge buildup?",
                options: ["Replacing UV lamps", "Regularly cleaning basins", "Increasing pressure", "Installing larger tanks"],
                answer: "Regularly cleaning basins"
            },
            {
                id: 27,
                question: "What helps maintain consistent pump operation?",
                options: ["Adjusting flow rate", "Monitoring vibrations and lubrication", "Replacing seals annually", "Cleaning tanks weekly"],
                answer: "Monitoring vibrations and lubrication"
            },
            {
                id: 28,
                question: "What should be monitored to optimize system efficiency?",
                options: ["Chemical inventory", "Equipment vibration levels", "Operational data and performance", "Filter replacement frequency"],
                answer: "Operational data and performance"
            },
            {
                id: 29,
                question: "Why is water quality testing critical in WTPs?",
                options: ["To identify chemical residue buildup", "To detect contamination early", "To increase pressure in filters", "To reduce energy consumption"],
                answer: "To detect contamination early"
            },
            {
                id: 30,
                question: "Which maintenance task improves disinfection efficiency?",
                options: ["Backwashing filters", "Inspecting and calibrating dosing pumps", "Cleaning sludge removal systems", "Monitoring sedimentation performance"],
                answer: "Inspecting and calibrating dosing pumps"
            }
        ],
        advanced: []
    },
    "maintenance-of-hydraulics": {
        basic: [
            {
                id: 1,
                question: "What is the primary purpose of hydraulics in industrial applications?",
                options: ["Reduce costs", "Transmit force and control machinery", "Increase energy consumption", "Provide electrical backup"],
                answer: "Transmit force and control machinery"
            },
            {
                id: 2,
                question: "Which of the following industries commonly use hydraulic systems?",
                options: ["Software", "Ferro alloys and power plants", "Retail", "Telecommunications"],
                answer: "Ferro alloys and power plants"
            },
            {
                id: 3,
                question: "What is a key advantage of hydraulic systems?",
                options: ["Low power density", "High power density", "Limited force generation", "No maintenance required"],
                answer: "High power density"
            },
            {
                id: 4,
                question: "Which hydraulic component stores hydraulic fluid?",
                options: ["Pump", "Valve", "Reservoir", "Actuator"],
                answer: "Reservoir"
            },
            {
                id: 5,
                question: "Hydraulic fluids are typically made of:",
                options: ["Water", "Oil", "Gas", "Alcohol"],
                answer: "Oil"
            },
            {
                id: 6,
                question: "What is the function of a hydraulic pump?",
                options: ["To store fluid", "To convert mechanical energy into hydraulic energy", "To control fluid flow", "To create rotational motion"],
                answer: "To convert mechanical energy into hydraulic energy"
            },
            {
                id: 7,
                question: "Which component converts hydraulic energy into mechanical motion?",
                options: ["Pump", "Actuator", "Reservoir", "Valve"],
                answer: "Actuator"
            },
            {
                id: 8,
                question: "Which hydraulic component controls the flow and pressure of the fluid?",
                options: ["Cylinder", "Valve", "Actuator", "Pump"],
                answer: "Valve"
            },
            {
                id: 9,
                question: "Which type of actuator provides linear motion?",
                options: ["Gear", "Cylinder", "Turbine", "Fan"],
                answer: "Cylinder"
            },
            {
                id: 10,
                question: "Hydraulic cylinders are commonly used for:",
                options: ["Rotational movement", "Linear motion", "Cooling", "Power generation"],
                answer: "Linear motion"
            },
            {
                id: 11,
                question: "Which type of hydraulic pump is known for high pressure and efficiency?",
                options: ["Gear pump", "Piston pump", "Vane pump", "Centrifugal pump"],
                answer: "Piston pump"
            },
            {
                id: 12,
                question: "Hydraulic reservoirs help in:",
                options: ["Generating pressure", "Cooling the fluid", "Creating motion", "Rotating components"],
                answer: "Cooling the fluid"
            },
            {
                id: 13,
                question: "Which hydraulic valve type regulates pressure?",
                options: ["Flow control valve", "Directional control valve", "Pressure relief valve", "Shut-off valve"],
                answer: "Pressure relief valve"
            },
            {
                id: 14,
                question: "Hydraulic crushers in Ferro alloys are used for:",
                options: ["Lifting machinery", "Breaking down ores and minerals", "Cooling the system", "Controlling turbines"],
                answer: "Breaking down ores and minerals"
            },
            {
                id: 15,
                question: "Hydraulic lifts provide:",
                options: ["Electrical power", "Precise lifting control", "Rotational force", "Reduced maintenance"],
                answer: "Precise lifting control"
            },
            {
                id: 16,
                question: "What is essential for maintaining hydraulic fluid quality?",
                options: ["Temperature monitoring", "Fluid replacement", "Electrical testing", "Lubrication"],
                answer: "Fluid replacement"
            },
            {
                id: 17,
                question: "Which hydraulic pump type is cost-effective and reliable?",
                options: ["Gear pump", "Piston pump", "Vane pump", "Diaphragm pump"],
                answer: "Gear pump"
            },
            {
                id: 18,
                question: "Directional control valves are used to:",
                options: ["Cool the system", "Control fluid direction", "Store energy", "Generate hydraulic pressure"],
                answer: "Control fluid direction"
            },
            {
                id: 19,
                question: "What component ensures air bubbles are removed in a hydraulic system?",
                options: ["Pump", "Reservoir", "Cylinder", "Valve"],
                answer: "Reservoir"
            },
            {
                id: 20,
                question: "Hydraulic systems are highly reliable in:",
                options: ["Normal conditions", "Extreme conditions", "Light-duty applications", "Software management"],
                answer: "Extreme conditions"
            },
            {
                id: 21,
                question: "Which property of hydraulic fluid improves system performance?",
                options: ["High viscosity", "Lubricating properties", "Low temperature", "Increased hardness"],
                answer: "Lubricating properties"
            },
            {
                id: 22,
                question: "Hydraulic maintenance includes:",
                options: ["Regular filter replacement", "Ignoring fluid levels", "Reducing system pressure", "Stopping lubrication"],
                answer: "Regular filter replacement"
            },
            {
                id: 23,
                question: "Hydraulic systems improve energy efficiency by:",
                options: ["Increasing downtime", "Maintaining proper fluid levels", "Ignoring wear and tear", "Overheating components"],
                answer: "Maintaining proper fluid levels"
            },
            {
                id: 24,
                question: "Hydraulic systems in power plants are crucial for:",
                options: ["Boiler control", "Data processing", "System backup", "Reducing manpower"],
                answer: "Boiler control"
            },
            {
                id: 25,
                question: "Which actuator type powers rotational movement?",
                options: ["Hydraulic pump", "Hydraulic actuator", "Gear box", "Linear cylinder"],
                answer: "Hydraulic actuator"
            },
            {
                id: 26,
                question: "What is the role of a flow control valve?",
                options: ["Increase temperature", "Regulate flow rate", "Create rotational force", "Reduce energy usage"],
                answer: "Regulate flow rate"
            },
            {
                id: 27,
                question: "Hydraulic systems are used in Ferro alloys to:",
                options: ["Generate heat", "Compact materials", "Generate electricity", "Filter water"],
                answer: "Compact materials"
            },
            {
                id: 28,
                question: "What reduces wear in hydraulic systems?",
                options: ["Ignoring maintenance", "Proper lubrication", "Increased speed", "Reduced fluid levels"],
                answer: "Proper lubrication"
            },
            {
                id: 29,
                question: "Hydraulic presses in industry are used for:",
                options: ["Generating light force", "Shaping materials", "Cooling systems", "Storing energy"],
                answer: "Shaping materials"
            },
            {
                id: 30,
                question: "Which of the following enhances system safety?",
                options: ["Ignoring regular checks", "Performing proper maintenance", "Overheating the fluid", "Ignoring valve settings"],
                answer: "Performing proper maintenance"
            },
            {
                id: 31,
                question: "What is the primary role of hydraulic filters?",
                options: ["Enhance flow speed", "Prevent contaminants from entering the system", "Increase system pressure", "Reduce fluid viscosity"],
                answer: "Prevent contaminants from entering the system"
            },
            {
                id: 32,
                question: "Which component ensures the hydraulic system maintains a consistent fluid supply?",
                options: ["Pump", "Valve", "Reservoir", "Actuator"],
                answer: "Reservoir"
            },
            {
                id: 33,
                question: "Hydraulic maintenance helps to:",
                options: ["Increase downtime", "Prevent unexpected breakdowns", "Reduce safety", "Lower fluid levels"],
                answer: "Prevent unexpected breakdowns"
            },
            {
                id: 34,
                question: "Which hydraulic component converts fluid energy into linear mechanical motion?",
                options: ["Hydraulic actuator", "Hydraulic cylinder", "Hydraulic pump", "Directional control valve"],
                answer: "Hydraulic cylinder"
            },
            {
                id: 35,
                question: "Why is regular hose inspection important in hydraulic systems?",
                options: ["To check fluid color", "To prevent pressure drops and leaks", "To enhance system speed", "To increase reservoir capacity"],
                answer: "To prevent pressure drops and leaks"
            },
            {
                id: 36,
                question: "Which hydraulic pump type is most suitable for applications requiring precise flow control?",
                options: ["Gear pump", "Vane pump", "Piston pump", "Centrifugal pump"],
                answer: "Piston pump"
            },
            {
                id: 37,
                question: "Hydraulic valves help in:",
                options: ["Generating power", "Controlling fluid flow and pressure", "Storing hydraulic fluid", "Cooling the system"],
                answer: "Controlling fluid flow and pressure"
            },
            {
                id: 38,
                question: "Which hydraulic system component is used to break down ore in Ferro alloys?",
                options: ["Hydraulic press", "Hydraulic crusher", "Hydraulic pump", "Hydraulic valve"],
                answer: "Hydraulic crusher"
            },
            {
                id: 39,
                question: "How does oil contamination affect a hydraulic system?",
                options: ["Improves performance", "Reduces efficiency and damages components", "Increases lubrication", "Lowers system temperature"],
                answer: "Reduces efficiency and damages components"
            },
            {
                id: 40,
                question: "Hydraulic systems are widely used in which of the following equipment?",
                options: ["Mobile cranes", "Desktop computers", "Home appliances", "Musical instruments"],
                answer: "Mobile cranes"
            }
        ],
        advanced: []
    },
    "maintenance-of-ladle": {
        basic: [
            {
                id: 1,
                question: "What is the primary function of a ladle in the ferro alloys industry?",
                options: ["Cooling molten metal", "Handling and transporting molten metal", "Mixing raw materials", "Inspecting metals"],
                answer: "Handling and transporting molten metal"
            },
            {
                id: 2,
                question: "Which material is commonly used for the structural shell of ladles?",
                options: ["Aluminum", "Steel", "Copper", "Plastic"],
                answer: "Steel"
            },
            {
                id: 3,
                question: "What is the purpose of refractory lining in ladles?",
                options: ["Improve aesthetics", "Protect the ladle shell and improve durability", "Increase heat transfer", "Reduce weight"],
                answer: "Protect the ladle shell and improve durability"
            },
            {
                id: 4,
                question: "Which type of ladle is used to refine molten metal before casting?",
                options: ["Single ladle", "Vessel ladle", "Alloy ladle", "Ladle furnace (LF)"],
                answer: "Ladle furnace (LF)"
            },
            {
                id: 5,
                question: "What is the main challenge associated with slag in ladles?",
                options: ["Reducing ladle weight", "Maintaining alloy purity", "Improving heat resistance", "Decreasing refractory lining lifespan"],
                answer: "Maintaining alloy purity"
            },
            {
                id: 6,
                question: "Which equipment is used to lift and tilt ladles for pouring?",
                options: ["Ladle crane", "Preheating system", "Ladle tong", "Conveyor belt"],
                answer: "Ladle crane"
            },
            {
                id: 7,
                question: "What is a ladle shroud used for?",
                options: ["Insulating the ladle", "Controlling molten metal flow and preventing oxidation", "Preheating the ladle", "Moving the ladle"],
                answer: "Controlling molten metal flow and preventing oxidation"
            },
            {
                id: 8,
                question: "Which ladle type is best suited for handling large volumes of molten ferro alloys?",
                options: ["Single ladle", "Alloy ladle", "Vessel ladle", "Preheated ladle"],
                answer: "Vessel ladle"
            },
            {
                id: 9,
                question: "What material is often used for smaller ladles?",
                options: ["Cast iron", "Aluminum", "Copper", "Plastic"],
                answer: "Cast iron"
            },
            {
                id: 10,
                question: "What is the purpose of preheating ladles before use?",
                options: ["Reduce metal flow speed", "Maintain required temperature and prevent thermal shock", "Increase slag formation", "Improve ladle appearance"],
                answer: "Maintain required temperature and prevent thermal shock"
            },
            {
                id: 11,
                question: "What is one of the major wear issues in ladles?",
                options: ["Corrosion of steel shell", "Cracking of refractory lining", "Oxidation of molten metal", "Increase in ladle weight"],
                answer: "Cracking of refractory lining"
            },
            {
                id: 12,
                question: "Which safety feature is crucial for alloy ladles?",
                options: ["Reduced weight", "Enhanced corrosion resistance", "Specialized safety mechanisms", "Transparent design"],
                answer: "Specialized safety mechanisms"
            },
            {
                id: 13,
                question: "Ladle maintenance should focus on:",
                options: ["Reducing ladle usage", "Inspecting and repairing refractory lining", "Increasing metal impurity levels", "Avoiding slag removal"],
                answer: "Inspecting and repairing refractory lining"
            },
            {
                id: 14,
                question: "Which material is sometimes used as a protective coating in ladles?",
                options: ["Plastic", "Ceramic", "Glass", "Wood"],
                answer: "Ceramic"
            },
            {
                id: 15,
                question: "What role does a ladle tong play in ladle handling?",
                options: ["Insulating molten metal", "Lifting and moving ladles without a crane", "Preheating ladles", "Measuring metal temperature"],
                answer: "Lifting and moving ladles without a crane"
            },
            {
                id: 16,
                question: "What is the main benefit of using steel in ladle construction?",
                options: ["High weight", "High heat resistance and strength", "Low melting point", "Easy to replace"],
                answer: "High heat resistance and strength"
            },
            {
                id: 17,
                question: "Why are overhead monitoring systems used in ladle cranes?",
                options: ["Reduce operational speed", "Monitor ladle position, temperature, and contents", "Enhance the aesthetics of ladles", "Lower production costs"],
                answer: "Monitor ladle position, temperature, and contents"
            },
            {
                id: 18,
                question: "Which type of burner is commonly used in ladle preheating systems?",
                options: ["Electric or gas burners", "Diesel burners", "Solar heaters", "Steam heaters"],
                answer: "Electric or gas burners"
            },
            {
                id: 19,
                question: "What is the role of slag removal in ladle maintenance?",
                options: ["Reduce ladle lifespan", "Maintain lining integrity and ensure smooth metal flow", "Prevent metal mixing", "Decrease heat retention"],
                answer: "Maintain lining integrity and ensure smooth metal flow"
            },
            {
                id: 20,
                question: "Why is regular cleaning of ladles important?",
                options: ["Prevent slag buildup and improve operational efficiency", "Reduce the ladle weight", "Decrease metal production costs", "Avoid overheating the ladle"],
                answer: "Prevent slag buildup and improve operational efficiency"
            },
            {
                id: 21,
                question: "What happens if refractory lining is not properly maintained?",
                options: ["Increased metal purity", "Risk of leaks and reduced heat insulation", "Improved slag removal", "Faster production speed"],
                answer: "Risk of leaks and reduced heat insulation"
            },
            {
                id: 22,
                question: "What is thermal insulation used for in ladles?",
                options: ["Enhance metal flow", "Protect operators from high temperatures", "Reduce ladle weight", "Improve casting precision"],
                answer: "Protect operators from high temperatures"
            },
            {
                id: 23,
                question: "What is a common issue when handling different ferro alloys in the same ladle?",
                options: ["Inconsistent slag removal", "Alloy versatility challenges", "Reduced metal flow rate", "Decreased ladle lifespan"],
                answer: "Alloy versatility challenges"
            },
            {
                id: 24,
                question: "Which component helps prevent oxidation during molten metal pouring?",
                options: ["Ladle tong", "Ladle shroud", "Preheating system", "Monitoring system"],
                answer: "Ladle shroud"
            },
            {
                id: 25,
                question: "What is the purpose of emergency response systems in ladle operations?",
                options: ["Enhance operator productivity", "Respond to abnormal conditions and prevent accidents", "Increase ladle speed", "Automate slag removal"],
                answer: "Respond to abnormal conditions and prevent accidents"
            },
            {
                id: 26,
                question: "Which ladle type includes heating elements?",
                options: ["Alloy ladle", "Ladle furnace (LF)", "Single ladle", "Vessel ladle"],
                answer: "Ladle furnace (LF)"
            },
            {
                id: 27,
                question: "Proper refractory lining assessment prevents:",
                options: ["Slag formation", "Leaks and thermal inefficiencies", "Increased heat transfer", "Alloy contamination"],
                answer: "Leaks and thermal inefficiencies"
            },
            {
                id: 28,
                question: "How does slag removal impact ladle operations?",
                options: ["Slows down pouring process", "Ensures better alloy quality", "Increases refractory wear", "Decreases operator safety"],
                answer: "Ensures better alloy quality"
            },
            {
                id: 29,
                question: "What is the main structural integrity concern in ladle maintenance?",
                options: ["Replacing steel shell", "Identifying wear or cracks in refractory lining", "Increasing slag capacity", "Reducing ladle size"],
                answer: "Identifying wear or cracks in refractory lining"
            },
            {
                id: 30,
                question: "Which safety measure is critical for ladle operators?",
                options: ["Wearing heat-resistant protective gear", "Reducing slag formation", "Avoiding preheating", "Skipping refractory lining checks"],
                answer: "Wearing heat-resistant protective gear"
            }
        ]
    },
    //E&I Maintenance
    "e&i-maintenance-of-boiler": {
        basic: [
            {
                id: 1,
                question: "What is the primary purpose of boilers in industrial settings?",
                options: ["Cooling systems", "Generating steam or hot water", "Power storage", "Material transport"],
                answer: "Generating steam or hot water"
            },
            {
                id: 2,
                question: "Which of the following is NOT a component of a boiler?",
                options: ["Heat exchanger", "Firebox", "Transformer", "Controls"],
                answer: "Transformer"
            },
            {
                id: 3,
                question: "Boilers are critical infrastructure in:",
                options: ["Power plants", "Data centers", "Automobile showrooms", "Retail stores"],
                answer: "Power plants"
            },
            {
                id: 4,
                question: "Proper maintenance of boiler systems prevents:",
                options: ["Energy efficiency", "Equipment failures", "Steam generation", "Water flow"],
                answer: "Equipment failures"
            },
            {
                id: 5,
                question: "Why is compliance assurance important in boiler maintenance?",
                options: ["To increase pressure", "To meet safety and regulatory requirements", "To enhance visual design", "To boost production speed"],
                answer: "To meet safety and regulatory requirements"
            },
            {
                id: 6,
                question: "Regular calibration helps:",
                options: ["Increase fuel consumption", "Maintain optimal efficiency", "Decrease boiler size", "Reduce sensor activity"],
                answer: "Maintain optimal efficiency"
            },
            {
                id: 7,
                question: "What does the motor control in a boiler manage?",
                options: ["Heat exchanger", "Fans and pumps", "Steam temperature", "Water levels"],
                answer: "Fans and pumps"
            },
            {
                id: 8,
                question: "Safety interlocks are used to:",
                options: ["Increase production speed", "Protect personnel and equipment", "Enhance energy recovery", "Distribute electrical signals"],
                answer: "Protect personnel and equipment"
            },
            {
                id: 9,
                question: "Instrumentation wiring ensures:",
                options: ["Insulation monitoring", "Reliable signal transmission", "Physical structure of the boiler", "Automatic cleaning"],
                answer: "Reliable signal transmission"
            },
            {
                id: 10,
                question: "Boiler performance relies on monitoring:",
                options: ["Structural layout", "Critical parameters like temperature and pressure", "Supply chains", "Employee schedules"],
                answer: "Critical parameters like temperature and pressure"
            },
            {
                id: 11,
                question: "Proper calibration and maintenance of boiler instruments help:",
                options: ["Increase system downtime", "Prevent costly downtime", "Automate employee training", "Enhance visual aesthetics"],
                answer: "Prevent costly downtime"
            },
            {
                id: 12,
                question: "Preventive maintenance includes:",
                options: ["Emergency shutdowns", "Scheduled inspections and proactive fixes", "Boiler redesign", "Increasing operational stress"],
                answer: "Scheduled inspections and proactive fixes"
            },
            {
                id: 13,
                question: "Predictive monitoring involves:",
                options: ["Fixing boilers after a failure", "Analyzing data for potential issues", "Reducing the number of sensors", "Ignoring previous maintenance records"],
                answer: "Analyzing data for potential issues"
            },
            {
                id: 14,
                question: "A systematic troubleshooting process helps identify:",
                options: ["Installation sites", "The root cause of electrical problems", "Boiler design parameters", "Fuel efficiency ratings"],
                answer: "The root cause of electrical problems"
            },
            {
                id: 15,
                question: "Which tool is essential for electrical testing?",
                options: ["Infrared camera", "Multimeter", "Power drill", "Thermal regulator"],
                answer: "Multimeter"
            },
            {
                id: 16,
                question: "Schematic reviews help in:",
                options: ["Understanding electrical systems", "Designing fuel systems", "Steam optimization", "Ignoring maintenance issues"],
                answer: "Understanding electrical systems"
            },
            {
                id: 17,
                question: "Safety interlocks automatically:",
                options: ["Increase combustion", "Shut down the boiler in hazardous conditions", "Reduce monitoring sensors", "Enhance steam color"],
                answer: "Shut down the boiler in hazardous conditions"
            },
            {
                id: 18,
                question: "Alarm systems in boilers:",
                options: ["Monitor employee attendance", "Provide real-time alerts for malfunctions", "Reduce fuel efficiency", "Simplify operation complexity"],
                answer: "Provide real-time alerts for malfunctions"
            },
            {
                id: 19,
                question: "Calibration procedures must follow:",
                options: ["Manufacturer guidelines", "Random testing methods", "Employee preferences", "Immediate shutdown protocols"],
                answer: "Manufacturer guidelines"
            },
            {
                id: 20,
                question: "Proper documentation of calibration includes:",
                options: ["Repair time only", "Maintenance history and adjustments", "Estimated fuel usage", "Employee certification details"],
                answer: "Maintenance history and adjustments"
            },
            {
                id: 21,
                question: "Vibration analysis is used to detect:",
                options: ["Boiler fuel types", "Imbalances or misalignment", "External temperature changes", "Internal water flow patterns"],
                answer: "Imbalances or misalignment"
            },
            {
                id: 22,
                question: "Ultrasonic testing evaluates:",
                options: ["Fuel composition", "Structural integrity of boiler tubes", "Steam pressure distribution", "Electrical panel designs"],
                answer: "Structural integrity of boiler tubes"
            },
            {
                id: 23,
                question: "Data analytics in predictive maintenance identifies:",
                options: ["Patterns in equipment degradation", "Boiler color changes", "Employee workload", "Irregular steam paths"],
                answer: "Patterns in equipment degradation"
            },
            {
                id: 24,
                question: "Machine learning in maintenance:",
                options: ["Increases failure rates", "Forecasts requirements proactively", "Eliminates operational records", "Randomizes safety protocols"],
                answer: "Forecasts requirements proactively"
            },
            {
                id: 25,
                question: "Combustion settings improve:",
                options: ["Water level stability", "Fuel efficiency", "Structural alignment", "Safety interlock response time"],
                answer: "Fuel efficiency"
            },
            {
                id: 26,
                question: "Advanced analytics help optimize:",
                options: ["Employee schedules", "Fuel consumption and emissions", "Instrumentation color codes", "Operational delays"],
                answer: "Fuel consumption and emissions"
            },
            {
                id: 27,
                question: "Detailed maintenance records support:",
                options: ["Enhanced structural redesign", "Regulatory compliance and safety", "Employee promotion schedules", "Random parameter adjustments"],
                answer: "Regulatory compliance and safety"
            },
            {
                id: 28,
                question: "Boiler inspections verify compliance with:",
                options: ["Manufacturer branding", "Safety and environmental regulations", "Employee training protocols", "Electrical systems only"],
                answer: "Safety and environmental regulations"
            },
            {
                id: 29,
                question: "Preventive scheduling ensures:",
                options: ["Proactive issue resolution", "Increased system overload", "Emergency shutdowns only", "Delayed inspection activities"],
                answer: "Proactive issue resolution"
            },
            {
                id: 30,
                question: "Skilled maintenance teams should:",
                options: ["Overlook safety measures", "Possess expertise in electrical and instrumentation tasks", "Only focus on fuel supply", "Avoid using advanced tools"],
                answer: "Possess expertise in electrical and instrumentation tasks"
            }
        ],
        advanced: []
    },
    "e&i-maintenance-of-control-panel": {
        basic: [
            {
                id: 1,
                question: "What is the primary goal of preventive maintenance?",
                options: ["Increase downtime", "Extend equipment lifespan", "Reduce energy efficiency", "Eliminate the need for inspections"],
                answer: "Extend equipment lifespan"
            },
            {
                id: 2,
                question: "Which component protects a circuit from overcurrent?",
                options: ["Relay", "Circuit Breaker", "Transformer", "Flow Meter"],
                answer: "Circuit Breaker"
            },
            {
                id: 3,
                question: "What is the purpose of a temperature sensor in control panels?",
                options: ["Measure fluid flow", "Indicate fill levels", "Provide real-time temperature data", "Control voltage levels"],
                answer: "Provide real-time temperature data"
            },
            {
                id: 4,
                question: "Which instrument measures the pressure of liquids or gases?",
                options: ["Flow Meter", "Pressure Transmitter", "Level Indicator", "Relay"],
                answer: "Pressure Transmitter"
            },
            {
                id: 5,
                question: "Why is grounding important in control panels?",
                options: ["Reduces power consumption", "Provides a safe path for electricity", "Prevents overheating", "Measures voltage levels"],
                answer: "Provides a safe path for electricity"
            },
            {
                id: 6,
                question: "Which maintenance activity involves replacing components before they fail?",
                options: ["Routine Inspection", "Scheduled Maintenance", "Proactive Replacement", "Calibration"],
                answer: "Proactive Replacement"
            },
            {
                id: 7,
                question: "What does a flow meter measure?",
                options: ["Voltage", "Fluid movement rate", "Temperature", "Pressure"],
                answer: "Fluid movement rate"
            },
            {
                id: 8,
                question: "What type of checklist ensures comprehensive inspection of control panels?",
                options: ["Calibration list", "Maintenance checklist", "Component list", "Troubleshooting guide"],
                answer: "Maintenance checklist"
            },
            {
                id: 9,
                question: "Which of the following is a key safety measure in control panel maintenance?",
                options: ["Skipping inspections", "Using PPE", "Overloading circuits", "Ignoring signs of wear"],
                answer: "Using PPE"
            },
            {
                id: 10,
                question: "Which device adjusts and verifies instrument accuracy?",
                options: ["Multimeter", "Calibrator", "Relay", "Circuit Breaker"],
                answer: "Calibrator"
            },
            {
                id: 11,
                question: "What is the role of a relay in a control panel?",
                options: ["Regulate voltage", "Measure temperature", "Act as a switch", "Monitor fluid levels"],
                answer: "Act as a switch"
            },
            {
                id: 12,
                question: "What is the first step in troubleshooting electrical issues?",
                options: ["Test components", "Repair faulty parts", "Inspect components", "Replace the panel"],
                answer: "Inspect components"
            },
            {
                id: 13,
                question: "Which software feature helps predict equipment failures?",
                options: ["Asset Tracking", "Predictive Analytics", "Work Order Management", "Calibration"],
                answer: "Predictive Analytics"
            },
            {
                id: 14,
                question: "Which maintenance strategy uses sensor data to optimize schedules?",
                options: ["Routine Inspections", "Proactive Replacements", "Predictive Maintenance", "Scheduled Maintenance"],
                answer: "Predictive Maintenance"
            },
            {
                id: 15,
                question: "What is a common electrical component in control panels?",
                options: ["Circuit Breaker", "Pressure Gauge", "Data Logger", "Optical Sensor"],
                answer: "Circuit Breaker"
            },
            {
                id: 16,
                question: "How often should calibration be performed on instrumentation devices?",
                options: ["Once a year", "According to the schedule", "Only when faulty", "Daily"],
                answer: "According to the schedule"
            },
            {
                id: 17,
                question: "What is the main advantage of using cable management systems?",
                options: ["Reduce energy consumption", "Improve wiring organization", "Increase panel size", "Delay troubleshooting"],
                answer: "Improve wiring organization"
            },
            {
                id: 18,
                question: "Which device tracks fluid levels in containers?",
                options: ["Level Indicator", "Pressure Transmitter", "Flow Meter", "Transformer"],
                answer: "Level Indicator"
            },
            {
                id: 19,
                question: "Which protocol ensures safety during panel maintenance?",
                options: ["Grounding Protocols", "Overcurrent Protection", "Labeling Protocols", "Load Balancing"],
                answer: "Grounding Protocols"
            },
            {
                id: 20,
                question: "Which tool is commonly used for electrical testing?",
                options: ["Screwdriver", "Multimeter", "Calibrator", "Relay Tester"],
                answer: "Multimeter"
            },
            {
                id: 21,
                question: "What does CMMS stand for?",
                options: ["Control Monitoring Management System", "Computerized Maintenance Management System", "Calibration Maintenance Management System", "Circuit Maintenance Monitoring System"],
                answer: "Computerized Maintenance Management System"
            },
            {
                id: 22,
                question: "Which component is responsible for voltage regulation?",
                options: ["Transformer", "Relay", "Circuit Breaker", "Terminal Block"],
                answer: "Transformer"
            },
            {
                id: 23,
                question: "What should be included in maintenance records?",
                options: ["Electrical schematics only", "Calibration activities and results", "Design specifications", "General observations"],
                answer: "Calibration activities and results"
            },
            {
                id: 24,
                question: "Which strategy involves checking for damage and wear regularly?",
                options: ["Troubleshooting", "Routine Inspections", "Scheduled Maintenance", "Calibration"],
                answer: "Routine Inspections"
            },
            {
                id: 25,
                question: "Which best practice improves the lifespan of control panels?",
                options: ["Ignoring minor faults", "Regular maintenance", "Reducing operational time", "Overloading circuits"],
                answer: "Regular maintenance"
            },
            {
                id: 26,
                question: "What is a transformer used for in a control panel?",
                options: ["Amplify signals", "Change voltage levels", "Measure temperature", "Detect faults"],
                answer: "Change voltage levels"
            },
            {
                id: 27,
                question: "Which document simplifies troubleshooting and maintenance?",
                options: ["User Manual", "Schematic Diagram", "Safety Manual", "Installation Guide"],
                answer: "Schematic Diagram"
            },
            {
                id: 28,
                question: "What is the purpose of spare parts management?",
                options: ["Delay repairs", "Minimize downtime", "Increase storage costs", "Overload inventory"],
                answer: "Minimize downtime"
            },
            {
                id: 29,
                question: "Which safety measure helps prevent accidental operation during maintenance?",
                options: ["Lockout/Tagout Procedures", "Circuit Overloading", "Overcurrent Protection", "Calibration"],
                answer: "Lockout/Tagout Procedures"
            },
            {
                id: 30,
                question: "Which feature in software tools tracks spare part usage?",
                options: ["Work Order Management", "Asset Tracking", "Inventory Optimization", "Condition Monitoring"],
                answer: "Inventory Optimization"
            }
        ],
        advanced: []
    },
    "e&i-maintenance-of-generator": {
        basic: [
            {
                id: 1,
                question: "What is the primary goal of electrical and instrumentation (E&I) maintenance in a thermal power plant?",
                options: ["Increasing generator size", "Minimizing downtime and maximizing power output", "Reducing the number of sensors", "Simplifying plant operations"],
                answer: "Minimizing downtime and maximizing power output"
            },
            {
                id: 2,
                question: "Regular E&I maintenance ensures compliance with:",
                options: ["Sales quotas", "Industry standards and regulations", "Software licensing", "Customer expectations"],
                answer: "Industry standards and regulations"
            },
            {
                id: 3,
                question: "Proactive E&I maintenance leads to:",
                options: ["Lower energy consumption", "Increased mechanical failures", "Unplanned outages", "Reduced safety measures"],
                answer: "Lower energy consumption"
            },
            {
                id: 4,
                question: "What is the role of the rotor in a thermal power plant generator?",
                options: ["Produces electric current", "Generates the magnetic field", "Steps up the voltage", "Transfers heat"],
                answer: "Generates the magnetic field"
            },
            {
                id: 5,
                question: "The stationary component of the generator that produces electric current is the:",
                options: ["Rotor", "Exciter", "Stator", "Cooling system"],
                answer: "Stator"
            },
            {
                id: 6,
                question: "The exciter in a generator provides:",
                options: ["Direct current to energize the rotor's magnetic field", "Cooling to the generator components", "Alternating current to the stator", "Power to the control systems"],
                answer: "Direct current to energize the rotor's magnetic field"
            },
            {
                id: 7,
                question: "Step-up transformers in a power plant:",
                options: ["Increase the generator's output voltage for the transmission grid", "Reduce the generator's output voltage for local use", "Monitor generator efficiency", "Control power outages"],
                answer: "Increase the generator's output voltage for the transmission grid"
            },
            {
                id: 8,
                question: "What does switchgear control and protect?",
                options: ["Water levels", "Fuel flow", "Electrical distribution", "Generator rotation speed"],
                answer: "Electrical distribution"
            },
            {
                id: 9,
                question: "Sensors in thermal power plants monitor:",
                options: ["Employee performance", "Parameters like temperature, pressure, and vibration", "Administrative data", "Building layouts"],
                answer: "Parameters like temperature, pressure, and vibration"
            },
            {
                id: 10,
                question: "PLCs and DCS in power plants are used for:",
                options: ["Supervising employees", "Analyzing sensor data for precise control", "Repairing electrical faults", "Enhancing generator color displays"],
                answer: "Analyzing sensor data for precise control"
            },
            {
                id: 11,
                question: "Routine servicing tasks include:",
                options: ["Installing new generators", "Cleaning, lubrication, and minor adjustments", "Increasing vibration thresholds", "Delaying equipment replacement"],
                answer: "Cleaning, lubrication, and minor adjustments"
            },
            {
                id: 12,
                question: "Replacing aging parts proactively prevents:",
                options: ["Overheating", "Generator size reduction", "Unplanned downtime", "Improved steam pressure"],
                answer: "Unplanned downtime"
            },
            {
                id: 13,
                question: "Vibration analysis is used to detect:",
                options: ["Fuel efficiency improvements", "Bearing wear and mechanical imbalances", "Electrical signal losses", "Sensor miscalibration"],
                answer: "Bearing wear and mechanical imbalances"
            },
            {
                id: 14,
                question: "Thermography identifies:",
                options: ["Generator capacity issues", "Hot spots and insulation problems", "Improper fuel flow", "Excessive cooling"],
                answer: "Hot spots and insulation problems"
            },
            {
                id: 15,
                question: "Motor Current Signature Analysis (MCSA) helps identify:",
                options: ["Electrical issues in motor waveforms", "Vibration-related failures", "Incorrect lubrication techniques", "Sensor misalignment"],
                answer: "Electrical issues in motor waveforms"
            },
            {
                id: 16,
                question: "Thermal imaging detects:",
                options: ["Mechanical imbalances", "Electrical system hot spots", "Sensor calibration issues", "Water flow irregularities"],
                answer: "Electrical system hot spots"
            },
            {
                id: 17,
                question: "Ultrasound inspection is useful for identifying:",
                options: ["Magnetic field anomalies", "Partial discharge and corona issues in high-voltage equipment", "Overcooling in stators", "Incorrect excitation currents"],
                answer: "Partial discharge and corona issues in high-voltage equipment"
            },
            {
                id: 18,
                question: "A systematic troubleshooting approach involves:",
                options: ["Random trial-and-error fixes", "Sequentially isolating faults using diagnostic tools", "Ignoring maintenance records", "Directly replacing all sensors"],
                answer: "Sequentially isolating faults using diagnostic tools"
            },
            {
                id: 19,
                question: "Insulation testers are used to:",
                options: ["Analyze mechanical imbalances", "Measure electrical insulation strength", "Check rotor alignment", "Monitor lubrication levels"],
                answer: "Measure electrical insulation strength"
            },
            {
                id: 20,
                question: "Control loop analysis focuses on:",
                options: ["Checking rotor speed", "Evaluating PID loop tuning and control logic", "Adjusting physical parameters", "Inspecting external wiring only"],
                answer: "Evaluating PID loop tuning and control logic"
            },
            {
                id: 21,
                question: "Signal verification ensures:",
                options: ["Fuel flow is constant", "Accurate data transmission from sensors to control systems", "Enhanced system aesthetics", "Extended cooling durations"],
                answer: "Accurate data transmission from sensors to control systems"
            },
            {
                id: 22,
                question: "Predictive ordering of spare parts relies on:",
                options: ["Historical data and analytics", "Emergency failures", "Employee requests", "Random stock checks"],
                answer: "Historical data and analytics"
            },
            {
                id: 23,
                question: "Regular spare part condition monitoring ensures:",
                options: ["Higher replacement costs", "Readiness for immediate deployment", "Extended downtime", "Improved plant lighting"],
                answer: "Readiness for immediate deployment"
            },
            {
                id: 24,
                question: "Maintenance documentation includes:",
                options: ["Generator replacement history", "Work orders, inspection reports, and repair records", "Visual inspection reports only", "Employee attendance logs"],
                answer: "Work orders, inspection reports, and repair records"
            },
            {
                id: 25,
                question: "Performance metrics tracked in maintenance include:",
                options: ["Employee skill levels", "Downtime and mean time between failures", "Annual profits", "Number of employees"],
                answer: "Downtime and mean time between failures"
            },
            {
                id: 26,
                question: "Ensuring asset longevity in E&I systems involves:",
                options: ["Ignoring minor issues", "Regularly servicing and maintaining equipment", "Reducing maintenance schedules", "Overloading system components"],
                answer: "Regularly servicing and maintaining equipment"
            },
            {
                id: 27,
                question: "Cost savings in E&I maintenance are achieved through:",
                options: ["Delayed equipment replacement", "Proactive and optimized maintenance", "Random inspections", "Ignoring safety hazards"],
                answer: "Proactive and optimized maintenance"
            },
            {
                id: 28,
                question: "The primary function of the generator in a thermal power plant is to:",
                options: ["Supply steam to the turbines", "Convert mechanical energy to electrical energy", "Control fuel flow", "Monitor cooling systems"],
                answer: "Convert mechanical energy to electrical energy"
            },
            {
                id: 29,
                question: "The cooling system in the generator:",
                options: ["Prevents overheating of critical components", "Reduces electrical output", "Optimizes fuel usage", "Increases vibration levels"],
                answer: "Prevents overheating of critical components"
            },
            {
                id: 30,
                question: "Step-down transformers are primarily used to:",
                options: ["Increase voltage for transmission", "Distribute power within the plant", "Monitor vibration levels", "Generate magnetic fields"],
                answer: "Distribute power within the plant"
            }
        ],
        advanced: []
    },
    "e&i-maintenance-of-motors": {
        basic: [
            {
                id: 1,
                question: "What is the primary function of an electric motor?",
                options: ["Convert mechanical energy into electrical energy", "Convert electrical energy into mechanical energy", "Store electrical energy", "Regulate current flow"],
                answer: "Convert electrical energy into mechanical energy"
            },
            {
                id: 2,
                question: "Which principle do electric motors operate on?",
                options: ["Electromagnetism", "Thermodynamics", "Photovoltaics", "Fluid dynamics"],
                answer: "Electromagnetism"
            },
            {
                id: 3,
                question: "Which of the following is NOT a common type of motor?",
                options: ["AC Motor", "DC Motor", "Hybrid Motor", "Pneumatic Motor"],
                answer: "Pneumatic Motor"
            },
            {
                id: 4,
                question: "What component in an electric motor generates the magnetic field?",
                options: ["Rotor", "Stator", "Bearings", "Shaft"],
                answer: "Stator"
            },
            {
                id: 5,
                question: "Which part of the motor rotates and produces torque?",
                options: ["Stator", "Rotor", "Armature", "Windings"],
                answer: "Rotor"
            },
            {
                id: 6,
                question: "Why is motor maintenance important?",
                options: ["To reduce energy consumption", "To improve motor design", "To extend motor lifespan and enhance safety", "To increase manufacturing costs"],
                answer: "To extend motor lifespan and enhance safety"
            },
            {
                id: 7,
                question: "What is the first step in preventive motor maintenance?",
                options: ["Lubrication", "Inspection", "Testing", "Part Replacement"],
                answer: "Inspection"
            },
            {
                id: 8,
                question: "Which maintenance task helps prevent overheating in motors?",
                options: ["Lubrication", "Cleaning air vents", "Replacing bearings", "Aligning the shaft"],
                answer: "Cleaning air vents"
            },
            {
                id: 9,
                question: "Which tool is commonly used for detecting hotspots in motors?",
                options: ["Multimeter", "Thermal Imaging Camera", "Oscilloscope", "Tachometer"],
                answer: "Thermal Imaging Camera"
            },
            {
                id: 10,
                question: "What causes motor vibration?",
                options: ["Misalignment or imbalance", "Proper lubrication", "Low power supply", "Overvoltage"],
                answer: "Misalignment or imbalance"
            },
            {
                id: 11,
                question: "Which of the following is a sign of winding damage?",
                options: ["Increased torque", "Reduced speed", "Burn marks or insulation breakdown", "Clear airflow"],
                answer: "Burn marks or insulation breakdown"
            },
            {
                id: 12,
                question: "How can motor bearings be maintained?",
                options: ["By regular lubrication and inspection", "By replacing the rotor", "By aligning the shaft", "By installing a new stator"],
                answer: "By regular lubrication and inspection"
            },
            {
                id: 13,
                question: "What is the purpose of dynamic balancing in motors?",
                options: ["Prevent electrical faults", "Reduce vibration by balancing rotor mass", "Enhance thermal resistance", "Improve winding insulation"],
                answer: "Reduce vibration by balancing rotor mass"
            },
            {
                id: 14,
                question: "Which test measures insulation resistance in motors?",
                options: ["Thermal Test", "Insulation Resistance Test", "Vibration Test", "Alignment Test"],
                answer: "Insulation Resistance Test"
            },
            {
                id: 15,
                question: "What should be done if motor insulation shows severe damage?",
                options: ["Re-lubricate the motor", "Repair or replace the insulation", "Reduce the motor load", "Align the shaft"],
                answer: "Repair or replace the insulation"
            },
            {
                id: 16,
                question: "What is the purpose of lockout/tagout procedures?",
                options: ["Prevent overheating", "Ensure the motor is de-energized during maintenance", "Optimize power usage", "Reduce noise levels"],
                answer: "Ensure the motor is de-energized during maintenance"
            },
            {
                id: 17,
                question: "Which analysis helps detect early signs of bearing wear?",
                options: ["Thermal Imaging", "Vibration Analysis", "Voltage Analysis", "Current Testing"],
                answer: "Vibration Analysis"
            },
            {
                id: 18,
                question: "Why is proper alignment crucial for motors?",
                options: ["To increase energy consumption", "To prevent excess vibration and wear", "To simplify wiring", "To avoid overheating"],
                answer: "To prevent excess vibration and wear"
            },
            {
                id: 19,
                question: "What is the role of a cooling system in motors?",
                options: ["Increase power output", "Maintain safe operating temperature", "Enhance rotor speed", "Reduce energy efficiency"],
                answer: "Maintain safe operating temperature"
            },
            {
                id: 20,
                question: "Which diagnostic tool is used for current signature analysis?",
                options: ["Multimeter", "Oscilloscope", "Vibration Meter", "Infrared Camera"],
                answer: "Oscilloscope"
            },
            {
                id: 21,
                question: "What common issue is indicated by abnormal motor noise?",
                options: ["Proper alignment", "Bearing wear or imbalance", "Optimal torque", "Low energy efficiency"],
                answer: "Bearing wear or imbalance"
            },
            {
                id: 22,
                question: "Which maintenance action improves motor efficiency?",
                options: ["Increasing power load", "Cleaning and testing", "Disabling safety features", "Reducing scheduled maintenance"],
                answer: "Cleaning and testing"
            },
            {
                id: 23,
                question: "What safety equipment is essential during motor maintenance?",
                options: ["Fire extinguisher", "Insulated gloves and safety glasses", "Welding gloves", "Respirator"],
                answer: "Insulated gloves and safety glasses"
            },
            {
                id: 24,
                question: "What does oil analysis in motors help detect?",
                options: ["Vibration patterns", "Lubricant contamination or degradation", "Power surge issues", "Insulation faults"],
                answer: "Lubricant contamination or degradation"
            },
            {
                id: 25,
                question: "Which factor affects the frequency of motor inspections?",
                options: ["Equipment usage and environmental conditions", "Motor color", "Manufacturer’s location", "Availability of tools"],
                answer: "Equipment usage and environmental conditions"
            },
            {
                id: 26,
                question: "What is the main purpose of a shaft in a motor?",
                options: ["Transmit mechanical power", "Generate electric fields", "Cool the motor", "Insulate electrical components"],
                answer: "Transmit mechanical power"
            },
            {
                id: 27,
                question: "Which technique is used to detect moisture in motor insulation?",
                options: ["Vibration Analysis", "Infrared Imaging", "Insulation Resistance Testing", "Oil Analysis"],
                answer: "Insulation Resistance Testing"
            },
            {
                id: 28,
                question: "Why is documentation of motor maintenance important?",
                options: ["To reduce costs", "For optimizing future performance", "To improve rotor speed", "To lower vibration levels"],
                answer: "For optimizing future performance"
            },
            {
                id: 29,
                question: "What can cause unexpected motor shutdowns?",
                options: ["Overload or faulty protective devices", "Routine inspections", "Cooling system maintenance", "Proper alignment"],
                answer: "Overload or faulty protective devices"
            },
            {
                id: 30,
                question: "What role does predictive analytics play in motor maintenance?",
                options: ["Eliminate preventive strategies", "Predict potential failures using data", "Increase manual checks", "Decrease maintenance records"],
                answer: "Predict potential failures using data"
            }
        ],
        advanced: []
    },
    "e&i-maintenance-of-turbine": {
        basic: [
            {
                id: 1,
                question: "What is a key component of a thermal power plant turbine?",
                options: ["Rotor", "Insulator", "Photovoltaic panel", "Circuit board"],
                answer: "Rotor"
            },
            {
                id: 2,
                question: "What operating conditions are typical for turbines in thermal power plants?",
                options: ["Low heat and moderate pressure", "High heat, pressure, and rotational speed", "Ambient temperature with no rotational speed", "High voltage with no mechanical stress"],
                answer: "High heat, pressure, and rotational speed"
            },
            {
                id: 3,
                question: "Why is precise engineering critical for turbine components?",
                options: ["To reduce fuel consumption", "To handle extreme operating conditions reliably", "To avoid frequent lubrication", "To reduce turbine size"],
                answer: "To handle extreme operating conditions reliably"
            },
            {
                id: 4,
                question: "Effective turbine maintenance primarily aims to:",
                options: ["Increase fuel consumption", "Maximize uptime and optimize performance", "Simplify generator output", "Delay regular inspections"],
                answer: "Maximize uptime and optimize performance"
            },
            {
                id: 5,
                question: "Proactive maintenance reduces repair costs by:",
                options: ["Ignoring minor issues", "Catching problems early before escalation", "Limiting the use of advanced tools", "Reducing maintenance schedules"],
                answer: "Catching problems early before escalation"
            },
            {
                id: 6,
                question: "What converts mechanical energy into electrical power in a thermal power plant?",
                options: ["Lubrication system", "Turbine generator", "Heat exchanger", "Cooling system"],
                answer: "Turbine generator"
            },
            {
                id: 7,
                question: "Electrical relays and breakers in a turbine's system:",
                options: ["Optimize fuel efficiency", "Safeguard the system against faults and overloads", "Enhance lubrication management", "Increase sensor count"],
                answer: "Safeguard the system against faults and overloads"
            },
            {
                id: 8,
                question: "What parameters are commonly monitored by turbine sensors?",
                options: ["Employee schedules", "Temperature, pressure, vibration, and rpm", "Voltage and resistance only", "Turbine color and texture"],
                answer: "Temperature, pressure, vibration, and rpm"
            },
            {
                id: 9,
                question: "Programmable Logic Controllers (PLCs) are used for:",
                options: ["Manual lubrication", "Regulating turbine operations automatically", "Increasing maintenance intervals", "Detecting operator presence"],
                answer: "Regulating turbine operations automatically"
            },
            {
                id: 10,
                question: "Turbine data analytics helps by:",
                options: ["Identifying trends and predicting maintenance needs", "Reducing lubrication intervals", "Adjusting plant lighting systems", "Optimizing generator size"],
                answer: "Identifying trends and predicting maintenance needs"
            },
            {
                id: 11,
                question: "Oil analysis in turbines helps detect:",
                options: ["Employee efficiency", "Contamination or degradation in lubricating oil", "Voltage imbalances", "Sensor wear"],
                answer: "Contamination or degradation in lubricating oil"
            },
            {
                id: 12,
                question: "Greasing turbine bearings minimizes:",
                options: ["Electrical load", "Friction and wear", "System redundancy", "Mechanical synchronization"],
                answer: "Friction and wear"
            },
            {
                id: 13,
                question: "Vibration analysis is useful for detecting:",
                options: ["Transformer faults", "Imbalances or misalignment in turbine components", "Excessive lubrication", "Rotor material issues"],
                answer: "Imbalances or misalignment in turbine components"
            },
            {
                id: 14,
                question: "Thermography identifies:",
                options: ["Electrical and mechanical hot spots", "Vibration patterns", "Insulation breakdown", "Cooling system output"],
                answer: "Electrical and mechanical hot spots"
            },
            {
                id: 15,
                question: "Preventive maintenance involves:",
                options: ["Random inspections", "Scheduled inspections and lubrication programs", "Post-failure interventions only", "Delaying part replacements"],
                answer: "Scheduled inspections and lubrication programs"
            },
            {
                id: 16,
                question: "Proactive part replacement reduces:",
                options: ["Unexpected failures and downtime", "Operational output", "Turbine speed", "Sensor calibration intervals"],
                answer: "Unexpected failures and downtime"
            },
            {
                id: 17,
                question: "Circuit breaker tripping can be caused by:",
                options: ["Overloaded circuits or ground faults", "Excess lubrication", "Low-pressure steam flow", "Excessive vibration"],
                answer: "Overloaded circuits or ground faults"
            },
            {
                id: 18,
                question: "Transformer issues in turbines may include:",
                options: ["Blade misalignment", "Insulation breakdown or oil leaks", "Incorrect rpm measurements", "Vibration in stator components"],
                answer: "Insulation breakdown or oil leaks"
            },
            {
                id: 19,
                question: "Regular sensor calibration ensures:",
                options: ["Accurate parameter monitoring", "Increased oil consumption", "Reduced turbine capacity", "Faster rotor speed"],
                answer: "Accurate parameter monitoring"
            },
            {
                id: 20,
                question: "Instrument validation involves:",
                options: ["Reducing maintenance frequencies", "Verifying instrumentation against industry standards", "Optimizing fuel efficiency automatically", "Avoiding system integration"],
                answer: "Verifying instrumentation against industry standards"
            },
            {
                id: 21,
                question: "Lockout/tagout procedures prevent:",
                options: ["Delayed lubrication", "Accidental start-up during maintenance", "Overheating of turbine components", "Misalignment of sensors"],
                answer: "Accidental start-up during maintenance"
            },
            {
                id: 22,
                question: "Proper PPE during turbine maintenance includes:",
                options: ["Hard hats, gloves, and safety glasses", "Casual clothing and sandals", "Safety posters only", "Additional steam regulators"],
                answer: "Hard hats, gloves, and safety glasses"
            },
            {
                id: 23,
                question: "Detailed maintenance records include:",
                options: ["Work orders, repair logs, and equipment history", "Employee attendance logs", "Fuel consumption data only", "Spare part sales reports"],
                answer: "Work orders, repair logs, and equipment history"
            },
            {
                id: 24,
                question: "Preventive maintenance schedules ensure:",
                options: ["Delayed inspections", "Timely servicing of turbine components", "Increased unplanned downtime", "Reduced system output"],
                answer: "Timely servicing of turbine components"
            },
            {
                id: 25,
                question: "Continuous education for technicians ensures:",
                options: ["Updated skills on the latest technologies", "Delayed troubleshooting abilities", "Reduced certification requirements", "Overly specialized knowledge"],
                answer: "Updated skills on the latest technologies"
            },
            {
                id: 26,
                question: "Cross-functional knowledge helps technicians:",
                options: ["Understand system interactions within the turbine", "Focus only on one system component", "Reduce operational safety", "Avoid practical training"],
                answer: "Understand system interactions within the turbine"
            },
            {
                id: 27,
                question: "Certification ensures:",
                options: ["Compliance with industry standards", "Elimination of preventive maintenance", "Reduced turbine performance", "Extended inspection intervals"],
                answer: "Compliance with industry standards"
            }
        ]
    },
    "e&i-maintenance-of-vfd": {
        basic: [
            {
                id: 1,
                question: "What is the primary function of a Variable Frequency Drive (VFD)?",
                options: ["Increase motor size", "Provide precise control over motor speed and torque", "Decrease motor efficiency", "Replace electric motors"],
                answer: "Provide precise control over motor speed and torque"
            },
            {
                id: 2,
                question: "How do VFDs improve energy efficiency?",
                options: ["By maintaining constant motor speed", "By matching motor speed to load requirements", "By reducing motor size", "By bypassing voltage supply"],
                answer: "By matching motor speed to load requirements"
            },
            {
                id: 3,
                question: "Which component in a VFD converts AC to DC?",
                options: ["Rectifier", "Inverter", "Transformer", "Filter"],
                answer: "Rectifier"
            },
            {
                id: 4,
                question: "What is the purpose of soft starts in VFDs?",
                options: ["To maintain constant speed", "To gradually ramp up motor speed, reducing mechanical stress", "To decrease power supply", "To prevent energy loss"],
                answer: "To gradually ramp up motor speed, reducing mechanical stress"
            },
            {
                id: 5,
                question: "Which VFD topology uses matrix converters?",
                options: ["Voltage Source Topology", "Current Source Topology", "Matrix Converter Topology", "Transformer Topology"],
                answer: "Matrix Converter Topology"
            },
            {
                id: 6,
                question: "What is regenerative braking in VFDs used for?",
                options: ["To increase motor speed", "To convert kinetic energy back into electrical energy", "To improve torque", "To bypass the braking system"],
                answer: "To convert kinetic energy back into electrical energy"
            },
            {
                id: 7,
                question: "Which advanced feature allows VFDs to operate without external sensors?",
                options: ["Sensorless Vector Control", "Soft Start", "Torque Boost", "Harmonic Mitigation"],
                answer: "Sensorless Vector Control"
            },
            {
                id: 8,
                question: "How does VFD reduce maintenance costs?",
                options: ["By minimizing mechanical wear and tear", "By operating motors at constant speed", "By eliminating the need for lubrication", "By increasing harmonic distortion"],
                answer: "By minimizing mechanical wear and tear"
            },
            {
                id: 9,
                question: "What role does a VFD’s inverter play?",
                options: ["Converts AC to DC", "Converts DC back to variable AC", "Measures voltage levels", "Adjusts temperature"],
                answer: "Converts DC back to variable AC"
            },
            {
                id: 10,
                question: "Which parameter is adjusted in VFDs for smooth motor acceleration and deceleration?",
                options: ["Torque", "Frequency and voltage", "Power factor", "Resistance"],
                answer: "Frequency and voltage"
            },
            {
                id: 11,
                question: "What is the benefit of integrating VFDs with building automation systems?",
                options: ["Limited motor control", "Real-time monitoring and energy efficiency gains", "Increased motor size", "Decreased motor lifespan"],
                answer: "Real-time monitoring and energy efficiency gains"
            },
            {
                id: 12,
                question: "Which diagnostic feature is commonly integrated into modern VFDs?",
                options: ["External power source", "Built-in fault monitoring", "Increased harmonic distortion", "Overvoltage protection only"],
                answer: "Built-in fault monitoring"
            },
            {
                id: 13,
                question: "Which VFD feature optimizes motor flux for energy savings?",
                options: ["Adaptive Motor Flux Control", "Constant Speed Mode", "Power Factor Adjustment", "Frequency Stabilization"],
                answer: "Adaptive Motor Flux Control"
            },
            {
                id: 14,
                question: "Which factor is crucial for selecting a VFD?",
                options: ["Motor horsepower and application demands", "Color of the motor", "Cable length", "Insulation type"],
                answer: "Motor horsepower and application demands"
            },
            {
                id: 15,
                question: "What type of control does sensorless flux vector provide?",
                options: ["Accurate torque control without external feedback", "Simple on/off control", "Temperature control", "Fixed-speed operation"],
                answer: "Accurate torque control without external feedback"
            },
            {
                id: 16,
                question: "What is the primary goal of predictive analytics in VFDs?",
                options: ["Increase operational cost", "Predict and prevent potential failures", "Limit motor speed", "Eliminate manual adjustments"],
                answer: "Predict and prevent potential failures"
            },
            {
                id: 17,
                question: "Which is NOT a key benefit of VFD technology?",
                options: ["Energy efficiency", "Reduced mechanical wear", "Increased harmonic distortion", "Improved power quality"],
                answer: "Increased harmonic distortion"
            },
            {
                id: 18,
                question: "How do VFDs improve power quality?",
                options: ["By correcting power factor and mitigating harmonics", "By increasing motor size", "By operating at a constant frequency", "By reducing torque"],
                answer: "By correcting power factor and mitigating harmonics"
            },
            {
                id: 19,
                question: "Which type of VFD configuration is typically used for heavy industrial applications?",
                options: ["Voltage Source Topology", "Current Source Topology", "Matrix Converter Topology", "Phase Converter"],
                answer: "Current Source Topology"
            },
            {
                id: 20,
                question: "What is a common cause of unexpected VFD shutdowns?",
                options: ["Overcurrent or voltage imbalance", "Constant torque operation", "Proper motor alignment", "Regular maintenance"],
                answer: "Overcurrent or voltage imbalance"
            },
            {
                id: 21,
                question: "Which VFD feature aids in automation and sequencing?",
                options: ["Programmable Logic Controllers (PLCs)", "External sensors", "Constant speed adjustment", "Harmonic filters"],
                answer: "Programmable Logic Controllers (PLCs)"
            },
            {
                id: 22,
                question: "What is the primary benefit of dynamic torque control in VFDs?",
                options: ["Ensures consistent motor power", "Provides accurate and variable torque as per load requirements", "Reduces speed variation", "Increases harmonic distortion"],
                answer: "Provides accurate and variable torque as per load requirements"
            },
            {
                id: 23,
                question: "Which environmental factor should be considered when selecting a VFD?",
                options: ["Motor color", "Ambient temperature and humidity", "Cable type", "Mounting orientation"],
                answer: "Ambient temperature and humidity"
            },
            {
                id: 24,
                question: "Why are software updates important for VFDs?",
                options: ["To increase power consumption", "To ensure compatibility and improve system functionality", "To decrease control accuracy", "To prevent motor start-up"],
                answer: "To ensure compatibility and improve system functionality"
            },
            {
                id: 25,
                question: "Which feature allows VFDs to reduce energy during low load conditions?",
                options: ["Regenerative Braking", "Soft Start", "Energy Optimization Mode", "Harmonic Adjustment"],
                answer: "Energy Optimization Mode"
            },
            {
                id: 26,
                question: "What is the role of feedback tuning in VFDs?",
                options: ["Reduces motor vibration", "Optimizes speed and torque performance", "Increases noise levels", "Decreases torque accuracy"],
                answer: "Optimizes speed and torque performance"
            },
            {
                id: 27,
                question: "Which troubleshooting technique helps detect motor insulation problems in VFDs?",
                options: ["Thermal Monitoring", "Voltage Analysis", "Insulation Resistance Testing", "Airflow Inspection"],
                answer: "Insulation Resistance Testing"
            },
            {
                id: 28,
                question: "What is the significance of modular designs in future VFDs?",
                options: ["Reduce energy efficiency", "Enable greater flexibility and scalability", "Limit VFD functionality", "Eliminate advanced control modes"],
                answer: "Enable greater flexibility and scalability"
            },
            {
                id: 29,
                question: "Which feature helps reduce downtime in advanced VFDs?",
                options: ["Integrated diagnostics and remote monitoring", "Manual data entry", "Constant speed operation", "Fixed torque adjustment"],
                answer: "Integrated diagnostics and remote monitoring"
            },
            {
                id: 30,
                question: "How do VFDs support renewable energy integration?",
                options: ["By stabilizing voltage in solar and wind applications", "By reducing energy consumption", "By replacing renewable energy systems", "By operating in fixed modes"],
                answer: "By stabilizing voltage in solar and wind applications"
            }
        ],
        advanced: []
    },
    //Civil and Drawing
    "2d-drawings-civil": {
        basic: [
            {
                id: 1,
                question: "What information is typically included in the title block of a 2D civil drawing?",
                options: ["Project name", "Drawing title", "Date and scale", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 2,
                question: "What is the purpose of a drawing number?",
                options: ["To define the scale", "To serve as a unique identifier for referencing", "To indicate material specifications", "To locate the gridlines"],
                answer: "To serve as a unique identifier for referencing"
            },
            {
                id: 3,
                question: "What do legends and symbols in 2D drawings represent?",
                options: ["Dimensions", "Components and features", "Gridlines", "Scales"],
                answer: "Components and features"
            },
            {
                id: 4,
                question: "Gridlines in a 2D drawing are used for:",
                options: ["Dividing the layout into sections", "Highlighting material specifications", "Measuring angles", "None of the above"],
                answer: "Dividing the layout into sections"
            },
            {
                id: 5,
                question: "Which arrow indicates the layout’s orientation in a drawing?",
                options: ["Scale arrow", "North arrow", "Dimension arrow", "Elevation arrow"],
                answer: "North arrow"
            },
            {
                id: 6,
                question: "A general arrangement (GA) drawing shows:",
                options: ["Individual components", "Foundation details", "Overall layout of structures or facilities", "Reinforcement details"],
                answer: "Overall layout of structures or facilities"
            },
            {
                id: 7,
                question: "Which type of drawing specifies material and reinforcement details for bases?",
                options: ["Detailed structural drawings", "Foundation drawings", "Piping layouts", "General arrangement drawings"],
                answer: "Foundation drawings"
            },
            {
                id: 8,
                question: "In civil drawings, scale 1:100 means:",
                options: ["1 unit in the drawing equals 100 units in reality", "100 units in the drawing equal 1 unit in reality", "Measurements are in centimeters", "It’s a reduced detail scale"],
                answer: "1 unit in the drawing equals 100 units in reality"
            },
            {
                id: 9,
                question: "Bar bending schedules (BBS) are used for:",
                options: ["Concrete grades", "Rebar placement details", "Load calculations", "Floor finishing"],
                answer: "Rebar placement details"
            },
            {
                id: 10,
                question: "In ferro alloy plants, furnace areas often require materials that are:",
                options: ["Lightweight", "High-temperature resistant", "Flexible", "Recyclable"],
                answer: "High-temperature resistant"
            },
            {
                id: 11,
                question: "What does IS 456 cover?",
                options: ["Steel grades", "Concrete and reinforcement guidelines", "Fire safety rules", "Load considerations"],
                answer: "Concrete and reinforcement guidelines"
            },
            {
                id: 12,
                question: "Which code deals with design loads?",
                options: ["IS 875", "OSHA", "ASTM", "IS 800"],
                answer: "IS 875"
            },
            {
                id: 13,
                question: "ASTM standards focus on:",
                options: ["Workplace safety", "Material testing and quality", "Reinforcement detailing", "Orientation guidelines"],
                answer: "Material testing and quality"
            },
            {
                id: 14,
                question: "OSHA guidelines are primarily concerned with:",
                options: ["Construction materials", "Workplace safety", "Structural load limits", "Gridline placement"],
                answer: "Workplace safety"
            },
            {
                id: 15,
                question: "The first step in interpreting a 2D drawing is to:",
                options: ["Analyze elevations", "Review the title block and notes", "Trace flow paths", "Measure dimensions"],
                answer: "Review the title block and notes"
            },
            {
                id: 16,
                question: "Vertical layouts in a drawing are called:",
                options: ["Sections", "Plans", "Elevations", "Dimensions"],
                answer: "Elevations"
            },
            {
                id: 17,
                question: "What is the role of foundation drawings in ferro alloy plants?",
                options: ["Show piping routes", "Provide base specifications for heavy loads", "Indicate ventilation pathways", "Highlight electrical connections"],
                answer: "Provide base specifications for heavy loads"
            },
            {
                id: 18,
                question: "Conveyor layouts are crucial for:",
                options: ["Structural integrity", "Material handling systems", "Water drainage", "Fire safety"],
                answer: "Material handling systems"
            },
            {
                id: 19,
                question: "Which flooring type is specified for heavy-duty storage areas?",
                options: ["Epoxy flooring", "Lightweight flooring", "Wooden flooring", "Tile flooring"],
                answer: "Epoxy flooring"
            },
            {
                id: 20,
                question: "Truss systems in ferro alloy plants must be designed for:",
                options: ["Low temperatures", "Ventilation and temperature resistance", "Electrical conductivity", "Acoustic insulation"],
                answer: "Ventilation and temperature resistance"
            },
            {
                id: 21,
                question: "CAD software like AutoCAD is used to:",
                options: ["Draft and modify 2D drawings", "Calculate loads", "Analyze chemical compositions", "Design equipment only"],
                answer: "Draft and modify 2D drawings"
            },
            {
                id: 22,
                question: "EHS stands for:",
                options: ["Engineering, Health, and Safety", "Environmental, Health, and Safety", "Energy, Heat, and Standards", "Environmental, Heat, and Storage"],
                answer: "Environmental, Health, and Safety"
            },
            {
                id: 23,
                question: "A piping and instrumentation layout integrates:",
                options: ["Civil and mechanical elements", "Only civil components", "Orientation lines", "Safety guidelines"],
                answer: "Civil and mechanical elements"
            },
            {
                id: 24,
                question: "What is critical for designing cooling towers in ferro alloy plants?",
                options: ["Epoxy coating", "Water handling systems", "Reinforcement bars", "Lightweight materials"],
                answer: "Water handling systems"
            },
            {
                id: 25,
                question: "What indicates load considerations in civil drawings?",
                options: ["Live, dead, and equipment loads", "Concrete grades", "Steel reinforcement patterns", "Material schedules"],
                answer: "Live, dead, and equipment loads"
            },
            {
                id: 26,
                question: "Furnace foundations are designed for:",
                options: ["High pressures only", "High temperatures and heavy loads", "Chemical processing", "Flexible structures"],
                answer: "High temperatures and heavy loads"
            },
            {
                id: 27,
                question: "Why are gridlines crucial in 2D drawings?",
                options: ["Indicate material thickness", "Show sectional divides", "Align construction phases", "Measure load capacities"],
                answer: "Show sectional divides"
            },
            {
                id: 28,
                question: "Industrial civil drawings often use ordinate dimensions for:",
                options: ["Angles only", "Cumulative distances along a reference axis", "Circular elements", "Elevation changes"],
                answer: "Cumulative distances along a reference axis"
            },
            {
                id: 29,
                question: "Reinforcement detailing uses:",
                options: ["Load equations", "Legends for materials", "Symbols for bar placement", "Notes only"],
                answer: "Symbols for bar placement"
            },
            {
                id: 30,
                question: "Continuous learning in the field of 2D civil drawings involves:",
                options: ["Updating material lists", "Staying current with software and EHS regulations", "Redesigning old layouts", "Avoiding new codes"],
                answer: "Staying current with software and EHS regulations"
            }
        ],
        advanced: []
    },
    "2d-drawings-mech": {
        basic: [
            {
                id: 1,
                question: "What critical information is included in the title block of a 2D mechanical drawing?",
                options: ["Drawing number and scale", "Part name and material specifications", "Both a and b", "Neither a nor b"],
                answer: "Both a and b"
            },
            {
                id: 2,
                question: "Which of these is NOT a standard orthographic view in mechanical drawings?",
                options: ["Front view", "Isometric view", "Top view", "Side view"],
                answer: "Isometric view"
            },
            {
                id: 3,
                question: "What do linear dimensions represent?",
                options: ["Angles between lines", "Measurements like lengths and widths", "Radii of curved features", "Geometric tolerances"],
                answer: "Measurements like lengths and widths"
            },
            {
                id: 4,
                question: "Radial dimensions are used to specify:",
                options: ["Surface flatness", "Circular features like holes or fillets", "Angular relationships", "Straight edges"],
                answer: "Circular features like holes or fillets"
            },
            {
                id: 5,
                question: "GD&T stands for:",
                options: ["Geometric Designing and Tolerancing", "Geometric Dimensioning and Tolerancing", "General Designing and Tolerancing", "Graphic Dimensioning and Tolerancing"],
                answer: "Geometric Dimensioning and Tolerancing"
            },
            {
                id: 6,
                question: "A feature control frame in GD&T defines:",
                options: ["Material properties", "The type and magnitude of geometric tolerances", "The units used in the drawing", "The relationship between dimensions"],
                answer: "The type and magnitude of geometric tolerances"
            },
            {
                id: 7,
                question: "Datums in GD&T are:",
                options: ["Unit systems", "Reference points, lines, or planes", "Symbols for tolerances", "Auxiliary views"],
                answer: "Reference points, lines, or planes"
            },
            {
                id: 8,
                question: "What symbol is used for flatness in GD&T?",
                options: ["⎯", "⌒", "⟂", "⌀"],
                answer: "⌒"
            },
            {
                id: 9,
                question: "The position symbol in GD&T is critical for:",
                options: ["Defining surface roughness", "Ensuring interchangeability of parts", "Indicating material types", "Highlighting angular tolerances"],
                answer: "Ensuring interchangeability of parts"
            },
            {
                id: 10,
                question: "Which dimensioning technique is crucial for precise part alignment?",
                options: ["Radial dimensions", "Angular dimensions", "Linear dimensions", "Parallel dimensions"],
                answer: "Angular dimensions"
            },
            {
                id: 11,
                question: "What is the primary purpose of 2D mechanical drawings?",
                options: ["To reduce manufacturing time", "To serve as a universal language for design intent", "To replace 3D models", "To specify aesthetic details"],
                answer: "To serve as a universal language for design intent"
            },
            {
                id: 12,
                question: "The front view in orthographic projections provides:",
                options: ["Width and depth information", "Height and width information", "Length and depth information", "None of the above"],
                answer: "Height and width information"
            },
            {
                id: 13,
                question: "What percentage of cost reduction is possible with accurate 2D drawings?",
                options: ["20%", "30%", "60%", "100%"],
                answer: "60%"
            },
            {
                id: 14,
                question: "Auxiliary views are used to:",
                options: ["Show details not visible in main views", "Specify material specifications", "Indicate geometric tolerances", "Reduce drawing size"],
                answer: "Show details not visible in main views"
            },
            {
                id: 15,
                question: "Which unit systems are commonly used in mechanical drawings?",
                options: ["Metric and imperial", "Decimal and hexadecimal", "Fahrenheit and Celsius", "Linear and angular"],
                answer: "Metric and imperial"
            },
            {
                id: 16,
                question: "What is the function of annotations in mechanical drawings?",
                options: ["To provide manufacturing instructions", "To list material costs", "To indicate part weight", "To specify temperature ranges"],
                answer: "To provide manufacturing instructions"
            },
            {
                id: 17,
                question: "Which GD&T symbol ensures perpendicularity?",
                options: ["⌒", "⟂", "⎯", "⌀"],
                answer: "⟂"
            },
            {
                id: 18,
                question: "The side view in orthographic projections reveals:",
                options: ["Depth and height", "Length and width", "Height and width", "Depth and length"],
                answer: "Depth and height"
            },
            {
                id: 19,
                question: "The term mating surfaces refers to:",
                options: ["Overlapping dimensions", "Surfaces that come into contact during assembly", "Parallel lines in drawings", "Features with radial dimensions"],
                answer: "Surfaces that come into contact during assembly"
            },
            {
                id: 20,
                question: "Why are tolerances important in mechanical drawings?",
                options: ["To define permissible material types", "To ensure parts fit and function correctly", "To highlight non-standard dimensions", "To simplify manufacturing"],
                answer: "To ensure parts fit and function correctly"
            },
            {
                id: 21,
                question: "What is a thread callout used for?",
                options: ["Indicating angular dimensions", "Specifying screw thread details", "Highlighting feature control frames", "Showing auxiliary views"],
                answer: "Specifying screw thread details"
            },
            {
                id: 22,
                question: "Cross-referencing views helps to:",
                options: ["Resolve ambiguities in 2D drawings", "Eliminate the need for GD&T", "Specify unit systems", "Display feature control frames"],
                answer: "Resolve ambiguities in 2D drawings"
            },
            {
                id: 23,
                question: "Which symbol represents straightness?",
                options: ["⎯", "⟂", "⌒", "⌀"],
                answer: "⎯"
            },
            {
                id: 24,
                question: "GD&T is standardized under:",
                options: ["ASME Y14.5", "ISO 45001", "OSHA guidelines", "ASTM E18"],
                answer: "ASME Y14.5"
            },
            {
                id: 25,
                question: "3D CAD models can be used alongside 2D drawings to:",
                options: ["Replace 2D drawings entirely", "Provide better visualization", "Reduce the need for datums", "Avoid GD&T usage"],
                answer: "Provide better visualization"
            },
            {
                id: 26,
                question: "Which projection method is primarily used in mechanical drawings?",
                options: ["Orthographic projection", "Perspective projection", "Axonometric projection", "Isometric projection"],
                answer: "Orthographic projection"
            },
            {
                id: 27,
                question: "Feature control frames are found in:",
                options: ["Title blocks", "GD&T annotations", "Auxiliary views", "Angular dimensions"],
                answer: "GD&T annotations"
            },
            {
                id: 28,
                question: "What does the position tolerance control?",
                options: ["Flatness of surfaces", "Location of holes or features", "Angular alignment", "Length of edges"],
                answer: "Location of holes or features"
            },
            {
                id: 29,
                question: "Threaded holes in mechanical drawings are represented by:",
                options: ["Weld symbols", "Annotations and callouts", "Datum planes", "Auxiliary views"],
                answer: "Annotations and callouts"
            },
            {
                id: 30,
                question: "Regular practice of interpreting 2D mechanical drawings helps in:",
                options: ["Enhancing speed and accuracy in manufacturing", "Reducing training needs", "Avoiding GD&T complexities", "Increasing production cost"],
                answer: "Enhancing speed and accuracy in manufacturing"
            }
        ],
        advanced: []
    },
    "building": {
        basic: [
            {
                id: 1,
                question: "What is the first step in site preparation for constructing industrial buildings?",
                options: ["Designing the layout", "Conducting geotechnical investigations", "Installing utilities", "Ordering construction materials"],
                answer: "Conducting geotechnical investigations"
            },
            {
                id: 2,
                question: "Why is proximity to raw materials and transportation links important?",
                options: ["Reduces environmental impact", "Increases construction speed", "Minimizes transportation costs and ensures easy access to resources", "Eliminates the need for zoning clearance"],
                answer: "Minimizes transportation costs and ensures easy access to resources"
            },
            {
                id: 3,
                question: "What clearance is essential for industrial buildings under zoning laws?",
                options: ["Building code clearance", "Environmental impact assessment (EIA) clearance", "Fire safety clearance", "Hazardous material clearance"],
                answer: "Environmental impact assessment (EIA) clearance"
            },
            {
                id: 4,
                question: "What structural feature allows efficient movement of large equipment?",
                options: ["Load-bearing walls", "Wide bays and column-free spans", "Low ceilings", "High-density flooring"],
                answer: "Wide bays and column-free spans"
            },
            {
                id: 5,
                question: "Fire-resistant materials in industrial construction ensure:",
                options: ["Reduced costs", "Better lighting", "Safety and longevity in high-temperature environments", "Faster construction timelines"],
                answer: "Safety and longevity in high-temperature environments"
            },
            {
                id: 6,
                question: "What type of foundation is typically used to support heavy machinery?",
                options: ["Shallow foundation", "Raft or pile foundation", "Precast concrete foundation", "Steel base foundation"],
                answer: "Raft or pile foundation"
            },
            {
                id: 7,
                question: "Why are vibration isolation systems important in industrial buildings?",
                options: ["Improve the aesthetics", "Prevent structural fatigue and extend equipment life", "Reduce foundation costs", "Simplify the construction process"],
                answer: "Prevent structural fatigue and extend equipment life"
            },
            {
                id: 8,
                question: "What technique can be used to stabilize weak soil?",
                options: ["Grouting or soil replacement", "Adding more concrete", "Increasing the foundation depth", "Reducing building height"],
                answer: "Grouting or soil replacement"
            },
            {
                id: 9,
                question: "High-strength reinforced concrete is used for:",
                options: ["Lightweight roofs", "Critical supports and floors", "Wall cladding", "Acoustic insulation"],
                answer: "Critical supports and floors"
            },
            {
                id: 10,
                question: "What type of steel is recommended for industrial frames in corrosive environments?",
                options: ["Stainless steel", "High-grade corrosion-resistant steel", "Galvanized steel", "Alloy steel"],
                answer: "High-grade corrosion-resistant steel"
            },
            {
                id: 11,
                question: "Protective coatings are applied to prevent damage from:",
                options: ["Low temperatures", "Wind and rain", "Chemical spills, high temperatures, and abrasive materials", "Electrical surges"],
                answer: "Chemical spills, high temperatures, and abrasive materials"
            },
            {
                id: 12,
                question: "Why is a robust water supply system important in industrial buildings?",
                options: ["Reduces material costs", "Supports process cooling and firefighting systems", "Decreases energy consumption", "Improves worker comfort"],
                answer: "Supports process cooling and firefighting systems"
            },
            {
                id: 13,
                question: "Efficient ventilation systems are necessary for:",
                options: ["Energy efficiency", "Emissions control and heat management", "Reducing noise levels", "Aesthetic improvements"],
                answer: "Emissions control and heat management"
            },
            {
                id: 14,
                question: "Compressed air systems are typically used for:",
                options: ["Heavy lifting", "Pneumatic tools and process requirements", "Firefighting systems", "Electrical distribution"],
                answer: "Pneumatic tools and process requirements"
            },
            {
                id: 15,
                question: "What guideline ensures worker safety in industrial environments?",
                options: ["ISO standards", "OSHA standards", "ASTM material standards", "Zoning laws"],
                answer: "OSHA standards"
            },
            {
                id: 16,
                question: "What equipment is used to reduce air pollution in industrial buildings?",
                options: ["Ventilation fans", "Electrostatic precipitators and scrubbers", "Heat exchangers", "Acoustic enclosures"],
                answer: "Electrostatic precipitators and scrubbers"
            },
            {
                id: 17,
                question: "Noise control in industrial buildings can be achieved by:",
                options: ["Insulating walls", "Implementing acoustic enclosures for noisy equipment", "Installing larger ventilation fans", "Reducing the building height"],
                answer: "Implementing acoustic enclosures for noisy equipment"
            },
            {
                id: 18,
                question: "What is the key to effective waste management in industrial buildings?",
                options: ["Sorting waste by type", "Recycling and proper treatment of solid, liquid, and gaseous waste", "Building larger storage areas", "Avoiding waste generation"],
                answer: "Recycling and proper treatment of solid, liquid, and gaseous waste"
            },
            {
                id: 19,
                question: "Energy-efficient designs help reduce:",
                options: ["Construction costs", "Environmental impact and operational costs", "Noise levels", "Material waste"],
                answer: "Environmental impact and operational costs"
            },
            {
                id: 20,
                question: "What material is used for thermal and acoustic insulation in industrial buildings?",
                options: ["Fiberglass", "Lightweight concrete", "High-density foam", "Insulating materials specific to the industry"],
                answer: "Insulating materials specific to the industry"
            },
            {
                id: 21,
                question: "Submerged Arc Furnace buildings require:",
                options: ["Lightweight materials", "Reinforced foundations and proper ventilation", "Low-cost designs", "Wooden flooring"],
                answer: "Reinforced foundations and proper ventilation"
            },
            {
                id: 22,
                question: "Durable flooring is necessary in which industrial areas?",
                options: ["Loading and unloading bays", "Office spaces", "Storage of light materials", "Noise control zones"],
                answer: "Loading and unloading bays"
            },
            {
                id: 23,
                question: "Modular design in industrial buildings allows for:",
                options: ["Flexible operations", "Easy installation of electrical systems", "Future capacity increases and structural extensions", "Reduced initial costs"],
                answer: "Future capacity increases and structural extensions"
            },
            {
                id: 24,
                question: "Scalable utility systems are designed for:",
                options: ["Minimizing energy consumption", "Accommodating future growth", "Preventing noise", "Reducing material waste"],
                answer: "Accommodating future growth"
            },
            {
                id: 25,
                question: "Why is digital integration important in industrial buildings?",
                options: ["Reduces labor requirements", "Enables automation and improved efficiency", "Simplifies structural design", "Reduces material costs"],
                answer: "Enables automation and improved efficiency"
            },
            {
                id: 26,
                question: "What is the main reason for using fireproof escape routes?",
                options: ["Aesthetic appeal", "Compliance with zoning laws", "Worker safety during emergencies", "Lower insurance costs"],
                answer: "Worker safety during emergencies"
            },
            {
                id: 27,
                question: "The purpose of bag filters in industrial buildings is to:",
                options: ["Control vibrations", "Minimize dust and improve air quality", "Insulate against heat", "Distribute power efficiently"],
                answer: "Minimize dust and improve air quality"
            },
            {
                id: 28,
                question: "What is a key component of emergency response planning?",
                options: ["Automated lighting systems", "Designating escape routes and safety drills", "Installing additional generators", "Securing construction permits"],
                answer: "Designating escape routes and safety drills"
            },
            {
                id: 29,
                question: "Ventilation stacks are crucial for:",
                options: ["Minimizing noise levels", "Controlling heat and fume emissions", "Enhancing aesthetic value", "Supporting heavy equipment"],
                answer: "Controlling heat and fume emissions"
            },
            {
                id: 30,
                question: "Soil stabilization is necessary when:",
                options: ["The construction area has weak soil", "Foundations are shallow", "Equipment is lightweight", "Zoning regulations require it"],
                answer: "The construction area has weak soil"
            }
        ],
        advanced: []
    },
    "roads": {
        basic: [
            {
                id: 1,
                question: "What is the purpose of feasibility studies in road construction?",
                options: ["To determine the most aesthetic design", "To assess project viability and traffic patterns", "To calculate material costs", "To obtain environmental clearances"],
                answer: "To assess project viability and traffic patterns"
            },
            {
                id: 2,
                question: "What type of surveys helps understand the terrain and soil composition?",
                options: ["Traffic surveys", "Geological surveys", "Environmental surveys", "Financial surveys"],
                answer: "Geological surveys"
            },
            {
                id: 3,
                question: "What is included in environmental impact assessments for road construction?",
                options: ["Noise pollution and air quality analysis", "Soil testing", "Traffic flow simulation", "Structural design"],
                answer: "Noise pollution and air quality analysis"
            },
            {
                id: 4,
                question: "Which body typically grants environmental clearances for road projects?",
                options: ["Industrial corporations", "Local regulatory authorities", "Construction contractors", "Private investors"],
                answer: "Local regulatory authorities"
            },
            {
                id: 5,
                question: "What is a potential innovative funding option for industrial roads?",
                options: ["Crowd-funding", "Public-private partnerships", "Local property tax increases", "Industrial worker donations"],
                answer: "Public-private partnerships"
            },
            {
                id: 6,
                question: "Which standard is commonly followed for road design in India?",
                options: ["ASTM", "IRC", "ISO", "ANSI"],
                answer: "IRC"
            },
            {
                id: 7,
                question: "What is the typical lane width for industrial roads?",
                options: ["2.5–3 meters", "3.5–4 meters", "5–6 meters", "4.5–5 meters"],
                answer: "3.5–4 meters"
            },
            {
                id: 8,
                question: "Why are advanced drainage systems necessary for industrial roads?",
                options: ["To beautify the roads", "To prevent water accumulation and damage", "To lower construction costs", "To improve road grip during dry conditions"],
                answer: "To prevent water accumulation and damage"
            },
            {
                id: 9,
                question: "What type of aggregates is recommended for industrial roads?",
                options: ["Lightweight aggregates", "High-quality, well-graded aggregates", "Sand aggregates", "Organic materials"],
                answer: "High-quality, well-graded aggregates"
            },
            {
                id: 10,
                question: "Which bitumen type is preferred for durability?",
                options: ["Polymer-modified bitumen", "Natural bitumen", "Recycled bitumen", "Unrefined bitumen"],
                answer: "Polymer-modified bitumen"
            },
            {
                id: 11,
                question: "What cement grade is ideal for rigid pavements?",
                options: ["OPC 43", "OPC 53", "PPC 33", "Slag cement"],
                answer: "OPC 53"
            },
            {
                id: 12,
                question: "What is the function of the sub-base layer in road construction?",
                options: ["To prevent water drainage", "To provide structural stability", "To add aesthetic appeal", "To distribute light traffic loads"],
                answer: "To provide structural stability"
            },
            {
                id: 13,
                question: "Which material is used for the binder course?",
                options: ["Wet Mix Macadam (WMM)", "Dense Bituminous Macadam (DBM)", "Granular Sub-Base (GSB)", "Polymer Bitumen Concrete"],
                answer: "Dense Bituminous Macadam (DBM)"
            },
            {
                id: 14,
                question: "What feature prevents subgrade weakening?",
                options: ["Surface drainage", "Subsurface drainage", "Thermoplastic coatings", "High-grip asphalt"],
                answer: "Subsurface drainage"
            },
            {
                id: 15,
                question: "What helps manage groundwater in drainage systems?",
                options: ["Solid concrete pipes", "Perforated pipes with geotextiles", "Metal reinforcements", "Water tanks"],
                answer: "Perforated pipes with geotextiles"
            },
            {
                id: 16,
                question: "What compaction rate is required for subgrade layers?",
                options: ["95%", "98%", "85%", "90%"],
                answer: "98%"
            },
            {
                id: 17,
                question: "What is the maximum acceptable surface deviation for industrial roads?",
                options: ["2 cm over 5 meters", "5 cm over 3 meters", "10 cm over 3 meters", "1 cm over 1 meter"],
                answer: "5 cm over 3 meters"
            },
            {
                id: 18,
                question: "Which safety feature is recommended for visibility?",
                options: ["Plastic road markings", "Thermoplastic road markings", "Painted lines", "Reflective tape"],
                answer: "Thermoplastic road markings"
            },
            {
                id: 19,
                question: "What can improve traffic flow at major intersections?",
                options: ["Sharp corners", "Roundabouts", "Narrow lanes", "Speed bumps"],
                answer: "Roundabouts"
            },
            {
                id: 20,
                question: "What technology allows real-time monitoring of traffic and weather?",
                options: ["IoT-enabled sensors", "Radar systems", "Solar panels", "Satellite cameras"],
                answer: "IoT-enabled sensors"
            },
            {
                id: 21,
                question: "What is a sustainable practice for road construction?",
                options: ["Using non-biodegradable plastics", "Incorporating recycled asphalt", "Avoiding solar-powered systems", "Employing only non-renewable materials"],
                answer: "Incorporating recycled asphalt"
            },
            {
                id: 22,
                question: "What feature ensures smooth vehicle movement in industrial zones?",
                options: ["Steep gradients", "Gradual curves", "Minimal camber", "Narrow turning radii"],
                answer: "Gradual curves"
            },
            {
                id: 23,
                question: "What is used to prevent oil contamination in drainage systems?",
                options: ["High-pressure water pumps", "Oil-water separators", "Absorbent pads", "Gravel layers"],
                answer: "Oil-water separators"
            },
            {
                id: 24,
                question: "What layer is responsible for distributing loads across the pavement structure?",
                options: ["Surface Course", "Binder Course", "Base Layer", "Subgrade"],
                answer: "Base Layer"
            },
            {
                id: 25,
                question: "Which material is commonly used in the surface course for industrial roads?",
                options: ["Cement mortar", "Polymer Modified Bitumen Concrete", "Wet Mix Macadam", "Plain concrete"],
                answer: "Polymer Modified Bitumen Concrete"
            },
            {
                id: 26,
                question: "What is the ideal gradient for industrial roads to facilitate vehicle movement?",
                options: ["5-6%", "1-2%", "3-4%", "6-8%"],
                answer: "3-4%"
            },
            {
                id: 27,
                question: "What is the purpose of acceleration and deceleration lanes in industrial areas?",
                options: ["To reduce road width", "To ensure smooth traffic flow near factory entrances", "To provide parking spaces for heavy vehicles", "To increase vehicle speeds"],
                answer: "To ensure smooth traffic flow near factory entrances"
            },
            {
                id: 28,
                question: "What feature improves safety at road intersections in industrial zones?",
                options: ["Smaller turning radii", "Traffic signals without roundabouts", "Larger turning radii and roundabouts", "Sharp curves"],
                answer: "Larger turning radii and roundabouts"
            },
            {
                id: 29,
                question: "What is the role of smart drainage systems in industrial roads?",
                options: ["To reduce construction costs", "To allow predictive maintenance and rapid response", "To replace traditional drainage systems", "To eliminate subsurface water flow"],
                answer: "To allow predictive maintenance and rapid response"
            },
            {
                id: 30,
                question: "What materials are ideal for constructing durable side drains in industrial roads?",
                options: ["PVC pipes", "Reinforced concrete", "Plastic sheeting", "Wooden beams"],
                answer: "Reinforced concrete"
            }
        ],
        advanced: []
    },
    //Leadership Skills
    "continuous-improvement": {
        basic: [
            {
                id: 1,
                question: "What is the main goal of continuous improvement?",
                options: [
                    "Achieving perfection in processes",
                    "Making small, incremental changes for sustained optimization",
                    "Reducing employee workload",
                    "Focusing solely on profit"
                ],
                answer: "Making small, incremental changes for sustained optimization"
            },
            {
                id: 2,
                question: "What does the PDCA cycle stand for?",
                options: [
                    "Plan, Define, Control, Act",
                    "Prepare, Design, Create, Analyze",
                    "Plan, Do, Check, Act",
                    "Prioritize, Design, Check, Adapt"
                ],
                answer: "Plan, Do, Check, Act"
            },
            {
                id: 3,
                question: "Which methodology focuses on reducing defects and variability?",
                options: ["Kaizen", "Six Sigma", "Lean Principles", "5S"],
                answer: "Six Sigma"
            },
            {
                id: 4,
                question: "What is the philosophy of Kaizen primarily about?",
                options: [
                    "Rapid large-scale changes",
                    "Constant small improvements",
                    "Hiring external consultants",
                    "Replacing old technologies"
                ],
                answer: "Constant small improvements"
            },
            {
                id: 5,
                question: "Which of the following is NOT one of the seven types of waste identified in Lean Principles?",
                options: ["Overproduction", "Waiting", "Redundancy", "Defects"],
                answer: "Redundancy"
            },
            {
                id: 6,
                question: "What is the purpose of 'Value Stream Analysis'?",
                options: [
                    "To identify customer dissatisfaction",
                    "To analyze activities that create customer value",
                    "To eliminate employee turnover",
                    "To standardize all processes"
                ],
                answer: "To analyze activities that create customer value"
            },
            {
                id: 7,
                question: "What does 'Just-in-Time' emphasize?",
                options: [
                    "Producing as much as possible in advance",
                    "Storing resources for future use",
                    "Providing materials exactly when needed",
                    "Minimizing employee participation"
                ],
                answer: "Providing materials exactly when needed"
            },
            {
                id: 8,
                question: "Which framework does Six Sigma use for problem-solving?",
                options: ["DMAIC", "PDCA", "Agile", "SCRUM"],
                answer: "DMAIC"
            },
            {
                id: 9,
                question: "What is the first step of the PDCA cycle?",
                options: ["Plan", "Do", "Act", "Check"],
                answer: "Plan"
            },
            {
                id: 10,
                question: "What is the focus of mistake-proofing (Poka-Yoke)?",
                options: [
                    "Designing systems to prevent errors",
                    "Eliminating human oversight",
                    "Automating all tasks",
                    "Increasing inventory"
                ],
                answer: "Designing systems to prevent errors"
            },
            {
                id: 11,
                question: "What is one key feature of Kaizen events (blitzes)?",
                options: [
                    "Large-scale strategy meetings",
                    "Short, intensive improvement sessions",
                    "Outsourced planning",
                    "Advanced technology implementation"
                ],
                answer: "Short, intensive improvement sessions"
            },
            {
                id: 12,
                question: "What does the 'Control' phase in DMAIC involve?",
                options: [
                    "Testing solutions",
                    "Implementing changes",
                    "Maintaining improvements",
                    "Analyzing data"
                ],
                answer: "Maintaining improvements"
            },
            {
                id: 13,
                question: "What is '5S' primarily focused on?",
                options: [
                    "Financial planning",
                    "Workplace organization",
                    "Marketing strategies",
                    "Employee engagement"
                ],
                answer: "Workplace organization"
            },
            {
                id: 14,
                question: "Which of the following is a benefit of continuous improvement?",
                options: [
                    "Reduced employee responsibilities",
                    "Increased customer satisfaction",
                    "Complete elimination of all defects",
                    "Immediate financial growth"
                ],
                answer: "Increased customer satisfaction"
            },
            {
                id: 15,
                question: "What is the primary focus of Lean Principles?",
                options: [
                    "Increasing speed at any cost",
                    "Reducing waste and enhancing flow",
                    "Hiring more employees",
                    "Automating every process"
                ],
                answer: "Reducing waste and enhancing flow"
            },
            {
                id: 16,
                question: "Which visual tool is commonly used for workflow management?",
                options: ["Kanban board", "Flowchart", "Gantt chart", "Fishbone diagram"],
                answer: "Kanban board"
            },
            {
                id: 17,
                question: "What is one outcome of involving employees in the improvement process?",
                options: [
                    "Decreased job satisfaction",
                    "Increased resistance to change",
                    "Enhanced employee engagement",
                    "Delayed project timelines"
                ],
                answer: "Enhanced employee engagement"
            },
            {
                id: 18,
                question: "Which step in 5S ensures consistency in workplace organization?",
                options: ["Sort", "Set in Order", "Shine", "Standardize"],
                answer: "Standardize"
            },
            {
                id: 19,
                question: "What is the goal of data-driven decision-making?",
                options: [
                    "Replacing employees with automation",
                    "Making faster, more informed decisions",
                    "Eliminating all organizational risks",
                    "Reducing the reliance on metrics"
                ],
                answer: "Making faster, more informed decisions"
            },
            {
                id: 20,
                question: "How can leadership support continuous improvement?",
                options: [
                    "By resisting employee feedback",
                    "By setting the tone and empowering employees",
                    "By focusing solely on cost-cutting",
                    "By avoiding communication"
                ],
                answer: "By setting the tone and empowering employees"
            },
            {
                id: 21,
                question: "What is a 'Pull System'?",
                options: [
                    "Producing goods in advance of demand",
                    "Producing based on customer demand",
                    "Focusing on supply chain optimization",
                    "Automating inventory systems"
                ],
                answer: "Producing based on customer demand"
            },
            {
                id: 22,
                question: "What does 'Cycle Time' measure?",
                options: [
                    "Customer satisfaction",
                    "Time taken to complete a process",
                    "Frequency of employee engagement events",
                    "Product defect rate"
                ],
                answer: "Time taken to complete a process"
            },
            {
                id: 23,
                question: "Why is process mapping important?",
                options: [
                    "To identify bottlenecks and inefficiencies",
                    "To reduce employee workload",
                    "To increase the number of steps in a workflow",
                    "To document customer feedback"
                ],
                answer: "To identify bottlenecks and inefficiencies"
            },
            {
                id: 24,
                question: "What does visual management enhance?",
                options: [
                    "Employee autonomy",
                    "Transparency and accountability",
                    "Customer service",
                    "Marketing campaigns"
                ],
                answer: "Transparency and accountability"
            },
            {
                id: 25,
                question: "What is one challenge of continuous improvement?",
                options: [
                    "Resistance to change",
                    "Lack of customer data",
                    "Excessive communication",
                    "High employee satisfaction"
                ],
                answer: "Resistance to change"
            },
            {
                id: 26,
                question: "What role do leaders play in continuous improvement?",
                options: [
                    "Minimizing organizational transparency",
                    "Removing barriers and fostering innovation",
                    "Reducing employee involvement",
                    "Ignoring feedback"
                ],
                answer: "Removing barriers and fostering innovation"
            },
            {
                id: 27,
                question: "What is the benefit of 'Sort' in the 5S methodology?",
                options: [
                    "Reducing workplace distractions",
                    "Maximizing storage",
                    "Enhancing marketing strategies",
                    "Avoiding physical organization"
                ],
                answer: "Reducing workplace distractions"
            },
            {
                id: 28,
                question: "What is the key benefit of mistake-proofing?",
                options: [
                    "Increased profitability",
                    "Higher-quality products",
                    "More inventory",
                    "Faster hiring processes"
                ],
                answer: "Higher-quality products"
            },
            {
                id: 29,
                question: "What is the benefit of engaging employees in PDCA?",
                options: [
                    "Longer project timelines",
                    "Increased resistance to initiatives",
                    "Enhanced ownership of processes",
                    "Reduced team collaboration"
                ],
                answer: "Enhanced ownership of processes"
            },
            {
                id: 30,
                question: "What is the primary purpose of Kaizen events?",
                options: [
                    "Long-term employee training",
                    "Quick implementation of improvements",
                    "Large-scale corporate restructuring",
                    "Leadership-only discussions"
                ],
                answer: "Quick implementation of improvements"
            }
        ],
        advanced: []
    },
    "customer-focus": {
        basic: [
            {
                id: 1,
                question: "What is the foundation of a customer-centric culture?",
                options: [
                    "Prioritizing operational efficiency",
                    "Listening to customer feedback",
                    "Maximizing profit margins",
                    "Automating all processes"
                ],
                answer: "Listening to customer feedback"
            },
            {
                id: 2,
                question: "What is a key benefit of focusing on the customer?",
                options: [
                    "Reduced employee workload",
                    "Increased customer loyalty",
                    "Higher product prices",
                    "Limited market opportunities"
                ],
                answer: "Increased customer loyalty"
            },
            {
                id: 3,
                question: "Why is retaining customers often preferred over acquiring new ones?",
                options: [
                    "It reduces marketing needs.",
                    "It is less expensive.",
                    "It avoids competitive challenges.",
                    "It requires no engagement."
                ],
                answer: "It is less expensive."
            },
            {
                id: 4,
                question: "What does customer journey mapping involve?",
                options: [
                    "Tracking competitor activities",
                    "Mapping customer expectations",
                    "Identifying key touchpoints and pain points",
                    "Focusing on post-purchase activities"
                ],
                answer: "Identifying key touchpoints and pain points"
            },
            {
                id: 5,
                question: "What is the purpose of creating buyer personas?",
                options: [
                    "To summarize competitor strengths",
                    "To standardize customer data collection",
                    "To represent ideal customers for strategic decisions",
                    "To focus solely on high-income groups"
                ],
                answer: "To represent ideal customers for strategic decisions"
            },
            {
                id: 6,
                question: "Which metric evaluates how likely customers are to recommend a product or service?",
                options: [
                    "Customer Effort Score (CES)",
                    "Net Promoter Score (NPS)",
                    "Customer Retention Rate",
                    "Conversion Rate"
                ],
                answer: "Net Promoter Score (NPS)"
            },
            {
                id: 7,
                question: "What is a critical aspect of empowering frontline employees?",
                options: [
                    "Minimizing their autonomy",
                    "Providing training and tools",
                    "Limiting customer interactions",
                    "Assigning fixed scripts"
                ],
                answer: "Providing training and tools"
            },
            {
                id: 8,
                question: "What does a customer-centric approach primarily aim to improve?",
                options: [
                    "Customer satisfaction and loyalty",
                    "Employee performance reviews",
                    "Brand productivity metrics",
                    "Marketing ROI"
                ],
                answer: "Customer satisfaction and loyalty"
            },
            {
                id: 9,
                question: "How can businesses segment customers effectively?",
                options: [
                    "By offering the same service to all",
                    "By analyzing demographics and buying behavior",
                    "By ignoring purchase history",
                    "By using random group assignments"
                ],
                answer: "By analyzing demographics and buying behavior"
            },
            {
                id: 10,
                question: "What is the role of customer feedback in continuous improvement?",
                options: [
                    "Limiting changes",
                    "Guiding enhancements",
                    "Deferring customer demands",
                    "Disregarding complaints"
                ],
                answer: "Guiding enhancements"
            },
            {
                id: 11,
                question: "What does hyper-personalization rely on?",
                options: [
                    "Standardized marketing messages",
                    "Advanced data and AI",
                    "Broad customer surveys",
                    "Manual record keeping"
                ],
                answer: "Advanced data and AI"
            },
            {
                id: 12,
                question: "What is the focus of a seamless omnichannel experience?",
                options: [
                    "Maximizing online visibility",
                    "Creating unified experiences across digital and physical channels",
                    "Reducing customer interactions",
                    "Simplifying pricing models"
                ],
                answer: "Creating unified experiences across digital and physical channels"
            },
            {
                id: 13,
                question: "What does 'Customer Lifetime Value (CLV)' measure?",
                options: [
                    "Immediate revenue per sale",
                    "Long-term revenue from each customer",
                    "Product lifecycle performance",
                    "Marketing campaign effectiveness"
                ],
                answer: "Long-term revenue from each customer"
            },
            {
                id: 14,
                question: "What is a key strategy to build customer loyalty?",
                options: [
                    "Offering generic solutions",
                    "Delivering personalized experiences",
                    "Reducing product quality",
                    "Focusing only on new customers"
                ],
                answer: "Delivering personalized experiences"
            },
            {
                id: 15,
                question: "Which method helps companies understand evolving customer needs?",
                options: [
                    "Agile experimentation",
                    "Employee-only workshops",
                    "Static reports",
                    "Standardized campaigns"
                ],
                answer: "Agile experimentation"
            },
            {
                id: 16,
                question: "What is a significant benefit of acting on customer insights?",
                options: [
                    "Limiting expenses",
                    "Increasing customer satisfaction rates",
                    "Reducing competition",
                    "Eliminating feedback loops"
                ],
                answer: "Increasing customer satisfaction rates"
            },
            {
                id: 17,
                question: "Which tool aids in resolving customer issues efficiently?",
                options: [
                    "Design thinking",
                    "Generic questionnaires",
                    "Training frontline employees",
                    "Broad market segmentation"
                ],
                answer: "Training frontline employees"
            },
            {
                id: 18,
                question: "What is a hallmark of a customer-centric culture?",
                options: [
                    "Reduced employee autonomy",
                    "Encouraging customer feedback",
                    "Prioritizing organizational goals",
                    "Limiting product customization"
                ],
                answer: "Encouraging customer feedback"
            },
            {
                id: 19,
                question: "Why is it important to respond to customer feedback?",
                options: [
                    "To improve internal marketing efforts",
                    "To prioritize complaints over compliments",
                    "To demonstrate commitment to their needs",
                    "To delay product development"
                ],
                answer: "To demonstrate commitment to their needs"
            },
            {
                id: 20,
                question: "What does integrating customer data achieve?",
                options: [
                    "Centralizes data for a unified view",
                    "Reduces data insights",
                    "Complicates customer analysis",
                    "Prevents customer personalization"
                ],
                answer: "Centralizes data for a unified view"
            },
            {
                id: 21,
                question: "How does predictive intelligence support customer focus?",
                options: [
                    "By anticipating customer needs proactively",
                    "By reducing marketing analytics",
                    "By ignoring past trends",
                    "By delaying responses"
                ],
                answer: "By anticipating customer needs proactively"
            },
            {
                id: 22,
                question: "Which factor deepens customer relationships?",
                options: [
                    "Offering one-time discounts",
                    "Cross-selling complementary products",
                    "Reducing customer service quality",
                    "Limiting customer interaction"
                ],
                answer: "Cross-selling complementary products"
            },
            {
                id: 23,
                question: "What is one metric for measuring customer effort?",
                options: [
                    "Customer Retention Rate",
                    "Customer Effort Score (CES)",
                    "Net Promoter Score (NPS)",
                    "Repeat Business Rate"
                ],
                answer: "Customer Effort Score (CES)"
            },
            {
                id: 24,
                question: "Why is co-creating with customers effective?",
                options: [
                    "It aligns solutions with customer needs",
                    "It increases operational silos",
                    "It focuses only on sales data",
                    "It reduces market collaboration"
                ],
                answer: "It aligns solutions with customer needs"
            },
            {
                id: 25,
                question: "What strengthens a company's reputation?",
                options: [
                    "Exceptional customer service",
                    "Reduced market presence",
                    "Ignoring customer demands",
                    "Shortened product life cycles"
                ],
                answer: "Exceptional customer service"
            },
            {
                id: 26,
                question: "What is an advantage of turning customers into advocates?",
                options: [
                    "Limiting their involvement",
                    "Reducing word-of-mouth influence",
                    "Driving new business through referrals",
                    "Focusing on internal processes"
                ],
                answer: "Driving new business through referrals"
            },
            {
                id: 27,
                question: "What role does technology play in customer-centric strategies?",
                options: [
                    "Limits data analysis",
                    "Enhances personalized service through AI",
                    "Decreases customer engagement",
                    "Centralizes employee-only resources"
                ],
                answer: "Enhances personalized service through AI"
            },
            {
                id: 28,
                question: "What is critical for successful customer satisfaction tracking?",
                options: [
                    "Leveraging multiple metrics",
                    "Ignoring qualitative feedback",
                    "Prioritizing negative feedback",
                    "Eliminating post-purchase surveys"
                ],
                answer: "Leveraging multiple metrics"
            },
            {
                id: 29,
                question: "What drives sustainable business growth?",
                options: [
                    "Building lasting customer relationships",
                    "Reducing customer interaction",
                    "Ignoring evolving needs",
                    "Limiting service enhancements"
                ],
                answer: "Building lasting customer relationships"
            },
            {
                id: 30,
                question: "What does fostering a customer-centric culture require?",
                options: [
                    "Solely focusing on leadership initiatives",
                    "Aligning company values with customer needs",
                    "Ignoring frontline employee contributions",
                    "Eliminating employee training programs"
                ],
                answer: "Aligning company values with customer needs"
            }
        ],
        advanced: []
    },
    "communication-skills": {
        basic: [
            {
                id: 1,
                question: "What is the primary goal of effective communication?",
                options: ["Persuading others to agree with you", "Achieving mutual understanding", "Winning every argument", "Avoiding conflicts"],
                answer: "Achieving mutual understanding"
            },
            {
                id: 2,
                question: "Which of the following is a key element of effective communication?",
                options: ["Clear expression", "Active listening", "Mutual understanding", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 3,
                question: "Why is effective communication important in personal relationships?",
                options: ["It reduces the need for active engagement.", "It fosters deeper connections and understanding.", "It focuses on career advancement.", "It eliminates all misunderstandings."],
                answer: "It fosters deeper connections and understanding."
            },
            {
                id: 4,
                question: "Which barrier to communication is caused by emotions like anger or anxiety?",
                options: ["Lack of active listening", "Emotional barriers", "Cultural differences", "Unclear messages"],
                answer: "Emotional barriers"
            },
            {
                id: 5,
                question: "What does active listening involve?",
                options: ["Focusing solely on your response", "Interrupting when needed", "Concentrating fully on the speaker with empathy", "Avoiding eye contact"],
                answer: "Concentrating fully on the speaker with empathy"
            },
            {
                id: 6,
                question: "What is emotional intelligence in communication?",
                options: ["Avoiding emotional expressions", "Recognizing and responding to others' emotions", "Ignoring nonverbal cues", "Using only logic during conversations"],
                answer: "Recognizing and responding to others' emotions"
            },
            {
                id: 7,
                question: "What does nonverbal communication include?",
                options: ["Body language, gestures, and facial expressions", "Written communication only", "Audio signals only", "Verbal tone alone"],
                answer: "Body language, gestures, and facial expressions"
            },
            {
                id: 8,
                question: "Assertiveness involves:",
                options: ["Being passive to avoid conflict", "Aggressively demanding what you need", "Confidently expressing your thoughts without aggression", "Avoiding expressing personal opinions"],
                answer: "Confidently expressing your thoughts without aggression"
            },
            {
                id: 9,
                question: "How can you tailor your message to your audience?",
                options: ["Use technical jargon exclusively", "Adapt language, tone, and content to their needs", "Stick to one presentation style for all", "Avoid understanding their preferences"],
                answer: "Adapt language, tone, and content to their needs"
            },
            {
                id: 10,
                question: "What is the purpose of asking thoughtful questions?",
                options: ["To dominate the conversation", "To clarify understanding and foster dialogue", "To prove your knowledge", "To shift focus to unrelated topics"],
                answer: "To clarify understanding and foster dialogue"
            },
            {
                id: 11,
                question: "Constructive feedback should focus on:",
                options: ["Personality traits", "Behaviors with actionable suggestions", "Dismissing strengths", "Delivering criticism casually"],
                answer: "Behaviors with actionable suggestions"
            },
            {
                id: 12,
                question: "What enhances effective presentation skills?",
                options: ["Avoiding audience engagement", "Using clear visuals and a compelling narrative", "Speaking without preparation", "Overloading slides with text"],
                answer: "Using clear visuals and a compelling narrative"
            },
            {
                id: 13,
                question: "In difficult conversations, which approach is most effective?",
                options: ["Using 'you' statements", "Preparing facts and leading with empathy", "Ignoring emotional states", "Speaking aggressively to dominate the discussion"],
                answer: "Preparing facts and leading with empathy"
            },
            {
                id: 14,
                question: "Which is a step in resolving conflicts through communication?",
                options: ["Ignoring opposing viewpoints", "Finding common ground", "Focusing only on personal interests", "Avoiding active listening"],
                answer: "Finding common ground"
            },
            {
                id: 15,
                question: "Why is video conferencing useful in remote communication?",
                options: ["It eliminates all communication barriers.", "It fosters face-to-face interactions and nonverbal cues.", "It replaces written documentation entirely.", "It guarantees complete understanding."],
                answer: "It fosters face-to-face interactions and nonverbal cues."
            },
            {
                id: 16,
                question: "What should you do to overcome communication anxiety?",
                options: ["Avoid challenging conversations", "Practice communication regularly and use positive self-talk", "Ignore preparation for public speaking", "Focus only on others’ responses"],
                answer: "Practice communication regularly and use positive self-talk"
            },
            {
                id: 17,
                question: "Active listening includes:",
                options: ["Paraphrasing key points", "Interrupting for clarity", "Shifting focus to your opinion", "Waiting silently for your turn"],
                answer: "Paraphrasing key points"
            },
            {
                id: 18,
                question: "How can you adapt communication to different personality types?",
                options: ["Use one universal style", "Provide structure for detail-oriented individuals", "Avoid animated expressions for expressive types", "Ignore their preferences"],
                answer: "Provide structure for detail-oriented individuals"
            },
            {
                id: 19,
                question: "What enhances clarity in written communication?",
                options: ["Using jargon and long sentences", "Logical structure with concise language", "Ignoring grammar and spelling", "Writing without proofreading"],
                answer: "Logical structure with concise language"
            },
            {
                id: 20,
                question: "How can storytelling improve communication?",
                options: ["By presenting dry data alone", "By creating emotional connections and engagement", "By avoiding relatable scenarios", "By focusing on technical terms"],
                answer: "By creating emotional connections and engagement"
            },
            {
                id: 21,
                question: "What is the benefit of handling cultural differences in communication?",
                options: ["Promotes assumptions", "Reduces understanding", "Builds trust through cultural awareness", "Avoids language barriers"],
                answer: "Builds trust through cultural awareness"
            },
            {
                id: 22,
                question: "Effective meeting communication includes:",
                options: ["Dominating airtime", "Setting clear objectives and encouraging participation", "Avoiding quieter participants", "Rushing through agendas"],
                answer: "Setting clear objectives and encouraging participation"
            },
            {
                id: 23,
                question: "What is the purpose of empathy in communication?",
                options: ["To suppress emotions", "To connect and build trust with others", "To limit interaction", "To focus on your own goals"],
                answer: "To connect and build trust with others"
            },
            {
                id: 24,
                question: "What role does practice play in communication improvement?",
                options: ["Reinforces bad habits", "Develops confidence and natural skills", "Avoids constructive feedback", "Reduces the need for preparation"],
                answer: "Develops confidence and natural skills"
            },
            {
                id: 25,
                question: "Emotional intelligence requires:",
                options: ["Suppressing emotions", "Recognizing and managing emotions in yourself and others", "Ignoring others’ feelings", "Responding with only facts"],
                answer: "Recognizing and managing emotions in yourself and others"
            },
            {
                id: 26,
                question: "What is a key component of assertive communication?",
                options: ["Apologizing unnecessarily", "Speaking confidently while respecting others", "Avoiding direct expressions", "Prioritizing personal goals aggressively"],
                answer: "Speaking confidently while respecting others"
            },
            {
                id: 27,
                question: "How does constructive feedback improve communication?",
                options: ["It points out flaws in personality.", "It empowers growth with specific suggestions.", "It avoids addressing improvement areas.", "It replaces encouragement."],
                answer: "It empowers growth with specific suggestions."
            },
            {
                id: 28,
                question: "What is a strategy for delivering impactful presentations?",
                options: ["Reading directly from slides", "Mastering visual aids and engaging delivery", "Ignoring audience questions", "Overloading the audience with information"],
                answer: "Mastering visual aids and engaging delivery"
            },
            {
                id: 29,
                question: "How do you ensure effective communication in virtual environments?",
                options: ["Overcommunicate and establish clear channels", "Avoid check-ins", "Reduce documentation", "Rely solely on emails"],
                answer: "Overcommunicate and establish clear channels"
            },
            {
                id: 30,
                question: "Effective communication in the workplace involves:",
                options: ["Ignoring team dynamics", "Utilizing empathy, clarity, and teamwork", "Avoiding conflict resolution", "Sticking to rigid communication methods"],
                answer: "Utilizing empathy, clarity, and teamwork"
            }
        ],
        advanced: [],
    },
    "wellness": {
        basic: [
            {
                id: 1,
                question: "What is the primary focus of wellness?",
                options: ["Physical health", "Overall well-being", "Financial stability", "Professional success"],
                answer: "Overall well-being"
            },
            {
                id: 2,
                question: "Which is NOT one of the pillars of wellness?",
                options: ["Physical Wellness", "Emotional Wellness", "Financial Wellness", "Spiritual Wellness"],
                answer: "Financial Wellness"
            },
            {
                id: 3,
                question: "What is a key benefit of regular exercise for cardiovascular health?",
                options: ["Improved digestion", "Reduced risk of heart disease", "Enhanced cognitive function", "Increased flexibility"],
                answer: "Reduced risk of heart disease"
            },
            {
                id: 4,
                question: "Why is mindfulness important for mental wellness?",
                options: ["It helps in multi-tasking", "It increases energy levels", "It reduces stress and improves focus", "It strengthens muscles"],
                answer: "It reduces stress and improves focus"
            },
            {
                id: 5,
                question: "What is the primary focus of emotional wellness?",
                options: ["Building resilience through diet", "Recognizing and expressing emotions healthily", "Enhancing physical strength", "Practicing community engagement"],
                answer: "Recognizing and expressing emotions healthily"
            },
            {
                id: 6,
                question: "What is a recommended technique for stress management?",
                options: ["Avoid social connections", "Progressive muscle relaxation", "Overworking", "Ignoring deadlines"],
                answer: "Progressive muscle relaxation"
            },
            {
                id: 7,
                question: "What type of foods are recommended for physical wellness?",
                options: ["Processed snacks", "Nutrient-rich whole foods", "Sugary desserts", "Fast foods"],
                answer: "Nutrient-rich whole foods"
            },
            {
                id: 8,
                question: "Which pillar focuses on finding meaning and purpose in life?",
                options: ["Emotional Wellness", "Social Wellness", "Spiritual Wellness", "Physical Wellness"],
                answer: "Spiritual Wellness"
            },
            {
                id: 9,
                question: "What is a benefit of gratitude practice?",
                options: ["Improved physical fitness", "Shift in focus to positive aspects of life", "Increased professional skills", "Better decision-making"],
                answer: "Shift in focus to positive aspects of life"
            },
            {
                id: 10,
                question: "What is a key aspect of social wellness?",
                options: ["Building meaningful relationships", "Avoiding community involvement", "Prioritizing independence", "Ignoring family and friends"],
                answer: "Building meaningful relationships"
            },
            {
                id: 11,
                question: "How does connecting with nature contribute to wellness?",
                options: ["Improves financial wealth", "Creates stress and anxiety", "Nourishes the soul and provides balance", "Focuses on social media engagement"],
                answer: "Nourishes the soul and provides balance"
            },
            {
                id: 12,
                question: "What does workplace wellness focus on?",
                options: ["Reducing work hours", "Promoting a healthy work environment", "Increasing productivity at any cost", "Avoiding mental health discussions"],
                answer: "Promoting a healthy work environment"
            },
            {
                id: 13,
                question: "What is essential for children’s wellness?",
                options: ["Only academic success", "Balanced diet and physical activity", "Avoiding social interactions", "Regular technology usage"],
                answer: "Balanced diet and physical activity"
            },
            {
                id: 14,
                question: "What supports mental wellness in adolescents?",
                options: ["Stress management and mindfulness", "Avoiding physical activity", "Limiting peer relationships", "Ignoring emotional changes"],
                answer: "Stress management and mindfulness"
            },
            {
                id: 15,
                question: "What helps seniors maintain physical wellness?",
                options: ["Strict rest routines", "High-impact exercises", "Low-impact physical activities like walking", "Avoiding physical activity altogether"],
                answer: "Low-impact physical activities like walking"
            },
            {
                id: 16,
                question: "How can adults nurture mental health?",
                options: ["Avoiding stress management techniques", "Embracing mindfulness practices", "Overworking to cope with challenges", "Ignoring professional support"],
                answer: "Embracing mindfulness practices"
            },
            {
                id: 17,
                question: "What is a significant wellness challenge in modern life?",
                options: ["Availability of wellness resources", "Financial constraints", "Over-motivation", "Unlimited time for self-care"],
                answer: "Financial constraints"
            },
            {
                id: 18,
                question: "What is an essential component of spiritual wellness?",
                options: ["Financial success", "Deepening connections through personal reflection", "Prioritizing social media interactions", "Avoiding community involvement"],
                answer: "Deepening connections through personal reflection"
            },
            {
                id: 19,
                question: "What is a major focus of wellness for chronic conditions?",
                options: ["Symptom neglect", "Symptom monitoring and medication adherence", "Relying solely on medication", "Ignoring medical advice"],
                answer: "Symptom monitoring and medication adherence"
            },
            {
                id: 20,
                question: "What does the future of wellness emphasize?",
                options: ["Ignoring technological advancements", "Personalized wellness programs", "Uniform wellness plans for all", "Limiting integrative healthcare approaches"],
                answer: "Personalized wellness programs"
            },
            {
                id: 21,
                question: "What can improve work-life balance?",
                options: ["Continuous online availability", "Clear boundaries and regular breaks", "Ignoring personal care", "Overloading the schedule"],
                answer: "Clear boundaries and regular breaks"
            },
            {
                id: 22,
                question: "What is a barrier to wellness?",
                options: ["Scheduling wellness activities", "Lack of time", "Seeking professional support", "Celebrating small successes"],
                answer: "Lack of time"
            },
            {
                id: 23,
                question: "How can wellness be integrated sustainably?",
                options: ["Implementing drastic changes", "Gradually incorporating small wellness habits", "Avoiding any planning", "Relying on short-term solutions"],
                answer: "Gradually incorporating small wellness habits"
            },
            {
                id: 24,
                question: "How can social support help with stress?",
                options: ["By isolating oneself", "Sharing concerns and gaining new perspectives", "Ignoring emotional needs", "Relying only on self-solutions"],
                answer: "Sharing concerns and gaining new perspectives"
            },
            {
                id: 25,
                question: "What is an emerging trend in wellness?",
                options: ["Decline in healthcare technologies", "Virtual and augmented reality for wellness activities", "Uniform healthcare treatments", "Avoiding traditional healing practices"],
                answer: "Virtual and augmented reality for wellness activities"
            },
            {
                id: 26,
                question: "What can help adolescents’ social wellness?",
                options: ["Avoiding community engagement", "Building communication skills", "Isolating from peers", "Ignoring social challenges"],
                answer: "Building communication skills"
            },
            {
                id: 27,
                question: "What is a benefit of cultivating positive emotions?",
                options: ["Decreased resilience", "Increased life satisfaction", "Reduced creativity", "Lower emotional health"],
                answer: "Increased life satisfaction"
            },
            {
                id: 28,
                question: "What improves emotional wellness?",
                options: ["Avoiding emotional expression", "Cultivating positive relationships", "Ignoring feelings", "Focusing solely on work"],
                answer: "Cultivating positive relationships"
            },
            {
                id: 29,
                question: "What is essential for children’s emotional wellness?",
                options: ["Ignoring mindfulness practices", "Deep breathing and self-awareness", "Solely academic focus", "Avoiding guidance on stress"],
                answer: "Deep breathing and self-awareness"
            },
            {
                id: 30,
                question: "How does gratitude benefit mental health?",
                options: ["Promotes negative thoughts", "Shifts focus to positive aspects of life", "Discourages reflection", "Increases stress"],
                answer: "Shifts focus to positive aspects of life"
            }
        ]
    },
    "work-ethics": {
        basic: [
            {
                id: 1,
                question: "What does 'work ethics' primarily refer to?",
                options: ["Personal habits at home", "Moral principles guiding workplace behavior", "Financial decision-making", "Dress codes at work"],
                answer: "Moral principles guiding workplace behavior"
            },
            {
                id: 2,
                question: "Why is cultivating strong work ethics important?",
                options: ["It builds physical strength.", "It ensures professional success and credibility.", "It reduces the need for collaboration.", "It eliminates workplace communication."],
                answer: "It ensures professional success and credibility."
            },
            {
                id: 3,
                question: "What is the foundation of trust in the workplace?",
                options: ["Physical presence", "Honesty", "Advanced technology", "Financial resources"],
                answer: "Honesty"
            },
            {
                id: 4,
                question: "What does integrity mean in a professional setting?",
                options: ["Always following orders without question", "Adhering to moral principles consistently", "Avoiding challenges at work", "Accepting criticism without justification"],
                answer: "Adhering to moral principles consistently"
            },
            {
                id: 5,
                question: "What does accountability involve?",
                options: ["Avoiding responsibility for mistakes", "Taking ownership of actions and learning from them", "Delegating tasks to others", "Blaming colleagues for errors"],
                answer: "Taking ownership of actions and learning from them"
            },
            {
                id: 6,
                question: "What does reliability in the workplace signify?",
                options: ["Consistently meeting commitments and delivering on time", "Delegating tasks to others", "Making excuses for delays", "Avoiding teamwork"],
                answer: "Consistently meeting commitments and delivering on time"
            },
            {
                id: 7,
                question: "What is a key component of professionalism?",
                options: ["Dressing casually", "Maintaining good manners and boundaries", "Using informal language with clients", "Overlooking deadlines"],
                answer: "Maintaining good manners and boundaries"
            },
            {
                id: 8,
                question: "How does effective time management begin?",
                options: ["By multitasking as much as possible", "By prioritizing the most important tasks", "By focusing on less critical tasks", "By avoiding task organization"],
                answer: "By prioritizing the most important tasks"
            },
            {
                id: 9,
                question: "What is essential for successful teamwork?",
                options: ["Working in isolation", "Open communication and collaboration", "Avoiding conflict at all costs", "Minimizing team interaction"],
                answer: "Open communication and collaboration"
            },
            {
                id: 10,
                question: "What is the role of active listening in communication?",
                options: ["Disregarding non-verbal cues", "Focusing solely on your reply", "Understanding and empathizing with the speaker", "Interrupting frequently"],
                answer: "Understanding and empathizing with the speaker"
            },
            {
                id: 11,
                question: "What is the key to adaptability in the workplace?",
                options: ["Resisting changes", "Embracing new challenges and solutions", "Sticking to traditional methods", "Avoiding additional responsibilities"],
                answer: "Embracing new challenges and solutions"
            },
            {
                id: 12,
                question: "How does continuous learning benefit professionals?",
                options: ["It keeps them relevant in a changing workplace.", "It eliminates the need for teamwork.", "It reduces the importance of ethical behavior.", "It limits opportunities for growth."],
                answer: "It keeps them relevant in a changing workplace."
            },
            {
                id: 13,
                question: "What is ethical decision-making focused on?",
                options: ["Ignoring potential consequences", "Adhering to personal biases", "Balancing ethical principles and stakeholder needs", "Delegating decisions to others"],
                answer: "Balancing ethical principles and stakeholder needs"
            },
            {
                id: 14,
                question: "What helps in resolving workplace conflicts effectively?",
                options: ["Avoiding communication", "Clear and empathetic communication", "Dismissing others' concerns", "Ignoring the conflict"],
                answer: "Clear and empathetic communication"
            },
            {
                id: 15,
                question: "Why is promoting inclusivity important?",
                options: ["It reduces workplace communication.", "It fosters a dynamic and innovative workforce.", "It limits the need for training programs.", "It prioritizes exclusivity in decision-making."],
                answer: "It fosters a dynamic and innovative workforce."
            },
            {
                id: 16,
                question: "What is a crucial part of ethical leadership?",
                options: ["Avoiding transparency", "Setting the tone for integrity and trust", "Ignoring stakeholder concerns", "Overlooking ethical principles"],
                answer: "Setting the tone for integrity and trust"
            },
            {
                id: 17,
                question: "How does fostering open communication benefit workplaces?",
                options: ["It creates conflicts.", "It builds trust and strengthens collaboration.", "It reduces the flow of information.", "It discourages employee participation."],
                answer: "It builds trust and strengthens collaboration"
            },
            {
                id: 18,
                question: "What does work-life balance improve?",
                options: ["Stress levels only", "Productivity, job satisfaction, and mental health", "Financial performance exclusively", "Physical appearance"],
                answer: "Productivity, job satisfaction, and mental health"
            },
            {
                id: 19,
                question: "How can employees achieve work-life balance?",
                options: ["Avoiding time management strategies", "Setting boundaries and prioritizing self-care", "Always being available for work", "Ignoring personal responsibilities"],
                answer: "Setting boundaries and prioritizing self-care"
            },
            {
                id: 20,
                question: "What is the impact of celebrating diversity initiatives?",
                options: ["Reduces team collaboration", "Enhances a sense of belonging and community", "Discourages inclusivity", "Limits innovation"],
                answer: "Enhances a sense of belonging and community"
            },
            {
                id: 21,
                question: "What is the essence of mentoring others?",
                options: ["Overloading mentees with tasks", "Leading by example and providing constructive feedback", "Limiting skill development opportunities", "Ignoring professional growth"],
                answer: "Leading by example and providing constructive feedback"
            },
            {
                id: 22,
                question: "What is a major ethical challenge in technology?",
                options: ["Algorithmic bias", "Reduced productivity", "Lack of transparency in attire", "Increased employee attrition"],
                answer: "Algorithmic bias"
            },
            {
                id: 23,
                question: "Why is safeguarding data privacy critical?",
                options: ["To reduce operational costs", "To protect sensitive information and build trust", "To avoid workplace conflicts", "To ensure inclusivity policies"],
                answer: "To protect sensitive information and build trust"
            },
            {
                id: 24,
                question: "What is the role of ethical oversight in technology?",
                options: ["Eliminating human involvement", "Addressing ethical challenges responsibly", "Reducing organizational accountability", "Avoiding transparent governance"],
                answer: "Addressing ethical challenges responsibly"
            },
            {
                id: 25,
                question: "What is the impact of flexible work options?",
                options: ["Increases employee burnout", "Enhances work-life balance and retention rates", "Reduces productivity", "Discourages inclusivity"],
                answer: "Enhances work-life balance and retention rates"
            },
            {
                id: 26,
                question: "How does ethical conduct affect workplace culture?",
                options: ["Reduces collaboration", "Builds trust and strengthens organizational reputation", "Limits employee satisfaction", "Promotes bias and exclusivity"],
                answer: "Builds trust and strengthens organizational reputation"
            },
            {
                id: 27,
                question: "What is a recommended approach to handling ethical dilemmas?",
                options: ["Avoid making decisions", "Evaluate alternatives and reflect on outcomes", "Rely on intuition alone", "Ignore stakeholders’ concerns"],
                answer: "Evaluate alternatives and reflect on outcomes"
            },
            {
                id: 28,
                question: "How does transparency benefit leadership?",
                options: ["Reduces trust", "Fosters openness and accountability", "Discourages collaboration", "Creates confusion among employees"],
                answer: "Fosters openness and accountability"
            },
            {
                id: 29,
                question: "Why is professional attire important?",
                options: ["To compete with colleagues", "To convey competence and respect", "To reduce communication barriers", "To distract others at work"],
                answer: "To convey competence and respect"
            },
            {
                id: 30,
                question: "What does continuous learning fuel?",
                options: ["Professional stagnation", "Innovation and creativity", "Resistance to change", "Work-life imbalance"],
                answer: "Innovation and creativity"
            }
        ]
    },
    "public-speaking": {
        basic: [
            {
                id: 1,
                question: "What is a key benefit of strong public speaking skills?",
                options: ["Avoiding leadership roles", "Career advancement and influence", "Reducing social interactions", "Limiting professional growth"],
                answer: "Career advancement and influence"
            },
            {
                id: 2,
                question: "Which is NOT a primary advantage of effective communication?",
                options: ["Building relationships", "Achieving personal and professional goals", "Showcasing expertise", "Avoiding responsibility"],
                answer: "Avoiding responsibility"
            },
            {
                id: 3,
                question: "What is the foundation of effective public speaking?",
                options: ["Strong memory", "Clear and confident communication", "Advanced vocabulary", "Long speeches"],
                answer: "Clear and confident communication"
            },
            {
                id: 4,
                question: "What is the first step in overcoming public speaking anxiety?",
                options: ["Avoiding public speaking", "Identifying the roots of the fear", "Speaking without preparation", "Ignoring nervousness"],
                answer: "Identifying the roots of the fear"
            },
            {
                id: 5,
                question: "What technique helps calm nerves before speaking?",
                options: ["Avoiding practice", "Progressive muscle relaxation", "Speaking faster", "Focusing on negative outcomes"],
                answer: "Progressive muscle relaxation"
            },
            {
                id: 6,
                question: "What does projecting confidence involve?",
                options: ["Slouching and avoiding eye contact", "Standing tall and speaking with authority", "Avoiding audience engagement", "Reading directly from notes"],
                answer: "Standing tall and speaking with authority"
            },
            {
                id: 7,
                question: "How can a speaker effectively connect with the audience?",
                options: ["Ignoring audience reactions", "Using enthusiasm and genuine interest in the topic", "Maintaining a robotic delivery style", "Avoiding personal anecdotes"],
                answer: "Using enthusiasm and genuine interest in the topic"
            },
            {
                id: 8,
                question: "What is a key element of effective body language in public speaking?",
                options: ["Crossed arms", "Purposeful gestures", "Nervous fidgeting", "Stiff posture"],
                answer: "Purposeful gestures"
            },
            {
                id: 9,
                question: "How can vocal variety enhance a presentation?",
                options: ["By maintaining a monotonous tone", "By emphasizing key points and creating excitement", "By speaking in a whisper", "By avoiding changes in volume"],
                answer: "By emphasizing key points and creating excitement"
            },
            {
                id: 10,
                question: "What should a strong introduction accomplish?",
                options: ["Immediately end the speech", "Grab attention and preview key points", "Avoid establishing credibility", "Contain irrelevant anecdotes"],
                answer: "Grab attention and preview key points"
            },
            {
                id: 11,
                question: "How should a speech be structured for clarity?",
                options: ["Randomly jumping between topics", "Logical sections with clear transitions", "Long, uninterrupted monologues", "Avoiding conclusions"],
                answer: "Logical sections with clear transitions"
            },
            {
                id: 12,
                question: "What is the purpose of visual aids in a presentation?",
                options: ["Distracting the audience", "Supporting and clarifying the message", "Overloading slides with text", "Reducing audience attention"],
                answer: "Supporting and clarifying the message"
            },
            {
                id: 13,
                question: "What helps a speaker emotionally engage the audience?",
                options: ["Avoiding relatable stories", "Using humor and personal anecdotes", "Speaking in technical jargon", "Ignoring audience reactions"],
                answer: "Using humor and personal anecdotes"
            },
            {
                id: 14,
                question: "How should a speaker prepare for audience questions?",
                options: ["Avoid thinking about potential questions", "Anticipate common queries and practice responses", "Ignore questions altogether", "Provide vague answers"],
                answer: "Anticipate common queries and practice responses"
            },
            {
                id: 15,
                question: "What should a speaker do after making a mistake during a presentation?",
                options: ["Apologize excessively", "Recover gracefully and move forward", "End the presentation abruptly", "Dwell on the error"],
                answer: "Recover gracefully and move forward"
            },
            {
                id: 16,
                question: "How can storytelling improve a presentation?",
                options: ["By making it overly complex", "By engaging the audience emotionally", "By avoiding relatable themes", "By reducing focus on the main topic"],
                answer: "By engaging the audience emotionally"
            },
            {
                id: 17,
                question: "What is a key aspect of tailoring your message?",
                options: ["Using generic language", "Researching the audience's needs and interests", "Ignoring the audience’s background", "Focusing solely on technical details"],
                answer: "Researching the audience's needs and interests"
            },
            {
                id: 18,
                question: "How can a speaker build trust with the audience?",
                options: ["Being genuine and sharing personal experiences", "Using overly scripted delivery", "Avoiding eye contact", "Ignoring audience feedback"],
                answer: "Being genuine and sharing personal experiences"
            },
            {
                id: 19,
                question: "Why is it important to adapt to different presentation settings?",
                options: ["To ensure a seamless and engaging experience", "To reduce focus on audience dynamics", "To ignore the use of available technology", "To avoid preparation"],
                answer: "To ensure a seamless and engaging experience"
            },
            {
                id: 20,
                question: "What is the role of humor in public speaking?",
                options: ["Distracting the audience from the topic", "Breaking the ice and creating a relaxed atmosphere", "Undermining the speaker's credibility", "Making the presentation overly casual"],
                answer: "Breaking the ice and creating a relaxed atmosphere"
            },
            {
                id: 21,
                question: "Why is active listening important in public speaking?",
                options: ["To prepare for delivering a monologue", "To show understanding and engage the audience", "To avoid answering audience questions", "To dominate the conversation"],
                answer: "To show understanding and engage the audience"
            },
            {
                id: 22,
                question: "What helps a speaker develop a unique style?",
                options: ["Mimicking others exactly", "Embracing personal strengths and authenticity", "Avoiding feedback", "Sticking to a rigid template"],
                answer: "Embracing personal strengths and authenticity"
            },
            {
                id: 23,
                question: "Why is continuous learning important for public speakers?",
                options: ["To avoid innovation", "To refine skills and explore new techniques", "To limit adaptability", "To prioritize perfection"],
                answer: "To refine skills and explore new techniques"
            },
            {
                id: 24,
                question: "What is a benefit of leveraging technology in presentations?",
                options: ["Reducing audience engagement", "Enhancing visuals and interactivity", "Complicating the presentation process", "Avoiding audience participation"],
                answer: "Enhancing visuals and interactivity"
            },
            {
                id: 25,
                question: "What can mindfulness before a presentation help with?",
                options: ["Increasing nervousness", "Cultivating calm and focus", "Distracting from the topic", "Overcomplicating the preparation process"],
                answer: "Cultivating calm and focus"
            },
            {
                id: 26,
                question: "Why is feedback important for improving public speaking skills?",
                options: ["To limit opportunities for improvement", "To identify areas for growth and refine delivery", "To reduce confidence", "To focus solely on past performances"],
                answer: "To identify areas for growth and refine delivery"
            },
            {
                id: 27,
                question: "How can a speaker leave a lasting impression?",
                options: ["By summarizing key points and using a powerful conclusion", "By ending abruptly without a summary", "By focusing on unrelated topics", "By avoiding emotional connections"],
                answer: "By summarizing key points and using a powerful conclusion"
            },
            {
                id: 28,
                question: "How can speakers build rapport with their audience?",
                options: ["By focusing solely on data", "By showing empathy and understanding their needs", "By avoiding eye contact", "By maintaining a scripted delivery"],
                answer: "By showing empathy and understanding their needs"
            },
            {
                id: 29,
                question: "What is a benefit of practicing regularly?",
                options: ["Increasing reliance on notes", "Refining delivery and building confidence", "Avoiding audience engagement", "Reducing presentation quality"],
                answer: "Refining delivery and building confidence"
            },
            {
                id: 30,
                question: "What should a speaker do to encourage follow-up after a presentation?",
                options: ["Avoid providing contact information", "Share resources and invite continued dialogue", "Ignore audience questions", "Focus solely on ending the presentation"],
                answer: "Share resources and invite continued dialogue"
            }
        ]
    },
    "flexibility-&-adaptability": {
        basic: [
            {
                id: 1,
                question: "What is flexibility in the workplace?",
                options: ["The ability to follow rigid schedules", "The willingness to adapt to changing circumstances", "Ignoring changes in the environment", "Avoiding new approaches"],
                answer: "The willingness to adapt to changing circumstances"
            },
            {
                id: 2,
                question: "What does adaptability involve?",
                options: ["Resisting new environments", "Learning and modifying behavior to thrive in new situations", "Relying on fixed methods", "Rejecting feedback"],
                answer: "Learning and modifying behavior to thrive in new situations"
            },
            {
                id: 3,
                question: "Which factor is driving the transformation of the modern workplace?",
                options: ["Reduced technology usage", "Globalization and shifting employee expectations", "Decreased communication", "Static work models"],
                answer: "Globalization and shifting employee expectations"
            },
            {
                id: 4,
                question: "What is a benefit of flexible work arrangements?",
                options: ["Improved work-life balance", "Reduced productivity", "Increased rigidity", "Decreased job satisfaction"],
                answer: "Improved work-life balance"
            },
            {
                id: 5,
                question: "How does flexibility enhance productivity?",
                options: ["By enforcing strict work hours", "Allowing employees to work when they are most productive", "Reducing flexibility in scheduling", "Limiting remote work options"],
                answer: "Allowing employees to work when they are most productive"
            },
            {
                id: 6,
                question: "Why is adaptability important for career advancement?",
                options: ["It limits skill development", "Employers value workers who adjust to evolving job requirements", "It promotes resistance to change", "It reduces learning opportunities"],
                answer: "Employers value workers who adjust to evolving job requirements"
            },
            {
                id: 7,
                question: "Which of the following is a characteristic of flexible employees?",
                options: ["Open-mindedness", "Resistance to new ideas", "Fixed mindset", "Rigidity in problem-solving"],
                answer: "Open-mindedness"
            },
            {
                id: 8,
                question: "What quality helps adaptable employees thrive?",
                options: ["Avoiding change", "Resilience and innovative thinking", "Sticking to old methods", "Fear of uncertainty"],
                answer: "Resilience and innovative thinking"
            },
            {
                id: 9,
                question: "What is the first step in developing a flexible mindset?",
                options: ["Ignoring change", "Embracing change as an opportunity", "Avoiding new challenges", "Resisting different perspectives"],
                answer: "Embracing change as an opportunity"
            },
            {
                id: 10,
                question: "Which strategy helps in building adaptability?",
                options: ["Rigid thinking", "Expanding your skill set", "Avoiding self-reflection", "Rejecting new tasks"],
                answer: "Expanding your skill set"
            },
            {
                id: 11,
                question: "What mindset helps in overcoming resistance to change?",
                options: ["Fixed mindset", "Growth mindset", "Static thinking", "Defensive attitude"],
                answer: "Growth mindset"
            },
            {
                id: 12,
                question: "How can organizations encourage adaptability?",
                options: ["By enforcing rigid roles", "Promoting continuous learning and diverse experiences", "Limiting opportunities for skill development", "Avoiding employee feedback"],
                answer: "Promoting continuous learning and diverse experiences"
            },
            {
                id: 13,
                question: "Which is NOT a benefit of adaptability?",
                options: ["Improved problem-solving", "Increased resilience", "Limited learning opportunities", "Career advancement"],
                answer: "Limited learning opportunities"
            },
            {
                id: 14,
                question: "What helps flexible employees manage stress?",
                options: ["Fixed schedules", "Self-care practices and positive mindset", "Ignoring challenges", "Working without breaks"],
                answer: "Self-care practices and positive mindset"
            },
            {
                id: 15,
                question: "How can teams foster adaptability?",
                options: ["Avoiding collaboration", "Embracing diverse perspectives", "Maintaining a single approach", "Discouraging feedback"],
                answer: "Embracing diverse perspectives"
            },
            {
                id: 16,
                question: "Why is flexibility important in communication?",
                options: ["To avoid clarity", "To adapt messages for different audiences", "To enforce uniform communication styles", "To limit interactions"],
                answer: "To adapt messages for different audiences"
            },
            {
                id: 17,
                question: "What is the role of feedback in adaptability?",
                options: ["It limits growth", "It enables continuous improvement", "It discourages collaboration", "It reduces employee engagement"],
                answer: "It enables continuous improvement"
            },
            {
                id: 18,
                question: "How can adaptable employees handle technological changes?",
                options: ["Resisting new tools", "Cultivating digital literacy", "Sticking to outdated methods", "Avoiding training"],
                answer: "Cultivating digital literacy"
            },
            {
                id: 19,
                question: "Which characteristic is common among flexible employees?",
                options: ["Fixed routines", "Problem-solving skills", "Resistance to feedback", "Avoiding challenges"],
                answer: "Problem-solving skills"
            },
            {
                id: 20,
                question: "What helps organizations build a culture of flexibility?",
                options: ["Limiting remote work", "Encouraging collaborative decision-making", "Avoiding new policies", "Enforcing rigid rules"],
                answer: "Encouraging collaborative decision-making"
            },
            {
                id: 21,
                question: "What does adaptability help employees do in diverse environments?",
                options: ["Ignore cultural differences", "Thrive by embracing diversity", "Avoid learning from others", "Enforce uniform behavior"],
                answer: "Thrive by embracing diversity"
            },
            {
                id: 22,
                question: "Why is continuous learning crucial for flexibility?",
                options: ["It prevents skill development", "It enables adaptation to changing roles", "It limits career advancement", "It reduces knowledge sharing"],
                answer: "It enables adaptation to changing roles"
            },
            {
                id: 23,
                question: "Which factor is essential for adapting to new technologies?",
                options: ["Avoiding training", "Demonstrating agility and openness to learning", "Sticking to old systems", "Ignoring updates"],
                answer: "Demonstrating agility and openness to learning"
            },
            {
                id: 24,
                question: "What is the first step in effective problem-solving?",
                options: ["Defining the problem clearly", "Skipping to solutions", "Avoiding brainstorming", "Ignoring root causes"],
                answer: "Defining the problem clearly"
            },
            {
                id: 25,
                question: "How can flexible work arrangements improve time management?",
                options: ["By enforcing rigid hours", "Allowing employees to prioritize tasks effectively", "Reducing schedule control", "Limiting personal time"],
                answer: "Allowing employees to prioritize tasks effectively"
            },
            {
                id: 26,
                question: "What mindset helps in navigating uncertainty?",
                options: ["Defensive mindset", "Growth mindset", "Fixed approach", "Rigid beliefs"],
                answer: "Growth mindset"
            },
            {
                id: 27,
                question: "Why is flexibility critical for future workplaces?",
                options: ["To avoid change", "To thrive in dynamic and uncertain environments", "To maintain outdated practices", "To limit technological growth"],
                answer: "To thrive in dynamic and uncertain environments"
            },
            {
                id: 28,
                question: "What role do leaders play in promoting flexibility?",
                options: ["Enforcing rigid rules", "Modeling adaptable behavior", "Discouraging innovation", "Avoiding employee support"],
                answer: "Modeling adaptable behavior"
            },
            {
                id: 29,
                question: "How does flexibility reduce stress?",
                options: ["By increasing rigid deadlines", "By allowing better integration of work and life", "By limiting employee autonomy", "By avoiding flexibility in tasks"],
                answer: "By allowing better integration of work and life"
            },
            {
                id: 30,
                question: "Which strategy fosters innovation in organizations?",
                options: ["Limiting diverse ideas", "Encouraging creative thinking and experimentation", "Enforcing routine solutions", "Avoiding risks"],
                answer: "Encouraging creative thinking and experimentation"
            }
        ],
    },
    "team-work-&-collaboration": {
        basic: [
            {
                id: 1,
                question: "What is the primary purpose of teamwork?",
                options: ["Individual accomplishment", "Achieving a shared goal", "Reducing workload", "Minimizing communication"],
                answer: "Achieving a shared goal"
            },
            {
                id: 2,
                question: "Which of the following fosters innovation in a team environment?",
                options: ["Uniform perspectives", "Strict leadership", "Collaborative team environment", "Competition among members"],
                answer: "Collaborative team environment"
            },
            {
                id: 3,
                question: "What is a key characteristic of effective teams?",
                options: ["Homogeneous skills", "Clear direction", "Avoidance of conflict", "Independent work"],
                answer: "Clear direction"
            },
            {
                id: 4,
                question: "Why are diverse perspectives important in teams?",
                options: ["They slow down decision-making", "They create confusion", "They bring complementary skills and viewpoints", "They reduce productivity"],
                answer: "They bring complementary skills and viewpoints"
            },
            {
                id: 5,
                question: "Which is NOT a communication best practice?",
                options: ["Active listening", "Using jargon", "Clear and concise messages", "Being mindful of non-verbal cues"],
                answer: "Using jargon"
            },
            {
                id: 6,
                question: "What does active listening involve?",
                options: ["Ignoring non-verbal cues", "Multitasking while listening", "Giving undivided attention", "Avoiding feedback"],
                answer: "Giving undivided attention"
            },
            {
                id: 7,
                question: "How should conflicts be addressed in teams?",
                options: ["Ignoring them", "Finding common ground", "Assigning blame", "Using authoritative decision-making"],
                answer: "Finding common ground"
            },
            {
                id: 8,
                question: "What role does psychological safety play in teams?",
                options: ["Encourages risk-taking and idea sharing", "Discourages innovation", "Promotes competition", "Reduces accountability"],
                answer: "Encourages risk-taking and idea sharing"
            },
            {
                id: 9,
                question: "Which of the following helps in fostering trust within a team?",
                options: ["Withholding feedback", "Celebrating diverse perspectives", "Avoiding open discussions", "Ignoring conflicts"],
                answer: "Celebrating diverse perspectives"
            },
            {
                id: 10,
                question: "What is the primary focus during conflict resolution?",
                options: ["Positions", "Interests", "Avoidance", "Dominance"],
                answer: "Interests"
            },
            {
                id: 11,
                question: "Which is NOT a strategy for encouraging participation?",
                options: ["Lead by example", "Recognize contributions", "Discourage feedback", "Offer opportunities"],
                answer: "Discourage feedback"
            },
            {
                id: 12,
                question: "What helps in effective decision-making?",
                options: ["Defining the problem", "Rushing to a solution", "Avoiding team input", "Skipping evaluation of alternatives"],
                answer: "Defining the problem"
            },
            {
                id: 13,
                question: "What should teams do after reaching a decision?",
                options: ["Disperse", "Assign responsibilities and monitor implementation", "Avoid follow-ups", "Disregard feedback"],
                answer: "Assign responsibilities and monitor implementation"
            },
            {
                id: 14,
                question: "Why is celebrating team success important?",
                options: ["It increases individual competition", "It boosts morale and motivation", "It emphasizes individual achievements only", "It reduces teamwork spirit"],
                answer: "It boosts morale and motivation"
            },
            {
                id: 15,
                question: "What is the purpose of analyzing failures in a team?",
                options: ["To assign blame", "To learn and improve", "To demotivate the team", "To avoid future risks"],
                answer: "To learn and improve"
            },
            {
                id: 16,
                question: "Which feedback approach fosters growth?",
                options: ["General praise", "Specific and actionable feedback", "Ignoring mistakes", "Criticizing publicly"],
                answer: "Specific and actionable feedback"
            },
            {
                id: 17,
                question: "What does personal accountability involve?",
                options: ["Blaming others", "Owning decisions and actions", "Hiding mistakes", "Delegating all responsibilities"],
                answer: "Owning decisions and actions"
            },
            {
                id: 18,
                question: "How can continuous improvement be achieved in teams?",
                options: ["By maintaining the status quo", "Through regular reflection and skill development", "By avoiding experimentation", "Ignoring performance reviews"],
                answer: "Through regular reflection and skill development"
            },
            {
                id: 19,
                question: "What is the role of empathetic response in active listening?",
                options: ["To judge the speaker", "To show understanding and appreciation of the speaker’s perspective", "To correct the speaker", "To avoid engagement"],
                answer: "To show understanding and appreciation of the speaker’s perspective"
            },
            {
                id: 20,
                question: "What encourages an inclusive environment?",
                options: ["Ignoring diverse viewpoints", "Respecting and valuing all voices", "Focusing only on senior members", "Reducing team size"],
                answer: "Respecting and valuing all voices"
            },
            {
                id: 21,
                question: "Which of the following ensures efficient teamwork?",
                options: ["Undefined roles", "Clearly defined goals and responsibilities", "Overlapping tasks", "Unstructured collaboration"],
                answer: "Clearly defined goals and responsibilities"
            },
            {
                id: 22,
                question: "What does effective feedback focus on?",
                options: ["Vague suggestions", "Personal criticism", "Specific and actionable improvements", "Irrelevant information"],
                answer: "Specific and actionable improvements"
            },
            {
                id: 23,
                question: "Why is a growth mindset valuable in teams?",
                options: ["It promotes fixed ideas", "It enables adaptability and learning from challenges", "It discourages innovation", "It avoids risks"],
                answer: "It enables adaptability and learning from challenges"
            },
            {
                id: 24,
                question: "Which skill enhances team communication?",
                options: ["Passive listening", "Active listening", "Interrupting frequently", "Speaking over others"],
                answer: "Active listening"
            },
            {
                id: 25,
                question: "How can a team member demonstrate accountability?",
                options: ["By hiding mistakes", "By embracing transparency", "By delegating all tasks", "By avoiding responsibility"],
                answer: "By embracing transparency"
            },
            {
                id: 26,
                question: "What is the result of open communication in teams?",
                options: ["Increased conflict", "Enhanced alignment and conflict resolution", "Reduced productivity", "Misunderstandings"],
                answer: "Enhanced alignment and conflict resolution"
            },
            {
                id: 27,
                question: "Which is a conflict resolution strategy?",
                options: ["Assigning blame", "Exploring mutually beneficial solutions", "Ignoring the issue", "Avoiding dialogue"],
                answer: "Exploring mutually beneficial solutions"
            },
            {
                id: 28,
                question: "What does 'shared accountability' mean?",
                options: ["Individual achievements are highlighted", "Every member is responsible for the team’s success", "Only leaders are held accountable", "Delegation without support"],
                answer: "Every member is responsible for the team’s success"
            },
            {
                id: 29,
                question: "How does psychological safety affect teams?",
                options: ["Reduces openness", "Increases fear of failure", "Encourages idea-sharing and experimentation", "Discourages team discussions"],
                answer: "Encourages idea-sharing and experimentation"
            },
            {
                id: 30,
                question: "What is a core benefit of fostering diversity in teams?",
                options: ["Homogeneous thinking", "Enriched ideas and innovation", "Uniformity of perspectives", "Minimized collaboration"],
                answer: "Enriched ideas and innovation"
            }
        ],
    },
    "planning-and-organizing": {
        basic: [
            {
                id: 1,
                question: "What is the main goal of planning and organizing?",
                options: ["To delay decisions", "To minimize resource usage", "To ensure a smooth and efficient workflow", "To micromanage tasks"],
                answer: "To ensure a smooth and efficient workflow"
            },
            {
                id: 2,
                question: "Why is planning and organizing important?",
                options: ["It reduces teamwork", "It increases uncertainty", "It provides clarity and direction", "It focuses on unstructured methods"],
                answer: "It provides clarity and direction"
            },
            {
                id: 3,
                question: "Which of the following is NOT a benefit of effective planning and organization?",
                options: ["Reduced stress", "Improved outcomes", "Increased ambiguity", "Enhanced collaboration"],
                answer: "Increased ambiguity"
            },
            {
                id: 4,
                question: "What is the first step in the planning process?",
                options: ["Implementing strategies", "Assessing needs", "Monitoring progress", "Setting objectives"],
                answer: "Assessing needs"
            },
            {
                id: 5,
                question: "What does the implementation stage of planning involve?",
                options: ["Identifying potential goals", "Developing contingency plans", "Executing the plan and tracking progress", "Avoiding changes"],
                answer: "Executing the plan and tracking progress"
            },
            {
                id: 6,
                question: "What should objectives in a plan be?",
                options: ["General and vague", "Specific and measurable", "Time-consuming", "Easy to achieve without effort"],
                answer: "Specific and measurable"
            },
            {
                id: 7,
                question: "What does the 'R' in SMART goals stand for?",
                options: ["Realistic", "Reliable", "Relevant", "Result-oriented"],
                answer: "Relevant"
            },
            {
                id: 8,
                question: "Which is an example of a measurable goal?",
                options: ["'Improve sales by 20% in the next quarter'", "'Work harder to meet expectations'", "'Increase team efficiency'", "'Try to reduce expenses'"],
                answer: "'Improve sales by 20% in the next quarter'"
            },
            {
                id: 9,
                question: "What is the first step in creating an action plan?",
                options: ["Assigning timelines", "Allocating resources", "Identifying tasks", "Developing backup plans"],
                answer: "Identifying tasks"
            },
            {
                id: 10,
                question: "Why are timelines important in an action plan?",
                options: ["They reduce flexibility", "They help keep tasks on track", "They discourage innovation", "They avoid deadlines"],
                answer: "They help keep tasks on track"
            },
            {
                id: 11,
                question: "Which tool is commonly used to prioritize tasks?",
                options: ["SWOT Analysis", "Eisenhower Matrix", "Gantt Chart", "Decision Tree"],
                answer: "Eisenhower Matrix"
            },
            {
                id: 12,
                question: "What is the focus of time management in planning?",
                options: ["Completing tasks as quickly as possible", "Setting aside time for focused work", "Avoiding task delegation", "Ignoring deadlines"],
                answer: "Setting aside time for focused work"
            },
            {
                id: 13,
                question: "What is a key strategy for organizing your workspace?",
                options: ["Keeping all materials in random places", "Decluttering and maintaining an orderly setup", "Avoiding organizational tools", "Leaving digital files unsorted"],
                answer: "Decluttering and maintaining an orderly setup"
            },
            {
                id: 14,
                question: "Which of the following helps streamline digital filing?",
                options: ["Using clear, descriptive file names", "Saving everything on the desktop", "Avoiding folder structures", "Mixing personal and work files"],
                answer: "Using clear, descriptive file names"
            },
            {
                id: 15,
                question: "What is an essential part of delegating tasks?",
                options: ["Assigning without explanation", "Providing clear instructions", "Micromanaging the process", "Avoiding team input"],
                answer: "Providing clear instructions"
            },
            {
                id: 16,
                question: "How can collaboration be fostered effectively?",
                options: ["Avoiding open communication", "Discouraging teamwork", "Encouraging shared ownership and problem-solving", "Reducing brainstorming sessions"],
                answer: "Encouraging shared ownership and problem-solving"
            },
            {
                id: 17,
                question: "What should you do to anticipate potential obstacles?",
                options: ["Ignore possible roadblocks", "Proactively assess your plan for challenges", "Stick rigidly to the original plan", "Avoid developing backup plans"],
                answer: "Proactively assess your plan for challenges"
            },
            {
                id: 18,
                question: "What is a key aspect of mitigating risks?",
                options: ["Allocating no extra resources", "Developing contingency plans", "Ignoring team feedback", "Avoiding flexibility"],
                answer: "Developing contingency plans"
            },
            {
                id: 19,
                question: "What are milestones in a plan?",
                options: ["Daily tasks", "Manageable checkpoints to track progress", "Irrelevant goals", "Random assignments"],
                answer: "Manageable checkpoints to track progress"
            },
            {
                id: 20,
                question: "Why are regular check-ins important?",
                options: ["They allow ignoring feedback", "They help identify and address issues early", "They disrupt the workflow", "They increase confusion"],
                answer: "They help identify and address issues early"
            },
            {
                id: 21,
                question: "What is a key principle of adapting plans?",
                options: ["Avoiding creativity", "Iterating quickly based on feedback", "Ignoring changes in circumstances", "Sticking to the original plan at all costs"],
                answer: "Iterating quickly based on feedback"
            },
            {
                id: 22,
                question: "Why are visual aids useful in communicating plans?",
                options: ["They simplify understanding of key elements", "They complicate communication", "They reduce engagement", "They focus on unnecessary details"],
                answer: "They simplify understanding of key elements"
            },
            {
                id: 23,
                question: "What should you do to continuously improve your plan?",
                options: ["Avoid reviewing progress", "Gather feedback and refine the plan", "Ignore team input", "Stop adapting once the plan starts"],
                answer: "Gather feedback and refine the plan"
            },
            {
                id: 24,
                question: "How can data be used to improve planning?",
                options: ["To uncover insights and optimize strategies", "To avoid setting metrics", "To reduce team involvement", "To rely only on past experiences"],
                answer: "To uncover insights and optimize strategies"
            },
            {
                id: 25,
                question: "Why is it important to celebrate progress?",
                options: ["To increase stress", "To motivate the team and boost morale", "To highlight failures", "To avoid learning from success"],
                answer: "To motivate the team and boost morale"
            },
            {
                id: 26,
                question: "What should be included when reflecting on progress?",
                options: ["Ignoring areas for improvement", "Acknowledging achievements and identifying lessons learned", "Avoiding constructive feedback", "Focusing only on errors"],
                answer: "Acknowledging achievements and identifying lessons learned"
            },
            {
                id: 27,
                question: "Which tool can help break down large projects into smaller tasks?",
                options: ["Gantt Chart", "SWOT Analysis", "Brainstorming", "Kanban Board"],
                answer: "Gantt Chart"
            },
            {
                id: 28,
                question: "What is the Pomodoro technique used for?",
                options: ["Prioritizing tasks", "Managing time effectively", "Organizing files", "Delegating tasks"],
                answer: "Managing time effectively"
            },
            {
                id: 29,
                question: "What mindset is essential for successful planning?",
                options: ["Fixed and rigid", "Open and adaptable", "Passive and uninvolved", "Overly cautious"],
                answer: "Open and adaptable"
            },
            {
                id: 30,
                question: "What is a fundamental element of planning and organizing?",
                options: ["Avoiding detailed documentation", "Allocating resources effectively", "Ignoring stakeholder input", "Focusing only on short-term goals"],
                answer: "Allocating resources effectively"
            }
        ],
    },
    "strategic-thinking": {
        basic: [
            {
                id: 1,
                question: "What is strategic thinking?",
                options: ["Solving operational problems", "A forward-looking approach to anticipating challenges and opportunities", "Managing day-to-day tasks", "Avoiding risk"],
                answer: "A forward-looking approach to anticipating challenges and opportunities"
            },
            {
                id: 2,
                question: "Which of the following is NOT an element of strategic thinking?",
                options: ["Holistic approach", "Proactive decision-making", "Focusing only on short-term goals", "Value creation"],
                answer: "Focusing only on short-term goals"
            },
            {
                id: 3,
                question: "What is the ultimate goal of strategic thinking?",
                options: ["Increasing daily productivity", "Creating sustainable value for stakeholders", "Avoiding competition", "Focusing only on cost reduction"],
                answer: "Creating sustainable value for stakeholders"
            },
            {
                id: 4,
                question: "Strategic thinking enhances adaptability by:",
                options: ["Ignoring future trends", "Reacting to market changes slowly", "Anticipating future trends and proactively adapting", "Relying only on historical data"],
                answer: "Anticipating future trends and proactively adapting"
            },
            {
                id: 5,
                question: "What is one key benefit of strategic thinking?",
                options: ["Focusing only on internal resources", "Gaining a competitive edge through innovation", "Increasing organizational rigidity", "Limiting decision-making to senior management"],
                answer: "Gaining a competitive edge through innovation"
            },
            {
                id: 6,
                question: "How does strategic thinking optimize resource allocation?",
                options: ["By focusing solely on current expenses", "By aligning resources with long-term goals", "By avoiding large investments", "By reducing team collaboration"],
                answer: "By aligning resources with long-term goals"
            },
            {
                id: 7,
                question: "Strategic thinking focuses on:",
                options: ["Immediate implementation", "Long-term goals and big-picture objectives", "Day-to-day operations", "Technical execution of tasks"],
                answer: "Long-term goals and big-picture objectives"
            },
            {
                id: 8,
                question: "What does tactical thinking prioritize?",
                options: ["Long-term vision", "Aligning mission and values", "Day-to-day operations and processes", "Anticipating market changes"],
                answer: "Day-to-day operations and processes"
            },
            {
                id: 9,
                question: "What is the first step in developing a strategic mindset?",
                options: ["Avoiding new ideas", "Embracing curiosity and exploring ideas", "Focusing only on existing goals", "Ignoring market trends"],
                answer: "Embracing curiosity and exploring ideas"
            },
            {
                id: 10,
                question: "What does critical thinking involve in a strategic context?",
                options: ["Avoiding change", "Analyzing information from multiple perspectives", "Prioritizing only internal feedback", "Simplifying complex problems"],
                answer: "Analyzing information from multiple perspectives"
            },
            {
                id: 11,
                question: "What is the purpose of a competitive analysis?",
                options: ["Ignoring competitor actions", "Understanding market position and identifying threats", "Replicating competitor strategies", "Reducing customer research"],
                answer: "Understanding market position and identifying threats"
            },
            {
                id: 12,
                question: "Which factor is NOT included in an environmental scan?",
                options: ["Political factors", "Internal team preferences", "Technological trends", "Social dynamics"],
                answer: "Internal team preferences"
            },
            {
                id: 13,
                question: "Scenario planning involves:",
                options: ["Predicting one definite future", "Developing multiple plausible future scenarios", "Avoiding risks entirely", "Relying only on intuition"],
                answer: "Developing multiple plausible future scenarios"
            },
            {
                id: 14,
                question: "What should organizations focus on when assessing risks?",
                options: ["Ignoring uncertainties", "Identifying and mitigating vulnerabilities", "Relying on reactive strategies", "Reducing market analysis efforts"],
                answer: "Identifying and mitigating vulnerabilities"
            },
            {
                id: 15,
                question: "How can resources be aligned with strategic priorities?",
                options: ["By allocating them equally to all projects", "By prioritizing initiatives with the greatest impact", "By focusing on short-term goals only", "By avoiding changes to current resource distribution"],
                answer: "By prioritizing initiatives with the greatest impact"
            },
            {
                id: 16,
                question: "Why is agility important in resource allocation?",
                options: ["It ensures resources are fixed permanently", "It allows quick pivots in response to strategic needs", "It eliminates the need for future planning", "It focuses only on financial resources"],
                answer: "It allows quick pivots in response to strategic needs"
            },
            {
                id: 17,
                question: "What is crucial for fostering a culture of strategic thinking?",
                options: ["Ignoring diverse opinions", "Allocating time for reflection and analysis", "Avoiding risk-taking", "Focusing on past successes only"],
                answer: "Allocating time for reflection and analysis"
            },
            {
                id: 18,
                question: "Leaders can model strategic thinking by:",
                options: ["Emphasizing short-term wins only", "Making decisions aligned with long-term goals", "Avoiding collaboration", "Overloading employees with tasks"],
                answer: "Making decisions aligned with long-term goals"
            },
            {
                id: 19,
                question: "Strategic decisions should align with:",
                options: ["Daily tasks", "Long-term organizational goals", "Competitive pressures only", "Personal interests"],
                answer: "Long-term organizational goals"
            },
            {
                id: 20,
                question: "Which is NOT an effective way to communicate a strategic vision?",
                options: ["Using clear, concise language", "Incorporating storytelling", "Avoiding visuals", "Ensuring consistent communication"],
                answer: "Avoiding visuals"
            },
            {
                id: 21,
                question: "Why is data analytics important for strategic thinking?",
                options: ["It replaces decision-making", "It helps uncover key insights for informed decisions", "It avoids complexity", "It focuses solely on internal operations"],
                answer: "It helps uncover key insights for informed decisions"
            },
            {
                id: 22,
                question: "What is the purpose of KPIs in strategic planning?",
                options: ["To define vague objectives", "To measure progress towards goals", "To simplify reporting processes", "To prioritize personal opinions"],
                answer: "To measure progress towards goals"
            },
            {
                id: 23,
                question: "Encouraging experimentation in strategic planning leads to:",
                options: ["Risk aversion", "Learning from successes and failures", "Eliminating creativity", "Avoiding feedback"],
                answer: "Learning from successes and failures"
            },
            {
                id: 24,
                question: "What helps organizations navigate ambiguity?",
                options: ["Sticking rigidly to plans", "Embracing uncertainty and leveraging data", "Avoiding collaboration", "Ignoring market trends"],
                answer: "Embracing uncertainty and leveraging data"
            },
            {
                id: 25,
                question: "Strategic plans must balance:",
                options: ["Short-term and long-term considerations", "Tactical goals only", "Competitive pressures exclusively", "Team preferences"],
                answer: "Short-term and long-term considerations"
            },
            {
                id: 26,
                question: "What is the first step in developing a strategic roadmap?",
                options: ["Set objectives", "Assess gaps in capabilities", "Execute plans immediately", "Avoid market analysis"],
                answer: "Assess gaps in capabilities"
            },
            {
                id: 27,
                question: "What can help reduce cognitive bias in planning?",
                options: ["Relying solely on intuition", "Encouraging diverse perspectives", "Ignoring external opinions", "Avoiding critical analysis"],
                answer: "Encouraging diverse perspectives"
            },
            {
                id: 28,
                question: "Why is diversity important in strategic decision-making?",
                options: ["It simplifies decision-making", "It challenges assumptions and uncovers biases", "It reduces innovation", "It limits collaboration"],
                answer: "It challenges assumptions and uncovers biases"
            },
            {
                id: 29,
                question: "What is the goal of strategic partnerships?",
                options: ["Minimizing collaboration", "Complementing strengths for mutual benefit", "Focusing solely on internal goals", "Avoiding shared objectives"],
                answer: "Complementing strengths for mutual benefit"
            },
            {
                id: 30,
                question: "What fosters transformation and innovation?",
                options: ["Embracing a culture of change", "Relying on past practices", "Reducing employee autonomy", "Avoiding emerging trends"],
                answer: "Embracing a culture of change"
            }
        ],
    },
    "innovation": {
        basic: [
            {
                id: 1,
                question: "What is the primary goal of innovation?",
                options: ["To maintain the status quo", "To solve problems or meet new needs", "To reduce costs only", "To avoid taking risks"],
                answer: "To solve problems or meet new needs"
            },
            {
                id: 2,
                question: "Which of the following best defines process innovation?",
                options: ["Creating new products", "Changing organizational structure", "Improving how products or services are delivered", "Reducing marketing expenses"],
                answer: "Improving how products or services are delivered"
            },
            {
                id: 3,
                question: "What is disruptive innovation?",
                options: ["Minor changes to existing products", "Introducing a product that creates a new market", "Copying competitors' products", "Reducing prices significantly"],
                answer: "Introducing a product that creates a new market"
            },
            {
                id: 4,
                question: "Which of the following is NOT a type of innovation?",
                options: ["Product Innovation", "Process Innovation", "Risk Innovation", "Business Model Innovation"],
                answer: "Risk Innovation"
            },
            {
                id: 5,
                question: "Which stage of the innovation lifecycle involves brainstorming?",
                options: ["Commercialization", "Idea Generation", "Problem Identification", "Prototyping and Testing"],
                answer: "Idea Generation"
            },
            {
                id: 6,
                question: "What does value creation in innovation primarily focus on?",
                options: ["Increasing marketing expenses", "Transformative changes for customers, businesses, or society", "Developing only high-cost products", "Reducing staff"],
                answer: "Transformative changes for customers, businesses, or society"
            },
            {
                id: 7,
                question: "Which company revolutionized e-commerce through innovation?",
                options: ["Tesla", "Apple", "Amazon", "Google"],
                answer: "Amazon"
            },
            {
                id: 8,
                question: "Tesla is known for its innovation in which industry?",
                options: ["Smartphone", "Transportation", "Retail", "Healthcare"],
                answer: "Transportation"
            },
            {
                id: 9,
                question: "Which technique is NOT associated with idea generation?",
                options: ["Brainstorming", "SCAMPER", "Iteration", "Mind Mapping"],
                answer: "Iteration"
            },
            {
                id: 10,
                question: "What is the last step of the innovation lifecycle?",
                options: ["Prototyping", "Testing", "Commercialization", "Idea Generation"],
                answer: "Commercialization"
            },
            {
                id: 11,
                question: "What does a risk-averse culture within an organization lead to?",
                options: ["Encourages bold innovation", "Stifles innovative ideas", "Creates new markets", "Reduces employee morale"],
                answer: "Stifles innovative ideas"
            },
            {
                id: 12,
                question: "Which of the following is a resource constraint to innovation?",
                options: ["Lack of hierarchy", "Fear of experimentation", "Budget limitations", "Overstaffing"],
                answer: "Budget limitations"
            },
            {
                id: 13,
                question: "What is the impact of outdated infrastructure on innovation?",
                options: ["It accelerates the innovation process", "It has no impact", "It hinders implementation of new solutions", "It lowers costs"],
                answer: "It hinders implementation of new solutions"
            },
            {
                id: 14,
                question: "How can companies encourage creativity?",
                options: ["By discouraging risk-taking", "By promoting out-of-the-box thinking", "By micromanaging employees", "By limiting collaboration"],
                answer: "By promoting out-of-the-box thinking"
            },
            {
                id: 15,
                question: "What is one way to embrace failure in an organization?",
                options: ["Penalize mistakes", "Use failures as learning opportunities", "Avoid taking risks altogether", "Limit employee freedom"],
                answer: "Use failures as learning opportunities"
            },
            {
                id: 16,
                question: "Which approach fosters innovation through external ideas?",
                options: ["Risk aversion", "Collaborative networking", "Micromanagement", "Budget reduction"],
                answer: "Collaborative networking"
            },
            {
                id: 17,
                question: "What is crucial for empowering employees in an innovative culture?",
                options: ["Micromanagement", "Limited autonomy", "Continuous learning opportunities", "Restricting resource allocation"],
                answer: "Continuous learning opportunities"
            },
            {
                id: 18,
                question: "Which technology is transforming industries with data-driven solutions?",
                options: ["Artificial Intelligence", "Steam engines", "Manual processes", "Old computing systems"],
                answer: "Artificial Intelligence"
            },
            {
                id: 19,
                question: "What is the focus of sustainable innovation?",
                options: ["Developing eco-friendly products and processes", "Increasing resource waste", "Maintaining the status quo", "Reducing customer satisfaction"],
                answer: "Developing eco-friendly products and processes"
            },
            {
                id: 20,
                question: "Which term describes keeping materials in use for longer and designing out waste?",
                options: ["Linear economy", "Circular economy", "Disposable economy", "Digital economy"],
                answer: "Circular economy"
            }
        ]
    },
    "getting-results-&-managing-performance": {
        basic: [
            {
                id: 1,
                question: "What is the primary importance of setting clear goals?",
                options: ["To avoid accountability", "To provide clarity and direction", "To focus only on challenges", "To eliminate flexibility"],
                answer: "To provide clarity and direction"
            },
            {
                id: 2,
                question: "What does the 'M' in SMART goals stand for?",
                options: ["Measurable", "Motivational", "Manageable", "Meaningful"],
                answer: "Measurable"
            },
            {
                id: 3,
                question: "What is a key benefit of aligning individual goals with organizational objectives?",
                options: ["Eliminating individual growth", "Driving collective success", "Avoiding goal clarity", "Ensuring personal preferences dominate"],
                answer: "Driving collective success"
            },
            {
                id: 4,
                question: "Which is NOT a key principle of effective goal-setting?",
                options: ["Clarity", "Vagueness", "Achievability", "Timeliness"],
                answer: "Vagueness"
            },
            {
                id: 5,
                question: "Why are measurable milestones important?",
                options: ["To ignore progress tracking", "To monitor progress and adjust plans", "To avoid setting deadlines", "To reduce accountability"],
                answer: "To monitor progress and adjust plans"
            },
            {
                id: 6,
                question: "What does SMART stand for?",
                options: ["Specific, Manageable, Accessible, Reasonable, Timely", "Simple, Motivational, Achievable, Relevant, Time-bound", "Specific, Measurable, Achievable, Relevant, Time-bound", "Strategic, Measurable, Attainable, Relevant, Timeless"],
                answer: "Specific, Measurable, Achievable, Relevant, Time-bound"
            },
            {
                id: 7,
                question: "What is the purpose of performance dashboards?",
                options: ["To create confusion", "To visualize metrics and track progress in real-time", "To eliminate transparency", "To avoid data-driven decisions"],
                answer: "To visualize metrics and track progress in real-time"
            },
            {
                id: 8,
                question: "What is critical for providing meaningful feedback?",
                options: ["Timeliness and specificity", "Generalizations and delay", "Avoiding constructive suggestions", "Ignoring strengths"],
                answer: "Timeliness and specificity"
            },
            {
                id: 9,
                question: "What approach fosters productive conversations?",
                options: ["Ignoring collaboration", "Establishing a respectful, open environment", "Dominating the discussion", "Avoiding active listening"],
                answer: "Establishing a respectful, open environment"
            },
            {
                id: 10,
                question: "Which is NOT a step in identifying performance gaps?",
                options: ["Analyzing metrics", "Gathering feedback", "Ignoring observed behaviors", "Reviewing goal attainment"],
                answer: "Ignoring observed behaviors"
            },
            {
                id: 11,
                question: "Why is addressing root causes critical in performance issues?",
                options: ["To avoid addressing actual problems", "To focus on symptoms only", "To understand and resolve underlying factors", "To shift responsibility"],
                answer: "To understand and resolve underlying factors"
            },
            {
                id: 12,
                question: "What is a key element of coaching for improvement?",
                options: ["Avoiding hands-on practice", "Offering vague feedback", "Setting achievable goals", "Ignoring progress monitoring"],
                answer: "Setting achievable goals"
            },
            {
                id: 13,
                question: "What motivates high performance effectively?",
                options: ["Lack of recognition", "Celebrating achievements", "Avoiding intrinsic rewards", "Ignoring individual preferences"],
                answer: "Celebrating achievements"
            },
            {
                id: 14,
                question: "Which feedback approach is most constructive?",
                options: ["Personal criticism", "Supportive and focused on behaviors", "Highlighting only weaknesses", "Avoiding two-way dialogue"],
                answer: "Supportive and focused on behaviors"
            },
            {
                id: 15,
                question: "What does fostering a culture of accountability involve?",
                options: ["Ignoring feedback", "Encouraging shared responsibility", "Avoiding goal-setting", "Shifting blame for mistakes"],
                answer: "Encouraging shared responsibility"
            },
            {
                id: 16,
                question: "How can technology enhance performance management?",
                options: ["By creating data silos", "Through automated data collection and dashboards", "By limiting transparency", "Ignoring collaboration tools"],
                answer: "Through automated data collection and dashboards"
            },
            {
                id: 17,
                question: "What is crucial for managing remote work environments?",
                options: ["Avoiding communication tools", "Effective communication and flexible arrangements", "Ignoring employee engagement", "Reducing collaborative opportunities"],
                answer: "Effective communication and flexible arrangements"
            },
            {
                id: 18,
                question: "What does continuous improvement encourage?",
                options: ["Avoiding feedback loops", "Experimenting with new approaches", "Sticking to outdated processes", "Ignoring performance metrics"],
                answer: "Experimenting with new approaches"
            },
            {
                id: 19,
                question: "Why is a change-agile mindset important?",
                options: ["To resist innovation", "To adapt to emerging trends and opportunities", "To avoid proactive strategies", "To maintain rigid processes"],
                answer: "To adapt to emerging trends and opportunities"
            },
            {
                id: 20,
                question: "What is an essential managerial competency?",
                options: ["Avoiding emotional intelligence", "Problem-solving expertise", "Focusing only on tasks", "Ignoring strategic thinking"],
                answer: "Problem-solving expertise"
            },
            {
                id: 21,
                question: "How can employee wellbeing be prioritized?",
                options: ["By avoiding wellbeing programs", "Through fitness initiatives and mental health resources", "By limiting work-life balance policies", "Ignoring emotional needs"],
                answer: "Through fitness initiatives and mental health resources"
            },
            {
                id: 22,
                question: "What fosters psychological safety in teams?",
                options: ["Ignoring mistakes", "Encouraging risk-taking and open communication", "Avoiding collaboration", "Dominating team discussions"],
                answer: "Encouraging risk-taking and open communication"
            },
            {
                id: 23,
                question: "Why are high-performing teams effective?",
                options: ["They avoid diverse perspectives", "They align on common goals and empower autonomy", "They limit creativity", "They discourage collaboration"],
                answer: "They align on common goals and empower autonomy"
            },
            {
                id: 24,
                question: "Which tool supports tracking and communicating results?",
                options: ["Performance metrics aligned with goals", "Avoiding transparent reporting", "Ignoring stakeholder insights", "Downplaying data-driven decisions"],
                answer: "Performance metrics aligned with goals"
            },
            {
                id: 25,
                question: "Why are constructive feedback and recognition important?",
                options: ["To demotivate employees", "To celebrate successes and encourage growth", "To eliminate accountability", "To highlight only failures"],
                answer: "To celebrate successes and encourage growth"
            },
            {
                id: 26,
                question: "How can emotional intelligence enhance management?",
                options: ["By ignoring interpersonal dynamics", "Through empathy and conflict resolution", "By avoiding trust-building", "By reducing team cohesion"],
                answer: "Through empathy and conflict resolution"
            },
            {
                id: 27,
                question: "What strategy promotes innovation?",
                options: ["Encouraging experimentation and idea-sharing", "Limiting creativity", "Avoiding brainstorming", "Focusing on routine tasks only"],
                answer: "Encouraging experimentation and idea-sharing"
            },
            {
                id: 28,
                question: "How do agile methodologies support improvement?",
                options: ["By avoiding iteration", "Through rapid experimentation and feedback loops", "By eliminating flexibility", "By resisting changes"],
                answer: "Through rapid experimentation and feedback loops"
            },
            {
                id: 29,
                question: "Why is strategic thinking essential for managers?",
                options: ["To ignore trends", "To align decisions with long-term objectives", "To focus only on short-term challenges", "To avoid innovative solutions"],
                answer: "To align decisions with long-term objectives"
            },
            {
                id: 30,
                question: "What contributes to a positive work environment?",
                options: ["Ignoring employee feedback", "Recognizing achievements and fostering collaboration", "Limiting communication", "Avoiding team-building initiatives"],
                answer: "Recognizing achievements and fostering collaboration"
            }
        ]
    },
    "negotiation": {
        basic: [
            {
                id: 1,
                question: "What is negotiation?",
                options: ["A one-sided decision-making process", "The process of discussing and agreeing on terms between parties", "Avoiding conflict to maintain harmony", "Taking unilateral action to achieve goals"],
                answer: "The process of discussing and agreeing on terms between parties"
            },
            {
                id: 2,
                question: "Which is NOT a key element of negotiation?",
                options: ["Identifying common ground", "Finding creative solutions", "Avoiding compromise", "Understanding interests"],
                answer: "Avoiding compromise"
            },
            {
                id: 3,
                question: "What is the first step in preparation for negotiation?",
                options: ["Making assumptions about the other party", "Gathering relevant information", "Deciding the final outcome in advance", "Ignoring the other party’s interests"],
                answer: "Gathering relevant information"
            },
            {
                id: 4,
                question: "What does BATNA stand for in negotiation?",
                options: ["Best Approach to Negotiation Agreement", "Best Alternative to a Negotiated Agreement", "Basic Agreement for Tactical Negotiation", "Better Action Towards Negotiation"],
                answer: "Best Alternative to a Negotiated Agreement"
            },
            {
                id: 5,
                question: "Which of the following is an advantage of mastering negotiation skills?",
                options: ["Building weaker relationships", "Securing unfavorable terms", "Increasing individual income", "Ignoring others' perspectives"],
                answer: "Increasing individual income"
            },
            {
                id: 6,
                question: "What is a crucial part of understanding interests in negotiation?",
                options: ["Assuming priorities without asking", "Actively listening and asking questions", "Dismissing stated positions as irrelevant", "Prioritizing personal interests only"],
                answer: "Actively listening and asking questions"
            },
            {
                id: 7,
                question: "Which technique builds trust in negotiations?",
                options: ["Avoiding eye contact", "Demonstrating empathy through active listening", "Refusing to share information", "Using aggressive tactics"],
                answer: "Demonstrating empathy through active listening"
            },
            {
                id: 8,
                question: "What is the goal of achieving win-win outcomes?",
                options: ["Ensuring one party dominates the negotiation", "Meeting the core interests of all parties involved", "Avoiding any compromises", "Concluding negotiations quickly at any cost"],
                answer: "Meeting the core interests of all parties involved"
            },
            {
                id: 9,
                question: "Which is NOT an effective questioning strategy?",
                options: ["Asking open-ended questions", "Using hypothetical scenarios", "Ignoring the other party’s responses", "Asking clarifying questions"],
                answer: "Ignoring the other party’s responses"
            },
            {
                id: 10,
                question: "How does active listening contribute to negotiation?",
                options: ["By ignoring the speaker’s emotions", "By ensuring you only focus on your points", "By building trust and uncovering needs", "By dismissing reflective responses"],
                answer: "By building trust and uncovering needs"
            },
            {
                id: 11,
                question: "Which is an effective method to handle difficult negotiators?",
                options: ["React emotionally", "Suggest a break to reset discussions", "Avoid asking questions", "Rely solely on subjective opinions"],
                answer: "Suggest a break to reset discussions"
            },
            {
                id: 12,
                question: "What is anchoring bias in negotiation?",
                options: ["Making unreasonable demands", "Overemphasizing the first offer made in a discussion", "Refusing to provide an initial offer", "Ignoring facts and data"],
                answer: "Overemphasizing the first offer made in a discussion"
            },
            {
                id: 13,
                question: "What is an example of a concession strategy?",
                options: ["Offering concessions all at once", "Making concessions incrementally", "Ignoring the other party’s needs", "Withdrawing all offers"],
                answer: "Making concessions incrementally"
            },
            {
                id: 14,
                question: "Which body language conveys trust?",
                options: ["Crossing arms", "Avoiding eye contact", "Using open gestures", "Slouching posture"],
                answer: "Using open gestures"
            },
            {
                id: 15,
                question: "How can patience benefit negotiations?",
                options: ["By forcing immediate decisions", "Allowing the process to unfold naturally", "Ignoring critical issues", "Reducing focus on objectives"],
                answer: "Allowing the process to unfold naturally"
            },
            {
                id: 16,
                question: "What is the purpose of a negotiation journal?",
                options: ["Documenting biases and decisions for improvement", "Ignoring past negotiation patterns", "Dismissing feedback", "Highlighting only successful negotiations"],
                answer: "Documenting biases and decisions for improvement"
            },
            {
                id: 17,
                question: "Which is NOT a feature of ethical negotiation?",
                options: ["Maintaining confidentiality", "Using deception to secure outcomes", "Ensuring fairness and equity", "Upholding integrity"],
                answer: "Using deception to secure outcomes"
            },
            {
                id: 18,
                question: "What does an effective negotiation plan include?",
                options: ["Ignoring fallback positions", "Outlining opening offers and potential concessions", "Avoiding contingency strategies", "Focusing only on the desired outcome"],
                answer: "Outlining opening offers and potential concessions"
            },
            {
                id: 19,
                question: "How do cultural differences impact negotiation?",
                options: ["By standardizing tactics globally", "By requiring adaptation to communication styles", "By eliminating the need for rapport building", "By reducing the importance of fairness"],
                answer: "By requiring adaptation to communication styles"
            },
            {
                id: 20,
                question: "What is a benefit of virtual negotiations?",
                options: ["Lack of focus", "Use of technology for collaboration", "Ignoring cultural differences", "Reduced engagement"],
                answer: "Use of technology for collaboration"
            },
            {
                id: 21,
                question: "How can you overcome negotiation anxiety?",
                options: ["Avoid practicing", "Use deep breathing techniques", "Refrain from visualization exercises", "Ignore your preparation"],
                answer: "Use deep breathing techniques"
            },
            {
                id: 22,
                question: "What is the role of creative problem-solving in negotiation?",
                options: ["Avoiding unconventional ideas", "Generating innovative solutions", "Refusing to evaluate alternatives", "Focusing only on standard solutions"],
                answer: "Generating innovative solutions"
            },
            {
                id: 23,
                question: "Which tactic builds rapport effectively?",
                options: ["Showing genuine interest in the other party", "Dismissing their concerns", "Focusing solely on personal goals", "Ignoring common ground"],
                answer: "Showing genuine interest in the other party"
            },
            {
                id: 24,
                question: "Which is an example of a position-based tactic?",
                options: ["Anchoring offers to create urgency", "Focusing solely on interests", "Avoiding deadlines", "Sharing all concessions immediately"],
                answer: "Anchoring offers to create urgency"
            },
            {
                id: 25,
                question: "What is the impact of celebrating small negotiation wins?",
                options: ["Decreases motivation", "Builds confidence", "Creates long-term setbacks", "Ignores overall goals"],
                answer: "Builds confidence"
            },
            {
                id: 26,
                question: "What should you avoid when handling biases?",
                options: ["Actively seeking diverse perspectives", "Acknowledging cognitive biases", "Ignoring past negotiation patterns", "Reflecting on negotiation outcomes"],
                answer: "Ignoring past negotiation patterns"
            },
            {
                id: 27,
                question: "How does trust influence cross-cultural negotiations?",
                options: ["It reduces the importance of preparation", "It fosters collaboration and smoother discussions", "It eliminates the need for concessions", "It hinders creative problem-solving"],
                answer: "It fosters collaboration and smoother discussions"
            },
            {
                id: 28,
                question: "What is a key strategy when negotiating on behalf of others?",
                options: ["Avoid understanding the client’s goals", "Maintain objectivity and professionalism", "Show minimal interest in their priorities", "Ignore leveraging negotiation expertise"],
                answer: "Maintain objectivity and professionalism"
            },
            {
                id: 29,
                question: "Why is transparency important in negotiations?",
                options: ["It builds credibility and trust", "It limits flexibility in discussions", "It ensures only personal benefits", "It ignores the other party’s perspective"],
                answer: "It builds credibility and trust"
            },
            {
                id: 30,
                question: "Which skill is essential for mastering negotiation?",
                options: ["Avoiding feedback", "Balancing patience and persistence", "Ignoring the negotiation process", "Relying solely on intuition"],
                answer: "Balancing patience and persistence"
            }
        ],
    },
    "personal-initiative-&-motivation": {
        basic: [
            {
                id: 1,
                question: "What is personal initiative?",
                options: ["Waiting for instructions to act", "Proactively improving situations without being prompted", "Following orders to achieve goals", "Avoiding challenges at work"],
                answer: "Proactively improving situations without being prompted"
            },
            {
                id: 2,
                question: "Which of the following is NOT a characteristic of personal initiative?",
                options: ["Driving innovation", "Overcoming challenges", "Avoiding risks", "Identifying opportunities"],
                answer: "Avoiding risks"
            },
            {
                id: 3,
                question: "Why is personal initiative important?",
                options: ["It ensures independence and resilience", "It avoids risks and challenges", "It eliminates the need for team collaboration", "It minimizes personal accountability"],
                answer: "It ensures independence and resilience"
            },
            {
                id: 4,
                question: "What is the first step in identifying personal values?",
                options: ["Evaluating alignment", "Organizing values by importance", "Self-reflection", "Seeking mentorship"],
                answer: "Self-reflection"
            },
            {
                id: 5,
                question: "Which element is NOT part of setting meaningful goals?",
                options: ["Identifying values", "Breaking big dreams into small steps", "Setting vague objectives", "Committing to specific and measurable goals"],
                answer: "Setting vague objectives"
            },
            {
                id: 6,
                question: "What does developing a growth mindset involve?",
                options: ["Avoiding challenges to stay safe", "Viewing obstacles as learning opportunities", "Ignoring feedback to maintain confidence", "Focusing solely on results"],
                answer: "Viewing obstacles as learning opportunities"
            },
            {
                id: 7,
                question: "What is the first step in overcoming obstacles?",
                options: ["Developing a detailed plan", "Identifying the challenge", "Assessing resources", "Ignoring the problem"],
                answer: "Identifying the challenge"
            },
            {
                id: 8,
                question: "How can self-discipline be built effectively?",
                options: ["Ignoring distractions", "Establishing routines and breaking tasks into smaller steps", "Avoiding long-term goals", "Focusing only on gratification"],
                answer: "Establishing routines and breaking tasks into smaller steps"
            },
            {
                id: 9,
                question: "What is an example of positive self-talk?",
                options: ["\"I can't do this.\"", "\"I'll never improve.\"", "\"I am capable of learning and growing.\"", "\"I'm not good enough.\""],
                answer: "\"I am capable of learning and growing.\""
            },
            {
                id: 10,
                question: "Which time management technique uses focused intervals?",
                options: ["Eisenhower Matrix", "Pomodoro Technique", "SWOT Analysis", "Delegation Framework"],
                answer: "Pomodoro Technique"
            },
            {
                id: 11,
                question: "What does cultivating a sense of purpose NOT involve?",
                options: ["Finding direction", "Igniting passion", "Setting random goals", "Aligning work with values"],
                answer: "Setting random goals"
            },
            {
                id: 12,
                question: "How can setbacks be reframed?",
                options: ["As permanent failures", "As learning opportunities", "As reasons to give up", "As unchangeable situations"],
                answer: "As learning opportunities"
            },
            {
                id: 13,
                question: "How are initiative and confidence related?",
                options: ["They are unrelated.", "Confidence leads to initiative, which further boosts confidence.", "Confidence replaces initiative.", "Initiative prevents confidence from developing."],
                answer: "Confidence leads to initiative, which further boosts confidence."
            },
            {
                id: 14,
                question: "What is a key component of motivational strategies?",
                options: ["Ignoring goals", "Celebrating small wins", "Avoiding feedback", "Postponing action"],
                answer: "Celebrating small wins"
            },
            {
                id: 15,
                question: "What is the first step in aligning actions with values?",
                options: ["Reflecting on misalignment", "Prioritizing purpose", "Ignoring discrepancies", "Reviewing external influences"],
                answer: "Prioritizing purpose"
            },
            {
                id: 16,
                question: "What characterizes an entrepreneurial spirit?",
                options: ["Risk aversion", "Avoiding innovation", "Passion and determination", "Ignoring creativity"],
                answer: "Passion and determination"
            },
            {
                id: 17,
                question: "Which is NOT a role of personal responsibility?",
                options: ["Owning decisions", "Blaming others", "Driving growth", "Inspiring others"],
                answer: "Blaming others"
            },
            {
                id: 18,
                question: "How can creativity be boosted?",
                options: ["Avoiding problem-solving", "Engaging in brainstorming and creative exercises", "Focusing only on routine tasks", "Avoiding unconventional methods"],
                answer: "Engaging in brainstorming and creative exercises"
            },
            {
                id: 19,
                question: "What helps in decision-making?",
                options: ["Relying solely on intuition", "Analyzing options and seeking feedback", "Ignoring advice", "Delaying choices indefinitely"],
                answer: "Analyzing options and seeking feedback"
            },
            {
                id: 20,
                question: "How can fear be managed to take risks?",
                options: ["Ignoring fears completely", "Acknowledging fears and taking small steps", "Jumping into large risks", "Avoiding risks altogether"],
                answer: "Acknowledging fears and taking small steps"
            },
            {
                id: 21,
                question: "Celebrating small wins helps by:",
                options: ["Decreasing motivation", "Creating a positive feedback loop", "Reinforcing failure", "Halting progress"],
                answer: "Creating a positive feedback loop"
            },
            {
                id: 22,
                question: "What is a feature of building a support network?",
                options: ["Avoiding reciprocation", "Seeking mentors and joining communities", "Ignoring connections", "Limiting interaction to close family"],
                answer: "Seeking mentors and joining communities"
            },
            {
                id: 23,
                question: "What is NOT part of maintaining work-life balance?",
                options: ["Practicing mindfulness", "Prioritizing rest", "Nurturing relationships", "Ignoring relaxation"],
                answer: "Ignoring relaxation"
            },
            {
                id: 24,
                question: "How can continuous learning be embraced?",
                options: ["By avoiding challenges", "Engaging in courses and reflecting on progress", "Ignoring feedback", "Focusing only on past achievements"],
                answer: "Engaging in courses and reflecting on progress"
            },
            {
                id: 25,
                question: "A positive legacy is created by:",
                options: ["Avoiding meaningful change", "Striving for personal growth and impacting others", "Focusing only on personal gains", "Ignoring purpose"],
                answer: "Striving for personal growth and impacting others"
            },
            {
                id: 26,
                question: "What is a key feature of personal initiative?",
                options: ["Reacting to problems", "Proactively solving issues", "Delegating responsibility entirely", "Avoiding innovation"],
                answer: "Proactively solving issues"
            },
            {
                id: 27,
                question: "Time management requires prioritizing tasks based on:",
                options: ["Urgency and importance", "Random selection", "Personal preference only", "Time constraints"],
                answer: "Urgency and importance"
            },
            {
                id: 28,
                question: "What is essential for developing resilience?",
                options: ["Ignoring failures", "Viewing failures as learning opportunities", "Avoiding risk entirely", "Giving up after setbacks"],
                answer: "Viewing failures as learning opportunities"
            },
            {
                id: 29,
                question: "Which is an example of delaying gratification?",
                options: ["Resisting distractions to complete a project", "Prioritizing immediate pleasure", "Focusing on short-term benefits", "Ignoring long-term goals"],
                answer: "Resisting distractions to complete a project"
            },
            {
                id: 30,
                question: "How can progress be celebrated effectively?",
                options: ["By ignoring small achievements", "By acknowledging mini-milestones", "By postponing recognition", "By focusing only on end results"],
                answer: "By acknowledging mini-milestones"
            }
        ]
    },
    "coaching-&-mentoring": {
      basic: [
        {
          id: 1,
          question: "What is coaching?",
          options: ["Sharing personal stories", "A process of guiding individuals to achieve their goals", "Offering casual advice to mentees", "Providing mandatory training sessions"],
          answer: "A process of guiding individuals to achieve their goals"
        },
        {
          id: 2,
          question: "How does coaching differ from mentoring?",
          options: ["Coaching focuses on self-discovery, while mentoring emphasizes sharing expertise", "Coaching is always short-term, while mentoring is always long-term", "Coaching involves giving direct instructions, while mentoring avoids any feedback", "Coaching is only for professional development, while mentoring is for personal growth"],
          answer: "Coaching focuses on self-discovery, while mentoring emphasizes sharing expertise"
        },
        {
          id: 3,
          question: "Which of the following is a benefit of coaching?",
          options: ["Increasing confusion", "Enhancing self-awareness and motivation", "Promoting dependency on the coach", "Limiting personal growth"],
          answer: "Enhancing self-awareness and motivation"
        },
        {
          id: 4,
          question: "What is a characteristic of effective coaches?",
          options: ["Exceptional listening skills", "Avoiding feedback", "Setting generic goals", "Making decisions for their clients"],
          answer: "Exceptional listening skills"
        },
        {
          id: 5,
          question: "What is the primary focus of mentoring?",
          options: ["Helping individuals develop specific skills", "Sharing personal experiences and wisdom", "Providing detailed task instructions", "Enforcing strict timelines"],
          answer: "Sharing personal experiences and wisdom"
        },
        {
          id: 6,
          question: "What is the key difference between coaching and mentoring relationships?",
          options: ["Coaches avoid personal connections", "Mentors typically have long-term, personal connections with mentees", "Coaching never involves measurable goals", "Mentoring focuses only on technical skills"],
          answer: "Mentors typically have long-term, personal connections with mentees"
        },
        {
          id: 7,
          question: "Which quality is NOT essential for a mentor?",
          options: ["Patience", "Adaptability", "Empathy", "Overbearing authority"],
          answer: "Overbearing authority"
        },
        {
          id: 8,
          question: "When is coaching most effective?",
          options: ["For developing specific skills or improving performance", "For sharing career advice only", "For exploring personal hobbies", "For creating casual connections"],
          answer: "For developing specific skills or improving performance"
        },
        {
          id: 9,
          question: "What is essential in establishing a coaching or mentoring relationship?",
          options: ["Avoiding goal-setting discussions", "Building trust and mutual understanding", "Defining personal hobbies", "Using only rigid communication methods"],
          answer: "Building trust and mutual understanding"
        },
        {
          id: 10,
          question: "What is the role of powerful questioning in coaching?",
          options: ["To limit coachees' exploration", "To guide coachees toward self-awareness and new perspectives", "To provide answers directly", "To avoid reflective insights"],
          answer: "To guide coachees toward self-awareness and new perspectives"
        },
        {
          id: 11,
          question: "What is the main purpose of active listening in coaching?",
          options: ["To provide quick solutions", "To focus fully on the speaker and show understanding", "To prioritize the coach's thoughts", "To interrupt frequently"],
          answer: "To focus fully on the speaker and show understanding"
        },
        {
          id: 12,
          question: "Effective feedback should be:",
          options: ["General and delayed", "Specific, timely, and constructive", "Avoided to encourage independence", "Centered only on criticism"],
          answer: "Specific, timely, and constructive"
        },
        {
          id: 13,
          question: "What does setting SMART goals in coaching involve?",
          options: ["Vague and flexible outcomes", "Specific, measurable, achievable, relevant, and time-bound goals", "Goals with no deadlines", "Unchallenging tasks"],
          answer: "Specific, measurable, achievable, relevant, and time-bound goals"
        },
        {
          id: 14,
          question: "How do coaches encourage accountability?",
          options: ["By micromanaging tasks", "By promoting active involvement and regular reviews", "By avoiding goal-setting", "By focusing only on criticism"],
          answer: "By promoting active involvement and regular reviews"
        },
        {
          id: 15,
          question: "Which of the following is a key trait of successful mentoring?",
          options: ["Strictly controlling mentees’ decisions", "Empowering mentees to achieve their potential", "Avoiding personal interaction", "Focusing solely on technical guidance"],
          answer: "Empowering mentees to achieve their potential"
        },
        {
          id: 16,
          question: "What is a common pitfall in coaching and mentoring?",
          options: ["Building mutual respect", "Setting clear goals", "Mismatched expectations", "Providing actionable feedback"],
          answer: "Mismatched expectations"
        },
        {
          id: 17,
          question: "What fosters a productive coaching environment?",
          options: ["Overstepping professional boundaries", "Avoiding trust-building", "Establishing respect and confidentiality", "Ignoring mentees’ needs"],
          answer: "Establishing respect and confidentiality"
        },
        {
          id: 18,
          question: "When is mentoring particularly effective?",
          options: ["For long-term personal and professional development", "For immediate technical skills improvement", "For casual advice-sharing", "For resolving short-term issues"],
          answer: "For long-term personal and professional development"
        },
        {
          id: 19,
          question: "Coaching is especially suited for:",
          options: ["Sharing life experiences", "Addressing immediate skill gaps and setting measurable goals", "Avoiding structured feedback", "Replacing long-term mentoring relationships"],
          answer: "Addressing immediate skill gaps and setting measurable goals"
        },
        {
          id: 20,
          question: "Which is NOT a technique used in coaching?",
          options: ["Open-ended questions", "Active listening", "Authoritarian directives", "Reflective questioning"],
          answer: "Authoritarian directives"
        },
        {
          id: 21,
          question: "What is one way to measure progress in coaching?",
          options: ["Ignoring goal alignment", "Tracking satisfaction and goal achievement", "Avoiding feedback loops", "Prioritizing abstract goals"],
          answer: "Tracking satisfaction and goal achievement"
        },
        {
          id: 22,
          question: "Why is adaptability crucial in coaching and mentoring?",
          options: ["To maintain rigid methods", "To address unique learning styles and needs", "To ensure strict adherence to predefined goals", "To avoid flexibility"],
          answer: "To address unique learning styles and needs"
        },
        {
          id: 23,
          question: "A common challenge in coaching relationships is:",
          options: ["Lack of resources", "Crossing professional boundaries", "Having a shared action plan", "Establishing clear goals"],
          answer: "Crossing professional boundaries"
        },
        {
          id: 24,
          question: "What should mentors prioritize?",
          options: ["Sharing their expertise and offering guidance", "Enforcing mentees' strict adherence to their advice", "Avoiding mentee feedback", "Maintaining a distant relationship"],
          answer: "Sharing their expertise and offering guidance"
        },
        {
          id: 25,
          question: "How does trust influence coaching and mentoring relationships?",
          options: ["Encourages open communication and vulnerability", "Prevents boundary setting", "Focuses on achieving rapid results", "Avoids active participation"],
          answer: "Encourages open communication and vulnerability"
        },
        {
          id: 26,
          question: "What does a mentoring culture promote?",
          options: ["Individual growth without collaboration", "Knowledge sharing and peer-to-peer learning", "Limiting feedback opportunities", "Strict managerial oversight"],
          answer: "Knowledge sharing and peer-to-peer learning"
        },
        {
          id: 27,
          question: "Why is flexibility important in coaching?",
          options: ["To rigidly follow a pre-set plan", "To personalize approaches based on coachees’ needs", "To avoid challenging goals", "To maintain standard practices"],
          answer: "To personalize approaches based on coachees’ needs"
        },
        {
          id: 28,
          question: "How do great mentors help mentees?",
          options: ["By focusing on their own success stories", "By nurturing potential and adapting their methods", "By avoiding emotional connections", "By strictly managing mentees’ actions"],
          answer: "By nurturing potential and adapting their methods"
        },
        {
          id: 29,
          question: "Why is feedback integral to coaching?",
          options: ["It reinforces motivation and identifies areas for growth", "It creates dependency on the coach", "It avoids criticism entirely", "It minimizes coachees' responsibilities"],
          answer: "It reinforces motivation and identifies areas for growth"
        },
        {
          id: 30,
          question: "Which element is vital in ensuring the success of coaching and mentoring programs?",
          options: ["Avoiding measurable goals", "Consistent evaluation and fostering engagement", "Rigidly sticking to pre-set methods", "Limiting participant involvement"],
          answer: "Consistent evaluation and fostering engagement"
        }
      ],
    },
    "problem-solving-&-decision-making": {
      basic: [
        {
          id: 1,
          question: "What is the first step in the problem-solving process?",
          options: ["Generate solutions", "Evaluate the outcome", "Define the problem", "Gather resources"],
          answer: "Define the problem"
        },
        {
          id: 2,
          question: "Which of the following best describes problem-solving?",
          options: ["Avoiding challenges", "Identifying and resolving issues", "Delegating tasks to others", "Ignoring root causes"],
          answer: "Identifying and resolving issues"
        },
        {
          id: 3,
          question: "Routine problems are:",
          options: ["Complex and require creative solutions", "Simple and occur frequently", "Unique with no clear resolution", "Always unsolvable"],
          answer: "Simple and occur frequently"
        },
        {
          id: 4,
          question: "What are 'wicked problems'?",
          options: ["Simple issues with clear answers", "Exceptionally complex problems with no single right solution", "Easily resolved conflicts", "Routine tasks in the workplace"],
          answer: "Exceptionally complex problems with no single right solution"
        },
        {
          id: 5,
          question: "Analytical problem-solving involves:",
          options: ["Innovative and out-of-the-box thinking", "A systematic, step-by-step approach", "Ignoring data and relying on intuition", "Random trial-and-error methods"],
          answer: "A systematic, step-by-step approach"
        },
        {
          id: 6,
          question: "What is the ultimate goal of problem-solving?",
          options: ["To gather as much information as possible", "To achieve a desired outcome", "To brainstorm endless solutions", "To avoid making decisions"],
          answer: "To achieve a desired outcome"
        },
        {
          id: 7,
          question: "What type of problems lack clear goals and constraints?",
          options: ["Routine problems", "Wicked problems", "Ill-defined problems", "Non-routine problems"],
          answer: "Ill-defined problems"
        },
        {
          id: 8,
          question: "Which is NOT part of the problem-solving process?",
          options: ["Defining the problem", "Generating solutions", "Ignoring constraints", "Evaluating outcomes"],
          answer: "Ignoring constraints"
        },
        {
          id: 9,
          question: "What does critical thinking in problem-solving require?",
          options: ["Relying on gut instincts", "Analyzing the problem logically", "Ignoring data", "Avoiding decision-making"],
          answer: "Analyzing the problem logically"
        },
        {
          id: 10,
          question: "A growth mindset in problem-solving encourages:",
          options: ["Avoiding challenges", "Viewing setbacks as opportunities", "Resisting feedback", "Sticking to outdated methods"],
          answer: "Viewing setbacks as opportunities"
        },
        {
          id: 11,
          question: "What is the first step in gathering information?",
          options: ["Ignore root causes", "Identify the problem", "Brainstorm solutions", "Implement a plan"],
          answer: "Identify the problem"
        },
        {
          id: 12,
          question: "What does brainstorming aim to do?",
          options: ["Generate multiple ideas without judgment", "Select the best solution immediately", "Narrow down options prematurely", "Avoid creative input"],
          answer: "Generate multiple ideas without judgment"
        },
        {
          id: 13,
          question: "How are creative solutions developed?",
          options: ["Following a rigid structure", "Thinking unconventionally and innovatively", "Avoiding risks entirely", "Relying solely on past methods"],
          answer: "Thinking unconventionally and innovatively"
        },
        {
          id: 14,
          question: "When evaluating a solution, you should consider:",
          options: ["Its feasibility and effectiveness", "How complex it is to explain", "Its popularity among others", "Avoiding stakeholder input"],
          answer: "Its feasibility and effectiveness"
        },
        {
          id: 15,
          question: "SWOT analysis evaluates:",
          options: ["Only weaknesses of a situation", "Strengths, weaknesses, opportunities, and threats", "A single perspective", "Long-term solutions only"],
          answer: "Strengths, weaknesses, opportunities, and threats"
        },
        {
          id: 16,
          question: "The 'pros and cons' list is effective when:",
          options: ["Dealing with overly complex decisions", "Comparing clear alternatives", "Ignoring trade-offs", "Avoiding quantitative factors"],
          answer: "Comparing clear alternatives"
        },
        {
          id: 17,
          question: "A weighted decision matrix helps by:",
          options: ["Ignoring criteria weights", "Prioritizing important factors objectively", "Eliminating stakeholder feedback", "Using random guesses"],
          answer: "Prioritizing important factors objectively"
        },
        {
          id: 18,
          question: "What principle is crucial in effective decision-making?",
          options: ["Avoiding structured processes", "Weighing costs and benefits", "Ignoring alternative options", "Rushing decisions"],
          answer: "Weighing costs and benefits"
        },
        {
          id: 19,
          question: "What does the sunk cost fallacy involve?",
          options: ["Considering future benefits", "Sticking to a decision due to past investments", "Avoiding new options", "Evaluating all alternatives objectively"],
          answer: "Sticking to a decision due to past investments"
        },
        {
          id: 20,
          question: "Cognitive biases can be overcome by:",
          options: ["Questioning assumptions", "Ignoring diverse perspectives", "Relying solely on gut feelings", "Avoiding external feedback"],
          answer: "Questioning assumptions"
        },
        {
          id: 21,
          question: "Effective collaboration in problem-solving involves:",
          options: ["Limiting feedback to managers", "Ignoring team input", "Leveraging diverse perspectives", "Avoiding open communication"],
          answer: "Leveraging diverse perspectives"
        },
        {
          id: 22,
          question: "Which decision-making tool involves assessing strengths and weaknesses?",
          options: ["Cost-benefit analysis", "Weighted decision matrix", "SWOT analysis", "Brainstorming"],
          answer: "SWOT analysis"
        },
        {
          id: 23,
          question: "What should you do after implementing a solution?",
          options: ["Assume success", "Evaluate the outcome", "Avoid feedback", "Ignore future improvements"],
          answer: "Evaluate the outcome"
        },
        {
          id: 24,
          question: "A structured decision-making process starts with:",
          options: ["Gathering resources", "Defining the problem", "Implementing a solution immediately", "Avoiding stakeholder input"],
          answer: "Defining the problem"
        },
        {
          id: 25,
          question: "Reviewing and reflecting after problem-solving helps to:",
          options: ["Ignore past outcomes", "Identify areas for improvement", "Eliminate successful techniques", "Focus only on failures"],
          answer: "Identify areas for improvement"
        },
        {
          id: 26,
          question: "Cost-benefit analysis compares:",
          options: ["Strengths and weaknesses", "Costs against benefits", "Personal opinions", "Long-term impacts only"],
          answer: "Costs against benefits"
        },
        {
          id: 27,
          question: "Decision-making benefits from:",
          options: ["Ignoring diverse viewpoints", "Collaborative approaches", "Rushing decisions", "Sole reliance on past methods"],
          answer: "Collaborative approaches"
        },
        {
          id: 28,
          question: "Developing a problem-solving mindset requires:",
          options: ["Resisting new ideas", "Embracing curiosity and persistence", "Focusing only on challenges", "Avoiding reflection"],
          answer: "Embracing curiosity and persistence"
        },
        {
          id: 29,
          question: "Continuous improvement involves:",
          options: ["Avoiding feedback", "Reflecting regularly", "Rejecting challenges", "Limiting learning opportunities"],
          answer: "Reflecting regularly"
        },
        {
          id: 30,
          question: "The framing effect influences decisions by:",
          options: ["Providing accurate data", "Presenting choices to sway preferences", "Encouraging clear thinking", "Minimizing biases"],
          answer: "Presenting choices to sway preferences"
        }
      ]
    },
    "stress-management": {
      basic: [
        {
          id: 1,
          question: "What is stress?",
          options: ["A physical illness", "The body's natural response to demands or changes", "A state of complete relaxation", "A medical condition requiring surgery"],
          answer: "The body's natural response to demands or changes"
        },
        {
          id: 2,
          question: "What triggers the 'fight-or-flight' response?",
          options: ["Increased hydration", "Stressors", "A balanced diet", "Regular exercise"],
          answer: "Stressors"
        },
        {
          id: 3,
          question: "Which hormone is released during stress?",
          options: ["Dopamine", "Cortisol", "Insulin", "Serotonin"],
          answer: "Cortisol"
        },
        {
          id: 4,
          question: "Chronic stress can lead to:",
          options: ["Better sleep", "Reduced anxiety", "Cardiovascular strain", "Enhanced memory"],
          answer: "Cardiovascular strain"
        },
        {
          id: 5,
          question: "Environmental stressors include:",
          options: ["High workloads", "Noise and pollution", "Financial debt", "Conflicts with colleagues"],
          answer: "Noise and pollution"
        },
        {
          id: 6,
          question: "Work-related stress may result from:",
          options: ["Job security", "Reduced workload", "Tight deadlines", "Free weekends"],
          answer: "Tight deadlines"
        },
        {
          id: 7,
          question: "What are physical symptoms of stress?",
          options: ["Mood swings", "Difficulty concentrating", "Fatigue and headaches", "Social withdrawal"],
          answer: "Fatigue and headaches"
        },
        {
          id: 8,
          question: "Emotional symptoms of stress include:",
          options: ["Muscle tension", "Anxiety and irritability", "Better decision-making", "Increased appetite"],
          answer: "Anxiety and irritability"
        },
        {
          id: 9,
          question: "Stress can weaken the immune system by:",
          options: ["Strengthening heart functions", "Enhancing hormonal balance", "Slowing down the body's natural healing", "Increasing energy levels"],
          answer: "Slowing down the body's natural healing"
        },
        {
          id: 10,
          question: "A key component of stress management is:",
          options: ["Avoiding all responsibilities", "Understanding your stress response", "Overworking to reduce stress", "Ignoring physical symptoms"],
          answer: "Understanding your stress response"
        },
        {
          id: 11,
          question: "Which practice helps lower stress?",
          options: ["Deep breathing", "Multitasking", "Consuming caffeine", "Constant problem-solving"],
          answer: "Deep breathing"
        },
        {
          id: 12,
          question: "What is progressive muscle relaxation?",
          options: ["Regular aerobic exercise", "Tensing and relaxing muscles", "A mental visualization technique", "Drinking plenty of water"],
          answer: "Tensing and relaxing muscles"
        },
        {
          id: 13,
          question: "Meditation primarily helps in:",
          options: ["Increased rumination", "Quieting the mind", "Building muscle strength", "Promoting multitasking"],
          answer: "Quieting the mind"
        },
        {
          id: 14,
          question: "A core mindfulness practice is:",
          options: ["Overeating", "Breath meditation", "Avoiding social interactions", "Focusing only on future tasks"],
          answer: "Breath meditation"
        },
        {
          id: 15,
          question: "Regular exercise benefits stress management by:",
          options: ["Increasing cortisol levels", "Releasing endorphins", "Decreasing physical fitness", "Causing dehydration"],
          answer: "Releasing endorphins"
        },
        {
          id: 16,
          question: "Eating for stress relief includes:",
          options: ["High sugar intake", "Stress-reducing foods like leafy greens", "Skipping meals", "Overeating processed snacks"],
          answer: "Stress-reducing foods like leafy greens"
        },
        {
          id: 17,
          question: "Dehydration can:",
          options: ["Improve focus", "Exacerbate stress symptoms", "Eliminate stress", "Reduce fatigue"],
          answer: "Exacerbate stress symptoms"
        },
        {
          id: 18,
          question: "To improve sleep and manage stress:",
          options: ["Keep the environment noisy", "Follow a consistent sleep schedule", "Increase screen time before bed", "Reduce water intake"],
          answer: "Follow a consistent sleep schedule"
        },
        {
          id: 19,
          question: "The Pomodoro Technique involves:",
          options: ["Prolonged hours of uninterrupted work", "Breaking work into intervals with breaks", "Avoiding rest periods", "Prioritizing minor tasks"],
          answer: "Breaking work into intervals with breaks"
        },
        {
          id: 20,
          question: "Self-care includes:",
          options: ["Neglecting personal time", "Practicing self-compassion", "Overworking constantly", "Ignoring emotional needs"],
          answer: "Practicing self-compassion"
        },
        {
          id: 21,
          question: "Building a support network is essential for:",
          options: ["Increasing isolation", "Managing stress effectively", "Reducing communication skills", "Avoiding new connections"],
          answer: "Managing stress effectively"
        },
        {
          id: 22,
          question: "Managing workplace stress involves:",
          options: ["Avoiding communication", "Open and honest communication", "Taking on excessive responsibilities", "Ignoring deadlines"],
          answer: "Open and honest communication"
        },
        {
          id: 23,
          question: "Mindfulness meditation helps with:",
          options: ["Impulsive reactions", "Observing thoughts non-judgmentally", "Increasing negative emotions", "Avoiding focus on the present"],
          answer: "Observing thoughts non-judgmentally"
        },
        {
          id: 24,
          question: "Cognitive reframing involves:",
          options: ["Enhancing negative thoughts", "Replacing negative patterns with constructive ones", "Suppressing all thoughts", "Avoiding reflection"],
          answer: "Replacing negative patterns with constructive ones"
        },
        {
          id: 25,
          question: "Journaling can:",
          options: ["Diminish self-awareness", "Help process emotions", "Trigger more stress", "Reduce emotional intelligence"],
          answer: "Help process emotions"
        },
        {
          id: 26,
          question: "Resilience can be improved by:",
          options: ["Avoiding stress entirely", "Developing a growth mindset", "Relying on unhealthy habits", "Ignoring challenges"],
          answer: "Developing a growth mindset"
        },
        {
          id: 27,
          question: "Positive thinking involves:",
          options: ["Avoiding solutions", "Focusing on problems", "Reframing negative thoughts", "Ignoring optimism"],
          answer: "Reframing negative thoughts"
        },
        {
          id: 28,
          question: "Professional help should be sought when:",
          options: ["Stress is manageable", "Stress interferes with daily life", "Only physical symptoms appear", "Friends provide adequate support"],
          answer: "Stress interferes with daily life"
        },
        {
          id: 29,
          question: "Cognitive-behavioral strategies include:",
          options: ["Strengthening distorted thoughts", "Problem-solving", "Avoiding reflection", "Avoiding new coping methods"],
          answer: "Problem-solving"
        },
        {
          id: 30,
          question: "A personalized stress management plan starts with:",
          options: ["Avoiding stressors", "Identifying stress triggers", "Ignoring effective strategies", "Overloading with techniques"],
          answer: "Identifying stress triggers"
        }
      ]
    },


    //SHE Training
    "confined-space": {
        basic: [
            {
                id: 1,
                question: "What is the main purpose of confined space safety training?",
                options: ["To eliminate all risks associated with confined spaces", "To define safe work practices for confined space work", "To replace rescue teams with automation", "To allow unauthorized personnel entry into confined spaces"],
                answer: "To define safe work practices for confined space work"
            },
            {
                id: 2,
                question: "Which of the following is NOT a characteristic of a confined space?",
                options: ["Large enough for a person to enter", "Unlimited means of entry or exit", "Not designed for continuous human occupancy", "Presents potential serious hazards"],
                answer: "Unlimited means of entry or exit"
            },
            {
                id: 3,
                question: "What is the oxygen concentration range considered safe in confined spaces?",
                options: ["Less than 15%", "19.5% to 23.5%", "10% to 15%", "Above 25%"],
                answer: "19.5% to 23.5%"
            },
            {
                id: 4,
                question: "What hazard can result from inwardly converging walls or sloped floors in confined spaces?",
                options: ["Oxygen enrichment", "Asphyxiation or entrapment", "Mechanical failure", "Combustion"],
                answer: "Asphyxiation or entrapment"
            },
            {
                id: 5,
                question: "Which gas is commonly associated with oxygen displacement in confined spaces?",
                options: ["Argon", "Methane", "Hydrogen sulfide", "Carbon monoxide"],
                answer: "Argon"
            },
            {
                id: 6,
                question: "What should warning signs for confined spaces include?",
                options: ["Name of the entrant", "Permit expiration date", "The phrase 'Danger: Permit Required for Entry'", "Supervisor’s contact information"],
                answer: "The phrase 'Danger: Permit Required for Entry'"
            },
            {
                id: 7,
                question: "What does an entry permit NOT typically include?",
                options: ["List of safety checks completed", "Baseline air quality levels", "Personal details of the rescue team", "Description of the work to be done"],
                answer: "Personal details of the rescue team"
            },
            {
                id: 8,
                question: "Which hazard is caused by a flammable atmosphere in confined spaces?",
                options: ["Engulfment", "Explosion or fire", "Electrical shock", "Entrapment"],
                answer: "Explosion or fire"
            },
            {
                id: 9,
                question: "What is the minimum air changes per hour (ACH) required for supply ventilation?",
                options: ["5 ACH", "10 ACH", "20 ACH", "60 ACH"],
                answer: "10 ACH"
            },
            {
                id: 10,
                question: "What is the main responsibility of an entry attendant?",
                options: ["Enter the confined space for rescue operations", "Maintain continuous contact with entrants", "Approve the work permit", "Repair ventilation systems"],
                answer: "Maintain continuous contact with entrants"
            },
            {
                id: 11,
                question: "Which device is essential for atmosphere testing in confined spaces?",
                options: ["Fire extinguisher", "Direct-reading air monitoring device", "Mechanical ventilator", "Safety harness"],
                answer: "Direct-reading air monitoring device"
            },
            {
                id: 12,
                question: "What must be done before entering a confined space with a hazardous atmosphere?",
                options: ["Assign two attendants", "Obtain natural ventilation only", "Isolate all energy sources", "None of the above"],
                answer: "Isolate all energy sources"
            },
            {
                id: 13,
                question: "What action should an entry attendant take if a hazardous condition arises?",
                options: ["Notify the entrant to evacuate immediately", "Enter the confined space to assist", "Reset monitoring devices", "Ignore the condition if the entrant has protective equipment"],
                answer: "Notify the entrant to evacuate immediately"
            },
            {
                id: 14,
                question: "Who ensures the completion of a confined space entry permit?",
                options: ["Entry attendant", "Entry supervisor", "Rescue team leader", "Contractor"],
                answer: "Entry supervisor"
            },
            {
                id: 15,
                question: "Which of these is NOT a physiological effect of low oxygen levels?",
                options: ["Mental failure", "Increased respiration", "Enhanced judgment", "Nausea"],
                answer: "Enhanced judgment"
            },
            {
                id: 16,
                question: "What is the primary goal of hazard isolation in confined spaces?",
                options: ["Prevent atmospheric changes", "Minimize the entry time", "Eliminate potential hazards before entry", "Avoid the use of protective equipment"],
                answer: "Eliminate potential hazards before entry"
            },
            {
                id: 17,
                question: "What is required for all hot work in confined spaces?",
                options: ["Pre-entry atmospheric testing only", "Mechanical exhaust ventilation", "Natural ventilation", "No permits are required"],
                answer: "Mechanical exhaust ventilation"
            },
            {
                id: 18,
                question: "What is the role of mechanical ventilation in confined spaces?",
                options: ["Reduce contaminants and maintain air quality", "Isolate the area from hazards", "Increase atmospheric pressure", "Replace monitoring devices"],
                answer: "Reduce contaminants and maintain air quality"
            },
            {
                id: 19,
                question: "When must confined space training be provided?",
                options: ["Once every five years", "When assigning workers to confined space duties", "Only after an accident occurs", "Only if workers request it"],
                answer: "When assigning workers to confined space duties"
            },
            {
                id: 20,
                question: "What type of rescue services must be available for confined space work?",
                options: ["In-house rescue services only", "Off-site services with a timely response", "Automated rescue equipment", "Both in-house and off-site services"],
                answer: "Both in-house and off-site services"
            },
            {
                id: 21,
                question: "What is a confined space permit designed to ensure?",
                options: ["Extended work duration", "Unrestricted access to confined spaces", "Safety checks and hazard assessments are complete", "Lower costs for confined space work"],
                answer: "Safety checks and hazard assessments are complete"
            },
            {
                id: 22,
                question: "What is the permissible concentration of flammable gas in confined spaces?",
                options: ["Less than 5% of its LFL", "10% of its LFL or lower", "20% of its LFL", "Greater than 50% of its LFL"],
                answer: "10% of its LFL or lower"
            },
            {
                id: 23,
                question: "Which hazard can result from porous surfaces like activated charcoal?",
                options: ["Explosion", "Oxygen adsorption", "Electrocution", "Heat conduction"],
                answer: "Oxygen adsorption"
            },
            {
                id: 24,
                question: "What is the key function of an entry permit?",
                options: ["Document work schedules", "List hazards and required precautions", "Specify penalties for violations", "Replace training requirements"],
                answer: "List hazards and required precautions"
            },
            {
                id: 25,
                question: "Which of the following is NOT considered a confined space?",
                options: ["Open park area", "Stormwater drain", "Silo", "Tanker truck"],
                answer: "Open park area"
            }
        ],
        advanced: [],
    },
    "electrical-safety": {
        basic: [
            {
                id: 1,
                question: "What is the primary objective of electrical safety?",
                options: ["To reduce energy costs", "To protect workers from electrical hazards", "To improve operational speed", "To eliminate all machinery"],
                answer: "To protect workers from electrical hazards"
            },
            {
                id: 2,
                question: "What does LOTO stand for in electrical safety?",
                options: ["Lockout/Turnoff", "Lockout/Tagout", "Log On/Tag Out", "Lockout/Test On"],
                answer: "Lockout/Tagout"
            },
            {
                id: 3,
                question: "Which industry is emphasized in the presentation for unique electrical safety challenges?",
                options: ["Textile", "Ferro Alloy", "Food Processing", "Automotive"],
                answer: "Ferro Alloy"
            },
            {
                id: 4,
                question: "What is an arc flash?",
                options: ["A type of electrical switch", "An explosive release of energy caused by an electrical fault", "A mechanical failure", "A short circuit in low-voltage systems"],
                answer: "An explosive release of energy caused by an electrical fault"
            },
            {
                id: 5,
                question: "What is a common cause of electrical shock in workplaces?",
                options: ["Proper insulation", "Improper grounding", "Overuse of safety equipment", "Fire extinguishers"],
                answer: "Improper grounding"
            },
            {
                id: 6,
                question: "Why is proper grounding important?",
                options: ["To save electricity", "To ensure circuit continuity", "To protect against stray currents and electrical faults", "To enhance electrical efficiency"],
                answer: "To protect against stray currents and electrical faults"
            },
            {
                id: 7,
                question: "What protective gear is essential for electrical work?",
                options: ["Hard hats", "Insulated gloves", "Steel-toe boots", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 8,
                question: "What is the purpose of lockout/tagout (LOTO) procedures?",
                options: ["To identify hazardous energy sources", "To isolate and prevent accidental energy release", "To train employees", "Both a and b"],
                answer: "Both a and b"
            },
            {
                id: 9,
                question: "What does an arc flash analysis determine?",
                options: ["Proximity of personnel to the arc source", "Fault current magnitude", "Arc duration", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 10,
                question: "What is the primary risk of exposed live electrical parts?",
                options: ["Overheating", "Electric shock and arc flash", "Reduced efficiency", "Noise pollution"],
                answer: "Electric shock and arc flash"
            },
            {
                id: 11,
                question: "What type of maintenance is crucial for electrical systems?",
                options: ["Preventive maintenance", "Reactive maintenance", "No maintenance required", "Delayed maintenance"],
                answer: "Preventive maintenance"
            },
            {
                id: 12,
                question: "What is a hazard of overloaded circuits?",
                options: ["Improved efficiency", "Overheating and fires", "Reduced energy bills", "Safer operations"],
                answer: "Overheating and fires"
            },
            {
                id: 13,
                question: "Why is proper signage necessary in electrical safety?",
                options: ["To improve workplace aesthetics", "To warn workers of electrical hazards", "To guide vehicle traffic", "None of the above"],
                answer: "To warn workers of electrical hazards"
            },
            {
                id: 14,
                question: "What type of motor is recommended for hazardous locations?",
                options: ["Open motors", "Flame-proof motors", "Low-voltage motors", "Solar-powered motors"],
                answer: "Flame-proof motors"
            },
            {
                id: 15,
                question: "How often should electrical systems be inspected?",
                options: ["Only during incidents", "Periodically", "Every decade", "Never"],
                answer: "Periodically"
            },
            {
                id: 16,
                question: "Which organization provides electrical safety standards?",
                options: ["OSHA", "NEC", "Both a and b", "FDA"],
                answer: "Both a and b"
            },
            {
                id: 17,
                question: "What is the purpose of surge protective devices (SPDs)?",
                options: ["To prevent overloading", "To protect against voltage spikes", "To reduce power consumption", "To prevent arc flashes"],
                answer: "To protect against voltage spikes"
            },
            {
                id: 18,
                question: "What is required for effective grounding in electrical systems?",
                options: ["High resistance to earth", "Low resistance to earth", "No resistance to earth", "Unlimited current flow"],
                answer: "Low resistance to earth"
            },
            {
                id: 19,
                question: "What type of equipment should be used in hazardous locations?",
                options: ["Non-insulated tools", "Explosion-proof equipment", "High-voltage systems", "None of the above"],
                answer: "Explosion-proof equipment"
            },
            {
                id: 20,
                question: "What is a key benefit of proper overload protection?",
                options: ["Faster system performance", "Avoidance of nuisance tripping", "Safeguarding against fire and electrical shock", "Reduction in equipment costs"],
                answer: "Safeguarding against fire and electrical shock"
            },
            {
                id: 21,
                question: "What is the first step in LOTO procedures?",
                options: ["Apply locks and tags", "Verify de-energization", "Identify hazardous energy", "Isolate energy sources"],
                answer: "Identify hazardous energy"
            },
            {
                id: 22,
                question: "What is the main cause of arc flash incidents?",
                options: ["Insulated tools", "Equipment failure or short circuits", "Properly maintained wiring", "Use of flame-proof motors"],
                answer: "Equipment failure or short circuits"
            },
            {
                id: 23,
                question: "What is the primary purpose of insulated gloves?",
                options: ["To enhance grip", "To protect against heat", "To prevent electrical shocks", "To improve manual dexterity"],
                answer: "To prevent electrical shocks"
            },
            {
                id: 24,
                question: "What should be documented in electrical incident reporting?",
                options: ["Root causes", "Equipment failures", "Lessons learned", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 25,
                question: "Which factor can lead to electrical fires?",
                options: ["Outdated wiring", "Proper grounding", "Non-conductive barriers", "None of the above"],
                answer: "Outdated wiring"
            },
            {
                id: 26,
                question: "What is the key consideration in designing power distribution systems?",
                options: ["Increased energy cost", "Minimizing safety precautions", "Ensuring protection devices against overloads", "Randomized equipment placement"],
                answer: "Ensuring protection devices against overloads"
            },
            {
                id: 27,
                question: "What is a critical safety measure for working with high-voltage equipment?",
                options: ["No safety measures needed", "Use of non-insulated tools", "Following LOTO procedures", "Wearing regular work clothes"],
                answer: "Following LOTO procedures"
            },
            {
                id: 28,
                question: "What is essential for arc flash protection?",
                options: ["Proper grounding only", "Arc flash boundary establishment", "Ignoring PPE requirements", "Removing circuit breakers"],
                answer: "Arc flash boundary establishment"
            },
            {
                id: 29,
                question: "Which maintenance strategy minimizes equipment downtime?",
                options: ["Preventive maintenance", "Reactive maintenance", "Ignoring small faults", "Delayed upgrades"],
                answer: "Preventive maintenance"
            },
            {
                id: 30,
                question: "What is the purpose of electrical safety training?",
                options: ["To reduce costs of safety equipment", "To teach safe work practices and hazard identification", "To increase productivity", "To replace safety audits"],
                answer: "To teach safe work practices and hazard identification"
            }
        ],
        advanced: [],
    },
    "fire-safety": {
        basic: [
            {
                id: 1,
                question: "Why is fire safety crucial in the ferro alloy industry?",
                options: ["To reduce energy consumption", "To safeguard workers and assets from fire hazards", "To eliminate production processes", "To simplify workplace management"],
                answer: "To safeguard workers and assets from fire hazards"
            },
            {
                id: 2,
                question: "What is a major fire hazard in ferro alloy plants?",
                options: ["Combustible materials like coal and coke", "Low temperatures in production", "Excessive water usage", "None of the above"],
                answer: "Combustible materials like coal and coke"
            },
            {
                id: 3,
                question: "Which of these is a key ignition source in ferro alloy facilities?",
                options: ["Electrical faults", "Hot surfaces", "Welding sparks", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 4,
                question: "What is the primary purpose of fire-resistant materials?",
                options: ["To enhance equipment efficiency", "To prevent fire spread", "To increase production rates", "To lower costs"],
                answer: "To prevent fire spread"
            },
            {
                id: 5,
                question: "Why is regulatory compliance important in fire safety?",
                options: ["To reduce insurance costs", "To avoid penalties and protect the company’s reputation", "To minimize equipment usage", "To eliminate employee training needs"],
                answer: "To avoid penalties and protect the company’s reputation"
            },
            {
                id: 6,
                question: "What is an example of a flammable liquid in ferro alloy facilities?",
                options: ["Hydraulic fluids", "Lubricants", "Both a and b", "None of the above"],
                answer: "Both a and b"
            },
            {
                id: 7,
                question: "Which fire hazard is associated with metal dusts in ferro alloy plants?",
                options: ["Electrical failure", "Explosion risks", "Loss of oxygen supply", "Equipment malfunction"],
                answer: "Explosion risks"
            },
            {
                id: 8,
                question: "What is the recommended action to reduce combustible materials in facilities?",
                options: ["Increase their storage", "Use fire barriers", "Proper handling and storage", "Eliminate safety training"],
                answer: "Proper handling and storage"
            },
            {
                id: 9,
                question: "Which system is used to detect and alert personnel to a fire?",
                options: ["Ventilation system", "Fire detection system", "Heating system", "None of the above"],
                answer: "Fire detection system"
            },
            {
                id: 10,
                question: "What is the purpose of fire suppression systems?",
                options: ["To prevent electrical shocks", "To extinguish fires automatically", "To cool molten metals", "To reduce energy costs"],
                answer: "To extinguish fires automatically"
            },
            {
                id: 11,
                question: "What is the role of fire barriers in fire safety?",
                options: ["To enhance airflow", "To isolate and contain fire spread", "To increase visibility", "To reduce noise"],
                answer: "To isolate and contain fire spread"
            },
            {
                id: 12,
                question: "What is the first step in emergency preparedness for fire safety?",
                options: ["Conduct a risk assessment", "Perform routine maintenance", "Hire new employees", "Decrease safety protocols"],
                answer: "Conduct a risk assessment"
            },
            {
                id: 13,
                question: "What type of fire extinguishing system is suitable for flammable liquids?",
                options: ["Sprinkler systems", "Foam application systems", "Sand buckets", "CO2 fire extinguishers"],
                answer: "Foam application systems"
            },
            {
                id: 14,
                question: "Why are evacuation drills important?",
                options: ["To reduce production time", "To improve emergency response familiarity", "To eliminate fire hazards", "To reduce inspection frequency"],
                answer: "To improve emergency response familiarity"
            },
            {
                id: 15,
                question: "What is a key component of administrative controls in fire safety?",
                options: ["Reduced safety inspections", "Increased production rates", "Training programs for employees", "Higher temperatures in furnaces"],
                answer: "Training programs for employees"
            },
            {
                id: 16,
                question: "What is a common combustible solid used in ferro alloy production?",
                options: ["Water", "Coal", "Copper", "Steel"],
                answer: "Coal"
            },
            {
                id: 17,
                question: "Which equipment should be maintained for fire safety?",
                options: ["Fire extinguishers", "Smoke detectors", "Sprinkler systems", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 18,
                question: "What type of fire detection system activates alarms automatically?",
                options: ["Manual pull stations", "Smoke detectors and heat sensors", "Fire barriers", "Ventilation systems"],
                answer: "Smoke detectors and heat sensors"
            },
            {
                id: 19,
                question: "What should be regularly tested to ensure reliability in emergencies?",
                options: ["Air conditioning systems", "Fire alarm systems", "Welding equipment", "Employee badges"],
                answer: "Fire alarm systems"
            },
            {
                id: 20,
                question: "What is the key to minimizing fire spread?",
                options: ["Proper ventilation", "Increased combustible storage", "Use of fire-resistant materials", "Continuous operation"],
                answer: "Use of fire-resistant materials"
            },
            {
                id: 21,
                question: "What does a hot work permit aim to control?",
                options: ["Welding and cutting hazards", "Fire suppression timing", "Electrical wiring audits", "Office fire drills"],
                answer: "Welding and cutting hazards"
            },
            {
                id: 22,
                question: "What material in ferro alloy plants can ignite due to static electricity?",
                options: ["Water", "Flammable liquids", "Sand", "Steel sheets"],
                answer: "Flammable liquids"
            },
            {
                id: 23,
                question: "How often should fire safety equipment undergo maintenance?",
                options: ["Bi-annually", "Regularly as per schedule", "Only during audits", "Every 10 years"],
                answer: "Regularly as per schedule"
            },
            {
                id: 24,
                question: "What should be the first action during a fire emergency?",
                options: ["Shut down equipment", "Evacuate the building", "Contact local fire authorities", "Raise an alarm"],
                answer: "Raise an alarm"
            },
            {
                id: 25,
                question: "What is a recommended practice for ensuring fire prevention?",
                options: ["Allowing unrestricted access to high-risk areas", "Conducting regular inspections and audits", "Ignoring minor incidents", "Using outdated fire equipment"],
                answer: "Conducting regular inspections and audits"
            },
            {
                id: 26,
                question: "Why is fire safety training essential for employees?",
                options: ["To minimize training costs", "To improve emergency response skills", "To avoid equipment usage", "To reduce inspection requirements"],
                answer: "To improve emergency response skills"
            },
            {
                id: 27,
                question: "What is the ideal response after identifying a fire hazard?",
                options: ["Notify supervisors", "Take corrective action", "Document the hazard", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 28,
                question: "What is a key step in incident investigation?",
                options: ["Ignoring minor incidents", "Identifying root causes", "Avoiding documentation", "Reducing follow-up actions"],
                answer: "Identifying root causes"
            },
            {
                id: 29,
                question: "What is the purpose of foam fire suppression systems?",
                options: ["To smother flammable liquid fires", "To reduce air temperature", "To increase fire visibility", "To prevent sprinkler activation"],
                answer: "To smother flammable liquid fires"
            },
            {
                id: 30,
                question: "How can companies enhance fire safety culture?",
                options: ["Conducting regular training and drills", "Reducing safety signage", "Minimizing employee participation", "Delaying system upgrades"],
                answer: "Conducting regular training and drills"
            }
        ],
        advanced: []
    },
    "height-work": {
        basic: [
            {
                id: 1,
                question: "What is height work?",
                options: ["Work done on the ground", "Work done underwater", "Work performed at elevated levels above ground", "None of the above"],
                answer: "Work performed at elevated levels above ground"
            },
            {
                id: 2,
                question: "Which industries commonly require height work?",
                options: ["Construction and maintenance", "Retail and hospitality", "Healthcare", "All of the above"],
                answer: "Construction and maintenance"
            },
            {
                id: 3,
                question: "What is a primary risk of height work?",
                options: ["Sunburn", "Falls", "Noise exposure", "Data theft"],
                answer: "Falls"
            },
            {
                id: 4,
                question: "What is the key reason for implementing height work safety measures?",
                options: ["To reduce costs", "To ensure regulatory compliance", "To prevent catastrophic injuries", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 5,
                question: "What does proper height work safety improve aside from safety?",
                options: ["Productivity and efficiency", "Employee turnover", "Social media presence", "Marketing strategies"],
                answer: "Productivity and efficiency"
            },
            {
                id: 6,
                question: "Which of these is NOT a hazard in height work?",
                options: ["Fall hazards", "Structural failures", "Loud noises", "Dropped objects"],
                answer: "Loud noises"
            },
            {
                id: 7,
                question: "What is a common cause of injuries in height work?",
                options: ["Falling objects", "Fire hazards", "Slippery ground", "Air pollution"],
                answer: "Falling objects"
            },
            {
                id: 8,
                question: "What is the purpose of guardrails?",
                options: ["To prevent electrical hazards", "To act as a barrier to prevent falls", "To mark unsafe zones", "To support scaffolding"],
                answer: "To act as a barrier to prevent falls"
            },
            {
                id: 9,
                question: "What should a personal fall arrest system include?",
                options: ["Safety harness, lanyard, anchor point", "Gloves, helmet, and boots", "Ropes and a whistle", "None of the above"],
                answer: "Safety harness, lanyard, anchor point"
            },
            {
                id: 10,
                question: "What is essential for safe access points?",
                options: ["Stable, well-designed structures", "Bright colors", "Automated systems", "Weatherproofing"],
                answer: "Stable, well-designed structures"
            },
            {
                id: 11,
                question: "What does PPE stand for?",
                options: ["Personal Prevention Equipment", "Personal Protective Equipment", "Public Protective Equipment", "None of the above"],
                answer: "Personal Protective Equipment"
            },
            {
                id: 12,
                question: "What is the main purpose of a hard hat?",
                options: ["To prevent sunburn", "To protect against falling objects", "To enhance communication", "To maintain head temperature"],
                answer: "To protect against falling objects"
            },
            {
                id: 13,
                question: "What is the ideal base-to-height ratio for ladder placement?",
                options: ["2:1", "3:1", "4:1", "5:1"],
                answer: "4:1"
            },
            {
                id: 14,
                question: "What should scaffolding inspections include?",
                options: ["Color of the material", "Structural integrity", "Load type", "Surface texture"],
                answer: "Structural integrity"
            },
            {
                id: 15,
                question: "Who should assemble scaffolding?",
                options: ["Any available worker", "A certified professional", "A supervisor", "A customer"],
                answer: "A certified professional"
            },
            {
                id: 16,
                question: "Which material should NOT be used for ladders near power lines?",
                options: ["Fiberglass", "Wood", "Aluminum", "None of the above"],
                answer: "Aluminum"
            },
            {
                id: 17,
                question: "What is the safest practice around overhead power lines?",
                options: ["Avoid touching them", "Maintain a safe distance", "Cover them with cloth", "Paint them bright colors"],
                answer: "Maintain a safe distance"
            },
            {
                id: 18,
                question: "Why is height work training important?",
                options: ["To comply with regulations", "To reduce risks", "To enhance worker skills", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 19,
                question: "What does ongoing evaluation ensure?",
                options: ["Long-term competency in height safety", "Compliance with current trends", "Promotion opportunities", "Equipment branding"],
                answer: "Long-term competency in height safety"
            },
            {
                id: 20,
                question: "Why is incident reporting crucial?",
                options: ["For financial audits", "To prevent future incidents", "To file complaints", "None of the above"],
                answer: "To prevent future incidents"
            },
            {
                id: 21,
                question: "What should incident reports include?",
                options: ["Witness statements and timing", "Root cause analysis", "Equipment details", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 22,
                question: "What is a key element of emergency planning?",
                options: ["Guardrails", "Evacuation procedures", "Helmet customization", "Daily scheduling"],
                answer: "Evacuation procedures"
            },
            {
                id: 23,
                question: "Which team is vital for height work emergencies?",
                options: ["Firefighters", "Rescue personnel", "Accountants", "Marketing team"],
                answer: "Rescue personnel"
            },
            {
                id: 24,
                question: "What is the primary role of managers in height work safety?",
                options: ["Implementing height safety policies", "Overseeing marketing", "Training employees in first aid", "Creating advertising campaigns"],
                answer: "Implementing height safety policies"
            },
            {
                id: 25,
                question: "Who monitors compliance in height safety programs?",
                options: ["HR professionals", "Safety officers", "Customers", "Sales representatives"],
                answer: "Safety officers"
            },
            {
                id: 26,
                question: "Which organization sets height work safety standards?",
                options: ["OSHA", "FIFA", "WHO", "IMF"],
                answer: "OSHA"
            },
            {
                id: 27,
                question: "What ensures ongoing compliance?",
                options: ["Regular inspections and training", "New equipment branding", "Increasing work hours", "Offering promotions"],
                answer: "Regular inspections and training"
            },
            {
                id: 28,
                question: "What fosters a strong safety culture?",
                options: ["Recognizing safe behavior", "Ignoring minor risks", "Limiting communication", "Imposing fines"],
                answer: "Recognizing safe behavior"
            },
            {
                id: 29,
                question: "Why are inspections critical?",
                options: ["To maintain compliance and identify risks", "To evaluate employee preferences", "To cut costs", "To reduce break times"],
                answer: "To maintain compliance and identify risks"
            },
            {
                id: 30,
                question: "What drives continuous improvement in height safety?",
                options: ["Celebrating small wins", "Learning from failures", "Data-driven insights", "All of the above"],
                answer: "All of the above"
            }
        ],
        advanced: [],
    },
    //Functional
    "training-&-development": {
        basic: [
            {
                id: 1,
                question: "What is the primary goal of training and development?",
                options: ["Increase employee salaries", "Unlock employees' full potential", "Decrease company expenses", "Reduce hiring needs"],
                answer: "Unlock employees' full potential"
            },
            {
                id: 2,
                question: "Why is investing in training programs important for organizations?",
                options: ["To stay ahead of competitors", "To replace existing staff", "To avoid hiring costs", "To eliminate employee evaluations"],
                answer: "To stay ahead of competitors"
            },
            {
                id: 3,
                question: "Which is NOT a benefit of training and development?",
                options: ["Increased job satisfaction", "Improved employee performance", "Reduced competition", "Reduced employee turnover"],
                answer: "Reduced competition"
            },
            {
                id: 4,
                question: "What does continuous learning help organizations achieve?",
                options: ["Stay relevant and competitive", "Reduce training programs", "Increase manual processes", "Avoid hiring new employees"],
                answer: "Stay relevant and competitive"
            },
            {
                id: 5,
                question: "How does continuous learning benefit individuals?",
                options: ["By fostering personal growth and problem-solving skills", "By eliminating the need for promotions", "By limiting their exposure to change", "By focusing only on past achievements"],
                answer: "By fostering personal growth and problem-solving skills"
            },
            {
                id: 6,
                question: "What is the first step in aligning training to business objectives?",
                options: ["Link training to metrics", "Identify key objectives", "Create a feedback system", "Implement KPIs"],
                answer: "Identify key objectives"
            },
            {
                id: 7,
                question: "What can be used to evaluate the impact of training?",
                options: ["Measurable KPIs", "Employee feedback only", "Random surveys", "General observations"],
                answer: "Measurable KPIs"
            },
            {
                id: 8,
                question: "What is a key aspect of tailoring training content?",
                options: ["Focusing on the company's specific goals", "Limiting sessions to leadership roles", "Using only theoretical examples", "Avoiding new trends"],
                answer: "Focusing on the company's specific goals"
            },
            {
                id: 9,
                question: "What is the purpose of training needs analysis?",
                options: ["To assess gaps between current and required skills", "To avoid training expenses", "To develop unrelated programs", "To increase work hours"],
                answer: "To assess gaps between current and required skills"
            },
            {
                id: 10,
                question: "What should organizations do when assessing training needs?",
                options: ["Gather feedback from employees and managers", "Focus only on technical skills", "Rely solely on external evaluations", "Avoid prioritizing needs"],
                answer: "Gather feedback from employees and managers"
            },
            {
                id: 11,
                question: "What is an advantage of in-person training?",
                options: ["Real-time feedback and collaboration", "Cost-effectiveness compared to e-learning", "Eliminating hands-on practice", "Replacing digital tools"],
                answer: "Real-time feedback and collaboration"
            },
            {
                id: 12,
                question: "What makes virtual training effective?",
                options: ["Increased accessibility and flexibility", "Limiting interactivity", "Higher expenses than in-person sessions", "Using only static content"],
                answer: "Increased accessibility and flexibility"
            },
            {
                id: 13,
                question: "What does on-the-job training emphasize?",
                options: ["Practical, hands-on learning", "Limiting new skill acquisition", "Focus on external feedback only", "Avoiding coaching opportunities"],
                answer: "Practical, hands-on learning"
            },
            {
                id: 14,
                question: "How does e-learning benefit employees?",
                options: ["Provides self-paced learning opportunities", "Eliminates the need for assessments", "Focuses only on live sessions", "Limits content availability"],
                answer: "Provides self-paced learning opportunities"
            },
            {
                id: 15,
                question: "What is blended learning?",
                options: ["A mix of in-person and online training", "Exclusive use of self-paced modules", "A focus on external trainers only", "Avoiding digital tools"],
                answer: "A mix of in-person and online training"
            },
            {
                id: 16,
                question: "What is the first level of Kirkpatrick's evaluation model?",
                options: ["Reaction", "Learning", "Behavior", "Results"],
                answer: "Reaction"
            },
            {
                id: 17,
                question: "What does the 'Behavior' level in Kirkpatrick's model assess?",
                options: ["The application of learned skills on the job", "Participant satisfaction with training", "Knowledge gained during training", "Return on investment"],
                answer: "The application of learned skills on the job"
            },
            {
                id: 18,
                question: "What does measuring 'Results' in training focus on?",
                options: ["Business impact of the training", "Feedback from trainers", "Pre-training skill levels", "Number of participants"],
                answer: "Business impact of the training"
            },
            {
                id: 19,
                question: "What is the first step in developing a training curriculum?",
                options: ["Needs assessment", "Content curation", "Instructional design", "Defining learning objectives"],
                answer: "Needs assessment"
            },
            {
                id: 20,
                question: "Why are clear learning objectives important?",
                options: ["They align training with desired outcomes", "They replace the need for assessments", "They focus only on theoretical knowledge", "They limit content updates"],
                answer: "They align training with desired outcomes"
            },
            {
                id: 21,
                question: "What does learner-centered design focus on?",
                options: ["Participants' needs and learning styles", "Limiting active participation", "Relying solely on lectures", "Avoiding varied teaching methods"],
                answer: "Participants' needs and learning styles"
            },
            {
                id: 22,
                question: "What does spaced repetition help achieve?",
                options: ["Long-term retention of knowledge and skills", "Faster course completion", "Increased reliance on trainers", "Avoiding concept reinforcement"],
                answer: "Long-term retention of knowledge and skills"
            },
            {
                id: 23,
                question: "Why is engaging learners important in training?",
                options: ["It fosters active participation and retention", "It reduces feedback opportunities", "It limits collaboration", "It increases session duration"],
                answer: "It fosters active participation and retention"
            },
            {
                id: 24,
                question: "What role does constructive feedback play?",
                options: ["Helps learners improve and boost confidence", "Focuses on participant weaknesses", "Avoids addressing mistakes", "Reduces learner motivation"],
                answer: "Helps learners improve and boost confidence"
            },
            {
                id: 25,
                question: "Why is obtaining management buy-in critical?",
                options: ["To secure leadership support for training programs", "To focus only on high-cost options", "To avoid presenting benefits", "To limit employee involvement"],
                answer: "To secure leadership support for training programs"
            },
            {
                id: 26,
                question: "What is a key consideration in budgeting for training?",
                options: ["Aligning training expenses with business goals", "Reducing all costs", "Avoiding external funding options", "Focusing only on technical skills"],
                answer: "Aligning training expenses with business goals"
            },
            {
                id: 27,
                question: "What drives the evolution of training programs?",
                options: ["Technological advancements and business needs", "Reduction in workforce size", "Elimination of employee evaluations", "Ignoring changing industry trends"],
                answer: "Technological advancements and business needs"
            },
            {
                id: 28,
                question: "How can organizations scale training programs effectively?",
                options: ["Leverage technology and standardize materials", "Limit reach to specific roles", "Focus only on in-person sessions", "Avoid internal trainers"],
                answer: "Leverage technology and standardize materials"
            },
            {
                id: 29,
                question: "What ensures training remains effective over time?",
                options: ["Continuous feedback and optimization", "Avoiding session updates", "Limiting participant involvement", "Ignoring technological tools"],
                answer: "Continuous feedback and optimization"
            },
            {
                id: 30,
                question: "Why is fostering collaboration in training important?",
                options: ["It builds teamwork and shared problem-solving skills", "It limits communication", "It reduces learner engagement", "It focuses only on individual tasks"],
                answer: "It builds teamwork and shared problem-solving skills"
            }
        ],
        advanced: []
    },
    "recruitment": {
        basic: [
            {
                id: 1,
                question: "What is the first step in the recruitment process?",
                options: ["Conducting interviews", "Screening applications", "Understanding hiring needs", "Onboarding new employees"],
                answer: "Understanding hiring needs"
            },
            {
                id: 2,
                question: "What is crucial when defining a role?",
                options: ["Using complex jargon", "Clearly articulating responsibilities and qualifications", "Excluding future skill needs", "Avoiding company goals"],
                answer: "Clearly articulating responsibilities and qualifications"
            },
            {
                id: 3,
                question: "Why is assessing the current workforce important?",
                options: ["To evaluate team strengths and gaps", "To reduce hiring costs", "To eliminate training needs", "To identify leadership roles only"],
                answer: "To evaluate team strengths and gaps"
            },
            {
                id: 4,
                question: "What should align with the new hire?",
                options: ["Organizational goals and culture", "Social media presence", "Competitors' strategies", "Personal preferences only"],
                answer: "Organizational goals and culture"
            },
            {
                id: 5,
                question: "Which is NOT a part of an effective job description?",
                options: ["Job title", "Compensation details", "Employee's family background", "Required skills"],
                answer: "Employee's family background"
            },
            {
                id: 6,
                question: "What helps attract top talent in job descriptions?",
                options: ["Company culture", "Employee's favorite color", "Hobbies of the hiring manager", "All of the above"],
                answer: "Company culture"
            },
            {
                id: 7,
                question: "What is the purpose of providing a salary range in a job description?",
                options: ["To showcase job location", "To attract top talent", "To reduce applications", "To ensure compliance with taxes"],
                answer: "To attract top talent"
            },
            {
                id: 8,
                question: "Which of the following is a sourcing strategy?",
                options: ["Using online job boards", "Avoiding networking", "Limiting referrals", "Ignoring passive candidates"],
                answer: "Using online job boards"
            },
            {
                id: 9,
                question: "What is an advantage of employee referral programs?",
                options: ["Reaches trusted, qualified candidates", "Increases recruitment costs", "Reduces collaboration among employees", "Makes the process slower"],
                answer: "Reaches trusted, qualified candidates"
            },
            {
                id: 10,
                question: "How can social media help in recruitment?",
                options: ["By targeting passive candidates", "By discouraging applications", "By hiding job opportunities", "By limiting visibility"],
                answer: "By targeting passive candidates"
            },
            {
                id: 11,
                question: "What is the purpose of initial resume screening?",
                options: ["To assess key qualifications and fit", "To eliminate all candidates", "To finalize hiring immediately", "To set a deadline for the next steps"],
                answer: "To assess key qualifications and fit"
            },
            {
                id: 12,
                question: "What can be used to rank applicants effectively?",
                options: ["Random selection", "Application scoring", "Interviews without preparation", "Irrelevant criteria"],
                answer: "Application scoring"
            },
            {
                id: 13,
                question: "Why are phone screenings conducted?",
                options: ["To assess initial interest and fit", "To replace in-person interviews", "To gather unrelated details", "To skip the recruitment process"],
                answer: "To assess initial interest and fit"
            },
            {
                id: 14,
                question: "What should you do before an interview?",
                options: ["Research the candidate's background", "Ignore their resume", "Prepare unstructured questions", "Avoid making the candidate comfortable"],
                answer: "Research the candidate's background"
            },
            {
                id: 15,
                question: "What type of questions help assess decision-making skills?",
                options: ["Behavioral and situational", "Personal and unrelated", "Random and unstructured", "Repetitive questions"],
                answer: "Behavioral and situational"
            },
            {
                id: 16,
                question: "Why is active listening important during interviews?",
                options: ["To understand the candidate's responses deeply", "To assess only body language", "To cut the interview short", "To dominate the conversation"],
                answer: "To understand the candidate's responses deeply"
            },
            {
                id: 17,
                question: "What is a skills assessment used for?",
                options: ["Evaluating technical and problem-solving abilities", "Avoiding practical tests", "Checking academic performance only", "Assessing unrelated factors"],
                answer: "Evaluating technical and problem-solving abilities"
            },
            {
                id: 18,
                question: "What is verified during a reference check?",
                options: ["Candidate's qualifications and work history", "Hobbies and pastimes", "Future aspirations", "Educational documents only"],
                answer: "Candidate's qualifications and work history"
            },
            {
                id: 19,
                question: "What can personality assessments help with?",
                options: ["Understanding communication style and cultural fit", "Deciding the candidate's salary", "Ignoring skills", "Replacing interviews"],
                answer: "Understanding communication style and cultural fit"
            },
            {
                id: 20,
                question: "What should a competitive offer include?",
                options: ["Salary, bonuses, benefits, and perks", "Limited job details", "Only base salary", "None of the above"],
                answer: "Salary, bonuses, benefits, and perks"
            },
            {
                id: 21,
                question: "Why are performance-based bonuses beneficial?",
                options: ["They incentivize high performance", "They reduce productivity", "They replace promotions", "They are irrelevant to the offer"],
                answer: "They incentivize high performance"
            },
            {
                id: 22,
                question: "What type of perks can make a job offer more attractive?",
                options: ["Flexible work arrangements", "Professional development opportunities", "Wellness programs", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 23,
                question: "What is the first step in onboarding?",
                options: ["Welcome and introduce new hires", "Assign tasks immediately", "Skip training sessions", "Ignore the paperwork"],
                answer: "Welcome and introduce new hires"
            },
            {
                id: 24,
                question: "Why is skill development important during onboarding?",
                options: ["To help new hires succeed in their roles", "To delay productivity", "To test the new hire's patience", "To skip the learning curve"],
                answer: "To help new hires succeed in their roles"
            },
            {
                id: 25,
                question: "What defines a strong employer brand?",
                options: ["Unique company culture and employee benefits", "Expensive marketing campaigns", "Random social media updates", "Limiting employee interactions"],
                answer: "Unique company culture and employee benefits"
            },
            {
                id: 26,
                question: "How can employee testimonials help in branding?",
                options: ["By showcasing real experiences", "By focusing on customer feedback", "By highlighting competitors", "By ignoring challenges"],
                answer: "By showcasing real experiences"
            },
            {
                id: 27,
                question: "What does inclusive hiring involve?",
                options: ["Evaluating candidates fairly and free from bias", "Ignoring diverse candidates", "Shortening the hiring process", "Avoiding feedback"],
                answer: "Evaluating candidates fairly and free from bias"
            },
            {
                id: 28,
                question: "Why is cultural awareness critical for hiring managers?",
                options: ["To mitigate biases and respect differences", "To enforce rigid hiring policies", "To follow competitors' hiring patterns", "To skip training sessions"],
                answer: "To mitigate biases and respect differences"
            },
            {
                id: 29,
                question: "What is a key goal of diversity in recruitment?",
                options: ["Building an inclusive workforce", "Reducing the hiring timeline", "Limiting representation", "Avoiding compliance"],
                answer: "Building an inclusive workforce"
            },
            {
                id: 30,
                question: "Why should you regularly update your recruitment process?",
                options: ["To align with industry trends and best practices", "To eliminate structured interviews", "To delay hiring timelines", "To avoid team collaborations"],
                answer: "To align with industry trends and best practices"
            }
        ],
        advanced: []
    },
    "performance-management-system": {
        basic: [
            {
                id: 1,
                question: "What is the primary goal of a performance management system?",
                options: ["Reduce employee workload", "Align employee goals with organizational priorities", "Minimize operational costs"],
                answer: "Align employee goals with organizational priorities"
            },
            {
                id: 2,
                question: "What is a key feature of a performance management system?",
                options: ["Ad hoc reviews", "Continuous feedback", "One-time appraisals"],
                answer: "Continuous feedback"
            },
            {
                id: 3,
                question: "What do periodic performance appraisals assess?",
                options: ["Financial losses", "Employee achievements and development needs", "Market competition"],
                answer: "Employee achievements and development needs"
            },
            {
                id: 4,
                question: "Which component is essential for effective goal setting?",
                options: ["Vague expectations", "Measurable performance objectives", "Unlimited resources"],
                answer: "Measurable performance objectives"
            },
            {
                id: 5,
                question: "What does ongoing feedback promote in an organization?",
                options: ["Competition among employees", "A culture of continuous learning and development", "Avoidance of appraisals"],
                answer: "A culture of continuous learning and development"
            },
            {
                id: 6,
                question: "What is one benefit of aligning individual and organizational goals?",
                options: ["Eliminates the need for performance reviews", "Increases employee engagement and commitment", "Focuses only on organizational profits"],
                answer: "Increases employee engagement and commitment"
            },
            {
                id: 7,
                question: "What does a collaborative goal-setting process create?",
                options: ["Increased workloads", "Ownership and commitment among employees", "Minimal employee involvement"],
                answer: "Ownership and commitment among employees"
            },
            {
                id: 8,
                question: "Which is NOT a step in aligning goals?",
                options: ["Clarify organizational objectives", "Ignore employee feedback", "Link rewards to goal achievement"],
                answer: "Ignore employee feedback"
            },
            {
                id: 9,
                question: "What is the role of data-driven insights in performance management?",
                options: ["Replace feedback entirely", "Inform coaching and identify training needs", "Focus solely on promotions"],
                answer: "Inform coaching and identify training needs"
            },
            {
                id: 10,
                question: "What ensures transparency in performance appraisals?",
                options: ["Informal discussions", "Thorough documentation of appraisal outcomes", "Ignoring employee feedback"],
                answer: "Thorough documentation of appraisal outcomes"
            },
            {
                id: 11,
                question: "What is a benefit of regular performance check-ins?",
                options: ["Fewer appraisal sessions", "Timely guidance and recognition of achievements", "Increased workload for managers"],
                answer: "Timely guidance and recognition of achievements"
            },
            {
                id: 12,
                question: "What is the first step in conducting performance appraisals?",
                options: ["Document outcomes", "Establish clear objectives", "Provide promotions"],
                answer: "Establish clear objectives"
            },
            {
                id: 13,
                question: "How does tying rewards to performance benefit employees?",
                options: ["Creates unrealistic expectations", "Motivates them to excel and stay engaged", "Reduces career advancement opportunities"],
                answer: "Motivates them to excel and stay engaged"
            },
            {
                id: 14,
                question: "What is one way to link performance with career growth?",
                options: ["Limiting training opportunities", "Offering skill development and advancement pathways", "Avoiding employee appraisals"],
                answer: "Offering skill development and advancement pathways"
            },
            {
                id: 15,
                question: "Which strategy helps underperforming employees improve?",
                options: ["Ignoring their challenges", "Implementing a Performance Improvement Plan (PIP)", "Reducing their workload permanently"],
                answer: "Implementing a Performance Improvement Plan (PIP)"
            },
            {
                id: 16,
                question: "What role does mentorship play in performance improvement?",
                options: ["Replaces formal appraisals", "Provides guidance and career development opportunities", "Focuses solely on team dynamics"],
                answer: "Provides guidance and career development opportunities"
            },
            {
                id: 17,
                question: "What should constructive feedback include?",
                options: ["Broad generalizations", "Specific, actionable suggestions for improvement", "Personal criticism"],
                answer: "Specific, actionable suggestions for improvement"
            },
            {
                id: 18,
                question: "What does an effective rewards program include?",
                options: ["Exclusively monetary benefits", "A mix of monetary and non-monetary incentives", "Minimal recognition of employee contributions"],
                answer: "A mix of monetary and non-monetary incentives"
            },
            {
                id: 19,
                question: "How can job rotation benefit employees?",
                options: ["Restricts career growth", "Broadens experience and knowledge", "Limits exposure to new departments"],
                answer: "Broadens experience and knowledge"
            },
            {
                id: 20,
                question: "What is a key aspect of coaching for performance improvement?",
                options: ["One-size-fits-all solutions", "Personalized action plans for growth", "Avoiding regular check-ins"],
                answer: "Personalized action plans for growth"
            },
            {
                id: 21,
                question: "What does a culture of continuous feedback foster?",
                options: ["Avoidance of formal reviews", "Open dialogue and trust", "Focus on short-term results"],
                answer: "Open dialogue and trust"
            },
            {
                id: 22,
                question: "Which tool can enhance performance management efficiency?",
                options: ["Paper-based records", "Performance management software", "Outdated analytics methods"],
                answer: "Performance management software"
            },
            {
                id: 23,
                question: "What is the purpose of the bell curve method in evaluations?",
                options: ["Categorizing employees into performance levels", "Eliminating appraisal processes", "Avoiding constructive feedback"],
                answer: "Categorizing employees into performance levels"
            },
            {
                id: 24,
                question: "How does linking performance to talent management help organizations?",
                options: ["Identifies high-potential employees for development", "Focuses only on senior management", "Reduces the need for training programs"],
                answer: "Identifies high-potential employees for development"
            },
            {
                id: 25,
                question: "What is the first step in addressing performance issues?",
                options: ["Constructive, empathetic feedback discussions", "Immediate termination of employment", "Ignoring specific concerns"],
                answer: "Constructive, empathetic feedback discussions"
            },
            {
                id: 26,
                question: "What aligns employee goals with organizational strategy?",
                options: ["Cascading objectives from strategic priorities", "Allowing unrelated individual objectives", "Minimizing goal reviews"],
                answer: "Cascading objectives from strategic priorities"
            },
            {
                id: 27,
                question: "What does evaluating a performance management system ensure?",
                options: ["Its alignment with organizational goals and employee growth", "Limiting feedback from employees", "A static appraisal process"],
                answer: "Its alignment with organizational goals and employee growth"
            },
            {
                id: 28,
                question: "How can organizations promote fairness in evaluations?",
                options: ["Utilize objective and transparent criteria", "Rely solely on subjective opinions", "Skip regular performance reviews"],
                answer: "Utilize objective and transparent criteria"
            },
            {
                id: 29,
                question: "What motivates employees to contribute to organizational success?",
                options: ["Clear linkage between performance and rewards", "Reducing recognition programs", "Avoiding career advancement discussions"],
                answer: "Clear linkage between performance and rewards"
            },
            {
                id: 30,
                question: "What is a sign of an effective performance management system?",
                options: ["Low employee engagement rates", "High adoption and satisfaction scores", "Fewer employee development programs"],
                answer: "High adoption and satisfaction scores"
            }
        ],
        advanced: []
    },
    "branding": {
        basic: [
            {
                id: 1,
                question: "What is branding?",
                options: ["Creating a product", "Developing a unique identity for a company or product", "Conducting market research"],
                answer: "Developing a unique identity for a company or product"
            },
            {
                id: 2,
                question: "What are the key elements of a brand?",
                options: ["Customer surveys and market analysis", "Logo, color palette, tagline, and brand voice", "Profit margins and expenses"],
                answer: "Logo, color palette, tagline, and brand voice"
            },
            {
                id: 3,
                question: "What does branding encompass beyond a logo or slogan?",
                options: ["Product pricing only", "The entire customer experience", "Shipping logistics"],
                answer: "The entire customer experience"
            },
            {
                id: 4,
                question: "Why is branding important?",
                options: ["It reduces costs", "It differentiates a company and builds trust", "It eliminates the need for marketing"],
                answer: "It differentiates a company and builds trust"
            },
            {
                id: 5,
                question: "What is the purpose of a brand logo?",
                options: ["To replace written content", "To create a visual identity for the brand", "To standardize prices"],
                answer: "To create a visual identity for the brand"
            },
            {
                id: 6,
                question: "What does a cohesive color palette help with?",
                options: ["Increasing production capacity", "Building brand recognition", "Conducting employee training"],
                answer: "Building brand recognition"
            },
            {
                id: 7,
                question: "What is the role of brand voice?",
                options: ["To reflect a company’s personality and values", "To determine pricing strategies", "To guide legal compliance"],
                answer: "To reflect a company’s personality and values"
            },
            {
                id: 8,
                question: "Which emotion is NOT commonly associated with effective branding?",
                options: ["Belonging", "Fear", "Inspiration"],
                answer: "Fear"
            },
            {
                id: 9,
                question: "What is a key characteristic of a timeless brand logo?",
                options: ["It changes frequently", "It remains relevant over time", "It focuses on trends"],
                answer: "It remains relevant over time"
            },
            {
                id: 10,
                question: "What does a strong brand create in a competitive market?",
                options: ["A premium price point", "Lower marketing costs", "High employee turnover"],
                answer: "A premium price point"
            },
            {
                id: 11,
                question: "What does visual branding include?",
                options: ["Sales projections", "Logo, typography, and imagery", "Legal documentation"],
                answer: "Logo, typography, and imagery"
            },
            {
                id: 12,
                question: "Which is NOT part of verbal branding?",
                options: ["Tagline", "Messaging", "Customer purchase history"],
                answer: "Customer purchase history"
            },
            {
                id: 13,
                question: "Why is brand consistency important?",
                options: ["To increase employee retention", "To reinforce brand recognition", "To simplify production processes"],
                answer: "To reinforce brand recognition"
            },
            {
                id: 14,
                question: "What does brand storytelling help achieve?",
                options: ["Fewer marketing efforts", "Strong emotional connections with customers", "Lower production costs"],
                answer: "Strong emotional connections with customers"
            },
            {
                id: 15,
                question: "Which element affects customer perception in color psychology?",
                options: ["Logo placement", "Chosen brand colors", "Pricing strategy"],
                answer: "Chosen brand colors"
            },
            {
                id: 16,
                question: "What is the first step in developing brand awareness?",
                options: ["Creating an online presence", "Launching a new product", "Setting profit goals"],
                answer: "Creating an online presence"
            },
            {
                id: 17,
                question: "What helps establish trust and reliability in branding?",
                options: ["Regular product redesigns", "Consistent brand experience", "Offering frequent discounts"],
                answer: "Consistent brand experience"
            },
            {
                id: 18,
                question: "Which is a method to engage your target audience?",
                options: ["Conducting quarterly layoffs", "Creating relevant content", "Focusing only on product features"],
                answer: "Creating relevant content"
            },
            {
                id: 19,
                question: "What does a unique brand identity achieve?",
                options: ["Differentiates from competitors", "Increases inventory size", "Reduces advertising costs"],
                answer: "Differentiates from competitors"
            },
            {
                id: 20,
                question: "Which is an example of brand positioning?",
                options: ["Matching competitor prices", "Crafting a distinct identity in a crowded market", "Ignoring market trends"],
                answer: "Crafting a distinct identity in a crowded market"
            },
            {
                id: 21,
                question: "What does a strong brand promise focus on?",
                options: ["Customer needs", "Company profits only", "Market disruptions"],
                answer: "Customer needs"
            },
            {
                id: 22,
                question: "What is the benefit of leveraging brand equity?",
                options: ["Reduces product quality", "Builds customer loyalty", "Eliminates competition"],
                answer: "Builds customer loyalty"
            },
            {
                id: 23,
                question: "What should a brand do to adapt to market changes?",
                options: ["Ignore customer feedback", "Monitor evolving customer needs", "Focus on short-term profits"],
                answer: "Monitor evolving customer needs"
            },
            {
                id: 24,
                question: "What can trademarks protect?",
                options: ["Sales targets", "Brand names and logos", "Distribution channels"],
                answer: "Brand names and logos"
            },
            {
                id: 25,
                question: "Which is NOT a benefit of brand recognition?",
                options: ["Increased customer trust", "Simplified logistics", "Higher conversion rates"],
                answer: "Simplified logistics"
            },
            {
                id: 26,
                question: "Why is rebranding undertaken?",
                options: ["To modernize and align with new market needs", "To eliminate competition", "To reduce branding costs"],
                answer: "To modernize and align with new market needs"
            },
            {
                id: 27,
                question: "What is an example of brand extension?",
                options: ["Launching a complementary product", "Reducing advertising", "Simplifying customer service"],
                answer: "Launching a complementary product"
            },
            {
                id: 28,
                question: "How can businesses build emotional connections with customers?",
                options: ["By leveraging brand storytelling", "By avoiding feedback channels", "By reducing brand visuals"],
                answer: "By leveraging brand storytelling"
            },
            {
                id: 29,
                question: "What does hyper-personalization in branding involve?",
                options: ["Standardizing customer experiences", "Tailoring messages and experiences using data and AI", "Reducing brand presence online"],
                answer: "Tailoring messages and experiences using data and AI"
            },
            {
                id: 30,
                question: "What is the focus of future branding trends?",
                options: ["Emphasizing sustainability and social impact", "Limiting digital channels", "Ignoring consumer preferences"],
                answer: "Emphasizing sustainability and social impact"
            }
        ],
        advanced: []
    },
    "coal-procurement": {
        basic: [
            {
                id: 1,
                question: "What is the primary objective of coal procurement?",
                options: ["Increasing mining output", "Ensuring reliable and cost-effective supply", "Promoting renewable energy"],
                answer: "Ensuring reliable and cost-effective supply"
            },
            {
                id: 2,
                question: "Which factor is crucial for energy security in coal procurement?",
                options: ["Supplier reliability", "High sulfur content", "Distance from ports"],
                answer: "Supplier reliability"
            },
            {
                id: 3,
                question: "What does 'calorific value' refer to in coal quality specifications?",
                options: ["The energy content of coal", "The ash percentage in coal", "The transportation cost"],
                answer: "The energy content of coal"
            },
            {
                id: 4,
                question: "Which sector heavily relies on coal as a raw material?",
                options: ["Textile", "Cement manufacturing", "Pharmaceuticals"],
                answer: "Cement manufacturing"
            },
            {
                id: 5,
                question: "What is meant by 'moisture content' in coal?",
                options: ["The non-combustible matter in coal", "The water percentage affecting handling and storage", "The total weight of coal mined"],
                answer: "The water percentage affecting handling and storage"
            },
            {
                id: 6,
                question: "What is the significance of demand forecasting in procurement?",
                options: ["To reduce inventory", "To predict future coal needs", "To increase competition among suppliers"],
                answer: "To predict future coal needs"
            },
            {
                id: 7,
                question: "Which factor does NOT directly influence coal procurement?",
                options: ["Market conditions", "Environmental regulations", "Consumer spending habits"],
                answer: "Consumer spending habits"
            },
            {
                id: 8,
                question: "What does 'supplier evaluation' primarily focus on?",
                options: ["Brand reputation", "Financial stability and reliability", "Marketing capabilities"],
                answer: "Financial stability and reliability"
            },
            {
                id: 9,
                question: "Which regulatory compliance is critical in coal procurement?",
                options: ["Social media advertising laws", "Emissions standards", "Stock market regulations"],
                answer: "Emissions standards"
            },
            {
                id: 10,
                question: "What is the first step in the bidding process?",
                options: ["Submit bid proposal", "Prepare bid documents", "Conduct supplier meetings"],
                answer: "Prepare bid documents"
            },
            {
                id: 11,
                question: "Which is a key benefit of negotiating flexible contract terms?",
                options: ["Increasing supplier competition", "Adjusting to market changes", "Avoiding legal compliance"],
                answer: "Adjusting to market changes"
            },
            {
                id: 12,
                question: "Which mode of transportation is NOT commonly used in coal logistics?",
                options: ["Rail", "Ships", "Airplanes"],
                answer: "Airplanes"
            },
            {
                id: 13,
                question: "What does 'multimodal transportation' involve?",
                options: ["Using a single transportation mode", "Combining different modes like rail and ship", "Prioritizing speed over cost"],
                answer: "Combining different modes like rail and ship"
            },
            {
                id: 14,
                question: "Which approach helps in inventory optimization?",
                options: ["Overstocking", "Real-time tracking", "Ignoring storage costs"],
                answer: "Real-time tracking"
            },
            {
                id: 15,
                question: "What is an example of a risk mitigation strategy?",
                options: ["Partnering with a single supplier", "Diversifying coal suppliers", "Ignoring price volatility"],
                answer: "Diversifying coal suppliers"
            },
            {
                id: 16,
                question: "Which tool enhances transparency in coal procurement?",
                options: ["E-sourcing platforms", "Printed invoices", "Manual record-keeping"],
                answer: "E-sourcing platforms"
            },
            {
                id: 17,
                question: "How can companies improve cost optimization?",
                options: ["Avoiding long-term contracts", "Analyzing logistics and transportation", "Ignoring supplier feedback"],
                answer: "Analyzing logistics and transportation"
            },
            {
                id: 18,
                question: "What does 'supplier performance monitoring' include?",
                options: ["Analyzing social media presence", "Tracking on-time delivery and quality", "Reducing procurement budgets"],
                answer: "Tracking on-time delivery and quality"
            },
            {
                id: 19,
                question: "What is 'ethical sourcing' focused on?",
                options: ["Minimizing environmental impact", "Ensuring labor standards and human rights", "Reducing product prices"],
                answer: "Ensuring labor standards and human rights"
            },
            {
                id: 20,
                question: "Which technology supports digital transformation in coal procurement?",
                options: ["AI-powered supplier analytics", "Manual quality checks", "Fax-based communication"],
                answer: "AI-powered supplier analytics"
            },
            {
                id: 21,
                question: "Which practice reduces holding costs in inventory management?",
                options: ["Overstocking", "Just-in-time delivery", "Ignoring seasonal trends"],
                answer: "Just-in-time delivery"
            },
            {
                id: 22,
                question: "What does a life cycle approach evaluate?",
                options: ["Coal pricing only", "Environmental and social impacts of coal", "Transportation methods exclusively"],
                answer: "Environmental and social impacts of coal"
            },
            {
                id: 23,
                question: "Which is an example of sustainable procurement?",
                options: ["Ignoring emissions standards", "Sourcing from eco-friendly suppliers", "Prioritizing cost over ethics"],
                answer: "Sourcing from eco-friendly suppliers"
            },
            {
                id: 24,
                question: "How do hedging strategies help in procurement?",
                options: ["By increasing supply chain risks", "By managing price volatility", "By discouraging long-term planning"],
                answer: "By managing price volatility"
            },
            {
                id: 25,
                question: "Which is NOT a common use of data analytics in procurement?",
                options: ["Predicting demand", "Enhancing inventory visibility", "Reducing supplier negotiations"],
                answer: "Reducing supplier negotiations"
            },
            {
                id: 26,
                question: "What does 'joint procurement' achieve?",
                options: ["Reduces collaboration", "Improves negotiating power", "Limits supplier options"],
                answer: "Improves negotiating power"
            },
            {
                id: 27,
                question: "What is a benefit of continuous improvement in procurement?",
                options: ["Eliminating innovation", "Streamlining processes through Kaizen principles", "Ignoring employee feedback"],
                answer: "Streamlining processes through Kaizen principles"
            },
            {
                id: 28,
                question: "What is an example of leveraging partnerships?",
                options: ["Building long-term relationships with suppliers", "Focusing solely on new suppliers", "Reducing supplier communications"],
                answer: "Building long-term relationships with suppliers"
            },
            {
                id: 29,
                question: "Why is stakeholder engagement important in procurement?",
                options: ["To avoid regulatory compliance", "To address environmental and community concerns", "To reduce supplier partnerships"],
                answer: "To address environmental and community concerns"
            },
            {
                id: 30,
                question: "What does digitization of procurement processes enhance?",
                options: ["Manual record-keeping", "Efficiency and data-driven decisions", "Ignoring supply chain dynamics"],
                answer: "Efficiency and data-driven decisions"
            }
        ],
    },
    


    //BEC
    "dm-pillar": {
        basic: [
            {
                id: 1,
                question: "What is the primary objective of the Development Management (DM) pillar in TPM?",
                options: ["To increase production output", "To improve employee skills", "To ensure equipment reliability and performance from the start", "To reduce downtime through maintenance"],
                answer: "To ensure equipment reliability and performance from the start"
            },
            {
                id: 2,
                question: "DM focuses on improving which stage of equipment life?",
                options: ["End of life", "Installation and commissioning", "Routine maintenance", "Decommissioning"],
                answer: "Installation and commissioning"
            },
            {
                id: 3,
                question: "Which of the following is a key activity in Development Management?",
                options: ["Equipment breakdown management", "Equipment design and selection improvement", "Routine cleaning of machines", "Employee skill training"],
                answer: "Equipment design and selection improvement"
            },
            {
                id: 4,
                question: "Which team plays a crucial role in the Development Management pillar?",
                options: ["Maintenance team", "Manufacturing team", "Engineering and Design team", "Sales team"],
                answer: "Engineering and Design team"
            },
            {
                id: 5,
                question: "What is the main benefit of DM for new equipment?",
                options: ["Reduces cost of raw materials", "Improves equipment longevity and performance", "Increases employee productivity", "Increases production capacity"],
                answer: "Improves equipment longevity and performance"
            },
            {
                id: 6,
                question: "DM helps in ensuring that equipment is designed for which key aspects?",
                options: ["Easy installation, safety, and minimal downtime", "High-speed operation only", "Low cost of maintenance", "Maximum energy consumption"],
                answer: "Easy installation, safety, and minimal downtime"
            },
            {
                id: 7,
                question: "The involvement of operators in the Development Management process leads to:",
                options: ["Higher machine failure rates", "Increased repair costs", "Improved equipment understanding and maintenance", "Delayed production processes"],
                answer: "Improved equipment understanding and maintenance"
            },
            {
                id: 8,
                question: "One of the goals of DM is to ensure that equipment has:",
                options: ["High warranty periods", "Well-defined spare parts availability", "Low purchase cost", "Maximum speed"],
                answer: "Well-defined spare parts availability"
            },
            {
                id: 9,
                question: "DM includes designing equipment that allows for:",
                options: ["Frequent repairs", "Simple maintenance activities", "Complex configurations", "Reduced energy consumption"],
                answer: "Simple maintenance activities"
            },
            {
                id: 10,
                question: "Which of the following is an example of Development Management practice?",
                options: ["Adding lubricants after equipment failure", "Installing automatic sensors for monitoring", "Stopping production to clean equipment", "Performing routine shutdowns"],
                answer: "Installing automatic sensors for monitoring"
            },
            {
                id: 11,
                question: "What is a key focus during the design phase of equipment under DM?",
                options: ["Maximizing equipment complexity", "Reducing energy consumption", "Ensuring easy repair and parts replacement", "Increasing cost of production"],
                answer: "Ensuring easy repair and parts replacement"
            },
            {
                id: 12,
                question: "DM aims to reduce which of the following?",
                options: ["Initial purchase cost of equipment", "Equipment downtime", "Labor costs", "Inventory storage"],
                answer: "Equipment downtime"
            },
            {
                id: 13,
                question: "In the context of DM, 'design for maintainability' refers to:",
                options: ["Making the equipment faster", "Designing the equipment for easier repairs and maintenance", "Minimizing energy usage", "Reducing equipment costs"],
                answer: "Designing the equipment for easier repairs and maintenance"
            },
            {
                id: 14,
                question: "What is the impact of DM on equipment failure rates?",
                options: ["Increases failure rates", "Reduces failure rates", "No impact on failure rates", "Increases the cost of failure"],
                answer: "Reduces failure rates"
            },
            {
                id: 15,
                question: "During the installation phase, DM focuses on:",
                options: ["Making the installation as fast as possible", "Ensuring that the installation is smooth and minimizes future maintenance needs", "Reducing the installation cost", "Maximizing the number of operators"],
                answer: "Ensuring that the installation is smooth and minimizes future maintenance needs"
            },
            {
                id: 16,
                question: "Which of the following is a tool used in Development Management?",
                options: ["Root cause analysis", "FMEA (Failure Modes and Effects Analysis)", "5S", "SMED"],
                answer: "FMEA (Failure Modes and Effects Analysis)"
            },
            {
                id: 17,
                question: "What does DM require from the design team?",
                options: ["Only cost-cutting strategies", "Active participation in equipment selection and design for reliability", "Ignoring operator feedback", "Focus on aesthetics of equipment"],
                answer: "Active participation in equipment selection and design for reliability"
            },
            {
                id: 18,
                question: "DM can help reduce which of the following?",
                options: ["Employee turnover", "Initial equipment failures", "Operator workload", "Material wastage"],
                answer: "Initial equipment failures"
            },
            {
                id: 19,
                question: "What is a critical outcome of applying DM principles to new equipment?",
                options: ["Increased warranty claims", "Reduced operational efficiency", "Increased equipment downtime", "Increased equipment availability"],
                answer: "Increased equipment availability"
            },
            {
                id: 20,
                question: "The major emphasis of DM in the context of Total Productive Maintenance is to:",
                options: ["Improve management processes", "Involve operators and maintenance teams from the beginning", "Reduce the need for training", "Focus on product packaging"],
                answer: "Involve operators and maintenance teams from the beginning"
            },
            {
                id: 21,
                question: "Which of the following is a key DM practice after installation?",
                options: ["Continuous monitoring for performance", "Ignoring operator feedback", "Reducing spare part inventories", "Delay in preventive maintenance"],
                answer: "Continuous monitoring for performance"
            },
            {
                id: 22,
                question: "What does DM help to identify during equipment commissioning?",
                options: ["Unnecessary equipment", "Maintenance issues and improvement opportunities", "High production rates", "Employee training requirements"],
                answer: "Maintenance issues and improvement opportunities"
            },
            {
                id: 23,
                question: "DM aims to design equipment for:",
                options: ["Minimal downtime and high performance", "Reduced installation time", "Minimal energy consumption only", "Simplified production process"],
                answer: "Minimal downtime and high performance"
            },
            {
                id: 24,
                question: "The involvement of operators in DM helps to:",
                options: ["Increase equipment complexity", "Reduce machine understanding", "Improve early detection of potential equipment issues", "Increase breakdown frequency"],
                answer: "Improve early detection of potential equipment issues"
            },
            {
                id: 25,
                question: "Development Management primarily focuses on:",
                options: ["Production efficiency only", "Equipment design, installation, and maintenance", "Employee welfare", "Cost-cutting"],
                answer: "Equipment design, installation, and maintenance"
            },
            {
                id: 26,
                question: "What is an expected outcome of DM for new equipment?",
                options: ["Increased frequency of breakdowns", "Faster obsolescence", "Increased life cycle and improved reliability", "Increased maintenance costs"],
                answer: "Increased life cycle and improved reliability"
            },
            {
                id: 27,
                question: "Which tool is commonly used in Development Management to identify potential failure modes?",
                options: ["Pareto analysis", "5 Whys", "FMEA (Failure Modes and Effects Analysis)", "Fishbone diagram"],
                answer: "FMEA (Failure Modes and Effects Analysis)"
            },
            {
                id: 28,
                question: "What is the role of the maintenance team in Development Management?",
                options: ["Performing corrective maintenance after failure", "Designing equipment", "Participating in equipment selection and initial setup", "Managing employee performance"],
                answer: "Participating in equipment selection and initial setup"
            },
            {
                id: 29,
                question: "One of the goals of DM is to create equipment that is:",
                options: ["Complex and difficult to repair", "Simple to operate and easy to maintain", "Designed for high-speed operation only", "Cheaper to purchase"],
                answer: "Simple to operate and easy to maintain"
            },
            {
                id: 30,
                question: "In the DM pillar, what is the benefit of involving operators during equipment design and installation?",
                options: ["It ensures higher operational costs", "Operators can provide insights that improve reliability and reduce downtime", "It delays the production process", "It makes the equipment more expensive"],
                answer: "Operators can provide insights that improve reliability and reduce downtime"
            }
        ],
        advanced: []
    },
    "5s": {
        basic: [
            {
                id: 1,
                question: "What is the primary goal of 5S?",
                options: ["To reduce waste", "To organize the workplace", "To improve employee morale", "To increase production rates"],
                answer: "To organize the workplace"
            },
            {
                id: 2,
                question: "Which of the following is the first step in the 5S methodology?",
                options: ["Set in Order", "Shine", "Sort", "Standardize"],
                answer: "Sort"
            },
            {
                id: 3,
                question: "What does the 'Sort' step primarily focus on?",
                options: ["Cleaning tools and machines", "Organizing tools in a designated place", "Removing unnecessary items from the workspace", "Creating standardized operating procedures"],
                answer: "Removing unnecessary items from the workspace"
            },
            {
                id: 4,
                question: "Which of the following is a key principle of 'Set in Order'?",
                options: ["Clean all equipment", "Label and arrange tools in a systematic manner", "Develop training programs", "Eliminate redundant tasks"],
                answer: "Label and arrange tools in a systematic manner"
            },
            {
                id: 5,
                question: "In the 'Shine' phase, what is the main task?",
                options: ["Removing unnecessary items", "Cleaning the workplace and equipment", "Establishing work standards", "Sorting materials"],
                answer: "Cleaning the workplace and equipment"
            },
            {
                id: 6,
                question: "What is the primary goal of the 'Standardize' step?",
                options: ["To develop uniform methods and schedules", "To ensure proper cleaning", "To monitor employee performance", "To remove non-essential items"],
                answer: "To develop uniform methods and schedules"
            },
            {
                id: 7,
                question: "The 'Sustain' step focuses on which of the following?",
                options: ["Ensuring the workplace remains clean", "Maintaining the 5S standards consistently over time", "Regularly inspecting tools", "Standardizing work procedures"],
                answer: "Maintaining the 5S standards consistently over time"
            },
            {
                id: 8,
                question: "What is the best way to sustain 5S in the workplace?",
                options: ["Regularly inspect and reinforce standards", "Only implement it for a short period", "Focus on the 'Sort' step only", "Assign a single person to maintain cleanliness"],
                answer: "Regularly inspect and reinforce standards"
            },
            {
                id: 9,
                question: "Which step of 5S is focused on continuous improvement?",
                options: ["Sort", "Set in Order", "Sustain", "Standardize"],
                answer: "Sustain"
            },
            {
                id: 10,
                question: "Which of the following is not part of the 5S methodology?",
                options: ["Sort", "Set in Order", "Sustain", "Standardization"],
                answer: "Standardization (as a standalone term, though closely related to Standardize)"
            },
            {
                id: 11,
                question: "What does the term “Visual Management” refer to in 5S?",
                options: ["Visual representation of work standards", "Sorting unnecessary items based on color", "Using colored labels for sorting", "Visualizing the workplace for cleaning"],
                answer: "Visual representation of work standards"
            },
            {
                id: 12,
                question: "Which of the following is an example of 'Set in Order'?",
                options: ["Labeling shelves for tool storage", "Throwing away unused equipment", "Cleaning the factory floor", "Setting up a schedule for routine checks"],
                answer: "Labeling shelves for tool storage"
            },
            {
                id: 13,
                question: "What should be done with items that are not used frequently in the 'Sort' step?",
                options: ["Leave them in their current location", "Organize them neatly in a separate storage area", "Discard them", "Move them to a different department"],
                answer: "Organize them neatly in a separate storage area"
            },
            {
                id: 14,
                question: "Which of the following is NOT a benefit of 5S?",
                options: ["Increased safety", "Reduced waste", "Improved workplace efficiency", "Increased manufacturing cost"],
                answer: "Increased manufacturing cost"
            },
            {
                id: 15,
                question: "What type of cleaning is performed in the 'Shine' step?",
                options: ["Quick surface cleaning", "Routine monthly cleaning", "Deep cleaning of equipment and tools", "Cleaning only the areas visible to visitors"],
                answer: "Deep cleaning of equipment and tools"
            },
            {
                id: 16,
                question: "Who is responsible for maintaining 5S standards?",
                options: ["Only top management", "The supervisor or manager", "All employees in the organization", "External auditors"],
                answer: "All employees in the organization"
            },
            {
                id: 17,
                question: "What does the 'Standardize' step help to eliminate?",
                options: ["Workplace clutter", "Variations in work processes", "Misplaced tools", "Excessive paperwork"],
                answer: "Variations in work processes"
            },
            {
                id: 18,
                question: "How is 'Standardize' implemented in the 5S process?",
                options: ["By creating a list of tasks to follow", "By setting up a timetable for cleaning", "By writing procedures and checklists", "By reducing the number of workers"],
                answer: "By writing procedures and checklists"
            },
            {
                id: 19,
                question: "What is the purpose of using red tags in 5S?",
                options: ["To sort items that are not required in the workplace", "To label tools that need to be cleaned", "To mark the most important tasks", "To identify hazardous materials"],
                answer: "To sort items that are not required in the workplace"
            },
            {
                id: 20,
                question: "Which of the following is a good example of 'Sustain'?",
                options: ["Implementing a new tool for the workplace", "Regular audits of the workplace to ensure standards are maintained", "Organizing materials on shelves", "Conducting employee training sessions"],
                answer: "Regular audits of the workplace to ensure standards are maintained"
            },
            {
                id: 21,
                question: "Which of the following is a key component of 'Set in Order'?",
                options: ["Cleaning all equipment", "Organizing tools and equipment so they are easily accessible", "Throwing away unused tools", "Developing a new cleaning schedule"],
                answer: "Organizing tools and equipment so they are easily accessible"
            },
            {
                id: 22,
                question: "What is the role of management in the 5S methodology?",
                options: ["To clean the workplace regularly", "To set up procedures for the 5S process", "To ensure employees follow 5S practices", "To sort and remove unnecessary items"],
                answer: "To ensure employees follow 5S practices"
            },
            {
                id: 23,
                question: "What should be done during a 5S audit?",
                options: ["Inspect the cleanliness of the workplace", "Check if tools are in their correct locations", "Ensure all employees are trained on 5S", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 24,
                question: "What is the outcome of not sustaining 5S?",
                options: ["Improved employee performance", "Reduced waste", "A messy and unsafe work environment", "Increased production"],
                answer: "A messy and unsafe work environment"
            },
            {
                id: 25,
                question: "Which phase of 5S requires regular checks and adjustments to maintain order?",
                options: ["Sort", "Set in Order", "Sustain", "Shine"],
                answer: "Sustain"
            },
            {
                id: 26,
                question: "Why is 'Set in Order' essential for the workplace?",
                options: ["To reduce employee stress", "To ensure that tools are easy to find and access", "To develop new work procedures", "To discard old equipment"],
                answer: "To ensure that tools are easy to find and access"
            },
            {
                id: 27,
                question: "What does 'Shine' directly contribute to in the 5S process?",
                options: ["A reduction in workplace accidents", "Lower energy consumption", "Better customer satisfaction", "Reduced inventory levels"],
                answer: "A reduction in workplace accidents"
            },
            {
                id: 28,
                question: "What is the first action in the 'Sort' phase?",
                options: ["Organize tools by size", "Dispose of unused items", "Create a visual management plan", "Label tools and materials"],
                answer: "Dispose of unused items"
            },
            {
                id: 29,
                question: "What is the main aim of the 'Sustain' phase?",
                options: ["To ensure the workplace stays clean", "To implement standardized work methods", "To create a continuous improvement culture", "To establish safety protocols"],
                answer: "To create a continuous improvement culture"
            },
            {
                id: 30,
                question: "How does 5S contribute to Total Productive Maintenance (TPM)?",
                options: ["By focusing on equipment repairs", "By improving equipment reliability and reducing downtime", "By increasing employee turnover", "By focusing only on cleaning"],
                answer: "By improving equipment reliability and reducing downtime"
            },
        ],
        advanced: []
    },
    "e&t-pillar": {
        basic: [
            {
                id: 1,
                question: "What is the main objective of the Education and Training (E&T) Pillar in TPM?",
                options: ["Increase production output", "Improve equipment reliability", "Develop employee skills", "Minimize downtime"],
                answer: "Develop employee skills"
            },
            {
                id: 2,
                question: "TPM focuses on the involvement of which group in the Education and Training process?",
                options: ["Management only", "Production workers only", "All employees", "External consultants"],
                answer: "All employees"
            },
            {
                id: 3,
                question: "Which of the following is a key benefit of the Education and Training Pillar?",
                options: ["Reduced waste in production", "Improved workforce competency", "Higher equipment purchase", "Decreased equipment efficiency"],
                answer: "Improved workforce competency"
            },
            {
                id: 4,
                question: "The primary aim of the Education and Training Pillar is to:",
                options: ["Train operators for maintenance tasks", "Enhance equipment and production system knowledge", "Reduce production costs", "Increase the number of employees"],
                answer: "Enhance equipment and production system knowledge"
            },
            {
                id: 5,
                question: "The focus of training in TPM should be:",
                options: ["Operational skills only", "Both operational and maintenance skills", "Administrative skills only", "Financial management skills"],
                answer: "Both operational and maintenance skills"
            },
            {
                id: 6,
                question: "What should be the frequency of training under TPM?",
                options: ["Once a year", "When new machines are introduced", "Regularly based on needs", "Never"],
                answer: "Regularly based on needs"
            },
            {
                id: 7,
                question: "Which of the following is a major component of the TPM Education and Training Pillar?",
                options: ["Work schedule planning", "Safety training", "Production scheduling", "Sales training"],
                answer: "Safety training"
            },
            {
                id: 8,
                question: "In TPM, training is usually provided to:",
                options: ["Managers and supervisors only", "Workers directly involved in production", "Maintenance teams only", "Both workers and management"],
                answer: "Both workers and management"
            },
            {
                id: 9,
                question: "Which of the following types of training is crucial in the TPM Education and Training Pillar?",
                options: ["Total equipment effectiveness (OEE)", "Supervisory and leadership skills", "Cross-functional training", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 10,
                question: "TPM training helps employees to:",
                options: ["Improve productivity and reduce breakdowns", "Avoid safety regulations", "Only focus on personal development", "Increase company profit directly"],
                answer: "Improve productivity and reduce breakdowns"
            },
            {
                id: 11,
                question: "What should be the approach for effective TPM training?",
                options: ["Short-term training sessions", "On-the-job, continuous learning", "Only classroom training", "Long seminars with external experts"],
                answer: "On-the-job, continuous learning"
            },
            {
                id: 12,
                question: "What is the role of the operator in TPM training?",
                options: ["To observe maintenance staff only", "To perform only supervisory tasks", "To perform autonomous maintenance tasks", "To report failures only"],
                answer: "To perform autonomous maintenance tasks"
            },
            {
                id: 13,
                question: "The Education and Training Pillar helps in developing a culture of:",
                options: ["Blame and punishment", "Continuous improvement", "Competition between employees", "Ignorance towards machinery"],
                answer: "Continuous improvement"
            },
            {
                id: 14,
                question: "One of the major aims of TPM education and training is to:",
                options: ["Reduce the number of training programs", "Increase equipment failure rates", "Empower employees to perform maintenance tasks", "Reduce employee involvement in processes"],
                answer: "Empower employees to perform maintenance tasks"
            },
            {
                id: 15,
                question: "Which of the following methods is commonly used for TPM training?",
                options: ["Group discussions", "On-the-job training", "External workshops only", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 16,
                question: "Which group of employees plays a key role in identifying training needs in TPM?",
                options: ["Supervisors", "Management", "Operators and maintenance staff", "HR department"],
                answer: "Operators and maintenance staff"
            },
            {
                id: 17,
                question: "What does TPM emphasize about training employees?",
                options: ["One-time training for each employee", "Continuous skill development", "Training only on new technologies", "Only senior employees should be trained"],
                answer: "Continuous skill development"
            },
            {
                id: 18,
                question: "Which of the following is NOT a responsibility of TPM education and training?",
                options: ["Building employee ownership of machines", "Teaching new equipment installation only", "Developing team-based problem-solving skills", "Ensuring safety standards are met"],
                answer: "Teaching new equipment installation only"
            },
            {
                id: 19,
                question: "The E&T Pillar supports the concept of:",
                options: ["Centralized decision-making", "Autonomous maintenance by employees", "Reducing training costs", "Limited knowledge sharing"],
                answer: "Autonomous maintenance by employees"
            },
            {
                id: 20,
                question: "The goal of training in TPM is to:",
                options: ["Increase downtime", "Foster a learning organization", "Decrease productivity", "Focus only on machine repair"],
                answer: "Foster a learning organization"
            },
            {
                id: 21,
                question: "Which of the following is a key principle in TPM’s Education and Training?",
                options: ["Dependence on external experts for training", "Knowledge sharing among all employees", "Isolating workers from machine-related problems", "Focusing on managerial staff only"],
                answer: "Knowledge sharing among all employees"
            },
            {
                id: 22,
                question: "What is the role of supervisors in the Education and Training pillar?",
                options: ["To monitor equipment performance only", "To train employees in maintenance and operations", "To handle production planning exclusively", "To perform quality inspections only"],
                answer: "To train employees in maintenance and operations"
            },
            {
                id: 23,
                question: "Which of the following is a key feature of TPM’s education system?",
                options: ["Outsourcing training to external firms", "Training employees for specific tasks only", "Providing training at various levels for comprehensive skill development", "Avoiding practical experience"],
                answer: "Providing training at various levels for comprehensive skill development"
            },
            {
                id: 24,
                question: "What is one expected outcome of the Education and Training pillar?",
                options: ["Increased dependency on external experts", "Improved employee competency and confidence", "Higher employee turnover", "Reduced involvement of operators in maintenance"],
                answer: "Improved employee competency and confidence"
            },
            {
                id: 25,
                question: "What should the training materials in TPM focus on?",
                options: ["Only theoretical knowledge", "Practical and theoretical knowledge", "Entertainment-based content", "Only company history"],
                answer: "Practical and theoretical knowledge"
            },
            {
                id: 26,
                question: "Which type of training is often conducted as part of the TPM program?",
                options: ["Technical skills and problem-solving training", "Only equipment repair training", "Financial management training", "Corporate policy training"],
                answer: "Technical skills and problem-solving training"
            },
            {
                id: 27,
                question: "Who should be involved in evaluating the effectiveness of TPM training?",
                options: ["Only managers", "Trainers only", "Operators and management together", "External auditors"],
                answer: "Operators and management together"
            },
            {
                id: 28,
                question: "In TPM, the goal of educating employees is to:",
                options: ["Keep the workforce passive", "Promote teamwork and proactive problem-solving", "Limit employee responsibility for machinery", "Focus on individual performance"],
                answer: "Promote teamwork and proactive problem-solving"
            },
            {
                id: 29,
                question: "What should be the focus of the Education and Training pillar in TPM?",
                options: ["To provide standard, one-size-fits-all training", "To tailor training to meet specific needs of workers and equipment", "To focus only on high-level skills", "To delay training until problems occur"],
                answer: "To tailor training to meet specific needs of workers and equipment"
            },
            {
                id: 30,
                question: "Which of the following is a key outcome expected from TPMs education and training initiatives?",
                options: ["Reduced equipment downtime", "Higher costs", "Increased complexity in training programs", "Reduced employee involvement"],
                answer: "Reduced equipment downtime"
            }
        ],
        advance: []
    },
    "jh-pillar": {
        basic: [
            {
                id: 1,
                question: "What does 'Jishu Hozen' mean in the context of TPM?",
                options: ["Self-Maintenance", "Preventive Maintenance", "Autonomous Maintenance", "Breakdown Maintenance"],
                answer: "Autonomous Maintenance"
            },
            {
                id: 2,
                question: "What is the main objective of Jishu Hozen?",
                options: ["Eliminate equipment", "Reduce human involvement", "Empower operators to maintain equipment", "Increase production speed"],
                answer: "Empower operators to maintain equipment"
            },
            {
                id: 3,
                question: "How many steps are there in the Jishu Hozen process?",
                options: ["5", "7", "8", "10"],
                answer: "7"
            },
            {
                id: 4,
                question: "The first step of Jishu Hozen focuses on:",
                options: ["Eliminating contamination sources", "Establishing cleaning and inspection standards", "Initial cleaning", "Autonomous checks"],
                answer: "Initial cleaning"
            },
            {
                id: 5,
                question: "What is the Japanese term for 'Initial Cleaning'?",
                options: ["Hinshitsu", "Seiso", "Kaizen", "Kikai"],
                answer: "Seiso"
            },
            {
                id: 6,
                question: "What is the purpose of Initial Cleaning?",
                options: ["To repaint the machines", "To clean and inspect equipment to reveal abnormalities", "To increase production speed", "To prepare for lubrication"],
                answer: "To clean and inspect equipment to reveal abnormalities"
            },
            {
                id: 7,
                question: "Which of these is NOT a key activity in Jishu Hozen?",
                options: ["Preventive maintenance", "Cleaning", "Lubrication", "Inspection"],
                answer: "Preventive maintenance"
            },
            {
                id: 8,
                question: "Which step of Jishu Hozen involves setting up standards for cleaning and inspection?",
                options: ["Step 2", "Step 3", "Step 5", "Step 7"],
                answer: "Step 3"
            },
            {
                id: 9,
                question: "Which tool is commonly used for problem identification in Jishu Hozen?",
                options: ["Fishbone Diagram", "Scatter Diagram", "Pareto Chart", "Gantt Chart"],
                answer: "Fishbone Diagram"
            },
            {
                id: 10,
                question: "In Jishu Hozen, abnormalities detected during cleaning are often marked with:",
                options: ["Red and white tape", "Blue paint", "Tags or stickers", "None of the above"],
                answer: "Tags or stickers"
            },
            {
                id: 11,
                question: "What is Step 4 of Jishu Hozen?",
                options: ["Conducting kaizen", "General inspections", "Developing operator skills", "Eliminating root causes of contamination"],
                answer: "General inspections"
            },
            {
                id: 12,
                question: "In which Jishu Hozen step is lubrication management introduced?",
                options: ["Step 1", "Step 4", "Step 5", "Step 7"],
                answer: "Step 5"
            },
            {
                id: 13,
                question: "What is a key benefit of Jishu Hozen?",
                options: ["Improved breakdown rates", "Reduced operator involvement", "Increased reliance on maintenance teams", "Quick equipment obsolescence"],
                answer: "Improved breakdown rates"
            },
            {
                id: 14,
                question: "What is the Japanese term for 'Daily Maintenance'?",
                options: ["Nichijo Hozen", "Kaizen", "Seiri", "Jishu Hozen"],
                answer: "Nichijo Hozen"
            },
            {
                id: 15,
                question: "What is Step 6 of Jishu Hozen?",
                options: ["Empowering operators", "Standardization", "Eliminate forced deterioration", "Autonomous maintenance"],
                answer: "Standardization"
            },
            {
                id: 16,
                question: "Which principle is foundational to Jishu Hozen?",
                options: ["Operators are responsible for their machines", "All maintenance is outsourced", "Production targets are secondary", "Maintenance staff conduct regular inspections"],
                answer: "Operators are responsible for their machines"
            },
            {
                id: 17,
                question: "What does the 7th step of Jishu Hozen emphasize?",
                options: ["Improving equipment performance", "Continuous Improvement", "Training advanced operators", "Operator ownership"],
                answer: "Operator ownership"
            },
            {
                id: 18,
                question: "What kind of abnormalities are identified during Jishu Hozen?",
                options: ["Surface-level issues only", "Both visible and hidden issues", "Equipment upgrades", "Software defects only"],
                answer: "Both visible and hidden issues"
            },
            {
                id: 19,
                question: "What is a common tool used to analyze repeated abnormalities in Jishu Hozen?",
                options: ["5 Whys", "Kanban", "Lean Analysis", "Control Charts"],
                answer: "5 Whys"
            },
            {
                id: 20,
                question: "What does 'Hinshitsu Hozen' refer to in TPM?",
                options: ["Quality Maintenance", "Productivity Maintenance", "Autonomous Maintenance", "Breakdown Reduction"],
                answer: "Quality Maintenance"
            },
            {
                id: 21,
                question: "The concept of 'Clean to Inspect' belongs to which Jishu Hozen step?",
                options: ["Step 2", "Step 3", "Step 1", "Step 6"],
                answer: "Step 1"
            },
            {
                id: 22,
                question: "Who leads Jishu Hozen activities?",
                options: ["Maintenance teams", "Operators", "Quality control engineers", "Management only"],
                answer: "Operators"
            },
            {
                id: 23,
                question: "In Jishu Hozen, what does the phrase 'restore the machine to optimal conditions' mean?",
                options: ["Replacing old machines", "Performing only major repairs", "Cleaning, tightening, and lubricating equipment", "Upgrading technology"],
                answer: "Cleaning, tightening, and lubricating equipment"
            },
            {
                id: 24,
                question: "Why is training operators critical in Jishu Hozen?",
                options: ["To increase output", "To make them dependent on maintenance teams", "To build their maintenance capability", "To reduce costs"],
                answer: "To build their maintenance capability"
            },
            {
                id: 25,
                question: "What is NOT a focus of Jishu Hozen?",
                options: ["Equipment cleanliness", "Operator involvement", "Specialized technical repairs", "Routine maintenance"],
                answer: "Specialized technical repairs"
            },
            {
                id: 26,
                question: "What is the result of proper implementation of Jishu Hozen?",
                options: ["Reduced equipment lifespan", "Increased downtime", "Improved equipment reliability", "Higher repair costs"],
                answer: "Improved equipment reliability"
            },
            {
                id: 27,
                question: "'Early detection of abnormalities' aligns with which Jishu Hozen principle?",
                options: ["Maintenance escalation", "Preventive inspection", "Ownership by operators", "Quick-fix repairs"],
                answer: "Ownership by operators"
            },
            {
                id: 28,
                question: "What is the key characteristic of Step 5: 'Autonomous Maintenance'?",
                options: ["Elimination of equipment operators", "Systematic scheduling of breakdowns", "Establishing operator routines for equipment care", "Replacing technical teams entirely"],
                answer: "Establishing operator routines for equipment care"
            },
            {
                id: 29,
                question: "What is the Japanese word for 'Standards'?",
                options: ["Seiketsu", "Hyojun", "Kaizen", "Jidoka"],
                answer: "Hyojun"
            },
            {
                id: 30,
                question: "What happens after the completion of the 7 steps of Jishu Hozen?",
                options: ["Operators take full ownership of maintenance", "Machines are no longer maintained", "Maintenance teams become redundant", "Equipment deterioration accelerates"],
                answer: "Operators take full ownership of maintenance"
            }
        ],
        advance: []
    },
    "kaizen-&-opl": {
        basic: [
            {
                id: 1,
                question: "What does Kaizen mean?",
                options: ["Innovation", "Continuous Improvement", "Mass Production", "Zero Defects"],
                answer: "Continuous Improvement"
            },
            {
                id: 2,
                question: "Which of the following is a key principle of Kaizen?",
                options: ["Reduce cost by cutting workforce", "Incremental improvements", "Focus on large changes only", "Increase capital expenditure"],
                answer: "Incremental improvements"
            },
            {
                id: 3,
                question: "Which of these activities is NOT part of Kaizen?",
                options: ["Standardizing work", "Encouraging employee participation", "Continuous problem-solving", "Random decisions"],
                answer: "Random decisions"
            },
            {
                id: 4,
                question: "Kaizen emphasizes on improving which of the following?",
                options: ["Cost-cutting", "Quality", "Employee engagement", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 5,
                question: "In Kaizen, who is typically responsible for the improvement process?",
                options: ["Only management", "Only workers", "Both workers and management", "External consultants"],
                answer: "Both workers and management"
            },
            {
                id: 6,
                question: "Which of the following is a key tool used in Kaizen?",
                options: ["Pareto Chart", "Gantt Chart", "SWOT Analysis", "Fishbone Diagram"],
                answer: "Pareto Chart"
            },
            {
                id: 7,
                question: "Which of the following is a benefit of Kaizen?",
                options: ["Increased waste", "Decreased worker morale", "Improved efficiency", "Increased operational downtime"],
                answer: "Improved efficiency"
            },
            {
                id: 8,
                question: "What is the role of employees in a Kaizen event?",
                options: ["Take no responsibility", "Suggest improvements and implement them", "Only follow instructions", "Analyze financial reports"],
                answer: "Suggest improvements and implement them"
            },
            {
                id: 9,
                question: "The Kaizen cycle is often referred to as:",
                options: ["PDCA (Plan-Do-Check-Act)", "PDSA (Plan-Do-Study-Act)", "DMAIC (Define, Measure, Analyze, Improve, Control)", "SWOT (Strengths, Weaknesses, Opportunities, Threats)"],
                answer: "PDCA (Plan-Do-Check-Act)"
            },
            {
                id: 10,
                question: "Which of the following is true about Kaizen in a manufacturing environment?",
                options: ["It focuses only on large-scale machinery improvements", "It involves continuous, small-scale improvements", "It eliminates all production workers", "It solely targets reducing labor costs"],
                answer: "It involves continuous, small-scale improvements"
            },
            {
                id: 11,
                question: "In Kaizen, who should be involved in identifying improvement opportunities?",
                options: ["Only senior management", "Only engineers", "Only operators and workers", "Everyone in the organization"],
                answer: "Everyone in the organization"
            },
            {
                id: 12,
                question: "Which of these is a common Kaizen tool for identifying problems?",
                options: ["Fishbone Diagram", "Brainstorming", "Process Mapping", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 13,
                question: "What is a Kaizen event?",
                options: ["A one-time investment in technology", "A long-term strategic plan", "A focused, short-term effort to improve a process", "An advertising campaign"],
                answer: "A focused, short-term effort to improve a process"
            },
            {
                id: 14,
                question: "Which is a benefit of involving employees in Kaizen?",
                options: ["Employees become resistant to change", "Greater sense of ownership and motivation", "Reduction in training costs", "Employees perform minimal work"],
                answer: "Greater sense of ownership and motivation"
            },
            {
                id: 15,
                question: "The results of a Kaizen event should be:",
                options: ["Only reviewed by top management", "Applied consistently across the organization", "Documented but not communicated", "Ignored if no significant results are found"],
                answer: "Applied consistently across the organization"
            },
            {
                id: 16,
                question: "What is the primary purpose of an OPL (One Point Lesson)?",
                options: ["To train employees on complex concepts", "To address one specific issue or topic clearly and concisely", "To evaluate employee performance", "To document management decisions"],
                answer: "To address one specific issue or topic clearly and concisely"
            },
            {
                id: 17,
                question: "An OPL is typically used for:",
                options: ["Detailed technical training", "Teaching workers a specific skill or procedure", "Reporting financial outcomes", "Advertising products"],
                answer: "Teaching workers a specific skill or procedure"
            },
            {
                id: 18,
                question: "Which of the following is an advantage of OPL?",
                options: ["It is a time-consuming process", "It reduces communication between workers", "It provides concise and effective learning", "It requires complex jargon and technical details"],
                answer: "It provides concise and effective learning"
            },
            {
                id: 19,
                question: "What is a typical feature of an OPL?",
                options: ["Long paragraphs of text", "Use of simple language, visuals, and step-by-step instructions", "Complex diagrams", "Multiple learning points in one document"],
                answer: "Use of simple language, visuals, and step-by-step instructions"
            },
            {
                id: 20,
                question: "How does OPL benefit the workforce?",
                options: ["By offering theoretical knowledge only", "By simplifying complex processes and improving understanding", "By focusing on long-term strategic goals", "By promoting only formal classroom training"],
                answer: "By simplifying complex processes and improving understanding"
            },
            {
                id: 21,
                question: "Who is primarily responsible for creating an OPL?",
                options: ["Only the HR department", "Supervisors and experts in the specific process", "The marketing department", "External consultants"],
                answer: "Supervisors and experts in the specific process"
            },
            {
                id: 22,
                question: "When should OPLs be updated?",
                options: ["When there are no changes in the process", "Whenever there are changes or improvements in the process", "Once every year", "Only when new equipment is purchased"],
                answer: "Whenever there are changes or improvements in the process"
            },
            {
                id: 23,
                question: "Which of the following is NOT a typical format for an OPL?",
                options: ["A poster or a handout", "A short, instructional video", "A lengthy report", "A visual, step-by-step guide"],
                answer: "A lengthy report"
            },
            {
                id: 24,
                question: "What should an OPL focus on?",
                options: ["Theoretical concepts", "Step-by-step procedures for specific tasks", "General company policies", "High-level goals and objectives"],
                answer: "Step-by-step procedures for specific tasks"
            },
            {
                id: 25,
                question: "Which of the following is an example of a topic suitable for an OPL?",
                options: ["Company-wide financial strategy", "Step-by-step procedure for using a new machine", "Team-building exercises", "Corporate vision and mission"],
                answer: "Step-by-step procedure for using a new machine"
            },
            {
                id: 26,
                question: "What is the typical length of an OPL?",
                options: ["Several pages", "One page or less", "A long document", "A multi-chapter manual"],
                answer: "One page or less"
            },
            {
                id: 27,
                question: "What type of feedback is typically given after an OPL training?",
                options: ["A detailed report", "Instant feedback on the task learned", "No feedback, just a certificate", "A lengthy performance evaluation"],
                answer: "Instant feedback on the task learned"
            },
            {
                id: 28,
                question: "What makes an OPL effective?",
                options: ["Complex language and technical terms", "Clear, simple instructions with visuals", "Large amounts of written content", "Non-specific content"],
                answer: "Clear, simple instructions with visuals"
            },
            {
                id: 29,
                question: "Who benefits from OPLs?",
                options: ["Only managers", "Only workers in specific departments", "All employees who need to perform specific tasks", "Only external trainers"],
                answer: "All employees who need to perform specific tasks"
            },
            {
                id: 30,
                question: "How do OPLs contribute to TPM?",
                options: ["By providing general information", "By supporting continuous training and standardizing work procedures", "By focusing only on maintenance tasks", "By promoting employee performance evaluations"],
                answer: "By supporting continuous training and standardizing work procedures"
            }
        ],
        advance: []
    },
    "kk-pillar": {
        basic: [
            {
                id: 1,
                question: "What does 'Kobetsu Kaizen' mean in TPM?",
                options: ["Individual-focused improvement", "Continuous improvement", "Teamwork improvement", "Zero defect manufacturing"],
                answer: "Individual-focused improvement"
            },
            {
                id: 2,
                question: "Which of the following is the primary goal of Kobetsu Kaizen?",
                options: ["Maximizing production speed", "Eliminating losses and waste", "Increasing inventory", "Reducing workforce"],
                answer: "Eliminating losses and waste"
            },
            {
                id: 3,
                question: "How many major losses does Kobetsu Kaizen address in TPM?",
                options: ["4", "6", "8", "12"],
                answer: "8"
            },
            {
                id: 4,
                question: "Which loss is NOT one of the 8 major losses in TPM?",
                options: ["Equipment failure", "Idling and minor stoppages", "Excess raw materials", "Defects in process"],
                answer: "Excess raw materials"
            },
            {
                id: 5,
                question: "What tool is commonly used in Kobetsu Kaizen to identify root causes of issues?",
                options: ["Pareto Chart", "Fishbone Diagram", "Gantt Chart", "PERT Diagram"],
                answer: "Fishbone Diagram"
            },
            {
                id: 6,
                question: "Which methodology is often integrated with Kobetsu Kaizen for loss reduction?",
                options: ["Six Sigma", "Lean Manufacturing", "ISO Certification", "Just-in-Time"],
                answer: "Lean Manufacturing"
            },
            {
                id: 7,
                question: "What is the ultimate aim of Kobetsu Kaizen?",
                options: ["Achieving zero defects, zero breakdowns, and zero accidents", "Hiring more skilled workers", "Increasing capital expenditure", "Shortening working hours"],
                answer: "Achieving zero defects, zero breakdowns, and zero accidents"
            },
            {
                id: 8,
                question: "What is the first step in a Kobetsu Kaizen activity?",
                options: ["Conducting training sessions", "Identifying the problem", "Implementing solutions", "Monitoring results"],
                answer: "Identifying the problem"
            },
            {
                id: 9,
                question: "Which loss relates to reduced production speed?",
                options: ["Setup and adjustment loss", "Reduced speed loss", "Process defect loss", "Minor stoppages loss"],
                answer: "Reduced speed loss"
            },
            {
                id: 10,
                question: "What is 'Planned Maintenance Loss'?",
                options: ["Downtime due to planned maintenance activities", "Loss from emergency breakdowns", "Defect loss in spare parts", "Time spent on employee training"],
                answer: "Downtime due to planned maintenance activities"
            },
            {
                id: 11,
                question: "Which tool is commonly used to measure effectiveness in Kobetsu Kaizen?",
                options: ["Overall Equipment Effectiveness (OEE)", "Return on Investment (ROI)", "Key Performance Indicators (KPI)", "Statistical Process Control (SPC)"],
                answer: "Overall Equipment Effectiveness (OEE)"
            },
            {
                id: 12,
                question: "Which loss is associated with tool breakage?",
                options: ["Process defect loss", "Breakdown loss", "Reduced speed loss", "Rework loss"],
                answer: "Breakdown loss"
            },
            {
                id: 13,
                question: "What is the meaning of 'Kaizen'?",
                options: ["Big changes", "Continuous improvement", "Daily production targets", "Worker safety programs"],
                answer: "Continuous improvement"
            },
            {
                id: 14,
                question: "What does 'MUDA' refer to in Kobetsu Kaizen?",
                options: ["Waste", "Efficiency", "Profit", "Labor"],
                answer: "Waste"
            },
            {
                id: 15,
                question: "What is the '5 Whys' technique used for?",
                options: ["Identifying team leaders", "Root cause analysis", "Scheduling tasks", "Measuring productivity"],
                answer: "Root cause analysis"
            },
            {
                id: 16,
                question: "Kobetsu Kaizen promotes the use of which team approach?",
                options: ["Cross-functional teams", "Individual brainstorming", "Department-specific groups", "Manager-led audits"],
                answer: "Cross-functional teams"
            },
            {
                id: 17,
                question: "Which loss is caused by poor startup conditions?",
                options: ["Startup loss", "Equipment failure loss", "Reduced speed loss", "Setup loss"],
                answer: "Startup loss"
            },
            {
                id: 18,
                question: "Which of these tools is a visual management tool in Kobetsu Kaizen?",
                options: ["Gantt Chart", "Visual Display Boards", "Control Charts", "PERT Analysis"],
                answer: "Visual Display Boards"
            },
            {
                id: 19,
                question: "What does 'OEE' stand for?",
                options: ["Overall Equipment Efficiency", "Overall Energy Efficiency", "Overall Equipment Effectiveness", "Overall Employee Effectiveness"],
                answer: "Overall Equipment Effectiveness"
            },
            {
                id: 20,
                question: "Which loss focuses on scrap and defects?",
                options: ["Quality defect loss", "Process loss", "Idling loss", "Operator loss"],
                answer: "Quality defect loss"
            },
            {
                id: 21,
                question: "What does 'Poka-Yoke' aim to achieve?",
                options: ["Simplify maintenance", "Eliminate human errors", "Speed up production", "Reduce setup times"],
                answer: "Eliminate human errors"
            },
            {
                id: 22,
                question: "How does Kobetsu Kaizen view small improvements?",
                options: ["As insignificant", "As a waste of resources", "As the foundation for significant change", "As unnecessary"],
                answer: "As the foundation for significant change"
            },
            {
                id: 23,
                question: "Which of the following is an outcome of Kobetsu Kaizen?",
                options: ["Increased inventory levels", "Reduced productivity", "Improved asset utilization", "Increased maintenance costs"],
                answer: "Improved asset utilization"
            },
            {
                id: 24,
                question: "What is the role of management in Kobetsu Kaizen?",
                options: ["Monitoring employees strictly", "Empowering teams and providing resources", "Limiting decision-making to executives", "Reducing communication"],
                answer: "Empowering teams and providing resources"
            },
            {
                id: 25,
                question: "Which of these is NOT a Kobetsu Kaizen tool?",
                options: ["5S", "5 Whys", "Fishbone Diagram", "Corporate Policy Review"],
                answer: "Corporate Policy Review"
            },
            {
                id: 26,
                question: "What is the main benefit of loss mapping?",
                options: ["Tracking profits", "Identifying areas of inefficiency", "Reducing headcount", "Creating marketing strategies"],
                answer: "Identifying areas of inefficiency"
            },
            {
                id: 27,
                question: "What kind of mindset does Kobetsu Kaizen require?",
                options: ["Fixed mindset", "Growth mindset", "Cost-cutting mindset", "Sales-focused mindset"],
                answer: "Growth mindset"
            },
            {
                id: 28,
                question: "Which type of loss is eliminated by reducing changeover times?",
                options: ["Minor stoppages loss", "Setup and adjustment loss", "Defect loss", "Reduced speed loss"],
                answer: "Setup and adjustment loss"
            },
            {
                id: 29,
                question: "How does Kobetsu Kaizen handle repetitive problems?",
                options: ["By temporary fixes", "By increasing equipment monitoring", "By using root cause analysis to eliminate them", "By outsourcing maintenance tasks"],
                answer: "By using root cause analysis to eliminate them"
            },
            {
                id: 30,
                question: "What does the term 'autonomous maintenance' relate to in TPM?",
                options: ["Operators taking ownership of their equipment", "Outsourcing maintenance activities", "Hiring maintenance specialists", "Using AI for maintenance tasks"],
                answer: "Operators taking ownership of their equipment"
            }
        ],
        advanced: []
    },
    "otpm-pillar": {
        basic: [
            {
                id: 1,
                question: "What does OTPM stand for in TPM?",
                options: ["Office Total Production Management", "Office Total Performance Management", "Office Total Productive Maintenance", "Office Technology Process Management"],
                answer: "Office Total Productive Maintenance"
            },
            {
                id: 2,
                question: "What is the primary goal of OTPM?",
                options: ["To increase office productivity", "To maintain the office equipment", "To reduce waste and increase efficiency in office functions", "To promote employee engagement"],
                answer: "To reduce waste and increase efficiency in office functions"
            },
            {
                id: 3,
                question: "Which of the following is NOT a benefit of OTPM?",
                options: ["Improved office environment", "Reduced office downtime", "Increased machine uptime", "Improved collaboration and communication"],
                answer: "Increased machine uptime"
            },
            {
                id: 4,
                question: "OTPM helps in the improvement of which office-related function?",
                options: ["Equipment maintenance", "Administrative processes", "Physical plant management", "Maintenance of production lines"],
                answer: "Administrative processes"
            },
            {
                id: 5,
                question: "Which tool is commonly used in OTPM for identifying waste in office activities?",
                options: ["5S", "Kaizen", "Gemba Walk", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 6,
                question: "What is a key feature of the OTPM pillar?",
                options: ["Employee involvement in maintenance", "Focus on reducing office inventory", "Improved office layout for better space utilization", "Enhanced IT system for monitoring"],
                answer: "Employee involvement in maintenance"
            },
            {
                id: 7,
                question: "Which of the following activities is typically included in OTPM?",
                options: ["Document management improvement", "Employee time tracking", "Reducing waiting times in processes", "Both A and C"],
                answer: "Both A and C"
            },
            {
                id: 8,
                question: "The core objective of OTPM is to reduce which of the following?",
                options: ["Machine failures", "Administrative delays and inefficiencies", "Equipment costs", "Employee turnover"],
                answer: "Administrative delays and inefficiencies"
            },
            {
                id: 9,
                question: "What does 5S stand for in the OTPM context?",
                options: ["Sort, Set in order, Shine, Standardize, Sustain", "Sort, Share, Simplify, Sustain, Standardize", "Set, Shine, Standardize, Simplify, Sustain", "Sort, Set in order, Save, Shine, Sustain"],
                answer: "Sort, Set in order, Shine, Standardize, Sustain"
            },
            {
                id: 10,
                question: "Which of the following is an example of a TPM activity in an office setting?",
                options: ["Preventive maintenance of photocopiers", "Staff training on time management", "Installing automated lighting systems", "Installing new machinery"],
                answer: "Preventive maintenance of photocopiers"
            },
            {
                id: 11,
                question: "What is a Gemba Walk in OTPM?",
                options: ["A tool for analyzing office productivity", "A walk to identify waste and inefficiencies in office processes", "A process to clean the office space", "A training session for office workers"],
                answer: "A walk to identify waste and inefficiencies in office processes"
            },
            {
                id: 12,
                question: "In OTPM, the term 'office equipment maintenance' refers to the upkeep of which of the following?",
                options: ["Computers and printers", "Office furniture", "Office lighting", "All of the above"],
                answer: "Computers and printers"
            },
            {
                id: 13,
                question: "One of the key goals of OTPM is to eliminate which type of waste in office operations?",
                options: ["Material waste", "Motion waste", "Time waste", "Employee waste"],
                answer: "Time waste"
            },
            {
                id: 14,
                question: "Which of the following would be a typical outcome of implementing OTPM?",
                options: ["Decreased employee engagement", "Reduced operational costs and increased productivity", "Increased downtime in office processes", "Increased errors in administrative work"],
                answer: "Reduced operational costs and increased productivity"
            },
            {
                id: 15,
                question: "Which TPM tool can be used to reduce waste in office paperwork?",
                options: ["Jidoka", "SMED", "5S", "TPM audit"],
                answer: "5S"
            },
            {
                id: 16,
                question: "TPM in the office focuses on improving which of the following?",
                options: ["Equipment efficiency", "Human resource management", "Office workflow and system processes", "Supply chain management"],
                answer: "Office workflow and system processes"
            },
            {
                id: 17,
                question: "Who is responsible for carrying out OTPM activities?",
                options: ["Only management", "Only maintenance staff", "All office employees", "External consultants"],
                answer: "All office employees"
            },
            {
                id: 18,
                question: "What is the primary tool used to identify and eliminate waste in office environments?",
                options: ["Visual management", "Standardized work", "Kaizen events", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 19,
                question: "Which of the following best describes the impact of OTPM on employee morale?",
                options: ["Decreases employee engagement", "Has no effect on morale", "Increases employee involvement and job satisfaction", "Increases frustration among employees"],
                answer: "Increases employee involvement and job satisfaction"
            },
            {
                id: 20,
                question: "In OTPM, the goal of 'standardized work' is to:",
                options: ["Reduce variations in office processes", "Standardize office layout", "Improve employee communication", "Both A and C"],
                answer: "Reduce variations in office processes"
            },
            {
                id: 21,
                question: "Which of the following is NOT a part of the TPM 8 Pillars?",
                options: ["Autonomous maintenance", "Office equipment maintenance", "Training and development", "Improved supply chain"],
                answer: "Improved supply chain"
            },
            {
                id: 22,
                question: "How does TPM in the office contribute to cost reduction?",
                options: ["By increasing operational time", "By reducing waste and improving process efficiency", "By reducing employee wages", "By focusing on external factors"],
                answer: "By reducing waste and improving process efficiency"
            },
            {
                id: 23,
                question: "What does the 'Shine' step in 5S focus on in OTPM?",
                options: ["Cleaning and maintaining the office", "Organizing office tasks", "Increasing employee participation", "Developing office software"],
                answer: "Cleaning and maintaining the office"
            },
            {
                id: 24,
                question: "Which of the following is a sign of a successful OTPM implementation?",
                options: ["Increased employee absenteeism", "Decreased equipment breakdowns", "Increased errors in document handling", "Increased inventory costs"],
                answer: "Decreased equipment breakdowns"
            },
            {
                id: 25,
                question: "How does OTPM impact office communication?",
                options: ["Reduces the need for communication", "Improves communication through standardized work and teamwork", "Focuses only on non-verbal communication", "Makes communication less important"],
                answer: "Improves communication through standardized work and teamwork"
            },
            {
                id: 26,
                question: "What role does employee training play in OTPM?",
                options: ["It is not important in OTPM", "It ensures employees understand TPM principles and practices", "It is used to train employees for leadership positions", "It is focused only on technical skills"],
                answer: "It ensures employees understand TPM principles and practices"
            },
            {
                id: 27,
                question: "What is the role of visual management in OTPM?",
                options: ["To make office processes more visible and easy to manage", "To improve office furniture design", "To increase employee work hours", "To track employee performance"],
                answer: "To make office processes more visible and easy to manage"
            },
            {
                id: 28,
                question: "The process of eliminating non-value-added activities in OTPM is called:",
                options: ["Kaizen", "Muda", "SMED", "Andon"],
                answer: "Muda"
            },
            {
                id: 29,
                question: "In OTPM, what is the 'Autonomous Maintenance' approach?",
                options: ["Maintenance only performed by external contractors", "Office employees take responsibility for the maintenance of their equipment", "Maintenance activities are outsourced to specialized companies", "No maintenance is required for office equipment"],
                answer: "Office employees take responsibility for the maintenance of their equipment"
            },
            {
                id: 30,
                question: "The successful implementation of OTPM leads to which of the following?",
                options: ["Decreased employee satisfaction", "Increased operational efficiency", "Increased paperwork", "Decreased communication"],
                answer: "Increased operational efficiency"
            }
        ],
        advanced: []
    },
    "pm-pillar": {
        basic: [
            {
                id: 1,
                question: "What is the primary goal of the Planned Maintenance Pillar?",
                options: ["Reducing energy consumption", "Achieving zero breakdowns", "Improving operator skills", "Reducing manpower"],
                answer: "Achieving zero breakdowns"
            },
            {
                id: 2,
                question: "Planned Maintenance is a process of ___ maintenance activities.",
                options: ["Unscheduled", "Reactive", "Proactive", "Emergency"],
                answer: "Proactive"
            },
            {
                id: 3,
                question: "Which of the following is NOT a type of maintenance in TPM?",
                options: ["Preventive Maintenance", "Predictive Maintenance", "Corrective Maintenance", "Breakage Maintenance"],
                answer: "Breakage Maintenance"
            },
            {
                id: 4,
                question: "Predictive Maintenance primarily uses which of the following?",
                options: ["Statistical methods", "Condition monitoring", "Visual inspections", "Employee feedback"],
                answer: "Condition monitoring"
            },
            {
                id: 5,
                question: "What is the first step in the Planned Maintenance development cycle?",
                options: ["Setting a maintenance budget", "Creating an equipment database", "Conducting a breakdown analysis", "Identifying key performance indicators"],
                answer: "Creating an equipment database"
            },
            {
                id: 6,
                question: "MTBF stands for ___.",
                options: ["Mean Time Between Failures", "Maximum Time Before Failure", "Machine Time Before Failure", "Maintenance Time Before Failure"],
                answer: "Mean Time Between Failures"
            },
            {
                id: 7,
                question: "MTTR stands for ___.",
                options: ["Mean Time to Repair", "Maximum Time to Recover", "Machine Time to Restore", "Maintenance Time to Resolve"],
                answer: "Mean Time to Repair"
            },
            {
                id: 8,
                question: "Which of the following is used to prioritize maintenance tasks?",
                options: ["Fishbone diagram", "FMEA", "Gantt chart", "Histogram"],
                answer: "FMEA (Failure Mode and Effects Analysis)"
            },
            {
                id: 9,
                question: "Preventive Maintenance focuses on ___.",
                options: ["Fixing equipment after breakdown", "Identifying and eliminating potential causes of failure", "Reducing production costs", "None of the above"],
                answer: "Identifying and eliminating potential causes of failure"
            },
            {
                id: 10,
                question: "What is the key metric for measuring the success of Planned Maintenance?",
                options: ["OEE", "ROI", "Inventory levels", "Employee turnover"],
                answer: "OEE (Overall Equipment Effectiveness)"
            },
            {
                id: 11,
                question: "Which maintenance approach uses vibration analysis, thermography, and oil analysis?",
                options: ["Preventive Maintenance", "Predictive Maintenance", "Corrective Maintenance", "Emergency Maintenance"],
                answer: "Predictive Maintenance"
            },
            {
                id: 12,
                question: "Autonomous Maintenance involves ___.",
                options: ["Operators performing basic maintenance tasks", "Specialized technicians handling all maintenance", "Outsourcing maintenance work", "Temporary repairs"],
                answer: "Operators performing basic maintenance tasks"
            },
            {
                id: 13,
                question: "What is the primary difference between Preventive and Predictive Maintenance?",
                options: ["Preventive is reactive, predictive is proactive", "Preventive is based on time, predictive is based on condition", "Preventive is costlier than predictive", "There is no difference"],
                answer: "Preventive is based on time, predictive is based on condition"
            },
            {
                id: 14,
                question: "The 5W1H approach is used in which stage of Planned Maintenance?",
                options: ["Breakdown analysis", "Maintenance planning", "Condition monitoring", "Training"],
                answer: "Breakdown analysis"
            },
            {
                id: 15,
                question: "Which of these tools is most commonly used in Planned Maintenance for root cause analysis?",
                options: ["Histogram", "Pareto chart", "5 Whys", "Gantt chart"],
                answer: "5 Whys"
            },
            {
                id: 16,
                question: "LCC in maintenance stands for ___.",
                options: ["Life Cycle Cost", "Low Cost Control", "Loss Cost Calculation", "Lifetime Component Cost"],
                answer: "Life Cycle Cost"
            },
            {
                id: 17,
                question: "What is the purpose of Corrective Maintenance?",
                options: ["Prevent future failures", "Repair equipment immediately after breakdown", "Modify equipment to improve performance", "Schedule routine maintenance"],
                answer: "Modify equipment to improve performance"
            },
            {
                id: 18,
                question: "What type of maintenance is done when equipment fails unexpectedly?",
                options: ["Predictive Maintenance", "Reactive Maintenance", "Preventive Maintenance", "Planned Maintenance"],
                answer: "Reactive Maintenance"
            },
            {
                id: 19,
                question: "Which TPM pillar supports Planned Maintenance most directly?",
                options: ["Autonomous Maintenance", "Quality Maintenance", "Safety, Health & Environment", "Education & Training"],
                answer: "Autonomous Maintenance"
            },
            {
                id: 20,
                question: "In Planned Maintenance, what is the role of the Equipment History Card?",
                options: ["Tracks operator efficiency", "Records production output", "Maintains a log of all maintenance activities", "Identifies critical spare parts"],
                answer: "Maintains a log of all maintenance activities"
            },
            {
                id: 21,
                question: "Which of the following is an example of condition monitoring?",
                options: ["Scheduled oil changes", "Real-time vibration analysis", "Emergency repairs", "Monthly inspections"],
                answer: "Real-time vibration analysis"
            },
            {
                id: 22,
                question: "What does a high MTBF indicate?",
                options: ["Frequent breakdowns", "Low equipment reliability", "High equipment reliability", "Poor maintenance practices"],
                answer: "High equipment reliability"
            },
            {
                id: 23,
                question: "How does 5S contribute to Planned Maintenance?",
                options: ["Increases the number of maintenance staff", "Improves workplace organization for easier maintenance", "Eliminates the need for maintenance", "Extends the life of spare parts"],
                answer: "Improves workplace organization for easier maintenance"
            },
            {
                id: 24,
                question: "What is the goal of Predictive Maintenance?",
                options: ["Increase downtime", "Perform maintenance based on equipment condition", "Follow a strict time-based schedule", "Reduce maintenance costs only"],
                answer: "Perform maintenance based on equipment condition"
            },
            {
                id: 25,
                question: "Total downtime in TPM is primarily reduced by ___.",
                options: ["Increasing production hours", "Implementing autonomous maintenance", "Scheduled breaks for operators", "Purchasing new equipment"],
                answer: "Implementing autonomous maintenance"
            },
            {
                id: 26,
                question: "Which of the following is a benefit of Planned Maintenance?",
                options: ["Higher inventory costs", "Increased emergency breakdowns", "Improved equipment lifespan", "Higher energy consumption"],
                answer: "Improved equipment lifespan"
            },
            {
                id: 27,
                question: "Why is training important in Planned Maintenance?",
                options: ["Reduces training costs", "Ensures only managers handle maintenance tasks", "Empowers operators with basic maintenance skills", "Avoids the need for condition monitoring"],
                answer: "Empowers operators with basic maintenance skills"
            },
            {
                id: 28,
                question: "Which document outlines detailed maintenance procedures?",
                options: ["Maintenance schedule", "Standard Operating Procedure (SOP)", "Inventory sheet", "Incident report"],
                answer: "Standard Operating Procedure (SOP)"
            },
            {
                id: 29,
                question: "What does the term 'downtime analysis' refer to?",
                options: ["Evaluating production output", "Recording reasons for equipment unavailability", "Calculating total production hours", "Estimating operator efficiency"],
                answer: "Recording reasons for equipment unavailability"
            },
            {
                id: 30,
                question: "Which is NOT a key performance indicator for Planned Maintenance?",
                options: ["OEE", "MTBF", "MTTR", "Annual salary of technicians"],
                answer: "Annual salary of technicians"
            }
        ],
        advanced: []
    },
    "qm-pillar": {
        basic: [
            {
                id: 1,
                question: "What is the primary objective of the Quality Maintenance Pillar in TPM?",
                options: ["Reduce production time", "Eliminate defects and ensure customer satisfaction", "Increase equipment speed", "Improve worker efficiency"],
                answer: "Eliminate defects and ensure customer satisfaction"
            },
            {
                id: 2,
                question: "Which of the following is a key focus of the Quality Maintenance Pillar?",
                options: ["Cost-cutting measures", "Breakdown maintenance", "Defect-free manufacturing", "Employee training programs"],
                answer: "Defect-free manufacturing"
            },
            {
                id: 3,
                question: "What is the term used for ensuring products meet quality standards from the first piece?",
                options: ["Zero Quality Control", "Zero Defects", "Kaizen", "Poka-Yoke"],
                answer: "Zero Defects"
            },
            {
                id: 4,
                question: "Which tool is most commonly used to identify root causes in the Quality Maintenance Pillar?",
                options: ["5S", "Ishikawa Diagram", "JIT (Just in Time)", "Kanban"],
                answer: "Ishikawa Diagram"
            },
            {
                id: 5,
                question: "What does Poka-Yoke mean in the context of TPM?",
                options: ["Continuous improvement", "Mistake-proofing", "Total quality management", "Work standardization"],
                answer: "Mistake-proofing"
            },
            {
                id: 6,
                question: "What is the focus of proactive and preventive techniques in Quality Maintenance?",
                options: ["Increasing equipment efficiency", "Avoiding defects before they occur", "Enhancing worker productivity", "Reducing downtime"],
                answer: "Avoiding defects before they occur"
            },
            {
                id: 7,
                question: "What does 'Right First Time' mean in Quality Maintenance?",
                options: ["Producing quality products in the first shift", "Achieving quality without rework", "Achieving maximum production on the first attempt", "None of the above"],
                answer: "Achieving quality without rework"
            },
            {
                id: 8,
                question: "Which phase focuses on maintaining equipment conditions to prevent quality defects?",
                options: ["Breakdown Maintenance", "Condition-Based Maintenance", "Basic Equipment Condition Management", "Corrective Maintenance"],
                answer: "Basic Equipment Condition Management"
            },
            {
                id: 9,
                question: "What is the role of the Quality Maintenance Pillar in customer satisfaction?",
                options: ["Reducing costs", "Delivering defect-free products consistently", "Increasing production speed", "Training employees"],
                answer: "Delivering defect-free products consistently"
            },
            {
                id: 10,
                question: "What is the primary metric for the Quality Maintenance Pillar?",
                options: ["OEE (Overall Equipment Effectiveness)", "MTBF (Mean Time Between Failures)", "Customer Complaints", "PPM (Parts Per Million defects)"],
                answer: "PPM (Parts Per Million defects)"
            },
            {
                id: 11,
                question: "Which approach is used to create fail-proof systems in Quality Maintenance?",
                options: ["PDCA Cycle", "Poka-Yoke", "TQM", "TPM Audits"],
                answer: "Poka-Yoke"
            },
            {
                id: 12,
                question: "What is the purpose of setting quality condition standards?",
                options: ["To reduce costs", "To ensure equipment reliability", "To prevent recurring defects", "To improve operator efficiency"],
                answer: "To prevent recurring defects"
            },
            {
                id: 13,
                question: "Which step follows after detecting an abnormality in Quality Maintenance?",
                options: ["Fix it immediately", "Perform root cause analysis", "Report it to management", "Document the issue"],
                answer: "Perform root cause analysis"
            },
            {
                id: 14,
                question: "What is the ultimate goal of the Quality Maintenance Pillar?",
                options: ["Maximizing profit", "Zero customer complaints", "Increasing workforce efficiency", "Reducing lead time"],
                answer: "Zero customer complaints"
            },
            {
                id: 15,
                question: "What is the process of analyzing deviations to prevent recurrence called?",
                options: ["Kaizen", "Jishu Hozen", "Why-Why Analysis", "PDCA Cycle"],
                answer: "Why-Why Analysis"
            },
            {
                id: 16,
                question: "What does Jishu Hozen contribute to Quality Maintenance?",
                options: ["Continuous training of employees", "Autonomous maintenance to detect early defects", "Advanced problem-solving skills", "None of the above"],
                answer: "Autonomous maintenance to detect early defects"
            },
            {
                id: 17,
                question: "How does the Quality Maintenance Pillar ensure defect-free production?",
                options: ["Through inspection", "By eliminating process variations", "By increasing workforce strength", "Through continuous downtime analysis"],
                answer: "By eliminating process variations"
            },
            {
                id: 18,
                question: "What is the 'Five Why' method used for in Quality Maintenance?",
                options: ["Training employees", "Identifying root causes of defects", "Enhancing equipment efficiency", "Implementing poka-yoke"],
                answer: "Identifying root causes of defects"
            },
            {
                id: 19,
                question: "What does a Quality Maintenance checklist typically ensure?",
                options: ["Equipment uptime", "Proper operating conditions", "Maintenance schedules are followed", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 20,
                question: "Which TPM pillar is most closely linked with the Quality Maintenance Pillar?",
                options: ["Planned Maintenance", "Autonomous Maintenance", "Focused Improvement", "5S"],
                answer: "Autonomous Maintenance"
            },
            {
                id: 21,
                question: "What is the result of proper implementation of Quality Maintenance?",
                options: ["Increased production speed", "Zero defects in manufacturing", "Reduced equipment costs", "Improved worker skills"],
                answer: "Zero defects in manufacturing"
            },
            {
                id: 22,
                question: "What does OQC stand for in Quality Maintenance?",
                options: ["Operator Quality Check", "Output Quality Control", "Onsite Quality Check", "Online Quality Compliance"],
                answer: "Output Quality Control"
            },
            {
                id: 23,
                question: "What is the benefit of reducing variation in processes?",
                options: ["Increased production", "Improved customer satisfaction", "Higher profits", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 24,
                question: "What does 'Condition-based monitoring' aim to identify?",
                options: ["Worker efficiency", "Equipment wear and tear", "Market demand fluctuations", "Training needs"],
                answer: "Equipment wear and tear"
            },
            {
                id: 25,
                question: "Which of the following is an example of visual management in Quality Maintenance?",
                options: ["Pareto Chart", "Control Charts", "Andon Lights", "Maintenance Logs"],
                answer: "Andon Lights"
            },
            {
                id: 26,
                question: "What is the first step in implementing the Quality Maintenance Pillar?",
                options: ["Conducting audits", "Training operators", "Identifying quality-critical equipment", "Analyzing cost-benefit"],
                answer: "Identifying quality-critical equipment"
            },
            {
                id: 27,
                question: "Which tool is used to monitor process performance over time?",
                options: ["Histogram", "Control Chart", "Fishbone Diagram", "Scatter Plot"],
                answer: "Control Chart"
            },
            {
                id: 28,
                question: "What is the main purpose of quality assurance in TPM?",
                options: ["Reducing costs", "Standardizing work processes", "Guaranteeing product quality", "Optimizing maintenance schedules"],
                answer: "Guaranteeing product quality"
            },
            {
                id: 29,
                question: "Which analysis technique identifies the most significant causes of defects?",
                options: ["Pareto Analysis", "5 Why Analysis", "FMEA", "Cause and Effect Diagram"],
                answer: "Pareto Analysis"
            },
            {
                id: 30,
                question: "What is the final step in the Quality Maintenance Pillar?",
                options: ["Continuous monitoring", "Achieving Zero Defects", "Training employees", "Regular audits"],
                answer: "Achieving Zero Defects"
            }
        ],
        advanced: []
    },
    "she-pillar": {
        basic: [
            {
                id: 1,
                question: "What does SHE in TPM stand for?",
                options: ["Safety, Health, and Environment", "Safety, Harmony, and Environment", "Safety, Hygiene, and Efficiency", "Safety, Hygiene, and Engineering"],
                answer: "Safety, Health, and Environment"
            },
            {
                id: 2,
                question: "The primary objective of the SHE pillar in TPM is to:",
                options: ["Improve production efficiency", "Ensure safety, health, and environmental protection", "Reduce equipment breakdown", "Enhance quality"],
                answer: "Ensure safety, health, and environmental protection"
            },
            {
                id: 3,
                question: "In TPM, the SHE pillar helps in:",
                options: ["Preventing accidents and injuries", "Increasing production output", "Maximizing machinery uptime", "Reducing material waste"],
                answer: "Preventing accidents and injuries"
            },
            {
                id: 4,
                question: "Which of the following is a key activity of the SHE pillar?",
                options: ["Daily machine maintenance", "Environmental monitoring and waste management", "Employee training in technical skills", "Data analysis for production trends"],
                answer: "Environmental monitoring and waste management"
            },
            {
                id: 5,
                question: "A risk assessment in the context of SHE in TPM is used to:",
                options: ["Identify potential hazards and risks", "Track production performance", "Plan maintenance schedules", "Assess market trends"],
                answer: "Identify potential hazards and risks"
            },
            {
                id: 6,
                question: "Which of the following is a key environmental concern in the SHE pillar?",
                options: ["Product quality", "Water conservation", "Equipment maintenance", "Employee performance"],
                answer: "Water conservation"
            },
            {
                id: 7,
                question: "Which tool is typically used in TPM for hazard identification and risk assessment?",
                options: ["Fishbone diagram", "Failure Modes and Effects Analysis (FMEA)", "Pareto analysis", "Brainstorming sessions"],
                answer: "Failure Modes and Effects Analysis (FMEA)"
            },
            {
                id: 8,
                question: "What is the role of a Safety Officer in the SHE pillar?",
                options: ["To monitor employee productivity", "To manage machine repairs", "To ensure safety compliance and provide safety training", "To optimize material handling"],
                answer: "To ensure safety compliance and provide safety training"
            },
            {
                id: 9,
                question: "Which of the following is part of promoting a safe working environment?",
                options: ["Regular equipment cleaning", "Wearing appropriate personal protective equipment (PPE)", "Expanding production capacity", "Improving product packaging"],
                answer: "Wearing appropriate personal protective equipment (PPE)"
            },
            {
                id: 10,
                question: "In TPM, which area is primarily addressed by the SHE pillar for health improvement?",
                options: ["Employee wellness programs", "Machine breakdown prevention", "Reduction in material waste", "Machine uptime"],
                answer: "Employee wellness programs"
            },
            {
                id: 11,
                question: "Environmental sustainability in the SHE pillar focuses on:",
                options: ["Increasing operational costs", "Reducing energy consumption, emissions, and waste", "Maximizing raw material usage", "Reducing employee turnover"],
                answer: "Reducing energy consumption, emissions, and waste"
            },
            {
                id: 12,
                question: "What does the acronym PPE stand for?",
                options: ["Production Process Equipment", "Personal Protective Equipment", "Preventive Production Equipment", "Planned Preventive Execution"],
                answer: "Personal Protective Equipment"
            },
            {
                id: 13,
                question: "Which of the following is an example of a safety measure in the TPM SHE pillar?",
                options: ["Lubricating machines regularly", "Installing emergency stop buttons on machines", "Providing incentives to workers", "Increasing machine speed"],
                answer: "Installing emergency stop buttons on machines"
            },
            {
                id: 14,
                question: "Which of these is not a part of environmental management in the SHE pillar?",
                options: ["Waste disposal and recycling", "Carbon footprint reduction", "Employee skill enhancement", "Energy efficiency improvements"],
                answer: "Employee skill enhancement"
            },
            {
                id: 15,
                question: "What should be the focus of the Health aspect in the TPM SHE pillar?",
                options: ["Decreasing maintenance costs", "Ensuring good air quality and ergonomics", "Improving raw material sourcing", "Speeding up production processes"],
                answer: "Ensuring good air quality and ergonomics"
            },
            {
                id: 16,
                question: "Which of the following is considered a safety hazard in the workplace?",
                options: ["Overloaded machines", "Poor lighting and visibility", "Toxic chemicals or fumes", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 17,
                question: "A key objective of implementing TPM in the SHE pillar is to:",
                options: ["Eliminate defects in products", "Increase production speed", "Enhance the safety and health standards of the workplace", "Improve customer relationships"],
                answer: "Enhance the safety and health standards of the workplace"
            },
            {
                id: 18,
                question: "What does ‘Zero Accidents’ in TPM’s SHE pillar refer to?",
                options: ["No breakdowns in machines", "No safety-related accidents or injuries", "No production delays", "No material wastage"],
                answer: "No safety-related accidents or injuries"
            },
            {
                id: 19,
                question: "Which of the following activities is part of the SHE pillar’s environmental aspect?",
                options: ["Conducting energy audits", "Performing machine maintenance", "Employee performance reviews", "Product packaging"],
                answer: "Conducting energy audits"
            },
            {
                id: 20,
                question: "Which of the following is an effective way to reduce noise pollution in the workplace?",
                options: ["Increasing machine speed", "Installing noise barriers or soundproofing", "Reducing machine maintenance frequency", "None of the above"],
                answer: "Installing noise barriers or soundproofing"
            },
            {
                id: 21,
                question: "In TPM, which of the following is a critical factor for health and safety training?",
                options: ["Production quotas", "Worker compliance with safety procedures", "Machine uptime", "Maintenance budget"],
                answer: "Worker compliance with safety procedures"
            },
            {
                id: 22,
                question: "What is the purpose of ‘Ergonomics’ in the SHE pillar?",
                options: ["To improve the efficiency of production lines", "To enhance comfort and reduce physical strain for workers", "To prevent equipment failure", "To increase the volume of output"],
                answer: "To enhance comfort and reduce physical strain for workers"
            },
            {
                id: 23,
                question: "Which of the following is an example of environmental sustainability in TPM?",
                options: ["Recycling waste materials", "Increasing labor hours", "Speeding up production lines", "Reducing machine downtime"],
                answer: "Recycling waste materials"
            },
            {
                id: 24,
                question: "One of the key elements of a successful SHE pillar in TPM is:",
                options: ["Reducing inventory", "Employee involvement in safety and environmental practices", "Increasing raw material costs", "Decreasing maintenance schedules"],
                answer: "Employee involvement in safety and environmental practices"
            },
            {
                id: 25,
                question: "What is a 'near miss' in terms of safety?",
                options: ["A safety violation that resulted in injury", "A situation where an accident could have happened but didn’t", "An incident resulting in machinery breakdown", "A problem that is ignored until it becomes serious"],
                answer: "A situation where an accident could have happened but didn’t"
            },
            {
                id: 26,
                question: "Which type of hazard could be addressed by the SHE pillar’s environmental management?",
                options: ["Chemical spills", "Employee health screening", "Machine misalignment", "Poor ergonomics"],
                answer: "Chemical spills"
            },
            {
                id: 27,
                question: "Why is regular safety training important in TPM?",
                options: ["To increase employee productivity", "To ensure workers understand safety protocols and reduce accidents", "To improve machine efficiency", "To meet legal requirements"],
                answer: "To ensure workers understand safety protocols and reduce accidents"
            },
            {
                id: 28,
                question: "What is the aim of ‘Total Employee Involvement’ in the SHE pillar?",
                options: ["To focus solely on production targets", "To ensure every employee contributes to improving safety, health, and environmental standards", "To reduce machine downtime", "To enhance supplier relations"],
                answer: "To ensure every employee contributes to improving safety, health, and environmental standards"
            },
            {
                id: 29,
                question: "Which of the following is an environmental protection measure under the SHE pillar?",
                options: ["Installation of dust collectors", "Increase in machine speed", "Extended maintenance schedules", "Encouraging overtime work"],
                answer: "Installation of dust collectors"
            },
            {
                id: 30,
                question: "A workplace accident reporting system in TPM helps to:",
                options: ["Increase machine performance", "Identify trends and reduce future accidents", "Improve inventory management", "Enhance marketing strategies"],
                answer: "Identify trends and reduce future accidents"
            }
        ],
        advanced: []
    },
    "lean-manufacturing": {
      basic: [
        {
          id: 1,
          question: "What is the main goal of lean manufacturing?",
          options: ["Increasing profits", "Reducing waste", "Hiring more employees", "Increasing production speed"],
          answer: "Reducing waste"
        },
        {
          id: 2,
          question: "Which Japanese term refers to 'continuous improvement'?",
          options: ["Kanban", "Kaizen", "Muda", "Gemba"],
          answer: "Kaizen"
        },
        {
          id: 3,
          question: "What does 'Muda' mean in lean manufacturing?",
          options: ["Overproduction", "Value", "Waste", "Productivity"],
          answer: "Waste"
        },
        {
          id: 4,
          question: "Which of the following is NOT a type of waste in lean?",
          options: ["Overproduction", "Inventory", "Continuous improvement", "Defects"],
          answer: "Continuous improvement"
        },
        {
          id: 5,
          question: "What is the purpose of 5S in lean manufacturing?",
          options: ["Reduce costs", "Organize the workplace", "Increase workforce", "Eliminate automation"],
          answer: "Organize the workplace"
        },
        {
          id: 6,
          question: "Which lean tool uses cards to control production?",
          options: ["Kanban", "Kaizen", "JIT", "Poka-Yoke"],
          answer: "Kanban"
        },
        {
          id: 7,
          question: "What does JIT stand for?",
          options: ["Just-in-Tact", "Just-in-Time", "Just-in-Team", "Just-in-Trade"],
          answer: "Just-in-Time"
        },
        {
          id: 8,
          question: "What is 'Poka-Yoke' designed to do?",
          options: ["Reduce costs", "Prevent errors", "Speed up production", "Increase inventory"],
          answer: "Prevent errors"
        },
        {
          id: 9,
          question: "What does SMED stand for?",
          options: ["Single-Minute Exchange of Dies", "Simple Manufacturing Equipment Design", "Standardized Maintenance Equipment Design", "Small-Minute Energy Dynamics"],
          answer: "Single-Minute Exchange of Dies"
        },
        {
          id: 10,
          question: "Which tool is used to find the root cause of a problem?",
          options: ["Ishikawa Diagram", "Kanban", "5S", "Value Stream Mapping"],
          answer: "Ishikawa Diagram"
        },
        {
          id: 11,
          question: "The focus of lean manufacturing is on:",
          options: ["Machines", "People", "Value creation", "High technology"],
          answer: "Value creation"
        },
        {
          id: 12,
          question: "What is 'Takt Time'?",
          options: ["Total production time per unit", "Maximum allowable time to meet demand", "Time taken for one worker to rest", "Time taken to complete an order"],
          answer: "Maximum allowable time to meet demand"
        },
        {
          id: 13,
          question: "In lean, what does 'Gemba' mean?",
          options: ["The manager's office", "The actual place of work", "A process improvement tool", "A storage location"],
          answer: "The actual place of work"
        },
        {
          id: 14,
          question: "Value Stream Mapping helps identify:",
          options: ["Employee weaknesses", "Machine downtime", "Waste in the process", "Training needs"],
          answer: "Waste in the process"
        },
        {
          id: 15,
          question: "What is the primary focus of Total Productive Maintenance (TPM)?",
          options: ["Reduce downtime", "Increase inventory", "Train new workers", "Build new machines"],
          answer: "Reduce downtime"
        },
        {
          id: 16,
          question: "Which of these is a lean manufacturing principle?",
          options: ["Use high-cost machinery", "Maximize batch size", "Optimize the whole", "Prioritize storage"],
          answer: "Optimize the whole"
        },
        {
          id: 17,
          question: "Which lean tool ensures a smooth workflow?",
          options: ["Poka-Yoke", "Kanban", "5 Why", "SMED"],
          answer: "Kanban"
        },
        {
          id: 18,
          question: "What is 'Heijunka'?",
          options: ["Leveling production", "Worker training", "Creating excess inventory", "A cost-reduction strategy"],
          answer: "Leveling production"
        },
        {
          id: 19,
          question: "The term 'Andon' refers to:",
          options: ["Error-proofing", "Visual signals for problem reporting", "Work instructions", "Production schedules"],
          answer: "Visual signals for problem reporting"
        },
        {
          id: 20,
          question: "Lean manufacturing aims to reduce which type of variability?",
          options: ["Worker skill variability", "Process variability", "Product quality variability", "All of the above"],
          answer: "All of the above"
        },
        {
          id: 21,
          question: "Which of the following is NOT part of 5S?",
          options: ["Sort", "Standardize", "Sustain", "Save"],
          answer: "Save"
        },
        {
          id: 22,
          question: "In 5S, 'Shine' refers to:",
          options: ["Cleaning and maintaining equipment", "Removing unnecessary items", "Documenting processes", "Organizing tools"],
          answer: "Cleaning and maintaining equipment"
        },
        {
          id: 23,
          question: "Which step in 5S ensures rules are followed consistently?",
          options: ["Sustain", "Set in Order", "Standardize", "Sort"],
          answer: "Standardize"
        },
        {
          id: 24,
          question: "The primary purpose of 'Sort' in 5S is to:",
          options: ["Identify unnecessary items", "Organize tools", "Train employees", "Reduce downtime"],
          answer: "Identify unnecessary items"
        },
        {
          id: 25,
          question: "Sustaining in 5S ensures:",
          options: ["Employees follow best practices regularly", "Machines are replaced periodically", "Inventory levels are increased", "Kaizen events are held monthly"],
          answer: "Employees follow best practices regularly"
        },
        {
          id: 26,
          question: "Which of the following is a type of lean waste?",
          options: ["Defects", "Training", "Leadership", "Collaboration"],
          answer: "Defects"
        },
        {
          id: 27,
          question: "Excess inventory is considered waste because:",
          options: ["It increases lead time", "It ties up resources", "It hides problems", "All of the above"],
          answer: "All of the above"
        },
        {
          id: 28,
          question: "What is the first step in solving a problem in lean?",
          options: ["Implement a solution", "Understand the root cause", "Call a meeting", "Consult management"],
          answer: "Understand the root cause"
        },
        {
          id: 29,
          question: "What is the 5 Whys technique used for?",
          options: ["Evaluating workers", "Analyzing root causes of problems", "Checking inventory levels", "Setting production targets"],
          answer: "Analyzing root causes of problems"
        },
        {
          id: 30,
          question: "Which of these is NOT considered waste in lean manufacturing?",
          options: ["Waiting", "Defects", "Overprocessing", "Training employees"],
          answer: "Training employees"
        }
      ],
    },
    "poke-yoke": {
      basic: [
        {
          id: 1,
          question: "What is Poka Yoke?",
          options: ["A quality improvement tool", "A type of machine", "A defect inspection process"],
          answer: "A quality improvement tool"
        },
        {
          id: 2,
          question: "What does Poka Yoke aim to prevent?",
          options: ["Defects", "Employee errors", "Machine breakdowns"],
          answer: "Defects"
        },
        {
          id: 3,
          question: "Poka Yoke is also known as?",
          options: ["Mistake-proofing", "Machine testing", "Quality control"],
          answer: "Mistake-proofing"
        },
        {
          id: 4,
          question: "Which of the following is an example of a Poka Yoke device?",
          options: ["Automatic shutdown of a machine when misaligned", "Manual inspection of products", "Employee training"],
          answer: "Automatic shutdown of a machine when misaligned"
        },
        {
          id: 5,
          question: "What is the main purpose of Poka Yoke?",
          options: ["To detect errors", "To avoid errors from happening", "To fix errors"],
          answer: "To avoid errors from happening"
        },
        {
          id: 6,
          question: "Poka Yoke can be applied in which industries?",
          options: ["Only manufacturing", "Only service", "Both manufacturing and service"],
          answer: "Both manufacturing and service"
        },
        {
          id: 7,
          question: "What does the term 'Yoke' refer to in Poka Yoke?",
          options: ["A tool for fixing machines", "A device for error detection", "A mechanism for preventing mistakes"],
          answer: "A mechanism for preventing mistakes"
        },
        {
          id: 8,
          question: "Poka Yoke can be applied to which type of errors?",
          options: ["Human errors", "Mechanical errors", "Both human and mechanical errors"],
          answer: "Both human and mechanical errors"
        },
        {
          id: 9,
          question: "What is a typical example of a Poka Yoke system in a factory?",
          options: ["A machine that checks if parts are correctly assembled", "A worker inspecting every product manually", "A manager reviewing the process"],
          answer: "A machine that checks if parts are correctly assembled"
        },
        {
          id: 10,
          question: "What is the first step in implementing Poka Yoke?",
          options: ["Identify potential errors", "Purchase new machinery", "Train employees"],
          answer: "Identify potential errors"
        },
        {
          id: 11,
          question: "Which of these is a simple Poka Yoke device?",
          options: ["A plug that only fits into the correct socket", "A person manually checking each item", "A software for analyzing errors"],
          answer: "A plug that only fits into the correct socket"
        },
        {
          id: 12,
          question: "Which of the following is NOT a Poka Yoke principle?",
          options: ["Prevention", "Detection", "Random checks"],
          answer: "Random checks"
        },
        {
          id: 13,
          question: "What type of errors can Poka Yoke help eliminate?",
          options: ["Repetitive mistakes", "Random errors", "Both a and b"],
          answer: "Both a and b"
        },
        {
          id: 14,
          question: "Poka Yoke is commonly used in:",
          options: ["Automotive manufacturing", "Retail stores", "Call centers"],
          answer: "Automotive manufacturing"
        },
        {
          id: 15,
          question: "Which of the following is an example of Poka Yoke in a service industry?",
          options: ["A reservation system that only allows valid dates", "A security check on all products before sale", "Manual checking of customer feedback"],
          answer: "A reservation system that only allows valid dates"
        },
        {
          id: 16,
          question: "Poka Yoke helps improve:",
          options: ["Efficiency only", "Quality and efficiency", "Speed"],
          answer: "Quality and efficiency"
        },
        {
          id: 17,
          question: "What is a key feature of a Poka Yoke device?",
          options: ["It is expensive", "It automatically corrects errors", "It prevents errors from happening"],
          answer: "It prevents errors from happening"
        },
        {
          id: 18,
          question: "Which of the following is an example of a visual Poka Yoke device?",
          options: ["A color-coded part to ensure correct assembly", "An automated test on every product", "A training program"],
          answer: "A color-coded part to ensure correct assembly"
        },
        {
          id: 19,
          question: "Poka Yoke is most effective when:",
          options: ["Errors are unpredictable", "Errors are frequent", "Errors can be clearly defined and predicted"],
          answer: "Errors can be clearly defined and predicted"
        },
        {
          id: 20,
          question: "A Poka Yoke system is designed to:",
          options: ["Correct mistakes after they happen", "Ensure mistakes do not happen in the first place", "Prevent machinery breakdowns"],
          answer: "Ensure mistakes do not happen in the first place"
        },
        {
          id: 21,
          question: "A Poka Yoke system should be:",
          options: ["Complex", "Expensive", "Simple and easy to use"],
          answer: "Simple and easy to use"
        },
        {
          id: 22,
          question: "What is the 'Foolproof' nature of Poka Yoke?",
          options: ["It makes errors more obvious", "It ensures mistakes are impossible to make", "It automatically fixes errors"],
          answer: "It ensures mistakes are impossible to make"
        },
        {
          id: 23,
          question: "Which of these is a common example of a Poka Yoke device?",
          options: ["A seatbelt alarm that only works when the seatbelt is unfastened", "A worker inspecting each item manually", "A quality audit of the production process"],
          answer: "A seatbelt alarm that only works when the seatbelt is unfastened"
        },
        {
          id: 24,
          question: "Poka Yoke is often used to improve:",
          options: ["Product performance", "Customer satisfaction", "Error prevention"],
          answer: "Error prevention"
        },
        {
          id: 25,
          question: "What is the 'proofing' part of Poka Yoke?",
          options: ["It tests the product’s functionality", "It prevents mistakes by design", "It trains the workers"],
          answer: "It prevents mistakes by design"
        },
        {
          id: 26,
          question: "A simple Poka Yoke device can be:",
          options: ["A lever that fits only in one direction", "A computer system that checks for errors", "A manual checklist"],
          answer: "A lever that fits only in one direction"
        },
        {
          id: 27,
          question: "Which of the following would NOT be considered a Poka Yoke?",
          options: ["A system that prevents users from entering invalid data", "A process that automatically rejects faulty products", "A person checking all items for defects"],
          answer: "A person checking all items for defects"
        },
        {
          id: 28,
          question: "Poka Yoke devices are designed to be:",
          options: ["Complicated", "Expensive", "Simple and effective"],
          answer: "Simple and effective"
        },
        {
          id: 29,
          question: "Poka Yoke helps reduce:",
          options: ["The number of inspections needed", "The amount of raw material used", "Employee training time"],
          answer: "The number of inspections needed"
        },
        {
          id: 30,
          question: "Poka Yoke helps ensure:",
          options: ["Products are always flawless", "Mistakes are impossible", "Quality is maintained by avoiding errors"],
          answer: "Quality is maintained by avoiding errors"
        }
      ],
    },
    "6-sigma": {
      basic: [
        {
          id: 1,
          question: "What does Lean focus on?",
          options: ["Reducing defects", "Increasing speed", "Reducing waste", "Improving quality"],
          answer: "Reducing waste"
        },
        {
          id: 2,
          question: "What is the main goal of Six Sigma?",
          options: ["Reducing defects", "Reducing lead time", "Increasing production", "Improving customer service"],
          answer: "Reducing defects"
        },
        {
          id: 3,
          question: "Which of these is a tool used in Lean?",
          options: ["Pareto Chart", "Fishbone Diagram", "Value Stream Mapping", "Control Chart"],
          answer: "Value Stream Mapping"
        },
        {
          id: 4,
          question: "What does DMAIC stand for in Six Sigma?",
          options: ["Define, Measure, Analyze, Improve, Control", "Define, Model, Analyze, Improve, Check", "Design, Measure, Analyze, Integrate, Control", "Develop, Measure, Analyze, Implement, Control"],
          answer: "Define, Measure, Analyze, Improve, Control"
        },
        {
          id: 5,
          question: "What is a Kaizen?",
          options: ["A tool for measuring defects", "A method for process improvement", "A control chart", "A method for planning"],
          answer: "A method for process improvement"
        },
        {
          id: 6,
          question: "What is a Gemba Walk?",
          options: ["A method for analyzing data", "A process of observing work directly", "A tool for defining project scope", "A process for improving team meetings"],
          answer: "A process of observing work directly"
        },
        {
          id: 7,
          question: "What does the term 'Muda' mean?",
          options: ["Unnecessary effort", "Waste", "Defect", "Variation"],
          answer: "Waste"
        },
        {
          id: 8,
          question: "Which of the following is a core concept of Lean?",
          options: ["Focus on defects", "Continuous improvement", "Eliminate variation", "Reducing defects"],
          answer: "Continuous improvement"
        },
        {
          id: 9,
          question: "What is a Fishbone diagram used for?",
          options: ["Analyzing defects", "Finding root causes of problems", "Planning projects", "Tracking performance over time"],
          answer: "Finding root causes of problems"
        },
        {
          id: 10,
          question: "What does a Control Chart monitor?",
          options: ["Frequency of defects", "Process stability over time", "Customer satisfaction", "Process efficiency"],
          answer: "Process stability over time"
        },
        {
          id: 11,
          question: "What is a process map used for?",
          options: ["Visualizing how a process works", "Measuring defects", "Tracking progress in DMAIC", "Identifying customers"],
          answer: "Visualizing how a process works"
        },
        {
          id: 12,
          question: "What is the purpose of a Pareto Chart?",
          options: ["Identifying process improvements", "Identifying the most significant issues", "Analyzing root causes", "Measuring performance over time"],
          answer: "Identifying the most significant issues"
        },
        {
          id: 13,
          question: "Which tool is used to prioritize problems in Lean?",
          options: ["Pareto Chart", "Control Chart", "Fishbone Diagram", "Histogram"],
          answer: "Pareto Chart"
        },
        {
          id: 14,
          question: "What is a 'Voice of the Customer'?",
          options: ["A tool for mapping processes", "Data collected from customer feedback", "A technique for measuring defects", "A method for tracking project progress"],
          answer: "Data collected from customer feedback"
        },
        {
          id: 15,
          question: "What is a Key Performance Indicator (KPI)?",
          options: ["A tool for measuring customer satisfaction", "A measure of how well a process is performing", "A tool for mapping processes", "A method for identifying root causes"],
          answer: "A measure of how well a process is performing"
        },
        {
          id: 16,
          question: "Which term refers to reducing defects to fewer than 3.4 per million opportunities?",
          options: ["Six Sigma", "Kaizen", "Lean", "Value Stream Mapping"],
          answer: "Six Sigma"
        },
        {
          id: 17,
          question: "What is a 'Bottleneck' in Lean?",
          options: ["A part of the process that is underperforming", "A tool for measuring performance", "A method for reducing defects", "A technique for eliminating waste"],
          answer: "A part of the process that is underperforming"
        },
        {
          id: 18,
          question: "What is the focus of the 'Measure' phase in DMAIC?",
          options: ["Identifying the root causes of problems", "Collecting data to assess the current process", "Implementing improvements", "Standardizing the process"],
          answer: "Collecting data to assess the current process"
        },
        {
          id: 19,
          question: "What does the 'Improve' phase in DMAIC focus on?",
          options: ["Analyzing defects", "Collecting data", "Finding solutions and testing them", "Standardizing processes"],
          answer: "Finding solutions and testing them"
        },
        {
          id: 20,
          question: "What is the main aim of the 'Control' phase in DMAIC?",
          options: ["To control the budget", "To sustain improvements over time", "To analyze defects", "To implement improvements"],
          answer: "To sustain improvements over time"
        },
        {
          id: 21,
          question: "What does a Histogram display?",
          options: ["Process stability", "Frequency of data distribution", "Root causes of defects", "Customer feedback"],
          answer: "Frequency of data distribution"
        },
        {
          id: 22,
          question: "What is the purpose of a 'Spaghetti Diagram'?",
          options: ["Identifying waste in a process", "Analyzing defects", "Tracking customer satisfaction", "Measuring lead time"],
          answer: "Identifying waste in a process"
        },
        {
          id: 23,
          question: "What is the focus of the 'Define' phase in DMAIC?",
          options: ["Identifying problems and defining the project scope", "Collecting data", "Finding solutions to problems", "Testing solutions"],
          answer: "Identifying problems and defining the project scope"
        },
        {
          id: 24,
          question: "Which of the following is a Lean waste category?",
          options: ["Overproduction", "Overwork", "Overlearning", "Overthinking"],
          answer: "Overproduction"
        },
        {
          id: 25,
          question: "What is the goal of 5S?",
          options: ["Increase the number of workers", "Create a more organized, efficient, and safe workplace", "Reduce production rates", "Improve customer relations"],
          answer: "Create a more organized, efficient, and safe workplace"
        },
        {
          id: 26,
          question: "What does the 'Sort' step in 5S involve?",
          options: ["Standardizing processes", "Removing unnecessary items from the workspace", "Organizing tools and materials", "Cleaning the workspace"],
          answer: "Removing unnecessary items from the workspace"
        },
        {
          id: 27,
          question: "What does the 'Shine' step in 5S focus on?",
          options: ["Organizing items in the workspace", "Cleaning and maintaining the workspace", "Standardizing procedures", "Removing waste"],
          answer: "Cleaning and maintaining the workspace"
        },
        {
          id: 28,
          question: "What does the 'Standardize' step in 5S involve?",
          options: ["Ensuring all items are in the right place", "Developing standard operating procedures", "Sorting through tools and materials", "Continuously improving the process"],
          answer: "Developing standard operating procedures"
        },
        {
          id: 29,
          question: "What does 'Poka-Yoke' mean in Lean?",
          options: ["Continuous improvement", "Mistake-proofing processes", "Reducing waste", "Standardizing work"],
          answer: "Mistake-proofing processes"
        },
        {
          id: 30,
          question: "What is a 'Control Plan'?",
          options: ["A method to track defects", "A method to control the budget", "A plan to maintain process improvements", "A tool to track customer feedback"],
          answer: "A plan to maintain process improvements"
        }
      ],
    },
    "7-types-of-abnormalities": {
        basic: [
            {
                id: 1,
                question: "What is a minor flaw in TPM?",
                options: ["A major defect", "A small, non-critical issue", "A dangerous condition", "A quality defect"],
                answer: "A small, non-critical issue"
            },
            {
                id: 2,
                question: "Which of the following is considered a minor flaw?",
                options: ["Equipment breakdown", "Slight rust on machinery", "Safety hazard", "Material shortage"],
                answer: "Slight rust on machinery"
            },
            {
                id: 3,
                question: "What is the impact of unfulfilled basic conditions in TPM?",
                options: ["Increased productivity", "Equipment failure", "Improved safety", "No impact"],
                answer: "Equipment failure"
            },
            {
                id: 4,
                question: "Unfulfilled basic conditions in TPM are primarily related to:",
                options: ["Worker training", "Machine conditions", "Safety protocols", "Raw material quality"],
                answer: "Machine conditions"
            },
            {
                id: 5,
                question: "Which of the following is an example of an inaccessible place in TPM?",
                options: ["Broken tools", "Dusty equipment", "Hard-to-reach machine parts", "Unused raw materials"],
                answer: "Hard-to-reach machine parts"
            },
            {
                id: 6,
                question: "Inaccessible places in a workplace can lead to:",
                options: ["Easy maintenance", "Increased safety", "Poor cleaning and maintenance", "Reduced costs"],
                answer: "Poor cleaning and maintenance"
            },
            {
                id: 7,
                question: "Sources of contamination in TPM include:",
                options: ["Raw material suppliers", "Improperly stored materials", "Worker attire", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 8,
                question: "Which of the following could be a source of contamination in the workplace?",
                options: ["Clean tools", "Properly stored chemicals", "Leaking pipes", "Controlled temperature"],
                answer: "Leaking pipes"
            },
            {
                id: 9,
                question: "A source of quality defects in TPM is:",
                options: ["High-quality raw materials", "Poorly calibrated machines", "Clean working conditions", "Regular employee training"],
                answer: "Poorly calibrated machines"
            },
            {
                id: 10,
                question: "Which of these is a source of quality defects?",
                options: ["A newly installed machine", "Inadequate equipment maintenance", "Well-trained workers", "Routine inspection"],
                answer: "Inadequate equipment maintenance"
            },
            {
                id: 11,
                question: "Unnecessary items in TPM can cause:",
                options: ["Increased safety", "Increased production speed", "Clutter and inefficiency", "Reduced material costs"],
                answer: "Clutter and inefficiency"
            },
            {
                id: 12,
                question: "Which of the following is an example of unnecessary items in a TPM setting?",
                options: ["Tools in use", "Unused parts and equipment", "Safety gear", "Finished products"],
                answer: "Unused parts and equipment"
            },
            {
                id: 13,
                question: "Unsafe places in TPM refer to:",
                options: ["Well-lit work areas", "Cluttered, poorly maintained areas", "Clean machine parts", "Employee break rooms"],
                answer: "Cluttered, poorly maintained areas"
            },
            {
                id: 14,
                question: "An unsafe place in the workplace can lead to:",
                options: ["Increased production", "Accidents and injuries", "Better equipment performance", "Enhanced product quality"],
                answer: "Accidents and injuries"
            },
            {
                id: 15,
                question: "Minor flaws should be addressed because they:",
                options: ["Are too small to fix", "Can lead to bigger problems if ignored", "Improve machine efficiency", "Increase product quality"],
                answer: "Can lead to bigger problems if ignored"
            },
            {
                id: 16,
                question: "Which of the following is an unfulfilled basic condition?",
                options: ["Properly maintained equipment", "Worker safety training", "Non-working safety guards", "Updated inventory system"],
                answer: "Non-working safety guards"
            },
            {
                id: 17,
                question: "In TPM, inaccessible places can cause:",
                options: ["Safety hazards", "Increased machine uptime", "Quick repairs", "Reduced costs"],
                answer: "Safety hazards"
            },
            {
                id: 18,
                question: "Sources of contamination should be identified to:",
                options: ["Improve aesthetic value", "Ensure clean production processes", "Increase storage space", "Reduce the need for worker training"],
                answer: "Ensure clean production processes"
            },
            {
                id: 19,
                question: "Preventing sources of contamination can:",
                options: ["Improve product quality", "Reduce production downtime", "Ensure safety", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 20,
                question: "Which of the following is a source of quality defects in TPM?",
                options: ["Regular machine calibration", "Untested raw materials", "Clean production environment", "Safety equipment"],
                answer: "Untested raw materials"
            },
            {
                id: 21,
                question: "Unnecessary items are typically removed during:",
                options: ["Safety audits", "5S activities", "Employee training sessions", "Raw material inspections"],
                answer: "5S activities"
            },
            {
                id: 22,
                question: "Unsafe places in the workplace must be addressed to:",
                options: ["Reduce accidents and injuries", "Increase inventory", "Boost worker morale", "Enhance aesthetic appeal"],
                answer: "Reduce accidents and injuries"
            },
            {
                id: 23,
                question: "Minor flaws often go unnoticed because they:",
                options: ["Are too small to be fixed", "Do not require immediate action", "Can cause major issues later if ignored", "Are easily corrected"],
                answer: "Can cause major issues later if ignored"
            },
            {
                id: 24,
                question: "Identifying unfulfilled basic conditions in TPM helps to:",
                options: ["Reduce costs", "Ensure safety and efficiency", "Increase downtime", "Improve product defects"],
                answer: "Ensure safety and efficiency"
            },
            {
                id: 25,
                question: "Inaccessible places should be made more accessible to:",
                options: ["Speed up production", "Ensure effective maintenance and cleaning", "Improve safety awareness", "Reduce noise levels"],
                answer: "Ensure effective maintenance and cleaning"
            },
            {
                id: 26,
                question: "Contamination in the workplace is usually caused by:",
                options: ["Clean tools", "Spilled materials and chemicals", "Proper handling procedures", "Regular equipment maintenance"],
                answer: "Spilled materials and chemicals"
            },
            {
                id: 27,
                question: "Which of these actions helps prevent sources of quality defects?",
                options: ["Skipping machine inspections", "Using uncalibrated equipment", "Performing regular equipment maintenance", "Ignoring quality control checks"],
                answer: "Performing regular equipment maintenance"
            },
            {
                id: 28,
                question: "Unnecessary items should be disposed of during:",
                options: ["Annual audits", "5S activities", "Safety meetings", "Employee shifts"],
                answer: "5S activities"
            },
            {
                id: 29,
                question: "Unsafe places can be avoided by:",
                options: ["Regularly inspecting work areas", "Ignoring safety hazards", "Reducing worker involvement", "Maintaining a cluttered environment"],
                answer: "Regularly inspecting work areas"
            },
            {
                id: 30,
                question: "Removing unnecessary items from the workplace helps to:",
                options: ["Increase operational costs", "Maintain a clean and efficient environment", "Add more production lines", "Decrease worker morale"],
                answer: "Maintain a clean and efficient environment"
            }
        ],
    },
      
        


};
export default questions;

