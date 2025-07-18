// Script per testare i cookie su www.google.com
// Incolla questo codice nella console di Chrome/Firefox quando sei su google.com

console.log("=== GESTIONE COOKIE SU GOOGLE.COM ===");

// 1. Visualizzare tutti i cookie presenti
function visualizzaCookieGoogle() {
    console.log("\n--- COOKIE ESISTENTI ---");
    if (document.cookie === "") {
        console.log("Nessun cookie trovato");
        return;
    }
    
    const cookies = document.cookie.split(';');
    cookies.forEach((cookie, index) => {
        const [nome, valore] = cookie.split('=');
        console.log(`${index + 1}. ${nome.trim()}: ${valore ? decodeURIComponent(valore) : 'undefined'}`);
    });
}

// 2. Aggiungere un cookie di test
function aggiungiCookieTest() {
    const nome = "test_cookie";
    const valore = "test_value_" + Date.now();
    const giorni = 1;
    
    // Calcola data di scadenza
    const dataScadenza = new Date();
    dataScadenza.setTime(dataScadenza.getTime() + (giorni * 24 * 60 * 60 * 1000));
    
    // Crea il cookie
    const cookieString = `${nome}=${encodeURIComponent(valore)}; expires=${dataScadenza.toUTCString()}; path=/; SameSite=Lax`;
    
    document.cookie = cookieString;
    console.log(`✅ Cookie aggiunto: ${cookieString}`);
}

// 3. Leggere un cookie specifico
function leggiCookieSpecifico(nomeCookie) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [nome, valore] = cookie.split('=');
        if (nome.trim() === nomeCookie) {
            return decodeURIComponent(valore);
        }
    }
    return null;
}

// 4. Eliminare un cookie
function eliminaCookieTest(nomeCookie) {
    document.cookie = `${nomeCookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    console.log(`🗑️ Cookie "${nomeCookie}" eliminato`);
}

// 5. Monitorare i cookie in tempo reale
function monitoraCookie() {
    console.log("🔍 Monitoraggio cookie attivo...");
    setInterval(() => {
        const numeroCookie = document.cookie.split(';').filter(c => c.trim()).length;
        console.log(`📊 Cookie attuali: ${numeroCookie}`);
    }, 5000);
}

// ESECUZIONE AUTOMATICA
console.log("📋 Comandi disponibili:");
console.log("• visualizzaCookieGoogle() - Mostra tutti i cookie");
console.log("• aggiungiCookieTest() - Aggiunge un cookie di test");
console.log("• leggiCookieSpecifico('nome') - Legge un cookie specifico");
console.log("• eliminaCookieTest('nome') - Elimina un cookie");
console.log("• monitoraCookie() - Monitora i cookie ogni 5 secondi");

// Visualizza automaticamente i cookie esistenti
visualizzaCookieGoogle();

// Esempio di utilizzo:
// aggiungiCookieTest();
// setTimeout(() => visualizzaCookieGoogle(), 1000);
