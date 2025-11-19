
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, QuantumComputerScene } from './components/QuantumScene'; // Renamed internally to history/pyramid
import { CivilizationFlow, ErasTimeline, SourcesInteractive, FactorsInteractive } from './components/Diagrams';
import { ArrowDown, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-history-gold selection:text-white font-sans" dir="rtl">
      
      {/* Top Bar */}
      <div className="bg-history-dark text-history-gold text-center py-3 z-50 relative border-b border-history-gold/20 shadow-md">
         <span className="font-ruqaa text-xl md:text-2xl tracking-wider font-bold">مقدم من ا/ علي عون</span>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-12 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-12 h-12 bg-history-dark rounded-full flex items-center justify-center border-2 border-history-gold text-history-gold font-ruqaa text-2xl shadow-sm pb-2">ت</div>
            <div className="flex flex-col">
                <span className={`font-ruqaa font-bold text-2xl tracking-wide leading-none ${scrolled ? 'text-history-dark' : 'text-history-dark md:text-history-dark'}`}>
                التاريخ والحضارة
                </span>
                <span className="text-xs text-stone-500 font-bold font-sans">مصطفى أحمد حلمي</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-base font-bold tracking-wide text-stone-600 font-ruqaa">
            <a href="#definitions" onClick={scrollToSection('definitions')} className="hover:text-history-gold transition-colors cursor-pointer">المفاهيم</a>
            <a href="#cycle" onClick={scrollToSection('cycle')} className="hover:text-history-gold transition-colors cursor-pointer">انتقال الحضارة</a>
            <a href="#eras" onClick={scrollToSection('eras')} className="hover:text-history-gold transition-colors cursor-pointer">العصور</a>
            <a href="#sources" onClick={scrollToSection('sources')} className="hover:text-history-gold transition-colors cursor-pointer">المصادر</a>
            <a href="#factors" onClick={scrollToSection('factors')} className="hover:text-history-gold transition-colors cursor-pointer">العوامل</a>
          </div>

          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-2xl font-ruqaa animate-fade-in pt-12">
            <a href="#definitions" onClick={scrollToSection('definitions')} className="hover:text-history-gold">المفاهيم</a>
            <a href="#cycle" onClick={scrollToSection('cycle')} className="hover:text-history-gold">انتقال الحضارة</a>
            <a href="#eras" onClick={scrollToSection('eras')} className="hover:text-history-gold">العصور</a>
            <a href="#sources" onClick={scrollToSection('sources')} className="hover:text-history-gold">المصادر</a>
            <a href="#factors" onClick={scrollToSection('factors')} className="hover:text-history-gold">عوامل قيام الحضارة</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F9F8F4] via-[#eaddcf] to-[#F9F8F4]">
        <HeroScene />
        
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.8)_0%,rgba(249,248,244,0.4)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-6 py-2 border-2 border-history-gold text-history-accent text-lg font-ruqaa rounded-full backdrop-blur-sm bg-white/40">
             بحث مادة التاريخ - الصف الأول الثانوي
          </div>
          <h1 className="font-ruqaa text-6xl md:text-9xl font-bold leading-tight mb-6 text-history-dark drop-shadow-sm py-4">
            رحلة عبر الزمن
          </h1>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-3xl md:text-4xl text-history-dark font-ruqaa leading-relaxed drop-shadow-md">
              "مَن قرأ التاريخ زاد عقله"
            </p>
            <span className="text-lg font-sans text-history-accent font-bold mt-4 block">- الإمام أبو حنيفة النعمان</span>
          </div>
          
          <div className="flex justify-center">
             <a href="#definitions" onClick={scrollToSection('definitions')} className="group flex flex-col items-center gap-2 text-base font-bold text-stone-500 hover:text-stone-900 transition-colors cursor-pointer font-ruqaa">
                <span>ابـدأ الرحلـة</span>
                <span className="p-3 border border-stone-300 rounded-full group-hover:border-history-gold group-hover:bg-history-gold group-hover:text-white transition-all bg-white/50">
                    <ArrowDown size={20} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* Definitions */}
        <section id="definitions" className="py-24 bg-white relative">
           {/* Decorative Pattern */}
           <div className="absolute top-0 left-0 w-32 h-32 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>

          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                  <div className="inline-block mb-2 text-sm font-bold text-history-accent uppercase tracking-widest font-sans">المصطلحات الأساسية</div>
                  <h2 className="font-ruqaa text-5xl text-history-dark mb-4 font-bold">التاريخ والحضارة</h2>
                  <div className="w-24 h-1.5 bg-history-gold rounded-full"></div>
              </div>
              
              <div className="bg-history-paper p-8 rounded-r-xl border-r-4 border-history-gold shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-2xl mb-3 text-history-dark font-ruqaa">مفهوم الحضارة</h3>
                  <p className="text-stone-700 text-lg leading-relaxed">
                    هي ثمرة أي مجهود يقوم به الإنسان نتيجة تفاعله مع البيئة لتحسين ظروف حياته مادياً أو معنوياً، لتعمير الكون الذي يعيش فيه.
                  </p>
                  <div className="mt-4 pt-4 border-t border-stone-200">
                      <p className="text-base text-history-accent font-bold">- ويل ديورانت: "الحضارة نظام اجتماعي يعين الإنسان على الزيادة في إنتاجه الثقافي".</p>
                  </div>
              </div>

              <div className="bg-history-paper p-8 rounded-r-xl border-r-4 border-stone-400 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-2xl mb-3 text-history-dark font-ruqaa">مفهوم التاريخ</h3>
                  <p className="text-stone-700 text-lg leading-relaxed">
                    علم يتناول النشاط الإنساني في كافة الأزمنة المختلفة لمعرفة الماضي، وفهم الحاضر، واستشراف المستقبل.
                  </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
                {/* Image for Abu Hanifa / Knowledge */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl group h-64">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop" 
                        alt="كتب قديمة ومخطوطات" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white font-ruqaa text-xl">"التاريخ ذاكرة الأمم"</p>
                    </div>
                </div>

                <div className="p-8 bg-stone-900 text-history-gold rounded-xl shadow-lg text-center flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-history-gold/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                    <h4 className="font-bold mb-6 text-2xl font-ruqaa relative z-10">أهمية دراسة التاريخ</h4>
                    <ul className="space-y-4 text-right text-stone-300 text-base relative z-10">
                        <li className="flex items-center gap-3"><div className="w-2 h-2 bg-history-gold rounded-full shrink-0"></div> استخلاص العبر والدروس</li>
                        <li className="flex items-center gap-3"><div className="w-2 h-2 bg-history-gold rounded-full shrink-0"></div> إبراز القدوة الصالحة من الشخصيات</li>
                        <li className="flex items-center gap-3"><div className="w-2 h-2 bg-history-gold rounded-full shrink-0"></div> تنمية الشعور بالمسؤولية</li>
                        <li className="flex items-center gap-3"><div className="w-2 h-2 bg-history-gold rounded-full shrink-0"></div> الابتعاد عن التعصب</li>
                    </ul>
                </div>
            </div>
          </div>
        </section>

        {/* Civilization Cycle */}
        <section id="cycle" className="py-24 bg-history-paper border-t border-stone-200">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-ruqaa text-4xl md:text-5xl font-bold text-history-dark mb-6">انتقال الحضارات</h2>
                    <p className="text-stone-700 text-lg">الحضارة كطائر جوال، لا تستقر في مكان واحد، بل تنتقل من الشرق إلى الغرب وتعود.</p>
                </div>
                <CivilizationFlow />
            </div>
        </section>

        {/* Historical Eras */}
        <section id="eras" className="py-24 bg-white border-t border-stone-200">
            <div className="container mx-auto px-6">
                <ErasTimeline />
            </div>
        </section>

        {/* Sources */}
        <section id="sources" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
             {/* Background Textures */}
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]"></div>
             
             <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                     <span className="text-history-gold font-bold tracking-widest uppercase text-sm font-sans">كيف نعرف الماضي؟</span>
                     <h2 className="font-ruqaa text-5xl md:text-6xl mt-4 text-white font-bold">مصادر دراسة الحضارات</h2>
                     <p className="text-stone-400 mt-6 max-w-2xl mx-auto text-lg">دراسة عميقة في المصادر الأولية والثانوية التي يعتمد عليها المؤرخون في استقاء الحقائق.</p>
                </div>
                <SourcesInteractive />
             </div>
        </section>

        {/* Factors */}
        <section id="factors" className="py-24 bg-white border-t border-stone-200">
             <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-sm font-bold text-history-accent uppercase tracking-widest font-sans">نموذج تطبيقي</div>
                    <h2 className="font-ruqaa text-5xl md:text-6xl font-bold text-history-dark mb-6">عوامل قيام الحضارة المصرية</h2>
                    <p className="text-stone-600 max-w-2xl mx-auto text-lg">تضافرت العوامل الطبيعية (وهبها الله) مع العوامل البشرية (كفاح المصريين) لإنتاج هذه الحضارة الخالدة.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* 3D Visualization Area */}
                    <div className="lg:col-span-4 relative h-[400px] lg:h-auto rounded-2xl overflow-hidden border-4 border-history-gold/20 shadow-2xl bg-history-paper group">
                        <QuantumComputerScene />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-center z-10">
                            <p className="text-history-gold font-ruqaa text-2xl group-hover:scale-110 transition-transform duration-500">"مصر هبة النيل والمصريين"</p>
                        </div>
                    </div>
                    
                    {/* Interactive Factors */}
                    <div className="lg:col-span-8">
                        <FactorsInteractive />
                    </div>
                </div>
             </div>
        </section>

      </main>

      <footer className="bg-history-dark text-stone-400 py-12 border-t-4 border-history-gold font-sans">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-right">
                <div className="text-white font-ruqaa font-bold text-3xl mb-3">التاريخ والحضارة</div>
                <p className="text-sm text-stone-500">مشروع بحثي - الصف الأول الثانوي</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
                <p className="text-2xl font-ruqaa text-history-gold mb-2">مقدم من ا/ علي عون</p>
                <p className="text-lg font-ruqaa text-white">الطالب/ مصطفى أحمد حلمي</p>
                <p className="text-sm mt-3 text-stone-600 font-ruqaa">"قل ربي زدني علماً"</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
