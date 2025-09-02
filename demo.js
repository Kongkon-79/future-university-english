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
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f8ff';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
    
    // Initialize the page
    console.log('Dental Curriculum System loaded successfully');
});


// =========================study plan========================

function toggleFaculty(facultyId, event) {
    const header = event.currentTarget;
    const content = document.getElementById(facultyId + '-content');
    const icon = header.querySelector('.toggle-icon');

    // reset others
    document.querySelectorAll('.faculty-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.faculty-header').forEach(h => {
        h.classList.remove('active');
        const i = h.querySelector('.toggle-icon');
        if (i) i.textContent = '▶';
    });

    // activate selected
    content.classList.add('active');
    header.classList.add('active');
    if (icon) icon.textContent = '▲';
}

// Program toggle
function toggleProgram(programId, event) {
    event.stopPropagation(); // prevent faculty closing

    const header = event.currentTarget;
    const content = document.getElementById(programId + '-content');
    const icon = header.querySelector('.toggle-icon');

    // reset others inside same faculty
    const parentFaculty = header.closest('.faculty-content');
    parentFaculty.querySelectorAll('.program-content').forEach(c => c.classList.remove('active'));
    parentFaculty.querySelectorAll('.program-item').forEach(h => {
        h.classList.remove('active');
        const i = h.querySelector('.toggle-icon');
        if (i) i.textContent = '▶';
    });

    // activate selected
    content.classList.add('active');
    header.classList.add('active');
    if (icon) icon.textContent = '▲';
}

// Level toggle
function showLevel(levelId) {
    document.querySelectorAll('.level-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.level-item').forEach(i => i.classList.remove('active'));

    const selectedLevel = document.getElementById(levelId);
    if (selectedLevel) {
        selectedLevel.classList.add('active');
    }
}