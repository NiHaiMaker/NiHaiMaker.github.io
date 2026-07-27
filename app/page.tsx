const downloadUrl =
  "https://purrclick-update-1252241379.cos.ap-guangzhou.myqcloud.com/releases/PurrClick-1.1.4.exe";

const productFacts = [
  {
    number: "01",
    title: "把流程看得见",
    copy: "用可视化步骤编排鼠标与键盘操作，逐步测试、调整顺序，再开始循环执行。",
  },
  {
    number: "02",
    title: "尽量不打扰当前操作",
    copy: "面向标准 Windows 窗体发送后台消息，也可切换为真实鼠标键盘模式处理兼容场景。",
  },
  {
    number: "03",
    title: "一份配置，一套任务",
    copy: "步骤、快捷键、循环方式和脚本说明都保存在独立配置中，方便重复使用和整理。",
  },
];

const makerPrinciples = [
  {
    label: "01 / PROBLEM",
    title: "从具体问题出发",
    copy: "先弄清真正卡住人的步骤，再决定软件应该做什么。",
  },
  {
    label: "02 / CLARITY",
    title: "把控制权交给用户",
    copy: "重要状态、执行顺序和风险边界应该清楚可见。",
  },
  {
    label: "03 / CRAFT",
    title: "持续打磨可用性",
    copy: "一个小工具也值得被认真维护，而不是做完即止。",
  },
];

const releaseHistory = [
  {
    version: "v1.1.4",
    date: "2026-07-27",
    label: "正式维护版",
    latest: true,
    summary:
      "优化后台预览截图并将完整版本历史集中到官网，刷新预览时不再前置目标窗口。",
    highlights: [
      "手动刷新、恢复目标、选择目标和设置变更后的预览刷新统一使用后台安全路径，不再前置、恢复或激活目标窗口。",
      "自动兼容模式优先使用 Windows Graphics Capture，再依次降级到 PrintWindow、WM_PRINTCLIENT 和屏幕客户区 GDI。",
      "截图工作移至后台线程；捕获失败时可沿用最近一次有效预览，避免阻塞主界面操作。",
      "程序内版本日志只显示当前最新版，窗口底部可直接打开官网查看完整版本历史。",
      "官网新增按时间排列的可展开更新日志，集中展示 v1.1.4 及更早的正式版本。",
      "继续兼容 v1.1.1 正式版配置及 SchemaVersion 1。",
    ],
  },
  {
    version: "v1.1.3",
    date: "2026-07-27",
    label: "正式维护版",
    summary:
      "新增安全的应用内自动更新流程，并补齐脚本目标绑定与最近脚本入口。",
    highlights: [
      "设置页新增“检查更新”；程序启动后每天静默检查一次，手动检查会明确提示当前是否已是最新版。",
      "从固定 HTTPS COS 清单读取版本与中英文说明，并通过防缓存请求避免读取旧版 latest.json。",
      "下载后严格校验文件大小、SHA-256 和程序版本号，全部通过后才替换启动器。",
      "更新时备份旧程序并在替换或重启失败时回滚；新启动器等待旧进程退出后再启动新版主程序。",
      "更新前保护未保存配置，多窗口同时更新使用互斥锁；更新只替换程序，不修改 .pccfg 或本机用户数据。",
      "每份 .pccfg 可保存目标进程与窗口标题；读取配置时自动匹配目标，多个候选时由用户选择。",
      "读取配置旁新增最近脚本列表，保留最近 8 份有效文件并显示脚本名与目标进程。",
    ],
  },
  {
    version: "v1.1.2",
    date: "2026-07-25",
    label: "正式维护版",
    summary:
      "优化预览画布、比例适配和界面对齐，并将使用说明与版本历史清晰分离。",
    highlights: [
      "优化完整预览画布与 9:16、16:9 显性比例框；截图保持原始宽高比适配，不裁剪、不旋转、不拉伸。",
      "比例框边线根据截图明暗自动切换对比色，首次加载截图后正确显示已有步骤圆点。",
      "选中左侧步骤或预览圆点时，对应圆点会持续变色并显示在其他圆点前方，直到切换步骤或点击预览空白处。",
      "修复最小窗口宽度，并统一步骤配置控件、步骤列表和文本的对齐。",
      "新增已循环次数实时计数，每完整执行一轮全部步骤后更新。",
      "新增随 .pccfg 保存和读取的脚本说明，可记录当前配置的用途、前置条件和注意事项。",
      "新增无需预先选择路径的“新建配置”按钮，保存时再指定 .pccfg 位置。",
      "保存窗口按当前脚本实际名称预填文件名，新建配置不再固定使用 PurrClickConfig.pccfg。",
      "标题栏显示当前脚本文件名并以 * 标记未保存状态；脚本说明入口移至运行栏最右侧。",
      "新增独立非模态使用说明，打开说明时仍可操作主界面。",
      "继续兼容 v1.1.1 正式版配置及 SchemaVersion 1。",
    ],
  },
  {
    version: "v1.1.1",
    date: "2026-07-24",
    label: "首个正式版",
    summary:
      "整合窗口选择、可视化步骤编辑、后台窗口消息、循环执行、配置存取与中英文界面。",
    highlights: [
      "新增内嵌 Localization.xml，作为主程序和轻量启动器共用的唯一翻译源。",
      "语言下拉框根据 XML 自动生成；新增语言不再需要修改枚举或界面代码。",
      "补齐主界面、设置、选窗、版本日志、运行日志、消息框、文件筛选器和错误信息的英文翻译。",
      "从窗口列表选择目标窗体，并在下次启动时自动恢复仍然有效的目标窗口。",
      "支持鼠标单击、按下、弹起和安全键盘按键；步骤可以添加、插入、删除、排序和拖拽。",
      "支持 XY 坐标和百分比坐标，切换方式时保持实际位置不变；预览中可直接拖动鼠标步骤。",
      "提供后台窗口消息和真实鼠标键盘两种输入方式，可按目标兼容性切换。",
      "支持次数、无限和时间三种循环模式，以及可修改的最小循环间隔。",
      "支持保存和读取 .pccfg 配置，并自动读取上一次有效配置；SchemaVersion = 1 作为后续兼容基线。",
    ],
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="shell nav" aria-label="主导航">
          <a className="brand" href="#top" aria-label="NiHaiMaker 首页">
            <span className="brand-mark" aria-hidden="true">
              <i />
              <i />
            </span>
            <span>NiHaiMaker</span>
          </a>
          <div className="nav-links">
            <a href="#works">作品</a>
            <a href="#changelog">更新日志</a>
            <a href="#about">理念</a>
            <a
              href="https://github.com/NiHaiMaker"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="shell hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Independent Software Maker</p>
            <h1 id="hero-title">
              把想法做成
              <br />
              真正有用的软件。
            </h1>
            <p className="hero-intro">
              这里收录 NiHaiMaker 独立设计、开发与维护的软件作品。
              从真实需求出发，把麻烦的步骤变成清晰、可靠、容易使用的小工具。
            </p>
            <a className="text-link" href="#works">
              浏览软件作品 <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-note" aria-label="创作方向">
            <div className="manifesto">
              <span className="manifesto-accent" aria-hidden="true" />
              <p className="manifesto-label">What I make</p>
              <p>从一个具体问题出发，持续打磨成可以每天使用的小产品。</p>
              <div className="manifesto-meta">
                <span>DESKTOP TOOLS</span>
                <span>THOUGHTFUL SOFTWARE</span>
              </div>
            </div>
          </div>
        </section>

        <section className="shell works" id="works" aria-labelledby="works-title">
          <div className="section-heading">
            <div>
              <p className="section-index">01 / SOFTWARE</p>
              <h2 id="works-title">软件作品</h2>
            </div>
            <p>独立设计、开发与维护</p>
          </div>

          <div className="gallery">
            <article className="product-card">
              <div className="product-copy">
                <div className="product-state">
                  <span aria-hidden="true" />
                  当前作品 · 持续维护
                </div>
                <div className="product-title-row">
                  <h3>PurrClick</h3>
                  <span className="version">v1.1.4</span>
                </div>
                <p className="product-kicker">可视化 Windows 自动化工具</p>
                <p className="product-description">
                  编排鼠标与键盘步骤，把重复操作整理成清晰、可复用的执行流程。
                  支持后台窗口消息、真实输入模式、循环配置和应用内更新。
                </p>
                <div className="tags" aria-label="PurrClick 技术标签">
                  <span>Windows</span>
                  <span>.NET 4.8</span>
                  <span>Automation</span>
                </div>
                <div className="actions">
                  <a className="button button-secondary" href="#purrclick">
                    了解详情 <span aria-hidden="true">→</span>
                  </a>
                  <a className="button button-primary" href={downloadUrl}>
                    下载最新版 <span aria-hidden="true">↓</span>
                  </a>
                </div>
                <p className="download-note">Windows 10 或更高版本 · 约 1.2 MB</p>
              </div>

              <div className="product-visual" aria-label="PurrClick 操作流程界面示意">
                <div className="visual-glow" aria-hidden="true" />
                <div className="app-window">
                  <div className="window-bar">
                    <div className="window-title">
                      <span className="window-appmark">P</span>
                      <span>PurrClick</span>
                    </div>
                    <div className="window-controls" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className="window-body">
                    <div className="app-sidebar">
                      <div className="side-item active">
                        <span className="side-dot" />
                        自动化
                      </div>
                      <div className="side-item">
                        <span className="side-dot" />
                        配置
                      </div>
                      <div className="side-item">
                        <span className="side-dot" />
                        设置
                      </div>
                    </div>
                    <div className="app-main">
                      <div className="app-main-head">
                        <strong>我的执行流程</strong>
                        <span>添加步骤</span>
                      </div>
                      <div className="workflow" aria-hidden="true">
                        <div className="step">
                          <b>01</b>
                          <span>
                            <strong>鼠标点击</strong>
                            <i />
                          </span>
                          <em className="is-on" />
                        </div>
                        <div className="step">
                          <b>02</b>
                          <span>
                            <strong>键盘按键</strong>
                            <i />
                          </span>
                          <em className="is-on" />
                        </div>
                        <div className="step">
                          <b>03</b>
                          <span>
                            <strong>循环执行</strong>
                            <i />
                          </span>
                          <em />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <aside className="placeholder-card" aria-label="后续软件作品">
              <span className="placeholder-index">NEXT /</span>
              <div className="placeholder-icon" aria-hidden="true" />
              <div>
                <h3>
                  更多作品
                  <br />
                  持续整理中
                </h3>
                <p>新的工具和实验项目，会在准备好后陆续出现在这里。</p>
              </div>
            </aside>
          </div>
        </section>

        <section
          className="product-detail"
          id="purrclick"
          aria-labelledby="purrclick-title"
        >
          <div className="shell">
            <div className="detail-heading">
              <p className="section-index">02 / PURRCLICK</p>
              <h2 id="purrclick-title">让重复操作变得清楚、可控。</h2>
              <p>
                PurrClick 面向标准 Windows
                窗体。你可以先逐步验证流程，再交给它循环执行。
              </p>
            </div>
            <div className="fact-grid">
              {productFacts.map((fact) => (
                <article key={fact.number} className="fact-card">
                  <span>{fact.number}</span>
                  <h3>{fact.title}</h3>
                  <p>{fact.copy}</p>
                </article>
              ))}
            </div>
            <div className="release-strip">
              <div>
                <span>最新正式版</span>
                <strong>PurrClick v1.1.4</strong>
              </div>
              <div>
                <span>发布日期</span>
                <strong>2026-07-27</strong>
              </div>
              <div>
                <span>运行环境</span>
                <strong>Windows 10+ / .NET 4.8</strong>
              </div>
              <a className="button button-primary" href={downloadUrl}>
                下载 PurrClick <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="safety-note">
              请仅对你拥有操作权限的软件、窗体和测试环境使用 PurrClick。
              部分游戏、DirectX/Unity 渲染窗口或受保护程序可能不会响应标准
              Win32 后台消息。
            </p>
          </div>
        </section>

        <section
          className="changelog"
          id="changelog"
          aria-labelledby="changelog-title"
        >
          <div className="shell changelog-grid">
            <div className="changelog-heading">
              <p className="section-index">03 / CHANGELOG</p>
              <h2 id="changelog-title">每一次更新，都有迹可循。</h2>
              <p>
                PurrClick 程序内只显示当前最新版。完整的正式版本记录集中保留在这里，
                按发布日期从新到旧排列。
              </p>
            </div>

            <div className="release-list">
              {releaseHistory.map((release) => (
                <details
                  key={release.version}
                  className={`release-card${release.latest ? " latest" : ""}`}
                  open={release.latest}
                >
                  <summary>
                    <span className="release-summary-main">
                      <span className="release-title-row">
                        <strong>{release.version}</strong>
                        <span className="release-label">{release.label}</span>
                        {release.latest ? (
                          <span className="latest-badge">当前版本</span>
                        ) : null}
                      </span>
                      <time dateTime={release.date}>{release.date}</time>
                      <span className="release-summary-copy">
                        {release.summary}
                      </span>
                    </span>
                    <span className="release-toggle" aria-hidden="true">
                      <i />
                    </span>
                  </summary>
                  <div className="release-content">
                    <ul>
                      {release.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="shell about" id="about" aria-labelledby="about-title">
          <div className="about-heading">
            <p className="section-index">04 / APPROACH</p>
            <h2 id="about-title">做好用的小软件，也是一件长期的事。</h2>
          </div>
          <div className="principle-grid">
            {makerPrinciples.map((principle) => (
              <article key={principle.label}>
                <span>{principle.label}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <div>
            <strong>NiHaiMaker</strong>
            <span>独立软件作品集</span>
          </div>
          <a
            href="https://github.com/NiHaiMaker"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </footer>
    </>
  );
}
