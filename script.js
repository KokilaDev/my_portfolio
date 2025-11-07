
// * ========== Header ========== *
const toggleBtn = document.querySelector('.toggle_btn');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('open');
});

// * ========== Hero Section ========== *
var typed = new Typed('.auto-type',{
    strings: ["Frontend Developer", "Backend Developer", "Software Engineer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

AOS.init();

// * ========== Skills Section ========== *
const skillsData = [
    { name: "Java", icon: "fab fa-java", level: 90, colors: ["#f89820", "#f7df1e"] },
    { name: "MySQL", icon: "fas fa-database", level: 85, colors: ["#4479a1", "#68a0cf"] },
    { name: "PostgreSQL", icon: "fas fa-database", level: 70, colors: ["#336791", "#5a91b1"] },
    { name: "HTML", icon: "fab fa-html5", level: 90, colors: ["#e34f26", "#f16529"] },
    { name: "CSS", icon: "fab fa-css3-alt", level: 88, colors: ["#264de4", "#6a9dfc"] },
    { name: "JavaScript", icon: "fab fa-js", level: 75, colors: ["#f7df1e", "#ffd633"] },
    { name: "GitHub", icon: "fab fa-github", level: 85, colors: ["#171515", "#333333"] },
    { name: "Figma", icon: "fab fa-figma", level: 70, colors: ["#F24E1E", "#FF7262"] }
];

const container = document.getElementById("skillsContainer");

skillsData.forEach(skill => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.innerHTML = `
        <div class="info">
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
            <div class="progress">
                <div class="progress-fill">${skill.level}%</div>
            </div>
        </div>
    `;
    container.appendChild(bar);
});

function animateBars() {
    const triggerPoint = window.innerHeight;
    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar, index) => {
        const position = bar.getBoundingClientRect().top;
        const fill = bar.querySelector(".progress-fill");
        if (position < triggerPoint) {
            bar.classList.add("visible");
            fill.style.width = skillsData[index].level + "%";
            fill.style.background = `linear-gradient(90deg, ${skillsData[index].colors.join(", ")})`;
        }
    });
}

window.addEventListener("load", animateBars);
window.addEventListener("scroll", animateBars);

// * ========== Assignments Section ========== *
const assignments = [
    {
        id:1,
        title:"Advanced Java OOP Concepts",
        category:"OOP",
        description:
            "Explores advanced Java OOP topics such as runtime polymorphism, method overriding, " +
            "final and static variables, and generic classes."
    },
    {
        id:2,
        title:"Basic Java Programming Exercises",
        category:"PRF",
        description:
            "Java programs to find the smallest number, calculate the average, " +
            "and compute the sum of digits of an integer."
    },
    {
        id:3,
        title:"Coursework - Library Management System",
        category:"PRF",
        description:
            "A console-based application to manage books, members, book issuing/returning, " +
            "and generate reports using arrays and user input."
    },
    {
        id:4,
        title:"CSS Positions",
        category:"Web",
        description:
            "Practice creating complex web layouts using CSS positioning, grids, flexbox, and circular designs."
    },
    {
        id:5,
        title:"CSS Selectors",
        category:"Web",
        description:
            "Apply different CSS selectors to style HTML elements and understand their usage."
    },
    {
        id:6,
        title:"CSS Transition & Animation",
        category:"Web",
        description:
            "Create interactive animations and effects like navigation, loaders, sliders, " +
            "and rotating elements using only HTML and CSS."
    },
    {
        id:7,
        title:"Introduction to Java Programming Fundamentals",
        category:"PRF",
        description:
            "Explored core Java concepts and syntax to build foundational programming and problem-solving skills."
    },
    {
        id:8,
        title:"Java Arrays and Methods",
        category:"PRF",
        description:
            "Comprehensive Java assignment covering array operations, loops, methods, " +
            "and list management with practical coding exercises."
    },
    {
        id:9,
        title:"Java Conditional and Increment Operators",
        category:"PRF",
        description:
            "Explores how pre-increment and post-increment operators affect variable values " +
            "and conditional comparisons in Java."
    },
    {
        id:10,
        title:"Java Inheritance and Class Hierarchy",
        category:"OOP",
        description:
            "Practices Java OOP concepts like inheritance, class hierarchies, " +
            "and method overriding through coding and analysis."
    },
    {
        id:11,
        title:"Java Methods and Program Logic",
        category:"PRF",
        description:
            "Practice writing, analyzing, and debugging Java methods for various tasks like calculations, " +
            "number operations, and logical programming."
    },
    {
        id:12,
        title:"Java Operators and Expressions",
        category:"PRF",
        description:
            "Practiced unary, binary, bitwise, and ternary operators through interactive " +
            "Java programs to strengthen understanding of operator behavior and expressions."
    },
    {
        id:13,
        title:"Java Swing GUI Exercises",
        category:"OOP",
        description:
            "Creating and customizing various Java Swing windows, layouts, and components " +
            "like buttons, labels, text fields, and tables."
    },
    {
        id:14,
        title:"Java 2D Arrays and Data Manipulation",
        category:"PRF",
        description:
            "Exercises on declaring, initializing, and manipulating two-dimensional arrays, " +
            "including calculations, data input, and tabular display."
    },
    {
        id:15,
        title:"Looping, Conditional, and Number Handling Exercises",
        category:"PRF",
        description:
            "Practices Java programming concepts including loops, conditionals, arrays, and number operations"
    },
    {
        id:16,
        title:"Portfolio Website Design",
        category:"Web",
        description:
            "Develop and review the sitemap, wireframe, and mockup for a portfolio website."
    },
    {
        id:17,
        title:"Spot Test",
        category:"Web",
        description:
            "A multiple-choice assessment testing knowledge of HTML, CSS, web concepts, " +
            "Git, and related web development tools."
    },
    {
        id:18,
        title:"Unary and Data Type Operations in Java",
        category:"PRF",
        description:
            "Explored unary operators, data type behaviors, and value representations to " +
            "understand Java’s core execution and memory handling."
    }
];

const assignmentsGrid = document.getElementById('assignmentsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');

let currentFilter = 'all';

function renderAssignments() {
    assignmentsGrid.innerHTML = '';
    const filtered = assignments.filter(a => currentFilter === 'all' || a.category === currentFilter);
    resultsCount.textContent = filtered.length;

    if (filtered.length === 0) { noResults.classList.add('show'); return; }
    else { noResults.classList.remove('show'); }

    filtered.forEach((a) => {
        const card = document.createElement('div');
        card.className = 'assignment-card';
        card.innerHTML = `
            <h3 class="assignment-title">${a.title}</h3>
            <p class="assignment-description">${a.description}</p>
            <button class="view-btn" onclick="viewAssignment(${a.id})">View</button>
        `;
        assignmentsGrid.appendChild(card);
    });
}

function viewAssignment(id) {
    const selected = assignments.find(a => a.id === id);
    alert(`📘 ${selected.title}\n${selected.description}`);
}

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderAssignments();
    });
});

// Horizontal scroll to page
function scrollToPage(pageIndex) {
    const card = assignmentsGrid.querySelector('.assignment-card');
    if (!card) return;
    const cardWidth = card.offsetWidth + 20; // 20px gap
    const scrollX = pageIndex * cardWidth * 3; // 3 cards per page
    assignmentsGrid.scrollTo({ left: scrollX, behavior:'smooth' });
}

renderAssignments();

// * ========== Contact Section ========== *
(() => {
    const qs  = (sel, root = document) => root.querySelector(sel);
    const qsa = (sel, root = document) => [...root.querySelectorAll(sel)];

    const form = qs('#contact-form');
    const toast = qs('#toast');
    const inputs = qsa('.f-input');

    // Toggle has-value class on input blur
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if(input.value.trim()) input.classList.add('has-value');
            else input.classList.remove('has-value');
        });
    });

    function showError(input,msg){
        if(!input) return;
        const p = qs(`[data-error-for="${input.id}"]`);
        if(p){ p.style.display='block'; p.textContent=msg; }
        input.classList.add('ring-2','ring-red-500/50');
    }

    function clearError(input){
        if(!input) return;
        const p = qs(`[data-error-for="${input.id}"]`);
        if(p) p.style.display='none';
        input.classList.remove('ring-2','ring-red-500/50');
    }

    function validate(){
        let ok = true;
        const fname = qs('#f-name');
        if(!fname || fname.value.trim().length<2){ ok=false; showError(fname,'Enter first name'); } else clearError(fname);

        const lname = qs('#l-name');
        if(!lname || lname.value.trim().length<2){ ok=false; showError(lname,'Enter last name'); } else clearError(lname);

        const mobile = qs('#mobile');
        const mobileOk = mobile? /^\d{10,}$/.test(mobile.value): false;
        if(!mobileOk){ ok=false; showError(mobile,'Enter valid mobile'); } else clearError(mobile);

        const email = qs('#email');
        const emailOk = email? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value): false;
        if(!emailOk){ ok=false; showError(email,'Enter valid email'); } else clearError(email);

        const message = qs('#message');
        if(!message || message.value.trim().length<10){ ok=false; showError(message,'Write at least 10 chars'); } else clearError(message);

        return ok;
    }

    if(form){
        form.addEventListener('submit', async e=>{
            e.preventDefault();
            if(!validate()) return;
            await new Promise(r=>setTimeout(r,700));
            if(toast){
                toast.classList.add('show');
                setTimeout(()=>{ toast.classList.remove('show'); },2200);
            }
            form.reset();
            inputs.forEach(i=>i.classList.remove('has-value'));
            inputs.forEach(i=>i.dispatchEvent(new Event('blur')));
        });
    }
})();