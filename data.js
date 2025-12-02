// Sample Legislative Data
const legislativeData = {
    bills: {
        'hb-1234': {
            number: 'HB 1234',
            title: 'Education Funding Act of 2024',
            status: 'In Committee',
            statusClass: 'pending',
            date: 'Introduced: January 15, 2024',
            text: `<p><strong>AN ACT</strong> relating to education funding; establishing the Education Excellence Fund; providing for increased per-pupil spending; amending various provisions of the Education Code.</p>
                   <p><strong>SECTION 1. SHORT TITLE.</strong> This Act may be cited as the "Education Funding Act of 2024."</p>
                   <p><strong>SECTION 2. LEGISLATIVE FINDINGS.</strong> The Legislature finds that:</p>
                   <ul>
                       <li>Quality education is fundamental to the economic prosperity and civic health of our state;</li>
                       <li>Current funding levels are insufficient to meet the needs of all students;</li>
                       <li>Targeted investments in education infrastructure and teacher compensation are necessary to improve educational outcomes.</li>
                   </ul>
                   <p><strong>SECTION 3. ESTABLISHMENT OF FUND.</strong> There is hereby established in the State Treasury the Education Excellence Fund, which shall consist of appropriations made by the Legislature and any gifts, grants, or donations received for educational purposes.</p>`,
            response: `<div class="response-author">Office of the Governor - Official Position Statement</div>
                       <p>The Governor's Office strongly supports HB 1234 and its goals of increasing educational funding across the state. The Administration believes that investing in our children's future is paramount to the long-term success of our economy and communities.</p>
                       <p>The Governor has indicated willingness to sign this bill if it reaches the executive desk with the current funding allocation structure intact.</p>`,
            notes: 'Key stakeholders include the State Teachers Association (supportive), School Administrators Council (supportive with amendments), and Taxpayers Alliance (opposed). Consider fiscal impact on rural districts. Amendment from Rep. Johnson expected during floor debate.',
            financialData: [
                { year: 'FY 2024-25', general: '$45,000,000', special: '$12,000,000', federal: '$0', total: '$57,000,000' },
                { year: 'FY 2025-26', general: '$92,000,000', special: '$24,000,000', federal: '$5,000,000', total: '$121,000,000' },
                { year: 'FY 2026-27', general: '$95,000,000', special: '$25,000,000', federal: '$5,000,000', total: '$125,000,000' },
                { year: 'FY 2027-28', general: '$98,000,000', special: '$26,000,000', federal: '$5,000,000', total: '$129,000,000' }
            ],
            votingData: [
                { chamber: 'House Education Committee', date: 'Feb 12, 2024', yeas: 8, nays: 3, abstain: 1, result: 'Passed', resultClass: 'passed' },
                { chamber: 'House Appropriations', date: 'Feb 28, 2024', yeas: 12, nays: 5, abstain: 0, result: 'Passed', resultClass: 'passed' },
                { chamber: 'Full House', date: 'Pending', yeas: '-', nays: '-', abstain: '-', result: 'Pending', resultClass: 'pending' }
            ]
        },
        'sb-567': {
            number: 'SB 567',
            title: 'Healthcare Access Reform Act',
            status: 'Passed Senate',
            statusClass: 'passed',
            date: 'Introduced: February 3, 2024',
            text: `<p><strong>AN ACT</strong> relating to healthcare access; expanding Medicaid eligibility; establishing community health centers; providing for telehealth services expansion.</p>
                   <p><strong>SECTION 1. PURPOSE.</strong> The purpose of this Act is to ensure that all residents of this state have access to affordable, quality healthcare services regardless of their geographic location or economic circumstances.</p>
                   <p><strong>SECTION 2. MEDICAID EXPANSION.</strong> The state shall expand Medicaid eligibility to include all adults with incomes up to 138 percent of the federal poverty level, as authorized under the Affordable Care Act.</p>
                   <p><strong>SECTION 3. COMMUNITY HEALTH CENTERS.</strong> The Department of Health shall establish a grant program to support the creation and operation of community health centers in underserved areas.</p>`,
            response: `<div class="response-author">Department of Health - Fiscal Analysis</div>
                       <p>The Department of Health has completed its analysis of SB 567 and projects that implementation will require significant administrative restructuring and additional staffing.</p>
                       <p>We estimate that the Medicaid expansion component will provide coverage to approximately 150,000 additional residents in the first year.</p>`,
            notes: 'Strong bipartisan support in Senate. House Health Committee hearing scheduled for March 25. Insurance industry lobbying against certain provisions. Consider amendment to address rural provider shortage.',
            financialData: [
                { year: 'FY 2024-25', general: '$120,000,000', special: '$30,000,000', federal: '$180,000,000', total: '$330,000,000' },
                { year: 'FY 2025-26', general: '$135,000,000', special: '$35,000,000', federal: '$200,000,000', total: '$370,000,000' },
                { year: 'FY 2026-27', general: '$142,000,000', special: '$38,000,000', federal: '$210,000,000', total: '$390,000,000' },
                { year: 'FY 2027-28', general: '$150,000,000', special: '$40,000,000', federal: '$225,000,000', total: '$415,000,000' }
            ],
            votingData: [
                { chamber: 'Senate Health Committee', date: 'Feb 20, 2024', yeas: 7, nays: 2, abstain: 0, result: 'Passed', resultClass: 'passed' },
                { chamber: 'Senate Finance', date: 'Mar 5, 2024', yeas: 9, nays: 4, abstain: 1, result: 'Passed', resultClass: 'passed' },
                { chamber: 'Full Senate', date: 'Mar 12, 2024', yeas: 28, nays: 11, abstain: 1, result: 'Passed', resultClass: 'passed' }
            ]
        },
        'hb-890': {
            number: 'HB 890',
            title: 'Infrastructure Investment and Jobs Act',
            status: 'In Committee',
            statusClass: 'pending',
            date: 'Introduced: February 20, 2024',
            text: `<p><strong>AN ACT</strong> relating to infrastructure; authorizing bonds for transportation projects; establishing the Infrastructure Modernization Fund; providing for bridge and highway repairs.</p>
                   <p><strong>SECTION 1. FINDINGS.</strong> The Legislature finds that the state's infrastructure is in critical need of modernization and repair, with many bridges and highways rated as structurally deficient.</p>
                   <p><strong>SECTION 2. BOND AUTHORIZATION.</strong> The State is hereby authorized to issue general obligation bonds not exceeding $2 billion for infrastructure projects as specified in this Act.</p>`,
            response: `<div class="response-author">Department of Transportation - Technical Review</div>
                       <p>DOT has identified 847 priority projects that could benefit from the proposed funding, including 156 structurally deficient bridges and 423 miles of highway requiring major rehabilitation.</p>`,
            notes: 'Bond authorization may require voter approval. Construction industry strongly supportive. Environmental groups requesting amendments for green infrastructure components.',
            financialData: [
                { year: 'FY 2024-25', general: '$0', special: '$200,000,000', federal: '$400,000,000', total: '$600,000,000' },
                { year: 'FY 2025-26', general: '$0', special: '$350,000,000', federal: '$700,000,000', total: '$1,050,000,000' },
                { year: 'FY 2026-27', general: '$0', special: '$400,000,000', federal: '$800,000,000', total: '$1,200,000,000' },
                { year: 'FY 2027-28', general: '$0', special: '$450,000,000', federal: '$900,000,000', total: '$1,350,000,000' }
            ],
            votingData: [
                { chamber: 'House Transportation', date: 'Mar 8, 2024', yeas: 10, nays: 2, abstain: 0, result: 'Passed', resultClass: 'passed' },
                { chamber: 'House Appropriations', date: 'Pending', yeas: '-', nays: '-', abstain: '-', result: 'Pending', resultClass: 'pending' }
            ]
        },
        'sb-123': {
            number: 'SB 123',
            title: 'Environmental Protection and Clean Energy Act',
            status: 'Second Reading',
            statusClass: 'pending',
            date: 'Introduced: March 5, 2024',
            text: `<p><strong>AN ACT</strong> relating to environmental protection; establishing renewable energy standards; creating incentives for clean energy development; protecting natural resources.</p>
                   <p><strong>SECTION 1. CLEAN ENERGY STANDARD.</strong> By 2035, at least 80 percent of electricity sold in this state shall be generated from renewable energy sources.</p>
                   <p><strong>SECTION 2. INCENTIVE PROGRAMS.</strong> The Department of Energy shall establish grant and loan programs to assist businesses and homeowners in transitioning to clean energy systems.</p>`,
            response: `<div class="response-author">Environmental Quality Board - Impact Assessment</div>
                       <p>The Board projects that full implementation of SB 123 would reduce statewide carbon emissions by 45% by 2035 and create approximately 25,000 new jobs in the clean energy sector.</p>`,
            notes: 'Utility companies have expressed concerns about timeline. Consider phased implementation. Labor unions supportive due to job creation provisions.',
            financialData: [
                { year: 'FY 2024-25', general: '$25,000,000', special: '$50,000,000', federal: '$100,000,000', total: '$175,000,000' },
                { year: 'FY 2025-26', general: '$40,000,000', special: '$80,000,000', federal: '$150,000,000', total: '$270,000,000' },
                { year: 'FY 2026-27', general: '$55,000,000', special: '$100,000,000', federal: '$200,000,000', total: '$355,000,000' },
                { year: 'FY 2027-28', general: '$70,000,000', special: '$120,000,000', federal: '$250,000,000', total: '$440,000,000' }
            ],
            votingData: [
                { chamber: 'Senate Environment Committee', date: 'Mar 18, 2024', yeas: 5, nays: 4, abstain: 0, result: 'Passed', resultClass: 'passed' }
            ]
        }
    },
    hearings: {
        'hearing-1': {
            number: 'Hearing #2024-15',
            title: 'Budget Committee Hearing - Q1 Fiscal Review',
            status: 'Completed',
            statusClass: 'passed',
            date: 'March 15, 2024 | 9:00 AM - 4:30 PM',
            summary: `<p>The Budget Committee convened for its quarterly fiscal review to assess state revenue collection and expenditure patterns for the first quarter of fiscal year 2024.</p>
                      <p>Key findings included a 3.2% increase in tax revenue collections compared to projections, primarily driven by stronger-than-expected retail sales and employment growth. However, Medicaid expenditures exceeded projections by 4.8% due to higher enrollment numbers.</p>
                      <p>The Committee received testimony from the State Treasurer, Director of Budget and Management, and representatives from major state agencies regarding their spending patterns and projected needs for the remainder of the fiscal year.</p>`,
            questions: [
                { text: 'What contingency plans are in place if federal funding decreases in the next quarter?', by: 'Sen. Williams (Chair)' },
                { text: 'Can you explain the variance in transportation spending versus the approved budget?', by: 'Rep. Martinez' },
                { text: 'What is the current balance of the Rainy Day Fund and when was it last accessed?', by: 'Sen. Thompson' },
                { text: 'How are inflationary pressures affecting agency operating costs?', by: 'Rep. Chen' },
                { text: 'What is the projected year-end surplus or deficit based on current trends?', by: 'Sen. Williams (Chair)' }
            ],
            witnesses: [
                { name: 'Dr. Sarah Mitchell', org: 'State Treasury', position: 'State Treasurer', type: 'Informational' },
                { name: 'James Patterson', org: 'Office of Budget & Management', position: 'Director', type: 'Informational' },
                { name: 'Linda Gonzalez', org: 'Department of Health', position: 'CFO', type: 'Informational' },
                { name: 'Robert Kim', org: 'Department of Transportation', position: 'Deputy Director', type: 'Informational' },
                { name: 'Maria Santos', org: 'Legislative Fiscal Office', position: 'Chief Analyst', type: 'Expert' }
            ],
            notes: 'Follow-up required on transportation variance explanation. Committee requested written response by April 1. Consider scheduling special hearing if Medicaid costs continue to exceed projections.'
        },
        'hearing-2': {
            number: 'Hearing #2024-18',
            title: 'Education Oversight - School Performance Review',
            status: 'Completed',
            statusClass: 'passed',
            date: 'March 22, 2024 | 10:00 AM - 3:00 PM',
            summary: `<p>The Education Oversight Committee met to review annual school performance data and discuss strategies for improving outcomes in underperforming districts.</p>
                      <p>Presentations covered standardized test results, graduation rates, and teacher retention metrics across all school districts. The data revealed significant disparities between urban and rural districts, with rural areas showing a 15% lower graduation rate on average.</p>
                      <p>Several superintendents provided testimony about challenges facing their districts, including teacher shortages, aging facilities, and inadequate technology infrastructure.</p>`,
            questions: [
                { text: 'What specific interventions have proven most effective in improving reading scores?', by: 'Rep. Johnson (Chair)' },
                { text: 'How are districts addressing the teacher shortage crisis?', by: 'Sen. Adams' },
                { text: 'What is the correlation between per-pupil spending and academic outcomes?', by: 'Rep. Lee' },
                { text: 'Are there successful models from other states we should consider adopting?', by: 'Sen. Brown' }
            ],
            witnesses: [
                { name: 'Dr. Michael Torres', org: 'Department of Education', position: 'Superintendent', type: 'Informational' },
                { name: 'Karen White', org: 'State Teachers Association', position: 'President', type: 'Advocate' },
                { name: 'David Park', org: 'Rural Schools Coalition', position: 'Executive Director', type: 'Advocate' },
                { name: 'Dr. Emily Rogers', org: 'State University', position: 'Education Researcher', type: 'Expert' }
            ],
            notes: 'Strong support for HB 1234 Education Funding Act expressed by all witnesses. Committee may issue formal recommendation. Request demographic breakdown of performance data by next meeting.'
        },
        'hearing-3': {
            number: 'Hearing #2024-21',
            title: 'Transportation Subcommittee - Infrastructure Priorities',
            status: 'Scheduled',
            statusClass: 'pending',
            date: 'April 5, 2024 | 1:00 PM - 5:00 PM',
            summary: `<p>The Transportation Subcommittee will convene to establish infrastructure investment priorities for the upcoming fiscal year and review proposed projects under HB 890.</p>
                      <p>Agenda items include:</p>
                      <ul>
                          <li>Review of structurally deficient bridge inventory</li>
                          <li>Highway expansion and repair priority ranking</li>
                          <li>Public transit improvement proposals</li>
                          <li>Electric vehicle infrastructure planning</li>
                      </ul>
                      <p>Public comment period will be held from 4:00 PM to 5:00 PM.</p>`,
            questions: [],
            witnesses: [
                { name: 'Thomas Anderson', org: 'Department of Transportation', position: 'Secretary', type: 'Informational' },
                { name: 'Jennifer Cruz', org: 'Highway Safety Commission', position: 'Director', type: 'Informational' },
                { name: 'Mark Sullivan', org: 'Public Transit Authority', position: 'CEO', type: 'Informational' },
                { name: 'Various', org: 'General Public', position: 'Citizens', type: 'Public Comment' }
            ],
            notes: 'Prepare briefing materials on HB 890 project list. Confirm witness attendance by April 1. Arrange for live streaming of public comment period.'
        }
    },
    committees: {
        'committee-1': {
            code: 'APPROP',
            title: 'Committee on Appropriations',
            status: 'Active',
            statusClass: 'passed',
            overview: `<p>The Committee on Appropriations has jurisdiction over all legislation involving the appropriation of state funds. The committee is responsible for reviewing the executive budget proposal, crafting the annual appropriations bills, and conducting oversight of state agency spending.</p>
                       <p>The committee operates through several subcommittees that focus on specific areas of the budget, including education, health and human services, transportation, and general government operations.</p>`,
            jurisdiction: ['State Budget', 'Appropriations', 'Fiscal Policy', 'Government Operations', 'State Debt', 'Emergency Funding'],
            members: [
                { name: 'Sen. Patricia Williams', party: 'D', district: 'District 12', role: 'Chair', years: 8 },
                { name: 'Rep. Michael Chen', party: 'R', district: 'District 45', role: 'Vice Chair', years: 6 },
                { name: 'Sen. Robert Thompson', party: 'R', district: 'District 8', role: 'Ranking Member', years: 12 },
                { name: 'Rep. Angela Martinez', party: 'D', district: 'District 23', role: 'Member', years: 4 },
                { name: 'Sen. David Kim', party: 'D', district: 'District 31', role: 'Member', years: 2 },
                { name: 'Rep. Sarah Johnson', party: 'R', district: 'District 17', role: 'Member', years: 6 },
                { name: 'Sen. James Brown', party: 'R', district: 'District 5', role: 'Member', years: 10 }
            ],
            legislation: [
                { number: 'HB 1234', title: 'Education Funding Act', sponsor: 'Rep. Garcia', status: 'In Committee', statusClass: 'pending', lastAction: 'Subcommittee hearing 3/1' },
                { number: 'SB 567', title: 'Healthcare Access Reform', sponsor: 'Sen. Adams', status: 'Reported Out', statusClass: 'passed', lastAction: 'Favorable report 3/8' },
                { number: 'HB 890', title: 'Infrastructure Investment', sponsor: 'Rep. Wilson', status: 'In Committee', statusClass: 'pending', lastAction: 'Referred 2/25' },
                { number: 'HB 445', title: 'General Government Ops', sponsor: 'Rep. Lee', status: 'In Committee', statusClass: 'pending', lastAction: 'Hearing scheduled 3/28' }
            ],
            notes: 'Budget season approaching - expect increased workload in April. Schedule joint meeting with Finance Committee for revenue projections. Member briefing on federal funding changes needed.'
        },
        'committee-2': {
            code: 'EDUC',
            title: 'Committee on Education',
            status: 'Active',
            statusClass: 'passed',
            overview: `<p>The Committee on Education has jurisdiction over all matters relating to elementary, secondary, and higher education, including curriculum standards, teacher certification, school funding formulas, and educational policy.</p>
                       <p>The committee works closely with the Department of Education and local school districts to ensure that all students have access to quality educational opportunities.</p>`,
            jurisdiction: ['K-12 Education', 'Higher Education', 'Vocational Training', 'Teacher Certification', 'School Funding', 'Educational Standards'],
            members: [
                { name: 'Rep. Jennifer Johnson', party: 'D', district: 'District 34', role: 'Chair', years: 6 },
                { name: 'Sen. Thomas Adams', party: 'R', district: 'District 19', role: 'Vice Chair', years: 4 },
                { name: 'Rep. Maria Garcia', party: 'D', district: 'District 28', role: 'Member', years: 8 },
                { name: 'Sen. William Lee', party: 'R', district: 'District 15', role: 'Member', years: 2 },
                { name: 'Rep. Emily Brown', party: 'D', district: 'District 41', role: 'Member', years: 4 }
            ],
            legislation: [
                { number: 'HB 1234', title: 'Education Funding Act', sponsor: 'Rep. Garcia', status: 'Passed', statusClass: 'passed', lastAction: 'Favorable report 2/12' },
                { number: 'SB 234', title: 'Teacher Retention', sponsor: 'Sen. Adams', status: 'In Committee', statusClass: 'pending', lastAction: 'Hearing 3/15' },
                { number: 'HB 567', title: 'School Safety Standards', sponsor: 'Rep. Wilson', status: 'In Committee', statusClass: 'pending', lastAction: 'Subcommittee review' }
            ],
            notes: 'HB 1234 is the priority bill this session. Coordinate with Appropriations on funding provisions. Schedule site visits to rural schools for member education.'
        },
        'committee-3': {
            code: 'HHS',
            title: 'Committee on Health & Human Services',
            status: 'Active',
            statusClass: 'passed',
            overview: `<p>The Committee on Health & Human Services oversees all legislation related to public health, healthcare delivery, social services, and programs serving vulnerable populations.</p>
                       <p>Key areas of focus include Medicaid, public health infrastructure, mental health services, child welfare, and aging services.</p>`,
            jurisdiction: ['Medicaid', 'Public Health', 'Mental Health', 'Child Welfare', 'Aging Services', 'Healthcare Regulation', 'Social Services'],
            members: [
                { name: 'Sen. Nancy Chen', party: 'D', district: 'District 22', role: 'Chair', years: 10 },
                { name: 'Rep. Mark Stevens', party: 'R', district: 'District 9', role: 'Vice Chair', years: 6 },
                { name: 'Sen. Lisa Park', party: 'D', district: 'District 33', role: 'Member', years: 4 },
                { name: 'Rep. John Davis', party: 'R', district: 'District 14', role: 'Member', years: 8 },
                { name: 'Sen. Carol White', party: 'D', district: 'District 27', role: 'Member', years: 2 },
                { name: 'Rep. Kevin Martinez', party: 'R', district: 'District 38', role: 'Member', years: 4 }
            ],
            legislation: [
                { number: 'SB 567', title: 'Healthcare Access Reform', sponsor: 'Sen. Adams', status: 'Passed', statusClass: 'passed', lastAction: 'Favorable report 2/20' },
                { number: 'HB 789', title: 'Mental Health Parity', sponsor: 'Rep. Wilson', status: 'In Committee', statusClass: 'pending', lastAction: 'Public hearing 3/10' },
                { number: 'SB 345', title: 'Child Care Assistance', sponsor: 'Sen. Park', status: 'In Committee', statusClass: 'pending', lastAction: 'Referred 3/5' }
            ],
            notes: 'SB 567 passed committee, now in House. Monitor Medicaid enrollment trends closely. Federal waiver application deadline April 15 - staff briefing needed.'
        }
    }
};
