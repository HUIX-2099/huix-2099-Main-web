"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, User, Bot, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

type Message = {
    id: string
    text: string
    sender: "user" | "bot"
    timestamp: Date
}

const INITIAL_MESSAGE: Message = {
    id: "init",
    text: "Hello! I'm the HUIX-2099 Assistant. How can I help you explore our VR, XR, and 3D prototyping solutions?",
    sender: "bot",
    timestamp: new Date(),
}

const QA_KNOWLEDGE: Record<string, string> = {
    "contact": "You can reach us at huixtech2099@gmail.com or call +231-776-800-064 / +231-887-544-923.",
    "victor": "Victor Edet Coleman is the Founder & CTO of HUIX-2099, driving our technical vision.",
    "wulwyn": "Wulwyn Porte L is the CEO & Co-founder, leading our business strategy.",
    "what do you do": "We are a Liberia-based technology company pioneering VR, XR, AR, AI, 3D visualization, and immersive digital engineering.",
    "products": "Our flagship products include HUIX-THEME and our immersive digital engineering solutions.",
    "location": "We are located in Monrovia, Liberia.",
    "phone": "You can call us at +231-776-800-064 or +231-887-544-923.",
    "default": "Thanks for your message! Our team will get back to you soon. For immediate inquiries, please contact huixtech2099@gmail.com."
}

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMinimized, setIsMinimized] = useState(false)
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
    const [inputValue, setInputValue] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen && !isMinimized) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
        }
    }, [messages, isOpen, isMinimized])

    const handleSend = () => {
        if (!inputValue.trim()) return

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMsg])
        setInputValue("")
        setIsTyping(true)

        // Simulate AI response delay
        setTimeout(() => {
            const lowerInput = userMsg.text.toLowerCase()
            let botResponse = QA_KNOWLEDGE["default"]

            for (const [key, response] of Object.entries(QA_KNOWLEDGE)) {
                if (key !== "default" && lowerInput.includes(key)) {
                    botResponse = response
                    break
                }
            }

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponse,
                sender: "bot",
                timestamp: new Date(),
            }

            setMessages((prev) => [...prev, botMsg])
            setIsTyping(false)
        }, 1200)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleSend()
    }

    return (
        <>
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="fixed bottom-6 right-6 z-50"
                    >
                        <Button
                            onClick={() => { setIsOpen(true); setIsMinimized(false); }}
                            className="w-14 h-14 rounded-full bg-foreground text-background shadow-lg shadow-black/20 flex items-center justify-center hover:bg-foreground/90 transition-colors"
                            size="icon"
                        >
                            <MessageSquare className="w-6 h-6" />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            height: isMinimized ? "auto" : "450px"
                        }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className={`fixed bottom-6 right-6 z-50 w-[350px] sm:w-[380px] bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col`}
                        style={{ maxHeight: "calc(100vh - 48px)" }}
                    >
                        {/* Header */}
                        <div className="bg-muted/50 border-b border-border/50 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center">
                                    <Bot className="w-4 h-4" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm" style={{ fontFamily: 'Mohican, sans-serif', letterSpacing: '0.05em' }}>HUIX-2099 ASST</h3>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[9px] text-muted-foreground uppercase tracking-wider">Online</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-foreground/10" onClick={() => setIsMinimized(!isMinimized)}>
                                    {isMinimized ? <MessageSquare className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-foreground/10" onClick={() => setIsOpen(false)}>
                                    <X className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Chat Area */}
                        {!isMinimized && (
                            <>
                                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                                    {messages.map((msg) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            key={msg.id}
                                            className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                                        >
                                            <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${msg.sender === "user" ? "bg-muted" : "bg-foreground text-background"}`}>
                                                {msg.sender === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                                            </div>
                                            <div className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"} max-w-[80%]`}>
                                                <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.sender === "user"
                                                        ? "bg-foreground text-background rounded-tr-sm"
                                                        : "bg-muted/50 border border-border/50 rounded-tl-sm text-foreground"
                                                    }`}>
                                                    {msg.text}
                                                </div>
                                                <span className="text-[9px] text-muted-foreground mt-1 px-1">
                                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}

                                    {isTyping && (
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                                            <div className="w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center shrink-0">
                                                <Bot className="w-3.5 h-3.5" />
                                            </div>
                                            <div className="bg-muted/50 border border-border/50 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                                                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                                                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                                                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                                            </div>
                                        </motion.div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Input Area */}
                                <div className="p-3 bg-background/50 border-t border-border/50">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            placeholder="Type your message..."
                                            className="w-full bg-muted/40 border border-border/50 rounded-full pl-4 pr-12 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20 placeholder:text-muted-foreground transition-all"
                                        />
                                        <Button
                                            onClick={handleSend}
                                            disabled={!inputValue.trim()}
                                            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full !p-0"
                                            size="icon"
                                        >
                                            <Send className="w-3.5 h-3.5 ml-0.5" />
                                        </Button>
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
