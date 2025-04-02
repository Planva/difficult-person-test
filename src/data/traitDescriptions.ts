import { Language } from './translations';

type TraitDescription = {
  title: string;
  description: string;
  interpretation: (score: number) => string;
};

type TraitDescriptions = Record<Language, Record<string, TraitDescription>>;

export const traitDescriptions: TraitDescriptions = {
  'en': {
    callousness: {
      title: "Callousness",
      description: "Measures emotional insensitivity and lack of empathy. High scorers tend to be emotionally detached and show little concern for others' feelings or well-being. Research indicates this trait is associated with reduced prosocial behavior and emotional responsiveness.",
      interpretation: (score: number) => {
        if (score >= 4) return "You show significantly reduced emotional sensitivity and empathy compared to others.";
        if (score >= 3) return "You show moderate levels of emotional detachment in interpersonal relationships.";
        return "You demonstrate typical levels of empathy and emotional sensitivity.";
      }
    },
    grandiosity: {
      title: "Grandiosity",
      description: "Reflects an inflated sense of self-importance and entitlement. High scorers often believe they deserve special treatment and have superior abilities. This trait is linked to narcissistic tendencies and interpersonal difficulties.",
      interpretation: (score: number) => {
        if (score >= 4) return "You show strong tendencies toward grandiose self-perception and entitlement.";
        if (score >= 3) return "You display moderate levels of self-importance and entitlement.";
        return "You show healthy levels of self-esteem without excessive self-importance.";
      }
    },
    aggressiveness: {
      title: "Aggressiveness",
      description: "Measures the tendency toward hostile or confrontational behavior. High scorers are more likely to engage in confrontational interactions and show quick temper. Research links this trait to increased conflict in relationships.",
      interpretation: (score: number) => {
        if (score >= 4) return "You show high levels of confrontational tendency and quick temper.";
        if (score >= 3) return "You display moderate levels of aggressive tendencies in interactions.";
        return "You show typical levels of assertiveness without excessive aggression.";
      }
    },
    suspicion: {
      title: "Suspicion",
      description: "Indicates tendency to doubt others' intentions and maintain skepticism in relationships. High scorers often have difficulty trusting others and may perceive hidden motives. This trait can impact social relationships and cooperation.",
      interpretation: (score: number) => {
        if (score >= 4) return "You show high levels of skepticism and distrust in others' intentions.";
        if (score >= 3) return "You display moderate levels of caution in trusting others.";
        return "You show healthy levels of trust while maintaining appropriate boundaries.";
      }
    },
    manipulativeness: {
      title: "Manipulativeness",
      description: "Measures the tendency to influence others for personal gain. High scorers are skilled at and willing to use manipulation tactics. Research suggests this trait can lead to strained relationships and reduced authenticity.",
      interpretation: (score: number) => {
        if (score >= 4) return "You show strong tendencies toward strategic influence and manipulation.";
        if (score >= 3) return "You display moderate capability and willingness to influence others.";
        return "You show preference for direct and honest interactions.";
      }
    },
    dominance: {
      title: "Dominance",
      description: "Reflects the tendency to take charge and exert control in social situations. High scorers naturally gravitate toward leadership roles. While this can be beneficial in some contexts, extreme dominance may create interpersonal challenges.",
      interpretation: (score: number) => {
        if (score >= 4) return "You show strong tendencies toward taking control and leadership.";
        if (score >= 3) return "You display moderate levels of social dominance and leadership.";
        return "You show balanced approach to social influence and leadership.";
      }
    },
    riskTaking: {
      title: "Risk-taking",
      description: "Measures propensity for engaging in dangerous or uncertain situations. High scorers often seek excitement and are willing to take chances. This trait can lead to both innovative achievements and potentially harmful behaviors.",
      interpretation: (score: number) => {
        if (score >= 4) return "You show high willingness to engage in risky situations.";
        if (score >= 3) return "You display moderate comfort with risk and uncertainty.";
        return "You show careful consideration before taking risks.";
      }
    }
  },
  'th': {
    callousness: {
      title: "ความไร้ความรู้สึก",
      description: "วัดความไม่อ่อนไหวทางอารมณ์และการขาดความเห็นอกเห็นใจ ผู้ที่ได้คะแนนสูงมักจะไม่มีความผูกพันทางอารมณ์และแสดงความห่วงใยต่อความรู้สึกหรือความเป็นอยู่ของผู้อื่นน้อย งานวิจัยชี้ว่าลักษณะนี้เกี่ยวข้องกับพฤติกรรมเพื่อสังคมที่ลดลงและการตอบสนองทางอารมณ์",
      interpretation: (score: number) => {
        if (score >= 4) return "คุณแสดงความอ่อนไหวทางอารมณ์และความเห็นอกเห็นใจน้อยกว่าผู้อื่นอย่างมีนัยสำคัญ";
        if (score >= 3) return "คุณแสดงระดับการไม่ผูกพันทางอารมณ์ในความสัมพันธ์ระหว่างบุคคลในระดับปานกลาง";
        return "คุณแสดงระดับความเห็นอกเห็นใจและความอ่อนไหวทางอารมณ์ในระดับปกติ";
      }
    },
    grandiosity: {
      title: "ความหลงตัวเอง",
      description: "สะท้อนความรู้สึกสำคัญตัวเองและความรู้สึกว่าตนเองมีสิทธิพิเศษ ผู้ที่ได้คะแนนสูงมักเชื่อว่าตนเองสมควรได้รับการปฏิบัติเป็นพิเศษและมีความสามารถเหนือกว่า ลักษณะนี้เชื่อมโยงกับแนวโน้มการหลงตัวเองและปัญหาความสัมพันธ์ระหว่างบุคคล",
      interpretation: (score: number) => {
        if (score >= 4) return "คุณแสดงแนวโน้มที่จะมองตนเองสูงส่งและรู้สึกว่าตนเองมีสิทธิพิเศษอย่างชัดเจน";
        if (score >= 3) return "คุณแสดงระดับความสำคัญตัวเองและความรู้สึกมีสิทธิพิเศษในระดับปานกลาง";
        return "คุณแสดงความมั่นใจในตนเองในระดับที่เหมาะสมโดยไม่มากเกินไป";
      }
    },
    aggressiveness: {
      title: "ความก้าวร้าว",
      description: "วัดแนวโน้มพฤติกรรมที่เป็นปรปักษ์หรือการเผชิญหน้า ผู้ที่ได้คะแนนสูงมีแนวโน้มที่จะมีส่วนร่วมในการเผชิญหน้าและแสดงอารมณ์โกรธเร็ว งานวิจัยเชื่อมโยงลักษณะนี้กับความขัดแย้งในความสัมพันธ์ที่เพิ่มขึ้น",
      interpretation: (score: number) => {
        if (score >= 4) return "คุณแสดงระดับแนวโน้มการเผชิญหน้าและอารมณ์โกรธเร็วในระดับสูง";
        if (score >= 3) return "คุณแสดงแนวโน้มความก้าวร้าวในการมีปฏิสัมพันธ์ในระดับปานกลาง";
        return "คุณแสดงความกล้าแสดงออกในระดับปกติโดยไม่ก้าวร้าวเกินไป";
      }
    },
    suspicion: {
      title: "ความระแวง",
      description: "บ่งชี้แนวโน้มที่จะสงสัยในเจตนาของผู้อื่นและรักษาความระแวงในความสัมพันธ์ ผู้ที่ได้คะแนนสูงมักมีความยากลำบากในการไว้วางใจผู้อื่นและอาจรับรู้ถึงแรงจูงใจที่ซ่อนเร้น ลักษณะนี้สามารถส่งผลกระทบต่อความสัมพันธ์ทางสังคมและการร่วมมือ",
      interpretation: (score: number) => {
        if (score >= 4) return "คุณแสดงระดับความสงสัยและไม่ไว้วางใจในเจตนาของผู้อื่นในระดับสูง";
        if (score >= 3) return "คุณแสดงความระมัดระวังในการไว้วางใจผู้อื่นในระดับปานกลาง";
        return "คุณแสดงระดับความไว้วางใจที่เหมาะสมในขณะที่รักษาขอบเขตที่เหมาะสม";
      }
    },
    manipulativeness: {
      title: "การชักใย",
      description: "วัดแนวโน้มในการมีอิทธิพลต่อผู้อื่นเพื่อผลประโยชน์ส่วนตัว ผู้ที่ได้คะแนนสูงมีทักษะและเต็มใจที่จะใช้กลยุทธ์การชักใย งานวิจัยชี้ว่าลักษณะนี้สามารถนำไปสู่ความสัมพันธ์ที่ตึงเครียดและความจริงใจที่ลดลง",
      interpretation: (score: number) => {
        if (score >= 4) return "คุณแสดงแนวโน้มที่จะมีอิทธิพลและการชักใยผู้อื่นอย่างชัดเจน";
        if (score >= 3) return "คุณแสดงความสามารถและความเต็มใจในการมีอิทธิพลต่อผู้อื่นในระดับปานกลาง";
        return "คุณแสดงความชอบในการมีปฏิสัมพันธ์ที่ตรงไปตรงมาและจริงใจ";
      }
    },
    dominance: {
      title: "การครอบงำ",
      description: "สะท้อนแนวโน้มในการเข้าควบคุมและใช้อำนาจในสถานการณ์ทางสังคม ผู้ที่ได้คะแนนสูงมักจะโน้มเอียงไปสู่บทบาทผู้นำโดยธรรมชาติ แม้ว่าสิ่งนี้อาจเป็นประโยชน์ในบางบริบท แต่การครอบงำที่มากเกินไปอาจสร้างความท้าทายในความสัมพันธ์ระหว่างบุคคล",
      interpretation: (score: number) => {
        if (score >= 4) return "คุณแสดงแนวโน้มที่จะเข้าควบคุมและเป็นผู้นำอย่างชัดเจน";
        if (score >= 3) return "คุณแสดงระดับการครอบงำทางสังคมและภาวะผู้นำในระดับปานกลาง";
        return "คุณแสดงแนวทางที่สมดุลในการมีอิทธิพลทางสังคมและภาวะผู้นำ";
      }
    },
    riskTaking: {
      title: "การเสี่ยง",
      description: "วัดแนวโน้มในการเข้าร่วมในสถานการณ์ที่อันตรายหรือไม่แน่นอน ผู้ที่ได้คะแนนสูงมักแสวงหาความตื่นเต้นและเต็มใจที่จะเสี่ยง ลักษณะนี้สามารถนำไปสู่ทั้งความสำเร็จที่สร้างสรรค์และพฤติกรรมที่อาจเป็นอันตราย",
      interpretation: (score: number) => {
        if (score >= 4) return "คุณแสดงความเต็มใจที่จะเข้าร่วมในสถานการณ์ที่เสี่ยงในระดับสูง";
        if (score >= 3) return "คุณแสดงความสบายใจกับความเสี่ยงและความไม่แน่นอนในระดับปานกลาง";
        return "คุณแสดงการพิจารณาอย่างรอบคอบก่อนที่จะเสี่ยง";
      }
    }
  },
  'es-CL': {
    callousness: {
      title: "Insensibilidad",
      description: "Mide la insensibilidad emocional y la falta de empatía. Las personas con puntuaciones altas tienden a estar emocionalmente desapegadas y muestran poca preocupación por los sentimientos o el bienestar de los demás. La investigación indica que este rasgo está asociado con un comportamiento prosocial reducido y una menor respuesta emocional.",
      interpretation: (score: number) => {
        if (score >= 4) return "Muestras una sensibilidad emocional y empatía significativamente reducidas en comparación con otros.";
        if (score >= 3) return "Muestras niveles moderados de desapego emocional en las relaciones interpersonales.";
        return "Demuestras niveles típicos de empatía y sensibilidad emocional.";
      }
    },
    grandiosity: {
      title: "Grandiosidad",
      description: "Refleja un sentido inflado de importancia personal y derecho. Las personas con puntuaciones altas a menudo creen que merecen un trato especial y tienen habilidades superiores. Este rasgo está vinculado a tendencias narcisistas y dificultades interpersonales.",
      interpretation: (score: number) => {
        if (score >= 4) return "Muestras fuertes tendencias hacia la autopercepción grandiosa y el sentimiento de derecho.";
        if (score >= 3) return "Muestras niveles moderados de importancia personal y sentimiento de derecho.";
        return "Muestras niveles saludables de autoestima sin excesiva importancia personal.";
      }
    },
    aggressiveness: {
      title: "Agresividad",
      description: "Mide la tendencia hacia el comportamiento hostil o confrontacional. Las personas con puntuaciones altas son más propensas a participar en interacciones confrontacionales y mostrar un temperamento rápido. La investigación vincula este rasgo con un aumento de conflictos en las relaciones.",
      interpretation: (score: number) => {
        if (score >= 4) return "Muestras altos niveles de tendencia confrontacional y temperamento rápido.";
        if (score >= 3) return "Muestras niveles moderados de tendencias agresivas en las interacciones.";
        return "Muestras niveles típicos de asertividad sin agresión excesiva.";
      }
    },
    suspicion: {
      title: "Suspicacia",
      description: "Indica la tendencia a dudar de las intenciones de los demás y mantener escepticismo en las relaciones. Las personas con puntuaciones altas a menudo tienen dificultad para confiar en otros y pueden percibir motivos ocultos. Este rasgo puede impactar las relaciones sociales y la cooperación.",
      interpretation: (score: number) => {
        if (score >= 4) return "Muestras altos niveles de escepticismo y desconfianza en las intenciones de los demás.";
        if (score >= 3) return "Muestras niveles moderados de precaución al confiar en otros.";
        return "Muestras niveles saludables de confianza mientras mantienes límites apropiados.";
      }
    },
    manipulativeness: {
      title: "Manipulación",
      description: "Mide la tendencia a influir en otros para beneficio personal. Las personas con puntuaciones altas son hábiles y están dispuestas a usar tácticas de manipulación. La investigación sugiere que este rasgo puede llevar a relaciones tensas y autenticidad reducida.",
      interpretation: (score: number) => {
        if (score >= 4) return "Muestras fuertes tendencias hacia la influencia estratégica y la manipulación.";
        if (score >= 3) return "Muestras capacidad y disposición moderada para influir en otros.";
        return "Muestras preferencia por interacciones directas y honestas.";
      }
    },
    dominance: {
      title: "Dominancia",
      description: "Refleja la tendencia a tomar el control y ejercer control en situaciones sociales. Las personas con puntuaciones altas naturalmente gravitan hacia roles de liderazgo. Si bien esto puede ser beneficioso en algunos contextos, la dominancia extrema puede crear desafíos interpersonales.",
      interpretation: (score: number) => {
        if (score >= 4) return "Muestras fuertes tendencias hacia el control y el liderazgo.";
        if (score >= 3) return "Muestras niveles moderados de dominancia social y liderazgo.";
        return "Muestras un enfoque equilibrado hacia la influencia social y el liderazgo.";
      }
    },
    riskTaking: {
      title: "Toma de Riesgos",
      description: "Mide la propensión a participar en situaciones peligrosas o inciertas. Las personas con puntuaciones altas a menudo buscan emoción y están dispuestas a tomar riesgos. Este rasgo puede llevar tanto a logros innovadores como a comportamientos potencialmente dañinos.",
      interpretation: (score: number) => {
        if (score >= 4) return "Muestras alta disposición para participar en situaciones arriesgadas.";
        if (score >= 3) return "Muestras comodidad moderada con el riesgo y la incertidumbre.";
        return "Muestras consideración cuidadosa antes de tomar riesgos.";
      }
    }
  },
  'ro': {
    callousness: {
      title: "Insensibilitate",
      description: "Măsoară insensibilitatea emoțională și lipsa empatiei. Persoanele cu scoruri mari tind să fie detașate emoțional și arată puțină preocupare pentru sentimentele sau bunăstarea altora. Cercetările indică că această trăsătură este asociată cu comportament prosocial redus și responsivitate emoțională scăzută.",
      interpretation: (score: number) => {
        if (score >= 4) return "Arăți o sensibilitate emoțională și empatie semnificativ reduse în comparație cu alții.";
        if (score >= 3) return "Arăți niveluri moderate de detașare emoțională în relațiile interpersonale.";
        return "Demonstrezi niveluri tipice de empatie și sensibilitate emoțională.";
      }
    },
    grandiosity: {
      title: "Grandoare",
      description: "Reflectă un sentiment exagerat de importanță de sine și îndreptățire. Persoanele cu scoruri mari adesea cred că merită tratament special și au abilități superioare. Această trăsătură este legată de tendințe narcisiste și dificultăți interpersonale.",
      interpretation: (score: number) => {
        if (score >= 4) return "Arăți tendințe puternice spre autopercepție grandioasă și sentiment de îndreptățire.";
        if (score >= 3) return "Arăți niveluri moderate de importanță de sine și sentiment de îndreptățire.";
        return "Arăți niveluri sănătoase de stimă de sine fără importanță de sine excesivă.";
      }
    },
    aggressiveness: {
      title: "Agresivitate",
      description: "Măsoară tendința spre comportament ostil sau conflictual. Persoanele cu scoruri mari sunt mai predispuse să se angajeze în interacțiuni conflictuale și să arate un temperament iute. Cercetarea leagă această trăsătură de conflicte crescute în relații.",
      interpretation: (score: number) => {
        if (score >= 4) return "Arăți niveluri ridicate de tendință conflictuală și temperament iute.";
        if (score >= 3) return "Arăți niveluri moderate de tendințe agresive în interacțiuni.";
        return "Arăți niveluri tipice de asertivitate fără agresivitate excesivă.";
      }
    },
    suspicion: {
      title: "Suspiciune",
      description: "Indică tendința de a se îndoi de intențiile altora și de a menține scepticismul în relații. Persoanele cu scoruri mari adesea au dificultăți în a avea încredere în alții și pot percepe motive ascunse. Această trăsătură poate impacta relațiile sociale și cooperarea.",
      interpretation: (score: number) => {
        if (score >= 4) return "Arăți niveluri ridicate de scepticism și neîncredere în intențiile altora.";
        if (score >= 3) return "Arăți niveluri moderate de precauție în încrederea în alții.";
        return "Arăți niveluri sănătoase de încredere în timp ce menții limite adecvate.";
      }
    },
    manipulativeness: {
      title: "Manipulare",
      description: "Măsoară tendința de a influența alții pentru câștig personal. Persoanele cu scoruri mari sunt pricepute și dispuse să folosească tactici de manipulare. Cercetarea sugerează că această trăsătură poate duce la relații tensionate și autenticitate redusă.",
      interpretation: (score: number) => {
        if (score >= 4) return "Arăți tendințe puternice spre influență strategică și manipulare.";
        if (score >= 3) return "Arăți capacitate și disponibilitate moderată de a influența alții.";
        return "Arăți preferință pentru interacțiuni directe și oneste.";
      }
    },
    dominance: {
      title: "Dominanță",
      description: "Reflectă tendința de a prelua controlul și de a exercita control în situații sociale. Persoanele cu scoruri mari gravitează natural spre roluri de leadership. Deși acest lucru poate fi benefic în unele contexte, dominanța extremă poate crea provocări interpersonale.",
      interpretation: (score: number) => {
        if (score >= 4) return "Arăți tendințe puternice spre control și leadership.";
        if (score >= 3) return "Arăți niveluri moderate de dominanță socială și leadership.";
        return "Arăți o abordare echilibrată față de influența socială și leadership.";
      }
    },
    riskTaking: {
      title: "Asumarea Riscurilor",
      description: "Măsoară propensiunea pentru implicarea în situații periculoase sau incerte. Persoanele cu scoruri mari adesea caută emoții și sunt dispuse să își asume riscuri. Această trăsătură poate duce atât la realizări inovatoare, cât și la comportamente potențial dăunătoare.",
      interpretation: (score: number) => {
        if (score >= 4) return "Arăți disponibilitate ridicată de a te implica în situații riscante.";
        if (score >= 3) return "Arăți confort moderat cu riscul și incertitudinea.";
        return "Arăți considerare atentă înainte de a-ți asuma riscuri.";
      }
    }
  },
  'el': {
    callousness: {
      title: "Αναισθησία",
      description: "Μετρά τη συναισθηματική αναισθησία και την έλλειψη ενσυναίσθησης. Άτομα με υψηλή βαθμολογία τείνουν να είναι συναισθηματικά αποστασιοποιημένα και δείχνουν μικρό ενδιαφέρον για τα συναισθήματα ή την ευημερία των άλλων. Η έρευνα δείχνει ότι αυτό το χαρακτηριστικό συνδέεται με μειωμένη προκοινωνική συμπεριφορά και συναισθηματική ανταπόκριση.",
      interpretation: (score: number) => {
        if (score >= 4) return "Δείχνεις σημαντικά μειωμένη συναισθηματική ευαισθησία και ενσυναίσθηση σε σύγκριση με άλλους.";
        if (score >= 3) return "Δείχνεις μέτρια επίπεδα συναισθηματικής αποστασιοποίησης στις διαπροσωπικές σχέσεις.";
        return "Επιδεικνύεις τυπικά επίπεδα ενσυναίσθησης και συναισθηματικής ευαισθησίας.";
      }
    },
    grandiosity: {
      title: "Μεγαλοπρέπεια",
      description: "Αντανακλά μια διογκωμένη αίσθηση αυτοσημασίας και δικαιώματος. Άτομα με υψηλή βαθμολογία συχνά πιστεύουν ότι αξίζουν ειδική μεταχείριση και έχουν ανώτερες ικανότητες. Αυτό το χαρακτηριστικό συνδέεται με ναρκισσιστικές τάσεις και διαπροσωπικές δυσκολίες.",
      interpretation: (score: number) => {
        if (score >= 4) return "Δείχνεις ισχυρές τάσεις προς τη μεγαλοπρεπή αυτοαντίληψη και το αίσθημα δικαιώματος.";
        if (score >= 3) return "Δείχνεις μέτρια επίπεδα αυτοσημασίας και αισθήματος δικαιώματος.";
        return "Δείχνεις υγιή επίπεδα αυτοεκτίμησης χωρίς υπερβολική αυτοσημασία.";
      }
    },
    aggressiveness: {
      title: "Επιθετικότητα",
      description: "Μετρά την τάση προς εχθρική ή συγκρουσιακή συμπεριφορά. Άτομα με υψηλή βαθμολογία είναι πιο πιθανό να εμπλακούν σε συγκρουσιακές αλληλεπιδράσεις και να δείξουν γρήγορο θυμό. Η έρευνα συνδέει αυτό το χαρακτηριστικό με αυξημένες συγκρούσεις στις σχέσεις.",
      interpretation: (score: number) => {
        if (score >= 4) return "Δείχνεις υψηλά επίπεδα συγκρουσιακής τάσης και γρήγορου θυμού.";
        if (score >= 3) return "Δείχνεις μέτρια επίπεδα επιθετικών τάσεων στις αλληλεπιδράσεις.";
        return "Δείχνεις τυπικά επίπεδα διεκδικητικότητας χωρίς υπερβολική επιθετικότητα.";
      }
    },
    suspicion: {
      title: "Καχυποψία",
      description: "Δείχνει την τάση να αμφιβάλλει κανείς για τις προθέσεις των άλλων και να διατηρεί σκεπτικισμό στις σχέσεις. Άτομα με υψηλή βαθμολογία συχνά δυσκολεύονται να εμπιστευτούν άλλους και μπορεί να αντιλαμβάνονται κρυφά κίνητρα. Αυτό το χαρακτηριστικό μπορεί να επηρεάσει τις κοινωνικές σχέσεις και τη συνεργασία.",
      interpretation: (score: number) => {
        if (score >= 4) return "Δείχνεις υψηλά επίπεδα σκεπτικισμού και δυσπιστίας στις προθέσεις των άλλων.";
        if (score >= 3) return "Δείχνεις μέτρια επίπεδα προσοχής στην εμπιστοσύνη προς τους άλλους.";
        return "Δείχνεις υγιή επίπεδα εμπιστοσύνης ενώ διατηρείς κατάλληλα όρια.";
      }
    },
    manipulativeness: {
      title: "Χειριστικότητα",
      description: "Μετρά την τάση να επηρεάζει κανείς άλλους για προσωπικό όφελος. Άτομα με υψηλή βαθμολογία είναι ικανά και πρόθυμα να χρησιμοποιήσουν τακτικές χειραγώγησης. Η έρευνα υποδεικνύει ότι αυτό το χαρακτηριστικό μπορεί να οδηγήσει σε τεταμένες σχέσεις και μειωμένη αυθεντικότητα.",
      interpretation: (score: number) => {
        if (score >= 4) return "Δείχνεις ισχυρές τάσεις προς τη στρατηγική επιρροή και τη χειραγώγηση.";
        if (score >= 3) return "Δείχνεις μέτρια ικανότητα και προθυμία να επηρεάσεις άλλους.";
        return "Δείχνεις προτίμηση για άμεσες και ειλικρινείς αλληλεπιδράσεις.";
      }
    },
    dominance: {
      title: "Κυριαρχία",
      description: "Αντανακλά την τάση να αναλαμβάνει κανείς τον έλεγχο και να ασκεί έλεγχο σε κοινωνικές καταστάσεις. Άτομα με υψηλή βαθμολογία φυσικά έλκονται προς ηγετικούς ρόλους. Ενώ αυτό μπορεί να είναι ωφέλιμο σε κάποια πλαίσια, η ακραία κυριαρχία μπορεί να δημιουργήσει διαπροσωπικές προκλήσεις.",
      interpretation: (score: number) => {
        if (score >= 4) return "Δείχνεις ισχυρές τάσεις προς τον έλεγχο και την ηγεσία.";
        if (score >= 3) return "Δείχνεις μέτρια επίπεδα κοινωνικής κυριαρχίας και ηγεσίας.";
        return "Δείχνεις ισορροπημένη προσέγγιση στην κοινωνική επιρροή και την ηγεσία.";
      }
    },
    riskTaking: {
      title: "Ανάληψη Ρίσκου",
      description: "Μετρά την τάση για συμμετοχή σε επικίνδυνες ή αβέβαιες καταστάσεις. Άτομα με υψηλή βαθμολογία συχνά αναζητούν την έξαψη και είναι πρόθυμα να πάρουν ρίσκα. Αυτό το χαρακτηριστικό μπορεί να οδηγήσει τόσο σε καινοτόμα επιτεύγματα όσο και σε δυνητικά επιβλαβείς συμπεριφορές.",
      interpretation: (score: number) => {
        if (score >= 4) return "Δείχνεις υψηλή προθυμία να εμπλακείς σε επικίνδυνες καταστάσεις.";
        if (score >= 3) return "Δείχνεις μέτρια άνεση με το ρίσκο και την αβεβαιότητα.";
        return "Δείχνεις προσεκτική εξέταση πριν την ανάληψη ρίσκων.";
      }
    }
  },
  'es-CO': {
    callousness: {
      title: "Insensibilidad",
      description: "Mide la insensibilidad emocional y la falta de empatía. Las personas con puntuaciones altas tienden a estar emocionalmente desapegadas y muestran poca preocupación por los sentimientos o el bienestar de los demás. La investigación indica que este rasgo está asociado con un comportamiento prosocial reducido y una menor respuesta emocional.",
      interpretation: (score: number) => {
        if (score >= 4) return "Muestras una sensibilidad emocional y empatía significativamente reducidas en comparación con otros.";
        if (score >= 3) return "Muestras niveles moderados de desapego emocional en las relaciones interpersonales.";
        return "Demuestras niveles típicos de empatía y sensibilidad emocional.";
      }
    },
    grandiosity: {
      title: "Grandiosidad",
      description: "Refleja un sentido inflado de importancia personal y derecho. Las personas con puntuaciones altas a menudo creen que merecen un trato especial y tienen habilidades superiores. Este rasgo está vinculado a tendencias narcisistas y dificultades interpersonales.",
      interpretation: (score: number) => {
        if (score >= 4) return "Muestras fuertes tendencias hacia la autopercepción grandiosa y el sentimiento de derecho.";
        if (score >= 3) return "Muestras niveles moderados de importancia personal y sentimiento de derecho.";
        return "Muestras niveles saludables de autoestima sin excesiva importancia personal.";
      }
    },
    aggressiveness: {
      title: "Agresividad",
      description: "Mide la tendencia hacia el comportamiento hostil o confrontacional. Las personas con puntuaciones altas son más propensas a participar en interacciones confrontacionales y mostrar un temperamento rápido. La investigación vincula este rasgo con un aumento de conflictos en las relaciones.",
      interpretation: (score: number) => {
        if (score >= 4) return "Muestras altos niveles de tendencia confrontacional y temperamento rápido.";
        if (score >= 3) return "Muestras niveles moderados de tendencias agresivas en las interacciones.";
        return "Muestras niveles típicos de asertividad sin agresión excesiva.";
      }
    },
    suspicion: {
      title: "Suspicacia",
      description: "Indica la tendencia a dudar de las intenciones de los demás y mantener escepticismo en las relaciones. Las personas con puntuaciones altas a menudo tienen dificultad para confiar en otros y pueden percibir motivos ocultos. Este rasgo puede impactar las relaciones sociales y la cooperación.",
      interpretation: (score: number) => {
        if (score >= 4) return "Muestras altos niveles de escepticismo y desconfianza en las intenciones de los demás.";
        if (score >= 3) return "Muestras niveles moderados de precaución al confiar en otros.";
        return "Muestras niveles saludables de confianza mientras mantienes límites apropiados.";
      }
    },
    manipulativeness: {
      title: "Manipulación",
      description: "Mide la tendencia a influir en otros para beneficio personal. Las personas con puntuaciones altas son hábiles y están dispuestas a usar tácticas de manipulación. La investigación sugiere que este rasgo puede llevar a relaciones tensas y autenticidad reducida.",
      interpretation: (score: number) => {
        if (score >= 4) return "Muestras fuertes tendencias hacia la influencia estratégica y la manipulación.";
        if (score >= 3) return "Muestras capacidad y disposición moderada para influir en otros.";
        return "Muestras preferencia por interacciones directas y honestas.";
      }
    },
    dominance: {
      title: "Dominancia",
      description: "Refleja la tendencia a tomar el control y ejercer control en situaciones sociales. Las personas con puntuaciones altas naturalmente gravitan hacia roles de liderazgo. Si bien esto puede ser beneficioso en algunos contextos, la dominancia extrema puede crear desafíos interpersonales.",
      interpretation: (score: number) => {
        if (score >= 4) return "Muestras fuertes tendencias hacia el control y el liderazgo.";
        if (score >= 3) return "Muestras niveles moderados de dominancia social y liderazgo.";
        return "Muestras un enfoque equilibrado hacia la influencia social y el liderazgo.";
      }
    },
    riskTaking: {
      title: "Toma de Riesgos",
      description: "Mide la propensión a participar en situaciones peligrosas o inciertas. Las personas con puntuaciones altas a menudo buscan emoción y están dispuestas a tomar riesgos. Este rasgo puede llevar tanto a logros innovadores como a comportamientos potencialmente dañinos.",
      interpretation: (score: number) => {
        if (score >= 4) return "Muestras alta disposición para participar en situaciones arriesgadas.";
        if (score >= 3) return "Muestras comodidad moderada con el riesgo y la incertidumbre.";
        return "Muestras consideración cuidadosa antes de tomar riesgos.";
      }
    }
  }
};