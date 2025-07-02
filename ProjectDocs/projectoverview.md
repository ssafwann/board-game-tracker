# BoardTracker - Project Overview

## Project Vision
BoardTracker is a lightweight game session management app designed to help friends and family track their favourite board games (e.g. Rummikub, UNO, etc). The MVP focuses on session management rather than gameplay, with a strategic foundation built for future expansion to support multiple card and board games.

## Core Value Proposition
- **Immediate Problem**: Manual tracking of board games is tedious and error-prone
- **Solution**: Digital session management with player tracking, game outcomes, and historical data
- **Future Vision**: Universal game session tracker for all family/friend games (Monopoly, etc.)

## Technical Stack

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Hosting**: Vercel

### Backend
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth (for future features)
- **API**: Next.js API routes + Supabase client

### Key Architecture Decision
**Game-Agnostic Design**: The database schema and core logic will be built to support any type of game from day one, ensuring easy expansion without major refactoring.

## Core Features (MVP)

### 1. Player Management
- Add players with names and optional profile pictures
- Create new players or select from existing player list
- Persistent player database across sessions

### 2. Game Session Setup
- Select participating players from existing list
- Add new players during setup if needed
- Choose turn order (manual input or randomized)
- Optional turn timer configuration:
  - Enable/disable timer
  - Manual or automatic timer modes
  - Customizable duration (15s, 30s, 45s, 60s)
  - Timer behavior: automatic turn progression vs manual next turn
- **Sound Effects**: Audio cues for turn changes and timer expiration (hands-free gameplay)

### 3. Game Outcome Tracking
- Mark winner at game end
- Save comprehensive session data:
  - Participating players
  - Date and time
  - Winner
  - Game type (Rummy for MVP)
  - Session duration

### 4. Session History
- View all past games
- Filter and search capabilities
- Detailed session information display

### 5. Leaderboard
- Track total wins per player
- Win percentage calculations
- Player statistics overview

## User Flow

```
Home Page
├── Start New Game
│   ├── Select/Add Players
│   ├── Configure Turn Order
│   ├── Set Timer Options
│   └── Begin Session
├── Player Management
│   ├── View All Players
│   ├── Add New Player
│   └── Edit Player Info
├── View History
│   ├── Session List
│   ├── Filter Options
│   └── Session Details
└── Leaderboard
    ├── Player Rankings
    └── Statistics
```

## Key Design Considerations

### Timer Behavior Options
The app will need to handle two different timer expiration behaviors:
1. **Automatic Turn Progression**: Timer expires → automatically moves to next player
2. **Manual Turn Confirmation**: Timer expires → plays alert sound but requires manual "next turn" action

This choice affects user experience significantly:
- **Automatic**: Better for fast-paced games, less screen interaction
- **Manual**: Better control, prevents missed turns due to distractions

**Recommendation**: Start with manual confirmation for MVP (safer), add automatic as an option later.

### Sound Design Strategy
- **Turn Change Sound**: Subtle chime or bell (non-intrusive)
- **Timer Warning**: Audio countdown for last 5 seconds
- **Timer Expired**: More prominent alert sound
- **Settings**: Volume control and sound on/off toggle

## Database Schema (Game-Agnostic)

### Players Table
```sql
players (
  id, name, profile_picture_url, created_at
)
```

### Games Table
```sql
games (
  id, name, type, rules_config, created_at
)
```

### Sessions Table
```sql
sessions (
  id, game_id, started_at, ended_at, 
  timer_enabled, timer_duration, notes
)
```

### Session_Players Table
```sql
session_players (
  session_id, player_id, turn_order, 
  is_winner, score
)
```

## Optional Features (Post-MVP)
- Export session data to CSV
- Game notes and highlights
- Team-based game support
- Shareable game results via links
- Push notifications for turn timers
- Player avatars and customization
- **Score Tracking with AI Support**: Computer vision to analyze card hands and calculate scores automatically (addresses the complexity of manual score tracking)
- Advanced statistics and analytics

## Go-to-Market Strategy

### Phase 1: MVP Validation
1. **Build MVP** (Target: 2-3 days)
2. **Record Demo Video** showing real-world usage
3. **Social Media Launch** on Twitter targeting card game communities
4. **Gather Feedback** from friends/family testing

### Phase 2: Expansion (If Validated)
1. **Add Popular Games** (Monopoly, Uno, Poker, etc.)
2. **Enhanced Features** (teams, tournaments, detailed stats)
3. **Mobile App** (React Native or PWA)
4. **Community Features** (sharing, challenges)

## Success Metrics (MVP)
- **Technical**: App functions without bugs, fast loading
- **User Engagement**: Friends/family actually use it for game nights
- **Social Validation**: Positive response on Twitter/social media
- **Retention**: Users return for multiple game sessions

## Development Timeline
- **Day 1**: Database setup, basic UI components, player management
- **Day 2**: Game session logic, timer functionality with sound effects, outcome tracking
- **Day 3**: History view, leaderboard, polish and testing

## Technical Considerations for Sound
- **Web Audio API**: For precise timing and sound control
- **Audio Assets**: Lightweight, royalty-free sound files
- **Browser Permissions**: Handle autoplay restrictions gracefully
- **Performance**: Preload sounds, minimal impact on app performance

## Risk Mitigation
- **Technical Risk**: Keep scope minimal for MVP to ensure completion
- **Market Risk**: Focus on personal use case first, expand based on feedback
- **Scalability Risk**: Game-agnostic architecture ensures easy feature additions

---

**Next Steps**: Begin with database schema setup and basic Next.js project structure, focusing on the game-agnostic foundation that will support future expansion.