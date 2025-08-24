// data/Projects.js
export const projects = [
    {
        id: 1,
        title: "Kişisel Website",
        description: "Next.js ile geliştirdiğim, kendi projelerimi sergilediğim modern portfolyo sitesi",
        image: "/projects/proje3anasayfa.png",
        gallery: [
            "/projects/proje3about.png",
            "/projects/proje3contact.png",
        ],
        technologies: ["Next.js", "Modern CSS", "React"],
        features: [
            "Projelerin detaylı gösterimi",
            "Profesyonel Görünüm",
            "Responsive tasarım",
            "İletişim formu entegrasyonu"
        ],
        details: "React ve Next.js ile dinamik kullanıcı dostu kişisel portföy sitesi. Projeleri sergileyebilir, iletişim entegrasyonu ve hakkımda kısmı ile kendinizi daha iyi tanıtabilirsiniz",
        githubLink: "https://github.com/YunusBeytut/Jedi/tree/main/portfolio%20website"

    },
    {
        id: 2,
        title: "Modern Blog Platformu",
        description: " 💻 Modern Blog Platformu – React ile Geliştirilmiş, Responsive ve Hızlı",
        image: "/projects/blogAnaSayfa.png",
        gallery: [
            "/projects/blogAbout.png",
            "/projects/blogContact.png",
            "/projects/blogServices.png"
        ],
        technologies: ["React", "Modern CSS", "JavaScript", "Netlify"],
        features: [
            "Tamamen responsive tasarım",
            "Kategorilere göre içerik filtreleme",
            "Hızlı sayfa geçişleri ve asenkron veri yükleme",
            "SEO dostu meta etiketler",
            "Minimalist ve modern UI/UX tasarımı"
        ],
        details: "Kullanıcı deneyimini ön planda tutan, modern tasarıma sahip bir blog sitesi geliştirdim. React.js ve modern CSS kullanarak mobil, tablet ve masaüstü cihazlarda kusursuz çalışan bir yapı oluşturdum. Projede kategori bazlı içerik filtreleme, hızlı yükleme süreleri ve SEO optimizasyonu gibi özelliklere yer verdim. Netlify üzerinden deploy edilerek herkese açık hale getirildi.",
        demoLink: "https://blog-web-sitesi.netlify.app/",
        githubLink: "https://github.com/YunusBeytut/Jedi/tree/main/Blog%20Website"

    },
    {
        id: 3,
        title: "Rezervasyon Sitesi",
        description: "Modern tasarımlı, kullanıcı dostu rezervasyon platformu 🏨",
        image: "/projects/rezervasyon-sitesi.png",
        gallery: [
            "/projects/rezervasyon-sitesi2.png",
            "/projects/rezervasyon-sitesi3.png",
            "/projects/rezervasyon-sitesi4.png",
            "/projects/rezervasyon-sitesi5.png",
        ],
        technologies: ["React", "CSS", "JavaScript"],
        features: [
            "Kullanıcı dostu rezervasyon formu",
            "Tarih ve kişi sayısına göre arama",
            "Anında rezervasyon onayı",
            "Responsive tasarım",
            "Dinamik içerik yönetimi"
        ],
        details: "React ve Modern CSS kullanarak geliştirdiğim bu rezervasyon sitesi, kullanıcıların kolayca konaklama araması ve rezervasyon yapmasına imkan tanıyor. Basit, hızlı ve mobil uyumlu yapısıyla gerçek dünyadaki rezervasyon sistemlerini simüle eden bir deneyim sunuyor.",
        demoLink: "https://reservation-websitesi.netlify.app/",
        githubLink: "https://github.com/YunusBeytut/Jedi/tree/main/Rezervasyon-sitesi-kodlar%C4%B1"
    },
    {
        id: 4,
        title: "Not Takip Uygulaması",
        description: "Öğrenci ve öğretmenler için gelişmiş not takip platformu",
        image: "/projects/proje1anasayfa.png",
        gallery: [
            "/projects/proje1giris.png",
            "/projects/proje1kayıt.png",
            "/projects/proje1student.png",
            "/projects/proje1mesaj.png",
            "/projects/proje1duyuru.png",
            "/projects/proje1notekleme.png",
            "/projects/proje1istatistik.png"

        ],
        technologies: ["React", "Firebase", "Modern CSS"],
        features: [
            "Öğretmen ve Öğrenci olarak kayıt olabilme ve giriş yapabilme",
            "Gerçek zamanlı not güncelleme ve takip",
            "Öğrenci performans analizi",
            "Duyuru gönderme ve okuma",
            "Eş zamanlı karılıklı mesajlaşma",
            "Notlar hakkında istatistikler"
        ],
        demoLink: "https://gradetrackerdemo.netlify.app/auth",
        githubLink: "https://github.com/YunusBeytut/Grade"

    },
    {
        id: 5,
        title: "Shopmaxs E-Ticaret Sitesi",
        description: "Kullanıcı dostu arayüzü ve modern tasarımıyla geliştirilmiş e-ticaret deneyimi 🛒",
        image: "/projects/e-ticaret.png",
        gallery: [
            "/projects/e-ticaret2.png",
            "/projects/e-ticaret3.png",
            "/projects/e-ticaret4.png",
        ],
        technologies: ["React", "CSS", "JavaScript"],
        features: [
            "Ürün listeleme ve detay sayfaları",
            "Sepete ekleme ve sepet yönetimi",
            "Arama ve filtreleme özellikleri",
            "Responsive tasarım",
            "Dinamik fiyat hesaplama"
        ],
        details: "Modern e-ticaret deneyimi sunmak için geliştirdiğim bu projede React ve CSS kullandım. Kullanıcılar ürünleri inceleyebilir, sepete ekleyebilir ve kolayca alışveriş deneyimi yaşayabilir. Tamamen responsive tasarımı sayesinde mobil cihazlarda da sorunsuz çalışır.",
        demoLink: "https://shopmaxs.netlify.app/",
        githubLink: "https://github.com/YunusBeytut/Jedi/tree/main/e-ticaret%20kodlar%C4%B1"
    },

    {
        id: 6,
        title: "Quiz App",
        description: " Kullanıcı dostu arayüzüyle tam responsive soru çözme deneyimi 🚀",
        image: "/projects/quizstart.png",
        gallery: [
            "/projects/soru.png",
            "/projects/sonuc.png",
        ],
        technologies: ["LocaStorage", "CSS", "JavaScript"],
        features: [
            "LocalStorage ile puanları kaydetme",
            "Sayaç özelliği ile zamana karşı yarış",
            "Responsive tasarım",
            "Kategori bazlı sorular"
        ],
        details: "Modern bir quiz deneyimi sunan bu projede React ve Modern CSS kullanarak kullanıcı dostu bir arayüz geliştirdim. Uygulama, farklı kategorilerde sorular içeriyor ve kullanıcıların bilgi seviyelerini test etmelerini sağlıyor.",
        demoLink: "https://yunus-beytut-quiz-app.netlify.app/",
        githubLink: "https://github.com/YunusBeytut/Jedi/tree/main/QuizApp"
    }


];