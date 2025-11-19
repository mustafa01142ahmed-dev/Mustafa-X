
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Scroll, Coins, Landmark, PenTool, Globe, ArrowRight, Clock, Anchor, Sun, Shield, Hammer, Users, Map } from 'lucide-react';

// --- CIVILIZATION FLOW DIAGRAM ---
export const CivilizationFlow: React.FC = () => {
  const [stage, setStage] = useState(0);
  const stages = [
    { 
        id: 0, 
        name: "الشرق القديم", 
        region: "مصر - العراق - فارس", 
        desc: "بداية الحضارة: اكتشاف الزراعة والكتابة والاستقرار.", 
        color: "bg-yellow-600",
        image: "https://i.pinimg.com/736x/e0/8e/9f/e08e9f5ad5ba79df900525822fe328d8.jpg" // Pyramids (User provided)
    },
    { 
        id: 1, 
        name: "الغرب القديم", 
        region: "اليونان - الرومان", 
        desc: "انتقلت الحضارة لتزدهر فلسفياً وعمرانياً في أوروبا.", 
        color: "bg-blue-600",
        image: "https://images.unsplash.com/photo-1545815217-143d4eb6c6b2?q=80&w=800&auto=format&fit=crop" // Parthenon
    },
    { 
        id: 2, 
        name: "الشرق الإسلامي", 
        region: "الحضارة الإسلامية", 
        desc: "عادت للشرق لقرابة ١٠٠٠ عام (العصور الوسطى).", 
        color: "bg-green-600",
        image: "https://i.pinimg.com/736x/38/c3/57/38c357213c59fd1d461329b4b56f3e0d.jpg" // Fatih (User provided)
    },
    { 
        id: 3, 
        name: "الغرب الحديث", 
        region: "النهضة الأوروبية", 
        desc: "استقرت في الغرب مع النهضة والثورة الصناعية.", 
        color: "bg-indigo-600",
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800&auto=format&fit=crop" // Modern city
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-xl border border-history-gold/30 shadow-sm my-8">
      <h3 className="font-serif text-2xl mb-6 text-history-dark font-bold">سلسلة انتقال الحضارات</h3>
      
      <div className="relative w-full max-w-2xl h-72 flex items-center justify-between px-4 md:px-12 bg-history-paper rounded-lg border border-history-gold/20 overflow-hidden">
        {/* Background Image for Active Stage */}
        <AnimatePresence mode='wait'>
            <motion.div 
                key={stage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-0"
            >
                <img src={stages[stage].image} alt={stages[stage].name} className="w-full h-full object-cover" />
            </motion.div>
        </AnimatePresence>

        {/* Connection Line */}
        <div className="absolute top-1/2 left-10 right-10 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
        
        {/* Active Line */}
        <motion.div 
           className="absolute top-1/2 right-10 h-1 bg-history-gold -translate-y-1/2 z-0"
           animate={{ width: `${(stage / 3) * 85}%` }}
           transition={{ duration: 0.5 }}
        />

        {stages.map((s, index) => (
            <div key={s.id} className="relative z-10 flex flex-col items-center gap-3 cursor-pointer" onClick={() => setStage(index)}>
                <motion.div 
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white shadow-lg border-4 ${index <= stage ? 'border-history-gold ' + s.color : 'border-gray-200 bg-gray-300'}`}
                    animate={{ scale: index === stage ? 1.2 : 1 }}
                >
                    <Globe size={24} />
                </motion.div>
                <div className={`text-center transition-opacity duration-300 ${index === stage ? 'opacity-100' : 'opacity-50'}`}>
                    <p className="font-bold font-serif text-sm md:text-base text-history-dark">{s.name}</p>
                </div>
            </div>
        ))}
      </div>

      <div className="mt-6 text-center h-24 max-w-lg w-full relative z-10">
        <AnimatePresence mode='wait'>
            <motion.div 
                key={stage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-history-gold/10 p-4 rounded-lg border border-history-gold/30 backdrop-blur-sm"
            >
                <h4 className="font-bold text-history-accent mb-1">{stages[stage].region}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{stages[stage].desc}</p>
            </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- ERAS TIMELINE ---
export const ErasTimeline: React.FC = () => {
  const eras = [
    {
        title: "العصور القديمة",
        time: "أواخر الألف ٤ ق.م - ٤٧٦ م",
        features: ["اكتشاف الزراعة والكتابة", "بناء المقابر والمعابد", "قيام الحضارات الكبرى في الشرق (مصر، العراق)"],
        event: "تنتهي بسقوط الإمبراطورية الرومانية الغربية",
        color: "border-l-orange-500",
        image: "https://i.pinimg.com/736x/e0/8e/9f/e08e9f5ad5ba79df900525822fe328d8.jpg", // Pyramids (User Image 1)
        caption: "الأهرامات وأبو الهول: رمز عظمة الحضارة القديمة"
    },
    {
        title: "العصور الوسطى",
        time: "٤٧٦ م - ١٤٥٣ م",
        features: ["انتشار المسيحية وسيطرة الكنيسة في أوروبا", "قيام نظام الإقطاع وتخلف أوروبا", "ازدهار الحضارة العربية الإسلامية وفتح القسطنطينية"],
        event: "تنتهي بفتح القسطنطينية على يد محمد الفاتح",
        color: "border-l-green-500",
        image: "https://i.pinimg.com/736x/38/c3/57/38c357213c59fd1d461329b4b56f3e0d.jpg", // Constantinople (User Image 2)
        caption: "فتح القسطنطينية: نقطة تحول تاريخية بقيادة السلطان محمد الفاتح"
    },
    {
        title: "العصور الحديثة",
        time: "١٤٥٣ م - ١٩١٤ م",
        features: ["ظهور النهضة الأوروبية", "الثورة الصناعية", "حركة الكشوف الجغرافية", "حركة الاستعمار الأوروبي"],
        event: "تنتهي بقيام الحرب العالمية الأولى",
        color: "border-l-blue-500",
        image: "https://i.pinimg.com/736x/47/75/93/477593fdb78a813aafccb3d1cedaa0df.jpg", // Industrial/War (User Image 3)
        caption: "الثورة الصناعية: تغيير وجه العالم بالآلة والبخار"
    },
    {
        title: "التاريخ المعاصر",
        time: "١٩١٤ م - الآن",
        features: ["حركات التحرر من الاستعمار", "الثورة المعلوماتية والتكنولوجية", "هبوط الإنسان على القمر", "تلوث البيئة والحروب المدمرة"],
        event: "فترة مزدوجة (إيجابيات وسلبيات)",
        color: "border-l-red-500",
        image: "https://i.pinimg.com/1200x/c9/64/d4/c964d4cd437ac282107654c0e4793c33.jpg", // Moon Landing (User Image 4)
        caption: "هبوط الإنسان على القمر: قمة التطور العلمي المعاصر"
    }
  ];

  const [selectedEra, setSelectedEra] = useState(0);

  return (
    <div className="bg-history-paper p-6 rounded-xl border border-history-gold/30 my-8">
        <h3 className="font-serif text-2xl mb-8 text-history-dark font-bold text-center">العصور التاريخية</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* List */}
            <div className="space-y-4">
                {eras.map((era, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedEra(idx)}
                        className={`w-full text-right p-4 rounded-lg border transition-all duration-300 flex items-center justify-between group ${selectedEra === idx ? 'bg-white shadow-md border-history-gold' : 'bg-transparent border-transparent hover:bg-white/50'}`}
                    >
                        <div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${selectedEra === idx ? 'bg-history-dark text-white' : 'bg-gray-200 text-gray-600'}`}>
                                {idx + 1}
                            </span>
                            <span className={`mr-3 font-serif text-lg ${selectedEra === idx ? 'text-history-dark font-bold' : 'text-gray-500'}`}>
                                {era.title}
                            </span>
                        </div>
                        {selectedEra === idx && <ArrowRight className="text-history-gold" size={20} />}
                    </button>
                ))}
            </div>

            {/* Details Card */}
            <div className="relative h-full">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={selectedEra}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className={`h-full bg-white p-6 rounded-xl shadow-sm border-r-4 flex flex-col ${eras[selectedEra].color}`}
                    >
                        <div className="relative h-48 mb-4 rounded-lg overflow-hidden shadow-inner">
                             <img src={eras[selectedEra].image} alt={eras[selectedEra].title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"/>
                             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                                 <p className="text-white text-xs font-bold">{eras[selectedEra].caption}</p>
                             </div>
                        </div>

                        <div className="flex items-center gap-2 text-history-accent font-mono text-sm mb-2 bg-history-gold/10 w-fit px-3 py-1 rounded-full">
                            <Clock size={14} />
                            {eras[selectedEra].time}
                        </div>
                        <h4 className="text-2xl font-serif text-history-dark mb-2">{eras[selectedEra].title}</h4>
                        <p className="text-xs text-stone-500 mb-4 font-bold">{eras[selectedEra].event}</p>
                        
                        <h5 className="font-bold text-gray-700 mb-2 text-sm">أبرز الملامح:</h5>
                        <ul className="space-y-2">
                            {eras[selectedEra].features.map((f, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-600">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-history-gold shrink-0"></div>
                                    <span className="leading-relaxed text-sm">{f}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    </div>
  );
}

// --- SOURCES INTERACTIVE (DETAILED WITH IMAGES) ---
export const SourcesInteractive: React.FC = () => {
    const [type, setType] = useState<'primary' | 'secondary'>('primary');
    const [selectedCard, setSelectedCard] = useState<string | null>(null);

    const data = {
        primary: [
            { 
                id: 'monuments',
                name: "الآثار", 
                icon: <Landmark size={24}/>, 
                summary: "المصدر الأساسي لدراسة الحضارات.",
                image: "https://i.pinimg.com/736x/c7/99/e6/c799e617f29aadf5f49b522968e60af6.jpg", // King Tut Mask (User provided)
                caption: "قناع توت عنخ آمون والأهرامات",
                details: [
                    "تشمل جميع البقايا الأثرية القائمة مثل الأهرامات والمعابد.",
                    "تشمل الآثار التي يتم العثور عليها أثناء الحفر مثل التماثيل والمومياوات والتمائم."
                ]
            },
            { 
                id: 'inscriptions',
                name: "النقوش", 
                icon: <PenTool size={24}/>, 
                summary: "الرسوم والكتابات المدونة على مواد صلبة.",
                image: "https://i.pinimg.com/736x/0c/4f/1c/0c4f1c1ea117847f9a09236060836afe.jpg", // Palermo Stone (User provided)
                caption: "حجر باليرمو وصلاية الملك نعرمر",
                details: [
                    "تنقسم إلى نوعين:",
                    "١. نقوش غائرة: مثل حجر باليرمو (دُوِّن عليه أسماء من حكموا مصر منذ عصر ما قبل الأسرات حتى ثالث ملوك الأسرة الخامسة وأهم الأحداث).",
                    "٢. نقوش بارزة: مثل صلاية الملك نعرمر (توثق توحيد القطرين عام ٣٢٠٠ ق.م)."
                ]
            },
            { 
                id: 'papyri',
                name: "البرديات", 
                icon: <Scroll size={24}/>, 
                summary: "المادة الوثائقية المكتوبة على ورق البردي.",
                image: "https://i.pinimg.com/1200x/83/b4/bc/83b4bc66f2e8298aea48656912a89d88.jpg", // Ebers Papyrus (User provided)
                caption: "بردية إيبرس الطبية",
                details: [
                    "مصدر خصب للكثير من جوانب الحضارة.",
                    "مثال: بردية إيبرس (أقدم مخطوطة علمية في الطب)، تشرح أمراض الباطنة والعيون والجلدية.",
                    "مصر كانت المصدر الوحيد لورق البردي في العالم القديم."
                ]
            },
            { 
                id: 'ostraca',
                name: "الاستراكا", 
                icon: <Hammer size={24}/>, 
                summary: "كسرات الفخار والأحجار المكتوب عليها.",
                image: "https://i.pinimg.com/736x/d4/a6/75/d4a675d6ec0e9f402c72655334d86386.jpg", // Ostraca (User provided)
                caption: "شقفات الفخار (حياة الطبقة المتوسطة)",
                details: [
                    "سميت 'شقفة'.",
                    "استخدمتها الطبقتين المتوسطة والفقيرة لأن أوراق البردي كانت غالية الثمن.",
                    "تستخدم في الحياة اليومية: تحرير الإيصالات، الخطابات، والتدريب على الكتابة."
                ]
            },
            { 
                id: 'coins',
                name: "النقود", 
                icon: <Coins size={24}/>, 
                summary: "قطع معدنية تحمل ختماً من السلطة.",
                image: "https://i.pinimg.com/736x/8c/2d/ec/8c2decd7c554a5d5904929dc50732378.jpg", // Ancient Coins (User provided)
                caption: "نقود أثرية تحدد الحالة الاقتصادية",
                details: [
                    "تحدد العصر التاريخي والحالة الاقتصادية وصور الملوك.",
                    "ملاحظة هامة: لم تكن العملة المسكوكة معروفة في مصر الفرعونية (كان التعامل بالمقايضة)."
                ]
            }
        ],
        secondary: [
            { 
                id: 'historians',
                name: "المؤرخين", 
                icon: <Users size={24}/>, 
                summary: "كتابات المؤرخين القدماء.",
                image: "https://images.unsplash.com/photo-1453906971074-ce568cccbc63?q=80&w=800&auto=format&fit=crop", // Old statue/bust
                caption: "هيرودوت ومانيتون السمنودي",
                details: [
                    "مانيتون السمنودي: أول مؤرخ مصري قديم كتب تاريخ مصر وقسمها لـ ٣٠ أسرة.",
                    "هيرودوت: مؤرخ إغريقي زار مصر وكتب عنها في كتابه (تمحيص الأخبار) الجزء الثاني، وخصص لها وصفاً دقيقاً."
                ]
            },
            { 
                id: 'philosophers',
                name: "الفلاسفة", 
                icon: <BookOpen size={24}/>, 
                summary: "كتابات فلاسفة اليونان.",
                image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=800&auto=format&fit=crop", // Greek Architecture/School
                caption: "سقراط وأرسطو وأفلاطون",
                details: [
                    "مثل سقراط، أرسطو، وأفلاطون.",
                    "تعكس كتاباتهم صور الحياة الفكرية والاجتماعية في بلاد اليونان."
                ]
            },
            { 
                id: 'poets',
                name: "الشعراء", 
                icon: <PenTool size={24}/>, 
                summary: "مصدر للمعلومات السياسية والاقتصادية.",
                image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=800&auto=format&fit=crop", // Old writing
                caption: "هوميروس صاحب الإلياذة والأوديسة",
                details: [
                    "مثل الشاعر الإغريقي هوميروس.",
                    "صاحب ملحمتي (الإلياذة والأوديسة) التي تعتبر مصدراً تاريخياً لبلاد الإغريق القديمة."
                ]
            },
            { 
                id: 'legends',
                name: "الأساطير", 
                icon: <Anchor size={24}/>, 
                summary: "تراث شعبي يعكس الحياة الاجتماعية.",
                image: "https://images.unsplash.com/photo-1599707367072-cd6ad66acc40?q=80&w=800&auto=format&fit=crop", // Mythological painting
                caption: "إيزيس وأوزوريس / الطوفان",
                details: [
                    "مثل قصة إيزيس وأوزوريس في مصر القديمة.",
                    "وقصة الطوفان في بلاد العراق القديم."
                ]
            }
        ]
    };

    return (
        <div className="my-12">
            {/* Toggles */}
            <div className="flex justify-center gap-4 mb-12">
                <button 
                    onClick={() => { setType('primary'); setSelectedCard(null); }}
                    className={`px-6 py-3 rounded-full font-bold transition-all ${type === 'primary' ? 'bg-history-gold text-white shadow-lg scale-105' : 'bg-stone-800 text-stone-400 border border-stone-700 hover:bg-stone-700'}`}
                >
                    المصادر الأولية
                </button>
                <button 
                    onClick={() => { setType('secondary'); setSelectedCard(null); }}
                    className={`px-6 py-3 rounded-full font-bold transition-all ${type === 'secondary' ? 'bg-history-gold text-white shadow-lg scale-105' : 'bg-stone-800 text-stone-400 border border-stone-700 hover:bg-stone-700'}`}
                >
                    المراجع (الثانوية)
                </button>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {data[type].map((item) => (
                        <motion.div
                            layoutId={item.id}
                            key={item.id}
                            onClick={() => setSelectedCard(selectedCard === item.id ? null : item.id)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className={`cursor-pointer relative overflow-hidden rounded-xl border transition-all duration-300 group ${selectedCard === item.id ? 'bg-history-dark text-white border-history-gold shadow-2xl col-span-1 md:col-span-2 lg:col-span-3 p-0' : 'bg-stone-900 border-stone-700 hover:border-history-gold/50 text-stone-200 p-6'}`}
                        >
                            {/* Background Image for Card (Subtle in Grid, Prominent in Expanded) */}
                            <div className={`absolute inset-0 transition-opacity duration-500 z-0 ${selectedCard === item.id ? 'opacity-20' : 'opacity-0 group-hover:opacity-10'}`}>
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" />
                            </div>

                            <div className={`relative z-10 flex items-start gap-4 ${selectedCard === item.id ? 'p-8 bg-gradient-to-r from-black/90 to-transparent h-full' : ''}`}>
                                <div className={`p-3 rounded-full shrink-0 ${selectedCard === item.id ? 'bg-history-gold text-white' : 'bg-stone-800 text-history-gold'}`}>
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <h4 className={`font-serif text-xl font-bold mb-2 ${selectedCard === item.id ? 'text-history-gold text-3xl' : 'text-history-gold'}`}>{item.name}</h4>
                                    <p className={`text-sm leading-relaxed ${selectedCard === item.id ? 'text-white/90 text-lg' : 'text-stone-400'}`}>{item.summary}</p>
                                    
                                    {/* Expanded Details */}
                                    {selectedCard === item.id && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-6 pt-6 border-t border-white/20 grid grid-cols-1 md:grid-cols-2 gap-8"
                                        >
                                            <div>
                                                <h5 className="text-sm text-history-gold font-bold mb-3 uppercase tracking-widest">التفاصيل:</h5>
                                                <ul className="space-y-3">
                                                    {item.details.map((detail, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-base md:text-lg">
                                                            <span className="mt-2 w-1.5 h-1.5 bg-history-gold rounded-full shrink-0"></span>
                                                            <span>{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="hidden md:block rounded-lg overflow-hidden border-2 border-white/10 shadow-lg relative">
                                                 <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                 <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-center text-xs text-white">
                                                     {item.caption}
                                                 </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                                <div className={`absolute top-6 left-6 transition-transform duration-300 ${selectedCard === item.id ? 'rotate-90' : ''}`}>
                                    <ArrowRight size={20} className={selectedCard === item.id ? 'text-white' : 'text-stone-500'} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            <p className="text-center text-stone-500 text-sm mt-8">اضغط على البطاقة لعرض الصور والتفاصيل</p>
        </div>
    );
}

// --- FACTORS INTERACTIVE (UNCHANGED BUT INCLUDED FOR EXPORT) ---
export const FactorsInteractive: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'natural' | 'human'>('natural');
    const [selectedFactor, setSelectedFactor] = useState(0);

    const factors = {
        natural: [
            {
                name: "نهر النيل",
                icon: <Anchor size={24} />,
                desc: "سر عظمة مصر. ساهم في تكوين التربة الخصبة.",
                impact: [
                    "علم المصريين الزراعة والاستقرار.",
                    "علمهم الوحدة والتضامن (بناء الجسور والسدود لمواجهة الفيضان).",
                    "التكافل والتكامل (تبادل المحاصيل بين الشمال والجنوب عن طريق النهر)."
                ]
            },
            {
                name: "الموقع الجغرافي",
                icon: <Map size={24} />,
                desc: "بموقعها العبقري في قلب العالم القديم (آسيا، أفريقيا، أوروبا).",
                impact: [
                    "تطل على بحرين هامين (الأحمر والمتوسط).",
                    "سهولة الاتصال والتأثير والتأثر بالحضارات الأخرى."
                ]
            },
            {
                name: "الثروات المعدنية",
                icon: <Hammer size={24} />,
                desc: "صخور ومعادن وهبها الله لمصر.",
                impact: [
                    "الصخور: الجرانيت والرخام (استخدمت في بناء الأهرامات والمعابد والتماثيل).",
                    "المعادن: الذهب والنحاس (استخدمت في صناعة الحلي والأدوات)."
                ]
            },
            {
                name: "الحدود الطبيعية",
                icon: <Shield size={24} />,
                desc: "دروع واقية حمت مصر (صحراوات، جنادل، بحار).",
                impact: [
                    "الحدود الآمنة وفرت للمصريين الأمن والاستقرار.",
                    "ساعدتهم على الدفاع عن بلادهم ومقاومة المعتدين."
                ]
            },
            {
                name: "المناخ",
                icon: <Sun size={24} />,
                desc: "مناخ مصر المعتدل ومميزاته الثلاث.",
                impact: [
                    "الاعتدال: ساعد على نشاط المصريين.",
                    "الجفاف: ساعد على بقاء الآثار المصرية حتى الآن.",
                    "تنوع المناخ: أدى إلى تنوع المحاصيل الزراعية والرخاء الاقتصادي."
                ]
            }
        ],
        human: [
            {
                name: "الإنسان المصري",
                icon: <Users size={24} />,
                desc: "الجهد والكفاح هو حجر الأساس.",
                impact: [
                    "بذل المصري القديم جهداً عظيماً من أجل تسخير كل الموارد لصالحه.",
                    "لم تكن مصر هبة النيل فحسب كما قال هيرودوت، بل هبة النيل والمصريين.",
                    "لولا كفاح المصري لما ظهرت هذه الحضارة العظيمة."
                ]
            }
        ]
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 h-auto min-h-[400px]">
            {/* Sidebar Selectors */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
                <div className="flex gap-2 p-1 bg-stone-100 rounded-lg mb-4">
                    <button 
                        onClick={() => { setActiveTab('natural'); setSelectedFactor(0); }}
                        className={`flex-1 py-2 text-sm font-bold rounded-md transition-colors ${activeTab === 'natural' ? 'bg-white text-history-dark shadow-sm' : 'text-stone-500'}`}
                    >
                        العوامل الطبيعية
                    </button>
                    <button 
                        onClick={() => { setActiveTab('human'); setSelectedFactor(0); }}
                        className={`flex-1 py-2 text-sm font-bold rounded-md transition-colors ${activeTab === 'human' ? 'bg-white text-history-dark shadow-sm' : 'text-stone-500'}`}
                    >
                        العامل البشري
                    </button>
                </div>

                <div className="flex flex-col gap-2">
                    {factors[activeTab].map((f, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedFactor(idx)}
                            className={`text-right p-4 rounded-lg border transition-all flex items-center gap-3 ${selectedFactor === idx ? 'bg-history-gold text-white border-history-gold shadow-md' : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'}`}
                        >
                            <div className={selectedFactor === idx ? 'text-white' : 'text-history-gold'}>
                                {f.icon}
                            </div>
                            <span className="font-serif font-bold">{f.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="w-full lg:w-2/3 bg-white rounded-2xl border-2 border-history-gold/20 p-8 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 w-full h-2 bg-history-gold"></div>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={`${activeTab}-${selectedFactor}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="h-full flex flex-col"
                    >
                        <div className="flex items-center gap-4 mb-6">
                             <div className="p-4 bg-history-paper rounded-full text-history-accent border border-history-gold/30">
                                {factors[activeTab][selectedFactor].icon}
                             </div>
                             <div>
                                 <h3 className="text-3xl font-serif font-bold text-history-dark">{factors[activeTab][selectedFactor].name}</h3>
                                 <p className="text-stone-500 font-bold mt-1">{factors[activeTab][selectedFactor].desc}</p>
                             </div>
                        </div>

                        <div className="flex-1 bg-stone-50 rounded-xl p-6 border border-stone-100">
                            <h4 className="font-bold text-history-accent mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 bg-history-accent rounded-full"></span>
                                أثرها في قيام الحضارة:
                            </h4>
                            <ul className="space-y-4">
                                {factors[activeTab][selectedFactor].impact.map((point, i) => (
                                    <motion.li 
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-3 text-stone-700 leading-relaxed text-lg"
                                    >
                                        <ArrowRight className="shrink-0 mt-1 text-history-gold" size={18} />
                                        <span>{point}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
