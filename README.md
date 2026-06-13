# Dreamscape - 梦境共时性

> 基于荣格共时性原理与集体潜意识理论，分析全球梦境关键词，探索人类潜意识的共同模式。

一个开源的全球梦境记录与分析平台。用户可以记录自己的梦境，系统通过 NLP 引擎自动提取关键词，并在交互式世界地图上可视化展示全球梦境的分布与共时性模式。

## 功能特性

- **全球梦境地图** — 基于 Canvas 2D 渲染的交互式世界地图，支持缩放、拖拽、悬浮高亮，按国家显示梦境活跃度热力
- **关键词云图** — 基于 ECharts 的实时词云，支持按国家/省份筛选
- **NLP 关键词提取** — 自研轻量级引擎，支持 9 种语言，融合 TF-IDF 与 TextRank 图排序算法，带梦境领域词典加权
- **热门地区排行** — ECharts 柱状图展示梦境记录最活跃的地区
- **全文搜索** — 支持关键词、用户名、梦境内容的全文检索，可按地区和时间范围筛选
- **历史图表** — 时间趋势折线图、关键词热度变化、地区热力分布
- **多语言界面** — 完整支持中文、英语、日语、韩语、法语、德语、西班牙语、葡萄牙语、俄语
- **用户系统** — 注册/登录，梦境编辑/删除，匿名或实名提交
- **响应式设计** — 适配桌面端和移动端

## 技术栈

| 类别 | 技术 |
|------|------|
| 前端 | 原生 JavaScript（Vanilla JS，IIFE 模式） |
| 样式 | CSS 变量系统，Grid + Flexbox 响应式布局 |
| 图表 | Apache ECharts + ECharts WordCloud 插件 |
| 地图 | Canvas 2D 手绘渲染，基于 Natural Earth TopoJSON 110m 数据 |
| 后端 | Supabase（PostgreSQL + Auth + Realtime） |
| 本地存储 | localStorage 作为 Supabase 的回退与缓存 |
| 字体 | Noto Sans SC / Inter / Noto Sans JP / Noto Sans KR |

无框架、无构建工具、无打包器。打开 `dreamscape.html` 即可运行。

## 项目结构

```
dreamscape/
├── dreamscape.html              # 主页面（单页应用，包含所有 HTML 和 CSS）
├── _shared/
│   └── js/
│       ├── echarts.min.js       # ECharts 图表库
│       └── echarts-wordcloud.min.js  # ECharts 词云插件
└── assets/
    ├── cursors/                  # 自定义鼠标光标图片
    │   ├── default.png
    │   ├── pointer.png
    │   └── text.png
    ├── app.js                    # 核心应用逻辑（~2200 行）
    ├── extra-dreams.js           # 预置示例梦境数据（49 条，9 种语言）
    └── world-map.js              # 世界地图路径数据（180+ 国家/地区）
```

## 快速开始

### 纯本地运行

无需安装任何依赖，直接用浏览器打开：

```bash
# 克隆仓库
git clone https://github.com/your-username/dreamscape.git
cd dreamscape

# 用浏览器打开
open dreamscape.html        # macOS
start dreamscape.html       # Windows
xdg-open dreamscape.html    # Linux
```

或使用本地 HTTP 服务器（推荐，避免 CORS 问题）：

```bash
# Python
python -m http.server 7810

# Node.js
npx serve .

# PHP
php -S localhost:7810
```

然后访问 `http://localhost:7810/dreamscape.html`。

### 连接 Supabase（可选）

项目默认使用 localStorage 存储数据。如需启用 Supabase 云端同步：

1. 在 [Supabase](https://supabase.com/) 创建项目
2. 执行以下 SQL 创建数据表：

```sql
-- 用户表
CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

-- 梦境表
CREATE TABLE dreams (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  text TEXT NOT NULL,
  country TEXT NOT NULL,
  province TEXT,
  dream_date DATE,
  author TEXT NOT NULL,
  user_id BIGINT REFERENCES users(id),
  keywords JSONB DEFAULT '[]'::jsonb,
  lang TEXT DEFAULT 'zh',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- RLS 策略（按需调整）
ALTER TABLE dreams ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read dreams" ON dreams FOR SELECT USING (true);
CREATE POLICY "Anyone can read users" ON users FOR SELECT USING (true);
CREATE POLICY "Anyone can insert dreams" ON dreams FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert users" ON users FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update dreams" ON dreams FOR UPDATE USING (true);
CREATE POLICY "Anyone can delete dreams" ON dreams FOR DELETE USING (true);
```

3. 修改 `assets/app.js` 中的 Supabase 配置：

```javascript
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_KEY = 'your-anon-key';
```

## 数据模型

### dreams 表

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | BIGINT | 主键 |
| `text` | TEXT | 梦境描述文本 |
| `country` | TEXT | 国家 |
| `province` | TEXT | 省份/州 |
| `dream_date` | DATE | 梦境日期 |
| `author` | TEXT | 作者名（匿名时为"匿名"） |
| `user_id` | BIGINT | 关联用户 ID（可空） |
| `keywords` | JSONB | 关键词数组 |
| `lang` | TEXT | 语言代码 |
| `created_at` | TIMESTAMPTZ | 创建时间 |

### users 表

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | BIGINT | 主键 |
| `username` | TEXT | 用户名（唯一） |
| `password` | TEXT | 密码（Base64 编码） |

## NLP 关键词提取引擎

项目内置了一个轻量级 NLP 引擎，无需外部 API：

- **语言检测** — 基于 Unicode 范围和特殊字符正则匹配
- **分词** — CJK 语言使用 N-gram（2-4 字）+ 停用字过滤；西方语言使用空格分词
- **TF-IDF 计算** — 带梦境领域词典加权（约 800+ 词条）
- **TextRank 图排序** — 基于共现窗口的图排序算法，迭代 20 次
- **综合评分** — `TF-IDF(40%) + TextRank(60%) * 领域加权(1.3x)`
- 每条梦境提取最多 20 个关键词

## 覆盖地区

支持 12 个国家的省级行政区选择：

中国（34）、美国（50）、日本（47）、英国（22）、德国（15）、法国（13）、印度（17）、巴西（14）、俄罗斯（15）、澳大利亚（8）、加拿大（8）、韩国（17）

世界地图包含全球 180+ 个国家/地区的路径数据。

## 参与贡献

欢迎任何形式的贡献。以下是参与方式：

### 报告问题

发现 Bug 或有功能建议，请提交 [Issue](https://github.com/your-username/dreamscape/issues)，尽量附上：

- 问题描述和复现步骤
- 浏览器名称和版本
- 截图（如有）

### 提交代码

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/your-feature-name`
3. 提交修改：`git commit -m 'feat: add your feature'`
4. 推送分支：`git push origin feature/your-feature-name`
5. 提交 Pull Request

### Commit 规范

```
feat: 新功能
fix: 修复 Bug
docs: 文档更新
style: 代码格式调整
refactor: 代码重构
perf: 性能优化
i18n: 多语言翻译
map: 地图数据更新
nlp: NLP 引擎改进
```

### 可以贡献的方向

- **地图数据** — 修正国家路径坐标，添加缺失地区，优化标签位置
- **NLP 引擎** — 改进分词算法，扩展领域词典，支持更多语言
- **多语言翻译** — 修正现有翻译，提升翻译质量
- **预置梦境** — 添加更多语言的示例梦境数据
- **UI/UX** — 改进交互体验，优化移动端适配
- **可视化** — 新增图表类型，改进地图渲染效果
- **后端** — 改进 Supabase 集成，添加数据导入导出

## 开发指南

### 代码结构

`app.js` 采用 IIFE（立即执行函数表达式）封装，主要包含以下模块：

- `DB` — 数据层（Supabase + localStorage 双模式）
- `I18N` — 多语言系统
- `DreamMap` — Canvas 世界地图渲染器
- `renderHome()` / `renderSearchResults()` / `renderAnalytics()` / `renderMyDreams()` — 页面渲染函数
- `extractKeywords()` / `detectLanguage()` — NLP 引擎
- `initDreamForm()` — 梦境提交表单

### 添加新语言

1. 在 `app.js` 的 `I18N` 对象中添加新的语言 key
2. 在 `REGION_I18N` 中添加地区名称翻译
3. 在 HTML 的语言选择器中添加选项
4. 在 `detectLanguage()` 中添加语言检测规则

### 添加新国家

1. 在 `world-map.js` 中添加国家路径数据（TopoJSON 格式）
2. 在 `app.js` 的 `PROVINCES` 对象中添加省级行政区列表
3. 在 `REGION_I18N` 中添加翻译

## 许可证

MIT License

## 致谢

- [Natural Earth](https://www.naturalearthdata.com/) — 世界地图矢量数据
- [Apache ECharts](https://echarts.apache.org/) — 图表可视化库
- [Supabase](https://supabase.com/) — 后端即服务
- Carl Jung — 共时性理论与集体潜意识理论
