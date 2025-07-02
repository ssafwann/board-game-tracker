# BoardTracker - Features & Design

## Core Features

### 0. Authentication & Access
- **Landing Page**: Choose between "Try Demo" or "Sign Up/Login"
- **Demo Mode**: Full app functionality with localStorage
- **Account Creation**: Email/password via Supabase Auth
- **Protected Routes**: Dashboard, history, and leaderboards require auth or demo mode

### 1. Player Management
- Add players with names and optional profile pictures
- Create new players or select from existing player list
- Persistent player database across sessions (auth) or local storage (demo)

### 2. Game Selection Hub
- **Main Dashboard**: Nicely formatted game containers/cards
- **Game Details Page**: Rules review and game information
- **Play Button**: Leads to game session setup after rules review

### 3. Game Session Setup
- Select participating players from existing list
- Add new players during setup if needed
- Choose turn order (manual input or randomized)
- Optional turn timer configuration:
  - Enable/disable timer
  - Manual or automatic timer modes
  - Customizable duration (15s, 30s, 45s, 60s)
  - Timer behavior: automatic turn progression vs manual next turn
- **Sound Effects**: Audio cues for turn changes and timer expiration (hands-free gameplay)

### 4. Game Controls & Management
- **Pause Game**: Temporarily halt session
- **Stop/End Game**: Exit without declaring winner
- **Winner Declaration**: Mark game completion with winner

### 5. Game Outcome Tracking
- Mark winner at game end
- Save comprehensive session data:
  - Participating players
  - Date and time
  - Winner
  - Game type
  - Session duration

### 6. Session History
- View all past games
- Filter and search capabilities
- Detailed session information display

### 7. Leaderboard
- Track total wins per player
- Win percentage calculations
- Player statistics overview
- **Filter by Games**: View leaderboards for specific games

### 8. User Profiles
- **Player Statistics**: Games won, games played, win percentage
- **Performance Metrics**: Detailed stats and achievements
- **Profile Customization**: Avatar and display preferences

### 9. Additional Features
- Game notes and highlights
- Player avatars and customization
- Sound settings (volume control, on/off toggle)
- **Screenshot Feature**: Capture moment when game ends for reactions
- **AI Narration**: Voice announcements for turn changes using 11Labs API

## User Flow

```
Landing Page
├── Try Demo
│   └── Demo Dashboard (localStorage)
│       ├── Game Selection Hub
│       │   ├── Game Cards/Containers
│       │   └── Game Details → Setup
│       ├── Player Management
│       ├── View History
│       ├── Leaderboard (with game filters)
│       └── "Sign up to save data" prompts
├── Sign Up/Login
│   └── Authenticated Dashboard
│       ├── Game Selection Hub
│       │   ├── Game Cards/Containers
│       │   ├── Game Details → Rules Review
│       │   └── Play Button → Session Setup
│       ├── Player Management
│       │   ├── View All Players
│       │   ├── Add New Player
│       │   └── Edit Player Info
│       ├── View History
│       │   ├── Session List
│       │   ├── Filter Options
│       │   └── Session Details
│       ├── Leaderboard
│       │   ├── Player Rankings
│       │   ├── Game-specific Filters
│       │   └── Statistics
│       ├── User Profile
│       │   ├── Personal Stats
│       │   ├── Game History
│       │   └── Profile Settings
│       └── Settings
│           ├── Sound Controls
│           ├── AI Narration Toggle
│           └── Account Management
```

## Design Considerations

### Timer Behavior Options
The app will need to handle two different timer expiration behaviors:
1. **Automatic Turn Progression**: Timer expires → automatically moves to next player
2. **Manual Turn Confirmation**: Timer expires → plays alert sound but requires manual "next turn" action

This choice affects user experience significantly:
- **Automatic**: Better for fast-paced games, less screen interaction
- **Manual**: Better control, prevents missed turns due to distractions

**Implementation**: Start with manual confirmation (safer), with automatic as a user setting.

### Sound Design Strategy
- **Turn Change Sound**: Subtle chime or bell (non-intrusive)
- **Timer Warning**: Audio countdown for last 5 seconds
- **Timer Expired**: More prominent alert sound
- **AI Narration**: Voice announcements for turn changes
- **Settings**: Volume control and sound on/off toggle

### UI/UX Design Principles
- **Family-Friendly**: Clean, approachable interface suitable for all ages
- **Hands-Free Operation**: Audio cues support gameplay without constant screen attention
- **Responsive Design**: Works seamlessly across devices (desktop, tablet, mobile)
- **Accessibility**: Clear typography, sufficient contrast, keyboard navigation
- **Minimal Interaction**: Streamlined flows to reduce interruption during games 