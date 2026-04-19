# PropTrack Built Demo App

This is a lightweight front end application based on the PropTrack management overview.

## What it includes
- Command Center dashboard
- Multi workspace switcher
- Pipeline view with stage progression
- Review Queue with AI style analysis modal
- Task Manager with editable statuses
- Document Library
- Answer Library
- Decisions Workspace
- Contacts and Roles
- Analytics
- Weekly Review and new RFP intake
- Local browser persistence
- JSON export of current workspace snapshot

## How to run
### Option 1
Open `index.html` directly in a browser.

### Option 2
Serve the folder locally:

Python 3:
```bash
cd proptrack_build
python3 -m http.server 8080
```
Then open `http://localhost:8080`

## Important note
This is still a front end demo build. It does not include:
- Real authentication
- Database
- Real AI API integration
- Email ingestion
- SAM.gov or GovWin connectors
- True drag and drop kanban

## Production next step
A production version should be rebuilt in React or Next.js with:
- Postgres or Prisma backend
- Auth and role management
- Claude or OpenAI integration
- File storage
- Audit logs
- Search and workflow APIs
