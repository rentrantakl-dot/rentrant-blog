import { useState } from "react";

const categories = {
    "Core Evergreen": {
        color: "bg-emerald-50 border-emerald-200",
        tagColor: "bg-emerald-100 text-emerald-800",
        description: "Foundational content that ranks long-term and builds authority"
    },
    "Seasonal / Timely": {
        color: "bg-amber-50 border-amber-200",
        tagColor: "bg-amber-100 text-amber-800",
        description: "Tied to rental market cycles — publish at peak search moments"
    },
    "Data-Driven": {
        color: "bg-blue-50 border-blue-200",
        tagColor: "bg-blue-100 text-blue-800",
        description: "Unique to RentRant — uses your own data as it grows"
    },
    "Rights & Legal": {
        color: "bg-red-50 border-red-200",
        tagColor: "bg-red-100 text-red-800",
        description: "High-trust, high-search content — positions RentRant as credible"
    },
    "Suburb Guides": {
        color: "bg-violet-50 border-violet-200",
        tagColor: "bg-violet-100 text-violet-800",
        description: "Hyperlocal SEO play — one per suburb, massive long-tail potential"
    }
};

const articles = [
    {
        title: "How to Tell if Your Rent Is Fair — Before You Sign the Lease",
        category: "Core Evergreen",
        status: "Written",
        priority: 1,
        targetKeywords: ["is my rent fair nz", "auckland rent prices", "market rent auckland", "how much should i pay rent auckland"],
        hypothesis: "Renters search for price validation before signing. No NZ-specific guide exists that combines government tools + practical framework. High intent, low competition.",
        searchVolume: "High",
        competition: "Low-Medium",
        cta: "Check what others rated your property on RentRant",
        notes: "Already written. Evergreen — update rent benchmarks annually in January."
    },
    {
        title: "Red Flags to Watch for When Viewing Auckland Rentals",
        category: "Core Evergreen",
        status: "Planned",
        priority: 2,
        targetKeywords: ["what to look for renting nz", "rental viewing checklist nz", "red flags rental property", "rental inspection checklist auckland"],
        hypothesis: "People Google this right before or after a viewing. Existing NZ content is thin — mostly generic property manager blogs. A detailed, renter-perspective checklist with photos/examples would rank well and build trust.",
        searchVolume: "Medium",
        competition: "Low",
        cta: "Before you sign — see what past tenants rated this property",
        notes: "Include: mould signs, insulation checks, noise test, demand signals at open home. Reference Healthy Homes. Downloadable PDF checklist = email capture."
    },
    {
        title: "Is Your Auckland Rental Healthy Homes Compliant? How to Check",
        category: "Rights & Legal",
        status: "Planned",
        priority: 3,
        targetKeywords: ["healthy homes standards nz", "is my rental healthy homes compliant", "healthy homes checklist tenant", "healthy homes compliance statement"],
        hypothesis: "Huge search volume since July 2025 deadline. Most content is written FOR landlords. Almost nothing written FROM the tenant's perspective — what to look for, how to check, what to do if not compliant. Gap is wide open.",
        searchVolume: "High",
        competition: "Medium",
        cta: "Rate your rental's condition on RentRant — help others know what to expect",
        notes: "Include: the 5 standards explained simply, how to request compliance statement, what to do if landlord refuses, Tenancy Tribunal process, real case examples with damages awarded. Link to official resources."
    },
    {
        title: "What to Do When Your Landlord Raises the Rent",
        category: "Rights & Legal",
        status: "Planned",
        priority: 4,
        targetKeywords: ["rent increase nz", "landlord raised rent too much", "how to challenge rent increase nz", "rent increase rules new zealand"],
        hypothesis: "Highly emotional search moment — people Google this when they've just received a rent increase notice. Existing content is mostly legal jargon. A clear, step-by-step guide with the 2025 RTA changes would rank and convert.",
        searchVolume: "High",
        competition: "Medium",
        cta: "See what comparable properties rate on RentRant before you negotiate",
        notes: "Include: 12-month rule, 60-day notice, how to use market rent tool as evidence, negotiation script, when to go to Tribunal, the new 90-day no-cause termination dynamic."
    },
    {
        title: "Mould in Your Auckland Rental: Your Rights and What to Do About It",
        category: "Rights & Legal",
        status: "Planned",
        priority: 5,
        targetKeywords: ["mould in rental nz", "mould landlord responsibility nz", "mould auckland rental", "black mould rental property new zealand"],
        hypothesis: "Auckland's humid climate makes this perennial. RNZ, Stuff, NZ Herald run mould rental stories regularly — massive ongoing search interest. Existing guides are scattered. A definitive, practical guide from the tenant side would rank for years.",
        searchVolume: "High",
        competition: "Medium",
        cta: "Rate insulation, ventilation and moisture on RentRant — make conditions visible",
        notes: "Include: landlord vs tenant responsibility, Healthy Homes ventilation/moisture standards, how to document mould for Tribunal, real case law (Kāinga Ora $8,957 case), prevention tips. Tone: practical not angry."
    },
    {
        title: "The True Cost of Renting in Auckland: Beyond the Weekly Price",
        category: "Core Evergreen",
        status: "Written",
        priority: 6,
        targetKeywords: ["cost of living auckland renter", "renting costs auckland", "auckland rent plus bills", "how much does it cost to rent auckland"],
        hypothesis: "International migrants + first-time renters search this heavily. No comprehensive breakdown exists that includes power, water, internet, insurance, transport by suburb. Could rank for 'cost of living Auckland' adjacent queries.",
        searchVolume: "Medium-High",
        competition: "Low",
        cta: "See real tenant ratings for properties in your target suburb on RentRant",
        notes: "Break down: rent + power (by insulation quality) + water + internet + transport + insurance. Include suburb-level cost comparisons. A cold flat in Grey Lynn vs an efficient townhouse in Mt Albert. Could include a simple calculator."
    },
    {
        title: "Auckland Rental Market: What Renters Need to Know in 2026",
        category: "Seasonal / Timely",
        status: "Written",
        priority: 7,
        targetKeywords: ["auckland rental market 2026", "auckland rents going up or down", "rental market forecast nz 2026", "is it a good time to rent auckland"],
        hypothesis: "People search '[city] rental market [year]' every January-March. Currently dominated by property manager and investor content. A renter-perspective market update would be unique positioning and refreshable annually.",
        searchVolume: "Medium (seasonal peak Jan-Mar)",
        competition: "Medium",
        cta: "Help build the picture — rate your rental on RentRant",
        notes: "Publish/update every January. Include: median rents, supply/demand shift, negotiation power assessment, new law changes. Reference realestate.co.nz and MBIE data. The 2025→2026 story: rents fell nationally for first time in a decade."
    },
    {
        title: "Tenancy Law Changes 2025: What Renters Actually Need to Know",
        category: "Rights & Legal",
        status: "Written",
        priority: 8,
        targetKeywords: ["tenancy law changes 2025 nz", "new tenancy rules nz", "90 day notice landlord nz", "can landlord evict without reason nz"],
        hypothesis: "The Residential Tenancies Amendment Act 2024 (effective Jan 2025) brought major changes. Most coverage is landlord-focused. A clear tenant-perspective explainer would fill a gap and rank for ongoing searches as people encounter these rules.",
        searchVolume: "Medium-High",
        competition: "Medium",
        cta: "Know your rights. Know your rental. RentRant.",
        notes: "Cover: 90-day no-cause termination return, 21-day tenant notice, 42-day owner-use notice, pet bond rules, fixed-term changes. Tone: informative, not alarmist. Acknowledge both sides."
    },
    {
        title: "First Time Renting in Auckland: The Complete Guide",
        category: "Core Evergreen",
        status: "Written",
        priority: 9,
        targetKeywords: ["first time renting nz", "how to rent auckland", "renting guide new zealand", "renting first flat auckland"],
        hypothesis: "Students, immigrants, and young adults search this year-round. Existing content is either too generic (global sites) or too brief (NZ property manager blogs). A genuinely comprehensive Auckland-specific guide would be a magnet.",
        searchVolume: "Medium",
        competition: "Low-Medium",
        cta: "Before you sign — check the property on RentRant",
        notes: "Cover: where to search, how viewings work, bonds and rights, what you pay vs landlord, tenancy agreement explained, flatting vs solo, budgeting. Link out to other RentRant articles for depth on each topic."
    },
    {
        title: "Best Suburbs for Renters in Auckland (2026 Guide)",
        category: "Suburb Guides",
        status: "Written",
        priority: 10,
        targetKeywords: ["best suburbs rent auckland", "cheapest suburbs auckland rent", "where to rent auckland", "best areas to live auckland renter"],
        hypothesis: "Massive search intent from people moving to Auckland or changing suburbs. Existing content is investor-focused (best suburbs to BUY). A renter-perspective guide covering livability, transport, rent levels, and condition would be unique.",
        searchVolume: "High",
        competition: "Medium",
        cta: "See real tenant ratings by suburb on RentRant",
        notes: "Tier structure: Budget-friendly, mid-range, premium. For each: median rent, transport links, vibe, walkability, school zones, known issues. Update annually. This becomes the hub page linking to individual suburb guides later."
    },
    {
        title: "Renting in [Suburb]: What Tenants Say (Template)",
        category: "Suburb Guides",
        status: "Future",
        priority: 15,
        targetKeywords: ["renting in ponsonby", "renting mt eden auckland", "grey lynn rental", "[suburb] auckland rental review"],
        hypothesis: "Hyperlocal long-tail SEO. Each suburb page targets '[suburb] renting/rental' queries. Low individual volume but collectively massive. Once RentRant has data, these become uniquely valuable — no competitor can replicate address-level tenant ratings.",
        searchVolume: "Low per suburb, high collectively",
        competition: "Very Low",
        cta: "See all tenant ratings for [Suburb] on RentRant",
        notes: "Template: median rent, property types, Healthy Homes compliance rate (from RentRant data), common issues reported, transport, noise, schools. Create once RentRant has 50+ ratings in Auckland. Start with top 10 suburbs by data density."
    },
    {
        title: "How to Negotiate Your Rent in Auckland (Yes, You Can)",
        category: "Core Evergreen",
        status: "Planned",
        priority: 11,
        targetKeywords: ["negotiate rent nz", "can you negotiate rent auckland", "how to ask for lower rent nz", "rent negotiation tips"],
        hypothesis: "Timely — 2025/2026 is the first renter-favourable market in a decade. The Spinoff, RNZ covered the housing minister encouraging renters to negotiate. People are searching for HOW. No practical NZ guide exists with scripts and evidence strategies.",
        searchVolume: "Medium (rising)",
        competition: "Very Low",
        cta: "Use RentRant data to see what comparable properties rate — strengthen your negotiation",
        notes: "Include: when you have leverage (days on market, vacancy rates), evidence to gather (market rent tool, comparable listings), email/conversation scripts, what to do if refused, the Stuart Donovan anecdote from The Spinoff. Tone: empowering but realistic."
    },
    {
        title: "Auckland Rental Scams: How to Spot Them Before You Lose Money",
        category: "Core Evergreen",
        status: "Planned",
        priority: 12,
        targetKeywords: ["rental scam auckland", "fake rental listing nz", "rental scam new zealand", "how to avoid rental scams nz"],
        hypothesis: "Scam awareness searches spike during high-turnover periods (Jan-Mar, Jul-Aug). Facebook group scams + fake Trade Me listings are well-documented. No definitive NZ guide exists. High trust-building potential.",
        searchVolume: "Medium (seasonal spikes)",
        competition: "Low",
        cta: "Verified tenant ratings on RentRant — real experiences, not fake listings",
        notes: "Include: common scam types (too-good-to-be-true pricing, payment before viewing, fake landlord), verification steps, what legitimate process looks like, where to report. Reference NZ Police and Netsafe."
    },
    {
        title: "Your Bond Rights: What Auckland Renters Need to Know",
        category: "Rights & Legal",
        status: "Planned",
        priority: 13,
        targetKeywords: ["bond rights nz", "getting bond back nz", "bond refund tenant nz", "how long to get bond back new zealand"],
        hypothesis: "Bond disputes are the #1 Tenancy Tribunal issue. Every renter searches this at lease end. Existing content is legalistic. A practical guide with photo documentation tips, timeline, and dispute process would rank well.",
        searchVolume: "High",
        competition: "Medium",
        cta: "Rate your rental before you move out — help the next tenant",
        notes: "Include: bond lodgement rules, fair wear and tear vs damage (with examples), how to document condition at start AND end, new online bond process, dispute timeline, pet bond rules (new 2025)."
    },
    {
        title: "Property Manager vs Private Landlord: What's Better for Auckland Renters?",
        category: "Core Evergreen",
        status: "Future",
        priority: 14,
        targetKeywords: ["property manager vs landlord nz", "renting from property manager", "private landlord nz rental"],
        hypothesis: "A question many renters have but don't know how to evaluate. No NZ content addresses this from the tenant perspective. Could become valuable once RentRant has data comparing responsiveness ratings between managed and private properties.",
        searchVolume: "Low",
        competition: "Very Low",
        cta: "See how tenants rate property managers vs private landlords on RentRant",
        notes: "Requires RentRant data to be credible. Park until there's enough data to make evidence-based claims. Could be a strong data-driven piece later."
    },
    {
        title: "What the Rental Market Looks Like from the Tenant Side",
        category: "Data-Driven",
        status: "Future",
        priority: 16,
        targetKeywords: ["auckland rental report", "tenant survey auckland", "rental quality auckland data"],
        hypothesis: "Once RentRant has meaningful data (500+ ratings), publish an annual 'Auckland Rental Report Card' from aggregated tenant ratings. No one else has this data. Massive PR and backlink potential — media loves original data stories.",
        searchVolume: "Low (but PR-driven)",
        competition: "None — unique data",
        cta: "Contribute your ratings — help build the picture",
        notes: "This is the long game. Requires 6-12 months of data collection. When published: pitch to NZ Herald, Stuff, RNZ, The Spinoff. Best/worst suburbs by tenant rating. Most common complaints. Landlord responsiveness scores. This single piece could generate more backlinks than all other content combined."
    }
];

const googleTrendsGuide = {
    title: "How to Use Google Trends for RentRant Content Ideas",
    steps: [
        {
            heading: "1. Go to trends.google.com and set your region",
            detail: "Set location to 'New Zealand' (not worldwide). Set time range to 'Past 12 months' for seasonal patterns, or '5 years' for long-term trends. Category: 'Real Estate' narrows results to property-related searches."
        },
        {
            heading: "2. Start with your seed topics",
            detail: "Search these terms and compare them: 'rent auckland', 'rental auckland', 'healthy homes', 'tenancy tribunal', 'landlord nz'. The relative interest shows which topics have more search demand. Look at the 'Interest over time' graph — spikes = seasonal opportunities."
        },
        {
            heading: "3. Check 'Related queries' (the gold mine)",
            detail: "Below each trend, click 'Related queries' → 'Rising'. These are queries growing fastest. Example: searching 'rent auckland' might show rising queries like 'rent decrease auckland 2026' or 'negotiate rent nz'. These are article ideas with confirmed growing demand."
        },
        {
            heading: "4. Compare topics to find seasonal windows",
            detail: "Compare 'renting auckland' vs 'moving auckland' vs 'flatmates auckland'. You'll see they all spike in January–February (new year, uni starts, lease turnover). This tells you WHEN to publish — have content live 2-4 weeks before the peak."
        },
        {
            heading: "5. Validate with 'Related topics'",
            detail: "Click 'Related topics' to see what else people searching your term care about. If 'healthy homes' appears as a related topic for 'rent auckland', it confirms the crossover. Write content that bridges both."
        },
        {
            heading: "6. Use it for suburb content timing",
            detail: "Search '[suburb name] rental' for your target suburbs. Some suburbs have seasonal spikes (student areas peak Jan-Feb). This tells you which suburb guides to publish first and when."
        },
        {
            heading: "7. The comparison trick",
            detail: "Google Trends lets you compare up to 5 terms. Try: 'mould rental' vs 'cold rental' vs 'rent too high' vs 'landlord not fixing' vs 'bond dispute'. Whichever is highest = highest search demand = write that article first."
        },
        {
            heading: "8. Monthly routine (15 minutes)",
            detail: "Every month, check your top 5 seed terms for new 'Rising' related queries. If something new appears (like a law change or news event), you have a window to publish timely content before competitors. Set a calendar reminder."
        }
    ],
    proTips: [
        "Google Trends shows RELATIVE interest, not absolute volume. A term scoring '100' just means it's the peak for that term, not that it gets 100 searches.",
        "Combine Trends with Google's 'People also ask' boxes. Search your target keyword in Google, note the PAA questions — each one is a potential H2 in your article.",
        "Use Google Search Console (once the blog is live) to find queries where you're ranking 8-20th position. These are 'striking distance' keywords — improving existing content to rank higher is often easier than writing new content.",
        "For NZ specifically: search volume is small, so Trends data can be noisy. Focus on the seasonal patterns and rising queries rather than absolute numbers.",
        "Free alternative to paid tools: use 'AlsoAsked.com' — it maps Google's 'People Also Ask' into a visual tree. Enter 'renting auckland' and you'll get dozens of real questions people are asking."
    ]
};

export default function ContentStrategy() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [expandedArticle, setExpandedArticle] = useState(null);
    const [showTrendsGuide, setShowTrendsGuide] = useState(false);
    const [expandedStep, setExpandedStep] = useState(null);

    const filteredArticles = selectedCategory === "All"
        ? articles
        : articles.filter(a => a.category === selectedCategory);

    return (
        <div className="max-w-4xl mx-auto p-6 font-sans">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">RentRant Content Strategy</h1>
                <p className="text-gray-600 text-lg">Article ideas, SEO hypotheses, and positioning — prioritised for a solo founder with zero ad budget.</p>
            </div>

            {/* Strategy overview */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-8">
                <h2 className="font-semibold text-gray-900 mb-3">Content Positioning Thesis</h2>
                <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
                    <p><strong>The gap:</strong> NZ rental content is written for landlords and investors. Property managers, agencies, and investor blogs dominate search results. Almost nothing exists from the tenant's perspective with practical, evidence-based guidance.</p>
                    <p><strong>RentRant's angle:</strong> Write the content renters are actually searching for — with the calm, data-driven tone of someone helping a friend, not an activist with a megaphone. Every article should make the reader think: "This is the resource I wish I had."</p>
                    <p><strong>The flywheel:</strong> Content ranks → brings renters to site → renters discover RentRant → submit ratings → ratings create unique data → unique data powers more content → content ranks. The data moat grows with every rating.</p>
                    <p><strong>Primary SEO strategy:</strong> Win on long-tail, NZ-specific queries where competition is property manager blogs with thin content. Don't compete on generic terms — own the "[topic] + NZ/Auckland" space.</p>
                </div>
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-6">
                <button
                    onClick={() => setSelectedCategory("All")}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedCategory === "All" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                    All ({articles.length})
                </button>
                {Object.entries(categories).map(([name, config]) => (
                    <button
                        key={name}
                        onClick={() => setSelectedCategory(name)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedCategory === name ? "bg-gray-900 text-white" : `${config.tagColor} hover:opacity-80`}`}
                    >
                        {name} ({articles.filter(a => a.category === name).length})
                    </button>
                ))}
            </div>

            {/* Category description */}
            {selectedCategory !== "All" && (
                <p className="text-sm text-gray-500 mb-4 italic">{categories[selectedCategory].description}</p>
            )}

            {/* Article cards */}
            <div className="space-y-3 mb-10">
                {filteredArticles.sort((a, b) => a.priority - b.priority).map((article, idx) => {
                    const isExpanded = expandedArticle === article.title;
                    const catConfig = categories[article.category];
                    return (
                        <div key={idx} className={`border rounded-lg ${catConfig.color} transition-all`}>
                            <button
                                onClick={() => setExpandedArticle(isExpanded ? null : article.title)}
                                className="w-full text-left p-4"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                                            <span className="text-xs font-mono text-gray-400">#{article.priority}</span>
                                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${catConfig.tagColor}`}>{article.category}</span>
                                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${article.status === "Written" ? "bg-green-100 text-green-800" : article.status === "Future" ? "bg-gray-100 text-gray-500" : "bg-yellow-100 text-yellow-800"}`}>{article.status}</span>
                                        </div>
                                        <h3 className="font-semibold text-gray-900 text-sm leading-snug">{article.title}</h3>
                                    </div>
                                    <span className="text-gray-400 text-lg flex-shrink-0">{isExpanded ? "−" : "+"}</span>
                                </div>
                            </button>

                            {isExpanded && (
                                <div className="px-4 pb-4 space-y-3 text-sm border-t border-gray-200/50 pt-3">
                                    <div>
                                        <span className="font-medium text-gray-700">Hypothesis:</span>
                                        <p className="text-gray-600 mt-0.5">{article.hypothesis}</p>
                                    </div>
                                    <div className="flex gap-4 flex-wrap">
                                        <div><span className="font-medium text-gray-700">Search volume:</span> <span className="text-gray-600">{article.searchVolume}</span></div>
                                        <div><span className="font-medium text-gray-700">Competition:</span> <span className="text-gray-600">{article.competition}</span></div>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-700">Target keywords:</span>
                                        <div className="flex flex-wrap gap-1.5 mt-1">
                                            {article.targetKeywords.map((kw, i) => (
                                                <span key={i} className="text-xs bg-white border border-gray-200 rounded px-2 py-0.5 text-gray-600 font-mono">{kw}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-700">CTA → RentRant:</span>
                                        <p className="text-gray-600 mt-0.5 italic">"{article.cta}"</p>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-700">Notes:</span>
                                        <p className="text-gray-600 mt-0.5">{article.notes}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Publishing calendar */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-8">
                <h2 className="font-semibold text-gray-900 mb-3">Suggested Publishing Order (First 6 Months)</h2>
                <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex gap-3"><span className="font-mono text-gray-400 w-20 flex-shrink-0">Month 1</span><span>✅ Fair Rent (done) → Red Flags at Viewings → Healthy Homes Compliance</span></div>
                    <div className="flex gap-3"><span className="font-mono text-gray-400 w-20 flex-shrink-0">Month 2</span><span>Rent Increase Rights → Mould Guide → First Time Renting</span></div>
                    <div className="flex gap-3"><span className="font-mono text-gray-400 w-20 flex-shrink-0">Month 3</span><span>True Cost of Renting → Rental Market 2026 → Tenancy Law Changes</span></div>
                    <div className="flex gap-3"><span className="font-mono text-gray-400 w-20 flex-shrink-0">Month 4</span><span>Best Suburbs Guide → Negotiate Rent → Rental Scams</span></div>
                    <div className="flex gap-3"><span className="font-mono text-gray-400 w-20 flex-shrink-0">Month 5</span><span>Bond Rights → Property Manager vs Landlord → Begin suburb templates</span></div>
                    <div className="flex gap-3"><span className="font-mono text-gray-400 w-20 flex-shrink-0">Month 6</span><span>3-5 individual suburb guides → First data-driven piece (if ratings sufficient)</span></div>
                </div>
                <p className="text-xs text-gray-500 mt-3">Pace: 2-3 articles/month. Quality over quantity. Each piece should be the best NZ-specific resource on its topic.</p>
            </div>

            {/* Content principles */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-8">
                <h2 className="font-semibold text-gray-900 mb-3">RentRant Content Principles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <h3 className="font-medium text-gray-800 mb-1">✓ Always</h3>
                        <ul className="space-y-1 text-gray-600">
                            <li>• Cite specific NZ law, tools, or data</li>
                            <li>• Write from the renter's perspective</li>
                            <li>• Include actionable steps (not just info)</li>
                            <li>• Link to official NZ government resources</li>
                            <li>• Keep tone calm, grounded, practical</li>
                            <li>• Include a natural RentRant CTA</li>
                            <li>• Use NZ English spelling</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-800 mb-1">✗ Never</h3>
                        <ul className="space-y-1 text-gray-600">
                            <li>• Demonise landlords or property managers</li>
                            <li>• Use outrage language (fight, expose, shame)</li>
                            <li>• Generic advice that applies anywhere</li>
                            <li>• Filler content just for SEO volume</li>
                            <li>• Claims without sources</li>
                            <li>• AI-obvious structure (5 reasons, in conclusion)</li>
                            <li>• Walls of bullet points</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Google Trends Guide */}
            <div className="border border-gray-200 rounded-lg mb-8">
                <button
                    onClick={() => setShowTrendsGuide(!showTrendsGuide)}
                    className="w-full text-left p-5 flex items-center justify-between"
                >
                    <div>
                        <h2 className="font-semibold text-gray-900">📈 How to Use Google Trends for Topic Discovery</h2>
                        <p className="text-sm text-gray-500 mt-1">A practical guide to finding what Auckland renters are searching for</p>
                    </div>
                    <span className="text-gray-400 text-xl">{showTrendsGuide ? "−" : "+"}</span>
                </button>

                {showTrendsGuide && (
                    <div className="px-5 pb-5 border-t border-gray-100">
                        <div className="space-y-2 mt-4">
                            {googleTrendsGuide.steps.map((step, idx) => (
                                <div key={idx} className="border border-gray-100 rounded-lg">
                                    <button
                                        onClick={() => setExpandedStep(expandedStep === idx ? null : idx)}
                                        className="w-full text-left p-3 flex items-center justify-between"
                                    >
                                        <span className="font-medium text-sm text-gray-800">{step.heading}</span>
                                        <span className="text-gray-400 text-sm">{expandedStep === idx ? "−" : "+"}</span>
                                    </button>
                                    {expandedStep === idx && (
                                        <div className="px-3 pb-3 text-sm text-gray-600 leading-relaxed">
                                            {step.detail}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 bg-blue-50 border border-blue-100 rounded-lg p-4">
                            <h3 className="font-medium text-blue-900 text-sm mb-2">Pro Tips</h3>
                            <ul className="space-y-2 text-sm text-blue-800">
                                {googleTrendsGuide.proTips.map((tip, idx) => (
                                    <li key={idx}>• {tip}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4">
                            <h3 className="font-medium text-gray-800 text-sm mb-2">Your Monthly 15-Minute Routine</h3>
                            <ol className="space-y-1.5 text-sm text-gray-600 list-decimal pl-4">
                                <li>Open <span className="font-mono text-xs bg-white px-1 rounded">trends.google.com</span> → NZ → Past 12 months</li>
                                <li>Search your 5 seed terms: <span className="font-mono text-xs">rent auckland, healthy homes, tenancy rights, mould rental, landlord nz</span></li>
                                <li>Check "Rising" related queries for each — screenshot anything new</li>
                                <li>Cross-reference with "People Also Ask" boxes in Google search results</li>
                                <li>Pick 1-2 new article ideas that align with rising interest</li>
                                <li>Add to your content backlog with target publish date</li>
                            </ol>
                        </div>
                    </div>
                )}
            </div>

            {/* Link building note */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-8">
                <h2 className="font-semibold text-gray-900 mb-3">Link & Distribution Strategy Per Article</h2>
                <div className="text-sm text-gray-700 space-y-2">
                    <p><strong>Every article should be:</strong></p>
                    <ol className="list-decimal pl-5 space-y-1">
                        <li>Shared in r/auckland (as a genuine value post, not a link dump — e.g. "I put together a guide on [topic], hope it helps")</li>
                        <li>Posted to relevant Facebook groups (Auckland renting groups, student housing groups)</li>
                        <li>Pitched to one NZ journalist if it has a news angle (use the PR template from the Auckland GTM playbook)</li>
                        <li>Cross-linked from 2-3 existing RentRant articles</li>
                        <li>Submitted to NZ directories: StartupNZ, NZTech, Kiwi Startups</li>
                    </ol>
                    <p className="mt-3"><strong>The backlink jackpot:</strong> The "Auckland Rental Report Card" (article #16) is your single highest-ROI piece for links. One original data story pitched to NZ Herald / Stuff / RNZ could generate more domain authority than 50 regular articles. Build toward it.</p>
                </div>
            </div>

            <div className="text-center text-xs text-gray-400 mt-6 pb-4">
                RentRant Content Strategy v1 · {new Date().toLocaleDateString('en-NZ', { month: 'long', year: 'numeric' })}
            </div>
        </div>
    );
}