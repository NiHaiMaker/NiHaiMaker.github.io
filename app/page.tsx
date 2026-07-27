const downloadUrl =
  "https://purrclick-update-1252241379.cos.ap-guangzhou.myqcloud.com/releases/PurrClick-1.1.3.exe";

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
                  <span className="version">v1.1.3</span>
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
                <p className="download-note">Windows 10 或更高版本 · 约 0.8 MB</p>
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
                <strong>PurrClick v1.1.3</strong>
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

        <section className="shell about" id="about" aria-labelledby="about-title">
          <div className="about-heading">
            <p className="section-index">03 / APPROACH</p>
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
