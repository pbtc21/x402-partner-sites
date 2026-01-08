import { Hono } from 'hono';

const app = new Hono();

// Partner configurations
const PARTNERS: Record<string, {
  name: string;
  tagline: string;
  twitter: string;
  tier: 'ai' | 'security' | 'infra' | 'builder';
  color: string;
  icon: string;
  description: string;
  valueProps: string[];
  ctaText: string;
  integrationIdeas: string[];
}> = {
  heyelsa: {
    name: 'HeyElsa AI',
    tagline: 'Crypto AI Agent Platform',
    twitter: 'HeyElsaAI',
    tier: 'ai',
    color: '#06b6d4',
    icon: '🤖',
    description: 'Autonomous crypto thesis exploration with real-time micropayments',
    valueProps: [
      'Agents pay per query - no subscriptions',
      'Instant sBTC settlement',
      'Zero billing overhead',
      'Revenue from every AI interaction'
    ],
    ctaText: 'Start Earning from Agent Queries',
    integrationIdeas: [
      'Pay-per-thesis: Agents pay for market analysis',
      'Research API: Micropayments for deep dives',
      'Alert service: Paid notifications for alpha'
    ]
  },
  daydreams: {
    name: 'Daydreams',
    tagline: 'Autonomous Agents on x402 Rails',
    twitter: 'daydreamsagents',
    tier: 'ai',
    color: '#8b5cf6',
    icon: '💭',
    description: 'Omnichain AI inference with native payment capabilities',
    valueProps: [
      'Agents that pay for their own services',
      'Cross-chain settlement via sBTC',
      'No human intervention needed',
      'Earn from autonomous agent actions'
    ],
    ctaText: 'Power Your Agents with Payments',
    integrationIdeas: [
      'Agent-to-agent payments for services',
      'Autonomous task completion with micropayments',
      'Multi-chain inference billing'
    ]
  },
  heurist: {
    name: 'Heurist AI',
    tagline: 'ZK-Secured AI Infrastructure',
    twitter: 'heurist_ai',
    tier: 'ai',
    color: '#10b981',
    icon: '🔐',
    description: 'Pay-per-inference with cryptographic guarantees',
    valueProps: [
      'ZK proofs for inference integrity',
      'Micropayments per compute cycle',
      'No upfront costs for users',
      'Scale revenue with usage'
    ],
    ctaText: 'Monetize Your Inference',
    integrationIdeas: [
      'Pay-per-inference API endpoints',
      'Verified computation marketplace',
      'ZK-proof generation as a service'
    ]
  },
  gaianet: {
    name: 'Gaianet AI',
    tagline: 'Decentralized AI Nodes',
    twitter: 'Gaianet_AI',
    tier: 'ai',
    color: '#f59e0b',
    icon: '🌐',
    description: 'Self-hosted x402 facilitators for sovereign inference',
    valueProps: [
      'Node operators earn from every call',
      'Decentralized payment routing',
      'No central payment processor',
      'Sovereign AI infrastructure'
    ],
    ctaText: 'Let Your Nodes Earn',
    integrationIdeas: [
      'Node-level payment splitting',
      'Geographic inference pricing',
      'Community-owned AI services'
    ]
  },
  creatorbuddy: {
    name: 'CreatorBuddy',
    tagline: 'AI Content Generation',
    twitter: 'CreatorBuddyX',
    tier: 'ai',
    color: '#ec4899',
    icon: '✨',
    description: 'Viral post creation with pay-per-generation',
    valueProps: [
      'Agents pay for content on demand',
      'No monthly subscriptions',
      'Scale with viral success',
      'Instant creator payments'
    ],
    ctaText: 'Monetize AI Content',
    integrationIdeas: [
      'Pay-per-post generation',
      'Viral content prediction API',
      'Multi-platform content adaptation'
    ]
  },
  dexter: {
    name: 'Dexter AI',
    tagline: 'x402 Agents & SDK',
    twitter: 'dexteraisol',
    tier: 'ai',
    color: '#3b82f6',
    icon: '🔧',
    description: 'Cross-chain bridging and market automation',
    valueProps: [
      'SDK for building paid agents',
      'Bridge fees via micropayments',
      'Automated market strategies',
      'Developer revenue sharing'
    ],
    ctaText: 'Build Paid Agent Actions',
    integrationIdeas: [
      'Bridge-as-a-service with x402',
      'Automated trading with micropayments',
      'SDK licensing via usage fees'
    ]
  },
  zauth: {
    name: 'Zauth',
    tagline: 'Trust Infrastructure for x402',
    twitter: 'zauthx402',
    tier: 'security',
    color: '#ef4444',
    icon: '🛡️',
    description: 'Endpoint verification for reliable agent discovery',
    valueProps: [
      'Agents verify before they pay',
      'Trust scores for endpoints',
      'Fraud prevention layer',
      'Earn from every verification'
    ],
    ctaText: 'Become the Trust Layer',
    integrationIdeas: [
      'Pre-call endpoint verification',
      'Trust score API',
      'Reputation marketplace'
    ]
  },
  cybercentry: {
    name: 'Cybercentry',
    tagline: 'Security Verification Endpoints',
    twitter: 'cybercentry',
    tier: 'security',
    color: '#dc2626',
    icon: '🔒',
    description: 'Low-cost security scans via micropayments',
    valueProps: [
      'Pennies per security check',
      'No enterprise contracts needed',
      'Real-time vulnerability scanning',
      'Scale security revenue'
    ],
    ctaText: 'Sell Security by the Scan',
    integrationIdeas: [
      'Contract audit micropayments',
      'Real-time threat detection',
      'Automated security monitoring'
    ]
  },
  bluepay: {
    name: 'Bluepay x402',
    tagline: 'Machine Commerce Builder',
    twitter: 'bluepayx402',
    tier: 'infra',
    color: '#2563eb',
    icon: '💳',
    description: 'Instant sBTC settlements for AI agents',
    valueProps: [
      'Purpose-built for machine payments',
      'Sub-second settlement',
      'No human intervention',
      'Native x402 integration'
    ],
    ctaText: 'Power Machine Commerce',
    integrationIdeas: [
      'Payment SDK for agents',
      'Settlement infrastructure',
      'Multi-token support'
    ]
  },
  rgb: {
    name: 'rawgroundbeef',
    tagline: 'openfacilitator + x402jobs',
    twitter: 'rawgroundbeef',
    tier: 'builder',
    color: '#84cc16',
    icon: '👷',
    description: 'Non-custodial tools for sBTC micropayments',
    valueProps: [
      'Open source facilitator',
      'Job board for agent tasks',
      'Community-driven development',
      'Full stack x402 tools'
    ],
    ctaText: 'Build the Open Stack',
    integrationIdeas: [
      'Facilitator hosting revenue',
      'Job board listing fees',
      'Developer tool subscriptions'
    ]
  },
  noble: {
    name: 'Noble',
    tagline: 'Stablecoin Micropayments',
    twitter: 'noble_xyz',
    tier: 'infra',
    color: '#6366f1',
    icon: '💎',
    description: 'x402 integration for stable value transfers',
    valueProps: [
      'Stable value for micropayments',
      'No volatility risk',
      'Cross-chain stablecoin rails',
      'Volume-based revenue'
    ],
    ctaText: 'Enable Stable Payments',
    integrationIdeas: [
      'USDC micropayment rails',
      'Stable settlement layer',
      'Multi-currency endpoints'
    ]
  },
  cashie: {
    name: 'Cashie CARV',
    tagline: 'Giveaway & Payment Tool',
    twitter: 'CashieCARV',
    tier: 'infra',
    color: '#f97316',
    icon: '🎁',
    description: 'ERC-8004 reward distributions via x402',
    valueProps: [
      'Agent-funded giveaways',
      'Micropayment rewards',
      'Viral distribution mechanics',
      'Community engagement revenue'
    ],
    ctaText: 'Power Agent Rewards',
    integrationIdeas: [
      'Automated reward distribution',
      'Quest completion payments',
      'Community incentive programs'
    ]
  },
  cronos: {
    name: 'Cronos',
    tagline: 'x402 Hackathon Host',
    twitter: 'cronos_chain',
    tier: 'infra',
    color: '#1e3a5f',
    icon: '🏆',
    description: 'Driving cross-chain x402 adoption',
    valueProps: [
      'Hackathon prize infrastructure',
      'Developer ecosystem growth',
      'Cross-chain x402 expansion',
      'Community building'
    ],
    ctaText: 'Partner on Hackathons',
    integrationIdeas: [
      'Hackathon prize distribution',
      'Developer bounty system',
      'Cross-chain showcase events'
    ]
  },
  phala: {
    name: 'Phala Network',
    tagline: 'Confidential AI Compute',
    twitter: 'PhalaNetwork',
    tier: 'infra',
    color: '#c6ff00',
    icon: '🛡️',
    description: 'TEE-secured compute with micropayment billing',
    valueProps: [
      'Confidential compute per request',
      'Privacy-preserving AI inference',
      'Pay-per-use TEE execution',
      'No data exposure risk'
    ],
    ctaText: 'Monetize Confidential Compute',
    integrationIdeas: [
      'Private AI inference API',
      'Secure data processing marketplace',
      'Confidential smart contract execution'
    ]
  },
  lit: {
    name: 'Lit Protocol',
    tagline: 'Decentralized Key Management',
    twitter: 'LitProtocol',
    tier: 'security',
    color: '#ff6b35',
    icon: '🔑',
    description: 'Programmable signing with micropayment triggers',
    valueProps: [
      'Pay-per-signature operations',
      'Decentralized key custody',
      'Conditional access control',
      'Revenue from every sign request'
    ],
    ctaText: 'Earn from Key Operations',
    integrationIdeas: [
      'Signature-as-a-service API',
      'Conditional encryption marketplace',
      'Multi-party signing fees'
    ]
  },
  chainsafe: {
    name: 'ChainSafe',
    tagline: 'Web3 Infrastructure',
    twitter: 'ChainSafeth',
    tier: 'infra',
    color: '#2563eb',
    icon: '⛓️',
    description: 'Multi-chain tooling with usage-based pricing',
    valueProps: [
      'RPC calls with micropayments',
      'Cross-chain data queries',
      'Storage API monetization',
      'Developer tool revenue'
    ],
    ctaText: 'Monetize Your Infrastructure',
    integrationIdeas: [
      'Pay-per-RPC endpoint',
      'Cross-chain bridge fees',
      'Storage pinning marketplace'
    ]
  },
  audius: {
    name: 'Audius',
    tagline: 'Decentralized Music Streaming',
    twitter: 'audaborproject',
    tier: 'infra',
    color: '#7e22ce',
    icon: '🎵',
    description: 'Stream-to-earn with instant micropayments',
    valueProps: [
      'Pay-per-stream to artists',
      'No middleman fees',
      'Instant creator payments',
      'Fan-to-artist direct support'
    ],
    ctaText: 'Enable Stream Payments',
    integrationIdeas: [
      'Per-stream artist royalties',
      'Premium content unlocks',
      'Fan engagement rewards'
    ]
  },
  livepeer: {
    name: 'Livepeer',
    tagline: 'Decentralized Video Infrastructure',
    twitter: 'Livepeer',
    tier: 'infra',
    color: '#00eb88',
    icon: '📹',
    description: 'Video transcoding with pay-per-minute billing',
    valueProps: [
      'Transcode fees per minute',
      'Streaming bandwidth payments',
      'No upfront infrastructure costs',
      'Scale with viewership'
    ],
    ctaText: 'Monetize Video Processing',
    integrationIdeas: [
      'Pay-per-transcode API',
      'Live streaming micropayments',
      'CDN bandwidth billing'
    ]
  },
  akash: {
    name: 'Akash Network',
    tagline: 'Decentralized Cloud Compute',
    twitter: 'akabornetwork',
    tier: 'infra',
    color: '#ff4136',
    icon: '☁️',
    description: 'Serverless compute with crypto-native billing',
    valueProps: [
      'Pay-per-compute cycle',
      'No cloud vendor lock-in',
      'Instant resource scaling',
      'Provider revenue sharing'
    ],
    ctaText: 'Earn from Compute',
    integrationIdeas: [
      'Serverless function marketplace',
      'GPU compute auctions',
      'Container hosting fees'
    ]
  },
  render: {
    name: 'Render Network',
    tagline: 'Distributed GPU Rendering',
    twitter: 'rendernetwork',
    tier: 'infra',
    color: '#ff9500',
    icon: '🎨',
    description: 'GPU rendering with per-frame micropayments',
    valueProps: [
      'Pay-per-frame rendering',
      'Distributed GPU power',
      'No hardware investment',
      'Artist-friendly pricing'
    ],
    ctaText: 'Monetize GPU Power',
    integrationIdeas: [
      'Per-frame render billing',
      'Real-time 3D streaming',
      'AI image generation fees'
    ]
  },
  fleek: {
    name: 'Fleek',
    tagline: 'Web3 Hosting & Storage',
    twitter: 'fleaborxyz',
    tier: 'infra',
    color: '#ffd000',
    icon: '🚀',
    description: 'Decentralized hosting with usage-based fees',
    valueProps: [
      'Bandwidth-based pricing',
      'IPFS pinning marketplace',
      'Edge function billing',
      'No monthly minimums'
    ],
    ctaText: 'Host and Earn',
    integrationIdeas: [
      'Pay-per-request CDN',
      'Storage pinning fees',
      'Edge compute marketplace'
    ]
  },
  nodepay: {
    name: 'Nodepay',
    tagline: 'DePIN Bandwidth Sharing',
    twitter: 'nodepay_ai',
    tier: 'infra',
    color: '#00d4ff',
    icon: '📡',
    description: 'Share bandwidth, earn micropayments',
    valueProps: [
      'Passive income from bandwidth',
      'No hardware investment',
      'Instant payouts',
      'Community-powered network'
    ],
    ctaText: 'Turn Bandwidth into Revenue',
    integrationIdeas: [
      'Bandwidth sharing rewards',
      'Proxy service marketplace',
      'Data relay payments'
    ]
  },
  saturn: {
    name: 'Saturn Network',
    tagline: 'Decentralized CDN',
    twitter: 'SaturnNetwork',
    tier: 'infra',
    color: '#6366f1',
    icon: '🪐',
    description: 'Content delivery with node operator rewards',
    valueProps: [
      'CDN nodes earn per request',
      'Geographic distribution rewards',
      'No centralized bottleneck',
      'Scale revenue with traffic'
    ],
    ctaText: 'Run a CDN Node',
    integrationIdeas: [
      'Per-request CDN fees',
      'Edge caching rewards',
      'Content acceleration marketplace'
    ]
  }
};

const TIER_LABELS: Record<string, string> = {
  ai: 'AI Agent Platform',
  security: 'Security & Trust',
  infra: 'Infrastructure',
  builder: 'Builder Tools'
};

// Get partner from subdomain
function getPartnerFromHost(host: string): string | null {
  const subdomain = host.split('.')[0];
  if (PARTNERS[subdomain]) return subdomain;
  return null;
}

// Generate partner page
function renderPartnerPage(partnerId: string): string {
  const p = PARTNERS[partnerId];
  if (!p) return 'Partner not found';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${p.name} x x402 | Earn from Agent Micropayments</title>
  <meta name="description" content="${p.description}">
  <meta property="og:title" content="${p.name} x x402 Partnership">
  <meta property="og:description" content="${p.description}">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a1628 100%);
      color: #e0e0e0;
      min-height: 100vh;
      line-height: 1.6;
    }
    .hero {
      text-align: center;
      padding: 80px 20px 60px;
      background: radial-gradient(ellipse at top, ${p.color}20 0%, transparent 60%);
    }
    .hero-icon { font-size: 4rem; margin-bottom: 20px; }
    .hero h1 { font-size: 2.5rem; margin-bottom: 10px; }
    .hero h1 span { color: ${p.color}; }
    .hero .tagline { color: #888; font-size: 1.2rem; margin-bottom: 10px; }
    .hero .tier {
      display: inline-block;
      background: ${p.color}20;
      color: ${p.color};
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 0.85rem;
      margin-bottom: 20px;
    }
    .hero .description {
      max-width: 600px;
      margin: 0 auto 30px;
      font-size: 1.1rem;
      color: #ccc;
    }
    .cta-btn {
      display: inline-block;
      background: linear-gradient(135deg, ${p.color}, ${p.color}dd);
      color: white;
      padding: 16px 32px;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      text-decoration: none;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .cta-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 40px ${p.color}40;
    }
    .container { max-width: 1000px; margin: 0 auto; padding: 40px 20px; }
    .section { margin-bottom: 60px; }
    .section h2 {
      font-size: 1.8rem;
      margin-bottom: 30px;
      text-align: center;
      color: #fff;
    }
    .value-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
    }
    .value-card {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      padding: 24px;
      text-align: center;
    }
    .value-card .check {
      color: ${p.color};
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
    .ideas-list {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      padding: 30px;
    }
    .ideas-list li {
      padding: 15px 0;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      list-style: none;
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .ideas-list li:last-child { border-bottom: none; }
    .ideas-list .num {
      background: ${p.color}20;
      color: ${p.color};
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      flex-shrink: 0;
    }
    .stats-row {
      display: flex;
      justify-content: center;
      gap: 40px;
      flex-wrap: wrap;
      margin: 40px 0;
    }
    .stat { text-align: center; }
    .stat-value { font-size: 2.5rem; font-weight: bold; color: ${p.color}; }
    .stat-label { color: #888; font-size: 0.9rem; }
    .how-it-works {
      background: rgba(255,255,255,0.03);
      border-radius: 12px;
      padding: 40px;
    }
    .steps {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
    }
    .step {
      flex: 1;
      min-width: 200px;
      text-align: center;
    }
    .step-num {
      width: 50px;
      height: 50px;
      background: ${p.color};
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0 auto 15px;
    }
    .step h3 { margin-bottom: 10px; }
    .step p { color: #888; font-size: 0.9rem; }
    .final-cta {
      text-align: center;
      padding: 60px 20px;
      background: linear-gradient(180deg, transparent, ${p.color}10);
    }
    .final-cta h2 { margin-bottom: 20px; }
    .final-cta p { color: #888; margin-bottom: 30px; }
    .footer {
      text-align: center;
      padding: 40px 20px;
      color: #666;
      font-size: 0.85rem;
    }
    .footer a { color: ${p.color}; text-decoration: none; }
    .twitter-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #888;
      text-decoration: none;
      margin-top: 15px;
    }
    .twitter-link:hover { color: ${p.color}; }
  </style>
</head>
<body>
  <div class="hero">
    <div class="hero-icon">${p.icon}</div>
    <h1>${p.name} <span>x</span> x402</h1>
    <div class="tagline">${p.tagline}</div>
    <div class="tier">${TIER_LABELS[p.tier]}</div>
    <p class="description">${p.description}</p>
    <a href="https://partners.pbtc21.dev/onboard?name=${encodeURIComponent(p.name)}&twitter=${p.twitter}&tier=${p.tier}" class="cta-btn">${p.ctaText}</a>
    <div>
      <a href="https://twitter.com/${p.twitter}" target="_blank" class="twitter-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        @${p.twitter}
      </a>
    </div>
  </div>

  <div class="container">
    <div class="stats-row">
      <div class="stat">
        <div class="stat-value">19</div>
        <div class="stat-label">Live x402 Endpoints</div>
      </div>
      <div class="stat">
        <div class="stat-value">$0</div>
        <div class="stat-label">Integration Cost</div>
      </div>
      <div class="stat">
        <div class="stat-value">100%</div>
        <div class="stat-label">Your Revenue</div>
      </div>
    </div>

    <div class="section">
      <h2>Why Partner with x402?</h2>
      <div class="value-grid">
        ${p.valueProps.map(v => `
          <div class="value-card">
            <div class="check">✓</div>
            <p>${v}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <h2>Integration Ideas</h2>
      <ul class="ideas-list">
        ${p.integrationIdeas.map((idea, i) => `
          <li>
            <span class="num">${i + 1}</span>
            <span>${idea}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div class="section">
      <h2>How It Works</h2>
      <div class="how-it-works">
        <div class="steps">
          <div class="step">
            <div class="step-num">1</div>
            <h3>Connect Wallet</h3>
            <p>Provide your STX wallet address to receive earnings</p>
          </div>
          <div class="step">
            <div class="step-num">2</div>
            <h3>We Build</h3>
            <p>We create x402 endpoints tailored to your service</p>
          </div>
          <div class="step">
            <div class="step-num">3</div>
            <h3>You Earn</h3>
            <p>Revenue flows to your wallet with every agent payment</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="final-cta">
    <h2>Ready to Earn from Agent Micropayments?</h2>
    <p>5 minute setup. We handle the integration. You collect the revenue.</p>
    <a href="https://partners.pbtc21.dev/onboard?name=${encodeURIComponent(p.name)}&twitter=${p.twitter}&tier=${p.tier}" class="cta-btn">${p.ctaText}</a>
  </div>

  <div class="footer">
    <p>Powered by <a href="https://pbtc21.dev">pbtc21.dev</a> | <a href="https://partners.pbtc21.dev">Partner Portal</a></p>
    <p style="margin-top: 10px;">x402 Protocol on Stacks/sBTC</p>
  </div>
</body>
</html>`;
}

// Routes
app.get('/', (c) => {
  const host = c.req.header('host') || '';
  const partnerId = getPartnerFromHost(host);

  if (partnerId) {
    return c.html(renderPartnerPage(partnerId));
  }

  // Default: show list of all partner sites
  const partnerList = Object.entries(PARTNERS).map(([id, p]) => `
    <li style="margin: 10px 0;">
      <a href="https://${id}.pbtc21.dev" style="color: ${p.color};">${p.icon} ${p.name}</a>
      - ${p.tagline}
    </li>
  `).join('');

  return c.html(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>x402 Partner Sites</title>
      <style>
        body { font-family: sans-serif; background: #0a0a0a; color: #e0e0e0; padding: 40px; }
        a { text-decoration: none; }
        a:hover { text-decoration: underline; }
      </style>
    </head>
    <body>
      <h1>x402 Partner Sites</h1>
      <p>13 custom landing pages for priority partners:</p>
      <ul>${partnerList}</ul>
    </body>
    </html>
  `);
});

// Health check
app.get('/health', (c) => c.json({ status: 'ok', service: 'x402-partner-sites' }));

// API: Get partner config
app.get('/api/partners/:id', (c) => {
  const id = c.req.param('id');
  const partner = PARTNERS[id];
  if (!partner) return c.json({ error: 'Partner not found' }, 404);
  return c.json({ id, ...partner });
});

// API: List all partners
app.get('/api/partners', (c) => {
  return c.json({ partners: Object.keys(PARTNERS) });
});

export default app;
