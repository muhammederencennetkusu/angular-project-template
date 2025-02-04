<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Angular Project Template</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        h1, h2, h3 {
            color: #333;
        }
        pre {
            background: #333;
            color: #fff;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        code {
            font-family: Consolas, monospace;
        }
    </style>
</head>
<body>
    <h1>Angular Project Template</h1>
    <p>Bu proje, <strong>Angular</strong> ile geliştirilecek uygulamalar için bir başlangıç şablonu olarak hazırlanmıştır.</p>
    
    <h2>📌 Özellikler</h2>
    <ul>
        <li><strong>Modüler Yapı</strong>: Uygulama modüller halinde düzenlenmiştir.</li>
        <li><strong>SCSS Desteği</strong>: Daha iyi stil yönetimi için SCSS kullanılmıştır.</li>
        <li><strong>RxJS & State Management</strong>: Reaktif veri yönetimi uygulanabilir.</li>
        <li><strong>Hızlı Başlangıç</strong>: Düzenli bir proje yapısı sunar.</li>
    </ul>
    
    <h2>🚀 Kurulum ve Kullanım</h2>
    <h3>📦 Gereksinimler</h3>
    <p>Projeyi çalıştırmadan önce aşağıdaki teknolojilerin sisteminizde kurulu olması gerekmektedir:</p>
    <ul>
        <li><a href="https://nodejs.org/">Node.js</a> (LTS önerilir)</li>
        <li>Angular CLI yüklemek için:</li>
    </ul>
    <pre><code>npm install -g @angular/cli</code></pre>
    
    <h3>📥 Projeyi Klonlayın</h3>
    <pre><code>git clone https://github.com/muhammederencennetkusu/angular-project-template.git
cd angular-project-template</code></pre>
    
    <h3>📌 Bağımlılıkları Yükleyin</h3>
    <pre><code>npm install</code></pre>
    
    <h3>▶️ Geliştirme Ortamında Çalıştırma</h3>
    <pre><code>ng serve</code></pre>
    <p>Proje <strong>http://localhost:4200/</strong> adresinde çalışacaktır.</p>
    
    <h2>📁 Proje Yapısı</h2>
    <pre><code>angular-project-template/
│-- src/
│   ├── app/               # Uygulama bileşenleri ve modülleri
│   ├── assets/            # Statik dosyalar (görseller, CSS vb.)
│   ├── environments/      # Ortam değişkenleri (development/production)
│   ├── main.ts            # Angular uygulamasının başlangıç noktası
│   ├── index.html         # Ana HTML dosyası
│-- angular.json           # Angular proje yapılandırma dosyası
│-- package.json           # Proje bağımlılıkları ve komutlar
│-- README.md              # Proje hakkında bilgiler</code></pre>
    
    <h2>🔧 Kullanılan Teknolojiler</h2>
    <ul>
        <li><strong>Angular</strong> - Modern web uygulamaları geliştirmek için.</li>
        <li><strong>TypeScript</strong> - Daha güvenli ve ölçeklenebilir JavaScript yazımı için.</li>
        <li><strong>RxJS</strong> - Reaktif programlama için.</li>
        <li><strong>SCSS (Sass)</strong> - Daha organize ve gelişmiş stil yönetimi için.</li>
    </ul>
    
    <h2>🤝 Katkıda Bulunma</h2>
    <p>Projeye katkıda bulunmak için aşağıdaki adımları takip edebilirsiniz:</p>
    <pre><code>git checkout -b feature-yeni-ozellik
# Geliştirmelerinizi yapın ve kaydedin
git commit -m "Yeni özellik eklendi"
git push origin feature-yeni-ozellik</code></pre>
    <p>Ardından bir <strong>Pull Request</strong> oluşturarak katkınızı paylaşabilirsiniz.</p>
    
    <h2>📜 Lisans</h2>
    <p>Bu proje <strong>MIT Lisansı</strong> ile lisanslanmıştır.</p>
</body>
</html>
