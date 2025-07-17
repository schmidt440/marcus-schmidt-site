
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Shield, 
  Eye, 
  CheckCircle2, 
  Circle,
  Network,
  Key,
  Database,
  RefreshCw,
  Lock,
  Activity,
  AlertTriangle,
  Users,
  FileText,
  Cloud,
  Smartphone,
  Wifi,
  Settings
} from 'lucide-react';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  hasNotes?: boolean;
}

interface ChecklistState {
  [key: string]: {
    checked: boolean;
    notes: string;
  };
}

const IoTSecurityChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<ChecklistState>({});
  const [expandedNotes, setExpandedNotes] = useState<Set<string>>(new Set());

  const checklistItems: ChecklistItem[] = [
    // Foundation: Discovery & Assessment
    {
      id: 'device-inventory',
      title: 'Comprehensive Device Inventory',
      description: 'Identify ALL IoT devices (visible & hidden). Document manufacturer, model, location, connectivity, data type, owner, EOL dates.',
      category: 'foundation',
      priority: 'high',
      hasNotes: true
    },
    {
      id: 'network-segmentation',
      title: 'Network Segmentation & Mapping',
      description: 'Isolate IoT devices on dedicated network segments (VLANs). Implement least privilege network access.',
      category: 'foundation',
      priority: 'high'
    },
    {
      id: 'vulnerability-scanning',
      title: 'Vulnerability Scanning & Penetration Testing',
      description: 'Regularly scan for vulnerabilities. Conduct periodic penetration tests. Analyze firmware for hidden flaws.',
      category: 'foundation',
      priority: 'high'
    },
    {
      id: 'data-flow-analysis',
      title: 'Data Flow Analysis',
      description: 'Map data origin, destination, and storage. Identify sensitive data transmitted or stored by devices.',
      category: 'foundation',
      priority: 'medium'
    },
    {
      id: 'risk-assessment',
      title: 'IoT Risk Assessment & Classification',
      description: 'Categorize devices by risk level. Assess potential impact of compromise on business operations.',
      category: 'foundation',
      priority: 'high'
    },

    // Core Security Principles
    {
      id: 'secure-configuration',
      title: 'Secure Device Configuration',
      description: 'Change ALL default credentials. Disable unnecessary services/ports. Implement secure boot. Harden OS (if applicable).',
      category: 'defense',
      priority: 'high'
    },
    {
      id: 'authentication-access',
      title: 'Authentication & Access Control',
      description: 'Strong, unique authentication for all devices. MFA for management interfaces. Implement Role-Based Access Control (RBAC).',
      category: 'defense',
      priority: 'high'
    },
    {
      id: 'data-encryption',
      title: 'Data Encryption',
      description: 'Encrypt data in transit (TLS 1.3+). Encrypt data at rest (on device & cloud storage). Implement end-to-end encryption.',
      category: 'defense',
      priority: 'high'
    },
    {
      id: 'firmware-updates',
      title: 'Firmware & Software Updates',
      description: 'Establish regular patch management. Automate OTA updates where possible. Verify update integrity. Plan for EOL devices.',
      category: 'defense',
      priority: 'high'
    },
    {
      id: 'physical-security',
      title: 'Physical Security',
      description: 'Secure physical access to devices. Implement tamper detection mechanisms. Use hardware security modules (HSM).',
      category: 'defense',
      priority: 'medium'
    },
    {
      id: 'certificate-management',
      title: 'PKI & Certificate Management',
      description: 'Implement proper certificate lifecycle management. Use device certificates for authentication. Regular certificate rotation.',
      category: 'defense',
      priority: 'high'
    },
    {
      id: 'secure-communications',
      title: 'Secure Communication Protocols',
      description: 'Use secure protocols (MQTT-S, CoAPS, DTLS). Implement message authentication codes. Disable insecure protocols.',
      category: 'defense',
      priority: 'high'
    },

    // Monitoring & Response
    {
      id: 'continuous-monitoring',
      title: 'Continuous Monitoring & Anomaly Detection',
      description: 'Implement IoT-specific monitoring tools. Establish baseline behavior. Monitor for suspicious activity. Integrate with SIEM/SOAR.',
      category: 'vigilance',
      priority: 'high'
    },
    {
      id: 'incident-response',
      title: 'Incident Response Plan',
      description: 'Develop an IoT-specific IR plan. Include device isolation procedures. Define communication protocols. Test response procedures.',
      category: 'vigilance',
      priority: 'high'
    },
    {
      id: 'vendor-management',
      title: 'Vendor Management & Supply Chain Security',
      description: 'Thoroughly vet IoT vendors. Review contracts for security clauses. Understand supply chain risks. Implement vendor SLAs.',
      category: 'vigilance',
      priority: 'medium'
    },
    {
      id: 'employee-training',
      title: 'Employee Training & Awareness',
      description: 'Educate employees on IoT security best practices. Provide specific training for IoT administrators. Regular security awareness updates.',
      category: 'vigilance',
      priority: 'medium'
    },
    {
      id: 'compliance-governance',
      title: 'Compliance & Governance',
      description: 'Comply with relevant regulations (GDPR, HIPAA, NERC CIP, etc.). Develop formal IoT security policies. Conduct regular security audits.',
      category: 'vigilance',
      priority: 'high'
    },
    {
      id: 'backup-recovery',
      title: 'Backup & Disaster Recovery',
      description: 'Implement automated backup of device configurations. Test recovery procedures. Plan for device replacement strategies.',
      category: 'vigilance',
      priority: 'medium'
    },
    {
      id: 'threat-intelligence',
      title: 'Threat Intelligence Integration',
      description: 'Subscribe to IoT threat intelligence feeds. Monitor for device-specific vulnerabilities. Integrate with security tools.',
      category: 'vigilance',
      priority: 'medium'
    },
    {
      id: 'zero-trust',
      title: 'Zero Trust Architecture',
      description: 'Implement "never trust, always verify" principles. Continuous authentication and authorization. Micro-segmentation.',
      category: 'defense',
      priority: 'high'
    }
  ];

  const categories = {
    foundation: {
      title: 'The Foundation: Discovery & Assessment',
      subtitle: 'Know Your IoT Landscape',
      icon: Search,
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600'
    },
    defense: {
      title: 'Building Strong Defenses',
      subtitle: 'Fortify Your IoT Infrastructure',
      icon: Shield,
      color: 'bg-emerald-50 border-emerald-200',
      iconColor: 'text-emerald-600'
    },
    vigilance: {
      title: 'Ongoing Vigilance',
      subtitle: 'Sustain Your Security Posture',
      icon: Eye,
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600'
    }
  };

  // Load state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem('iot-security-checklist');
    if (savedState) {
      setCheckedItems(JSON.parse(savedState));
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('iot-security-checklist', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        checked: !prev[id]?.checked
      }
    }));
  };

  const updateNotes = (id: string, notes: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        notes
      }
    }));
  };

  const toggleNotes = (id: string) => {
    setExpandedNotes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getCompletionStats = () => {
    const total = checklistItems.length;
    const completed = checklistItems.filter(item => checkedItems[item.id]?.checked).length;
    const percentage = Math.round((completed / total) * 100);
    return { total, completed, percentage };
  };

  const stats = getCompletionStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Card className="mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white p-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                IoT Security Checklist
              </h1>
              <p className="text-xl sm:text-2xl font-medium opacity-90 mb-6">
                Comprehensive Enterprise IoT Security Framework
              </p>
              <div className="flex items-center justify-center gap-6 text-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  <span>{stats.completed}/{stats.total} Complete</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-6 h-6" />
                  <span>{stats.percentage}% Progress</span>
                </div>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3 mt-4 max-w-md mx-auto">
                <div 
                  className="bg-white rounded-full h-3 transition-all duration-500"
                  style={{ width: `${stats.percentage}%` }}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Checklist Sections */}
        {Object.entries(categories).map(([categoryKey, category]) => {
          const categoryItems = checklistItems.filter(item => item.category === categoryKey);
          const Icon = category.icon;
          
          return (
            <Card key={categoryKey} className={`mb-8 ${category.color} border-2`}>
              <CardContent className="p-8">
                {/* Section Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${category.iconColor} bg-white rounded-2xl shadow-lg mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {category.title}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {category.subtitle}
                  </p>
                </div>

                {/* Checklist Items */}
                <div className="space-y-4">
                  {categoryItems.map((item) => {
                    const isChecked = checkedItems[item.id]?.checked || false;
                    const hasExpandedNotes = expandedNotes.has(item.id);
                    
                    return (
                      <Card 
                        key={item.id}
                        className={`transition-all duration-200 hover:shadow-lg cursor-pointer ${
                          isChecked ? 'bg-green-50 border-green-200' : 'bg-white hover:bg-gray-50'
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            {/* Checkbox */}
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`flex-shrink-0 w-10 h-10 rounded-xl border-2 p-0 ${
                                isChecked 
                                  ? 'bg-green-500 border-green-500 text-white hover:bg-green-600' 
                                  : 'border-gray-300 hover:border-gray-400'
                              }`}
                              onClick={() => toggleItem(item.id)}
                            >
                              {isChecked ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                            </Button>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-4 mb-2">
                                <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                                  {item.title}
                                </h3>
                                <Badge 
                                  variant={item.priority === 'high' ? 'destructive' : 
                                          item.priority === 'medium' ? 'default' : 'secondary'}
                                  className="flex-shrink-0"
                                >
                                  {item.priority} priority
                                </Badge>
                              </div>
                              
                              <p className="text-gray-600 mb-4 leading-relaxed">
                                {item.description}
                              </p>

                              {/* Notes Section */}
                              {item.hasNotes && (
                                <div className="space-y-3">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => toggleNotes(item.id)}
                                    className="text-sm"
                                  >
                                    <FileText className="w-4 h-4 mr-2" />
                                    {hasExpandedNotes ? 'Hide Notes' : 'Add Notes'}
                                  </Button>
                                  
                                  {hasExpandedNotes && (
                                    <Textarea
                                      placeholder="Enter implementation notes, findings, or next steps..."
                                      value={checkedItems[item.id]?.notes || ''}
                                      onChange={(e) => updateNotes(item.id, e.target.value)}
                                      className="min-h-[100px]"
                                      onClick={(e) => e.stopPropagation()}
                                    />
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* Footer */}
        <Card className="bg-gray-50 border-gray-200">
          <CardContent className="p-8 text-center">
            <p className="text-gray-600 italic text-lg font-medium">
              "IoT security is not a destination, but a continuous journey of protection, adaptation, and vigilance."
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-gray-500">
              <span>✓ Comprehensive Coverage</span>
              <span>•</span>
              <span>✓ Industry Best Practices</span>
              <span>•</span>
              <span>✓ Regulatory Compliance</span>
              <span>•</span>
              <span>✓ Enterprise Ready</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IoTSecurityChecklist;
