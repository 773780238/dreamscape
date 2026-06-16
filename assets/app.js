(function() {
  'use strict';

  // ==================== 多语言翻译系统 ====================
  const I18N = {
    zh: {
      logo: '梦境共时性', logoSub: '集体潜意识预测系统',
      navHome: '首页', navUpload: '记录梦境', navExplore: '探索梦境', navAnalytics: '历史图表', navMyDreams: '我的梦境',
      guestMode: '游客模式', login: '登录', register: '注册', logout: '退出',
      myDreamsTitle: '我的梦境', myDreamsSubtitle: '查看和管理你提交的所有梦境',
      edit: '编辑', delete: '删除', save: '保存', cancel: '取消',
      confirmDelete: '确定要删除这条梦境吗？', confirmDeleteTitle: '确认删除', dreamDetailTitle: '梦境详情', noMyDreams: '你还没有提交过梦境', editDream: '编辑梦境',
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
      noData: '无数据', dreamCount: '条梦境',
      allDates: '所有时间', today: '今天', yesterday: '昨天', thisWeek: '本周', lastWeek: '上周', thisMonth: '本月', lastMonth: '上月', custom: '自定义', dateFrom: '开始日期', dateTo: '结束日期',
      mapTitle: '全球梦境地图', mapSubtitle: '探索世界各地的梦境关键词分布', mapReset: '重置', mapLegend: '梦境活跃度：', low: '低', high: '高',
    },
    en: {
      logo: 'Dream Synchronicity', logoSub: 'Collective Unconscious Prediction System',
      navHome: 'Home', navUpload: 'Record Dream', navExplore: 'Explore', navAnalytics: 'Analytics', navMyDreams: 'My Dreams',
      guestMode: 'Guest Mode', login: 'Login', register: 'Register', logout: 'Logout',
      myDreamsTitle: 'My Dreams', myDreamsSubtitle: 'View and manage all your submitted dreams',
      edit: 'Edit', delete: 'Delete', save: 'Save', cancel: 'Cancel',
      confirmDelete: 'Are you sure you want to delete this dream?', confirmDeleteTitle: 'Confirm Delete', dreamDetailTitle: 'Dream Detail', noMyDreams: 'You have not submitted any dreams yet', editDream: 'Edit Dream',
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
      noData: 'No data', dreamCount: 'dreams',
      allDates: 'All Time', today: 'Today', yesterday: 'Yesterday', thisWeek: 'This Week', lastWeek: 'Last Week', thisMonth: 'This Month', lastMonth: 'Last Month', custom: 'Custom', dateFrom: 'From', dateTo: 'To',
      mapTitle: 'Global Dream Map', mapSubtitle: 'Explore dream keyword distribution worldwide', mapReset: 'Reset', mapLegend: 'Dream Activity:', low: 'Low', high: 'High',
    },
    ja: {
      logo: '夢の共時性', logoSub: '集合的無意識予測システム',
      navHome: 'ホーム', navUpload: '夢を記録', navExplore: '探索', navAnalytics: '分析', navMyDreams: 'マイ夢',
      guestMode: 'ゲストモード', login: 'ログイン', register: '登録', logout: 'ログアウト',
      myDreamsTitle: 'マイ夢', myDreamsSubtitle: 'あなたが送信したすべての夢を表示・管理',
      edit: '編集', delete: '削除', save: '保存', cancel: 'キャンセル',
      confirmDelete: 'この夢を削除してもよろしいですか？', confirmDeleteTitle: '削除の確認', dreamDetailTitle: '夢の詳細', noMyDreams: 'まだ夢を送信していません', editDream: '夢を編集',
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
      noData: 'データなし', dreamCount: '件の夢',
      allDates: 'すべての期間', today: '今日', yesterday: '昨日', thisWeek: '今週', lastWeek: '先週', thisMonth: '今月', lastMonth: '先月', custom: 'カスタム', dateFrom: '開始日', dateTo: '終了日',
      mapTitle: '世界夢マップ', mapSubtitle: '世界各地の夢キーワード分布を探索', mapReset: 'リセット', mapLegend: '夢の活発度：', low: '低', high: '高',
    },
    ko: {
      logo: '꿈의 동시성', logoSub: '집단 무의식 예측 시스템',
      navHome: '홈', navUpload: '꿈 기록', navExplore: '탐색', navAnalytics: '분석', navMyDreams: '내 꿈',
      guestMode: '게스트 모드', login: '로그인', register: '회원가입', logout: '로그아웃',
      myDreamsTitle: '내 꿈', myDreamsSubtitle: '제출한 모든 꿈을 보고 관리하세요',
      edit: '편집', delete: '삭제', save: '저장', cancel: '취소',
      confirmDelete: '이 꿈을 삭제하시겠습니까?', confirmDeleteTitle: '삭제 확인', dreamDetailTitle: '꿈 상세', noMyDreams: '아직 제출한 꿈이 없습니다', editDream: '꿈 편집',
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
      noData: '데이터 없음', dreamCount: '개의 꿈',
      allDates: '모든 기간', today: '오늘', yesterday: '어제', thisWeek: '이번 주', lastWeek: '지난 주', thisMonth: '이번 달', lastMonth: '지난 달', custom: '사용자 지정', dateFrom: '시작일', dateTo: '종료일',
      mapTitle: '글로벌 꿈 지도', mapSubtitle: '전 세계 꿈 키워드 분포 탐색', mapReset: '재설정', mapLegend: '꿈 활발도：', low: '낮음', high: '높음',
    },
    fr: {
      logo: 'Synchronicité des Rêves', logoSub: 'Système de Prédiction de l\'Inconscient Collectif',
      navHome: 'Accueil', navUpload: 'Enregistrer', navExplore: 'Explorer', navAnalytics: 'Analyses', navMyDreams: 'Mes Rêves',
      guestMode: 'Mode Invité', login: 'Connexion', register: 'Inscription', logout: 'Déconnexion',
      myDreamsTitle: 'Mes Rêves', myDreamsSubtitle: 'Voir et gérer tous vos rêves soumis',
      edit: 'Modifier', delete: 'Supprimer', save: 'Enregistrer', cancel: 'Annuler',
      confirmDelete: 'Voulez-vous vraiment supprimer ce rêve ?', confirmDeleteTitle: 'Confirmer la suppression', dreamDetailTitle: 'Détail du Rêve', noMyDreams: 'Vous n\'avez pas encore soumis de rêves', editDream: 'Modifier le Rêve',
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
      noData: 'Aucune donnée', dreamCount: 'rêves',
      allDates: 'Toutes les Dates', today: "Aujourd'hui", yesterday: 'Hier', thisWeek: 'Cette Semaine', lastWeek: 'Semaine Dernière', thisMonth: 'Ce Mois', lastMonth: 'Mois Dernier', custom: 'Personnalisé', dateFrom: 'De', dateTo: 'À',
      mapTitle: 'Carte Mondiale des Rêves', mapSubtitle: 'Explorer la distribution des mots-clés des rêves dans le monde', mapReset: 'Réinitialiser', mapLegend: 'Activité des rêves :', low: 'Faible', high: 'Élevée',
    },
    de: {
      logo: 'Traum-Synchronizität', logoSub: 'Kollektives Unbewusstes Vorhersagesystem',
      navHome: 'Startseite', navUpload: 'Traum Aufzeichnen', navExplore: 'Erkunden', navAnalytics: 'Analysen', navMyDreams: 'Meine Träume',
      guestMode: 'Gastmodus', login: 'Anmelden', register: 'Registrieren', logout: 'Abmelden',
      myDreamsTitle: 'Meine Träume', myDreamsSubtitle: 'Alle Ihre eingereichten Träume anzeigen und verwalten',
      edit: 'Bearbeiten', delete: 'Löschen', save: 'Speichern', cancel: 'Abbrechen',
      confirmDelete: 'Sind Sie sicher, dass Sie diesen Traum löschen möchten?', confirmDeleteTitle: 'Löschen bestätigen', dreamDetailTitle: 'Traumdetail', noMyDreams: 'Sie haben noch keine Träume eingereicht', editDream: 'Traum Bearbeiten',
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
      noData: 'Keine Daten', dreamCount: 'Träume',
      allDates: 'Alle Zeit', today: 'Heute', yesterday: 'Gestern', thisWeek: 'Diese Woche', lastWeek: 'Letzte Woche', thisMonth: 'Dieser Monat', lastMonth: 'Letzter Monat', custom: 'Benutzerdefiniert', dateFrom: 'Von', dateTo: 'Bis',
      mapTitle: 'Globale Traumkarte', mapSubtitle: 'Traum-Schlüsselwortverteilung weltweit erkunden', mapReset: 'Zurücksetzen', mapLegend: 'Traumaktivität:', low: 'Niedrig', high: 'Hoch',
    },
    es: {
      logo: 'Sincronicidad de los Sueños', logoSub: 'Sistema de Predicción del Inconsciente Colectivo',
      navHome: 'Inicio', navUpload: 'Registrar Sueño', navExplore: 'Explorar', navAnalytics: 'Análisis', navMyDreams: 'Mis Sueños',
      guestMode: 'Modo Invitado', login: 'Iniciar Sesión', register: 'Registrarse', logout: 'Cerrar Sesión',
      myDreamsTitle: 'Mis Sueños', myDreamsSubtitle: 'Ver y gestionar todos tus sueños enviados',
      edit: 'Editar', delete: 'Eliminar', save: 'Guardar', cancel: 'Cancelar',
      confirmDelete: '¿Estás seguro de que quieres eliminar este sueño?', confirmDeleteTitle: 'Confirmar eliminación', dreamDetailTitle: 'Detalle del Sueño', noMyDreams: 'Aún no has enviado ningún sueño', editDream: 'Editar Sueño',
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
      noData: 'Sin datos', dreamCount: 'sueños',
      allDates: 'Todas las Fechas', today: 'Hoy', yesterday: 'Ayer', thisWeek: 'Esta Semana', lastWeek: 'Semana Pasada', thisMonth: 'Este Mes', lastMonth: 'Mes Pasado', custom: 'Personalizado', dateFrom: 'Desde', dateTo: 'Hasta',
      mapTitle: 'Mapa Mundial de Sueños', mapSubtitle: 'Explora la distribución de palabras clave de sueños en el mundo', mapReset: 'Restablecer', mapLegend: 'Actividad de sueños:', low: 'Baja', high: 'Alta',
    },
    pt: {
      logo: 'Sincronicidade dos Sonhos', logoSub: 'Sistema de Predição do Inconsciente Coletivo',
      navHome: 'Início', navUpload: 'Registrar Sonho', navExplore: 'Explorar', navAnalytics: 'Análises', navMyDreams: 'Meus Sonhos',
      guestMode: 'Modo Convidado', login: 'Entrar', register: 'Registrar', logout: 'Sair',
      myDreamsTitle: 'Meus Sonhos', myDreamsSubtitle: 'Ver e gerenciar todos os seus sonhos enviados',
      edit: 'Editar', delete: 'Excluir', save: 'Salvar', cancel: 'Cancelar',
      confirmDelete: 'Tem certeza de que deseja excluir este sonho?', confirmDeleteTitle: 'Confirmar exclusão', dreamDetailTitle: 'Detalhe do Sonho', noMyDreams: 'Você ainda não enviou nenhum sonho', editDream: 'Editar Sonho',
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
      noData: 'Sem dados', dreamCount: 'sonhos',
      allDates: 'Todas as Datas', today: 'Hoje', yesterday: 'Ontem', thisWeek: 'Esta Semana', lastWeek: 'Semana Passada', thisMonth: 'Este Mês', lastMonth: 'Mês Passado', custom: 'Personalizado', dateFrom: 'De', dateTo: 'Até',
      mapTitle: 'Mapa Mundial de Sonhos', mapSubtitle: 'Explore a distribuição de palavras-chave de sonhos pelo mundo', mapReset: 'Redefinir', mapLegend: 'Atividade dos sonhos:', low: 'Baixa', high: 'Alta',
    },
    ru: {
      logo: 'Синхроничность Снов', logoSub: 'Система Прогнозирования Коллективного Бессознательного',
      navHome: 'Главная', navUpload: 'Записать Сон', navExplore: 'Исследовать', navAnalytics: 'Аналитика', navMyDreams: 'Мои Сны',
      guestMode: 'Гостевой Режим', login: 'Войти', register: 'Регистрация', logout: 'Выйти',
      myDreamsTitle: 'Мои Сны', myDreamsSubtitle: 'Просмотр и управление всеми вашими отправленными снами',
      edit: 'Редактировать', delete: 'Удалить', save: 'Сохранить', cancel: 'Отмена',
      confirmDelete: 'Вы уверены, что хотите удалить этот сон?', confirmDeleteTitle: 'Подтвердите удаление', dreamDetailTitle: 'Детали Сна', noMyDreams: 'Вы еще не отправили ни одного сна', editDream: 'Редактировать Сон',
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
      noData: 'Нет данных', dreamCount: 'снов',
      allDates: 'Все Время', today: 'Сегодня', yesterday: 'Вчера', thisWeek: 'Эта Неделя', lastWeek: 'Прошлая Неделя', thisMonth: 'Этот Месяц', lastMonth: 'Прошлый Месяц', custom: 'Пользовательский', dateFrom: 'С', dateTo: 'По',
      mapTitle: 'Глобальная Карта Снов', mapSubtitle: 'Исследуйте распределение ключевых слов снов по всему миру', mapReset: 'Сброс', mapLegend: 'Активность снов:', low: 'Низкая', high: 'Высокая',
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
    // Update country/province select options with translated names
    document.querySelectorAll('#cloudCountry, #searchCountry, #analyticsCountry').forEach(el => {
      if (el.options[0] && el.options[0].value === '') el.options[0].text = t('allCountries');
      const selectedVal = el.value;
      for (let i = 1; i < el.options.length; i++) {
        el.options[i].text = tr(el.options[i].value);
      }
      el.value = selectedVal;
    });
    document.querySelectorAll('#cloudProvince, #searchProvince, #analyticsProvince').forEach(el => {
      if (el.options[0] && el.options[0].value === '') el.options[0].text = t('allProvinces');
      const selectedVal = el.value;
      for (let i = 1; i < el.options.length; i++) {
        el.options[i].text = tr(el.options[i].value);
      }
      el.value = selectedVal;
    });
    // Also update dream form selects
    const dreamCountry = document.getElementById('dreamCountry');
    if (dreamCountry) {
      if (dreamCountry.options[0] && dreamCountry.options[0].value === '') dreamCountry.options[0].text = t('allCountries');
      const sv = dreamCountry.value;
      for (let i = 1; i < dreamCountry.options.length; i++) {
        dreamCountry.options[i].text = tr(dreamCountry.options[i].value);
      }
      dreamCountry.value = sv;
    }
    const dreamProvince = document.getElementById('dreamProvince');
    if (dreamProvince) {
      if (dreamProvince.options[0] && dreamProvince.options[0].value === '') dreamProvince.options[0].text = t('allProvinces');
      const sv = dreamProvince.value;
      for (let i = 1; i < dreamProvince.options.length; i++) {
        dreamProvince.options[i].text = tr(dreamProvince.options[i].value);
      }
      dreamProvince.value = sv;
    }
    // Update date preset select options
    const datePresetEl = document.getElementById('searchDatePreset');
    if (datePresetEl) {
      const dpVal = datePresetEl.value;
      for (let i = 0; i < datePresetEl.options.length; i++) {
        const i18nKey = datePresetEl.options[i].getAttribute('data-i18n');
        if (i18nKey) datePresetEl.options[i].text = t(i18nKey);
      }
      datePresetEl.value = dpVal;
    }
    localStorage.setItem('ds_lang', currentLang);
    // Re-sync form UI states after language update
    const _anonCb = document.getElementById('isAnonymous');
    const _unameOpt = document.getElementById('usernameOption');
    if (_anonCb && _unameOpt) {
      _unameOpt.style.display = _anonCb.checked ? 'none' : 'block';
    }
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
            const remoteDreams = data.map(d => ({
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
            // Merge: use remote as base, add local dreams not yet in remote
            const remoteIds = new Set(remoteDreams.map(d => String(d.id)));
            const localOnly = this.dreams.filter(d => !remoteIds.has(String(d.id)));
            this.dreams = [...remoteDreams, ...localOnly];
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
    },

    // 更新梦境
    async updateDream(id, updates) {
      const dream = this.dreams.find(d => d.id == id);
      if (!dream) return false;

      if (supabase) {
        try {
          const { error } = await supabase.from('dreams').update({
            text: updates.text,
            country: updates.country,
            province: updates.province,
            dream_date: updates.date,
            keywords: JSON.stringify(updates.keywords),
            lang: updates.lang || 'zh'
          }).eq('id', id);
          if (error) console.warn('Supabase update failed:', error);
        } catch(e) { console.warn('Failed to update dream in Supabase:', e); }
      }

      Object.assign(dream, updates);
      this.saveDreams();
      return true;
    },

    // 删除梦境
    async deleteDream(id) {
      if (supabase) {
        try {
          const { error } = await supabase.from('dreams').delete().eq('id', id);
          if (error) console.warn('Supabase delete failed:', error);
        } catch(e) { console.warn('Failed to delete dream from Supabase:', e); }
      }
      this.dreams = this.dreams.filter(d => d.id != id);
      this.saveDreams();
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

  const REGION_I18N = {
    // 国家名映射
    '中国': { en: 'China', ja: '中国', ko: '중국', fr: 'Chine', de: 'China', es: 'China', pt: 'China', ru: 'Китай' },
    '美国': { en: 'United States', ja: 'アメリカ', ko: '미국', fr: 'États-Unis', de: 'USA', es: 'Estados Unidos', pt: 'Estados Unidos', ru: 'США' },
    '日本': { en: 'Japan', ja: '日本', ko: '일본', fr: 'Japon', de: 'Japan', es: 'Japón', pt: 'Japão', ru: 'Япония' },
    '英国': { en: 'United Kingdom', ja: 'イギリス', ko: '영국', fr: 'Royaume-Uni', de: 'Vereinigtes Königreich', es: 'Reino Unido', pt: 'Reino Unido', ru: 'Великобритания' },
    '德国': { en: 'Germany', ja: 'ドイツ', ko: '독일', fr: 'Allemagne', de: 'Deutschland', es: 'Alemania', pt: 'Alemanha', ru: 'Германия' },
    '法国': { en: 'France', ja: 'フランス', ko: '프랑스', fr: 'France', de: 'Frankreich', es: 'Francia', pt: 'França', ru: 'Франция' },
    '印度': { en: 'India', ja: 'インド', ko: '인도', fr: 'Inde', de: 'Indien', es: 'India', pt: 'Índia', ru: 'Индия' },
    '巴西': { en: 'Brazil', ja: 'ブラジル', ko: '브라질', fr: 'Brésil', de: 'Brasilien', es: 'Brasil', pt: 'Brasil', ru: 'Бразилия' },
    '俄罗斯': { en: 'Russia', ja: 'ロシア', ko: '러시아', fr: 'Russie', de: 'Russland', es: 'Rusia', pt: 'Rússia', ru: 'Россия' },
    '澳大利亚': { en: 'Australia', ja: 'オーストラリア', ko: '호주', fr: 'Australie', de: 'Australien', es: 'Australia', pt: 'Austrália', ru: 'Австралия' },
    '加拿大': { en: 'Canada', ja: 'カナダ', ko: '캐나다', fr: 'Canada', de: 'Kanada', es: 'Canadá', pt: 'Canadá', ru: 'Канада' },
    '韩国': { en: 'South Korea', ja: '韓国', ko: '한국', fr: 'Corée du Sud', de: 'Südkorea', es: 'Corea del Sur', pt: 'Coreia do Sul', ru: 'Южная Корея' },
    // 省份名映射 - 中国
    '北京': { en: 'Beijing', ja: '北京', ko: '베이징', fr: 'Pékin', de: 'Peking', es: 'Pekín', pt: 'Pequim', ru: 'Пекин' },
    '上海': { en: 'Shanghai', ja: '上海', ko: '상하이', fr: 'Shanghai', de: 'Shanghai', es: 'Shanghái', pt: 'Xangai', ru: 'Шанхай' },
    '广东': { en: 'Guangdong', ja: '広東', ko: '광둥', fr: 'Guangdong', de: 'Guangdong', es: 'Cantón', pt: 'Cantão', ru: 'Гуандун' },
    '浙江': { en: 'Zhejiang', ja: '浙江', ko: '저쟝', fr: 'Zhejiang', de: 'Zhejiang', es: 'Zhejiang', pt: 'Zhejiang', ru: 'Чжэцзян' },
    '江苏': { en: 'Jiangsu', ja: '江蘇', ko: '장쑤', fr: 'Jiangsu', de: 'Jiangsu', es: 'Jiangsu', pt: 'Jiangsu', ru: 'Цзянсу' },
    '四川': { en: 'Sichuan', ja: '四川', ko: '쓰촨', fr: 'Sichuan', de: 'Sichuan', es: 'Sichuan', pt: 'Sichuan', ru: 'Сычуань' },
    '湖北': { en: 'Hubei', ja: '湖北', ko: '후베이', fr: 'Hubei', de: 'Hubei', es: 'Hubei', pt: 'Hubei', ru: 'Хубэй' },
    '湖南': { en: 'Hunan', ja: '湖南', ko: '후난', fr: 'Hunan', de: 'Hunan', es: 'Hunan', pt: 'Hunan', ru: 'Хунань' },
    '河南': { en: 'Henan', ja: '河南', ko: '허난', fr: 'Henan', de: 'Henan', es: 'Henan', pt: 'Henan', ru: 'Хэнань' },
    '山东': { en: 'Shandong', ja: '山東', ko: '산둥', fr: 'Shandong', de: 'Shandong', es: 'Shandong', pt: 'Shandong', ru: 'Шаньдун' },
    '福建': { en: 'Fujian', ja: '福建', ko: '푸젠', fr: 'Fujian', de: 'Fujian', es: 'Fujian', pt: 'Fujian', ru: 'Фуцзянь' },
    '安徽': { en: 'Anhui', ja: '安徽', ko: '안후이', fr: 'Anhui', de: 'Anhui', es: 'Anhui', pt: 'Anhui', ru: 'Аньхой' },
    '河北': { en: 'Hebei', ja: '河北', ko: '허베이', fr: 'Hebei', de: 'Hebei', es: 'Hebei', pt: 'Hebei', ru: 'Хэбэй' },
    '陕西': { en: 'Shaanxi', ja: '陝西', ko: '산시', fr: 'Shaanxi', de: 'Shaanxi', es: 'Shaanxi', pt: 'Shaanxi', ru: 'Шэньси' },
    '辽宁': { en: 'Liaoning', ja: '遼寧', ko: '랴오닝', fr: 'Liaoning', de: 'Liaoning', es: 'Liaoning', pt: 'Liaoning', ru: 'Ляонин' },
    '重庆': { en: 'Chongqing', ja: '重慶', ko: '충칭', fr: 'Chongqing', de: 'Chongqing', es: 'Chongqing', pt: 'Chongqing', ru: 'Чунцин' },
    '天津': { en: 'Tianjin', ja: '天津', ko: '톈진', fr: 'Tianjin', de: 'Tianjin', es: 'Tianjín', pt: 'Tianjin', ru: 'Тяньцзинь' },
    '江西': { en: 'Jiangxi', ja: '江西', ko: '장시', fr: 'Jiangxi', de: 'Jiangxi', es: 'Jiangxi', pt: 'Jiangxi', ru: 'Цзянси' },
    '广西': { en: 'Guangxi', ja: '広西', ko: '광시', fr: 'Guangxi', de: 'Guangxi', es: 'Guangxi', pt: 'Guangxi', ru: 'Гуанси' },
    '山西': { en: 'Shanxi', ja: '山西', ko: '산시', fr: 'Shanxi', de: 'Shanxi', es: 'Shanxi', pt: 'Shanxi', ru: 'Шаньси' },
    '吉林': { en: 'Jilin', ja: '吉林', ko: '길림', fr: 'Jilin', de: 'Jilin', es: 'Jilin', pt: 'Jilin', ru: 'Цзилинь' },
    '云南': { en: 'Yunnan', ja: '雲南', ko: '윈난', fr: 'Yunnan', de: 'Yunnan', es: 'Yunnan', pt: 'Yunnan', ru: 'Юньнань' },
    '贵州': { en: 'Guizhou', ja: '貴州', ko: '구이저우', fr: 'Guizhou', de: 'Guizhou', es: 'Guizhou', pt: 'Guizhou', ru: 'Гуйчжоу' },
    '新疆': { en: 'Xinjiang', ja: '新疆', ko: '신장', fr: 'Xinjiang', de: 'Xinjiang', es: 'Xinjiang', pt: 'Xinjiang', ru: 'Синьцзян' },
    '内蒙古': { en: 'Inner Mongolia', ja: '内モンゴル', ko: '내몽골', fr: 'Mongolie-Intérieure', de: 'Innere Mongolei', es: 'Mongolia Interior', pt: 'Mongólia Interior', ru: 'Внутренняя Монголия' },
    '黑龙江': { en: 'Heilongjiang', ja: '黒竜江', ko: '헤이룽장', fr: 'Heilongjiang', de: 'Heilongjiang', es: 'Heilongjiang', pt: 'Heilongjiang', ru: 'Хэйлунцзян' },
    '甘肃': { en: 'Gansu', ja: '甘粛', ko: '간쑤', fr: 'Gansu', de: 'Gansu', es: 'Gansu', pt: 'Gansu', ru: 'Ганьсу' },
    '海南': { en: 'Hainan', ja: '海南', ko: '하이난', fr: 'Hainan', de: 'Hainan', es: 'Hainán', pt: 'Hainan', ru: 'Хайнань' },
    '宁夏': { en: 'Ningxia', ja: '寧夏', ko: '닝샤', fr: 'Ningxia', de: 'Ningxia', es: 'Ningxia', pt: 'Ningxia', ru: 'Нинся' },
    '青海': { en: 'Qinghai', ja: '青海', ko: '칭하이', fr: 'Qinghai', de: 'Qinghai', es: 'Qinghai', pt: 'Qinghai', ru: 'Цинхай' },
    '西藏': { en: 'Tibet', ja: 'チベット', ko: '시짱', fr: 'Tibet', de: 'Tibet', es: 'Tíbet', pt: 'Tibete', ru: 'Тибет' },
    '台湾': { en: 'Taiwan', ja: '台湾', ko: '대만', fr: 'Taïwan', de: 'Taiwan', es: 'Taiwán', pt: 'Taiwan', ru: 'Тайвань' },
    '香港': { en: 'Hong Kong', ja: '香港', ko: '홍콩', fr: 'Hong Kong', de: 'Hongkong', es: 'Hong Kong', pt: 'Hong Kong', ru: 'Гонконг' },
    '澳门': { en: 'Macau', ja: 'マカオ', ko: '마카오', fr: 'Macao', de: 'Macau', es: 'Macao', pt: 'Macau', ru: 'Макао' },
    // 省份名映射 - 美国（主要州）
    '加利福尼亚': { en: 'California', ja: 'カリフォルニア', ko: '캘리포니아', fr: 'Californie', de: 'Kalifornien', es: 'California', pt: 'Califórnia', ru: 'Калифорния' },
    '德克萨斯': { en: 'Texas', ja: 'テキサス', ko: '텍사스', fr: 'Texas', de: 'Texas', es: 'Texas', pt: 'Texas', ru: 'Техас' },
    '纽约': { en: 'New York', ja: 'ニューヨーク', ko: '뉴욕', fr: 'New York', de: 'New York', es: 'Nueva York', pt: 'Nova York', ru: 'Нью-Йорк' },
    '佛罗里达': { en: 'Florida', ja: 'フロリダ', ko: '플로리다', fr: 'Floride', de: 'Florida', es: 'Florida', pt: 'Flórida', ru: 'Флорида' },
    '伊利诺伊': { en: 'Illinois', ja: 'イリノイ', ko: '일리노이', fr: 'Illinois', de: 'Illinois', es: 'Illinois', pt: 'Illinois', ru: 'Иллинойс' },
    '宾夕法尼亚': { en: 'Pennsylvania', ja: 'ペンシルベニア', ko: '펜실베이니아', fr: 'Pennsylvanie', de: 'Pennsylvania', es: 'Pensilvania', pt: 'Pensilvânia', ru: 'Пенсильвания' },
    '俄亥俄': { en: 'Ohio', ja: 'オハイオ', ko: '오하이오', fr: 'Ohio', de: 'Ohio', es: 'Ohio', pt: 'Ohio', ru: 'Огайо' },
    '乔治亚': { en: 'Georgia', ja: 'ジョージア', ko: '조지아', fr: 'Géorgie', de: 'Georgia', es: 'Georgia', pt: 'Geórgia', ru: 'Джорджия' },
    '北卡罗来纳': { en: 'North Carolina', ja: 'ノースカロライナ', ko: '노스캐롤라이나', fr: 'Caroline du Nord', de: 'North Carolina', es: 'Carolina del Norte', pt: 'Carolina do Norte', ru: 'Северная Каролина' },
    '密歇根': { en: 'Michigan', ja: 'ミシガン', ko: '미시간', fr: 'Michigan', de: 'Michigan', es: 'Michigan', pt: 'Michigan', ru: 'Мичиган' },
    '新泽西': { en: 'New Jersey', ja: 'ニュージャージー', ko: '뉴저지', fr: 'New Jersey', de: 'New Jersey', es: 'Nueva Jersey', pt: 'Nova Jersey', ru: 'Нью-Джерси' },
    '弗吉尼亚': { en: 'Virginia', ja: 'バージニア', ko: '버지니아', fr: 'Virginie', de: 'Virginia', es: 'Virginia', pt: 'Virgínia', ru: 'Вирджиния' },
    '华盛顿': { en: 'Washington', ja: 'ワシントン', ko: '워싱턴', fr: 'Washington', de: 'Washington', es: 'Washington', pt: 'Washington', ru: 'Вашингтон' },
    '马萨诸塞': { en: 'Massachusetts', ja: 'マサチューセッツ', ko: '매사추세츠', fr: 'Massachusetts', de: 'Massachusetts', es: 'Massachusetts', pt: 'Massachusetts', ru: 'Массачусетс' },
    '夏威夷': { en: 'Hawaii', ja: 'ハワイ', ko: '하와이', fr: 'Hawaï', de: 'Hawaii', es: 'Hawái', pt: 'Havaí', ru: 'Гавайи' },
    // 省份名映射 - 日本（主要都道府県）
    '东京': { en: 'Tokyo', ja: '東京', ko: '도쿄', fr: 'Tokyo', de: 'Tokio', es: 'Tokio', pt: 'Tóquio', ru: 'Токио' },
    '大阪': { en: 'Osaka', ja: '大阪', ko: '오사카', fr: 'Osaka', de: 'Osaka', es: 'Osaka', pt: 'Osaka', ru: 'Осака' },
    '京都': { en: 'Kyoto', ja: '京都', ko: '교토', fr: 'Kyoto', de: 'Kyoto', es: 'Kioto', pt: 'Quioto', ru: 'Киото' },
    '北海道': { en: 'Hokkaido', ja: '北海道', ko: '홋카이도', fr: 'Hokkaido', de: 'Hokkaido', es: 'Hokkaido', pt: 'Hokkaido', ru: 'Хоккайдо' },
    '福冈': { en: 'Fukuoka', ja: '福岡', ko: '후쿠오카', fr: 'Fukuoka', de: 'Fukuoka', es: 'Fukuoka', pt: 'Fukuoka', ru: 'Фукуока' },
    // 省份名映射 - 韩国
    '首尔': { en: 'Seoul', ja: 'ソウル', ko: '서울', fr: 'Séoul', de: 'Seoul', es: 'Seúl', pt: 'Seul', ru: 'Сеул' },
    '釜山': { en: 'Busan', ja: '釜山', ko: '부산', fr: 'Busan', de: 'Busan', es: 'Busán', pt: 'Busan', ru: 'Пусан' },
    // 省份名映射 - 英国
    '伦敦': { en: 'London', ja: 'ロンドン', ko: '런던', fr: 'Londres', de: 'London', es: 'Londres', pt: 'Londres', ru: 'Лондон' },
    '曼彻斯特': { en: 'Manchester', ja: 'マンチェスター', ko: '맨체스터', fr: 'Manchester', de: 'Manchester', es: 'Mánchester', pt: 'Manchester', ru: 'Манчестер' },
    // 省份名映射 - 法国
    '巴黎': { en: 'Paris', ja: 'パリ', ko: '파리', fr: 'Paris', de: 'Paris', es: 'París', pt: 'Paris', ru: 'Париж' },
    // 省份名映射 - 德国
    '柏林': { en: 'Berlin', ja: 'ベルリン', ko: '베를린', fr: 'Berlin', de: 'Berlin', es: 'Berlín', pt: 'Berlim', ru: 'Берлин' },
    // 省份名映射 - 澳大利亚
    '新南威尔士': { en: 'New South Wales', ja: 'ニューサウスウェールズ', ko: '뉴사우스웨일스', fr: 'Nouvelle-Galles du Sud', de: 'New South Wales', es: 'Nueva Gales del Sur', pt: 'Nova Gales do Sul', ru: 'Новый Южный Уэльс' },
    '维多利亚': { en: 'Victoria', ja: 'ビクトリア', ko: '빅토리아', fr: 'Victoria', de: 'Victoria', es: 'Victoria', pt: 'Victoria', ru: 'Виктория' },
    // 省份名映射 - 加拿大
    '安大略': { en: 'Ontario', ja: 'オンタリオ', ko: '온타리오', fr: 'Ontario', de: 'Ontario', es: 'Ontario', pt: 'Ontário', ru: 'Онтарио' },
    '魁北克': { en: 'Quebec', ja: 'ケベック', ko: '퀘벡', fr: 'Québec', de: 'Quebec', es: 'Quebec', pt: 'Quebec', ru: 'Квебек' },
    // 省份名映射 - 俄罗斯
    '莫斯科': { en: 'Moscow', ja: 'モスクワ', ko: '모스크바', fr: 'Moscou', de: 'Moskau', es: 'Moscú', pt: 'Moscou', ru: 'Москва' },
    '圣彼得堡': { en: 'Saint Petersburg', ja: 'サンクトペテルブルク', ko: '상트페테르부르크', fr: 'Saint-Pétersbourg', de: 'Sankt Petersburg', es: 'San Petersburgo', pt: 'São Petersburgo', ru: 'Санкт-Петербург' },
    // 省份名映射 - 巴西
    '圣保罗': { en: 'São Paulo', ja: 'サンパウロ', ko: '상파울루', fr: 'São Paulo', de: 'São Paulo', es: 'São Paulo', pt: 'São Paulo', ru: 'Сан-Паулу' },
    '里约热内卢': { en: 'Rio de Janeiro', ja: 'リオデジャネイロ', ko: '리우데자네이루', fr: 'Rio de Janeiro', de: 'Rio de Janeiro', es: 'Río de Janeiro', pt: 'Rio de Janeiro', ru: 'Рио-де-Жанейро' },
    // 省份名映射 - 印度
    '马哈拉施特拉': { en: 'Maharashtra', ja: 'マハラシュトラ', ko: '마하라슈트라', fr: 'Maharashtra', de: 'Maharashtra', es: 'Maharashtra', pt: 'Maharashtra', ru: 'Махараштра' },
    '北方邦': { en: 'Uttar Pradesh', ja: 'ウッタル・プラデーシュ', ko: '우타르프라데시', fr: 'Uttar Pradesh', de: 'Uttar Pradesh', es: 'Uttar Pradesh', pt: 'Uttar Pradesh', ru: 'Уттар-Прадеш' },
    '德里': { en: 'Delhi', ja: 'デリー', ko: '델리', fr: 'Delhi', de: 'Delhi', es: 'Delhi', pt: 'Delhi', ru: 'Дели' },
    // 世界地图国家英文翻译
    '斐济': { en: 'Fiji' }, '坦桑尼亚': { en: 'Tanzania' }, '西撒哈拉': { en: 'W. Sahara' }, '哈萨克斯坦': { en: 'Kazakhstan' }, '乌兹别克斯坦': { en: 'Uzbekistan' }, '巴布亚新几内亚': { en: 'Papua New Guinea' }, '印度尼西亚': { en: 'Indonesia' }, '阿根廷': { en: 'Argentina' }, '智利': { en: 'Chile' }, '刚果民主共和国': { en: 'Dem. Rep. Congo' }, '索马里': { en: 'Somalia' }, '肯尼亚': { en: 'Kenya' }, '苏丹': { en: 'Sudan' }, '乍得': { en: 'Chad' }, '海地': { en: 'Haiti' }, '巴哈马': { en: 'Bahamas' }, '福克兰群岛': { en: 'Falkland Is.' }, '挪威': { en: 'Norway' }, '格陵兰': { en: 'Greenland' }, '法属南部领地': { en: 'Fr. S. Antarctic Lands' }, '东帝汶': { en: 'Timor-Leste' }, '南非': { en: 'South Africa' }, '莱索托': { en: 'Lesotho' }, '墨西哥': { en: 'Mexico' }, '乌拉圭': { en: 'Uruguay' }, '玻利维亚': { en: 'Bolivia' }, '秘鲁': { en: 'Peru' }, '哥伦比亚': { en: 'Colombia' }, '巴拿马': { en: 'Panama' }, '哥斯达黎加': { en: 'Costa Rica' }, '尼加拉瓜': { en: 'Nicaragua' }, '洪都拉斯': { en: 'Honduras' }, '萨尔瓦多': { en: 'El Salvador' }, '危地马拉': { en: 'Guatemala' }, '伯利兹': { en: 'Belize' }, '委内瑞拉': { en: 'Venezuela' }, '圭亚那': { en: 'Guyana' }, '苏里南': { en: 'Suriname' }, '厄瓜多尔': { en: 'Ecuador' }, '波多黎各': { en: 'Puerto Rico' }, '牙买加': { en: 'Jamaica' }, '古巴': { en: 'Cuba' }, '津巴布韦': { en: 'Zimbabwe' }, '博茨瓦纳': { en: 'Botswana' }, '纳米比亚': { en: 'Namibia' }, '塞内加尔': { en: 'Senegal' }, '毛里塔尼亚': { en: 'Mauritania' }, '贝宁': { en: 'Benin' }, '尼日尔': { en: 'Niger' }, '尼日利亚': { en: 'Nigeria' }, '喀麦隆': { en: 'Cameroon' }, '多哥': { en: 'Togo' }, '几内亚': { en: 'Guinea' }, '几内亚比绍': { en: 'Guinea-Bissau' }, '塞拉利昂': { en: 'Sierra Leone' }, '刚果共和国': { en: 'Congo' }, '加蓬': { en: 'Gabon' }, '赤道几内亚': { en: 'Eq. Guinea' }, '赞比亚': { en: 'Zambia' }, '马拉维': { en: 'Malawi' }, '莫桑比克': { en: 'Mozambique' }, '斯威士兰': { en: 'eSwatini' }, '以色列': { en: 'Israel' }, '黎巴嫩': { en: 'Lebanon' }, '马达加斯加': { en: 'Madagascar' }, '巴勒斯坦': { en: 'Palestine' }, '冈比亚': { en: 'Gambia' }, '突尼斯': { en: 'Tunisia' }, '约旦': { en: 'Jordan' }, '卡塔尔': { en: 'Qatar' }, '科威特': { en: 'Kuwait' }, '阿曼': { en: 'Oman' }, '瓦努阿图': { en: 'Vanuatu' }, '柬埔寨': { en: 'Cambodia' }, '泰国': { en: 'Thailand' }, '老挝': { en: 'Laos' }, '缅甸': { en: 'Myanmar' }, '越南': { en: 'Vietnam' }, '蒙古': { en: 'Mongolia' }, '孟加拉国': { en: 'Bangladesh' }, '不丹': { en: 'Bhutan' }, '尼泊尔': { en: 'Nepal' }, '巴基斯坦': { en: 'Pakistan' }, '塔吉克斯坦': { en: 'Tajikistan' }, '吉尔吉斯斯坦': { en: 'Kyrgyzstan' }, '土库曼斯坦': { en: 'Turkmenistan' }, '伊朗': { en: 'Iran' }, '叙利亚': { en: 'Syria' }, '亚美尼亚': { en: 'Armenia' }, '瑞典': { en: 'Sweden' }, '白俄罗斯': { en: 'Belarus' }, '乌克兰': { en: 'Ukraine' }, '波兰': { en: 'Poland' }, '匈牙利': { en: 'Hungary' }, '摩尔多瓦': { en: 'Moldova' }, '罗马尼亚': { en: 'Romania' }, '立陶宛': { en: 'Lithuania' }, '拉脱维亚': { en: 'Latvia' }, '爱沙尼亚': { en: 'Estonia' }, '保加利亚': { en: 'Bulgaria' }, '希腊': { en: 'Greece' }, '土耳其': { en: 'Turkey' }, '阿尔巴尼亚': { en: 'Albania' }, '克罗地亚': { en: 'Croatia' }, '卢森堡': { en: 'Luxembourg' }, '比利时': { en: 'Belgium' }, '荷兰': { en: 'Netherlands' }, '葡萄牙': { en: 'Portugal' }, '西班牙': { en: 'Spain' }, '爱尔兰': { en: 'Ireland' }, '新喀里多尼亚': { en: 'New Caledonia' }, '新西兰': { en: 'New Zealand' }, '斯里兰卡': { en: 'Sri Lanka' }, '台湾': { en: 'Taiwan' }, '意大利': { en: 'Italy' }, '丹麦': { en: 'Denmark' }, '冰岛': { en: 'Iceland' }, '阿塞拜疆': { en: 'Azerbaijan' }, '格鲁吉亚': { en: 'Georgia' }, '菲律宾': { en: 'Philippines' }, '马来西亚': { en: 'Malaysia' }, '文莱': { en: 'Brunei' }, '斯洛文尼亚': { en: 'Slovenia' }, '芬兰': { en: 'Finland' }, '斯洛伐克': { en: 'Slovakia' }, '捷克': { en: 'Czechia' }, '厄立特里亚': { en: 'Eritrea' }, '巴拉圭': { en: 'Paraguay' }, '沙特阿拉伯': { en: 'Saudi Arabia' }, '北塞浦路斯': { en: 'N. Cyprus' }, '塞浦路斯': { en: 'Cyprus' }, '摩洛哥': { en: 'Morocco' }, '埃及': { en: 'Egypt' }, '利比亚': { en: 'Libya' }, '埃塞俄比亚': { en: 'Ethiopia' }, '吉布提': { en: 'Djibouti' }, '索马里兰': { en: 'Somaliland' }, '卢旺达': { en: 'Rwanda' }, '波黑': { en: 'Bosnia and Herz.' }, '北马其顿': { en: 'N. Macedonia' }, '塞尔维亚': { en: 'Serbia' }, '黑山': { en: 'Montenegro' }, '特立尼达和多巴哥': { en: 'Trinidad and Tobago' }, '南苏丹': { en: 'S. Sudan' },
  };

  // 省份中心坐标（经度, 纬度），用于地图上定位省份标签
  const PROVINCE_CENTERS = {
    '中国': {
      '北京': {cx:116.4,cy:39.9},'上海': {cx:121.5,cy:31.2},'广东': {cx:113.3,cy:23.1},'浙江': {cx:120.2,cy:29.1},'江苏': {cx:118.8,cy:32.1},'四川': {cx:104.1,cy:30.6},'湖北': {cx:112.3,cy:31.0},'湖南': {cx:111.0,cy:27.6},'河南': {cx:113.7,cy:34.8},'山东': {cx:117.0,cy:36.7},'福建': {cx:117.3,cy:26.1},'安徽': {cx:117.3,cy:31.9},'河北': {cx:115.5,cy:38.0},'陕西': {cx:108.9,cy:34.3},'辽宁': {cx:123.4,cy:41.8},'重庆': {cx:106.6,cy:29.6},'天津': {cx:117.2,cy:39.1},'江西': {cx:115.9,cy:28.7},'广西': {cx:108.3,cy:22.8},'山西': {cx:112.5,cy:37.9},'吉林': {cx:126.6,cy:43.9},'云南': {cx:101.5,cy:25.0},'贵州': {cx:106.7,cy:26.6},'新疆': {cx:87.6,cy:41.8},'内蒙古': {cx:111.7,cy:40.8},'黑龙江': {cx:126.6,cy:46.8},'甘肃': {cx:103.8,cy:36.1},'海南': {cx:109.7,cy:19.2},'宁夏': {cx:106.3,cy:37.3},'青海': {cx:96.8,cy:36.6},'西藏': {cx:88.8,cy:31.5},'台湾': {cx:121.0,cy:23.7},'香港': {cx:114.2,cy:22.3},'澳门': {cx:113.5,cy:22.2}
    },
    '美国': {
      '加利福尼亚': {cx:-119.4,cy:36.7},'德克萨斯': {cx:-98.5,cy:31.0},'纽约': {cx:-75.5,cy:43.0},'佛罗里达': {cx:-81.7,cy:28.6},'伊利诺伊': {cx:-88.9,cy:40.0},'宾夕法尼亚': {cx:-77.8,cy:40.9},'俄亥俄': {cx:-82.8,cy:40.4},'乔治亚': {cx:-83.4,cy:32.6},'北卡罗来纳': {cx:-79.8,cy:35.5},'密歇根': {cx:-84.7,cy:44.3},'新泽西': {cx:-74.7,cy:40.1},'弗吉尼亚': {cx:-79.4,cy:37.5},'华盛顿': {cx:-120.7,cy:47.5},'亚利桑那': {cx:-111.9,cy:34.2},'马萨诸塞': {cx:-71.8,cy:42.4},'田纳西': {cx:-86.3,cy:35.8},'印第安纳': {cx:-86.3,cy:39.8},'密苏里': {cx:-92.6,cy:38.6},'马里兰': {cx:-76.6,cy:39.0},'威斯康星': {cx:-89.6,cy:44.5},'科罗拉多': {cx:-105.5,cy:39.0},'明尼苏达': {cx:-94.3,cy:46.3},'南卡罗来纳': {cx:-80.9,cy:34.0},'阿拉巴马': {cx:-86.8,cy:32.8},'路易斯安那': {cx:-92.0,cy:31.0},'肯塔基': {cx:-85.3,cy:37.8},'俄勒冈': {cx:-120.6,cy:44.0},'俄克拉荷马': {cx:-97.5,cy:35.5},'康涅狄格': {cx:-72.7,cy:41.6},'犹他': {cx:-111.9,cy:39.3},'内华达': {cx:-117.1,cy:39.9},'阿肯色': {cx:-92.4,cy:34.7},'密西西比': {cx:-89.7,cy:32.8},'堪萨斯': {cx:-98.3,cy:38.5},'新墨西哥': {cx:-106.1,cy:34.4},'内布拉斯加': {cx:-99.8,cy:41.5},'西弗吉尼亚': {cx:-80.6,cy:38.6},'爱达荷': {cx:-114.5,cy:44.4},'夏威夷': {cx:-157.0,cy:21.3},'新罕布什尔': {cx:-71.6,cy:43.7},'缅因': {cx:-69.0,cy:45.4},'蒙大拿': {cx:-109.6,cy:47.0},'罗德岛': {cx:-71.5,cy:41.7},'特拉华': {cx:-75.5,cy:39.0},'南达科他': {cx:-100.2,cy:44.4},'北达科他': {cx:-100.5,cy:47.5},'阿拉斯加': {cx:-153.4,cy:64.2},'佛蒙特': {cx:-72.6,cy:44.0},'怀俄明': {cx:-107.6,cy:43.0}
    },
    '日本': {
      '东京': {cx:139.7,cy:35.7},'大阪': {cx:135.5,cy:34.7},'京都': {cx:135.8,cy:35.0},'北海道': {cx:142.9,cy:43.1},'福冈': {cx:130.4,cy:33.6},'神奈川': {cx:139.4,cy:35.4},'爱知': {cx:137.0,cy:35.2},'埼玉': {cx:139.4,cy:35.9},'千叶': {cx:140.1,cy:35.6},'兵库': {cx:135.0,cy:34.7},'静冈': {cx:138.4,cy:34.9},'广岛': {cx:132.5,cy:34.4},'茨城': {cx:140.4,cy:36.3},'新潟': {cx:139.0,cy:37.9},'宫城': {cx:140.9,cy:38.3},'长野': {cx:138.0,cy:36.0},'福岛': {cx:140.5,cy:37.8},'冈山': {cx:133.9,cy:34.7},'群马': {cx:139.1,cy:36.4},'熊本': {cx:130.7,cy:32.8},'岐阜': {cx:136.9,cy:35.4},'鹿儿岛': {cx:130.6,cy:31.6},'山口': {cx:131.5,cy:34.2},'三重': {cx:136.2,cy:34.7},'爱媛': {cx:133.0,cy:33.8},'奈良': {cx:135.8,cy:34.7},'青森': {cx:140.7,cy:40.8},'岩手': {cx:141.1,cy:39.7},'大分': {cx:131.6,cy:33.2},'石川': {cx:136.6,cy:36.6},'山形': {cx:140.1,cy:38.2},'富山': {cx:137.2,cy:36.7},'和歌山': {cx:135.2,cy:34.2},'香川': {cx:134.0,cy:34.3},'佐贺': {cx:130.3,cy:33.3},'山梨': {cx:138.6,cy:35.7},'冲绳': {cx:127.7,cy:26.3},'福井': {cx:136.2,cy:36.1},'德岛': {cx:134.1,cy:34.1},'高知': {cx:133.5,cy:33.6},'岛根': {cx:132.1,cy:35.4},'鸟取': {cx:134.2,cy:35.5}
    },
    '英国': {
      '英格兰': {cx:-1.5,cy:52.5},'苏格兰': {cx:-3.9,cy:56.5},'威尔士': {cx:-3.3,cy:52.3},'北爱尔兰': {cx:-6.5,cy:54.6},'伦敦': {cx:-0.1,cy:51.5},'曼彻斯特': {cx:-2.2,cy:53.5},'伯明翰': {cx:-1.9,cy:52.5},'利物浦': {cx:-2.9,cy:53.4},'布里斯托': {cx:-2.6,cy:51.5},'利兹': {cx:-1.5,cy:53.8},'谢菲尔德': {cx:-1.5,cy:53.4},'纽卡斯尔': {cx:-1.6,cy:54.9},'诺丁汉': {cx:-1.2,cy:52.9},'莱斯特': {cx:-1.1,cy:52.6},'考文垂': {cx:-1.5,cy:52.4},'布拉德福德': {cx:-1.8,cy:53.8},'贝尔法斯特': {cx:-5.9,cy:54.6},'格拉斯哥': {cx:-4.3,cy:55.9},'爱丁堡': {cx:-3.2,cy:55.9},'阿伯丁': {cx:-2.1,cy:57.2},'加的夫': {cx:-3.2,cy:51.5},'斯旺西': {cx:-3.9,cy:51.6}
    },
    '德国': {
      '巴伐利亚': {cx:11.5,cy:48.8},'北莱茵-威斯特法伦': {cx:7.6,cy:51.4},'巴登-符腾堡': {cx:9.2,cy:48.8},'下萨克森': {cx:9.8,cy:52.8},'黑森': {cx:9.0,cy:50.6},'萨克森': {cx:13.4,cy:51.0},'莱茵兰-普法尔茨': {cx:7.0,cy:50.0},'柏林': {cx:13.4,cy:52.5},'石勒苏益格-荷尔斯泰因': {cx:10.0,cy:54.2},'勃兰登堡': {cx:14.0,cy:52.4},'萨克森-安哈尔特': {cx:11.5,cy:52.0},'图林根': {cx:10.9,cy:50.9},'梅克伦堡-前波美拉尼亚': {cx:12.4,cy:53.6},'汉堡': {cx:10.0,cy:53.6},'萨尔': {cx:6.9,cy:49.4},'不来梅': {cx:8.8,cy:53.1}
    },
    '法国': {
      '法兰西岛': {cx:2.3,cy:48.9},'奥弗涅-罗讷-阿尔卑斯': {cx:4.0,cy:45.5},'新阿基坦': {cx:0.0,cy:45.0},'奥克西塔尼': {cx:2.0,cy:43.5},'上法兰西': {cx:2.8,cy:49.5},'普罗旺斯-阿尔卑斯-蔚蓝海岸': {cx:6.0,cy:43.9},'大东部': {cx:6.5,cy:48.5},'勃艮第-弗朗什-孔泰': {cx:5.0,cy:47.0},'诺曼底': {cx:0.0,cy:49.0},'布列塔尼': {cx:-3.0,cy:48.0},'中央-卢瓦尔河谷': {cx:1.5,cy:47.5},'卢瓦尔河地区': {cx:-1.0,cy:47.2},'科西嘉': {cx:9.4,cy:42.1}
    },
    '印度': {
      '马哈拉施特拉': {cx:75.7,cy:19.1},'北方邦': {cx:80.9,cy:26.8},'西孟加拉': {cx:87.9,cy:23.6},'泰米尔纳德': {cx:78.7,cy:11.1},'卡纳塔克': {cx:76.3,cy:15.0},'古吉拉特': {cx:71.6,cy:22.3},'拉贾斯坦': {cx:74.6,cy:26.5},'安得拉': {cx:79.4,cy:16.3},'特伦甘纳': {cx:79.0,cy:18.0},'中央邦': {cx:78.6,cy:23.5},'喀拉拉': {cx:76.3,cy:10.9},'德里': {cx:77.2,cy:28.6},'旁遮普': {cx:75.9,cy:31.1},'哈里亚纳': {cx:76.1,cy:29.1},'比哈尔': {cx:85.6,cy:25.6},'奥里萨': {cx:85.1,cy:20.5},'果阿': {cx:74.1,cy:15.3}
    },
    '巴西': {
      '圣保罗': {cx:-46.6,cy:-23.6},'里约热内卢': {cx:-43.2,cy:-22.9},'米纳斯吉拉斯': {cx:-44.6,cy:-18.5},'巴伊亚': {cx:-42.0,cy:-12.5},'巴拉那': {cx:-51.5,cy:-25.0},'南里奥格兰德': {cx:-53.0,cy:-30.0},'伯南布哥': {cx:-35.5,cy:-8.5},'塞阿拉': {cx:-39.5,cy:-5.0},'帕拉': {cx:-51.0,cy:-5.0},'马拉尼昂': {cx:-44.8,cy:-5.0},'圣卡塔琳娜': {cx:-49.0,cy:-27.3},'戈亚斯': {cx:-49.0,cy:-15.9},'联邦区': {cx:-47.9,cy:-15.8},'亚马逊': {cx:-65.0,cy:-3.0}
    },
    '俄罗斯': {
      '莫斯科': {cx:37.6,cy:55.8},'圣彼得堡': {cx:30.3,cy:60.0},'新西伯利亚': {cx:83.0,cy:55.0},'斯维尔德洛夫斯克': {cx:60.6,cy:56.8},'下诺夫哥罗德': {cx:44.0,cy:56.3},'萨马拉': {cx:50.2,cy:53.2},'车里雅宾斯克': {cx:61.4,cy:55.2},'鞑靼斯坦': {cx:49.1,cy:55.8},'罗斯托夫': {cx:39.7,cy:47.2},'克拉斯诺达尔': {cx:39.0,cy:45.0},'彼尔姆': {cx:56.2,cy:58.0},'沃罗涅日': {cx:39.2,cy:51.7},'秋明': {cx:69.0,cy:57.2},'伊尔库茨克': {cx:104.3,cy:52.3},'克拉斯诺亚尔斯克': {cx:92.9,cy:56.0}
    },
    '澳大利亚': {
      '新南威尔士': {cx:149.1,cy:-33.5},'维多利亚': {cx:144.9,cy:-37.0},'昆士兰': {cx:145.0,cy:-20.0},'西澳大利亚': {cx:122.0,cy:-25.0},'南澳大利亚': {cx:135.0,cy:-34.0},'塔斯马尼亚': {cx:146.6,cy:-42.0},'首都领地': {cx:149.1,cy:-35.3},'北领地': {cx:133.5,cy:-20.0}
    },
    '加拿大': {
      '安大略': {cx:-84.3,cy:49.3},'魁北克': {cx:-72.0,cy:53.0},'不列颠哥伦比亚': {cx:-125.0,cy:54.0},'艾伯塔': {cx:-114.0,cy:55.0},'曼尼托巴': {cx:-97.0,cy:55.0},'萨斯喀彻温': {cx:-105.0,cy:54.0},'新斯科舍': {cx:-63.0,cy:45.0},'新不伦瑞克': {cx:-66.5,cy:46.5}
    },
    '韩国': {
      '首尔': {cx:127.0,cy:37.6},'釜山': {cx:129.0,cy:35.2},'仁川': {cx:126.7,cy:37.5},'大邱': {cx:128.6,cy:35.9},'大田': {cx:127.4,cy:36.3},'光州': {cx:127.0,cy:35.2},'蔚山': {cx:129.3,cy:35.5},'世宗': {cx:127.3,cy:36.5},'京畿': {cx:127.0,cy:37.3},'江原': {cx:128.2,cy:37.5},'忠清北': {cx:127.7,cy:36.6},'忠清南': {cx:126.8,cy:36.6},'全罗北': {cx:127.1,cy:35.8},'全罗南': {cx:126.7,cy:34.9},'庆尚北': {cx:128.6,cy:36.3},'庆尚南': {cx:128.2,cy:35.2},'济州': {cx:126.5,cy:33.4}
    }
  };

  // 获取省份列表（含坐标）
  function getProvinces(countryName) {
    const provNames = REGION_DATA[countryName];
    if (!provNames) return [];
    const centers = PROVINCE_CENTERS[countryName] || {};
    return provNames.map(name => ({
      name,
      cx: centers[name] ? centers[name].cx : 0,
      cy: centers[name] ? centers[name].cy : 0
    }));
  }

  // 翻译地区名称的辅助函数
  function tr(name) {
    const lang = document.body.dataset.lang || 'zh';
    if (lang === 'zh') return name;
    const map = REGION_I18N[name];
    return (map && map[lang]) || name;
  }

  // ==================== NLP 关键词提取引擎 ====================
  // 基于 TF-IDF + TextRank 的无词典多语言关键词提取

  // --- 通用停用词（精简，仅过滤语法功能词） ---
  const STOP_WORDS = new Set([
    // 中文
    '的','了','在','是','我','有','和','就','不','人','都','一','上','也','很','到','说','要','去','你','会','着','看','好','这','那','个','之','为','与','及','等','从','而','或','但','把','让','向','被','将','给','对','于','得','地','能','可以','应该','必须','想','没','还','又','再','更','太','最','吗','呢','吧','啊','哦','嗯','却','已','正在','曾经','现在','什么','怎么','为什么','哪里','谁','几','多','少','非常','已经','来','过','下','即','便','则','乃','且','若','如','使','仍','比','跟','同','像','似','般','样','么','唉','嘿','哎','哟','哇','哈','呵','哼','它','她','他','它们','她们','他们','自己','我们','你们','别人','大家','时候','如果','因为','所以','虽然','但是','然后','这样','那样','只是','不过','然而','因此','于是','或者','以及','并且','不但','不仅','即使','无论','只要','只有','才','既然','假如','要么','不是','就是',
    // 英文
    'the','a','an','is','are','was','were','be','been','being','have','has','had','do','does','did','will','would','could','should','may','might','shall','can','to','of','in','for','on','with','at','by','from','as','into','through','during','before','after','above','below','between','out','off','over','under','again','then','once','here','there','when','where','why','how','all','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','just','because','but','and','or','if','while','about','against','up','down','it','its','this','that','these','those','i','me','my','myself','we','our','ours','you','your','yours','he','him','his','she','her','hers','they','them','their','what','which','who','whom','am',
    // 日文
    'の','に','は','を','た','が','で','て','と','し','れ','さ','ある','いる','も','する','から','ない','こと','もの','それ','な','れる','よう','この','ため','その','あの','まで','だけ','でも','なら','より','など','へ','か','や','わ','ね','よ','だ','です','ます','でした','では','しかし','また','そして','ところで','だから','なので','つまり','すなわち','という','ように','ために','について','において','とても','かなり','少し','ちょっと','たくさん',
    // 韩文
    '의','에','는','이','가','을','를','하고','도','서','부터','까지','만','으로','해서','지만','그리고','그래서','그러나','그런데','때문에','그렇게','이렇게','저렇게','어떻게','왜','무엇','어디','누가','언제','몇','자신','우리','너','그',
    // 法语
    'le','la','les','de','du','des','un','une','et','en','est','que','qui','dans','ce','il','elle','son','sa','ses','au','aux','avec','pour','par','sur','ne','pas','plus','ou','mais','si','comme','tout','tous','toute','toutes','mon','ma','mes','ton','ta','tes','notre','votre','leur','je','tu','nous','vous','ils','elles','se','sont','été','avoir','être','fait',
    // 德语
    'der','die','das','den','dem','des','ein','eine','und','ist','von','zu','in','an','auf','für','mit','nicht','ich','du','er','sie','es','wir','ihr','sein','ihr','mein','dein','sein','unser','euer','ihr','auch','noch','schon','aber','oder','wenn','dann',
    // 西班牙语
    'el','la','los','las','de','en','y','que','por','con','para','un','una','no','es','se','su','del','al','lo','como','pero','más','este','esta','eso','mi','tu','nos','les',
    // 葡萄牙语
    'o','a','os','as','de','em','e','que','por','com','para','um','uma','não','se','seu','sua','do','da','dos','das','no','na','nos','mas','como','este','esta','isso','meu','teu',
    // 俄语
    'и','в','на','с','что','это','он','она','они','не','я','мы','ты','вы','его','её','их','к','у','по','за','из','от','до','для','о','об','а','но','если','так','как','же','бы','уже','ещё','тоже','также','или','очень','мне','тебе','ему','ей','нам','вам','им'
  ]);

  // --- 梦境领域词典（用于 TF-IDF 加权） ---
  const DREAM_VOCABULARY = new Set([
    '梦','噩梦','睡眠','醒来','夜晚','黑暗','光明','影子','镜子','水','火','土','风','雨','雪','冰','风暴','雷电','太阳','月亮','星星','天空','云','海','河','湖','山','森林','树','花','花园','沙漠','岛','洞穴','桥','路','门','窗','墙','楼梯','城堡','塔','寺庙','宫殿','房子','房间','床','刀','剑','盾','皇冠','戒指','钥匙','书','信','地图','宝藏','金','银','水晶','钻石','珍珠','宝石','石头','沙','烟','火焰','洪水','地震','火山','龙','蛇','蜘蛛','狼','熊','狮子','虎','象','马','鹿','兔','狐','鲸','海豚','鲨鱼','鱼','蝴蝶','猫','狗','鸟','鹰','凤凰','乌鸦','天鹅','孔雀','青蛙','龟','人','孩子','老人','陌生人','战士','国王','女王','王子','公主','巫师','女巫','鬼','天使','恶魔','怪物','外星人','神','灵魂','声音','耳语','尖叫','哭','笑','歌','音乐','钟','鼓','舞','飞','落','爬','游泳','潜水','漂浮','沉','跑','走','跳','躲','追','逃','陷阱','笼','锁链','血','泪','呼吸','心跳','痛','伤','出生','死亡','重生','变身','面具','翅膀','角','尾巴','爪','牙','眼睛','嘴巴','手','脚','头','脸','身体','骨头','皮肤','头发','羽毛','鳞','火车','汽车','飞机','船','图书馆','学校','医院','监狱','市场','餐厅','酒店','博物馆','剧院','公园','海滩','悬崖','峡谷','瀑布','泉','喷泉','池','沼泽','丛林','草原','山顶','火山口','深渊','虚空','回声','沉默','噪音','食物','面包','蛋糕','水果','苹果','葡萄','坚果','种子','米','麦','牛奶','蜂蜜','酒','茶','咖啡','汤','肉','蛋','奶酪','糖','盐','颜色','红','蓝','绿','黄','白','黑','紫','橙','粉','棕','灰','铜','铁','钢','玻璃','木','砖','大理石','灰烬','炭','油','蜡','宇宙','行星','银河','黑洞','虫洞','时间旅行','过去','未来','预知','透视','念力','心灵感应','共时性','梧桐','三叉戟','珊瑚','鱼群','深海','雪山','松树','嚎叫','归属感','发光','沉没','水晶宫','窒息','自由','云层','紫色','光芒','平静','力量','古老','城市','漫步','金色','街道',
    'dream','nightmare','sleep','wake','night','darkness','light','shadow','mirror','water','fire','earth','wind','rain','snow','ice','storm','thunder','lightning','sun','moon','star','sky','cloud','ocean','river','lake','mountain','forest','tree','flower','garden','desert','island','cave','bridge','road','path','door','window','wall','stairs','castle','tower','temple','church','palace','house','room','bed','knife','sword','shield','crown','ring','key','book','letter','map','treasure','gold','silver','crystal','diamond','pearl','gem','stone','rock','sand','dust','smoke','flame','explosion','flood','earthquake','volcano','tornado','tsunami','eclipse','comet','meteor','rainbow','aurora','fog','mist','bird','eagle','owl','crow','raven','dove','swan','peacock','phoenix','dragon','serpent','snake','spider','scorpion','wolf','bear','lion','tiger','elephant','horse','deer','rabbit','fox','whale','dolphin','shark','fish','butterfly','bee','frog','turtle','cat','dog','monkey','human','child','baby','elder','stranger','warrior','king','queen','prince','princess','wizard','witch','ghost','angel','demon','monster','alien','god','goddess','spirit','soul','figure','presence','voice','whisper','scream','cry','laugh','song','music','bell','horn','drum','dance','flight','fall','climb','swim','dive','float','sink','run','walk','jump','crawl','hide','seek','chase','escape','trap','cage','chain','blood','tear','breath','heartbeat','pulse','pain','wound','scar','birth','death','rebirth','transformation','mask','wings','horns','tail','claws','fangs','teeth','eyes','mouth','hand','foot','head','face','body','bone','skin','hair','feather','scale','train','car','plane','ship','boat','library','school','hospital','prison','market','restaurant','hotel','museum','theater','park','beach','cliff','valley','waterfall','spring','fountain','pool','pond','swamp','jungle','meadow','prairie','summit','peak','crater','abyss','void','emptiness','echo','silence','noise','sound','melody','harmony','rhythm','food','bread','cake','fruit','apple','grape','nut','seed','grain','rice','wheat','milk','honey','wine','tea','coffee','soup','meat','egg','cheese','butter','sugar','salt','color','red','blue','green','yellow','white','black','purple','orange','pink','brown','gray','bronze','copper','iron','steel','glass','wood','stone','clay','brick','marble','granite','ash','ember','charcoal','coal','oil','wax','planet','universe','galaxy','nebula','black','hole','wormhole','time','travel','past','future','precognition','clairvoyance','telekinesis','telepathy','synchronicity','information','whirlpool','underground','massive','glowing','crystals','secret','golden','fingertip','tunnel','masks','strangers','directions','terror','awe','flying','clouds','parted','revealing','giant','watching','eye','purple','plants','glowed','mouth','communicated','telling','secrets','universe','never','ending','filled','wearing','darkness','heard','whispers','kangaroo','uluru','shooting','stars','hummed','energy','rainbow','serpent','emerged','rock','speaking','ancient','wisdom','endless','blue','sand','flow','forming','pulled','cave','transmit',
    '夢','悪夢','眠り','目覚め','夜','闇','光','影','鏡','水','火','土','風','雨','雪','氷','嵐','雷','太陽','月','星','空','雲','海','川','湖','山','森','木','花','庭','砂漠','島','洞窟','橋','道','扉','窓','城','塔','寺','宮殿','家','部屋','剣','盾','冠','指輪','鍵','本','手紙','地図','宝','金','銀','水晶','真珠','宝石','石','岩','砂','煙','炎','洪水','地震','火山','竜巻','津波','虹','オーロラ','霧','鳥','鷹','フクロウ','カラス','鳩','白鳥','孔雀','凤凰','龍','蛇','蜘蛛','狼','熊','獅子','虎','象','馬','鹿','兎','狐','鯨','イルカ','サメ','魚','蝶','猫','犬','猿','人','子供','老人','戦士','王','女王','王子','姫','魔法使い','魔女','幽霊','天使','悪魔','怪物','宇宙人','神','精霊','魂','声','ささやき','叫び','涙','笑い','歌','音楽','鐘','踊り','飛行','落下','泳ぐ','潜る','浮く','沈む','走る','歩く','隠れる','追う','逃げる','罠','檻','鎖','血','汗','呼吸','心臓','痛み','傷','誕生','死','変身','仮面','衣装','マント','翼','角','尾','爪','牙','目','口','手','足','頭','顔','体','骨','肌','髪','羽','鱗','列車','車','飛行機','船','図書館','学校','病院','市場','レストラン','ホテル','博物館','劇場','公園','海岸','崖','谷','滝','泉','噴水','池','沼','ジャングル','野原','草原','頂','峰','火口','深淵','空虚','共鳴','沈黙','騒音','響き','リズム','食べ物','果物','種','米','麦','牛乳','蜂蜜','酒','紅茶','コーヒー','肉','卵','チーズ','砂糖','塩','色','赤','青','緑','黄','白','黒','紫','オレンジ','ピンク','茶','灰','銅','鉄','鋼','ガラス','木','レンガ','大理石','花崗岩','灰','炭','油','蝋','数字','円','四角','三角','十字','星','心','矢印','コンパス','地球儀','時計','カレンダー','電話','コンピューター','画面','カメラ','テレビ','ラジオ','ランプ','蝋燭','松明','スイッチ','ボタン','歯車','エンジン','ロボット','宇宙','惑星','銀河','星雲','ブラックホール','ワームホール','タイムトラベル','過去','未来','予知','透視','念力','テレパシー','共時性','洪水','街','水面','沈ま','透明','水下','世界','水晶','宮殿','水底','浮かび上がり','扉','ゆっくり','開い','桜','林','花びら','舞い落ちる','着物','老婦人','鏡','差し出し','未来','顔','親しみ'
  ]);

  // --- 语言检测 ---
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
    if (/à|â|é|è|ê|ë|î|ï|ô|ù|û|ü|ç|œ|æ/.test(text)) return 'fr';
    if (/ä|ö|ü|ß/.test(text)) return 'de';
    if (/ñ|¿|¡|á|í|ó|ú|é|ü/.test(text)) return 'es';
    if (/ã|õ|ç|á|é|í|ó|ú|â|ê|ô/.test(text)) return 'pt';
    if (/а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|ю|я/.test(text)) return 'ru';
    return 'en';
  }

  // --- 分词器 ---
  function tokenize(text, lang) {
    const tokens = [];
    if (lang === 'zh' || lang === 'ja' || lang === 'ko') {
      const sentences = text.split(/[，。！？、；：""''（）\[\]【】\n\r\t.!?;:()\[\]{}"'~,\/\\]+/).filter(s => s.trim());
      for (const sentence of sentences) {
        // 先按停用字拆分为有意义的词段，再对每个词段做 N-gram
        const segments = [];
        let seg = '';
        for (const ch of sentence) {
          if (STOP_WORDS.has(ch)) {
            if (seg.length >= 2) segments.push(seg);
            seg = '';
          } else {
            seg += ch;
          }
        }
        if (seg.length >= 2) segments.push(seg);

        for (const segment of segments) {
          for (let len = Math.min(4, segment.length); len >= 2; len--) {
            for (let i = 0; i <= segment.length - len; i++) {
              const w = segment.slice(i, i + len);
              const hasJaParticle = /[のにがでてとはを]+/.test(w);
              const hasPunct = /[。，、！？；：\.\,\!\?\;\:]$/.test(w);
              if (w.length > 0 && !STOP_WORDS.has(w) && !hasJaParticle && !hasPunct) {
                tokens.push(w);
              }
            }
          }
        }
      }
    } else {
      const words = text.toLowerCase()
        .replace(/[^a-zA-Zà-ÿÀ-ÿа-яА-ЯёЁ\s'-]/g, ' ')
        .split(/\s+/)
        .filter(w => w.length > 2 && !STOP_WORDS.has(w));
      tokens.push(...words);
    }
    return tokens;
  }

  // --- TF-IDF 计算 ---
  function computeTFIDF(tokens) {
    const tf = {};
    tokens.forEach(w => { tf[w] = (tf[w] || 0) + 1; });
    const totalTerms = tokens.length;
    const idf = {};
    for (const term in tf) {
      idf[term] = DREAM_VOCABULARY.has(term) ? 1.0 : 2.5;
    }
    const scores = {};
    for (const term in tf) {
      scores[term] = (tf[term] / totalTerms) * idf[term];
    }
    return scores;
  }

  // --- TextRank 图排序 ---
  function textRank(tokens, windowSize) {
    windowSize = windowSize || 4;
    const graph = {};
    const uniqueTokens = [...new Set(tokens)];
    for (let i = 0; i < tokens.length; i++) {
      const node = tokens[i];
      if (!graph[node]) graph[node] = {};
      for (let j = i + 1; j < Math.min(i + windowSize, tokens.length); j++) {
        const neighbor = tokens[j];
        if (neighbor !== node) {
          graph[node][neighbor] = (graph[node][neighbor] || 0) + 1;
        }
      }
    }
    const scores = {};
    const d = 0.85;
    const maxIter = 20;
    uniqueTokens.forEach(t => { scores[t] = 1 / uniqueTokens.length; });
    for (let iter = 0; iter < maxIter; iter++) {
      const newScores = {};
      for (const node of uniqueTokens) {
        let rankSum = 0;
        const neighbors = graph[node] || {};
        const outDegree = Object.values(neighbors).reduce((a, b) => a + b, 0);
        if (outDegree > 0) {
          for (const [neighbor, weight] of Object.entries(neighbors)) {
            const neighborOut = Object.values(graph[neighbor] || {}).reduce((a, b) => a + b, 0);
            if (neighborOut > 0) {
              rankSum += (scores[neighbor] / neighborOut) * weight;
            }
          }
        }
        newScores[node] = (1 - d) / uniqueTokens.length + d * rankSum;
      }
      const sum = Object.values(newScores).reduce((a, b) => a + b, 0);
      if (sum > 0) {
        for (const node of uniqueTokens) {
          scores[node] = newScores[node] / sum;
        }
      }
    }
    return scores;
  }

  // --- 统一关键词提取入口 ---
  function extractKeywords(text) {
    if (!text) return [];
    const lang = detectLanguage(text);
    const tokens = tokenize(text, lang);
    if (tokens.length === 0) {
      // 文本太短无法分词时，将整段文本按逗号/顿号分割作为关键词
      const fallback = text.split(/[,，、；;|\s]+/).map(s => s.trim()).filter(s => s.length > 0);
      return fallback.map(name => ({ name, value: 1, lang }));
    }
    const tfidfScores = computeTFIDF(tokens);
    const trScores = textRank(tokens, 4);
    const combined = {};
    for (const term of Object.keys(tfidfScores)) {
      const tfidf = tfidfScores[term] || 0;
      const tr = trScores[term] || 0;
      const maxTfidf = Math.max(...Object.values(tfidfScores));
      const maxTr = Math.max(...Object.values(trScores));
      const normTfidf = maxTfidf > 0 ? tfidf / maxTfidf : 0;
      const normTr = maxTr > 0 ? tr / maxTr : 0;
      const domainBoost = DREAM_VOCABULARY.has(term) ? 1.3 : 1.0;
      combined[term] = (normTfidf * 0.4 + normTr * 0.6) * domainBoost;
    }
    return Object.entries(combined)
      .map(([name, score]) => ({ name, value: score, lang }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 20);
  }

  // ==================== 初始化数据 ====================
  const KEYWORD_VERSION = 6; // 关键词算法版本，更新后强制重新计算
  async function initDemoData() {
    // 如果使用 Supabase，先从远程加载
    if (supabase) {
      await DB.loadDreams();
    }
    // 检查关键词算法版本，版本不匹配则重新计算所有梦境的关键词（包括 Supabase 加载的）
    const savedVersion = parseInt(localStorage.getItem('ds_kv') || '0');
    if (savedVersion !== KEYWORD_VERSION && DB.dreams.length > 0) {
      DB.dreams.forEach(d => { d.keywords = extractKeywords(d.text); });
      DB.saveDreams();
      localStorage.setItem('ds_kv', String(KEYWORD_VERSION));
    }
    if (DB.dreams.length > 0) return; // 有数据则跳过 demo
    const demoDreams = [
      { id: Date.now()-100000, text: '我梦见自己在一座古老的城市中漫步，街道两旁是高大的梧桐树，树叶在风中沙沙作响。突然天空变成了紫色，一只巨大的凤凰从云层中飞出，它的羽毛闪烁着金色的光芒。我感到一种莫名的平静和力量。', country: '中国', province: '北京', date: '2026-06-10', author: '匿名', userId: null, keywords: [{name:'凤凰',value:2},{name:'天空',value:2},{name:'城市',value:1},{name:'紫色',value:1},{name:'光芒',value:1}], lang: 'zh' },
      { id: Date.now()-90000, text: '梦见自己在深海中游泳，周围是发光的珊瑚和奇异的鱼群。水压让我感到窒息，但我却能自由呼吸。远处有一座沉没的宫殿，门口站着一个手持三叉戟的人。', country: '中国', province: '上海', date: '2026-06-11', author: '匿名', userId: null, keywords: [{name:'深海',value:2},{name:'宫殿',value:1},{name:'珊瑚',value:1},{name:'鱼群',value:1},{name:'游泳',value:1}], lang: 'zh' },
      { id: Date.now()-80000, text: 'I dreamed of standing in an endless desert. The sun was blue. Sand began to flow, forming a giant whirlpool. I was pulled underground into a massive cave filled with glowing crystals that seemed to transmit information.', country: '美国', province: '加利福尼亚', date: '2026-06-09', author: 'Dreamer_01', userId: 'demo1', keywords: [{name:'desert',value:2},{name:'sun',value:2},{name:'cave',value:2},{name:'crystal',value:1},{name:'sand',value:1},{name:'whirlpool',value:1}], lang: 'en' },
      { id: Date.now()-70000, text: '梦见自己变成了一只狼，在雪山上奔跑。月亮是红色的，空气中弥漫着松树的香气。我听到远处有同类的嚎叫，感到一种强烈的归属感和自由。', country: '中国', province: '四川', date: '2026-06-12', author: '匿名', userId: null, keywords: [{name:'狼',value:2},{name:'雪山',value:2},{name:'月亮',value:1},{name:'奔跑',value:1},{name:'自由',value:1}], lang: 'zh' },
      { id: Date.now()-60000, text: 'I was in a giant library with shelves reaching to the sky. Every book was glowing. When I opened one, the words flew out and turned into butterflies. A golden butterfly landed on my fingertip and whispered a secret.', country: '英国', province: '伦敦', date: '2026-06-08', author: 'BookWorm', userId: 'demo2', keywords: [{name:'library',value:2},{name:'butterfly',value:2},{name:'book',value:2},{name:'secret',value:1},{name:'gold',value:1}], lang: 'en' },
      { id: Date.now()-50000, text: '夢の中で洪水が街を襲ったが、私は水面に立って沈まなかった。水は透明で、水下の世界が見えた。魚が私のそばを泳ぎ、水晶の宮殿が水底から浮かび上がり、扉がゆっくりと開いた。', country: '日本', province: '東京', date: '2026-06-11', author: '匿名', userId: null, keywords: [{name:'洪水',value:2},{name:'宮殿',value:2},{name:'水晶',value:1},{name:'魚',value:1},{name:'水',value:1}], lang: 'ja' },
      { id: Date.now()-40000, text: '桜の林の中にいる夢を見た。花びらが雪のように舞い落ちる。着物を着た老婦人が鏡を差し出した。鏡の中の私ではなかった。見知らぬが親しみのある顔だった。彼女は「これは未来のあなたです」と言った。', country: '日本', province: '京都', date: '2026-06-12', author: 'SakuraDream', userId: 'demo3', keywords: [{name:'桜',value:2},{name:'鏡',value:2},{name:'未来',value:1},{name:'花びら',value:1},{name:'雪',value:1}], lang: 'ja' },
      { id: Date.now()-30000, text: 'In my dream I was flying above the clouds. Below me was a vast green forest. Suddenly the clouds parted, revealing a giant eye watching me. I felt both terror and awe, then I woke up.', country: '中国', province: '浙江', date: '2026-06-13', author: '匿名', userId: null, keywords: [{name:'cloud',value:2},{name:'forest',value:2},{name:'flying',value:1},{name:'eye',value:1},{name:'terror',value:1}], lang: 'en' },
      { id: Date.now()-20000, text: 'I dreamed I was on a strange planet with three suns in the sky. The ground was purple and plants glowed. I met an alien with no mouth who communicated through telepathy, telling me secrets about the universe.', country: '美国', province: '纽约', date: '2026-06-10', author: 'StarGazer', userId: 'demo4', keywords: [{name:'planet',value:2},{name:'sun',value:2},{name:'alien',value:2},{name:'universe',value:1},{name:'telepathy',value:1}], lang: 'en' },
      { id: Date.now()-10000, text: 'I dreamed I was on a never-ending train filled with strangers wearing masks. When I tried to remove a mask, the train entered a tunnel. In the darkness I heard whispers from all directions.', country: '德国', province: '柏林', date: '2026-06-12', author: '匿名', userId: null, keywords: [{name:'train',value:2},{name:'mask',value:2},{name:'tunnel',value:1},{name:'darkness',value:1},{name:'whisper',value:1}], lang: 'en' },
      { id: Date.now()-5000, text: 'J\'ai rêvé que je marchais dans un labyrinthe de glace. Les murs brillaient comme des diamants. Au centre, une fontaine de lumière m\'appelait. Je me suis réveillé en transpirant.', country: '法国', province: '巴黎', date: '2026-06-11', author: 'Rêveur', userId: null, keywords: [{name:'labyrinthe',value:2},{name:'glace',value:2},{name:'lumière',value:2},{name:'diamant',value:1},{name:'fontaine',value:1}], lang: 'fr' },
      { id: Date.now()-4000, text: 'Ich träumte von einem fliegenden Schiff über einem schwarzen Ozean. Die Sterne bildeten eine Spirale. Ein riesiges Auge öffnete sich im Wasser und starrte mich an.', country: '德国', province: '慕尼黑', date: '2026-06-13', author: 'Träumer', userId: null, keywords: [{name:'Ozean',value:2},{name:'Stern',value:2},{name:'Schiff',value:1},{name:'Auge',value:1},{name:'Spirale',value:1}], lang: 'de' },
      { id: Date.now()-3000, text: 'Я видел во сне огромного медведя, который танцевал под северным сиянием. Снег падал вверх, а деревья пели древние песни. Я почувствовал глубокий покой.', country: '俄罗斯', province: '莫斯科', date: '2026-06-10', author: 'Сонник', userId: null, keywords: [{name:'медведь',value:2},{name:'сияние',value:2},{name:'снег',value:1},{name:'дерево',value:1},{name:'покой',value:1}], lang: 'ru' },
      { id: Date.now()-2000, text: 'Sonhava que estava em uma floresta amazônica. Árvores gigantes formavam uma catedral viva. Borboletas luminosas me guiavam até um rio de cristal.', country: '巴西', province: '圣保罗', date: '2026-06-12', author: 'Sonhador', userId: null, keywords: [{name:'floresta',value:2},{name:'borboleta',value:2},{name:'rio',value:1},{name:'cristal',value:1},{name:'árvore',value:1}], lang: 'pt' },
      { id: Date.now()-1500, text: '꿈에서 거대한 용이 하늘을 날고 있었다. 비가 내리지 않는데 무지개가 떠 있었다. 용이 나를 바라보며 말했다. "너의 마음의 힘을 깨달아라."', country: '韩国', province: '首尔', date: '2026-06-11', author: '꿈꾸는이', userId: null, keywords: [{name:'용',value:2},{name:'하늘',value:2},{name:'무지개',value:1},{name:'비',value:1},{name:'마음',value:1}], lang: 'ko' },
      { id: Date.now()-1000, text: 'I dreamed of a kangaroo standing on Uluru under a sky full of shooting stars. The red earth hummed with energy. A rainbow serpent emerged from the rock, speaking ancient wisdom.', country: '澳大利亚', province: '悉尼', date: '2026-06-13', author: 'Dreamtime', userId: null, keywords: [{name:'star',value:2},{name:'rainbow',value:2},{name:'earth',value:1},{name:'serpent',value:1},{name:'wisdom',value:1}], lang: 'en' },
      { id: Date.now()-500, text: 'J\'ai rêvé d\'un castor géant construisant un barrage sous les aurores boréales. Le fleuve brillait d\'un éclat argenté et les poissons volaient dans les airs.', country: '加拿大', province: '温哥华', date: '2026-06-12', author: 'Rêveur_Nord', userId: null, keywords: [{name:'aurore',value:2},{name:'fleuve',value:2},{name:'castor',value:1},{name:'argenté',value:1},{name:'poisson',value:1}], lang: 'fr' },
      { id: Date.now()-250, text: 'सपने में मैंने देखा कि एक बड़ा हाथी आसमान में उड़ रहा था। उसके पीछे सात रंगों का इंद्रधनुष बन रहा था। फिर वह एक मंदिर में बैठ गया और ध्यान लगाने लगा।', country: '印度', province: '孟买', date: '2026-06-11', author: 'स्वप्नदर्शी', userId: null, keywords: [{name:'हाथी',value:2},{name:'इंद्रधनुष',value:2},{name:'मंदिर',value:1},{name:'आसमान',value:1},{name:'ध्यान',value:1}], lang: 'hi' }
    ];
    // 对所有 demo 梦境使用 extractKeywords 重新计算归一化得分
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
    if (id === 'mydreams') renderMyDreams();
    if (id === 'upload') {
      // Reset defaults for dream form
      const dateInput = document.getElementById('dreamDate');
      if (dateInput && !dateInput.value) dateInput.value = new Date().toISOString().slice(0, 10);
      const displayNameInput = document.getElementById('displayName');
      if (displayNameInput && !displayNameInput.value && DB.currentUser) displayNameInput.value = DB.currentUser.username;
    }
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
          REGION_DATA[this.value].forEach(p => provEl.add(new Option(tr(p), p)));
          provEl.disabled = false;
        } else {
          provEl.disabled = idx === 0;
        }
        if (id === 'cloudCountry') renderWordCloud();
        if (id === 'searchCountry') renderSearchResults();
        if (id === 'analyticsCountry') renderAnalytics();
      });
    });

    // 单独为省份选择器绑定 change 事件
    provinceSelects.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('change', function() {
        if (id === 'cloudProvince') renderWordCloud();
        if (id === 'searchProvince') renderSearchResults();
        if (id === 'analyticsProvince') renderAnalytics();
      });
    });

    // 日期筛选预设
    const datePreset = document.getElementById('searchDatePreset');
    const dateFrom = document.getElementById('searchDateFrom');
    const dateTo = document.getElementById('searchDateTo');
    if (datePreset) {
      datePreset.addEventListener('change', function() {
        if (this.value === 'custom') {
          dateFrom.style.display = 'inline-block';
          dateTo.style.display = 'inline-block';
        } else {
          dateFrom.style.display = 'none';
          dateTo.style.display = 'none';
          dateFrom.value = '';
          dateTo.value = '';
        }
        renderSearchResults();
      });
      if (dateFrom) dateFrom.addEventListener('change', renderSearchResults);
      if (dateTo) dateTo.addEventListener('change', renderSearchResults);
    }
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
      tooltip: { show: true, formatter: function(p) { return p.name + ': ' + p.value; } },
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

    // Aggregate by country first, then by province within each country
    const countryFreq = {};
    const provinceFreq = {};
    DB.dreams.forEach(d => {
      countryFreq[d.country] = (countryFreq[d.country] || 0) + 1;
      const provKey = d.country + ' · ' + d.province;
      provinceFreq[provKey] = (provinceFreq[provKey] || 0) + 1;
    });

    // Sort countries by count, take top 10
    const countryData = Object.entries(countryFreq)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);

    regionChart.setOption({
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
      grid: { left: '3%', right: '4%', bottom: '3%', top: '3%', containLabel: true },
      xAxis: { type: 'value', axisLine: { lineStyle: { color: '#334155' } }, axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
      yAxis: { type: 'category', data: countryData.map(d => d.name).reverse(), axisLine: { lineStyle: { color: '#334155' } }, axisLabel: { color: '#94a3b8', fontSize: 11 } },
      series: [{
        type: 'bar',
        data: countryData.map(d => d.value).reverse(),
        itemStyle: {
          color: function(params) {
            const colors = ['#8b5cf6','#06b6d4','#10b981','#f59e0b','#ef4444','#ec4899','#6366f1','#14b8a6','#f97316','#84cc16'];
            return colors[countryData.length - 1 - params.dataIndex] || '#8b5cf6';
          },
          borderRadius: [0, 4, 4, 0]
        },
        barWidth: '60%',
        label: { show: true, position: 'right', color: '#94a3b8', fontSize: 12 }
      }]
    }, true);
  }

  // ==================== 世界地图 ====================
  let _dreamMap = null;
  function initDreamMap() {
    const canvas = document.getElementById('dreamMap');
    if (!canvas) return;
    _dreamMap = new DreamMap(canvas);
  }

  class DreamMap {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.container = document.getElementById('mapContainer');
      this.tooltip = document.getElementById('mapTooltip');
      this.dpr = window.devicePixelRatio || 1;
      this.width = 0;
      this.height = 0;
      this.zoom = 1;
      this.minZoom = 1.0;
      this.maxZoom = 8;
      this.panX = 0;
      this.panY = 0;
      this.isDragging = false;
      this.lastMouseX = 0;
      this.lastMouseY = 0;
      this.hoverCountry = null;
      this._hitPaths = null; // Cached hit-test paths, rebuilt on zoom/pan change
      this.countryKeywords = {};
      this.provinceKeywords = {};
      this.maxDreamCount = 1;
      this.colors = ['#8b5cf6','#06b6d4','#10b981','#f59e0b','#ef4444','#ec4899','#6366f1','#14b8a6'];
      // Geo bounds: longitude -180~180, latitude -90~90
      this.geoW = 360;
      this.geoH = 180;
      // Province cloud cycle animation state
      this._provinceCycleGroups = [];   // array of index arrays, each group overlaps
      this._provinceClusterData = [];    // {x, y, keywords, title, radius}[] all visible clusters
      this._provinceCycleIdx = 0;        // current group index
      this._provinceCycleFade = 0;      // 0~1 fade alpha
      this._provinceCyclePhase = 'in';   // 'in' | 'hold' | 'out'
      this._provinceCycleTimer = null;  // timestamp of cycle start
      this._provinceCycleRaf = null;    // requestAnimationFrame id
      this._provinceCycleCycleCount = 0; // completed cycle count for group switching
      this._lastProvinceCycleKey = '';  // key to detect zoom/pan changes
      this._provinceCycleDirty = false; // true when cycle needs restart
      this.setupCanvas();
      this.aggregateKeywords();
      this.initEvents();
      this.render();
    }

    setupCanvas() {
      const rect = this.canvas.parentElement.getBoundingClientRect();
      this.width = rect.width;
      this.height = rect.height;
      this.canvas.width = this.width * this.dpr;
      this.canvas.height = this.height * this.dpr;
      this.canvas.style.width = this.width + 'px';
      this.canvas.style.height = this.height + 'px';
      this.ctx.scale(this.dpr, this.dpr);
      // Center the map initially using equirectangular projection
      const scaleX = this.width / this.geoW;
      const scaleY = this.height / this.geoH;
      this.baseScale = Math.min(scaleX, scaleY) * 0.9;
      this.panX = (this.width - this.geoW * this.baseScale) / 2;
      this.panY = (this.height - this.geoH * this.baseScale) / 2;
    }

    resize() {
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.setupCanvas();
      this.render();
    }

    aggregateKeywords() {
      this.countryKeywords = {};
      this.provinceKeywords = {};
      this.maxDreamCount = 1;
      const countryCounts = {};

      for (const dream of DB.dreams) {
        const { country, province, keywords } = dream;
        // If no keywords, generate from text using a simple fallback
        const kws = keywords && keywords.length > 0 ? keywords : this.fallbackKeywords(dream.text, dream.lang);
        // Country level
        if (!this.countryKeywords[country]) this.countryKeywords[country] = {};
        for (const kw of kws) {
          this.countryKeywords[country][kw.name] = (this.countryKeywords[country][kw.name] || 0) + (kw.value || 1);
        }
        countryCounts[country] = (countryCounts[country] || 0) + 1;
        // Province level
        if (!this.provinceKeywords[country]) this.provinceKeywords[country] = {};
        if (!this.provinceKeywords[country][province]) this.provinceKeywords[country][province] = {};
        for (const kw of kws) {
          this.provinceKeywords[country][province][kw.name] = (this.provinceKeywords[country][province][kw.name] || 0) + (kw.value || 1);
        }
      }

      // Convert to sorted arrays
      for (const c in this.countryKeywords) {
        const arr = Object.entries(this.countryKeywords[c])
          .map(([name, value]) => ({ name, value }))
          .sort((a, b) => b.value - a.value);
        this.countryKeywords[c] = arr;
        this.maxDreamCount = Math.max(this.maxDreamCount, countryCounts[c] || 1);
      }
      for (const c in this.provinceKeywords) {
        for (const p in this.provinceKeywords[c]) {
          this.provinceKeywords[c][p] = Object.entries(this.provinceKeywords[c][p])
            .map(([name, value]) => ({ name, value }))
            .sort((a, b) => b.value - a.value);
        }
      }
    }

    initEvents() {
      // Mouse drag
      this.canvas.addEventListener('mousedown', (e) => {
        this.isDragging = true;
        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
        this.container.style.cursor = 'grabbing';
      });
      window.addEventListener('mousemove', (e) => {
        if (!this.isDragging) {
          this.handleHover(e);
          return;
        }
        const dx = e.clientX - this.lastMouseX;
        const dy = e.clientY - this.lastMouseY;
        this.panX += dx;
        this.panY += dy;
        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
        this.render();
      });
      window.addEventListener('mouseup', () => {
        this.isDragging = false;
        this.container.style.cursor = 'move';
        this.render();
      });
      // Wheel zoom
      this.canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const zoomFactor = e.deltaY < 0 ? 1.15 : 0.85;
        const newZoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.zoom * zoomFactor));
        if (newZoom !== this.zoom) {
          this.panX = mouseX - (mouseX - this.panX) * (newZoom / this.zoom);
          this.panY = mouseY - (mouseY - this.panY) * (newZoom / this.zoom);
          this.zoom = newZoom;
          this.render();
        }
      }, { passive: false });
      // Buttons
      const zoomInBtn = document.getElementById('mapZoomIn');
      const zoomOutBtn = document.getElementById('mapZoomOut');
      const resetBtn = document.getElementById('mapReset');
      if (zoomInBtn) zoomInBtn.addEventListener('click', () => this.zoomIn());
      if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => this.zoomOut());
      if (resetBtn) resetBtn.addEventListener('click', () => this.resetView());
    }

    // Equirectangular projection: lon/lat -> screen coords
    toScreen(lon, lat) {
      const x = (lon + 180) * this.baseScale * this.zoom + this.panX;
      const y = (90 - lat) * this.baseScale * this.zoom + this.panY;
      return { x, y };
    }

    toGeo(screenX, screenY) {
      const lon = (screenX - this.panX) / (this.baseScale * this.zoom) - 180;
      const lat = 90 - (screenY - this.panY) / (this.baseScale * this.zoom);
      return { lon, lat };
    }

    getCountryColor(countryName, dreamCount) {
      if (dreamCount === 0) return '#1e293b';
      const ratio = Math.min(dreamCount / this.maxDreamCount, 1);
      // Interpolate from #1e293b to #8b5cf6
      const r = Math.round(30 + (139 - 30) * ratio);
      const g = Math.round(41 + (92 - 41) * ratio);
      const b = Math.round(58 + (246 - 58) * ratio);
      return `rgb(${r},${g},${b})`;
    }

    drawCountryPath(pathStr, fill, stroke) {
      const subPaths = this._parseCountryPaths(pathStr);
      for (const path of subPaths) {
        this._drawSubPath(path, fill, stroke);
      }
    }

    drawCountryPathFill(pathStr, fill) {
      const subPaths = this._parseCountryPaths(pathStr);
      for (const path of subPaths) {
        this._drawSubPath(path, fill, null);
      }
    }

    drawCountryPathStroke(pathStr, stroke) {
      const subPaths = this._parseCountryPaths(pathStr);
      for (const path of subPaths) {
        this._drawSubPath(path, null, stroke);
      }
    }

    _parseCountryPaths(pathStr) {
      const tokens = pathStr.match(/[MLZ]|[-]?[0-9.]+/g);
      if (!tokens) return [];
      const subPaths = [];
      let currentPath = [];
      let prevLon = null;
      let lonOffset = 0; // Accumulated offset for date line crossings
      let i = 0;
      while (i < tokens.length) {
        const cmd = tokens[i];
        if (cmd === 'M') {
          if (currentPath.length > 0) subPaths.push(currentPath);
          const rawLon = parseFloat(tokens[i+1]);
          const rawLat = parseFloat(tokens[i+2]);
          lonOffset = 0; // Reset offset for each new sub-path
          currentPath = [{ cmd: 'M', lon: rawLon, lat: rawLat }];
          prevLon = rawLon;
          i += 3;
        } else if (cmd === 'L') {
          const rawLon = parseFloat(tokens[i+1]);
          const lat = parseFloat(tokens[i+2]);
          if (prevLon !== null && Math.abs(rawLon - prevLon) > 180) {
            const actualDist = Math.abs(((rawLon - prevLon + 540) % 360) - 180);
            if (actualDist > 10) {
              // Real gap — start a new sub-path
              if (currentPath.length > 0) subPaths.push(currentPath);
              lonOffset = 0;
              currentPath = [{ cmd: 'M', lon: rawLon, lat }];
            } else {
              // Date line crossing — adjust offset for all subsequent points
              lonOffset += rawLon > 0 ? -360 : 360;
              currentPath.push({ cmd: 'L', lon: rawLon + lonOffset, lat });
            }
          } else {
            currentPath.push({ cmd: 'L', lon: rawLon + lonOffset, lat });
          }
          prevLon = rawLon;
          i += 3;
        } else if (cmd === 'Z') {
          currentPath.push({ cmd: 'Z' });
          subPaths.push(currentPath);
          currentPath = [];
          prevLon = null;
          i += 1;
        } else {
          i++;
        }
      }
      if (currentPath.length > 0) subPaths.push(currentPath);
      return subPaths;
    }

    _drawSubPath(path, fill, stroke) {
      this.ctx.beginPath();
      let first = true;
      for (const pt of path) {
        const p = this.toScreen(pt.lon, pt.lat);
        if (pt.cmd === 'M' || first) {
          this.ctx.moveTo(p.x, p.y);
          first = false;
        } else if (pt.cmd === 'L') {
          this.ctx.lineTo(p.x, p.y);
        } else if (pt.cmd === 'Z') {
          this.ctx.closePath();
        }
      }
      if (fill) {
        this.ctx.fillStyle = fill;
        this.ctx.fill();
      }
      if (stroke) {
        this.ctx.strokeStyle = stroke;
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
      }
    }

    _buildHitPaths() {
      this._hitPaths = [];
      const entries = Object.entries(WORLD_MAP_PATHS);
      for (let idx = entries.length - 1; idx >= 0; idx--) {
        const [name, data] = entries[idx];
        const subPaths = this._parseCountryPaths(data.path);
        const paths2d = subPaths.map(path => {
          const p = new Path2D();
          let first = true;
          for (const pt of path) {
            const s = this.toScreen(pt.lon, pt.lat);
            if (pt.cmd === 'M' || first) { p.moveTo(s.x, s.y); first = false; }
            else if (pt.cmd === 'L') p.lineTo(s.x, s.y);
            else if (pt.cmd === 'Z') p.closePath();
          }
          return p;
        });
        this._hitPaths.push({ name, paths: paths2d });
      }
    }

    isInViewport(sx, sy, padding) {
      padding = padding || 50;
      return sx > -padding && sx < this.width + padding && sy > -padding && sy < this.height + padding;
    }

    getDreamCount(countryName) {
      return DB.dreams.filter(d => d.country === countryName).length;
    }

    render() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this._buildHitPaths(); // Rebuild hit-test cache on every render
      // Draw ocean background
      this.ctx.fillStyle = '#0f172a';
      this.ctx.fillRect(0, 0, this.width, this.height);

      // Draw countries: first pass fill, second pass normal stroke, then hover stroke on top
      for (const [name, data] of Object.entries(WORLD_MAP_PATHS)) {
        const count = this.getDreamCount(name);
        const fill = this.getCountryColor(name, count);
        this.drawCountryPathFill(data.path, fill);
      }
      for (const [name, data] of Object.entries(WORLD_MAP_PATHS)) {
        if (name === this.hoverCountry) continue; // skip hover country, draw last
        this.drawCountryPathStroke(data.path, '#334155');
      }
      // Draw hovered country's border last so it's always on top
      if (this.hoverCountry && WORLD_MAP_PATHS[this.hoverCountry]) {
        this.drawCountryPathStroke(WORLD_MAP_PATHS[this.hoverCountry].path, '#06b6d4');
      }

      // Draw keywords based on zoom level
      const threshold = 2.5;
      const transitionRange = 0.8;
      const tStart = threshold - transitionRange / 2;
      const tEnd = threshold + transitionRange / 2;

      if (this.zoom < tStart) {
        this.drawCountryLabels(1);
        this._stopProvinceCycle(); // clean up animation
      } else if (this.zoom > tEnd) {
        // Province mode: collect cluster data, detect overlaps, then animate
        const cycleKey = Math.round(this.zoom * 100) + '_' + Math.round(this.panX) + '_' + Math.round(this.panY);
        if (cycleKey !== this._lastProvinceCycleKey) {
          this._lastProvinceCycleKey = cycleKey;
          this._provinceCycleDirty = true;
          this._collectProvinceClusterData(); // populate groups before animation starts
        }
        this._animateProvinceClouds(); // starts RAF if not running; RAF calls render() each tick
      } else {
        this.drawCountryLabels(1 - (this.zoom - tStart) / transitionRange);
        this.drawProvinceLabels((this.zoom - tStart) / transitionRange);
        this._stopProvinceCycle();
      }
    }

    drawCountryLabels(alpha) {
      if (alpha <= 0) return;
      this.ctx.globalAlpha = alpha;
      for (const [name, data] of Object.entries(WORLD_MAP_PATHS)) {
        const keywords = this.countryKeywords[name];
        const pos = this.toScreen(data.cx, data.cy);
        if (!this.isInViewport(pos.x, pos.y, 80)) continue;
        const displayName = tr(name);
        if (keywords && keywords.length > 0) {
          this.drawKeywordCluster(pos.x, pos.y, keywords.slice(0, 4), displayName, 14);
        } else {
          // Show country name even without keywords
          this.ctx.textAlign = 'center';
          this.ctx.textBaseline = 'middle';
          this.ctx.fillStyle = '#94a3b8';
          this.ctx.font = '11px sans-serif';
          this.ctx.fillText(displayName, pos.x, pos.y);
        }
      }
      this.ctx.globalAlpha = 1;
    }

    // Collect province cluster data and compute overlap groups (called before animation starts)
    _collectProvinceClusterData() {
      const center = this.toGeo(this.width / 2, this.height / 2);
      let closestCountry = null;
      let closestDist = Infinity;
      for (const [name, data] of Object.entries(WORLD_MAP_PATHS)) {
        if (!REGION_DATA[name] || !PROVINCE_CENTERS[name]) continue;
        const dx = center.lon - data.cx;
        const dy = center.lat - data.cy;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < closestDist) { closestDist = dist; closestCountry = name; }
      }
      if (!closestCountry) {
        this._provinceClusterData = [];
        this._provinceCycleGroups = [];
        return;
      }
      const provinces = getProvinces(closestCountry);
      const clusterData = [];
      for (const prov of provinces) {
        const provData = this.provinceKeywords[closestCountry]?.[prov.name];
        if (!provData || provData.length === 0) continue;
        const pos = this.toScreen(prov.cx, prov.cy);
        if (!this.isInViewport(pos.x, pos.y, 60)) continue;
        const kwCount = Math.min(provData.length, 3);
        const radius = Math.max(35, kwCount * 10 + 15);
        clusterData.push({ x: pos.x, y: pos.y, keywords: provData.slice(0, kwCount), title: tr(prov.name), radius });
      }
      this._provinceClusterData = clusterData;
      this._provinceCycleGroups = this._computeOverlapGroups(clusterData);
    }

    // Draw province clusters based on current animation state
    _drawProvinceClusterLayer(alpha) {
      const clusterData = this._provinceClusterData;
      const groups = this._provinceCycleGroups;
      if (!clusterData || clusterData.length === 0) return;
      this.ctx.globalAlpha = alpha;
      if (groups.length > 0) {
        // Cycling mode: draw only the current group's clusters
        const group = groups[this._provinceCycleIdx] || [];
        for (const idx of group) {
          const c = clusterData[idx];
          if (c) this._drawProvinceCluster(c.x, c.y, c.keywords, c.title, c.radius, alpha);
        }
      } else {
        // No overlaps — draw all at full alpha
        for (const c of clusterData) {
          this._drawProvinceCluster(c.x, c.y, c.keywords, c.title, c.radius, alpha);
        }
      }
      this.ctx.globalAlpha = 1;
    }

    drawProvinceLabels(alpha) {
      if (alpha <= 0) return;
      this._collectProvinceClusterData();
      this._drawProvinceClusterLayer(alpha);
    }

    drawKeywordCluster(x, y, keywords, title, fontSize) {
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      // Background circle
      const radius = Math.max(35, keywords.length * 10 + 15);
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
      this.ctx.fill();
      // Title
      this.ctx.fillStyle = '#f1f5f9';
      this.ctx.font = 'bold ' + (fontSize - 2) + 'px sans-serif';
      this.ctx.fillText(title, x, y - radius + 14);
      // Keywords
      keywords.forEach((kw, i) => {
        const fs = Math.max(9, fontSize - i * 2);
        const color = this.colors[i % this.colors.length];
        const offsetY = y + (i - keywords.length / 2 + 0.5) * (fs + 3);
        this.ctx.fillStyle = color;
        this.ctx.font = (i === 0 ? 'bold ' : '') + fs + 'px sans-serif';
        this.ctx.fillText(kw.name, x, offsetY + 5);
      });
    }

    // Draw a single province cluster with given base alpha (0~1)
    _drawProvinceCluster(x, y, keywords, title, radius, baseAlpha) {
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      // Background circle
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(15, 23, 42, ${Math.min(baseAlpha * 0.95, 0.95)})`;
      this.ctx.fill();
      // Title
      this.ctx.fillStyle = `rgba(241, 245, 249, ${baseAlpha})`;
      this.ctx.font = 'bold 10px sans-serif';
      this.ctx.fillText(title, x, y - radius + 14);
      // Keywords
      keywords.forEach((kw, i) => {
        const fs = Math.max(9, 12 - i * 2);
        const color = this.colors[i % this.colors.length];
        const offsetY = y + (i - keywords.length / 2 + 0.5) * (fs + 3);
        this.ctx.fillStyle = color; // alpha handled by ctx.globalAlpha
        this.ctx.font = (i === 0 ? 'bold ' : '') + fs + 'px sans-serif';
        this.ctx.fillText(kw.name, x, offsetY + 5);
      });
    }

    // Compute groups of overlapping clusters (greedy algorithm)
    _computeOverlapGroups(clusters) {
      if (!clusters || clusters.length === 0) return [];
      const n = clusters.length;
      // Build adjacency: which pairs overlap
      const adj = Array.from({ length: n }, () => []);
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const dx = clusters[i].x - clusters[j].x;
          const dy = clusters[i].y - clusters[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const rSum = clusters[i].radius + clusters[j].radius;
          if (dist < rSum * 1.1) { // 10% tolerance
            adj[i].push(j);
            adj[j].push(i);
          }
        }
      }
      // If no overlaps, return empty (draw all at once)
      const hasOverlap = adj.some(list => list.length > 0);
      if (!hasOverlap) return [];

      // Greedy: group overlapping clusters together
      const groups = [];
      const used = new Array(n).fill(false);
      for (let i = 0; i < n; i++) {
        if (used[i]) continue;
        const group = [i];
        used[i] = true;
        const queue = [i];
        while (queue.length > 0) {
          const cur = queue.shift();
          for (const nb of adj[cur]) {
            if (!used[nb]) {
              used[nb] = true;
              group.push(nb);
              queue.push(nb);
            }
          }
        }
        groups.push(group);
      }
      return groups;
    }

    _stopProvinceCycle() {
      if (this._provinceCycleRaf !== null) {
        cancelAnimationFrame(this._provinceCycleRaf);
        this._provinceCycleRaf = null;
      }
      this._provinceCycleGroups = [];
      this._provinceCycleFade = 0;
      this._provinceCyclePhase = 'in';
      this._provinceCycleIdx = 0;
      this._provinceCycleCycleCount = 0;
    }

    _animateProvinceClouds() {
      const groups = this._provinceCycleGroups;
      if (!groups || groups.length === 0) return;

      // Start/restart cycle if dirty (zoom/pan changed)
      if (this._provinceCycleDirty) {
        this._provinceCycleDirty = false;
        this._provinceCycleIdx = 0;
        this._provinceCycleFade = 0;
        this._provinceCyclePhase = 'in';
        this._provinceCycleTimer = null;
        this._provinceCycleCycleCount = 0;
      }

      // Phase durations (ms): fade-in 0.5s, hold 2.5s, fade-out 0.5s
      const FADE_IN_MS = 500;
      const HOLD_MS = 2500;
      const FADE_OUT_MS = 500;
      const CYCLE_MS = FADE_IN_MS + HOLD_MS + FADE_OUT_MS; // 3.5s per province

      if (this._provinceCycleRaf === null) {
        this._provinceCycleTimer = performance.now();
        const tick = (now) => {
          if (!this._provinceCycleGroups.length) {
            this._provinceCycleRaf = null;
            return;
          }
          const elapsed = now - this._provinceCycleTimer;
          const cyclePos = elapsed % CYCLE_MS;

          let newFade = 0;
          if (cyclePos < FADE_IN_MS) {
            this._provinceCyclePhase = 'in';
            newFade = cyclePos / FADE_IN_MS;
          } else if (cyclePos < FADE_IN_MS + HOLD_MS) {
            this._provinceCyclePhase = 'hold';
            newFade = 1;
          } else {
            this._provinceCyclePhase = 'out';
            newFade = 1 - (cyclePos - FADE_IN_MS - HOLD_MS) / FADE_OUT_MS;
          }
          this._provinceCycleFade = Math.max(0, Math.min(1, newFade));

          // Advance to next group when a full cycle completes
          const cyclesCompleted = Math.floor(elapsed / CYCLE_MS);
          if (cyclesCompleted !== this._provinceCycleCycleCount) {
            this._provinceCycleCycleCount = cyclesCompleted;
            this._provinceCycleIdx = (this._provinceCycleIdx + 1) % this._provinceCycleGroups.length;
            this._provinceCycleTimer = now;
          }

          // Redraw map with new fade alpha (direct canvas redraw, not render() to avoid recursion)
          this._redrawMapWithProvinceFade();
          this._provinceCycleRaf = requestAnimationFrame(tick);
        };
        this._provinceCycleRaf = requestAnimationFrame(tick);
      }
    }

    // Redraw just the province clouds on top of the existing map canvas
    _redrawMapWithProvinceFade() {
      if (!this._provinceClusterData || this._provinceClusterData.length === 0) return;
      // Clear only the keyword label area (re-render map + clouds)
      this._buildHitPaths();
      // Draw ocean
      this.ctx.fillStyle = '#0f172a';
      this.ctx.fillRect(0, 0, this.width, this.height);
      // Draw country fills
      for (const [name, data] of Object.entries(WORLD_MAP_PATHS)) {
        const count = this.getDreamCount(name);
        const fill = this.getCountryColor(name, count);
        this.drawCountryPathFill(data.path, fill);
      }
      // Draw country strokes
      for (const [name, data] of Object.entries(WORLD_MAP_PATHS)) {
        if (name === this.hoverCountry) continue;
        this.drawCountryPathStroke(data.path, '#334155');
      }
      if (this.hoverCountry && WORLD_MAP_PATHS[this.hoverCountry]) {
        this.drawCountryPathStroke(WORLD_MAP_PATHS[this.hoverCountry].path, '#06b6d4');
      }
      // Draw province clusters with current fade
      this._drawProvinceClusterLayer(this._provinceCycleFade);
    }

    handleHover(e) {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      let found = null;
      if (this._hitPaths) {
        for (const { name, paths } of this._hitPaths) {
          for (const p of paths) {
            if (this.ctx.isPointInPath(p, x, y)) {
              found = name;
              break;
            }
          }
          if (found) break;
        }
      }
      if (found !== this.hoverCountry) {
        this.hoverCountry = found;
        this.render();
      }
      if (found) {
        const count = this.getDreamCount(found);
        const keywords = this.countryKeywords[found]?.slice(0, 5) || [];
        this.tooltip.innerHTML = `
          <div class="map-tooltip-title">${tr(found)} (${count} ${t('dreamCount')})</div>
          <div class="map-tooltip-keywords">${keywords.map(k => `<span class="map-tooltip-keyword">${k.name}</span>`).join('')}</div>
        `;
        this.tooltip.style.left = (x + 15) + 'px';
        this.tooltip.style.top = (y + 15) + 'px';
        this.tooltip.classList.add('show');
      } else {
        this.tooltip.classList.remove('show');
      }
    }

    zoomIn() {
      const newZoom = Math.min(this.maxZoom, this.zoom * 1.5);
      const cx = this.width / 2;
      const cy = this.height / 2;
      this.panX = cx - (cx - this.panX) * (newZoom / this.zoom);
      this.panY = cy - (cy - this.panY) * (newZoom / this.zoom);
      this.zoom = newZoom;
      this.render();
    }

    zoomOut() {
      const newZoom = Math.max(this.minZoom, this.zoom / 1.5);
      const cx = this.width / 2;
      const cy = this.height / 2;
      this.panX = cx - (cx - this.panX) * (newZoom / this.zoom);
      this.panY = cy - (cy - this.panY) * (newZoom / this.zoom);
      this.zoom = newZoom;
      this.render();
    }

    resetView() {
      this.zoom = 1;
      const scaleX = this.width / this.geoW;
      const scaleY = this.height / this.geoH;
      this.baseScale = Math.min(scaleX, scaleY) * 0.9;
      this.panX = (this.width - this.geoW * this.baseScale) / 2;
      this.panY = (this.height - this.geoH * this.baseScale) / 2;
      this.render();
    }

    fallbackKeywords(text, lang) {
      if (!text) return [];
      return extractKeywords(text);
    }
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
        <div class="dream-text" onclick="showDreamDetail(${d.id})">${d.text}</div>
        <div class="dream-keywords">${keywordsHtml}</div>
      </div>
    `;
  }

  window.showDreamDetail = function(id) {
    const dream = DB.dreams.find(d => d.id == id);
    if (!dream) return;
    document.getElementById('dreamDetailMeta').innerHTML =
      `<span style="color:var(--accent);font-weight:600;">${dream.author}</span>` +
      `<span style="margin:0 0.5rem;">·</span>` +
      `<span>${dream.date}</span>` +
      `<span style="margin:0 0.5rem;">·</span>` +
      `<span style="color:var(--accent2);">${dream.country} · ${dream.province}</span>` +
      (dream.lang && dream.lang !== 'zh' ? ` <span style="font-size:0.65rem;color:var(--accent2);background:rgba(6,182,212,0.15);padding:0.1rem 0.4rem;border-radius:8px;">${dream.lang.toUpperCase()}</span>` : '');
    document.getElementById('dreamDetailContent').textContent = dream.text;
    document.getElementById('dreamDetailKeywords').innerHTML = dream.keywords.slice(0, 10).map(k =>
      `<span class="keyword-tag">${k.name}</span>`
    ).join('');
    openModal('dreamDetailModal');
  };

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
    const datePreset = document.getElementById('searchDatePreset');
    if (datePreset) datePreset.value = '';
    const dateFrom = document.getElementById('searchDateFrom');
    const dateTo = document.getElementById('searchDateTo');
    if (dateFrom) { dateFrom.value = ''; dateFrom.style.display = 'none'; }
    if (dateTo) { dateTo.value = ''; dateTo.style.display = 'none'; }
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

    // 日期筛选
    const datePreset = document.getElementById('searchDatePreset');
    const dateFrom = document.getElementById('searchDateFrom');
    const dateTo = document.getElementById('searchDateTo');
    
    if (datePreset && datePreset.value) {
      const now = new Date();
      const today = now.toISOString().slice(0, 10);
      const dayMs = 86400000;
      
      let fromDate, toDate;
      
      switch (datePreset.value) {
        case 'today':
          fromDate = toDate = today;
          break;
        case 'yesterday': {
          const y = new Date(now - dayMs);
          fromDate = toDate = y.toISOString().slice(0, 10);
          break;
        }
        case 'thisWeek': {
          const dayOfWeek = now.getDay() || 7;
          const monday = new Date(now - (dayOfWeek - 1) * dayMs);
          fromDate = monday.toISOString().slice(0, 10);
          toDate = today;
          break;
        }
        case 'lastWeek': {
          const dayOfWeek = now.getDay() || 7;
          const thisMonday = new Date(now - (dayOfWeek - 1) * dayMs);
          const lastMonday = new Date(thisMonday - 7 * dayMs);
          const lastSunday = new Date(thisMonday - dayMs);
          fromDate = lastMonday.toISOString().slice(0, 10);
          toDate = lastSunday.toISOString().slice(0, 10);
          break;
        }
        case 'thisMonth': {
          fromDate = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-01';
          toDate = today;
          break;
        }
        case 'lastMonth': {
          const firstDay = new Date(now.getFullYear(), now.getMonth() - 1, 1);
          const lastDay = new Date(now.getFullYear(), now.getMonth(), 0);
          fromDate = firstDay.toISOString().slice(0, 10);
          toDate = lastDay.toISOString().slice(0, 10);
          break;
        }
        case 'custom':
          fromDate = dateFrom ? dateFrom.value : null;
          toDate = dateTo ? dateTo.value : null;
          break;
      }
      
      if (fromDate) results = results.filter(d => d.date >= fromDate);
      if (toDate) results = results.filter(d => d.date <= toDate);
    }

    if (results.length === 0) {
      container.innerHTML = '<div class="empty-state">' + t('emptySearch') + '</div>';
      return;
    }
    container.innerHTML = results.map(d => renderDreamItem(d)).join('');
  }

  // ==================== 我的梦境 ====================
  function renderMyDreams() {
    const container = document.getElementById('myDreamsList');
    if (!container) return;

    if (!DB.currentUser) {
      container.innerHTML = '<div style="text-align:center;padding:3rem;color:var(--muted)"><p>请先登录后查看你的梦境</p></div>';
      return;
    }

    const uid = DB.currentUser.id;
    const uname = DB.currentUser.username;
    const myDreams = DB.dreams.filter(d =>
      d.userId === uid ||
      d.userId === uname ||
      d.author === uname ||
      (d.author && d.author.startsWith(uname))
    );

    if (myDreams.length === 0) {
      container.innerHTML = '<div style="text-align:center;padding:3rem;color:var(--muted)"><p>' + t('noMyDreams') + '</p></div>';
      return;
    }

    container.innerHTML = myDreams.map(dream => {
      const kwTags = dream.keywords.slice(0, 5).map(k => '<span class="keyword-tag">' + k.name + '</span>').join('');
      return `
        <div class="dream-item" data-dream-id="${dream.id}">
          <div class="dream-header">
            <div class="dream-meta">
              <span>${dream.date}</span>
              <span>${dream.country} · ${dream.province}</span>
              ${dream.lang && dream.lang !== 'zh' ? '<span class="lang-badge">' + dream.lang.toUpperCase() + '</span>' : ''}
            </div>
            <div class="dream-actions" style="display:flex;gap:0.5rem;">
              <button class="btn btn-secondary btn-sm" onclick="editDream(${dream.id})" data-i18n="edit">编辑</button>
              <button class="btn btn-danger btn-sm" onclick="deleteDream(${dream.id})" style="background:#ef4444;color:#fff;" data-i18n="delete">删除</button>
            </div>
          </div>
          <div class="dream-text" onclick="showDreamDetail(${dream.id})">${dream.text}</div>
          <div class="dream-keywords">${kwTags}</div>
        </div>
      `;
    }).join('');
  }

  let _editingDreamId = null;
  let _deletingDreamId = null;

  window.editDream = function(id) {
    const dream = DB.dreams.find(d => d.id == id);
    if (!dream) return;
    _editingDreamId = id;
    document.getElementById('editDreamText').value = dream.text;
    openModal('editDreamModal');
  };

  window.saveEditDream = async function() {
    if (!_editingDreamId) return;
    const newText = document.getElementById('editDreamText').value;
    if (newText.trim() === '') { showToast('梦境内容不能为空', 'error'); return; }

    const newKeywords = extractKeywords(newText);
    const newLang = detectLanguage(newText);

    await DB.updateDream(_editingDreamId, {
      text: newText.trim(),
      keywords: newKeywords,
      lang: newLang
    });

    closeModal('editDreamModal');
    _editingDreamId = null;
    renderMyDreams();
    renderHome();
    showToast('梦境已更新', 'success');
  };

  window.deleteDream = function(id) {
    _deletingDreamId = id;
    openModal('confirmDeleteModal');
  };

  window.confirmDeleteDream = async function() {
    if (!_deletingDreamId) return;
    await DB.deleteDream(_deletingDreamId);
    closeModal('confirmDeleteModal');
    _deletingDreamId = null;
    renderMyDreams();
    renderHome();
    showToast('梦境已删除', 'success');
  };

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
    const myDreamsNav = document.querySelector('a[data-section="mydreams"]');
    if (DB.currentUser) {
      userStatus.innerHTML = t('userPrefix') + '<span class="username">' + DB.currentUser.username + '</span>';
      loginBtn.style.display = 'none'; registerBtn.style.display = 'none'; logoutBtn.style.display = 'inline-block';
      if (anonymousOption) anonymousOption.style.display = 'block';
      if (usernameOption) { usernameOption.style.display = 'block'; document.getElementById('displayName').value = DB.currentUser.username; }
      if (myDreamsNav) myDreamsNav.style.display = 'inline';
    } else {
      userStatus.textContent = t('guestMode');
      loginBtn.style.display = 'inline-block'; registerBtn.style.display = 'inline-block'; logoutBtn.style.display = 'none';
      if (anonymousOption) anonymousOption.style.display = 'none';
      if (usernameOption) usernameOption.style.display = 'none';
      if (myDreamsNav) myDreamsNav.style.display = 'none';
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
    // 设置默认日期为今天
    const dateInput = document.getElementById('dreamDate');
    if (dateInput) dateInput.value = new Date().toISOString().slice(0, 10);
    document.getElementById('isAnonymous').addEventListener('change', function() {
      document.getElementById('usernameOption').style.display = this.checked ? 'none' : 'block';
    });
    // Sync initial state
    const isAnonChecked = document.getElementById('isAnonymous').checked;
    if (isAnonChecked) {
      document.getElementById('usernameOption').style.display = 'none';
    }
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
      // Re-sync anonymous checkbox state after language change
      var anonCheckbox = document.getElementById('isAnonymous');
      var unameOption = document.getElementById('usernameOption');
      if (anonCheckbox && unameOption) {
        unameOption.style.display = anonCheckbox.checked ? 'none' : 'block';
      }
      updateUserUI();
      renderHome();
    });
  }

  // ==================== 首页渲染 ====================
  function renderHome() {
    updateStats();
    renderWordCloud();
    if (!_dreamMap) initDreamMap();
    else { _dreamMap.aggregateKeywords(); _dreamMap.render(); }
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
    if (_dreamMap) _dreamMap.resize();
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

  // Expose dreamMap for debugging
  window.getDreamMap = function() { return _dreamMap; };
})();
