export const PROFILES = {
  max: {
    nome: "Massimo",
    eta: "~70 anni",
    colore: "#4A90D9",
    emoji: "👨",
    patologie: ["Ipercolesterolemia (statine + cardioaspirina)", "Placche aterosclerotiche (carotide 100% + 30%)", "Tiroide mancante (levotiroxina)", "Tremore essenziale genetico", "Pancia adiposa viscerale"],
    note: "Levotiroxina: assumere 60 min prima di caffè, calcio, ferro. Statine: sera. Cardioaspirina: mattina con cibo."
  },
  fra: {
    nome: "Franca",
    eta: "~65 anni",
    colore: "#9B59B6",
    emoji: "👩",
    patologie: ["Osteopenia", "Ipercolesterolemia (rosuvastatina)", "Placca aterosclerotica", "Colicistectomia (senza cistifellea)", "Calcoli renali (ossalato di calcio)", "Giramenti di testa / cervicale", "MTHFR doppia mutazione"],
    note: "Senza cistifellea: grassi distribuiti nei pasti, no grassi abbondanti. Mutazione MTHFR: serve folato attivo (metilfolato). Calcoli renali: idratazione fondamentale, limitare ossalati."
  }
};

export const MENU_SETTIMANALE = [
  {
    giorno: "Lunedì",
    colazione: {
      base: "Yogurt greco magro con frutti di bosco e semi di lino",
      note_max: "Aggiungi noci (pugnetto). Aspetta 60 min dalla levotiroxina.",
      note_fra: "Piccola porzione di grassi buoni (mezzo cucchiaio olio EVO sui frutti di bosco)"
    },
    pranzo: {
      base: "Salmone al vapore con quinoa e verdure grigliate (zucchine, peperoni)",
      note_max: "Porzione abbondante di salmone per omega-3",
      note_fra: "Salmone ottimo per colesterolo. Aggiungi succo di limone per assorbimento calcio"
    },
    cena: {
      base: "Minestrone di legumi (lenticchie) con farro e olio EVO a crudo",
      note_max: "Aggiungi erbe aromatiche anti-infiammatorie (rosmarino, curcuma)",
      note_fra: "Porzione legumi moderata (ossalati). Bevi acqua durante e dopo il pasto"
    }
  },
  {
    giorno: "Martedì",
    colazione: {
      base: "Pane integrale tostato con avocado e uovo in camicia",
      note_max: "Perfetto. Cardioaspirina con questo pasto.",
      note_fra: "Avocado ottimo (grassi buoni, digeribili senza cistifellea in quantità moderate)"
    },
    pranzo: {
      base: "Petto di pollo alla griglia con insalata mista e olio EVO, limone",
      note_max: "Aggiungi semi di girasole o zucca per vitamina E",
      note_fra: "Condisci con poco olio ma buono. Evita condimenti grassi pesanti"
    },
    cena: {
      base: "Zuppa di fagioli bianchi e cavolo nero con crostini integrali",
      note_max: "Ottimo per il cuore. Aggiungi aglio crudo se gradito",
      note_fra: "Bevi 1-2 bicchieri d'acqua extra la sera per i reni"
    }
  },
  {
    giorno: "Mercoledì",
    colazione: {
      base: "Porridge di avena con banana e cannella",
      note_max: "Avena abbassa il colesterolo. Aggiungi semi di chia",
      note_fra: "Banana ok. Aggiungi un cucchiaio di olio di cocco (media catena, non richiede cistifellea)"
    },
    pranzo: {
      base: "Merluzzo al forno con patate al rosmarino e spinaci saltati",
      note_max: "Ottimo pesce magro. Aggiungi olio EVO abbondante",
      note_fra: "Spinaci con moderazione (ossalati). Merluzzo ottimo per proteine magre"
    },
    cena: {
      base: "Frittata di verdure (zucchine, cipolla, prezzemolo) con insalata",
      note_max: "2-3 uova. Aggiungi formaggio magro se vuoi",
      note_fra: "2 uova max. Cottura leggera, poco olio"
    }
  },
  {
    giorno: "Giovedì",
    colazione: {
      base: "Smoothie verde: spinaci, mela, zenzero, latte di mandorla, semi di lino",
      note_max: "Aggiungi proteine (cucchiaio di proteine vegetali o yogurt greco)",
      note_fra: "Spinaci moderati. Ottimo per colesterolo e intestino"
    },
    pranzo: {
      base: "Pasta integrale al pomodoro fresco con basilico e tonno",
      note_max: "Porzione normale. Il tonno dà omega-3 extra",
      note_fra: "Porzione pasta moderata. Tonno ottimo. Aggiungi limone sul tonno"
    },
    cena: {
      base: "Ceci al curry con riso basmati e yogurt greco",
      note_max: "Curcuma nel curry: potente anti-infiammatorio per le placche",
      note_fra: "Ceci in porzione moderata. Il curry aiuta la digestione"
    }
  },
  {
    giorno: "Venerdì",
    colazione: {
      base: "Toast integrale con salmone affumicato e avocado",
      note_max: "Eccellente per il cuore. Omega-3 al mattino",
      note_fra: "Salmone affumicato ok ma attenzione al sodio. Avocado in quantità moderata"
    },
    pranzo: {
      base: "Insalata di farro con pomodorini, olive, feta e prezzemolo",
      note_max: "Aggiungi noci o mandorle per i grassi buoni",
      note_fra: "Feta con moderazione (sale). Olive: grassi sani e facilmente digeribili"
    },
    cena: {
      base: "Branzino al forno con limone, finocchi e carote",
      note_max: "Pesce bianco ottimo. Aggiungi olio EVO abbondante a crudo",
      note_fra: "Pesce bianco ideale. Finocchi aiutano la digestione. Molto limone"
    }
  },
  {
    giorno: "Sabato",
    colazione: {
      base: "Pancakes di avena con mirtilli e sciroppo d'acero (1 cucchiaio)",
      note_max: "Giorno libero con controllo. Aggiungi un po' di burro di mandorle",
      note_fra: "Preferisci latte di riso o avena nei pancakes. Mirtilli ottimi antiossidanti"
    },
    pranzo: {
      base: "Bistecca di manzo magra con verdure al forno e patata dolce",
      note_max: "Una volta a settimana va bene. Cottura alla griglia",
      note_fra: "Porzione piccola di carne. Cottura magra, elimina il grasso visibile"
    },
    cena: {
      base: "Pizza integrale fatta in casa con pomodoro, verdure e mozzarella light",
      note_max: "Pasto libero controllato. Goditela!",
      note_fra: "Mozzarella light. Condimento leggero di olio"
    }
  },
  {
    giorno: "Domenica",
    colazione: {
      base: "Uova strapazzate con pane integrale, pomodorini e erbe",
      note_max: "Domenica sostanziosa. 3 uova ok.",
      note_fra: "2 uova. Cottura senza burro (olio EVO leggero)"
    },
    pranzo: {
      base: "Risotto al limone con gamberi e asparagi",
      note_max: "Pasto famiglia. Porzione normale di riso",
      note_fra: "Gamberi: proteine magre ottime. Asparagi: diuretici naturali (bene per reni)"
    },
    cena: {
      base: "Zuppa di verdure con legumi misti e pane di segale",
      note_max: "Cena leggera dopo pranzo abbondante",
      note_fra: "Legumi misti in porzione moderata. Bevi molta acqua la sera"
    }
  }
];

export const CIBI = {
  condivisi_si: [
    { nome: "Salmone e pesci grassi", motivo: "Omega-3, anti-infiammatorio, colesterolo" },
    { nome: "Olio EVO a crudo", motivo: "Grassi monoinsaturi, cuore e colesterolo" },
    { nome: "Avena e cereali integrali", motivo: "Beta-glucani, abbassano LDL" },
    { nome: "Legumi (lenticchie, ceci, fagioli)", motivo: "Proteine vegetali, fibra, cuore" },
    { nome: "Frutti di bosco", motivo: "Antiossidanti, anti-infiammatori" },
    { nome: "Noci e mandorle", motivo: "Omega-3, vitamina E, cuore" },
    { nome: "Verdure a foglia verde", motivo: "Micronutrienti, fibra, antiossidanti" },
    { nome: "Aglio e cipolla", motivo: "Allicina: anti-aterosclerotica, antibatterica" },
    { nome: "Curcuma + pepe nero", motivo: "Curcumina: anti-infiammatorio potente" },
    { nome: "Mirtilli, melograno", motivo: "Antociani: protezione cardiovascolare" },
    { nome: "Pesce bianco (merluzzo, branzino)", motivo: "Proteine magre, facilmente digeribile" },
    { nome: "Semi di lino e chia", motivo: "Omega-3 vegetali, fibra solubile" }
  ],
  fra_attenzione: [
    { nome: "Spinaci e bietole (MODERARE)", motivo: "Ossalati → rischio calcoli renali" },
    { nome: "Cioccolato fondente (POCO)", motivo: "Ossalati. Ok 1-2 quadratini" },
    { nome: "Noci (MODERATE)", motivo: "Ossalati. Max una manciata al giorno" },
    { nome: "Grassi abbondanti in un pasto", motivo: "Senza cistifellea: distribuire i grassi" },
    { nome: "Cibi fritti o molto grassi", motivo: "Difficili da digerire senza cistifellea" },
    { nome: "Pasti abbondanti e veloci", motivo: "Mangiare lentamente, porzioni moderate" },
    { nome: "Tè nero, caffè in eccesso", motivo: "Ossalati e disidratazione (calcoli)" }
  ],
  max_attenzione: [
    { nome: "Sale (RIDURRE)", motivo: "Ipertensione, rischio cardiovascolare" },
    { nome: "Alcol (LIMITARE)", motivo: "Interferisce con statine e tiroide" },
    { nome: "Pompelmo", motivo: "Interferisce con statine (atorvastatina)" },
    { nome: "Grassi saturi e trans", motivo: "Peggiorano aterosclerosi e colesterolo" },
    { nome: "Zuccheri raffinati", motivo: "Trigliceridi, adiposità viscerale" },
    { nome: "Caffeina eccessiva", motivo: "Interferisce con levotiroxina" }
  ],
  entrambi_stop: [
    { nome: "Cibi ultra-processati", motivo: "Infiammazione sistemica, nessun valore nutritivo" },
    { nome: "Bevande zuccherate", motivo: "Trigliceridi, infiammazione, sovrappeso" },
    { nome: "Grassi trans (margarina, fritto industriale)", motivo: "Aterosclerosi diretta" },
    { nome: "Salumi e carni processate", motivo: "Sale, conservanti, rischio cardiovascolare" }
  ]
};

// Integratori MASSIMO
export const INTEGRATORI_MAX_DEFAULT = [
  {
    id: "max_1",
    nome: "CoQ10 (Ubiquinolo)",
    brand: "Jarrow Formulas Ubiquinol 100mg",
    dose: "100-200mg/giorno",
    quando: "Mattina con pasto grasso",
    perche: "Le statine esauriscono il CoQ10. Fondamentale per energia cellulare, cuore e muscoli.",
    priorita: "alta"
  },
  {
    id: "max_2",
    nome: "Omega-3 (EPA+DHA)",
    brand: "Nordic Naturals Ultimate Omega o Solgar",
    dose: "2g/giorno (EPA+DHA combinati)",
    quando: "Con i pasti (pranzo o cena)",
    perche: "Trigliceridi, anti-infiammatorio per aterosclerosi, protezione cardiaca.",
    priorita: "alta"
  },
  {
    id: "max_3",
    nome: "Magnesio Bisglicinato",
    brand: "Natural Point o Vita al Top",
    dose: "300-400mg/giorno",
    quando: "Sera prima di dormire",
    perche: "Rilassa i muscoli, qualità del sonno, regola la pressione, riduce tremore.",
    priorita: "alta"
  },
  {
    id: "max_4",
    nome: "Vitamina D3",
    brand: "Solgar D3 2000UI o Biosalus",
    dose: "2000-4000UI/giorno",
    quando: "Mattina con pasto grasso",
    perche: "Ossa (osteopenia latente), cuore, sistema immunitario, umore.",
    priorita: "alta"
  },
  {
    id: "max_5",
    nome: "Vitamina K2 (MK-7)",
    brand: "Now Foods K2 o WeightWorld",
    dose: "100-200mcg/giorno",
    quando: "Mattina con pasto grasso (con D3)",
    perche: "Dirige il calcio verso le ossa e non nelle arterie. Fondamentale con D3.",
    priorita: "media"
  },
  {
    id: "max_6",
    nome: "Berberina",
    brand: "Jarrow Berberine 500mg o Solgar",
    dose: "500mg x2/giorno",
    quando: "Prima dei pasti principali",
    perche: "Abbassa colesterolo LDL e trigliceridi, anti-aterosclerotica.",
    priorita: "media"
  },
  {
    id: "max_7",
    nome: "Vegastabil (prescritto neurologo)",
    brand: "Vegastabil (come prescritto)",
    dose: "Come da prescrizione neurologo",
    quando: "Come indicato dal medico",
    perche: "Prescritto per il tremore essenziale genetico. Segui le indicazioni mediche.",
    priorita: "alta"
  }
];

// Integratori FRANCA - lista aggiornata
export const INTEGRATORI_FRA_DEFAULT = [
  {
    id: "fra_1",
    nome: "B-Dyn (complesso B attivo)",
    brand: "B-Dyn (Metilfolato + B12 metilcobalamina + B6 piridossale-5-fosfato)",
    dose: "1 compressa/giorno",
    quando: "Sera (con o senza cibo)",
    perche: "Doppia mutazione MTHFR: il folato normale non viene convertito. Questo è già in forma attiva. Sostituisce l'acido folico precedente. Abbassa omocisteina (rischio cardiovascolare).",
    priorita: "alta"
  },
  {
    id: "fra_2",
    nome: "Magnesio Bisglicinato",
    brand: "Vita al Top Magnesio Bisglicinato o Natural Point",
    dose: "300mg/giorno",
    quando: "Sera (con B-Dyn)",
    perche: "Forma altamente assorbibile. Rilassa i muscoli (cervicale), aiuta il sonno, riduce crampi, supporta la funzione cardiaca. Non compete con il calcio.",
    priorita: "alta"
  },
  {
    id: "fra_3",
    nome: "Vitamina D3",
    brand: "Solgar Vitamina D3 2000UI o Biosalus D3",
    dose: "2000UI/giorno",
    quando: "Mattina con pasto contenente grassi (es. avocado, olio EVO, uova)",
    perche: "Osteopenia: fondamentale per l'assorbimento del calcio nelle ossa. Lavora in sinergia con K2. Senza cistifellea: assumere con grassi per assorbimento ottimale.",
    priorita: "alta"
  },
  {
    id: "fra_4",
    nome: "Vitamina K2 (MK-4)",
    brand: "WeightWorld Vitamina K2 MK-4 100mcg",
    dose: "100mcg/giorno",
    quando: "Mattina con pasto grasso (insieme a D3)",
    perche: "Dirige il calcio verso le ossa (non nelle arterie o nei reni). Fondamentale con D3 per osteopenia. Riduce rischio calcoli renali da calcio male indirizzato.",
    priorita: "alta"
  },
  {
    id: "fra_5",
    nome: "Calcio Citrato",
    brand: "Solgar Calcium Citrate 250mg (2 compresse = 500mg)",
    dose: "500mg/giorno",
    quando: "Pranzo (mai insieme a ferro o levotiroxina)",
    perche: "Osteopenia: supporto osseo. Il citrato si assorbe meglio senza cistifellea rispetto al carbonato. Non con D3 e K2 della mattina per evitare eccesso contemporaneo.",
    priorita: "alta"
  },
  {
    id: "fra_6",
    nome: "CoQ10 (Ubichinone)",
    brand: "WeightWorld CoQ10 100mg (non ubiquinolo - forma standard)",
    dose: "100mg/giorno",
    quando: "Mattina con pasto grasso (con D3 e K2)",
    perche: "Le statine (rosuvastatina) esauriscono il CoQ10. Fondamentale per energia cellulare, protezione cardiaca, riduzione affaticamento muscolare da statine.",
    priorita: "alta"
  }
];

export const ORARIO_INTEGRATORI_FRA = {
  mattina: ["Vitamina D3 (con pasto grasso)", "Vitamina K2 MK-4 (con pasto grasso)", "CoQ10 (con pasto grasso)"],
  pranzo: ["Calcio Citrato (lontano da ferro/farmaci)"],
  sera: ["B-Dyn (con o senza cibo)", "Magnesio Bisglicinato (con B-Dyn)"],
  dopo_cena: ["Rosuvastatina 5mg (30 min dopo cena)"],
  mattina_farmaci: ["Bisoprololo 1,25mg (mattina con colazione)"]
};

export const STILE_VITA = {
  mattina: [
    { ora: "7:00", azione: "Sveglia. Bicchiere d'acqua tiepida con limone. MAX: levotiroxina a stomaco vuoto." },
    { ora: "7:30", azione: "Movimento leggero: 10 min stretching o camminata. Esposizione alla luce solare." },
    { ora: "8:00", azione: "Colazione ricca e bilanciata. MAX: cardioaspirina con cibo. FRA: D3+K2+CoQ10 con pasto grasso." },
    { ora: "9:30", azione: "Caffè (MAX: 60 min dopo levotiroxina). Attività mentale, lettura, progetti." }
  ],
  giorno: [
    { ora: "12:30", azione: "Pranzo. FRA: Calcio Citrato. Pasto bilanciato con proteine e verdure." },
    { ora: "14:00", azione: "Riposo breve (20 min max) o passeggiata digestiva. Idratazione continua." },
    { ora: "15:00", azione: "Attività fisica o hobby. Socializzazione (ottima per neuroprotezione)." },
    { ora: "17:00", azione: "Spuntino leggero: frutta, noci, yogurt. Idratazione." }
  ],
  sera: [
    { ora: "19:30", azione: "Cena leggera. FRA: B-Dyn + Magnesio sera. MAX: serenità, no stress." },
    { ora: "20:30", azione: "Rosuvastatina (FRA). MAX: statina (se prescritta sera). Passeggiata breve." },
    { ora: "21:30", azione: "Routine relax: lettura, musica. No schermi forti. Ridurre stimoli." },
    { ora: "22:30", azione: "Sonno. Stanza fresca e buia. MAX: Magnesio sera aiuta il sonno." }
  ],
  allenamento: {
    max: [
      "Camminata veloce 30-45 min, 5 giorni/settimana (cardio leggero per cuore)",
      "Esercizi di equilibrio e coordinazione (prevenzione cadute, utile per tremore)",
      "Stretching quotidiano (10-15 min mattina)",
      "NO sforzi intensi improvvisi (aterosclerosi carotidea)",
      "Nuoto o cyclette: ottimi per Max (nessun impatto)"
    ],
    fra: [
      "Camminata quotidiana 30 min (fondamentale per osteopenia)",
      "Esercizi con i pesi leggeri 2x/settimana (stimola densità ossea)",
      "Yoga o Pilates per cervicale e equilibrio",
      "Cyclette o nuoto (non impatto, ma carico osseo moderato)",
      "Esposizione solare 15-20 min/giorno (Vitamina D naturale)"
    ]
  }
};

export const CHECKLIST_ITEMS = {
  entrambi: [
    { id: "acqua", testo: "Bevuto almeno 1,5-2L di acqua", emoji: "💧" },
    { id: "verdure", testo: "Mangiato verdure a pranzo e cena", emoji: "🥗" },
    { id: "movimento", testo: "Fatto 30 min di movimento o cammino", emoji: "🚶" },
    { id: "frutta", testo: "Mangiato 2 porzioni di frutta", emoji: "🍎" },
    { id: "fritto", testo: "Evitato cibi fritti e ultra-processati", emoji: "🚫" },
    { id: "stress", testo: "Momento di relax o respirazione profonda", emoji: "🧘" }
  ],
  max: [
    { id: "levo", testo: "Levotiroxina a stomaco vuoto (aspettato 60 min)", emoji: "💊" },
    { id: "aspirina", testo: "Cardioaspirina presa con il cibo", emoji: "💊" },
    { id: "statina_max", testo: "Statina presa (sera)", emoji: "💊" },
    { id: "sale_max", testo: "Limitato il sale nei pasti", emoji: "🧂" },
    { id: "coq10_max", testo: "CoQ10 + D3 + K2 mattina (con pasto grasso)", emoji: "💊" },
    { id: "magnesio_max", testo: "Magnesio sera (Bisglicinato)", emoji: "💊" }
  ],
  fra: [
    { id: "rosuva", testo: "Rosuvastatina presa (30 min dopo cena)", emoji: "💊" },
    { id: "bisopro", testo: "Bisoprololo preso (mattina con colazione)", emoji: "💊" },
    { id: "bdyn", testo: "B-Dyn preso (sera)", emoji: "💊" },
    { id: "magnesio_fra", testo: "Magnesio Bisglicinato (sera con B-Dyn)", emoji: "💊" },
    { id: "d3k2coq10", testo: "D3 + K2 + CoQ10 mattina (con pasto grasso)", emoji: "💊" },
    { id: "calcio", testo: "Calcio Citrato al pranzo", emoji: "💊" },
    { id: "acqua_reni", testo: "Bevuto acqua extra per i reni (almeno 2L)", emoji: "💧" },
    { id: "grassi_fra", testo: "Distribuito i grassi in più pasti (no eccesso unico)", emoji: "🥑" }
  ]
};

export const SEGNALI_ALLARME = {
  max: [
    "Dolore al petto o difficoltà respiratoria → Emergenza immediata",
    "Vertigini improvvise o perdita di equilibrio → Medico urgente",
    "Debolezza a un lato del corpo, bocca storta → Ictus → 118 immediato",
    "Tremore improvvisamente molto peggiorato → Neurologo urgente",
    "Confusione mentale acuta o disorientamento → Medico"
  ],
  fra: [
    "Dolore lombare intenso + urina torbida o con sangue → Calcolo renale → Medico",
    "Dolore addominale forte dopo pasto grasso → Digestivo urgente",
    "Vertigini forti e frequenti → Neurologo / ORL",
    "Formicolio alle gambe o crampi notturni persistenti → Medico (carenza B12/Mg)",
    "Dolore osseo improvviso senza trauma → Ortopedico (osteopenia)"
  ]
};
