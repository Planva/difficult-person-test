import { TraitType } from './questions';
import { Language } from './translations';

type AdviceLevel = 'low' | 'moderate' | 'high';

interface TraitAdvice {
  title: string;
  description: string;
  recommendations: string[];
}

type AdviceTranslations = Record<Language, Record<TraitType, Record<AdviceLevel, TraitAdvice>>>;

export const getAdviceLevel = (score: number): AdviceLevel => {
  if (score >= 4) return 'high';
  if (score >= 3) return 'moderate';
  return 'low';
};

export const advice: AdviceTranslations = {
  'en': {
    callousness: {
      high: {
        title: 'High Emotional Detachment',
        description: 'Your high score in callousness suggests significant emotional detachment and reduced empathy.',
        recommendations: [
          'Practice active listening and try to understand others\' perspectives',
          'Consider the emotional impact of your actions on others',
          'Engage in activities that promote empathy and emotional connection',
          'Seek professional guidance to develop emotional awareness'
        ]
      },
      moderate: {
        title: 'Moderate Emotional Distance',
        description: 'Your moderate score indicates some emotional detachment in relationships.',
        recommendations: [
          'Work on expressing empathy more openly',
          'Practice recognizing and acknowledging others\' emotions',
          'Develop deeper emotional connections in close relationships',
          'Balance rational thinking with emotional understanding'
        ]
      },
      low: {
        title: 'Healthy Emotional Connection',
        description: 'Your low score suggests good emotional awareness and empathy.',
        recommendations: [
          'Continue nurturing emotional connections',
          'Share your empathetic approach with others',
          'Use your emotional intelligence in leadership roles',
          'Maintain healthy emotional boundaries'
        ]
      }
    },
    grandiosity: {
      high: {
        title: 'Strong Self-Importance',
        description: 'Your high score in grandiosity indicates elevated self-importance and entitlement.',
        recommendations: [
          'Practice humility and acknowledge others\' contributions',
          'Seek feedback and be open to criticism',
          'Develop realistic self-assessment skills',
          'Focus on collaborative achievements rather than personal glory'
        ]
      },
      moderate: {
        title: 'Balanced Confidence',
        description: 'Your moderate score suggests a mix of confidence and humility.',
        recommendations: [
          'Balance self-confidence with openness to others\' views',
          'Continue developing self-awareness',
          'Maintain realistic expectations of treatment from others',
          'Practice gratitude and appreciation'
        ]
      },
      low: {
        title: 'Healthy Self-Perception',
        description: 'Your low score indicates a balanced view of self-importance.',
        recommendations: [
          'Maintain your balanced self-view',
          'Continue valuing others\' perspectives',
          'Share your approach to humility with others',
          'Build on your collaborative strengths'
        ]
      }
    },
    aggressiveness: {
      high: {
        title: 'High Confrontational Tendency',
        description: 'Your high score in aggressiveness suggests a strong tendency toward confrontational behavior.',
        recommendations: [
          'Develop anger management techniques',
          'Practice peaceful conflict resolution',
          'Learn to recognize triggers and manage reactions',
          'Consider professional help for anger management'
        ]
      },
      moderate: {
        title: 'Moderate Assertiveness',
        description: 'Your moderate score indicates balanced assertiveness with some aggressive tendencies.',
        recommendations: [
          'Continue developing constructive communication',
          'Practice patience in challenging situations',
          'Learn to distinguish between assertiveness and aggression',
          'Build skills in diplomatic problem-solving'
        ]
      },
      low: {
        title: 'Constructive Communication',
        description: 'Your low score suggests good control over aggressive tendencies.',
        recommendations: [
          'Maintain your balanced approach to conflicts',
          'Share your conflict resolution skills',
          'Continue practicing positive communication',
          'Help others develop peaceful resolution strategies'
        ]
      }
    },
    suspicion: {
      high: {
        title: 'High Skepticism',
        description: 'Your high score in suspicion indicates strong tendencies toward distrust.',
        recommendations: [
          'Work on building trust gradually',
          'Develop criteria for reasonable trust',
          'Practice giving others the benefit of the doubt',
          'Seek professional help to address trust issues'
        ]
      },
      moderate: {
        title: 'Cautious Trust',
        description: 'Your moderate score suggests balanced caution in relationships.',
        recommendations: [
          'Continue developing healthy trust boundaries',
          'Practice open communication',
          'Balance skepticism with optimism',
          'Build trust through small steps'
        ]
      },
      low: {
        title: 'Healthy Trust',
        description: 'Your low score indicates a good balance of trust and caution.',
        recommendations: [
          'Maintain your balanced approach to trust',
          'Continue building strong relationships',
          'Share your trust-building strategies',
          'Help others develop healthy trust'
        ]
      }
    },
    manipulativeness: {
      high: {
        title: 'High Strategic Influence',
        description: 'Your high score in manipulativeness suggests strong tendencies toward strategic influence.',
        recommendations: [
          'Develop direct communication skills',
          'Practice transparency in relationships',
          'Build authentic connections',
          'Consider the ethical implications of your actions'
        ]
      },
      moderate: {
        title: 'Balanced Influence',
        description: 'Your moderate score indicates some tendency toward strategic influence.',
        recommendations: [
          'Focus on honest persuasion techniques',
          'Build trust through transparency',
          'Practice direct communication',
          'Develop authentic leadership skills'
        ]
      },
      low: {
        title: 'Authentic Interaction',
        description: 'Your low score suggests preference for honest and direct communication.',
        recommendations: [
          'Continue practicing transparent communication',
          'Share your authentic approach with others',
          'Build on your honest leadership style',
          'Maintain your ethical standards'
        ]
      }
    },
    dominance: {
      high: {
        title: 'Strong Leadership Drive',
        description: 'Your high score in dominance indicates a strong need for control and leadership.',
        recommendations: [
          'Develop collaborative leadership skills',
          'Practice delegating and trusting others',
          'Balance control with team empowerment',
          'Learn to step back when appropriate'
        ]
      },
      moderate: {
        title: 'Balanced Leadership',
        description: 'Your moderate score suggests a balanced approach to leadership and control.',
        recommendations: [
          'Continue developing inclusive leadership',
          'Practice situational leadership',
          'Balance assertiveness with collaboration',
          'Build on your team-oriented approach'
        ]
      },
      low: {
        title: 'Collaborative Approach',
        description: 'Your low score indicates a preference for collaborative interaction.',
        recommendations: [
          'Maintain your collaborative style',
          'Share your inclusive approach',
          'Build on your team-oriented strengths',
          'Continue fostering group harmony'
        ]
      }
    },
    riskTaking: {
      high: {
        title: 'High Risk Tolerance',
        description: 'Your high score in risk-taking suggests strong attraction to dangerous or uncertain situations.',
        recommendations: [
          'Develop risk assessment skills',
          'Practice careful decision-making',
          'Consider long-term consequences',
          'Seek professional guidance for risk management'
        ]
      },
      moderate: {
        title: 'Balanced Risk Approach',
        description: 'Your moderate score indicates balanced risk assessment abilities.',
        recommendations: [
          'Continue developing risk evaluation skills',
          'Balance opportunity with caution',
          'Practice strategic risk assessment',
          'Maintain thoughtful decision-making'
        ]
      },
      low: {
        title: 'Cautious Decision-Making',
        description: 'Your low score suggests careful consideration before taking risks.',
        recommendations: [
          'Maintain your thoughtful approach',
          'Share your risk assessment strategies',
          'Continue practicing careful planning',
          'Help others develop risk awareness'
        ]
      }
    }
  },
  // Add translations for other languages here...
  'th': {
    // Thai translations would go here
    callousness: {
      high: {
        title: 'ความไร้ความรู้สึกสูง',
        description: 'คะแนนสูงในด้านความไร้ความรู้สึกบ่งชี้ถึงการแยกตัวทางอารมณ์และการขาดความเห็นอกเห็นใจ',
        recommendations: [
          'ฝึกการรับฟังอย่างตั้งใจและพยายามเข้าใจมุมมองของผู้อื่น',
          'พิจารณาผลกระทบทางอารมณ์ของการกระทำของคุณต่อผู้อื่น',
          'เข้าร่วมกิจกรรมที่ส่งเสริมความเห็นอกเห็นใจและการเชื่อมต่อทางอารมณ์',
          'ขอคำแนะนำจากผู้เชี่ยวชาญเพื่อพัฒนาความตระหนักรู้ทางอารมณ์'
        ]
      },
      moderate: {
        title: 'ความห่างเหินทางอารมณ์ปานกลาง',
        description: 'คะแนนปานกลางบ่งชี้ถึงการแยกตัวทางอารมณ์บางส่วนในความสัมพันธ์',
        recommendations: [
          'ฝึกแสดงความเห็นอกเห็นใจอย่างเปิดเผยมากขึ้น',
          'ฝึกการรับรู้และยอมรับอารมณ์ของผู้อื่น',
          'พัฒนาการเชื่อมต่อทางอารมณ์ที่ลึกซึ้งในความสัมพันธ์ใกล้ชิด',
          'สร้างสมดุลระหว่างความคิดเชิงเหตุผลกับความเข้าใจทางอารมณ์'
        ]
      },
      low: {
        title: 'การเชื่อมต่อทางอารมณ์ที่ดี',
        description: 'คะแนนต่ำบ่งชี้ถึงความตระหนักรู้ทางอารมณ์และความเห็นอกเห็นใจที่ดี',
        recommendations: [
          'รักษาการเชื่อมต่อทางอารมณ์ต่อไป',
          'แบ่งปันแนวทางการแสดงความเห็นอกเห็นใจกับผู้อื่น',
          'ใช้ความฉลาดทางอารมณ์ในบทบาทผู้นำ',
          'รักษาขอบเขตทางอารมณ์ที่ดี'
        ]
      }
    },
    // Continue with other traits...
    grandiosity: {
      high: {
        title: 'ความสำคัญตนเองสูง',
        description: 'คะแนนสูงในด้านความหลงตัวเองบ่งชี้ถึงความสำคัญตนเองและความรู้สึกมีสิทธิพิเศษที่สูง',
        recommendations: [
          'ฝึกความถ่อมตนและยอมรับการมีส่วนร่วมของผู้อื่น',
          'รับฟังข้อเสนอแนะและเปิดใจรับคำวิจารณ์',
          'พัฒนาทักษะการประเมินตนเองอย่างสมจริง',
          'มุ่งเน้นความสำเร็จร่วมกันมากกว่าความรุ่งโรจน์ส่วนตัว'
        ]
      },
      moderate: {
        title: 'ความมั่นใจที่สมดุล',
        description: 'คะแนนปานกลางบ่งชี้ถึงการผสมผสานระหว่างความมั่นใจและความถ่อมตน',
        recommendations: [
          'สร้างสมดุลระหว่างความมั่นใจในตนเองกับการเปิดรับมุมมองของผู้อื่น',
          'พัฒนาการตระหนักรู้ในตนเองต่อไป',
          'รักษาความคาดหวังที่สมจริงเกี่ยวกับการปฏิบัติจากผู้อื่น',
          'ฝึกความกตัญญูและการชื่นชม'
        ]
      },
      low: {
        title: 'การรับรู้ตนเองที่ดี',
        description: 'คะแนนต่ำบ่งชี้ถึงมุมมองที่สมดุลเกี่ยวกับความสำคัญของตนเอง',
        recommendations: [
          'รักษามุมมองตนเองที่สมดุล',
          'เปิดรับมุมมองของผู้อื่นต่อไป',
          'แบ่งปันแนวทางความถ่อมตนกับผู้อื่น',
          'พัฒนาจุดแข็งในการทำงานร่วมกัน'
        ]
      }
    },
    // Continue with other traits...
  },
  'es-CL': {
    // Spanish (Chile) translations would go here...
    callousness: {
      high: {
        title: 'Alta Insensibilidad Emocional',
        description: 'Tu alta puntuación en insensibilidad sugiere un desapego emocional significativo y empatía reducida.',
        recommendations: [
          'Practica la escucha activa y trata de entender las perspectivas de otros',
          'Considera el impacto emocional de tus acciones en los demás',
          'Participa en actividades que promuevan la empatía y la conexión emocional',
          'Busca orientación profesional para desarrollar conciencia emocional'
        ]
      },
      moderate: {
        title: 'Distancia Emocional Moderada',
        description: 'Tu puntuación moderada indica cierto desapego emocional en las relaciones.',
        recommendations: [
          'Trabaja en expresar empatía más abiertamente',
          'Practica reconocer y acknowledger las emociones de otros',
          'Desarrolla conexiones emocionales más profundas en relaciones cercanas',
          'Equilibra el pensamiento racional con la comprensión emocional'
        ]
      },
      low: {
        title: 'Conexión Emocional Saludable',
        description: 'Tu baja puntuación sugiere buena conciencia emocional y empatía.',
        recommendations: [
          'Continúa nutriendo conexiones emocionales',
          'Comparte tu enfoque empático con otros',
          'Usa tu inteligencia emocional en roles de liderazgo',
          'Mantén límites emocionales saludables'
        ]
      }
    },
    // Continue with other traits...
  },
  'ro': {
    // Romanian translations would go here...
    callousness: {
      high: {
        title: 'Detașare Emoțională Ridicată',
        description: 'Scorul tău ridicat la insensibilitate sugerează o detașare emoțională semnificativă și empatie redusă.',
        recommendations: [
          'Practică ascultarea activă și încearcă să înțelegi perspectivele altora',
          'Consideră impactul emoțional al acțiunilor tale asupra altora',
          'Implică-te în activități care promovează empatia și conexiunea emoțională',
          'Caută îndrumare profesională pentru dezvoltarea conștientizării emoționale'
        ]
      },
      moderate: {
        title: 'Distanță Emoțională Moderată',
        description: 'Scorul tău moderat indică o oarecare detașare emoțională în relații.',
        recommendations: [
          'Lucrează la exprimarea mai deschisă a empatiei',
          'Practică recunoașterea și acceptarea emoțiilor altora',
          'Dezvoltă conexiuni emoționale mai profunde în relațiile apropiate',
          'Echilibrează gândirea rațională cu înțelegerea emoțională'
        ]
      },
      low: {
        title: 'Conexiune Emoțională Sănătoasă',
        description: 'Scorul tău scăzut sugerează o bună conștientizare emoțională și empatie.',
        recommendations: [
          'Continuă să cultivi conexiunile emoționale',
          'Împărtășește abordarea ta empatică cu alții',
          'Folosește inteligența emoțională în roluri de leadership',
          'Menține limite emoționale sănătoase'
        ]
      }
    },
    // Continue with other traits...
  },
  'el': {
    // Greek translations would go here...
    callousness: {
      high: {
        title: 'Υψηλή Συναισθηματική Αποστασιοποίηση',
        description: 'Η υψηλή βαθμολογία σου στην αναισθησία υποδεικνύει σημαντική συναισθηματική αποστασιοποίηση και μειωμένη ενσυναίσθηση.',
        recommendations: [
          'Εξάσκησε την ενεργητική ακρόαση και προσπάθησε να κατανοήσεις τις οπτικές των άλλων',
          'Σκέψου τον συναισθηματικό αντίκτυπο των πράξεών σου στους άλλους',
          'Συμμετέχε σε δραστηριότητες που προωθούν την ενσυναίσθηση και τη συναισθηματική σύνδεση',
          'Αναζήτησε επαγγελματική καθοδήγηση για την ανάπτυξη συναισθηματικής επίγνωσης'
        ]
      },
      moderate: {
        title: 'Μέτρια Συναισθηματική Απόσταση',
        description: 'Η μέτρια βαθμολογία σου δείχνει κάποια συναισθηματική αποστασιοποίηση στις σχέσεις.',
        recommendations: [
          'Δούλεψε στην πιο ανοιχτή έκφραση ενσυναίσθησης',
          'Εξασκήσου στην αναγνώριση και αποδοχή των συναισθημάτων των άλλων',
          'Ανάπτυξε βαθύτερες συναισθηματικές συνδέσεις στις στενές σχέσεις',
          'Εξισορρόπησε τη λογική σκέψη με τη συναισθηματική κατανόηση'
        ]
      },
      low: {
        title: 'Υγιής Συναισθηματική Σύνδεση',
        description: 'Η χαμηλή βαθμολογία σου υποδεικνύει καλή συναισθηματική επίγνωση και ενσυναίσθηση.',
        recommendations: [
          'Συνέχισε να καλλιεργείς συναισθηματικές συνδέσεις',
          'Μοιράσου την ενσυναισθητική σου προσέγγιση με άλλους',
          'Χρησιμοποίησε τη συναισθηματική σου νοημοσύνη σε ηγετικούς ρόλους',
          'Διατήρησε υγιή συναισθηματικά όρια'
        ]
      }
    },
    // Continue with other traits...
  },
  'es-CO': {
    // Spanish (Colombia) translations would go here...
    callousness: {
      high: {
        title: 'Alta Insensibilidad Emocional',
        description: 'Tu alta puntuación en insensibilidad sugiere un desapego emocional significativo y empatía reducida.',
        recommendations: [
          'Practica la escucha activa y trata de entender las perspectivas de otros',
          'Considera el impacto emocional de tus acciones en los demás',
          'Participa en actividades que promuevan la empatía y la conexión emocional',
          'Busca orientación profesional para desarrollar conciencia emocional'
        ]
      },
      moderate: {
        title: 'Distancia Emocional Moderada',
        description: 'Tu puntuación moderada indica cierto desapego emocional en las relaciones.',
        recommendations: [
          'Trabaja en expresar empatía más abiertamente',
          'Practica reconocer y acknowledger las emociones de otros',
          'Desarrolla conexiones emocionales más profundas en relaciones cercanas',
          'Equilibra el pensamiento racional con la comprensión emocional'
        ]
      },
      low: {
        title: 'Conexión Emocional Saludable',
        description: 'Tu baja puntuación sugiere buena conciencia emocional y empatía.',
        recommendations: [
          'Continúa nutriendo conexiones emocionales',
          'Comparte tu enfoque empático con otros',
          'Usa tu inteligencia emocional en roles de liderazgo',
          'Mantén límites emocionales saludables'
        ]
      }
    },
    // Continue with other traits...
  }
};