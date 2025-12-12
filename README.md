# � نظام إدارة المهام الاحترافي

تطبيق ويب احترافي ومتقدم لإدارة المهام اليومية، مصمم بأحدث التقنيات والمعايير الاحترافية للشركات الكبرى. يوفر واجهة عربية كاملة مع دعم RTL وميزات متقدمة.

![الإصدار](https://img.shields.io/badge/الإصدار-2.0.0-blue.svg)
![الترخيص](https://img.shields.io/badge/الترخيص-MIT-green.svg)

## ✨ المميزات الاحترافية

### إدارة المهام المتقدمة
- ✅ **إضافة المهام** - مع أولويات (عالية، متوسطة، منخفضة)
- 📁 **التصنيفات** - تنظيم المهام حسب الفئات (عمل، شخصي، دراسة، صحة، تسوق)
- 📅 **تواريخ الاستحقاق** - تحديد مواعيد نهائية للمهام
- ✏️ **تعديل المهام** - نافذة منبثقة احترافية لتعديل أي مهمة
- 🗑️ **حذف المهام** - مع تأكيد لتجنب الحذف الخاطئ
- ✔️ **إكمال المهام** - تحديد المهام كمكتملة

### التنقل والفلترة الذكية
- 🏠 **جميع المهام** - عرض كل المهام
- 📆 **مهام اليوم** - المهام المستحقة اليوم فقط
- 📅 **المهام القادمة** - المهام ذات التواريخ المستقبلية
- ⭐ **المهام المهمة** - المهام ذات الأولوية العالية
- ✅ **المهام المكتملة** - عرض المهام المنجزة
- 🔍 **البحث** - ابحث في المهام حسب النص أو الفئة
- 🔄 **الترتيب** - رتب حسب التاريخ، الأولوية، الاسم، أو الفئة
- 🎯 **فلترة الأولويات** - عرض مهام أولوية محددة فقط

### الإحصائيات والتحليلات
- 📊 **بطاقات الإحصائيات** - عرض مباشر لعدد المهام
- 📈 **شريط التقدم** - نسبة الإنجاز المئوية
- ⚠️ **تتبع المهام المتأخرة** - تنبيهات للمهام المتجاوزة
- 🔢 **عدادات ديناميكية** - في كل قسم من أقسام التنقل

### الواجهة والتجربة
- 🎨 **تصميم احترافي** - يشبه تطبيقات الشركات الكبرى
- 🌙 **الوضع الليلي** - للراحة البصرية
- 🇸🇦 **دعم كامل للعربية** - مع RTL
- 📱 **تصميم متجاوب** - يعمل على جميع الأجهزة
- ⚡ **رسوم متحركة سلسة** - تجربة مستخدم مميزة
- 🔔 **إشعارات ذكية** - تأكيدات لكل عملية

### الاستيراد والتصدير
- 💾 **تخزين دائم** - حفظ تلقائي في LocalStorage
- 📤 **تصدير المهام** - حفظ المهام كملف JSON
- 📥 **استيراد المهام** - استرجاع المهام من ملف

## 📁 هيكل المشروع

```
to-do-list-pro/
│
├── index.html          # الهيكل الأساسي بالعربية مع RTL
├── style.css           # تصميم احترافي مع متغيرات CSS
├── script.js           # منطق متقدم مع جميع الميزات
└── README.md           # هذا الملف (الوثائق بالعربية)
```

## 🚀 كيفية التشغيل

### الطريقة 1: الفتح المباشر
1. افتح ملف `index.html` مباشرة في المتصفح
2. ابدأ باستخدام التطبيق مباشرة

### الطريقة 2: خادم محلي (مفضل)

باستخدام Python:
```bash
cd "d:\Coding\delta\to do list pro"
python -m http.server 8000
# افتح http://localhost:8000
```

باستخدام Node.js:
```bash
npx http-server
# افتح العنوان المعروض
```

## 🌐 النشر على GitHub Pages

### الخطوة 1: إنشاء مستودع GitHub
1. اذهب إلى [GitHub](https://github.com) وسجل الدخول
2. اضغط على **"+"** في الأعلى واختر **"New repository"**
3. ضع اسماً للمستودع (مثل: `task-manager-pro`)
4. اختر **Public** (مطلوب للنشر المجاني)
5. اضغط **"Create repository"**

### الخطوة 2: رفع الملفات

عبر واجهة GitHub:
1. اضغط **"uploading an existing file"**
2. اسحب الملفات (`index.html`, `style.css`, `script.js`)
3. اضغط **"Commit changes"**

عبر Git:
```bash
git init
git add .
git commit -m "إضافة نظام إدارة المهام الاحترافي"
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### الخطوة 3: تفعيل GitHub Pages
1. اذهب إلى **Settings** في المستودع
2. اختر **Pages** من القائمة الجانبية
3. في **Source** اختر **main** branch
4. اضغط **Save**
5. انتظر 1-2 دقيقة
6. الموقع سيكون متاحاً على: `https://USERNAME.github.io/REPO_NAME/`

## 📖 دليل الاستخدام الشامل

### إضافة مهمة جديدة
1. اكتب نص المهمة في الحقل الرئيسي
2. اختر الأولوية (منخفضة، متوسطة، عالية)
3. حدد الفئة من القائمة
4. اختر تاريخ الاستحقاق (اختياري)
5. اضغط **"إضافة المهمة"**

### إدارة المهام
- **إكمال مهمة**: اضغط على صندوق الاختيار بجانب المهمة
- **تعديل مهمة**: اضغط على أيقونة القلم الأزرق
- **حذف مهمة**: اضغط على أيقونة سلة المهملات الحمراء
- **البحث**: استخدم مربع البحث للعثور على مهام محددة

### استخدام الفلاتر
- **التنقل الجانبي**: اضغط على أي قسم لعرض المهام المتعلقة به
- **الترتيب**: استخدم قائمة الترتيب لتنظيم المهام
- **فلترة الأولوية**: اختر أولوية محددة من القائمة
- **حذف المكتملة**: امسح جميع المهام المنجزة بضغطة واحدة

### الاستيراد والتصدير
- **تصدير**: اضغط أيقونة التحميل لحفظ مهامك كملف JSON
- **استيراد**: اضغط أيقونة الرفع واختر ملف JSON سابق

### الوضع الليلي
- اضغط على زر "الوضع الليلي" في أسفل الشريط الجانبي
- سيتم حفظ تفضيلك تلقائياً

## 🛠️ التفاصيل التقنية

### هيكل بيانات المهمة
```javascript
{
    id: 1234567890,              // معرف فريد (timestamp)
    text: "إنهاء المشروع",        // نص المهمة
    priority: "high",            // الأولوية: low, medium, high
    category: "عمل",             // الفئة
    dueDate: "2025-12-31",      // تاريخ الاستحقاق
    completed: false,            // حالة الإنجاز
    createdAt: "2025-12-12..."   // تاريخ الإنشاء ISO
}
```

### التخزين المحلي
- **مفتاح التخزين**: `tasksPro`
- **التنسيق**: JSON Array
- **الحفظ التلقائي**: عند كل عملية (إضافة، تعديل، حذف)
- **التحميل التلقائي**: عند بدء التطبيق

### التوافق مع المتصفحات
- ✅ Chrome (الإصدار الأحدث)
- ✅ Firefox (الإصدار الأحدث)  
- ✅ Safari (الإصدار الأحدث)
- ✅ Edge (الإصدار الأحدث)
- ✅ متصفحات الجوال

## 🎨 التخصيص

### تغيير الألوان
عدّل متغيرات CSS في `style.css`:

```css
:root {
    --primary-blue: #0066ff;      /* اللون الأساسي */
    --secondary-purple: #6c5ce7;  /* اللون الثانوي */
    --success: #00b894;           /* لون النجاح */
    --danger: #d63031;            /* لون الخطر */
    --warning: #fdcb6e;           /* لون التحذير */
}
```

### إضافة فئة جديدة
في `index.html`، أضف خياراً جديداً:

```html
<select id="categorySelect">
    <option value="فئة_جديدة">فئة جديدة</option>
</select>
```

## 🔧 الميزات المتقدمة

### النظام الذكي للمهام المتأخرة
- يكتشف تلقائياً المهام التي تجاوزت موعدها
- يعرضها بلون مميز في الإحصائيات
- تظهر بأيقونة تحذير في قائمة المهام

### شريط التقدم الديناميكي
- يحسب تلقائياً نسبة الإنجاز
- يتحدث مباشرة مع كل تغيير
- تأثيرات بصرية سلسة

### نظام الإشعارات
- إشعارات ملونة حسب نوع العملية
- اختفاء تلقائي بعد 3 ثوانٍ
- تأثيرات ظهور واختفاء سلسة

## 📱 المميزات التقنية

- **خط Cairo**: خط عربي احترافي من Google Fonts
- **Font Awesome 6**: آلاف الأيقونات المميزة
- **CSS Grid & Flexbox**: تخطيط مرن ومتجاوب
- **CSS Variables**: سهولة التخصيص
- **ES6+**: JavaScript حديث وفعال
- **LocalStorage API**: تخزين محلي آمن
- **File API**: استيراد وتصدير الملفات

## 📄 الترخيص

هذا المشروع مفتوح المصدر ومتاح تحت [رخصة MIT](LICENSE).

## 🤝 المساهمة

المساهمات مرحب بها! يمكنك:
- الإبلاغ عن الأخطاء (Bugs)
- اقتراح ميزات جديدة
- إرسال Pull Requests

## 📧 التواصل

للأسئلة أو الاقتراحات، افتح Issue على GitHub.

---

**صُنع بـ ❤️ لإدارة مهامك بكفاءة احترافية**

استمتع بتنظيم مهامك! 🚀


## ✨ Features

- ✅ **Add Tasks** - Quickly add new tasks with a simple input
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- ✔️ **Toggle Completion** - Mark tasks as complete or incomplete
- 💾 **Persistent Storage** - Tasks are saved in LocalStorage and persist after refresh
- 🎨 **Modern UI** - Clean, gradient design with smooth animations
- 📊 **Statistics** - View total, completed, and pending tasks at a glance
- 🔍 **Filter Tasks** - View all, active, or completed tasks
- 🧹 **Clear Completed** - Remove all completed tasks with one click
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices

## 📁 Folder Structure

```
to-do-list-pro/
│
├── index.html          # Main HTML file (structure)
├── style.css           # CSS styling (design & layout)
├── script.js           # JavaScript logic (functionality)
└── README.md           # This file (documentation)
```

## 🚀 How to Run Locally

### Option 1: Direct File Opening
1. Download or clone all files to a folder on your computer
2. Open `index.html` directly in your web browser
3. Start adding tasks!

### Option 2: Using a Local Server (Recommended)
If you have Python installed:

```bash
# Navigate to the project folder
cd path/to/to-do-list-pro

# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

Or using Node.js with `http-server`:

```bash
# Install http-server globally (one time)
npm install -g http-server

# Run server
http-server

# Open the URL shown in your browser (usually http://localhost:8080)
```

## 🌐 Deploy to GitHub Pages

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name your repository (e.g., `todo-list-pro`)
5. Choose **Public** (required for GitHub Pages free hosting)
6. Click **"Create repository"**

### Step 2: Upload Your Files
You can upload files using either the GitHub website or Git command line:

#### Using GitHub Website:
1. Click **"uploading an existing file"**
2. Drag and drop your files (`index.html`, `style.css`, `script.js`)
3. Click **"Commit changes"**

#### Using Git Command Line:
```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - To-Do List Pro"

# Add remote repository (replace USERNAME and REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"main"** branch
5. Click **"Save"**
6. Wait 1-2 minutes for deployment
7. Your site will be live at: `https://USERNAME.github.io/REPO_NAME/`

### Step 4: Access Your Live Site
After deployment completes, visit:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

For example: `https://johndoe.github.io/todo-list-pro/`

## 💡 Usage Guide

### Adding a Task
1. Type your task in the input field
2. Click **"Add Task"** button or press **Enter**
3. Task appears in the list below

### Completing a Task
- Click the checkbox next to a task to mark it as complete
- Click again to mark as incomplete

### Deleting a Task
- Click the red trash icon (🗑️) next to any task to delete it

### Filtering Tasks
- Click **"All"** to show all tasks
- Click **"Active"** to show only incomplete tasks
- Click **"Completed"** to show only completed tasks

### Clearing Completed Tasks
- Click **"Clear Completed"** to remove all completed tasks at once

## 🛠️ Technical Details

### LocalStorage Implementation
Tasks are automatically saved to your browser's LocalStorage:
- **Saved when**: Adding, deleting, or toggling tasks
- **Loaded when**: Page loads or refreshes
- **Data format**: JSON array of task objects
- **Storage key**: `todoTasks`

### Task Object Structure
```javascript
{
    id: 1234567890,           // Unique timestamp ID
    text: "Buy groceries",    // Task description
    completed: false,          // Completion status
    createdAt: "2025-12-12T..." // ISO timestamp
}
```

### Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🎨 Customization

### Change Color Scheme
Edit the CSS variables in `style.css`:

```css
:root {
    --primary-color: #6366f1;    /* Main color */
    --secondary-color: #8b5cf6;  /* Accent color */
    --success-color: #10b981;    /* Success/complete color */
    --danger-color: #ef4444;     /* Delete/error color */
}
```

### Modify Maximum Tasks Displayed
Edit the `.task-list` max-height in `style.css`:

```css
.task-list {
    max-height: 500px; /* Change this value */
}
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Made with ❤️ by [amr elgamasy]**

Enjoy organizing your tasks! 🎉
