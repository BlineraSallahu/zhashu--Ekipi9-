
/**
 * =========================================================================
 * BACKEND SERVER - SISTEMI PËR REZERVIME MJEKËSORE (KLINIKA)
 * =========================================================================
 * Ky skedar (server.js) është pika kryesore e hyrjes (Entry Point) për
 * aplikacionin backend të klinikës.
 * 
 * Përgjegjësitë kryesore të këtij serveri përfshijnë:
 * 1. Inicializimin e serverit HTTP (p.sh., duke përdorur Express.js).
 * 2. Lidhjen me bazën e të dhënave (p.sh., MongoDB ose MySQL) për të ruajtur:
 *    - Të dhënat e pacientëve dhe mjekëve.
 *    - Terminet dhe historikun e rezervimeve.
 * 3. Menaxhimin e rrugëve (Routes) për API-të:
 *    - Autentifikimi (Login/Register për pacientë dhe staf).
 *    - Krijimi, leximi, përditësimi dhe fshirja (CRUD) e rezervimeve.
 * 4. Konfigurimin e Middleware-ve (CORS për lidhjen me Frontend-in, etj.).
 */
