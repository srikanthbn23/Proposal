const state = {
  workspace: "RADIANT Proposal",
  view: "dashboard",
  kpis: {
    active: 38,
    value: "$79M",
    winRate: "26%",
    workspaces: 5
  },
  deadlines: [
    {name:"JEA Contingent Workforce", due:"2 days", cls:"red"},
    {name:"Kansas State Staffing", due:"5 days", cls:"amber"},
    {name:"DOT Infrastructure Analytics", due:"12 days", cls:"green"}
  ],
  pipeline: {
    identified:[{title:"NJ State IT Staffing", value:"$1.2M"}],
    progress:[{title:"JEA Contingent Workforce", value:"$8-10M"}],
    submitted:[{title:"Kansas State Staffing", value:"$3.2M"}],
    awarded:[{title:"Harris County Staffing", value:"$890K"}]
  }
};

function navButton(id,label){
  return `<button class="${state.view===id?'active':''}" onclick="setView('${id}')">${label}</button>`;
}

function dashboardView(){
  return `
    <div class="header">
      <div class="title">Command Center</div>
      <button class="topbtn" onclick="alert('Demo app is working')">New RFP</button>
    </div>
    <div class="kpis">
      <div class="card"><div class="kpi-label">Active Proposals</div><div class="kpi-value">${state.kpis.active}</div></div>
      <div class="card"><div class="kpi-label">Pipeline Value</div><div class="kpi-value">${state.kpis.value}</div></div>
      <div class="card"><div class="kpi-label">Win Rate</div><div class="kpi-value">${state.kpis.winRate}</div></div>
      <div class="card"><div class="kpi-label">Workspaces</div><div class="kpi-value">${state.kpis.workspaces}</div></div>
    </div>
    <div class="grid">
      <div class="card">
        <h3>Upcoming Deadlines</h3>
        <table class="table">
          <thead><tr><th>Opportunity</th><th>Due</th></tr></thead>
          <tbody>
            ${state.deadlines.map(d=>`<tr><td>${d.name}</td><td><span class="badge ${d.cls}">${d.due}</span></td></tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="card">
        <h3>Alerts</h3>
        <div class="list">
          <div><div class="item-title">Missing pricing document</div><div class="small">JEA Contingent Workforce</div></div>
          <div><div class="item-title">Overdue task</div><div class="small">Update compliance checklist</div></div>
          <div><div class="item-title">Awaiting confirmation</div><div class="small">Kansas State interview round</div></div>
        </div>
      </div>
    </div>`;
}

function pipelineView(){
  const col = (title, items) => `
    <div class="column">
      <h3>${title}</h3>
      ${items.map(i=>`<div class="ticket"><div class="ticket-title">${i.title}</div><div class="ticket-meta">${i.value}</div></div>`).join('')}
    </div>`;
  return `
    <div class="header"><div class="title">Pipeline</div></div>
    <div class="kanban">
      ${col("Identified", state.pipeline.identified)}
      ${col("In Progress", state.pipeline.progress)}
      ${col("Submitted", state.pipeline.submitted)}
      ${col("Awarded", state.pipeline.awarded)}
    </div>`;
}

function tasksView(){
  return `
    <div class="header"><div class="title">Task Manager</div></div>
    <div class="card">
      <table class="table">
        <thead><tr><th>Task</th><th>Owner</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>Prepare pricing workbook</td><td>Ramya</td><td><span class="badge amber">In Progress</span></td></tr>
          <tr><td>Review labor categories</td><td>Hari</td><td><span class="badge red">Overdue</span></td></tr>
          <tr><td>Finalize submission pack</td><td>Praneeth</td><td><span class="badge green">Done</span></td></tr>
        </tbody>
      </table>
    </div>`;
}

function docsView(){
  return `
    <div class="header"><div class="title">Document Library</div></div>
    <div class="card list">
      <div><div class="item-title">Capabilities Statement</div><div class="small">Version final</div></div>
      <div><div class="item-title">W-9</div><div class="small">Version v2</div></div>
      <div><div class="item-title">Past Performance Pack</div><div class="small">Version final</div></div>
    </div>`;
}

function renderContent(){
  if(state.view==="pipeline") return pipelineView();
  if(state.view==="tasks") return tasksView();
  if(state.view==="documents") return docsView();
  return dashboardView();
}

function renderApp(){
  document.getElementById("app").innerHTML = `
    <div class="layout">
      <aside class="sidebar">
        <div class="brand">Proposalbuilder</div>
        <div class="workspace">${state.workspace}</div>
        <div class="nav">
          ${navButton("dashboard","Command Center")}
          ${navButton("pipeline","Pipeline")}
          ${navButton("tasks","Task Manager")}
          ${navButton("documents","Document Library")}
        </div>
      </aside>
      <main class="main">
        ${renderContent()}
      </main>
    </div>
  `;
}

window.setView = function(view){
  state.view = view;
  renderApp();
}

renderApp();
