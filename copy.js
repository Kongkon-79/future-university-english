
        // Dropdown functionality
        function setupDropdown(buttonId, dropdownId) {
            const button = document.getElementById(buttonId);
            const dropdown = document.getElementById(dropdownId);
            
            if (!button || !dropdown) return;
            
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                // Close all other dropdowns
                document.querySelectorAll('[id$="Dropdown"]').forEach(d => {
                    if (d !== dropdown) d.classList.add('hidden');
                });
                dropdown.classList.toggle('hidden');
            });
        }

        // Setup all dropdowns
        setupDropdown('languageBtn', 'languageDropdown');
        setupDropdown('studentGuideBtn', 'studentGuideDropdown');
        setupDropdown('studyPlansBtn', 'studyPlansDropdown');
        setupDropdown('academicCalendarBtn', 'academicCalendarDropdown');
        
        // Mobile dropdowns
        setupDropdown('mobileLanguageBtn', 'mobileLanguageDropdown');
        setupDropdown('mobileStudentGuideBtn', 'mobileStudentGuideDropdown');
        setupDropdown('mobileStudyPlansBtn', 'mobileStudyPlansDropdown');
        setupDropdown('mobileAcademicCalendarBtn', 'mobileAcademicCalendarDropdown');

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const menuIcon = document.getElementById('menuIcon');
        const closeIcon = document.getElementById('closeIcon');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            document.querySelectorAll('[id$="Dropdown"]').forEach(dropdown => {
                dropdown.classList.add('hidden');
            });
        });

        // Close mobile menu when window is resized to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });

        // Prevent dropdown close when clicking inside dropdown
        document.querySelectorAll('[id$="Dropdown"]').forEach(dropdown => {
            dropdown.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });


        document.addEventListener('DOMContentLoaded', function() {
    // Handle sidebar navigation
    const navHeaders = document.querySelectorAll('.nav-header');
    const navSubitems = document.querySelectorAll('.nav-subitem');
    
    // Toggle sidebar sections
    navHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const navItem = this.parentElement;
            const arrow = this.querySelector('.arrow');
            const submenu = navItem.querySelector('.nav-submenu');
            
            if (submenu) {
                const isActive = navItem.classList.contains('active');
                
                // Close all other sections
                document.querySelectorAll('.nav-item').forEach(item => {
                    if (item !== navItem) {
                        item.classList.remove('active');
                        const otherArrow = item.querySelector('.arrow');
                        if (otherArrow) {
                            otherArrow.textContent = '▶';
                        }
                    }
                });
                
                // Toggle current section
                if (isActive) {
                    navItem.classList.remove('active');
                    arrow.textContent = '▶';
                } else {
                    navItem.classList.add('active');
                    arrow.textContent = '▼';
                }
            }
        });
    });
    
    // Handle submenu item selection
    navSubitems.forEach(subitem => {
        subitem.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Remove active class from all subitems
            navSubitems.forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Here you could add functionality to show/hide different semester content
            // For now, all content is visible as shown in the image
            console.log('Selected:', this.textContent);
        });
    });
    
    // Add smooth scrolling for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add table row hover effects
    const tableRows = document.querySelectorAll('.curriculum-table tbody tr:not(.total-row)');
    tableRows.forEach(row => {
        // row.addEventListener('mouseenter', function() {
        //     this.style.backgroundColor = '#f0f8ff';
        // });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
    
    // Initialize the page
    console.log('Dental Curriculum System loaded successfully');
});


// =========================study plan========================
// Faculty toggle
function toggleFaculty(facultyId, event) {
    const header = event.currentTarget;
    const content = document.getElementById(facultyId + '-content');
    const icon = header.querySelector('.toggle-icon');

    const isActive = content.classList.contains('active');

    // reset all
    document.querySelectorAll('.faculty-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.faculty-header').forEach(h => {
        h.classList.remove('active');
        const i = h.querySelector('.toggle-icon');
        if (i) i.textContent = '▶';
    });

    // toggle current
    if (!isActive) {
        content.classList.add('active');
        header.classList.add('active');
        if (icon) icon.textContent = '▲';
    }
}

// Program toggle
function toggleProgram(programId, event) {
    event.stopPropagation(); // prevent faculty toggle

    const header = event.currentTarget;
    const content = document.getElementById(programId + '-content');
    const icon = header.querySelector('.toggle-icon');

    const isActive = content.classList.contains('active');

    const parentFaculty = header.closest('.faculty-content');
    parentFaculty.querySelectorAll('.program-content').forEach(c => c.classList.remove('active'));
    parentFaculty.querySelectorAll('.program-item').forEach(h => {
        h.classList.remove('active');
        const i = h.querySelector('.toggle-icon');
        if (i) i.textContent = '▶';
    });

    if (!isActive) {
        content.classList.add('active');
        header.classList.add('active');
        if (icon) icon.textContent = '▲';
    }
}


// Level toggle
function showLevel(levelId, event) {
  // Remove active class from all
  document.querySelectorAll('.level-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.level-item').forEach(i => i.classList.remove('active'));

  // Activate clicked sidebar item
  if (event) {
    event.currentTarget.classList.add('active');
  }

  // Show the selected level content
  const selectedLevel = document.getElementById(levelId);
  if (selectedLevel) {
    selectedLevel.classList.add('active');
  }
}

// ==========================sytdy guide=========================
   /// Mobile menu functionality
// const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenuButton = document.getElementById("mobileMenuBtn");
mobileMenuButton.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
  overlay.classList.toggle("hidden");
});
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

mobileMenuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
  overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

// Menu toggle functionality
const menuToggles = document.querySelectorAll(".menu-toggle");

menuToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const submenu = toggle.nextElementSibling;
    const arrow = toggle.querySelector("svg");
    const isOpen =
      submenu.style.maxHeight && submenu.style.maxHeight !== "0px";
    const mainContentId = toggle.getAttribute("data-main-content");

    // Close all other submenus
    document.querySelectorAll(".submenu").forEach((menu) => {
      if (menu !== submenu) {
        menu.style.maxHeight = "0px";
        menu.previousElementSibling.querySelector("svg").style.transform =
          "rotate(0deg)";
      }
    });

    if (isOpen) {
      submenu.style.maxHeight = "0px";
      arrow.style.transform = "rotate(0deg)";
    } else {
      submenu.style.maxHeight = submenu.scrollHeight + "px";
      arrow.style.transform = "rotate(180deg)";
    }

    // Show the full section for main menu click
    const contentSections = document.querySelectorAll(".content-section");
    contentSections.forEach((section) => {
      section.classList.remove("opacity-100");
      section.classList.add("opacity-0");
      setTimeout(() => {
        section.classList.add("hidden");
      }, 300);
    });

    setTimeout(() => {
      const targetSection = document.getElementById(mainContentId);
      if (targetSection) {
        targetSection.classList.remove("hidden");
        setTimeout(() => {
          targetSection.classList.remove("opacity-0");
          targetSection.classList.add("opacity-100");
        }, 50);
      }
    }, 300);

    // Update menu group border
    document.querySelectorAll(".menu-group").forEach((group) => {
      group.classList.remove("border-primary");
      group.classList.add("border-none");
    });
    toggle.parentElement.classList.add("border-primary");
    toggle.parentElement.classList.remove("border-none");

    // Update breadcrumb
    const contentTitle = toggle.querySelector("span").textContent.trim();
    document.getElementById("breadcrumb-current").textContent = contentTitle;

    // NOTE: Mobile menu will NOT auto-hide on main menu click
  });
});

// Submenu item functionality
const submenuItems = document.querySelectorAll(".submenu-item");

submenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const contentId = item.getAttribute("data-content");
    const contentTitle = item.textContent.trim();

    // Hide all content sections
    const contentSections = document.querySelectorAll(".content-section");
    contentSections.forEach((section) => {
      section.classList.remove("opacity-100");
      section.classList.add("opacity-0");
      setTimeout(() => {
        section.classList.add("hidden");
      }, 300);
    });

    // Clone the specific div and show it in the single wrapper
    const targetContent = document.getElementById(contentId).cloneNode(true);
    const singleWrapper = document.getElementById("single-content-wrapper");
    singleWrapper.innerHTML = ""; // Clear previous
    singleWrapper.appendChild(targetContent);

    setTimeout(() => {
      singleWrapper.classList.remove("hidden");
      setTimeout(() => {
        singleWrapper.classList.remove("opacity-0");
        singleWrapper.classList.add("opacity-100");
      }, 50);
    }, 300);

    // Update menu group border
    document.querySelectorAll(".menu-group").forEach((group) => {
      group.classList.remove("border-primary");
      group.classList.add("border-none");
    });
    item.closest(".menu-group").classList.add("border-primary");
    item.closest(".menu-group").classList.remove("border-none");

    // Update breadcrumb
    document.getElementById("breadcrumb-current").textContent = contentTitle;

    // Update active state
    submenuItems.forEach((menuItem) => {
      menuItem.classList.remove("bg-primary", "text-white");
      menuItem.classList.add(
        "text-gray-600",
        "hover:text-primary",
        "hover:bg-gray-50"
      );
    });

    item.classList.add("bg-primary", "text-white");
    item.classList.remove(
      "text-gray-600",
      "hover:text-primary",
      "hover:bg-gray-50"
    );

    // NOTE: Mobile menu will NOT auto-hide on submenu click
  });
});

// Initialize first submenu as open and active
document.addEventListener("DOMContentLoaded", () => {
  const firstToggle = document.querySelector(".menu-toggle");
  const firstSubmenu = firstToggle.nextElementSibling;
  const firstArrow = firstToggle.querySelector("svg");

  firstSubmenu.style.maxHeight = firstSubmenu.scrollHeight + "px";
  firstArrow.style.transform = "rotate(180deg)";
  firstToggle.parentElement.classList.add("border-primary");
  firstToggle.parentElement.classList.remove("border-none");
});


    //   ============================academic calendar===========================
    