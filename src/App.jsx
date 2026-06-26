import { useState, useEffect } from 'react';
import { db } from './firebase.js';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import {
  PROFILES, MENU_SETTIMANALE, CIBI, INTEGRATORI,
  STILE_VITA, CHECKLIST_ITEMS, SEGNALI_ALLARME
} from './data.js';

// ============================================================
// UTILS
// ============================================================
function getTodayKey() {
  return new Date().toISOString().split('T')[0];
}

function getDayIndex() {
  return new Date().getDay(); // 0=dom
}

const GIORNI_MAP = { 0: 6, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5 };

// ============================================================
// ICONS SVG
// ============================================================
const icons = {
  home: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>,
  menu: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>,
  pill: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.22 11.29l6.36-6.36c2.34-2.34 6.14-2.34 8.49 0 2.34 2.34 2.34 6.14 0 8.49l-6.36 6.36c-2.34 2.34-6.14 2.34-8.49 0-2.35-2.35-2.35-6.15 0-8.49zm7.07 8.49l6.36-6.36.71.71-6.36 6.36-.71-.71zm-6.36-1.42c1.56 1.56 4.09 1.56 5.66 0l2.83-2.83-5.66-5.66-2.83 2.83c-1.56 1.56-1.56 4.1 0 5.66z"/></svg>,
  lifestyle: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/></svg>,
  check: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>,
  food: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-1.75-.77-3.1-2.05-4.1C12.81 9.95 10.8 9.5 8.5 9.5c-2.3 0-4.31.45-5.48 1.39C1.77 11.89 1 13.24 1 15v5h15.03v-5z"/></svg>,
  alert: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>,
};

// ============================================================
// COMPONENTE: Header
// ============================================================
function Header({ activeUser, setActiveUser }) {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #13161e 0%, #1a1e28 100%)',
      borderBottom: '1px solid #2e3448',
      padding: '12px 16px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      position: 'sticky', top: 0, zIndex: 100,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 24 }}>🌿</span>
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: 18, color: '#e8eaf0', letterSpacing: '0.02em' }}>MaxFra</div>
          <div style={{ fontSize: 10, color: '#5c6480', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Piano Benessere</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {['max', 'fra', 'entrambi'].map(u => {
          const isActive = activeUser === u;
          const color = u === 'max' ? '#4f8ef7' : u === 'fra' ? '#c084fc' : '#34d399';
          return (
            <button key={u} onClick={() => setActiveUser(u)} style={{
              padding: '6px 14px', borderRadius: 20, border: `1.5px solid ${isActive ? color : '#2e3448'}`,
              background: isActive ? `${color}22` : 'transparent',
              color: isActive ? color : '#5c6480', fontSize: 12, fontWeight: 600,
              transition: 'all 0.2s',
            }}>
              {u === 'entrambi' ? '👫 Tutti' : u === 'max' ? '👨 Max' : '👩 Fra'}
            </button>
          );
        })}
      </div>
    </header>
  );
}

// ============================================================
// COMPONENTE: Nav
// ============================================================
function Nav({ tab, setTab }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: icons.home },
    { id: 'menu', label: 'Menù', icon: icons.menu },
    { id: 'cibi', label: 'Cibi', icon: icons.food },
    { id: 'integratori', label: 'Integr.', icon: icons.pill },
    { id: 'lifestyle', label: 'Stile', icon: icons.lifestyle },
    { id: 'checklist', label: 'Check', icon: icons.check },
  ];
  return (
    <nav style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      background: '#13161e', borderTop: '1px solid #2e3448',
      display: 'flex', zIndex: 100,
    }}>
      {tabs.map(t => (
        <button key={t.id} onClick={() => setTab(t.id)} style={{
          flex: 1, padding: '10px 4px 14px',
          background: 'none', border: 'none',
          color: tab === t.id ? '#4f8ef7' : '#5c6480',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
          fontSize: 10, fontWeight: tab === t.id ? 600 : 400,
          transition: 'color 0.2s',
        }}>
          <span style={{ transform: tab === t.id ? 'scale(1.15)' : 'scale(1)', transition: 'transform 0.2s' }}>
            {t.icon}
          </span>
          {t.label}
        </button>
      ))}
    </nav>
  );
}

// ============================================================
// COMPONENTE: Card
// ============================================================
function Card({ children, style = {} }) {
  return (
    <div style={{
      background: '#1e2330', border: '1px solid #2e3448', borderRadius: 16,
      padding: 16, ...style
    }}>
      {children}
    </div>
  );
}

function SectionTitle({ children, accent = '#4f8ef7' }) {
  return (
    <div style={{
      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
      textTransform: 'uppercase', color: accent, marginBottom: 16, marginTop: 8,
    }}>
      {children}
    </div>
  );
}

// ============================================================
// TAB: HOME
// ============================================================
function TabHome({ activeUser }) {
  const dayIdx = GIORNI_MAP[getDayIndex()];
  const oggi = MENU_SETTIMANALE[dayIdx];

  const profile = activeUser !== 'entrambi' ? PROFILES[activeUser] : null;

  return (
    <div style={{ padding: '16px 16px 100px' }}>
      {/* Oggi */}
      <Card style={{ marginBottom: 12, background: 'linear-gradient(135deg, #1e2330, #252a38)' }}>
        <div style={{ fontSize: 12, color: '#5c6480', marginBottom: 4 }}>Oggi è</div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: '#e8eaf0', marginBottom: 12 }}>
          {oggi.giorno}
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {oggi.tag.map(t => (
            <span key={t} style={{
              background: '#1a1e28', border: '1px solid #2e3448',
              borderRadius: 20, padding: '3px 10px', fontSize: 10, color: '#5c6480'
            }}>#{t}</span>
          ))}
        </div>
      </Card>

      {/* Alert profilo */}
      {activeUser !== 'entrambi' && (
        <Card style={{ marginBottom: 12, borderColor: activeUser === 'max' ? '#2a5bc4' : '#7c3aed' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: activeUser === 'max' ? '#4f8ef7' : '#c084fc', marginBottom: 10 }}>
            {activeUser === 'max' ? '👨 Alert Massimo' : '👩 Alert Franca'}
          </div>
          {PROFILES[activeUser].alerts.map((a, i) => (
            <div key={i} style={{ fontSize: 12, color: '#9aa0b8', padding: '6px 0', borderBottom: i < PROFILES[activeUser].alerts.length - 1 ? '1px solid #2e3448' : 'none' }}>
              {a}
            </div>
          ))}
        </Card>
      )}

      {/* Menu di oggi */}
      <SectionTitle>🍽️ Pasti di Oggi</SectionTitle>
      {[
        { label: 'Colazione', pasto: oggi.colazione, ora: '08:00', emoji: '🌅' },
        { label: 'Pranzo', pasto: oggi.pranzo, ora: '12:30', emoji: '☀️' },
        { label: 'Cena', pasto: oggi.cena, ora: '19:00', emoji: '🌙' },
      ].map(({ label, pasto, ora, emoji }) => (
        <Card key={label} style={{ marginBottom: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <div style={{ fontWeight: 600, color: '#e8eaf0' }}>{emoji} {label}</div>
            <div style={{ fontSize: 11, color: '#5c6480' }}>{ora}</div>
          </div>
          <div style={{ fontSize: 13, color: '#c0c6d8', marginBottom: 8 }}>{pasto.base}</div>
          {pasto.base_detail && <div style={{ fontSize: 11, color: '#5c6480', fontStyle: 'italic', marginBottom: 8 }}>💡 {pasto.base_detail}</div>}
          {pasto.recipe && <div style={{ fontSize: 11, color: '#34d399', marginBottom: 8 }}>👨‍🍳 {pasto.recipe}</div>}
          {activeUser !== 'entrambi' && (
            <div style={{
              background: activeUser === 'max' ? '#1a3a6e33' : '#3b1a5e33',
              border: `1px solid ${activeUser === 'max' ? '#2a5bc4' : '#7c3aed'}`,
              borderRadius: 10, padding: '8px 10px', fontSize: 12,
              color: activeUser === 'max' ? '#4f8ef7' : '#c084fc',
            }}>
              {activeUser === 'max' ? pasto.note_max : pasto.note_fra}
            </div>
          )}
          {activeUser === 'entrambi' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ background: '#1a3a6e33', border: '1px solid #2a5bc4', borderRadius: 10, padding: '6px 10px', fontSize: 11, color: '#4f8ef7' }}>
                👨 Max: {pasto.note_max}
              </div>
              <div style={{ background: '#3b1a5e33', border: '1px solid #7c3aed', borderRadius: 10, padding: '6px 10px', fontSize: 11, color: '#c084fc' }}>
                👩 Fra: {pasto.note_fra}
              </div>
            </div>
          )}
        </Card>
      ))}

      {/* Spuntino */}
      <Card style={{ background: '#1a1e28' }}>
        <div style={{ fontSize: 13, color: '#9aa0b8' }}>🍎 Spuntino: <span style={{ color: '#e8eaf0' }}>{oggi.spuntino}</span></div>
      </Card>

      {/* Segnali allarme */}
      {activeUser !== 'entrambi' && (
        <>
          <SectionTitle accent="#f87171">🚨 Segnali da Non Ignorare</SectionTitle>
          {SEGNALI_ALLARME[activeUser].map((s, i) => (
            <Card key={i} style={{ marginBottom: 8, borderColor: s.colore === 'red' ? '#7f1d1d' : '#78350f' }}>
              <div style={{ fontSize: 12, color: '#e8eaf0', marginBottom: 4 }}>{s.segnale}</div>
              <div style={{ fontSize: 11, color: s.colore === 'red' ? '#f87171' : '#fb923c' }}>{s.azione}</div>
            </Card>
          ))}
        </>
      )}
    </div>
  );
}

// ============================================================
// TAB: MENU SETTIMANALE
// ============================================================
function TabMenu({ activeUser }) {
  const [selectedDay, setSelectedDay] = useState(GIORNI_MAP[getDayIndex()]);

  const oggi = MENU_SETTIMANALE[selectedDay];

  return (
    <div style={{ padding: '16px 16px 100px' }}>
      {/* Day selector */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 16, overflowX: 'auto', paddingBottom: 4 }}>
        {MENU_SETTIMANALE.map((g, i) => (
          <button key={i} onClick={() => setSelectedDay(i)} style={{
            flex: '0 0 auto', padding: '8px 12px', borderRadius: 12,
            border: `1.5px solid ${selectedDay === i ? '#4f8ef7' : '#2e3448'}`,
            background: selectedDay === i ? '#4f8ef722' : '#1e2330',
            color: selectedDay === i ? '#4f8ef7' : '#5c6480',
            fontSize: 11, fontWeight: 600,
          }}>
            {g.short}
            {i === GIORNI_MAP[getDayIndex()] && <span style={{ marginLeft: 3, fontSize: 8, color: '#34d399' }}>●</span>}
          </button>
        ))}
      </div>

      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: '#e8eaf0', marginBottom: 16 }}>
        {oggi.giorno}
      </div>

      {[
        { label: 'Colazione', pasto: oggi.colazione, emoji: '🌅', ora: '08:00' },
        { label: 'Pranzo', pasto: oggi.pranzo, emoji: '☀️', ora: '12:30' },
        { label: 'Cena', pasto: oggi.cena, emoji: '🌙', ora: '19:00' },
      ].map(({ label, pasto, emoji, ora }) => (
        <Card key={label} style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ fontWeight: 700, color: '#e8eaf0', fontSize: 15 }}>{emoji} {label}</div>
            <div style={{ fontSize: 11, color: '#5c6480', background: '#13161e', padding: '2px 8px', borderRadius: 10 }}>{ora}</div>
          </div>
          <div style={{ fontSize: 13, color: '#c0c6d8', lineHeight: 1.6, marginBottom: 10 }}>{pasto.base}</div>
          {pasto.base_detail && (
            <div style={{ fontSize: 11, color: '#34d399', marginBottom: 10, padding: '6px 10px', background: '#06503433', borderRadius: 8 }}>
              💡 {pasto.base_detail}
            </div>
          )}
          {pasto.recipe && (
            <div style={{ fontSize: 11, color: '#fbbf24', marginBottom: 10, padding: '6px 10px', background: '#78350f33', borderRadius: 8 }}>
              👨‍🍳 Ricetta: {pasto.recipe}
            </div>
          )}

          {/* Note per utente */}
          {(activeUser === 'max' || activeUser === 'entrambi') && (
            <div style={{ background: '#1a3a6e22', border: '1px solid #2a5bc433', borderRadius: 10, padding: '8px 10px', fontSize: 12, color: '#4f8ef7', marginBottom: activeUser === 'entrambi' ? 6 : 0 }}>
              👨 <strong>Max:</strong> {pasto.note_max}
            </div>
          )}
          {(activeUser === 'fra' || activeUser === 'entrambi') && (
            <div style={{ background: '#3b1a5e22', border: '1px solid #7c3aed33', borderRadius: 10, padding: '8px 10px', fontSize: 12, color: '#c084fc' }}>
              👩 <strong>Fra:</strong> {pasto.note_fra}
            </div>
          )}
        </Card>
      ))}

      <Card style={{ background: '#1a1e28' }}>
        <div style={{ fontSize: 13, color: '#9aa0b8' }}>🍎 <strong style={{ color: '#e8eaf0' }}>Spuntino:</strong> {oggi.spuntino}</div>
      </Card>
    </div>
  );
}

// ============================================================
// TAB: CIBI
// ============================================================
function TabCibi({ activeUser }) {
  const [section, setSection] = useState('si');

  const sections = [
    { id: 'si', label: '✅ Sì', color: '#34d399' },
    { id: 'attenzione', label: '⚠️ Attenzione', color: '#fbbf24' },
    { id: 'no', label: '❌ Evitare', color: '#f87171' },
  ];

  return (
    <div style={{ padding: '16px 16px 100px' }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
        {sections.map(s => (
          <button key={s.id} onClick={() => setSection(s.id)} style={{
            flex: 1, padding: '10px 4px', borderRadius: 12,
            border: `1.5px solid ${section === s.id ? s.color : '#2e3448'}`,
            background: section === s.id ? `${s.color}15` : '#1e2330',
            color: section === s.id ? s.color : '#5c6480',
            fontSize: 11, fontWeight: 600,
          }}>
            {s.label}
          </button>
        ))}
      </div>

      {section === 'si' && (
        <>
          <SectionTitle accent="#34d399">✅ Cibi Consigliati — Entrambi</SectionTitle>
          {CIBI.condivisi_si.map((c, i) => (
            <Card key={i} style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>{c.icona}</span>
              <div>
                <div style={{ fontWeight: 600, color: '#e8eaf0', fontSize: 13 }}>{c.nome}</div>
                <div style={{ fontSize: 11, color: '#9aa0b8', marginTop: 2 }}>{c.motivo}</div>
              </div>
            </Card>
          ))}
        </>
      )}

      {section === 'attenzione' && (
        <>
          {(activeUser === 'fra' || activeUser === 'entrambi') && (
            <>
              <SectionTitle accent="#c084fc">👩 Fra — Attenzione</SectionTitle>
              {CIBI.fra_attenzione.filter(c => c.level === 'attenzione').map((c, i) => (
                <Card key={i} style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 10, borderColor: '#78350f' }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{c.icona}</span>
                  <div>
                    <div style={{ fontWeight: 600, color: '#fbbf24', fontSize: 13 }}>{c.nome}</div>
                    <div style={{ fontSize: 11, color: '#9aa0b8', marginTop: 2 }}>{c.motivo}</div>
                  </div>
                </Card>
              ))}
            </>
          )}
          {(activeUser === 'max' || activeUser === 'entrambi') && (
            <>
              <SectionTitle accent="#4f8ef7">👨 Max — Attenzione</SectionTitle>
              {CIBI.max_attenzione.filter(c => c.level === 'attenzione').map((c, i) => (
                <Card key={i} style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 10, borderColor: '#78350f' }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{c.icona}</span>
                  <div>
                    <div style={{ fontWeight: 600, color: '#fbbf24', fontSize: 13 }}>{c.nome}</div>
                    <div style={{ fontSize: 11, color: '#9aa0b8', marginTop: 2 }}>{c.motivo}</div>
                  </div>
                </Card>
              ))}
            </>
          )}
        </>
      )}

      {section === 'no' && (
        <>
          <SectionTitle accent="#f87171">❌ Stop — Entrambi</SectionTitle>
          {CIBI.entrambi_stop.map((c, i) => (
            <Card key={i} style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 10, borderColor: '#7f1d1d' }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>{c.icona}</span>
              <div>
                <div style={{ fontWeight: 600, color: '#f87171', fontSize: 13 }}>{c.nome}</div>
                <div style={{ fontSize: 11, color: '#9aa0b8', marginTop: 2 }}>{c.motivo}</div>
              </div>
            </Card>
          ))}

          {(activeUser === 'fra' || activeUser === 'entrambi') && (
            <>
              <SectionTitle accent="#c084fc">👩 Fra — Stop</SectionTitle>
              {CIBI.fra_attenzione.filter(c => c.level === 'stop').map((c, i) => (
                <Card key={i} style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 10, borderColor: '#7f1d1d' }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{c.icona}</span>
                  <div>
                    <div style={{ fontWeight: 600, color: '#f87171', fontSize: 13 }}>{c.nome}</div>
                    <div style={{ fontSize: 11, color: '#9aa0b8', marginTop: 2 }}>{c.motivo}</div>
                  </div>
                </Card>
              ))}
            </>
          )}

          {(activeUser === 'max' || activeUser === 'entrambi') && (
            <>
              <SectionTitle accent="#4f8ef7">👨 Max — Stop</SectionTitle>
              {CIBI.max_attenzione.filter(c => c.level === 'stop').map((c, i) => (
                <Card key={i} style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 10, borderColor: '#7f1d1d' }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{c.icona}</span>
                  <div>
                    <div style={{ fontWeight: 600, color: '#f87171', fontSize: 13 }}>{c.nome}</div>
                    <div style={{ fontSize: 11, color: '#9aa0b8', marginTop: 2 }}>{c.motivo}</div>
                  </div>
                </Card>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}

// ============================================================
// TAB: INTEGRATORI
// ============================================================
function TabIntegratori({ activeUser }) {
  const prioritaColors = { critica: '#f87171', alta: '#fbbf24', media: '#34d399' };
  const prioritaBg = { critica: '#7f1d1d33', alta: '#78350f33', media: '#06503433' };

  const renderList = (list, userColor) => list.map((item, i) => (
    <Card key={i} style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
        <div style={{ fontWeight: 700, color: '#e8eaf0', fontSize: 14, flex: 1 }}>{item.nome}</div>
        <span style={{
          fontSize: 9, fontWeight: 700, padding: '3px 8px', borderRadius: 10,
          background: prioritaBg[item.priorita], color: prioritaColors[item.priorita],
          textTransform: 'uppercase', flexShrink: 0, marginLeft: 8,
        }}>
          {item.priorita}
        </span>
      </div>
      <div style={{ fontSize: 12, color: '#9aa0b8', marginBottom: 6 }}>{item.perche}</div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 11, color: '#2dd4bf', background: '#0d3333', padding: '3px 8px', borderRadius: 8 }}>
          ⏰ {item.quando}
        </span>
        {item.brand && (
          <span style={{ fontSize: 11, color: '#5c6480', background: '#1a1e28', padding: '3px 8px', borderRadius: 8 }}>
            🏷️ {item.brand}
          </span>
        )}
      </div>
    </Card>
  ));

  return (
    <div style={{ padding: '16px 16px 100px' }}>
      <Card style={{ background: '#1a1e28', marginBottom: 16 }}>
        <div style={{ fontSize: 11, color: '#fb923c', fontWeight: 600, marginBottom: 4 }}>⚠️ Nota Importante</div>
        <div style={{ fontSize: 11, color: '#5c6480' }}>Consultare sempre il medico prima di iniziare qualsiasi protocollo di integrazione, specialmente in presenza di farmaci come statine o levotiroxina.</div>
      </Card>

      {(activeUser === 'max' || activeUser === 'entrambi') && (
        <>
          <SectionTitle accent="#4f8ef7">👨 Massimo — Integratori</SectionTitle>
          {renderList(INTEGRATORI.max, '#4f8ef7')}
        </>
      )}

      {(activeUser === 'fra' || activeUser === 'entrambi') && (
        <>
          <SectionTitle accent="#c084fc">👩 Franca — Integratori</SectionTitle>
          {renderList(INTEGRATORI.fra, '#c084fc')}
        </>
      )}
    </div>
  );
}

// ============================================================
// TAB: LIFESTYLE
// ============================================================
function TabLifestyle({ activeUser }) {
  const [section, setSection] = useState('giornata');

  return (
    <div style={{ padding: '16px 16px 100px' }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
        {[
          { id: 'giornata', label: '🕐 Giornata' },
          { id: 'allenamento', label: '💪 Sport' },
        ].map(s => (
          <button key={s.id} onClick={() => setSection(s.id)} style={{
            flex: 1, padding: '10px', borderRadius: 12,
            border: `1.5px solid ${section === s.id ? '#4f8ef7' : '#2e3448'}`,
            background: section === s.id ? '#4f8ef722' : '#1e2330',
            color: section === s.id ? '#4f8ef7' : '#5c6480', fontSize: 12, fontWeight: 600,
          }}>
            {s.label}
          </button>
        ))}
      </div>

      {section === 'giornata' && (
        <>
          {[
            { label: '🌅 Mattina', items: STILE_VITA.mattina },
            { label: '☀️ Pomeriggio', items: STILE_VITA.giorno },
            { label: '🌙 Sera', items: STILE_VITA.sera },
          ].map(({ label, items }) => (
            <div key={label}>
              <SectionTitle>{label}</SectionTitle>
              {items.map((item, i) => {
                if (activeUser !== 'entrambi' && item.chi !== 'entrambi' && item.chi !== activeUser) return null;
                return (
                  <Card key={i} style={{ marginBottom: 10, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ flexShrink: 0, textAlign: 'center' }}>
                      <div style={{ fontSize: 20 }}>{item.icona}</div>
                      <div style={{ fontSize: 9, color: '#5c6480', marginTop: 2 }}>{item.ora}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, color: '#e8eaf0', fontSize: 13, marginBottom: 4 }}>{item.azione}</div>
                      <div style={{ fontSize: 11, color: '#9aa0b8' }}>{item.dettaglio}</div>
                      {item.chi !== 'entrambi' && (
                        <span style={{
                          display: 'inline-block', marginTop: 6, fontSize: 9, padding: '2px 8px', borderRadius: 10,
                          background: item.chi === 'max' ? '#1a3a6e33' : '#3b1a5e33',
                          color: item.chi === 'max' ? '#4f8ef7' : '#c084fc',
                        }}>
                          {item.chi === 'max' ? '👨 Solo Max' : '👩 Solo Fra'}
                        </span>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          ))}
        </>
      )}

      {section === 'allenamento' && (
        <>
          {(activeUser === 'max' || activeUser === 'entrambi') && (
            <>
              <SectionTitle accent="#4f8ef7">👨 Massimo — Allenamento</SectionTitle>
              {STILE_VITA.allenamento.max.map((item, i) => (
                <Card key={i} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 13, color: '#c0c6d8' }}>{item}</div>
                </Card>
              ))}
            </>
          )}
          {(activeUser === 'fra' || activeUser === 'entrambi') && (
            <>
              <SectionTitle accent="#c084fc">👩 Franca — Allenamento</SectionTitle>
              {STILE_VITA.allenamento.fra.map((item, i) => (
                <Card key={i} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 13, color: '#c0c6d8' }}>{item}</div>
                </Card>
              ))}
            </>
          )}

          <Card style={{ background: '#1a1e28', marginTop: 8 }}>
            <div style={{ fontSize: 11, color: '#34d399', fontWeight: 600, marginBottom: 6 }}>🎯 Regola d'oro per entrambi</div>
            <div style={{ fontSize: 12, color: '#9aa0b8' }}>
              <strong style={{ color: '#e8eaf0' }}>Zona 2</strong> = camminata veloce o ciclismo dove riesci a parlare ma fai un po' fatica. Brucio grassi, migliora glicemia, riduce infiammazione.
            </div>
          </Card>
        </>
      )}
    </div>
  );
}

// ============================================================
// TAB: CHECKLIST
// ============================================================
function TabChecklist({ activeUser }) {
  const todayKey = getTodayKey();
  const [checks, setChecks] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const docRef = doc(db, 'maxfra_checklist', todayKey);
        const snap = await getDoc(docRef);
        if (snap.exists()) setChecks(snap.data().checks || {});
      } catch (e) { console.error(e); }
      setLoading(false);
    };
    load();
  }, [todayKey]);

  const toggle = async (id) => {
    const newChecks = { ...checks, [id]: !checks[id] };
    setChecks(newChecks);
    try {
      await setDoc(doc(db, 'maxfra_checklist', todayKey), { checks: newChecks, date: todayKey });
    } catch (e) { console.error(e); }
  };

  const allItems = [
    ...CHECKLIST_ITEMS.entrambi.map(i => ({ ...i, chi: 'entrambi' })),
    ...(activeUser !== 'fra' ? CHECKLIST_ITEMS.max.map(i => ({ ...i, chi: 'max' })) : []),
    ...(activeUser !== 'max' ? CHECKLIST_ITEMS.fra.map(i => ({ ...i, chi: 'fra' })) : []),
  ].filter(i => activeUser === 'entrambi' || i.chi === 'entrambi' || i.chi === activeUser);

  const done = allItems.filter(i => checks[`${activeUser}_${i.id}`]).length;
  const total = allItems.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  if (loading) return <div style={{ padding: 32, textAlign: 'center', color: '#5c6480' }}>Caricamento...</div>;

  return (
    <div style={{ padding: '16px 16px 100px' }}>
      {/* Progress */}
      <Card style={{ marginBottom: 20, textAlign: 'center' }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, color: pct === 100 ? '#34d399' : '#4f8ef7', marginBottom: 4 }}>
          {pct}%
        </div>
        <div style={{ fontSize: 12, color: '#5c6480', marginBottom: 12 }}>{done}/{total} completati oggi</div>
        <div style={{ background: '#13161e', borderRadius: 20, height: 6, overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: 20,
            background: pct === 100 ? '#34d399' : 'linear-gradient(90deg, #4f8ef7, #c084fc)',
            width: `${pct}%`, transition: 'width 0.4s ease',
          }} />
        </div>
        {pct === 100 && <div style={{ marginTop: 10, fontSize: 13, color: '#34d399' }}>🎉 Perfetto! Giornata completata!</div>}
      </Card>

      <div style={{ fontSize: 11, color: '#5c6480', marginBottom: 4 }}>
        {new Date().toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long' })}
      </div>

      <SectionTitle>✅ Checklist Giornaliera</SectionTitle>

      {/* Comune */}
      {CHECKLIST_ITEMS.entrambi.map(item => (
        <CheckItem key={item.id} item={item} id={`${activeUser}_${item.id}`} checked={!!checks[`${activeUser}_${item.id}`]} onToggle={toggle} color="#34d399" />
      ))}

      {(activeUser === 'max' || activeUser === 'entrambi') && (
        <>
          <SectionTitle accent="#4f8ef7">👨 Solo Massimo</SectionTitle>
          {CHECKLIST_ITEMS.max.map(item => (
            <CheckItem key={item.id} item={item} id={`${activeUser}_${item.id}`} checked={!!checks[`${activeUser}_${item.id}`]} onToggle={toggle} color="#4f8ef7" />
          ))}
        </>
      )}

      {(activeUser === 'fra' || activeUser === 'entrambi') && (
        <>
          <SectionTitle accent="#c084fc">👩 Solo Franca</SectionTitle>
          {CHECKLIST_ITEMS.fra.map(item => (
            <CheckItem key={item.id} item={item} id={`${activeUser}_${item.id}`} checked={!!checks[`${activeUser}_${item.id}`]} onToggle={toggle} color="#c084fc" />
          ))}
        </>
      )}
    </div>
  );
}

function CheckItem({ item, id, checked, onToggle, color }) {
  return (
    <button onClick={() => onToggle(id)} style={{
      width: '100%', background: checked ? `${color}11` : '#1e2330',
      border: `1.5px solid ${checked ? color : '#2e3448'}`,
      borderRadius: 14, padding: '12px 14px', marginBottom: 8,
      display: 'flex', alignItems: 'center', gap: 12,
      transition: 'all 0.2s', cursor: 'pointer',
    }}>
      <div style={{
        width: 24, height: 24, borderRadius: 8, flexShrink: 0,
        background: checked ? color : 'transparent',
        border: `2px solid ${checked ? color : '#2e3448'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.2s',
      }}>
        {checked && <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>}
      </div>
      <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icona}</span>
      <span style={{
        fontSize: 13, color: checked ? color : '#9aa0b8',
        textDecoration: checked ? 'line-through' : 'none',
        textAlign: 'left', lineHeight: 1.3,
        transition: 'color 0.2s',
      }}>
        {item.label}
      </span>
    </button>
  );
}

// ============================================================
// APP ROOT
// ============================================================
export default function App() {
  const [tab, setTab] = useState('home');
  const [activeUser, setActiveUser] = useState('entrambi');

  const renderTab = () => {
    switch (tab) {
      case 'home': return <TabHome activeUser={activeUser} />;
      case 'menu': return <TabMenu activeUser={activeUser} />;
      case 'cibi': return <TabCibi activeUser={activeUser} />;
      case 'integratori': return <TabIntegratori activeUser={activeUser} />;
      case 'lifestyle': return <TabLifestyle activeUser={activeUser} />;
      case 'checklist': return <TabChecklist activeUser={activeUser} />;
      default: return <TabHome activeUser={activeUser} />;
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', minHeight: '100vh' }}>
      <Header activeUser={activeUser} setActiveUser={setActiveUser} />
      <main style={{ minHeight: 'calc(100vh - 60px)' }}>
        {renderTab()}
      </main>
      <Nav tab={tab} setTab={setTab} />
    </div>
  );
}
