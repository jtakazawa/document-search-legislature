// Legislative Handbook Application

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const globalSearch = document.getElementById('global-search');
    const searchBtn = document.getElementById('search-btn');
    const searchPreview = document.getElementById('search-preview');
    const navList = document.getElementById('nav-list');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const contentPlaceholder = document.getElementById('content-placeholder');
    const billContent = document.getElementById('bill-content');
    const hearingContent = document.getElementById('hearing-content');
    const committeeContent = document.getElementById('committee-content');

    let currentFilter = 'all';
    let activeNavItem = null;

    // Initialize navigation item click handlers
    function initNavigation() {
        const navItems = navList.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                selectNavItem(this);
            });
        });
    }

    // Handle navigation item selection
    function selectNavItem(item) {
        // Update active state
        if (activeNavItem) {
            activeNavItem.classList.remove('active');
        }
        item.classList.add('active');
        activeNavItem = item;

        // Get item data
        const type = item.dataset.type;
        const id = item.dataset.id;

        // Load content based on type
        loadContent(type, id);
    }

    // Load content based on document type
    function loadContent(type, id) {
        // Hide all content
        contentPlaceholder.style.display = 'none';
        billContent.style.display = 'none';
        hearingContent.style.display = 'none';
        committeeContent.style.display = 'none';

        switch (type) {
            case 'bills':
                loadBillContent(id);
                break;
            case 'hearings':
                loadHearingContent(id);
                break;
            case 'committees':
                loadCommitteeContent(id);
                break;
        }
    }

    // Load bill content
    function loadBillContent(id) {
        const bill = legislativeData.bills[id];
        if (!bill) return;

        document.getElementById('bill-number').textContent = bill.number;
        document.getElementById('bill-title').textContent = bill.title;
        document.getElementById('bill-status').textContent = bill.status;
        document.getElementById('bill-status').className = 'status-badge ' + bill.statusClass;
        document.getElementById('bill-date').textContent = bill.date;
        document.getElementById('bill-text').innerHTML = bill.text;
        document.getElementById('bill-response').innerHTML = bill.response;
        document.getElementById('bill-notes').textContent = bill.notes;

        // Populate financial data table
        const financialBody = document.getElementById('bill-financial-data');
        financialBody.innerHTML = bill.financialData.map(row => `
            <tr>
                <td>${row.year}</td>
                <td class="number">${row.general}</td>
                <td class="number">${row.special}</td>
                <td class="number">${row.federal}</td>
                <td class="number"><strong>${row.total}</strong></td>
            </tr>
        `).join('');

        // Populate voting data table
        const votingBody = document.getElementById('bill-voting-data');
        votingBody.innerHTML = bill.votingData.map(row => `
            <tr>
                <td>${row.chamber}</td>
                <td>${row.date}</td>
                <td class="number positive">${row.yeas}</td>
                <td class="number negative">${row.nays}</td>
                <td class="number neutral">${row.abstain}</td>
                <td><span class="status-cell ${row.resultClass}">${row.result}</span></td>
            </tr>
        `).join('');

        billContent.style.display = 'block';
    }

    // Load hearing content
    function loadHearingContent(id) {
        const hearing = legislativeData.hearings[id];
        if (!hearing) return;

        document.getElementById('hearing-number').textContent = hearing.number;
        document.getElementById('hearing-title').textContent = hearing.title;
        document.getElementById('hearing-status').textContent = hearing.status;
        document.getElementById('hearing-status').className = 'status-badge ' + hearing.statusClass;
        document.getElementById('hearing-date').textContent = hearing.date;
        document.getElementById('hearing-summary').innerHTML = hearing.summary;
        document.getElementById('hearing-notes').textContent = hearing.notes;

        // Populate questions
        const questionsContainer = document.getElementById('hearing-questions');
        if (hearing.questions.length > 0) {
            questionsContainer.innerHTML = hearing.questions.map(q => `
                <div class="question-item">
                    <div class="question-text">"${q.text}"</div>
                    <div class="question-by">— ${q.by}</div>
                </div>
            `).join('');
        } else {
            questionsContainer.innerHTML = '<p class="rich-text">No questions recorded yet. This hearing is scheduled for a future date.</p>';
        }

        // Populate witnesses table
        const witnessesBody = document.getElementById('hearing-witnesses');
        witnessesBody.innerHTML = hearing.witnesses.map(w => `
            <tr>
                <td><strong>${w.name}</strong></td>
                <td>${w.org}</td>
                <td>${w.position}</td>
                <td>${w.type}</td>
            </tr>
        `).join('');

        hearingContent.style.display = 'block';
    }

    // Load committee content
    function loadCommitteeContent(id) {
        const committee = legislativeData.committees[id];
        if (!committee) return;

        document.getElementById('committee-code').textContent = committee.code;
        document.getElementById('committee-title').textContent = committee.title;
        document.getElementById('committee-status').textContent = committee.status;
        document.getElementById('committee-status').className = 'status-badge ' + committee.statusClass;
        document.getElementById('committee-overview').innerHTML = committee.overview;
        document.getElementById('committee-notes').textContent = committee.notes;

        // Populate jurisdiction
        const jurisdictionContainer = document.getElementById('committee-jurisdiction');
        jurisdictionContainer.innerHTML = committee.jurisdiction.map(j => 
            `<span class="jurisdiction-tag">${j}</span>`
        ).join('');

        // Populate members table
        const membersBody = document.getElementById('committee-members');
        membersBody.innerHTML = committee.members.map(m => `
            <tr>
                <td><strong>${m.name}</strong></td>
                <td>${m.party}</td>
                <td>${m.district}</td>
                <td>${m.role}</td>
                <td class="number">${m.years}</td>
            </tr>
        `).join('');

        // Populate legislation table
        const legislationBody = document.getElementById('committee-legislation');
        legislationBody.innerHTML = committee.legislation.map(l => `
            <tr>
                <td><strong>${l.number}</strong></td>
                <td>${l.title}</td>
                <td>${l.sponsor}</td>
                <td><span class="status-cell ${l.statusClass}">${l.status}</span></td>
                <td>${l.lastAction}</td>
            </tr>
        `).join('');

        committeeContent.style.display = 'block';
    }

    // Filter navigation items
    function filterNavItems(filter) {
        currentFilter = filter;
        const navItems = navList.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            if (filter === 'all' || item.dataset.type === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    // Initialize filter buttons
    function initFilters() {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Update active state
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Apply filter
                filterNavItems(this.dataset.filter);
            });
        });
    }

    // Search functionality
    function performSearch(query) {
        if (!query.trim()) {
            searchPreview.classList.remove('active');
            return;
        }

        const results = [];
        const queryLower = query.toLowerCase();

        // Search bills
        Object.entries(legislativeData.bills).forEach(([id, bill]) => {
            if (bill.title.toLowerCase().includes(queryLower) || 
                bill.number.toLowerCase().includes(queryLower) ||
                bill.text.toLowerCase().includes(queryLower)) {
                results.push({
                    type: 'bills',
                    id: id,
                    title: `${bill.number} - ${bill.title}`,
                    meta: bill.status,
                    badge: 'Bill'
                });
            }
        });

        // Search hearings
        Object.entries(legislativeData.hearings).forEach(([id, hearing]) => {
            if (hearing.title.toLowerCase().includes(queryLower) ||
                hearing.number.toLowerCase().includes(queryLower) ||
                hearing.summary.toLowerCase().includes(queryLower)) {
                results.push({
                    type: 'hearings',
                    id: id,
                    title: hearing.title,
                    meta: hearing.date,
                    badge: 'Hearing'
                });
            }
        });

        // Search committees
        Object.entries(legislativeData.committees).forEach(([id, committee]) => {
            if (committee.title.toLowerCase().includes(queryLower) ||
                committee.code.toLowerCase().includes(queryLower) ||
                committee.overview.toLowerCase().includes(queryLower)) {
                results.push({
                    type: 'committees',
                    id: id,
                    title: committee.title,
                    meta: `${committee.members.length} members`,
                    badge: 'Committee'
                });
            }
        });

        // Display results
        if (results.length > 0) {
            searchPreview.innerHTML = results.slice(0, 8).map(result => `
                <div class="search-preview-item" data-type="${result.type}" data-id="${result.id}">
                    <div class="search-preview-title">${highlightMatch(result.title, query)}</div>
                    <div class="search-preview-meta">${result.badge} • ${result.meta}</div>
                </div>
            `).join('');

            // Add click handlers to search results
            searchPreview.querySelectorAll('.search-preview-item').forEach(item => {
                item.addEventListener('click', function() {
                    const type = this.dataset.type;
                    const id = this.dataset.id;
                    
                    // Find and select the nav item
                    const navItem = navList.querySelector(`[data-id="${id}"]`);
                    if (navItem) {
                        // Update filter if needed
                        filterBtns.forEach(b => b.classList.remove('active'));
                        document.querySelector('[data-filter="all"]').classList.add('active');
                        filterNavItems('all');
                        
                        selectNavItem(navItem);
                        navItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                    
                    // Clear search
                    globalSearch.value = '';
                    searchPreview.classList.remove('active');
                });
            });

            searchPreview.classList.add('active');
        } else {
            searchPreview.innerHTML = `
                <div class="search-preview-item">
                    <div class="search-preview-title">No results found</div>
                    <div class="search-preview-meta">Try a different search term</div>
                </div>
            `;
            searchPreview.classList.add('active');
        }
    }

    // Highlight matching text
    function highlightMatch(text, query) {
        if (!query.trim()) return text;
        const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
        return text.replace(regex, '<span class="search-preview-highlight">$1</span>');
    }

    // Escape special regex characters
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Initialize search
    function initSearch() {
        globalSearch.addEventListener('input', function() {
            performSearch(this.value);
        });

        globalSearch.addEventListener('focus', function() {
            if (this.value.trim()) {
                performSearch(this.value);
            }
        });

        searchBtn.addEventListener('click', function() {
            performSearch(globalSearch.value);
        });

        // Close search preview when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-container') && !e.target.closest('.search-preview')) {
                searchPreview.classList.remove('active');
            }
        });

        // Keyboard navigation
        globalSearch.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                searchPreview.classList.remove('active');
                this.blur();
            }
        });
    }

    // Initialize the application
    function init() {
        initNavigation();
        initFilters();
        initSearch();
        
        // Select first item by default
        const firstItem = navList.querySelector('.nav-item');
        if (firstItem) {
            selectNavItem(firstItem);
        }
    }

    init();
});
