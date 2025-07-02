# BoardTracker - Authentication Strategy

## Dual-Mode Approach (Portfolio Optimized)

The app implements both authenticated and demo modes to maximize portfolio appeal while serving real user needs.

## Authenticated Mode (Primary Experience)

### Game Host Model
- **Single Account Requirement**: Only 1 person per game group needs an account
- **Session Management**: Account holder is responsible for:
  - Starting game sessions
  - Adding/managing players
  - Timer controls
  - Game outcome recording

### User Benefits
- **Cross-Device Sync**: Access leaderboards and history from any device
- **Persistent Data**: All game sessions, players, and statistics permanently saved
- **Long-term Tracking**: Build comprehensive gaming history over time
- **Shareable Results**: Future ability to share game outcomes
- **Backup & Recovery**: Data persists across device changes

### Real-World Use Case
- **Game Night Host**: Creates account, becomes the "game master"
- **Other Players**: No account needed, just participate in sessions
- **Value Proposition**: Host can track group's gaming history across multiple sessions
- **Convenience**: Same person typically hosts game nights anyway

## Demo Mode (Portfolio Reviewers)

### Instant Access Strategy
- **"Try Demo" Button**: Prominent placement on homepage for immediate access
- **No Barriers**: Zero signup friction for portfolio reviewers
- **Full Functionality**: All features available without account creation
- **Local Storage**: Temporary data storage for testing purposes

### User Experience
- **Complete Feature Set**: Identical functionality to authenticated mode
- **Mock Data**: Pre-populated examples to demonstrate capabilities
- **Clear Limitations**: Obvious that data won't persist after session
- **Upgrade Prompts**: Subtle "Sign up to save your data permanently" suggestions

### Portfolio Benefits
- **No Friction**: Reviewers can immediately experience the app
- **Technical Demonstration**: Shows full-stack capabilities including auth
- **User Consideration**: Demonstrates understanding of different user needs
- **Professional Approach**: Real-world authentication strategy

## Authentication Flow

### Landing Page Options
```
Landing Page
├── "Try Demo" → Immediate access to demo dashboard
└── "Sign Up / Login" → Authentication flow
```

### Demo to Authenticated Transition
- **No Data Migration**: Demo data is temporary and doesn't transfer
- **Fresh Start**: Creating account begins with clean slate
- **Clear Expectation**: Users understand demo is for testing only
- **Seamless Upgrade**: Easy transition from demo to account creation

### Route Protection
- **Protected Routes**: Dashboard, history, leaderboards require auth OR demo mode
- **Public Routes**: Landing page, about, help sections
- **Session Management**: Handle both authenticated sessions and demo state
- **Graceful Fallbacks**: Redirect to appropriate mode if session expires

## Technical Implementation

### Supabase Auth Integration
- **Email/Password**: Standard authentication method
- **Session Management**: Persistent login state across browser sessions
- **Security**: Built-in protections against common vulnerabilities
- **Scalability**: Ready for future social login options

### State Management
- **Auth Context**: Global authentication state management
- **Demo Mode Flag**: Track whether user is in demo or authenticated mode
- **Route Guards**: Protect authenticated routes while allowing demo access
- **Data Layer**: Switch between Supabase (auth) and localStorage (demo)

### User Experience Considerations
- **Loading States**: Smooth transitions during authentication
- **Error Handling**: Clear messaging for auth failures
- **Session Persistence**: Remember user preference for auth vs demo
- **Mobile Responsive**: Authentication flows work across all devices 