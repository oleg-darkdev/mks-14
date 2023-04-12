import ResourcesType from '../../../../utils/ResourcesType';

const TOC = {
	title: 'technology',
	link: '/app/experiments/',
	img: '/images/manual/toc/experiments/technology.png',

	data: [
		{
			title: 'Human Research Facility Technology Demonstration (HRF-TD)',
			id: 900,
			img: '',
			sources: [
				{
					title: 'NASA official website',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Facility.html'
				}
			],
			resources: new ResourcesType(
				[2, 1, 1, 2],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Human Research Facility Technology Demonstration (HRF-TD) experiment was designed to test and validate new technologies for future human spaceflight missions.',
			fullDesc: [
				'The Human Research Facility Technology Demonstration (HRF-TD) experiment was conducted on the International Space Station (ISS) to test and validate new technologies for future human spaceflight missions. The HRF-TD hardware provided a platform to demonstrate these technologies, which included advanced sensors, diagnostic tools, and new biomedical hardware.',
				'The HRF-TD experiment involved a variety of investigations, including the evaluation of a new device to measure fluid shifts in the body, the testing of a new miniature microscope for use in biological research, and the validation of new hardware for monitoring crew health and performance. These investigations were critical for advancing our understanding of how the human body responds to long-duration spaceflight and for developing new tools and technologies to support future missions.',
				"The HRF-TD experiment was conducted in collaboration with NASA's Human Research Program, which seeks to understand and mitigate the risks of spaceflight on human health and performance. The program's research is focused on developing new technologies and countermeasures to protect the health and well-being of astronauts during long-duration spaceflight.",
				'Overall, the HRF-TD experiment was a critical step in advancing our knowledge of human physiology in space and developing new technologies to support future human spaceflight missions.'
			]
		},
		{
			title: 'Interior Environmental Monitoring (IEM)',
			id: 902,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Facility.html#id=766'
				}
			],
			resources: new ResourcesType(
				[3, 0, 2, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Interior Environmental Monitoring (IEM) experiment monitors the atmosphere of the International Space Station (ISS) to determine the concentrations of carbon dioxide, volatile organic compounds, and other trace gases, as well as the airborne particles in the cabin air.',
			fullDesc: [
				'The Interior Environmental Monitoring (IEM) experiment is designed to determine the quality of the cabin air in the International Space Station (ISS) by measuring the concentrations of carbon dioxide, volatile organic compounds (VOCs), and other trace gases, as well as the airborne particles in the atmosphere. The experiment uses two types of sensors: a non-dispersive infrared sensor and a metal oxide semiconductor sensor.',
				'The non-dispersive infrared sensor measures the concentrations of carbon dioxide and water vapor in the atmosphere. The metal oxide semiconductor sensor measures the concentrations of VOCs and other trace gases, as well as the airborne particles in the cabin air. Both sensors are located in the air handling system of the ISS and measure the concentrations of gases and particles in the mixed air stream that is delivered to the cabin.',
				'The data collected by the IEM experiment is used to monitor the quality of the cabin air and to identify potential sources of air contamination. The results of the experiment are also used to evaluate the performance of the air handling system and to develop strategies for maintaining a healthy environment for the crew members.',
				'The IEM experiment is an important part of the Environmental Control and Life Support System (ECLSS) on the ISS, which provides a comfortable living environment for the crew members and maintains the life support systems on the station. By monitoring the quality of the cabin air, the IEM experiment helps to ensure the health and safety of the crew members and the success of the ISS missions.'
			]
		},
		{
			title: 'Microgravity Acceleration Measurement System-II (MAMS-II)',
			id: 903,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/128.html'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Microgravity Acceleration Measurement System-II (MAMS-II) measures and characterizes the microgravity environment aboard the International Space Station (ISS).',
			fullDesc: [
				'The Microgravity Acceleration Measurement System-II (MAMS-II) is a suite of sensors that measures and characterizes the microgravity environment aboard the International Space Station (ISS). The microgravity environment is affected by many factors, including atmospheric drag, vehicle thruster firings, and crew activities. These disturbances can cause vibrations and accelerations that can affect sensitive experiments and equipment aboard the ISS.',
				'MAMS-II provides high-precision measurements of acceleration, vibration, and shock, and can detect changes in the microgravity environment with resolutions better than one part in a billion. The data collected by MAMS-II is used by engineers and scientists to improve the design of future spacecraft and equipment, as well as to better understand the effects of microgravity on human physiology and materials science.',
				'MAMS-II is a joint project between NASA and the German Aerospace Center (DLR). The system consists of four sensors, each of which is mounted on a different location on the ISS to provide a complete picture of the microgravity environment. The sensors are connected to a data acquisition unit, which collects and processes the data before sending it to the ground for analysis.'
			]
		},
		{
			title: 'Mobile Servicing System (MSS)',
			id: 904,
			img: '',
			sources: [
				{
					title: 'Canadian Space Agency official site',
					link: 'https://www.asc-csa.gc.ca/eng/iss/mobile-servicing-system.asp'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Mobile Servicing System (MSS) is a robotic system used to service the International Space Station (ISS).',
			fullDesc: [
				`The Mobile Servicing System (MSS) is a highly advanced robotic system used to service the International Space Station (ISS). Developed by the Canadian Space Agency (CSA), it is capable of performing a wide range of tasks, including maintenance and repair work, assembly and installation of equipment, and transportation of cargo and crew.`,
				'The MSS consists of several components, including the Space Station Remote Manipulator System (SSRMS), which is commonly referred to as the Canadarm2. The SSRMS is a robotic arm that is used to manipulate payloads and equipment on the ISS, as well as capture and release visiting spacecraft. The MSS also includes the Mobile Base System (MBS), which provides a mobile work platform for the SSRMS and other tools and equipment.',
				'In addition to the Canadarm2 and the MBS, the MSS also includes the Special Purpose Dexterous Manipulator (SPDM), which is commonly referred to as Dextre. Dextre is a two-armed robot that is used for more complex tasks, such as fine-tuned repairs and inspections, as well as the removal and replacement of faulty components on the ISS.',
				`The MSS has been in use on the ISS since 2001, and has proven to be a highly valuable asset to the station. Its robotic capabilities have enabled astronauts to perform a wide range of tasks that would otherwise be impossible, while also reducing the risks associated with spacewalks and other manual operations. As the ISS continues to be expanded and upgraded, the MSS is expected to remain an essential component of the station's infrastructure.`
			]
		},

		{
			title: 'Space Communications and Navigation Testbed (SCAN Testbed)',
			id: 905,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/SCAN_Testbed.html'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Space Communications and Navigation Testbed (SCAN Testbed) is an experiment that tests the performance and functionality of space-based communication and navigation systems. ',
			fullDesc: [
				'The SCAN Testbed is a multi-phased experiment that began in 2006 and is still ongoing. The objective of the experiment is to test the performance and functionality of space-based communication and navigation systems, including software-defined radios, cognitive radios, and software-based navigation systems. The ultimate goal is to improve the efficiency and reliability of these systems in space, which is crucial for future exploration missions.',
				'The first phase of the experiment involved the development and deployment of a testbed on the International Space Station (ISS). This testbed included a suite of communication and navigation systems, including a software-defined radio, a cognitive radio, and a software-based navigation system. The systems were used to demonstrate the performance and functionality of various technologies and to test their interoperability with existing space-based systems.',
				'Since then, additional phases of the experiment have been conducted, including the development of new communication and navigation technologies and the integration of these technologies into the testbed. The experiment has also been used to test the performance of these technologies in a variety of scenarios, including during spacewalks and other critical operations on the ISS.',
				'The SCAN Testbed is an important experiment for advancing space-based communication and navigation technology. The results of the experiment will help to improve the reliability and efficiency of these systems, which is essential for future space exploration missions. Additionally, the experiment has helped to establish standards and protocols for space-based communication and navigation systems, which will facilitate future collaborations and developments in this field.'
			]
		},
		{
			title: 'Thermal Protection Material Flight Test and Reentry Data Collection (RED-Data2)',
			id: 906,
			img: '',
			sources: [
				{
					title: 'NASA official website',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=7743'
				}
			],
			resources: new ResourcesType(
				[2, 2, 2, 2],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc: `RED-Data2 was an experiment conducted to test the performance of advanced heat shield materials for future space vehicles during reentry into Earth's atmosphere.`,
			fullDesc: [
				`The Thermal Protection Material Flight Test and Reentry Data Collection (RED-Data2) experiment was conducted on the International Space Station to investigate the performance of advanced heat shield materials during reentry into Earth's atmosphere. The experiment aimed to collect data on the behavior of the heat shield materials during high-speed atmospheric entry to improve the design and safety of future spacecraft.`,
				'During the experiment, a sample of heat shield material was mounted on the Exposed Facility of the International Space Station for more than a year. The sample was then returned to Earth for analysis to determine its performance and effectiveness in protecting spacecraft from the extreme heat and pressure of atmospheric reentry.',
				'RED-Data2 was a follow-up to the previous RED experiment, which tested the performance of other heat shield materials in the same conditions. The results of the experiments are expected to help in the development of improved heat shield materials for spacecraft, which could lead to safer and more efficient space travel in the future.'
			]
		},
		{
			title: 'Microgravity Expanded Stem Cells (MESC)',
			id: 907,
			img: '',
			sources: [
				{
					title: 'NASA official website',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/917.html'
				}
			],
			resources: new ResourcesType(
				[4, 2, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'MESC investigates the effects of microgravity on the growth and differentiation of human stem cells. The results may improve stem cell-based therapies and lead to the development of new treatments for a variety of medical conditions.',
			fullDesc: [
				'The Microgravity Expanded Stem Cells (MESC) investigation examines the effects of microgravity on the growth and differentiation of human stem cells. The use of stem cells for therapeutic purposes is a promising area of research, as they can potentially be used to treat a variety of medical conditions, such as heart disease, diabetes, and spinal cord injuries. However, growing and differentiating stem cells on Earth can be challenging due to the influence of gravity.',
				'By studying stem cells in microgravity, MESC aims to better understand the fundamental biology of these cells and how they respond to their environment. This information could help researchers develop more effective stem cell-based therapies and treatments.',
				'The experiment uses a specialized cell culture system that allows the cells to grow and differentiate in a controlled environment. The system consists of a cell culture chamber, a syringe pump, and a gas-permeable membrane. The chamber is filled with a nutrient-rich media that supports cell growth and differentiation, while the syringe pump maintains a constant flow of media through the system. The gas-permeable membrane allows for the exchange of gases, ensuring that the cells receive the oxygen and carbon dioxide they need to survive and grow.',
				'MESC is an ongoing investigation that has been conducted on multiple spaceflight missions. The first phase of the experiment was conducted on the International Space Station in 2014. Subsequent phases have been conducted on SpaceX Dragon and Northrop Grumman Cygnus spacecraft. The results of the experiment have the potential to significantly advance our understanding of stem cell biology and lead to the development of new treatments for a variety of medical conditions.'
			]
		},
		{
			title: 'Space Automated Bioproduct Lab (SABL)',
			id: 908,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/ames/research/space-automated-bioproduct-lab'
				}
			],
			resources: new ResourcesType(
				[4, 3, 4, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Space Automated Bioproduct Lab (SABL) is a facility on the International Space Station (ISS) designed to support research on the growth, development, and genetic expression of plants, microbes, and other biological systems in microgravity.',
			fullDesc: [
				"The Space Automated Bioproduct Lab (SABL) is a science facility located on the International Space Station (ISS). The facility was developed by NASA's Ames Research Center and is used to study how plants, microbes, and other biological systems grow, develop, and express their genes in microgravity.",
				'SABL features a suite of automated hardware, including incubators, centrifuges, and imaging systems, that enable researchers on Earth to remotely monitor and control experiments on the station. The facility also includes a Growth Habitats system, which provides a controlled environment for the growth of plants and other organisms in space.',
				'The research conducted in SABL has a wide range of applications, including the development of new therapies and vaccines, the optimization of agricultural production, and the understanding of the basic biology of life on Earth and in space. By conducting experiments in microgravity, researchers can gain insights into how biological systems behave under conditions not found on Earth, which can lead to new discoveries and innovations.',
				"SABL is available to researchers from around the world through NASA's International Space Station Research Integration Office, which coordinates scientific experiments on the ISS. The facility is part of a growing suite of tools and capabilities on the station that are advancing our understanding of the universe and improving life on Earth."
			]
		},
		{
			title: 'Multi-use Variable-g Platform (MVP)',
			id: 909,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Facility.html?#id=7666'
				}
			],
			resources: new ResourcesType(
				[2, 0, 0, 2],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Multi-use Variable-g Platform (MVP) is a facility on the International Space Station (ISS) that allows for a wide variety of physical science experiments to be performed in varying levels of gravity.',
			fullDesc: [
				'The Multi-use Variable-g Platform (MVP) is a flexible and adaptable facility on the International Space Station (ISS) that enables a wide variety of physical science experiments to be conducted under varying levels of gravity. The MVP uses a servo-controlled mechanism to move experiment modules in a sinusoidal motion, producing variable levels of gravity ranging from microgravity to twice Earth gravity (2g).',
				'Experiments on the MVP can range from investigations of fundamental science to applied research and technology development, with a particular focus on fluid physics, combustion science, and materials science. The MVP has been used for experiments such as the "Ring-Sheared Drop" study, which investigated the behavior of a fluid interface in varying levels of gravity to better understand the dynamics of fluid systems, and the "Flame Extinguishment Experiment" which studied how flames burn in microgravity.',
				'The MVP can accommodate experiments of various sizes and shapes, including single and multiple test articles, and can be configured for crew-tended or autonomous operation. The flexibility of the platform and its ability to produce varying levels of gravity make it a valuable resource for scientists and researchers in many fields of study.'
			]
		},
		{
			title: 'Capillary Structures Investigation (CSI-2)',
			id: 910,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=7666'
				}
			],
			resources: new ResourcesType(
				[2, 0, 0, 2],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Capillary Structures Investigation-2 (CSI-2) examines how fluids move through small channels in microgravity.',
			fullDesc: [
				'The Capillary Structures Investigation-2 (CSI-2) is a study of how fluids move through small channels in microgravity. The study is important for understanding the behavior of fluids in space, which has implications for designing systems for space exploration and manufacturing. ',
				'The CSI-2 investigation builds on the first Capillary Structures Investigation (CSI) experiment, which was conducted on the space station in 2018. The CSI-2 investigation includes three different types of capillary structures: flat, radial, and axial. The structures are made of different materials and have different geometries. By studying the behavior of fluids in these different structures, scientists hope to gain a better understanding of how fluids move in microgravity.',
				"The CSI-2 experiment is conducted using the Fluids Integrated Rack (FIR) in the station's Destiny laboratory module. The FIR is a facility that supports fluid physics experiments on the station. The CSI-2 investigation uses a series of clear tubes that are filled with fluids and capillary structures. High-resolution cameras capture images of the fluids as they move through the structures. The data collected from the experiment will help scientists improve the design of fluid systems for future space missions and applications on Earth."
			]
		},
		{
			title: 'Fiber Optic Production (FOP)',
			id: 911,
			img: '',
			sources: [
				{
					title: 'NASA - Fiber Optic Production (FOP)',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=766'
				}
			],
			resources: new ResourcesType(
				[3, 3, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'Fiber Optic Production (FOP) is an experiment designed to study the production of high-quality optical fiber in the microgravity environment of the ISS.',
			fullDesc: [
				'Fiber Optic Production (FOP) is an experiment designed to study the production of high-quality optical fiber in the microgravity environment of the International Space Station (ISS). The experiment aims to develop a process for producing higher-quality fiber optic materials than those currently available on Earth, with the ultimate goal of developing advanced communications technologies and medical devices.',
				'The FOP experiment uses a furnace to heat a mixture of chemicals and then slowly cool them to produce a crystal that can be drawn into a fiber optic strand. By conducting this process in microgravity, researchers hope to eliminate the impurities and structural defects that can occur due to gravity-induced convection and other effects.',
				'The experiment has several goals, including optimizing the manufacturing process for producing fiber optic materials in space, developing new materials for use in fiber optic cables and devices, and testing the performance of these materials in space-based applications.',
				'The FOP experiment is part of NASA’s Materials Science Research program, which aims to study the behavior of materials in microgravity environments in order to develop new materials with unique properties and applications. By studying materials in space, researchers hope to gain new insights into their fundamental properties and unlock new possibilities for their use in advanced technologies.'
			]
		},
		{
			title: 'Binary Colloidal Alloy Test – 3 (BCAT-3)',
			id: 912,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Facility.html?#id=1033'
				}
			],
			resources: new ResourcesType(
				[2, 2, 2, 2],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Binary Colloidal Alloy Test – 3 (BCAT-3) is a materials science experiment that studies the behavior of particles in a colloid (a mixture of small particles suspended in a fluid) in microgravity.',
			fullDesc: [
				'The Binary Colloidal Alloy Test – 3 (BCAT-3) is a materials science experiment that studies the behavior of particles in a colloid (a mixture of small particles suspended in a fluid) in microgravity. The experiment uses small particles of polymer and silica that are suspended in a fluid and then allowed to settle into a crystalline structure.',
				'The study of colloids is important in many fields, including materials science, chemistry, and biology. By studying the behavior of particles in a colloid in microgravity, researchers can gain insight into the fundamental physics of these systems and develop new materials with unique properties.',
				'BCAT-3 is the third in a series of experiments that have been conducted on the International Space Station. The experiment is housed in a facility called the Fluids Integrated Rack (FIR), which provides the necessary hardware to conduct the experiment in microgravity.',
				'During the experiment, the particles are allowed to settle into a crystalline structure, and then the sample is slowly rotated to change the direction of gravity. This allows researchers to study how the particles move and interact in microgravity. The results of the experiment can be used to develop new materials with unique properties, such as self-healing materials or materials that change their shape in response to an external stimulus.'
			]
		},
		{
			title: 'Capillary Flow Experiment (CFE)',
			id: 913,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=1057'
				}
			],
			resources: new ResourcesType(
				[2, 2, 2, 1],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Capillary Flow Experiment (CFE) is an ISS experiment designed to study the flow of fluids in microgravity.',
			fullDesc: [
				'The Capillary Flow Experiment (CFE) is a multi-phase fluid dynamics investigation that examines how fluids flow through small channels in microgravity. The experiment is designed to help researchers better understand how fluids behave in space, which is essential for designing fluid management systems for long-duration space missions, as well as improving the design of fluid systems here on Earth.',
				'In microgravity, fluids behave very differently than they do on Earth, because gravity no longer dominates their behavior. Instead, capillary forces become the dominant force in fluid behavior, and fluids tend to flow more slowly and erratically in small channels.',
				'The CFE uses a variety of flow configurations and test channels to study fluid behavior in microgravity. The experiment is conducted in a large, transparent container called the Fluids Integrated Rack (FIR) that is located in the Destiny laboratory on the ISS. The FIR contains a variety of sensors and instruments that measure fluid flow rates, pressures, and other properties.',
				'The CFE has a number of potential applications in space exploration and technology development, including the development of more efficient fluid management systems for spacecraft, the design of more efficient heat transfer systems, and the development of more effective microfluidic devices for medical research and diagnosis.',
				'Overall, the CFE is an important experiment that helps researchers understand how fluids behave in microgravity, and could have significant benefits for space exploration and technology development.'
			]
		},
		{
			title: 'Commercial Generic Bioprocessing Apparatus Science Insert -02 (CGBA-SI-02)',
			id: 914,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=1195'
				}
			],
			resources: new ResourcesType(
				[2, 1, 2, 1],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Commercial Generic Bioprocessing Apparatus Science Insert -02 (CGBA-SI-02) was an experiment conducted to investigate the effects of microgravity on microbial pathogenesis and to develop a vaccine production system using yeast cells.',
			fullDesc: [
				'The Commercial Generic Bioprocessing Apparatus Science Insert -02 (CGBA-SI-02) was a biotechnology experiment conducted aboard the International Space Station. The experiment aimed to investigate the effects of microgravity on microbial pathogenesis and to develop a vaccine production system using yeast cells.',
				'The experiment involved the use of a commercial bioprocessing apparatus that was modified for spaceflight use. The apparatus contained four individual modules that could be used to grow different types of cells, such as bacteria, yeast, or animal cells. For the CGBA-SI-02 experiment, yeast cells were used.',
				'The yeast cells were used to produce recombinant proteins, which could be used to develop vaccines. By using yeast cells to produce vaccines, the researchers hoped to avoid the use of animal cells, which can be difficult to maintain in space.',
				'The experiment was able to successfully produce the desired proteins, demonstrating the potential for using yeast cells to produce vaccines in space. The results of the experiment could have implications for the future of space travel, as it could allow for the production of vaccines and other medical treatments in space.',
				'The Commercial Generic Bioprocessing Apparatus Science Insert -02 (CGBA-SI-02) was part of a larger effort to develop biotechnology capabilities for space exploration. By conducting experiments in space, researchers can gain a better understanding of how biological systems behave in microgravity, which could lead to the development of new technologies and treatments.'
			]
		},
		{
			title: 'Combustion Integrated Rack (CIR)',
			id: 915,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Facility.html?#id=72'
				}
			],
			resources: new ResourcesType(
				[5, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Combustion Integrated Rack (CIR) is a facility that allows scientists to study flames and combustion phenomena in microgravity.',
			fullDesc: [
				'The Combustion Integrated Rack (CIR) is a research facility on board the International Space Station (ISS) that allows scientists to study flames and combustion phenomena in microgravity. The CIR is a multipurpose combustion research facility that provides researchers with the ability to conduct a wide range of combustion experiments in a microgravity environment.',
				'The CIR consists of three main components: the combustion chamber, the diagnostics and control equipment, and the science data system. The combustion chamber is where the experiments take place and is designed to accommodate a wide variety of hardware and fuel configurations. The diagnostics and control equipment include cameras, lasers, and other sensors that allow researchers to monitor and control the experiments. The science data system collects and stores data from the experiments for later analysis.',
				'The CIR has been used for a wide range of experiments, including studies of flame propagation, droplet combustion, and soot formation. By conducting these experiments in microgravity, researchers are able to observe phenomena that are not visible on Earth due to the effects of gravity. The knowledge gained from these experiments can be used to improve combustion technologies on Earth, as well as to develop more efficient and environmentally friendly spacecraft propulsion systems.',
				'The CIR is operated by the NASA Glenn Research Center and is available to researchers from around the world through the NASA research announcement process.'
			]
		},
		{
			title: 'Critical Viscosity of Xenon-2 (CVX-2)',
			id: 916,
			img: '',
			sources: [
				{
					title: 'NASA - Critical Viscosity of Xenon-2 (CVX-2)',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/2299.html'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Critical Viscosity of Xenon-2 (CVX-2) experiment investigates the properties of supercritical fluids, which exhibit characteristics of both liquids and gases, and have the potential to be used in various industrial applications. The experiment specifically focuses on the critical point of xenon, the temperature and pressure at which the gas and liquid phases of a substance become indistinguishable from each other.',
			fullDesc: [
				`The Critical Viscosity of Xenon-2 (CVX-2) experiment is a continuation of the first CVX experiment, which studied the critical point of xenon in microgravity on the International Space Station (ISS) in 2001. The critical point is the temperature and pressure at which a gas and liquid become indistinguishable from each other, and the properties of fluids in this state are of interest in many fields, such as materials science, chemistry, and engineering.`,
				`CVX-2 focuses specifically on the critical viscosity of xenon, which is the measure of a fluid's resistance to flow near the critical point. By studying this property of xenon in microgravity, scientists can better understand the behavior of supercritical fluids, which exhibit characteristics of both liquids and gases, and have the potential to be used in various industrial applications, such as extraction and purification of chemicals.`,
				`The CVX-2 experiment is conducted using the Fluids Integrated Rack (FIR), a facility on the ISS that allows for the study of fluids in microgravity. The experiment consists of a cell filled with xenon gas that is heated and pressurized to the point where it becomes a supercritical fluid. The cell is then slowly depressurized while the viscosity of the fluid is measured using a laser-based technique. The results from this experiment can be used to improve the understanding of the behavior of supercritical fluids, and may lead to the development of new technologies and applications.`
			]
		},
		{
			title: 'Development of a Vision-Based Navigation Sensor Suite for Small Spacecraft (VisNav)',
			id: 917,
			img: '',
			sources: [
				{
					title: 'NASA Ames Research Center',
					link: 'https://www.nasa.gov/ames/research/space-technology/visnav'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'VisNav is an experiment aimed at developing a vision-based navigation sensor suite for small spacecraft.',
			fullDesc: [
				'The Development of a Vision-Based Navigation Sensor Suite for Small Spacecraft (VisNav) experiment is focused on developing a system for small spacecraft that allows them to determine their position and orientation relative to a target, such as a spacecraft or celestial body, using vision-based sensors.',
				'The VisNav system consists of several cameras and algorithms that allow the spacecraft to determine its position and orientation in real-time by analyzing images of the target. The system can operate autonomously or with limited human intervention.',
				'The VisNav experiment has several potential applications, including enabling small spacecraft to perform more precise maneuvers during docking or landing, allowing them to operate in environments where GPS is not available, and improving the efficiency and safety of space operations.',
				'The VisNav experiment was conducted on the International Space Station in 2019 and the results of the experiment will help to refine the technology for future space missions.'
			]
		},
		{
			title: 'Dynamically Controlled Protein Crystal Growth (DCPCG)',
			id: 918,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/91.html'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Dynamically Controlled Protein Crystal Growth (DCPCG) experiment studied the growth of protein crystals in a microgravity environment.',
			fullDesc: [
				'The Dynamically Controlled Protein Crystal Growth (DCPCG) experiment was designed to study the growth of protein crystals in a microgravity environment. This was done to gain a better understanding of the formation and structure of protein crystals, which are essential in determining the function of many biological molecules.',
				'Protein crystals grown on Earth are often small and imperfect, making it difficult to study their structure and function. In microgravity, however, protein crystals can grow much larger and more uniform, allowing for better analysis. The DCPCG experiment aimed to use a new method of growing protein crystals that would allow for more precise control over their formation and growth.',
				'The DCPCG experiment used a system that controlled the flow of protein solution into a growth chamber, allowing for the creation of a steady-state environment for crystal growth. By adjusting the flow rate, the researchers were able to control the rate of crystal growth and the size of the crystals produced. The system also allowed for the collection of real-time data on the growth of the crystals, which could be used to improve the growth process in future experiments.',
				'The DCPCG experiment was conducted on the International Space Station (ISS) in 2006 and was a joint effort between NASA and the European Space Agency (ESA). The results of the experiment have been used to develop new methods for growing protein crystals in microgravity, which could lead to advances in the study of biological molecules and the development of new drugs and treatments for diseases.'
			]
		},
		{
			title: 'Fluid and Transport Experiment (FAT)',
			id: 919,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/FAT.html'
				}
			],
			resources: new ResourcesType(
				[2, 2, 1, 3],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Fluid and Transport Experiment (FAT) investigated how fluids move and mix in microgravity.',
			fullDesc: [
				'The Fluid and Transport Experiment (FAT) was designed to investigate how fluids move and mix in microgravity conditions. The experiment was conducted in the Fluids Integrated Rack (FIR) aboard the International Space Station (ISS).',
				'By studying fluid flow in space, scientists hope to improve our understanding of the behavior of fluids on Earth. In addition, the results of the FAT experiment may help scientists develop better models for predicting how fluids move in a wide range of applications, including chemical processing, food manufacturing, and even medical treatments.',
				'The FAT experiment used a transparent cube-shaped container to hold a liquid solution of water and a surfactant. The container was fitted with a pair of pumps that circulated the liquid through the container. A digital camera recorded high-resolution images of the fluid flow as it was affected by changes in temperature, pressure, and other factors.',
				'The FAT experiment was conducted in 2012 and lasted for several months. The results of the experiment have been analyzed by scientists on Earth, and are expected to help improve our understanding of how fluids move and mix in microgravity conditions.'
			]
		},
		{
			title: 'High-Performance Commercial Off-the-Shelf (COTS) Computer System (HPCS)',
			id: 920,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/914.html'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The High-Performance Commercial Off-the-Shelf (COTS) Computer System (HPCS) experiment tested the performance of a commercial off-the-shelf computer system in a radiation environment.',
			fullDesc: [
				'The High-Performance Commercial Off-the-Shelf (COTS) Computer System (HPCS) experiment was conducted to test the performance of a commercial off-the-shelf computer system in the radiation environment of space.',
				'The HPCS hardware and software were identical to those used in high-performance computing systems on Earth, and the experiment aimed to demonstrate the feasibility of using such systems for space applications.',
				"The experiment measured the performance of the HPCS computer system in terms of processing speed, memory usage, and power consumption in the space radiation environment. The data collected during the experiment were used to evaluate the computer system's performance and determine its suitability for space applications.",
				'The results of the HPCS experiment have the potential to benefit future space missions by enabling more efficient and powerful computer systems to be used in spacecraft and space-based experiments.'
			]
		},
		{
			title: 'High Temperature Electrolysis (HTE)',
			id: 921,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/centers/glenn/about/fs21grc.html'
				}
			],
			resources: new ResourcesType(
				[5, 2, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'High Temperature Electrolysis (HTE) is an experiment that investigates the use of high-temperature electrolysis to produce hydrogen and oxygen from water. The experiment is part of the In-Space Manufacturing program, which aims to develop advanced technologies for space exploration and future space habitats.',
			fullDesc: [
				`High-temperature electrolysis is a process that uses heat and electrical energy to split water molecules into hydrogen and oxygen. This process is more efficient than traditional electrolysis, which operates at lower temperatures and requires more energy input. The HTE experiment on the International Space Station (ISS) aims to demonstrate the feasibility of high-temperature electrolysis in a microgravity environment.`,
				`The HTE experiment is conducted using the Solid Oxide Electrolysis Cell (SOEC) developed by NASA's Glenn Research Center. The SOEC is a high-temperature electrochemical device that can operate at temperatures up to 900°C. During the experiment, water is supplied to the SOEC, which is heated and then electrolyzed to produce hydrogen and oxygen. The gases are separated by a ceramic membrane and collected for analysis.`,
				`The HTE experiment has several objectives, including testing the performance and durability of the SOEC in microgravity, measuring the efficiency and productivity of the high-temperature electrolysis process, and investigating the effects of microgravity on the behavior of the electrolysis cell and the gas separation membrane. The results of the HTE experiment could have significant implications for the development of advanced life support systems, propulsion systems, and fuel cells for space exploration and habitation.`,
				'The HTE experiment is a collaborative effort between NASA and the European Space Agency (ESA). The experiment was launched to the ISS in June 2018 on board the SpaceX Dragon spacecraft as part of the CRS-15 mission.'
			]
		},
		{
			title:
				'Investigating the Structure of Paramagnetic Aggregates from Colloidal Emulsions 3 (InSPACE-3)',
			id: 922,
			img: '',
			sources: [
				{
					title: 'NASA official site',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/910.html'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'InSPACE-3 is a scientific experiment aimed at understanding the fundamental behavior of fluids in the presence of a magnetic field. Specifically, it focuses on the formation of paramagnetic aggregates from colloidal emulsions.',
			fullDesc: [
				'The InSPACE-3 experiment is part of a series of investigations that aim to understand the behavior of fluids in microgravity. In this experiment, scientists focus on the formation of paramagnetic aggregates from colloidal emulsions.',
				'Colloidal emulsions are a mixture of two immiscible liquids, such as oil and water, where one of the liquids is dispersed as small droplets throughout the other. When a magnetic field is applied to these emulsions, the magnetic particles within the droplets can form aggregates, changing the properties of the fluid.',
				'On Earth, gravity can cause sedimentation of the droplets, making it difficult to study the formation of aggregates. In microgravity, however, the droplets remain suspended, allowing scientists to observe the behavior of the emulsions as the magnetic field is applied.',
				'The InSPACE-3 experiment was carried out on the International Space Station (ISS) in 2014. The results of the experiment may help improve industrial processes that involve the manipulation of magnetic particles in fluids, such as oil extraction and water purification.'
			]
		},
		{
			title: 'In-Situ Monitoring of Particles (IMS)',
			id: 923,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=7654'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The In-Situ Monitoring of Particles (IMS) experiment studies the behavior of particles in microgravity in order to improve the design of future space-based equipment and systems.',
			fullDesc: [
				'The In-Situ Monitoring of Particles (IMS) experiment is designed to study the behavior of particles in microgravity. This is important because understanding how particles behave in space is essential to the design and operation of space-based equipment and systems, including life support systems, communication systems, and more.',
				'During the experiment, researchers use a microscope to observe the behavior of particles suspended in a fluid. The microscope is equipped with a high-resolution camera that allows researchers to capture images of the particles as they move and interact with one another.',
				'The IMS experiment has several objectives, including studying the effects of particle concentration on the behavior of particles, observing how particles move and interact with one another in microgravity, and investigating how the presence of particles affects the properties of the fluid in which they are suspended.',
				'Overall, the IMS experiment is helping to improve our understanding of how particles behave in microgravity and how they can be controlled and manipulated to improve the design of future space-based equipment and systems.'
			]
		},
		{
			title: 'Integrated Immune Experiment (IIE)',
			id: 924,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=7662'
				}
			],
			resources: new ResourcesType(
				[4, 2, 3, 3],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Integrated Immune Experiment (IIE) investigates how the spaceflight environment affects the human immune system response.',
			fullDesc: [
				'The Integrated Immune experiment studies changes in the human immune system response that occur during and after spaceflight. The immune system protects the body against infectious diseases and cancer. Living in the spaceflight environment requires the immune system to adapt to new conditions that are not present on Earth. The Integrated Immune experiment monitors immune system changes that occur during flight and then post-flight and relates these changes to the crew member’s overall health status.',
				'The IIE study focuses on the distribution of T-cell differentiation antigens (CD45RA and CD45RO) and natural killer cell function in spaceflight and post-flight. The IIE aims to define the impact of microgravity on these key components of the immune system, to determine how these alterations impact immune function, and to test whether these immune changes influence the onset, severity, or reactivation of latent viral infections.'
			]
		},
		{
			title: 'International Space Station Agricultural Camera (ISSAC)',
			id: 924,
			img: '',
			sources: [
				{
					title: 'NASA official site',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/1143.html'
				}
			],
			resources: new ResourcesType(
				[2, 0, 0, 2],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'ISSAC is a camera system used to capture images of Earth’s vegetated landscapes, primarily for scientific research in plant biology and ecology.',
			fullDesc: [
				'The International Space Station Agricultural Camera (ISSAC) is a camera system used to capture images of Earth’s vegetated landscapes, primarily for scientific research in plant biology and ecology. ISSAC is a commercial remote sensing platform installed on the Japanese Experiment Module-Exposed Facility (JEM-EF) on the International Space Station (ISS).',
				'ISSAC is operated remotely by the University of North Dakota, and the data collected is used for a variety of research purposes, including: monitoring crops and vegetation growth, understanding changes in land use and land cover, mapping invasive species, and identifying areas affected by natural disasters such as wildfires and floods. The images taken by ISSAC are available to the public through the University of North Dakota’s website, where users can download the images and access related data and information.',
				'The ISSAC project is a collaboration between the University of North Dakota, Teledyne Brown Engineering, and the Japanese Aerospace Exploration Agency (JAXA). The project was initiated in 2013, and the camera system was launched to the ISS in 2017.'
			]
		},
		{
			title: 'Materials International Space Station Experiments-X (MISSE-X)',
			id: 925,
			img: '',
			sources: [
				{
					title: 'NASA official website',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=1369'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'MISSE-X is an experiment designed to study the long-term effects of exposure to the space environment on various materials.',
			fullDesc: [
				'Materials International Space Station Experiments-X (MISSE-X) is an experiment designed to study the long-term effects of exposure to the space environment on various materials. The experiment consists of two suitcase-sized containers, which were installed on the exterior of the International Space Station (ISS) in 2019.',
				'MISSE-X is a collaboration between NASA, the Air Force Research Laboratory (AFRL), and the Naval Research Laboratory (NRL). It builds on the success of previous MISSE experiments, which have been conducted on the ISS since 2001.',
				'The containers are equipped with over 400 samples of various materials, including polymers, composites, and coatings. Some of the materials are already used in space missions, while others are being tested for potential use in future space missions. The samples are exposed to the harsh space environment, which includes radiation, atomic oxygen, and temperature extremes, for up to three years.',
				'The goal of MISSE-X is to better understand how materials degrade over time in space, and to develop new materials that can withstand the harsh space environment. The data collected from the experiment will also help improve the design and performance of spacecraft and other space-related hardware.'
			]
		},
		{
			title: 'Microgravity Acceleration Measurement System (MAMS)',
			id: 926,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/93.html'
				}
			],
			resources: new ResourcesType(
				[2, 0, 0, 2],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Microgravity Acceleration Measurement System (MAMS) measures and characterizes the microgravity environment on board the International Space Station (ISS) using a set of accelerometers and sensors.',
			fullDesc: [
				'The Microgravity Acceleration Measurement System (MAMS) is a suite of instruments designed to measure and characterize the microgravity environment on board the International Space Station (ISS). The system consists of a set of accelerometers and sensors that measure and record the accelerations and vibrations experienced by the ISS in orbit.',
				'The MAMS instruments are mounted at various locations on the ISS, including the US Destiny Laboratory, the Japanese Experiment Module, and the Russian Service Module. The sensors are capable of measuring accelerations as small as 1 micro-g (one millionth of the acceleration due to gravity on Earth) and vibrations with frequencies up to 100 Hz.',
				'The data collected by MAMS is used to monitor and analyze the microgravity environment on the ISS and to identify any disturbances that could affect experiments or equipment on board the station. The information provided by MAMS is also used to help design and develop future spacecraft and space habitats that will require similar measurements and characterization of the microgravity environment.'
			]
		},
		{
			title: 'Microgravity Science Glovebox (MSG)',
			id: 927,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/centers/marshall/space_science/msg.html'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Microgravity Science Glovebox (MSG) is a facility on the International Space Station that allows astronauts to conduct experiments in a sealed environment to prevent contamination and ensure safety.',
			fullDesc: [
				'The Microgravity Science Glovebox (MSG) is a major research facility on the International Space Station (ISS) that allows astronauts to conduct experiments in a sealed environment to prevent contamination and ensure safety. The glovebox is about the size of a large refrigerator and is equipped with gloves that allow the astronauts to manipulate samples and equipment without exposing them to the outside environment.',
				'The MSG is designed to provide a high-quality, low-turbulence environment for scientific experiments in a wide range of disciplines, including materials science, fluid physics, and life sciences. Some of the specific research areas that have been explored using the glovebox include the study of combustion, the behavior of fluids in microgravity, and the growth of crystals.',
				'One of the key advantages of using the MSG for scientific research is the ability to conduct experiments in a controlled environment that is free from the effects of gravity. This can provide valuable insights into the behavior of materials and fluids in space, and help researchers develop new technologies that can be used on Earth as well as in space.',
				'Overall, the Microgravity Science Glovebox is an important tool for scientists and engineers who are working to advance our understanding of the universe and develop new technologies that can benefit people both on Earth and in space.'
			]
		},
		{
			title: 'National Institutes of Health-Rodent Research-5 (NIH-RR-5)',
			id: 928,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=7611'
				}
			],
			resources: new ResourcesType(
				[2, 0, 2, 2],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'NIH-RR-5 is a rodent research experiment on the ISS that examines the impact of microgravity on the musculoskeletal, cardiovascular, and immune systems of mice.',
			fullDesc: [
				'The National Institutes of Health-Rodent Research-5 (NIH-RR-5) is a spaceflight experiment on the International Space Station (ISS) that aims to investigate the effects of microgravity on the musculoskeletal, cardiovascular, and immune systems of mice. The study is a collaborative effort between the NASA Ames Research Center and the National Institutes of Health (NIH).',
				'The NIH-RR-5 experiment involves the launch of 40 mice to the ISS, where they will live for a period of up to 30 days. The mice will be housed in specially designed habitats that can provide them with food, water, and ventilation. During their time on the ISS, the mice will be monitored and their behavior, as well as their physiological responses, will be recorded.',
				'The experiment will focus on several key areas, including the impact of microgravity on bone density and muscle mass, the changes in the cardiovascular system, and the impact of microgravity on the immune system. The findings from this experiment will help scientists to better understand the effects of spaceflight on the human body and to develop strategies to mitigate these effects.',
				'The NIH-RR-5 experiment is part of a broader effort by NASA and its partners to explore the potential of long-duration spaceflight, including missions to Mars and beyond. By studying the effects of microgravity on animals, scientists hope to gain insights into the challenges that humans may face on extended space missions and to develop solutions to these challenges.'
			]
		},
		{
			title: 'Protein Crystal Growth-17 (PCG-17)',
			id: 929,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=7669'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'Protein Crystal Growth-17 (PCG-17) is an experiment designed to study the growth of protein crystals in microgravity.',
			fullDesc: [
				'Protein Crystal Growth-17 (PCG-17) is an experiment conducted on the International Space Station (ISS) that seeks to advance our understanding of how proteins form crystals in microgravity. Protein crystals are important for drug discovery and other applications, and microgravity can help produce larger and higher-quality crystals than on Earth.',
				'The PCG-17 experiment uses the Microgravity Science Glovebox (MSG) facility on the ISS. Astronauts on board the ISS add a solution containing protein to a growth chamber, where it will be kept at a constant temperature for several days. The growth chamber includes a transparent tube that allows for observations of the protein crystal growth.',
				'The experiment includes six protein solutions that are mixed on orbit and monitored by cameras and other sensors. Data gathered during the experiment will help researchers better understand how proteins form crystals in microgravity, which could lead to new methods for growing larger and more consistent crystals on Earth.',
				'PCG-17 is part of a long-running series of experiments called Protein Crystal Growth (PCG), which have been conducted on the ISS since 2002. These experiments have contributed to advancements in drug development, biotechnology, and materials science.'
			]
		},
		{
			title: "NASA's Spacecraft Fire Safety Demonstration Project (Saffire)",
			id: 930,
			img: '',
			sources: [
				{
					title: 'NASA official website',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/917.html'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Saffire experiments were designed to investigate how fires start and spread in microgravity environments and to test new fire suppression systems in space.',
			fullDesc: [
				`NASA's Spacecraft Fire Safety Demonstration Project (Saffire) is a series of experiments conducted on the International Space Station (ISS) to investigate how fires start and spread in microgravity environments and to test new fire suppression systems in space. The experiments aim to improve spacecraft fire prevention and mitigation methods to ensure the safety of crew and spacecraft.`,
				`The Saffire experiments use a small-scale combustion module, which is installed in the Cygnus cargo spacecraft before it is deorbited and burned up in the Earth's atmosphere. The combustion module contains a controlled flame, which is ignited remotely by the ground team. The flame is then allowed to burn and spread in the microgravity environment of the spacecraft, while sensors and cameras record the combustion process.`,
				`The data collected from the Saffire experiments is used to develop and test new materials, technologies, and procedures for preventing and controlling fires in space. The experiments also provide valuable insights into the behavior of fires in microgravity environments and help to improve the design and safety of future spacecraft.',
'The Saffire experiments are part of NASA's efforts to develop and maintain a safe and sustainable presence in space, as well as to advance our understanding of fire safety and combustion science in general.`
			]
		},
		{
			title: 'Solidification Using a Baffle in Sealed Ampoules (SUBSA)',
			id: 931,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/2356.html'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Solidification Using a Baffle in Sealed Ampoules (SUBSA) experiment studies the process of crystal formation in metal alloys.',
			fullDesc: [
				'The Solidification Using a Baffle in Sealed Ampoules (SUBSA) experiment studies the process of crystal formation in metal alloys. The process of crystal formation is of interest to scientists and engineers because it affects the properties of the material, such as strength and durability. Studying the process of crystal formation in microgravity can provide insights into how to improve the properties of materials on Earth.',
				'The SUBSA experiment is conducted in a sealed ampoule that contains a small amount of metal alloy. The ampoule is equipped with a baffle that helps to control the flow of the molten alloy as it solidifies. The ampoule is heated to melt the alloy, then cooled to allow it to solidify. During this process, scientists observe the formation of crystals in the alloy.',
				'The SUBSA experiment has been conducted multiple times on the International Space Station (ISS). The microgravity environment on the ISS allows for the study of crystal formation without interference from gravity, which can affect the process on Earth. Results from the SUBSA experiment have shown that the formation of crystals in metal alloys is different in microgravity compared to on Earth. These findings could help to improve the manufacturing processes for metal alloys on Earth, leading to stronger and more durable materials.'
			]
		},
		{
			title: 'Thermal Amine Scrubber (TAS)',
			id: 932,
			img: '',
			sources: [
				{
					title: 'NASA official website',
					link: 'https://www.nasa.gov/centers/glenn/about/fs-tas.html'
				}
			],
			resources: new ResourcesType(
				[4, 2, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Thermal Amine Scrubber (TAS) is a technology demonstration that aims to develop a more efficient system for removing carbon dioxide (CO2) from the air in crewed spacecraft.',
			fullDesc: [
				'Carbon dioxide is a byproduct of human metabolism, and it needs to be removed from the air to maintain a safe and habitable environment for crewed missions. The current system used on the International Space Station (ISS) is the Carbon Dioxide Removal Assembly (CDRA), which uses a chemical process called amine absorption to remove CO2 from the air.',
				'The TAS project aims to improve on the CDRA by using a different type of amine called tetraethylenepentamine (TEPA) and a thermal regeneration process to remove CO2 more efficiently. In the TAS system, the TEPA is heated to release the CO2, which is then collected and stored for later disposal. The TEPA can then be reused for further CO2 removal.',
				'The TAS project has undergone multiple phases of testing, including ground-based tests and a demonstration on the ISS in 2019. The results of these tests will be used to inform the development of future CO2 removal systems for crewed missions.'
			]
		},
		{
			title: 'Binary Colloidal Alloy Test (BCAT)',
			id: 933,
			img: '',
			sources: [
				{
					title: 'NASA official website',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/1181.html'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Binary Colloidal Alloy Test (BCAT) is a series of experiments designed to investigate the behavior of microscopic particles suspended in liquid, known as colloids, in microgravity conditions.',
			fullDesc: [
				'Colloids are used in a variety of applications, from food and cosmetics to drug delivery and electronics. The behavior of these particles can be influenced by a variety of factors, including temperature, pressure, and gravity. By studying colloids in microgravity conditions, researchers hope to gain a better understanding of their behavior and how they might be used in future technologies.',
				'The BCAT experiments are conducted using a set of specially designed containers that allow for the controlled mixing of different types of colloids. By observing the behavior of these mixtures over time, researchers can gain insights into the ways in which the particles interact with one another and form structures.',
				'The BCAT experiments have been conducted on several missions to the International Space Station, including the SpaceX CRS-4 and CRS-8 missions. Results from these experiments have provided new insights into the behavior of colloids in microgravity, which could have important implications for a wide range of industries and technologies.',
				'The BCAT project is a collaboration between NASA and several universities, including the University of Colorado at Boulder, the University of California at Santa Barbara, and Princeton University.'
			]
		},
		{
			title: 'Colloidal Trapping and Analysis on the International Space Station (Colloid)',
			id: 934,
			img: '',
			sources: [
				{
					title: 'NASA - International Space Station',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/912.html'
				}
			],
			resources: new ResourcesType(
				[2, 0, 0, 2],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Colloidal Trapping and Analysis on the International Space Station (Colloid) experiment studies the behavior of small suspended particles within fluids and gases that have a variety of commercial applications, including petroleum and food processing, drug delivery systems, and liquid crystal displays.',
			fullDesc: [
				'The Colloidal Trapping and Analysis on the International Space Station (Colloid) experiment studies the behavior of small suspended particles within fluids and gases that have a variety of commercial applications, including petroleum and food processing, drug delivery systems, and liquid crystal displays. The experiment uses a new technique to trap and control the behavior of particles in fluids and gases. This technique, known as acoustophoresis, uses high-frequency sound waves to create a standing wave that traps particles at certain points within the fluid or gas.',
				'The experiment consists of a microscope and a laser that are used to study the behavior of the particles. The microscope is used to observe the particles, and the laser is used to trap and move the particles. The microscope and laser are operated remotely from the ground, and the data is sent back to Earth for analysis.',
				'The Colloid experiment is expected to provide valuable information about the behavior of small particles in fluids and gases, which could lead to the development of new technologies and improved processes in a variety of industries.'
			]
		},
		{
			title: 'Commercial Generic Bioprocessing Apparatus Science Insert - 04 (CSI-04)',
			id: 935,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=7612'
				}
			],
			resources: new ResourcesType(
				[2, 0, 0, 2],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Commercial Generic Bioprocessing Apparatus Science Insert - 04 (CSI-04) is an experiment designed to test how microgravity affects the growth of two different types of fungi. ',
			fullDesc: [
				'The Commercial Generic Bioprocessing Apparatus Science Insert - 04 (CSI-04) is an experiment designed to test how microgravity affects the growth of two different types of fungi. The experiment consists of two fluid processing units, each containing a different type of fungi. One unit contains Aspergillus niger, a common black mold that is often found in soil and decaying plant material. The other unit contains Trichoderma reesei, a fungus that is commonly used to produce cellulase enzymes.',
				'By studying how these fungi grow and produce enzymes in microgravity, scientists hope to gain a better understanding of how fungi can be used to produce industrial enzymes and other valuable products. This research could lead to the development of new biotechnology products that are more efficient and cost-effective to produce.',
				'The CSI-04 experiment was conducted in the commercial generic bioprocessing apparatus (CGBA) onboard the International Space Station (ISS) in 2016. The CGBA is a small, self-contained facility that provides a sterile environment for growing and processing biological materials in microgravity. It is used to conduct a wide range of biotechnology experiments, including the production of proteins, vaccines, and other pharmaceuticals.',
				'During the experiment, the two fluid processing units were activated and monitored by the ISS crew for 25 days. The samples were then frozen and returned to Earth for analysis. The results of the experiment are expected to provide valuable insights into the effects of microgravity on fungal growth and enzyme production.'
			]
		},
		{
			title: 'Development of a Circuit-switched Data System (DCDS)',
			id: 936,
			img: '',
			sources: [
				{
					title: 'NASA Technical Reports Server',
					link: 'https://ntrs.nasa.gov/citations/19950015862'
				}
			],
			resources: new ResourcesType(
				[2, 0, 0, 2],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Development of a Circuit-switched Data System (DCDS) was an experiment conducted on the ISS to develop a new communication system for transmitting large amounts of data in space.',
			fullDesc: [
				'The DCDS experiment was conducted on the ISS in 1994 to develop a new circuit-switched data system for space communications. The circuit-switched data system is a type of communication system that uses dedicated communication channels for transmitting large amounts of data.',
				'The goal of the experiment was to test the new communication system in a space environment to see if it was reliable and efficient. The DCDS system was designed to allow the transmission of data at rates of up to 128 kbps and was able to operate over a range of 300 km.',
				'The DCDS experiment was successful in demonstrating the feasibility of using circuit-switched data systems for space communications. The technology developed during the experiment has since been used in various space missions, including the Mars Pathfinder mission in 1997.',
				'The DCDS experiment was a joint project between NASA and the Canadian Space Agency (CSA) and involved the installation of specialized hardware on the ISS. The experiment was conducted over a period of several months and involved extensive testing of the communication system in various conditions.',
				'The success of the DCDS experiment paved the way for the development of advanced communication systems for space missions, enabling the transmission of large amounts of data and images from space to Earth. The experiment also helped to improve our understanding of the challenges and opportunities of space communication technology.'
			]
		},
		{
			title: 'European Drawer Rack (EDR)',
			id: 937,
			img: '',
			sources: [
				{
					title: 'European Space Agency (ESA)',
					link: 'https://www.esa.int/Enabling_Support/Space_Engineering_Technology/European_Drawer_Rack'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The European Drawer Rack (EDR) is a multi-user experiment facility designed to host and support a wide range of scientific experiments in microgravity conditions aboard the International Space Station (ISS).',
			fullDesc: [
				'The EDR is a standardized rack system, designed to accommodate interchangeable drawer units, each of which can be customized for a specific experiment. The rack provides various services, such as power supply, temperature control, data processing and communication, to the experiments that are hosted in the rack.',
				'The EDR was developed by the European Space Agency (ESA) and is used by ESA, NASA, and other international partners for a wide range of experiments in physics, biology, and material sciences. For example, the EDR was used to study the effects of weightlessness on protein crystal growth, plant growth, and the behavior of colloidal fluids.',
				'The EDR was first launched to the ISS in 2008 and has since been upgraded with new capabilities and experiments. It is currently installed in the Columbus laboratory module of the ISS and is available for use by researchers around the world.'
			]
		},
		{
			title: 'Fluids Integrated Rack (FIR)',
			id: 938,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/97.html'
				}
			],
			resources: new ResourcesType(
				[5, 0, 0, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Fluids Integrated Rack (FIR) is a research facility aboard the ISS designed to support a wide range of fluid physics experiments in microgravity.',
			fullDesc: [
				'The Fluids Integrated Rack (FIR) is a multi-user facility that supports a wide range of fluid physics experiments in microgravity aboard the International Space Station (ISS).',
				'Microgravity provides a unique environment for the study of fluids because it eliminates the effects of gravity-induced buoyancy and sedimentation, allowing researchers to observe and analyze phenomena that are difficult or impossible to observe on Earth.',
				'The FIR features a variety of capabilities and tools for conducting fluid physics experiments, including flow visualization techniques, thermal control, and advanced data acquisition systems.',
				'The facility also includes several different experiment modules that can be used for a variety of applications, such as the Fluids and Combustion Facility (FCF) and the Confined Helium Experiment (CHeX).',
				'Research conducted using the FIR has applications in a wide range of fields, including aerospace engineering, materials science, and energy production, and has led to advances in areas such as fuel combustion, oil recovery, and biomedical technology.'
			]
		},
		{
			title:
				'Innovative Spacecraft Power and Propulsion Systems with CubeSat Components 3 (InSPACE-2)',
			id: 939,
			img: '',
			sources: [
				{
					title: 'NASA official website',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/2762.html'
				}
			],
			resources: new ResourcesType(
				[3, 3, 3, 3],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'InSPACE-2 is a technology demonstration experiment designed to test and validate a high-performance, low-power electric propulsion system and components in the microgravity environment of the ISS.',
			fullDesc: [
				'The Innovative Spacecraft Power and Propulsion Systems with CubeSat Components 3 (InSPACE-2) is a technology demonstration experiment designed to test and validate a high-performance, low-power electric propulsion system and components in the microgravity environment of the ISS. This experiment builds on the success of the InSPACE and InSPACE-2 projects, which focused on the development of compact, high-performance power and propulsion systems for small satellites known as CubeSats.',
				'InSPACE-2 is divided into two primary parts: the first involves the testing of a small electric propulsion system designed for use in CubeSats, while the second involves the testing of advanced power electronics components such as a new power processing unit and a high-efficiency power converter. The experiment is designed to operate for up to two years and will provide valuable data on the performance of these new technologies in space.',
				'The electric propulsion system being tested in InSPACE-2 is based on a Hall thruster, a type of electric propulsion system that uses magnetic and electric fields to ionize and accelerate propellant. The thruster being tested in this experiment is smaller and more efficient than previous designs, making it well-suited for use in CubeSats and other small spacecraft.',
				"The power electronics components being tested in InSPACE-2 are also designed to be compact and efficient, with a focus on reducing the overall mass and volume of the spacecraft. These components are critical for the operation of electric propulsion systems, as they convert the spacecraft's electrical power into a form that can be used to power the thrusters and other systems onboard the spacecraft.",
				'Overall, InSPACE-2 is an important technology demonstration experiment that will help pave the way for the development of advanced power and propulsion systems for small satellites and other spacecraft. By testing these systems in the microgravity environment of the ISS, NASA and its partners can ensure that they are ready for use in future space missions and can help advance the state of the art in space technology.'
			]
		},
		{
			title: 'Integrated Combustion Experiment (ICE)',
			id: 940,
			img: '',
			sources: [
				{
					title: 'NASA.gov',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/59.html'
				}
			],
			resources: new ResourcesType(
				[2, 0, 0, 2],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Integrated Combustion Experiment (ICE) is a combustion research experiment that is studying the behavior of flames in microgravity.',
			fullDesc: [
				'The Integrated Combustion Experiment (ICE) is a combustion research experiment that is studying the behavior of flames in microgravity. ICE is designed to investigate the fundamental physics of combustion and to determine how to improve fuel efficiency while reducing pollutants. The experiment is conducted inside a combustion chamber in which flames are ignited and the resulting combustion products are measured.',
				'The ICE investigation is intended to help scientists better understand the combustion process, and to develop new, more efficient combustion technologies. The experiment is conducted in the Combustion Integrated Rack (CIR) aboard the International Space Station (ISS), which provides a microgravity environment that allows researchers to study combustion without the influence of gravity-induced convection currents.',
				'The results of the ICE experiment may lead to the development of new, more efficient combustion systems for use in a variety of applications, including automotive engines, aircraft engines, and power generation systems. In addition, the research may help scientists better understand the mechanisms behind the formation of pollutants such as soot, which could lead to new ways to reduce their emissions.'
			]
		},
		{
			title: 'Materials International Space Station Experiment (MISSE)',
			id: 941,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Facility.html?#id=1155'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Materials International Space Station Experiment (MISSE) is a series of experiments that study the long-term effects of exposure to the space environment on materials and other types of samples.',
			fullDesc: [
				'The Materials International Space Station Experiment (MISSE) is a series of experiments that study the long-term effects of exposure to the space environment on materials and other types of samples. The experiments are conducted outside the International Space Station (ISS) in order to expose the samples to the harsh space environment, including vacuum, temperature extremes, and radiation.',
				'MISSE consists of several Passive Experiment Containers (PECs) that are mounted on the exterior of the ISS. Each PEC contains a variety of materials and samples, including polymers, metals, ceramics, and composites. The samples are exposed to the space environment for periods ranging from several months to several years, and are periodically retrieved and returned to Earth for analysis.',
				'The data gathered from MISSE experiments is used to develop new materials and technologies that can better withstand the harsh space environment, as well as to better understand the effects of space on materials and components used in space missions. The MISSE experiments have also helped to advance the field of space materials science, and have led to the development of new materials and coatings that have applications both in space and on Earth.'
			]
		},
		{
			title: 'Multi-user Droplet Combustion Apparatus (MDCA)',
			id: 942,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=2313'
				}
			],
			resources: new ResourcesType(
				[3, 1, 3, 3],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Multi-user Droplet Combustion Apparatus (MDCA) is a suite of experiments designed to investigate the combustion behavior of fuel droplets in the microgravity environment of the International Space Station (ISS).',
			fullDesc: [
				'The Multi-user Droplet Combustion Apparatus (MDCA) is a suite of experiments designed to investigate the combustion behavior of fuel droplets in the microgravity environment of the International Space Station (ISS). The main objective of the MDCA is to study the fundamental physics of combustion in microgravity, which can help improve the design of more efficient and environmentally-friendly combustion systems on Earth.',
				'The MDCA consists of several modules, including the Droplet Combustion Experiment (DCE), the Solid Combustion and Radiative Enclosure (SCORE), and the Laminar Soot Processes (LSP). The DCE module is used to investigate the combustion of single droplets of fuels such as heptane, methanol, and ethanol, while the SCORE module is used to study the combustion of solid materials such as polymers and composites. The LSP module is used to study the formation and growth of soot particles in laminar flames.',
				'The MDCA experiments are conducted inside a combustion chamber that is mounted on the ISS. The chamber is equipped with cameras, sensors, and other instruments that allow researchers to monitor and analyze the combustion process in real-time. The data obtained from the MDCA experiments is used to develop models and simulations of combustion processes in microgravity, which can be used to improve the efficiency and safety of combustion systems on Earth.',
				'The MDCA is a collaborative effort between NASA, the German Aerospace Center (DLR), and the Japanese Aerospace Exploration Agency (JAXA). The experiments are operated remotely from the ground, with researchers from all three agencies working together to analyze the data and share their findings.'
			]
		},
		{
			title: 'Protein Crystal Growth (PCG)',
			id: 943,
			img: '',
			sources: [
				{
					title: 'NASA official site',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=788'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Protein Crystal Growth (PCG) experiment on the International Space Station (ISS) aims to study the formation and growth of protein crystals in microgravity.',
			fullDesc: [
				'The Protein Crystal Growth (PCG) experiment is a series of investigations conducted on the ISS to study the growth of protein crystals in microgravity. Protein crystals grown in space are larger and more well-ordered than those grown on Earth, making them easier to study and analyze. This research has the potential to improve our understanding of the structure and function of proteins, which could lead to the development of new drugs and therapies for a variety of diseases.',
				'PCG uses a variety of techniques to grow protein crystals, including vapor diffusion, dialysis, and microbatch. The experiment also utilizes different types of proteins, including human serum albumin, insulin, and lysozyme. These proteins are selected based on their potential therapeutic applications and their ability to form high-quality crystals in microgravity.',
				'The PCG experiment is conducted using the Protein Crystallization Research Facility (PCRF), a facility designed specifically for this type of research. The PCRF consists of several components, including a temperature-controlled sample enclosure, a system for mixing the protein and crystallization solutions, and a system for monitoring the growth of the crystals.',
				"Results from the PCG experiments have already led to new insights into the structure and function of proteins. For example, researchers have used PCG to study the structure of a protein involved in Huntington's disease, which could help in the development of new treatments for this debilitating condition. Other PCG experiments have focused on proteins involved in cancer, HIV, and other diseases."
			]
		},
		{
			title: 'Space Test Program - Houston 4 (STP-H4)',
			id: 944,
			img: '',
			sources: [
				{
					title: 'NASA official site',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=2063'
				}
			],
			resources: new ResourcesType(
				[5, 3, 2, 3],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'STP-H4 is a series of experiments conducted on the ISS to test and evaluate various technologies in microgravity.',
			fullDesc: [
				'The Space Test Program - Houston 4 (STP-H4) is a series of experiments conducted on the International Space Station (ISS) to test and evaluate various technologies in microgravity. The experiments are designed to improve the performance of spacecraft and other technologies used in space missions. The STP-H4 experiments include a range of technologies, including sensors, materials, and communications systems.',
				'The STP-H4 experiments are conducted by NASA, the US Air Force, and other international partners. The experiments are managed by the Space Test Program, which is responsible for developing and executing the experiments on the ISS. The goal of the STP-H4 experiments is to improve our understanding of how various technologies behave in microgravity, and to develop new technologies that can be used in future space missions.',
				'Some of the technologies being tested in the STP-H4 experiments include a new type of radiation detector, a new type of battery, and a new type of wireless communication system. The radiation detector is designed to detect high-energy particles in space, which can be harmful to astronauts and spacecraft. The new battery is designed to be more efficient and longer-lasting than current space batteries. The wireless communication system is designed to improve the speed and reliability of communication between spacecraft and the ground.',
				'The STP-H4 experiments are an important part of NASA’s efforts to explore space and develop new technologies that can be used in future space missions. The experiments are also helping to improve our understanding of how the human body and other biological systems behave in microgravity, which is important for long-duration space missions, such as missions to Mars.'
			]
		},
		{
			title: 'Total and Spectral Solar Irradiance Sensor (TSIS)',
			id: 945,
			img: '',
			sources: [
				{
					title: 'NASA Official Website',
					link: 'https://www.nasa.gov/mission_pages/sdo/spaceweather/Solar-Irradiance-Sensor.html'
				}
			],
			resources: new ResourcesType(
				[4, 2, 2, 5],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Total and Spectral Solar Irradiance Sensor (TSIS) is a set of instruments on board the International Space Station (ISS) designed to measure the total solar irradiance (TSI) and the spectral solar irradiance (SSI) reaching Earth.',
			fullDesc: [
				'The TSIS was launched to the ISS in December 2017, and was installed on the Earth-facing side of the station. The TSIS consists of two instruments: the Total Irradiance Monitor (TIM) and the Spectral Irradiance Monitor (SIM). The TIM measures the total solar irradiance (TSI) that reaches the top of Earth’s atmosphere. The SIM measures the spectral solar irradiance (SSI) in the ultraviolet (UV), visible, and near-infrared (NIR) ranges.',
				'The TSIS mission aims to improve our understanding of the Sun’s energy output and how it affects Earth’s climate and weather patterns. By measuring the TSI and SSI, the TSIS provides critical data for climate models and helps to monitor the solar energy that enters the Earth’s atmosphere. This information is crucial for predicting space weather, understanding the long-term climate changes on Earth, and for designing and operating satellites and other spacecraft.',
				'The TSIS is a joint mission between NASA and the Laboratory for Atmospheric and Space Physics (LASP) at the University of Colorado Boulder. The TSIS instruments were built by the University of Colorado and were funded by NASA’s Earth Science Division. The TSIS data is available to the scientific community through the NASA Langley Research Center Atmospheric Science Data Center (ASDC).'
			]
		},
		{
			title: 'Vapor Compression Distillation (VCD)',
			id: 946,
			img: '',
			sources: [
				{
					title: 'NASA official website',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/2327.html'
				}
			],
			resources: new ResourcesType(
				[4, 3, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Vapor Compression Distillation (VCD) experiment tests a new system that can recycle wastewater on the space station, providing up to 98% purity, which is cleaner than most tap water on Earth.',
			fullDesc: [
				'The Vapor Compression Distillation (VCD) experiment tests a new system that can recycle wastewater on the space station, providing up to 98% purity, which is cleaner than most tap water on Earth. The VCD system works by using a vacuum to evaporate dirty water and then condensing the steam into clean water. The process is similar to the way a household dehumidifier works, but on a much larger scale.',
				'The VCD system is an improvement over the current water recycling system on the space station, which uses distillation and a filtering process that can only provide up to 75% purity. The VCD system also uses less power and takes up less space than the current system.',
				'The VCD experiment is a joint project between NASA and the Canadian Space Agency (CSA), and it is part of a larger effort to develop more efficient and sustainable life support systems for long-duration space missions. The VCD technology has potential applications not only in space exploration but also in remote locations on Earth where access to clean water is limited.'
			]
		},

		{
			title: 'Utilization of Light Element for Technology and Science (ULTIMA-T)',
			id: 947,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/3147.html'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Utilization of Light Element for Technology and Science (ULTIMA-T) investigation is a study on the use of boron powder as a fuel source for small satellites and other space-based systems. Boron powder has a high energy density and is relatively easy to store, making it an attractive alternative to other fuels for small satellites.',
			fullDesc: [
				'The ULTIMA-T investigation is being conducted on the International Space Station (ISS) to test the behavior of boron powder in microgravity conditions. The investigation aims to demonstrate the feasibility of using boron powder as a fuel source for small satellites and other space-based systems.',
				'The boron powder is contained in a specially designed container and will be ignited to release energy. The experiment will measure the energy released, the rate of combustion, and other factors to determine the suitability of boron powder as a fuel source.',
				'If successful, the use of boron powder as a fuel source could reduce the cost and complexity of small satellite missions, as well as enable the development of new types of space-based systems. The ULTIMA-T investigation is an important step towards advancing the use of new technologies and materials for space exploration and research.'
			]
		},
		{
			title: 'Variable Specific Impulse Magnetoplasma Rocket (VASIMR)',
			id: 948,
			img: '',
			sources: [
				{
					title: 'NASA official website',
					link: 'https://www.nasa.gov/centers/johnson/engineering/projects/vasimr.html'
				}
			],
			resources: new ResourcesType(
				[4, 5, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Variable Specific Impulse Magnetoplasma Rocket (VASIMR) is an advanced propulsion system designed to enable faster, more efficient travel in space.',
			fullDesc: [
				'The Variable Specific Impulse Magnetoplasma Rocket (VASIMR) is an advanced plasma rocket engine that uses radio waves and magnetic fields to heat a gas and turn it into plasma, which is then expelled to generate thrust.',
				'VASIMR has several advantages over traditional rocket engines, including the ability to vary its specific impulse (a measure of the efficiency of a rocket engine), which allows it to operate more efficiently at different stages of a mission. It also uses much less fuel than traditional engines, which could greatly reduce the cost of space exploration and enable faster travel to destinations like Mars.',
				"The VASIMR engine was developed by NASA's Johnson Space Center in collaboration with the Ad Astra Rocket Company. It has been tested extensively on the ground and in space, including on the International Space Station.",
				'The VASIMR engine is still in the testing phase, but it has the potential to revolutionize space travel and enable humans to explore the solar system more efficiently and cost-effectively than ever before.'
			]
		},
		{
			title: 'Robotic Refueling Mission (RRM)',
			id: 949,
			img: '',
			sources: [
				{
					title: 'NASA official site',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/893.html'
				}
			],
			resources: new ResourcesType(
				[3, 3, 3, 3],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Robotic Refueling Mission (RRM) is a series of experiments to demonstrate and test the tools, technologies, and techniques needed to robotically refuel satellites in orbit.',
			fullDesc: [
				`The Robotic Refueling Mission (RRM) is a series of experiments to demonstrate and test the tools, technologies, and techniques needed to robotically refuel satellites in orbit. The RRM is a joint effort between NASA and the Canadian Space Agency, and it is part of NASA's Technology Demonstration Missions program. The ultimate goal of the RRM is to extend the life of existing satellites by refueling them in space, reducing the need for costly and risky on-orbit servicing missions.`,
				'The RRM hardware consists of a series of tools and components that are used to simulate the process of refueling a satellite. These include a robotic arm and tools for manipulating valves and connectors, as well as a mock-up satellite that is used for testing. The RRM is designed to be a "plug-and-play" system that can be easily integrated with other robotic systems on the International Space Station (ISS) and future space vehicles.',
				'The RRM has already completed several successful tests on the ISS, including the first-ever demonstration of robotic refueling in space in 2013. The RRM has also tested other technologies, such as leak detection and insulation removal, that are important for servicing and maintaining satellites in orbit. The RRM is a crucial step toward developing the capabilities needed for a new era of space exploration and satellite servicing.'
			]
		},
		{
			title: 'Synchronized Position Hold, Engage, Reorient, Experimental Satellites (SPHERES)',
			id: 950,
			img: '',
			sources: [
				{
					title: 'NASA official website',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/SPHERES.html'
				}
			],
			resources: new ResourcesType(
				[2, 0, 2, 0],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'SPHERES is a robotic system used to test spacecraft control algorithms and hardware.',
			fullDesc: [
				'The Synchronized Position Hold, Engage, Reorient, Experimental Satellites (SPHERES) is a robotic system developed by the Massachusetts Institute of Technology (MIT) to test spacecraft control algorithms and hardware. SPHERES consists of three free-flying satellites, each about the size of a bowling ball, that are capable of precise maneuvers in the microgravity environment of the International Space Station (ISS).',
				'The SPHERES project was initiated in 1999 as a student design competition at MIT. Since then, the project has evolved into a NASA-sponsored program, and the SPHERES robots have been used for a variety of experiments on the ISS. Some of these experiments include testing algorithms for autonomous rendezvous and docking, formation flying, and visual inspection of the ISS.',
				'SPHERES has also been used as a platform for testing new hardware and software for future space missions. For example, SPHERES has been used to test the effectiveness of laser-based communication systems for small spacecraft, and to test new computer vision algorithms for spacecraft navigation and control.',
				'Overall, the SPHERES project has provided a valuable testbed for developing new technologies and techniques for spacecraft control, and has helped to advance the state of the art in space robotics.'
			]
		},
		{
			title: 'Technology Education and Conducting Hypergravity Experiment (TECH)',
			id: 951,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=751'
				}
			],
			resources: new ResourcesType(
				[4, 2, 0, 2],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Technology Education and Conducting Hypergravity Experiment (TECH) tests a platform designed to educate students on how to conduct research in microgravity and hypogravity environments.',
			fullDesc: [
				"The Technology Education and Conducting Hypergravity Experiment (TECH) is a student-designed and developed platform that tests different materials and devices in microgravity and hypogravity environments. The experiment's objectives are to educate and inspire future space scientists, to develop new technologies for space, and to conduct science experiments in low-gravity environments.",
				'TECH is a modular and reconfigurable platform that can accommodate various student experiments. The platform has four interchangeable compartments that can hold different materials and devices. The compartments are sealed to prevent leaks, and they have connectors that allow for the exchange of fluids and gases.',
				'The TECH platform was designed and developed by the University of Puerto Rico at Mayagüez (UPRM) and NanoRacks, LLC, with support from the NASA Minority University Research and Education Project (MUREP) and the NASA Glenn Research Center. The platform was launched to the International Space Station (ISS) on April 14, 2015, aboard the SpaceX CRS-6 mission.',
				'The TECH experiment provides a unique opportunity for students to learn about the challenges and opportunities of conducting research in microgravity and hypogravity environments. By designing and developing their experiments, students learn about the scientific process, teamwork, and project management. The TECH experiment also helps to develop new technologies that can improve the quality of life on Earth and enable further exploration of space.'
			]
		},
		{
			title: 'Technology for Autonomous Operational Survivability (TAOS)',
			id: 952,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=764'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Technology for Autonomous Operational Survivability (TAOS) project is a study of the feasibility of using automated technology to monitor and maintain systems on the International Space Station (ISS).',
			fullDesc: [
				'The Technology for Autonomous Operational Survivability (TAOS) project is a study of the feasibility of using automated technology to monitor and maintain systems on the International Space Station (ISS). The project uses a software system that is capable of identifying, diagnosing, and even repairing problems with ISS systems without human intervention.',
				'The TAOS project is based on the assumption that, as the ISS becomes more complex and its systems become more sophisticated, it will become increasingly difficult for astronauts to monitor and maintain the systems manually. Automated technology, on the other hand, has the potential to significantly reduce the workload on the ISS crew, while also providing a higher level of system reliability.',
				'The TAOS system is designed to be highly adaptable, allowing it to monitor and manage a wide variety of ISS systems. It is also designed to be highly fault-tolerant, with multiple levels of redundancy built in to ensure that critical systems remain operational even in the event of hardware or software failures.',
				'The TAOS project is a collaboration between NASA and the Massachusetts Institute of Technology (MIT), and has been in development since 2013. The project is considered a critical step toward the development of fully autonomous spacecraft, which could one day explore the outer reaches of our solar system without human intervention.'
			]
		},
		{
			title: 'Technology for Humanitarian Assistance and Disaster Relief (THADR)',
			id: 953,
			img: '',
			sources: [
				{
					title: 'NASA',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=1002'
				}
			],
			resources: new ResourcesType(
				[3, 3, 3, 3],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'THADR is an experiment aimed at developing and testing technologies that can be used for disaster response and recovery operations.',
			fullDesc: [
				'The Technology for Humanitarian Assistance and Disaster Relief (THADR) experiment was conducted on the International Space Station (ISS) to develop and test technologies that can be used for disaster response and recovery operations. The experiment focused on testing software and hardware that could be used to provide situational awareness, aid in decision making, and help coordinate rescue and recovery efforts during a disaster.',
				'One of the key technologies being tested in THADR was a software system called the Rapid On-Orbit Analysis and Reporting (ROAR) system. ROAR is a situational awareness tool that can use satellite imagery and other data sources to provide real-time updates on disaster areas, including damage assessments and location of potential hazards. Other technologies being tested include a wireless sensor network for monitoring disaster sites and a system for tracking the movement of first responders in real time.',
				'The experiment was conducted in 2019 and involved astronauts on the ISS operating the hardware and software being tested. The results of the experiment could help improve disaster response and recovery operations on Earth, as well as inform future space missions aimed at supporting these efforts.'
			]
		},
		{
			title: 'Technology Research for Independent Capability and Resilience (TRICR)',
			id: 954,
			img: '',
			sources: [
				{
					title: 'NASA official site',
					link: 'https://www.nasa.gov/mission_pages/station/research/experiments/358.html'
				}
			],
			resources: new ResourcesType(
				[4, 1, 3, 4],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'TRICR is an experiment aimed at testing new technologies that can help astronauts sustain and maintain life-support systems during extended missions beyond low-Earth orbit.',
			fullDesc: [
				'The Technology Research for Independent Capability and Resilience (TRICR) experiment is being conducted on the International Space Station to test new technologies that can help astronauts sustain and maintain life-support systems during extended missions beyond low-Earth orbit. This is critical for future missions to the Moon, Mars, and beyond, where astronauts will need to rely on their own resources for long periods of time.',
				'The TRICR experiment consists of several technology demonstrations, including a closed-loop water recovery system that recycles urine and other wastewater into drinking water, a water-jacketed incubator that can support the growth of microbes, and a carbon dioxide removal system that uses a new type of adsorbent material.',
				'The results of the TRICR experiment will help NASA determine which technologies are most effective for future missions, and will also inform the development of new technologies that can help astronauts survive and thrive in deep space.'
			]
		},
		{
			title: 'Thermal Protection Materials and Systems (TPMS)',
			id: 955,
			img: '',
			sources: [
				{
					title: 'NASA - Thermal Protection System',
					link: 'https://www.nasa.gov/centers/armstrong/feature/thermal-protection-system.html'
				}
			],
			resources: new ResourcesType(
				[2, 2, 3, 3],
				[1, 1, 1, 1, 1, 1],
				[1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			).all(),
			shortDesc:
				'The Thermal Protection Materials and Systems (TPMS) experiment aims to evaluate the performance of new materials and systems that could improve the protection of spacecraft and their crews from the harsh conditions of space.',
			fullDesc: [
				'The TPMS experiment is focused on testing new thermal protection materials and systems for use in future spacecraft. The extreme temperatures and radiation encountered during spaceflight require advanced materials and systems that can withstand these conditions and protect the spacecraft and their crews.',
				'The TPMS experiment includes a variety of materials, including new thermal coatings, insulating materials, and structural composites. These materials will be tested under a variety of conditions, including exposure to high temperatures, radiation, and impact testing. The results of these tests will be used to evaluate the performance of the new materials and determine their suitability for use in space missions.',
				'One of the key goals of the TPMS experiment is to develop materials and systems that can improve the safety and resilience of spacecraft and their crews during space missions. By improving the thermal protection of spacecraft, we can reduce the risk of damage to critical systems and improve the chances of a successful mission. The results of the TPMS experiment will be used to inform the design of future spacecraft and their thermal protection systems.'
			]
		}
	]
};

export default TOC;
