    // Initialize user data
    let userData = {
      startDate: null,
      lastActiveDate: null,
      completedChallenges: [],
      currentStreak: 1,
      darkMode: false
    };

    // 60 days of progressive challenges
    const challenges = [
  // Week 1 - Awareness (Easiest)
  { day: 1, title: "Track Your Screen Time", desc: "Simply notice how often you reach for your phone today." },
  { day: 2, title: "No Phone First Hour", desc: "Avoid non-essential screens for the first hour after waking up." },
  { day: 3, title: "Mindful Usage", desc: "Identify the most addictive app on your device and restrict it for today." },
  { day: 4, title: "Read 5 Pages", desc: "Read 5 pages of any physical book today." },
  { day: 5, title: "10 Minute Walk", desc: "Take a 10-minute walk without your phone." },
  { day: 6, title: "Meal Without Screens", desc: "Have one meal today without any screens." },
  { day: 7, title: "Digital Sunset", desc: "Turn off screens 1 hour before bedtime." },
  
  // Week 2 - Small Changes
  { day: 8, title: "Notification Fast", desc: "Turn off all non-essential notifications today." },
  { day: 9, title: "Single-Task Focus", desc: "Do one activity at a time (no multitasking) for 2 hours." },
  { day: 10, title: "Phone-Free Space", desc: "Choose one room where phones aren't allowed today." },
  { day: 11, title: "15 Minute Read", desc: "Read for 15 continuous minutes today." },
  { day: 12, title: "Nature Break", desc: "Spend 15 minutes outside in nature without devices." },
  { day: 13, title: "Conversation Challenge", desc: "Have one face-to-face conversation >10 minutes without phone checks." },
  { day: 14, title: "Full Digital Sunset", desc: "No screens after 8pm tonight." },
  
  // Week 3 - Building Focus
  { day: 15, title: "Morning Focus Block", desc: "90 minutes of deep work with no distractions first thing." },
  { day: 16, title: "App Purge", desc: "Delete 3 time-wasting apps from your phone." },
  { day: 17, title: "Digital Minimalism", desc: "Remove all non-essential apps from your home screen." },
  { day: 18, title: "30 Minute Read", desc: "Read for 30 continuous minutes today." },
  { day: 19, title: "Full Work Focus", desc: "Work in 45-minute blocks with 15-minute breaks (Pomodoro)." },
  { day: 20, title: "Social Media Fast", desc: "No social media for the entire day." },
  { day: 21, title: "Tech Sabbath Prep", desc: "Prepare for a full day without tech tomorrow." },
  
  // Week 4 - Intermediate Focus
  { day: 22, title: "Tech Sabbath", desc: "No recreational technology for 24 hours." },
  { day: 23, title: "Email Windows", desc: "Check email only at 11am and 4pm today." },
  { day: 24, title: "Deep Work Session", desc: "2 hours of uninterrupted focused work." },
  { day: 25, title: "Analog Hobby", desc: "Spend 1 hour on a non-digital hobby (drawing, music, crafting)." },
  { day: 26, title: "Silent Mode", desc: "Keep phone on silent/airplane mode when not in active use." },
  { day: 27, title: "Full Presence", desc: "No phone during all social interactions today." },
  { day: 28, title: "Digital Declutter", desc: "Organize and minimize your digital files/emails." },
  
  // Week 5 - Advanced Focus
  { day: 29, title: "Morning Deep Dive", desc: "3 hours of deep work before lunch." },
  { day: 30, title: "No YouTube/Streaming", desc: "Avoid all video content today." },
  { day: 31, title: "Single Device", desc: "Use only one device all day (phone OR computer)." },
  { day: 32, title: "Book Chapter", desc: "Read a full chapter of a book today." },
  { day: 33, title: "Nature Immersion", desc: "2 hours in nature without any devices." },
  { day: 34, title: "Full Workday Focus", desc: "Pomodoro method all workday (25/5 intervals)." },
  { day: 35, title: "Digital Minimalist", desc: "Only use tech for essential tasks today." },
  
  // Week 6 - Expert Focus
  { day: 36, title: "No Smartphone", desc: "Use only a computer (or dumbphone) today." },
  { day: 37, title: "Deep Work Marathon", desc: "4 hours of uninterrupted focused work." },
  { day: 38, title: "Analog Day", desc: "Use paper for all notes and planning today." },
  { day: 39, title: "Silent Retreat", desc: "2 hours of complete silence (no audio input)." },
  { day: 40, title: "Full Presence Day", desc: "Be completely present in every activity today." },
  { day: 41, title: "Digital Fasting", desc: "12 hours without any digital devices." },
  { day: 42, title: "Mindful Consumption", desc: "Only consume high-quality, intentional content." },
  
  // Week 7 - Master Level
  { day: 43, title: "Monk Mode Morning", desc: "4 hours of deep work before lunch." },
  { day: 44, title: "Essential Apps Only", desc: "Use only 5 core apps all day." },
  { day: 45, title: "Full Analog Workday", desc: "Complete your work without digital tools where possible." },
  { day: 46, title: "Book Sprint", desc: "Read 100 pages today." },
  { day: 47, title: "Nature Retreat", desc: "4 hours in nature without technology." },
  { day: 48, title: "Silent Workday", desc: "No music/podcasts while working today." },
  { day: 49, title: "Digital Minimalism", desc: "Only 30 minutes of leisure screen time today." },
  
  // Week 8 - Extreme Focus
  { day: 50, title: "Deep Work Immersion", desc: "6 hours of uninterrupted focused work." },
  { day: 51, title: "No Internet", desc: "Work offline all day (download what you need)." },
  { day: 52, title: "Analog Weekend", desc: "No digital entertainment all weekend." },
  { day: 53, title: "Full Chapter Book", desc: "Read an entire short book today." },
  { day: 54, title: "Wilderness Day", desc: "Full day outdoors without technology." },
  { day: 55, title: "Silent Sunday", desc: "No spoken or digital communication for 4 hours." },
  { day: 56, title: "Essential Tech Only", desc: "Use technology only for absolute necessities." },
  
  // Final Days - Mastery
  { day: 57, title: "Monk Mode Day", desc: "8 hours of deep work with scheduled breaks." },
  { day: 58, title: "Digital Pilgrimage", desc: "24 hours with only communication technology." },
  { day: 59, title: "Focus Marathon", desc: "Complete your most important project today." },
  { day: 60, title: "Digital Enlightenment", desc: "Full 24 hours without any recreational technology." }
];

    // Theme toggle functionality
    function toggleTheme() {
      document.body.classList.toggle('dark-mode');
      userData.darkMode = !userData.darkMode;
      saveUserData();
      updateThemeIcon();
    }

    function updateThemeIcon() {
      const icon = document.querySelector('#themeToggle i');
      if (userData.darkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    }

    // Load user data from localStorage
    function loadUserData() {
      const savedData = localStorage.getItem('dopamineDetoxData');
      if (savedData) {
        userData = JSON.parse(savedData);
        
        // Check if returning after a break
        const today = new Date().toDateString();
        const lastDate = new Date(userData.lastActiveDate).toDateString();
        if (today !== lastDate) {
          const daysSince = Math.floor((new Date() - new Date(userData.lastActiveDate)) / (1000*60*60*24));
          if (daysSince === 1) {
            userData.currentStreak++;
          } else if (daysSince > 1) {
            userData.currentStreak = 1;
          }
        }
        
        // Apply saved theme
        if (userData.darkMode) {
          document.body.classList.add('dark-mode');
        }
      } else {
        // New user
        userData.startDate = new Date().toISOString();
        
        // Default to dark mode if user prefers it
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          userData.darkMode = true;
          document.body.classList.add('dark-mode');
        }
      }
      userData.lastActiveDate = new Date().toISOString();
      saveUserData();
      updateThemeIcon();
    }

    // Save user data to localStorage
    function saveUserData() {
      localStorage.setItem('dopamineDetoxData', JSON.stringify(userData));
    }

    // Get current day in challenge
    function getCurrentDay() {
      const startDate = new Date(userData.startDate);
      const today = new Date();
      const diffTime = today - startDate;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      return Math.min(diffDays + 1, 60); // Cap at 60 days
    }

    // Display current challenge
    function displayChallenge() {
      const currentDay = getCurrentDay();
      document.getElementById('day-counter').textContent = currentDay;
      document.getElementById('streak-counter').textContent = userData.currentStreak;
      document.getElementById('streak').textContent = `Day ${currentDay} • 🔥 ${userData.currentStreak}`;
      
      const challenge = challenges.find(c => c.day === currentDay) || challenges[0];
      document.getElementById('challenge-title').textContent = challenge.title;
      document.getElementById('challenge-desc').textContent = challenge.desc;
      
      // Check if already completed today
      const todayStr = new Date().toDateString();
      if (userData.completedChallenges.includes(todayStr)) {
        document.getElementById('current-challenge').classList.add('completed');
        document.getElementById('complete-btn').style.display = 'none';
        document.getElementById('challenge-complete').style.display = 'block';
      }
      
      // Update completed counter
      document.getElementById('completed-counter').textContent = userData.completedChallenges.length;
      
      // Render calendar
      renderCalendar();
    }

    // Render progress calendar
    function renderCalendar() {
      const calendarEl = document.getElementById('calendar');
      calendarEl.innerHTML = '';
      
      const currentDay = getCurrentDay();
      for (let i = 1; i <= 60; i++) {
        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day';
        dayEl.textContent = i;
        
        if (i < currentDay) {
          dayEl.classList.add('completed');
        } else if (i === currentDay) {
          dayEl.classList.add('current');
        } else {
          dayEl.classList.add('future');
        }
        
        calendarEl.appendChild(dayEl);
      }
    }

    // Complete challenge
    document.getElementById('complete-btn').addEventListener('click', function() {
      const todayStr = new Date().toDateString();
      if (!userData.completedChallenges.includes(todayStr)) {
        userData.completedChallenges.push(todayStr);
        saveUserData();
        
        document.getElementById('current-challenge').classList.add('completed');
        this.style.display = 'none';
        document.getElementById('challenge-complete').style.display = 'block';
        document.getElementById('completed-counter').textContent = userData.completedChallenges.length;
        
        // Show notification
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = '<span style="color: #E1306C;">❤️</span> Challenge completed!';
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
      }
    });

    // Scroll progress
    window.addEventListener('scroll', () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollTotal) * 100;
      document.getElementById('progress').style.width = `${progress}%`;
    });

    // Instagram-like random notifications
    const messages = [
      {text: "You're doing great! 🌟", icon: "❤️"},
      {text: "Stay strong! 💪", icon: "🔥"},
      {text: "Your brain is rewiring! 🧠", icon: "⚡"},
      {text: "3,000+ people completed today!", icon: "👥"}
    ];
    setInterval(() => {
      const message = messages[Math.floor(Math.random() * messages.length)];
      const notification = document.createElement('div');
      notification.className = 'notification';
      notification.innerHTML = `<span style="color: #E1306C;">${message.icon}</span> ${message.text}`;
      document.body.appendChild(notification);
      setTimeout(() => notification.remove(), 3000);
    }, 15000);

    // Initialize
    window.addEventListener('DOMContentLoaded', () => {
      loadUserData();
      displayChallenge();
      
      // Theme toggle event
      document.getElementById('themeToggle').addEventListener('click', toggleTheme);
      
      // GSAP animations
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".phone", {
        rotation: -5,
        scrollTrigger: {
          trigger: "#hero",
          scrub: true,
          start: "top top",
          end: "bottom top"
        }
      });
      
      // Instagram-like hover effects
      document.querySelectorAll('.healing-option').forEach(option => {
        option.addEventListener('mousemove', (e) => {
          const x = e.offsetX;
          const y = e.offsetY;
          option.style.transform = `perspective(1000px) rotateX(${(y - 100) / 20}deg) rotateY(${(x - 100) / 20}deg) scale(1.05)`;
        });
        option.addEventListener('mouseleave', () => {
          option.style.transform = 'none';
        });
      });
    });
