# CommitCampfire

A 3D globe where your circle’s commits spark beams of light across the world.

<img height="500" alt="image" src="https://github.com/user-attachments/assets/bacaec37-269f-440e-b2f6-f2f8ff90bb23" />

## Features

- **3D Globe Visualization**: Interactive globe displaying commit activity.
- **Following Activity**: Visualizes commits from people you follow over the
  last 3 days.
- **Real-time Updates**: See new commits appear as beams of light on the globe.
- **Responsive Design**: Works across different screen sizes.

## Tech Stack

- **Frontend**: React, Vite
- **3D Graphics**: Three.js, React Three Fiber, React Globe GL
- **Styling**: Vanilla CSS, Framer Motion
- **Icons**: Lucide React
- **Utils**: d3-geo, date-fns
- **Backend/Auth**: Supabase

## Setup & Installation

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hearsilent/CommitCampfire.git
   cd CommitCampfire
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Register a new GitHub App:
   - Go to
     [GitHub Developer Settings > New GitHub App](https://github.com/settings/apps/new).
   - Set **Homepage URL** and **Callback URL** to `http://localhost:5173`.
   - Uncheck **Active** under "Webhook".
   - Under **Permissions & events**, select:
     - **Followers**: Read-only
   - Click **Create GitHub App**.
   - Copy the Client ID and Client Secret.

4. create a `.env` file in the root directory and add your credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url_here
   VITE_GITHUB_CLIENT_ID=your_client_id_here
   GITHUB_CLIENT_SECRET=your_client_secret_here
   ```

### Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Deployment

Deploy to GitHub Pages:

```bash
npm run deploy
```

Deploy to Supabase Functions:

```bash
supabase functions deploy github-auth
```

Set up environment variables in Supabase:

```bash
supabase secrets set --env-file .env
```
