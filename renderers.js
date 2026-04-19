export const seed = {
  currentWorkspaceId: 'us',
  currentView: 'dashboard',
  filters: {
    pipelineStage: 'All',
    taskStatus: 'All',
    documentType: 'All',
    reviewRecommendation: 'All',
    search: ''
  },
  ui: {
    modalOpen: false,
    modalType: null,
    modalRecordId: null,
    selectedDecisionId: null,
    selectedReviewId: null,
    modalTab: 'overview'
  },
  workspaces: [
    {
      id: 'us',
      name: 'RADGov US Govt',
      region: 'United States',
      proposals: 20,
      pipelineValue: '$34.6M',
      winRate: '26%',
      contacts: 8,
      overdueTasks: 3,
      pipeline: [
        { id:'P-001', title:'JEA Contingent Workforce RFP', agency:'JEA', stage:'In Progress', value:'$8.9M', due:'2026-04-21', probability:72, owner:'Ramya', alerts:['Missing pricing attachment'], contractType:'Staff Aug', state:'FL', naics:'561320' },
        { id:'P-002', title:'Maine Digital Services Modernization', agency:'State of Maine', stage:'Qualifying', value:'$4.2M', due:'2026-04-28', probability:48, owner:'Hari', alerts:[], contractType:'SOW', state:'ME', naics:'541511' },
        { id:'P-003', title:'Kansas Statewide Staffing', agency:'State of Kansas', stage:'Awarded', value:'$3.2M', due:'2026-03-31', probability:100, owner:'David', alerts:[], contractType:'Staff Aug', state:'KS', naics:'561320' },
        { id:'P-004', title:'DOT Infrastructure Analytics', agency:'DOT', stage:'Submitted', value:'$2.1M', due:'2026-04-11', probability:85, owner:'Bhism', alerts:['Awaiting agency response'], contractType:'SOW', state:'DC', naics:'541512' },
        { id:'P-005', title:'Harris County Staffing', agency:'Harris County', stage:'Awarded', value:'$890K', due:'2026-03-21', probability:100, owner:'Ramya', alerts:[], contractType:'Staff Aug', state:'TX', naics:'561320' },
        { id:'P-006', title:'Virginia IT Staff Aug', agency:'Commonwealth of Virginia', stage:'Identified', value:'$1.4M', due:'2026-05-02', probability:28, owner:'Hari', alerts:[], contractType:'Staff Aug', state:'VA', naics:'541519' },
        { id:'P-007', title:'New Jersey Web Modernization', agency:'State of New Jersey', stage:'Submitted', value:'$2.7M', due:'2026-04-16', probability:81, owner:'Oindrilla', alerts:['Follow up interview expected'], contractType:'SOW', state:'NJ', naics:'541511' },
        { id:'P-008', title:'Florida Workforce PMO Support', agency:'State of Florida', stage:'Identified', value:'$1.9M', due:'2026-05-12', probability:34, owner:'David', alerts:[], contractType:'SOW', state:'FL', naics:'541611' }
      ],
      tasks: [
        { id:'T-1', title:'Finalize staffing narrative for JEA', priority:'High', assignee:'Ramya', due:'2026-04-20', status:'In Progress' },
        { id:'T-2', title:'Update pricing workbook for Maine', priority:'Medium', assignee:'Hari', due:'2026-04-22', status:'Open' },
        { id:'T-3', title:'Collect compliance exhibits for Harris County', priority:'High', assignee:'David', due:'2026-04-19', status:'Overdue' },
        { id:'T-4', title:'Prepare NJ follow up package', priority:'High', assignee:'Oindrilla', due:'2026-04-18', status:'Overdue' }
      ],
      reviewQueue: [
        { id:'R-1', subject:'JEA contingent workforce RFP', source:'Zycus', fit:88, recommendation:'Go', agency:'JEA', due:'2026-04-21', synopsis:'Strong staffing alignment across utility operations, IT, PMO, and project support labor categories.', scope:'Workforce staffing, PMO support, operations support, utility IT.', laborCats:'Project managers, schedulers, analysts, support specialists, IT resources.', evaluation:'Weighted on experience, pricing, staffing plan, responsiveness.', minimums:'Utility or enterprise staffing references, scaled recruiting operations.', documents:'Solicitation, pricing sheet, terms and exhibits.', fitAnalysis:'Very strong fit based on staffing model, utility references, and supplier governance.' },
        { id:'R-2', subject:'County Healthcare PMO RFP', source:'GovWin', fit:64, recommendation:'Review', agency:'County Health Agency', due:'2026-04-29', synopsis:'Moderate fit. Requires stronger healthcare PMO references and local delivery proof.', scope:'PMO support and healthcare program coordination.', laborCats:'PMO leads, analysts, coordinators.', evaluation:'Experience, healthcare references, timeline, rates.', minimums:'Healthcare PMO references, local presence.', documents:'RFP PDF, insurance requirements.', fitAnalysis:'Possible if teamed with healthcare reference support.' }
      ],
      documents: [
        { id:'D-1', name:'Capabilities Statement v3', type:'Template', version:'v3', uploadedBy:'Praneeth', modified:'2026-04-12' },
        { id:'D-2', name:'W 9 RADGov', type:'Compliance', version:'final', uploadedBy:'Ramya', modified:'2026-04-01' },
        { id:'D-3', name:'Past Performance Energy Utility', type:'Proposal', version:'v2', uploadedBy:'Hari', modified:'2026-04-08' },
        { id:'D-4', name:'Audited Financials 2025', type:'Legal', version:'final', uploadedBy:'Finance', modified:'2026-03-18' }
      ],
      answers: [
        { id:'A-1', question:'Provide staffing transition plan', tags:'transition, staffing, onboarding', confidence:'High', category:'Delivery' },
        { id:'A-2', question:'Describe quality assurance process', tags:'QA, delivery, governance', confidence:'High', category:'Quality' },
        { id:'A-3', question:'Outline subcontractor management controls', tags:'compliance, supplier', confidence:'Medium', category:'Compliance' }
      ],
      decisions: [
        { id:'DS-1', title:'Bid threshold for staff augmentation', category:'Strategy', summary:'Pursue only if expected value exceeds $500K or strategic entry case exists.', detail:'This threshold reduces low value distraction and keeps the team focused on strategic statewide and enterprise opportunities.' },
        { id:'DS-2', title:'Pricing review path', category:'Pricing', summary:'All rates above 28% markup require leadership sign off before final submission.', detail:'Leadership approval is required when markup exceeds the standard operating band to protect competitiveness and margin discipline.' },
        { id:'DS-3', title:'Set aside posture', category:'Compliance', summary:'Confirm set aside eligibility before go no go recommendation is finalized.', detail:'The review queue should flag SDVOSB, HUBZone, MBE, and other set aside conditions before intake is converted to a pursuit.' }
      ],
      contactsList: [
        { name:'Sarah Monroe', title:'Procurement Manager', agency:'JEA', email:'sarah.monroe@jea.com', lastContact:'2026-04-17' },
        { name:'David Kline', title:'State Buyer', agency:'State of Maine', email:'david.kline@maine.gov', lastContact:'2026-04-15' }
      ],
      summary: {
        headline:'Pipeline remains strong with momentum in utility and state staffing pursuits.',
        highlights:['JEA parsing completed with high fit score', 'Two submitted proposals awaiting interviews', 'Awarded backlog supports near term credibility'],
        risks:['Pricing workbook pending approval', 'Three deadlines fall within 7 days'],
        actions:['Prioritize JEA pricing lock', 'Submit NJ follow up package', 'Refresh Maine compliance exhibits']
      }
    },
    {
      id: 'uk',
      name: 'RADGov UK',
      region: 'United Kingdom',
      proposals: 8,
      pipelineValue: '$15.4M',
      winRate: '25%',
      contacts: 3,
      overdueTasks: 1,
      pipeline: [
        { id:'UK-1', title:'NHS Programme Support', agency:'NHS', stage:'Qualifying', value:'$3.1M', due:'2026-05-06', probability:44, owner:'Team UK', alerts:['Need UK right to work pack'], contractType:'SOW', state:'UK', naics:'N A' }
      ],
      tasks: [{ id:'UK-T1', title:'Upload right to work narrative', priority:'High', assignee:'Team UK', due:'2026-04-24', status:'Open' }],
      reviewQueue: [],
      documents: [{ id:'UK-D1', name:'UK Compliance Pack', type:'Compliance', version:'v1', uploadedBy:'Team UK', modified:'2026-04-10' }],
      answers: [],
      decisions: [{ id:'UK-DS1', title:'UK hiring compliance', category:'Compliance', summary:'All UK pursuits require right to work and local payroll review before submission.', detail:'The UK workspace requires right to work and payroll validation before final proposal release.' }],
      contactsList: [],
      summary: { headline:'UK workspace active with lighter pipeline.', highlights:['Two framework opportunities identified'], risks:['Need additional UK right to work content'], actions:['Build UK answer library'] }
    },
    {
      id: 'canada',
      name: 'RADGov Canada',
      region: 'Canada',
      proposals: 6,
      pipelineValue: '$18.4M',
      winRate: '29%',
      contacts: 4,
      overdueTasks: 1,
      pipeline: [{ id:'CA-1', title:'Ontario AI Project Services', agency:'Ontario Province', stage:'In Progress', value:'$5.4M', due:'2026-05-10', probability:67, owner:'Canada Team', alerts:[], contractType:'SOW', state:'ON', naics:'541511' }],
      tasks: [{ id:'CA-T1', title:'Refresh provincial compliance files', priority:'Medium', assignee:'Canada Team', due:'2026-04-27', status:'Open' }],
      reviewQueue: [],
      documents: [{ id:'CA-D1', name:'Canada Clearance Matrix', type:'Compliance', version:'v2', uploadedBy:'Canada Team', modified:'2026-04-14' }],
      answers: [],
      decisions: [{ id:'CA-DS1', title:'Canada clearance rule', category:'Compliance', summary:'Clearance dependent roles must be clearly separated in proposals and staffing plans.', detail:'Security sensitive roles must be called out distinctly in staffing plans and rate sheets.' }],
      contactsList: [],
      summary: { headline:'Canada pipeline is balanced across IT and AI project support.', highlights:['Clearance ready roles positioned'], risks:['Need updated provincial compliance files'], actions:['Package Ontario references'] }
    },
    {
      id: 'ateeca',
      name: 'Ateeca',
      region: 'Multi region',
      proposals: 3,
      pipelineValue: '$7.8M',
      winRate: '23%',
      contacts: 1,
      overdueTasks: 0,
      pipeline: [], tasks: [], reviewQueue: [], documents: [], answers: [], decisions: [], contactsList: [],
      summary: { headline:'Ateeca holds a focused niche pipeline.', highlights:['Commercial opportunities narrowed'], risks:['Lower volume this week'], actions:['Increase opportunity sourcing'] }
    },
    {
      id: 'commercial',
      name: 'RADGov Commercial',
      region: 'Commercial',
      proposals: 1,
      pipelineValue: '$3.2M',
      winRate: '20%',
      contacts: 1,
      overdueTasks: 0,
      pipeline: [], tasks: [], reviewQueue: [], documents: [], answers: [], decisions: [], contactsList: [],
      summary: { headline:'Commercial workspace is minimal but active.', highlights:['One live account expansion'], risks:['Pipeline concentration risk'], actions:['Expand pursuit list'] }
    }
  ]
};
