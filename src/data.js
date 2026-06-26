// ============================================================
// DATI MAXFRA — Piano Personalizzato
// ============================================================

export const PROFILES = {
  max: {
    id: 'max',
    name: 'Massimo',
    emoji: '👨',
    color: '#4f8ef7',
    colorLight: '#1a3a6e',
    label: 'Max',
    age: null,
    alerts: [
      '⚠️ Carotide occlusa 100% — priorità cardiovascolare assoluta',
      '💊 Statine + Cardioaspirina — evitare pompelmo, seguire orari',
      '🦋 Tiroide mancante — levotiroxina 30-60 min prima di colazione, lontano da caffè/calcio/ferro',
      '🫀 Placche aterosclerotiche — omega-3 EPA/DHA fondamentali ogni giorno',
    ]
  },
  fra: {
    id: 'fra',
    name: 'Franca',
    emoji: '👩',
    color: '#c084fc',
    colorLight: '#3b1a5e',
    label: 'Fra',
    age: null,
    alerts: [
      '🧬 Predisposizione glicemica alta — ordine assunzione cibo obbligatorio',
      '🦴 Osteopenia — D3+K2 ogni giorno, attività fisica con pesi',
      '💧 Calcoli renali — 2L acqua oligominerale al giorno, evitare ossalati',
      '🎗️ Senza colecisti — grassi buoni ma distribuiti (non tutti in un pasto)',
      '🧫 Microbiota in disbiosi — probiotici, fibre, amido resistente',
      '⚠️ Sensibilità lattosio e sale — ridurre entrambi',
    ]
  }
};

// ============================================================
// MENÙ SETTIMANALE CONDIVISO
// ============================================================
export const MENU_SETTIMANALE = [
  {
    giorno: 'Lunedì',
    short: 'LUN',
    colazione: {
      base: 'Yogurt greco intero con mirtilli, semi di chia e noci',
      note_fra: 'Yogurt senza lattosio o kefir; porzione piccola di noci',
      note_max: 'Aggiungere 1 cucchiaio di semi di lino macinati (omega-3). Caffè DOPO 60 min da levotiroxina',
      semaforo: '🟢',
    },
    pranzo: {
      base: 'Salmone al vapore con broccoli saltati in olio EVO, patate dolci raffreddate',
      note_fra: 'Porzione grassi moderata. Iniziare con broccoli, poi pesce, poi patate',
      note_max: 'Porzione abbondante salmone (omega-3). Aggiungere aglio crudo sui broccoli',
      semaforo: '🟢',
    },
    cena: {
      base: 'Uova strapazzate con asparagi e curcuma + pepe nero',
      note_fra: 'Massimo 2 uova, aggiungere spinaci. Cena entro le 20:00',
      note_max: 'Ok 3 uova intere. Aggiungere pomodori cotti (licopene per prostata/cuore)',
      semaforo: '🟢',
    },
    spuntino: 'Mela verde + mandorle (10 pz)',
    tag: ['omega3', 'antinfiammatorio', 'glucosio'],
  },
  {
    giorno: 'Martedì',
    short: 'MAR',
    colazione: {
      base: 'Avena con banana non matura, mirtilli, semi di lino e cannella',
      note_fra: 'Avena è amido resistente — perfetta per microbiota. Cannella aiuta glicemia',
      note_max: 'Aggiungere proteine: 1 uovo sodo o 1 cucchiaio di proteine del riso',
      semaforo: '🟢',
    },
    pranzo: {
      base: 'Insalata di lenticchie con avocado, ravanelli, cipolla rossa, olio EVO e limone',
      note_fra: 'Iniziare con ravanelli/cipolla, poi lenticchie + avocado. Ottimo per microbiota',
      note_max: 'Aggiungere 50g di tacchino al forno (non in scatola). Porzione avocado generosa',
      semaforo: '🟢',
    },
    cena: {
      base: 'Merluzzo al vapore con finocchio e carote al forno con olio EVO e rosmarino',
      note_fra: 'Ottimo per calcoli renali (pesce bianco, basso ossalato)',
      note_max: 'Aggiungere 1 cucchiaino curcuma sulle carote. Porzione abbondante pesce',
      semaforo: '🟢',
    },
    spuntino: 'Avocado con limone e semi di chia',
    tag: ['legumi', 'fibra', 'microbiota'],
  },
  {
    giorno: 'Mercoledì',
    short: 'MER',
    colazione: {
      base: 'Uova strapazzate con spinaci, aglio e olio EVO',
      note_fra: 'Spinaci ricchi di vitamina K (per osteopenia) e folato (B9 carente)',
      note_max: 'Caffè solo dopo 60 min da levotiroxina. 2-3 uova ok',
      semaforo: '🟢',
    },
    pranzo: {
      base: 'Pollo arrosto con cavolfiore al forno, riso basmati raffreddato e curcuma',
      base_detail: 'Il riso va cucinato il giorno prima e raffreddato (amido resistente!)',
      note_fra: 'Iniziare con cavolfiore, poi pollo, poi riso. Porzione riso 60g crudo max',
      note_max: 'Crucifere (cavolfiore) aiutano a ridurre colesterolo LDL. Porzione riso normale',
      semaforo: '🟡',
    },
    cena: {
      base: 'Zuppa di fagioli neri con zenzero, rosmarino e olio EVO a crudo',
      note_fra: 'Fagioli neri = amido resistente top. Evitare sale, usare erbe aromatiche',
      note_max: 'I fagioli abbassano colesterolo (fibra solubile). Aggiungere 1 cucchiaio olio EVO a crudo',
      semaforo: '🟢',
    },
    spuntino: 'Tè verde + 10 anacardi',
    tag: ['anticancro', 'amido-resistente', 'colesterolo'],
  },
  {
    giorno: 'Giovedì',
    short: 'GIO',
    colazione: {
      base: 'Yogurt greco + semi di zucca + mirtilli + 1 cucchiaino miele grezzo',
      note_fra: 'Yogurt senza lattosio. Semi di zucca ricchi di zinco (carenza genetica Franca)',
      note_max: 'Aggiungere semi di lino o chia per omega-3. Caffè lontano da farmaci',
      semaforo: '🟢',
    },
    pranzo: {
      base: 'Sardine in olio EVO (non in scatola!) con insalata mista, limone e topinambur',
      base_detail: 'Sardine fresche o surgelate — MAI in scatola (istamina per Fra)',
      note_fra: '⚠️ Solo sardine FRESCHE/surgelate. Topinambur ottimo per glicemia. Attenzione sale',
      note_max: 'Sardine = omega-3 top per carotide. Porzione generosa. Aglio sull\'insalata',
      semaforo: '🟡',
    },
    cena: {
      base: 'Tacchino saltato con broccoli, zucchine e olio EVO, prezzemolo fresco',
      note_fra: 'Prezzemolo ricco vitamina K (osteopenia). Broccoli per microbiota',
      note_max: 'Cena leggera ma proteica. Aggiungere semi di lino sul piatto a fine cottura',
      semaforo: '🟢',
    },
    spuntino: 'Sedano + hummus di ceci (fatto in casa, poco sale)',
    tag: ['omega3', 'zinco', 'vitamina-k'],
  },
  {
    giorno: 'Venerdì',
    short: 'VEN',
    colazione: {
      base: 'Avena con mela grattuggiata, cannella, noci e semi di chia',
      note_fra: 'Cannella = abbassa glicemia. Mela (senza buccia se gonfiore)',
      note_max: 'Aggiungere proteina: yogurt greco 2 cucchiai sopra l\'avena',
      semaforo: '🟢',
    },
    pranzo: {
      base: 'Sgombro al forno con patate dolci e asparagi all\'olio EVO',
      note_fra: 'Asparagi = vitamina K + acido folico (entrambi carenti geneticamente). Patate dolci raffreddate prima',
      note_max: 'Sgombro = omega-3 eccellente per carotide. Porzione abbondante',
      semaforo: '🟢',
    },
    cena: {
      base: 'Frittata di uova con cipolla, zucchine e erbe aromatiche (no formaggio)',
      note_fra: 'Max 2 uova. Aggiungere spinaci o rucola a lato',
      note_max: '3-4 uova. Il colesterolo delle uova non alza il colesterolo sierico in chi mangia sano',
      semaforo: '🟢',
    },
    spuntino: 'Kiwi + 1 manciata di noci',
    tag: ['omega3', 'vitamina-k', 'folato'],
  },
  {
    giorno: 'Sabato',
    short: 'SAB',
    colazione: {
      base: 'Pasto libero CONSAPEVOLE — es. uova con pane integrale ai semi',
      note_fra: 'Evitare cornetti/dolci. Ok uova + pane integrale. No salumi/formaggio fresco',
      note_max: 'Evitare brioche/dolci. Ok uova o yogurt greco. Caffè lontano da farmaci',
      semaforo: '🟡',
    },
    pranzo: {
      base: 'Trota o orate al forno con verdure miste di stagione e olio EVO',
      note_fra: 'Pesce bianco ottimo per calcoli renali. Erbe aromatiche al posto del sale',
      note_max: 'Ottimo. Aggiungere semi di lino a fine cottura sulle verdure',
      semaforo: '🟢',
    },
    cena: {
      base: 'Zuppa di verdure con lenticchie rosse, curcuma, zenzero e olio EVO a crudo',
      note_fra: 'No pomodori (istamina). Usare zucchine, carote, sedano, cipolla',
      note_max: 'Aggiungere 1 cucchiaio di olio EVO extra a crudo. Ottimo per cuore',
      semaforo: '🟢',
    },
    spuntino: 'Frutti di bosco misti',
    tag: ['libero', 'antinfiammatorio', 'pesce-bianco'],
  },
  {
    giorno: 'Domenica',
    short: 'DOM',
    colazione: {
      base: 'Pancakes di avena e banana (senza farina bianca) con mirtilli',
      recipe: '2 uova + 1 banana matura + 4 cucchiai avena — mixare e cuocere senza burro',
      note_fra: 'Ottimo: amido resistente + proteine. No sciroppo di zucchero',
      note_max: 'Aggiungere 1 cucchiaio semi di lino nell\'impasto',
      semaforo: '🟢',
    },
    pranzo: {
      base: 'Agnello magro al forno (porzione piccola) con verdure arrosto e legumi',
      note_fra: 'Agnello = fonte di zinco (carenza genetica). Porzione piccola, grassi moderati (no colecisti)',
      note_max: 'Ok, attenzione a non eccedere con grassi saturi. Abbondante verdura',
      semaforo: '🟡',
    },
    cena: {
      base: 'Insalata grande: rucola, avocado, semi di zucca, cipolla rossa, olio EVO e aceto di mele',
      note_fra: '⚠️ Aceto di mele ok (non aceto di vino). Aggiungere uova sode',
      note_max: 'Aggiungere tonno fresco o sardine fresche. Semi di zucca per zinco e magnesio',
      semaforo: '🟢',
    },
    spuntino: 'Aceto di mele con madre in acqua tiepida (prima dei pasti)',
    tag: ['zinco', 'riposo', 'detox'],
  },
];

// ============================================================
// CIBI SEMAFORO
// ============================================================
export const CIBI = {
  condivisi_si: [
    { nome: 'Olio EVO', motivo: 'Antinfiammatorio, omega-9, base di ogni pasto', icona: '🫒' },
    { nome: 'Pesce azzurro fresco', motivo: 'Omega-3 EPA/DHA per cuore e infiammazione', icona: '🐟' },
    { nome: 'Salmone', motivo: 'Omega-3, vitamina D, proteine complete', icona: '🐠' },
    { nome: 'Uova intere', motivo: 'Proteine complete, colina, vitamina D e K', icona: '🥚' },
    { nome: 'Broccoli e crucifere', motivo: 'DIM per ormoni, fibra, vitamina K', icona: '🥦' },
    { nome: 'Avocado', motivo: 'Grassi buoni, potassio, fibra per microbiota', icona: '🥑' },
    { nome: 'Mirtilli', motivo: 'Antiossidanti, antinfiammatorio, per cervello', icona: '🫐' },
    { nome: 'Curcuma + pepe nero', motivo: 'Potente antinfiammatorio (biodisponibile con pepe)', icona: '🌿' },
    { nome: 'Noci e mandorle', motivo: 'Omega-3, magnesio, vitamina E', icona: '🥜' },
    { nome: 'Semi di chia e lino', motivo: 'Omega-3, fibra, calcio, per microbiota', icona: '🌱' },
    { nome: 'Aglio e cipolla', motivo: 'Prebiotici, antibatterici, per microbiota e cuore', icona: '🧄' },
    { nome: 'Asparagi', motivo: 'Vitamina K, folato, prebiotico', icona: '🌿' },
    { nome: 'Patate dolci raffreddate', motivo: 'Amido resistente, potassio, basso IG', icona: '🍠' },
    { nome: 'Lenticchie e legumi', motivo: 'Fibra solubile, proteine, amido resistente', icona: '🫘' },
    { nome: 'Tè verde', motivo: 'Antiossidante, metabolismo, microbiota', icona: '🍵' },
    { nome: 'Zenzero', motivo: 'Antinfiammatorio, digestivo, microbiota', icona: '🫚' },
    { nome: 'Avena', motivo: 'Beta-glucani per colesterolo, amido resistente', icona: '🌾' },
    { nome: 'Aceto di mele con madre', motivo: 'Glicemia, digestione, microbiota', icona: '🍎' },
    { nome: 'Topinambur', motivo: 'Prebiotico top, glicemia, microbiota', icona: '🥔' },
    { nome: 'Semi di zucca', motivo: 'Zinco, magnesio, omega-3 vegetali', icona: '🎃' },
  ],
  fra_attenzione: [
    { nome: 'Formaggi freschi', motivo: 'Lattosio — preferire stagionati duri o senza lattosio', icona: '🧀', level: 'attenzione' },
    { nome: 'Sale', motivo: 'Sensibilità genetica — usare erbe aromatiche', icona: '🧂', level: 'attenzione' },
    { nome: 'Sardine/pesce in scatola', motivo: 'Alta istamina — solo fresco o surgelato', icona: '🐟', level: 'stop' },
    { nome: 'Spinaci in abbondanza', motivo: 'Ossalati — aumentano rischio calcoli renali', icona: '🥬', level: 'attenzione' },
    { nome: 'Aceto di vino', motivo: 'Istamina alta — ok solo aceto di mele', icona: '🍷', level: 'stop' },
    { nome: 'Pomodori', motivo: 'Istamina — limitare, no in scatola', icona: '🍅', level: 'attenzione' },
    { nome: 'Formaggi stagionati', motivo: 'Istamina alta — limitare molto', icona: '🧀', level: 'stop' },
    { nome: 'Grassi in eccesso in un pasto', motivo: 'Senza colecisti — distribuire i grassi tra i pasti', icona: '🫙', level: 'attenzione' },
    { nome: 'Bevande gassate', motivo: 'Fosforo (iperfosfatemia) + calcoli renali', icona: '🥤', level: 'stop' },
    { nome: 'Alcolici', motivo: 'Istamina + glicemia + microbiota', icona: '🍷', level: 'stop' },
  ],
  max_attenzione: [
    { nome: 'Pompelmo', motivo: 'Inibisce CYP3A4 — interazione con statine (rischio tossicità)', icona: '🍊', level: 'stop' },
    { nome: 'Caffè mattina presto', motivo: 'Assumerlo solo 60 min dopo la levotiroxina', icona: '☕', level: 'attenzione' },
    { nome: 'Latte/calcio a colazione', motivo: 'Riduce assorbimento levotiroxina — lontano dal farmaco', icona: '🥛', level: 'attenzione' },
    { nome: 'Soia in eccesso', motivo: 'Interferisce con ormone tiroideo', icona: '🫘', level: 'attenzione' },
    { nome: 'Carni rosse grasse', motivo: 'Grassi saturi — aggravano placche aterosclerotiche', icona: '🥩', level: 'stop' },
    { nome: 'Salumi e insaccati', motivo: 'Sale + grassi saturi + nitrati — no per cuore', icona: '🍖', level: 'stop' },
    { nome: 'Formaggi grassi', motivo: 'Grassi saturi — aggravano colesterolo LDL', icona: '🧀', level: 'stop' },
    { nome: 'Fritti', motivo: 'Grassi trans — infiammazione e aterosclerosi', icona: '🍟', level: 'stop' },
    { nome: 'Alcol frequente', motivo: 'Interagisce con statine, aumenta trigliceridi', icona: '🍷', level: 'stop' },
    { nome: 'Sale in eccesso', motivo: 'Ipertensione e rischio cardiovascolare', icona: '🧂', level: 'stop' },
  ],
  entrambi_stop: [
    { nome: 'Olio di girasole e margarina', motivo: 'Omega-6 infiammatori, grassi trans', icona: '🫙' },
    { nome: 'Prodotti da forno industriali', motivo: 'Grassi trans, zuccheri, fosfati additivi', icona: '🍞' },
    { nome: 'Bibite zuccherate', motivo: 'Glicemia, fosforo, microbiota', icona: '🥤' },
    { nome: 'Zucchero bianco', motivo: 'Glicemia, infiammazione, microbiota', icona: '🍬' },
    { nome: 'Carni processate', motivo: 'Nitrati, sale, grassi saturi, istamina', icona: '🌭' },
    { nome: 'Riso bianco non raffreddato', motivo: 'Alto indice glicemico — preferire raffreddato', icona: '🍚' },
  ],
};

// ============================================================
// INTEGRATORI
// ============================================================
export const INTEGRATORI = {
  fra: [
    { nome: 'D3 + K2 mk7', quando: 'Mattina con il pasto', perche: 'Vitamina D carente (genetico), K per osteopenia', priorita: 'alta', brand: 'SEQUOIA Longevity' },
    { nome: 'Magnesio glicinato', quando: 'Sera prima di dormire', perche: 'Carenza genetica assorbimento magnesio, migliora anche sonno', priorita: 'alta', brand: 'qualsiasi magnesio bisglicinato' },
    { nome: 'Zinco bisglicinato', quando: 'Pranzo lontano da calcio', perche: 'Carenza genetica doppia di zinco (SLC30A8 + PPCDC)', priorita: 'alta', brand: 'ZincoDyn Metagenics' },
    { nome: 'Acido Folico (B9)', quando: 'Mattina', perche: 'Carenza genetica MTHFR doppia — usare forma attiva (metilfolato)', priorita: 'alta', brand: 'B SEQUOIA o metilfolato' },
    { nome: 'Vitamina B12 (metilcobalamina)', quando: 'Mattina', perche: 'Riduzione livelli B12 genetica', priorita: 'media', brand: 'forma sublinguale' },
    { nome: 'Omega-3 EPA/DHA', quando: 'Con il pasto principale', perche: 'Colesterolo, infiammazione, microbiota', priorita: 'alta', brand: 'Omega Sand SEQUOIA o simile' },
    { nome: 'Probiotico (VSL#3)', quando: 'Colazione e cena', perche: 'Microbiota in disbiosi — dopo ciclo Fortif Plus 15 giorni', priorita: 'alta', brand: 'VSL#3 Ferring' },
    { nome: 'Fortif Plus', quando: 'Prima colazione', perche: 'Primo ciclo probiotico (15 giorni) poi passare a VSL#3', priorita: 'alta', brand: 'Erbenobili' },
    { nome: 'Berberina', quando: 'Con i pasti', perche: 'Microbiota + glicemia + colesterolo (confermato dal report microbiota)', priorita: 'alta', brand: 'Berberina Yamamoto 1 caps/die 2 mesi' },
    { nome: 'Selenio', quando: 'Mattina', perche: 'Carenza genetica + supporto tiroide (gene TSHR multiplo)', priorita: 'media', brand: 'Selenio organico' },
    { nome: 'Vitamina C', quando: 'Mattina e sera', perche: 'Riduzione trasporto VitC genetica. MAX 500mg/die (microbiota)', priorita: 'media', brand: '250mg x 2 volte' },
    { nome: 'Vitamina K2 alimentare', quando: 'Con i pasti', perche: 'Carenza genetica VKORC1 — attenzione se mai prescritta warfarin', priorita: 'media', brand: 'da alimenti: prezzemolo, spinaci, broccoli' },
  ],
  max: [
    { nome: 'Omega-3 EPA/DHA ad alto dosaggio', quando: 'Con il pasto principale', perche: '⭐ PRIORITÀ ASSOLUTA per carotide occlusa e placche', priorita: 'critica', brand: 'almeno 2g EPA+DHA/die' },
    { nome: 'CoQ10 (ubichinolo)', quando: 'Mattina con il pasto', perche: 'Le STATINE depleta CoQ10 — fondamentale per energia e cuore', priorita: 'alta', brand: 'forma ubichinolo, 100-200mg' },
    { nome: 'Magnesio glicinato', quando: 'Sera', perche: 'Le statine possono ridurre magnesio. Riduce dolori muscolari da statine', priorita: 'alta', brand: 'magnesio bisglicinato' },
    { nome: 'Vitamina D3', quando: 'Mattina con il pasto', perche: 'Le statine abbassano D3. Essenziale per cuore e muscoli', priorita: 'alta', brand: 'almeno 2000 UI/die' },
    { nome: 'Berberina', quando: 'Con i pasti', perche: 'Abbassa LDL, trigliceridi, glicemia — complementare alle statine', priorita: 'alta', brand: 'valutare con cardiologo' },
    { nome: 'Nattokinase o serrapeptasi', quando: 'Lontano dai pasti', perche: 'Supporto alla fluidità del sangue — VALUTARE CON MEDICO (interazione cardioaspirina)', priorita: 'media', brand: 'solo con ok medico' },
    { nome: 'Vitamina K2 MK7', quando: 'Con pasto principale', perche: 'Porta calcio alle ossa invece che alle arterie (calcificazione placche)', priorita: 'alta', brand: 'MK7 forma — non MK4' },
    { nome: 'Selenio', quando: 'Mattina', perche: 'Supporto tiroide (tiroide mancante richiede più selenio)', priorita: 'media', brand: 'selenio organico' },
    { nome: 'Vitamina B12', quando: 'Mattina', perche: 'Le statine interferiscono con assorbimento B12', priorita: 'media', brand: 'forma metilcobalamina' },
  ],
};

// ============================================================
// STILE DI VITA
// ============================================================
export const STILE_VITA = {
  mattina: [
    { ora: '06:30–07:00', azione: 'Esposizione luce naturale (10-15 min)', chi: 'entrambi', dettaglio: 'Uscire o aprire finestre — reset ritmo circadiano, vitamina D, serotonina', icona: '☀️' },
    { ora: '07:00', azione: 'Massimo: levotiroxina a stomaco vuoto', chi: 'max', dettaglio: 'Aspettare 60 min prima di caffè, latte, calcio, ferro', icona: '💊' },
    { ora: '07:30', azione: 'Acqua con limone o aceto di mele', chi: 'entrambi', dettaglio: 'Franca: aiuta glicemia e digestione (senza colecisti). Max: attiva metabolismo', icona: '💧' },
    { ora: '08:00–08:30', azione: 'Colazione (entrambi)', chi: 'entrambi', dettaglio: 'Max: caffè solo ora (60 min dopo farmaco). Fra: iniziare con fibra/proteina, poi carboidrati', icona: '🍳' },
    { ora: '09:00–10:00', azione: 'Camminata o attività leggera', chi: 'entrambi', dettaglio: 'Minimo 20-30 min. Zona 2 (passo veloce, riesci a parlare). Fondamentale per glicemia e pancia viscerale', icona: '🚶' },
  ],
  giorno: [
    { ora: '12:30–13:30', azione: 'Pranzo', chi: 'entrambi', dettaglio: 'Ordine: verdure → proteine → carboidrati. Mangiare lentamente', icona: '🍽️' },
    { ora: '14:00–15:00', azione: 'Riposo breve (max 20 min) o camminata', chi: 'entrambi', dettaglio: 'Pausa post pranzo aiuta glicemia. NO sonnellino lungo (rovina sonno notturno)', icona: '😴' },
    { ora: '16:30–17:30', azione: 'Allenamento (se non mattina)', chi: 'entrambi', dettaglio: 'Max: zona 2 + pesi leggeri. Fra: pesi moderati per osteopenia + zona 2', icona: '💪' },
    { ora: '17:00', azione: 'Spuntino (se necessario)', chi: 'entrambi', dettaglio: 'Solo se fame vera. Frutta + frutta secca o yogurt. Evitare dolci', icona: '🍎' },
  ],
  sera: [
    { ora: '19:00–19:30', azione: 'Cena (entro le 20:00)', chi: 'entrambi', dettaglio: 'Terminare di mangiare entro le 20:00 — rispetto ritmo circadiano e qualità sonno', icona: '🌙' },
    { ora: '20:00–21:00', azione: 'No luci blu — occhiali o modalità notte', chi: 'entrambi', dettaglio: 'Schermi con filtro arancione o occhiali blocca-luce-blu. Preparare il cervello al sonno', icona: '🕶️' },
    { ora: '21:00', azione: 'Magnesio serale', chi: 'entrambi', dettaglio: 'Glicinato o bisglicinato. Aiuta rilassamento muscolare e qualità sonno', icona: '💊' },
    { ora: '21:30', azione: 'Respirazione rilassante (5 min)', chi: 'entrambi', dettaglio: '5 sec inspira — 5 sec espira. Abbassa cortisolo serale, attiva parasimpatico', icona: '🌬️' },
    { ora: '22:00–22:30', azione: 'Temperatura camera: 17-19°C', chi: 'entrambi', dettaglio: 'Camera fresca = sonno profondo. Fra: utile anche per vampate se in perimenopausa', icona: '🌡️' },
    { ora: '22:30–23:00', azione: 'Orario ideale di addormentamento', chi: 'entrambi', dettaglio: 'Prima fascia di sonno (23-02) è la più rigenerante', icona: '😴' },
  ],
  allenamento: {
    max: [
      '🚶 Camminata veloce 30-45 min ogni giorno (zona 2 — non affannoso)',
      '🏋️ Pesi leggeri 2x settimana (preserva massa muscolare, abbassa grasso viscerale)',
      '❌ Evitare sforzi intensi improvvisi (rischio cardiovascolare)',
      '✅ Aumentare gradualmente l\'intensità nel tempo',
      '💧 Idratazione abbondante durante l\'esercizio',
    ],
    fra: [
      '🚶 Camminata 20-30 min al giorno (zona 2)',
      '🏋️ Pesi moderati 2-3x settimana — FONDAMENTALE per osteopenia',
      '💃 Ballo o attività a basso impatto OK',
      '⚠️ Evitare esercizi ad alto impatto (corsa) se dolori cervicali',
      '🦴 Gli esercizi di tonificazione depositano calcio nelle ossa',
    ],
  },
};

// ============================================================
// CHECKLIST GIORNALIERA
// ============================================================
export const CHECKLIST_ITEMS = {
  entrambi: [
    { id: 'acqua', label: '2L acqua oligominerale', icona: '💧' },
    { id: 'luce_alba', label: 'Luce naturale al mattino (10 min)', icona: '☀️' },
    { id: 'camminata', label: 'Camminata / attività fisica', icona: '🚶' },
    { id: 'cena_20', label: 'Cena entro le 20:00', icona: '🌙' },
    { id: 'no_luce_blu', label: 'No luci blu dopo le 20:00', icona: '📵' },
    { id: 'magnesio', label: 'Magnesio serale', icona: '💊' },
    { id: 'respirazione', label: 'Respirazione rilassante (5 min)', icona: '🌬️' },
    { id: 'ordine_cibo', label: 'Ordine pasto: verdure → proteine → carbo', icona: '🥗' },
  ],
  max: [
    { id: 'levotiroxina', label: 'Levotiroxina a stomaco vuoto (60 min prima)', icona: '💊' },
    { id: 'omega3', label: 'Omega-3 con il pasto', icona: '🐟' },
    { id: 'coq10', label: 'CoQ10 con il pasto', icona: '💛' },
    { id: 'no_pompelmo', label: 'No pompelmo oggi', icona: '🍊' },
    { id: 'k2_max', label: 'Vitamina K2 + D3', icona: '🦴' },
  ],
  fra: [
    { id: 'd3k2', label: 'D3 + K2 (con pasto)', icona: '☀️' },
    { id: 'zinco', label: 'Zinco (lontano da calcio)', icona: '⚡' },
    { id: 'probiotico', label: 'Probiotico (prima colazione/cena)', icona: '🦠' },
    { id: 'folato', label: 'Metilfolato (B9)', icona: '🌿' },
    { id: 'grassi_distribuiti', label: 'Grassi distribuiti tra i pasti (no colecisti)', icona: '🫒' },
  ],
};

// ============================================================
// SEGNALI DI ALLARME
// ============================================================
export const SEGNALI_ALLARME = {
  max: [
    { segnale: 'Dolori al petto o respiro affannoso a riposo', azione: '🚨 Chiamare il 118 immediatamente', colore: 'red' },
    { segnale: 'Giramenti di testa improvvisi o perdita equilibrio', azione: '🚨 Contattare medico subito', colore: 'red' },
    { segnale: 'Debolezza muscolare diffusa', azione: '⚠️ Valutare con medico — possibile effetto statine', colore: 'orange' },
    { segnale: 'Urine scure o marroni', azione: '🚨 Rabdomiolisi da statine — medico subito', colore: 'red' },
    { segnale: 'Aumento rapido della pancia in pochi giorni', azione: '⚠️ Valutare ritenzione idrica con medico', colore: 'orange' },
  ],
  fra: [
    { segnale: 'Giramenti di testa intensi o frequenti', azione: '⚠️ Valutare con medico (cervicale + pressione)', colore: 'orange' },
    { segnale: 'Dolore lombare acuto (possibile calcolo renale)', azione: '🚨 Pronto Soccorso se intenso', colore: 'red' },
    { segnale: 'Gonfiore addominale persistente dopo ogni pasto', azione: '⚠️ Valutare intolleranza lattosio o istamina', colore: 'orange' },
    { segnale: 'Stanchezza eccessiva + capelli secchi', azione: '⚠️ Controllare TSH (predisposizione ipotiroidismo)', colore: 'orange' },
    { segnale: 'Dolori ossei diffusi', azione: '⚠️ Controllare D3, calcio, densitometria ossea', colore: 'orange' },
  ],
};
