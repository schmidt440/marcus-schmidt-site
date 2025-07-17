export interface QuizQuestion {
  id: string;
  question: string;
  type: "multiple-choice" | "calculation";
  options: string[];
  correct: number;
  explanation: string;
}

export interface Quiz {
  questions: QuizQuestion[];
  passingScore: number;
}

export interface WorkshopActivity {
  title: string;
  description: string;
  duration: string;
}

export interface CapstoneProject {
  title: string;
  description: string;
  requirements: string[];
}

export interface Module {
  id: number;
  title: string;
  description: string;
  week: number;
  duration: string;
  prerequisites?: number[];
  objectives: string[];
  content: {
    sections: {
      title: string;
      content: string;
    }[];
    workshop?: WorkshopActivity;
  };
  quiz: Quiz;
  capstoneProject?: CapstoneProject;
  estimatedTime?: string; // For backwards compatibility
}

export const courseModules: Module[] = [
  // Week 1: IoT Foundations & Strategic Framework
  {
    id: 1,
    title: "IoT Strategic Imperatives & Business Impact",
    description: "Understanding IoT's transformative potential and its impact on business operations. Identify key challenges and success factors in enterprise IoT deployment.",
    week: 1,
    duration: "90 minutes",
    objectives: [
      "Understand IoT's transformative potential and its impact on business operations",
      "Identify key challenges and success factors in enterprise IoT deployment",
      "Develop strategic thinking for internal IoT resource allocation"
    ],
    content: {
      sections: [
        {
          title: "The IoT Revolution: Understanding the Landscape",
          content: `The Internet of Things (IoT) represents a profound shift in how enterprises operate, extending digital capabilities into the physical world through interconnected devices. This paradigm offers unprecedented opportunities for digital transformation, enhancing operational efficiency, and fostering the creation of innovative business models.

For an IT manager, navigating the complexities of IoT deployment is not merely a technical task but a strategic imperative. Projections indicate the potential economic impact of IoT could range from $4 trillion to $11 trillion annually by 2025, underscoring its transformative power across industries.

**Case Study: Manufacturing Transformation**
A leading manufacturing company achieved $2.3M annual savings through predictive maintenance IoT implementation, demonstrating the tangible business value of strategic IoT deployment.`
        },
        {
          title: "Multi-disciplinary Challenge: Integration Complexity",
          content: `The journey to successful IoT implementation is fraught with unique challenges. IoT projects inherently span multiple technical disciplines, including:

• Hardware design and device engineering
• Firmware development and embedded systems
• Connectivity management and network protocols  
• Robust IoT security frameworks
• Sophisticated cloud infrastructure integration

This multi-disciplinary nature often exposes a significant talent and knowledge gap within organizations, as many lack the specialized expertise required to integrate these disparate entities effectively.

**Talent Acquisition Challenges:**
Finding and retaining talent across these varied domains becomes a considerable hurdle, frequently necessitating either substantial internal upskilling or strategic outsourcing.`
        },
        {
          title: "Critical Success Factors",
          content: `**Talent Acquisition and Skill Development:**
The specialized expertise required across hardware, firmware, networking, cloud, and security is often lacking internally. Organizations must strategically invest in training existing staff or acquiring new talent to bridge this gap.

**Cross-functional Team Formation:**
Successful IoT initiatives require collaboration beyond traditional IT silos. Involving engineering, legal, product, and security teams from the outset ensures alignment on goals and responsibilities, preventing blind spots and fostering a shared understanding of the project's scope and risks.

**Internal Alignment and Change Management:**
Beyond technical execution, the IT manager's role shifts to strategic internal advocacy. Gaining clear internal alignment and managing organizational adaptation to new IoT-driven workflows are vital for successful implementation.`
        },
        {
          title: "Financial Reality Check: Total Cost of Ownership (TCO)",
          content: `The financial implications of IoT deployments present a significant barrier. Accurately forecasting the Total Cost of Ownership (TCO) and Return on Investment (ROI) for IoT initiatives is notoriously difficult, with many organizations underestimating the true financial commitment.

**Direct Costs:**
• Hardware (sensors, gateways, actuators)
• Software and platform expenses
• Connectivity fees
• Initial deployment and setup

**Hidden Costs (Often Overlooked):**
• Security, compliance, and certification investments
• Scalability adaptation costs
• Maintenance and support requirements
• Engineering and management labor costs
• Change management expenses
• Integration with existing systems
• Data management and analytics infrastructure

**Critical Insight:** The average in-house IoT project takes 18-24 months to reach market readiness, often excluding unforeseen delays from failed certifications, scope changes, or team onboarding.

**ROI Evaluation Framework:**
Focus on specific internal business models such as predictive maintenance or data-driven inventory optimization. Quantify expected productivity increases or cost savings with concrete metrics and timeline expectations.`
        }
      ]
    },
    quiz: {
      questions: [
        {
          id: "1-1",
          question: "What percentage of IoT projects fail due to poor interoperability?",
          type: "multiple-choice",
          options: ["40%", "60%", "80%", "90%"],
          correct: 1,
          explanation: "Statistics indicate that nearly 60% of IoT solution failures are attributed to poor interoperability among devices from different manufacturers."
        },
        {
          id: "1-2",
          question: "Which of the following is NOT typically considered a hidden cost in IoT deployment?",
          type: "multiple-choice",
          options: ["Security and compliance investments", "Hardware sensor costs", "Change management expenses", "Engineering labor costs"],
          correct: 1,
          explanation: "Hardware sensor costs are direct costs, while security/compliance, change management, and engineering labor are often hidden costs that are underestimated."
        },
        {
          id: "1-3",
          question: "What is the average timeframe for in-house IoT projects to reach market readiness?",
          type: "multiple-choice",
          options: ["6-12 months", "12-18 months", "18-24 months", "24-36 months"],
          correct: 2,
          explanation: "The average in-house IoT project takes 18-24 months to reach market readiness, often excluding unforeseen delays."
        }
      ],
      passingScore: 80
    }
  },
  {
    id: 2,
    title: "IoT Architecture & System Design",
    description: "Master IoT system architecture components and their interactions. Understand edge computing's strategic value proposition and design scalable IoT architectures.",
    week: 1,
    duration: "90 minutes",
    prerequisites: [1],
    objectives: [
      "Master IoT system architecture components and their interactions",
      "Understand edge computing's strategic value proposition",
      "Design scalable IoT architectures using best practices"
    ],
    content: {
      sections: [
        {
          title: "IoT System Architecture Deep Dive",
          content: `A foundational understanding of IoT systems is crucial for any IT manager embarking on enterprise deployment. An IoT system is a complex interplay of interconnected components, each playing a vital role in data flow and operational execution.

**Device Layer:**
At its base are the Devices, often referred to as "things," which include sensors, actuators, and embedded systems responsible for collecting data from the physical world and executing actions. Enterprise IoT devices are often highly specialized and robust, designed for specific industrial or commercial environments.

• Sensors collect environmental data (temperature, motion, pressure)
• Actuators perform actions based on commands (opening valves, adjusting settings)
• Embedded systems provide local intelligence and processing

**Connectivity Layer:**
This layer facilitates communication between IoT devices and other system components. Connectivity options range from wired connections (Ethernet) to diverse wireless technologies like cellular, Wi-Fi, and Low-Power Wide-Area Networks (LPWAN). The choice depends on range, bandwidth, and power consumption requirements.`
        },
        {
          title: "Edge Computing and Cloud Infrastructure",
          content: `**Edge Computing Layer:**
As data flows from devices, it often passes through Gateways or Edge Computing layers. These components perform local processing and aggregation of data before transmission to the cloud, significantly reducing latency and bandwidth consumption.

**Strategic Benefits of Edge Computing:**
• Immediate insights and actions for time-sensitive applications
• Reduced bandwidth costs through local data filtering
• Enhanced reliability with local processing capabilities
• Compliance with data residency requirements

**Cloud Infrastructure:**
The aggregated and processed data is sent to Cloud or Backend Infrastructure, serving as the central hub for large-scale data storage, advanced analytics, and application hosting.

**Leading Platforms:**
• Azure IoT Hub for enterprise-grade device management
• AWS IoT Core for scalable IoT applications  
• Google Cloud IoT Core for AI/ML integration

**Application Layer:**
Applications and User Interfaces provide means for end-users or business systems to interact with processed data and control IoT devices. This transforms processed data into actionable insights through dashboards, reports, and enterprise system integration.`
        },
        {
          title: "The Interoperability Challenge",
          content: `The complexity of IoT systems lies in their intricate interdependencies. A significant challenge arises from the "interoperability tax" that can impact scalability.

**Key Statistics:**
• Nearly 60% of IoT solution failures are attributed to poor interoperability
• Devices from different manufacturers often use varying communication protocols
• Integration effort can consume 40-60% of development time

**Standards Landscape:**
• **IEEE:** Global standards for IoT networking, data formats, and physical device interfaces
• **IETF:** Essential protocols for IoT communications (IPv6, MQTT, CoAP)
• **ISO/IEC 30141:** Reference architecture for IoT interoperability

**Design Patterns for Future-Proof Architectures:**
To avoid vendor lock-in and ensure future growth, IT managers must prioritize open standards and compatible technologies from the outset. This ensures systems can handle increased demand without major overhauls.`
        },
        {
          title: "Edge Computing Strategic Value",
          content: `Edge computing emerges as a strategic enabler for real-time value and cost optimization. While cloud platforms offer immense scalability, the sheer volume and velocity of IoT data make immediate decision-making challenging with purely cloud-centric models.

**Latency Reduction:**
Edge computing facilitates immediate insights and actions by processing critical real-time data closer to its source, significantly reducing latency for time-critical applications.

**Bandwidth Optimization:**
Local processing reduces bandwidth costs by filtering and processing data locally, sending only relevant, aggregated data to the cloud.

**Cost Analysis Framework:**
Local processing can be more cost-effective for high-volume, real-time data compared to purely cloud-centric models, especially considering data transfer costs.

**Hybrid Architecture Strategy:**
IT managers should consider a hybrid edge-cloud architecture from the initial design phase, carefully evaluating where data processing is most efficient and provides the greatest business value.

**Implementation Examples:**
• Manufacturing: Real-time quality control processing at the production line
• Retail: Immediate inventory updates and customer analytics
• Healthcare: Patient monitoring with instant alert capabilities`
        }
      ]
    },
    quiz: {
      questions: [
        {
          id: "2-1",
          question: "Complete the IoT architecture layers in order from bottom to top:",
          type: "multiple-choice",
          options: ["Device → Cloud → Edge → Application", "Device → Connectivity → Edge → Cloud → Application", "Connectivity → Device → Edge → Cloud → Application", "Edge → Device → Connectivity → Cloud → Application"],
          correct: 1,
          explanation: "The correct IoT architecture flow is: Device Layer → Connectivity Layer → Edge Computing Layer → Cloud Infrastructure → Application Layer."
        },
        {
          id: "2-2",
          question: "If edge computing reduces data transmission by 90%, and cloud data transfer costs $0.10 per GB, what would be the monthly savings for a system generating 1000 GB of data?",
          type: "calculation",
          options: ["$90", "$100", "$900", "$1000"],
          correct: 0,
          explanation: "1000 GB × 90% reduction × $0.10 = $90 monthly savings through edge processing data reduction."
        },
        {
          id: "2-3",
          question: "For a smart building with 500 sensors generating real-time environmental data, which architecture approach would be most appropriate?",
          type: "multiple-choice",
          options: ["Pure cloud processing for all sensor data", "Hybrid edge-cloud with local processing for alerts and cloud for analytics", "Local processing only with no cloud connectivity", "Manual data collection and processing"],
          correct: 1,
          explanation: "A hybrid approach allows real-time edge processing for immediate alerts while leveraging cloud analytics for comprehensive building management insights."
        }
      ],
      passingScore: 80
    }
  },
  {
    id: 3,
    title: "Device Lifecycle Management & Security by Design",
    description: "Implement comprehensive device lifecycle management strategies and apply 'security by design' principles from conception to deployment.",
    week: 1,
    duration: "90 minutes",
    prerequisites: [2],
    objectives: [
      "Implement comprehensive device lifecycle management strategies",
      "Apply 'security by design' principles from conception to deployment", 
      "Establish secure device authentication and provisioning processes"
    ],
    content: {
      sections: [
        {
          title: "Planning & Design Phase",
          content: `The initial phase focuses on clearly defining the purpose of the IoT deployment and designing devices to meet specific requirements. This stage is crucial for ensuring seamless integration with existing systems and handling unique operational demands.

**Defining Objectives:**
Articulating what problem the IoT device will solve and how it aligns with business goals.

**Technology Selection Criteria:**
• Sensor types and accuracy requirements
• Connectivity options and coverage needs
• Platform compatibility and integration capabilities
• Power consumption and battery life considerations
• Environmental durability and operating conditions

**Scalability Planning:**
Ensuring the design can accommodate future growth of the IoT ecosystem without requiring complete architecture overhauls.

**Security by Design Fundamentals:**
A cornerstone of this phase is "security by design," which means incorporating security features into the device from its very inception to avoid costly rework and delays later.

**Implementation Principles:**
• Secure defaults with no hardcoded passwords
• Strong, unique authentication for all devices
• Encrypted communication from the start
• Regular security update mechanisms
• Principle of least privilege implementation`
        },
        {
          title: "Security by Design Implementation",
          content: `**Secure Defaults:**
Implementing secure default settings, eliminating hardcoded passwords, and enforcing the use of strong, unique passwords for all devices.

**Principle of Least Privilege Implementation:**
User permissions on IoT devices and the devices' access to other IT resources should be limited to the absolute minimum required for business needs. This minimizes attack surface and limits breach impact.

**Hardware Security Modules (HSM) and Trusted Platform Modules (TPM):**
Advanced security features integrated into hardware to provide:
• Secure root of trust establishment
• Secure key storage and management
• Cryptographic operations protection
• Hardware-based device identity

**Encryption Standards:**
• AES-256 for data encryption
• TLS 1.3 for communication security
• PKI for device authentication
• Secure boot processes for firmware integrity`
        },
        {
          title: "Procurement & Deployment",
          content: `**Hardware Sourcing:**
Obtaining devices that meet defined specifications. As fleets grow, sourcing tens or hundreds of thousands of particular hardware components becomes a major challenge, making supply chain management critical to scaling.

**Initial Setup:**
• Device configuration and parameter setting
• Network parameters and connectivity setup
• Data collection parameters definition
• Security configuration implementation

**Deployment Logistics:**
Critical for large-scale rollouts or devices in remote/industrial settings, requiring careful strategizing of physical placement, access, and maintenance procedures.

**Secure Device Onboarding Processes:**
Ensuring each device is properly authenticated and securely connected to the network using digital certificates and Public Key Infrastructure (PKI) to verify device identity and prevent rogue device connections.`
        },
        {
          title: "Certificate Management and Security Metrics",
          content: `**Certificate Management and PKI Implementation:**
PKI is regularly used for securing communications and IoT devices. Digital certificates help devices verify their identity, preventing rogue devices from connecting to the network.

**Key Components:**
• Root Certificate Authority (CA) establishment
• Device certificate provisioning
• Certificate lifecycle management
• Revocation and renewal processes

**Initial Configuration and Hardening Procedures:**
• Disabling unused features and services
• Implementing network segmentation
• Configuring monitoring and logging
• Establishing update mechanisms

**Critical Security Metrics:**

**Mean Time to Patch (MTTP):**
Average time to apply security patches after vulnerability discovery. Lower MTTP indicates more responsive and secure systems.

**Device Vulnerability Exposure Window:**
Period during which devices are vulnerable due to unpatched software or known exploits. Minimizing this window is crucial for risk reduction.

**Security Incident Response Times:**
Speed at which organizations can detect, analyze, and contain security breaches. Rapid response is essential to minimize damage and data loss.

**Best Practice Targets:**
• MTTP: < 48 hours for critical vulnerabilities
• Vulnerability Exposure: < 72 hours
• Incident Response: < 4 hours for detection and initial containment`
        }
      ]
    },
    quiz: {
      questions: [
        {
          id: "3-1",
          question: "Which security principle should be implemented from the device design phase?",
          type: "multiple-choice",
          options: ["Security by obscurity", "Security by design", "Security by compliance", "Security by testing"],
          correct: 1,
          explanation: "Security by design means incorporating security features into the device from its very inception to avoid costly rework and delays later."
        },
        {
          id: "3-2",
          question: "What is the recommended Mean Time to Patch (MTTP) for critical vulnerabilities?",
          type: "multiple-choice",
          options: ["< 24 hours", "< 48 hours", "< 72 hours", "< 1 week"],
          correct: 1,
          explanation: "Best practice targets recommend MTTP of less than 48 hours for critical vulnerabilities to minimize exposure windows."
        },
        {
          id: "3-3",
          question: "Which component is essential for preventing rogue devices from connecting to the network?",
          type: "multiple-choice",
          options: ["Strong passwords only", "Public Key Infrastructure (PKI)", "Firewall rules", "Network monitoring"],
          correct: 1,
          explanation: "PKI and digital certificates help devices verify their identity, preventing rogue devices from connecting to the network."
        }
      ],
      passingScore: 80
    },
    capstoneProject: {
      title: "Week 1 Capstone Project",
      description: "Develop a comprehensive device lifecycle management plan for your organization, including security requirements, procurement criteria, and deployment procedures.",
      requirements: [
        "Device lifecycle management strategy",
        "Security by design implementation plan",
        "Procurement criteria and vendor evaluation framework",
        "Deployment procedures and logistics plan",
        "Security metrics and monitoring framework"
      ]
    }
  },

  // Week 2: Connectivity Strategies & Operational Excellence
  {
    id: 4,
    title: "Advanced Connectivity Options & Strategic Selection",
    description: "Compare major IoT connectivity technologies and develop strategic selection frameworks",
    week: 2,
    duration: "90 minutes",
    prerequisites: [3],
    objectives: [
      "Compare and contrast major IoT connectivity technologies",
      "Develop decision frameworks for connectivity selection",
      "Understand cost-performance trade-offs in connectivity choices"
    ],
    content: {
      sections: [
        {
          title: "Connectivity Technology Deep Dive",
          content: `Selecting the appropriate connectivity option is a pivotal decision for any IT manager deploying IoT solutions, as it directly impacts performance, cost, and security. There is no single "best" solution; rather, each choice involves a compromise tailored to specific enterprise use cases.

**Cellular Technologies:**
These networks (including 2G, 3G, 4G, 5G, NB-IoT, and LTE-M) offer wide coverage and generally provide robust encryption for security.

• **5G/LTE-M:** 5G offers very high bandwidth and extremely low latency, ideal for demanding applications like real-time control and high-definition video streaming. LTE-M is a low-power, low-bandwidth variant designed for battery-powered devices.
• **NB-IoT:** Provides very low power consumption and low data rates over wide areas, making it ideal for battery-powered sensors that send small, infrequent data packets.
• **Coverage Maps and Carrier Selection:** Critical factor is whether the technology will provide reliable signal everywhere devices need to be deployed, including building penetration and isolated locations.`
        },
        {
          title: "LPWAN and Local Connectivity Solutions",
          content: `**LPWAN Solutions:**
Technologies like LoRaWAN and NB-IoT are optimized for connecting massive numbers of IoT devices across vast geographical areas with very low power consumption and very low data rates. Particularly effective for smart cities, agricultural sensors, and utility metering.

**Local Connectivity:**
• **Wi-Fi 6:** Provides high bandwidth and is cost-effective for localized deployments, leveraging existing infrastructure. Range is limited, and power consumption can be moderate, posing challenges for battery-operated devices.
• **Zigbee/Z-Wave:** Mesh protocols that create self-healing networks where devices relay data to each other, extending range and bypassing obstacles. Low power consumption with moderate data rates.
• **Bluetooth LE:** Excels in low-power situations, sending data bursts ideal for sensors and wearables. Operates over short range.`
        },
        {
          title: "Strategic Decision Framework",
          content: `When evaluating connectivity options, IT managers must consider several critical factors:

**1. Coverage Requirements Analysis:**
Determining if the technology will provide reliable signal everywhere devices need to be deployed, including building penetration and isolated locations.

**2. Bandwidth vs. Power Consumption Trade-offs:**
The network's maximum capacity impacts data packet volume and size. For battery-powered devices, connectivity must not consume excessive power over the device lifecycle.

**3. Cost Modeling:**
Balancing upfront technology and infrastructure costs with ongoing per-device fees. Consumption-based models can lead to unpredictable costs, while flat-rate models offer more controllable expenses.

**4. Latency Requirements:**
Delay in data transmission, crucial for real-time applications. Wired options like Ethernet or high-speed cellular (4G/5G) offer lowest latency.

**5. Mobility and Roaming:**
How well the technology supports constantly moving devices. Cellular networks excel for mobile applications.

**6. Security Considerations:**
Robustness of encryption and additional security measure requirements. Cellular networks typically offer robust encryption; LPWAN may be more vulnerable.

**7. Redundancy Planning:**
Availability of backup options for critical systems. Cellular allows switching between providers; mesh protocols offer self-healing capabilities.`
        }
      ],
      workshop: {
        title: "Connectivity Selection Workshop",
        description: "Use decision matrix tool to select optimal connectivity for specific use cases",
        duration: "10 minutes"
      }
    },
    quiz: {
      questions: [
        {
          id: "4-1",
          question: "Which connectivity technology is best for battery-powered sensors sending small, infrequent data packets?",
          type: "multiple-choice",
          options: ["5G", "Wi-Fi 6", "NB-IoT", "Ethernet"],
          correct: 2,
          explanation: "NB-IoT provides very low power consumption and low data rates over wide areas, making it ideal for battery-powered sensors that send small, infrequent data packets."
        },
        {
          id: "4-2",
          question: "What is a key advantage of mesh protocols like Zigbee and Z-Wave?",
          type: "multiple-choice",
          options: ["High bandwidth", "Long range coverage", "Self-healing networks", "Low cost"],
          correct: 2,
          explanation: "Mesh protocols create self-healing networks where devices relay data to each other, extending range and bypassing obstacles."
        },
        {
          id: "4-3",
          question: "Calculate 5-year connectivity costs for 10,000 devices: NB-IoT at $2/device/month vs. LoRaWAN at $50,000 infrastructure + $0.50/device/month",
          type: "calculation",
          options: ["NB-IoT: $1.2M, LoRaWAN: $350K", "NB-IoT: $1.2M, LoRaWAN: $650K", "NB-IoT: $2.4M, LoRaWAN: $350K", "Both cost the same"],
          correct: 0,
          explanation: "NB-IoT: 10,000 × $2 × 60 months = $1.2M. LoRaWAN: $50K + (10,000 × $0.50 × 60) = $350K total."
        }
      ],
      passingScore: 80
    }
  },
  {
    id: 5,
    title: "Operational Management & Maintenance Excellence",
    description: "Master comprehensive device monitoring, OTA updates, and fleet management automation",
    week: 2,
    duration: "90 minutes",
    prerequisites: [4],
    objectives: [
      "Implement comprehensive device monitoring and maintenance strategies",
      "Master Over-the-Air (OTA) update management for security and functionality",
      "Develop automation frameworks for large-scale device fleet management"
    ],
    content: {
      sections: [
        {
          title: "Performance Monitoring & Analytics",
          content: `Continuously tracking device functionality and data output to detect anomalies or issues is fundamental to operational excellence.

**Key Performance Indicators (KPIs):**
IT managers should track metrics such as uptime, latency, throughput, and error rates to measure system health and performance.

**Monitoring Tools and Dashboards:**
• **Grafana:** Real-time visualization of IoT data with customizable dashboards
• **Prometheus:** Time-series monitoring system for collecting and storing metrics
• **CloudWatch/Azure Monitor:** Cloud-native monitoring solutions

**Predictive Analytics for Proactive Maintenance:**
Leveraging data from IoT devices to predict maintenance needs allows for proactive interventions, significantly reducing unplanned downtime and extending machine life. This shifts from reactive repairs to proactive, data-driven maintenance.

**Alert Systems and Escalation Procedures:**
Setting up automatic alerts for unusual patterns ensures prompt responses to potential issues, minimizing their impact. Establish clear escalation paths and response time requirements.`
        },
        {
          title: "Over-the-Air (OTA) Updates - Critical Success Factor",
          content: `Over-the-Air (OTA) updates refer to the ability to remotely reprogram devices in the field. This capability is a cornerstone of modern IoT device management and long-term viability.

**Security Patch Deployment:**
OTA updates are crucial for addressing newly discovered vulnerabilities and upgrading security features, protecting devices from evolving cyber threats. Manufacturers frequently release software with unpatched vulnerabilities.

**Feature Updates and Functionality Enhancement:**
OTA updates enable remote addition of new features and capabilities to deployed fleets, extending functionality and value proposition without physical intervention.

**OTA Architecture Requirements:**
• Updates must be encrypted and authenticated
• Capability for rollback to previous stable state
• Staged deployment for risk mitigation
• Failure recovery and device recovery procedures

**Compliance Requirements:**
Regulations like the EU Cyber Resilience Act (EU CRA) increasingly mandate robust vulnerability handling and post-market support, including updates, for several years.`
        },
        {
          title: "Fleet Management Automation",
          content: `As IoT deployments grow from dozens to thousands or hundreds of thousands of devices, manual management becomes untenable, leading to human error, missed updates, and increased security vulnerabilities.

**Device Grouping and Policy Management:**
Streamlining device configuration and firmware updates through automation significantly reduces manual effort and potential for human error.

**Automated Compliance Checking and Reporting:**
Automation ensures consistency, reduces the burden of IoT security skill gaps, and allows for proactive issue resolution.

**Configuration Management and Drift Detection:**
• **Ansible:** Automates device configuration and deployment
• **Puppet:** Ensures consistency across device fleets
• **Chef:** Infrastructure as code for IoT device management

**Incident Response Automation and Playbooks:**
Automating parts of the incident response process can significantly reduce response times and minimize security incident impact.`
        },
        {
          title: "The Security Debt Concept",
          content: `**Cumulative Risk of Unpatched Devices:**
Failing to embed security at the design phase or neglecting timely updates creates "security debt." This debt accumulates over the device's operational life, making it increasingly vulnerable and far more costly to secure later.

**Quantifying Security Debt:**
While difficult to measure precisely, the average cost per data breach ($4.35M) implies the significant financial impact of accumulated security debt.

**Debt Reduction Strategies:**
• Prioritizing critical security updates
• Implementing automated patch management
• Regular security assessments and audits
• Proactive vulnerability scanning
• Clear security update policies and procedures

**Prioritization Frameworks:**
• **CVSS Scoring:** Use Common Vulnerability Scoring System for prioritization
• **Business Impact Assessment:** Consider potential impact on operations
• **Exploit Availability:** Prioritize vulnerabilities with known exploits
• **Asset Criticality:** Focus on most critical devices first`
        }
      ],
      workshop: {
        title: "OTA Update Strategy Workshop",
        description: "Develop staged update deployment plan for critical security patch",
        duration: "10 minutes"
      }
    },
    quiz: {
      questions: [
        {
          id: "5-1",
          question: "What is the primary purpose of Over-the-Air (OTA) updates?",
          type: "multiple-choice",
          options: ["Reduce device costs", "Enable remote device reprogramming", "Increase battery life", "Improve connectivity"],
          correct: 1,
          explanation: "OTA updates refer to the ability to remotely reprogram devices in the field, enabling security patches and feature updates without physical intervention."
        },
        {
          id: "5-2",
          question: "Which tools are commonly used for real-time IoT monitoring and visualization?",
          type: "multiple-choice",
          options: ["Excel and PowerPoint", "Grafana and Prometheus", "Word and Outlook", "Photoshop and Illustrator"],
          correct: 1,
          explanation: "Grafana and Prometheus are commonly used for real-time monitoring and visualization of IoT data, providing insights into device performance and potential issues."
        },
        {
          id: "5-3",
          question: "What is 'security debt' in IoT context?",
          type: "multiple-choice",
          options: ["Money owed for security software", "Cumulative risk from unpatched devices", "Cost of security training", "Price of security hardware"],
          correct: 1,
          explanation: "Security debt refers to the cumulative risk that accumulates when security is not embedded at the design phase or when updates and patches are neglected."
        }
      ],
      passingScore: 80
    }
  },
  {
    id: 6,
    title: "End-of-Life Management & Connectivity Security",
    description: "Implement secure device decommissioning and design layered connectivity security approaches",
    week: 2,
    duration: "90 minutes",
    prerequisites: [5],
    objectives: [
      "Implement secure device decommissioning and data sanitization procedures",
      "Understand connectivity as a primary attack vector",
      "Design layered security approaches for IoT communications"
    ],
    content: {
      sections: [
        {
          title: "Device Decommissioning & Retirement",
          content: `The final phase addresses the safe and responsible retirement of devices that are no longer functional or needed. Planning for secure decommissioning from day one is critical, as poorly managed retirements can leave significant security vulnerabilities.

**Secure Data Erasure:**
Securely removing any sensitive information stored on the device is paramount. This must adhere to standards like NIST SP 800-88, which provides guidelines for media sanitization.

**Certificate Revocation and Identity Management:**
Revoking device identities and certificates is crucial to prevent unauthorized access or impersonation post-retirement. This ensures that even if a device falls into the wrong hands, it cannot be used to access the network.

**Hardware Disposal and Recycling Procedures:**
Following environmentally friendly practices for hardware disposal or recycling is essential to minimize ecological impact and comply with regulations.

**Replacement Planning and Technology Refresh Cycles:**
Ensuring continuity by integrating newer, more advanced devices into the ecosystem. This involves assessing the lifespan of devices and planning for their replacement before they become obsolete or unsupportable.

**Legal and Compliance Requirements for Data Destruction:**
Poorly managed retirements can leave sensitive data exposed, leading to significant privacy concerns and potential breaches. Compliance with data privacy laws like GDPR often mandates secure data erasure.`
        },
        {
          title: "Connectivity Security Deep Dive",
          content: `The chosen connectivity method is not merely for data transfer; it represents a critical entry point for cyberattacks, necessitating a layered security approach.

**Primary Attack Vectors:**
• Man-in-the-middle attacks: Can occur on cellular connections, where an attacker intercepts communication between the device and the network
• Wi-Fi network infiltration and lateral movement: Weak Wi-Fi security can allow attackers to gain access to the network and move laterally to other systems
• Protocol-specific vulnerabilities: Protocols like MQTT, CoAP, or HTTP can have inherent vulnerabilities if not implemented securely

**Layered Security Architecture:**
A layered security strategy is mandated where any inherent weaknesses at the connectivity layer are compensated for by stronger security measures at the device, application, and data layers.`
        },
        {
          title: "Security Implementation Strategies",
          content: `**Network Segmentation and Micro-segmentation:**
Deploying IoT devices on a separate, segmented network from other critical IT systems is crucial. This limits the risk and impact of a compromised IoT device by preventing it from accessing more sensitive parts of the corporate network. Micro-segmentation further isolates individual devices or small groups.

**VPN and Encrypted Tunnel Implementation:**
Using Virtual Private Networks (VPNs) and encrypted tunnels (e.g., IPsec) ensures that data transmitted over public networks remains confidential and protected from eavesdropping.

**Application-layer Encryption (TLS 1.3, AES-256):**
Data must be encrypted both at rest (when stored on devices or servers) and in transit (when transmitted between devices and servers) to prevent unauthorized access. End-to-End Encryption (E2EE) is often used to safeguard user, cloud platform, IoT device, and communication between them.

**Certificate-based Device Authentication (PKI):**
Utilizing Public Key Infrastructure (PKI) and digital certificates helps devices verify their identity, stopping rogue devices from connecting to the network.

**Network Access Control (NAC) Integration:**
Organizations should have visibility into all devices on their network and the ability to restrict network access and block unnecessary traffic to unnecessary ports based on business needs.`
        },
        {
          title: "Security Monitoring & Response",
          content: `**Network Traffic Analysis and Anomaly Detection:**
Continuously checking, tracking, and reporting on the function of IoT devices is crucial to identify suspicious activity quickly. This includes monitoring network traffic for unusual patterns.

**Intrusion Detection Systems (IDS) for IoT Networks:**
Deploying IDS specifically designed for IoT environments can help detect malicious activities or unauthorized access attempts.

**Security Incident Response Procedures:**
Developing clear plans for quick detection, diagnosis, and recovery from issues is paramount for ensuring reliability and continuous operation.

**Threat Intelligence Integration and Sharing:**
Staying informed about new threats and vulnerabilities through threat intelligence feeds helps organizations proactively defend against emerging attacks.`
        }
      ],
      workshop: {
        title: "Security Assessment Workshop",
        description: "Evaluate connectivity security posture for a given scenario",
        duration: "10 minutes"
      }
    },
    quiz: {
      questions: [
        {
          id: "6-1",
          question: "Which standard provides guidelines for secure media sanitization during device decommissioning?",
          type: "multiple-choice",
          options: ["ISO 27001", "NIST SP 800-88", "GDPR Article 17", "IEEE 802.11"],
          correct: 1,
          explanation: "NIST SP 800-88 provides guidelines for media sanitization, ensuring secure data erasure during device decommissioning."
        },
        {
          id: "6-2",
          question: "What is the primary purpose of network segmentation in IoT security?",
          type: "multiple-choice",
          options: ["Increase network speed", "Reduce bandwidth usage", "Limit impact of compromised devices", "Simplify network management"],
          correct: 2,
          explanation: "Network segmentation limits the risk and impact of a compromised IoT device by preventing it from accessing more sensitive parts of the corporate network."
        },
        {
          id: "6-3",
          question: "Which security approach is recommended for IoT connectivity?",
          type: "multiple-choice",
          options: ["Single-layer protection", "Layered security architecture", "Connectivity-only security", "Device-only security"],
          correct: 1,
          explanation: "A layered security strategy compensates for inherent weaknesses at the connectivity layer with stronger security measures at device, application, and data layers."
        }
      ],
      passingScore: 80
    },
    capstoneProject: {
      title: "Week 2 Capstone Project",
      description: "Create a comprehensive operational management plan including monitoring, OTA updates, and security incident response procedures for your IoT deployment.",
      requirements: [
        "Device monitoring and analytics framework",
        "OTA update deployment strategy",
        "Fleet management automation plan",
        "Security incident response procedures",
        "End-of-life management process"
      ]
    }
  },

  // Week 3: Security Mastery & Data Management
  {
    id: 7,
    title: "Enterprise IoT Security Challenges & Framework",
    description: "Identify top IoT security challenges and implement Zero Trust Architecture principles for IoT deployments",
    week: 3,
    duration: "90 minutes",
    prerequisites: [6],
    objectives: [
      "Identify and quantify top IoT security challenges in enterprise environments",
      "Implement Zero Trust Architecture principles for IoT deployments",
      "Develop comprehensive security governance frameworks"
    ],
    content: {
      sections: [
        {
          title: "Enterprise IoT Security Landscape",
          content: `A significant challenge stems from the Standards Gap and Manufacturer Noncompliance. Currently, no unified global standard for IoT cybersecurity exists, leading many manufacturers to neglect basic cybersecurity practices. This results in inherent vulnerabilities within enterprise networks.

**Critical Challenge Areas:**

**Standards Fragmentation:** The lack of a unified global standard for IoT cybersecurity means manufacturers are largely left to their own devices regarding security practices.

**Manufacturer Security Neglect:** As a result of the standards gap, many IoT manufacturers fail to comply with basic cybersecurity best practices, introducing vulnerabilities.

**Credential Management:** Many IoT devices are designed for "plug and play" functionality, often coming with hardcoded, embedded, or default credentials that are rarely changed by users, making them easy targets for cybercriminals.

**Weak Update Mechanisms:** Manufacturers frequently release software with unpatched vulnerabilities, and even when updates are available, users and administrators often fail to apply them. This "set it and forget it" mentality leaves devices susceptible to attackers.

**Skills Gap:** IoT is a relatively new and rapidly expanding technology, and many users and organizations lack the expertise to fully understand their devices' capabilities, security risks, or potential for abuse. Over three-quarters of organizations reportedly lack the necessary IoT expertise to operate and secure their existing infrastructure.`
        },
        {
          title: "Zero Trust Architecture for IoT",
          content: `This model mandates that every communication, whether internal or external, requires constant authentication and verification, as no device or user is inherently trusted. This is a robust approach for securing complex IoT environments.

**"Never Trust, Always Verify" Principle Implementation:**
The core tenet of Zero Trust is to assume breach and verify every access attempt, regardless of whether it originates inside or outside the network.

**Identity and Access Management (IAM) for Devices:**
Ensuring only authorized devices can connect to the IoT solution and that their identities are continuously verified.

**Continuous Authentication and Authorization:**
Beyond initial login, access to resources is continuously evaluated based on context, device posture, and user behavior.

**Micro-segmentation and Least Privilege Access:**
Isolating IoT devices into small, granular network segments and limiting user permissions and device access to the absolute minimum required for business needs. This makes it more difficult for an attacker to gain widespread access and minimizes the impact of a breach.

**Behavioral Analytics and Anomaly Detection:**
Continuously monitoring device activity and user behavior to detect unusual patterns that may indicate a breach or compromise.`
        },
        {
          title: "Security Governance Framework",
          content: `Establishing clear policies and procedures for managing IoT devices throughout their lifecycle is crucial for consistency and accountability.

**Security Policy Development and Enforcement:**
Defining roles, responsibilities, and security standards for IoT device management.

**Risk Assessment and Management Procedures:**
Regularly conducting vulnerability assessments and employing threat modeling helps identify how attackers might target products and where the most significant vulnerabilities exist. This should be a component of an organization's overall risk management strategy.

**Compliance Monitoring and Reporting:**
Ensuring adherence to various global and regional regulations (e.g., GDPR, EU CRA, NIST) and maintaining audit-ready documentation.

**Incident Response and Recovery Planning:**
Having clear plans for detecting, analyzing, containing, and recovering from security incidents is paramount.

**Third-Party Risk Management:**
Assessing the security posture of vendors and partners involved in the IoT supply chain is critical, as vulnerabilities can originate from external sources.`
        }
      ],
      workshop: {
        title: "Risk Assessment Workshop",
        description: "Use provided framework to assess organizational IoT security posture",
        duration: "10 minutes"
      }
    },
    quiz: {
      questions: [
        {
          id: "7-1",
          question: "What percentage of organizations lack necessary IoT expertise to operate and secure their infrastructure?",
          type: "multiple-choice",
          options: ["50%", "65%", "75%", "85%"],
          correct: 2,
          explanation: "Over three-quarters (75%+) of organizations reportedly lack the necessary IoT expertise to operate and secure their existing infrastructure."
        },
        {
          id: "7-2",
          question: "What is the core principle of Zero Trust Architecture?",
          type: "multiple-choice",
          options: ["Trust but verify", "Never trust, always verify", "Trust internal networks", "Verify once, trust always"],
          correct: 1,
          explanation: "The core tenet of Zero Trust is 'never trust, always verify' - assume breach and verify every access attempt regardless of origin."
        },
        {
          id: "7-3",
          question: "Which approach best addresses the IoT standards fragmentation challenge?",
          type: "multiple-choice",
          options: ["Wait for global standards", "Implement comprehensive security governance framework", "Use only one vendor", "Disable security features"],
          correct: 1,
          explanation: "A comprehensive security governance framework helps address standards fragmentation by establishing clear policies and procedures for IoT device management."
        }
      ],
      passingScore: 80
    }
  },
  {
    id: 8,
    title: "Advanced Security Implementation & Human Factors",
    description: "Implement advanced data and device security measures while addressing human factors and Shadow IT in IoT security",
    week: 3,
    duration: "90 minutes",
    prerequisites: [7],
    objectives: [
      "Implement advanced data and device security measures",
      "Address human factors and Shadow IT in IoT security",
      "Develop security awareness programs for IoT environments"
    ],
    content: {
      sections: [
        {
          title: "Advanced Data Security",
          content: `Protecting the vast amounts of data generated by IoT devices is paramount. IoT systems are highly vulnerable to cyberattacks and data leaks, making robust security measures and adherence to privacy laws paramount.

**Encryption Implementation:**
Data must be encrypted both at rest (when stored on devices or servers) and in transit (when transmitted between devices and servers) to prevent unauthorized access. Standards like AES-256 and End-to-End Encryption (E2EE) are highly recommended for strong defense against unwanted access.

**Key Management and Rotation Strategies:**
Securely managing encryption keys is critical. This includes secure generation, storage (e.g., using HSMs), distribution, and regular rotation of cryptographic keys.

**Hardware Security Modules (HSM) Integration:**
HSMs provide a secure environment for cryptographic operations and key storage, protecting sensitive keys from software attacks.

**Quantum-Resistant Cryptography Preparation:**
As quantum computing advances, current encryption methods may become vulnerable. Preparing for quantum-resistant cryptography involves researching and planning for future-proof encryption solutions.

**Data Minimization Strategies:**
Adopting a policy of only gathering data absolutely necessary for the device's purpose reduces the attack surface available for potential data leaks.

**Data Retention and Deletion Policies:**
Establishing clear rules for how long data is kept and how it's securely purged or archived is essential for compliance and reducing risk.`
        },
        {
          title: "Device Security Hardening",
          content: `Securing the "things" themselves is equally vital.

**Secure Boot and Attestation Processes:**
Ensuring the integrity of device firmware and software from startup helps prevent malicious code injection and verifies that the device has not been tampered with.

**Firmware Integrity Verification:**
Validating that firmware hasn't been tampered with through cryptographic signatures before execution.

**Runtime Application Self-Protection (RASP):**
Deploying solutions like RASP for virtual patching is advisable to protect applications at runtime.

**Vulnerability Assessment and Penetration Testing:**
Regularly conducting vulnerability assessments and employing penetration testing helps identify how attackers might target products and where the most significant vulnerabilities exist.

**Security Configuration Management:**
Ensuring devices are configured securely from deployment and maintaining those configurations throughout their lifecycle.

**Disabling Unused Features:**
Reducing the attack surface by disabling any unnecessary features or services on IoT devices.`
        },
        {
          title: "Human Factors & Shadow IT",
          content: `While technical controls are essential, a significant portion of IoT security risk stems from human behavior and lack of knowledge. Poor password practices, neglecting updates, and the connection of "shadow IT" devices—unapproved devices connected to company networks—are direct consequences of insufficient awareness and training.

**Employee IoT Device Policies and Enforcement:**
Clear guidelines for using IoT devices in the workplace are essential.

**BYOD (Bring Your Own Device) Security Integration:**
Managing personal devices connected to company networks requires robust policies and technical controls.

**Security Awareness Training Programs:**
IT managers must prioritize comprehensive cybersecurity awareness programs for all employees, covering the risks associated with IoT devices and how to use them securely. This includes training on bad password hygiene, the importance of updates, and recognizing social engineering attacks.

**Incident Reporting and Response Culture:**
Fostering a culture where security incidents are reported promptly and without fear of reprisal is crucial for rapid response.

**Social Engineering Attack Prevention:**
Training employees to recognize and avoid social engineering tactics, which often target human vulnerabilities to gain access to systems.

**"Shadow IT" Devices:**
Unapproved devices connected to company networks can seriously compromise security without appropriate visibility. Maintaining visibility into all devices on the network and the ability to restrict access to unapproved devices is critical.`
        }
      ],
      workshop: {
        title: "Security Awareness Workshop",
        description: "Develop training module for IoT security awareness",
        duration: "10 minutes"
      }
    },
    quiz: {
      questions: [
        {
          id: "8-1",
          question: "Which encryption standards are recommended for IoT data protection?",
          type: "multiple-choice",
          options: ["DES and MD5", "AES-128 and SHA-1", "AES-256 and End-to-End Encryption", "WEP and WPA"],
          correct: 2,
          explanation: "AES-256 and End-to-End Encryption (E2EE) are highly recommended for strong defense against unauthorized access to IoT data."
        },
        {
          id: "8-2",
          question: "What is the primary purpose of Hardware Security Modules (HSM)?",
          type: "multiple-choice",
          options: ["Increase processing speed", "Provide secure environment for cryptographic operations", "Reduce power consumption", "Improve network connectivity"],
          correct: 1,
          explanation: "HSMs provide a secure environment for cryptographic operations and key storage, protecting sensitive keys from software attacks."
        },
        {
          id: "8-3",
          question: "What represents the biggest human factor risk in IoT security?",
          type: "multiple-choice",
          options: ["Technical complexity", "Shadow IT devices and poor password practices", "High device costs", "Network latency"],
          correct: 1,
          explanation: "Shadow IT devices (unapproved devices) and poor password practices are direct consequences of insufficient awareness and represent major human factor risks."
        }
      ],
      passingScore: 80
    }
  },
  {
    id: 9,
    title: "IoT Data Management & Analytics Strategy",
    description: "Categorize IoT data types, implement scalable storage architectures, and transform data into actionable business insights",
    week: 3,
    duration: "90 minutes",
    prerequisites: [8],
    objectives: [
      "Categorize and manage diverse IoT data types effectively",
      "Implement scalable data storage and processing architectures",
      "Transform IoT data into actionable business insights"
    ],
    content: {
      sections: [
        {
          title: "IoT Data Classification & Management",
          content: `The proliferation of IoT devices generates vast and diverse datasets, making effective data management a cornerstone of any successful enterprise IoT strategy. Beyond mere collection, it involves sophisticated processes for storage, processing, and analysis to extract actionable understandings.

**Data Type Categories:**

**Status Data:** Provides real-time information about a device's current state, such as battery levels, signal strength, or temperature. This data is vital for preventive maintenance and ensuring device uptime.

**Event Data:** Generated when a specific event or action occurs, such as motion detection or a door opening. This data is critical for real-time responses, especially in security systems.

**Location Data:** Indicates the geographic position of a device. It is essential for applications like fleet tracking, logistics optimization, and asset management.

**Command Data:** Refers to instructions sent to IoT devices to trigger specific actions, enabling remote control and automation. In industrial settings, command data can remotely control machines or adjust system settings.

**Diagnostic Data:** Tracks device performance and indicates potential problems, errors, or performance degradations. This data is crucial for predictive maintenance, allowing technicians to address issues before they lead to costly downtime.

**User Data:** Derived from how people interact with IoT devices. This information helps companies understand user behavior, personalize services, and improve product design based on real-world usage patterns.`
        },
        {
          title: "Data Management Challenges at Scale",
          content: `Enterprises face several significant challenges in managing this deluge of IoT data efficiently:

**Data Volume:** Millions of connected devices generate massive amounts of data, necessitating scalable storage systems and rapid processing capabilities.

**Data Velocity:** IoT devices often send data in real-time, requiring instantaneous capture and analysis for timely decision-making. To handle fast data, companies use real-time analytics, in-memory databases, and edge computing.

**Data Variety:** IoT data comes in both structured and unstructured formats, each demanding different storage, processing, and analysis methods.

**Data Accuracy and Quality:** Inaccurate data can lead to erroneous decisions; therefore, data must be accurate, complete, and reliable. Robust data validation, cleansing processes, and error checks are crucial.

**Data Storage:** Traditional databases are often unsuitable for the unique characteristics of IoT data, requiring specialized solutions like NoSQL databases, time-series databases, or object storage.

**Data Security:** IoT systems are highly vulnerable to cyberattacks and data leaks, making robust security measures absolutely essential to protect sensitive information.

**Data Privacy:** Protecting personal and sensitive information collected by IoT devices is paramount, necessitating adherence to privacy regulations and obtaining explicit user consent.

**Data Integration:** Combining information from various disparate sources into a unified view is necessary for comprehensive and informed decision-making.`
        },
        {
          title: "Strategies for Efficient Data Handling",
          content: `To overcome these challenges and unlock the full potential of IoT data, enterprises can implement several strategic approaches:

**Distributed Computing Architectures (Edge/Fog):**
Shifting from purely centralized cloud processing to edge computing allows critical real-time data to be processed closer to the source, significantly reducing latency and bandwidth consumption. Fog computing can create an intermediate layer for smarter data filtering and real-time analytics.

**Advanced Data Storage Solutions:**
Utilizing specialized time-series databases (e.g., InfluxDB, TimescaleDB, Prometheus) for efficient storage and retrieval of time-stamped IoT data is essential. Implementing automated data tiering and retention policies ensures that less frequently accessed or outdated data is managed cost-effectively.

**Real-Time Stream Processing:**
Employing tools such as Apache Kafka, Apache Flink, and Spark Streaming enables real-time data ingestion and processing, providing immediate understandings for applications like predictive maintenance and automated responses.

**AI and Machine Learning for Data Optimization:**
Leveraging AI-driven models and machine learning algorithms can transform raw data into predictive insights, enabling predictive maintenance, anomaly detection, energy optimization, and intelligent data reduction techniques.

**Enhanced Security and Privacy Measures:**
Implementing robust device authentication, encryption (TLS, AES) for data both at rest and in transit, and least-privilege access ensures that only authorized entities interact with IoT data.

**Scalable Software Infrastructure:**
Designing the software infrastructure with scalability in mind, utilizing microservices architecture, cloud-based infrastructure, and containerization technologies like Docker, ensures the system can handle growing demands efficiently.`
        }
      ],
      workshop: {
        title: "Data Architecture Workshop",
        description: "Design data pipeline for specific industry use case (e.g., smart factory, smart city)",
        duration: "10 minutes"
      }
    },
    quiz: {
      questions: [
        {
          id: "9-1",
          question: "Which type of IoT data is most critical for predictive maintenance applications?",
          type: "multiple-choice",
          options: ["User Data", "Location Data", "Diagnostic Data", "Command Data"],
          correct: 2,
          explanation: "Diagnostic data tracks device performance and indicates potential problems, errors, or performance degradations, making it crucial for predictive maintenance to address issues before costly downtime."
        },
        {
          id: "9-2",
          question: "What is the primary benefit of edge computing in IoT data management?",
          type: "multiple-choice",
          options: ["Increased storage capacity", "Reduced latency and bandwidth consumption", "Lower device costs", "Simplified user interfaces"],
          correct: 1,
          explanation: "Edge computing allows critical real-time data to be processed closer to the source, significantly reducing latency and bandwidth consumption compared to purely cloud-centric models."
        },
        {
          id: "9-3",
          question: "Which database type is most suitable for IoT time-stamped data?",
          type: "multiple-choice",
          options: ["Traditional relational databases", "Time-series databases", "Flat file systems", "Spreadsheet applications"],
          correct: 1,
          explanation: "Time-series databases (e.g., InfluxDB, TimescaleDB, Prometheus) are specifically designed for efficient storage and retrieval of time-stamped IoT data."
        }
      ],
      passingScore: 80
    },
    capstoneProject: {
      title: "Week 3 Capstone Project",
      description: "Develop a comprehensive IoT security and data management strategy document, including security frameworks, data governance policies, and an implementation roadmap.",
      requirements: [
        "Security governance framework",
        "Data management strategy",
        "Implementation roadmap",
        "Risk assessment documentation"
      ]
    }
  },

  // Week 4: Advanced Implementation & Business Strategy
  {
    id: 10,
    title: "AI/ML Integration & Advanced Analytics",
    description: "Integrate artificial intelligence and machine learning into IoT systems for predictive analytics and operational optimization.",
    week: 4,
    duration: "90 minutes",
    prerequisites: [9],
    objectives: [
      "Integrate artificial intelligence and machine learning into IoT systems",
      "Implement predictive analytics for operational optimization", 
      "Design intelligent automation and anomaly detection systems"
    ],
    content: {
      sections: [
        {
          title: "AI/ML in IoT - Strategic Applications",
          content: `Leveraging AI-driven models and machine learning algorithms can transform raw data into predictive insights, enabling predictive maintenance, anomaly detection, energy optimization, and intelligent data reduction techniques to minimize storage needs while retaining critical information.

**Predictive Maintenance:** Continuously monitors equipment to predict maintenance needs, reducing unplanned downtime and lowering maintenance costs. This enables proactive interventions, extending machine life and avoiding costly breakdowns. AI/ML can help reduce equipment downtime by 70%, lower maintenance costs by 25%, and extend asset lifecycle by 20%.

**Anomaly Detection:** Machine learning algorithms are adept at identifying unusual patterns in sensor data, facilitating real-time detection of malfunctions or security breaches. This can be used for real-time security threat identification, operational efficiency optimization, and quality assurance/defect prevention.

**Process Optimization:** AI/ML can optimize energy usage (e.g., 15-20% typical savings), resource allocation, and improve operational efficiency across various processes, including supply chain and logistics.`
        },
        {
          title: "Implementation Strategies",
          content: `**Edge AI:** Deploying AI models directly on edge devices (e.g., using TensorFlow Lite, ONNX Runtime) for local processing, reducing latency and enabling real-time decision-making on-site.

**Hybrid Cloud-Edge:** Training models in the cloud and deploying inference at the edge, combining the scalability of the cloud with the real-time capabilities of the edge.

**Federated Learning:** Allows AI models to train locally on edge devices while preserving data privacy, as raw data does not leave the device.

**Digital Twins:** Creating virtual representations of physical assets for simulation, analysis, and optimization, allowing for "what-if" scenarios and predictive insights.`
        },
        {
          title: "AI/ML Data Pipeline",
          content: `**Data Collection and Preprocessing:** Gathering and preparing data from IoT devices, including cleaning, transforming, and normalizing the data.

**Feature Engineering and Selection:** Transforming raw data into features suitable for machine learning models, which is crucial for model performance.

**Model Training and Validation:** Building and testing AI/ML models using historical data to ensure accuracy and reliability.

**Deployment and Monitoring:** Deploying models to edge or cloud environments and continuously monitoring their performance in real-world conditions.

**Continuous Learning and Improvement:** Regularly updating models with new data and feedback to improve accuracy and adapt to changing conditions.`
        }
      ],
      workshop: {
        title: "AI Implementation Workshop",
        description: "Design AI/ML solution for specific operational challenge (e.g., optimizing HVAC in a smart building, detecting defects on a production line)",
        duration: "10 minutes"
      }
    },
    quiz: {
      questions: [
        {
          id: "10-1",
          question: "Calculate potential savings from predictive maintenance implementation with 70% reduction in downtime, 25% lower maintenance costs, and 20% extended asset lifecycle for a facility with $100,000 annual maintenance costs and $50,000 annual downtime costs.",
          type: "calculation",
          options: [
            "$60,000 total annual savings",
            "$85,000 total annual savings", 
            "$110,000 total annual savings",
            "$125,000 total annual savings"
          ],
          correct: 1,
          explanation: "70% downtime reduction = $35,000 savings, 25% maintenance cost reduction = $25,000 savings, total = $60,000 + extended lifecycle benefits"
        },
        {
          id: "10-2", 
          question: "Which approach is best for real-time quality control in manufacturing?",
          type: "multiple-choice",
          options: [
            "Cloud-only AI processing",
            "Edge AI with TensorFlow Lite",
            "Batch processing every hour",
            "Manual inspection with AI alerts"
          ],
          correct: 1,
          explanation: "Edge AI provides the lowest latency for real-time decision making in manufacturing quality control"
        },
        {
          id: "10-3",
          question: "What are the key phases of an AI/ML deployment roadmap for IoT?",
          type: "multiple-choice", 
          options: [
            "Data collection, model training, deployment",
            "Planning, pilot, scale, optimize",
            "Buy hardware, install software, train users",
            "Assess, design, implement, monitor"
          ],
          correct: 1,
          explanation: "A proper deployment roadmap includes planning phase, pilot testing, scaling, and continuous optimization"
        }
      ],
      passingScore: 80
    }
  },
  {
    id: 11,
    title: "Regulatory Compliance & Global Standards",
    description: "Navigate complex IoT regulatory landscape and implement proactive compliance strategies across multiple jurisdictions.",
    week: 4,
    duration: "90 minutes", 
    prerequisites: [10],
    objectives: [
      "Navigate complex IoT regulatory landscape across multiple jurisdictions",
      "Implement proactive compliance strategies and documentation",
      "Understand emerging regulations and their business implications"
    ],
    content: {
      sections: [
        {
          title: "Global Regulatory Landscape",
          content: `The regulatory environment surrounding IoT is complex and constantly evolving, requiring IT managers to adopt a proactive approach to compliance throughout the entire product lifecycle. Adherence to these guidelines is not just about avoiding penalties but also about ensuring market access and building competitive advantage.

**Cybersecurity Regulations:** Weak default passwords, unpatched firmware, and insecure interfaces leave connected devices vulnerable. Global regulators are implementing stricter security mandates.

**EU Cyber Resilience Act (CRA):** An upcoming EU regulation that will require CE marking for digital products, mandating secure-by-default design, robust vulnerability handling processes, and comprehensive post-market support throughout the product lifecycle.

**U.S. NIST Cybersecurity Framework:** A widely adopted U.S. standard for integrating security throughout the product lifecycle, from design to decommissioning. NIST IR 8563 (April 2025) proposes updates focusing on operational technology integration, secure end-of-life strategies, and privacy risk modeling.

**UNECE WP.29 / Regulation No. 155 (Automotive):** These automotive cybersecurity regulations establish baseline requirements for risk management, software updates, and threat monitoring in connected vehicles, with type approval prerequisites for market access in the EU and other participating economies.`
        },
        {
          title: "Data Privacy and Protection",
          content: `Data privacy laws are rapidly evolving, making cross-border data management increasingly complex. If an IoT solution collects, stores, or transmits personal or sensitive data, it must comply with a growing patchwork of jurisdictional requirements.

**General Data Protection Regulation (GDPR - EU):** A stringent law establishing strict rules for personal data processing, user consent, access rights, encryption, and breach notifications. Non-compliance can lead to significant penalties (€20M or 4% of global turnover).

**U.S. Health Insurance Portability and Accountability Act (HIPAA / HITECH Act):** U.S. laws governing the privacy and security of electronic health records and patient data, requiring access control, breach notification, and secure transmission for healthcare IoT devices.

**California Consumer Privacy Act (CCPA/CPRA):** Define consumer rights related to collecting, selling, sharing, and deleting personal data for California residents.

**Personal Information Protection Law (PIPL - China) & Lei Geral de Proteção de Dados (LGPD - Brazil):** Regional data protection laws with significant implications for data processing and cross-border transfers, often modeled on GDPR.`
        },
        {
          title: "Proactive Compliance Strategy",
          content: `Successful navigation of this landscape requires a strategic, proactive approach.

**Early Integration:** Building regulatory, privacy, and security requirements into the initial design phase helps avoid costly rework and delays downstream. Security should be "built in," not merely "added on".

**Cross-Functional Teams:** Involving engineering, legal, product, and security teams from the outset ensures alignment on goals and responsibilities, preventing blind spots.

**Continuous Monitoring:** The regulatory landscape is dynamic. Utilizing automated tools or consulting local experts is essential to stay informed across regions.

**Documentation:** Maintaining centralized, version-controlled, and audit-ready files (e.g., test reports, declarations of conformity) simplify regulatory reviews and recertification processes.

**Secure Update Mechanisms:** Ensuring devices support secure firmware and software updates (encrypted, authenticated, and rollback-capable) is not just good security hygiene but an increasingly common regulatory requirement.`
        }
      ],
      workshop: {
        title: "Compliance Assessment Workshop", 
        description: "Evaluate compliance requirements for specific industry deployment (e.g., a smart factory in the EU, a healthcare IoT device in the US)",
        duration: "10 minutes"
      }
    },
    quiz: {
      questions: [
        {
          id: "11-1",
          question: "What are the applicable regulations for a healthcare IoT device deployed across EU, US, and China?",
          type: "multiple-choice",
          options: [
            "GDPR, HIPAA, PIPL",
            "CRA, CCPA, LGPD", 
            "NIST, ISO 27001, SOX",
            "Only local regulations apply"
          ],
          correct: 0,
          explanation: "Healthcare IoT devices must comply with GDPR (EU), HIPAA (US), and PIPL (China) for data protection across these jurisdictions"
        },
        {
          id: "11-2",
          question: "What is the maximum GDPR penalty for non-compliance?",
          type: "multiple-choice",
          options: [
            "€10M or 2% of global turnover",
            "€20M or 4% of global turnover",
            "€50M or 6% of global turnover", 
            "€100M or 10% of global turnover"
          ],
          correct: 1,
          explanation: "GDPR penalties can reach €20M or 4% of global annual turnover, whichever is higher"
        },
        {
          id: "11-3", 
          question: "Which elements are essential for GDPR-compliant IoT systems?",
          type: "multiple-choice",
          options: [
            "Data encryption and user consent only",
            "Data minimization, encryption, consent, and breach notification",
            "Strong passwords and regular updates",
            "Cloud storage and API security"
          ],
          correct: 1,
          explanation: "GDPR compliance requires data minimization, encryption, explicit user consent, and breach notification procedures"
        }
      ],
      passingScore: 80
    }
  },
  {
    id: 12,
    title: "Business Case Development & ROI Optimization",
    description: "Develop comprehensive business cases and ROI analysis for IoT investments with internal stakeholder communication strategies.",
    week: 4,
    duration: "90 minutes",
    prerequisites: [11], 
    objectives: [
      "Understand and evaluate the business value of IoT investments",
      "Analyze TCO and ROI calculation methodologies",
      "Articulate IoT value for internal resource allocation"
    ],
    content: {
      sections: [
        {
          title: "Comprehensive TCO Analysis",
          content: `Calculating the Total Cost of Ownership (TCO) for IoT deployments requires quantifying both direct and indirect costs over the entire lifecycle. It serves as a vital metric for determining the potential return on investment (ROI) from an IoT initiative.

**Direct Costs:** These are typically easier to forecast and include hardware (sensors, gateways, actuators), software, platform expenses, and connectivity fees. Hardware costs can vary significantly based on quality, functionality, and quantity, with custom hardware potentially escalating expenses.

**Hidden/Indirect Costs:** These are often overlooked but can significantly inflate the TCO and cause in-house deployments to spiral out of control. They include:
- Security, compliance, and certification investments
- Scalability challenges and infrastructure adaptation costs  
- Maintenance and support for ongoing operations
- Engineering and management labor costs for specialized expertise
- Change management costs for organizational adaptation
- Opportunity costs from delayed deployment (18-24 months average)
- Integration costs with existing systems
- Data management costs that scale with deployment growth`
        },
        {
          title: "ROI Quantification Framework", 
          content: `Understanding ROI involves quantifying tangible benefits and articulating intangible ones.

**Tangible Benefits:**
- **Cost Reduction:** IoT can significantly reduce operational costs through predictive maintenance, optimized resource utilization, and waste minimization via real-time monitoring and automation
- **Operational Efficiency:** New services or enhanced product offerings can create new revenue streams and lead to productivity gains through process automation

**Intangible Benefits:** While harder to quantify financially, these are vital for long-term growth:
- Improved customer satisfaction and enhanced brand reputation
- Employee productivity and satisfaction improvements  
- Competitive advantage and better market positioning

**Longer Realization Timeline:** ROI from IoT often materializes over a longer timeline, requiring patience and strategic foresight. Initial costs may overshadow early returns, necessitating a long-term view of investment benefits.`
        },
        {
          title: "Internal Value Communication Strategy",
          content: `A successful internal justification must be data-driven and strategically aligned.

**Data-Driven Approaches with Clear Metrics:** Use hard facts and data to inform internal decision-makers. Generic statements are insufficient; instead, provide concrete numbers like "setting up the IIoT network will cost $50,000, which will translate to a 40% increase in productivity or revenue growth".

**Industry-Specific Value Propositions:** Specialize the internal justification by identifying a particular Industry 4.0 business model, such as data-driven inventory optimization or predictive maintenance, and demonstrate precisely how IoT enhances it.

**Risk Mitigation and Security Investment Justification:** Cybersecurity threats are inevitable and must be included as a key consideration. Justify security investments by linking them to reduced risk and potential cost savings from avoiding breaches.

**Phased Implementation Approach:** Present a clear roadmap for deployment and expected returns at each stage to help manage expectations and demonstrate progress.`
        }
      ],
      workshop: {
        title: "Business Case Workshop",
        description: "Develop an internal summary for IoT investment justification",
        duration: "10 minutes"
      }
    },
    quiz: {
      questions: [
        {
          id: "12-1",
          question: "Calculate the 3-year TCO for a 5,000-device deployment with the following costs: Hardware $200/device, Connectivity $5/device/month, Security & compliance $50,000/year, Integration $100,000 one-time, Maintenance 15% of hardware cost annually.",
          type: "calculation", 
          options: [
            "$1,795,000",
            "$2,145,000", 
            "$2,495,000",
            "$2,845,000"
          ],
          correct: 1,
          explanation: "Hardware: $1M, Connectivity: $900K (3 years), Security: $150K, Integration: $100K, Maintenance: $450K = $2,145,000"
        },
        {
          id: "12-2",
          question: "An IoT system costs $50,000 and increases productivity by 40%. If the current annual productivity value is $200,000, what is the annual ROI?",
          type: "calculation",
          options: [
            "60%",
            "160%", 
            "200%",
            "240%" 
          ],
          correct: 1,
          explanation: "Productivity increase: $200,000 × 40% = $80,000. ROI = ($80,000 - $50,000) ÷ $50,000 = 60% net, 160% total return"
        },
        {
          id: "12-3",
          question: "Which approach is most effective for internal IoT investment justification?",
          type: "multiple-choice",
          options: [
            "Focus only on cost savings",
            "Emphasize cutting-edge technology benefits",
            "Provide data-driven metrics with industry-specific value propositions",
            "Compare with competitor implementations"
          ],
          correct: 2,
          explanation: "Data-driven metrics combined with industry-specific value propositions provide the most compelling internal justification"
        }
      ],
      passingScore: 80
    }
  },
  {
    id: 13,
    title: "Scalability, Reliability & Future-Proofing", 
    description: "Design architectures for massive scale, high reliability, and long-term maintainability with future technology evolution planning.",
    week: 4,
    duration: "90 minutes",
    prerequisites: [12],
    objectives: [
      "Design architectures for massive scale and high reliability",
      "Implement maintainability best practices for long-term success", 
      "Prepare for future technology evolution and standards"
    ],
    content: {
      sections: [
        {
          title: "Scalability Architecture Principles",
          content: `For enterprise IoT systems, the ability to grow with the business is paramount. Scalability refers to a system's ability to handle an increasing workload, whether that means a growing number of devices, a higher volume of data, or an expanding user base, without requiring massive overhauls.

**Horizontal Scaling:** Adding more servers to share the workload. Breaking down the IoT solution into smaller, independent microservices allows each component to be scaled individually, providing greater flexibility and efficiency. Leveraging containerization technologies like Docker and Kubernetes improves deployment efficiency and scalability.

**Vertical Scaling:** Switching to bigger servers with more CPUs, Memory, Disk Space, or Network Throughput. While simpler, vertical scaling has limits as there's a maximum amount of resources you can fit in a given server.

**Elasticity:** Beyond mere scalability, elasticity refers to the system's capability to both expand and reduce capacity as needed, adapting precisely to current business demands. Cloud-based infrastructure enables on-demand scaling of computing and storage resources.

**Performance Metrics:** Track KPIs such as device density (devices per unit area), data throughput (data processed per unit time), and latency (time for data transmission and processing).`
        },
        {
          title: "Reliability & Fault Tolerance",
          content: `Reliability describes a system's ability to perform its required functions consistently under stated conditions for a specified period. If a system is not reliable, it will not be available when needed.

**High Availability Design:** Aiming for high uptime (e.g., 99.9% uptime = 8.76 hours downtime annually; 99.99% uptime = 52.6 minutes downtime annually).

**Redundancy Strategies:** Implementing redundant hardware components, servers, or virtual containers ensures that if one component fails, another can immediately take over. At the hardware level, this means power backup, RAID disk arrays, multiple Network Interface Cards (NICs), and backup air conditioning units.

**Fault Tolerance Mechanisms:**
- Circuit Breakers and Retry Logic for handling temporary service outages
- Graceful Degradation Strategies to maintain core functionality during partial failures  
- Disaster Recovery and Business Continuity Planning for major outages
- Chaos Engineering and Resilience Testing to proactively identify weaknesses

**Software Faults:** Address through continuous measurement and monitoring, crashing and restarting services when necessary, rigorous testing, and process isolation.`
        },
        {
          title: "Maintainability & Future-Proofing",
          content: `Maintainability refers to the ease with which a system can be modified, updated, and repaired, directly impacting long-term operational costs and engineer stress.

**Modular Architecture Design:** Breaking down the solution into smaller, independent components makes them easier to understand, manage, and update.

**API Versioning and Backward Compatibility:** Ensuring new versions of APIs don't break existing integrations is crucial for long-term system health.

**Documentation and Knowledge Management:** Centralized, version-controlled, and audit-ready documentation simplifies management, troubleshooting, and regulatory reviews.

**Technology Roadmap Planning:** Anticipating and preparing for future technology evolution, including hardware and software upgrades.

**Standards Evolution Tracking:** Staying informed about changes in industry standards and regulations is crucial for ongoing compliance and adaptability.

**Key Principles:**
- Keep operations simple through automation
- Avoid unnecessary complexity in design
- Establish clear processes for managing changes
- Maintain continuous updates for security and performance
- Leverage automation and orchestration tools`
        }
      ],
      workshop: {
        title: "Architecture Design Workshop",
        description: "Design scalable, reliable IoT architecture for 1M+ devices, considering specific challenges like data volume and fault tolerance",
        duration: "10 minutes"
      }
    },
    quiz: {
      questions: [
        {
          id: "13-1",
          question: "Calculate infrastructure requirements for a 10x growth scenario: Current system handles 100,000 devices generating 1GB/day each. What storage capacity is needed for 1M devices over 30 days?",
          type: "calculation",
          options: [
            "30 TB",
            "300 TB", 
            "3 PB",
            "30 PB"
          ],
          correct: 0,
          explanation: "1M devices × 1GB/day × 30 days = 30 TB total storage needed"
        },
        {
          id: "13-2",
          question: "What does 99.99% uptime translate to in terms of annual downtime?",
          type: "multiple-choice",
          options: [
            "8.76 hours",
            "52.6 minutes",
            "4.38 hours", 
            "26.3 minutes"
          ],
          correct: 1,
          explanation: "99.99% uptime allows for only 52.6 minutes of downtime annually"
        },
        {
          id: "13-3",
          question: "Which approach best ensures future-proofing of IoT systems?",
          type: "multiple-choice",
          options: [
            "Using the latest bleeding-edge technology",
            "Modular architecture with API versioning and standards tracking",
            "Cloud-only deployment strategy",
            "Proprietary solutions for better control"
          ],
          correct: 1,
          explanation: "Modular architecture, API versioning, and standards tracking provide the best foundation for future adaptability"
        }
      ],
      passingScore: 80
    }
  },
  {
    id: 14,
    title: "Capstone Project & Integration Strategies",
    description: "Synthesize course learning into comprehensive IoT implementation strategies with practical pilot project plans and integration roadmaps.",
    week: 4,
    duration: "90 minutes",
    prerequisites: [13],
    objectives: [
      "Synthesize course learning into a comprehensive IoT implementation strategy",
      "Develop practical pilot project plans with clear success metrics",
      "Create integration roadmaps for existing IT infrastructure"
    ],
    content: {
      sections: [
        {
          title: "Legacy System Integration",
          content: `One of the most significant challenges in IoT deployment is the seamless integration of new IoT solutions with existing IT infrastructure, particularly legacy systems. This integration is a major, frequently underestimated hurdle that is not merely technical but a significant source of hidden costs, project delays, and security vulnerabilities.

**Compatibility Assessment Frameworks:** A comprehensive audit of existing hardware, software, network capacity, and security protocols is crucial to ensure compatibility with emerging IoT technologies. Research indicates that 38% of organizations experience integration challenges due to outdated hardware.

**Data Migration and Synchronization Strategies:** Ensuring seamless communication between new IoT devices and existing systems requires identifying and standardizing protocols (e.g., MQTT, CoAP).

**Phased Integration Approaches:** Implementing integration in stages, rather than a single large deployment, helps mitigate risks, allows for learning from early deployments, and provides opportunities to adjust strategies based on practical experience.

**Compatibility with Legacy Systems:** Many companies operate with antiquated legacy systems that may not be compatible with contemporary encryption standards or authentication methods used by modern IoT devices. This mismatch can create significant security lapses.`
        },
        {
          title: "Integration Strategies",
          content: `**Network Segmentation:** Isolating IoT devices on separate network segments from critical IT systems helps control the effect of potential breaches.

**Zero Trust Architecture:** Implementing a Zero Trust model, where every communication requires constant authentication and verification, enhances security by assuming no device is inherently trusted.

**API Management:** Utilizing Application Programming Interfaces (APIs) facilitates secure and controlled data exchange between IoT platforms and existing enterprise applications, enabling seamless data flow and functionality.

**Cloud Services:** Leveraging cloud solutions offers flexibility and cost-effectiveness in managing IoT infrastructure, providing scalable resources for data storage, processing, and integration.`
        },
        {
          title: "Pilot Project Success Framework",
          content: `Successfully deploying IoT solutions requires a structured approach, beginning with controlled pilot projects. Starting with a small, manageable pilot project is a critical first step that allows the organization to validate the concept, gather real-world data, and refine the solution in a controlled environment.

**Clear Objectives and Success Criteria:** Establishing measurable goals and Key Performance Indicators (KPIs) for pilot projects is essential to objectively assess their success and inform subsequent phases.

**Stakeholder Engagement and Communication:** Involving relevant teams and communicating progress and lessons learned from the pilot.

**Risk Mitigation and Contingency Planning:** Identifying and planning for potential issues during the pilot phase.

**Scaling Strategies from Pilot to Production:** Implementing IoT solutions in stages helps mitigate risks, allows for learning from early deployments, and provides opportunities to adjust strategies based on practical experience.

A pilot project is more than just a technical proof-of-concept; it is a critical learning phase for the entire organization that enables IT managers to identify unforeseen technical challenges, refine operational workflows, assess user adoption, and test security protocols in a controlled environment.`
        }
      ],
      workshop: {
        title: "Integration Strategy Workshop",
        description: "Develop comprehensive integration roadmap for existing IT infrastructure with pilot project planning",
        duration: "30 minutes"
      }
    },
    quiz: {
      questions: [
        {
          id: "14-1", 
          question: "What percentage of organizations experience integration challenges due to outdated hardware?",
          type: "multiple-choice",
          options: [
            "25%",
            "38%",
            "45%", 
            "52%"
          ],
          correct: 1,
          explanation: "Research indicates that 38% of organizations experience integration challenges due to outdated hardware"
        },
        {
          id: "14-2",
          question: "Which approach is most effective for IoT integration with legacy systems?",
          type: "multiple-choice", 
          options: [
            "Complete system replacement",
            "Phased integration with network segmentation",
            "Cloud-only migration",
            "Parallel system operation"
          ],
          correct: 1,
          explanation: "Phased integration with network segmentation minimizes risks while ensuring security and compatibility"
        },
        {
          id: "14-3",
          question: "What are the essential elements of a successful pilot project framework?",
          type: "multiple-choice",
          options: [
            "Technical testing only",
            "Clear objectives, stakeholder engagement, risk mitigation, and scaling strategies", 
            "Budget approval and vendor selection",
            "Hardware procurement and installation"
          ],
          correct: 1,
          explanation: "A comprehensive pilot framework includes clear objectives, stakeholder engagement, risk mitigation, and scaling strategies"
        }
      ],
      passingScore: 80
    },
    capstoneProject: {
      title: "Final Capstone Project",
      description: "Develop a comprehensive IoT implementation strategy document including business value analysis, security framework, pilot project plan, and integration roadmap.",
      requirements: [
        "Complete IoT implementation strategy document (20 pages minimum)",
        "Internal business value analysis with TCO/ROI evaluation", 
        "Security and compliance framework",
        "Pilot project implementation plan",
        "Integration roadmap with existing systems",
        "Risk assessment and mitigation strategies",
        "Success metrics and KPIs",
        "Timeline and resource allocation"
      ]
    }
  }
];

export const getCourseProgress = async (userId: string) => {
  // This will be implemented with Supabase integration
  return [];
};

export const updateCourseProgress = async (userId: string, moduleId: number, quizScore: number) => {
  // This will be implemented with Supabase integration
  return true;
};