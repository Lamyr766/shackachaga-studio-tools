

// ══════════════════════════════════════════════════
// COMPLETE BILINGUAL TRANSLATION SYSTEM
// ══════════════════════════════════════════════════
// ══════════════════════════════════════════════════
// ADMIN ACCESS CONTROL
// ══════════════════════════════════════════════════
var ADMIN_USERS = ['thebigjay766@gmail.com','matg32_@hotmail.com','claude@anthropic.com'];

// Admin-only tabs (hidden for regular employees)
var ADMIN_TABS = ['tab-revenue','tab-post','tab-team','tab-map','tab-roster','tab-intake'];

function isAdmin(email) {
  var e = (email || currentUserEmail || '').toLowerCase().trim();
  return ADMIN_USERS.some(function(a){ return a.toLowerCase() === e; });
}

function applyTabVisibility() {
  var admin = isAdmin();
  ADMIN_TABS.forEach(function(tabId) {
    var el = document.getElementById(tabId);
    if (el) el.style.display = admin ? '' : 'none';
  });
}


var T = {
  en: {
    // Nav
    nav_quote: '💰 Quote', nav_projects: '📋 Projects', nav_intake: '📝 Intake',
    nav_clients: '👥 Clients', nav_time: '⏱️ Time', nav_revenue: '📊 Revenue',
    nav_wood: '🌲 Wood Stock', nav_post: '✨ Post Gen',
    // Auth
    login_subtitle: 'Studio Tools — Sign in to continue',
    login_email: 'Email', login_password: 'Password',
    login_btn: 'Sign In', login_forgot: 'Forgot password?', login_change: 'Change server',
    login_reset_label: 'Enter your email to receive a reset link:',
    login_reset_send: 'Send', logout_btn: 'Sign out',
    // Quote
    quote_title: 'Quote Calculator',
    quote_sub: 'Instant pricing with QC taxes. Save directly as a project.',
    quote_type: 'Project Type', quote_type_default: '— Select —',
    quote_client: 'Client Name', quote_wood_species: 'Wood Species',
    quote_materials: 'Materials ($)', quote_epoxy: 'Epoxy / Hardware ($)',
    quote_delivery: 'Delivery ($)', quote_hours: 'Hours Est.',
    quote_rate: 'Rate ($/h)', quote_complexity: 'Complexity',
    quote_complexity_standard: 'Standard', quote_complexity_mod: 'Moderate +10%',
    quote_complexity_complex: 'Complex +25%', quote_complexity_very: 'Very complex +40%',
    quote_overhead: 'Overhead %', quote_margin: 'Margin %',
    quote_calc_btn: '⚡ Calculate Quote',
    quote_save: '💾 Save as Project', quote_copy: '📋 Copy Summary',
    quote_min: 'Minimum price floor', quote_suggested: 'Suggested price',
    quote_deposit: '50% deposit', quote_gst: '+ GST (5%)', quote_qst: '+ QST (9.975%)',
    quote_total_tax: 'Total with taxes',
    quote_materials_label: 'Materials (incl. wood factor)',
    quote_labour_label: 'Labour', quote_overhead_label: 'Overhead',
    quote_margin_label: 'Profit margin', quote_delivery_label: 'Delivery',
    // Dashboard
    dash_title: 'Projects', dash_new: '+ New',
    stat_total: 'Total', stat_active: 'Active', stat_due: 'Bal. Due', stat_revenue: 'Revenue',
    filter_all: 'All Statuses', filter_new: 'New', filter_quote: 'Quote Sent',
    filter_active: 'Fabrication', filter_finish: 'Finishing',
    filter_ready: 'Ready', filter_done: 'Delivered',
    search_placeholder: 'Search...',
    status_new: 'New', status_quote: 'Quote Sent', status_active: 'Fabrication',
    status_finish: 'Finishing', status_ready: 'Ready', status_done: 'Delivered',
    proj_amount: 'Amount', proj_paid: 'paid', proj_review: 'Review ✓',
    proj_save: '✅ Save', proj_duplicate: '📋 Duplicate', proj_pdf: '🧾 PDF Quote',
    proj_delete: '🗑', proj_total: 'Total ($)', proj_balance: 'Balance ($)',
    proj_delivery: 'Target Delivery', proj_review_label: 'Review?',
    proj_status: 'Status', proj_notes: 'Notes',
    proj_add_note: 'Add Note / Interaction',
    note_type_label: 'Add interaction note...',
    note_add_btn: 'Add',
    // Intake
    intake_title: 'New Client Intake',
    intake_contact: 'A — Contact', intake_project: 'B — Project', intake_budget: 'C — Budget & Timeline',
    intake_fn: 'First Name', intake_ln: 'Last Name', intake_email: 'Email',
    intake_phone: 'Phone', intake_city: 'City', intake_source: 'Found us via',
    intake_pieces: 'Piece Type(s)', intake_dims: 'Dimensions', intake_wood: 'Wood Species',
    intake_style: 'Style / Finish', intake_vision: 'Vision Description',
    intake_budget_label: 'Budget Range', intake_timeline: 'Timeline',
    intake_deadline: 'Important Deadline', intake_amount: 'Quoted Amount ($)',
    intake_notes: 'Notes', intake_save: '✅ Save & Create Project',
    // Clients
    clients_title: 'Clients', clients_add: '+ Add Client',
    clients_search: 'Search clients by name, email, city...',
    cs_total: 'Clients', cs_revenue: 'Total Revenue', cs_repeat: 'Repeat Clients',
    client_spent: 'Spent', client_projects: 'Projects',
    client_fn: 'First Name', client_ln: 'Last Name',
    client_found: 'Found via', client_wood: 'Preferred Wood',
    client_notes: 'Notes', client_save: '✅ Save Client', client_delete: '🗑 Delete',
    // Time
    time_title: 'Time Tracker',
    time_clock_title: 'Clock In / Out',
    time_loc_shop: '🏭 Shop', time_loc_travel: '🚗 Travel', time_loc_onsite: '🏗️ On-site',
    time_project: 'Link to Project (optional)', time_notes: 'Notes',
    time_clock_in: '▶ Clock In', time_clock_out: '⏹ Clock Out',
    time_today: "Today's Time Logs",
    stat_shop: 'Shop', stat_travel: 'Travel', stat_onsite: 'On-site', stat_total_t: 'Total',
    time_all: 'All Users — This Week', time_filter: 'Last 7 days',
    // Revenue
    rev_title: 'Revenue',
    rv_ytd: 'YTD Revenue', rv_collected: 'Collected', rv_outstanding: 'Outstanding', rv_projects: 'Delivered',
    rev_monthly: 'Monthly Revenue',
    rev_monthly_sub: 'Green = collected · Tan = outstanding balance',
    rev_legend_collected: 'Collected', rev_legend_outstanding: 'Outstanding',
    rev_by_type: 'Revenue by Project Type',
    rev_top_clients: 'Top Clients by Revenue',
    // Wood
    wood_title: 'Wood & Material Stock', wood_add: '+ Add',
    ws_items: 'Items', ws_value: 'Stock Value', ws_low: 'Low Stock',
    wood_species: 'Species / Material Name',
    wood_species_placeholder: 'e.g. Ambrosia Maple Slab, Blue Epoxy, Hardware Kit',
    wood_grade: 'Grade / Description', wood_supplier: 'Supplier',
    wood_qty: 'Quantity', wood_unit: 'Unit', wood_cost: 'Cost per Unit ($)',
    wood_notes: 'Notes', wood_save: '✅ Save Material', wood_delete: '🗑 Delete',
    wm_add_title: 'Add / Edit Material',
    // Post Gen
    post_title: 'Post Generator',
    post_card_title: 'Bilingual Caption — Claude AI',
    post_card_sub: 'Generates a ready-to-post EN + FR caption with hashtags in seconds.',
    post_subject: 'Subject', post_tone: 'Tone', post_detail: 'Extra detail (optional)',
    post_detail_placeholder: 'e.g. teal river, Father\'s Day, floating shelf...',
    post_platform: 'Platform',
    post_gen_btn: '✨ Generate Caption',
    post_regen: '🔄 Regenerate', post_save: '💾 Save Caption',
    post_saved_title: 'Saved Captions',
    // Overdue
    overdue_msg: 'project is overdue', overdue_msg_pl: 'projects are overdue',
    // Empty states
    empty_projects: 'No projects yet. Start with an intake.',
    empty_no_match: 'No matches.',
    empty_wood: 'No materials tracked yet. Add wood slabs, epoxy, hardware and more.',
    empty_time: 'No sessions today.',
    empty_posts: 'No results found',
    // Sync
    sync_live: 'Live sync', sync_connecting: 'Connecting...', sync_signed_out: currentLang==='fr'?'Veuillez vous connecter':'Please sign in',
    // ── Protective features ──────────────────────
    prot_assigned_to: 'Assigned To',
    prot_referred_by: 'Referred By',
    prot_client_source: 'How Did They Find Us?',
    prot_source_instagram: 'Instagram',
    prot_source_facebook: 'Facebook',
    prot_source_google: 'Google Search',
    prot_source_referral: 'Client Referral',
    prot_source_wordofmouth: 'Word of Mouth',
    prot_source_signage: 'Signage / Drive-by',
    prot_source_website: 'Website',
    prot_source_other: 'Other',
    prot_interaction_type: 'Interaction Type',
    prot_itype_call: 'Phone Call',
    prot_itype_visit: 'Client Visit',
    prot_itype_meeting: 'On-site Meeting',
    prot_itype_email: 'Email',
    prot_itype_quote: 'Quote Presented',
    prot_itype_followup: 'Follow-up',
    prot_itype_other: 'Other',
    prot_log_interaction: 'Log Interaction',
    prot_add_interaction: '+ Log Interaction',
    prot_interaction_history: 'Interaction History',
    prot_no_interactions: 'No interactions logged yet.',
    prot_quote_audit: 'Quote Audit',
    prot_created_by: 'Created By',
    prot_quote_log_title: 'Quote Audit Log',
    prot_gps_anomaly: '🚩 GPS Anomaly',
    prot_gps_unknown_loc: 'Unknown location during work hours',
    prot_revenue_per_emp: 'Revenue by Employee',
    prot_emp_dashboard: 'Employee Dashboard',
    prot_contract_notice: 'No employment contract on file',
    // ── Map page ─────────────────────────────────
    map_team_status: 'Team Status',
    map_time_summary: 'Time Summary — Today',
    map_gps_log: 'GPS Log — All Users Today',
    map_all_members: 'All Team Members',
    map_last_update: 'Updated:',
    map_no_gps: 'No GPS data yet',
    // ── Team panel ────────────────────────────────
    team_your_loc: 'Your Location',
    team_locations: 'Team Locations',
    team_gps_history: 'GPS History — Today',
    team_calls_title: 'Voice & Video Calls',
    team_calls_sub: 'Tap a team member to start a call. Both must have the app open.',
    team_update_loc: 'Update Location',
    team_no_members: 'No team members visible',
    team_no_clockins: 'No clock-ins today',
    team_gps_loading: 'Loading team positions...',
    team_calls_loading: 'Loading team members...',
    team_chat_empty: 'No messages yet. Say hello!',
    team_online: 'online',
    // ── Voice messages ────────────────────────────
    voice_hold: 'Tap to record, tap again to send',
    voice_recording: '🔴 Recording...',
    voice_sending: 'Sending...',
    voice_sent: '🎙️ Voice message sent!',
    voice_denied: 'Mic denied',
    voice_unavailable: 'Audio not available (live only)',
    voice_incoming: 'sent a voice message',
    // ── GPS / Time tracker ────────────────────────
    gps_getting: currentLang==='fr'?'📍 Localisation...':'📍 Getting GPS...',
    gps_unavailable: '⚠️ GPS not available',
    gps_denied: '⚠️ GPS denied — manual type set',
    gps_updated: '📍 Location updated!',
    time_clock_in: '▶ Clock In',
    time_clock_out: '⏹ Clock Out',
    time_shop: '🏭 Shop',
    time_travel: '🚗 Travel',
    time_onsite: '🏗️ On-site',
    // ── Map tab ───────────────────────────────────
    nav_map: '🗺️ Map',
    // ── Misc missing ──────────────────────────────
    misc_collected: 'Collected',
    misc_outstanding: 'Outstanding',
    misc_ytd: 'YTD Revenue',
    misc_total_revenue: 'Total Revenue',
    misc_repeat_clients: 'Repeat Clients',
    misc_low_stock: 'Low Stock',
    misc_stock_value: 'Stock Value',
    misc_bal_due: 'Bal. Due',
    misc_items: 'Items',
    misc_all_statuses: 'All Statuses',
    misc_sign_in: 'Sign In',
    misc_sign_out: 'Sign out',
    misc_forgot_pw: 'Forgot password?',
    misc_change_server: 'Change server',
    misc_send: 'Send',
    misc_copy: 'Copy',
    misc_unknown: 'Unknown',
    misc_loading_proj: 'Loading projects...',
    misc_swipe: '← SWIPE FOR MORE TABS →',
    misc_sql_setup: 'SQL Setup Script:',
    misc_step1: 'Step 1', misc_step2: 'Step 2', misc_step3: 'Step 3',
    misc_enter_email_reset: 'Enter your email to receive a reset link:',
    misc_add_edit_material: 'Add / Edit Material',
    misc_add_wood_desc: 'Add wood slabs, epoxy, hardware and more.',
    misc_clients_desc: 'Clients are added automatically from intake forms, or add manually.',
    misc_gen_caption: '✨ Generate Caption',
    misc_calculate_quote: '⚡ Calculate Quote',
    misc_save_create: '✅ Save & Create Project',
    misc_clock_in_btn: '▶ Clock In',
    misc_delete_btn: '🗑 Delete',

    lbl_first_name: 'First Name', lbl_last_name: 'Last Name', lbl_email: 'Email',
    lbl_password: 'Password', lbl_phone: 'Phone', lbl_city: 'City',
    lbl_found_via: 'Found us via', lbl_piece_types: 'Piece Type(s)',
    lbl_dimensions: 'Dimensions', lbl_wood_species: 'Wood Species',
    lbl_style_finish: 'Style / Finish', lbl_vision: 'Vision Description',
    lbl_budget_range: 'Budget Range', lbl_timeline: 'Timeline',
    lbl_deadline: 'Important Deadline', lbl_quoted_amount: 'Quoted Amount ($)',
    lbl_notes: 'Notes', lbl_project_type: 'Project Type', lbl_client_name: 'Client Name',
    lbl_materials: 'Materials ($)', lbl_epoxy_hw: 'Epoxy / Hardware ($)',
    lbl_delivery_cost: 'Delivery ($)', lbl_hours: 'Hours Est.', lbl_rate: 'Rate ($/h)',
    lbl_complexity: 'Complexity', lbl_overhead: 'Overhead %', lbl_margin: 'Margin %',
    lbl_species_name: 'Species / Material Name', lbl_grade: 'Grade / Description',
    lbl_supplier: 'Supplier', lbl_quantity: 'Quantity', lbl_unit: 'Unit',
    lbl_cost_unit: 'Cost per Unit ($)', lbl_loc_type: 'Location Type',
    lbl_link_project: 'Link to Project (optional)', lbl_platform: 'Platform',
    lbl_subject: 'Subject', lbl_tone: 'Tone', lbl_extra_detail: 'Extra detail (optional)',
    lbl_found_via2: 'Found via', lbl_pref_wood: 'Preferred Wood',
    cb_dining: 'Dining table', cb_coffee: 'Coffee table', cb_sink: 'Wood sink',
    cb_vanity: 'Vanity', cb_desk: 'Desk', cb_staircase: 'Staircase',
    cb_art: 'Art piece', cb_other: 'Other', cb_rustic: 'Rustic', cb_modern: 'Modern',
    cb_liveedge: 'Live edge', cb_epoxy: 'Epoxy', cb_raw: 'Raw solid wood',
    rb_instagram: 'Instagram', rb_facebook: 'Facebook', rb_both: 'Both',
    sub_quote: 'Instant pricing with QC taxes. Save directly as a project.',
    sub_post: 'Generates a ready-to-post EN + FR caption with hashtags in seconds.',
    sub_rev: 'Green = collected · Tan = outstanding balance',
    sub_time_user: 'Logged in as: —',
    sec_intake_a: 'A — Contact', sec_intake_b: 'B — Project', sec_intake_c: 'C — Budget & Timeline',
    sec_all_users: 'All Users — This Week', sec_today_logs: "Today's Time Logs",
    sec_saved_captions: 'Saved Captions', sec_quote_breakdown: 'Quote Breakdown',
    ph_dims: 'e.g. 72" x 36"', ph_vision: 'What the client is imagining...',
    ph_special: 'Special requests, notes...', ph_deadline: 'e.g. Christmas',
    ph_client: 'e.g. Marie L.', ph_grade: 'e.g. 4/4, 8ft slab, 1L can',
    ph_species: 'e.g. Ambrosia Maple Slab, Blue Epoxy, Hardware Kit',
    ph_supplier: 'e.g. Boisverco, Home Depot',
    ph_time_notes: 'e.g. Epoxy pour, client meeting, delivery...',
    ph_wood_notes: 'Dimensions, colour, project reserved for...',
    ph_first: 'Jean', ph_last: 'Tremblay', ph_city: 'Gatineau', ph_email: 'jean@email.com',
    btn_add_wood: '+ Add', btn_add_new: '+ New', btn_save_material: '✅ Save Material',
    btn_regen: '🔄 Regenerate', btn_save_caption: '💾 Save Caption',
    btn_save_proj: '💾 Save as Project', btn_copy_sum: '📋 Copy Summary',
    cb_art: 'Art piece',
    sec_quote_breakdown: 'Quote Breakdown',
    lbl_grade: 'Grade / Description',
    wood_grade: 'Grade / Description',
    dyn_paid: 'paid',
    dyn_review_done: 'Review ✓',
    dyn_no_projects: 'No projects yet. Start with an intake.',
    dyn_no_matches: 'No matches.',
    dyn_no_clients: 'No clients yet.',
    dyn_no_sessions: 'No sessions today.',
    dyn_no_time: 'No time logged this period.',
    dyn_no_delivered: 'No delivered projects yet.',
    dyn_no_results: 'No results found.',
    dyn_loading: currentLang==='fr'?'Chargement...':'Loading...',
    dyn_balance: 'Balance ($)',
    dyn_delivery: 'Target Delivery',
    dyn_review_q: 'Review?',
    dyn_status: 'Status',
    dyn_add_note: 'Add Note / Interaction',
    dyn_note_placeholder: 'Add interaction note...',
    dyn_proj_notes: 'Notes',
    dyn_projects_word: 'project(s)',
    dyn_shop: 'Shop', dyn_travel: 'Travel', dyn_onsite: 'On-site',
    dyn_today: 'Today',
    dyn_save: '✅ Save', dyn_next_status: '→',
    dyn_duplicate: '📋 Duplicate', dyn_pdf: '🧾 PDF Quote', dyn_delete: '🗑',
  },
    fr: {
    login_subtitle: 'Studio Tools — Connectez-vous pour continuer',
    nav_quote: '💰 Estimations',
    nav_projects: '📋 Projets',
    nav_intake: '📝 Accueil client',
    nav_clients: '👥 Clients',
    nav_time: '⏱️ Temps',
    nav_revenue: '📊 Revenus',
    nav_wood: '🌲 Matériaux',
    nav_post: '✨ Publications',
    nav_team: '👥 Équipe',
    nav_map: '🗺️ Carte',
    auth_title: 'Outils Studio',
    auth_sub: 'Outils Studio — Connexion requise',
    auth_email: 'Courriel',
    auth_password: 'Mot de passe',
    auth_sign_in: 'Se connecter',
    auth_forgot: 'Mot de passe oublié?',
    auth_reset_sent: 'Lien envoyé! Vérifiez votre courriel.',
    auth_error: 'Erreur de connexion. Vérifiez vos identifiants.',
    setup_title: 'Configuration requise',
    setup_sub: 'Entrez vos identifiants Supabase.',
    setup_url_label: 'URL du projet Supabase',
    setup_key_label: 'Clé anonyme Supabase',
    setup_connect: '✅ Connecter',
    setup_step1: 'Étape 1',
    setup_step2: 'Étape 2',
    setup_step3: 'Étape 3',
    quote_title: "Calculateur d'estimations",
    quote_calc_btn: "⚡ Calculer l'estimation",
    quote_save: '💾 Sauvegarder comme projet',
    quote_copy: '📋 Copier le résumé',
    quote_complexity_standard: 'Standard',
    quote_complexity_moderate: 'Modéré +10%',
    quote_complexity_complex: 'Complexe +25%',
    quote_complexity_very: 'Très complexe +40%',
    quote_overhead_label: 'Frais généraux',
    quote_margin_label: 'Marge',
    proj_title: 'Projets',
    proj_search: 'Rechercher des projets...',
    proj_filter_all: 'Tous les statuts',
    proj_new: '+ Nouveau',
    proj_total: 'Total ($)',
    proj_delete: '🗑',
    proj_notes: 'Notes',
    proj_add_note: '+ Ajouter une note',
    proj_note_ph: 'Ajouter une note...',
    proj_save: '✅ Sauvegarder',
    proj_dup: '📋 Dupliquer',
    proj_pdf: '🧾 Devis PDF',
    status_new: 'Nouveau',
    status_quote: 'Devis envoyé',
    status_active: 'Fabrication',
    status_finish: 'Finition',
    status_ready: 'Prêt',
    status_done: 'Livré',
    intake_title: 'Accueil client',
    intake_sub: "Formulaire d'accueil client",
    intake_contact: 'A — Contact',
    intake_project: 'B — Projet',
    intake_budget: 'C — Budget et délais',
    intake_dims: 'Dimensions',
    intake_notes: 'Notes',
    intake_save: '✅ Sauvegarder et créer un projet',
    clients_title: 'Clients',
    clients_search: 'Rechercher par nom, courriel, ville...',
    clients_add: '+ Ajouter un client',
    client_spent: 'Dépensé',
    client_projects: 'Projets',
    client_notes: 'Notes',
    time_title: 'Pointage',
    time_clock_in: "▶ Pointer l'entrée",
    time_clock_out: '⏹ Pointer la sortie',
    time_shop: '🏭 Atelier',
    time_travel: '🚗 Déplacement',
    time_onsite: '🏗️ Chantier',
    time_project: 'Associer à un projet (optionnel)',
    time_notes: 'Notes',
    time_today: "Pointages d'aujourd'hui",
    time_all: 'Tous les utilisateurs — Cette semaine',
    time_filter: '7 derniers jours',
    stat_shop: 'Atelier',
    stat_travel: 'Déplacement',
    stat_onsite: 'Chantier',
    stat_total: 'Total',
    stat_total_t: 'Total',
    rev_title: 'Revenus',
    rev_year: 'Année',
    rev_month: 'Mois',
    rev_collected: 'Encaissé',
    rev_outstanding: 'En attente',
    wood_title: 'Matériaux',
    wood_add: '+ Ajouter',
    wood_grade: 'Catégorie / Description',
    wood_notes: 'Notes',
    wood_save: '✅ Sauvegarder le matériau',
    wood_unit_bf: 'pieds de planche',
    post_title: 'Publications',
    post_gen: '✨ Générer une légende',
    post_regen: '🔄 Régénérer',
    post_save: '💾 Sauvegarder la légende',
    post_copy: 'Copier',
    sync_live: 'Synchronisé',
    sync_connecting: 'Connexion...',
    sync_signed_out: 'Veuillez vous connecter',
    empty_no_match: 'Aucun résultat.',
    empty_wood: "Aucun matériau suivi. Ajoutez du bois, de l'époxy, de la quincaillerie.",
    empty_time: "Aucune session aujourd'hui.",
    empty_posts: 'Aucun résultat',
    empty_projects: 'Aucun projet. Commencez par un accueil client.',
    dyn_paid: 'payé',
    dyn_review_done: 'Avis ✓',
    dyn_no_projects: 'Aucun projet. Commencez par un accueil client.',
    dyn_no_matches: 'Aucun résultat.',
    dyn_no_clients: 'Aucun client pour le moment.',
    dyn_no_sessions: "Aucune session aujourd'hui.",
    dyn_no_time: 'Aucune période enregistrée.',
    dyn_no_delivered: 'Aucun projet livré pour le moment.',
    dyn_no_results: 'Aucun résultat.',
    dyn_loading: 'Chargement...',
    dyn_balance: 'Solde ($)',
    dyn_delivery: 'Livraison prévue',
    dyn_review_q: 'Avis reçu?',
    dyn_status: 'Statut',
    dyn_add_note: 'Ajouter une note / interaction',
    dyn_note_placeholder: 'Ajouter une note...',
    dyn_proj_notes: 'Notes',
    dyn_projects_word: 'projet(s)',
    dyn_shop: 'Atelier',
    dyn_travel: 'Déplacement',
    dyn_onsite: 'Chantier',
    dyn_today: "Aujourd'hui",
    dyn_save: '✅ Sauvegarder',
    dyn_next_status: '→',
    dyn_duplicate: '📋 Dupliquer',
    dyn_pdf: '🧾 Devis PDF',
    dyn_delete: '🗑',
    dyn_14days: '14 derniers jours',
    dyn_30days: '30 derniers jours',
    lbl_first_name: 'Prénom',
    lbl_last_name: 'Nom de famille',
    lbl_email: 'Courriel',
    lbl_password: 'Mot de passe',
    lbl_phone: 'Téléphone',
    lbl_city: 'Ville',
    lbl_found_via: 'Trouvé via',
    lbl_piece_types: 'Type(s) de pièce',
    lbl_dimensions: 'Dimensions',
    lbl_wood_species: 'Essence de bois',
    lbl_style_finish: 'Style / Fini',
    lbl_vision: 'Description de la vision',
    lbl_budget_range: 'Budget',
    lbl_timeline: 'Délai',
    lbl_deadline: 'Date limite importante',
    lbl_quoted_amount: 'Montant estimé ($)',
    lbl_notes: 'Notes',
    lbl_project_type: 'Type de projet',
    lbl_client_name: 'Nom du client',
    lbl_materials: 'Matériaux ($)',
    lbl_epoxy_hw: 'Époxy / Quincaillerie ($)',
    lbl_delivery_cost: 'Livraison ($)',
    lbl_hours: 'Heures estimées',
    lbl_rate: 'Taux ($/h)',
    lbl_complexity: 'Complexité',
    lbl_overhead: 'Frais généraux %',
    lbl_margin: 'Marge %',
    lbl_species_name: 'Espèce / Nom du matériau',
    lbl_grade: 'Catégorie / Description',
    lbl_supplier: 'Fournisseur',
    lbl_quantity: 'Quantité',
    lbl_unit: 'Unité',
    lbl_cost_unit: 'Coût par unité ($)',
    lbl_loc_type: 'Type de localisation',
    lbl_link_project: 'Associer à un projet (optionnel)',
    lbl_platform: 'Plateforme',
    lbl_subject: 'Sujet',
    lbl_tone: 'Ton',
    lbl_extra_detail: 'Détail supplémentaire (optionnel)',
    lbl_found_via2: 'Trouvé via',
    lbl_pref_wood: 'Bois préféré',
    cb_dining: 'Table à manger',
    cb_coffee: 'Table basse',
    cb_sink: 'Évier en bois',
    cb_vanity: 'Vanité',
    cb_desk: 'Bureau',
    cb_staircase: 'Escalier',
    cb_art: "Pièce d'art",
    cb_other: 'Autre',
    cb_rustic: 'Rustique',
    cb_modern: 'Moderne',
    cb_liveedge: 'Bord vif',
    cb_epoxy: 'Époxy',
    cb_raw: 'Bois massif brut',
    rb_instagram: 'Instagram',
    rb_facebook: 'Facebook',
    rb_both: 'Les deux',
    sub_quote: 'Prix instantané avec taxes QC. Sauvegarder directement comme projet.',
    sub_post: 'Génère une légende EN + FR avec hashtags prête à publier en quelques secondes.',
    sub_rev: 'Vert = encaissé · Beige = solde en attente',
    sub_time_user: 'Connecté en tant que : —',
    sec_intake_a: 'A — Contact',
    sec_intake_b: 'B — Projet',
    sec_intake_c: 'C — Budget et délais',
    sec_all_users: 'Tous les utilisateurs — Cette semaine',
    sec_today_logs: "Pointages d'aujourd'hui",
    sec_saved_captions: 'Légendes sauvegardées',
    sec_quote_breakdown: "Détail de l'estimation",
    ph_dims: 'ex. 182 cm x 91 cm',
    ph_vision: 'Ce que le client imagine...',
    ph_special: 'Demandes spéciales, notes...',
    ph_deadline: 'ex. Noël',
    ph_client: 'ex. Marie L.',
    ph_grade: 'ex. 4/4, planche 8pi, cannette 1L',
    ph_species: 'ex. Planche érable moucheté, Époxy bleu, Quincaillerie',
    ph_supplier: 'ex. Boisverco, Home Depot',
    ph_time_notes: 'ex. Coulée époxy, rencontre client, livraison...',
    ph_wood_notes: 'Dimensions, couleur, projet réservé pour...',
    ph_first: 'Jean',
    ph_last: 'Tremblay',
    ph_city: 'Gatineau',
    ph_email: 'jean@courriel.com',
    ph_chat: 'Écrire un message...',
    btn_add_wood: '+ Ajouter',
    btn_add_new: '+ Nouveau',
    btn_save_material: '✅ Sauvegarder le matériau',
    btn_regen: '🔄 Régénérer',
    btn_save_caption: '💾 Sauvegarder la légende',
    btn_save_proj: '💾 Sauvegarder comme projet',
    btn_copy_sum: '📋 Copier le résumé',
    mat_title_tables: '📐 Dimensions standard — Sélectionnez une taille',
    mat_title_fbm: '🪵 Calculateur de bois — Pieds de planche (PMP)',
    mat_title_manual: '💰 Matériaux',
    lbl_fbm_formula: 'Formule: (Épaisseur × Largeur × Longueur) ÷ 144 = Pieds de planche',
    lbl_total_fbm: 'Total pieds de planche',
    lbl_mat_cost: 'Coût des matériaux estimé',
    lbl_mat_cost2: 'Coût des matériaux',
    lbl_cost_per_bf: 'Coût par PMP ($):',
    lbl_cost_per_bf2: 'Coût par PMP ($):',
    lbl_waste_pct: 'Déchet %:',
    lbl_waste_tip: '(incl. trait de scie et défauts)',
    lbl_fbm_needed: 'Pieds de planche requis (incl. 20% déchet)',
    lbl_custom_dims: 'Dimensions sur mesure:',
    lbl_bf_tip: 'Érable ~$6-8 · Noyer ~$12-18 · Pin ~$4-6',
    btn_add_board: '+ Ajouter une planche',
    section_team: 'Équipe',
    lbl_your_location: 'Votre position',
    lbl_team_locations: "Positions de l'équipe",
    lbl_gps_history: "Historique GPS — Aujourd'hui",
    lbl_team_calls: 'Appels vocaux et vidéo',
    lbl_calls_sub: "Appuyez sur un membre pour démarrer un appel.",
    map_team_status: "Statut de l'équipe",
    map_time_summary: "Résumé des heures — Aujourd'hui",
    map_gps_log: "Journal GPS — Tous les utilisateurs aujourd'hui",
    map_all_members: 'Tous les membres',
    map_last_update: 'Mis à jour:',
    map_no_gps: 'Aucune donnée GPS',
    team_your_loc: 'Votre position',
    team_locations: "Positions de l'équipe",
    team_gps_history: "Historique GPS — Aujourd'hui",
    team_calls_title: 'Appels vocaux et vidéo',
    team_calls_sub: "Appuyez sur un membre pour démarrer un appel.",
    team_update_loc: 'Mettre à jour',
    team_no_members: 'Aucun membre visible',
    team_no_clockins: "Aucun pointage aujourd'hui",
    team_gps_loading: 'Chargement des positions...',
    team_calls_loading: 'Chargement des membres...',
    team_chat_empty: 'Aucun message. Dites bonjour!',
    team_online: 'en ligne',
    voice_hold: "Appuyer pour enregistrer, appuyer à nouveau pour envoyer",
    voice_recording: '🔴 Enregistrement...',
    voice_sending: 'Envoi...',
    voice_sent: '🎙️ Message vocal envoyé!',
    voice_denied: 'Microphone refusé',
    voice_unavailable: 'Audio non disponible (en direct seulement)',
    voice_incoming: 'a envoyé un message vocal',
    gps_getting: '📍 Obtention du GPS...',
    gps_unavailable: '⚠️ GPS non disponible',
    gps_denied: '⚠️ GPS refusé',
    gps_updated: '📍 Position mise à jour!',
    time_clock_in_btn: "▶ Pointer l'entrée",
    time_clock_out_btn: '⏹ Pointer la sortie',
    prot_assigned_to: 'Assigné à',
    prot_referred_by: 'Référé par',
    prot_client_source: 'Comment nous ont-ils trouvés?',
    prot_source_instagram: 'Instagram',
    prot_source_facebook: 'Facebook',
    prot_source_google: 'Recherche Google',
    prot_source_referral: 'Référence client',
    prot_source_wordofmouth: 'Bouche-à-oreille',
    prot_source_signage: 'Affichage / Passage',
    prot_source_website: 'Site web',
    prot_source_other: 'Autre',
    prot_interaction_type: "Type d'interaction",
    prot_itype_call: 'Appel téléphonique',
    prot_itype_visit: 'Visite client',
    prot_itype_meeting: 'Réunion sur chantier',
    prot_itype_email: 'Courriel',
    prot_itype_quote: 'Soumission présentée',
    prot_itype_followup: 'Suivi',
    prot_itype_other: 'Autre',
    prot_log_interaction: 'Consigner une interaction',
    prot_add_interaction: '+ Consigner une interaction',
    prot_interaction_history: 'Historique des interactions',
    prot_no_interactions: 'Aucune interaction consignée.',
    prot_quote_audit: 'Audit des soumissions',
    prot_created_by: 'Créé par',
    prot_quote_log_title: 'Journal des soumissions',
    prot_gps_anomaly: '🚩 Anomalie GPS',
    prot_gps_unknown_loc: 'Localisation inconnue pendant les heures de travail',
    prot_revenue_per_emp: 'Revenus par employé',
    prot_emp_dashboard: 'Tableau de bord employés',
    prot_contract_notice: 'Aucun contrat de travail au dossier',
    misc_collected: 'Encaissé',
    misc_outstanding: 'En attente',
    misc_ytd: 'Revenus annuels',
    misc_total_revenue: 'Revenu total',
    misc_repeat_clients: 'Clients fidèles',
    misc_low_stock: 'Stock faible',
    misc_stock_value: 'Valeur du stock',
    misc_bal_due: 'Solde dû',
    misc_items: 'Articles',
    misc_all_statuses: 'Tous les statuts',
    misc_sign_in: 'Se connecter',
    misc_sign_out: 'Se déconnecter',
    misc_forgot_pw: 'Mot de passe oublié?',
    misc_change_server: 'Changer de serveur',
    misc_send: 'Envoyer',
    misc_copy: 'Copier',
    misc_unknown: 'Inconnu',
    misc_loading_proj: 'Chargement des projets...',
    misc_swipe: '← GLISSER POUR PLUS →',
    misc_sql_setup: 'Script SQL:',
    misc_step1: 'Étape 1',
    misc_step2: 'Étape 2',
    misc_step3: 'Étape 3',
    misc_enter_email_reset: 'Entrez votre courriel pour recevoir un lien:',
    misc_add_edit_material: 'Ajouter / Modifier un matériau',
    misc_add_wood_desc: "Ajoutez des planches, époxy, quincaillerie et plus.",
    misc_clients_desc: "Les clients sont ajoutés automatiquement via les formulaires d'accueil.",
    misc_gen_caption: '✨ Générer une légende',
    misc_calculate_quote: "⚡ Calculer l'estimation",
    misc_save_create: '✅ Sauvegarder et créer un projet',
    misc_clock_in_btn: "▶ Pointer l'entrée",
    misc_delete_btn: '🗑 Supprimer',
    note_add_btn: 'Ajouter',
    cs_total: 'Clients',
    filter_active: 'Fabrication',
    overdue_msg: 'projet en retard',
    overdue_msg_pl: 'projets en retard',
    // === ADDITIONAL FR TRANSLATIONS ===
    client_delete: '🗑 Supprimer',
    client_fn: 'Prénom', client_ln: 'Nom de famille',
    client_found: 'Découvert via', client_save: '✅ Sauvegarder client',
    client_wood: 'Bois préféré',
    cs_repeat: 'Clients fidèles', cs_revenue: 'Revenu total',
    dash_new: '+ Nouveau', dash_title: 'Projets',
    filter_all: 'Tous les statuts', filter_done: 'Livré',
    filter_finish: 'Finition', filter_new: 'Nouveau',
    filter_quote: 'Devis envoyé', filter_ready: 'Prêt',
    intake_amount: 'Montant soumis ($)', intake_budget_label: 'Budget prévu',
    intake_city: 'Ville', intake_deadline: 'Échéance importante',
    intake_email: 'Courriel', intake_fn: 'Prénom', intake_ln: 'Nom de famille',
    intake_phone: 'Téléphone', intake_pieces: 'Type(s) de pièce',
    intake_source: 'Découvert via', intake_style: 'Style / Finition',
    intake_timeline: 'Délai souhaité', intake_vision: 'Description de la vision',
    intake_wood: 'Essence de bois',
    login_btn: 'Se connecter', login_change: 'Changer de serveur',
    login_email: 'Courriel', login_forgot: 'Mot de passe oublié?',
    login_password: 'Mot de passe',
    login_reset_label: 'Entrez votre courriel pour recevoir un lien:',
    login_reset_send: 'Envoyer',
    lbl_hours: 'Heures est.', lbl_rate: 'Taux ($/h)',
    lbl_complexity: 'Complexité', lbl_overhead: 'Frais généraux %',
    lbl_margin: 'Marge %', lbl_delivery_cost: 'Livraison ($)',
    lbl_epoxy_hw: 'Époxy / Quincaillerie ($)',
    lbl_project_type: 'Type de projet', lbl_client_name: 'Nom du client',
    lbl_wood_species: 'Essence de bois',
    lbl_first_name: 'Prénom', lbl_last_name: 'Nom de famille',
    lbl_phone: 'Téléphone', lbl_city: 'Ville', lbl_found_via: 'Découvert via',
    lbl_piece_types: 'Type(s) de pièce', lbl_dimensions: 'Dimensions',
    lbl_style_finish: 'Style / Finition', lbl_vision: 'Description de la vision',
    lbl_budget_range: 'Budget prévu', lbl_timeline: 'Délai souhaité',
    lbl_deadline: 'Échéance importante', lbl_quoted_amount: 'Montant soumis ($)',
    lbl_notes: 'Notes', lbl_subject: 'Sujet', lbl_tone: 'Ton',
    lbl_extra_detail: 'Détail supplémentaire (facultatif)',
    lbl_platform: 'Plateforme', lbl_loc_type: 'Type de lieu',
    lbl_link_project: 'Lier à un projet (facultatif)',
    lbl_species_name: 'Espèce / Nom du matériau',
    lbl_grade: 'Grade / Description', lbl_supplier: 'Fournisseur',
    lbl_quantity: 'Quantité', lbl_unit: 'Unité',
    lbl_cost_unit: 'Coût par unité ($)',
    misc_all_statuses: 'Tous les statuts',
    misc_collected: 'Perçu', misc_low_stock: 'Stock bas',
    misc_outstanding: 'Impayé', misc_repeat_clients: 'Clients fidèles',
    misc_sql_setup: 'Script de configuration SQL:',
    misc_step1: 'Étape 1', misc_step2: 'Étape 2', misc_step3: 'Étape 3',
    misc_stock_value: 'Valeur du stock', misc_total_revenue: 'Revenu total',
    misc_ytd: 'Revenu annuel', misc_save_create: '✅ Sauvegarder et créer projet',
    misc_sign_in: 'Se connecter', misc_sign_out: 'Se déconnecter',
    misc_send: 'Envoyer',
    post_card_title: 'Légende bilingue — Claude AI', post_title: 'Générateur de publications',
    quote_calc_btn: '⚡ Calculer la soumission', quote_title: 'Calculateur de soumission',
    rev_by_type: 'Revenus par type de projet', rev_collected: 'Perçu',
    rev_monthly: 'Revenus mensuels', rev_outstanding: 'Impayé',
    rev_projects: 'Projets', rev_title: 'Revenus',
    rev_top_clients: 'Meilleurs clients', rev_ytd: 'Revenu annuel',
    rv_collected: 'Perçu', rv_outstanding: 'Impayé',
    rv_projects: 'Projets', rv_ytd: 'Revenu annuel',
    sec_intake_a: 'A — Contact', sec_intake_b: 'B — Projet',
    sec_intake_c: 'C — Budget et délais',
    stat_active: 'Actifs', stat_due: 'Solde dû',
    stat_revenue: 'Revenu', stat_total: 'Total',
    sub_time_user: 'Connecté: —',
    time_clock_in: '▶ Pointer entrée', time_clock_out: '⏹ Pointer sortie',
    time_clock_title: 'Pointage entrée / sortie',
    time_filter: 'Cette semaine', time_title: 'Pointage',
    voice_denied: 'Microphone refusé',
    voice_hold: 'Appuyer pour enregistrer, relâcher pour envoyer',
    voice_incoming: 'a envoyé un message vocal',
    wm_add_title: 'Ajouter matériau', wm_unit: 'Unité',
    wood_title: 'Bois et Matériaux',
    ws_items: 'Articles', ws_low: 'Stock bas', ws_value: 'Valeur du stock',
    clients_add: '+ Ajouter client', clients_search: 'Rechercher clients...',
    clients_title: 'Clients', intake_save: '✅ Sauvegarder et créer projet',
    intake_title: 'Accueil client',
    map_gps_log: "Journal GPS — Aujourd'hui",
    map_last_update: 'Mis à jour:', map_no_gps: 'Aucune donnée GPS',
    map_team_status: "Statut de l'équipe",
    map_time_summary: "Résumé des heures — Aujourd'hui",
    dyn_14days: '14 derniers jours', dyn_30days: '30 derniers jours',
    dyn_no_clients: 'Aucun client encore.',
    dyn_no_delivered: 'Aucun projet livré encore.',
    dyn_no_matches: 'Aucun résultat.',
    dyn_no_projects: 'Aucun projet. Commencez par un accueil.',
    dyn_no_results: 'Aucun résultat trouvé.',
    dyn_no_sessions: "Aucune session aujourd'hui.",
    dyn_no_time: 'Aucun temps enregistré.',
    search_placeholder: 'Rechercher...',
    time_loc_shop: '🏭 Atelier', time_loc_travel: '🚗 Déplacement',
    time_loc_onsite: '🏗️ Chantier',
    time_notes: 'ex. coulée époxy, livraison...'
  }
};
// Expose T globally so t() works from any context
window.T = T;

// Portal mode detection
(function(){
  var pt = new URLSearchParams(window.location.search).get('portal');
  if (pt) {
    window._portalToken = pt;
    window._isPortalMode = true;
    window.addEventListener('DOMContentLoaded', function(){ initPortalView(pt); });
  }
})();


// Apply translations immediately on load (before login)
if (document.readyState !== "loading") { setTimeout(function(){if(typeof applyTranslations==="function")applyTranslations();},0); } else { document.addEventListener("DOMContentLoaded",function(){if(typeof applyTranslations==="function")applyTranslations();}); }

function t(key) {
  try {
    var _T = window.T || T;
    var _lang = (window.currentLang || 'en');
    if (!_T || !_T[_lang]) return (_T && _T['en'] && _T['en'][key]) || key;
    return _T[_lang][key] || (_T['en'] && _T['en'][key]) || key;
  } catch(e) { return key; }
}


// ══════════════════════════════════════════════════
// DROPDOWN / SELECT TRANSLATIONS
// ══════════════════════════════════════════════════
var SELECT_OPTIONS = {
  'q-type': {
    en: ['— Select —','Epoxy River Table','Dining / Coffee Table','Wood Sink','Bathroom Vanity','Custom Desk','Staircase / Structure','Art Piece / Collectible','Other Custom Piece'],
    fr: ['— Sélectionner —','Table époxy rivière','Table salle à manger / café','Évier en bois','Vanité de salle de bain','Bureau sur mesure','Escalier / Structure','Pièce d\'art / Collectionnable','Autre pièce sur mesure']
  },
  'q-wood': {
    en: ['Ambrosia Maple','Black Walnut (+15%)','White Pine (+5%)','Barn / Reclaimed (+20%)','Exotic (+25%)'],
    fr: ['Érable moucheté','Noyer noir (+15%)','Pin blanc (+5%)','Bois de grange / récupéré (+20%)','Essence exotique (+25%)']
  },
  'q-comp': {
    en: ['Standard','Moderate +10%','Complex +25%','Very complex +40%'],
    fr: ['Standard','Modérée +10%','Complexe +25%','Très complexe +40%']
  },
  'q-oh': {
    en: ['12%','15%','18%','20%'],
    fr: ['12%','15%','18%','20%']
  },
  'q-mg': {
    en: ['20%','25%','30%','35%'],
    fr: ['20%','25%','30%','35%']
  },
  'f-status': {
    en: [t('misc_all_statuses'),'New','Quote Sent','Fabrication','Finishing','Ready','Delivered'],
    fr: ['Tous les statuts','Nouveau','Devis envoyé','Fabrication','Finition','Prêt','Livré']
  },
  'i-src': {
    en: ['Instagram','Facebook','Google','Word of mouth','Etsy','Houzz','Other'],
    fr: ['Instagram','Facebook','Google','Bouche à oreille','Etsy','Houzz','Autre']
  },
  'i-wd': {
    en: ['Ambrosia Maple','Black Walnut','White Pine','Barn Wood','No preference','Other'],
    fr: ['Érable moucheté','Noyer noir','Pin blanc','Bois de grange','Aucune préférence','Autre']
  },
  'i-bud': {
    en: ['Under $500','$500–$1,000','$1,000–$2,500','$2,500–$5,000','$5,000+','Prefer to discuss'],
    fr: ['Moins de 500$','500$–1 000$','1 000$–2 500$','2 500$–5 000$','5 000$+','Préfère en discuter']
  },
  'i-tl': {
    en: ['ASAP','Within 1 month','Within 2–3 months','Within 6 months','Not urgent'],
    fr: ['Dès que possible','Dans 1 mois','Dans 2–3 mois','Dans 6 mois','Pas urgent']
  },
  'i-dl': {
    en: ['e.g. Christmas'],
    fr: ['ex. Noël']
  },
  'p-prod': {
    en: ['Epoxy River Table','Ambrosia Maple Table','Black Walnut Sink','White Pine Vanity','Walnut Art Piece','Live Edge Coffee Table','Workshop / Behind the Scenes','Heritage Story','Custom Staircase'],
    fr: ['Table époxy rivière','Table en érable moucheté','Évier en noyer noir','Vanité en pin blanc','Pièce d\'art en noyer','Table café à bord vif','Atelier / Coulisses','Histoire de patrimoine','Escalier sur mesure']
  },
  'p-tone': {
    en: ['Storytelling — emotional','Product showcase','Educational','Promotional','Behind the scenes','Local — Gatineau/Ottawa','Seasonal / Holiday'],
    fr: ['Récit — émotionnel','Mise en valeur du produit','Éducatif','Promotionnel','Coulisses','Local — Gatineau/Ottawa','Saisonnier / Fêtes']
  },
  'time-week-filter': {
    en: ['Last 7 days','Last 14 days','Last 30 days'],
    fr: ['7 derniers jours','14 derniers jours','30 derniers jours']
  },
  'wm-unit': {
    en: ['slabs','board feet','sheets','litres','kg','units','sets'],
    fr: ['planches','pieds de planche','feuilles','litres','kg','unités','ensembles']
  },
  'pm-rev': {
    en: ['No','Request Sent','Yes'],
    fr: ['Non','Demande envoyée','Oui']
  },
  'note-type': {
    en: ['Note','Call','Email','Visit'],
    fr: ['Note','Appel','Courriel','Visite']
  },
  'cm-src': {
    en: ['Instagram','Facebook','Google','Word of mouth','Other'],
    fr: ['Instagram','Facebook','Google','Bouche à oreille','Autre']
  }
};

function translateSelects(lang) {
  Object.entries(SELECT_OPTIONS).forEach(([id, translations]) => {
    const sel = document.getElementById(id);
    if (!sel || !sel.options || sel.options.length === 0) return;
    const opts = translations[lang] || translations['en'];
    const enOpts = translations['en'];
    const currentVal = sel.value;
    // Find current index by matching against both languages
    let currentIdx = sel.selectedIndex;
    // Translate each option text
    Array.from(sel.options || []).forEach((opt, i) => {
      if (opts[i] !== undefined) {
        opt.text = opts[i];
      }
    });
    // Restore selection
    sel.selectedIndex = currentIdx;
  });
  // Also translate labels next to the selects
  const labelMap = {
    'q-type': {en: 'Project Type', fr: 'Type de projet'},
    'q-wood': {en: 'Wood Species', fr: 'Essence de bois'},
    'q-comp': {en: 'Complexity', fr: 'Complexité'},
    'q-oh':   {en: 'Overhead %', fr: 'Frais généraux %'},
    'q-mg':   {en: 'Margin %', fr: 'Marge %'},
    'i-src':  {en: 'Found us via', fr: 'Trouvé via'},
    'i-wd':   {en: 'Wood Species', fr: 'Essence de bois'},
    'i-bud':  {en: 'Budget Range', fr: 'Budget'},
    'i-tl':   {en: 'Timeline', fr: 'Délai'},
    'p-prod': {en: 'Subject', fr: 'Sujet'},
    'p-tone': {en: 'Tone', fr: 'Ton'},
    'pm-rev': {en: 'Review?', fr: 'Avis reçu?'},
    'pm-st':  {en: 'Status', fr: 'Statut'},
    'note-type': {en: '', fr: ''},
    'wm-unit': {en: 'Unit', fr: 'Unité'},
    'cm-src': {en: 'Found via', fr: 'Trouvé via'},
  };
  Object.entries(labelMap).forEach(([id, labels]) => {
    const sel = document.getElementById(id);
    if (!sel) return;
    // Find the label element before the select
    const label = sel.previousElementSibling;
    if (label && (label.tagName === 'LABEL' || label.className === 'label')) {
      if (labels[lang]) label.textContent = labels[lang];
    }
    // Also check the closest label
    const closestLabel = sel.closest('div')?.querySelector('label');
    if (closestLabel && labels[lang]) closestLabel.textContent = labels[lang];
  });
}

function applyTranslations() {
  const lang = currentLang;
  // Nav tabs
  const tabMap = {
    'tab-quote': t('nav_quote'), 'tab-dashboard': t('nav_projects'),
    'tab-intake': t('nav_intake'), 'tab-clients': t('nav_clients'),
    'tab-time': t('nav_time'), 'tab-revenue': t('nav_revenue'),
    'tab-wood': t('nav_wood'), 'tab-post': t('nav_post')
  };
  Object.entries(tabMap).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
  // Login screen
  const setTxt = (id, key) => { const el = document.getElementById(id); if (!el) return; if (el.querySelector('span.en,span.fr')) { el.querySelector('span.en').textContent = window.T.en[key]||key; el.querySelector('span.fr').textContent = window.T.fr[key]||key; } else { el.textContent = t(key); } };
  const setPlaceholder = (id, key) => { const el = document.getElementById(id); if (el) el.placeholder = t(key); };
  const setInner = (id, key) => { const el = document.getElementById(id); if (el) el.innerHTML = t(key); };
  setTxt('login-subtitle-text', 'login_subtitle');
  // Buttons
  const btnMap = {
    'login-btn': 'login_btn',
    'logout-btn-txt': 'logout_btn',
  };
  Object.entries(btnMap).forEach(([id, key]) => setTxt(id, key));
  // Placeholders
  setPlaceholder('login-email', 'login_email');
  setPlaceholder('login-password', 'login_password');
  setPlaceholder('f-search', 'search_placeholder');
  setPlaceholder('client-search', 'clients_search');
  setPlaceholder('time-notes', 'time_notes');
  setPlaceholder('p-detail', 'post_detail_placeholder');
  // Section titles
  setTxt('section-quote-title', 'quote_title');
  setTxt('section-dash-title', 'dash_title');
  setTxt('section-intake-title', 'intake_title');
  setTxt('section-clients-title', 'clients_title');
  setTxt('section-time-title', 'time_title');
  setTxt('section-revenue-title', 'rev_title');
  setTxt('section-wood-title', 'wood_title');
  setTxt('section-post-title', 'post_title');
  // Stats
  setTxt('stat-label-total', 'stat_total');
  setTxt('stat-label-active', 'stat_active');
  setTxt('stat-label-due', 'stat_due');
  setTxt('stat-label-revenue', 'stat_revenue');
  setTxt('ws-label-items', 'ws_items');
  setTxt('ws-label-value', 'ws_value');
  setTxt('ws-label-low', 'ws_low');
  setTxt('rv-label-ytd', 'rv_ytd');
  setTxt('rv-label-collected', 'rv_collected');
  setTxt('rv-label-outstanding', 'rv_outstanding');
  setTxt('rv-label-projects', 'rv_projects');
  setTxt('cs-label-total', 'cs_total');
  setTxt('cs-label-revenue', 'cs_revenue');
  setTxt('cs-label-repeat', 'cs_repeat');
  // Buttons with IDs
  setTxt('btn-calc-quote', 'quote_calc_btn');
  setTxt('btn-save-intake', 'intake_save');
  setTxt('btn-add-client', 'clients_add');
  setTxt('btn-gen-post', 'post_gen_btn');
  setTxt('btn-clock', 'time_clock_in');
  setTxt('loc-shop', 'time_loc_shop');
  setTxt('loc-travel', 'time_loc_travel');
  setTxt('loc-onsite', 'time_loc_onsite');
  // Labels
  setTxt('label-time-clock', 'time_clock_title');
  setTxt('label-rev-monthly', 'rev_monthly');
  setTxt('label-rev-type', 'rev_by_type');
  setTxt('label-rev-clients', 'rev_top_clients');
  setTxt('label-post-card', 'post_card_title');
  setTxt('label-wood-modal', 'wm_add_title');
  // Sync label — only update if not yet authenticated (don't overwrite live status)
  if (!window.currentUserEmail) {
    setSyncStatus('', currentLang==='fr'?'Veuillez vous connecter':'Please sign in');
  }
  // Translate all dropdowns
  translateSelects(lang);

  // Translate all data-i18n tagged elements (skip elements with bilingual spans)
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    // Skip if element uses .en/.fr span system (has child spans)
    if (el.querySelector('span.en, span.fr')) return;
    var val = t(key);
    if (val && val !== key) el.textContent = val;
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-ph');
    var val = t(key);
    if (val && val !== key) el.placeholder = val;
  });

  // Translate checkbox/radio label text nodes
  document.querySelectorAll('[data-i18n-val]').forEach(function(inp) {
    var key = inp.getAttribute('data-i18n-val');
    var val = t(key);
    var label = inp.closest('label');
    if (label && val && val !== key) {
      var nodes = Array.from(label.childNodes);
      var textNode = nodes.find(function(n){ return n.nodeType === 3 && n.textContent.trim(); });
      if (textNode) textNode.textContent = ' ' + val;
    }
  });
}

// currentLang declared at top of script as var

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('shack_lang', lang);
  document.body.classList.remove('lang-fr', 'lang-en');
  document.body.classList.add('lang-' + lang);
  document.getElementById('btn-en')?.classList.toggle('active', lang === 'en');
  document.getElementById('btn-fr')?.classList.toggle('active', lang === 'fr');
  document.documentElement.lang = lang === 'fr' ? 'fr-CA' : 'en';
  // Apply all translations immediately
  applyTranslations();
  applyTabVisibility();
}

function initLang() {
  const saved = localStorage.getItem('shack_lang') || 'fr';
  currentLang = saved;
  document.body.classList.remove('lang-fr','lang-en');
  document.body.classList.add('lang-'+saved);
  document.getElementById('btn-en')?.classList.toggle('active', saved === 'en');
  document.getElementById('btn-fr')?.classList.toggle('active', saved === 'fr');
  applyTranslations();
}

// ══════════════════════════════════════════════════
// SUPABASE CONFIG
// ══════════════════════════════════════════════════
var SUPABASE_URL_KEY = 'shack_sb_url';
var SUPABASE_KEY_KEY = 'shack_sb_key';
var sb = null;
var lastQuote = null;
var currentWoodId = null;

// Legacy config functions removed — using PRECONFIGURED_URL/KEY

function setupRealtimeSync() {
  if (!sb) return;
  sb.channel('db-changes')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'projects' }, () => { loadProjects(); setSyncStatus('live',currentLang==='fr'?'Synchronisé':'Live sync'); })
    .on('postgres_changes', { event: '*', schema: 'public', table: 'wood_stock' }, () => { loadWoodStock(); })
    .on('postgres_changes', { event: '*', schema: 'public', table: 'saved_posts' }, () => { loadSavedPosts(); })
    .subscribe();
}

function setSyncStatus(state, label) {
  var dot = document.getElementById('sync-dot');
  var lbl = document.getElementById('sync-label');
  if (dot) dot.className = 'sync-dot ' + (state === 'live' ? 'live' : state === 'syncing' ? 'syncing' : '');
  if (lbl) lbl.textContent = label || '';
}

// ══════════════════════════════════════════════════
// NAV
// ══════════════════════════════════════════════════
function showPage(page) {
  // Remove active class AND clear any inline display styles
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = '';
  });
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  // Activate selected page
  const targetPage = document.getElementById('page-' + page);
  if (targetPage) targetPage.classList.add('active');
  const activeTab = document.getElementById('tab-' + page);
  if (activeTab) {
    activeTab.classList.add('active');
    // Scroll active tab into view on mobile
    activeTab.scrollIntoView({behavior:'smooth', block:'nearest', inline:'center'});
  }
  // Scroll page to top on tab switch
  window.scrollTo({top:0, behavior:'smooth'});
  if (page === 'dashboard') loadProjects();
  if (page === 'wood') loadWoodStock();
  if (page === 'post') loadSavedPosts();
  if (page === 'clients') loadClients();
  if (page === 'time') initTimeTracker();
  if (page === 'revenue') { initRevenueYears(); renderRevenue(); }
  if (page === 'team') initTeam();
  if (page === 'messages') initMessages();
  if (page === 'roster') initRosterPage();
  if (page === 'map') { initTeam().then(function(){ initMap(); loadMapTimeSummary(); loadMapHistory(); }); }
  if (page === 'calendar') initCalendar();
  if (page === 'intake') {
    // Reset intake form on each open
    if (typeof applyTranslations === 'function') applyTranslations();
  }
}

function toast(msg, dur=2400) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), dur);
}

function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
});

// ══════════════════════════════════════════════════
// QUOTE CALCULATOR
// ══════════════════════════════════════════════════
function calcQuote() {
  const mat   = parseFloat(document.getElementById('q-mat').value) || 0;
  const extra = parseFloat(document.getElementById('q-extra').value) || 0;
  const hrs   = parseFloat(document.getElementById('q-hrs').value) || 0;
  const rate  = parseFloat(document.getElementById('q-rate').value) || 40;
  const del   = parseFloat(document.getElementById('q-del').value) || 0;
  const oh    = parseFloat(document.getElementById('q-oh').value);
  const mg    = parseFloat(document.getElementById('q-mg').value);
  const wm    = parseFloat(document.getElementById('q-wood').value);
  const cp    = parseFloat(document.getElementById('q-comp').value);
  const type  = document.getElementById('q-type').value;
  const client= document.getElementById('q-client').value;

  if (!mat && !hrs) { toast(currentLang==='fr'?'⚠️ Entrez les matériaux et/ou les heures.':'⚠️ Enter materials and/or hours.'); return; }

  const matT  = (mat + extra) * wm;
  const lab   = hrs * rate * cp;
  const sub   = matT + lab;
  const ohAmt = sub * oh;
  const mgAmt = (sub + ohAmt) * mg;
  const min   = sub + ohAmt + mgAmt + del;
  const sug   = Math.ceil(min / 100) * 100;
  const dep   = Math.round(sug * 0.5 / 5) * 5;
  const gst   = sug * 0.05;
  const qst   = sug * 0.09975;
  const total = sug + gst + qst;

  lastQuote = {type, client, matT, lab, ohAmt, mgAmt, del, min, sug, dep, total, gst, qst};

  document.getElementById('q-res-title').textContent = (client ? client + ' — ' : '') + (translateProjectType(type) || (isFr?'Projet sur mesure':'Custom Project'));

  const isFr = currentLang === 'fr';
  let html = [
    [isFr ? `Matériaux (incl. facteur bois)` : `Materials (incl. wood factor)`, `$${matT.toFixed(2)}`],
    [isFr ? `Main-d'œuvre (${hrs}h × ${rate}$/h × complexité)` : `Labour (${hrs}h × $${rate} × complexity)`, `$${lab.toFixed(2)}`],
    [isFr ? `Frais généraux (${Math.round(oh*100)}%)` : `Overhead (${Math.round(oh*100)}%)`, `$${ohAmt.toFixed(2)}`],
    [isFr ? `Marge bénéficiaire (${Math.round(mg*100)}%)` : `Profit margin (${Math.round(mg*100)}%)`, `$${mgAmt.toFixed(2)}`],
    ...(del ? [[isFr ? 'Livraison' : 'Delivery', `$${del.toFixed(2)}`]] : [])
  ].map(([l,v]) => `<div class="price-row"><span class="price-label">${l}</span><span class="price-val">${v}</span></div>`).join('');

  html += `<div class="result-box green">
    <div class="price-row"><span class="price-label">${isFr?'Prix plancher minimum':'Minimum price floor'}</span><span class="price-val">$${min.toFixed(0)}</span></div>
    <div class="price-row"><span class="price-label">${isFr?'Prix suggéré':'Suggested price'}</span><span class="price-total">$${sug.toLocaleString()}</span></div>
    <div class="price-row"><span class="price-label">${isFr?'Dépôt 50%':'50% deposit'}</span><span class="price-val">$${dep.toLocaleString()}</span></div>
    <div style="border-top:1px solid rgba(45,106,79,0.2);margin-top:8px;padding-top:8px;">
      <div class="price-row"><span class="price-label">${isFr?'+ TPS (5%)':'+ GST (5%)'}</span><span class="price-val">$${gst.toFixed(2)}</span></div>
      <div class="price-row"><span class="price-label">${isFr?'+ TVQ (9,975%)':'+ QST (9.975%)'}</span><span class="price-val">$${qst.toFixed(2)}</span></div>
      <div class="price-row"><span class="price-label" style="font-weight:700;">${isFr?'Total taxes incluses':'Total with taxes'}</span><span class="price-total">$${total.toFixed(2)}</span></div>
    </div>
  </div>`;

  document.getElementById('quote-lines').innerHTML = html;
  document.getElementById('quote-result').style.display = 'block';
  document.getElementById('quote-result').scrollIntoView({behavior:'smooth'});
}

async function saveQuoteAsProject() {
  if (!lastQuote || !sb) return;
  const isFr = currentLang === 'fr';
  const p = {
    name:    lastQuote.client || (isFr?'Client inconnu':'Unknown Client'),
    piece:   lastQuote.type   || (isFr?'Pièce sur mesure':'Custom piece'),
    amount:  lastQuote.sug,
    balance: lastQuote.sug,
    status:  'quote',
    review:  'No',
    created_by: currentUserEmail || null,
    created: new Date().toLocaleDateString(isFr?'fr-CA':'en-CA')
  };
  setSyncStatus('syncing', isFr?'Sauvegarde...':'Saving...');
  const { error } = await sb.from('projects').insert([p]);
  if (error) {
    toast(isFr?'⚠️ Échec de la sauvegarde.':'⚠️ Save failed.');
    console.error(error);
    return;
  }
  // Auto-create client if name given and not already in clients table
  if (lastQuote.client && lastQuote.client.trim()) {
    await autoAddClientFromQuote(lastQuote.client.trim());
  }
  toast(isFr?'✅ Sauvegardé comme projet!':'✅ Saved as project!');
  setSyncStatus('live', isFr?'Synchronisé':'Live sync');
}

// Auto-add client from quote if not already in DB
async function autoAddClientFromQuote(clientName) {
  if (!sb || !clientName) return;
  try {
    const firstName = clientName.split(' ')[0];
    const { data: existing } = await sb.from('clients')
      .select('id').ilike('first_name', firstName+'%').limit(1);
    if (existing && existing.length > 0) return; // already exists
    const parts = clientName.trim().split(' ');
    await sb.from('clients').insert([{
      first_name:    parts[0] || clientName,
      last_name:     parts.slice(1).join(' ') || '',
      client_source: 'Quote',
      assigned_to:   currentUserEmail || null,
      created_at:    new Date().toISOString(),
    }]);
    setTimeout(()=>toast(currentLang==='fr'?'👤 Client ajouté automatiquement':'👤 Client auto-added'), 1200);
  } catch(e) { console.warn('autoAddClient:', e.message); }
}

// Manual "Add to Clients" button from quote result
async function addClientFromQuote() {
  if (!lastQuote || !lastQuote.client || !lastQuote.client.trim()) {
    toast(currentLang==='fr'?'⚠️ Entrez un nom de client':'⚠️ Enter a client name');
    return;
  }
  const name = lastQuote.client.trim();
  try {
    const { data: existing } = await sb.from('clients')
      .select('id').ilike('first_name', name.split(' ')[0]+'%').limit(1);
    if (existing && existing.length > 0) {
      toast(currentLang==='fr'?'ℹ️ Client déjà dans la liste':'ℹ️ Client already in list');
      return;
    }
    const parts = name.split(' ');
    const { error } = await sb.from('clients').insert([{
      first_name:    parts[0],
      last_name:     parts.slice(1).join(' ') || '',
      client_source: 'Quote',
      assigned_to:   currentUserEmail || null,
      created_at:    new Date().toISOString(),
    }]);
    if (error) throw error;
    toast(currentLang==='fr'?'✅ Client ajouté!':'✅ Client added!');
    // Flash the button green
    const btn = document.getElementById('btn-add-client-quote');
    if (btn) { btn.style.background='var(--green)'; btn.style.color='white';
      setTimeout(()=>{ btn.style.background=''; btn.style.color=''; }, 2000); }
  } catch(e) { toast('⚠️ '+e.message); }
}


function copyQuote() {
  if (!lastQuote) return;
  const q = lastQuote;
  navigator.clipboard.writeText(
    `LE SHACKACHAGA — QUOTE\n${q.client ? 'Client: ' + q.client + '\n' : ''}Type: ${q.type}\nSuggested: $${q.sug.toLocaleString()}\nDeposit (50%): $${q.dep.toLocaleString()}\nTotal w/ taxes: $${q.total.toFixed(2)}\nValid 30 days.`
  ).then(() => toast(currentLang==='fr'?'📋 Copié!':'📋 Copied!'));
}

// ══════════════════════════════════════════════════
// PROJECTS
// ══════════════════════════════════════════════════
var STATUS_LABELS = {
  new:    {en:'New',         fr:'Nouveau'},
  quote:  {en:'Quote Sent',  fr:'Devis envoyé'},
  active: {en:'Fabrication', fr:'Fabrication'},
  finish: {en:'Finishing',   fr:'Finition'},
  ready:  {en:'Ready',       fr:'Prêt'},
  done:   {en:'Delivered',   fr:'Livré'},
};
function getStatus() {
  return {
    new:    {label: t('status_new'),    cls:'badge-new',   card:'status-new'},
    quote:  {label: t('status_quote'),  cls:'badge-quote', card:'status-quote'},
    active: {label: t('status_active'), cls:'badge-active',card:'status-active'},
    finish: {label: t('status_finish'), cls:'badge-finish',card:'status-finish'},
    ready:  {label: t('status_ready'),  cls:'badge-ready', card:'status-ready'},
    done:   {label: t('status_done'),   cls:'badge-done',  card:'status-done'},
  };
}
var STATUS = getStatus();

var allProjects = [];


// Translate project type from DB value to current language
var PROJECT_TYPE_MAP = {
  'Epoxy River Table':    {fr:'Table rivière époxy',      en:'Epoxy River Table'},
  'Dining / Coffee Table':{fr:'Table à manger / café',    en:'Dining / Coffee Table'},
  'Wood Sink':            {fr:'Évier en bois',             en:'Wood Sink'},
  'Bathroom Vanity':      {fr:'Meuble-lavabo',             en:'Bathroom Vanity'},
  'Custom Desk':          {fr:'Bureau sur mesure',         en:'Custom Desk'},
  'Staircase / Structure':{fr:'Escalier / Structure',      en:'Staircase / Structure'},
  'Art Piece / Collectible':{fr:'Œuvre d\'art / Collectionnable', en:'Art Piece / Collectible'},
  'Other Custom Piece':   {fr:'Autre pièce sur mesure',   en:'Other Custom Piece'},
  'Custom Piece':         {fr:'Pièce sur mesure',          en:'Custom Piece'},
  'Art Piece':            {fr:'Œuvre d\'art',              en:'Art Piece'},
  'Wood Sink/Vanity':     {fr:'Évier/Lavabo en bois',      en:'Wood Sink/Vanity'},
  'Staircase':            {fr:'Escalier',                  en:'Staircase'},
};
function translateProjectType(type) {
  if (!type) return '—';
  var map = PROJECT_TYPE_MAP[type];
  if (map) return currentLang === 'fr' ? map.fr : map.en;
  return type; // fallback: return as-is if not in map
}

async function loadProjects() {
  if (!sb) return;
  const filter = document.getElementById('f-status')?.value || '';
  const search = (document.getElementById('f-search')?.value || '').toLowerCase();
  let query = sb.from('projects').select('*').order('id', {ascending: false});
  if (filter) query = query.eq('status', filter);
  const { data, error } = await query;
  if (error) { console.error(error); return; }
  allProjects = data || [];

  const filtered = allProjects.filter(p =>
    !search || p.name?.toLowerCase().includes(search) || p.piece?.toLowerCase().includes(search)
  );

  // Stats
  document.getElementById('st-total').textContent = allProjects.length;
  document.getElementById('st-active').textContent = allProjects.filter(p => ['active','finish'].includes(p.status)).length;
  document.getElementById('st-due').textContent = allProjects.filter(p => p.balance > 0 && !['new','quote'].includes(p.status)).length;
  const rev = allProjects.reduce((s,p) => s + (p.amount || 0), 0);
  document.getElementById('st-rev').textContent = '$' + (rev >= 1000 ? (rev/1000).toFixed(1) + 'k' : rev.toLocaleString());

  const list = document.getElementById('proj-list');
  if (!filtered.length) {
    list.innerHTML = `<div class="empty-state"><div class="icon">🪵</div><p>${allProjects.length ? t('dyn_no_matches') : t('dyn_no_projects')}</p></div>`;
    return;
  }
  checkOverdue(allProjects);
  list.innerHTML = filtered.map(p => {
    const STATUS = getStatus(); const st = STATUS[p.status] || STATUS.new;
    const paid = p.amount ? Math.round((p.amount - p.balance) / p.amount * 100) : 0;
    return `<div class="proj-card ${st.card}" onclick="openProject(${p.id})">
      <div class="proj-header">
        <div><div class="proj-name">${p.name || '—'}</div><div class="proj-piece">${translateProjectType(p.piece)}</div></div>
        <span class="badge ${st.cls}">${st.label}</span>
      </div>
      <div class="proj-meta">
        <div class="proj-meta-item">💰 <strong>$${(p.amount||0).toLocaleString()}</strong></div>
        <div class="proj-meta-item">💳 <strong>${paid}%</strong> ${t('dyn_paid')}</div>
        ${p.delivery ? `<div class="proj-meta-item">📅 <strong>${p.delivery}</strong></div>` : ''}
        ${p.review === 'Yes' ? `<div class="proj-meta-item">⭐ ${t('dyn_review_done')}</div>` : ''}
      </div>
    </div>`;
  }).join('');
}

function openProject(id) {
  const p = allProjects.find(x => x.id === id);
  if (!p) return;
  const STATUS = getStatus(); const st = STATUS[p.status] || STATUS.new;
  const next = {new:'quote',quote:'active',active:'finish',finish:'ready',ready:'done',done:'done'};
  document.getElementById('pm-title').textContent = (p.name||'') + ' — ' + (p.piece||'');
  document.getElementById('pm-body').innerHTML = `
    <div style="margin-bottom:12px;"><span class="badge ${st.cls}">${st.label}</span></div>
    <div class="row-2" style="margin-bottom:10px;">
      <div><label>Total ($)</label><input type="number" id="pm-amt" value="${p.amount||0}"></div>
      <div><label>${t('dyn_balance')}</label><input type="number" id="pm-bal" value="${p.balance||0}"></div>
    </div>
    <div class="row-2" style="margin-bottom:10px;">
      <div><label>${t('dyn_delivery')}</label><input type="date" id="pm-del" value="${p.delivery||''}"></div>
      <div><label>${t('dyn_review_q')}</label>
        <select id="pm-rev"><option ${p.review==='No'?'selected':''}>No</option><option ${p.review==='Request Sent'?'selected':''}>Request Sent</option><option ${p.review==='Yes'?'selected':''}>Yes</option></select>
      </div>
    </div>
    <label>${t('dyn_status')}</label>
    <select id="pm-st" style="margin-bottom:10px;">
      ${Object.entries(getStatus()).map(([k,v])=>`<option value="${k}" ${p.status===k?'selected':''}>${v.label}</option>`).join('')}
    </select>
    <label data-i18n="lbl_notes">Notes</label>
    <textarea id="pm-nt" style="margin-bottom:14px;">${p.notes||''}</textarea>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn btn-green btn-sm" onclick="updateProject(${id})">${t('dyn_save')}</button>
      ${p.status!=='done'?`<button class="btn btn-amber btn-sm" onclick="advanceProject(${id},'${next[p.status]}')">→ ${STATUS[next[p.status]]?.label||'Next'}</button>`:''}
      <button class="btn btn-red btn-sm" onclick="deleteProject(${id})">${t('dyn_delete')}</button>
      <button class="btn btn-ghost btn-sm" onclick="duplicateProject(${id})">${t('dyn_duplicate')}</button>
      <button class="btn btn-blue btn-sm" onclick="exportQuotePDFById(${p.id})" style="background:var(--blue);">${t('dyn_pdf')}</button>
      <button class="btn btn-ghost btn-sm" onclick="generatePortalLink(${id})">🔗 ${currentLang==='fr'?'Lien client':'Client link'}</button>
    </div>
    <!-- PHOTOS -->
    <div style="margin-top:18px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="font-size:0.78rem;font-weight:700;color:var(--wood-mid);text-transform:uppercase;letter-spacing:0.06em;">
          📸 ${currentLang==='fr'?'Photos du projet':'Project Photos'}
        </div>
        <label style="background:var(--wood-dark);color:white;border-radius:20px;padding:5px 13px;font-size:0.75rem;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:4px;">
          + ${currentLang==='fr'?'Ajouter photo':'Add photo'}
          <input type="file" accept="image/*" multiple style="display:none;"
            onchange="Array.from(this.files).forEach(function(f){uploadProjectPhoto(${id},f)});this.value='';">
        </label>
      </div>
      <div id="photos-list-${id}">
        <p style="font-size:0.8rem;color:var(--wood-mid);">${currentLang==='fr'?'Chargement...':'Loading...'}</p>
      </div>
    </div>
    <hr style="border:none;border-top:1px solid var(--wood-pale);margin:16px 0;">
    <!-- NOTES -->
    <div style="margin-top:0;">
      <div style="font-size:0.78rem;font-weight:700;color:var(--wood-mid);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:10px;">📝 ${currentLang==='fr'?'Notes du projet':'Project Notes'}</div>
      <div style="display:flex;gap:6px;margin-bottom:8px;flex-wrap:wrap;align-items:center;">
        <select id="note-type-${id}" style="flex:0 0 auto;font-size:0.78rem;padding:6px 8px;min-width:80px;">
          <option value="note">${currentLang==='fr'?'📝 Note':'📝 Note'}</option>
          <option value="call">${currentLang==='fr'?'📞 Appel':'📞 Call'}</option>
          <option value="email">${currentLang==='fr'?'📧 Courriel':'📧 Email'}</option>
          <option value="visit">${currentLang==='fr'?'🤝 Visite':'🤝 Visit'}</option>
          <option value="milestone">${currentLang==='fr'?'🏁 Étape':'🏁 Milestone'}</option>
        </select>
        <input type="text" id="note-text-${id}" placeholder="${currentLang==='fr'?'Ajouter une note...':'Add a note...'}" style="flex:1;min-width:100px;font-size:0.82rem;padding:6px 10px;" onkeydown="if(event.key==='Enter')submitNote(${id})">
        <button class="btn btn-primary btn-sm" onclick="submitNote(${id})" style="flex-shrink:0;">${currentLang==='fr'?'Ajouter':'Add'}</button>
        <button id="proj-mic-${id}" onclick="toggleProjectVoice(${id})"
          style="flex-shrink:0;background:var(--red);color:white;border:none;border-radius:50%;width:36px;height:36px;font-size:1.1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;"
          title="${currentLang==='fr'?'Note vocale':'Voice note'}">🎤</button>
      </div>
      <div id="proj-rec-wrap-${id}" style="display:none;background:var(--wood-pale);border-radius:var(--radius-sm);padding:10px 12px;margin-bottom:8px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:10px;height:10px;border-radius:50%;background:var(--red);animation:pulse-red 1s infinite;flex-shrink:0;"></div>
          <span id="proj-rec-time-${id}" style="font-size:0.82rem;font-weight:700;color:var(--red);min-width:36px;">0:00</span>
          <span style="flex:1;font-size:0.78rem;color:var(--wood-mid);">${currentLang==='fr'?'Enregistrement en cours...':'Recording...'}</span>
          <button onclick="stopProjectVoice(${id})" class="btn btn-green btn-sm" style="padding:5px 12px;">⏹ ${currentLang==='fr'?'Arrêter':'Stop'}</button>
          <button onclick="cancelProjectVoice(${id})" class="btn btn-ghost btn-sm" style="padding:5px 10px;">✕</button>
        </div>
      </div>
      <div id="notes-list-${id}"><p style="font-size:0.8rem;color:var(--wood-mid);">${currentLang==='fr'?'Chargement...':'Loading...'}</p></div>
    </div>`;
  document.getElementById('proj-modal').classList.add('open');
  // Load photos + cache them for viewer
  loadProjectPhotos(id).then(function(photos) {
    photos.forEach(function(p){ _photoCache[p.id] = p; });
    var pel = document.getElementById('photos-list-'+id);
    if (pel) pel.innerHTML = renderPhotos(photos, id);
  });
  // Load notes
  loadProjectNotes(id).then(notes => {
    const el = document.getElementById('notes-list-'+id);
    if (el) el.innerHTML = renderNotes(notes);
  });
}

async function submitNote(projectId) {
  const el   = document.getElementById('note-text-'+projectId) || document.getElementById('note-text');
  const sel  = document.getElementById('note-type-'+projectId) || document.getElementById('note-type');
  const note = el?.value.trim();
  const type = sel?.value || 'note';
  if (!note) { el?.focus(); return; }
  const { data: { user } } = await sb.auth.getUser();
  await addProjectNote(projectId, note, type, user?.email?.split('@')[0]||'Team');
  if (el) el.value = '';
  const notes = await loadProjectNotes(projectId);
  const listEl = document.getElementById('notes-list-'+projectId);
  if (listEl) listEl.innerHTML = renderNotes(notes);
  toast(currentLang==='fr'?'✅ Note ajoutée!':'✅ Note added!');
}

async function updateProject(id) {
  if (!sb) return;
  setSyncStatus('syncing', currentLang==='fr'?'Sauvegarde...':'Saving...');
  const { error } = await sb.from('projects').update({
    amount: parseFloat(document.getElementById('pm-amt').value)||0,
    balance: parseFloat(document.getElementById('pm-bal').value)||0,
    delivery: document.getElementById('pm-del').value,
    review: document.getElementById('pm-rev').value,
    status: document.getElementById('pm-st').value,
    notes: document.getElementById('pm-nt').value,
    updated_at: new Date().toISOString()
  }).eq('id', id);
  if (error) toast(currentLang==='fr'?'⚠️ Mise à jour échouée.':'⚠️ Update failed.');
  else { toast(currentLang==='fr'?'✅ Projet mis à jour!':'✅ Project updated!'); closeModal('proj-modal'); setSyncStatus('live',currentLang==='fr'?'Synchronisé':'Live sync'); }
}

async function advanceProject(id, newStatus) {
  if (!sb) return;
  await sb.from('projects').update({status: newStatus, updated_at: new Date().toISOString()}).eq('id', id);
  toast(currentLang==='fr'?'→ Statut mis à jour!':'→ Status updated!'); closeModal('proj-modal'); notifProjectAdvanced(document.getElementById('pm-title')?.textContent||'', newStatus);
}

async function deleteProject(id) {
  if (!confirm(currentLang==='fr'?'Supprimer ce projet?':'Delete this project?')) return;
  await sb.from('projects').delete().eq('id', id);
  toast(currentLang==='fr'?'🗑 Supprimé.':'🗑 Deleted.'); closeModal('proj-modal');
}

// ══════════════════════════════════════════════════
// INTAKE
// ══════════════════════════════════════════════════
async function saveIntake() {
  const fn = document.getElementById('i-fn').value.trim();
  if (!fn) { toast(currentLang==='fr'?'⚠️ Prénom requis.':'⚠️ First name required.'); return; }
  const pieces = [...document.querySelectorAll('#i-pieces input:checked')].map(c => c.value);
  const styles = [...document.querySelectorAll('#i-styles input:checked')].map(c => c.value);
  const p = {
    name: (fn + ' ' + document.getElementById('i-ln').value).trim(),
    piece: pieces.join(', ') || 'Custom piece',
    email: document.getElementById('i-em').value,
    phone: document.getElementById('i-ph').value,
    city: document.getElementById('i-ci').value,
    source: document.getElementById('i-src').value,
    dims: document.getElementById('i-dim').value,
    wood: document.getElementById('i-wd').value,
    style: styles.join(', '),
    vision: document.getElementById('i-vis').value,
    budget: document.getElementById('i-bud').value,
    timeline: document.getElementById('i-tl').value,
    deadline: document.getElementById('i-dl').value,
    amount: parseFloat(document.getElementById('i-amt').value)||0,
    balance: parseFloat(document.getElementById('i-amt').value)||0,
    notes: document.getElementById('i-nt').value,
    status: 'new', review: 'No',
    created: new Date().toLocaleDateString()
  };
  setSyncStatus('syncing', currentLang==='fr'?'Sauvegarde...':'Saving...');
  const { error } = await sb.from('projects').insert([p]);
  if (error) { toast(currentLang==='fr'?'⚠️ Échec de la sauvegarde.':'⚠️ Save failed.'); console.error(error); return; }
  // Reset form
  ['i-fn','i-ln','i-em','i-ph','i-ci','i-dim','i-vis','i-dl','i-nt','i-amt'].forEach(id => document.getElementById(id).value = '');
  document.querySelectorAll('#i-pieces input, #i-styles input').forEach(cb => cb.checked = false);
  toast(currentLang==='fr'?'✅ Client sauvegardé!':'✅ Client saved!'); setSyncStatus('live',currentLang==='fr'?'Synchronisé':'Live sync');
  setTimeout(() => showPage('dashboard'), 600);
}

// ══════════════════════════════════════════════════
// WOOD STOCK TRACKER
// ══════════════════════════════════════════════════
var woodItems = [];

async function loadWoodStock() {
  if (!sb) return;
  const { data, error } = await sb.from('wood_stock').select('*').order('species');
  if (error) { console.error(error); return; }
  woodItems = data || [];

  const totalVal = woodItems.reduce((s,w) => s + (w.quantity||0)*(w.cost_per_unit||0), 0);
  const lowStock = woodItems.filter(w => (w.quantity||0) <= 2).length;
  document.getElementById('ws-items').textContent = woodItems.length;
  document.getElementById('ws-value').textContent = '$' + totalVal.toFixed(0);
  document.getElementById('ws-low').textContent = lowStock;

  const list = document.getElementById('wood-list');
  if (!woodItems.length) {
    list.innerHTML = '<div class="empty-state"><div class="icon">🌲</div><p>' + (currentLang==='fr' ? 'Aucun matériau. Appuyez + Ajouter pour commencer.' : 'No materials yet. Tap + Add.') + '</p></div>';
    return;
  }

  list.innerHTML = `
    <div class="wood-row" style="font-size:0.72rem;font-weight:700;color:var(--wood-mid);text-transform:uppercase;letter-spacing:0.05em;padding-bottom:6px;border-bottom:2px solid var(--wood-pale);">
      <div>Material</div><div style="text-align:center;">Qty</div><div style="text-align:center;">Unit</div><div style="text-align:right;">Value</div><div></div>
    </div>
    ` + woodItems.map(w => {
    const val = ((w.quantity||0) * (w.cost_per_unit||0)).toFixed(0);
    const low = (w.quantity||0) <= 2;
    return `<div class="wood-row">
      <div>
        <div class="wood-name" style="${low?'color:var(--red);':''}">${w.species||'—'} ${low?'⚠️':''}</div>
        <div class="wood-detail">${[w.grade,w.supplier].filter(Boolean).join(' · ')}</div>
        ${w.notes?`<div class="wood-detail" style="font-style:italic;">${w.notes}</div>`:''}
      </div>
      <div class="wood-qty" style="text-align:center;font-weight:600;">${w.quantity||0}</div>
      <div class="wood-unit" style="text-align:center;font-size:0.78rem;color:var(--wood-mid);">${w.unit||''}</div>
      <div style="text-align:right;font-weight:600;color:var(--green);">$${val}</div>
      <div style="text-align:right;">
        <button class="btn btn-ghost btn-sm" onclick="openEditWood(${w.id})" style="padding:5px 10px;">✏️</button>
      </div>
    </div>`;
  }).join('');
}

function openAddWood() {
  currentWoodId = null;
  document.getElementById('wm-title').textContent = currentLang==='fr'?'Ajouter matériau':'Add Material';
  ['wm-id','wm-species','wm-grade','wm-supplier','wm-qty','wm-cost','wm-notes'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('wm-unit').value = 'slabs';
  document.getElementById('wm-del-btn').style.display = 'none';
  document.getElementById('wood-modal').classList.add('open');
}

function openEditWood(id) {
  const w = woodItems.find(x => x.id === id);
  if (!w) return;
  currentWoodId = id;
  document.getElementById('wm-title').textContent = currentLang==='fr'?'Modifier matériau':'Edit Material';
  document.getElementById('wm-id').value = id;
  document.getElementById('wm-species').value = w.species||'';
  document.getElementById('wm-grade').value = w.grade||'';
  document.getElementById('wm-supplier').value = w.supplier||'';
  document.getElementById('wm-qty').value = w.quantity||0;
  document.getElementById('wm-unit').value = w.unit||'slabs';
  document.getElementById('wm-cost').value = w.cost_per_unit||0;
  document.getElementById('wm-notes').value = w.notes||'';
  document.getElementById('wm-del-btn').style.display = 'inline-flex';
  document.getElementById('wood-modal').classList.add('open');
}

async function saveWood() {
  if (!sb) return;
  const species = document.getElementById('wm-species').value.trim();
  if (!species) { toast(currentLang==='fr'?'⚠️ Nom du matériau requis.':'⚠️ Material name required.'); return; }
  const data = {
    species, grade: document.getElementById('wm-grade').value,
    supplier: document.getElementById('wm-supplier').value,
    quantity: parseFloat(document.getElementById('wm-qty').value)||0,
    unit: document.getElementById('wm-unit').value,
    cost_per_unit: parseFloat(document.getElementById('wm-cost').value)||0,
    notes: document.getElementById('wm-notes').value,
    updated_at: new Date().toISOString()
  };
  setSyncStatus('syncing', currentLang==='fr'?'Sauvegarde...':'Saving...');
  let error;
  if (currentWoodId) {
    ({ error } = await sb.from('wood_stock').update(data).eq('id', currentWoodId));
  } else {
    ({ error } = await sb.from('wood_stock').insert([data]));
  }
  if (error) { toast(currentLang==='fr'?'⚠️ Échec de la sauvegarde.':'⚠️ Save failed.'); console.error(error); }
  else { toast(currentLang==='fr'?'✅ Matériau sauvegardé!':'✅ Material saved!'); closeModal('wood-modal'); setSyncStatus('live',currentLang==='fr'?'Synchronisé':'Live sync'); loadWoodStock(); }
}

async function deleteWood() {
  if (!currentWoodId || !confirm(currentLang==='fr'?'Supprimer ce matériau?':'Delete this material?')) return;
  await sb.from('wood_stock').delete().eq('id', currentWoodId);
  toast(currentLang==='fr'?'🗑 Supprimé.':'🗑 Deleted.'); closeModal('wood-modal'); loadWoodStock();
}

// ══════════════════════════════════════════════════
// POST GENERATOR
// ══════════════════════════════════════════════════
var lastPost = null;

async function generatePost() {
  const prod   = document.getElementById('p-prod').value;
  const tone   = document.getElementById('p-tone').value;
  const detail = document.getElementById('p-detail').value;
  const plat   = document.querySelector('input[name="plat"]:checked').value;
  const btn    = document.getElementById('gen-btn');
  btn.disabled = true;
  btn.innerHTML = '⏳ Generating<span class="loading-dots"></span>';
  document.getElementById('post-out').style.display = 'none';

  const prompt = `You are a bilingual social media copywriter for Le Shackachaga, a custom artisan woodworking studio in Gatineau, Quebec. Five generations of craftsmanship. Products: epoxy river tables, wood sinks, live edge furniture, custom vanities. Bilingual FR/EN service.

Write a ${plat} post about: ${prod}
Tone: ${tone}
${detail ? 'Include this detail: ' + detail : ''}

Reply ONLY with this JSON (no markdown):
{"en_caption":"English caption, 2-3 paragraphs, punchy opener, no hashtags","en_hashtags":"#8to10hashtags","fr_caption":"French Canadian caption, same structure, no hashtags","fr_hashtags":"#8to10hashtags"}`;

  try {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:1000,messages:[{role:'user',content:prompt}]})
    });
    const data = await resp.json();
    const parsed = JSON.parse(data.content?.[0]?.text.replace(/```json|```/g,'').trim() || '{}');
    document.getElementById('en-txt').textContent = parsed.en_caption||'';
    document.getElementById('en-tags').textContent = parsed.en_hashtags||'';
    document.getElementById('fr-txt').textContent = parsed.fr_caption||'';
    document.getElementById('fr-tags').textContent = parsed.fr_hashtags||'';
    document.getElementById('post-out').style.display = 'block';
    document.getElementById('post-out').scrollIntoView({behavior:'smooth'});
    lastPost = {...parsed, product:prod, tone, platform:plat};
  } catch(e) {
    toast(currentLang==='fr'?'⚠️ Génération échouée. Vérifiez la connexion.':'⚠️ Generation failed. Check connection.'); console.error(e);
  }
  btn.disabled = false;
  btn.innerHTML = '✨ Generate Caption';
}

function copyCaption(textId, tagsId) {
  const text = document.getElementById(textId).textContent + '\n\n' + document.getElementById(tagsId).textContent;
  navigator.clipboard.writeText(text).then(() => toast(currentLang==='fr'?'📋 Copié!':'📋 Copied!'));
}

async function savePost() {
  if (!lastPost || !sb) return;
  setSyncStatus('syncing', currentLang==='fr'?'Sauvegarde...':'Saving...');
  const { error } = await sb.from('saved_posts').insert([lastPost]);
  if (error) toast(currentLang==='fr'?'⚠️ Échec de la sauvegarde.':'⚠️ Save failed.');
  else { toast(currentLang==='fr'?'💾 Légende sauvegardée!':'💾 Caption saved!'); setSyncStatus('live',currentLang==='fr'?'Synchronisé':'Live sync'); loadSavedPosts(); }
}

async function loadSavedPosts() {
  if (!sb) return;
  const { data } = await sb.from('saved_posts').select('*').order('id', {ascending:false}).limit(20);
  const card = document.getElementById('saved-posts-card');
  const list = document.getElementById('saved-posts-list');
  if (!data?.length) { card.style.display = 'none'; return; }
  card.style.display = 'block';
  list.innerHTML = data.map(p => `
    <div style="border-bottom:1px solid var(--wood-pale);padding:10px 0;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;">
        <span style="font-size:0.75rem;font-weight:600;color:var(--wood-mid);">${p.product||''} · ${p.platform||''}</span>
        <button class="btn btn-ghost btn-sm" onclick="deletePost(${p.id})" style="padding:3px 8px;">🗑</button>
      </div>
      <div style="font-size:0.82rem;line-height:1.45;color:var(--wood-dark);">${(p.en_caption||'').substring(0,110)}...</div>
    </div>`).join('');
}

async function deletePost(id) {
  await sb.from('saved_posts').delete().eq('id', id);
  toast(currentLang==='fr'?'🗑 Supprimé.':'🗑 Removed.'); loadSavedPosts();
}

function copySQL() {
  const sql = document.getElementById('sql-block').textContent;
  navigator.clipboard.writeText(sql).then(() => toast(currentLang==='fr'?'📋 SQL copié!':'📋 SQL copied!'));
}

// ══════════════════════════════════════════════════
// AUTH FUNCTIONS
// ══════════════════════════════════════════════════
async function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pw    = document.getElementById('login-password').value;
  const btn   = document.getElementById('login-btn');
  const errEl = document.getElementById('login-error');
  if (!email || !pw) { showLoginError('Please enter your email and password.'); return; }
  btn.disabled = true; btn.textContent = currentLang==='fr'?'Connexion...':'Signing in...';
  errEl.style.display = 'none';
  const { error } = await sb.auth.signInWithPassword({ email, password: pw });
  if (error) {
    showLoginError('Incorrect email or password. Try again.');
    btn.disabled = false; btn.textContent = currentLang==='fr'?'Se connecter':'Sign In';
  }
  // onAuthStateChange will handle the transition
}

async function doLogout() {
  if (!sb) return;
  await sb.auth.signOut();
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('setup-screen').style.display = 'none';
  document.querySelector('header').style.display = 'none';
  document.querySelector('nav').style.display = 'none';
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  setSyncStatus('', currentLang==='fr'?'Déconnecté':'Signed out');
  toast(currentLang==='fr'?'Déconnecté.':'Signed out.');
}

function showLoginError(msg) {
  const el = document.getElementById('login-error');
  el.textContent = msg; el.style.display = 'block';
}

function showForgot() {
  const fb = document.getElementById('forgot-box');
  fb.style.display = fb.style.display === 'none' ? 'block' : 'none';
}

async function sendReset() {
  const email = document.getElementById('reset-email').value.trim();
  if (!email) return;
  const { error } = await sb.auth.resetPasswordForEmail(email);
  if (!error) toast(currentLang==='fr'?'✅ Lien de réinitialisation envoyé — vérifiez vos courriels.':'✅ Reset link sent — check your email.');
  else toast(currentLang==='fr'?'⚠️ Impossible d\'envoyer le courriel de réinitialisation.':'⚠️ Could not send reset email.');
}

function resetSetup() {
  localStorage.removeItem(SUPABASE_URL_KEY);
  localStorage.removeItem(SUPABASE_KEY_KEY);
  location.reload();
}

function launchApp() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('setup-screen').style.display = 'none';
  document.querySelector('header').style.display = 'block';
  document.querySelector('nav').style.display = 'flex';
  // Clear ALL inline display styles from pages so CSS class controls them
  document.querySelectorAll('.page').forEach(p => {
    p.style.display = '';
    p.classList.remove('active');
  });
  // Activate the quote tab by default
  document.getElementById('page-quote').classList.add('active');
  document.getElementById('tab-quote').classList.add('active');
  initLang();
  loadProjects();
  loadWoodStock();
  loadSavedPosts();
  loadClients();
  initRevenueYears();
  // Apply admin visibility immediately after login
  applyTabVisibility();
  // Update time-user-label with current user
  var timeLabel = document.getElementById('time-user-label');
  if (timeLabel && currentUserEmail) timeLabel.textContent = currentLang==='fr'?'Connecté: ':'Logged in as: ' + currentUserEmail;
  // Request GPS permission once — skip if already granted
  requestGPSPermissionOnce();
  initTeam();
  setupRealtimeSync();
  // Add global search bar to header
  const headerInner = document.querySelector('.header-inner');
  if (headerInner && !document.getElementById('global-search-input')) {
    const searchWrap = document.createElement('div');
    searchWrap.style.cssText = 'position:relative;flex:1;max-width:200px;margin:0 10px;';
    const gsIcon = document.createElement('span');
    gsIcon.textContent = '\u{1F50D}';
    gsIcon.style.cssText = 'position:absolute;left:8px;top:50%;transform:translateY(-50%);font-size:0.8rem;pointer-events:none;';
    const gsInput = document.createElement('input');
    gsInput.id = 'global-search-input';
    gsInput.placeholder = 'Search...';
    gsInput.style.cssText = 'width:100%;padding:6px 8px 6px 28px;border:none;border-radius:6px;background:rgba(255,255,255,0.15);color:white;font-size:0.78rem;font-family:DM Sans,sans-serif;outline:none;';
    gsInput.addEventListener('input', function() { clearTimeout(searchTimeout); searchTimeout = setTimeout(function(){ globalSearch(gsInput.value); }, 300); });
    searchWrap.appendChild(gsIcon);
    searchWrap.appendChild(gsInput);
    // Insert between logo and sync status
    const logo = headerInner.querySelector('.logo');
    headerInner.insertBefore(searchWrap, logo.nextSibling);
  }
}

// ══════════════════════════════════════════════════
// AUTO-INIT IF CONFIG EXISTS
// ══════════════════════════════════════════════════
async function initSupabaseWithAuth(url, key) {
  try {
    sb = window.supabase.createClient(url, key);
    // Listen for auth state changes
    sb.auth.onAuthStateChange((event, session) => {
      if (session) {
        // Set user globals immediately so isAdmin() works from first load
        currentUserEmail = session.user.email;
        currentUserName  = session.user.user_metadata?.full_name || session.user.email.split('@')[0];
        setSyncStatus('live', currentUserName);
        setTimeout(function(){ showPermissionOnboarding(); }, 1500);
        launchApp();
      } else if (event === 'SIGNED_OUT' || event === 'INITIAL_SESSION' && !session) {
        document.getElementById('login-screen').style.display = 'flex';
        document.getElementById('setup-screen').style.display = 'none';
        document.querySelector('header').style.display = 'none';
        document.querySelector('nav').style.display = 'none';
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        setSyncStatus('', currentLang==='fr'?'Veuillez vous connecter':'Please sign in');
      }
    });
    // Check existing session
    const { data: { session } } = await sb.auth.getSession();
    if (!session) {
      document.getElementById('setup-screen').style.display = 'none';
      document.getElementById('login-screen').style.display = 'flex';
      document.querySelector('header').style.display = 'none';
      document.querySelector('nav').style.display = 'none';
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    }
  } catch(e) {
    setSyncStatus('', currentLang==='fr'?'Connexion échouée':'Connection failed');
    toast(currentLang==='fr'?'⚠️ Connexion échouée. Vérifiez les identifiants.':'⚠️ Connection failed. Check credentials.');
    console.error(e);
  }
}

// Force init on script parse (belt + suspenders)
try { if(typeof window.supabase!=="undefined" && window.supabase.createClient && typeof waitForSupabaseAndInit==="function") { waitForSupabaseAndInit(0); } } catch(e){}

// Override saveConfig to use auth version
function saveConfig() {
  // Credentials are pre-configured
  initSupabaseWithAuth(PRECONFIGURED_URL, PRECONFIGURED_KEY);
}

// Hide header/nav on load until authenticated
document.querySelector('header').style.display = 'none';
document.querySelector('nav').style.display = 'none';
// Don't set inline display on pages — let CSS .active class handle it
document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

// Show swipe hint on mobile
if (window.innerWidth < 600) {
  const hint = document.getElementById('nav-hint');
  if (hint) { hint.style.display = 'block'; setTimeout(() => { hint.style.display = 'none'; }, 4000); }
}

// PRECONFIGURED_URL/KEY declared in first script block above

// Wait for Supabase library then init
function waitForSupabaseAndInit(attempts) {
  attempts = attempts || 0;
  if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
    try {
      initSupabaseWithAuth(PRECONFIGURED_URL, PRECONFIGURED_KEY);
    } catch(e) {
      console.error('Init error:', e);
      setSyncStatus('', currentLang==='fr'?'Erreur — actualisez':'Error — refresh');
    }
  } else if (attempts < 100) {
    // Retry faster on first attempts (handles slow CDN on mobile)
    var delay = attempts < 10 ? 50 : 200;
    setTimeout(function(){ waitForSupabaseAndInit(attempts + 1); }, delay);
  } else {
    setSyncStatus('', 'Échec de connexion — actualisez / Load failed — refresh');
    // Last resort: try loading Supabase again
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
    script.onload = function() { initSupabaseWithAuth(PRECONFIGURED_URL, PRECONFIGURED_KEY); };
    document.head.appendChild(script);
  }
}
// Fire on every possible ready state for max Android compatibility
if (document.readyState === 'complete') {
  setTimeout(function(){ waitForSupabaseAndInit(0); }, 50);
} else if (document.readyState === 'interactive') {
  setTimeout(function(){ waitForSupabaseAndInit(0); }, 100);
} else {
  document.addEventListener('DOMContentLoaded', function(){ waitForSupabaseAndInit(0); });
  window.addEventListener('load', function(){ waitForSupabaseAndInit(0); });
}

// ══════════════════════════════════════════════════
// OVERDUE ALERTS
// ══════════════════════════════════════════════════
function checkOverdue(projects) {
  const today = new Date().toISOString().split('T')[0];
  const overdue = projects.filter(p =>
    p.delivery && p.delivery < today &&
    !['done','delivered'].includes(p.status)
  );
  const existing = document.getElementById('overdue-banner');
  if (existing) existing.remove();
  if (overdue.length) {
    const banner = document.createElement('div');
    banner.id = 'overdue-banner';
    banner.className = 'overdue-banner';
    banner.innerHTML = `🔔 ${overdue.length} project${overdue.length>1?'s are':' is'} overdue: ${overdue.map(p=>p.name).join(', ')}`;
    const list = document.getElementById('proj-list');
    list?.parentNode.insertBefore(banner, list);
  }
}

// ══════════════════════════════════════════════════
// DUPLICATE PROJECT
// ══════════════════════════════════════════════════
async function duplicateProject(id) {
  const p = allProjects.find(x => x.id === id);
  if (!p || !sb) return;
  const clone = {...p};
  delete clone.id;
  clone.name = p.name + ' (copy)';
  clone.status = 'new';
  clone.balance = clone.amount;
  clone.delivery = '';
  clone.review = 'No';
  clone.created = new Date().toLocaleDateString();
  const { error } = await sb.from('projects').insert([clone]);
  if (!error) { toast(currentLang==='fr'?'📋 Projet dupliqué!':'📋 Project duplicated!'); closeModal('proj-modal'); }
  else toast(currentLang==='fr'?'⚠️ Duplication échouée.':'⚠️ Duplicate failed.');
}

// ══════════════════════════════════════════════════
// PDF QUOTE EXPORT
// ══════════════════════════════════════════════════
function exportQuotePDFById(id) {
  const p = allProjects.find(function(x){ return x.id === id; }) || {};
  exportQuotePDF(p);
}
function exportQuotePDF(p) {
  const d      = new Date();
  const lang   = currentLang || 'fr';
  const isFr   = lang === 'fr';
  const locale = isFr ? 'fr-CA' : 'en-CA';
  const dateStr    = d.toLocaleDateString(locale, {year:'numeric',month:'long',day:'numeric'});
  const validUntil = new Date(d.getTime() + 30*24*60*60*1000).toLocaleDateString(locale, {year:'numeric',month:'long',day:'numeric'});
  const gst   = (p.amount * 0.05).toFixed(2);
  const qst   = (p.amount * 0.09975).toFixed(2);
  const total = (p.amount * 1.14975).toFixed(2);
  const dep   = (p.amount * 0.5).toFixed(2);
  const quoteNum = `${isFr?'SOUMISSION':'QUOTE'} #SH-${p.id||'000'}`;

  const L = {
    quoteFor:     isFr ? 'Soumission pour'        : 'Quote For',
    quoteDetails: isFr ? 'Détails'                : 'Quote Details',
    date:         isFr ? 'Date'                   : 'Date',
    validUntil:   isFr ? 'Valide jusqu\'au'       : 'Valid until',
    projectDesc:  isFr ? 'Description du projet'  : 'Project Description',
    customPiece:  isFr ? 'Pièce sur mesure'       : 'Custom piece',
    dims:         isFr ? 'Dimensions'             : 'Dimensions',
    wood:         isFr ? 'Essence de bois'        : 'Wood species',
    style:        isFr ? 'Style'                  : 'Style',
    pricing:      isFr ? 'Tarification'           : 'Pricing',
    subtotal:     isFr ? 'Sous-total'             : 'Subtotal',
    gst:          isFr ? 'TPS (5%)'              : 'GST (5%)',
    qst:          isFr ? 'TVQ (9,975%)'          : 'QST (9.975%)',
    totalTax:     isFr ? 'Total (taxes incluses)' : 'Total (taxes included)',
    deposit:      isFr ? 'Dépôt requis (50%)'    : 'Deposit required (50%)',
    payTerms:     isFr ? 'Paiement et conditions' : 'Payment & Terms',
    payBody:      isFr
      ? 'Paiement accepté par virement Interac, chèque ou argent comptant.<br>Cette soumission est valide 30 jours à partir de la date d\'émission.<br>Les légères variations de couleur et de grain sont inhérentes au bois naturel — elles font partie du charme de chaque pièce unique.<br>Toute modification après le début de la fabrication peut entraîner des frais supplémentaires.'
      : 'Payment accepted by Interac e-Transfer, cheque, or cash.<br>This quote is valid for 30 days from the date of issue.<br>Minor variations in colour and grain are inherent to natural wood — they are part of the charm of each unique piece.<br>Any modifications after fabrication starts may incur additional charges.',
    closing:      isFr ? 'Merci pour votre confiance. C\'est un honneur de créer pour vous.' : 'Thank you for your trust. It is an honour to create for you.',
    footer:       isFr ? 'Le Shackachaga · Gatineau, QC · Cinq générations de savoir-faire' : 'Le Shackachaga · Gatineau, QC · Five generations of craftsmanship',
  };

  const html = `<!DOCTYPE html><html lang="${lang}"><head><meta charset="UTF-8">
<style>
  body{font-family:Georgia,serif;max-width:700px;margin:40px auto;padding:20px;color:#2E1A00;}
  .logo{font-size:24px;font-weight:bold;color:#7B4B1A;margin-bottom:4px;}
  .sub{font-size:11px;color:#999;letter-spacing:0.08em;text-transform:uppercase;}
  hr{border:none;border-top:2px solid #C4956A;margin:20px 0;}
  .row{display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #F2EDE8;font-size:13px;}
  .total-row{display:flex;justify-content:space-between;padding:10px 0;font-size:16px;font-weight:bold;color:#2D6A4F;}
  .section{margin-top:20px;}
  .section-title{font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#7B4B1A;margin-bottom:8px;}
  .footer{margin-top:40px;font-size:11px;color:#999;text-align:center;}
  @media print{body{margin:0;}}
</style></head><body>
<div class="logo"><img src="data:image/png;base64,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" style="width:60px;height:60px;border-radius:8px;object-fit:cover;margin-bottom:8px;" alt="Le Shackachaga"><br>Le Shackachaga</div>
<div class="sub">www.leshackachaga.com · info@shackachaga.com · (367)-321-8019 · Gatineau, QC</div>
<hr>
<div style="display:flex;justify-content:space-between;margin-bottom:20px;">
  <div>
    <div class="section-title">${L.quoteFor}</div>
    <strong>${p.name||'—'}</strong><br>
    ${p.email?p.email+'<br>':''}${p.phone||''}
  </div>
  <div style="text-align:right;">
    <div class="section-title">${L.quoteDetails}</div>
    ${L.date}: ${dateStr}<br>
    ${L.validUntil}: ${validUntil}<br>
    <strong style="color:#9B2335;">${quoteNum}</strong>
  </div>
</div>
<div class="section">
  <div class="section-title">${L.projectDesc}</div>
  <div style="font-size:13px;line-height:1.6;padding:12px;background:#FAF6F0;border-radius:8px;">
    <strong>${translateProjectType(p.piece)||L.customPiece}</strong><br>
    ${p.dims?L.dims+': '+p.dims+'<br>':''}
    ${p.wood?L.wood+': '+p.wood+'<br>':''}
    ${p.style?L.style+': '+p.style+'<br>':''}
    ${p.vision||''}
  </div>
</div>
<div class="section">
  <div class="section-title">${L.pricing}</div>
  <div class="row"><span>${L.subtotal}</span><span>$${(p.amount||0).toLocaleString()}</span></div>
  <div class="row"><span>${L.gst}</span><span>$${gst}</span></div>
  <div class="row"><span>${L.qst}</span><span>$${qst}</span></div>
  <div class="total-row"><span>${L.totalTax}</span><span>$${total}</span></div>
  <div class="row" style="color:#7B4B1A;"><span>${L.deposit}</span><span>$${dep}</span></div>
</div>
<div class="section">
  <div class="section-title">${L.payTerms}</div>
  <div style="font-size:12px;line-height:1.7;color:#555;">${L.payBody}</div>
</div>
<hr>
<div style="text-align:center;font-style:italic;color:#7B4B1A;font-size:13px;">${L.closing}</div>
<div class="footer">${L.footer}</div>
</body></html>`;

  const w = window.open('','_blank');
  w.document.write(html);
  w.document.close();
  setTimeout(() => w.print(), 500);
}


// ══════════════════════════════════════════════════
// GLOBAL SEARCH
// ══════════════════════════════════════════════════
var searchTimeout = null;
async function globalSearch(query) {
  if (!query || query.length < 2) {
    document.getElementById('global-results')?.remove();
    return;
  }
  const q = query.toLowerCase();
  const results = [];
  // Search projects
  allProjects.filter(p =>
    p.name?.toLowerCase().includes(q) ||
    p.piece?.toLowerCase().includes(q) ||
    p.email?.toLowerCase().includes(q)
  ).slice(0,4).forEach(p => results.push({type:'Project', label: p.name + ' — ' + p.piece, action: ()=>{showPage('dashboard'); setTimeout(()=>openProject(p.id),300);}}));
  // Search clients
  allClients.filter(c =>
    (c.first_name+' '+c.last_name).toLowerCase().includes(q) ||
    c.email?.toLowerCase().includes(q) ||
    c.city?.toLowerCase().includes(q)
  ).slice(0,3).forEach(c => results.push({type:'Client', label: c.first_name+' '+c.last_name + (c.city?' · '+c.city:''), action: ()=>{showPage('clients'); setTimeout(()=>openClient(c.id),300);}}));
  // Search wood
  woodItems.filter(w => w.species?.toLowerCase().includes(q) || w.supplier?.toLowerCase().includes(q))
    .slice(0,2).forEach(w => results.push({type:'Wood Stock', label: w.species + ' — ' + (w.quantity||0) + ' ' + (w.unit||''), action: ()=>showPage('wood')}));

  let container = document.getElementById('global-results');
  if (!container) {
    container = document.createElement('div');
    container.id = 'global-results';
    container.className = 'search-results';
    document.getElementById('global-search-input')?.parentNode.appendChild(container);
  }
  if (!results.length) {
    container.innerHTML = '<div class="search-result-item" style="color:var(--wood-mid);">No results found</div>';
  } else {
    container.innerHTML = results.map((r,i) => `
      <div class="search-result-item" onclick="window._searchActions[${i}]()">
        <div class="search-result-type">${r.type}</div>
        ${r.label}
      </div>`).join('');
    window._searchActions = results.map(r => r.action);
  }
}

// ══════════════════════════════════════════════════
// PROJECT NOTES TIMELINE
// ══════════════════════════════════════════════════
async function loadProjectNotes(projectId) {
  if (!sb) return [];
  const { data } = await sb.from('project_notes').select('*')
    .eq('project_id', projectId).order('created_at', {ascending:false});
  return data || [];
}

async function addProjectNote(projectId, note, type, author) {
  if (!sb || !note.trim()) return;
  await sb.from('project_notes').insert([{
    project_id: projectId, note, type: type||'note',
    author: author || 'Team', created_at: new Date().toISOString()
  }]);
}

function escapeHtml(s) {
  return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
var _projAudios = {};
var _voiceNoteData = {}; // audio data map: nid -> base64 data URL
function renderNotes(notes) {
  if (!notes || !notes.length) {
    return '<div class="empty-state" style="padding:12px 0;"><p style="font-size:0.82rem;color:var(--wood-mid);">'
      + (currentLang==='fr'?'Aucune note encore.':'No notes yet.') + '</p></div>';
  }
  const lbl = {
    note:      {en:'📝 Note',      fr:'📝 Note'},
    call:      {en:'📞 Call',      fr:'📞 Appel'},
    email:     {en:'📧 Email',     fr:'📧 Courriel'},
    visit:     {en:'🤝 Visit',     fr:'🤝 Visite'},
    milestone: {en:'🏁 Milestone', fr:'🏁 Étape'},
    voice:     {en:'🎤 Voice',     fr:'🎤 Vocal'},
  };
  return notes.map(function(n, idx) {
    const d = new Date(n.created_at);
    const timeStr = d.toLocaleDateString(currentLang==='fr'?'fr-CA':'en-CA',
      {month:'short', day:'numeric'}) + ' ' + d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
    const typeLabel = (lbl[n.type||'note']||lbl.note)[currentLang];
    const nid = 'pn-' + (n.id || idx);

    if (n.type === 'voice' && n.voice_data) {
      const dur = n.voice_duration || 0;
      const durStr = Math.floor(dur/60)+':'+(('0'+Math.floor(dur%60)).slice(-2));
      _voiceNoteData[nid] = n.voice_data;
      return '<div class="note-item" id="' + nid + '">'
        + '<div class="note-meta">'
        +   '<span class="note-type note-type-voice">' + typeLabel + '</span>'
        +   escapeHtml(n.author||'Team') + ' · ' + timeStr
        + '</div>'
        + '<div class="voice-msg-wrap" style="margin-top:6px;">'
        +   '<button class="voice-play-btn" data-nid="' + nid + '" onclick="playProjVoice(this.dataset.nid,this)">▶</button>'
        +   '<div class="voice-waveform">'
        +     '<div class="voice-progress" id="' + nid + '-prog" style="width:0%"></div>'
        +   '</div>'
        +   '<span class="voice-duration" id="' + nid + '-dur">' + durStr + '</span>'
        + '</div>'
        + '</div>';
    }

    return '<div class="note-item">'
      + '<div class="note-meta">'
      +   '<span class="note-type note-type-' + escapeHtml(n.type||'note') + '">' + typeLabel + '</span>'
      +   escapeHtml(n.author||'Team') + ' · ' + timeStr
      + '</div>'
      + '<div style="font-size:0.88rem;line-height:1.5;white-space:pre-wrap;">' + escapeHtml(n.note||'') + '</div>'
      + '</div>';
  }).join('');
}

function playProjVoice(nid, btn) {
  var audio = document.getElementById(nid+'-audio');
  if (!audio) {
    var data = _voiceNoteData[nid];
    if (!data) {
      toast(currentLang==='fr'?'⚠️ Audio non disponible':'⚠️ Audio not available');
      return;
    }
    audio = document.createElement('audio');
    audio.id  = nid+'-audio';
    audio.src = data;
    audio.style.display = 'none';
    var container = document.getElementById(nid);
    if (container) container.appendChild(audio);
    else document.body.appendChild(audio);
  }
  // Pause all others
  document.querySelectorAll('.note-item audio').forEach(function(a) {
    if (a !== audio) { a.pause(); a.currentTime = 0; }
  });
  document.querySelectorAll('.voice-play-btn').forEach(function(b) {
    if (b !== btn) b.textContent = '▶';
  });
  audio.ontimeupdate = function() {
    var pct = audio.duration ? (audio.currentTime/audio.duration*100) : 0;
    var prog = document.getElementById(nid+'-prog');
    var dur  = document.getElementById(nid+'-dur');
    if (prog) prog.style.width = pct+'%';
    if (dur && !isNaN(audio.duration)) {
      var rem = audio.duration - audio.currentTime;
      dur.textContent = Math.floor(rem/60)+':'+(('0'+Math.floor(rem%60)).slice(-2));
    }
  };
  audio.onended = function() {
    btn.textContent = '▶';
    var prog = document.getElementById(nid+'-prog');
    if (prog) prog.style.width = '0%';
  };
  if (audio.paused) { audio.play(); btn.textContent = '⏸'; }
  else { audio.pause(); btn.textContent = '▶'; }
}




// ══════════════════════════════════════════════════════════════════
// CLIENT PORTAL
// ══════════════════════════════════════════════════════════════════

async function initPortalView(token) {
  var shell = document.getElementById('app-shell');
  if (shell) shell.style.display = 'none';
  var pc = document.getElementById('portal-container');
  if (!pc) return;
  pc.style.display = 'block';
  var url = localStorage.getItem('sb_url') || window.PRECONFIGURED_URL;
  var key = localStorage.getItem('sb_key') || window.PRECONFIGURED_KEY;
  if (!url || !key) { showPortalError(pc, 'Configuration manquante / Missing configuration'); return; }
  try {
    var sbc = window.supabase.createClient(url, key);
    var res = await sbc.from('projects').select('*').eq('portal_token', token).limit(1);
    if (res.error || !res.data || !res.data.length) {
      showPortalError(pc, 'Projet introuvable / Project not found'); return;
    }
    renderPortalView(pc, res.data[0]);
  } catch(e) { showPortalError(pc, e.message); }
}

function showPortalError(container, msg) {
  container.innerHTML = '<div style="text-align:center;padding:60px 20px;">'
    + '<div style="font-size:3rem;margin-bottom:16px;">🪵</div>'
    + '<div style="font-family:Georgia,serif;font-size:1.2rem;color:#7B4B1A;margin-bottom:8px;">Le Shackachaga</div>'
    + '<p style="color:#999;font-size:0.9rem;">'+escapeHtml(msg)+'</p></div>';
}

function renderPortalView(container, p) {
  var lang = (navigator.language||'fr').startsWith('fr') ? 'fr' : 'en';
  var isFr = lang === 'fr';
  var SM = {
    new:   {fr:'Nouveau',          en:'New',              pct:5,  col:'#9E9E9E'},
    quote: {fr:'Devis envoyé',     en:'Quote Sent',       pct:15, col:'#F59E0B'},
    active:{fr:'En fabrication',   en:'In Production',    pct:50, col:'#3B82F6'},
    finish:{fr:'Finition',         en:'Finishing',        pct:80, col:'#7B4B1A'},
    ready: {fr:'Prêt à livrer',    en:'Ready to Deliver', pct:95, col:'#2D6A4F'},
    done:  {fr:'Livré',            en:'Delivered',        pct:100,col:'#9E9E9E'},
  };
  var st   = SM[p.status] || SM.new;
  var pct  = st.pct;
  var paid = p.amount ? Math.round(((p.amount||0)-(p.balance||0))/(p.amount)*100) : 0;
  var delivStr = '';
  if (p.delivery) delivStr = new Date(p.delivery).toLocaleDateString(isFr?'fr-CA':'en-CA',{year:'numeric',month:'long',day:'numeric'});
  var pieceName = p.piece || '';
  var pieceMap = {'Epoxy River Table':'Table rivière époxy','Wood Sink':'Évier en bois','Bathroom Vanity':'Meuble-lavabo','Custom Desk':'Bureau sur mesure','Staircase / Structure':'Escalier / Structure','Dining / Coffee Table':'Table salle à manger / café','Art Piece / Collectible':"Pièce d'art",'Other Custom Piece':'Pièce sur mesure'};
  if (isFr && pieceMap[pieceName]) pieceName = pieceMap[pieceName];

  container.innerHTML =
    '<div style="max-width:500px;margin:0 auto;padding:24px 16px;">'
  + '<div style="text-align:center;margin-bottom:24px;">'
  + '<div style="text-align:center;margin-bottom:8px;"><img src="data:image/png;base64,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" style="width:60px;height:60px;border-radius:10px;object-fit:cover;"></div><div style="font-family:Georgia,serif;font-size:1.5rem;font-weight:bold;color:#7B4B1A;">Le Shackachaga</div>'
  + '<div style="font-size:0.72rem;color:#aaa;letter-spacing:0.1em;text-transform:uppercase;">Gatineau, QC · Artisan Woodworking</div>'
  + '</div>'
  // Project card
  + '<div style="background:#FAF6F0;border-radius:14px;padding:18px;margin-bottom:16px;">'
  + '<div style="font-size:0.68rem;text-transform:uppercase;color:#aaa;letter-spacing:0.08em;margin-bottom:3px;">'+(isFr?'Votre projet':'Your project')+'</div>'
  + '<div style="font-size:1.15rem;font-weight:700;color:#2E1A00;">'+escapeHtml(p.name||'—')+'</div>'
  + '<div style="font-size:0.85rem;color:#7B4B1A;margin-top:2px;">'+escapeHtml(pieceName)+'</div>'
  + '</div>'
  // Status card
  + '<div style="background:white;border-radius:14px;padding:18px;margin-bottom:14px;box-shadow:0 2px 12px rgba(46,26,0,0.08);">'
  + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">'
  + '<span style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#aaa;">'+(isFr?'Statut':'Status')+'</span>'
  + '<span style="background:'+st.col+';color:white;border-radius:20px;padding:4px 13px;font-size:0.8rem;font-weight:700;">'+st[lang]+'</span>'
  + '</div>'
  + '<div style="background:#F2EDE8;border-radius:6px;height:10px;overflow:hidden;margin-bottom:6px;">'
  + '<div style="height:100%;border-radius:6px;background:'+st.col+';width:'+pct+'%;"></div>'
  + '</div>'
  + '<div style="font-size:0.68rem;color:#aaa;text-align:right;margin-bottom:14px;">'+pct+'%</div>'
  // Step dots
  + '<div style="display:flex;justify-content:space-between;">'
  + Object.entries(SM).map(function(kv){
      var k=kv[0], s=kv[1], done=pct>=s.pct;
      return '<div style="text-align:center;flex:1;">'
        + '<div style="width:18px;height:18px;border-radius:50%;margin:0 auto 3px;font-size:0.6rem;display:flex;align-items:center;justify-content:center;font-weight:700;background:'+(done?st.col:'#F2EDE8')+';color:'+(done?'white':'#ccc')+';border:2px solid '+(k===p.status?st.col:'transparent')+';">'+(done?'✓':'')+'</div>'
        + '<div style="font-size:0.52rem;color:'+(done?'#7B4B1A':'#ccc')+';font-weight:'+(k===p.status?'700':'400')+';">'+s[lang].split(' ')[0]+'</div>'
        + '</div>';
    }).join('')
  + '</div></div>'
  // Details
  + '<div style="background:white;border-radius:14px;padding:18px;margin-bottom:14px;box-shadow:0 2px 12px rgba(46,26,0,0.08);">'
  + (p.amount?'<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #F2EDE8;"><span style="font-size:0.82rem;color:#aaa;">'+(isFr?'Montant total':'Total amount')+'</span><span style="font-size:0.88rem;font-weight:700;color:#2E1A00;">$'+Number(p.amount).toLocaleString()+'</span></div>':'')
  + (p.amount?'<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #F2EDE8;"><span style="font-size:0.82rem;color:#aaa;">'+(isFr?'Acompte reçu':'Deposit received')+'</span><span style="font-size:0.88rem;font-weight:700;color:'+(paid>0?'#2D6A4F':'#aaa')+';">'+paid+'%</span></div>':'')
  + (delivStr?'<div style="display:flex;justify-content:space-between;padding:7px 0;"><span style="font-size:0.82rem;color:#aaa;">'+(isFr?'Livraison prévue':'Expected delivery')+'</span><span style="font-size:0.88rem;font-weight:700;color:#2E1A00;">'+delivStr+'</span></div>':'')
  + '</div>'
  // Footer contact
  + '<div style="text-align:center;padding:16px 0;">'
  + '<div style="font-size:0.78rem;color:#aaa;margin-bottom:8px;">'+(isFr?'Des questions? Contactez-nous.':'Questions? Get in touch.')+'</div>'
  + '<a href="tel:+13673218019" style="color:#7B4B1A;font-weight:600;font-size:0.9rem;text-decoration:none;display:block;margin-bottom:4px;">📞 (367) 321-8019</a>'
  + '<a href="mailto:info@shackachaga.com" style="color:#7B4B1A;font-size:0.82rem;text-decoration:none;">✉️ info@shackachaga.com</a>'
  + '<div style="margin-top:20px;font-size:0.62rem;color:#ccc;letter-spacing:0.08em;text-transform:uppercase;">Le Shackachaga · '+(isFr?'Cinq générations de savoir-faire':'Five generations of craftsmanship')+'</div>'
  + '</div></div>';
}

async function generatePortalLink(projectId) {
  if (!sb) return;
  var token = 'shk-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2,9);
  var err = (await sb.from('projects').update({portal_token:token}).eq('id',projectId)).error;
  if (err) { toast(currentLang==='fr'?'⚠️ Erreur':'⚠️ Error'); return; }
  var p = allProjects.find(function(x){ return x.id===projectId; });
  if (p) p.portal_token = token;
  var link = location.origin + location.pathname + '?portal=' + token;
  navigator.clipboard.writeText(link)
    .then(function(){ toast(currentLang==='fr'?'🔗 Lien copié!':'🔗 Link copied!'); })
    .catch(function(){ prompt(currentLang==='fr'?'Lien du portail:':'Portal link:', link); });
}



// ══════════════════════════════════════════════════════════════════
// PERMISSION ONBOARDING — shown once after first login on Android
// ══════════════════════════════════════════════════════════════════

function showPermissionOnboarding() {
  var isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (!isMobile || localStorage.getItem('shack_perm_onboard_shown')) return;
  localStorage.setItem('shack_perm_onboard_shown','1');

  var fr = currentLang === 'fr';
  var overlay = document.createElement('div');
  overlay.id = 'perm-onboard-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(46,26,0,0.85);z-index:600;display:flex;align-items:flex-end;justify-content:center;';

  var card = document.createElement('div');
  card.style.cssText = 'background:var(--wood-cream);border-radius:20px 20px 0 0;width:100%;max-width:480px;padding:24px 20px 36px;';

  // Handle bar
  var handle = document.createElement('div');
  handle.style.cssText = 'width:40px;height:4px;background:var(--wood-pale);border-radius:2px;margin:0 auto 20px;';
  card.appendChild(handle);

  // Title
  var titleDiv = document.createElement('div');
  titleDiv.style.cssText = 'font-family:Georgia,serif;font-size:1.05rem;font-weight:bold;color:var(--wood-dark);margin-bottom:5px;';
  titleDiv.textContent = 'Le Shackachaga — Studio Tools';
  card.appendChild(titleDiv);

  // Subtitle
  var sub = document.createElement('div');
  sub.style.cssText = 'font-size:0.82rem;color:var(--wood-mid);margin-bottom:18px;';
  sub.textContent = fr ? 'Pour toutes les fonctionnalités, autorisez ces accès:' : 'To use all features, please allow the following:';
  card.appendChild(sub);

  // Permission rows config
  var perms = [
    {type:'gps',  icon:'📍', label:fr?'Localisation GPS':'GPS Location',  hint:fr?'Pointage, carte équipe':'Time tracking, team map'},
    {type:'mic',  icon:'🎤', label:fr?'Microphone':'Microphone',           hint:fr?'Appels, notes vocales':'Calls, voice notes'},
    {type:'notif',icon:'🔔', label:fr?'Notifications':'Notifications',     hint:fr?'Nouveaux messages, appels':'New messages, calls'},
    {type:'photo',icon:'📷', label:fr?'Photos':'Photos',                   hint:fr?'Demandé à chaque ajout':'Requested when adding photo', auto:true},
  ];

  var rowsDiv = document.createElement('div');
  rowsDiv.style.cssText = 'display:flex;flex-direction:column;gap:10px;margin-bottom:20px;';

  perms.forEach(function(p) {
    var row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:center;gap:12px;background:white;border-radius:12px;padding:12px 14px;' + (p.auto?'opacity:0.65;':'cursor:pointer;');
    if (!p.auto) row.onclick = function(){ onboardRequestPerm(row, p.type); };

    var iconDiv = document.createElement('div');
    iconDiv.style.cssText = 'font-size:1.4rem;width:32px;text-align:center;flex-shrink:0;';
    iconDiv.textContent = p.icon;

    var textDiv = document.createElement('div');
    textDiv.style.cssText = 'flex:1;';

    var labelDiv = document.createElement('div');
    labelDiv.style.cssText = 'font-weight:700;font-size:0.88rem;color:var(--wood-dark);';
    labelDiv.textContent = p.label;

    var hintDiv = document.createElement('div');
    hintDiv.style.cssText = 'font-size:0.74rem;color:var(--wood-mid);margin-top:1px;';
    hintDiv.textContent = p.hint;

    textDiv.appendChild(labelDiv);
    textDiv.appendChild(hintDiv);

    var statusDiv = document.createElement('div');
    statusDiv.className = 'perm-status';
    statusDiv.style.cssText = 'font-size:0.75rem;font-weight:700;color:var(--wood-mid);min-width:40px;text-align:right;flex-shrink:0;';
    statusDiv.textContent = p.auto ? ('✓ '+(fr?'Auto':'Auto')) : (fr?'Appuyer':'Tap');
    if (p.auto) statusDiv.style.color = 'var(--green)';

    row.appendChild(iconDiv);
    row.appendChild(textDiv);
    row.appendChild(statusDiv);
    rowsDiv.appendChild(row);
  });
  card.appendChild(rowsDiv);

  // Continue button
  var contBtn = document.createElement('button');
  contBtn.style.cssText = 'width:100%;padding:14px;background:var(--wood-dark);color:white;border:none;border-radius:12px;font-weight:700;font-size:0.95rem;cursor:pointer;margin-bottom:10px;';
  contBtn.textContent = fr ? "Continuer vers l'application" : 'Continue to app';
  contBtn.onclick = closePermOnboarding;
  card.appendChild(contBtn);

  // Fine print
  var fine = document.createElement('div');
  fine.style.cssText = 'text-align:center;font-size:0.72rem;color:var(--wood-mid);';
  fine.textContent = fr ? 'Modifiables dans les paramètres du navigateur.' : 'Changeable anytime in browser settings.';
  card.appendChild(fine);

  overlay.appendChild(card);
  document.body.appendChild(overlay);
}

async function onboardRequestPerm(rowEl, type) {
  var fr = currentLang === 'fr';
  var statusEl = rowEl.querySelector('.perm-status');
  if (statusEl) { statusEl.textContent = fr?'En cours...':'Requesting...'; statusEl.style.color='var(--amber)'; }
  rowEl.onclick = null; rowEl.style.cursor = 'default';

  var granted = false;
  if (type === 'gps') {
    granted = await new Promise(function(resolve) {
      if (!navigator.geolocation) { resolve(false); return; }
      navigator.geolocation.getCurrentPosition(
        function(){ _gpsGranted=true; localStorage.setItem('shack_gps_granted','1'); resolve(true); },
        function(){ resolve(false); },
        {enableHighAccuracy:false, timeout:10000}
      );
    });
  } else if (type === 'mic') {
    try {
      var s = await navigator.mediaDevices.getUserMedia({audio:true});
      s.getTracks().forEach(function(t){ t.stop(); });
      _micGranted=true; localStorage.setItem('shack_mic_granted','1'); granted=true;
    } catch(e) {}
  } else if (type === 'notif' && 'Notification' in window) {
    var res = await Notification.requestPermission();
    granted = (res==='granted');
    if (granted) { _notifGranted=true; localStorage.setItem('notif_enabled','1'); }
  }

  if (statusEl) {
    statusEl.textContent = granted ? '✅' : (fr?'✕ Refusé':'✕ Denied');
    statusEl.style.color = granted ? 'var(--green)' : 'var(--red)';
  }
  rowEl.style.opacity = '0.7';
}

function closePermOnboarding() {
  var el = document.getElementById('perm-onboard-overlay');
  if (el) { el.style.opacity='0'; setTimeout(function(){ el.remove(); },200); }
  if (_gpsGranted) startBackgroundGPS();
}

// ══════════════════════════════════════════════════════════════════
// PUSH NOTIFICATIONS (Web Notifications API)
// ══════════════════════════════════════════════════════════════════

var _notifGranted = (window.Notification && Notification.permission === 'granted');

async function requestNotifPermission() {
  if (!('Notification' in window)) {
    toast(currentLang==='fr'?'⚠️ Notifications non supportées':'⚠️ Notifications not supported');
    return false;
  }
  if (Notification.permission === 'granted') {
    _notifGranted = true;
    toast(currentLang==='fr'?'🔔 Notifications déjà activées!':'🔔 Notifications already enabled!');
    updateNotifBtn();
    return true;
  }
  if (Notification.permission === 'denied') {
    toast(currentLang==='fr'?'🔕 Notifications bloquées — vérifiez les paramètres du navigateur':'🔕 Notifications blocked — check browser settings');
    return false;
  }
  const result = await Notification.requestPermission();
  _notifGranted = (result === 'granted');
  if (_notifGranted) {
    localStorage.setItem('notif_enabled','1');
    toast(currentLang==='fr'?'🔔 Notifications activées!':'🔔 Notifications enabled!');
    // Send a test notification
    sendNotif(
      currentLang==='fr'?'Le Shackachaga — Studio Tools':'Le Shackachaga — Studio Tools',
      currentLang==='fr'?'✅ Notifications activées pour votre atelier!':'✅ Notifications enabled for your workshop!',
      '🪵'
    );
  } else {
    toast(currentLang==='fr'?'🔕 Notifications refusées':'🔕 Notifications denied');
  }
  updateNotifBtn();
  return _notifGranted;
}

function sendNotif(title, body, icon) {
  if (!_notifGranted || !('Notification' in window)) return;
  try {
    var n = new Notification(title, {
      body:  body,
      icon:  icon || '/favicon.ico',
      badge: '/favicon.ico',
      tag:   'shack-' + Date.now(),
    });
    n.onclick = function(){ window.focus(); n.close(); };
    setTimeout(function(){ n.close(); }, 8000);
  } catch(e) { console.warn('Notification failed:', e.message); }
}

function updateNotifBtn() {
  var btn = document.getElementById('notif-toggle-btn');
  if (!btn) return;
  var granted = window.Notification && Notification.permission === 'granted';
  btn.textContent = granted
    ? (currentLang==='fr'?'🔔 Activées':'🔔 Enabled')
    : (currentLang==='fr'?'🔕 Activer les notifications':'🔕 Enable notifications');
  btn.style.background = granted ? 'var(--green)' : '';
  btn.style.color      = granted ? 'white' : '';
}

// Hook notifications into key events:
// 1. New chat message from another user
// 2. Incoming call
// 3. Project status advance
// 4. Team member clocks in

function notifNewMessage(fromName, preview) {
  if (!_notifGranted || !fromName) return;
  sendNotif(
    'Le Shackachaga — ' + escapeHtml(fromName),
    preview ? preview.substring(0,80) : (currentLang==='fr'?'Nouveau message':'New message'),
    '💬'
  );
}

function notifIncomingCall(fromName, isVideo) {
  if (!_notifGranted) return;
  sendNotif(
    'Le Shackachaga',
    (currentLang==='fr'?'📞 Appel entrant de ':'📞 Incoming call from ') + escapeHtml(fromName||'Team'),
    isVideo ? '📹' : '📞'
  );
}

function notifProjectAdvanced(projectName, newStatus) {
  if (!_notifGranted) return;
  var statusLabels = {
    quote:'Devis envoyé/Quote Sent', active:'Fabrication/In Production',
    finish:'Finition/Finishing', ready:'Prêt/Ready', done:'Livré/Delivered'
  };
  var label = statusLabels[newStatus] || newStatus;
  var parts = label.split('/');
  var localLabel = currentLang==='fr' ? (parts[0]||label) : (parts[1]||label);
  sendNotif(
    'Le Shackachaga — ' + escapeHtml(projectName||''),
    (currentLang==='fr'?'→ Statut mis à jour: ':'→ Status updated: ') + localLabel
  );
}

function notifClockIn(memberName) {
  if (!_notifGranted) return;
  sendNotif(
    'Le Shackachaga',
    (currentLang==='fr'?' vient de pointer entrée':' just clocked in') + ' — ' + escapeHtml(memberName||'Team')
  );
}

// Auto-check on load
window.addEventListener('load', function() {
  _notifGranted = !!(window.Notification && Notification.permission === 'granted');
  setTimeout(updateNotifBtn, 500);
});


// ══════════════════════════════════════════════════════════════════
// WORK PLANNER — calendar task management
// ══════════════════════════════════════════════════════════════════
var _workTasks = [];
var _wpLoaded  = false;
var TASK_TYPES = {
  cut:      {fr:'Coupe',      en:'Cutting',      col:'#7B4B1A', icon:'🪚'},
  sand:     {fr:'Sablage',    en:'Sanding',      col:'#C4956A', icon:'🔧'},
  finish:   {fr:'Finition',   en:'Finishing',    col:'#3B82F6', icon:'🎨'},
  assemble: {fr:'Assemblage', en:'Assembly',     col:'#2D6A4F', icon:'🔩'},
  deliver:  {fr:'Livraison',  en:'Delivery',     col:'#059669', icon:'🚚'},
  order:    {fr:'Commande',   en:'Order/Supply', col:'#F59E0B', icon:'📦'},
  meeting:  {fr:'Rencontre',  en:'Meeting',      col:'#8B5CF6', icon:'🤝'},
  other:    {fr:'Autre',      en:'Other',        col:'#6B7280', icon:'📋'},
};

async function loadWorkTasks() {
  if (!sb) return [];
  try {
    var res = await sb.from('work_tasks').select('*').order('date').order('created_at');
    if (!res.error) { _workTasks = res.data||[]; _wpLoaded=true; }
  } catch(e) {}
  return _workTasks;
}

async function saveWorkTask(task) {
  if (!sb) return null;
  try {
    var ud = await sb.auth.getUser();
    var author = ud?.data?.user?.email?.split('@')[0]||'Team';
    var pl = {title:task.title,date:task.date,type:task.type||'other',assignee:task.assignee||author,priority:task.priority||'normal',notes:task.notes||'',done:false,created_at:new Date().toISOString()};
    var res = task.id ? await sb.from('work_tasks').update(pl).eq('id',task.id).select() : await sb.from('work_tasks').insert([pl]).select();
    if (res.error) throw res.error;
    await loadWorkTasks();
    return res.data?.[0]||null;
  } catch(e) { toast('⚠️ '+e.message); return null; }
}

async function toggleTaskDone(taskId) {
  if (!sb) return;
  var t = _workTasks.find(function(x){return x.id===taskId;});
  if (!t) return;
  t.done = !t.done;
  await sb.from('work_tasks').update({done:t.done}).eq('id',taskId);
  renderCalendar();
  if (_calSelectedDay) calSelectDay(_calSelectedDay);
}

async function deleteWorkTask(taskId) {
  if (!sb) return;
  var fr=currentLang==='fr';
  if (!confirm(fr?'Supprimer cette tâche?':'Delete this task?')) return;
  await sb.from('work_tasks').delete().eq('id',taskId);
  _workTasks = _workTasks.filter(function(t){return t.id!==taskId;});
  renderCalendar();
  if (_calSelectedDay) calSelectDay(_calSelectedDay);
}

function showAddTaskModal(dateStr) {
  var fr=currentLang==='fr';
  var el=document.getElementById('add-task-modal'); if(el) el.remove();
  var d=new Date(dateStr+'T12:00:00');
  var dDisplay=d.toLocaleDateString(fr?'fr-CA':'en-CA',{weekday:'long',day:'numeric',month:'long'});
  var typeOpts=Object.entries(TASK_TYPES).map(function(kv){var k=kv[0],v=kv[1];return '<option value="'+k+'">'+v.icon+' '+(fr?v.fr:v.en)+'</option>';}).join('');
  var priOpts=['<option value="low">🟢 '+(fr?'Faible':'Low')+'</option>','<option value="normal" selected>🟡 Normal</option>','<option value="high">🔴 '+(fr?'Urgent':'Urgent')+'</option>'].join('');
  var modal=document.createElement('div');
  modal.id='add-task-modal';
  modal.style.cssText='position:fixed;inset:0;background:rgba(46,26,0,0.7);z-index:700;display:flex;align-items:flex-end;justify-content:center;';
  var sheet=document.createElement('div');
  sheet.style.cssText='background:var(--wood-cream);border-radius:20px 20px 0 0;width:100%;max-width:520px;padding:20px 18px 36px;';
  sheet.innerHTML='<div style="width:40px;height:4px;background:var(--wood-pale);border-radius:2px;margin:0 auto 16px;"></div>'
    +'<div style="font-size:1rem;font-weight:700;color:var(--wood-dark);margin-bottom:4px;">➕ '+(fr?'Ajouter une tâche':'Add a task')+'</div>'
    +'<div style="font-size:0.8rem;color:var(--wood-mid);margin-bottom:14px;">📅 '+escapeHtml(dDisplay)+'</div>'
    +'<div style="display:flex;flex-direction:column;gap:10px;">'
    +'<input type="text" id="wt-title" placeholder="'+(fr?'Description de la tâche...':'Task description...')+'" style="padding:10px;border-radius:10px;border:1.5px solid var(--wood-pale);font-size:0.88rem;background:white;">'
    +'<div style="display:flex;gap:8px;">'
    +'<select id="wt-type" style="flex:1;padding:9px;border-radius:10px;border:1.5px solid var(--wood-pale);font-size:0.82rem;background:white;">'+typeOpts+'</select>'
    +'<select id="wt-priority" style="flex:1;padding:9px;border-radius:10px;border:1.5px solid var(--wood-pale);font-size:0.82rem;background:white;">'+priOpts+'</select>'
    +'</div>'
    +'<input type="text" id="wt-assignee" placeholder="'+(fr?'Assigné à (optionnel)':'Assigned to (optional)')+'" style="padding:10px;border-radius:10px;border:1.5px solid var(--wood-pale);font-size:0.82rem;background:white;">'
    +'<textarea id="wt-notes" placeholder="'+(fr?'Notes...':'Notes...')+'" rows="2" style="padding:10px;border-radius:10px;border:1.5px solid var(--wood-pale);font-size:0.82rem;background:white;resize:none;"></textarea>'
    +'</div>'
    +'<div style="display:flex;gap:8px;margin-top:14px;">'
    +'<button onclick="submitAddTask(\''+dateStr+'\')" style="flex:1;padding:12px;background:var(--wood-dark);color:white;border:none;border-radius:10px;font-weight:700;font-size:0.9rem;cursor:pointer;">✅ '+(fr?'Sauvegarder':'Save')+'</button>'
    +'<button onclick="document.getElementById(\'add-task-modal\').remove()" style="padding:12px 18px;background:var(--wood-pale);border:none;border-radius:10px;font-size:0.9rem;cursor:pointer;">'+(fr?'Annuler':'Cancel')+'</button>'
    +'</div>';
  modal.appendChild(sheet);
  modal.onclick=function(e){if(e.target===modal)modal.remove();};
  document.body.appendChild(modal);
  setTimeout(function(){document.getElementById('wt-title')?.focus();},100);
}

async function submitAddTask(dateStr) {
  var title=document.getElementById('wt-title')?.value?.trim();
  if (!title){toast(currentLang==='fr'?'⚠️ Entrez une description':'⚠️ Enter a description');return;}
  var task={title:title,date:dateStr,type:document.getElementById('wt-type')?.value||'other',priority:document.getElementById('wt-priority')?.value||'normal',assignee:document.getElementById('wt-assignee')?.value?.trim()||'',notes:document.getElementById('wt-notes')?.value?.trim()||''};
  document.getElementById('add-task-modal')?.remove();
  toast(currentLang==='fr'?'⏳ Sauvegarde...':'⏳ Saving...');
  var saved=await saveWorkTask(task);
  if (saved){toast(currentLang==='fr'?'✅ Tâche ajoutée!':'✅ Task added!');renderCalendar();calSelectDay(dateStr);}
}

function getTasksForDate(ds) {
  return _workTasks.filter(function(t){return t.date===ds;});
}

// ══════════════════════════════════════════════════════════════════
// DELIVERY CALENDAR
// ══════════════════════════════════════════════════════════════════
var _calYear=new Date().getFullYear(), _calMonth=new Date().getMonth(), _calSelectedDay=null;

function initCalendar() {
  var doRender=function(){ renderCalendar(); };
  var t=_wpLoaded?Promise.resolve():loadWorkTasks();
  var p=(allProjects&&allProjects.length)?Promise.resolve():loadProjects();
  Promise.all([t,p]).then(doRender);
}
function calNav(dir) {
  _calMonth+=dir;
  if (_calMonth>11){_calMonth=0;_calYear++;} if (_calMonth<0){_calMonth=11;_calYear--;}
  _calSelectedDay=null; var d=document.getElementById('cal-day-detail'); if(d) d.style.display='none'; renderCalendar();
}
function calGoToday() {
  _calYear=new Date().getFullYear(); _calMonth=new Date().getMonth();
  _calSelectedDay=null; var d=document.getElementById('cal-day-detail'); if(d) d.style.display='none'; renderCalendar();
}
function getStatusColor(status, delivDate) {
  var t=new Date(); t.setHours(0,0,0,0);
  if (delivDate && new Date(delivDate)<t && status!=='done') return 'var(--red)';
  return {quote:'var(--amber)',active:'var(--blue)',finish:'#7B4B1A',ready:'var(--green)',done:'#9E9E9E'}[status]||'var(--wood-mid)';
}
function renderCalendar() {
  var fr=currentLang==='fr';
  var MN=fr?['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']:['January','February','March','April','May','June','July','August','September','October','November','December'];
  var DN=fr?['Lun','Mar','Mer','Jeu','Ven','Sam','Dim']:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  var now=new Date();
  var year=_calYear||now.getFullYear();
  var month=(_calMonth!==undefined)?_calMonth:now.getMonth();
  if(_calYear===undefined){_calYear=year;_calMonth=month;}
  var label=document.getElementById('cal-month-label');
  if(label) label.textContent=MN[month]+' '+year;
  var grid=document.getElementById('cal-grid'); if(!grid) return;
  var firstDay=new Date(year,month,1).getDay();
  var startOffset=(firstDay===0)?6:firstDay-1;
  var daysInMonth=new Date(year,month+1,0).getDate();
  var today=new Date(); today.setHours(0,0,0,0);
  var headerHTML=DN.map(function(d){return '<div style="text-align:center;font-size:0.65rem;font-weight:700;color:var(--wood-mid);padding:4px 0;text-transform:uppercase;letter-spacing:0.04em;">'+d+'</div>';}).join('');
  var cellsHTML='';
  for(var i=0;i<startOffset;i++) cellsHTML+='<div style="min-height:72px;"></div>';
  for(var day=1;day<=daysInMonth;day++){
    var ds=year+'-'+('0'+(month+1)).slice(-2)+'-'+('0'+day).slice(-2);
    var cd=new Date(year,month,day);
    var isToday=(cd.getTime()===today.getTime());
    var isSel=(_calSelectedDay===ds);
    var isPast=(cd<today);
    var dayProjs=(allProjects||[]).filter(function(p){return p.delivery===ds;});
    var dayTasks=getTasksForDate(ds);
    var pendingTasks=dayTasks.filter(function(t){return !t.done;});
    var doneTasks=dayTasks.filter(function(t){return t.done;});
    var projPills=dayProjs.slice(0,2).map(function(p){
      var col=getStatusColor(p.status,p.delivery);
      var lbl=escapeHtml((p.name||'').split(' ')[0]);
      return '<div style="background:'+col+';color:white;border-radius:3px;padding:1px 4px;font-size:0.58rem;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:1px;">🚚 '+lbl+'</div>';
    }).join('');
    if(dayProjs.length>2) projPills+='<div style="font-size:0.55rem;color:var(--wood-mid);">+'+(dayProjs.length-2)+'</div>';
    var taskPills=pendingTasks.slice(0,3).map(function(t){
      var tt=TASK_TYPES[t.type]||TASK_TYPES.other;
      var pd=t.priority==='high'?'🔴 ':'';
      return '<div style="background:'+tt.col+'22;border-left:2px solid '+tt.col+';color:'+tt.col+';border-radius:0 3px 3px 0;padding:1px 4px;font-size:0.58rem;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:1px;">'+pd+tt.icon+' '+escapeHtml(t.title.length>11?t.title.slice(0,11)+'...':t.title)+'</div>';
    }).join('');
    if(doneTasks.length>0) taskPills+='<div style="font-size:0.55rem;color:#9E9E9E;">&#10003;'+doneTasks.length+'</div>';
    if(pendingTasks.length>3) taskPills+='<div style="font-size:0.55rem;color:var(--wood-mid);">+'+(pendingTasks.length-3)+'</div>';
    var cellBg=isSel?'var(--amber)':isToday?'var(--wood-pale)':'white';
    var datCol=isSel?'white':isToday?'var(--amber)':((isPast&&dayProjs.length+dayTasks.length===0)?'#ccc':'var(--wood-dark)');
    var border=isSel?'2px solid var(--amber)':isToday?'2px solid var(--amber)':'1px solid #F0EAE2';
    cellsHTML+='<div data-ds="'+ds+'" onclick="calSelectDay(this.dataset.ds)" style="min-height:72px;background:'+cellBg+';border-radius:8px;border:'+border+';padding:4px;cursor:pointer;overflow:hidden;">'
      +'<div style="font-size:0.75rem;font-weight:700;color:'+datCol+';margin-bottom:3px;line-height:1;">'+day+'</div>'
      +projPills+taskPills
      +'</div>';
  }
  grid.innerHTML=headerHTML+cellsHTML;
}


function calSelectDay(dateStr) {
  _calSelectedDay=dateStr; renderCalendar();
  var fr=currentLang==='fr', today=new Date(); today.setHours(0,0,0,0);
  var cellDate=new Date(dateStr+'T12:00:00');
  var projs=(allProjects||[]).filter(function(p){return p.delivery===dateStr;});
  var tasks=getTasksForDate(dateStr);
  var titleEl=document.getElementById('cal-day-title');
  var projsEl=document.getElementById('cal-day-projects');
  var detail=document.getElementById('cal-day-detail');
  if(!detail) return;
  detail.style.display='block';
  var dtitle=cellDate.toLocaleDateString(fr?'fr-CA':'en-CA',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  if(titleEl) titleEl.textContent=dtitle.charAt(0).toUpperCase()+dtitle.slice(1);
  if(!projsEl) return;
  var html='';
  // Tasks section header
  html+='<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">'
    +'<div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--wood-mid);">'+(fr?'Tâches':'Tasks')+'</div>'
    +'<button data-ds="'+dateStr+'" onclick="showAddTaskModal(this.dataset.ds)" style="font-size:0.7rem;padding:4px 10px;background:var(--wood-dark);color:white;border:none;border-radius:6px;cursor:pointer;font-weight:700;">+ '+(fr?'Tâche':'Task')+'</button>'
    +'</div>';
  if(tasks.length===0){
    html+='<div style="font-size:0.8rem;color:var(--wood-mid);padding:6px 0 10px;font-style:italic;">'+(fr?'Aucune tâche — ajoutez-en une!':'No tasks yet — add one!')+'</div>';
  } else {
    tasks.forEach(function(t){
      var tt=TASK_TYPES[t.type]||TASK_TYPES.other;
      var priDot=t.priority==='high'?'border-left-color:var(--red);':'';
      html+='<div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:'+(t.done?'#F9F9F9':'white')+';border-radius:8px;border-left:3px solid '+tt.col+';'+priDot+'margin-bottom:6px;box-shadow:0 1px 3px rgba(46,26,0,0.06);">'
        +'<button data-tid="'+t.id+'" onclick="toggleTaskDone(this.dataset.tid*1)" style="flex-shrink:0;width:20px;height:20px;border-radius:5px;border:2px solid '+(t.done?tt.col:'#ddd')+';background:'+(t.done?tt.col:'white')+';cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:0.7rem;color:white;margin-top:1px;">'+(t.done?'&#10003;':'')+'</button>'
        +'<div style="flex:1;min-width:0;">'
        +'<div style="font-size:0.85rem;font-weight:'+(t.done?'400':'600')+';color:'+(t.done?'#999':'var(--wood-dark)')+';text-decoration:'+(t.done?'line-through':'none')+';">'+tt.icon+' '+escapeHtml(t.title)+'</div>'
        +(t.assignee?'<div style="font-size:0.72rem;color:var(--wood-mid);margin-top:2px;">&#128100; '+escapeHtml(t.assignee)+'</div>':'')
        +(t.notes?'<div style="font-size:0.72rem;color:var(--wood-mid);margin-top:2px;">&#128172; '+escapeHtml(t.notes)+'</div>':'')
        +'</div>'
        +'<button data-tid="'+t.id+'" onclick="deleteWorkTask(this.dataset.tid*1)" style="flex-shrink:0;padding:3px 7px;border:none;background:none;color:#ccc;font-size:0.8rem;cursor:pointer;">&#x2715;</button>'
        +'</div>';
    });
  }
  // Deliveries
  if(projs.length>0){
    html+='<div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--wood-mid);margin:12px 0 8px;">&#128666; '+(fr?'Livraisons':'Deliveries')+'</div>';
    projs.forEach(function(p){
      var col=getStatusColor(p.status,p.delivery);
      var SL={new:fr?'Nouveau':'New',quote:fr?'Devis':'Quote',active:fr?'Fabrication':'Production',finish:fr?'Finition':'Finishing',ready:fr?'Prêt':'Ready',done:fr?'Livré':'Delivered'};
      var overdue=(new Date(dateStr)<today&&p.status!=='done');
      html+='<div data-pid="'+p.id+'" onclick="openProject(this.dataset.pid*1)" style="display:flex;align-items:center;gap:10px;padding:10px;background:white;border-radius:8px;border-left:3px solid '+col+';margin-bottom:6px;cursor:pointer;box-shadow:0 1px 3px rgba(46,26,0,0.06);">'
        +'<div style="flex:1;min-width:0;">'
        +'<div style="font-size:0.85rem;font-weight:600;color:var(--wood-dark);">'+escapeHtml(p.name||'')+'</div>'
        +'<div style="font-size:0.72rem;color:var(--wood-mid);margin-top:2px;">'+escapeHtml(translateProjectType(p.piece||''))+'</div>'
        +'</div>'
        +'<div style="background:'+col+';color:white;border-radius:12px;padding:3px 9px;font-size:0.7rem;font-weight:700;flex-shrink:0;">'+(overdue?'&#9888;&#65039; ':'')+(SL[p.status]||p.status)+'</div>'
        +'</div>';
    });
  }
  if(projs.length===0&&tasks.length===0){
    html='<div style="padding:4px 0 10px;">'
      +'<div style="font-size:0.8rem;color:var(--wood-mid);font-style:italic;margin-bottom:10px;">'+(fr?'Journée libre!':'Free day!')+'</div>'
      +'<button data-ds="'+dateStr+'" onclick="showAddTaskModal(this.dataset.ds)" style="width:100%;padding:10px;background:var(--wood-dark);color:white;border:none;border-radius:10px;font-weight:700;font-size:0.85rem;cursor:pointer;">+ '+(fr?'Planifier une tâche':'Plan a task')+'</button>'
      +'</div>';
  }
  projsEl.innerHTML=html;
}


