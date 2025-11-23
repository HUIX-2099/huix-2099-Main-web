"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SimpleFooter } from "@/components/simple-footer"

export default function HuixAssistant() {
  const [response, setResponse] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [textInput, setTextInput] = useState("")
  const [messages, setMessages] = useState<{ type: "user" | "assistant"; content: string; timestamp: Date }[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    const el = messagesContainerRef.current
    if (!el) return
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const processUserInput = async (input: string) => {
    setIsProcessing(true)
    
    // Add user message
    const userMessage = { type: "user" as const, content: input, timestamp: new Date() }
    setMessages(prev => [...prev, userMessage])

    // Simulate AI processing (in real app, this would call your AI backend)
    setTimeout(() => {
      const aiResponse = generateAIResponse(input)
      const assistantMessage = { type: "assistant" as const, content: aiResponse, timestamp: new Date() }
      setMessages(prev => [...prev, assistantMessage])
      setIsProcessing(false)
    }, 1500)
  }

  const generateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()
    
    // Comprehensive website knowledge base
    const knowledgeBase = {
      company: {
        name: "HUIX-2099",
        founded: "2024",
        location: "Liberia",
        description: "next-generation technology company pioneering the future of software development, 3D prototyping, and immersive digital engineering",
        focus: "intersection of imagination and technology",
        vision: "transforming creative vision into real-world innovation"
      },
      services: [
        {
          name: "Virtual Reality",
          description: "Immersive VR experiences and applications",
          tech: ["Unity", "Unreal Engine", "WebXR"]
        },
        {
          name: "AI & Machine Learning",
          description: "Intelligent solutions and predictive analytics",
          tech: ["TensorFlow", "PyTorch", "OpenAI APIs"]
        },
        {
          name: "App Development",
          description: "Native and cross-platform mobile applications",
          tech: ["React Native", "Flutter", "Swift", "Kotlin"]
        },
        {
          name: "Web Development",
          description: "Modern web applications and platforms",
          tech: ["React", "Next.js", "Node.js", "TypeScript"]
        },
        {
          name: "3D Modeling",
          description: "3D assets and environments",
          tech: ["Blender", "Maya", "3ds Max", "ZBrush"]
        },
        {
          name: "UI/UX Design",
          description: "User-centered design and interfaces",
          tech: ["Figma", "Adobe XD", "Sketch"]
        }
      ],
      prototypes: [
        {
          name: "HUIX-HORIZEN",
          type: "VR Experience",
          description: "Advanced virtual reality platform with immersive environments",
          status: "in-development",
          technologies: ["VR", "Unity", "AI", "3D Modeling"]
        },
        {
          name: "Virtual Past Liberia",
          type: "Historical VR",
          description: "Interactive historical reconstruction of Liberia's past",
          status: "completed",
          technologies: ["VR", "Historical Research", "3D Reconstruction"]
        }
      ],
      website: {
        sections: ["Home", "About", "Prototypes", "Services", "Contact"],
        features: ["Custom cursor", "Parallax effects", "Dark mode", "Responsive design"],
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"]
      }
    }

    // Predictive AI responses based on user intent
    const intentPatterns = {
      greeting: ["hello", "hi", "hey", "good morning", "good afternoon"],
      company_info: ["company", "about", "who are", "what is", "huix-2099"],
      services: ["services", "offer", "provide", "what do", "capabilities"],
      prototypes: ["prototypes", "projects", "showcase", "examples", "work"],
      technology: ["technology", "tech", "stack", "tools", "framework"],
      contact: ["contact", "reach", "email", "phone", "location"],
      help: ["help", "assist", "guide", "how to", "support"],
      pricing: ["price", "cost", "payment", "rates", "fees"],
      timeline: ["timeline", "when", "how long", "duration", "delivery"],
      collaboration: ["partner", "collaborate", "work together", "team up"]
    }

    // Detect user intent
    let detectedIntent = "general"
    for (const [intent, patterns] of Object.entries(intentPatterns)) {
      if (patterns.some(pattern => lowerInput.includes(pattern))) {
        detectedIntent = intent
        break
      }
    }

    // Generate contextual responses
    switch (detectedIntent) {
      case "greeting":
        return `Hello! I'm HUIX Assistant, your intelligent guide to everything HUIX-2099. I'm trained on our entire website and can answer questions about our company, services, prototypes, or help you navigate our digital experiences. What would you like to explore today?`

      case "company_info":
        return `${knowledgeBase.company.name} is a ${knowledgeBase.company.description}. Founded in ${knowledgeBase.company.founded} and based in ${knowledgeBase.company.location}, we operate at the ${knowledgeBase.company.focus}. Our vision is ${knowledgeBase.company.vision}. Would you like to know more about our team, mission, or specific services?`

      case "services":
        const serviceList = knowledgeBase.services.map(s => `• ${s.name}: ${s.description}`).join("\n")
        return `We offer comprehensive cutting-edge services:\n\n${serviceList}\n\nEach service utilizes the latest technologies and best practices. Which service area interests you most? I can provide detailed information about our approach and technologies used.`

      case "prototypes":
        const prototypeList = knowledgeBase.prototypes.map(p => 
          `• ${p.name} (${p.status}): ${p.description}\n  Technologies: ${p.technologies.join(", ")}`
        ).join("\n\n")
        return `Our innovative prototypes showcase our technical capabilities:\n\n${prototypeList}\n\nThese demonstrate our expertise in VR, AI, and immersive technologies. Would you like to dive deeper into any specific prototype?`

      case "technology":
        const allTech = [...new Set([
          ...knowledgeBase.services.flatMap(s => s.tech),
          ...knowledgeBase.prototypes.flatMap(p => p.technologies),
          ...knowledgeBase.website.technologies
        ])].sort()
        return `Our technology stack includes: ${allTech.join(", ")}. We leverage these technologies to create cutting-edge digital experiences. Are you interested in learning about our implementation of any specific technology?`

      case "contact":
        return `You can connect with HUIX-2099 through our website's contact section. We're based in Liberia and welcome collaborations, project inquiries, and partnerships. Our team is ready to discuss how we can transform your ideas into innovative digital solutions. Would you like guidance on reaching out for specific project types?`

      case "help":
        return `I'm here to help! I can assist you with:\n\n• Learning about HUIX-2099 and our capabilities\n• Exploring our services and prototypes\n• Understanding our technology stack\n• Navigating our website\n• Answering questions about our projects\n• Providing guidance on potential collaborations\n\nWhat specific area would you like help with?`

      case "pricing":
        return `Our pricing is project-specific and depends on scope, complexity, and requirements. We offer customized solutions tailored to each client's needs. For accurate pricing, I recommend contacting our team directly with your project details. They can provide a detailed quote based on your specific requirements and timeline.`

      case "timeline":
        return `Project timelines vary based on complexity and scope. Simple projects may take 2-4 weeks, while complex VR or AI implementations can take 2-6 months. We follow agile methodologies and provide regular updates. For your specific project, our team can give you a more accurate timeline after understanding your requirements.`

      case "collaboration":
        return `We love collaborating! HUIX-2099 partners with businesses, startups, and organizations to bring innovative ideas to life. Our collaboration process includes consultation, planning, development, and support. We're particularly interested in projects that push technological boundaries. What kind of collaboration are you considering?`

      default:
        // Advanced AI response for general/unexpected questions
        if (lowerInput.includes("how") || lowerInput.includes("why") || lowerInput.includes("what")) {
          return `That's an interesting question! Based on my knowledge of HUIX-2099, I can provide insights related to our company, services, or technologies. Could you clarify which aspect you'd like to explore? I'm here to help you understand our capabilities and how we can assist with your digital innovation needs.`
        }
        
        if (lowerInput.includes("thank") || lowerInput.includes("thanks")) {
          return `You're welcome! I'm glad I could help. Is there anything else you'd like to know about HUIX-2099? I'm your dedicated assistant for exploring our digital world and discovering how we can transform your ideas into reality.`
        }
        
        if (lowerInput.includes("bye") || lowerInput.includes("goodbye")) {
          return `Thank you for chatting with HUIX Assistant! Feel free to return anytime you want to explore more about HUIX-2099. Remember, we're here to transform your creative vision into innovative digital solutions. Have a great day!`
        }
        
        // Fallback with contextual help
        return `I understand you're interested in learning more. As HUIX Assistant, I'm trained on our entire website and can help you discover:\n\n• Our company story and mission\n• Cutting-edge services and technologies\n• Innovative prototypes and projects\n• How we can collaborate on your ideas\n\nWhat specific aspect of HUIX-2099 would you like to explore?`
    }
  }

  const handleTextSubmit = () => {
    if (textInput.trim()) {
      processUserInput(textInput.trim())
      setTextInput("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleTextSubmit()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="min-h-screen bg-background cursor-none">
      <Navbar />
      
      <div className="pt-20 pb-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="text-6xl font-bold mb-4" style={{ fontFamily: 'Mohican, sans-serif' }}>01</div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">HUIX ASSISTANT</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your intelligent AI companion trained on HUIX-2099's complete knowledge base
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Chat Area */}
            <div className="lg:col-span-2">
              <div className="bg-card border rounded-lg h-[600px] flex flex-col">
                {/* Chat Messages */}
                <div 
                  ref={messagesContainerRef}
                  className="flex-1 overflow-y-auto p-6 space-y-4"
                >
                  {messages.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center text-muted-foreground mt-8"
                    >
                      <div className="text-6xl mb-4">💬</div>
                      <p>Start a conversation with HUIX Assistant</p>
                      <p className="text-sm mt-2">I'm here to help you explore HUIX-2099</p>
                    </motion.div>
                  ) : (
                    messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] p-4 rounded-lg ${
                            message.type === "user"
                              ? "bg-primary text-primary-foreground ml-auto"
                              : "bg-muted"
                          }`}
                        >
                          <p className="whitespace-pre-line">{message.content}</p>
                          <p className={`text-xs mt-2 ${
                            message.type === "user" 
                              ? "text-primary-foreground/70" 
                              : "text-muted-foreground"
                          }`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </motion.div>
                    ))
                  )}
                  
                  {isProcessing && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about HUIX-2099..."
                      className="flex-1 px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleTextSubmit}
                      disabled={!textInput.trim() || isProcessing}
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Send
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Status */}
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">System Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm">AI Assistant Online</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Knowledge Base: Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Processing: Ready</span>
                  </div>
                </div>
              </div>

              {/* Capabilities */}
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">AI Capabilities</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">01</span>
                    Intent recognition & predictive responses
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">02</span>
                    Complete website knowledge base
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">03</span>
                    Contextual conversation flow
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">04</span>
                    Handles unexpected questions intelligently
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">05</span>
                    Real-time AI processing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">06</span>
                    Smart conversation memory
                  </li>
                </ul>
              </div>

              {/* Quick Actions */}
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => processUserInput("Tell me about HUIX-2099")}
                    className="w-full text-left px-4 py-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                  >
                    <span className="text-sm font-medium text-primary">01</span>
                    <span className="ml-2 text-sm">Tell me about HUIX-2099</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => processUserInput("What services do you offer?")}
                    className="w-full text-left px-4 py-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                  >
                    <span className="text-sm font-medium text-primary">02</span>
                    <span className="ml-2 text-sm">What services do you offer?</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => processUserInput("Show me your prototypes")}
                    className="w-full text-left px-4 py-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                  >
                    <span className="text-sm font-medium text-primary">03</span>
                    <span className="ml-2 text-sm">Show me your prototypes</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => processUserInput("What technologies do you use?")}
                    className="w-full text-left px-4 py-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                  >
                    <span className="text-sm font-medium text-primary">04</span>
                    <span className="ml-2 text-sm">What technologies do you use?</span>
                  </motion.button>
                </div>
              </div>

              {/* Navigation */}
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-colors"
                  >
                    <span className="text-lg">←</span>
                    Back to Home
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SimpleFooter />
    </div>
  )
}
