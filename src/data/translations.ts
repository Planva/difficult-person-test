import { TraitType } from './questions';

export type Language = 'en' | 'th' | 'es-CL' | 'ro' | 'el' | 'es-CO';

export type Translation = {
  ui: {
    title: string;
    subtitle: string;
    startTest: string;
    previous: string;
    next: string;
    viewResults: string;
    takeAgain: string;
    pleaseAnswer: string;
    page: string;
    of: string;
    yourResults: string;
    scientificBasis: string;
    scientificBasisDesc: string;
    comprehensive: string;
    comprehensiveDesc: string;
    educational: string;
    educationalDesc: string;
    aboutResearch: string;
    aboutResearchDesc: string;
    researchContext: string;
    sevenTraits: string;
    share: string;
    tweet: string;
    shared: string;
    copied: string;
    copyError: string;
    imageError: string;
    shareError: string;
    downloaded: string;
    resumeTest: string;
    startNew: string;
    resumePrompt: string;
    progressSaved: string;
    progressCleared: string;
  };
  likert: {
    stronglyDisagree: string;
    disagree: string;
    neutral: string;
    agree: string;
    strongAgree: string;
    stronglyDisagreeDesc: string;
    disagreeDesc: string;
    neutralDesc: string;
    agreeDesc: string;
    strongAgreeDesc: string;
  };
};

export const translations: Record<Language, Translation> = {
  'en': {
    ui: {
      title: 'Difficult Person Test',
      subtitle: 'Discover your personality traits based on scientific research',
      startTest: 'Start Free Test',
      previous: 'Previous',
      next: 'Next',
      viewResults: 'View Results',
      takeAgain: 'Take Test Again',
      pleaseAnswer: 'Please answer all questions to see your results',
      page: 'Page',
      of: 'of',
      yourResults: 'Your Results',
      scientificBasis: 'Scientific Basis',
      scientificBasisDesc: 'Based on peer-reviewed research in personality psychology',
      comprehensive: 'Comprehensive',
      comprehensiveDesc: 'Measures 7 key personality traits with 35 questions',
      educational: 'Educational',
      educationalDesc: 'Learn about your personality with detailed explanations',
      aboutResearch: 'About the Research',
      aboutResearchDesc: 'The Difficult Person Test is based on research by Chelsea Sleep and colleagues, published in 2020 in the journal Personality and Individual Differences (DOI: 10.1016/j.paid.2020.110171)',
      researchContext: 'This test measures these seven traits through scientifically validated questions, providing insights into personality characteristics that can impact interpersonal relationships.',
      sevenTraits: 'The Seven Traits',
      share: 'Share',
      tweet: 'Tweet',
      shared: 'Results shared successfully!',
      copied: 'Results copied to clipboard!',
      copyError: 'Failed to copy results',
      imageError: 'Failed to generate image',
      shareError: 'Failed to share results',
      downloaded: 'Image downloaded successfully!',
      resumeTest: 'Resume Test',
      startNew: 'Start New Test',
      resumePrompt: 'We found your previous test progress. Would you like to resume where you left off or start a new test?',
      progressSaved: 'Progress saved',
      progressCleared: 'Progress cleared'
    },
    likert: {
      stronglyDisagree: 'Strongly Disagree',
      disagree: 'Disagree',
      neutral: 'Neutral',
      agree: 'Agree',
      strongAgree: 'Strongly Agree',
      stronglyDisagreeDesc: 'Completely oppose or reject the statement',
      disagreeDesc: 'Generally oppose or doubt the statement',
      neutralDesc: 'Neither agree nor disagree with the statement',
      agreeDesc: 'Generally support or accept the statement',
      strongAgreeDesc: 'Completely support or endorse the statement'
    }
  },
  'th': {
    ui: {
      title: 'แบบทดสอบบุคลิกภาพที่ยาก',
      subtitle: 'ค้นพบลักษณะบุคลิกภาพของคุณตามการวิจัยทางวิทยาศาสตร์',
      startTest: 'เริ่มทำแบบทดสอบฟรี',
      previous: 'ก่อนหน้า',
      next: 'ถัดไป',
      viewResults: 'ดูผลลัพธ์',
      takeAgain: 'ทำแบบทดสอบอีกครั้ง',
      pleaseAnswer: 'กรุณาตอบคำถามทั้งหมดเพื่อดูผลลัพธ์',
      page: 'หน้า',
      of: 'จาก',
      yourResults: 'ผลลัพธ์ของคุณ',
      scientificBasis: 'พื้นฐานทางวิทยาศาสตร์',
      scientificBasisDesc: 'อ้างอิงจากงานวิจัยที่ผ่านการตรวจสอบในจิตวิทยาบุคลิกภาพ',
      comprehensive: 'ครอบคลุม',
      comprehensiveDesc: 'วัด 7 ลักษณะสำคัญด้วยคำถาม 35 ข้อ',
      educational: 'ให้ความรู้',
      educationalDesc: 'เรียนรู้เกี่ยวกับบุคลิกภาพของคุณพร้อมคำอธิบายละเอียด',
      aboutResearch: 'เกี่ยวกับการวิจัย',
      aboutResearchDesc: 'แบบทดสอบนี้อ้างอิงจากงานวิจัยของ Chelsea Sleep และคณะ ตีพิมพ์ในปี 2020 ในวารสาร Personality and Individual Differences (DOI: 10.1016/j.paid.2020.110171)',
      researchContext: 'แบบทดสอบนี้วัดลักษณะทั้งเจ็ดผ่านคำถามที่ผ่านการตรวจสอบทางวิทยาศาสตร์',
      sevenTraits: 'เจ็ดลักษณะ',
      share: 'แชร์',
      tweet: 'ทวีต',
      shared: 'แชร์ผลลัพ์สำเร็จ!',
      copied: 'คัดลอกผลลัพธ์แล้ว!',
      copyError: 'ไม่สามารถคัดลอกผลลัพธ์ได้',
      imageError: 'ไม่สามารถสร้างรูปภาพได้',
      shareError: 'ไม่สามารถแชร์ผลลัพธ์ได้',
      downloaded: 'ดาวน์โหลดรูปภาพสำเร็จ!',
      resumeTest: 'ทำแบบทดสอบต่อ',
      startNew: 'เริ่มแบบทดสอบใหม่',
      resumePrompt: 'พบความคืบหน้าของแบบทดสอบก่อนหน้า คุณต้องการทำต่อจากจุดที่ค้างไว้หรือเริ่มใหม่?',
      progressSaved: 'บันทึกความคืบหน้าแล้ว',
      progressCleared: 'ล้างความคืบหน้าแล้ว'
    },
    likert: {
      stronglyDisagree: 'ไม่เห็นด้วยอย่างยิ่ง',
      disagree: 'ไม่เห็นด้วย',
      neutral: 'เป็นกลาง',
      agree: 'เห็นด้วย',
      strongAgree: 'เห็นด้วยอย่างยิ่ง',
      stronglyDisagreeDesc: 'คัดค้านหรือปฏิเสธข้อความอย่างสิ้นเชิง',
      disagreeDesc: 'โดยทั่วไปคัดค้านหรือสงสัยในข้อความ',
      neutralDesc: 'ไม่เห็นด้วยหรือไม่เห็นด้วยกับข้อความ',
      agreeDesc: 'โดยทั่วไปสนับสนุนหรือยอมรับข้อความ',
      strongAgreeDesc: 'สนับสนุนหรือรับรองข้อความอย่างเต็มที่'
    }
  },
  'es-CL': {
    ui: {
      title: 'Test de Personalidad Difícil',
      subtitle: 'Descubre tus rasgos de personalidad basados en investigación científica',
      startTest: 'Comenzar Test Gratis',
      previous: 'Anterior',
      next: 'Siguiente',
      viewResults: 'Ver Resultados',
      takeAgain: 'Realizar Test Nuevamente',
      pleaseAnswer: 'Por favor responde todas las preguntas para ver tus resultados',
      page: 'Página',
      of: 'de',
      yourResults: 'Tus Resultados',
      scientificBasis: 'Base Científica',
      scientificBasisDesc: 'Basado en investigación revisada por pares en psicología de la personalidad',
      comprehensive: 'Completo',
      comprehensiveDesc: 'Mide 7 rasgos clave con 35 preguntas',
      educational: 'Educativo',
      educationalDesc: 'Aprende sobre tu personalidad con explicaciones detalladas',
      aboutResearch: 'Sobre la Investigación',
      aboutResearchDesc: 'El Test de Personalidad Difícil está basado en la investigación de Chelsea Sleep y colegas, publicada en 2020 en la revista Personality and Individual Differences (DOI: 10.1016/j.paid.2020.110171)',
      researchContext: 'Este test mide siete rasgos a través de preguntas científicamente validadas',
      sevenTraits: 'Los Siete Rasgos',
      share: 'Compartir',
      tweet: 'Tuitear',
      shared: '¡Resultados compartidos exitosamente!',
      copied: '¡Resultados copiados al portapapeles!',
      copyError: 'Error al copiar resultados',
      imageError: 'Error al generar imagen',
      shareError: 'Error al compartir resultados',
      downloaded: '¡Imagen descargada exitosamente!',
      resumeTest: 'Continuar Test',
      startNew: 'Comenzar Nuevo Test',
      resumePrompt: 'Encontramos tu progreso anterior. ¿Deseas continuar donde lo dejaste o comenzar un nuevo test?',
      progressSaved: 'Progreso guardado',
      progressCleared: 'Progreso borrado'
    },
    likert: {
      stronglyDisagree: 'Muy en Desacuerdo',
      disagree: 'En Desacuerdo',
      neutral: 'Neutral',
      agree: 'De Acuerdo',
      strongAgree: 'Muy de Acuerdo',
      stronglyDisagreeDesc: 'Rechaza completamente la afirmación',
      disagreeDesc: 'Generalmente en contra de la afirmación',
      neutralDesc: 'Ni de acuerdo ni en desacuerdo con la afirmación',
      agreeDesc: 'Generalmente a favor de la afirmación',
      strongAgreeDesc: 'Apoya completamente la afirmación'
    }
  },
  'ro': {
    ui: {
      title: 'Test de Personalitate Dificilă',
      subtitle: 'Descoperă-ți trăsăturile de personalitate bazate pe cercetare științifică',
      startTest: 'Începe Testul Gratuit',
      previous: 'Anterior',
      next: 'Următorul',
      viewResults: 'Vezi Rezultatele',
      takeAgain: 'Repetă Testul',
      pleaseAnswer: 'Te rugăm să răspunzi la toate întrebările pentru a vedea rezultatele',
      page: 'Pagina',
      of: 'din',
      yourResults: 'Rezultatele Tale',
      scientificBasis: 'Bază Științifică',
      scientificBasisDesc: 'Bazat pe cercetare evaluată de experți în psihologia personalității',
      comprehensive: 'Comprehensiv',
      comprehensiveDesc:  'Măsoară 7 trăsături cheie cu 35 de întrebări',
      educational: 'Educativ',
      educationalDesc: 'Învață despre personalitatea ta cu explicații detaliate',
      aboutResearch: 'Despre Cercetare',
      aboutResearchDesc: 'Testul de Personalitate Dificilă se bazează pe cercetarea lui Chelsea Sleep și colegii, publicată în 2020 în revista Personality and Individual Differences (DOI: 10.1016/j.paid.2020.110171)',
      researchContext: 'Acest test măsoară șapte trăsături prin întrebări validate științific',
      sevenTraits: 'Cele Șapte Trăsături',
      share: 'Distribuie',
      tweet: 'Tweet',
      shared: 'Rezultate distribuite cu succes!',
      copied: 'Rezultate copiate în clipboard!',
      copyError: 'Eroare la copierea rezultatelor',
      imageError: 'Eroare la generarea imaginii',
      shareError: 'Eroare la distribuirea rezultatelor',
      downloaded: 'Imagine descărcată cu succes!',
      resumeTest: 'Continuă Testul',
      startNew: 'Începe Test Nou',
      resumePrompt: 'Am găsit progresul tău anterior. Dorești să continui de unde ai rămas sau să începi un test nou?',
      progressSaved: 'Progres salvat',
      progressCleared: 'Progres șters'
    },
    likert: {
      stronglyDisagree: 'Dezacord Total',
      disagree: 'Dezacord',
      neutral: 'Neutru',
      agree: 'De Acord',
      strongAgree: 'Total de Acord',
      stronglyDisagreeDesc: 'Respinge complet afirmația',
      disagreeDesc: 'În general împotriva afirmației',
      neutralDesc: 'Nici de acord, nici împotrivă',
      agreeDesc: 'În general în favoarea afirmației',
      strongAgreeDesc: 'Susține complet afirmația'
    }
  },
  'el': {
    ui: {
      title: 'Τεστ Δύσκολης Προσωπικότητας',
      subtitle: 'Ανακαλύψτε τα χαρακτηριστικά της προσωπικότητάς σας με βάση την επιστημονική έρευνα',
      startTest: 'Ξεκινήστε το Δωρεάν Τεστ',
      previous: 'Προηγούμενο',
      next: 'Επόμενο',
      viewResults: 'Δείτε τα Αποτελέσματα',
      takeAgain: 'Κάντε το Τεστ Ξανά',
      pleaseAnswer: 'Παρακαλώ απαντήστε σε όλες τις ερωτήσεις για να δείτε τα αποτελέσματα',
      page: 'Σελίδα',
      of: 'από',
      yourResults: 'Τα Αποτελέσματά σας',
      scientificBasis: 'Επιστημονική Βάση',
      scientificBasisDesc: 'Βασισμένο σε αξιολογημένη έρευνα στην ψυχολογία προσωπικότητας',
      comprehensive: 'Περιεκτικό',
      comprehensiveDesc: 'Μετρά 7 βασικά χαρακτηριστικά με 35 ερωτήσεις',
      educational: 'Εκπαιδευτικό',
      educationalDesc: 'Μάθετε για την προσωπικότητά σας με λεπτομερείς εξηγήσεις',
      aboutResearch: 'Σχετικά με την Έρευνα',
      aboutResearchDesc: 'Το Τεστ Δύσκολης Προσωπικότητας βασίζεται στην έρευνα της Chelsea Sleep και των συνεργατών της, που δημοσιεύτηκε το 2020 στο περιοδικό Personality and Individual Differences (DOI: 10.1016/j.paid.2020.110171)',
      researchContext: 'Αυτό το τεστ μετρά επτά χαρακτηριστικά μέσω επιστημονικά επικυρωμένων ερωτήσεων',
      sevenTraits: 'Τα Επτά Χαρακτηριστικά',
      share: 'Κοινοποίηση',
      tweet: 'Tweet',
      shared: 'Τα αποτελέσματα κοινοποιήθηκαν με επιτυχία!',
      copied: 'Τα αποτελέσματα αντιγράφηκαν στο πρόχειρο!',
      copyError: 'Αποτυχία αντιγραφής αποτελεσμάτων',
      imageError: 'Αποτυχία δημιουργίας εικόνας',
      shareError: 'Αποτυχία κοινοποίησης αποτελεσμάτων',
      downloaded: 'Η εικόνα κατέβηκε με επιτυχία!',
      resumeTest: 'Συνέχιση Τεστ',
      startNew: 'Έναρξη Νέου Τεστ',
      resumePrompt: 'Βρήκαμε την προηγούμενη πρόοδό σας. Θέλετε να συνεχίσετε από εκεί που σταματήσατε ή να ξεκινήσετε ένα νέο τεστ;',
      progressSaved: 'Η πρόοδος αποθηκεύτηκε',
      progressCleared: 'Η πρόοδος διαγράφηκε'
    },
    likert: {
      stronglyDisagree: 'Διαφωνώ Απόλυτα',
      disagree: 'Διαφωνώ',
      neutral: 'Ουδέτερος',
      agree: 'Συμφωνώ',
      strongAgree: 'Συμφωνώ Απόλυτα',
      stronglyDisagreeDesc: 'Απορρίπτω εντελώς τη δήλωση',
      disagreeDesc: 'Γενικά διαφωνώ με τη δήλωση',
      neutralDesc: 'Ούτε συμφωνώ ούτε διαφωνώ με τη δήλωση',
      agreeDesc: 'Γενικά συμφωνώ με τη δήλωση',
      strongAgreeDesc: 'Υποστηρίζω πλήρως τη δήλωση'
    }
  },
  'es-CO': {
    ui: {
      title: 'Test de Personalidad Difícil',
      subtitle: 'Descubre tus rasgos de personalidad basados en investigación científica',
      startTest: 'Iniciar Test Gratis',
      previous: 'Anterior',
      next: 'Siguiente',
      viewResults: 'Ver Resultados',
      takeAgain: 'Tomar Test Nuevamente',
      pleaseAnswer: 'Por favor responde todas las preguntas para ver tus resultados',
      page: 'Página',
      of: 'de',
      yourResults: 'Tus Resultados',
      scientificBasis: 'Base Científica',
      scientificBasisDesc: 'Basado en investigación revisada por pares en psicología de la personalidad',
      comprehensive: 'Completo',
      comprehensiveDesc: 'Mide 7 rasgos clave con 35 preguntas',
      educational: 'Educativo',
      educationalDesc: 'Aprende sobre tu personalidad con explicaciones detalladas',
      aboutResearch: 'Sobre la Investigación',
      aboutResearchDesc: 'El Test de Personalidad Difícil está basado en la investigación de Chelsea Sleep y colegas, publicada en 2020 en la revista Personality and Individual Differences (DOI: 10.1016/j.paid.2020.110171)',
      researchContext: 'Este test mide siete rasgos a través de preguntas científicamente validadas',
      sevenTraits: 'Los Siete Rasgos',
      share: 'Compartir',
      tweet: 'Tweet',
      shared: '¡Resultados compartidos exitosamente!',
      copied: '¡Resultados copiados al portapapeles!',
      copyError: 'Error al copiar resultados',
      imageError: 'Error al generar imagen',
      shareError: 'Error al compartir resultados',
      downloaded: '¡Imagen descargada exitosamente!',
      resumeTest: 'Continuar Test',
      startNew: 'Iniciar Nuevo Test',
      resumePrompt: 'Encontramos tu progreso anterior. ¿Deseas continuar donde lo dejaste o iniciar un nuevo test?',
      progressSaved: 'Progreso guardado',
      progressCleared: 'Progreso borrado'
    },
    likert: {
      stronglyDisagree: 'Totalmente en Desacuerdo',
      disagree: 'En Desacuerdo',
      neutral: 'Neutral',
      agree: 'De Acuerdo',
      strongAgree: 'Totalmente de Acuerdo',
      stronglyDisagreeDesc: 'Rechaza completamente la afirmación',
      disagreeDesc: 'Generalmente en contra de la afirmación',
      neutralDesc: 'Ni de acuerdo ni en desacuerdo con la afirmación',
      agreeDesc: 'Generalmente a favor de la afirmación',
      strongAgreeDesc: 'Apoya completamente la afirmación'
    }
  }
};