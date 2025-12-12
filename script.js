// ==================== المتغيرات العامة ====================
let tasks = [];
let currentView = 'all';
let currentTaskId = null;
let isDarkMode = false;

// ==================== العناصر من DOM ====================
const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const categorySelect = document.getElementById('categorySelect');
const dueDateInput = document.getElementById('dueDateInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const currentDateElement = document.getElementById('currentDate');
const viewTitle = document.getElementById('viewTitle');

// عناصر الإحصائيات
const totalTasksElement = document.getElementById('totalTasks');
const completedTasksElement = document.getElementById('completedTasks');
const pendingTasksElement = document.getElementById('pendingTasks');
const overdueTasksElement = document.getElementById('overdueTasks');
const progressFill = document.getElementById('progressFill');
const progressPercentage = document.getElementById('progressPercentage');

// عناصر التنقل
const navItems = document.querySelectorAll('.nav-item');
const navAllCount = document.getElementById('navAllCount');
const navTodayCount = document.getElementById('navTodayCount');
const navUpcomingCount = document.getElementById('navUpcomingCount');
const navImportantCount = document.getElementById('navImportantCount');
const navCompletedCount = document.getElementById('navCompletedCount');

// عناصر الأدوات
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const filterPriority = document.getElementById('filterPriority');
const clearCompletedBtn = document.getElementById('clearCompleted');
const themeToggle = document.getElementById('themeToggle');
const exportBtn = document.getElementById('exportBtn');
const importBtn = document.getElementById('importBtn');
const importFile = document.getElementById('importFile');

// عناصر النافذة المنبثقة
const editModal = document.getElementById('editModal');
const closeModal = document.getElementById('closeModal');
const editTaskInput = document.getElementById('editTaskInput');
const editPrioritySelect = document.getElementById('editPrioritySelect');
const editCategorySelect = document.getElementById('editCategorySelect');
const editDueDateInput = document.getElementById('editDueDateInput');
const saveEdit = document.getElementById('saveEdit');
const cancelEdit = document.getElementById('cancelEdit');

// عناصر القائمة للجوال
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

// ==================== التهيئة ====================
document.addEventListener('DOMContentLoaded', function() {
    loadTasksFromStorage();
    loadThemePreference();
    displayCurrentDate();
    setupEventListeners();
    renderTasks();
    updateAllStats();
});

// ==================== إعداد المستمعات ====================
function setupEventListeners() {
    // إضافة مهمة
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    // التنقل
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            currentView = item.dataset.view;
            updateViewTitle();
            renderTasks();
            
            // إغلاق القائمة على الجوال بعد الاختيار
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        });
    });
    
    // زر القائمة للجوال
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleSidebar);
    }
    
    // الـ overlay لإغلاق القائمة
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    // البحث والفلترة
    searchInput.addEventListener('input', renderTasks);
    sortSelect.addEventListener('change', renderTasks);
    filterPriority.addEventListener('change', renderTasks);
    clearCompletedBtn.addEventListener('click', clearCompletedTasks);

    // الثيم
    themeToggle.addEventListener('click', toggleTheme);

    // الاستيراد والتصدير
    exportBtn.addEventListener('click', exportTasks);
    importBtn.addEventListener('click', () => importFile.click());
    importFile.addEventListener('change', importTasks);

    // النافذة المنبثقة
    closeModal.addEventListener('click', closeEditModal);
    cancelEdit.addEventListener('click', closeEditModal);
    saveEdit.addEventListener('click', saveTaskEdit);
    
    // إغلاق النافذة عند النقر خارجها
    editModal.addEventListener('click', (e) => {
        if (e.target === editModal) closeEditModal();
    });
}

// ==================== عرض التاريخ ====================
function displayCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    currentDateElement.textContent = today.toLocaleDateString('ar-SA', options);
}

// ==================== تحديث عنوان العرض ====================
function updateViewTitle() {
    const titles = {
        'all': 'جميع المهام',
        'today': 'مهام اليوم',
        'upcoming': 'المهام القادمة',
        'important': 'المهام المهمة',
        'completed': 'المهام المكتملة'
    };
    viewTitle.textContent = titles[currentView] || 'جميع المهام';
}

// ==================== إضافة مهمة ====================
function addTask() {
    const text = taskInput.value.trim();
    const priority = prioritySelect.value;
    const category = categorySelect.value;
    const dueDate = dueDateInput.value;

    if (!text) {
        showNotification('الرجاء إدخال نص المهمة', 'error');
        taskInput.classList.add('shake');
        setTimeout(() => taskInput.classList.remove('shake'), 500);
        return;
    }

    const task = {
        id: Date.now(),
        text: text,
        priority: priority,
        category: category,
        dueDate: dueDate,
        completed: false,
        createdAt: new Date().toISOString()
    };

    tasks.unshift(task);
    saveTasksToStorage();
    
    taskInput.value = '';
    dueDateInput.value = '';
    prioritySelect.value = 'medium';
    
    renderTasks();
    updateAllStats();
    showNotification('تمت إضافة المهمة بنجاح', 'success');
}

function deleteTask(taskId) {
    if (!confirm('هل أنت متأكد من حذف هذه المهمة؟')) return;
    
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasksToStorage();
    renderTasks();
    updateAllStats();
    showNotification('تم حذف المهمة', 'info');
}

function toggleTaskComplete(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        task.completedAt = task.completed ? new Date().toISOString() : null;
        saveTasksToStorage();
        renderTasks();
        updateAllStats();
    }
}

function openEditModal(taskId) {
    currentTaskId = taskId;
    const task = tasks.find(t => t.id === taskId);
    
    if (task) {
        editTaskInput.value = task.text;
        editPrioritySelect.value = task.priority;
        editCategorySelect.value = task.category;
        editDueDateInput.value = task.dueDate || '';
        editModal.classList.add('show');
    }
}

function closeEditModal() {
    editModal.classList.remove('show');
    currentTaskId = null;
}

function saveTaskEdit() {
    const task = tasks.find(t => t.id === currentTaskId);
    
    if (task) {
        const newText = editTaskInput.value.trim();
        
        if (!newText) {
            showNotification('الرجاء إدخال نص المهمة', 'error');
            return;
        }
        
        task.text = newText;
        task.priority = editPrioritySelect.value;
        task.category = editCategorySelect.value;
        task.dueDate = editDueDateInput.value;
        
        saveTasksToStorage();
        closeEditModal();
        renderTasks();
        updateAllStats();
        showNotification('تم تحديث المهمة بنجاح', 'success');
    }
}

function clearCompletedTasks() {
    const completedCount = tasks.filter(t => t.completed).length;
    
    if (completedCount === 0) {
        showNotification('لا توجد مهام مكتملة لحذفها', 'info');
        return;
    }
    
    if (!confirm(`هل تريد حذف ${completedCount} مهمة مكتملة؟`)) return;
    
    tasks = tasks.filter(task => !task.completed);
    saveTasksToStorage();
    renderTasks();
    updateAllStats();
    showNotification('تم حذف المهام المكتملة', 'success');
}

// ==================== فلترة المهام ====================
function getFilteredTasks() {
    let filtered = [...tasks];
    const searchTerm = searchInput.value.trim().toLowerCase();
    const priorityFilter = filterPriority.value;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    switch (currentView) {
        case 'today':
            filtered = filtered.filter(task => {
                if (!task.dueDate) return false;
                const dueDate = new Date(task.dueDate);
                dueDate.setHours(0, 0, 0, 0);
                return dueDate.getTime() === today.getTime() && !task.completed;
            });
            break;
        case 'upcoming':
            filtered = filtered.filter(task => {
                if (!task.dueDate) return false;
                const dueDate = new Date(task.dueDate);
                return dueDate > today && !task.completed;
            });
            break;
        case 'important':
            filtered = filtered.filter(task => task.priority === 'high' && !task.completed);
            break;
        case 'completed':
            filtered = filtered.filter(task => task.completed);
            break;
    }

    if (searchTerm) {
        filtered = filtered.filter(task => 
            task.text.toLowerCase().includes(searchTerm) ||
            task.category.toLowerCase().includes(searchTerm)
        );
    }

    if (priorityFilter !== 'all') {
        filtered = filtered.filter(task => task.priority === priorityFilter);
    }

    const sortType = sortSelect.value;
    switch (sortType) {
        case 'priority':
            const priorityOrder = { high: 1, medium: 2, low: 3 };
            filtered.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
            break;
        case 'name':
            filtered.sort((a, b) => a.text.localeCompare(b.text, 'ar'));
            break;
        case 'category':
            filtered.sort((a, b) => a.category.localeCompare(b.category, 'ar'));
            break;
    }

    return filtered;
}

function renderTasks() {
    const filtered = getFilteredTasks();
    taskList.innerHTML = '';

    if (filtered.length === 0) {
        emptyState.classList.add('show');
        return;
    } else {
        emptyState.classList.remove('show');
    }

    filtered.forEach(task => {
        const taskItem = createTaskElement(task);
        taskList.appendChild(taskItem);
    });
}

function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = `task-item priority-${task.priority}`;
    if (task.completed) li.classList.add('completed');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTaskComplete(task.id));

    const content = document.createElement('div');
    content.className = 'task-content';

    const title = document.createElement('div');
    title.className = 'task-title';
    title.textContent = task.text;

    const meta = document.createElement('div');
    meta.className = 'task-meta';

    const categoryTag = document.createElement('span');
    categoryTag.className = 'task-tag category';
    categoryTag.innerHTML = `<i class="fas fa-folder"></i> ${task.category}`;
    meta.appendChild(categoryTag);

    if (task.dueDate) {
        const dueDateTag = document.createElement('span');
        dueDateTag.className = 'task-tag due-date';
        const dueDate = new Date(task.dueDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (dueDate < today && !task.completed) {
            dueDateTag.classList.add('overdue');
            dueDateTag.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${formatDate(task.dueDate)}`;
        } else {
            dueDateTag.innerHTML = `<i class="fas fa-calendar"></i> ${formatDate(task.dueDate)}`;
        }
        meta.appendChild(dueDateTag);
    }

    content.appendChild(title);
    content.appendChild(meta);

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'task-btn edit-btn';
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.title = 'تعديل';
    editBtn.addEventListener('click', () => openEditModal(task.id));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'task-btn delete-btn';
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.title = 'حذف';
    deleteBtn.addEventListener('click', () => deleteTask(task.id));

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(content);
    li.appendChild(actions);

    return li;
}

function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA', { year: 'numeric', month: 'short', day: 'numeric' });
}

function updateAllStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const overdue = tasks.filter(task => {
        if (!task.dueDate || task.completed) return false;
        const dueDate = new Date(task.dueDate);
        return dueDate < today;
    }).length;

    totalTasksElement.textContent = total;
    completedTasksElement.textContent = completed;
    pendingTasksElement.textContent = pending;
    overdueTasksElement.textContent = overdue;

    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    progressFill.style.width = `${percentage}%`;
    progressPercentage.textContent = `${percentage}%`;

    navAllCount.textContent = total;
    navCompletedCount.textContent = completed;
    
    const todayTasks = tasks.filter(task => {
        if (!task.dueDate || task.completed) return false;
        const dueDate = new Date(task.dueDate);
        dueDate.setHours(0, 0, 0, 0);
        return dueDate.getTime() === today.getTime();
    }).length;
    navTodayCount.textContent = todayTasks;

    const upcomingTasks = tasks.filter(task => {
        if (!task.dueDate || task.completed) return false;
        const dueDate = new Date(task.dueDate);
        return dueDate > today;
    }).length;
    navUpcomingCount.textContent = upcomingTasks;

    const importantTasks = tasks.filter(task => 
        task.priority === 'high' && !task.completed
    ).length;
    navImportantCount.textContent = importantTasks;
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    
    const icon = themeToggle.querySelector('i');
    const text = themeToggle.querySelector('span');
    
    if (isDarkMode) {
        icon.classList.replace('fa-moon', 'fa-sun');
        text.textContent = 'الوضع النهاري';
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        text.textContent = 'الوضع الليلي';
    }
    
    localStorage.setItem('darkMode', isDarkMode);
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
        toggleTheme();
    }
}

function exportTasks() {
    if (tasks.length === 0) {
        showNotification('لا توجد مهام للتصدير', 'info');
        return;
    }

    const dataStr = JSON.stringify(tasks, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `tasks_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    
    showNotification('تم تصدير المهام بنجاح', 'success');
}

function importTasks(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedTasks = JSON.parse(e.target.result);
            
            if (!Array.isArray(importedTasks)) {
                throw new Error('تنسيق ملف غير صحيح');
            }

            if (confirm(`هل تريد استيراد ${importedTasks.length} مهمة؟ سيتم دمجها مع المهام الحالية.`)) {
                tasks = [...tasks, ...importedTasks];
                saveTasksToStorage();
                renderTasks();
                updateAllStats();
                showNotification(`تم استيراد ${importedTasks.length} مهمة بنجاح`, 'success');
            }
        } catch (error) {
            showNotification('خطأ في استيراد الملف: ' + error.message, 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--danger)' : 'var(--primary-blue)'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideDown 0.3s ease;
        font-family: 'Cairo', sans-serif;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function saveTasksToStorage() {
    try {
        localStorage.setItem('tasksPro', JSON.stringify(tasks));
    } catch (error) {
        console.error('خطأ في حفظ المهام:', error);
        showNotification('خطأ في حفظ المهام', 'error');
    }
}

function loadTasksFromStorage() {
    try {
        const stored = localStorage.getItem('tasksPro');
        if (stored) {
            tasks = JSON.parse(stored);
        }
    } catch (error) {
        console.error('خطأ في تحميل المهام:', error);
        tasks = [];
    }
}

// ==================== وظائف القائمة للجوال ====================
function toggleSidebar() {
    sidebar.classList.toggle('show');
    sidebarOverlay.classList.toggle('show');
}

function closeSidebar() {
    sidebar.classList.remove('show');
    sidebarOverlay.classList.remove('show');
}


const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
    .shake {
        animation: shake 0.5s;
        border-color: var(--danger) !important;
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translate(-50%, -20px);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translate(-50%, 0);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -20px);
        }
    }
`;
document.head.appendChild(style);

