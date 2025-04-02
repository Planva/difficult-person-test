import { Language } from './translations';

export interface Question {
  id: number;
  text: Record<Language, string>;
  trait: TraitType;
}

export type TraitType = 
  | 'callousness'
  | 'grandiosity'
  | 'aggressiveness'
  | 'suspicion'
  | 'manipulativeness'
  | 'dominance'
  | 'riskTaking';

export const traits: Record<TraitType, Record<Language, string>> = {
  callousness: {
    'en': 'Callousness',
    'th': 'ความไร้ความรู้สึก',
    'es-CL': 'Insensibilidad',
    'ro': 'Insensibilitate',
    'el': 'Αναισθησία',
    'es-CO': 'Insensibilidad'
  },
  grandiosity: {
    'en': 'Grandiosity',
    'th': 'ความหลงตัวเอง',
    'es-CL': 'Grandiosidad',
    'ro': 'Grandoare',
    'el': 'Μεγαλοπρέπεια',
    'es-CO': 'Grandiosidad'
  },
  aggressiveness: {
    'en': 'Aggressiveness',
    'th': 'ความก้าวร้าว',
    'es-CL': 'Agresividad',
    'ro': 'Agresivitate',
    'el': 'Επιθετικότητα',
    'es-CO': 'Agresividad'
  },
  suspicion: {
    'en': 'Suspicion',
    'th': 'ความระแวง',
    'es-CL': 'Suspicacia',
    'ro': 'Suspiciune',
    'el': 'Καχυποψία',
    'es-CO': 'Suspicacia'
  },
  manipulativeness: {
    'en': 'Manipulativeness',
    'th': 'การชักใย',
    'es-CL': 'Manipulación',
    'ro': 'Manipulare',
    'el': 'Χειριστικότητα',
    'es-CO': 'Manipulación'
  },
  dominance: {
    'en': 'Dominance',
    'th': 'การครอบงำ',
    'es-CL': 'Dominancia',
    'ro': 'Dominanță',
    'el': 'Κυριαρχία',
    'es-CO': 'Dominancia'
  },
  riskTaking: {
    'en': 'Risk-taking',
    'th': 'การเสี่ยง',
    'es-CL': 'Toma de Riesgos',
    'ro': 'Asumarea Riscurilor',
    'el': 'Ανάληψη Ρίσκου',
    'es-CO': 'Toma de Riesgos'
  }
};

export const questions: Question[] = [
  // Callousness
  {
    id: 1,
    text: {
      'en': "I often lack empathy for others",
      'th': "ฉันมักขาดความเห็นอกเห็นใจผู้อื่น",
      'es-CL': "A menudo me falta empatía por los demás",
      'ro': "Adesea îmi lipsește empatia pentru alții",
      'el': "Συχνά μου λείπει η ενσυναίσθηση για τους άλλους",
      'es-CO': "A menudo me falta empatía por los demás"
    },
    trait: "callousness"
  },
  {
    id: 2,
    text: {
      'en': "Other people's problems don't concern me",
      'th': "ปัญหาของคนอื่นไม่ใช่เรื่องของฉัน",
      'es-CL': "Los problemas de otras personas no me preocupan",
      'ro': "Problemele altor persoane nu mă privesc",
      'el': "Τα προβλήματα των άλλων δεν με αφορούν",
      'es-CO': "Los problemas de otras personas no me preocupan"
    },
    trait: "callousness"
  },
  {
    id: 3,
    text: {
      'en': "I don't care if my actions hurt others",
      'th': "ฉันไม่สนใจว่าการกระทำของฉันจะทำร้ายผู้อื่น",
      'es-CL': "No me importa si mis acciones lastiman a otros",
      'ro': "Nu-mi pasă dacă acțiunile mele rănesc pe alții",
      'el': "Δεν με νοιάζει αν οι πράξεις μου πληγώνουν άλλους",
      'es-CO': "No me importa si mis acciones lastiman a otros"
    },
    trait: "callousness"
  },
  {
    id: 4,
    text: {
      'en': "I rarely feel emotional when others are suffering",
      'th': "ฉันแทบจะไม่รู้สึกอะไรเมื่อผู้อื่นกำลังทุกข์ทรมาน",
      'es-CL': "Raramente me siento emocional cuando otros sufren",
      'ro': "Rareori mă simt emoționat când alții suferă",
      'el': "Σπάνια νιώθω συναισθηματικά όταν οι άλλοι υποφέρουν",
      'es-CO': "Raramente me siento emocional cuando otros sufren"
    },
    trait: "callousness"
  },
  {
    id: 5,
    text: {
      'en': "People's emotional pain doesn't affect me much",
      'th': "ความเจ็บปวดทางอารมณ์ของผู้อื่นไม่ส่งผลกระทบต่อฉันมากนัก",
      'es-CL': "El dolor emocional de las personas no me afecta mucho",
      'ro': "Durerea emoțională a oamenilor nu mă afectează prea mult",
      'el': "Ο συναισθηματικός πόνος των ανθρώπων δεν με επηρεάζει πολύ",
      'es-CO': "El dolor emocional de las personas no me afecta mucho"
    },
    trait: "callousness"
  },
  
  // Grandiosity
  {
    id: 6,
    text: {
      'en': "I deserve special treatment",
      'th': "ฉันสมควรได้รับการปฏิบัติเป็นพิเศษ",
      'es-CL': "Merezco un trato especial",
      'ro': "Merit un tratament special",
      'el': "Αξίζω ειδική μεταχείριση",
      'es-CO': "Merezco un trato especial"
    },
    trait: "grandiosity"
  },
  {
    id: 7,
    text: {
      'en': "I'm more capable than most people",
      'th': "ฉันมีความสามารถมากกว่าคนส่วนใหญ่",
      'es-CL': "Soy más capaz que la mayoría de las personas",
      'ro': "Sunt mai capabil decât majoritatea oamenilor",
      'el': "Είμαι πιο ικανός από τους περισσότερους ανθρώπους",
      'es-CO': "Soy más capaz que la mayoría de las personas"
    },
    trait: "grandiosity"
  },
  {
    id: 8,
    text: {
      'en': "I'm extraordinary and deserve recognition",
      'th': "ฉันเป็นคนพิเศษและสมควรได้รับการยอมรับ",
      'es-CL': "Soy extraordinario y merezco reconocimiento",
      'ro': "Sunt extraordinar și merit recunoaștere",
      'el': "Είμαι εξαιρετικός και αξίζω αναγνώριση",
      'es-CO': "Soy extraordinario y merezco reconocimiento"
    },
    trait: "grandiosity"
  },
  {
    id: 9,
    text: {
      'en': "My talents are superior to others",
      'th': "ความสามารถของฉันเหนือกว่าผู้อื่น",
      'es-CL': "Mis talentos son superiores a los de otros",
      'ro': "Talentele mele sunt superioare altora",
      'el': "Τα ταλέντα μου είναι ανώτερα από των άλλων",
      'es-CO': "Mis talentos son superiores a los de otros"
    },
    trait: "grandiosity"
  },
  {
    id: 10,
    text: {
      'en': "I should be given special privileges",
      'th': "ฉันควรได้รับสิทธิพิเศษ",
      'es-CL': "Deberían darme privilegios especiales",
      'ro': "Ar trebui să mi se acorde privilegii speciale",
      'el': "Θα έπρεπε να μου δίνονται ειδικά προνόμια",
      'es-CO': "Deberían darme privilegios especiales"
    },
    trait: "grandiosity"
  },
  
  // Aggressiveness
  {
    id: 11,
    text: {
      'en': "I tend to be confrontational",
      'th': "ฉันมักจะชอบเผชิญหน้า",
      'es-CL': "Tiendo a ser confrontacional",
      'ro': "Tind să fiu conflictual",
      'el': "Τείνω να είμαι συγκρουσιακός",
      'es-CO': "Tiendo a ser confrontacional"
    },
    trait: "aggressiveness"
  },
  {
    id: 12,
    text: {
      'en': "I can be hostile toward others",
      'th': "ฉันสามารถเป็นศัตรูกับผู้อื่นได้",
      'es-CL': "Puedo ser hostil hacia otros",
      'ro': "Pot fi ostil față de alții",
      'el': "Μπορώ να είμαι εχθρικός προς τους άλλους",
      'es-CO': "Puedo ser hostil hacia otros"
    },
    trait: "aggressiveness"
  },
  {
    id: 13,
    text: {
      'en': "I enjoy arguments and fights",
      'th': "ฉันชอบการโต้เถียงและการทะเลาะ",
      'es-CL': "Disfruto las discusiones y peleas",
      'ro': "Îmi plac argumentele și luptele",
      'el': "Απολαμβάνω τις διαφωνίες και τους καυγάδες",
      'es-CO': "Disfruto las discusiones y peleas"
    },
    trait: "aggressiveness"
  },
  {
    id: 14,
    text: {
      'en': "I'm quick to anger",
      'th': "ฉันโกรธง่าย",
      'es-CL': "Me enojo rápidamente",
      'ro': "Mă enervez repede",
      'el': "Θυμώνω εύκολα",
      'es-CO': "Me enojo rápidamente"
    },
    trait: "aggressiveness"
  },
  {
    id: 15,
    text: {
      'en': "I have a short temper",
      'th': "ฉันใจร้อน",
      'es-CL': "Tengo mal genio",
      'ro': "Am un temperament iute",
      'el': "Έχω κοντό φιτίλι",
      'es-CO': "Tengo mal genio"
    },
    trait: "aggressiveness"
  },
  
  // Suspicion
  {
    id: 16,
    text: {
      'en': "I find it hard to trust people",
      'th': "ฉันรู้สึกยากที่จะไว้ใจผู้อื่น",
      'es-CL': "Me resulta difícil confiar en las personas",
      'ro': "Mi se pare greu să am încredere în oameni",
      'el': "Μου είναι δύσκολο να εμπιστευτώ ανθρώπους",
      'es-CO': "Me resulta difícil confiar en las personas"
    },
    trait: "suspicion"
  },
  {
    id: 17,
    text: {
      'en': "People usually have hidden motives",
      'th': "ผู้คนมักมีแรงจูงใจที่ซ่อนเร้น",
      'es-CL': "Las personas generalmente tienen motivos ocultos",
      'ro': "Oamenii au de obicei motive ascunse",
      'el': "Οι άνθρωποι συνήθως έχουν κρυφά κίνητρα",
      'es-CO': "Las personas generalmente tienen motivos ocultos"
    },
    trait: "suspicion"
  },
  {
    id: 18,
    text: {
      'en': "I'm suspicious of others' intentions",
      'th': "ฉันระแวงเจตนาของผู้อื่น",
      'es-CL': "Soy suspicaz de las intenciones de otros",
      'ro': "Sunt suspicios față de intențiile altora",
      'el': "Είμαι καχύποπτος με τις προθέσεις των άλλων",
      'es-CO': "Soy suspicaz de las intenciones de otros"
    },
    trait: "suspicion"
  },
  {
    id: 19,
    text: {
      'en': "People often try to take advantage of me",
      'th': "ผู้คนมักพยายามเอาเปรียบฉัน",
      'es-CL': "La gente a menudo trata de aprovecharse de mí",
      'ro': "Oamenii adesea încearcă să profite de mine",
      'el': "Οι άνθρωποι συχνά προσπαθούν να με εκμεταλλευτούν",
      'es-CO': "La gente a menudo trata de aprovecharse de mí"
    },
    trait: "suspicion"
  },
  {
    id: 20,
    text: {
      'en': "I need to be on guard with most people",
      'th': "ฉันต้องระวังตัวกับคนส่วนใหญ่",
      'es-CL': "Necesito estar en guardia con la mayoría de las personas",
      'ro': "Trebuie să fiu în gardă cu majoritatea oamenilor",
      'el': "Πρέπει να είμαι σε επιφυλακή με τους περισσότερους ανθρώπους",
      'es-CO': "Necesito estar en guardia con la mayoría de las personas"
    },
    trait: "suspicion"
  },
  
  // Manipulativeness
  {
    id: 21,
    text: {
      'en': "I know how to manipulate others",
      'th': "ฉันรู้วิธีชักใยผู้อื่น",
      'es-CL': "Sé cómo manipular a otros",
      'ro': "Știu cum să manipulez pe alții",
      'el': "Ξέρω πώς να χειραγωγώ τους άλλους",
      'es-CO': "Sé cómo manipular a otros"
    },
    trait: "manipulativeness"
  },
  {
    id: 22,
    text: {
      'en': "I can be deceptive if it benefits me",
      'th': "ฉันสามารถหลอกลวงได้ถ้ามันเป็นประโยชน์กับฉัน",
      'es-CL': "Puedo ser engañoso si me beneficia",
      'ro': "Pot fi înșelător dacă îmi aduce beneficii",
      'el': "Μπορώ να είμαι απατηλός αν με ωφελεί",
      'es-CO': "Puedo ser engañoso si me beneficia"
    },
    trait: "manipulativeness"
  },
  {
    id: 23,
    text: {
      'en': "I'm good at getting people to do what I want",
      'th': "ฉันเก่งในการทำให้คนทำในสิ่งที่ฉันต้องการ",
      'es-CL': "Soy bueno haciendo que la gente haga lo que quiero",
      'ro': "Sunt bun la a face oamenii să facă ce vreau",
      'el': "Είμαι καλός στο να κάνω τους ανθρώπους να κάνουν αυτό που θέλω",
      'es-CO': "Soy bueno haciendo que la gente haga lo que quiero"
    },
    trait: "manipulativeness"
  },
  {
    id: 24,
    text: {
      'en': "I sometimes trick people to get my way",
      'th': "บางครั้งฉันหลอกผู้อื่นเพื่อให้ได้ในสิ่งที่ต้องการ",
      'es-CL': "A veces engaño a la gente para salirme con la mía",
      'ro': "Uneori păcălesc oamenii pentru a-mi face pe plac",
      'el': "Μερικές φορές ξεγελάω τους ανθρώπους για να πετύχω το σκοπό μου",
      'es-CO': "A veces engaño a la gente para salirme con la mía"
    },
    trait: "manipulativeness"
  },
  {
    id: 25,
    text: {
      'en': "I can be cunning when I need to be",
      'th': "ฉันสามารถเจ้าเล่ห์ได้เมื่อจำเป็น",
      'es-CL': "Puedo ser astuto cuando lo necesito",
      'ro': "Pot fi viclean când trebuie",
      'el': "Μπορώ να είμαι πανούργος όταν χρειάζεται",
      'es-CO': "Puedo ser astuto cuando lo necesito"
    },
    trait: "manipulativeness"
  },
  
  // Dominance
  {
    id: 26,
    text: {
      'en': "I like to take charge",
      'th': "ฉันชอบเป็นผู้นำ",
      'es-CL': "Me gusta tomar el control",
      'ro': "Îmi place să preiau conducerea",
      'el': "Μου αρέσει να αναλαμβάνω τον έλεγχο",
      'es-CO': "Me gusta tomar el control"
    },
    trait: "dominance"
  },
  {
    id: 27,
    text: {
      'en': "I tend to dominate social situations",
      'th': "ฉันมักจะครอบงำสถานการณ์ทางสังคม",
      'es-CL': "Tiendo a dominar las situaciones sociales",
      'ro': "Tind să domin situațiile sociale",
      'el': "Τείνω να κυριαρχώ στις κοινωνικές καταστάσεις",
      'es-CO': "Tiendo a dominar las situaciones sociales"
    },
    trait: "dominance"
  },
  {
    id: 28,
    text: {
      'en': "I naturally take leadership roles",
      'th': "ฉันมักจะเป็นผู้นำโดยธรรมชาติ",
      'es-CL': "Naturalmente tomo roles de liderazgo",
      'ro': "În mod natural preiau roluri de conducere",
      'el': "Φυσικά αναλαμβάνω ηγετικούς ρόλους",
      'es-CO': "Naturalmente tomo roles de liderazgo"
    },
    trait: "dominance"
  },
  {
    id: 29,
    text: {
      'en': "I prefer to be the one making decisions",
      'th': "ฉันชอบเป็นคนตัดสินใจ",
      'es-CL': "Prefiero ser quien toma las decisiones",
      'ro': "Prefer să fiu cel care ia deciziile",
      'el': "Προτιμώ να είμαι αυτός που παίρνει τις αποφάσεις",
      'es-CO': "Prefiero ser quien toma las decisiones"
    },
    trait: "dominance"
  },
  {
    id: 30,
    text: {
      'en': "Others usually follow my lead",
      'th': "ผู้อื่นมักจะทำตามการนำของฉัน",
      'es-CL': "Los demás suelen seguir mi liderazgo",
      'ro': "Alții de obicei urmează conducerea mea",
      'el': "Οι άλλοι συνήθως ακολουθούν την καθοδήγησή μου",
      'es-CO': "Los demás suelen seguir mi liderazgo"
    },
    trait: "dominance"
  },
  
  // Risk-taking
  {
    id: 31,
    text: {
      'en': "I enjoy taking risks",
      'th': "ฉันชอบการเสี่ยง",
      'es-CL': "Disfruto tomar riesgos",
      'ro': "Îmi place să îmi asum riscuri",
      'el': "Μου αρέσει να παίρνω ρίσκα",
      'es-CO': "Disfruto tomar riesgos"
    },
    trait: "riskTaking"
  },
  {
    id: 32,
    text: {
      'en': "I seek out dangerous situations",
      'th': "ฉันมักแสวงหาสถานการณ์ที่อันตราย",
      'es-CL': "Busco situaciones peligrosas",
      'ro': "Caut situații periculoase",
      'el': "Αναζητώ επικίνδυνες καταστάσεις",
      'es-CO': "Busco situaciones peligrosas"
    },
    trait: "riskTaking"
  },
  {
    id: 33,
    text: {
      'en': "I'm drawn to dangerous activities",
      'th': "ฉันถูกดึงดูดด้วยกิจกรรมที่อันตราย",
      'es-CL': "Me atraen las actividades peligrosas",
      'ro': "Sunt atras de activități periculoase",
      'el': "Με ελκύουν οι επικίνδυνες δραστηριότητες",
      'es-CO': "Me atraen las actividades peligrosas"
    },
    trait: "riskTaking"
  },
  {
    id: 34,
    text: {
      'en': "I like living on the edge",
      'th': "ฉันชอบใช้ชีวิตแบบเสี่ยง",
      'es-CL': "Me gusta vivir al límite",
      'ro': "Îmi place să trăiesc la limită",
      'el': "Μου αρέσει να ζω στα όρια",
      'es-CO': "Me gusta vivir al límite"
    },
    trait: "riskTaking"
  },
  {
    id: 35,
    text: {
      'en': "I'm willing to take chances",
      'th': "ฉันเต็มใจที่จะเสี่ยง",
      'es-CL': "Estoy dispuesto a arriesgarme",
      'ro': "Sunt dispus să îmi asum șanse",
      'el': "Είμαι πρόθυμος να ρισκάρω",
      'es-CO': "Estoy dispuesto a arriesgarme"
    },
    trait: "riskTaking"
  }
];