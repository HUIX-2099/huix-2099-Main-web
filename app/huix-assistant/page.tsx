"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Send, Sparkles, Brain, Zap, MessageSquare, ArrowRight, Bot, User, Copy, Check, ThumbsUp, ThumbsDown, RefreshCw } from "lucide-react"

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
  sentiment?: "positive" | "negative" | "neutral"
  feedback?: "good" | "bad" | null
}

export default function HuixAssistant() {
  const [textInput, setTextInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [isCardHovered, setIsCardHovered] = useState(false)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth"
      })
    }
  }, [messages, isTyping])

  // Welcome message on mount
  useEffect(() => {
    const welcomeMsg: Message = {
      id: 'welcome',
      type: 'assistant',
      content: `Hey there! 👋 I'm HUIX Assistant — your AI guide to everything HUIX-2099.\n\nI know this site inside out: our projects, services, team (Victor our CTO, Wulwyn our CEO), tech stack, and more. Ask me anything!\n\nTry: "What is HUIX-2099?" or "Who is the CTO?"`,
      timestamp: new Date(),
      sentiment: 'positive'
    }
    setMessages([welcomeMsg])
  }, [])

  // Comprehensive knowledge base
  const knowledgeBase = {
    company: {
      name: "HUIX-2099",
      tagline: "Where Innovation Meets Imagination",
      founded: "2024",
      founder: "Victor Edet Coleman (CTO & Co-founder) and Wulwyn Porte L (CEO & Co-founder)",
      location: "Monrovia, Liberia",
      email: "huixtech2099@gmail.com",
      phone: ["+231 776 800 064", "+231 770 499 140"],
      description: "A next-generation technology company pioneering the future of software development, 3D prototyping, and immersive digital engineering",
      mission: "To transform creative vision into real-world innovation, bridging imagination and technology",
      vision: "To be Africa's leading innovator in VR, AI, and immersive digital experiences"
    },
    team: [
      { name: "Victor Edet Coleman", role: "CTO & Co-founder", desc: "Chief Technology Officer · 3D Software Engineer · Technical Architect" },
      { name: "Wulwyn Porte L", role: "CEO & Co-founder & Investor", desc: "Chief Executive Officer · Strategic Lead · Investor" },
      { name: "Amanda Anderson", role: "Architect & Designer", desc: "The Ancestral Grid Architect for Virtual Past Liberia" }
    ],
    services: [
      { name: "Virtual Reality (VR)", desc: "Immersive VR experiences, training simulations, and virtual tours", tech: ["Unity", "Unreal Engine", "WebXR", "Oculus SDK"] },
      { name: "AI & Machine Learning", desc: "Intelligent chatbots, predictive analytics, and automation", tech: ["TensorFlow", "PyTorch", "OpenAI APIs", "LangChain"] },
      { name: "3D Modeling & Animation", desc: "Product visualization, architectural renders, character design", tech: ["Blender", "Maya", "ZBrush", "Substance Painter"] },
      { name: "Web Development", desc: "Modern web apps, e-commerce, dashboards, and platforms", tech: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"] },
      { name: "Mobile App Development", desc: "iOS and Android apps, cross-platform solutions", tech: ["React Native", "Flutter", "Swift", "Kotlin"] },
      { name: "UI/UX Design", desc: "User research, wireframing, prototyping, design systems", tech: ["Figma", "Adobe XD", "Framer", "Sketch"] }
    ],
    projects: {
      huixHorizen: {
        name: "HUIX-HORIZEN",
        type: "VR Platform",
        status: "In Development",
        description: "An advanced virtual reality platform featuring immersive environments, real-time collaboration, and AI-powered interactions. The future of digital experiences.",
        features: ["Real-time rendering", "10x faster iteration", "Collaborative multi-user", "<1s deploy time"],
        tech: ["VR", "Unity", "AI", "WebXR", "Cloud Infrastructure"]
      },
      virtualPastLiberia: {
        name: "Virtual Past Liberia",
        type: "Heritage VR Experience",
        status: "In Development",
        description: "A groundbreaking VR experience preserving Liberia's rich cultural heritage. Features 16 tribes, 3 immersive floors, and 100+ cultural artifacts in The Ancestral Grid museum.",
        architect: "Amanda Anderson",
        features: ["16 tribes represented", "3 immersive floors", "100+ artifacts", "WebXR compatible"],
        tribes: ["Kpelle", "Bassa", "Gio", "Mano", "Kru", "Grebo", "Mandingo", "Krahn", "Gola", "Gbandi", "Loma", "Kissi", "Vai", "Dei", "Bella", "Mende"],
        tech: ["VR", "Unity", "3D Scanning", "Historical Research"]
      }
    },
    website: {
      pages: ["Home", "About", "HUIX-HORIZEN", "Virtual Past Liberia", "Research", "Team", "Contact"],
      features: ["Dark/Light mode", "Responsive design", "Parallax effects", "Interactive cards", "AI Assistant"],
      tech: ["Next.js 16", "React", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    faqs: [
      { q: "hire|work with|collaborate", a: "We'd love to work with you! Head to our Contact page or email huixtech2099@gmail.com. We handle projects of all sizes." },
      { q: "cost|price|pricing|expensive|cheap", a: "Our pricing is project-based and depends on scope, complexity, and timeline. Contact us with your project details for a custom quote. We work with various budgets." },
      { q: "how long|timeline|duration|delivery", a: "Timelines vary: simple projects take 2-4 weeks, complex VR/AI projects can take 2-6 months. We'll give you a realistic timeline after understanding your needs." },
      { q: "where|location|based|office", a: "We're based in Monrovia, Liberia 🇱🇷 but work with clients worldwide remotely." },
      { q: "who made|who built|who created|developer|cto|victor", a: "HUIX-2099 was co-founded by **Victor Edet Coleman** (CTO & Co-founder)—our Chief Technology Officer who architects and builds our platforms—and **Wulwyn Porte L** (CEO & Co-founder & Investor). Victor drives all technical vision: XR, 3D, AI, and immersive systems." }
    ]
  }

  // Sentiment analysis
  const analyzeSentiment = (input: string): "positive" | "negative" | "neutral" => {
    const lower = input.toLowerCase()
    const positiveWords = ["love", "great", "awesome", "amazing", "good", "nice", "cool", "excellent", "fantastic", "wonderful", "thanks", "thank", "helpful", "best", "impressed", "wow"]
    const negativeWords = ["bad", "terrible", "awful", "hate", "worst", "sucks", "horrible", "disappointed", "angry", "frustrated", "annoying", "useless", "stupid", "slow", "broken", "doesn't work", "not working"]
    
    const posCount = positiveWords.filter(w => lower.includes(w)).length
    const negCount = negativeWords.filter(w => lower.includes(w)).length
    
    if (posCount > negCount) return "positive"
    if (negCount > posCount) return "negative"
    return "neutral"
  }

  // Smart AI response generator
  const generateResponse = (input: string): string => {
    const lower = input.toLowerCase().trim()
    const sentiment = analyzeSentiment(input)

    // Handle negative sentiment first
    if (sentiment === "negative") {
      if (lower.includes("not working") || lower.includes("broken") || lower.includes("doesn't work")) {
        return "I'm sorry to hear you're having issues! 😔 Can you tell me more about what's not working? If it's a technical problem with our website, try refreshing or clearing your cache. For project-related concerns, please contact us at huixtech2099@gmail.com and we'll sort it out ASAP."
      }
      if (lower.includes("expensive") || lower.includes("too much")) {
        return "I understand budget is important! 💰 Our pricing is flexible and we work with various budget ranges. We can often adjust scope or phase projects to fit your needs. Let's discuss what you're looking for — contact us at huixtech2099@gmail.com for a custom solution."
      }
      if (lower.includes("slow") || lower.includes("taking too long")) {
        return "I apologize for any delays! ⏰ Quality work takes time, but we understand urgency. If you have a tight deadline, let our team know and we'll see what we can do. Reach out at huixtech2099@gmail.com."
      }
      return "I'm sorry if something's not meeting your expectations. 😔 We genuinely care about your experience. Could you tell me more about what's bothering you? I'll do my best to help or connect you with someone who can."
    }

    // Handle positive sentiment
    if (sentiment === "positive") {
      if (lower.includes("thank")) {
        return "You're very welcome! 😊 It's been great chatting with you. Is there anything else you'd like to know about HUIX-2099? I'm here to help!"
      }
      if (lower.includes("love") || lower.includes("awesome") || lower.includes("amazing")) {
        return "That means so much to us! 🎉 We put a lot of passion into everything we create. If you'd like to see more of our work, feel free to explore our projects. And if you ever want to collaborate, we'd love to hear from you!"
      }
    }

    // Greetings
    if (/^(hi|hello|hey|yo|sup|what'?s up|howdy|greetings)/i.test(lower)) {
      const greetings = [
        "Hey there! 👋 Great to meet you! I'm HUIX Assistant. What can I help you discover today?",
        "Hello! 😊 Welcome to HUIX-2099. I know everything about this site — ask me anything!",
        "Hey! 🚀 Ready to explore the future of tech? What would you like to know?"
      ]
      return greetings[Math.floor(Math.random() * greetings.length)]
    }

    // Goodbyes
    if (/^(bye|goodbye|see you|later|cya|peace out)/i.test(lower)) {
      return "Take care! 👋 Thanks for chatting. Remember, HUIX-2099 is here whenever you need innovative tech solutions. See you next time! ✨"
    }

    // About HUIX-2099
    if (lower.includes("what is huix") || lower.includes("about huix") || lower.includes("tell me about huix") || lower.includes("who is huix")) {
      return `**HUIX-2099** is ${knowledgeBase.company.description}.\n\n🎯 **Mission:** ${knowledgeBase.company.mission}\n\n📍 **Based in:** ${knowledgeBase.company.location}\n👤 **Co-founded by:** Victor Edet Coleman (CTO) & Wulwyn Porte L (CEO)\n📅 **Year:** ${knowledgeBase.company.founded}\n\nWe specialize in VR, AI, 3D, and cutting-edge web/app development. Want to know about our specific projects or services?`
    }

    // Services
    if (lower.includes("service") || lower.includes("what do you do") || lower.includes("what can you do") || lower.includes("offer") || lower.includes("capabilities")) {
      const serviceList = knowledgeBase.services.map(s => `• **${s.name}:** ${s.desc}`).join("\n")
      return `We offer a full range of cutting-edge tech services:\n\n${serviceList}\n\nWhich service interests you most? I can dive deeper into any of these! 🎯`
    }

    // HUIX-HORIZEN
    if (lower.includes("horizen") || lower.includes("horizon")) {
      const h = knowledgeBase.projects.huixHorizen
      return `🚀 **${h.name}**\n\n${h.description}\n\n**Status:** ${h.status}\n**Type:** ${h.type}\n\n**Key Features:**\n${h.features.map(f => `• ${f}`).join("\n")}\n\n**Tech Stack:** ${h.tech.join(", ")}\n\nWant to learn more? Check out the HUIX-HORIZEN page!`
    }

    // Virtual Past Liberia
    if (lower.includes("virtual past") || lower.includes("liberia project") || lower.includes("vpl") || lower.includes("heritage") || lower.includes("ancestral grid")) {
      const v = knowledgeBase.projects.virtualPastLiberia
      return `🏛️ **${v.name}**\n\n${v.description}\n\n**Architect:** ${v.architect}\n**Status:** ${v.status}\n\n**Highlights:**\n${v.features.map(f => `• ${f}`).join("\n")}\n\n**Tribes Featured:** ${v.tribes.slice(0, 8).join(", ")}... and 8 more!\n\nThis project preserves Liberia's rich cultural heritage in VR. Explore more on the Virtual Past Liberia page!`
    }

    // Team / CTO / CEO
    if (lower.includes("team") || lower.includes("who works") || lower.includes("founder") || lower.includes("victor") || lower.includes("wulwyn") || lower.includes("cto") || lower.includes("ceo") || lower.includes("amanda")) {
      const teamList = knowledgeBase.team.map(t => `• **${t.name}** — ${t.role}\n  _${t.desc}_`).join("\n\n")
      return `Meet our leadership and team:\n\n${teamList}\n\n**Victor Edet Coleman** is our CTO & Co-founder—he leads all technical architecture, XR/3D development, and platform innovation. **Wulwyn Porte L** is our CEO & Co-founder & Investor—driving strategy, partnerships, and growth. We're dedicated to building the digital future of Africa.`
    }

    // Contact
    if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("reach") || lower.includes("get in touch")) {
      return `📬 **Get in Touch**\n\n📧 **Email:** ${knowledgeBase.company.email}\n📱 **Phone:** ${knowledgeBase.company.phone.join(" | ")}\n📍 **Location:** ${knowledgeBase.company.location}\n\nYou can also use our Contact page to send a message directly. We typically respond within 24-48 hours!`
    }

    // Technology
    if (lower.includes("tech") || lower.includes("stack") || lower.includes("tools") || lower.includes("framework") || lower.includes("language")) {
      const allTech = [...new Set(knowledgeBase.services.flatMap(s => s.tech))].sort()
      return `🛠️ **Our Tech Stack**\n\nWe use cutting-edge technologies:\n\n${allTech.map(t => `• ${t}`).join("\n")}\n\nPlus: ${knowledgeBase.website.tech.join(", ")} for our web platform.\n\nWant to know how we use any specific technology?`
    }

    // Website/Pages
    if (lower.includes("website") || lower.includes("page") || lower.includes("section") || lower.includes("navigate")) {
      return `🌐 **Website Navigation**\n\nOur site includes:\n${knowledgeBase.website.pages.map(p => `• ${p}`).join("\n")}\n\n**Features:** ${knowledgeBase.website.features.join(", ")}\n\nWhat page would you like to explore?`
    }

    // Pricing
    if (lower.includes("price") || lower.includes("cost") || lower.includes("pricing") || lower.includes("how much") || lower.includes("budget") || lower.includes("afford")) {
      return "💰 **Pricing**\n\nOur pricing is project-based and customized to your needs. Factors include:\n• Project complexity\n• Timeline requirements\n• Technologies involved\n• Scope of work\n\nWe work with various budgets and can phase projects if needed. Contact us at huixtech2099@gmail.com with your project details for a free quote!"
    }

    // Timeline
    if (lower.includes("how long") || lower.includes("timeline") || lower.includes("duration") || lower.includes("when") || lower.includes("deadline")) {
      return "⏱️ **Timelines**\n\n• Simple websites/apps: 2-4 weeks\n• Complex web platforms: 1-3 months\n• VR experiences: 2-6 months\n• AI/ML projects: 1-4 months\n\nWe follow agile methodology with regular updates. Have a deadline? Let us know and we'll work with you!"
    }

    // Hire/Work together
    if (lower.includes("hire") || lower.includes("work with") || lower.includes("collaborate") || lower.includes("partner") || lower.includes("project")) {
      return "🤝 **Let's Work Together!**\n\nWe'd love to hear about your project! Here's how to get started:\n\n1. **Contact us:** huixtech2099@gmail.com\n2. **Tell us about your idea** — the more details, the better\n3. **We'll schedule a free consultation**\n4. **Receive a custom proposal**\n\nWhether it's VR, AI, web, mobile, or 3D — we've got you covered. What's your project idea?"
    }



    // FAQ pattern matching
    for (const faq of knowledgeBase.faqs) {
      if (new RegExp(faq.q, 'i').test(lower)) {
        return faq.a
      }
    }

    // Questions
    if (lower.includes("?") || lower.startsWith("how") || lower.startsWith("what") || lower.startsWith("why") || lower.startsWith("where") || lower.startsWith("who") || lower.startsWith("when") || lower.startsWith("can")) {
      return "That's a great question! 🤔 I want to give you the best answer. Could you be a bit more specific? For example:\n\n• Ask about our **services** (VR, AI, web, etc.)\n• Ask about **projects** (HUIX-HORIZEN, Virtual Past Liberia)\n• Ask about **pricing, timelines, or how to work with us**\n• Ask about the **team or company**\n\nI'm here to help!"
    }

    // Default intelligent response
    return "Interesting! 🤖 I'm designed to help you explore HUIX-2099. Here's what I can tell you about:\n\n• **Company:** Who we are, our mission, team\n• **Services:** VR, AI, Web, Mobile, 3D, UI/UX\n• **Projects:** HUIX-HORIZEN, Virtual Past Liberia\n• **Working with us:** Pricing, timelines, contact\n• **Tech:** Our tools and technologies\n\nWhat catches your interest?"
  }

  // Process user input
  const processUserInput = async (input: string) => {
    if (!input.trim() || isProcessing) return
    
    setIsProcessing(true)
    const sentiment = analyzeSentiment(input)
    
    // Add user message
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      type: "user",
      content: input,
      timestamp: new Date(),
      sentiment
    }
    setMessages(prev => [...prev, userMsg])
    setTextInput("")

    // Simulate thinking
    setIsTyping(true)
    await new Promise(r => setTimeout(r, 800 + Math.random() * 1200))
    setIsTyping(false)

    // Generate response
    const response = generateResponse(input)
    const assistantMsg: Message = {
      id: `assistant-${Date.now()}`,
      type: "assistant",
      content: response,
      timestamp: new Date(),
      sentiment: "positive",
      feedback: null
    }
    setMessages(prev => [...prev, assistantMsg])
    setIsProcessing(false)
  }

  // Handle feedback
  const handleFeedback = (msgId: string, feedback: "good" | "bad") => {
    setMessages(prev => prev.map(m => m.id === msgId ? { ...m, feedback } : m))
  }

  // Copy message
  const copyMessage = (id: string, content: string) => {
    navigator.clipboard.writeText(content)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  // Regenerate response
  const regenerateResponse = (userMsgIndex: number) => {
    const userMsg = messages[userMsgIndex]
    if (userMsg?.type === "user") {
      // Remove the assistant response that follows
      setMessages(prev => prev.slice(0, userMsgIndex + 1))
      processUserInput(userMsg.content)
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const quickActions = [
    { label: "What is HUIX-2099?", icon: "🏢" },
    { label: "Who is the CTO?", icon: "👨‍💻" },
    { label: "Tell me about HUIX-HORIZEN", icon: "🚀" },
    { label: "What services do you offer?", icon: "💼" },
    { label: "How can I work with you?", icon: "🤝" },
    { label: "Tell me about Virtual Past Liberia", icon: "🏛️" },
    { label: "What's your tech stack?", icon: "🛠️" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Top Meta Strip */}
          <div 
            className="flex items-center justify-between py-4 border-b border-border/50 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50"
            style={{ fontFamily: monoFont }}
          >
            <div className="flex items-center gap-3">
              <span>HUIX-2099</span>
              <span className="h-px w-4 bg-border/50" />
              <span>AI ASSISTANT</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                ONLINE
              </span>
              <span className="h-px w-4 bg-border/50" />
              <span>v2.0</span>
            </div>
          </div>

          {/* Main Hero */}
          <div className="py-10 lg:py-16">
            <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
              {/* Left - Large Letter */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[140px] lg:text-[200px] font-bold leading-[0.75] text-foreground/[0.04] select-none"
                style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.05em' }}
              >
                AI
              </motion.div>

              {/* Right - Content */}
              <div className="flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div 
                    className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4"
                    style={{ fontFamily: monoFont }}
                  >
                    [AI] INTELLIGENT ASSISTANT
                  </div>
                  <h1 
                    className="text-4xl lg:text-5xl font-bold mb-4"
                    style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
                  >
                    HUIX ASSISTANT
                  </h1>
                  <div className="h-px w-20 bg-foreground/20 mb-4" />
                  <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                    Your intelligent AI companion with complete knowledge of HUIX-2099. 
                    Ask anything about our projects, services, team, or technology.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cardholder Section */}
      <section className="py-8 bg-[#202020]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Card Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="cursor-pointer"
              onMouseEnter={() => setIsCardHovered(true)}
              onMouseLeave={() => setIsCardHovered(false)}
            >
              <div className="relative w-full max-w-[340px] h-[260px] mx-auto">
                {/* Hidden Info */}
                <div className={`absolute inset-x-3 top-0 bottom-6 rounded-xl bg-neutral-950 p-4 transition-opacity duration-300 ${isCardHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="text-[9px] text-neutral-500 uppercase tracking-wider mb-3" style={{ fontFamily: monoFont }}>
                    AI Capabilities
                  </div>
                  <div className="space-y-2 text-[10px] text-neutral-400" style={{ fontFamily: monoFont }}>
                    <div className="flex justify-between"><span>Knowledge Base</span><span className="text-green-400">Complete</span></div>
                    <div className="flex justify-between"><span>Sentiment Analysis</span><span className="text-green-400">Active</span></div>
                    <div className="flex justify-between"><span>Response Time</span><span className="text-neutral-300">&lt;2s</span></div>
                    <div className="flex justify-between"><span>Languages</span><span className="text-neutral-300">English</span></div>
                    <div className="flex justify-between"><span>Status</span><span className="text-green-400">Online</span></div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 pt-3 border-t border-neutral-800">
                    <div className="text-[8px] text-neutral-600" style={{ fontFamily: monoFont }}>
                      HUIX-2099 AI · Neural Interface
                    </div>
                  </div>
                </div>

                {/* Wallet Body */}
                <div 
                  className={`absolute inset-0 rounded-xl transition-transform duration-300 ${isCardHovered ? '-translate-y-4' : ''}`}
                  style={{ backgroundColor: '#1a1a1a', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
                />

                {/* Gray Card */}
                <div 
                  className={`absolute -top-6 left-3 right-3 h-20 rounded-lg transition-transform duration-300 ${isCardHovered ? '-translate-y-6' : ''}`}
                  style={{ backgroundColor: '#2a2a2a' }}
                >
                  <div className="absolute top-2 left-3 text-[8px] text-neutral-500" style={{ fontFamily: monoFont }}>
                    <div>SN-AI-2099</div>
                    <div>REV-C2</div>
                    <div>NRL-001</div>
                  </div>
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[8px] text-neutral-500 flex items-center gap-1" style={{ fontFamily: monoFont }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    ONLINE
                  </div>
                  <div className="absolute top-1 right-3 text-right" style={{ fontFamily: monoFont }}>
                    <div className="text-lg font-bold text-neutral-400">∞</div>
                    <div className="text-sm font-bold text-neutral-500">SMART</div>
                  </div>
                </div>

                {/* Blue Accent Card */}
                <div 
                  className={`absolute top-3 left-3 right-3 bottom-6 rounded-lg transition-transform duration-300 ${isCardHovered ? '-translate-y-5' : ''}`}
                  style={{ backgroundColor: '#3b82f6' }}
                >
                  <div 
                    className="absolute -bottom-px left-1/2 -translate-x-1/2 w-20 h-10 rounded-t-full"
                    style={{ backgroundColor: '#1a1a1a' }}
                  />
                  <div className="relative p-4">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Brain className="w-3 h-3 text-white/50" />
                      <span className="text-[7px] text-white/50" style={{ fontFamily: monoFont }}>NEURAL AI</span>
                    </div>
                    <div className="text-3xl font-bold text-white leading-none tracking-[0.1em]" style={{ fontFamily: 'Mohican, sans-serif' }}>
                      HUIX
                    </div>
                    <div className="text-2xl font-bold text-white/90 leading-none tracking-[0.08em]" style={{ fontFamily: 'Mohican, sans-serif' }}>
                      ASSISTANT
                    </div>
                    <div className="absolute top-4 right-4 text-right text-[7px] text-white/60" style={{ fontFamily: monoFont }}>
                      <div>AI · CHAT</div>
                      <div>SMART</div>
                      <div className="mt-1">v2.0</div>
                    </div>
                  </div>
                </div>

                {/* Accent Tab */}
                <div 
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 rounded-r-sm transition-transform duration-300 ${isCardHovered ? '-translate-y-8' : '-translate-y-1/2'}`}
                  style={{ backgroundColor: '#3b82f6' }} 
                />

                {/* Keychain */}
                <div className={`absolute -right-10 top-1/3 transition-transform duration-300 ${isCardHovered ? '-translate-y-3' : ''}`}>
                  <div className="w-3 h-5 bg-neutral-700 rounded-sm" />
                  <div className="w-2 h-10 bg-neutral-800 rounded-sm mx-auto" />
                  <div className="w-5 h-5 border-[3px] border-neutral-600 rounded-full mx-auto -mt-1" />
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-3" style={{ fontFamily: monoFont }}>
                Capabilities
              </div>
              <h2 
                className="text-2xl lg:text-3xl font-bold mb-4 tracking-wide"
                style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.1em' }}
              >
                SMART AI
              </h2>
              <div className="space-y-3 text-sm">
                {[
                  { icon: Brain, label: "Complete site knowledge" },
                  { icon: Sparkles, label: "Sentiment analysis (positive/negative)" },
                  { icon: Zap, label: "Instant intelligent responses" },
                  { icon: MessageSquare, label: "Natural conversation flow" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-neutral-400">
                    <item.icon className="w-4 h-4 text-blue-400" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card border border-border overflow-hidden">
            {/* Chat Header */}
            <div className="px-6 py-4 border-b border-border bg-card/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <div className="font-medium text-sm">HUIX Assistant</div>
                  <div className="text-[10px] text-muted-foreground flex items-center gap-1.5" style={{ fontFamily: monoFont }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Online · Ready to help
                  </div>
                </div>
              </div>
              <div className="text-[9px] text-muted-foreground/50" style={{ fontFamily: monoFont }}>
                {messages.length} messages
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={messagesContainerRef}
              className="h-[500px] overflow-y-auto p-6 space-y-4 bg-background/50"
            >
              <AnimatePresence>
                {messages.map((msg, index) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] ${msg.type === 'user' ? 'order-2' : ''}`}>
                      <div className={`flex items-start gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          msg.type === 'user' ? 'bg-foreground/10' : 'bg-blue-500/20'
                        }`}>
                          {msg.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-blue-500" />}
                        </div>
                        <div>
                          <div className={`p-4 rounded-2xl ${
                            msg.type === 'user' 
                              ? 'bg-foreground text-background rounded-br-md' 
                              : 'bg-muted rounded-bl-md'
                          }`}>
                            <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                          </div>
                          <div className={`flex items-center gap-2 mt-2 ${msg.type === 'user' ? 'justify-end' : ''}`}>
                            <span className="text-[10px] text-muted-foreground/50" style={{ fontFamily: monoFont }}>
                              {formatTime(msg.timestamp)}
                            </span>
                            {msg.type === 'assistant' && (
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => copyMessage(msg.id, msg.content)}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="Copy"
                                >
                                  {copiedId === msg.id ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3 text-muted-foreground/50" />}
                                </button>
                                <button
                                  onClick={() => handleFeedback(msg.id, 'good')}
                                  className={`p-1 hover:bg-muted rounded transition-colors ${msg.feedback === 'good' ? 'text-green-500' : 'text-muted-foreground/50'}`}
                                  title="Good response"
                                >
                                  <ThumbsUp className="w-3 h-3" />
                                </button>
                                <button
                                  onClick={() => handleFeedback(msg.id, 'bad')}
                                  className={`p-1 hover:bg-muted rounded transition-colors ${msg.feedback === 'bad' ? 'text-red-500' : 'text-muted-foreground/50'}`}
                                  title="Bad response"
                                >
                                  <ThumbsDown className="w-3 h-3" />
                                </button>
                                {index > 0 && messages[index - 1]?.type === 'user' && (
                                  <button
                                    onClick={() => regenerateResponse(index - 1)}
                                    className="p-1 hover:bg-muted rounded transition-colors text-muted-foreground/50"
                                    title="Regenerate"
                                  >
                                    <RefreshCw className="w-3 h-3" />
                                  </button>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="bg-muted p-4 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <span className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="px-6 py-3 border-t border-border/50 bg-muted/30">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {quickActions.map((action, i) => (
                  <button
                    key={i}
                    onClick={() => processUserInput(action.label)}
                    disabled={isProcessing}
                    className="flex-shrink-0 px-3 py-1.5 bg-background border border-border rounded-full text-[11px] hover:bg-muted transition-colors disabled:opacity-50 flex items-center gap-1.5"
                    style={{ fontFamily: monoFont }}
                  >
                    <span>{action.icon}</span>
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-card">
              <div className="flex gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && processUserInput(textInput)}
                  placeholder="Ask me anything about HUIX-2099..."
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-foreground/50 transition-colors text-sm"
                  style={{ fontFamily: monoFont }}
                  disabled={isProcessing}
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => processUserInput(textInput)}
                  disabled={!textInput.trim() || isProcessing}
                  className="px-5 py-3 bg-blue-500 text-white rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  <span className="text-sm font-medium">Send</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Meta */}
      <section className="border-t border-border py-6 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.15em] text-muted-foreground/40" style={{ fontFamily: monoFont }}>
            <div className="flex items-center gap-6">
              <span>HUIX-2099</span>
              <span className="inline-block h-px w-6 bg-border" />
              <span>AI ASSISTANT</span>
            </div>
            <div className="flex items-center gap-6">
              <span>NRL-001</span>
              <span className="inline-block h-px w-6 bg-border" />
              <span>v2.0</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
