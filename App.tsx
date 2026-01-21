
import React, { useState } from 'react';

/**
 * الكائن المسؤول عن التحكم في كافة بيانات الصفحة
 * يمكنك تغيير هذه القيم وسيتغير المحتوى تلقائياً
 */
const productData = {
  name: "ساعة ذكية Ultra Pro Max",
  description: "اكتشف الجيل الجديد من الساعات الذكية. تصميم أنيق، أداء جبار، وميزات صحية متطورة ترافقك في كل لحظة.",
  price: "499",
  currency: "درهم",
  imageUrl: "https://picsum.photos/id/1/800/800",
  buyLink: "https://example.com/checkout",
  features: [
    {
      id: 1,
      title: "مقاومة الماء والغبار",
      desc: "تصميم متين بمعيار IP68، مثالي للسباحة والأنشطة الرياضية القاسية.",
      icon: "🌊"
    },
    {
      id: 2,
      title: "تتبع الصحة الذكي",
      desc: "مستشعرات متطورة لنبضات القلب، نسبة الأكسجين، وتتبع جودة النوم.",
      icon: "❤️"
    },
    {
      id: 3,
      title: "بطارية خارقة",
      desc: "استخدم ساعتك لمدة تصل إلى 10 أيام متواصلة بشحنة واحدة فقط.",
      icon: "🔋"
    },
    {
      id: 4,
      title: "شاشة AMOLED",
      desc: "وضوح فائق تحت أشعة الشمس مع خاصية Always-on display.",
      icon: "📱"
    }
  ],
  testimonials: [
    {
      id: 1,
      user: "أحمد منصور",
      comment: "أفضل ساعة جربتها حتى الآن، البطارية مذهلة والتصميم فخم جداً.",
      rating: 5
    },
    {
      id: 2,
      user: "ليلى حسن",
      comment: "سرعة التوصيل كانت ممتازة، والساعة تعمل بسلاسة مع هاتف الأندرويد.",
      rating: 4
    }
  ]
};

const Header: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-600 uppercase tracking-wider">
        TECH<span className="text-gray-900">STORE</span>
      </div>
      <a 
        href={productData.buyLink}
        className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
      >
        اطلب الآن
      </a>
    </div>
  </nav>
);

const Hero: React.FC = () => (
  <section className="pt-32 pb-16 lg:pt-48 lg:pb-32 px-4 gradient-bg">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-right space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          {productData.name}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
          {productData.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
          <div className="text-3xl font-bold text-gray-900">
            {productData.price} <span className="text-lg font-normal text-gray-500">{productData.currency}</span>
          </div>
          <a 
            href={productData.buyLink}
            className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl transition-all transform hover:-translate-y-1 text-center"
          >
            اشترِ الآن
          </a>
        </div>
      </div>
      <div className="flex-1 w-full max-w-lg">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <img 
            src={productData.imageUrl} 
            alt={productData.name}
            className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transform transition-transform group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  </section>
);

const Features: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">مميزات لا تضاهى</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {productData.features.map((feature) => (
          <div key={feature.id} className="feature-card p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all">
            <div className="text-4xl mb-6 flex justify-center lg:justify-start">
              <span className="p-3 bg-white rounded-xl shadow-sm">{feature.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center lg:text-right">{feature.title}</h3>
            <p className="text-gray-600 text-center lg:text-right">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">ماذا يقول عملاؤنا؟</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {productData.testimonials.map((test) => (
          <div key={test.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < test.rating ? "text-yellow-400" : "text-gray-200"}>★</span>
              ))}
            </div>
            <p className="text-gray-700 italic mb-6">"{test.comment}"</p>
            <div className="font-bold text-gray-900">— {test.user}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="text-2xl font-bold text-blue-400 mb-6 tracking-wider">
        TECHSTORE
      </div>
      <p className="text-gray-400 mb-8 max-w-md mx-auto">
        نحن ملتزمون بتقديم أفضل التقنيات العالمية بين يديك بأفضل الأسعار وأعلى جودة.
      </p>
      <div className="flex justify-center gap-6 mb-8 text-gray-400">
        <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
        <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
        <a href="#" className="hover:text-white transition-colors">تواصل معنا</a>
      </div>
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لـ TechStore.
      </p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
      
      {/* CTA ثابت للهاتف */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-100 z-50">
        <a 
          href={productData.buyLink}
          className="block w-full bg-blue-600 text-white text-center py-4 rounded-xl font-bold shadow-lg"
        >
          اشترِ الآن - {productData.price} {productData.currency}
        </a>
      </div>
    </div>
  );
};

export default App;
