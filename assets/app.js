(function() {
  'use strict';

  // ==================== 多语言翻译系统 ====================
  const I18N = {
    zh: {
      logo: '梦境共时性', logoSub: '集体潜意识预测系统',
      navHome: '首页', navUpload: '记录梦境', navExplore: '探索梦境', navAnalytics: '历史图表',
      guestMode: '游客模式', login: '登录', register: '注册', logout: '退出',
      heroTitle: '通过梦境，窥见世界的未来',
      heroDesc: '基于荣格共时性原理与集体潜意识理论，分析全球梦境关键词，探索人类潜意识的共同模式。',
      heroQuote: '"潜意识是通往未来的桥梁，梦境是共时性的语言。" —— 卡尔·荣格',
      heroBtn: '开始记录你的梦境',
      statDreams: '记录梦境', statKeywords: '提取关键词', statRegions: '覆盖地区', statToday: '今日新增',
      cloudTitle: '全球梦境关键词云图', cloudSubtitle: '实时展示所有地区梦境中的高频关键词',
      regionTitle: '热门地区', regionSubtitle: '梦境记录最活跃的地区',
      recentTitle: '最新梦境', recentSubtitle: '最近记录的梦境文本',
      uploadTitle: '记录你的梦境', uploadSubtitle: '分享你的梦境，成为集体潜意识的一部分',
      dreamDesc: '梦境描述 *', dreamDescPlaceholder: '请详细描述你的梦境内容...',
      country: '国家 *', selectCountry: '请选择国家',
      province: '省份/州 *', selectCountryFirst: '请先选择国家',
      dreamDate: '梦境日期', anonymous: '匿名上传（不显示用户名）',
      displayName: '显示用户名', displayNamePlaceholder: '输入要显示的用户名',
      submitDream: '提交梦境',
      exploreTitle: '探索梦境', exploreSubtitle: '搜索关键词或浏览所有用户的梦境记录',
      searchPlaceholder: '搜索关键词、用户名或梦境内容...',
      search: '搜索', clear: '清除',
      analyticsTitle: '历史梦境分析', analyticsSubtitle: '时间趋势与关键词热度变化',
      tabTimeline: '时间趋势', tabKeywords: '关键词热度', tabHeatmap: '地区热力图',
      loginTitle: '用户登录', registerTitle: '注册账号', username: '用户名', password: '密码',
      footerQuote: '"除非你让无意识成为意识，否则它将主导你的生活，而你却称之为命运。"',
      footerText: '梦境共时性系统 · 基于荣格心理学理论',
      allCountries: '所有国家', allProvinces: '所有省份',
      toastLoginSuccess: '登录成功', toastLoginFail: '用户名或密码错误',
      toastRegisterSuccess: '注册成功', toastRegisterFail: '用户名已存在',
      toastLogout: '已退出登录', toastDreamSuccess: '梦境记录成功', toastDreamFail: '请填写完整信息',
      emptyDreams: '暂无梦境记录', emptySearch: '没有找到匹配的梦境',
      userPrefix: '用户: ', anonymousAuthor: '匿名',
      noData: '无数据', dreamCount: '条梦境'
    },
    en: {
      logo: 'Dream Synchronicity', logoSub: 'Collective Unconscious Prediction System',
      navHome: 'Home', navUpload: 'Record Dream', navExplore: 'Explore', navAnalytics: 'Analytics',
      guestMode: 'Guest Mode', login: 'Login', register: 'Register', logout: 'Logout',
      heroTitle: 'See the Future Through Dreams',
      heroDesc: 'Based on Jung\'s synchronicity principle and collective unconscious theory, analyzing global dream keywords to explore shared patterns in the human psyche.',
      heroQuote: '"The unconscious is the bridge to the future; dreams are the language of synchronicity." — Carl Jung',
      heroBtn: 'Start Recording Your Dreams',
      statDreams: 'Dreams Recorded', statKeywords: 'Keywords Extracted', statRegions: 'Regions Covered', statToday: 'Added Today',
      cloudTitle: 'Global Dream Keyword Cloud', cloudSubtitle: 'Real-time display of high-frequency keywords from dreams across all regions',
      regionTitle: 'Top Regions', regionSubtitle: 'Most active regions in dream recording',
      recentTitle: 'Recent Dreams', recentSubtitle: 'Recently recorded dream texts',
      uploadTitle: 'Record Your Dream', uploadSubtitle: 'Share your dream and become part of the collective unconscious',
      dreamDesc: 'Dream Description *', dreamDescPlaceholder: 'Describe your dream in detail...',
      country: 'Country *', selectCountry: 'Select a country',
      province: 'Province/State *', selectCountryFirst: 'Select a country first',
      dreamDate: 'Dream Date', anonymous: 'Upload anonymously (hide username)',
      displayName: 'Display Name', displayNamePlaceholder: 'Enter display name',
      submitDream: 'Submit Dream',
      exploreTitle: 'Explore Dreams', exploreSubtitle: 'Search keywords or browse all user dream records',
      searchPlaceholder: 'Search keywords, username or dream content...',
      search: 'Search', clear: 'Clear',
      analyticsTitle: 'Historical Dream Analysis', analyticsSubtitle: 'Time trends and keyword popularity changes',
      tabTimeline: 'Timeline', tabKeywords: 'Keyword Trends', tabHeatmap: 'Region Heatmap',
      loginTitle: 'User Login', registerTitle: 'Create Account', username: 'Username', password: 'Password',
      footerQuote: '"Until you make the unconscious conscious, it will direct your life and you will call it fate."',
      footerText: 'Dream Synchronicity System · Based on Jungian Psychology',
      allCountries: 'All Countries', allProvinces: 'All Provinces',
      toastLoginSuccess: 'Login successful', toastLoginFail: 'Invalid username or password',
      toastRegisterSuccess: 'Registration successful', toastRegisterFail: 'Username already exists',
      toastLogout: 'Logged out', toastDreamSuccess: 'Dream recorded successfully', toastDreamFail: 'Please fill in all required fields',
      emptyDreams: 'No dreams recorded yet', emptySearch: 'No matching dreams found',
      userPrefix: 'User: ', anonymousAuthor: 'Anonymous',
      noData: 'No data', dreamCount: 'dreams'
    },
    ja: {
      logo: '夢の共時性', logoSub: '集合的無意識予測システム',
      navHome: 'ホーム', navUpload: '夢を記録', navExplore: '探索', navAnalytics: '分析',
      guestMode: 'ゲストモード', login: 'ログイン', register: '登録', logout: 'ログアウト',
      heroTitle: '夢を通じて世界の未来を覗く',
      heroDesc: 'ユングの共時性原理と集合的無意識理論に基づき、世界中の夢のキーワードを分析し、人類の無意識の共通パターンを探求します。',
      heroQuote: '"無意識は未来への架け橋であり、夢は共時性の言語である。" — カール・ユング',
      heroBtn: '夢の記録を始める',
      statDreams: '記録された夢', statKeywords: '抽出キーワード', statRegions: '対象地域', statToday: '本日の新規',
      cloudTitle: 'グローバル夢キーワードクラウド', cloudSubtitle: '全地域の夢から高頻度キーワードをリアルタイム表示',
      regionTitle: '人気地域', regionSubtitle: '夢の記録が最も活発な地域',
      recentTitle: '最新の夢', recentSubtitle: '最近記録された夢のテキスト',
      uploadTitle: 'あなたの夢を記録', uploadSubtitle: '夢を共有し、集合的無意識の一部になりましょう',
      dreamDesc: '夢の説明 *', dreamDescPlaceholder: '夢の内容を詳しく記述してください...',
      country: '国 *', selectCountry: '国を選択',
      province: '都道府県/州 *', selectCountryFirst: '先に国を選択してください',
      dreamDate: '夢の日付', anonymous: '匿名でアップロード（ユーザー名を非表示）',
      displayName: '表示名', displayNamePlaceholder: '表示名を入力',
      submitDream: '夢を送信',
      exploreTitle: '夢を探索', exploreSubtitle: 'キーワードを検索または全ユーザーの夢を閲覧',
      searchPlaceholder: 'キーワード、ユーザー名、夢の内容を検索...',
      search: '検索', clear: 'クリア',
      analyticsTitle: '夢の履歴分析', analyticsSubtitle: '時間的傾向とキーワード人気の変化',
      tabTimeline: 'タイムライン', tabKeywords: 'キーワードトレンド', tabHeatmap: '地域ヒートマップ',
      loginTitle: 'ログイン', registerTitle: 'アカウント作成', username: 'ユーザー名', password: 'パスワード',
      footerQuote: '"無意識を意識にするまで、それはあなたの人生を導き、あなたはそれを運命と呼ぶだろう。"',
      footerText: '夢の共時性システム · ユング心理学に基づく',
      allCountries: 'すべての国', allProvinces: 'すべての都道府県',
      toastLoginSuccess: 'ログイン成功', toastLoginFail: 'ユーザー名またはパスワードが間違っています',
      toastRegisterSuccess: '登録成功', toastRegisterFail: 'ユーザー名は既に存在します',
      toastLogout: 'ログアウトしました', toastDreamSuccess: '夢を記録しました', toastDreamFail: '必須項目を入力してください',
      emptyDreams: 'まだ夢が記録されていません', emptySearch: '一致する夢が見つかりません',
      userPrefix: 'ユーザー: ', anonymousAuthor: '匿名',
      noData: 'データなし', dreamCount: '件の夢'
    },
    ko: {
      logo: '꿈의 동시성', logoSub: '집단 무의식 예측 시스템',
      navHome: '홈', navUpload: '꿈 기록', navExplore: '탐색', navAnalytics: '분석',
      guestMode: '게스트 모드', login: '로그인', register: '회원가입', logout: '로그아웃',
      heroTitle: '꿈을 통해 세상의 미래를 엿보다',
      heroDesc: '융의 동시성 원리와 집단 무의식 이론에 기반하여 전 세계 꿈 키워드를 분석하고 인류 무의식의 공통 패턴을 탐구합니다.',
      heroQuote: '"무의식은 미래로 가는 다리이며, 꿈은 동시성의 언어이다." — 칼 융',
      heroBtn: '꿈 기록 시작하기',
      statDreams: '기록된 꿈', statKeywords: '추출된 키워드', statRegions: '대상 지역', statToday: '오늘新增',
      cloudTitle: '글로벌 꿈 키워드 클라우드', cloudSubtitle: '전 지역 꿈의 고빈도 키워드 실시간 표시',
      regionTitle: '인기 지역', regionSubtitle: '꿈 기록이 가장 활발한 지역',
      recentTitle: '최신 꿈', recentSubtitle: '최근 기록된 꿈 텍스트',
      uploadTitle: '꿈 기록하기', uploadSubtitle: '꿈을 공유하고 집단 무의식의 일부가 되세요',
      dreamDesc: '꿈 설명 *', dreamDescPlaceholder: '꿈의 내용을 자세히 설명해주세요...',
      country: '국가 *', selectCountry: '국가 선택',
      province: '도/주 *', selectCountryFirst: '먼저 국가를 선택하세요',
      dreamDate: '꿈 날짜', anonymous: '익명 업로드 (사용자 이름 숨김)',
      displayName: '표시 이름', displayNamePlaceholder: '표시할 이름 입력',
      submitDream: '꿈 제출',
      exploreTitle: '꿈 탐색', exploreSubtitle: '키워드 검색 또는 모든 사용자 꿈 기록 탐색',
      searchPlaceholder: '키워드, 사용자 이름 또는 꿈 내용 검색...',
      search: '검색', clear: '지우기',
      analyticsTitle: '꿈 기록 분석', analyticsSubtitle: '시간 추세 및 키워드 인기 변화',
      tabTimeline: '타임라인', tabKeywords: '키워드 트렌드', tabHeatmap: '지역 히트맵',
      loginTitle: '로그인', registerTitle: '계정 만들기', username: '사용자 이름', password: '비밀번호',
      footerQuote: '"무의식을 의식으로 만들지 않으면, 그것이 당신의 삶을 지배할 것이며, 당신은 그것을 운명이라 부를 것이다."',
      footerText: '꿈의 동시성 시스템 · 융 심리학 기반',
      allCountries: '모든 국가', allProvinces: '모든 도/주',
      toastLoginSuccess: '로그인 성공', toastLoginFail: '사용자 이름 또는 비밀번호가 잘못되었습니다',
      toastRegisterSuccess: '회원가입 성공', toastRegisterFail: '사용자 이름이 이미 존재합니다',
      toastLogout: '로그아웃되었습니다', toastDreamSuccess: '꿈이 성공적으로 기록되었습니다', toastDreamFail: '필수 항목을 입력해주세요',
      emptyDreams: '아직 기록된 꿈이 없습니다', emptySearch: '일치하는 꿈을 찾을 수 없습니다',
      userPrefix: '사용자: ', anonymousAuthor: '익명',
      noData: '데이터 없음', dreamCount: '개의 꿈'
    },
    fr: {
      logo: 'Synchronicité des Rêves', logoSub: 'Système de Prédiction de l\'Inconscient Collectif',
      navHome: 'Accueil', navUpload: 'Enregistrer', navExplore: 'Explorer', navAnalytics: 'Analyses',
      guestMode: 'Mode Invité', login: 'Connexion', register: 'Inscription', logout: 'Déconnexion',
      heroTitle: 'Voir l\'Avenir à Travers les Rêves',
      heroDesc: 'Basé sur le principe de synchronicité de Jung et la théorie de l\'inconscient collectif, analyser les mots-clés des rêves du monde entier pour explorer les schémas communs de la psyché humaine.',
      heroQuote: '"L\'inconscient est le pont vers l\'avenir ; les rêves sont le langage de la synchronicité." — Carl Jung',
      heroBtn: 'Commencer à Enregistrer vos Rêves',
      statDreams: 'Rêves Enregistrés', statKeywords: 'Mots-clés Extraits', statRegions: 'Régions Couvertes', statToday: 'Ajoutés Aujourd\'hui',
      cloudTitle: 'Nuage de Mots-clés des Rêves', cloudSubtitle: 'Affichage en temps réel des mots-clés fréquents dans les rêves',
      regionTitle: 'Régions Populaires', regionSubtitle: 'Les régions les plus actives en enregistrement de rêves',
      recentTitle: 'Rêves Récents', recentSubtitle: 'Textes de rêves récemment enregistrés',
      uploadTitle: 'Enregistrer Votre Rêve', uploadSubtitle: 'Partagez votre rêve et devenez partie de l\'inconscient collectif',
      dreamDesc: 'Description du Rêve *', dreamDescPlaceholder: 'Décrivez votre rêve en détail...',
      country: 'Pays *', selectCountry: 'Sélectionner un pays',
      province: 'Province/État *', selectCountryFirst: 'Sélectionnez d\'abord un pays',
      dreamDate: 'Date du Rêve', anonymous: 'Télécharger anonymement (masquer le nom)',
      displayName: 'Nom Affiché', displayNamePlaceholder: 'Entrez le nom à afficher',
      submitDream: 'Soumettre le Rêve',
      exploreTitle: 'Explorer les Rêves', exploreSubtitle: 'Rechercher des mots-clés ou parcourir tous les rêves',
      searchPlaceholder: 'Rechercher mots-clés, nom d\'utilisateur ou contenu...',
      search: 'Rechercher', clear: 'Effacer',
      analyticsTitle: 'Analyse Historique des Rêves', analyticsSubtitle: 'Tendances temporelles et popularité des mots-clés',
      tabTimeline: 'Chronologie', tabKeywords: 'Tendances des Mots-clés', tabHeatmap: 'Carte de Chaleur',
      loginTitle: 'Connexion', registerTitle: 'Créer un Compte', username: 'Nom d\'utilisateur', password: 'Mot de passe',
      footerQuote: '"Tant que vous n\'aurez pas rendu l\'inconscient conscient, il dirigera votre vie et vous l\'appelerez le destin."',
      footerText: 'Système de Synchronicité des Rêves · Basé sur la Psychologie Jungienne',
      allCountries: 'Tous les Pays', allProvinces: 'Toutes les Provinces',
      toastLoginSuccess: 'Connexion réussie', toastLoginFail: 'Nom d\'utilisateur ou mot de passe incorrect',
      toastRegisterSuccess: 'Inscription réussie', toastRegisterFail: 'Nom d\'utilisateur déjà existant',
      toastLogout: 'Déconnecté', toastDreamSuccess: 'Rêve enregistré avec succès', toastDreamFail: 'Veuillez remplir tous les champs obligatoires',
      emptyDreams: 'Aucun rêve enregistré', emptySearch: 'Aucun rêve correspondant trouvé',
      userPrefix: 'Utilisateur: ', anonymousAuthor: 'Anonyme',
      noData: 'Aucune donnée', dreamCount: 'rêves'
    },
    de: {
      logo: 'Traum-Synchronizität', logoSub: 'Kollektives Unbewusstes Vorhersagesystem',
      navHome: 'Startseite', navUpload: 'Traum Aufzeichnen', navExplore: 'Erkunden', navAnalytics: 'Analysen',
      guestMode: 'Gastmodus', login: 'Anmelden', register: 'Registrieren', logout: 'Abmelden',
      heroTitle: 'Die Zukunft Durch Träume Erkennen',
      heroDesc: 'Basierend auf Jungs Synchronizitätsprinzip und der Theorie des kollektiven Unbewussten, Analyse globaler Traum-Schlüsselwörter zur Erkundung gemeinsamer Muster.',
      heroQuote: '"Das Unbewusste ist die Brücke zur Zukunft; Träume sind die Sprache der Synchronizität." — Carl Jung',
      heroBtn: 'Beginnen Sie Ihre Träume Aufzuzeichnen',
      statDreams: 'Aufgezeichnete Träume', statKeywords: 'Extrahierte Schlüsselwörter', statRegions: 'Abgedeckte Regionen', statToday: 'Heute Hinzugefügt',
      cloudTitle: 'Globale Traum-Schlüsselwortwolke', cloudSubtitle: 'Echtzeit-Anzeige häufiger Schlüsselwörter aus Träumen',
      regionTitle: 'Beliebte Regionen', regionSubtitle: 'Aktivste Regionen bei der Traumaufzeichnung',
      recentTitle: 'Aktuelle Träume', recentSubtitle: 'Kürzlich aufgezeichnete Traumtexte',
      uploadTitle: 'Ihren Traum Aufzeichnen', uploadSubtitle: 'Teilen Sie Ihren Traum und werden Sie Teil des kollektiven Unbewussten',
      dreamDesc: 'Traumbeschreibung *', dreamDescPlaceholder: 'Beschreiben Sie Ihren Traum im Detail...',
      country: 'Land *', selectCountry: 'Land auswählen',
      province: 'Bundesland/Provinz *', selectCountryFirst: 'Zuerst ein Land auswählen',
      dreamDate: 'Traumdatum', anonymous: 'Anonym hochladen (Benutzername ausblenden)',
      displayName: 'Anzeigename', displayNamePlaceholder: 'Anzeigename eingeben',
      submitDream: 'Traum Einreichen',
      exploreTitle: 'Träume Erkunden', exploreSubtitle: 'Schlüsselwörter suchen oder alle Traumaufzeichnungen durchsuchen',
      searchPlaceholder: 'Schlüsselwörter, Benutzername oder Trauminhalt suchen...',
      search: 'Suchen', clear: 'Löschen',
      analyticsTitle: 'Historische Traumanalyse', analyticsSubtitle: 'Zeittrends und Schlüsselwortpopularität',
      tabTimeline: 'Zeitlinie', tabKeywords: 'Schlüsselworttrends', tabHeatmap: 'Regionen-Heatmap',
      loginTitle: 'Benutzer-Anmeldung', registerTitle: 'Konto Erstellen', username: 'Benutzername', password: 'Passwort',
      footerQuote: '"Solange Sie das Unbewusste nicht bewusst machen, wird es Ihr Leben lenken, und Sie werden es Schicksal nennen."',
      footerText: 'Traum-Synchronizitätssystem · Basierend auf Jungscher Psychologie',
      allCountries: 'Alle Länder', allProvinces: 'Alle Provinzen',
      toastLoginSuccess: 'Anmeldung erfolgreich', toastLoginFail: 'Benutzername oder Passwort falsch',
      toastRegisterSuccess: 'Registrierung erfolgreich', toastRegisterFail: 'Benutzername existiert bereits',
      toastLogout: 'Abgemeldet', toastDreamSuccess: 'Traum erfolgreich aufgezeichnet', toastDreamFail: 'Bitte füllen Sie alle Pflichtfelder aus',
      emptyDreams: 'Noch keine Träume aufgezeichnet', emptySearch: 'Keine übereinstimmenden Träume gefunden',
      userPrefix: 'Benutzer: ', anonymousAuthor: 'Anonym',
      noData: 'Keine Daten', dreamCount: 'Träume'
    },
    es: {
      logo: 'Sincronicidad de los Sueños', logoSub: 'Sistema de Predicción del Inconsciente Colectivo',
      navHome: 'Inicio', navUpload: 'Registrar Sueño', navExplore: 'Explorar', navAnalytics: 'Análisis',
      guestMode: 'Modo Invitado', login: 'Iniciar Sesión', register: 'Registrarse', logout: 'Cerrar Sesión',
      heroTitle: 'Ver el Futuro a Través de los Sueños',
      heroDesc: 'Basado en el principio de sincronicidad de Jung y la teoría del inconsciente colectivo, analizando palabras clave de sueños globales.',
      heroQuote: '"El inconsciente es el puente hacia el futuro; los sueños son el lenguaje de la sincronicidad." — Carl Jung',
      heroBtn: 'Comenzar a Registrar tus Sueños',
      statDreams: 'Sueños Registrados', statKeywords: 'Palabras Clave', statRegions: 'Regiones', statToday: 'Hoy',
      cloudTitle: 'Nube de Palabras Clave', cloudSubtitle: 'Palabras clave más frecuentes en sueños globales',
      regionTitle: 'Regiones Populares', regionSubtitle: 'Regiones más activas en registro de sueños',
      recentTitle: 'Sueños Recientes', recentSubtitle: 'Textos de sueños recientemente registrados',
      uploadTitle: 'Registrar tu Sueño', uploadSubtitle: 'Comparte tu sueño y sé parte del inconsciente colectivo',
      dreamDesc: 'Descripción del Sueño *', dreamDescPlaceholder: 'Describe tu sueño en detalle...',
      country: 'País *', selectCountry: 'Seleccionar país',
      province: 'Provincia/Estado *', selectCountryFirst: 'Selecciona un país primero',
      dreamDate: 'Fecha del Sueño', anonymous: 'Subir anónimamente (ocultar nombre)',
      displayName: 'Nombre a Mostrar', displayNamePlaceholder: 'Ingresa el nombre a mostrar',
      submitDream: 'Enviar Sueño',
      exploreTitle: 'Explorar Sueños', exploreSubtitle: 'Buscar palabras clave o explorar todos los sueños',
      searchPlaceholder: 'Buscar palabras clave, usuario o contenido...',
      search: 'Buscar', clear: 'Limpiar',
      analyticsTitle: 'Análisis Histórico', analyticsSubtitle: 'Tendencias temporales y popularidad de palabras clave',
      tabTimeline: 'Línea Temporal', tabKeywords: 'Tendencias', tabHeatmap: 'Mapa de Calor',
      loginTitle: 'Iniciar Sesión', registerTitle: 'Crear Cuenta', username: 'Usuario', password: 'Contraseña',
      footerQuote: '"Hasta que no hagas consciente lo inconsciente, este dirigirá tu vida y lo llamarás destino."',
      footerText: 'Sistema de Sincronicidad de Sueños · Basado en Psicología Junguiana',
      allCountries: 'Todos los Países', allProvinces: 'Todas las Provincias',
      toastLoginSuccess: 'Sesión iniciada', toastLoginFail: 'Usuario o contraseña incorrectos',
      toastRegisterSuccess: 'Registro exitoso', toastRegisterFail: 'El usuario ya existe',
      toastLogout: 'Sesión cerrada', toastDreamSuccess: 'Sueño registrado', toastDreamFail: 'Completa todos los campos',
      emptyDreams: 'Sin sueños registrados', emptySearch: 'No se encontraron sueños',
      userPrefix: 'Usuario: ', anonymousAuthor: 'Anónimo',
      noData: 'Sin datos', dreamCount: 'sueños'
    },
    pt: {
      logo: 'Sincronicidade dos Sonhos', logoSub: 'Sistema de Predição do Inconsciente Coletivo',
      navHome: 'Início', navUpload: 'Registrar Sonho', navExplore: 'Explorar', navAnalytics: 'Análises',
      guestMode: 'Modo Convidado', login: 'Entrar', register: 'Registrar', logout: 'Sair',
      heroTitle: 'Ver o Futuro Através dos Sonhos',
      heroDesc: 'Baseado no princípio de sincronicidade de Jung e na teoria do inconsciente coletivo, analisando palavras-chave de sonhos globais.',
      heroQuote: '"O inconsciente é a ponte para o futuro; os sonhos são a linguagem da sincronicidade." — Carl Jung',
      heroBtn: 'Começar a Registrar seus Sonhos',
      statDreams: 'Sonhos Registrados', statKeywords: 'Palavras-chave', statRegions: 'Regiões', statToday: 'Hoje',
      cloudTitle: 'Nuvem de Palavras-chave', cloudSubtitle: 'Palavras-chave mais frequentes nos sonhos',
      regionTitle: 'Regiões Populares', regionSubtitle: 'Regiões mais ativas em registro de sonhos',
      recentTitle: 'Sonhos Recentes', recentSubtitle: 'Textos de sonhos recentemente registrados',
      uploadTitle: 'Registrar seu Sonho', uploadSubtitle: 'Compartilhe seu sonho e seja parte do inconsciente coletivo',
      dreamDesc: 'Descrição do Sonho *', dreamDescPlaceholder: 'Descreva seu sonho em detalhes...',
      country: 'País *', selectCountry: 'Selecionar país',
      province: 'Estado/Província *', selectCountryFirst: 'Selecione um país primeiro',
      dreamDate: 'Data do Sonho', anonymous: 'Enviar anonimamente (ocultar nome)',
      displayName: 'Nome de Exibição', displayNamePlaceholder: 'Digite o nome de exibição',
      submitDream: 'Enviar Sonho',
      exploreTitle: 'Explorar Sonhos', exploreSubtitle: 'Buscar palavras-chave ou explorar todos os sonhos',
      searchPlaceholder: 'Buscar palavras-chave, usuário ou conteúdo...',
      search: 'Buscar', clear: 'Limpar',
      analyticsTitle: 'Análise Histórica', analyticsSubtitle: 'Tendências temporais e popularidade de palavras-chave',
      tabTimeline: 'Linha do Tempo', tabKeywords: 'Tendências', tabHeatmap: 'Mapa de Calor',
      loginTitle: 'Entrar', registerTitle: 'Criar Conta', username: 'Usuário', password: 'Senha',
      footerQuote: '"Até que você torne o inconsciente consciente, ele dirigirá sua vida e você o chamará de destino."',
      footerText: 'Sistema de Sincronicidade dos Sonhos · Baseado na Psicologia Junguiana',
      allCountries: 'Todos os Países', allProvinces: 'Todos os Estados',
      toastLoginSuccess: 'Login realizado', toastLoginFail: 'Usuário ou senha incorretos',
      toastRegisterSuccess: 'Registro realizado', toastRegisterFail: 'Usuário já existe',
      toastLogout: 'Desconectado', toastDreamSuccess: 'Sonho registrado', toastDreamFail: 'Preencha todos os campos',
      emptyDreams: 'Nenhum sonho registrado', emptySearch: 'Nenhum sonho encontrado',
      userPrefix: 'Usuário: ', anonymousAuthor: 'Anônimo',
      noData: 'Sem dados', dreamCount: 'sonhos'
    },
    ru: {
      logo: 'Синхроничность Снов', logoSub: 'Система Прогнозирования Коллективного Бессознательного',
      navHome: 'Главная', navUpload: 'Записать Сон', navExplore: 'Исследовать', navAnalytics: 'Аналитика',
      guestMode: 'Гостевой Режим', login: 'Войти', register: 'Регистрация', logout: 'Выйти',
      heroTitle: 'Увидеть Будущее Через Сны',
      heroDesc: 'Основано на принципе синхроничности Юнга и теории коллективного бессознательного, анализируя ключевые слова снов со всего мира.',
      heroQuote: '"Бессознательное — это мост в будущее; сны — это язык синхроничности." — Карл Юнг',
      heroBtn: 'Начать Запись Снов',
      statDreams: 'Снов Записано', statKeywords: 'Ключевых Слов', statRegions: 'Регионов', statToday: 'Сегодня',
      cloudTitle: 'Облако Ключевых Слов', cloudSubtitle: 'Наиболее частые ключевые слова в снах',
      regionTitle: 'Популярные Регионы', regionSubtitle: 'Самые активные регионы в записи снов',
      recentTitle: 'Последние Сны', recentSubtitle: 'Недавно записанные тексты снов',
      uploadTitle: 'Записать Свой Сон', uploadSubtitle: 'Поделитесь своим сном и станьте частью коллективного бессознательного',
      dreamDesc: 'Описание Сна *', dreamDescPlaceholder: 'Опишите ваш сон подробно...',
      country: 'Страна *', selectCountry: 'Выберите страну',
      province: 'Регион/Область *', selectCountryFirst: 'Сначала выберите страну',
      dreamDate: 'Дата Сна', anonymous: 'Загрузить анонимно (скрыть имя)',
      displayName: 'Отображаемое Имя', displayNamePlaceholder: 'Введите отображаемое имя',
      submitDream: 'Отправить Сон',
      exploreTitle: 'Исследовать Сны', exploreSubtitle: 'Поиск ключевых слов или просмотр всех снов',
      searchPlaceholder: 'Поиск ключевых слов, имени пользователя или содержания...',
      search: 'Поиск', clear: 'Очистить',
      analyticsTitle: 'Исторический Анализ', analyticsSubtitle: 'Временные тренды и популярность ключевых слов',
      tabTimeline: 'Хронология', tabKeywords: 'Тренды Слов', tabHeatmap: 'Тепловая Карта',
      loginTitle: 'Вход', registerTitle: 'Создать Аккаунт', username: 'Имя Пользователя', password: 'Пароль',
      footerQuote: '"Пока вы не сделаете бессознательное сознательным, оно будет направлять вашу жизнь, и вы будете называть это судьбой."',
      footerText: 'Система Синхроничности Снов · Основана на Психологии Юнга',
      allCountries: 'Все Страны', allProvinces: 'Все Регионы',
      toastLoginSuccess: 'Вход выполнен', toastLoginFail: 'Неверное имя пользователя или пароль',
      toastRegisterSuccess: 'Регистрация успешна', toastRegisterFail: 'Пользователь уже существует',
      toastLogout: 'Вы вышли', toastDreamSuccess: 'Сон успешно записан', toastDreamFail: 'Заполните все обязательные поля',
      emptyDreams: 'Снов пока нет', emptySearch: 'Совпадений не найдено',
      userPrefix: 'Пользователь: ', anonymousAuthor: 'Аноним',
      noData: 'Нет данных', dreamCount: 'снов'
    }
  };

  let currentLang = localStorage.getItem('ds_lang') || 'zh';

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.zh[key]) || key;
  }

  function applyLanguage() {
    document.body.setAttribute('data-lang', currentLang);
    // Update all data-i18n elements (preserve child elements like inputs/spans)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (el.children.length > 0) {
        // Element has children - only update text nodes, preserve element nodes
        let foundTextNode = false;
        el.childNodes.forEach(node => {
          if (node.nodeType === 3) { // Text node
            if (!foundTextNode) {
              node.textContent = t(key);
              foundTextNode = true;
            } else {
              node.textContent = '';
            }
          }
        });
        if (!foundTextNode) {
          el.insertBefore(document.createTextNode(t(key)), el.firstChild);
        }
      } else {
        el.textContent = t(key);
      }
    });
    // Update all data-i18n-placeholder elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', t(key));
    });
    // Update page title
    document.title = t('logo') + ' — ' + t('logoSub');
    // Update default option text for country/province selects
    document.querySelectorAll('#cloudCountry, #searchCountry, #analyticsCountry').forEach(el => {
      if (el.options[0] && el.options[0].value === '') el.options[0].text = t('allCountries');
    });
    document.querySelectorAll('#cloudProvince, #searchProvince, #analyticsProvince').forEach(el => {
      if (el.options[0] && el.options[0].value === '') el.options[0].text = t('allProvinces');
    });
    localStorage.setItem('ds_lang', currentLang);
  }

  // ==================== Supabase 配置 ====================
  const SUPABASE_URL = 'https://wzyexxikerhqthqyjcrp.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6eWV4eGlrZXJocXRocXlqY3JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNDg2MjMsImV4cCI6MjA5NjkyNDYyM30.3zkgeJQUUSSyqAlblt6g8phslRgdfDSPnUpwJleB6W0';
  const USE_SUPABASE = true;

  let supabase = null;
  if (USE_SUPABASE && SUPABASE_URL !== 'YOUR_SUPABASE_URL') {
    try { supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY); } catch(e) { console.warn('Supabase init failed:', e); }
  }

  // ==================== 数据存储 ====================
  const DB = {
    dreams: JSON.parse(localStorage.getItem('ds_dreams') || '[]'),
    users: JSON.parse(localStorage.getItem('ds_users') || '[]'),
    currentUser: JSON.parse(localStorage.getItem('ds_currentUser') || 'null'),

    // 本地存储方法
    saveDreams() { localStorage.setItem('ds_dreams', JSON.stringify(this.dreams)); },
    saveUsers() { localStorage.setItem('ds_users', JSON.stringify(this.users)); },
    saveCurrentUser() { localStorage.setItem('ds_currentUser', JSON.stringify(this.currentUser)); },

    // 加载所有梦境（优先从 Supabase，回退到 localStorage）
    async loadDreams() {
      if (supabase) {
        try {
          const { data, error } = await supabase.from('dreams').select('*').order('created_at', { ascending: false });
          if (!error && data) {
            this.dreams = data.map(d => ({
              id: d.id,
              text: d.text,
              country: d.country,
              province: d.province,
              date: d.dream_date,
              author: d.author,
              userId: d.user_id,
              keywords: typeof d.keywords === 'string' ? JSON.parse(d.keywords) : (d.keywords || []),
              lang: d.lang || 'zh'
            }));
            this.saveDreams(); // 缓存到本地
          }
        } catch(e) { console.warn('Failed to load dreams from Supabase:', e); }
      }
      return this.dreams;
    },

    // 添加梦境
    async addDream(dream) {
      if (supabase) {
        try {
          const { data, error } = await supabase.from('dreams').insert({
            text: dream.text,
            country: dream.country,
            province: dream.province,
            dream_date: dream.date,
            author: dream.author,
            user_id: dream.userId,
            keywords: JSON.stringify(dream.keywords),
            lang: dream.lang || 'zh'
          }).select().single();
          if (!error && data) {
            dream.id = data.id;
          }
        } catch(e) { console.warn('Failed to save dream to Supabase:', e); }
      }
      this.dreams.unshift(dream);
      this.saveDreams();
    },

    // 用户注册
    async addUser(user) {
      if (supabase) {
        try {
          // 使用简单表存储用户，密码用 btoa 简单编码（非加密，仅避免明文）
          const { data, error } = await supabase.from('users').insert({
            username: user.username,
            password: btoa(user.password) // base64 编码
          }).select().single();
          if (!error && data) {
            user.id = data.id;
          }
        } catch(e) { console.warn('Failed to save user to Supabase:', e); }
      }
      this.users.push(user);
      this.saveUsers();
    },

    // 用户登录
    async login(username, password) {
      if (supabase) {
        try {
          const { data, error } = await supabase.from('users').select('*').eq('username', username).single();
          if (!error && data && atob(data.password) === password) {
            return { id: data.id, username: data.username, password };
          }
          return null;
        } catch(e) { console.warn('Supabase login failed:', e); }
      }
      // localStorage 回退
      return this.users.find(u => u.username === username && u.password === password) || null;
    },

    // 检查用户名是否存在
    async userExists(username) {
      if (supabase) {
        try {
          const { data, error } = await supabase.from('users').select('id').eq('username', username).single();
          return !error && !!data;
        } catch(e) { return false; }
      }
      return this.users.some(u => u.username === username);
    }
  };

  // ==================== 地区数据 ====================
  const REGION_DATA = {
    '中国': ['北京','上海','广东','浙江','江苏','四川','湖北','湖南','河南','山东','福建','安徽','河北','陕西','辽宁','重庆','天津','江西','广西','山西','吉林','云南','贵州','新疆','内蒙古','黑龙江','甘肃','海南','宁夏','青海','西藏','台湾','香港','澳门'],
    '美国': ['加利福尼亚','德克萨斯','纽约','佛罗里达','伊利诺伊','宾夕法尼亚','俄亥俄','乔治亚','北卡罗来纳','密歇根','新泽西','弗吉尼亚','华盛顿','亚利桑那','马萨诸塞','田纳西','印第安纳','密苏里','马里兰','威斯康星','科罗拉多','明尼苏达','南卡罗来纳','阿拉巴马','路易斯安那','肯塔基','俄勒冈','俄克拉荷马','康涅狄格','犹他','内华达','阿肯色','密西西比','堪萨斯','新墨西哥','内布拉斯加','西弗吉尼亚','爱达荷','夏威夷','新罕布什尔','缅因','蒙大拿','罗德岛','特拉华','南达科他','北达科他','阿拉斯加','佛蒙特','怀俄明'],
    '日本': ['东京','大阪','京都','北海道','福冈','神奈川','爱知','埼玉','千叶','兵库','静冈','广岛','茨城','新潟','宫城','长野','福岛','冈山','群马','熊本','岐阜','鹿儿岛','山口','三重','爱媛','奈良','青森','岩手','大分','石川','山形','富山','和歌山','香川','佐贺','山梨','冲绳','福井','德岛','高知','岛根','鸟取'],
    '英国': ['英格兰','苏格兰','威尔士','北爱尔兰','伦敦','曼彻斯特','伯明翰','利物浦','布里斯托','利兹','谢菲尔德','纽卡斯尔','诺丁汉','莱斯特','考文垂','布拉德福德','贝尔法斯特','格拉斯哥','爱丁堡','阿伯丁','加的夫','斯旺西'],
    '德国': ['巴伐利亚','北莱茵-威斯特法伦','巴登-符腾堡','下萨克森','黑森','萨克森','莱茵兰-普法尔茨','柏林','石勒苏益格-荷尔斯泰因','勃兰登堡','萨克森-安哈尔特','图林根','梅克伦堡-前波美拉尼亚','汉堡','萨尔','不来梅'],
    '法国': ['法兰西岛','奥弗涅-罗讷-阿尔卑斯','新阿基坦','奥克西塔尼','上法兰西','普罗旺斯-阿尔卑斯-蔚蓝海岸','大东部','勃艮第-弗朗什-孔泰','诺曼底','布列塔尼','中央-卢瓦尔河谷','卢瓦尔河地区','科西嘉'],
    '印度': ['马哈拉施特拉','北方邦','西孟加拉','泰米尔纳德','卡纳塔克','古吉拉特','拉贾斯坦','安得拉','特伦甘纳','中央邦','喀拉拉','德里','旁遮普','哈里亚纳','比哈尔','奥里萨','果阿'],
    '巴西': ['圣保罗','里约热内卢','米纳斯吉拉斯','巴伊亚','巴拉那','南里奥格兰德','伯南布哥','塞阿拉','帕拉','马拉尼昂','圣卡塔琳娜','戈亚斯','联邦区','亚马逊'],
    '俄罗斯': ['莫斯科','圣彼得堡','新西伯利亚','斯维尔德洛夫斯克','下诺夫哥罗德','萨马拉','车里雅宾斯克','鞑靼斯坦','罗斯托夫','克拉斯诺达尔','彼尔姆','沃罗涅日','秋明','伊尔库茨克','克拉斯诺亚尔斯克'],
    '澳大利亚': ['新南威尔士','维多利亚','昆士兰','西澳大利亚','南澳大利亚','塔斯马尼亚','首都领地','北领地'],
    '加拿大': ['安大略','魁北克','不列颠哥伦比亚','艾伯塔','曼尼托巴','萨斯喀彻温','新斯科舍','新不伦瑞克'],
    '韩国': ['首尔','釜山','仁川','大邱','大田','光州','蔚山','世宗','京畿','江原','忠清北','忠清南','全罗北','全罗南','庆尚北','庆尚南','济州']
  };

  // ==================== 多语言关键词提取 ====================
  // 中文停用词
  const ZH_STOP_WORDS = new Set([
    '的','了','在','是','我','有','和','就','不','人','都','一','一个','上','也','很','到','说','要','去','你','会','着','没有','看','好','自己','这','那','这些','那些','个','之','为','与','及','等','从','而','或','但','如果','因为','所以','虽然','然后','这样','那样','什么','怎么','为什么','哪里','谁','哪','几','多','少','非常','已经','正在','曾经','现在','当时','这里','那里','这边','那边','里面','外面','上面','下面','前面','后面','中间','旁边','时候','时间','地方','东西','事情','问题','原因','结果','方法','方式','过程','情况','状态','关系','部分','整体','方面','角度','程度','水平','标准','目标','目的','意义','作用','影响','效果','成果','成绩','表现','行为','动作','活动','工作','生活','学习','研究','发展','变化','增长','减少','增加','降低','提高','改善','改进','改变','转变','进步','成功','失败','胜利','困难','挑战','机会','选择','决定','判断','评价','分析','比较','对比','区别','差异','相同','相似','不同','相反','相对','绝对','可能','也许','大概','大约','差不多','几乎','完全','全部','局部','细节','重点','关键','核心','基础','根本','本质','实质','实际','现实','真实','虚假','错误','正确','准确','精确','应该','必须','需要','要求','希望','愿意','喜欢','讨厌','害怕','担心','关心','注意','重视','尊重','信任','怀疑','相信','知道','了解','理解','认识','记得','忘记','想起','想到','认为','觉得','感觉','感到','体验','经历','经验','习惯','传统','文化','社会','历史','未来','过去','今天','明天','昨天','今年','去年','明年','早上','中午','晚上','白天','夜里','春天','夏天','秋天','冬天','来','过','下','把','让','向','往','于','即','便','则','乃','且','若','如','使','仍','还','又','再','更','太','极','最','较','比','跟','同','像','似','般','样','么','吗','呢','吧','啊','哦','嗯','唉','嘿','哎','哟','哇','哈','呵','哼','却','但','被','把','将','给','对','对于','关于','按照','根据','通过','经过','随着','当','从','自','由','到','在','于','到','得','地','着','了','过','会','能','可以','能够','应该','必须','要','想','希望','愿意','喜欢','讨厌','害怕','担心','准备','打算','计划','开始','继续','停止','结束','完成','实现','达到','超过','低于','高于','等于','大于','小于','多于','少于','大约','左右','上下','前后','内外','之间','其中','以后','之前','当时','此时','那时','这时','那时','同时','随后','然后','接着','最后','首先','其次','再次','另外','此外','而且','并且','或者','还是','以及','不但','而且','不仅','而且','虽然','但是','尽管','还是','即使','也','无论','都','只要','就','只有','才','因为','所以','既然','就','如果','就','假如','要是','倘若','万一','要么','或者','不是','就是','与其','不如','宁可','也不','之所以','是因为','不但','反而','不仅','还','一方面','另一方面','既','又','又','又','又','又','又','又','又','又','又','又'
  ]);

  // 形容词/副词过滤
  const ZH_ADJ_ADV = new Set([
    '陌生','突然','巨大','强烈','莫名','亲切','永无止境','奇异','发光','清澈',
    '古老','高大','沙沙','金色','紫色','蓝色','红色','绿色','白色','黑色',
    '灰色','黄色','橙色','粉色','棕色','银色','透明','暗淡','明亮','昏暗',
    '模糊','清晰','深刻','浅','深','高','低','大','小','长','短','远','近',
    '快','慢','新','旧','老','年轻','美丽','丑陋','漂亮','难看','干净','肮脏',
    '整齐','凌乱','安静','吵闹','温暖','凉爽','寒冷','炎热','烫','冷','热',
    '干','湿','淡','浓','稠','稀','软','硬','光滑','粗糙','平坦','尖锐','锋利',
    '坚固','脆弱','强壮','虚弱','空虚','充实','丰富','贫乏','复杂','简单',
    '容易','困难','轻松','紧张','严肃','活泼','呆板','灵活','僵硬','积极',
    '消极','乐观','悲观','主动','被动','盲目','清醒','糊涂','迷惑','确定',
    '满意','失望','满足','谦虚','骄傲','自豪','幸福','痛苦','快乐','悲伤',
    '愉快','难过','高兴','沮丧','兴奋','平静','激动','愤怒','恐惧','担心',
    '焦虑','放松','舒服','难受','疼痛','宽敞','狭窄','宽阔','重要','次要',
    '完美','残缺','完整','破碎','连续','间断','永久','暂时','漫长','短暂',
    '迅速','缓慢','立刻','逐渐','偶然','必然','当然','自然','果然','竟然',
    '居然','偏偏','恰恰','刚好','正好','恰好','合适','适当','适宜','适合',
    '恰当','正确','错误','准确','精确','极端','偏激','偏执','执着','温和',
    '激进','保守','落后','先进','发达','原始','现代','时髦','流行','时尚',
    '过时','成熟','幼稚','老练','熟练','精通','生疏','熟悉','典型','正规',
    '正式','随便','随意','任意','任性','放肆','放纵','谨慎','慎重','小心',
    '大意','疏忽','仔细','认真','马虎','草率','勤奋','懒惰','努力','懈怠'
  ]);

  // 中文梦境关键词
  const ZH_DREAM_KEYWORDS = new Set([
    '梦','梦境','睡觉','醒来','夜晚','白天','黑暗','光明','颜色','声音','气味',
    '味道','触摸','感觉','情绪','情感','心情','记忆','回忆','幻想','想象',
    '现实','真实','虚假','身体','头','脸','眼','耳','口','手','脚','心','血',
    '骨','肉','皮肤','头发','眼睛','鼻子','嘴巴','牙齿','舌头','喉咙','脖子',
    '肩膀','胸','背','肚子','腰','腿','膝盖','手指','指甲','眉毛','睫毛',
    '眼泪','汗水','呼吸','心跳','说话','喊叫','哭泣','笑声','歌唱','音乐',
    '歌曲','舞蹈','跳跃','奔跑','走路','飞行','游泳','漂浮','坠落','上升',
    '下降','前进','后退','转弯','穿越','跨越','攀登','滑倒','跌倒','碰撞',
    '爆炸','燃烧','火焰','水','火','土','风','雨','雪','冰','霜','雾','云',
    '雷','电','太阳','月亮','星星','天空','大地','海洋','河流','湖泊','山',
    '森林','树','花','草','动物','鸟','鱼','蛇','龙','虎','狮子','狼','狗',
    '猫','马','牛','羊','猪','鸡','鸭','兔子','老鼠','蝴蝶','蜜蜂','蚂蚁',
    '蜘蛛','房屋','房间','门','窗','墙','地板','天花板','楼梯','电梯','桥',
    '路','街道','城市','村庄','学校','医院','商店','餐厅','公园','花园','墓地',
    '教堂','寺庙','宫殿','城堡','塔','洞穴','隧道','迷宫','镜子','玻璃','金属',
    '木头','石头','沙子','泥土','灰尘','烟雾','影子','反射','彩虹','武器',
    '枪','刀','剑','弓','箭','盾','盔甲','车子','船','飞机','火车','自行车',
    '椅子','桌子','床','被子','枕头','衣服','鞋子','帽子','包','盒子','瓶子',
    '杯子','盘子','碗','食物','水果','蔬菜','面包','蛋糕','糖果','巧克力',
    '茶','咖啡','酒','牛奶','果汁','汤','油','盐','糖','香料','符号','标志',
    '信号','信息','消息','故事','传说','神话','童话','寓言','诗歌','小说',
    '电影','电视','戏剧','表演','游戏','玩具','工具','凤凰','梧桐','水晶',
    '三叉戟','沙漠','漩涡','晶体','面具','火车','低语','翅膀','羽毛',
    '樱花','镜子','外星人','星球','心灵感应','宇宙','秘密','图书馆','书架',
    '文字','蝴蝶','松树','嚎叫','归属感','自由','洪水','宫殿','水面','水底',
    '鱼群','珊瑚','水压','窒息','呼吸','宫殿','门口','沉没','漩涡','晶体',
    '信息','沙子','流动','地下','洞穴','发光','晶体','传递','信息','狼','雪山',
    '奔跑','月亮','红色','空气','松树','香气','嚎叫','同类','归属感','自由',
    '图书馆','书架','天际','发光','打开','文字','蝴蝶','金色','指尖','秘密',
    '洪水','席卷','城市','水面','下沉','清澈','水下','世界','鱼','游过','水晶',
    '宫殿','水底','升起','门','打开','樱花','花瓣','飘落','和服','老妇人',
    '镜子','面孔','未来','飞翔','云层','森林','散开','眼睛','注视','恐惧',
    '敬畏','醒来','星球','太阳','天空','地面','植物','外星人','嘴巴','心灵',
    '感应','交流','宇宙','秘密','火车','车厢','陌生人','面具','摘下','隧道',
    '黑暗','低语'
  ]);

  // 英文停用词
  const EN_STOP_WORDS = new Set([
    'the','a','an','is','are','was','were','be','been','being','have','has','had',
    'do','does','did','will','would','could','should','may','might','shall','can',
    'need','dare','ought','used','to','of','in','for','on','with','at','by','from',
    'as','into','through','during','before','after','above','below','between','out',
    'off','over','under','again','further','then','once','here','there','when','where',
    'why','how','all','both','each','few','more','most','other','some','such','no',
    'nor','not','only','own','same','so','than','too','very','just','because','but',
    'and','or','if','while','about','against','up','down','it','its','this','that',
    'these','those','i','me','my','myself','we','our','ours','you','your','yours',
    'he','him','his','she','her','hers','they','them','their','what','which','who',
    'whom','whose','am','been','get','got','really','also','still','even','much',
    'many','well','back','way','long','great','little','right','old','big','new',
    'good','bad','first','last','never','always','often','sometimes','already','yet',
    'since','until','though','although','however','therefore','thus','hence','meanwhile',
    'otherwise','besides','anyway','somehow','somewhat','anyway','indeed','rather',
    'instead','anyway','actually','basically','certainly','clearly','definitely','exactly',
    'finally','generally','gradually','hardly','merely','nearly','obviously','perhaps',
    'possibly','probably','quite','simply','suddenly','suddenly','usually','suddenly',
    'strange','familiar','unknown','known','felt','feel','feeling','saw','see','seen',
    'looking','looked','went','go','gone','come','came','running','walked','standing',
    'sat','lay','fell','found','heard','knew','thought','believed','wanted','tried',
    'seemed','appeared','happened','began','started','stopped','tried','asked','told',
    'said','took','gave','made','left','kept','let','began','set','put','brought',
    'held','caught','stood','lost','sent','built','understand','understood','know',
    'believe','seem','try','use','work','play','help','show','hear','run','move',
    'live','call','keep','let','begin','seem','help','show','hear','play','run',
    'move','live','believe','hold','bring','happen','write','provide','sit','stand',
    'lose','pay','meet','include','continue','set','learn','change','lead','understand',
    'watch','follow','stop','create','speak','read','allow','add','spend','grow',
    'open','walk','win','offer','remember','love','consider','appear','buy','wait',
    'serve','die','send','expect','build','stay','fall','cut','reach','kill','remain'
  ]);

  // 英文形容词/副词过滤
  const EN_ADJ_ADV = new Set([
    'strange','familiar','unknown','known','sudden','suddenly','huge','giant','massive',
    'tiny','small','large','big','little','dark','bright','light','heavy','strong',
    'weak','fast','slow','quick','rapid','hot','cold','warm','cool','wet','dry',
    'hard','soft','sharp','smooth','rough','loud','quiet','silent','noisy','empty',
    'full','deep','shallow','wide','narrow','thick','thin','flat','round','square',
    'long','short','tall','high','low','near','far','close','distant','beautiful',
    'ugly','pretty','handsome','clean','dirty','fresh','old','new','young','ancient',
    'modern','happy','sad','angry','afraid','scared','nervous','calm','peaceful',
    'excited','bored','tired','awake','asleep','alive','dead','sick','healthy','painful',
    'comfortable','dangerous','safe','important','simple','complex','easy','difficult',
    'possible','impossible','real','unreal','true','false','right','wrong','good',
    'bad','better','worse','best','worst','clear','unclear','sure','unsure','certain',
    'uncertain','alone','together','alone','lonely','free','busy','ready','unready',
    'careful','careless','serious','funny','strange','normal','abnormal','usual','unusual',
    'common','rare','similar','different','equal','unequal','same','various','many',
    'much','few','little','several','enough','plenty','extra','main','major','minor',
    'chief','principal','necessary','unnecessary','useful','useless','valuable','worthless',
    'powerful','powerless','rich','poor','cheap','expensive','special','ordinary',
    'general','particular','specific','basic','advanced','simple','complex','whole',
    'entire','complete','incomplete','total','partial','absolute','relative','exact',
    'vague','obvious','visible','invisible','transparent','opaque','solid','liquid',
    'gaseous','organic','inorganic','natural','artificial','wild','tame','domestic',
    'foreign','local','native','external','internal','central','side','upper','lower',
    'front','rear','top','bottom','left','right','east','west','north','south',
    'vertical','horizontal','diagonal','parallel','perpendicular','straight','curved',
    'bent','broken','fixed','loose','tight','open','closed','locked','unlocked',
    'free','bound','tied','connected','disconnected','attached','detached','linked',
    'separated','divided','united','joined','split','merged','mixed','pure','impure',
    'clean','dirty','neat','messy','tidy','untidy','orderly','disorderly','organized',
    'chaotic','systematic','random','regular','irregular','consistent','inconsistent',
    'stable','unstable','permanent','temporary','constant','variable','steady','changing',
    'continuous','discontinuous','endless','finite','infinite','limitless','bounded',
    'unlimited','restricted','unrestricted','confined','spacious','crowded','empty',
    'full','vacant','occupied','busy','idle','active','passive','dynamic','static',
    'flexible','rigid','elastic','plastic','brittle','tough','fragile','durable',
    'temporary','permanent','lasting','brief','instant','immediate','delayed','late',
    'early','punctual','slow','fast','rapid','swift','quick','speedy','hasty',
    'gradual','sudden','unexpected','expected','surprising','unsurprising','remarkable',
    'unremarkable','extraordinary','ordinary','exceptional','common','typical','atypical',
    'representative','unique','universal','global','local','regional','national',
    'international','domestic','foreign','internal','external','outer','inner',
    'mental','physical','spiritual','material','emotional','rational','irrational',
    'logical','illogical','reasonable','unreasonable','sensible','insensible','wise',
    'foolish','clever','stupid','smart','dumb','intelligent','brilliant','genius',
    'creative','destructive','productive','constructive','positive','negative',
    'optimistic','pessimistic','enthusiastic','apathetic','passionate','indifferent',
    'curious','uninterested','fascinated','bored','amazed','unimpressed','terrified',
    'fearless','anxious','relaxed','tense','stressed','relieved','delighted','devastated',
    'thrilled','disgusted','attracted','repulsed','charmed','offended','amused',
    'annoyed','frustrated','satisfied','disappointed','grateful','resentful','proud',
    'ashamed','guilty','innocent','jealous','envious','content','restless','hopeful',
    'desperate','confident','insecure','brave','cowardly','bold','timid','aggressive',
    'gentle','fierce','mild','harsh','kind','cruel','generous','selfish','humble',
    'arrogant','polite','rude','friendly','hostile','loyal','faithful','devoted',
    'dedicated','committed','ambitious','lazy','diligent','hardworking','industrious',
    'persistent','stubborn','flexible','adaptable','resistant','obedient','rebellious',
    'cooperative','competitive','tolerant','intolerant','patient','impatient','forgiving',
    'vengeful','compassionate','merciless','sympathetic','unsympathetic','empathetic',
    'caring','indifferent','thoughtful','thoughtless','considerate','inconsiderate',
    'respectful','disrespectful','honest','dishonest','sincere','insincere','genuine',
    'fake','authentic','artificial','natural','real','unreal','original','copied',
    'creative','imitative','innovative','conventional','traditional','progressive',
    'conservative','radical','moderate','extreme','modest','vain','humble','proud',
    'ambitious','content','ambitious','curious','mysterious','obvious','hidden',
    'secret','public','private','personal','impersonal','individual','collective',
    'social','antisocial','communal','shared','exclusive','inclusive','universal',
    'particular','specific','general','broad','narrow','wide','comprehensive',
    'limited','restricted','unrestricted','controlled','uncontrolled','guided',
    'misguided','directed','aimless','purposeful','meaningful','meaningless','significant',
    'insignificant','trivial','important','unimportant','crucial','critical','vital',
    'essential','nonessential','fundamental','secondary','primary','major','minor',
    'dominant','subordinate','leading','following','preceding','succeeding','prior',
    'subsequent','subsequent','previous','final','initial','original','ultimate',
    'supreme','maximum','minimum','optimal','suboptimal','ideal','perfect','imperfect',
    'flawless','defective','faulty','sound','broken','damaged','intact','whole','partial',
    'complete','incomplete','total','absolute','relative','proportional','disproportionate',
    'balanced','unbalanced','equal','unequal','even','uneven','uniform','diverse',
    'homogeneous','heterogeneous','consistent','inconsistent','coherent','incoherent',
    'logical','illogical','rational','irrational','reasonable','unreasonable','valid',
    'invalid','legitimate','illegitimate','legal','illegal','lawful','unlawful',
    'ethical','unethical','moral','immoral','right','wrong','just','unjust','fair',
    'unfair','equitable','inequitable','biased','unbiased','objective','subjective',
    'neutral','partial','impartial','prejudiced','open-minded','narrow-minded',
    'broad-minded','tolerant','intolerant','accepting','rejecting','welcoming',
    'rejecting','inviting','excluding','including','embracing','resisting','supporting',
    'opposing','defending','attacking','protecting','exposing','concealing','revealing',
    'hiding','showing','demonstrating','proving','disproving','confirming','denying',
    'asserting','denying','affirming','negating','approving','disapproving','endorsing',
    'criticizing','praising','blaming','rewarding','punishing','encouraging','discouraging',
    'motivating','demotivating','inspiring','depressing','uplifting','disheartening',
    'encouraging','discouraging','comforting','disturbing','calming','alarming',
    'reassuring','frightening','soothing','irritating','pleasing','displeasing',
    'satisfying','disappointing','fulfilling','frustrating','gratifying','frustrating'
  ]);

  // 英文梦境关键词
  const EN_DREAM_KEYWORDS = new Set([
    'dream','nightmare','sleep','wake','night','darkness','light','shadow','mirror',
    'water','fire','earth','wind','rain','snow','ice','storm','thunder','lightning',
    'sun','moon','star','sky','cloud','ocean','river','lake','mountain','forest',
    'tree','flower','garden','desert','island','cave','bridge','road','path','door',
    'window','wall','floor','ceiling','stairs','elevator','castle','tower','temple',
    'church','palace','house','room','bed','chair','table','knife','sword','gun',
    'shield','armor','crown','ring','key','book','letter','map','treasure','gold',
    'silver','crystal','diamond','pearl','gem','stone','rock','sand','dust','smoke',
    'flame','explosion','flood','earthquake','volcano','tornado','tsunami','eclipse',
    'comet','meteor','rainbow','aurora','fog','mist','dew','frost','hail',
    'bird','eagle','hawk','owl','crow','raven','dove','swan','peacock','phoenix',
    'dragon','serpent','snake','spider','scorpion','wolf','bear','lion','tiger',
    'elephant','horse','deer','rabbit','fox','whale','dolphin','shark','fish',
    'butterfly','bee','ant','fly','beetle','moth','caterpillar','frog','turtle',
    'cat','dog','pig','cow','sheep','goat','chicken','duck','crow','monkey',
    'ape','human','child','baby','elder','stranger','warrior','king','queen',
    'prince','princess','wizard','witch','ghost','angel','demon','monster','alien',
    'god','goddess','spirit','soul','shadow','figure','presence','voice','whisper',
    'scream','cry','laugh','song','music','bell','horn','drum','dance','flight',
    'fall','climb','swim','dive','float','sink','run','walk','jump','crawl',
    'hide','seek','chase','escape','trap','cage','chain','rope','net','web',
    'blood','tear','sweat','breath','heartbeat','pulse','pain','wound','scar',
    'birth','death','rebirth','transformation','mask','costume','uniform','robe',
    'cloak','veil','wings','horns','tail','claws','fangs','teeth','eyes','mouth',
    'hand','foot','head','face','body','bone','skin','hair','feather','scale',
    'wing','tail','horn','claw','fang','tooth','eye','mouth','hand','foot','head',
    'face','body','bone','skin','hair','feather','scale','blood','tear','sweat',
    'breath','heartbeat','pulse','pain','wound','scar','mask','costume','uniform',
    'robe','cloak','veil','wings','horns','tail','claws','fangs','teeth','eyes',
    'mouth','hand','foot','head','face','body','bone','skin','hair','feather',
    'train','car','plane','ship','boat','bicycle','bus','truck','helicopter',
    'rocket','spaceship','submarine','balloon','parachute','glider','airplane',
    'vehicle','wagon','carriage','sleigh','canoe','kayak','raft','surfboard',
    'skateboard','bicycle','motorcycle','scooter','moped','tram','metro','subway',
    'ferry','yacht','cruise','vessel','craft','ambulance','fire','police','taxi',
    'library','school','hospital','prison','court','market','restaurant','hotel',
    'museum','theater','cinema','stadium','arena','park','beach','cliff','valley',
    'canyon','waterfall','spring','well','fountain','pool','pond','swamp','marsh',
    'jungle','field','meadow','prairie','plain','plateau','summit','peak','crater',
    'rift','chasm','abyss','void','emptiness','darkness','light','shadow','reflection',
    'echo','silence','noise','sound','music','voice','whisper','scream','cry',
    'laughter','song','melody','harmony','rhythm','beat','pulse','vibration',
    'frequency','tone','pitch','volume','silence','quiet','noise','sound','music',
    'food','bread','cake','fruit','apple','grape','berry','nut','seed','grain',
    'rice','wheat','corn','milk','honey','wine','beer','water','tea','coffee',
    'juice','soup','meat','fish','egg','cheese','butter','sugar','salt','spice',
    'color','red','blue','green','yellow','white','black','purple','orange',
    'pink','brown','gray','silver','gold','bronze','copper','iron','steel',
    'glass','wood','stone','clay','brick','cement','marble','granite','sand',
    'dust','ash','ember','charcoal','coal','oil','wax','resin','sap','nectar',
    'number','one','two','three','four','five','six','seven','eight','nine','ten',
    'hundred','thousand','million','billion','zero','infinity','circle','square',
    'triangle','rectangle','pentagon','hexagon','octagon','spiral','cross','star',
    'heart','diamond','arrow','compass','map','globe','clock','watch','calendar',
    'phone','computer','screen','camera','television','radio','lamp','candle',
    'torch','lantern','fire','light','switch','button','lever','wheel','gear',
    'engine','motor','machine','robot','computer','phone','screen','camera',
    'television','radio','lamp','candle','torch','lantern','fire','light','switch',
    'button','lever','wheel','gear','engine','motor','machine','robot'
  ]);

  // 日文停用词
  const JA_STOP_WORDS = new Set([
    'の','に','は','を','た','が','で','て','と','し','れ','さ','ある','いる',
    'も','する','から','ない','こと','もの','それ','な','れる','よう','この','ため',
    'その','あの','まで','だけ','でも','なら','より','など','へ','か','や','わ',
    'ね','よ','だ','です','ます','でした','でした','では','では','でも','しかし',
    'また','そして','しかし','でも','ところで','だから','なので','つまり','すなわち',
    'なぜなら','という','ように','ために','について','において','において','に基づき',
    'に従い','に伴い','に関して','に対して','にとって','として','に当たって',
    'に応じて','に沿って','にわたって','にかけて','において','において','において',
    'について','につき','につき','について','について','について','について',
    'とても','とても','かなり','少し','ちょっと','たくさん','少し','少し',
    'とても','とても','とても','とても','とても','とても','とても','とても',
    'とても','とても','とても','とても','とても','とても','とても','とても',
    'とても','とても','とても','とても','とても','とても','とても','とても',
    'とても','とても','とても','とても','とても','とても','とても','とても',
    'とても','とても','とても','とても','とても','とても','とても','とても',
    'とても','とても','とても','とても','とても','とても','とても','とても'
  ]);

  const JA_ADJ_ADV = new Set([
    '巨大','突然','強烈','見知らぬ','懐かしい','美しい','恐ろしい','奇妙',
    '静か','暗い','明るい','大きい','小さい','高い','低い','長い','短い',
    '広い','狭い','深い','浅い','重い','軽い','速い','遅い','新しい','古い',
    '若い','老い','暑い','寒い','暖かい','涼しい','冷たい','熱い','厚い',
    '薄い','硬い','柔らかい','鋭い','鈍い','強い','弱い','太い','細い',
    '豊か','貧しい','忙しい','暇','楽しい','悲しい','嬉しい','怒り','怖い',
    '寂しい','孤独','孤独','静か','賑やか','きれい','汚い','元気','病気',
    '健康','危険','安全','大切','重要','複雑','簡単','困難','容易','可能',
    '不可能','正しい','間違った','本当','嘘','透明','不透明','有名','無名',
    '普通','特別','一般的','異常','正常','異常','普通','特別','一般的',
    '異常','正常','異常','普通','特別','一般的','異常','正常'
  ]);

  const JA_DREAM_KEYWORDS = new Set([
    '夢','悪夢','眠り','目覚め','夜','闇','光','影','鏡','水','火','土',
    '風','雨','雪','氷','嵐','雷','太陽','月','星','空','雲','海','川',
    '湖','山','森','木','花','庭','砂漠','島','洞窟','橋','道','扉','窓',
    '城','塔','寺','教会','宮殿','家','部屋','ベッド','椅子','机','ナイフ',
    '剣','銃','盾','兜','王冠','指輪','鍵','本','地図','宝','金','銀',
    '水晶','ダイヤモンド','真珠','宝石','石','岩','砂','煙','炎','爆発',
    '洪水','地震','火山','竜巻','津波','虹','オーロラ','霧','鳥','鷲',
    'フクロウ','カラス','鳩','白鳥','クジャク','不死鳥','龍','蛇','蜘蛛',
    '狼','熊','ライオン','虎','象','馬','鹿','兎','狐','クジラ','イルカ',
    'サメ','魚','蝶','蜂','蟻','蛙','亀','猫','犬','猿','戦士','王',
    '女王','王子','姫','魔法使い','魔女','幽霊','天使','悪魔','怪物','宇宙人',
    '神','精霊','魂','影','声','ささやき','叫び','涙','笑い','歌','音楽',
    '鐘','踊り','飛行','落下','登る','泳ぐ','潜る','浮く','沈む','走る',
    '歩く','跳ぶ','隠れる','追う','逃げる','罠','檻','鎖','血','汗',
    '呼吸','心臓','痛み','傷','誕生','死','変身','仮面','衣装','マント',
    '翼','角','尾','爪','牙','目','口','手','足','頭','顔','体',
    '骨','肌','髪','羽','鱗','列車','車','飛行機','船','自転車',
    '図書館','学校','病院','刑務所','裁判所','市場','レストラン','ホテル',
    '博物館','劇場','映画館','公園','海岸','崖','谷','滝','泉','噴水',
    '池','沼','ジャングル','野原','草原','頂','峰','火口','深淵','空虚',
    '共鳴','沈黙','騒音','響き','リズム','食べ物','パン','果物','リンゴ',
    'ブドウ','木の実','種','米','麦','牛乳','蜂蜜','酒','紅茶','コーヒー',
    'スープ','肉','卵','チーズ','砂糖','塩','色','赤','青','緑','黄',
    '白','黒','紫','オレンジ','ピンク','茶','灰','銅','鉄','鋼',
    'ガラス','木','レンガ','大理石','花崗岩','灰','炭','油','ろう',
    '数字','円','四角','三角','十字','星','心','矢印','コンパス','地球儀',
    '時計','カレンダー','電話','コンピューター','画面','カメラ','テレビ',
    'ラジオ','ランプ','蝋燭','松明','スイッチ','ボタン','歯車','エンジン',
    'ロボット','宇宙','惑星','銀河','星雲','ブラックホール','ワームホール',
    'タイムトラベル','過去','未来','予知','透視','念力','テレパシー','共時性'
  ]);

  // 语言检测
  function detectLanguage(text) {
    if (!text) return 'zh';
    const zhChars = (text.match(/[\u4e00-\u9fff]/g) || []).length;
    const jaChars = (text.match(/[\u3040-\u309f\u30a0-\u30ff]/g) || []).length;
    const koChars = (text.match(/[\uac00-\ud7af]/g) || []).length;
    const enChars = (text.match(/[a-zA-Z]/g) || []).length;
    const total = text.length;

    if (zhChars / total > 0.1) return 'zh';
    if (jaChars / total > 0.1) return 'ja';
    if (koChars / total > 0.1) return 'ko';
    if (enChars / total > 0.3) return 'en';
    // Check for French, German, Spanish, Portuguese, Russian
    if (/à|â|é|è|ê|ë|î|ï|ô|ù|û|ü|ç|œ|æ/.test(text)) return 'fr';
    if (/ä|ö|ü|ß/.test(text)) return 'de';
    if (/ñ|¿|¡|á|í|ó|ú|é|ü/.test(text)) return 'es';
    if (/ã|õ|ç|á|é|í|ó|ú|â|ê|ô/.test(text)) return 'pt';
    if (/а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|ю|я/.test(text)) return 'ru';
    return 'en';
  }

  // 多语言关键词提取
  function extractKeywords(text) {
    if (!text) return [];
    const lang = detectLanguage(text);
    let keywords = [];

    if (lang === 'zh') {
      keywords = extractZhKeywords(text);
    } else if (lang === 'ja') {
      keywords = extractJaKeywords(text);
    } else {
      keywords = extractEnKeywords(text);
    }

    // 统计频率
    const freq = {};
    keywords.forEach(w => { freq[w] = (freq[w] || 0) + 1; });
    return Object.entries(freq)
      .map(([name, value]) => ({ name, value, lang }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 20);
  }

  function extractZhKeywords(text) {
    const words = [];
    for (let len = 4; len >= 2; len--) {
      for (let i = 0; i <= text.length - len; i++) {
        const word = text.slice(i, i + len);
        if (ZH_DREAM_KEYWORDS.has(word) && !ZH_STOP_WORDS.has(word) && !ZH_ADJ_ADV.has(word)) {
          words.push(word);
        }
      }
    }
    return words;
  }

  function extractJaKeywords(text) {
    const words = [];
    // Extract 2-4 char Japanese words
    for (let len = 4; len >= 2; len--) {
      for (let i = 0; i <= text.length - len; i++) {
        const word = text.slice(i, i + len);
        if (JA_DREAM_KEYWORDS.has(word) && !JA_STOP_WORDS.has(word) && !JA_ADJ_ADV.has(word)) {
          words.push(word);
        }
      }
    }
    return words;
  }

  function extractEnKeywords(text) {
    const words = text.toLowerCase()
      .replace(/[^a-z\s'-]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 2 && !EN_STOP_WORDS.has(w) && !EN_ADJ_ADV.has(w) && EN_DREAM_KEYWORDS.has(w));
    return words;
  }

  // ==================== 初始化数据 ====================
  async function initDemoData() {
    // 如果使用 Supabase，先从远程加载
    if (supabase) {
      await DB.loadDreams();
      if (DB.dreams.length > 0) return; // 远程有数据则跳过 demo
    }
    if (DB.dreams.length > 0) return;
    const demoDreams = [
      { id: Date.now()-100000, text: '我梦见自己在一座古老的城市中漫步，街道两旁是高大的梧桐树，树叶在风中沙沙作响。突然天空变成了紫色，一只巨大的凤凰从云层中飞出，它的羽毛闪烁着金色的光芒。我感到一种莫名的平静和力量。', country: '中国', province: '北京', date: '2026-06-10', author: '匿名', userId: null, keywords: [], lang: 'zh' },
      { id: Date.now()-90000, text: '梦见自己在深海中游泳，周围是发光的珊瑚和奇异的鱼群。水压让我感到窒息，但我却能自由呼吸。远处有一座沉没的宫殿，门口站着一个手持三叉戟的人。', country: '中国', province: '上海', date: '2026-06-11', author: '匿名', userId: null, keywords: [], lang: 'zh' },
      { id: Date.now()-80000, text: 'I dreamed of standing in an endless desert. The sun was blue. Sand began to flow, forming a giant whirlpool. I was pulled underground into a massive cave filled with glowing crystals that seemed to transmit information.', country: '美国', province: '加利福尼亚', date: '2026-06-09', author: 'Dreamer_01', userId: 'demo1', keywords: [], lang: 'en' },
      { id: Date.now()-70000, text: '梦见自己变成了一只狼，在雪山上奔跑。月亮是红色的，空气中弥漫着松树的香气。我听到远处有同类的嚎叫，感到一种强烈的归属感和自由。', country: '中国', province: '四川', date: '2026-06-12', author: '匿名', userId: null, keywords: [], lang: 'zh' },
      { id: Date.now()-60000, text: 'I was in a giant library with shelves reaching to the sky. Every book was glowing. When I opened one, the words flew out and turned into butterflies. A golden butterfly landed on my fingertip and whispered a secret.', country: '英国', province: '伦敦', date: '2026-06-08', author: 'BookWorm', userId: 'demo2', keywords: [], lang: 'en' },
      { id: Date.now()-50000, text: '夢の中で洪水が街を襲ったが、私は水面に立って沈まなかった。水は透明で、水下の世界が見えた。魚が私のそばを泳ぎ、水晶の宮殿が水底から浮かび上がり、扉がゆっくりと開いた。', country: '日本', province: '東京', date: '2026-06-11', author: '匿名', userId: null, keywords: [], lang: 'ja' },
      { id: Date.now()-40000, text: '桜の林の中にいる夢を見た。花びらが雪のように舞い落ちる。着物を着た老婦人が鏡を差し出した。鏡の中の私ではなかった。見知らぬが親しみのある顔だった。彼女は「これは未来のあなたです」と言った。', country: '日本', province: '京都', date: '2026-06-12', author: 'SakuraDream', userId: 'demo3', keywords: [], lang: 'ja' },
      { id: Date.now()-30000, text: 'In my dream I was flying above the clouds. Below me was a vast green forest. Suddenly the clouds parted, revealing a giant eye watching me. I felt both terror and awe, then I woke up.', country: '中国', province: '浙江', date: '2026-06-13', author: '匿名', userId: null, keywords: [], lang: 'en' },
      { id: Date.now()-20000, text: 'I dreamed I was on a strange planet with three suns in the sky. The ground was purple and plants glowed. I met an alien with no mouth who communicated through telepathy, telling me secrets about the universe.', country: '美国', province: '纽约', date: '2026-06-10', author: 'StarGazer', userId: 'demo4', keywords: [], lang: 'en' },
      { id: Date.now()-10000, text: 'I dreamed I was on a never-ending train filled with strangers wearing masks. When I tried to remove a mask, the train entered a tunnel. In the darkness I heard whispers from all directions.', country: '德国', province: '柏林', date: '2026-06-12', author: '匿名', userId: null, keywords: [], lang: 'en' }
    ];
    demoDreams.forEach(d => {
      d.keywords = extractKeywords(d.text);
    });
    for (const d of demoDreams) {
      await DB.addDream(d);
    }
  }

  // ==================== UI 功能 ====================
  function showToast(msg, type) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = 'toast ' + (type || 'info') + ' show';
    setTimeout(() => toast.classList.remove('show'), 3000);
  }

  function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav a[data-section]').forEach(a => a.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    const navLink = document.querySelector('.nav a[data-section="' + id + '"]');
    if (navLink) navLink.classList.add('active');
    if (id === 'home') renderHome();
    if (id === 'explore') renderSearchResults();
    if (id === 'analytics') renderAnalytics();
  }
  window.showSection = showSection;

  function openModal(id) { document.getElementById(id).classList.add('active'); }
  window.closeModal = function(id) { document.getElementById(id).classList.remove('active'); };

  // ==================== 地区选择器 ====================
  function initRegionSelectors() {
    const countrySelects = ['dreamCountry','cloudCountry','searchCountry','analyticsCountry'];
    const provinceSelects = ['dreamProvince','cloudProvince','searchProvince','analyticsProvince'];

    countrySelects.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (!el) return;
      Object.keys(REGION_DATA).forEach(c => {
        el.add(new Option(c, c));
      });
      el.addEventListener('change', function() {
        const provEl = document.getElementById(provinceSelects[idx]);
        if (!provEl) return;
        provEl.innerHTML = '<option value="">' + t('allProvinces') + '</option>';
        if (this.value && REGION_DATA[this.value]) {
          REGION_DATA[this.value].forEach(p => provEl.add(new Option(p, p)));
          provEl.disabled = false;
        } else {
          provEl.disabled = idx === 0;
        }
        if (id === 'cloudCountry' || id === 'cloudProvince') renderWordCloud();
        if (id === 'searchCountry' || id === 'searchProvince') renderSearchResults();
        if (id === 'analyticsCountry' || id === 'analyticsProvince') renderAnalytics();
      });
    });
  }

  // ==================== 词云图 ====================
  let wordCloudChart = null;
  function renderWordCloud() {
    const container = document.getElementById('wordCloud');
    if (!container) return;
    if (!wordCloudChart) wordCloudChart = echarts.init(container, null, { renderer: 'svg' });

    const country = document.getElementById('cloudCountry').value;
    const province = document.getElementById('cloudProvince').value;

    let dreams = DB.dreams;
    if (country) dreams = dreams.filter(d => d.country === country);
    if (province) dreams = dreams.filter(d => d.province === province);

    const keywordFreq = {};
    dreams.forEach(d => {
      d.keywords.forEach(k => {
        keywordFreq[k.name] = (keywordFreq[k.name] || 0) + k.value;
      });
    });

    const data = Object.entries(keywordFreq)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 80);

    const colors = ['#8b5cf6','#06b6d4','#10b981','#f59e0b','#ef4444','#ec4899','#6366f1','#14b8a6'];

    wordCloudChart.setOption({
      tooltip: { show: true, formatter: '{b}: {c}' },
      series: [{
        type: 'wordCloud',
        shape: 'circle',
        left: 'center',
        top: 'center',
        width: '95%',
        height: '95%',
        right: null,
        bottom: null,
        sizeRange: [14, 60],
        rotationRange: [-45, 45],
        rotationStep: 15,
        gridSize: 8,
        drawOutOfBound: false,
        layoutAnimation: true,
        textStyle: {
          fontFamily: 'Noto Sans SC, Inter, sans-serif',
          color: function() { return colors[Math.floor(Math.random() * colors.length)]; }
        },
        emphasis: {
          focus: 'self',
          textStyle: { shadowBlur: 10, shadowColor: 'rgba(139,92,246,0.5)' }
        },
        data: data
      }]
    }, true);
  }

  // ==================== 首页统计 ====================
  function updateStats() {
    const dreams = DB.dreams;
    const today = new Date().toISOString().slice(0, 10);
    const keywordSet = new Set();
    const regionSet = new Set();
    let todayCount = 0;

    dreams.forEach(d => {
      d.keywords.forEach(k => keywordSet.add(k.name));
      regionSet.add(d.country + '-' + d.province);
      if (d.date === today) todayCount++;
    });

    document.getElementById('statTotal').textContent = dreams.length;
    document.getElementById('statKeywords').textContent = keywordSet.size;
    document.getElementById('statRegions').textContent = regionSet.size;
    document.getElementById('statToday').textContent = todayCount;
  }

  // ==================== 地区图表 ====================
  let regionChart = null;
  function renderRegionChart() {
    const container = document.getElementById('regionChart');
    if (!container) return;
    if (!regionChart) regionChart = echarts.init(container, null, { renderer: 'svg' });

    const regionFreq = {};
    DB.dreams.forEach(d => {
      const key = d.country + ' · ' + d.province;
      regionFreq[key] = (regionFreq[key] || 0) + 1;
    });

    const data = Object.entries(regionFreq)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);

    regionChart.setOption({
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
      grid: { left: '3%', right: '4%', bottom: '3%', top: '3%', containLabel: true },
      xAxis: { type: 'value', axisLine: { lineStyle: { color: '#334155' } }, axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
      yAxis: { type: 'category', data: data.map(d => d.name).reverse(), axisLine: { lineStyle: { color: '#334155' } }, axisLabel: { color: '#94a3b8', fontSize: 11 } },
      series: [{
        type: 'bar',
        data: data.map(d => d.value).reverse(),
        itemStyle: { color: '#8b5cf6', borderRadius: [0, 4, 4, 0] },
        barWidth: '60%'
      }]
    }, true);
  }

  // ==================== 最新梦境 ====================
  function renderRecentDreams() {
    const container = document.getElementById('recentDreams');
    if (!container) return;
    const recent = DB.dreams.slice(0, 5);
    if (recent.length === 0) {
      container.innerHTML = '<div class="empty-state">' + t('emptyDreams') + '</div>';
      return;
    }
    container.innerHTML = recent.map(d => renderDreamItem(d)).join('');
  }

  function renderDreamItem(d) {
    const keywordsHtml = d.keywords.slice(0, 8).map(k =>
      `<span class="keyword-tag" onclick="searchByKeyword('${k.name.replace(/'/g, "\\'")}')">${k.name}</span>`
    ).join('');
    const langBadge = d.lang && d.lang !== 'zh' ? ` <span style="font-size:0.65rem;color:var(--accent2);background:rgba(6,182,212,0.15);padding:0.1rem 0.4rem;border-radius:8px;">${d.lang.toUpperCase()}</span>` : '';
    return `
      <div class="dream-item fade-in">
        <div class="dream-header">
          <span class="dream-author">${d.author}${langBadge}</span>
          <span class="dream-date">${d.date} · <span class="dream-region">${d.country} ${d.province}</span></span>
        </div>
        <div class="dream-text">${d.text.slice(0, 120)}${d.text.length > 120 ? '...' : ''}</div>
        <div class="dream-keywords">${keywordsHtml}</div>
      </div>
    `;
  }

  window.searchByKeyword = function(keyword) {
    document.getElementById('searchInput').value = keyword;
    showSection('explore');
    searchDreams();
  };

  // ==================== 搜索功能 ====================
  function searchDreams() { renderSearchResults(); }
  window.searchDreams = searchDreams;

  window.clearSearch = function() {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchCountry').value = '';
    document.getElementById('searchProvince').innerHTML = '<option value="">' + t('allProvinces') + '</option>';
    document.getElementById('searchProvince').disabled = true;
    renderSearchResults();
  };

  function renderSearchResults() {
    const container = document.getElementById('searchResults');
    if (!container) return;

    const query = (document.getElementById('searchInput').value || '').toLowerCase().trim();
    const country = document.getElementById('searchCountry').value;
    const province = document.getElementById('searchProvince').value;

    let results = DB.dreams;
    if (query) {
      results = results.filter(d =>
        d.text.toLowerCase().includes(query) ||
        d.author.toLowerCase().includes(query) ||
        d.keywords.some(k => k.name.toLowerCase().includes(query))
      );
    }
    if (country) results = results.filter(d => d.country === country);
    if (province) results = results.filter(d => d.province === province);

    if (results.length === 0) {
      container.innerHTML = '<div class="empty-state">' + t('emptySearch') + '</div>';
      return;
    }
    container.innerHTML = results.map(d => renderDreamItem(d)).join('');
  }

  // ==================== 历史图表 ====================
  let timelineChart = null, keywordTrendChart = null, heatmapChart = null;

  function renderAnalytics() {
    const country = document.getElementById('analyticsCountry').value;
    const province = document.getElementById('analyticsProvince').value;
    let dreams = DB.dreams;
    if (country) dreams = dreams.filter(d => d.country === country);
    if (province) dreams = dreams.filter(d => d.province === province);
    renderTimeline(dreams);
    renderKeywordTrend(dreams);
    renderHeatmap(dreams);
  }

  function renderTimeline(dreams) {
    const container = document.getElementById('timelineChart');
    if (!container) return;
    if (!timelineChart) timelineChart = echarts.init(container, null, { renderer: 'svg' });
    const dateFreq = {};
    dreams.forEach(d => { dateFreq[d.date] = (dateFreq[d.date] || 0) + 1; });
    const dates = Object.keys(dateFreq).sort();
    timelineChart.setOption({
      tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
      grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
      xAxis: { type: 'category', data: dates, axisLine: { lineStyle: { color: '#334155' } }, axisLabel: { color: '#94a3b8', rotate: 30 } },
      yAxis: { type: 'value', axisLine: { lineStyle: { color: '#334155' } }, axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
      series: [{
        type: 'line', data: dates.map(d => dateFreq[d]), smooth: true, symbol: 'circle', symbolSize: 8,
        lineStyle: { color: '#8b5cf6', width: 3 }, itemStyle: { color: '#8b5cf6' },
        areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(139,92,246,0.3)' }, { offset: 1, color: 'rgba(139,92,246,0.05)' }] } }
      }]
    }, true);
  }

  function renderKeywordTrend(dreams) {
    const container = document.getElementById('keywordTrendChart');
    if (!container) return;
    if (!keywordTrendChart) keywordTrendChart = echarts.init(container, null, { renderer: 'svg' });
    const keywordFreq = {};
    dreams.forEach(d => { d.keywords.forEach(k => { keywordFreq[k.name] = (keywordFreq[k.name] || 0) + k.value; }); });
    const topKeywords = Object.entries(keywordFreq).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([k]) => k);
    const dates = [...new Set(dreams.map(d => d.date))].sort();
    const colors = ['#8b5cf6','#06b6d4','#10b981','#f59e0b','#ef4444','#ec4899','#6366f1','#14b8a6','#f97316','#84cc16'];
    const series = topKeywords.map((kw, idx) => ({
      name: kw, type: 'line',
      data: dates.map(date => dreams.filter(d => d.date === date).reduce((sum, d) => sum + d.keywords.filter(k => k.name === kw).reduce((s, k) => s + k.value, 0), 0)),
      smooth: true, lineStyle: { color: colors[idx], width: 2 }, itemStyle: { color: colors[idx] }, symbol: 'circle', symbolSize: 5
    }));
    keywordTrendChart.setOption({
      tooltip: { trigger: 'axis' },
      legend: { data: topKeywords, textStyle: { color: '#94a3b8' }, top: 0 },
      grid: { left: '3%', right: '4%', bottom: '3%', top: '15%', containLabel: true },
      xAxis: { type: 'category', data: dates, axisLine: { lineStyle: { color: '#334155' } }, axisLabel: { color: '#94a3b8', rotate: 30 } },
      yAxis: { type: 'value', axisLine: { lineStyle: { color: '#334155' } }, axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
      series: series
    }, true);
  }

  function renderHeatmap(dreams) {
    const container = document.getElementById('heatmapChart');
    if (!container) return;
    if (!heatmapChart) heatmapChart = echarts.init(container, null, { renderer: 'svg' });
    const countries = [...new Set(dreams.map(d => d.country))].sort();
    const dates = [...new Set(dreams.map(d => d.date))].sort();
    const data = [];
    dreams.forEach(d => {
      const ci = countries.indexOf(d.country);
      const di = dates.indexOf(d.date);
      if (ci >= 0 && di >= 0) {
        const existing = data.find(item => item[0] === di && item[1] === ci);
        if (existing) existing[2] += 1;
        else data.push([di, ci, 1]);
      }
    });
    countries.forEach((_, ci) => { dates.forEach((_, di) => { if (!data.some(item => item[0] === di && item[1] === ci)) data.push([di, ci, '-']); }); });
    heatmapChart.setOption({
      tooltip: { position: 'top', formatter: function(p) { return p.value[2] === '-' ? dates[p.value[0]] + ' · ' + countries[p.value[1]] + ': ' + t('noData') : dates[p.value[0]] + ' · ' + countries[p.value[1]] + ': ' + p.value[2] + ' ' + t('dreamCount'); } },
      grid: { left: '15%', right: '5%', bottom: '15%', top: '5%' },
      xAxis: { type: 'category', data: dates, axisLine: { lineStyle: { color: '#334155' } }, axisLabel: { color: '#94a3b8', rotate: 45 } },
      yAxis: { type: 'category', data: countries, axisLine: { lineStyle: { color: '#334155' } }, axisLabel: { color: '#94a3b8' } },
      visualMap: { min: 0, max: Math.max(...data.filter(d => d[2] !== '-').map(d => d[2]), 1), calculable: true, orient: 'horizontal', left: 'center', bottom: '0%', inRange: { color: ['#1e293b', '#8b5cf6', '#06b6d4'] }, textStyle: { color: '#94a3b8' }, outOfRange: { color: 'transparent' } },
      series: [{ type: 'heatmap', data: data, label: { show: true, formatter: function(p) { return p.value[2] === '-' ? '' : p.value[2]; }, color: '#f1f5f9' }, emphasis: { itemStyle: { shadowBlur: 10, shadowColor: 'rgba(139,92,246,0.5)' } } }]
    }, true);
  }

  // ==================== 标签页切换 ====================
  function initTabs() {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const chart = this.dataset.chart;
        document.getElementById('timelineChart').style.display = chart === 'timeline' ? 'block' : 'none';
        document.getElementById('keywordTrendChart').style.display = chart === 'keywords' ? 'block' : 'none';
        document.getElementById('heatmapChart').style.display = chart === 'heatmap' ? 'block' : 'none';
        if (chart === 'timeline' && timelineChart) timelineChart.resize();
        if (chart === 'keywords' && keywordTrendChart) keywordTrendChart.resize();
        if (chart === 'heatmap' && heatmapChart) heatmapChart.resize();
      });
    });
  }

  // ==================== 用户系统 ====================
  function initUserSystem() {
    document.getElementById('loginBtn').addEventListener('click', () => openModal('loginModal'));
    document.getElementById('registerBtn').addEventListener('click', () => openModal('registerModal'));
    document.getElementById('logoutBtn').addEventListener('click', logout);

    document.getElementById('loginForm').addEventListener('submit', async function(e) {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value.trim();
      const password = document.getElementById('loginPassword').value;
      const user = await DB.login(username, password);
      if (user) {
        DB.currentUser = user; DB.saveCurrentUser(); updateUserUI();
        closeModal('loginModal'); showToast(t('toastLoginSuccess'), 'success');
      } else { showToast(t('toastLoginFail'), 'error'); }
    });

    document.getElementById('registerForm').addEventListener('submit', async function(e) {
      e.preventDefault();
      const username = document.getElementById('regUsername').value.trim();
      const password = document.getElementById('regPassword').value;
      if (await DB.userExists(username)) { showToast(t('toastRegisterFail'), 'error'); return; }
      const user = { id: 'u_' + Date.now(), username, password };
      await DB.addUser(user); DB.currentUser = user; DB.saveCurrentUser(); updateUserUI();
      closeModal('registerModal'); showToast(t('toastRegisterSuccess'), 'success');
    });
    updateUserUI();
  }

  function updateUserUI() {
    const userStatus = document.getElementById('userStatus');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const anonymousOption = document.getElementById('anonymousOption');
    const usernameOption = document.getElementById('usernameOption');
    if (DB.currentUser) {
      userStatus.innerHTML = t('userPrefix') + '<span class="username">' + DB.currentUser.username + '</span>';
      loginBtn.style.display = 'none'; registerBtn.style.display = 'none'; logoutBtn.style.display = 'inline-block';
      if (anonymousOption) anonymousOption.style.display = 'block';
      if (usernameOption) { usernameOption.style.display = 'block'; document.getElementById('displayName').value = DB.currentUser.username; }
    } else {
      userStatus.textContent = t('guestMode');
      loginBtn.style.display = 'inline-block'; registerBtn.style.display = 'inline-block'; logoutBtn.style.display = 'none';
      if (anonymousOption) anonymousOption.style.display = 'none';
      if (usernameOption) usernameOption.style.display = 'none';
    }
  }

  function logout() {
    DB.currentUser = null; DB.saveCurrentUser(); updateUserUI();
    showToast(t('toastLogout'), 'info');
  }

  // ==================== 梦境上传 ====================
  function initDreamForm() {
    const form = document.getElementById('dreamForm');
    if (!form) return;
    document.getElementById('isAnonymous').addEventListener('change', function() {
      document.getElementById('usernameOption').style.display = this.checked ? 'none' : 'block';
    });
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const text = document.getElementById('dreamText').value.trim();
      const country = document.getElementById('dreamCountry').value;
      const province = document.getElementById('dreamProvince').value;
      const date = document.getElementById('dreamDate').value || new Date().toISOString().slice(0, 10);
      const isAnonymous = document.getElementById('isAnonymous').checked;
      const displayName = document.getElementById('displayName').value.trim();
      if (!text || !country || !province) { showToast(t('toastDreamFail'), 'error'); return; }
      const keywords = extractKeywords(text);
      const lang = detectLanguage(text);
      const author = DB.currentUser && !isAnonymous ? (displayName || DB.currentUser.username) : t('anonymousAuthor');
      const dream = { id: Date.now(), text, country, province, date, author, userId: DB.currentUser ? DB.currentUser.id : null, keywords, lang };
      await DB.addDream(dream);
      showToast(t('toastDreamSuccess'), 'success');
      form.reset();
      document.getElementById('dreamProvince').disabled = true;
      document.getElementById('dreamProvince').innerHTML = '<option value="">' + t('selectCountryFirst') + '</option>';
      showSection('home');
    });
  }

  // ==================== 导航 ====================
  function initNav() {
    document.querySelectorAll('.nav a[data-section]').forEach(a => {
      a.addEventListener('click', function() { showSection(this.dataset.section); });
    });
  }

  // ==================== 语言切换 ====================
  function initLangSelector() {
    const selector = document.getElementById('langSelector');
    if (!selector) return;
    selector.value = currentLang;
    selector.addEventListener('change', function() {
      currentLang = this.value;
      applyLanguage();
      updateUserUI();
      renderHome();
    });
  }

  // ==================== 首页渲染 ====================
  function renderHome() {
    updateStats();
    renderWordCloud();
    renderRegionChart();
    renderRecentDreams();
  }

  // ==================== 窗口调整 ====================
  window.addEventListener('resize', function() {
    if (wordCloudChart) wordCloudChart.resize();
    if (regionChart) regionChart.resize();
    if (timelineChart) timelineChart.resize();
    if (keywordTrendChart) keywordTrendChart.resize();
    if (heatmapChart) heatmapChart.resize();
  });

  // ==================== 初始化 ====================
  async function init() {
    await initDemoData();
    applyLanguage();
    initRegionSelectors();
    initUserSystem();
    initDreamForm();
    initNav();
    initTabs();
    initLangSelector();
    renderHome();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
