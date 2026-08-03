/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Landmark, Info, MessageSquare, ShieldCheck, PieChart, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bai-light">
      {/* Header */}
      <header id="main-header" className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-bai-blue rounded-lg flex items-center justify-center shadow-md">
              <Landmark className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-bai-blue tracking-tight leading-tight">
                Agente de Crédito BAI
              </h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                Inovação & Confiança
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-bai-blue transition-colors">Produtos</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-bai-blue transition-colors">Taxas</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-bai-blue transition-colors">Apoio ao Cliente</a>
            <button className="bg-bai-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm">
              BAI Directo
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero / Intro Section */}
        <section className="pt-12 pb-8 px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bai-blue/10 text-bai-blue text-xs font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bai-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-bai-blue"></span>
                </span>
                Assistente Virtual Ativo
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1]">
                O seu Futuro Financeiro <br />
                <span className="text-bai-blue">Começa Aqui.</span>
              </h2>
              
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                Tire todas as suas dúvidas sobre crédito bancário, financiamento e economia angolana com o nosso agente inteligente especializado.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: ShieldCheck, label: "Seguro & Confiável" },
                  { icon: PieChart, label: "Análise Real" },
                  { icon: MessageSquare, label: "Suporte 24/7" },
                  { icon: Info, label: "Dados do BNA" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <item.icon className="w-5 h-5 text-bai-blue" />
                    <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Chatbot Interface */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-bai-blue/5 rounded-[40px] -z-10 blur-2xl"></div>
              <div className="bg-white rounded-3xl overflow-hidden chat-container-shadow border border-slate-200">
                {/* Chat Header */}
                <div className="bg-bai-blue p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <MessageSquare className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">Agente Especialista</h3>
                      <p className="text-white/70 text-[10px]">Online agora</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  </div>
                </div>
                
                {/* Chat Content */}
                <div className="aspect-[9/12] w-full bg-slate-50">
                  <iframe 
                    src="https://www.chatbase.co/chatbot-iframe/9Sija2zo4A-PZ8YMV3sNn" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    title="Agente de Crédito BAI Chatbot"
                    referrerPolicy="no-referrer"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h3 className="text-bai-blue font-bold text-sm uppercase tracking-widest">Nossas Soluções</h3>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Como podemos ajudar hoje?</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Crédito Automóvel", desc: "Financiamento facilitado para o seu novo veículo com taxas competitivas." },
                { title: "Habitação", desc: "O sonho da casa própria está mais próximo com as nossas linhas de crédito especializado." },
                { title: "Empresarial", desc: "Impulsione o seu negócio com soluções de capital de giro e investimento." }
              ].map((card, i) => (
                <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-bai-blue transition-colors">
                    <ArrowRight className="w-6 h-6 text-bai-blue group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-slate-900">{card.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Landmark className="text-white w-8 h-8" />
              <h2 className="font-display font-bold text-2xl tracking-tight">Agente de Crédito BAI</h2>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Soluções financeiras inteligentes para o mercado Angolano. 
              Simplificando o acesso ao crédito com tecnologia e transparência.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Links Rápidos</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Simulador de Crédito</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos e Condições</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Parcerias</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Luanda, Angola</li>
              <li>info@agentecredito.ao</li>
              <li>(+244) 9XX XXX XXX</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Agente de Crédito - Todos os direitos reservados - Jaime de Paulo</p>
        </div>
      </footer>
    </div>
  );
}

