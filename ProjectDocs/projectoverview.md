# BoardTracker - Project Overview

## Project Vision
BoardTracker is a lightweight game session management app designed to help friends and family track their favourite board games (e.g. Rummikub, UNO, etc). The focus is on session management rather than gameplay, with a strategic foundation built for future expansion to support multiple card and board games.

## Core Value Proposition
- **Immediate Problem**: Manual tracking of board games is tedious and error-prone
- **Solution**: Digital session management with player tracking, game outcomes, and historical data
- **Future Vision**: Universal game session tracker for all family/friend games (Monopoly, etc.)

## Technical Stack Overview

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Hosting**: Vercel

### Backend
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth (dual-mode strategy)
- **API**: Next.js API routes + Supabase client
- **AI Narration**: 11Labs API for text-to-speech functionality

### Key Architecture Decision
**Game-Agnostic Design**: The database schema and core logic will be built to support any type of game from day one, ensuring easy expansion without major refactoring.

## What This App Does
BoardTracker provides a digital solution for managing board game sessions with features including:
- Player management and profiles
- Game session setup with timers and sound effects
- Outcome tracking and session history
- Leaderboards and statistics
- AI-powered turn announcements
- Dual-mode access (authenticated + demo)

*For detailed features, authentication strategy, and technical implementation, see the additional documentation files in this folder.*
