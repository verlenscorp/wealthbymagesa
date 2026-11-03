/*
 * WEALTH BY MAGESA — all website text lives in this file.
 * Samuel: edit the words between the quotes, save, and the site updates.
 * Lines starting with // are notes and never show on the site.
 * To hide a whole section, leave its list empty: [].
 */
window.SITE = {
  name: "Samuel Magesa",
  hometownShort: "Berrien Springs, Michigan",
  brand: "Wealth by Magesa",
  title: "Financial Professional",
  phone: "269.231.9293",
  textKeyword: "FINANCE",
  email: "smagesa19@gmail.com",
  instagram: "wealthbymagesa",
  calendly: "https://calendly.com/smagesa19",

  hero: {
    eyebrow: "Free Financial Check-Up",
    headline: "Smart professionals prepare.",
    headlineGold: "Smart investors protect.",
    sub: "Sit down with Samuel for a free review of your income protection, life insurance, retirement accounts and legacy plan. You'll leave knowing exactly where the gaps are. No cost, no obligation, no pressure.",
    promises: ["No cost", "No obligation to buy", "One-hour conversation"],
  },

  // What actually happens on the check-up — answers "is this a sales pitch?"
  steps: [
    { title: "Book a time", text: "Pick a slot on my calendar or text FINANCE. Takes under a minute." },
    { title: "We review what you have", text: "Work benefits, old 401(k)s, life insurance, savings. Bring what you've got — or nothing at all." },
    { title: "You get straight answers", text: "I show you where you're covered and where you're exposed. What you do next is completely up to you." },
  ],

  // How long the check-up takes — match your Calendly event (e.g. "30 minutes"). Leave "" to hide.
  checkupLength: "",

  // ---- STRAIGHT TALK — the #1 thing people want to know before booking ----
  // SAMUEL: confirm every line below is accurate for how you work before the site goes live.
  transparency: {
    heading: "How I get paid — up front.",
    points: [
      { title: "The check-up costs you nothing", text: "You never pay me for the review, today or later." },
      { title: "I'm paid by the companies, not by you", text: "If you choose a policy or annuity through me, the insurance company pays me a commission. I'll tell you how that works on anything I recommend — before you decide." },
      { title: "No follow-up calls you didn't ask for", text: "Book online with just your name and email. If you don't want to move forward, that's the end of it." },
    ],
  },

  // Licenses / designations people can look up. SAMUEL: add yours, e.g.
  // { label: "Licensed Life & Health Insurance Agent", detail: "Michigan License #0000000", link: "https://difs.state.mi.us/locators" },
  credentials: [],

  // Who Samuel helps
  // Photos are licensed stock from Unsplash (free to use). Swap for real client photos any time.
  audiences: [
    { title: "Young families", text: "Make sure your kids are taken care of if your income stops.", image: "https://images.unsplash.com/photo-1761839258568-fd466a93f68b", alt: "Family cooking together in a bright kitchen" },
    { title: "Pre-retirees & retirees", text: "Turn what you've saved into income you can count on.", image: "https://images.unsplash.com/photo-1703627775484-95289b546d1b", alt: "Smiling retired couple sitting together on a garden bench" },
    { title: "Self-employed", text: "No employer plan? Build your own safety net and retirement.", image: "https://images.unsplash.com/photo-1604933762021-54a5858c9832", alt: "Self-employed woman working on her laptop" },
    { title: "Business owners", text: "Protect the business, reward key people, plan your exit.", image: "https://images.unsplash.com/photo-1687422808311-a776f467a468", alt: "Small-business owner smiling behind the counter of her shop" },
  ],

  // ---- HOMETOWN ----
  hometown: {
    eyebrow: "Rooted in Southwest Michigan",
    heading: "From Berrien Springs, for the families I grew up with.",
    text: "I'm from Berrien Springs, Michigan. The people I help are my neighbors — families, farmers, teachers, small-business owners and retirees across Berrien County and beyond. When you sit down with me, you're talking to someone from home.",
    image: "https://images.unsplash.com/photo-1752847554557-9c8c5e61eef5",
    alt: "Summer sunset over Lake Michigan from Lookout Park in St. Joseph, Michigan",
    caption: "Lake Michigan from Lookout Park, St. Joseph — just up the road from Berrien Springs.",
  },

  // Services, grouped by the four pillars
  pillars: [
    { title: "Protect your income", items: ["Income protection", "Life insurance", "Long-term care"] },
    { title: "Protect your family", items: ["Term & permanent life insurance", "Indexed universal life", "College savings plans"] },
    { title: "Protect your future", items: ["401(k) & IRA rollovers", "Fixed indexed annuities", "Retirement income strategy"] },
    { title: "Protect your legacy", items: ["Legacy planning", "Wills & living trusts", "Executive bonus plans for business owners"] },
  ],

  // ---- SAMUEL'S STORY — replace with your own words ----
  story: {
    heading: "Why I do this work",
    paragraphs: [
      "I'm Samuel Magesa. I help families, professionals and business owners make sure the money they work hard for is protected — for them and for the people who depend on them.",
      "Too many people don't sit down with anyone until something has already gone wrong. My job is to make that conversation easy, honest and early, so you can make decisions with clear eyes.",
      // Add a paragraph here: where you grew up, what got you into finance, a moment that shaped you.
    ],
    quote: "Tomorrow is never promised. Be smarter than your sources.",
  },

  // Real client reviews ONLY. Leave empty until you have them — the section stays hidden.
  // Example: { text: "Samuel explained everything...", name: "Maria T.", detail: "Mother of two" },
  reviews: [],

  // Photo beside the questions section (licensed Unsplash stock)
  faqImage: { image: "https://images.unsplash.com/photo-1575467678950-0c09aad418af", alt: "Couple laughing together while cooking at home" },

  // Straight answers to the doubts people have before booking
  faq: [
    { q: "Is the check-up really free?", a: "Yes. There's no charge for the Financial Check-Up and no obligation to buy anything." },
    { q: "Will you try to sell me something?", a: "If I see a gap, I'll tell you and explain your options. You decide if and when to act — no pressure, no follow-up calls you didn't ask for." },
    { q: "I already have life insurance through work. Do I still need this?", a: "Maybe not — that's what the check-up is for. Work coverage often ends when the job does and is usually a small multiple of salary. We'll look at whether it's enough." },
    { q: "I don't have a lot of money. Is this for me?", a: "Yes. Protection matters most when money is tight. We start with where you are today." },
    { q: "How do you get paid?", a: "The check-up is free. If you choose a product through me, the insurance company pays me a commission — I'll explain exactly how on anything I recommend, before you decide." },
    { q: "I've heard IUL and annuities are scams. Are they?", a: "They're legitimate tools that are sometimes sold to the wrong people. They're right for some situations and wrong for others — I'll tell you plainly if one doesn't fit you." },
  ],

  // Legal footer. Samuel: paste any disclaimer wording your carriers or state require.
  disclaimer: "Samuel Magesa is a licensed insurance professional. Insurance products are subject to underwriting and availability. This website is for informational purposes only and is not tax, legal or investment advice.",
};
