

// ══════════════════════════════════════════════════
// COMPLETE BILINGUAL TRANSLATION SYSTEM
// ══════════════════════════════════════════════════
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
    gps_getting: '📍 Getting GPS...',
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
    dyn_loading: 'Loading...',
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
    overdue_msg_pl: 'projets en retard'
  }
};
// Expose T globally so t() works from any context
window.T = T;
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
  const setTxt = (id, key) => { const el = document.getElementById(id); if (el) el.textContent = t(key); };
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
  // Sync label
  const syncLabel = document.getElementById('sync-label');
  if (syncLabel && syncLabel.textContent === currentLang==='fr'?'Veuillez vous connecter':'Please sign in' || syncLabel?.textContent === 'Veuillez vous connecter') {
    setSyncStatus('', t('sync_signed_out'));
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

  document.getElementById('q-res-title').textContent = (client ? client + ' — ' : '') + (type || 'Custom Project');

  let html = [
    ['Materials (incl. wood factor)', `$${matT.toFixed(2)}`],
    [`Labour (${hrs}h × $${rate} × complexity)`, `$${lab.toFixed(2)}`],
    [`Overhead (${Math.round(oh*100)}%)`, `$${ohAmt.toFixed(2)}`],
    [`Profit margin (${Math.round(mg*100)}%)`, `$${mgAmt.toFixed(2)}`],
    ...(del ? [['Delivery', `$${del.toFixed(2)}`]] : [])
  ].map(([l,v]) => `<div class="price-row"><span class="price-label">${l}</span><span class="price-val">${v}</span></div>`).join('');

  html += `<div class="result-box green">
    <div class="price-row"><span class="price-label">Minimum price floor</span><span class="price-val">$${min.toFixed(0)}</span></div>
    <div class="price-row"><span class="price-label">Suggested price</span><span class="price-total">$${sug.toLocaleString()}</span></div>
    <div class="price-row"><span class="price-label">50% deposit</span><span class="price-val">$${dep.toLocaleString()}</span></div>
    <div style="border-top:1px solid rgba(45,106,79,0.2);margin-top:8px;padding-top:8px;">
      <div class="price-row"><span class="price-label">+ GST (5%)</span><span class="price-val">$${gst.toFixed(2)}</span></div>
      <div class="price-row"><span class="price-label">+ QST (9.975%)</span><span class="price-val">$${qst.toFixed(2)}</span></div>
      <div class="price-row"><span class="price-label" style="font-weight:700;">Total with taxes</span><span class="price-total">$${total.toFixed(2)}</span></div>
    </div>
  </div>`;

  document.getElementById('quote-lines').innerHTML = html;
  document.getElementById('quote-result').style.display = 'block';
  document.getElementById('quote-result').scrollIntoView({behavior:'smooth'});
}

async function saveQuoteAsProject() {
  if (!lastQuote || !sb) return;
  const p = {
    name: lastQuote.client || 'Unknown Client',
    piece: lastQuote.type || 'Custom piece',
    amount: lastQuote.sug,
    balance: lastQuote.sug,
    status: 'quote',
    review: 'No',
    created: new Date().toLocaleDateString()
  };
  setSyncStatus('syncing','Saving...');
  const { error } = await sb.from('projects').insert([p]);
  if (error) { toast(currentLang==='fr'?'⚠️ Échec de la sauvegarde.':'⚠️ Save failed.'); console.error(error); }
  else { toast(currentLang==='fr'?'✅ Sauvegardé comme projet!':'✅ Saved as project!'); setSyncStatus('live',currentLang==='fr'?'Synchronisé':'Live sync'); }
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
        <div><div class="proj-name">${p.name || '—'}</div><div class="proj-piece">${p.piece || '—'}</div></div>
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
    </div>
    <div style="margin-top:16px;">
      <div style="font-size:0.78rem;font-weight:700;color:var(--wood-mid);text-transform:uppercase;margin-bottom:8px;">${t('dyn_add_note')}</div>
      <div style="display:flex;gap:6px;margin-bottom:8px;flex-wrap:wrap;">
        <select id="note-type" style="width:auto;flex:1;min-width:80px;font-size:0.78rem;padding:6px 8px;">
          <option value="note">Note</option><option value="call">Call</option>
          <option value="email">Email</option><option value="visit">Visit</option>
        </select>
        <input type="text" id="note-text" placeholder="${t('dyn_note_placeholder')}" style="flex:3;min-width:120px;font-size:0.82rem;padding:6px 10px;">
        <button class="btn btn-primary btn-sm" onclick="submitNote('+id+')">Add</button>
      </div>
      <div id="notes-list-${id}"><p style="font-size:0.8rem;color:var(--wood-mid);">Loading notes...</p></div>
    </div>`;
  document.getElementById('proj-modal').classList.add('open');
  // Load notes
  loadProjectNotes(id).then(notes => {
    const el = document.getElementById('notes-list-'+id);
    if (el) el.innerHTML = renderNotes(notes);
  });
}

async function submitNote(projectId) {
  const note = document.getElementById('note-text').value.trim();
  const type = document.getElementById('note-type').value;
  if (!note) return;
  const { data: { user } } = await sb.auth.getUser();
  await addProjectNote(projectId, note, type, user?.email?.split('@')[0]||'Team');
  document.getElementById('note-text').value = '';
  const notes = await loadProjectNotes(projectId);
  const el = document.getElementById('notes-list-'+projectId);
  if (el) el.innerHTML = renderNotes(notes);
  toast(currentLang==='fr'?'✅ Note ajoutée!':'✅ Note added!');
}

async function updateProject(id) {
  if (!sb) return;
  setSyncStatus('syncing','Saving...');
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
  toast(currentLang==='fr'?'→ Statut mis à jour!':'→ Status updated!'); closeModal('proj-modal');
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
  setSyncStatus('syncing','Saving...');
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
    list.innerHTML = `<div class="empty-state"><div class="icon">🌲</div><p>No materials tracked yet.<br>Tap + Add to get started.</p></div>`;
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
  document.getElementById('wm-title').textContent = 'Add Material';
  ['wm-id','wm-species','wm-grade','wm-supplier','wm-qty','wm-cost','wm-notes'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('wm-unit').value = 'slabs';
  document.getElementById('wm-del-btn').style.display = 'none';
  document.getElementById('wood-modal').classList.add('open');
}

function openEditWood(id) {
  const w = woodItems.find(x => x.id === id);
  if (!w) return;
  currentWoodId = id;
  document.getElementById('wm-title').textContent = 'Edit Material';
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
  setSyncStatus('syncing','Saving...');
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
  setSyncStatus('syncing','Saving...');
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
  btn.disabled = true; btn.textContent = 'Signing in...';
  errEl.style.display = 'none';
  const { error } = await sb.auth.signInWithPassword({ email, password: pw });
  if (error) {
    showLoginError('Incorrect email or password. Try again.');
    btn.disabled = false; btn.textContent = 'Sign In';
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
  setSyncStatus('', 'Signed out');
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
  updateMapTabVisibility();
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
  const d = new Date();
  const validUntil = new Date(d.getTime() + 30*24*60*60*1000).toLocaleDateString();
  const gst = (p.amount * 0.05).toFixed(2);
  const qst = (p.amount * 0.09975).toFixed(2);
  const total = (p.amount * 1.14975).toFixed(2);
  const dep = (p.amount * 0.5).toFixed(2);
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
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

/* LANGUAGE TOGGLE */
.lang-bar{background:#1a0f00;display:flex;justify-content:flex-end;align-items:center;padding:4px 12px;gap:6px;}
.lang-btn{background:transparent;border:1px solid rgba(196,149,106,0.4);color:rgba(196,149,106,0.7);font-family:'DM Sans',sans-serif;font-size:0.7rem;font-weight:600;letter-spacing:0.08em;padding:3px 10px;border-radius:20px;cursor:pointer;transition:all 0.2s;text-transform:uppercase;}
.lang-btn.active{background:var(--wood-light);border-color:var(--wood-light);color:var(--wood-dark);}
.lang-btn:hover:not(.active){border-color:var(--wood-light);color:var(--wood-light);}



/* WOOD MATERIAL CALCULATOR */
.mat-section{background:var(--wood-pale);border-radius:var(--radius-sm);padding:14px;margin:12px 0;border-left:3px solid var(--wood-mid);}
.mat-section-title{font-size:0.78rem;font-weight:700;color:var(--wood-mid);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:10px;}
.size-chart{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px;margin-bottom:10px;}
.size-btn{padding:8px 10px;border:1.5px solid var(--wood-pale);border-radius:var(--radius-sm);background:var(--white);cursor:pointer;font-family:'DM Sans',sans-serif;font-size:0.78rem;text-align:center;transition:all 0.15s;-webkit-tap-highlight-color:transparent;}
.size-btn:hover,.size-btn.active{border-color:var(--wood-mid);background:var(--wood-pale);font-weight:600;}
.size-btn .size-name{font-weight:600;color:var(--wood-dark);display:block;}
.size-btn .size-dims{font-size:0.68rem;color:var(--wood-mid);display:block;margin-top:2px;}
.size-btn .size-fbm{font-size:0.65rem;color:var(--green);display:block;margin-top:1px;}
.fbm-board-row{display:grid;grid-template-columns:2fr 1fr 1fr 1fr auto;gap:6px;align-items:center;margin-bottom:6px;}
@media(max-width:480px){.fbm-board-row{grid-template-columns:1fr 1fr;gap:5px;}}
.fbm-total-box{background:var(--white);border-radius:var(--radius-sm);padding:10px 14px;margin-top:10px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;}
.fbm-total-label{font-size:0.8rem;color:var(--wood-mid);}
.fbm-total-val{font-family:'Playfair Display',serif;font-size:1.2rem;font-weight:700;color:var(--green);}
.fbm-rate-row{display:flex;gap:8px;align-items:center;margin-top:8px;flex-wrap:wrap;}
.custom-dims{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:8px;}


/* ── TEAM TAB ─────────────────────────────────────── */
.team-tabs{display:flex;gap:0;background:var(--wood-pale);border-radius:var(--radius-sm);padding:3px;margin-bottom:16px;}
.team-tab{flex:1;padding:8px 4px;text-align:center;font-size:0.72rem;font-weight:600;border-radius:6px;cursor:pointer;color:var(--wood-mid);transition:all 0.2s;-webkit-tap-highlight-color:transparent;}
.team-tab.active{background:var(--wood-dark);color:var(--white);}

/* CHAT */
.chat-wrap{display:flex;flex-direction:column;height:420px;background:var(--white);border-radius:var(--radius-sm);overflow:hidden;box-shadow:0 2px 8px rgba(46,26,0,0.08);}
.chat-messages{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px;}
.chat-msg{max-width:78%;padding:8px 12px;border-radius:16px;font-size:0.85rem;line-height:1.45;word-break:break-word;}
.chat-msg.mine{align-self:flex-end;background:var(--wood-dark);color:var(--white);border-bottom-right-radius:4px;}
.chat-msg.theirs{align-self:flex-start;background:var(--wood-pale);color:var(--wood-dark);border-bottom-left-radius:4px;}
.chat-msg-name{font-size:0.65rem;font-weight:700;margin-bottom:2px;opacity:0.7;}
.chat-msg-time{font-size:0.6rem;opacity:0.5;margin-top:3px;text-align:right;}
.chat-input-wrap{display:flex;gap:8px;padding:10px;border-top:1px solid var(--wood-pale);background:var(--wood-cream);}
.chat-input-wrap input{flex:1;padding:9px 14px;border:1.5px solid var(--wood-pale);border-radius:30px;font-size:0.88rem;font-family:'DM Sans',sans-serif;outline:none;}
.chat-input-wrap input:focus{border-color:var(--wood-mid);}
.chat-send-btn{background:var(--wood-dark);border:none;color:var(--white);border-radius:50%;width:38px;height:38px;font-size:1.1rem;cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center;}

/* GPS TEAM MAP */
.team-map{background:var(--wood-pale);border-radius:var(--radius-sm);height:200px;display:flex;align-items:center;justify-content:center;font-size:0.85rem;color:var(--wood-mid);margin-bottom:12px;overflow:hidden;position:relative;}
.team-member-card{display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--white);border-radius:var(--radius-sm);box-shadow:0 2px 8px rgba(46,26,0,0.07);margin-bottom:8px;}
.member-avatar{width:36px;height:36px;border-radius:50%;background:var(--wood-mid);color:var(--white);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;flex-shrink:0;}
.member-info{flex:1;}
.member-name{font-weight:600;font-size:0.88rem;}
.member-status{font-size:0.72rem;color:var(--wood-mid);}
.member-loc-badge{font-size:0.68rem;padding:2px 8px;border-radius:10px;font-weight:700;}
.loc-shop-badge{background:#EAF4EE;color:var(--green);}
.loc-travel-badge{background:#FDF8EC;color:#7a5c00;}
.loc-onsite-badge{background:#E8F4FD;color:var(--blue);}
.loc-offline-badge{background:var(--wood-pale);color:var(--wood-mid);}
.online-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;}
.dot-green{background:var(--green-light);}
.dot-amber{background:var(--amber);}
.dot-grey{background:#90A4AE;}

/* CALL UI */
.call-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-bottom:14px;}
.call-user-card{background:var(--white);border-radius:var(--radius-sm);padding:14px;text-align:center;box-shadow:0 2px 8px rgba(46,26,0,0.08);cursor:pointer;transition:all 0.15s;}
.call-user-card:hover{box-shadow:var(--shadow);transform:translateY(-1px);}
.call-avatar{width:48px;height:48px;border-radius:50%;background:var(--wood-mid);color:var(--white);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.1rem;margin:0 auto 8px;}
.call-user-name{font-size:0.82rem;font-weight:600;margin-bottom:6px;}
.call-btns{display:flex;gap:6px;justify-content:center;}
.call-btn{border:none;border-radius:50%;width:32px;height:32px;cursor:pointer;font-size:0.9rem;display:flex;align-items:center;justify-content:center;}
.call-btn-voice{background:#EAF4EE;color:var(--green);}
.call-btn-video{background:#E8F4FD;color:var(--blue);}

/* ACTIVE CALL OVERLAY */
.call-overlay{position:fixed;inset:0;background:rgba(46,26,0,0.92);z-index:300;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;}
.call-overlay.hidden{display:none;}
.call-video-wrap{display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap;justify-content:center;}
.call-video-wrap video{border-radius:12px;background:#111;width:160px;height:120px;object-fit:cover;}
.call-video-wrap video.main-video{width:280px;height:200px;}
.call-status-text{color:var(--white);font-size:1rem;margin-bottom:20px;text-align:center;}
.call-controls{display:flex;gap:14px;}
.call-ctrl-btn{border:none;border-radius:50%;width:52px;height:52px;font-size:1.3rem;cursor:pointer;display:flex;align-items:center;justify-content:center;}
.call-ctrl-btn.hangup{background:var(--red);}
.call-ctrl-btn.mute{background:rgba(255,255,255,0.2);}
.call-ctrl-btn.cam{background:rgba(255,255,255,0.2);}

/* INCOMING CALL */
.incoming-call{position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:var(--wood-dark);color:var(--white);border-radius:var(--radius);padding:16px 20px;z-index:400;box-shadow:0 8px 32px rgba(0,0,0,0.4);min-width:260px;text-align:center;display:none;}
.incoming-call.show{display:block;animation:slideUp 0.3s ease;}
@keyframes slideUp{from{transform:translateX(-50%) translateY(20px);opacity:0}to{transform:translateX(-50%) translateY(0);opacity:1}}


/* MAP PAGE */
.map-stat-row{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:12px;}
.map-stat-box{flex:1;min-width:80px;background:var(--wood-pale);border-radius:var(--radius-sm);padding:10px;text-align:center;}
.map-stat-val{font-size:1.3rem;font-weight:700;font-family:'Playfair Display',serif;color:var(--wood-dark);}
.map-stat-lbl{font-size:0.7rem;color:var(--wood-mid);text-transform:uppercase;}
.map-user-row{display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--wood-pale);}
.map-user-row:last-child{border-bottom:none;}
.map-loc-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0;}
.map-time-bar{height:8px;border-radius:4px;background:var(--wood-pale);margin-top:4px;overflow:hidden;}
.map-time-fill{height:100%;border-radius:4px;background:var(--green-light);}


/* VOICE MESSAGES */
.voice-msg-wrap{display:flex;align-items:center;gap:8px;padding:4px 0;}
.voice-play-btn{background:var(--wood-dark);border:none;color:white;border-radius:50%;width:32px;height:32px;cursor:pointer;flex-shrink:0;font-size:0.9rem;display:flex;align-items:center;justify-content:center;}
.voice-play-btn.playing{background:var(--green);}
.voice-waveform{flex:1;height:28px;background:var(--wood-pale);border-radius:14px;position:relative;overflow:hidden;cursor:pointer;}
.voice-progress{height:100%;background:linear-gradient(90deg,var(--wood-mid),var(--wood-dark));border-radius:14px;transition:width 0.1s;width:0%;}
.voice-duration{font-size:0.68rem;color:var(--wood-mid);flex-shrink:0;min-width:28px;text-align:right;}
.voice-record-wrap{display:flex;align-items:center;gap:8px;padding:6px 10px;border-top:1px solid var(--wood-pale);}
.voice-record-btn{background:var(--red);border:none;color:white;border-radius:50%;width:36px;height:36px;font-size:1rem;cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:all 0.2s;}
.voice-record-btn.recording{background:#ff1744;animation:pulse-red 1s infinite;}
@keyframes pulse-red{0%,100%{transform:scale(1);}50%{transform:scale(1.1);}}
.voice-timer{font-size:0.78rem;color:var(--red);font-weight:700;min-width:36px;}



/* ── ANDROID / MOBILE FIXES ────────────────────────── */
@media (max-width: 480px) {
  /* Header — prevent sign-out from being clipped */
  .header-inner {
    padding: 6px 10px;
    flex-wrap: nowrap;
    gap: 6px;
  }
  .header-inner .logo div {
    font-size: 0.8rem;
  }
  .header-inner .logo span {
    display: none; /* hide "Studio Tools" sub-label on small screens */
  }
  .sync-status {
    font-size: 0.65rem;
    max-width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  /* Sign out button — always fully visible */
  button[onclick="doLogout()"],
  button[data-i18n="misc_sign_out"] {
    font-size: 0.68rem !important;
    padding: 6px 8px !important;
    min-width: 64px;
    white-space: nowrap;
    flex-shrink: 0;
  }
  /* Nav — horizontal scroll, never wraps */
  #main-nav {
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    gap: 0;
    padding: 0;
  }
  #main-nav::-webkit-scrollbar { display: none; }
  .nav-tab {
    flex-shrink: 0;
    font-size: 0.72rem;
    padding: 10px 12px;
    white-space: nowrap;
  }
  /* Pages — full width, no horizontal overflow */
  .page {
    padding: 12px 10px;
    overflow-x: hidden;
  }
  /* Cards — full width */
  .card { padding: 12px; }
  /* Buttons — easier to tap */
  .btn { min-height: 44px; font-size: 0.9rem; }
  /* Tables / grids — scroll horizontally */
  .call-grid { grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); }
  /* Row-2 — stack on very small screens */
  .row-2 { grid-template-columns: 1fr; }
  /* Modal — full screen on mobile */
  .modal {
    width: 100vw !important;
    max-width: 100vw !important;
    margin: 0 !important;
    border-radius: 12px 12px 0 0 !important;
    position: fixed !important;
    bottom: 0 !important;
    left: 0 !important;
  }
  .modal-overlay {
    align-items: flex-end !important;
  }
  /* Revenue chart — scrollable */
  #rev-chart { overflow-x: auto; }
}

@media (max-width: 360px) {
  .nav-tab { font-size: 0.65rem; padding: 9px 9px; }
  .btn-block { font-size: 0.88rem; }
}

/* AUTO-ANSWER TOGGLE */
.auto-answer-bar{display:flex;align-items:center;gap:10px;padding:8px 14px;background:var(--wood-pale);border-radius:var(--radius-sm);margin-bottom:10px;font-size:0.82rem;}
.auto-answer-bar .aa-label{flex:1;font-weight:600;color:var(--wood-dark);}
.aa-toggle{position:relative;width:44px;height:24px;flex-shrink:0;}
.aa-toggle input{opacity:0;width:0;height:0;}
.aa-slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background:#ccc;border-radius:24px;transition:0.3s;}
.aa-slider:before{position:absolute;content:"";height:18px;width:18px;left:3px;bottom:3px;background:white;border-radius:50%;transition:0.3s;}
.aa-toggle input:checked + .aa-slider{background:var(--green);}
.aa-toggle input:checked + .aa-slider:before{transform:translateX(20px);}
.aa-countdown{font-size:0.72rem;color:var(--amber);font-weight:700;min-width:20px;text-align:center;}

</style></head><body>
<div class="logo">Le Shackachaga</div>
<div class="sub">www.leshackachaga.com · info@shackachaga.com · (367)-321-8019 · Gatineau, QC</div>
<hr>
<div style="display:flex;justify-content:space-between;margin-bottom:20px;">
  <div><div class="section-title">Quote For</div><strong>${p.name||'—'}</strong><br>
  ${p.email?p.email+'<br>':''}${p.phone||''}</div>
  <div style="text-align:right;"><div class="section-title">Quote Details</div>
  Date: ${d.toLocaleDateString()}<br>Valid until: ${validUntil}<br>
  <strong style="color:#9B2335;">QUOTE #SH-${p.id||'000'}</strong></div>
</div>
<div class="section"><div class="section-title">Project Description</div>
<div style="font-size:13px;line-height:1.6;padding:12px;background:#FAF6F0;border-radius:8px;">
  <strong>${p.piece||'Custom piece'}</strong><br>
  ${p.dims?'Dimensions: '+p.dims+'<br>':''}
  ${p.wood?'Wood species: '+p.wood+'<br>':''}
  ${p.style?'Style: '+p.style+'<br>':''}
  ${p.vision||''}
</div></div>
<div class="section"><div class="section-title">Pricing</div>
<div class="row"><span>Subtotal</span><span>$${(p.amount||0).toLocaleString()}</span></div>
<div class="row"><span>GST (5%)</span><span>$${gst}</span></div>
<div class="row"><span>QST (9.975%)</span><span>$${qst}</span></div>
<div class="total-row"><span>Total (taxes included)</span><span>$${total}</span></div>
<div class="row" style="color:#7B4B1A;"><span>Deposit required to start (50%)</span><span>$${dep}</span></div>
</div>
<div class="section"><div class="section-title">Payment & Terms</div>
<div style="font-size:12px;line-height:1.7;color:#555;">
Payment accepted by Interac e-Transfer, cheque, or cash.<br>
This quote is valid for 30 days from the date of issue.<br>
Minor variations in colour and grain are inherent to natural wood — they are part of the charm of each unique piece.<br>
Any modifications after fabrication starts may incur additional charges.
</div></div>
<hr>
<div style="text-align:center;font-style:italic;color:#7B4B1A;font-size:13px;">Thank you for your trust. It is an honour to create for you.</div>
<div class="footer">Le Shackachaga · Gatineau, QC · Five generations of craftsmanship</div>

<script>
if ('serviceWorker' in navigator) {
  const swCode = `
const CACHE = 'shack-v21';
const ASSETS = [location.href];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(
  fetch(e.request).catch(() => caches.match(e.request))
));`;
  const blob = new Blob([swCode], {type:'application/javascript'});
  navigator.serviceWorker.register(URL.createObjectURL(blob)).catch(()=>{});
}
<\/script>
<\/body><\/html>`;
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

function renderNotes(notes) {
  if (!notes.length) return '<div class="empty-state" style="padding:20px;"><p>No notes yet.</p></div>';
  const noteTypeLabels = {
    note: {en:'Note', fr:'Note'}, call: {en:'Call', fr:'Appel'},
    email: {en:'Email', fr:'Courriel'}, visit: {en:'Visit', fr:'Visite'}
  };
  return notes.map(n => {
    const d = new Date(n.created_at);
    const timeStr = d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
    const noteLabel = noteTypeLabels[n.type||'note']?.[currentLang] || n.type || 'note';
    return `<div class="note-item">
      <div class="note-meta">
        <span class="note-type note-type-${n.type||'note'}">${noteLabel}</span>
        ${n.author||'Team'} · ${timeStr}
      </div>
      <div style="font-size:0.88rem;">${n.note}</div>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════════════
// CLIENTS DATABASE
// ══════════════════════════════════════════════════
var allClients = [];

async function loadClients() {
  if (!sb) return;
  const { data } = await sb.from('clients').select('*').order('first_name');
  allClients = data || [];
  renderClients(allClients);
  // Update stats
  document.getElementById('cs-total').textContent = allClients.length;
  const totalRev = allClients.reduce((s,c) => s+(c.total_spent||0), 0);
  document.getElementById('cs-revenue').textContent = '$'+(totalRev>=1000?(totalRev/1000).toFixed(1)+'k':totalRev.toLocaleString());
  document.getElementById('cs-repeat').textContent = allClients.filter(c=>(c.project_count||0)>1).length;
}

function renderClients(clients) {
  const list = document.getElementById('client-list');
  if (!clients.length) {
    list.innerHTML = `<div class="empty-state"><div class="icon">👥</div><p>${t('dyn_no_clients')}</p></div>`;
    return;
  }
  list.innerHTML = clients.map(c => `
    <div class="client-card" onclick="openClient(${c.id})">
      <div class="proj-header">
        <div>
          <div class="client-name">${c.first_name||''} ${c.last_name||''}</div>
          <div class="client-meta">${[c.email, c.phone, c.city].filter(Boolean).join(' · ')}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-weight:700;color:var(--green);font-size:0.88rem;">$${(c.total_spent||0).toLocaleString()}</div>
          <div style="font-size:0.72rem;color:var(--wood-mid);">${c.project_count||0} ${t('dyn_projects_word')}</div>
        </div>
      </div>
    </div>`).join('');
}

function filterClients() {
  const q = document.getElementById('client-search').value.toLowerCase();
  if (!q) { renderClients(allClients); return; }
  renderClients(allClients.filter(c =>
    (c.first_name+' '+c.last_name).toLowerCase().includes(q) ||
    c.email?.toLowerCase().includes(q) ||
    c.city?.toLowerCase().includes(q) ||
    c.phone?.includes(q)
  ));
}

function openAddClient() {
  document.getElementById('cm-title').textContent = t('nav_clients')+' — '+t('btn_add_new');
  document.getElementById('cm-body').innerHTML = buildClientForm(null);
  document.getElementById('client-modal').classList.add('open');
  applyTranslations(currentLang);
}

function buildClientForm(c) {
  var isEdit = !!c;
  var src = c ? (c.client_source||'') : '';
  var assigned = c ? (c.assigned_to||'') : '';
  var referred = c ? (c.referred_by||'') : '';
  return `
    <div class="row-2">
      <div><label data-i18n="lbl_first_name">First Name</label><input type="text" id="cm-fn" value="\${c?c.first_name||'':''}" placeholder="Jean"></div>
      <div><label data-i18n="lbl_last_name">Last Name</label><input type="text" id="cm-ln" value="\${c?c.last_name||'':''}" placeholder="Tremblay"></div>
    </div>
    <div class="row-2">
      <div><label data-i18n="lbl_email">Email</label><input type="email" id="cm-em" value="\${c?c.email||'':''}"></div>
      <div><label data-i18n="lbl_phone">Phone</label><input type="tel" id="cm-ph" value="\${c?c.phone||'':''}"></div>
    </div>
    <div class="row-2">
      <div><label data-i18n="lbl_city">City</label><input type="text" id="cm-ci" value="\${c?c.city||'':''}" placeholder="Gatineau"></div>
      <div><label data-i18n="lbl_pref_wood">Preferred Wood</label><input type="text" id="cm-wd" value="\${c?c.preferred_wood||'':(c&&c.notes?'':'')}" placeholder="e.g. Black Walnut"></div>
    </div>
    <div style="background:var(--wood-pale);border-radius:var(--radius-sm);padding:12px;margin:10px 0;border-left:3px solid var(--amber);">
      <div style="font-size:0.72rem;font-weight:700;color:var(--wood-mid);text-transform:uppercase;margin-bottom:8px;">🛡️ <span data-i18n="prot_client_source">Client Source & Ownership</span></div>
      <label data-i18n="prot_client_source">How Did They Find Us?</label>
      <select id="cm-src">
        <option value="Instagram" \${src==='Instagram'?'selected':''}>Instagram</option>
        <option value="Facebook" \${src==='Facebook'?'selected':''}>Facebook</option>
        <option value="Google" \${src==='Google'?'selected':''}>Google Search</option>
        <option value="Referral" \${src==='Referral'?'selected':''}>Client Referral</option>
        <option value="Word of mouth" \${src==='Word of mouth'?'selected':''}>Word of Mouth</option>
        <option value="Signage" \${src==='Signage'?'selected':''}>Signage / Drive-by</option>
        <option value="Website" \${src==='Website'?'selected':''}>Website</option>
        <option value="Other" \${src==='Other'||!src?'selected':''}>Other</option>
      </select>
      <div class="row-2" style="margin-top:8px;">
        <div><label data-i18n="prot_referred_by">Referred By</label><input type="text" id="cm-referred" value="\${referred}" placeholder="e.g. Marie Tremblay"></div>
        <div><label data-i18n="prot_assigned_to">Assigned To</label>
          <select id="cm-assigned">
            <option value="">— \${t('dyn_loading')} —</option>
          </select>
        </div>
      </div>
    </div>
    <label data-i18n="lbl_notes">Notes</label>
    <textarea id="cm-nt" placeholder="Any notes...">\${c?c.notes||'':''}</textarea>
    \${isEdit ? \`
    <div style="margin-top:12px;">
      <div style="font-size:0.78rem;font-weight:700;color:var(--wood-mid);text-transform:uppercase;margin-bottom:8px;">📝 <span data-i18n="prot_interaction_history">Interaction History</span></div>
      <div id="client-interaction-list" style="max-height:180px;overflow-y:auto;margin-bottom:8px;font-size:0.82rem;"></div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        <select id="cm-itype" style="flex:1;font-size:0.8rem;padding:7px;">
          <option value="call">📞 \${t('prot_itype_call')}</option>
          <option value="visit">🏠 \${t('prot_itype_visit')}</option>
          <option value="meeting">🏗️ \${t('prot_itype_meeting')}</option>
          <option value="email">📧 \${t('prot_itype_email')}</option>
          <option value="quote">💰 \${t('prot_itype_quote')}</option>
          <option value="followup">🔄 \${t('prot_itype_followup')}</option>
        </select>
        <input type="text" id="cm-inote" placeholder="Notes..." style="flex:2;">
        <button class="btn btn-amber btn-sm" onclick="logClientInteraction(\${c.id})">\${t('prot_log_interaction')}</button>
      </div>
    </div>\` : ''}
    <div style="display:flex;gap:8px;margin-top:14px;">
      <button class="btn btn-green" onclick="saveClient(\${isEdit?c.id:'null'})">✅ \${isEdit?t('dyn_save'):t('misc_save_create')}</button>
      <button class="btn btn-ghost" onclick="closeModal('client-modal')">\${t('dyn_no_matches')||'Cancel'}</button>
    </div>
  `;
}

async function openClient(id) {
  const c = allClients.find(x => x.id === id);
  if (!c) return;
  const projects = allProjects.filter(p => p.email === c.email || p.name === c.first_name+' '+c.last_name);
  document.getElementById('cm-title').textContent = c.first_name + ' ' + c.last_name;
  document.getElementById('cm-body').innerHTML = `
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px;">
      ${c.email?`<span style="font-size:0.82rem;color:var(--wood-mid);">✉️ ${c.email}</span>`:''}
      ${c.phone?`<span style="font-size:0.82rem;color:var(--wood-mid);">📞 ${c.phone}</span>`:''}
      ${c.city?`<span style="font-size:0.82rem;color:var(--wood-mid);">📍 ${c.city}</span>`:''}
    </div>
    <div class="stats-row" style="margin-bottom:14px;">
      <div class="stat-card"><div class="stat-num" style="font-size:1.2rem;">$${(c.total_spent||0).toLocaleString()}</div><div class="stat-label">${t('client_spent')}</div></div>
      <div class="stat-card"><div class="stat-num" style="font-size:1.2rem;">${c.project_count||0}</div><div class="stat-label">${t('client_projects')}</div></div>
    </div>
    ${projects.length?`<div style="margin-bottom:14px;"><div style="font-size:0.78rem;font-weight:700;color:var(--wood-mid);text-transform:uppercase;margin-bottom:8px;">Projects</div>
    ${projects.map(p=>`<div style="font-size:0.85rem;padding:6px 0;border-bottom:1px solid var(--wood-pale);">
      <span class="badge badge-${p.status||'new'}" style="margin-right:6px;">${p.status||'new'}</span>${p.piece||'—'} · $${(p.amount||0).toLocaleString()}</div>`).join('')}</div>`:''}
    ${c.notes?`<div style="background:var(--wood-pale);padding:10px;border-radius:var(--radius-sm);font-size:0.85rem;">${c.notes}</div>`:''}
    <div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap;">
      <button class="btn btn-red btn-sm" onclick="deleteClient(${id})">🗑 Delete</button>
    </div>`;
  document.getElementById('client-modal').classList.add('open');
}

async function saveClient() {
  if (!sb) return;
  const data = {
    first_name: document.getElementById('cm-fn').value.trim(),
    last_name: document.getElementById('cm-ln').value.trim(),
    email: document.getElementById('cm-em').value.trim(),
    phone: document.getElementById('cm-ph').value.trim(),
    city: document.getElementById('cm-ci').value.trim(),
    source: document.getElementById('cm-src').value,
    preferred_wood: document.getElementById('cm-wd').value.trim(),
    notes: document.getElementById('cm-nt').value.trim(),
  };
  if (!data.first_name) { toast(currentLang==='fr'?'⚠️ Prénom requis.':'⚠️ First name required.'); return; }
  const { error } = await sb.from('clients').insert([data]);
  if (!error) { toast(currentLang==='fr'?'✅ Client sauvegardé!':'✅ Client saved!'); closeModal('client-modal'); loadClients(); }
  else toast(currentLang==='fr'?'⚠️ Échec de la sauvegarde.':'⚠️ Save failed.');
}

async function deleteClient(id) {
  if (!confirm(currentLang==='fr'?'Supprimer ce client?':'Delete this client?')) return;
  await sb.from('clients').delete().eq('id', id);
  toast(currentLang==='fr'?'🗑 Supprimé.':'🗑 Deleted.'); closeModal('client-modal'); loadClients();
}

// ══════════════════════════════════════════════════
// TIME TRACKER
// ══════════════════════════════════════════════════
var clockInterval = null;
var clockStart = null;
var currentLocType = 'shop';
// currentUserEmail declared above
var currentGPS = null;

function setLocType(type) {
  currentLocType = type;
  ['shop','travel','onsite'].forEach(t => {
    const btn = document.getElementById('loc-'+t);
    btn.className = 'loc-btn' + (t===type?' active '+t:'');
  });
}

async function initTimeTracker() {
  // Get current user email
  const { data: { user } } = await sb.auth.getUser();
  currentUserEmail = user?.email || 'unknown';
  // Update welcome banner
  var welcomeName = document.getElementById('emp-welcome-name');
  var welcomeDate = document.getElementById('emp-welcome-date');
  if (welcomeName) {
    var name = currentUserName || currentUserEmail.split('@')[0];
    welcomeName.textContent = (currentLang==='fr' ? 'Bonjour, ' : 'Welcome, ') + name + '!';
  }
  if (welcomeDate) {
    var now = new Date();
    welcomeDate.textContent = now.toLocaleDateString(currentLang==='fr'?'fr-CA':'en-CA', {weekday:'long',month:'long',day:'numeric'});
  }
  document.getElementById('time-user-label').textContent = currentLang==='fr'?'Connecté: ':'Logged in as: ' + currentUserEmail;
  // Populate project selector
  const sel = document.getElementById('time-project-sel');
  sel.innerHTML = '<option value="">— No project —</option>' +
    allProjects.filter(p => !['done'].includes(p.status))
      .map(p => `<option value="${p.id}">${p.name} — ${p.piece}</option>`).join('');
  loadTimeLogs();
}

function toggleClock() {
  if (clockInterval) {
    // Clock out
    clearInterval(clockInterval);
    const elapsed = Math.round((Date.now() - clockStart) / 60000);
    saveTimeLog(elapsed);
    clockInterval = null;
    clockStart = null;
    document.getElementById('btn-clock').textContent = t('time_clock_in');
    document.getElementById('clock-btn').className = 'btn btn-green btn-block';
    document.getElementById('clock-display').className = 'clock-display';
    document.getElementById('clock-display').textContent = '00:00:00';
  } else {
    // Clock in — get GPS first
    clockStart = Date.now();
    document.getElementById('btn-clock').textContent = t('time_clock_out');
    document.getElementById('clock-btn').className = 'btn btn-red btn-block';
    document.getElementById('clock-display').className = 'clock-display clock-running';
    document.getElementById('clock-gps').textContent = '📍 Getting GPS...';
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        currentGPS = {lat: pos.coords.latitude, lng: pos.coords.longitude};
        document.getElementById('clock-gps').textContent =
          `📍 ${currentGPS.lat.toFixed(4)}, ${currentGPS.lng.toFixed(4)} · ${currentLocType}`;
      }, () => {
        document.getElementById('clock-gps').textContent = '📍 GPS unavailable';
        currentGPS = null;
      });
    }
    clockInterval = setInterval(() => {
      const elapsed = Date.now() - clockStart;
      const h = Math.floor(elapsed/3600000).toString().padStart(2,'0');
      const m = Math.floor((elapsed%3600000)/60000).toString().padStart(2,'0');
      const s = Math.floor((elapsed%60000)/1000).toString().padStart(2,'0');
      document.getElementById('clock-display').textContent = h+':'+m+':'+s;
    }, 1000);
  }
}

async function saveTimeLog(durationMinutes) {
  if (!sb) return;
  const projId = document.getElementById('time-project-sel').value;
  const notes = document.getElementById('time-notes').value;
  await sb.from('time_logs').insert([{
    user_email: currentUserEmail,
    project_id: projId ? parseInt(projId) : null,
    clock_in: new Date(clockStart).toISOString(),
    clock_out: new Date().toISOString(),
    duration_minutes: durationMinutes,
    location_type: currentLocType,
    lat: currentGPS?.lat || null,
    lng: currentGPS?.lng || null,
    notes: notes || null,
  }]);
  toast(`✅ ${durationMinutes}min logged as ${currentLocType}`);
  document.getElementById('time-notes').value = '';
  loadTimeLogs();
}

async function loadTimeLogs() {
  if (!sb) return;
  const days = parseInt(document.getElementById('time-week-filter')?.value || 7);
  const since = new Date(Date.now() - days*24*60*60*1000).toISOString();
  const today = new Date().toISOString().split('T')[0];
  const { data } = await sb.from('time_logs').select('*')
    .gte('created_at', since).order('created_at', {ascending:false});
  const logs = data || [];
  // Today's logs
  const todayLogs = logs.filter(l => l.created_at?.startsWith(today));
  const shopMin  = todayLogs.filter(l=>l.location_type==='shop').reduce((s,l)=>s+(l.duration_minutes||0),0);
  const travMin  = todayLogs.filter(l=>l.location_type==='travel').reduce((s,l)=>s+(l.duration_minutes||0),0);
  const siteMin  = todayLogs.filter(l=>l.location_type==='onsite').reduce((s,l)=>s+(l.duration_minutes||0),0);
  const totMin   = shopMin + travMin + siteMin;
  const fmt = m => m>=60 ? (m/60).toFixed(1)+'h' : m+'min';
  document.getElementById('ts-shop').textContent = fmt(shopMin);
  document.getElementById('ts-travel').textContent = fmt(travMin);
  document.getElementById('ts-onsite').textContent = fmt(siteMin);
  document.getElementById('ts-total').textContent = fmt(totMin);
  // Today log list
  const tll = document.getElementById('time-log-list');
  tll.innerHTML = todayLogs.length ? `<div style="font-size:0.75rem;font-weight:700;color:var(--wood-mid);text-transform:uppercase;margin-bottom:6px;">Today</div>` +
    todayLogs.map(l => {
      const cin = new Date(l.clock_in).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
      const cout = new Date(l.clock_out).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
      const col = l.location_type==='shop'?'var(--green)':l.location_type==='travel'?'var(--amber)':'var(--blue)';
      return `<div class="time-log-row">
        <div><strong style="color:${col};">${l.location_type}</strong><br><span style="font-size:0.72rem;color:var(--wood-mid);">${l.notes||''}</span></div>
        <div style="font-size:0.8rem;">${cin} → ${cout}</div>
        <div style="font-weight:600;">${fmt(l.duration_minutes||0)}</div>
        <div><button class="btn btn-red btn-sm" onclick="deleteTimeLog(${l.id})" style="padding:4px 8px;">🗑</button></div>
      </div>`;
    }).join('') : `<div class="empty-state" style="padding:16px;"><p>${t('dyn_no_sessions')}</p></div>`;
  // All users logs
  const all = document.getElementById('time-all-logs');
  // Group by user
  const byUser = {};
  logs.forEach(l => {
    if (!byUser[l.user_email]) byUser[l.user_email] = {shop:0,travel:0,onsite:0,total:0};
    byUser[l.user_email][l.location_type||'shop'] += l.duration_minutes||0;
    byUser[l.user_email].total += l.duration_minutes||0;
  });
  if (!Object.keys(byUser).length) {
    all.innerHTML = `<div class="empty-state" style="padding:16px;"><p>${t('dyn_no_time')}</p></div>`;
  } else {
    all.innerHTML = Object.entries(byUser).map(([email, t]) => `
      <div style="padding:10px 0;border-bottom:1px solid var(--wood-pale);">
        <div style="font-weight:600;font-size:0.88rem;margin-bottom:6px;">${email}</div>
        <div style="display:flex;gap:14px;flex-wrap:wrap;font-size:0.78rem;color:var(--wood-mid);">
          <span>🏭 Shop: <strong>${fmt(t.shop)}</strong></span>
          <span>🚗 Travel: <strong>${fmt(t.travel)}</strong></span>
          <span>🏗️ On-site: <strong>${fmt(t.onsite)}</strong></span>
          <span style="color:var(--wood-dark);font-weight:700;">Total: ${fmt(t.total)}</span>
        </div>
      </div>`).join('');
  }
}

async function deleteTimeLog(id) {
  await sb.from('time_logs').delete().eq('id', id);
  toast(currentLang==='fr'?'🗑 Entrée supprimée.':'🗑 Log removed.'); loadTimeLogs();
}

// ══════════════════════════════════════════════════
// REVENUE CHART
// ══════════════════════════════════════════════════
function renderRevenue() {
  const year = parseInt(document.getElementById('rev-year')?.value || new Date().getFullYear());
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  // Filter projects delivered in selected year
  const yearProjects = allProjects.filter(p => {
    const d = p.delivery || p.created || '';
    return d.includes(year) || d.includes(year.toString().slice(2));
  });
  // Monthly buckets
  const monthly = Array(12).fill(null).map((_,i) => ({month:months[i],collected:0,outstanding:0}));
  allProjects.forEach(p => {
    const dateStr = p.delivery || p.created || '';
    // Try to find month from various date formats
    let monthIdx = -1;
    if (dateStr) {
      const d = new Date(dateStr);
      if (!isNaN(d.getTime()) && d.getFullYear() === year) monthIdx = d.getMonth();
    }
    if (monthIdx >= 0 && p.status === 'done') {
      const collected = (p.amount||0) - (p.balance||0);
      monthly[monthIdx].collected += collected;
      monthly[monthIdx].outstanding += (p.balance||0);
    }
  });
  const maxVal = Math.max(...monthly.map(m => m.collected + m.outstanding), 1);
  const chart = document.getElementById('rev-chart');
  if (!chart) return;
  chart.innerHTML = monthly.map(m => {
    const total = m.collected + m.outstanding;
    const collH = Math.round((m.collected/maxVal)*140);
    const outH  = Math.round((m.outstanding/maxVal)*140);
    return `<div class="bar-col">
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:140px;">
        ${m.outstanding?`<div class="bar bar-outstanding" style="height:${outH}px;width:100%;">${m.outstanding>0?'$'+(m.outstanding/1000).toFixed(1)+'k':''}</div>`:''}
        ${m.collected?`<div class="bar bar-delivered" style="height:${collH}px;width:100%;">${m.collected>0?'$'+(m.collected/1000).toFixed(1)+'k':''}</div>`:''}
        ${!total?`<div style="height:4px;width:100%;background:var(--wood-pale);border-radius:4px;"></div>`:''}
      </div>
      <div class="bar-label">${m.month}</div>
    </div>`;
  }).join('');
  // Summary stats
  const ytd = allProjects.filter(p=>p.status==='done').reduce((s,p)=>s+(p.amount||0),0);
  const coll = allProjects.reduce((s,p)=>s+((p.amount||0)-(p.balance||0)),0);
  const out  = allProjects.reduce((s,p)=>s+(p.balance||0),0);
  const deliv = allProjects.filter(p=>p.status==='done').length;
  document.getElementById('rv-ytd').textContent = '$'+(ytd/1000).toFixed(1)+'k';
  document.getElementById('rv-collected').textContent = '$'+(coll/1000).toFixed(1)+'k';
  document.getElementById('rv-outstanding').textContent = '$'+(out/1000).toFixed(1)+'k';
  document.getElementById('rv-projects').textContent = deliv;
  // By type
  const byType = {};
  allProjects.filter(p=>p.status==='done').forEach(p => {
    const t = p.piece||'Other';
    byType[t] = (byType[t]||0) + (p.amount||0);
  });
  const typeEl = document.getElementById('rev-by-type');
  if (typeEl) {
    typeEl.innerHTML = Object.entries(byType).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([type,amt]) => `
      <div class="price-row"><span class="price-label">${type}</span><span class="price-val">$${amt.toLocaleString()}</span></div>`).join('') || `<p style="color:var(--wood-mid);font-size:0.85rem;padding:10px 0;">${t('dyn_no_delivered')}</p>`;
  }
  // Top clients
  const byClient = {};
  allProjects.filter(p=>p.status==='done').forEach(p => {
    const n = p.name||'Unknown';
    byClient[n] = (byClient[n]||0) + (p.amount||0);
  });
  const clientEl = document.getElementById('rev-top-clients');
  if (clientEl) {
    clientEl.innerHTML = Object.entries(byClient).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([name,amt]) => `
      <div class="price-row"><span class="price-label">${name}</span><span class="price-val">$${amt.toLocaleString()}</span></div>`).join('') || `<p style="color:var(--wood-mid);font-size:0.85rem;padding:10px 0;">${t('dyn_no_delivered')}</p>`;
  }
}

function initRevenueYears() {
  const sel = document.getElementById('rev-year');
  if (!sel) return;
  const current = new Date().getFullYear();
  sel.innerHTML = [current, current-1, current-2].map(y =>
    `<option value="${y}">${y}</option>`).join('');
}



// ══════════════════════════════════════════════════
// SMART MATERIAL CALCULATOR
// ══════════════════════════════════════════════════
var TABLE_SIZES = [
  {key:'coffee',  name:'Coffee Table',       name_fr:'Table basse',          l:48, w:24, t:1.75},
  {key:'dining4', name:'Dining 4-person',    name_fr:'Salle à manger 4 pl.', l:60, w:36, t:1.75},
  {key:'dining6', name:'Dining 6-person',    name_fr:'Salle à manger 6 pl.', l:72, w:36, t:1.75},
  {key:'dining8', name:'Dining 8-person',    name_fr:'Salle à manger 8 pl.', l:84, w:40, t:1.75},
  {key:'dining10',name:'Dining 10-person',   name_fr:'Salle à manger 10 pl.',l:96, w:42, t:1.75},
  {key:'harvest', name:'Harvest / Farm',     name_fr:'Table de ferme',       l:96, w:30, t:2.0},
  {key:'river6',  name:'River Table 6ft',    name_fr:'Table époxy 6pi',      l:72, w:40, t:2.0},
  {key:'river8',  name:'River Table 8ft',    name_fr:'Table époxy 8pi',      l:96, w:42, t:2.0},
  {key:'desk',    name:'Desk Standard',      name_fr:'Bureau standard',      l:60, w:24, t:1.5},
  {key:'deskl',   name:'L-Shape Desk',       name_fr:'Bureau en L',          l:72, w:30, t:1.5},
  {key:'custom',  name:'Custom Size',        name_fr:'Dimensions sur mesure',l:0,  w:0,  t:1.75},
];

var TABLE_TYPES = ['Dining Table','Epoxy River Table','Custom Desk'];
var FBM_TYPES   = ['Wood Sink','Bathroom Vanity','Staircase','Art Piece','Custom Piece'];
var fbmBoards = [{t:1.75, w:8, l:96, qty:1}];
var selectedTableSize = null;

function calcFBM(t, w, l) { return (t * w * l) / 144; }

function onProjectTypeChange() {
  const type = document.getElementById('q-type').value;
  const isTable = TABLE_TYPES.includes(type);
  const isFBM   = FBM_TYPES.includes(type);
  const elT = document.getElementById('mat-section-tables');
  const elF = document.getElementById('mat-section-fbm');
  const elM = document.getElementById('mat-section-manual');
  if (elT) elT.style.display = isTable ? 'block' : 'none';
  if (elF) elF.style.display = isFBM   ? 'block' : 'none';
  if (elM) elM.style.display = (!isTable && !isFBM) ? 'block' : 'none';
  if (isTable) renderTableSizeChart();
  if (isFBM)   renderFBMBoards();
  if (!isTable && !isFBM) document.getElementById('q-mat').value = 0;
}

function renderTableSizeChart() {
  const lang = currentLang;
  const container = document.getElementById('size-chart-btns');
  if (!container) return;
  container.innerHTML = TABLE_SIZES.map(function(s) {
    const fbm = s.l > 0 ? (Math.ceil(calcFBM(s.t, s.w, s.l) * 1.2 * 10) / 10) : '—';
    const name = (lang === 'fr' && s.name_fr) ? s.name_fr : s.name;
    const dims = s.l > 0 ? s.l+'" × '+s.w+'" × '+s.t+'"' : (lang==='fr'?'Sur mesure':'Custom');
    const bfLabel = s.l > 0 ? '~'+fbm+' BF' : '';
    const active = selectedTableSize === s.key ? ' active' : '';
    return '<button class="size-btn'+active+'" onclick="selectTableSize(\''+s.key+'\')">'+
      '<span class="size-name">'+name+'</span>'+
      '<span class="size-dims">'+dims+'</span>'+
      '<span class="size-fbm">'+bfLabel+'</span>'+
      '</button>';
  }).join('');
  const title = document.getElementById('mat-title-tables');
  if (title) title.textContent = lang === 'fr'
    ? '📐 Dimensions standard — Sélectionnez une taille'
    : '📐 Table Size Chart — Select a standard size';
}

function selectTableSize(key) {
  selectedTableSize = key;
  renderTableSizeChart();
  const size = TABLE_SIZES.find(function(s){ return s.key===key; });
  const isCustom = key === 'custom';
  const cr = document.getElementById('custom-size-row');
  const rr = document.getElementById('table-rate-row');
  if (cr) cr.style.display = isCustom ? 'block' : 'none';
  if (rr) rr.style.display = 'flex';
  if (!isCustom && size && size.l > 0) {
    document.getElementById('q-len').value = size.l;
    document.getElementById('q-wid').value = size.w;
    document.getElementById('q-thk').value = size.t;
  }
  calcTableFBM();
}

function calcTableFBM() {
  const l    = parseFloat(document.getElementById('q-len').value) || 0;
  const w    = parseFloat(document.getElementById('q-wid').value) || 0;
  const thk  = parseFloat(document.getElementById('q-thk').value) || 1.75;
  const rate = parseFloat(document.getElementById('q-bf-rate').value) || 8;
  if (!l || !w) return;
  const withWaste = Math.ceil(calcFBM(thk, w, l) * 1.2 * 10) / 10;
  const cost = Math.ceil(withWaste * rate);
  const rv = document.getElementById('table-fbm-result');
  const fv = document.getElementById('table-fbm-val');
  const cv = document.getElementById('table-mat-cost');
  if (fv) fv.textContent = withWaste.toFixed(1);
  if (cv) cv.textContent = cost.toLocaleString();
  if (rv) rv.style.display = 'flex';
  document.getElementById('q-mat').value = cost;
}

function renderFBMBoards() {
  const container = document.getElementById('fbm-boards-list');
  if (!container) return;
  const lang = currentLang;
  const h = lang==='fr'
    ? ['Épaisseur (po)','Largeur (po)','Longueur (po)','Qté','']
    : ['Thickness (in)','Width (in)','Length (in)','Qty',''];
  container.innerHTML =
    '<div class="fbm-board-row" style="font-size:0.68rem;font-weight:700;color:var(--wood-mid);text-transform:uppercase;">'+
    h.map(function(x){return '<div>'+x+'</div>';}).join('')+'</div>'+
    fbmBoards.map(function(b,i){
      return '<div class="fbm-board-row">'+
        '<input type="number" value="'+b.t+'" min="0.25" max="12" step="0.25" placeholder="1.75" oninput="fbmBoards['+i+'].t=parseFloat(this.value)||0;calcFBMTotal()">'+
        '<input type="number" value="'+b.w+'" min="1" max="60" step="0.5" placeholder="8" oninput="fbmBoards['+i+'].w=parseFloat(this.value)||0;calcFBMTotal()">'+
        '<input type="number" value="'+b.l+'" min="1" max="240" step="1" placeholder="96" oninput="fbmBoards['+i+'].l=parseFloat(this.value)||0;calcFBMTotal()">'+
        '<input type="number" value="'+b.qty+'" min="1" max="99" step="1" placeholder="1" oninput="fbmBoards['+i+'].qty=parseInt(this.value)||1;calcFBMTotal()">'+
        '<button class="btn btn-red btn-sm" onclick="removeFBMBoard('+i+')" style="padding:4px 8px;">🗑</button>'+
        '</div>';
    }).join('');
  calcFBMTotal();
}

function addFBMBoard() {
  fbmBoards.push({t:1.75, w:8, l:96, qty:1});
  renderFBMBoards();
}

function removeFBMBoard(i) {
  if (fbmBoards.length > 1) { fbmBoards.splice(i,1); renderFBMBoards(); }
}

function calcFBMTotal() {
  const rate  = parseFloat(document.getElementById('q-fbm-rate')?.value) || 8;
  const waste = parseFloat(document.getElementById('q-fbm-waste')?.value) || 20;
  const wf = 1 + waste/100;
  let total = 0;
  fbmBoards.forEach(function(b){ total += calcFBM(b.t, b.w, b.l) * (b.qty||1); });
  const withWaste = Math.ceil(total * wf * 10) / 10;
  const cost = Math.ceil(withWaste * rate);
  const tv = document.getElementById('fbm-total-val');
  const cv = document.getElementById('fbm-mat-cost');
  if (tv) tv.textContent = withWaste.toFixed(1);
  if (cv) cv.textContent = cost.toLocaleString();
  document.getElementById('q-mat').value = cost;
}

// Wire up project type change
(function(){
  const sel = document.getElementById('q-type');
  if (sel) sel.addEventListener('change', onProjectTypeChange);
})();

// ══════════════════════════════════════════════════
// TEAM FEATURE — CHAT + GPS + WEBRTC
// ══════════════════════════════════════════════════

// ── GLOBALS ──────────────────────────────────────
var chatSubscription   = null;
var signalSubscription = null;
var locSubscription    = null;
var teamMembers        = [];
var _lastLocType       = 'shop';
var _lastLat           = null;
var _lastLng           = null;
var _locTimer          = null;

// ADMIN_USERS moved to top of script

// Shop coordinates — Gatineau QC (update to your exact address)
var SHOP_LAT = 45.4765;
var SHOP_LNG = -75.7013;
var SHOP_RADIUS_M = 300;

function distanceMeters(lat1, lng1, lat2, lng2) {
  var R = 6371000;
  var dLat = (lat2-lat1)*Math.PI/180;
  var dLng = (lng2-lng1)*Math.PI/180;
  var a = Math.sin(dLat/2)*Math.sin(dLat/2) +
    Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*
    Math.sin(dLng/2)*Math.sin(dLng/2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// ── INIT ─────────────────────────────────────────
async function initTeam() {
  if (!sb) { setTimeout(initTeam, 600); return; }
  try {
    var authRes = await sb.auth.getUser();
    if (!authRes.data || !authRes.data.user) { setTimeout(initTeam, 1200); return; }
    currentUserEmail = authRes.data.user.email;
    currentUserName  = currentUserEmail.split('@')[0];
    var lbl = document.getElementById('time-user-label');
    if (lbl) lbl.textContent = (currentLang==='fr'?'Connecté: ':'Logged in as: ') + currentUserEmail;
    // Show/hide map tab based on access
    updateMapTabVisibility();
    // Start realtime subscriptions
    setupChatRealtime();
    setupSignalRealtime();
    setupLocationRealtime(); // this also tracks presence
    // Start GPS tracking immediately on login
    startBackgroundGPS();
    // Ping presence every 30s
    if (_locTimer) clearInterval(_locTimer);
    _locTimer = setInterval(function() {
      if (currentUserEmail && sb) { pingPresence(); if (isAdmin(currentUserEmail)) loadTeamLocations(); }
    }, 30000);
    // Initial load
    await loadChat();
    await loadTeamLocations();
    await loadCallGrid();
    // presence toast removed
  } catch(e) {
    console.error('initTeam error:', e);
    setTimeout(initTeam, 2000);
  }
}

function updateMapTabVisibility() {
  var admin = isAdmin(currentUserEmail);
  // Team tab — admins only
  var teamTab = document.getElementById('tab-team');
  if (teamTab) teamTab.style.display = admin ? '' : 'none';
  // Map tab — admins only
  var mapTab = document.getElementById('tab-map');
  if (mapTab) mapTab.style.display = admin ? '' : 'none';
  // Post Gen tab — admins only
  var postTab = document.getElementById('tab-post');
  if (postTab) postTab.style.display = admin ? '' : 'none';
  // Revenue tab — admins only
  var revTab = document.getElementById('tab-revenue');
  if (revTab) revTab.style.display = admin ? '' : 'none';
  // Roster tab — admins only
  var rosterTab = document.getElementById('tab-roster');
  if (rosterTab) rosterTab.style.display = admin ? '' : 'none';
  // Messages tab — all users
  var msgTab = document.getElementById('tab-messages');
  if (msgTab) msgTab.style.display = '';
  // If current page is restricted and user is not admin, redirect to quote
  var activePage = document.querySelector('.page.active');
  if (activePage && !admin) {
    var id = activePage.id;
    if (id === 'page-team' || id === 'page-map' || id === 'page-post' || id === 'page-roster' || id === 'page-revenue') showPage('quote');
  }
}

// ── SUB-TAB NAVIGATION ───────────────────────────
function showTeamTab(tab) {
  ['chat','gps','calls'].forEach(function(t) {
    var panel = document.getElementById('team-panel-'+t);
    var tabEl = document.getElementById('ttab-'+t);
    if (panel) panel.style.display = t===tab ? 'block' : 'none';
    if (tabEl) tabEl.classList.toggle('active', t===tab);
  });
  if (tab==='gps') loadTeamLocations();
  if (tab==='calls') loadCallGrid();
}

// ══════════════════════════════════════════════════
// PRESENCE — core visibility mechanism
// Works WITHOUT DB tables — uses Supabase Realtime presence
// ══════════════════════════════════════════════════
function setupLocationRealtime() {
  if (!sb || locSubscription) return;
  locSubscription = sb.channel('shackachaga-presence', {
    config: { presence: { key: currentUserEmail } }
  })
  .on('presence', { event: 'sync' }, function() {
    loadTeamLocations();
  })
  .on('presence', { event: 'join' }, function(p) {
    console.log('Team join:', p.key);
    // online toast removed
    loadTeamLocations();
  })
  .on('presence', { event: 'leave' }, function(p) {
    console.log('Team leave:', p.key);
    loadTeamLocations();
  })
  .subscribe(async function(status) {
    console.log('Presence status:', status);
    if (status === 'SUBSCRIBED') {
      await pingPresence();
      loadTeamLocations();
    }
  });
}


// ── BACKGROUND GPS ENGINE ────────────────────────
var _gpsWatchId  = null;
var _gpsInterval = null;
var _wakeLock    = null;
var _lastGPSPing = 0;

function startBackgroundGPS() {
  if (!navigator.geolocation || !currentUserEmail) return;
  if (_gpsWatchId) navigator.geolocation.clearWatch(_gpsWatchId);
  if (_gpsInterval) clearInterval(_gpsInterval);
  silentGPSPing();
  _gpsWatchId = navigator.geolocation.watchPosition(
    function(pos) {
      var now = Date.now();
      if (now - _lastGPSPing < 60000) return;
      _lastGPSPing = now;
      var lat = pos.coords.latitude;
      var lng = pos.coords.longitude;
      var dist = distanceMeters(lat, lng, SHOP_LAT, SHOP_LNG);
      upsertMyLocation(lat, lng, 'online', dist < SHOP_RADIUS_M ? 'shop' : (_lastLocType||'onsite'));
    },
    function(err) { console.warn('GPS watch:', err.code); },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 }
  );
  _gpsInterval = setInterval(silentGPSPing, 5 * 60 * 1000);
  requestWakeLock();
  console.log('Background GPS started');
}

function silentGPSPing() {
  if (!navigator.geolocation || !currentUserEmail) return;
  navigator.geolocation.getCurrentPosition(
    function(pos) {
      _lastGPSPing = Date.now();
      var lat = pos.coords.latitude;
      var lng = pos.coords.longitude;
      var dist = distanceMeters(lat, lng, SHOP_LAT, SHOP_LNG);
      upsertMyLocation(lat, lng, 'online', dist < SHOP_RADIUS_M ? 'shop' : (_lastLocType||'onsite'));
    },
    function() { upsertMyLocation(null, null, 'online', _lastLocType||'shop'); },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 120000 }
  );
}

async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      _wakeLock = await navigator.wakeLock.request('screen');
      _wakeLock.addEventListener('release', function() { setTimeout(requestWakeLock, 5000); });
    }
  } catch(e) { console.warn('Wake lock:', e.message); }
}

document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    requestWakeLock();
    silentGPSPing();
  }
});


// ══════════════════════════════════════════════════
// AUTO-ANSWER
// ══════════════════════════════════════════════════
var _autoAnswer = (localStorage.getItem('shack_auto_answer') === '1');

function toggleAutoAnswer(enabled) {
  _autoAnswer = enabled;
  localStorage.setItem('shack_auto_answer', enabled ? '1' : '0');
  // Sync all toggle inputs on page
  document.querySelectorAll('#aa-toggle-input').forEach(function(t) { t.checked = enabled; });
  toast(enabled
    ? (currentLang==='fr' ? '🤖 Réponse automatique activée' : '🤖 Auto-answer ON')
    : (currentLang==='fr' ? '🤖 Réponse automatique désactivée' : '🤖 Auto-answer OFF')
  );
  // Update presence so admins see the change
  pingPresence();
}
// ── PER-USER AUTO-ANSWER PANEL (admin only) ──────────────────────
function renderAutoAnswerPanel(presenceState) {
  if (!isAdmin(currentUserEmail)) return;
  var panel = document.getElementById('aa-user-panel');
  if (panel) panel.style.display = 'block';
  var list = document.getElementById('aa-user-list');
  if (!list) return;

  // Collect unique users from presence
  var users = {};
  Object.values(presenceState || {}).forEach(function(presences) {
    presences.forEach(function(p) {
      if (p.email && p.email !== currentUserEmail) {
        users[p.email] = {
          name: p.name || p.email.split('@')[0],
          autoAnswer: p.auto_answer === true
        };
      }
    });
  });

  // Add self
  users[currentUserEmail] = {
    name: (currentUserName || currentUserEmail.split('@')[0]) + ' (me)',
    autoAnswer: _autoAnswer
  };

  var keys = Object.keys(users);
  if (!keys.length) {
    list.innerHTML = '<div style="font-size:0.8rem;color:var(--wood-mid);padding:4px 0;">No team members online</div>';
    return;
  }

  list.innerHTML = keys.map(function(email) {
    var u = users[email];
    var on = u.autoAnswer;
    return '<div class="aa-user-row">' +
      '<span class="aa-user-name">👤 ' + escapeHtml(u.name) + '</span>' +
      '<span class="aa-user-status ' + (on ? 'on' : 'off') + '">' +
        (on
          ? (currentLang==='fr' ? '🟢 Auto ON' : '🟢 Auto ON')
          : (currentLang==='fr' ? '⚫ Manuel' : '⚫ Manual')) +
      '</span>' +
    '</div>';
  }).join('');
}

// Broadcast auto-answer state in presence ping
var _origPingPresence = pingPresence;
pingPresence = async function() {
  if (!sb || !currentUserEmail) return;
  try {
    var pres = {
      email: currentUserEmail,
      name:  currentUserName || currentUserEmail.split('@')[0],
      lat: _lastLat, lng: _lastLng,
      loc_type: _lastLocType || 'online',
      status: 'online',
      auto_answer: _autoAnswer,
      ts: Date.now()
    };
    if (window._presenceChannel) {
      window._presenceChannel.track(pres);
    }
  } catch(e) {}
};


function startAutoAnswerCountdown() {
  // No countdown — answer immediately if enabled
  if (!_autoAnswer) return;
  acceptCall();
}

function cancelAutoAnswerCountdown() {
  // Nothing to cancel — kept for compatibility
}

// Restore toggle state as soon as DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  if (_autoAnswer) {
    document.querySelectorAll('#aa-toggle-input').forEach(function(t) { t.checked = true; });
  }
});


// ══════════════════════════════════════════════════
// PERMISSION MANAGER — request once, remember
// ══════════════════════════════════════════════════

var _gpsGranted = localStorage.getItem('shack_gps_granted') === '1';
var _micGranted = localStorage.getItem('shack_mic_granted') === '1';

function requestGPSPermissionOnce() {
  if (_gpsGranted) {
    // Already granted — start tracking silently
    startBackgroundGPS();
    return;
  }
  if (!navigator.geolocation) return;
  // Check permission API first (no popup if already decided)
  if (navigator.permissions) {
    navigator.permissions.query({name:'geolocation'}).then(function(result) {
      if (result.state === 'granted') {
        _gpsGranted = true;
        localStorage.setItem('shack_gps_granted', '1');
        startBackgroundGPS();
      } else if (result.state === 'prompt') {
        // Show friendly explanation before asking
        showPermissionRequest('gps');
      }
      // If denied, don't ask again — GPS just won't work
      result.onchange = function() {
        if (result.state === 'granted') {
          _gpsGranted = true;
          localStorage.setItem('shack_gps_granted', '1');
          startBackgroundGPS();
        }
      };
    }).catch(function() {
      // Permissions API not supported — request directly
      navigator.geolocation.getCurrentPosition(
        function() { _gpsGranted = true; localStorage.setItem('shack_gps_granted','1'); startBackgroundGPS(); },
        function() {},
        {enableHighAccuracy:false, timeout:8000}
      );
    });
  } else {
    navigator.geolocation.getCurrentPosition(
      function() { _gpsGranted = true; localStorage.setItem('shack_gps_granted','1'); startBackgroundGPS(); },
      function() {},
      {enableHighAccuracy:false, timeout:8000}
    );
  }
}

async function requestMicPermissionOnce() {
  if (_micGranted) return true;
  if (navigator.permissions) {
    try {
      var result = await navigator.permissions.query({name:'microphone'});
      if (result.state === 'granted') {
        _micGranted = true;
        localStorage.setItem('shack_mic_granted', '1');
        return true;
      }
    } catch(e) {}
  }
  // Actually request it
  try {
    var stream = await navigator.mediaDevices.getUserMedia({audio:true, video:false});
    stream.getTracks().forEach(function(t){ t.stop(); });
    _micGranted = true;
    localStorage.setItem('shack_mic_granted', '1');
    return true;
  } catch(e) {
    toast(currentLang==='fr' ? '🎤 Microphone requis pour les appels' : '🎤 Microphone needed for calls');
    return false;
  }
}

// Friendly permission request card (shown once before browser prompt)
function showPermissionRequest(type) {
  if (document.getElementById('perm-request-card')) return;
  var isGPS   = type === 'gps';
  var fr      = currentLang === 'fr';
  var card    = document.createElement('div');
  card.id     = 'perm-request-card';
  card.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);width:min(320px,90vw);background:var(--wood-dark);color:white;border-radius:var(--radius);padding:18px 20px;z-index:500;box-shadow:0 8px 32px rgba(0,0,0,0.3);text-align:center;';

  var iconEl = document.createElement('div');
  iconEl.style.cssText = 'font-size:1.8rem;margin-bottom:8px;';
  iconEl.textContent = isGPS ? '📍' : '🎤';

  var titleEl = document.createElement('div');
  titleEl.style.cssText = 'font-weight:700;font-size:0.95rem;margin-bottom:6px;';
  titleEl.textContent = isGPS
    ? (fr ? 'Accès à la position' : 'Location Access')
    : (fr ? 'Accès au microphone' : 'Microphone Access');

  var msgEl = document.createElement('div');
  msgEl.style.cssText = 'font-size:0.8rem;opacity:0.85;margin-bottom:14px;';
  msgEl.textContent = isGPS
    ? (fr ? "Requis pour le pointage et la coordination d'équipe." : 'Required for time tracking and team coordination.')
    : (fr ? 'Requis pour les appels et messages vocaux.' : 'Required for voice calls and voice messages.');

  var btnRow = document.createElement('div');
  btnRow.style.cssText = 'display:flex;gap:10px;justify-content:center;';

  var allowBtn = document.createElement('button');
  allowBtn.style.cssText = 'flex:1;padding:10px;background:var(--amber);border:none;border-radius:8px;font-weight:700;font-size:0.88rem;cursor:pointer;color:white;';
  allowBtn.textContent = fr ? 'Autoriser' : 'Allow';
  allowBtn.onclick = function() { card.remove(); grantPermission(type); };

  var laterBtn = document.createElement('button');
  laterBtn.style.cssText = 'padding:10px 14px;background:rgba(255,255,255,0.15);border:none;border-radius:8px;font-size:0.88rem;cursor:pointer;color:white;';
  laterBtn.textContent = fr ? 'Plus tard' : 'Later';
  laterBtn.onclick = function() { card.remove(); };

  btnRow.appendChild(allowBtn);
  btnRow.appendChild(laterBtn);
  card.appendChild(iconEl);
  card.appendChild(titleEl);
  card.appendChild(msgEl);
  card.appendChild(btnRow);
  document.body.appendChild(card);
  setTimeout(function(){ if (card.parentNode) card.remove(); }, 15000);
}


function grantPermission(type) {
  var card = document.getElementById('perm-request-card');
  if (card) card.remove();
  if (type === 'gps') {
    navigator.geolocation.getCurrentPosition(
      function() { _gpsGranted=true; localStorage.setItem('shack_gps_granted','1'); startBackgroundGPS(); toast('📍 '+(currentLang==='fr'?'Position activée':'Location enabled')); },
      function() { toast('⚠️ '+(currentLang==='fr'?'Position refusée':'Location denied')); },
      {enableHighAccuracy:false, timeout:10000}
    );
  } else if (type === 'mic') {
    requestMicPermissionOnce();
  }
}

async function pingPresence() {
  if (!locSubscription || !locSubscription.track || !currentUserEmail) return;
  try {
    await locSubscription.track({
      user_email:    currentUserEmail,
      display_name:  currentUserName || currentUserEmail.split('@')[0],
      status:        'online',
      location_type: _lastLocType || 'shop',
      lat:           _lastLat,
      lng:           _lastLng,
      online_at:     new Date().toISOString()
    });
  } catch(e) { console.warn('pingPresence error:', e); }
}

async function upsertMyLocation(lat, lng, status, locType) {
  if (!currentUserEmail) return;
  if (locType) _lastLocType = locType;
  if (lat !== null && lat !== undefined && lng !== null) { _lastLat = lat; _lastLng = lng; }
  // Always ping presence (no DB needed)
  await pingPresence();
  // Try DB save too
  if (!sb) return;
  try {
    var update = {
      user_email:    currentUserEmail,
      display_name:  currentUserName || currentUserEmail.split('@')[0],
      status:        status || 'online',
      location_type: _lastLocType || 'shop',
      last_seen:     new Date().toISOString(),
      lat:           _lastLat,
      lng:           _lastLng
    };
    var r = await sb.from('user_locations').upsert([update], {onConflict:'user_email'});
    if (r.error) console.warn('Location DB (tables may need setup):', r.error.message);
  } catch(e) { console.warn('Location DB skipped:', e.message); }
}

async function loadTeamLocations() {
  if (!sb) return;
  var members = [];
  // 1. Get presence state (instant, no DB needed)
  if (locSubscription && locSubscription.presenceState) {
    var state = locSubscription.presenceState();
    Object.entries(state).forEach(function(entry) {
      var presArr = entry[1];
      presArr.forEach(function(p) {
        if (!p.user_email) return;
        members.push({
          user_email:    p.user_email,
          display_name:  p.display_name || p.user_email.split('@')[0],
          status:        p.status || 'online',
          location_type: p.location_type || 'shop',
          last_seen:     p.online_at || new Date().toISOString(),
          lat:           p.lat || null,
          lng:           p.lng || null,
          is_me:         p.user_email === currentUserEmail
        });
      });
    });
  }
  // Make sure current user appears
  if (!members.find(function(m){ return m.user_email === currentUserEmail; })) {
    members.unshift({
      user_email: currentUserEmail,
      display_name: currentUserName || currentUserEmail.split('@')[0],
      status: 'online', location_type: _lastLocType || 'shop',
      last_seen: new Date().toISOString(),
      lat: _lastLat, lng: _lastLng, is_me: true
    });
  }
  // 2. Merge GPS coords from DB if tables exist
  try {
    var res = await sb.from('user_locations').select('*');
    if (!res.error && res.data) {
      res.data.forEach(function(row) {
        var m = members.find(function(x){ return x.user_email === row.user_email; });
        if (m) { if (row.lat) m.lat = row.lat; if (row.lng) m.lng = row.lng; }
        else members.push(row);
      });
    }
  } catch(e) { /* tables not set up yet */ }
  teamMembers = members;
  renderTeamLocations(members);
  // Online count (exclude offline)
  var online = members.filter(function(m){ return m.status !== 'offline'; }).length;
  var countEl = document.getElementById('team-online-count');
  if (countEl) countEl.textContent = online + ' ' + t('team_online');
  if (document.getElementById('team-panel-calls') &&
      document.getElementById('team-panel-calls').style.display !== 'none') loadCallGrid();
  if (typeof updateMap === 'function') updateMap(members);
}

function renderTeamLocations(members) {
  var el = document.getElementById('team-location-list');
  if (!el) return;
  if (!members || !members.length) {
    el.innerHTML = '<div class="empty-state"><p>'+(t('team_no_members'))+'</p></div>';
    return;
  }
  var locLabels = {
    shop:   {en:'At Shop',     fr:'À l\'atelier',    cls:'loc-shop-badge',   icon:'🏭'},
    travel: {en:'Travelling',  fr:'En déplacement',  cls:'loc-travel-badge', icon:'🚗'},
    onsite: {en:'On-site',     fr:'Sur le chantier', cls:'loc-onsite-badge', icon:'🏗️'},
    offline:{en:'Offline',     fr:'Hors ligne',       cls:'loc-offline-badge',icon:'⬛'}
  };
  el.innerHTML = members.map(function(m) {
    var initials = (m.display_name||m.user_email||'?').substring(0,2).toUpperCase();
    var locKey = m.status === 'offline' ? 'offline' : (m.location_type || 'shop');
    var loc = locLabels[locKey] || locLabels.shop;
    var locLabel = currentLang==='fr' ? loc.fr : loc.en;
    var lastSeen = new Date(m.last_seen);
    var minsAgo = Math.round((Date.now()-lastSeen)/60000);
    var timeLabel = minsAgo < 2 ? (currentLang==='fr'?'maintenant':'just now') :
                    minsAgo < 60 ? minsAgo+(currentLang==='fr'?' min':'min ago') :
                    lastSeen.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
    var gpsStr = m.lat ? m.lat.toFixed(4)+', '+m.lng.toFixed(4) : (currentLang==='fr'?'GPS non dispo':'No GPS');
    var isMe = m.is_me || m.user_email === currentUserEmail;
    return '<div class="team-member-card">'+
      '<div class="member-avatar" style="background:'+(isMe?'var(--wood-dark)':'var(--wood-mid)')+'">'+initials+'</div>'+
      '<div class="member-info">'+
        '<div class="member-name">'+(m.display_name||m.user_email.split('@')[0])+(isMe?' ('+(currentLang==='fr'?'moi':'me')+')':'')+'</div>'+
        '<div class="member-status">'+gpsStr+' · '+timeLabel+'</div>'+
      '</div>'+
      '<div class="member-loc-badge '+loc.cls+'">'+loc.icon+' '+locLabel+'</div>'+
    '</div>';
  }).join('');
  loadGPSHistory();
}

async function updateMyLocation() {
  var locType = document.getElementById('manual-loc-type') ? document.getElementById('manual-loc-type').value : 'shop';
  var infoEl = document.getElementById('my-location-info');
  if (infoEl) infoEl.textContent = currentLang==='fr' ? '📍 Obtention du GPS...' : '📍 Getting GPS...';
  if (!navigator.geolocation) {
    await upsertMyLocation(null, null, 'online', locType);
    if (infoEl) infoEl.textContent = currentLang==='fr' ? '⚠️ GPS non disponible' : '⚠️ GPS not available';
    return;
  }
  navigator.geolocation.getCurrentPosition(
    async function(pos) {
      var lat = pos.coords.latitude;
      var lng = pos.coords.longitude;
      var acc = Math.round(pos.coords.accuracy);
      var distShop = distanceMeters(lat, lng, SHOP_LAT, SHOP_LNG);
      var detectedType = distShop < SHOP_RADIUS_M ? 'shop' : locType;
      await upsertMyLocation(lat, lng, 'online', detectedType);
      var timeStr = new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
      var distStr = distShop < 1000 ? Math.round(distShop)+'m from shop' : (distShop/1000).toFixed(1)+'km from shop';
      if (infoEl) infoEl.innerHTML =
        '<strong>'+lat.toFixed(5)+', '+lng.toFixed(5)+'</strong><br>'+
        '<span style="font-size:0.75rem;color:var(--wood-mid);">±'+acc+'m · '+distStr+' · '+timeStr+'</span>';
      toast(currentLang==='fr' ? '📍 Position mise à jour!' : '📍 Location updated!');
      loadTeamLocations();
    },
    async function() {
      await upsertMyLocation(null, null, 'online', locType);
      if (infoEl) infoEl.textContent = currentLang==='fr' ? '⚠️ GPS refusé' : '⚠️ GPS denied — manual type set';
      loadTeamLocations();
    },
    {enableHighAccuracy:true, timeout:12000}
  );
}

async function loadGPSHistory() {
  if (!sb) return;
  try {
    var today = new Date().toISOString().split('T')[0];
    var res = await sb.from('time_logs').select('*')
      .eq('user_email', currentUserEmail)
      .gte('created_at', today+'T00:00:00Z')
      .order('created_at', {ascending:false});
    var el = document.getElementById('gps-history-list');
    if (!el) return;
    if (!res.data || !res.data.length) {
      el.innerHTML = '<div class="empty-state"><p>'+(currentLang==='fr'?t('team_no_clockins'):t('team_no_clockins'))+'</p></div>';
      return;
    }
    var icons = {shop:'🏭', travel:'🚗', onsite:'🏗️'};
    el.innerHTML = res.data.map(function(l) {
      var cin = new Date(l.clock_in).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
      var cout = l.clock_out ? new Date(l.clock_out).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}) : '—';
      var dur = l.duration_minutes ? Math.round(l.duration_minutes)+'min' : '—';
      var gps = (l.lat && l.lng) ? l.lat.toFixed(3)+', '+l.lng.toFixed(3) : '';
      return '<div class="price-row">'+
        '<span class="price-label">'+(icons[l.location_type]||'📍')+' '+cin+' → '+cout+
        (gps?' <span style="font-size:0.68rem;color:var(--wood-mid);">('+gps+')</span>':'')+
        (l.notes?'<br><span style="font-size:0.72rem;font-style:italic;">'+escapeHtml(l.notes)+'</span>':'')+
        '</span><span class="price-val">'+dur+'</span></div>';
    }).join('');
  } catch(e) { console.warn('GPS history:', e.message); }
}

// ══════════════════════════════════════════════════
// CHAT — broadcast-first (no DB tables needed)
// ══════════════════════════════════════════════════
async function loadChat() {
  if (!sb) return;
  try {
    var res = await sb.from('messages').select('*').eq('room','team').order('created_at',{ascending:true}).limit(100);
    if (!res.error) renderMessages(res.data || []);
  } catch(e) { /* table may not exist yet */ }
}

function renderMessages(msgs) {
  var el = document.getElementById('chat-messages');
  if (!el) return;
  if (!msgs || !msgs.length) {
    el.innerHTML = '<div class="empty-state" style="padding:30px;"><div class="icon">💬</div><p>'+(t('team_chat_empty'))+'</p></div>';
    return;
  }
  el.innerHTML = msgs.map(function(m) {
    var mine = m.sender_email === currentUserEmail;
    var d = new Date(m.created_at);
    var timeStr = d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
    var name = m.sender_name || (m.sender_email||'').split('@')[0];
    return '<div class="chat-msg '+(mine?'mine':'theirs')+'">'+
      (!mine ? '<div class="chat-msg-name">'+escapeHtml(name)+'</div>' : '')+
      '<div>'+escapeHtml(m.content)+'</div>'+
      '<div class="chat-msg-time">'+timeStr+'</div>'+
    '</div>';
  }).join('');
  el.scrollTop = el.scrollHeight;
}

function setupChatRealtime() {
  if (!sb || chatSubscription) return;
  chatSubscription = sb.channel('shackachaga-chat')
    .on('broadcast', { event: 'chat_msg' }, function(payload) {
      var m = payload.payload;
      if (!m || m.sender_email === currentUserEmail) return;
      if (m.content === '__VOICE__' && m.voice_data) {
        appendVoiceMessage(m, false);
        var name = m.sender_name || (m.sender_email||'').split('@')[0];
        toast('🎙️ '+name+' '+(t('voice_incoming')));
        if (navigator.vibrate) navigator.vibrate([100]);
      } else {
        var el = document.getElementById('chat-messages');
        if (!el) return;
        var empty = el.querySelector('.empty-state');
        if (empty) empty.remove();
        var d = new Date(m.created_at||Date.now());
        var timeStr = d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
        var name = m.sender_name || (m.sender_email||'').split('@')[0];
        var div = document.createElement('div');
        div.className = 'chat-msg theirs';
        div.innerHTML = '<div class="chat-msg-name">'+escapeHtml(name)+'</div>'+
          '<div>'+escapeHtml(m.content)+'</div>'+
          '<div class="chat-msg-time">'+timeStr+'</div>';
        el.appendChild(div);
        el.scrollTop = el.scrollHeight;
        toast('💬 '+name+': '+(m.content||'').substring(0,40));
      }
    })
    .subscribe(function(status) {
      console.log('Chat channel:', status);
    });
}

async function sendMessage() {
  var input = document.getElementById('chat-input');
  var content = input ? input.value.trim() : '';
  if (!content || !sb || !currentUserEmail) return;
  input.value = '';
  var msg = {
    sender_email: currentUserEmail,
    sender_name:  currentUserName || currentUserEmail.split('@')[0],
    content:      content,
    room:         'team',
    created_at:   new Date().toISOString()
  };
  // Show immediately in own chat
  var el = document.getElementById('chat-messages');
  if (el) {
    var empty = el.querySelector('.empty-state');
    if (empty) empty.remove();
    var div = document.createElement('div');
    div.className = 'chat-msg mine';
    div.innerHTML = '<div>'+escapeHtml(content)+'</div>'+
      '<div class="chat-msg-time">'+new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})+'</div>';
    el.appendChild(div);
    el.scrollTop = el.scrollHeight;
  }
  // Broadcast instantly to all
  if (chatSubscription && chatSubscription.send) {
    chatSubscription.send({ type:'broadcast', event:'chat_msg', payload:msg });
  }
  // Save to DB silently
  try {
    await sb.from('messages').insert([{sender_email:msg.sender_email, sender_name:msg.sender_name, content:msg.content, room:msg.room}]);
  } catch(e) { console.warn('Chat DB:', e.message); }
}

// ══════════════════════════════════════════════════
// WEBRTC CALLS
// ══════════════════════════════════════════════════
var localStream    = null;
var remoteStream   = null;
var peerConnection = null;
var callTarget     = null;
var callIsVideo    = false;
var isMuted        = false;
var isCamOff       = false;
var incomingSignal = null;

var ICE_SERVERS = {iceServers:[
  {urls:'stun:stun.l.google.com:19302'},
  {urls:'stun:stun1.l.google.com:19302'},
  {urls:'stun:stun2.l.google.com:19302'},
  {urls:'stun:stun.relay.metered.ca:80'},
  {urls:'turn:global.relay.metered.ca:80',     username:'openrelayproject', credential:'openrelayproject'},
  {urls:'turn:global.relay.metered.ca:443',    username:'openrelayproject', credential:'openrelayproject'},
  {urls:'turn:global.relay.metered.ca:443?transport=tcp', username:'openrelayproject', credential:'openrelayproject'}
]};

async function loadCallGrid() {
  if (!sb || !currentUserEmail) return;
  var el = document.getElementById('call-grid');
  if (!el) return;
  var others = teamMembers.filter(function(m){ return m.user_email !== currentUserEmail; });
  if (!others.length) {
    el.innerHTML = '<div class="empty-state"><p>'+(currentLang==='fr'?'Aucun autre membre en ligne':'No other team members online yet')+'</p></div>';
    return;
  }
  el.innerHTML = others.map(function(m) {
    var name = m.display_name || (m.user_email||'').split('@')[0];
    var initials = name.substring(0,2).toUpperCase();
    var online = m.status !== 'offline';
    return '<div class="call-user-card">'+
      '<div class="call-avatar" style="background:'+(online?'var(--green)':'#90A4AE')+'">'+initials+'</div>'+
      '<div class="call-user-name">'+escapeHtml(name)+'</div>'+
      '<div style="font-size:0.7rem;color:var(--wood-mid);margin-bottom:8px;">'+(online?(currentLang==='fr'?'En ligne':'Online'):(currentLang==='fr'?'Hors ligne':'Offline'))+'</div>'+
      '<div class="call-btns">'+
        '<button class="call-btn call-btn-voice" onclick="startCall(\''+m.user_email+'\',false)" title="Voice">📞</button>'+
        '<button class="call-btn call-btn-video" onclick="startCall(\''+m.user_email+'\',true)"  title="Video">🎥</button>'+
      '</div>'+
    '</div>';
  }).join('');
}


// Send WebRTC signal via broadcast channel (instant) + DB (reliable fallback)
async function sendSignal(toUser, signalType, payload) {
  var msg = {from_user: currentUserEmail, to_user: toUser, signal_type: signalType, payload: payload};
  // Broadcast to their channel (instant, ~50ms)
  var targetChannel = sb.channel('signal-'+toUser.replace(/[@.]/g,'_'));
  try { await targetChannel.send({type:'broadcast', event:'webrtc_signal', payload: msg}); } catch(e) {}
  // Also insert to DB as reliable fallback (covers reconnect scenarios)
  if (signalType !== 'ice') {
    try { await sb.from('webrtc_signals').insert([msg]); } catch(e) {}
  }
}

function setupSignalRealtime() {
  if (!sb || signalSubscription) return;
  // Clean stale signals
  try {
    var cutoff = new Date(Date.now()-60000).toISOString();
    sb.from('webrtc_signals').delete().lt('created_at', cutoff).then(function(){});
  } catch(e) {}
  var _sigChannelName = 'signal-'+currentUserEmail.replace(/[@.]/g,'_');
  signalSubscription = sb.channel(_sigChannelName)
    .on('broadcast', {event:'webrtc_signal'}, async function(payload) {
      var sig = payload.payload;
      if (!sig || sig.to_user !== currentUserEmail) return;
        if (sig.signal_type === 'offer') {
          incomingSignal = sig;
          callTarget = sig.from_user;
          var callerName = (sig.from_user||'').split('@')[0];
          var isVideo = sig.payload && sig.payload.is_video;
          var banner = document.getElementById('incoming-call-banner');
          var nameEl = document.getElementById('incoming-caller-name');
          var typeEl = document.getElementById('incoming-call-type');
          var iconEl = document.getElementById('incoming-call-icon');
          if (nameEl) nameEl.textContent = callerName;
          if (typeEl) typeEl.textContent = isVideo ? (currentLang==='fr'?'Appel vidéo':'Video call') : (currentLang==='fr'?'Appel vocal':'Voice call');
          if (iconEl) iconEl.textContent = isVideo ? '🎥' : '📞';
          if (banner) { banner.style.display='block'; banner.classList.add('show'); }
          if (navigator.vibrate) navigator.vibrate([300,100,300]);
          toast('📞 '+(currentLang==='fr'?'Appel de ':'Call from ')+callerName);
          // Auto-answer countdown if enabled
          if (_autoAnswer) startAutoAnswerCountdown();
        } else if (sig.signal_type === 'answer' && peerConnection) {
          try {
            await peerConnection.setRemoteDescription(new RTCSessionDescription(sig.payload.sdp));
            // Flush any buffered ICE candidates
            if (window._iceCandidateBuffer && window._iceCandidateBuffer.length) {
              for (var _ic of window._iceCandidateBuffer) {
                try { await peerConnection.addIceCandidate(new RTCIceCandidate(_ic)); } catch(e) {}
              }
              window._iceCandidateBuffer = [];
            }
          } catch(e) { console.error(e); }
        } else if (sig.signal_type === 'ice' && peerConnection) {
          try {
            if (peerConnection.remoteDescription && peerConnection.remoteDescription.type) {
              await peerConnection.addIceCandidate(new RTCIceCandidate(sig.payload.candidate));
            } else {
              // Buffer ICE candidates until remoteDescription is ready
              if (!window._iceCandidateBuffer) window._iceCandidateBuffer = [];
              window._iceCandidateBuffer.push(sig.payload.candidate);
            }
          } catch(e) { console.warn('ICE error:', e.message); }
        } else if (sig.signal_type === 'hangup') {
          hangup();
          toast((sig.from_user||'').split('@')[0]+' '+(currentLang==='fr'?'a raccroché':'hung up'));
        } else if (sig.signal_type === 'reject') {
          hangup();
          toast(currentLang==='fr'?'Appel refusé':'Call declined');
        }
        // Clean up
        try { sb.from('webrtc_signals').delete().eq('id', sig.id).then(function(){}); } catch(e) {}
      })
    .subscribe(function(status){ console.log('Signal channel:', status); });
}

function createPeer() {
  var pc = new RTCPeerConnection(ICE_SERVERS);
  pc.onicecandidate = async function(e) {
    if (e.candidate && callTarget && sb) {
      try {
        await sendSignal(callTarget, 'ice', {candidate:e.candidate});
      } catch(err) {}
    }
  };
  pc.ontrack = function(e) {
    var rv = document.getElementById('remote-video');
    if (rv) { rv.srcObject = e.streams[0]; remoteStream = e.streams[0]; }
  };
  pc.onconnectionstatechange = function() {
    var s = pc.connectionState;
    var labels = {connecting:t('dyn_loading'), connected:currentLang==='fr'?'Connecté':'Connected', disconnected:currentLang==='fr'?'Déconnecté':'Disconnected', failed:currentLang==='fr'?'Échec':'Failed'};
    var st = document.getElementById('call-status-text');
    if (st) st.textContent = labels[s] || s;
    if (s==='disconnected'||s==='failed') hangup();
  };
  return pc;
}

async function getMedia(video) {
  // Ensure mic permission granted first
  if (!_micGranted) {
    var ok = await requestMicPermissionOnce();
    if (!ok) return null;
  }
  try {
    var stream = await navigator.mediaDevices.getUserMedia({audio:true, video:video});
    _micGranted = true;
    localStorage.setItem('shack_mic_granted','1');
    return stream;
  } catch(e) {
    _micGranted = false;
    localStorage.removeItem('shack_mic_granted');
    toast('⚠️ '+(currentLang==='fr'?'Microphone requis — vérifiez les permissions':'Mic required — check browser permissions'));
    return null;
  }
}

async function startCall(targetEmail, withVideo) {
  if (!sb||!currentUserEmail) { toast('⚠️ '+(currentLang==='fr'?'Non connecté':'Not connected')); return; }
  if (peerConnection) { toast(currentLang==='fr'?'Appel en cours':'Call in progress'); return; }
  callTarget=targetEmail; callIsVideo=withVideo;
  localStream = await getMedia(withVideo);
  if (!localStream) return;
  peerConnection = createPeer();
  localStream.getTracks().forEach(function(t){ peerConnection.addTrack(t,localStream); });
  var lv=document.getElementById('local-video');
  if(lv) lv.srcObject=localStream;
  var cb=document.getElementById('btn-cam');
  if(cb) cb.style.display=withVideo?'flex':'none';
  showCallOverlay(currentLang==='fr'?'Appel en cours...':'Calling...');
  try {
    var offer=await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    await sendSignal(targetEmail, 'offer', {sdp:offer, is_video:withVideo});
    toast(currentLang==='fr'?'📞 Appel envoyé...':'📞 Calling...');
  } catch(e) { toast('⚠️ '+e.message); hangup(); }
}

async function acceptCall() {
  cancelAutoAnswerCountdown();
  if (!incomingSignal) return;
  var banner=document.getElementById('incoming-call-banner');
  if(banner){banner.classList.remove('show');banner.style.display='none';}
  var from_user=incomingSignal.from_user, payload=incomingSignal.payload;
  callTarget=from_user; callIsVideo=payload&&payload.is_video; incomingSignal=null;
  localStream=await getMedia(callIsVideo);
  if(!localStream) return;
  peerConnection=createPeer();
  localStream.getTracks().forEach(function(t){peerConnection.addTrack(t,localStream);});
  var lv=document.getElementById('local-video');
  if(lv) lv.srcObject=localStream;
  var cb=document.getElementById('btn-cam');
  if(cb) cb.style.display=callIsVideo?'flex':'none';
  showCallOverlay(t('dyn_loading'));
  try {
    await peerConnection.setRemoteDescription(new RTCSessionDescription(payload.sdp));
    // Flush buffered ICE candidates
    if (window._iceCandidateBuffer && window._iceCandidateBuffer.length) {
      for (var _ic of window._iceCandidateBuffer) {
        try { await peerConnection.addIceCandidate(new RTCIceCandidate(_ic)); } catch(e) {}
      }
      window._iceCandidateBuffer = [];
    }
    var answer=await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    await sendSignal(from_user, 'answer', {sdp:answer});
  } catch(e) { toast('⚠️ '+e.message); hangup(); }
}

function rejectCall() {
  cancelAutoAnswerCountdown();
  incomingSignal=null;
  var b=document.getElementById('incoming-call-banner');
  if(b){b.classList.remove('show');b.style.display='none';}
  if(callTarget&&sb) { try{sb.from('webrtc_signals').insert([{from_user:currentUserEmail,to_user:callTarget,signal_type:'reject',payload:{}}]);}catch(e){} }
}

function showCallOverlay(statusText) {
  var overlay=document.getElementById('call-overlay');
  if(overlay) overlay.classList.remove('hidden');
  var st=document.getElementById('call-status-text');
  if(st) st.textContent=statusText;
  var lv=document.getElementById('local-video'),rv=document.getElementById('remote-video');
  if(lv) lv.style.display=callIsVideo?'block':'none';
  if(rv) rv.style.display=callIsVideo?'block':'none';
}

async function hangup() {
  if(peerConnection){try{peerConnection.onicecandidate=null;peerConnection.ontrack=null;peerConnection.close();}catch(e){}peerConnection=null;}
  if(localStream){localStream.getTracks().forEach(function(t){t.stop();});localStream=null;}
  remoteStream=null;
  if(callTarget&&sb){
    try{await sb.from('webrtc_signals').insert([{from_user:currentUserEmail,to_user:callTarget,signal_type:'hangup',payload:{}}]);}catch(e){}
    try{await sb.from('webrtc_signals').delete().or('and(from_user.eq.'+currentUserEmail+',to_user.eq.'+callTarget+'),and(from_user.eq.'+callTarget+',to_user.eq.'+currentUserEmail+')');}catch(e){}
  }
  peerConnection=null; callTarget=null; incomingSignal=null; window._iceCandidateBuffer=[];
  var overlay=document.getElementById('call-overlay');
  if(overlay) overlay.classList.add('hidden');
  var lv=document.getElementById('local-video'),rv=document.getElementById('remote-video');
  if(lv) lv.srcObject=null; if(rv) rv.srcObject=null;
  var mb=document.getElementById('btn-mute'); if(mb) mb.textContent='🎤';
  isMuted=false; isCamOff=false;
}

function toggleMute() {
  if(!localStream) return;
  isMuted=!isMuted;
  localStream.getAudioTracks().forEach(function(t){t.enabled=!isMuted;});
  var btn=document.getElementById('btn-mute'); if(btn) btn.textContent=isMuted?'🔇':'🎤';
}

function toggleCamera() {
  if(!localStream) return;
  isCamOff=!isCamOff;
  localStream.getVideoTracks().forEach(function(t){t.enabled=!isCamOff;});
  var btn=document.getElementById('btn-cam'); if(btn) btn.textContent=isCamOff?'📷':'📹';
}

function escapeHtml(s) {
  return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}




// ══════════════════════════════════════════════════
// SECURE ENCRYPTED MESSAGING
// AES-GCM via Web Crypto API (built-in, no library)
// ══════════════════════════════════════════════════

var _msgTab = 'inbox';
var _allMessages = [];
// Shared symmetric key derived from app secret
var _CRYPTO_SECRET = 'LeShackachaga-SecureComms-2024-v1';

async function getMsgCryptoKey() {
  var enc = new TextEncoder();
  var keyMaterial = await window.crypto.subtle.importKey(
    'raw', enc.encode(_CRYPTO_SECRET), 'PBKDF2', false, ['deriveKey']
  );
  return window.crypto.subtle.deriveKey(
    { name:'PBKDF2', salt:enc.encode('shackachaga-salt'), iterations:100000, hash:'SHA-256' },
    keyMaterial,
    { name:'AES-GCM', length:256 },
    false, ['encrypt','decrypt']
  );
}

async function encryptMessage(text) {
  var key = await getMsgCryptoKey();
  var enc = new TextEncoder();
  var iv  = window.crypto.getRandomValues(new Uint8Array(12));
  var encrypted = await window.crypto.subtle.encrypt({name:'AES-GCM', iv}, key, enc.encode(text));
  return {
    body_enc: btoa(String.fromCharCode(...new Uint8Array(encrypted))),
    iv:       btoa(String.fromCharCode(...iv))
  };
}

async function decryptMessage(body_enc, iv_b64) {
  try {
    var key = await getMsgCryptoKey();
    var dec = new TextDecoder();
    var encrypted = Uint8Array.from(atob(body_enc), c => c.charCodeAt(0));
    var iv        = Uint8Array.from(atob(iv_b64),   c => c.charCodeAt(0));
    var decrypted = await window.crypto.subtle.decrypt({name:'AES-GCM', iv}, key, encrypted);
    return dec.decode(decrypted);
  } catch(e) { return '[Could not decrypt]'; }
}

function showMsgTab(tab) {
  _msgTab = tab;
  ['inbox','sent'].forEach(function(t) {
    var el = document.getElementById('mtab-'+t);
    if (el) el.classList.toggle('active', t === tab);
  });
  renderInboxMessages();
}

function showComposeMessage() {
  var form = document.getElementById('compose-form');
  if (form) form.style.display = 'block';
  // Populate recipient list
  var sel = document.getElementById('msg-to');
  if (sel && sb) {
    sb.from('employee_profiles').select('email,display_name,first_name,last_name')
      .eq('is_active', true).then(function(res) {
        if (!res.data) return;
        sel.innerHTML = '<option value="">— ' + (currentLang==='fr'?'Choisir destinataire':'Select recipient') + ' —</option>';
        res.data.forEach(function(e) {
          if (e.email === currentUserEmail) return;
          var name = e.display_name || (e.first_name+' '+e.last_name).trim() || e.email;
          sel.innerHTML += '<option value="'+e.email+'">'+name+'</option>';
        });
      });
  }
}

function hideComposeMessage() {
  var form = document.getElementById('compose-form');
  if (form) form.style.display = 'none';
}

async function sendSecureMessage() {
  var to      = document.getElementById('msg-to')?.value.trim();
  var subject = document.getElementById('msg-subject')?.value.trim();
  var body    = document.getElementById('msg-body')?.value.trim();
  if (!to)   { toast(currentLang==='fr'?'⚠️ Choisissez un destinataire':'⚠️ Choose a recipient'); return; }
  if (!body) { toast(currentLang==='fr'?'⚠️ Écrivez un message':'⚠️ Write a message'); return; }
  if (!sb)   return;
  try {
    var enc = await encryptMessage(body);
    await sb.from('secure_messages').insert([{
      from_email: currentUserEmail,
      to_email:   to,
      subject:    subject || (currentLang==='fr'?'(sans sujet)':'(no subject)'),
      body_enc:   enc.body_enc,
      iv:         enc.iv
    }]);
    toast('🔒 '+(currentLang==='fr'?'Message envoyé de façon sécurisée!':'Message sent securely!'));
    hideComposeMessage();
    document.getElementById('msg-subject').value = '';
    document.getElementById('msg-body').value    = '';
    loadMessages();
  } catch(e) { toast('⚠️ '+e.message); }
}

async function loadMessages() {
  if (!sb || !currentUserEmail) return;
  try {
    var res = await sb.from('secure_messages')
      .select('*')
      .or('to_email.eq.'+currentUserEmail+',from_email.eq.'+currentUserEmail)
      .order('created_at', {ascending:false})
      .limit(50);
    _allMessages = res.data || [];
    // Decrypt all messages
    for (var i = 0; i < _allMessages.length; i++) {
      _allMessages[i]._decrypted = await decryptMessage(_allMessages[i].body_enc, _allMessages[i].iv);
    }
    renderInboxMessages();
    updateMsgBadge();
  } catch(e) { console.error('loadMessages:', e); }
}

function renderInboxMessages() {
  var list = document.getElementById('msg-list');
  if (!list) return;
  var msgs = _allMessages.filter(function(m) {
    return _msgTab === 'inbox' ? m.to_email === currentUserEmail : m.from_email === currentUserEmail;
  });
  if (!msgs.length) {
    list.innerHTML = '<div class="empty-state"><div class="icon">🔒</div><p>'+
      (currentLang==='fr'?'Aucun message':'No messages yet')+'</p></div>';
    return;
  }
  list.innerHTML = msgs.map(function(m) {
    var isUnread = !m.read_at && m.to_email === currentUserEmail;
    var other    = _msgTab==='inbox' ? m.from_email : m.to_email;
    var otherName= other.split('@')[0];
    var timeStr  = new Date(m.created_at).toLocaleDateString(currentLang==='fr'?'fr-CA':'en-CA',
      {month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
    var preview  = (m._decrypted||'').substring(0,60)+'...';
    return '<div class="msg-item'+(isUnread?' unread':'')+'" onclick="openMessage('+m.id+')">'+
      '<div class="msg-item-header">'+
        '<span class="msg-item-from">'+
          (_msgTab==='inbox'?'📨 ':'📤 ')+otherName+
          ' <span class="msg-lock">🔒</span>'+
        '</span>'+
        '<span class="msg-item-time">'+timeStr+'</span>'+
      '</div>'+
      '<div class="msg-item-subject">'+escapeHtml(m.subject||'')+'</div>'+
      '<div class="msg-item-preview">'+escapeHtml(preview)+'</div>'+
    '</div>';
  }).join('');
}

async function openMessage(id) {
  var m = _allMessages.find(function(x){ return x.id === id; });
  if (!m) return;
  // Mark as read
  if (!m.read_at && m.to_email === currentUserEmail) {
    await sb.from('secure_messages').update({read_at:new Date().toISOString()}).eq('id',id);
    m.read_at = new Date().toISOString();
    updateMsgBadge();
  }
  var timeStr = new Date(m.created_at).toLocaleDateString(currentLang==='fr'?'fr-CA':'en-CA',
    {weekday:'short',month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
  var overlay = document.getElementById('employee-modal');
  if (!overlay) return;
  document.getElementById('emp-modal-title').textContent = m.subject || (currentLang==='fr'?'(sans sujet)':'(no subject)');

  var body = document.createElement('div');
  body.className = 'msg-thread';

  // Header
  var hdr = document.createElement('div');
  hdr.className = 'msg-thread-header';
  hdr.innerHTML =
    '<div style="font-size:0.82rem;"><strong>'+(currentLang==='fr'?'De: ':'From: ')+escapeHtml(m.from_email)+'</strong></div>'+
    '<div style="font-size:0.82rem;color:var(--wood-mid);">'+(currentLang==='fr'?'À: ':'To: ')+escapeHtml(m.to_email)+'</div>'+
    '<div style="font-size:0.75rem;color:var(--wood-mid);margin-top:4px;">'+timeStr+' 🔒 '+(currentLang==='fr'?'Chiffré AES-256':'AES-256 Encrypted')+'</div>';
  body.appendChild(hdr);

  // Message bubble
  var bubble = document.createElement('div');
  bubble.className = 'msg-bubble ' + (m.from_email===currentUserEmail ? 'mine' : 'theirs');
  var msgText = document.createElement('div');
  msgText.style.cssText = 'font-size:0.88rem;white-space:pre-wrap;';
  msgText.textContent = m._decrypted || '';
  var meta = document.createElement('div');
  meta.className = 'msg-bubble-meta';
  meta.textContent = '🔒 ' + timeStr;
  bubble.appendChild(msgText);
  bubble.appendChild(meta);
  body.appendChild(bubble);

  // Action buttons
  var btnRow = document.createElement('div');
  btnRow.style.cssText = 'display:flex;gap:8px;margin-top:12px;';

  if (m.to_email === currentUserEmail) {
    var replyBtn = document.createElement('button');
    replyBtn.className = 'btn btn-amber btn-sm';
    replyBtn.textContent = currentLang==='fr' ? '↩ Répondre' : '↩ Reply';
    replyBtn.onclick = function() { replyToMessage(m.from_email, 'Re: '+(m.subject||'')); };
    btnRow.appendChild(replyBtn);
  }

  var closeBtn = document.createElement('button');
  closeBtn.className = 'btn btn-ghost btn-sm';
  closeBtn.textContent = currentLang==='fr' ? 'Fermer' : 'Close';
  closeBtn.onclick = function() { closeModal('employee-modal'); };
  btnRow.appendChild(closeBtn);

  var delBtn = document.createElement('button');
  delBtn.className = 'btn btn-ghost btn-sm';
  delBtn.style.color = 'var(--red)';
  delBtn.textContent = '🗑';
  delBtn.onclick = function() { deleteMessage(id); };
  btnRow.appendChild(delBtn);
  body.appendChild(btnRow);

  var bodyWrap = document.getElementById('emp-modal-body');
  bodyWrap.innerHTML = '';
  bodyWrap.appendChild(body);
  overlay.classList.add('open');
}

// ══════════════════════════════════════════════════════════════════
// COMPLETE MESSAGES + ROSTER IMPLEMENTATION
// ══════════════════════════════════════════════════════════════════

// ── Message helpers ───────────────────────────────────────────────
function updateMsgBadge() {
  var unread = (_allMessages||[]).filter(function(m){
    return m.to_email === currentUserEmail && !m.read_at;
  }).length;
  var badge = document.getElementById('msg-unread-count');
  if (badge) { badge.textContent = unread; badge.style.display = unread ? 'inline' : 'none'; }
  var tabEl = document.getElementById('tab-messages');
  if (tabEl) {
    var existing = tabEl.querySelector('.msg-nav-badge');
    if (unread > 0) {
      if (!existing) {
        var b = document.createElement('span');
        b.className = 'msg-nav-badge';
        b.style.cssText = 'background:var(--amber);color:white;border-radius:10px;padding:1px 5px;font-size:0.62rem;font-weight:700;margin-left:4px;';
        tabEl.appendChild(b);
        existing = b;
      }
      existing.textContent = unread;
    } else if (existing) { existing.remove(); }
  }
}

function initMessages() {
  loadMessages();
  setupMessageRealtime();
  showComposeMessage(); // init recipient list
  hideComposeMessage(); // then hide it
}

function setupMessageRealtime() {
  if (!sb || !currentUserEmail) return;
  sb.channel('secure-msg-' + currentUserEmail.replace(/[@.]/g,'_'))
    .on('postgres_changes', {event:'INSERT', schema:'public', table:'secure_messages'}, function(payload) {
      var m = payload.new;
      if (m.to_email !== currentUserEmail) return;
      var name = m.from_email.split('@')[0];
      toast('🔒 ' + (currentLang==='fr' ? 'Nouveau message de ' : 'New message from ') + name);
      if (navigator.vibrate) navigator.vibrate([200]);
      loadMessages();
    })
    .subscribe();
}

function replyToMessage(toEmail, subject) {
  closeModal('employee-modal');
  var form = document.getElementById('compose-form');
  if (form) form.style.display = 'block';
  showComposeMessage();
  setTimeout(function() {
    var sel = document.getElementById('msg-to');
    if (sel) sel.value = toEmail;
    var subj = document.getElementById('msg-subject');
    if (subj) subj.value = subject;
    document.getElementById('msg-body')?.focus();
  }, 100);
}

async function deleteMessage(id) {
  if (!sb || !confirm(currentLang==='fr' ? 'Supprimer ce message?' : 'Delete this message?')) return;
  await sb.from('secure_messages').delete().eq('id', id);
  closeModal('employee-modal');
  _allMessages = (_allMessages||[]).filter(function(m){ return m.id !== id; });
  renderInboxMessages();
  updateMsgBadge();
  toast(currentLang==='fr' ? '🗑 Message supprimé' : '🗑 Message deleted');
}

// ══════════════════════════════════════════════════════════════════
// EMPLOYEE ROSTER
// ══════════════════════════════════════════════════════════════════
var _rosterUsers   = [];
var _editingUserId = null;

async function initRosterPage() {
  if (!isAdmin(currentUserEmail)) { showPage('quote'); return; }
  await loadRosterUsers();
}

async function loadRosterUsers() {
  if (!sb) return;
  var grid = document.getElementById('roster-grid');
  if (grid) grid.innerHTML = '<div class="empty-state"><div class="icon">⏳</div></div>';
  try {
    var res = await sb.from('employee_profiles').select('*').order('display_name');
    _rosterUsers = res.data || [];
    window._rosterUsers = _rosterUsers;
    var total     = _rosterUsers.length;
    var active    = _rosterUsers.filter(function(p){ return p.status !== 'inactive'; }).length;
    var positions = (function(){ var s=new Set(); _rosterUsers.forEach(function(p){ if(p.position) s.add(p.position); }); return s.size; })();
    var sv = function(id, v) { var e = document.getElementById(id); if(e) e.textContent = v; };
    sv('roster-total', total); sv('roster-active', active); sv('roster-positions', positions);
    if (!grid) return;
    if (!_rosterUsers.length) {
      grid.innerHTML = '<div class="empty-state"><div class="icon">👤</div><p>' +
        (currentLang==='fr' ? 'Aucun employé. Cliquez + Ajouter.' : 'No employees yet. Click + Add.') + '</p></div>';
      return;
    }
    grid.innerHTML = _rosterUsers.map(function(p){ return renderEmployeeCard(p); }).join('');
  } catch(e) {
    if (grid) grid.innerHTML = '<div class="empty-state"><p>⚠️ ' + e.message + '</p></div>';
  }
}

function renderEmployeeCard(p) {
  var initials = ((p.display_name || p.email || '?').charAt(0)).toUpperCase();
  var avatar = p.photo_url
    ? '<img src="'+escapeHtml(p.photo_url)+'" style="width:54px;height:54px;border-radius:50%;object-fit:cover;flex-shrink:0;">'
    : '<div style="width:54px;height:54px;border-radius:50%;background:var(--wood-mid);color:white;display:flex;align-items:center;justify-content:center;font-size:1.4rem;font-weight:700;flex-shrink:0;">'+initials+'</div>';
  var statusColor = p.status==='active' ? 'var(--green)' : p.status==='on-leave' ? 'var(--amber)' : '#999';
  var statusLbl   = p.status==='active' ? (currentLang==='fr'?'Actif':'Active') :
                    p.status==='on-leave' ? (currentLang==='fr'?'En congé':'On Leave') :
                    (currentLang==='fr'?'Inactif':'Inactive');
  return '<div class="roster-card" onclick="openEmployeeEditor(\''+p.id+'\')">' +
    '<div class="roster-card-inner">' +
      '<div class="roster-avatar">' + avatar + '</div>' +
      '<div class="roster-info">' +
        '<div class="roster-name">' + escapeHtml(p.display_name || p.email || '—') + '</div>' +
        '<div class="roster-position">' + escapeHtml(p.position || (currentLang==='fr'?'Poste non défini':'No position')) + '</div>' +
        '<div style="font-size:0.7rem;color:var(--wood-mid);">' + escapeHtml(p.email||'') + '</div>' +
        (p.phone ? '<div style="font-size:0.7rem;color:var(--wood-mid);">📞 '+escapeHtml(p.phone)+'</div>' : '') +
      '</div>' +
      '<div style="text-align:right;flex-shrink:0;">' +
        '<div style="font-size:0.7rem;font-weight:700;color:'+statusColor+';margin-bottom:6px;">● '+statusLbl+'</div>' +
        (p.pw_temp ? '<div style="font-size:0.65rem;background:#FFF3E0;color:#E65100;padding:2px 7px;border-radius:4px;font-weight:600;font-family:monospace;margin-bottom:4px;">🔑 '+escapeHtml(p.pw_temp)+'</div>' : '') +
      '</div>' +
    '</div>' +
    (p.admin_notes ? '<div style="font-size:0.72rem;color:var(--wood-mid);margin-top:8px;padding-top:8px;border-top:1px solid var(--wood-pale);font-style:italic;">📝 '+escapeHtml(p.admin_notes.substring(0,100))+'</div>' : '') +
  '</div>';
}

function openNewEmployee() {
  _editingUserId = null;
  window._pendingPhotoData = null;
  buildEmployeeModal(null);
}

async function openEmployeeEditor(profileId) {
  _editingUserId = profileId;
  window._pendingPhotoData = null;
  var p = (_rosterUsers||[]).find(function(u){ return u.id === profileId; });
  buildEmployeeModal(p);
}

function buildEmployeeModal(p) {
  var overlay = document.getElementById('employee-modal');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'employee-modal';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = '<div class="modal" id="emp-modal-inner" style="max-width:500px;max-height:90vh;overflow-y:auto;"></div>';
    document.body.appendChild(overlay);
  }
  overlay.classList.add('open');
  var isEdit = !!p;
  var m = p || {};
  var inner = document.getElementById('emp-modal-inner');
  if (!inner) { inner = overlay.querySelector('.modal'); }

  inner.innerHTML =
    '<button class="modal-close" onclick="closeEmpModal()">×</button>' +
    '<div class="modal-title">' + (isEdit ? (currentLang==='fr'?'✏️ Modifier employé':'✏️ Edit Employee') : (currentLang==='fr'?'➕ Nouvel employé':'➕ New Employee')) + '</div>' +
    // Avatar
    '<div style="text-align:center;margin-bottom:16px;">' +
      '<div id="emp-avatar-preview" style="width:76px;height:76px;border-radius:50%;background:var(--wood-mid);color:white;display:flex;align-items:center;justify-content:center;font-size:2rem;margin:0 auto 10px;overflow:hidden;cursor:pointer;" onclick="document.getElementById(\'emp-photo-file\').click()">' +
        (m.photo_url ? '<img src="'+escapeHtml(m.photo_url)+'" style="width:100%;height:100%;object-fit:cover;">' : '👤') +
      '</div>' +
      '<label style="cursor:pointer;font-size:0.78rem;color:var(--amber);font-weight:600;" onclick="document.getElementById(\'emp-photo-file\').click()">📷 ' + (currentLang==='fr'?'Modifier la photo':'Change photo') + '</label>' +
      '<input type="file" id="emp-photo-file" accept="image/*" style="display:none;" onchange="previewEmpPhoto(this)">' +
    '</div>' +
    // Basic info
    '<label>' + (currentLang==='fr'?'Nom d\'affichage *':'Display Name *') + '</label>' +
    '<input type="text" id="emp-name" value="'+escapeHtml(m.display_name||'')+'" placeholder="Jean Tremblay">' +
    '<label>Email *</label>' +
    '<input type="email" id="emp-email" value="'+escapeHtml(m.email||'')+'"'+(isEdit?' readonly style="opacity:0.65;background:#f9f9f9;"':'')+' placeholder="jean@example.com">' +
    '<div class="row-2">' +
      '<div><label>' + (currentLang==='fr'?'Poste':'Position') + '</label>' +
      '<input type="text" id="emp-position" value="'+escapeHtml(m.position||'')+'" placeholder="' + (currentLang==='fr'?'Ébéniste':'Woodworker') + '"></div>' +
      '<div><label>' + (currentLang==='fr'?'Téléphone':'Phone') + '</label>' +
      '<input type="tel" id="emp-phone" value="'+escapeHtml(m.phone||'')+'"></div>' +
    '</div>' +
    '<label>' + (currentLang==='fr'?'Statut':'Status') + '</label>' +
    '<select id="emp-status">' +
      '<option value="active"'+(m.status==='active'||!m.status?' selected':'')+'>' + (currentLang==='fr'?'✅ Actif':'✅ Active') + '</option>' +
      '<option value="on-leave"'+(m.status==='on-leave'?' selected':'')+'>' + (currentLang==='fr'?'🟡 En congé':'🟡 On Leave') + '</option>' +
      '<option value="inactive"'+(m.status==='inactive'?' selected':'')+'>' + (currentLang==='fr'?'⛔ Inactif':'⛔ Inactive') + '</option>' +
    '</select>' +
    // Password section
    '<div style="background:var(--wood-pale);border-radius:var(--radius-sm);padding:12px;margin:12px 0;">' +
      '<div style="font-size:0.72rem;font-weight:700;color:var(--wood-mid);text-transform:uppercase;margin-bottom:10px;">🔑 ' + (currentLang==='fr'?'Accès & Mot de passe':'Access & Password') + '</div>' +
      '<label style="font-size:0.78rem;">' + (currentLang==='fr'?'Mot de passe actuel (admin seulement)':'Current Password (admin only)') + '</label>' +
      '<div style="display:flex;gap:8px;align-items:center;">' +
        '<input type="text" id="emp-pw" value="'+escapeHtml(m.pw_temp||'')+'" placeholder="'+(currentLang==='fr'?'Non défini':'Not set')+'" style="flex:1;font-family:monospace;font-size:0.9rem;">' +
        '<button class="btn btn-amber btn-sm" onclick="generateTempPassword()" style="flex-shrink:0;min-width:40px;" title="Generate">🔄</button>' +
      '</div>' +
      '<div style="font-size:0.68rem;color:var(--wood-mid);margin-top:4px;">' + (currentLang==='fr'?'Ce mot de passe est visible uniquement aux admins. Utilisez Supabase Auth pour le définir réellement.':'This password is visible to admins only. Use Supabase Auth to actually set it.') + '</div>' +
    '</div>' +
    // Admin notes
    '<label>' + (currentLang==='fr'?'Notes admin (privées)':'Admin Notes (private)') + '</label>' +
    '<textarea id="emp-notes" placeholder="'+(currentLang==='fr'?'Notes confidentielles...':'Confidential notes...')+'" style="min-height:70px;">' + escapeHtml(m.admin_notes||'') + '</textarea>' +
    // Buttons
    '<div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap;">' +
      '<button class="btn btn-green" onclick="saveEmployee()">✅ ' + (currentLang==='fr'?'Sauvegarder':'Save') + '</button>' +
      (isEdit ? '<button class="btn btn-amber btn-sm" onclick="generateTempPassword()">🔑 ' + (currentLang==='fr'?'Nouveau MDP':'New PW') + '</button>' : '') +
      (isEdit ? '<button class="btn btn-red btn-sm" onclick="confirmDeactivate()">⛔ ' + (currentLang==='fr'?'Désactiver':'Deactivate') + '</button>' : '') +
      '<button class="btn btn-ghost" onclick="closeEmpModal()">✕ ' + (currentLang==='fr'?'Annuler':'Cancel') + '</button>' +
    '</div>';
}

function closeEmpModal() {
  var overlay = document.getElementById('employee-modal');
  if (overlay) overlay.classList.remove('open');
  window._pendingPhotoData = null;
  _editingUserId = null;
}

function previewEmpPhoto(input) {
  if (!input.files || !input.files[0]) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    var preview = document.getElementById('emp-avatar-preview');
    if (preview) preview.innerHTML = '<img src="'+e.target.result+'" style="width:100%;height:100%;object-fit:cover;">';
    window._pendingPhotoData = e.target.result;
  };
  reader.readAsDataURL(input.files[0]);
}

function generateTempPassword() {
  var chars = 'abcdefghjkmnpqrstuvwxyz23456789!@#';
  var pw = '';
  for (var i = 0; i < 10; i++) pw += chars[Math.floor(Math.random()*chars.length)];
  var el = document.getElementById('emp-pw');
  if (el) el.value = pw;
  toast('🔑 ' + (currentLang==='fr'?'Mot de passe généré — sauvegardez!':'Password generated — save it!'));
}

async function saveEmployee() {
  var name     = (document.getElementById('emp-name')?.value || '').trim();
  var email    = (document.getElementById('emp-email')?.value || '').trim().toLowerCase();
  var position = (document.getElementById('emp-position')?.value || '').trim();
  var phone    = (document.getElementById('emp-phone')?.value || '').trim();
  var status   = document.getElementById('emp-status')?.value || 'active';
  var notes    = (document.getElementById('emp-notes')?.value || '').trim();
  var pwTemp   = (document.getElementById('emp-pw')?.value || '').trim();

  if (!name)  { toast(currentLang==='fr'?'⚠️ Nom requis':'⚠️ Name required'); return; }
  if (!email) { toast(currentLang==='fr'?'⚠️ Email requis':'⚠️ Email required'); return; }

  var data = {
    display_name: name, email: email,
    position: position || null, phone: phone || null,
    status: status, admin_notes: notes || null,
    pw_temp: pwTemp || null, updated_at: new Date().toISOString()
  };
  if (window._pendingPhotoData) { data.photo_url = window._pendingPhotoData; window._pendingPhotoData = null; }

  try {
    var res;
    if (_editingUserId) {
      res = await sb.from('employee_profiles').update(data).eq('id', _editingUserId);
    } else {
      data.created_at = new Date().toISOString();
      res = await sb.from('employee_profiles').insert([data]);
    }
    if (res.error) { toast('⚠️ ' + res.error.message); return; }
    toast('✅ ' + (currentLang==='fr'?'Employé sauvegardé!':'Employee saved!'));
    closeEmpModal();
    loadRosterUsers();
  } catch(e) { toast('⚠️ ' + e.message); }
}

async function confirmDeactivate() {
  if (!_editingUserId) return;
  if (!confirm(currentLang==='fr'?'Désactiver cet employé?':'Deactivate this employee?')) return;
  var res = await sb.from('employee_profiles').update({status:'inactive'}).eq('id', _editingUserId);
  if (!res.error) {
    toast(currentLang==='fr'?'⛔ Employé désactivé':'⛔ Employee deactivated');
    closeEmpModal();
    loadRosterUsers();
  }
}


// ══════════════════════════════════════════════════════════════════
// GPS MAP — Leaflet/OpenStreetMap
// Admin only. Shows team positions, time summary, GPS history.
// ══════════════════════════════════════════════════════════════════

var _leafletMap    = null;
var _leafletLoaded = false;
var _mapMarkers    = {};
var SHOP_LAT       = 45.4765;
var SHOP_LNG       = -75.7013;
var SHOP_RADIUS_M  = 300;

var USER_COLORS = ['#E65100','#1565C0','#2E7D32','#6A1B9A','#AD1457','#00695C','#4527A0','#558B2F'];

function getUserColor(email) {
  var idx = 0;
  for (var i = 0; i < (email||'').length; i++) idx = (idx + email.charCodeAt(i)) % USER_COLORS.length;
  return USER_COLORS[idx];
}

function initMap() {
  if (!isAdmin(currentUserEmail)) return;
  if (_leafletLoaded && _leafletMap) {
    _leafletMap.invalidateSize();
    updateMap();
    return;
  }
  if (_leafletLoaded) {
    createLeafletMap();
    return;
  }
  // Load Leaflet CSS
  if (!document.getElementById('leaflet-css')) {
    var link = document.createElement('link');
    link.id  = 'leaflet-css';
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);
  }
  // Load Leaflet JS
  var script = document.createElement('script');
  script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
  script.onload = function() {
    _leafletLoaded = true;
    createLeafletMap();
  };
  script.onerror = function() {
    var el = document.getElementById('leaflet-map');
    if (el) el.innerHTML = '<div style="padding:20px;text-align:center;color:var(--wood-mid);">⚠️ ' + (currentLang==='fr'?'Carte non disponible hors ligne':'Map unavailable offline') + '</div>';
  };
  document.head.appendChild(script);
}

function createLeafletMap() {
  var container = document.getElementById('leaflet-map');
  if (!container || _leafletMap) return;
  _leafletMap = L.map('leaflet-map', {zoomControl: true, attributionControl: false}).setView([SHOP_LAT, SHOP_LNG], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(_leafletMap);
  // Shop pin
  var shopIcon = L.divIcon({
    className: '',
    html: '<div style="background:#E65100;border:3px solid white;border-radius:50%;width:18px;height:18px;box-shadow:0 2px 6px rgba(0,0,0,0.4);"></div>',
    iconSize: [18,18], iconAnchor: [9,9]
  });
  L.marker([SHOP_LAT, SHOP_LNG], {icon: shopIcon})
    .addTo(_leafletMap)
    .bindPopup('<strong>🏭 ' + (currentLang==='fr'?'Atelier':'Shop') + '</strong><br>Le Shackachaga');
  updateMap();
}

async function updateMap() {
  if (!_leafletMap || !sb) return;
  try {
    var res = await sb.from('user_locations').select('*').neq('status','offline');
    var members = res.data || [];
    // Remove old markers
    Object.values(_mapMarkers).forEach(function(m) { _leafletMap.removeLayer(m); });
    _mapMarkers = {};
    var bounds = [[SHOP_LAT, SHOP_LNG]];
    members.forEach(function(m) {
      if (!m.lat || !m.lng) return;
      var name  = (m.display_name || m.user_email || '?').split('@')[0];
      var color = getUserColor(m.user_email);
      var icon  = L.divIcon({
        className: '',
        html: '<div style="background:'+color+';border:3px solid white;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:10px;color:white;font-weight:700;box-shadow:0 2px 8px rgba(0,0,0,0.35);">'+name.charAt(0).toUpperCase()+'</div>',
        iconSize: [22,22], iconAnchor: [11,11]
      });
      var updated = m.updated_at ? new Date(m.updated_at).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}) : '—';
      var locLbl  = m.location_type === 'shop' ? '🏭 '+(currentLang==='fr'?'Atelier':'Shop') :
                    m.location_type === 'travel' ? '🚗 '+(currentLang==='fr'?'Déplacement':'Travel') :
                    '🏗️ '+(currentLang==='fr'?'Chantier':'On-site');
      var marker = L.marker([m.lat, m.lng], {icon: icon})
        .addTo(_leafletMap)
        .bindPopup('<strong>'+escapeHtml(name)+'</strong><br>'+locLbl+'<br>'+updated);
      _mapMarkers[m.user_email] = marker;
      bounds.push([m.lat, m.lng]);
    });
    if (bounds.length > 1) _leafletMap.fitBounds(bounds, {padding: [30,30], maxZoom: 15});
    // Update team list
    renderMapTeamList(members);
    // Update timestamp
    var upd = document.getElementById('map-last-update');
    if (upd) upd.textContent = (currentLang==='fr'?'Mis à jour: ':'Updated: ') + new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
  } catch(e) { console.error('updateMap:', e); }
}

function renderMapTeamList(members) {
  var el = document.getElementById('map-team-list');
  if (!el) return;
  if (!members || !members.length) {
    el.innerHTML = '<div class="empty-state"><p>'+(currentLang==='fr'?'Aucun membre en ligne':'No members online')+'</p></div>';
    return;
  }
  el.innerHTML = members.map(function(m) {
    var name  = (m.display_name || m.user_email || '?').split('@')[0];
    var color = getUserColor(m.user_email);
    var locLbl = m.location_type === 'shop'   ? '🏭 '+(currentLang==='fr'?'Atelier':'Shop') :
                 m.location_type === 'travel' ? '🚗 '+(currentLang==='fr'?'Déplacement':'Travel') :
                 m.location_type === 'onsite' ? '🏗️ '+(currentLang==='fr'?'Chantier':'On-site') :
                 '⬛ '+(currentLang==='fr'?'Hors ligne':'Offline');
    var updated = m.updated_at ? new Date(m.updated_at).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}) : '—';
    return '<div class="map-user-row">' +
      '<div style="width:36px;height:36px;border-radius:50%;background:'+color+';color:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.9rem;flex-shrink:0;">'+escapeHtml(name.charAt(0).toUpperCase())+'</div>'+
      '<div style="flex:1;min-width:0;">' +
        '<div style="font-weight:700;font-size:0.85rem;">'+escapeHtml(name)+'</div>'+
        '<div style="font-size:0.72rem;color:var(--wood-mid);">'+locLbl+'</div>'+
      '</div>'+
      '<div style="font-size:0.7rem;color:var(--wood-mid);">'+updated+'</div>'+
    '</div>';
  }).join('');
}

async function loadMapTimeSummary() {
  if (!sb) return;
  var el = document.getElementById('map-time-summary');
  if (!el) return;
  try {
    var today = new Date().toISOString().split('T')[0];
    var res   = await sb.from('time_logs').select('*').gte('clock_in', today+'T00:00:00Z');
    var logs  = res.data || [];
    if (!logs.length) {
      el.innerHTML = '<div style="color:var(--wood-mid);font-size:0.82rem;padding:8px 0;">'+(currentLang==='fr'?'Aucun pointage aujourd\'hui':'No clock-ins today')+'</div>';
      return;
    }
    // Group by user
    var byUser = {};
    logs.forEach(function(l) {
      var u = l.user_email || 'unknown';
      if (!byUser[u]) byUser[u] = {shop:0,travel:0,onsite:0};
      if (l.clock_out) {
        var mins = Math.round((new Date(l.clock_out) - new Date(l.clock_in)) / 60000);
        if (!isNaN(mins) && mins > 0) byUser[u][l.location_type||'shop'] += mins;
      }
    });
    var fmt = function(m) { return m >= 60 ? (m/60).toFixed(1)+'h' : m+'min'; };
    el.innerHTML = Object.keys(byUser).map(function(email) {
      var u    = byUser[email];
      var name = email.split('@')[0];
      var total = u.shop + u.travel + u.onsite;
      return '<div style="padding:8px 0;border-bottom:1px solid var(--wood-pale);last-child:border-none;">' +
        '<div style="font-weight:700;font-size:0.82rem;margin-bottom:4px;">👤 '+escapeHtml(name)+'</div>'+
        '<div style="display:flex;gap:12px;font-size:0.72rem;">' +
          '<span>🏭 '+fmt(u.shop)+'</span>' +
          '<span>🚗 '+fmt(u.travel)+'</span>' +
          '<span>🏗️ '+fmt(u.onsite)+'</span>' +
          '<span style="font-weight:700;">= '+fmt(total)+'</span>' +
        '</div>'+
      '</div>';
    }).join('');
  } catch(e) { el.innerHTML = '<p style="color:var(--wood-mid);">—</p>'; }
}

async function loadMapHistory() {
  if (!sb) return;
  var el     = document.getElementById('map-history-list');
  var filter = document.getElementById('map-user-filter')?.value || 'all';
  if (!el) return;
  try {
    var today = new Date().toISOString().split('T')[0];
    var query = sb.from('user_locations').select('*')
      .gte('updated_at', today+'T00:00:00Z')
      .order('updated_at', {ascending:false})
      .limit(100);
    if (filter !== 'all') query = query.eq('user_email', filter);
    var res  = await query;
    var rows = res.data || [];
    // Populate filter dropdown
    var sel = document.getElementById('map-user-filter');
    if (sel && sel.options.length <= 1) {
      var seen = new Set();
      rows.forEach(function(r) {
        if (r.user_email && !seen.has(r.user_email)) {
          seen.add(r.user_email);
          var opt = document.createElement('option');
          opt.value = r.user_email;
          opt.textContent = r.user_email.split('@')[0];
          sel.appendChild(opt);
        }
      });
    }
    if (!rows.length) {
      el.innerHTML = '<div class="empty-state"><p>'+(currentLang==='fr'?'Aucun historique GPS aujourd\'hui':'No GPS history today')+'</p></div>';
      return;
    }
    el.innerHTML = rows.map(function(r) {
      var name    = (r.user_email||'').split('@')[0];
      var color   = getUserColor(r.user_email);
      var timeStr = new Date(r.updated_at).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
      var locLbl  = r.location_type === 'shop'   ? '🏭 '+(currentLang==='fr'?'Atelier':'Shop') :
                    r.location_type === 'travel' ? '🚗 '+(currentLang==='fr'?'Déplacement':'Travel') :
                    r.location_type === 'onsite' ? '🏗️ '+(currentLang==='fr'?'Chantier':'On-site') :
                    '⬛ '+(currentLang==='fr'?'Hors ligne':'Offline');
      var coordStr = (r.lat && r.lng) ? r.lat.toFixed(4)+', '+r.lng.toFixed(4) : '—';
      return '<div class="map-user-row" style="cursor:'+(r.lat&&r.lng?'pointer':'default')+'" onclick="'+(r.lat&&r.lng?'if(_leafletMap){_leafletMap.setView(['+r.lat+','+r.lng+'],16);}':'')+'">' +
        '<div style="width:30px;height:30px;border-radius:50%;background:'+color+';color:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.78rem;flex-shrink:0;">'+escapeHtml(name.charAt(0).toUpperCase())+'</div>'+
        '<div style="flex:1;min-width:0;">' +
          '<div style="font-weight:600;font-size:0.8rem;">'+escapeHtml(name)+' · '+locLbl+'</div>'+
          '<div style="font-size:0.68rem;color:var(--wood-mid);">'+coordStr+'</div>'+
        '</div>'+
        '<div style="font-size:0.7rem;color:var(--wood-mid);flex-shrink:0;">'+timeStr+'</div>'+
      '</div>';
    }).join('');
  } catch(e) { el.innerHTML = '<p style="color:var(--wood-mid);">—</p>'; }
}

// ══════════════════════════════════════════════════════════════════
// VOICE MESSAGES — record audio, send via broadcast, play back
// ══════════════════════════════════════════════════════════════════

var _mediaRecorder  = null;
var _audioChunks    = [];
var _recordTimer    = null;
var _recordSecs     = 0;
var _isRecording    = false;
var _currentAudios  = {};

function toggleVoicePanel() {
  var wrap  = document.getElementById('voice-record-wrap');
  var input = document.getElementById('chat-input');
  if (!wrap) return;
  var visible = wrap.style.display !== 'none';
  wrap.style.display = visible ? 'none' : 'flex';
  if (input) input.style.display = visible ? '' : 'none';
  if (visible) cancelVoiceRecord();
}

async function toggleVoiceRecord() {
  if (_isRecording) stopVoiceRecord();
  else await startVoiceRecord();
}

async function startVoiceRecord() {
  if (!_micGranted) {
    var ok = await requestMicPermissionOnce();
    if (!ok) return;
  }
  try {
    var stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    _audioChunks = [];
    _recordSecs  = 0;
    var mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
      ? 'audio/webm;codecs=opus'
      : MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : '';
    var opts = mimeType ? { mimeType: mimeType, audioBitsPerSecond: 32000 } : { audioBitsPerSecond: 32000 };
    _mediaRecorder = new MediaRecorder(stream, opts);
    _mediaRecorder.ondataavailable = function(e) { if (e.data.size > 0) _audioChunks.push(e.data); };
    _mediaRecorder.onstop = function() {
      stream.getTracks().forEach(function(t) { t.stop(); });
      sendVoiceMessage();
    };
    _mediaRecorder.start(250);
    _isRecording = true;
    var btn = document.getElementById('voice-record-btn');
    if (btn) { btn.textContent = '⏹'; btn.classList.add('recording'); }
    var hint = document.getElementById('voice-record-hint');
    if (hint) hint.textContent = currentLang === 'fr' ? '🔴 Enregistrement...' : '🔴 Recording...';
    if (_recordTimer) clearInterval(_recordTimer);
    _recordTimer = setInterval(function() {
      _recordSecs++;
      var t = document.getElementById('voice-timer');
      if (t) t.textContent = Math.floor(_recordSecs/60) + ':' + ('0'+(_recordSecs%60)).slice(-2);
      if (_recordSecs >= 120) stopVoiceRecord();
    }, 1000);
  } catch(e) {
    toast('🎤 ' + (currentLang==='fr' ? 'Microphone refusé' : 'Mic denied'));
  }
}

function stopVoiceRecord() {
  if (!_isRecording || !_mediaRecorder) return;
  _isRecording = false;
  clearInterval(_recordTimer);
  _mediaRecorder.stop();
  var btn = document.getElementById('voice-record-btn');
  if (btn) { btn.textContent = '🎤'; btn.classList.remove('recording'); }
  var t = document.getElementById('voice-timer');
  if (t) t.textContent = '0:00';
  var hint = document.getElementById('voice-record-hint');
  if (hint) hint.textContent = currentLang==='fr' ? 'Envoi...' : 'Sending...';
}

function cancelVoiceRecord() {
  if (_isRecording && _mediaRecorder) {
    _isRecording = false;
    clearInterval(_recordTimer);
    try { _mediaRecorder.stream?.getTracks().forEach(function(t){ t.stop(); }); } catch(e){}
    _mediaRecorder = null;
  }
  _audioChunks = [];
  _recordSecs  = 0;
  var btn = document.getElementById('voice-record-btn');
  if (btn) { btn.textContent = '🎤'; btn.classList.remove('recording'); }
  var t = document.getElementById('voice-timer');
  if (t) t.textContent = '0:00';
  var wrap = document.getElementById('voice-record-wrap');
  if (wrap) wrap.style.display = 'none';
  var input = document.getElementById('chat-input');
  if (input) input.style.display = '';
  var hint = document.getElementById('voice-record-hint');
  if (hint) hint.textContent = currentLang==='fr' ? 'Tenir pour enregistrer' : 'Tap to record';
}

async function sendVoiceMessage() {
  if (!_audioChunks.length || !currentUserEmail) return;
  var mimeType = _audioChunks[0].type || 'audio/webm';
  var blob = new Blob(_audioChunks, { type: mimeType });
  var durationSecs = _recordSecs;
  var reader = new FileReader();
  reader.onloadend = async function() {
    var base64 = reader.result;
    var msg = {
      sender_email:    currentUserEmail,
      sender_name:     currentUserName || currentUserEmail.split('@')[0],
      content:         '__VOICE__',
      room:            'team',
      voice_data:      base64,
      voice_duration:  durationSecs,
      created_at:      new Date().toISOString()
    };
    appendVoiceMessage(msg, true);
    if (window.chatSubscription && chatSubscription.send) {
      chatSubscription.send({ type:'broadcast', event:'chat_msg', payload: msg });
    }
    cancelVoiceRecord();
    toast('🎙️ ' + (currentLang==='fr' ? 'Message vocal envoyé!' : 'Voice message sent!'));
  };
  reader.readAsDataURL(blob);
}

function appendVoiceMessage(m, isMine) {
  var el = document.getElementById('chat-messages');
  if (!el) return;
  var empty = el.querySelector('.empty-state');
  if (empty) empty.remove();
  var msgId = 'vm' + Date.now() + Math.floor(Math.random()*9999);
  var name  = m.sender_name || (m.sender_email||'').split('@')[0];
  var timeStr = new Date(m.created_at||Date.now()).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
  var dur = m.voice_duration || 0;
  var durStr = Math.floor(dur/60)+':'+('0'+(dur%60)).slice(-2);
  var div = document.createElement('div');
  div.className = 'chat-msg ' + (isMine ? 'mine' : 'theirs');
  div.id = msgId;
  if (m.voice_data) div.dataset.audioSrc = m.voice_data;
  div.innerHTML =
    (isMine ? '' : '<div class="chat-msg-name">'+escapeHtml(name)+'</div>') +
    '<div class="voice-msg-wrap">' +
      '<button class="voice-play-btn" id="pbtn-'+msgId+'">&#9654;</button>' +
      '<div class="voice-waveform" id="wf-'+msgId+'">' +
        '<div class="voice-progress" id="vprog-'+msgId+'"></div>' +
      '</div>' +
      '<span class="voice-duration" id="vdur-'+msgId+'">'+durStr+'</span>' +
    '</div>' +
    '<div class="chat-msg-time">&#127897; '+timeStr+'</div>';
  el.appendChild(div);
  el.scrollTop = el.scrollHeight;
  var pb = document.getElementById('pbtn-'+msgId);
  var wf = document.getElementById('wf-'+msgId);
  if (pb) pb.onclick = function(){ playVoiceMsg(msgId); };
  if (wf) wf.onclick = function(){ playVoiceMsg(msgId); };
}

function playVoiceMsg(msgId) {
  var div = document.getElementById(msgId);
  if (!div || !div.dataset.audioSrc) {
    toast(currentLang==='fr' ? '⚠️ Audio non disponible' : '⚠️ Audio not available');
    return;
  }
  Object.keys(_currentAudios).forEach(function(id) {
    if (id !== msgId && _currentAudios[id]) {
      _currentAudios[id].pause();
      var pb = document.getElementById('pbtn-'+id);
      if (pb) { pb.textContent = '▶'; pb.classList.remove('playing'); }
    }
  });
  var audio = _currentAudios[msgId];
  if (!audio) {
    audio = new Audio(div.dataset.audioSrc);
    _currentAudios[msgId] = audio;
    audio.ontimeupdate = function() {
      var pct  = audio.duration ? (audio.currentTime/audio.duration*100) : 0;
      var prog = document.getElementById('vprog-'+msgId);
      if (prog) prog.style.width = pct + '%';
      var dur  = document.getElementById('vdur-'+msgId);
      var rem  = audio.duration - audio.currentTime;
      if (dur && !isNaN(rem)) dur.textContent = Math.floor(rem/60)+':'+('0'+Math.floor(rem%60)).slice(-2);
    };
    audio.onended = function() {
      var pb = document.getElementById('pbtn-'+msgId);
      if (pb) { pb.textContent = '▶'; pb.classList.remove('playing'); }
      var prog = document.getElementById('vprog-'+msgId);
      if (prog) prog.style.width = '0%';
    };
  }
  var pb = document.getElementById('pbtn-'+msgId);
  if (audio.paused) {
    audio.play().catch(function(){});
    if (pb) { pb.textContent = '⏸'; pb.classList.add('playing'); }
  } else {
    audio.pause();
    if (pb) { pb.textContent = '▶'; pb.classList.remove('playing'); }
  }
}
