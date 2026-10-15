import React, { useState, useEffect } from 'react';
import { db } from './firebase.js';
import { doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';
import {
  PROFILES, MENU_SETTIMANALE, CIBI,
  INTEGRATORI_MAX_DEFAULT, INTEGRATORI_FRA_DEFAULT, ORARIO_INTEGRATORI_FRA,
  STILE_VITA, CHECKLIST_ITEMS, SEGNALI_ALLARME
} from './data.js';

// ─── UTILITIES ───────────────────────────────────────────────────────────────
function oggi() {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

// ─── HEADER ──────────────────────────────────────────────────────────────────
function Header({ utente, setUtente }) {
  return (
    <header className="header">
      <div className="header-brand">
        <span className="header-logo">🌿</span>
        <h1 className="header-title">MaxFra Wellness</h1>
      </div>
      <div className="user-selector">
        {['max', 'fra', 'tutti'].map(u => (
          <button
            key={u}
            className={`user-btn ${utente === u ? 'active' : ''} user-btn-${u}`}
            onClick={() => setUtente(u)}
          >
            {u === 'max' ? '👨 Max' : u === 'fra' ? '👩 Fra' : '👨‍👩 Tutti'}
          </button>
        ))}
      </div>
    </header>
  );
}

// ─── NAV ─────────────────────────────────────────────────────────────────────
function Nav({ tab, setTab }) {
  const tabs = [
    { id: 'home', label: '🏠', full: 'Home' },
    { id: 'menu', label: '🍽', full: 'Menù' },
    { id: 'cibi', label: '🥦', full: 'Cibi' },
    { id: 'integratori', label: '💊', full: 'Integratori' },
    { id: 'stile', label: '⚡', full: 'Stile' },
    { id: 'check', label: '✅', full: 'Check' },
  ];
  return (
    <nav className="nav">
      {tabs.map(t => (
        <button
          key={t.id}
          className={`nav-btn ${tab === t.id ? 'active' : ''}`}
          onClick={() => setTab(t.id)}
        >
          <span className="nav-icon">{t.label}</span>
          <span className="nav-label">{t.full}</span>
        </button>
      ))}
    </nav>
  );
}

// ─── TAB HOME ────────────────────────────────────────────────────────────────
function TabHome({ utente }) {
  const profiles = utente === 'tutti'
    ? [PROFILES.max, PROFILES.fra]
    : [PROFILES[utente]];

  return (
    <div className="tab-content">
      <h2 className="section-title">Benvenuti nel vostro piano benessere</h2>
      <p className="section-sub">Piano personalizzato basato su analisi genetiche, microbiota e profilo clinico</p>

      {profiles.map(p => (
        <div key={p.nome} className="profile-card" style={{ borderColor: p.colore }}>
          <div className="profile-header" style={{ color: p.colore }}>
            <span className="profile-emoji">{p.emoji}</span>
            <div>
              <h3 className="profile-nome">{p.nome}</h3>
              <span className="profile-eta">{p.eta}</span>
            </div>
          </div>
          <div className="profile-note">{p.note}</div>
          <div className="profile-patologie">
            <strong>Condizioni:</strong>
            <ul>
              {p.patologie.map((pat, i) => <li key={i}>{pat}</li>)}
            </ul>
          </div>
        </div>
      ))}

      <div className="info-box">
        <h3>📋 Come usare questa app</h3>
        <ul>
          <li><strong>Menù</strong> → Piano pasti settimanale con note personalizzate</li>
          <li><strong>Cibi</strong> → Semaforo alimentare cosa mangiare/evitare</li>
          <li><strong>Integratori</strong> → Lista con dosi, brand e orari (modificabile)</li>
          <li><strong>Stile</strong> → Routine quotidiana e allenamento</li>
          <li><strong>Check</strong> → Checklist giornaliera salvata sul cloud</li>
        </ul>
      </div>
    </div>
  );
}

// ─── TAB MENU ────────────────────────────────────────────────────────────────
function TabMenu({ utente }) {
  const [giornoAperto, setGiornoAperto] = useState(null);

  return (
    <div className="tab-content">
      <h2 className="section-title">Piano Alimentare Settimanale</h2>
      <p className="section-sub">Cucina uguale per tutti, note personalizzate per ogni esigenza</p>

      {MENU_SETTIMANALE.map((g, i) => (
        <div key={i} className="menu-card">
          <button
            className="menu-giorno-btn"
            onClick={() => setGiornoAperto(giornoAperto === i ? null : i)}
          >
            <span className="menu-giorno-nome">{g.giorno}</span>
            <span className="menu-toggle">{giornoAperto === i ? '▲' : '▼'}</span>
          </button>

          {giornoAperto === i && (
            <div className="menu-dettaglio">
              {['colazione', 'pranzo', 'cena'].map(pasto => (
                <div key={pasto} className="pasto-block">
                  <h4 className="pasto-title">
                    {pasto === 'colazione' ? '☀️ Colazione' : pasto === 'pranzo' ? '🌞 Pranzo' : '🌙 Cena'}
                  </h4>
                  <p className="pasto-base">{g[pasto].base}</p>
                  {(utente === 'max' || utente === 'tutti') && g[pasto].note_max && (
                    <div className="pasto-nota nota-max">
                      <span className="nota-badge nota-badge-max">👨 Max</span>
                      {g[pasto].note_max}
                    </div>
                  )}
                  {(utente === 'fra' || utente === 'tutti') && g[pasto].note_fra && (
                    <div className="pasto-nota nota-fra">
                      <span className="nota-badge nota-badge-fra">👩 Fra</span>
                      {g[pasto].note_fra}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── TAB CIBI ────────────────────────────────────────────────────────────────
function TabCibi({ utente }) {
  return (
    <div className="tab-content">
      <h2 className="section-title">Semaforo Alimentare</h2>

      <div className="cibi-section cibi-verde">
        <h3>✅ Via Libera — Per tutti</h3>
        <div className="cibi-grid">
          {CIBI.condivisi_si.map((c, i) => (
            <div key={i} className="cibo-card verde">
              <strong>{c.nome}</strong>
              <span>{c.motivo}</span>
            </div>
          ))}
        </div>
      </div>

      {(utente === 'fra' || utente === 'tutti') && (
        <div className="cibi-section cibi-giallo">
          <h3>⚠️ Attenzione Franca</h3>
          <div className="cibi-grid">
            {CIBI.fra_attenzione.map((c, i) => (
              <div key={i} className="cibo-card giallo">
                <strong>{c.nome}</strong>
                <span>{c.motivo}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {(utente === 'max' || utente === 'tutti') && (
        <div className="cibi-section cibi-arancio">
          <h3>⚠️ Attenzione Massimo</h3>
          <div className="cibi-grid">
            {CIBI.max_attenzione.map((c, i) => (
              <div key={i} className="cibo-card arancio">
                <strong>{c.nome}</strong>
                <span>{c.motivo}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="cibi-section cibi-rosso">
        <h3>🚫 Stop — Per entrambi</h3>
        <div className="cibi-grid">
          {CIBI.entrambi_stop.map((c, i) => (
            <div key={i} className="cibo-card rosso">
              <strong>{c.nome}</strong>
              <span>{c.motivo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── TAB INTEGRATORI ─────────────────────────────────────────────────────────
function TabIntegratori({ utente }) {
  const [integratoriMax, setIntegratoriMax] = useState(INTEGRATORI_MAX_DEFAULT);
  const [integratoriFra, setIntegratoriFra] = useState(INTEGRATORI_FRA_DEFAULT);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [loading, setLoading] = useState(true);
  const [showOrario, setShowOrario] = useState(false);

  // Carica da Firebase
  useEffect(() => {
    const loadData = async () => {
      try {
        const docMax = await getDoc(doc(db, 'integratori', 'max'));
        if (docMax.exists() && docMax.data().lista) {
          setIntegratoriMax(docMax.data().lista);
        }
        const docFra = await getDoc(doc(db, 'integratori', 'fra'));
        if (docFra.exists() && docFra.data().lista) {
          setIntegratoriFra(docFra.data().lista);
        }
      } catch (e) {
        console.log('Firebase load error:', e);
      }
      setLoading(false);
    };
    loadData();
  }, []);

  const salvaFirebase = async (persona, lista) => {
    try {
      await setDoc(doc(db, 'integratori', persona), { lista, aggiornato: new Date().toISOString() });
    } catch (e) {
      console.log('Errore salvataggio:', e);
    }
  };

  const iniziaModifica = (integratore) => {
    setEditingId(integratore.id);
    setEditData({ ...integratore });
  };

  const salvaModifica = (persona) => {
    if (persona === 'max') {
      const nuova = integratoriMax.map(i => i.id === editingId ? editData : i);
      setIntegratoriMax(nuova);
      salvaFirebase('max', nuova);
    } else {
      const nuova = integratoriFra.map(i => i.id === editingId ? editData : i);
      setIntegratoriFra(nuova);
      salvaFirebase('fra', nuova);
    }
    setEditingId(null);
    setEditData({});
  };

  const annullaModifica = () => {
    setEditingId(null);
    setEditData({});
  };

  const resetDefault = async (persona) => {
    if (!window.confirm(`Sei sicuro di voler resettare gli integratori di ${persona === 'max' ? 'Massimo' : 'Franca'} ai valori predefiniti?`)) return;
    if (persona === 'max') {
      setIntegratoriMax(INTEGRATORI_MAX_DEFAULT);
      salvaFirebase('max', INTEGRATORI_MAX_DEFAULT);
    } else {
      setIntegratoriFra(INTEGRATORI_FRA_DEFAULT);
      salvaFirebase('fra', INTEGRATORI_FRA_DEFAULT);
    }
  };

  const renderIntegratore = (integratore, persona) => {
    const isEditing = editingId === integratore.id;
    const prioritaColor = integratore.priorita === 'alta' ? '#e74c3c' : '#f39c12';

    if (isEditing) {
      return (
        <div key={integratore.id} className="integratore-card editing">
          <div className="edit-form">
            <label>Nome</label>
            <input value={editData.nome} onChange={e => setEditData({...editData, nome: e.target.value})} />
            <label>Brand / Prodotto</label>
            <input value={editData.brand} onChange={e => setEditData({...editData, brand: e.target.value})} />
            <label>Dose</label>
            <input value={editData.dose} onChange={e => setEditData({...editData, dose: e.target.value})} />
            <label>Quando prenderlo</label>
            <input value={editData.quando} onChange={e => setEditData({...editData, quando: e.target.value})} />
            <label>Perché (motivazione)</label>
            <textarea value={editData.perche} onChange={e => setEditData({...editData, perche: e.target.value})} rows={3} />
            <label>Priorità</label>
            <select value={editData.priorita} onChange={e => setEditData({...editData, priorita: e.target.value})}>
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="bassa">Bassa</option>
            </select>
            <div className="edit-actions">
              <button className="btn-save" onClick={() => salvaModifica(persona)}>💾 Salva</button>
              <button className="btn-cancel" onClick={annullaModifica}>✕ Annulla</button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div key={integratore.id} className="integratore-card">
        <div className="integratore-header">
          <span className="priorita-dot" style={{ background: prioritaColor }} title={`Priorità ${integratore.priorita}`}></span>
          <h4 className="integratore-nome">{integratore.nome}</h4>
          <button className="btn-edit-small" onClick={() => iniziaModifica(integratore)} title="Modifica">✏️</button>
        </div>
        <div className="integratore-brand">🏷 {integratore.brand}</div>
        <div className="integratore-info">
          <span className="info-chip chip-dose">💊 {integratore.dose}</span>
          <span className="info-chip chip-quando">⏰ {integratore.quando}</span>
        </div>
        <div className="integratore-perche">{integratore.perche}</div>
      </div>
    );
  };

  const renderPersona = (persona, lista) => (
    <div className={`persona-section persona-${persona}`}>
      <div className="persona-header-row">
        <h3 className={`persona-title color-${persona}`}>
          {persona === 'max' ? '👨 Massimo' : '👩 Franca'}
        </h3>
        <button className="btn-reset" onClick={() => resetDefault(persona)} title="Reset ai valori predefiniti">
          🔄 Reset
        </button>
      </div>

      {persona === 'fra' && (
        <div className="farmaci-box">
          <strong>💊 Farmaci prescritti (non modificare senza medico):</strong>
          <ul>
            <li>Rosuvastatina 5mg — <em>30 min dopo cena</em></li>
            <li>Bisoprololo 1,25mg — <em>mattina con colazione</em></li>
          </ul>
        </div>
      )}

      {persona === 'fra' && (
        <div className="orario-toggle-row">
          <button className="btn-orario" onClick={() => setShowOrario(!showOrario)}>
            {showOrario ? '▲ Nascondi orario' : '⏰ Vedi schema orario integratori'}
          </button>
        </div>
      )}

      {persona === 'fra' && showOrario && (
        <div className="orario-box">
          <h4>📅 Schema orario giornaliero</h4>
          <div className="orario-row"><span className="orario-label">🌅 Mattina (con pasto grasso)</span><ul>{ORARIO_INTEGRATORI_FRA.mattina.map((i,x) => <li key={x}>{i}</li>)}</ul></div>
          <div className="orario-row"><span className="orario-label">🌞 Pranzo</span><ul>{ORARIO_INTEGRATORI_FRA.pranzo.map((i,x) => <li key={x}>{i}</li>)}</ul></div>
          <div className="orario-row"><span className="orario-label">🌙 Sera</span><ul>{ORARIO_INTEGRATORI_FRA.sera.map((i,x) => <li key={x}>{i}</li>)}</ul></div>
          <div className="orario-row"><span className="orario-label">🌙 Dopo cena</span><ul>{ORARIO_INTEGRATORI_FRA.dopo_cena.map((i,x) => <li key={x}>{i}</li>)}</ul></div>
          <div className="orario-row"><span className="orario-label">💊 Farmaci mattina</span><ul>{ORARIO_INTEGRATORI_FRA.mattina_farmaci.map((i,x) => <li key={x}>{i}</li>)}</ul></div>
        </div>
      )}

      <div className="integratori-lista">
        {lista.map(integ => renderIntegratore(integ, persona))}
      </div>
    </div>
  );

  if (loading) return <div className="tab-content loading">Caricamento integratori...</div>;

  return (
    <div className="tab-content">
      <h2 className="section-title">Integratori</h2>
      <p className="section-sub">Lista personalizzata con dosi, brand e orari. Clicca ✏️ per modificare un integratore.</p>

      <div className="legenda-priorita">
        <span><span className="priorita-dot" style={{background:'#e74c3c'}}></span> Alta priorità</span>
        <span><span className="priorita-dot" style={{background:'#f39c12'}}></span> Media priorità</span>
      </div>

      {(utente === 'max' || utente === 'tutti') && renderPersona('max', integratoriMax)}
      {(utente === 'fra' || utente === 'tutti') && renderPersona('fra', integratoriFra)}
    </div>
  );
}

// ─── TAB LIFESTYLE ───────────────────────────────────────────────────────────
function TabLifestyle({ utente }) {
  return (
    <div className="tab-content">
      <h2 className="section-title">Stile di Vita</h2>

      <div className="stile-section">
        <h3>⏰ Routine Quotidiana</h3>
        {['mattina', 'giorno', 'sera'].map(momento => (
          <div key={momento} className="routine-block">
            <h4 className="routine-title">
              {momento === 'mattina' ? '🌅 Mattina' : momento === 'giorno' ? '☀️ Giornata' : '🌙 Sera'}
            </h4>
            {STILE_VITA[momento].map((item, i) => (
              <div key={i} className="routine-item">
                <span className="routine-ora">{item.ora}</span>
                <span className="routine-azione">{item.azione}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="stile-section">
        <h3>🏃 Allenamento</h3>
        {(utente === 'max' || utente === 'tutti') && (
          <div className="allenamento-card allenamento-max">
            <h4 className="color-max">👨 Massimo</h4>
            <ul>
              {STILE_VITA.allenamento.max.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </div>
        )}
        {(utente === 'fra' || utente === 'tutti') && (
          <div className="allenamento-card allenamento-fra">
            <h4 className="color-fra">👩 Franca</h4>
            <ul>
              {STILE_VITA.allenamento.fra.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </div>
        )}
      </div>

      <div className="stile-section">
        <h3>🚨 Segnali di Allarme</h3>
        {(utente === 'max' || utente === 'tutti') && (
          <div className="allarme-card">
            <h4 className="color-max">👨 Massimo</h4>
            <ul>
              {SEGNALI_ALLARME.max.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        )}
        {(utente === 'fra' || utente === 'tutti') && (
          <div className="allarme-card">
            <h4 className="color-fra">👩 Franca</h4>
            <ul>
              {SEGNALI_ALLARME.fra.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── TAB CHECKLIST ───────────────────────────────────────────────────────────
function TabChecklist({ utente }) {
  const [checks, setChecks] = useState({});
  const [dataSelezionata, setDataSelezionata] = useState(oggi());
  const [saving, setSaving] = useState(false);

  const docId = `${utente}_${dataSelezionata}`;

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'checklist', docId), (snap) => {
      if (snap.exists()) {
        setChecks(snap.data().checks || {});
      } else {
        setChecks({});
      }
    });
    return () => unsub();
  }, [docId]);

  const toggle = async (itemId) => {
    const nuovi = { ...checks, [itemId]: !checks[itemId] };
    setChecks(nuovi);
    setSaving(true);
    try {
      await setDoc(doc(db, 'checklist', docId), {
        checks: nuovi,
        utente,
        data: dataSelezionata,
        aggiornato: new Date().toISOString()
      });
    } catch (e) {
      console.log('Errore salvataggio check:', e);
    }
    setSaving(false);
  };

  const getItems = () => {
    if (utente === 'tutti') {
      return [
        ...CHECKLIST_ITEMS.entrambi,
        ...CHECKLIST_ITEMS.max.map(i => ({ ...i, tag: 'max' })),
        ...CHECKLIST_ITEMS.fra.map(i => ({ ...i, tag: 'fra' }))
      ];
    }
    return [
      ...CHECKLIST_ITEMS.entrambi,
      ...(CHECKLIST_ITEMS[utente] || [])
    ];
  };

  const items = getItems();
  const completati = items.filter(i => checks[i.id]).length;
  const percentuale = items.length > 0 ? Math.round((completati / items.length) * 100) : 0;

  return (
    <div className="tab-content">
      <h2 className="section-title">Checklist Giornaliera</h2>

      <div className="check-controls">
        <input
          type="date"
          value={dataSelezionata}
          onChange={e => setDataSelezionata(e.target.value)}
          className="date-input"
        />
        {saving && <span className="saving-badge">💾 Salvataggio...</span>}
      </div>

      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${percentuale}%` }}></div>
        </div>
        <span className="progress-text">{completati}/{items.length} — {percentuale}%</span>
      </div>

      <div className="checklist">
        {items.map(item => (
          <label key={item.id} className={`check-item ${checks[item.id] ? 'checked' : ''} ${item.tag ? `tag-${item.tag}` : ''}`}>
            <input
              type="checkbox"
              checked={!!checks[item.id]}
              onChange={() => toggle(item.id)}
              className="check-input"
            />
            <span className="check-emoji">{item.emoji}</span>
            <span className="check-testo">{item.testo}</span>
            {item.tag && (
              <span className={`check-tag check-tag-${item.tag}`}>
                {item.tag === 'max' ? '👨' : '👩'}
              </span>
            )}
          </label>
        ))}
      </div>

      {percentuale === 100 && (
        <div className="congratulazioni">
          🎉 Ottimo lavoro! Tutti i check completati per oggi!
        </div>
      )}
    </div>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App() {
  const [utente, setUtente] = useState('tutti');
  const [tab, setTab] = useState('home');

  const renderTab = () => {
    switch (tab) {
      case 'home': return <TabHome utente={utente} />;
      case 'menu': return <TabMenu utente={utente} />;
      case 'cibi': return <TabCibi utente={utente} />;
      case 'integratori': return <TabIntegratori utente={utente} />;
      case 'stile': return <TabLifestyle utente={utente} />;
      case 'check': return <TabChecklist utente={utente} />;
      default: return <TabHome utente={utente} />;
    }
  };

  return (
    <div className="app" data-user={utente}>
      <Header utente={utente} setUtente={setUtente} />
      <Nav tab={tab} setTab={setTab} />
      <main className="main">
        {renderTab()}
      </main>
    </div>
  );
}
