# Find My Date - Startup Product Blueprint

## 1. Complete UI/UX Design Structure

**Design System & Aesthetics**
*   **Theme:** Modern, clean, and premium.
*   **Style:** Glassmorphism (translucent backgrounds with background blur), soft gradients, rounded UI elements (large border radii), smooth micro-interactions.
*   **Color Palette:**
    *   Primary: `#FF4B6E` (Romantic Pink) - Used for primary actions, likes, and highlights.
    *   Secondary: `#6C63FF` (Vibrant Purple) - Used for secondary actions, super likes, and AI features.
    *   Background: `#F8F9FF` (Soft Light Blue/White) - Provides a clean canvas.
    *   Text: Dark Slate (`#1A1A2E`) for high readability.
*   **Typography:**
    *   Headings: `Poppins` (Geometric, friendly, and modern).
    *   Body: `Inter` (Highly legible for UI elements and chat).

**Core Layouts**
*   **Mobile-First:** Bottom navigation bar for core features (Home, Discover, Matches, Messages, Profile).
*   **Desktop:** Sidebar navigation with a split-pane view for chat and discovery.

## 2. Full Website Page Layout

1.  **Landing Page (`/`)**
    *   **Hero:** Logo, "Find Your Perfect Match ❤️" headline, Sign Up / Login CTA, dynamic background or video loop.
    *   **How it Works:** 3-step process (Create Profile -> Match -> Chat).
    *   **Features:** Highlight AI Assistant, Compatibility Quiz, Interest Communities.
    *   **Testimonials:** Success stories in glassmorphism cards.
    *   **Footer:** Links, legal, social.
2.  **Auth Pages (`/login`, `/signup`)**
    *   Clean, centered form with social login options (Google, Apple).
    *   Multi-step onboarding for signup (Basic Info -> Photos -> Interests -> Quiz).
3.  **Discover / Swipe Page (`/discover`)**
    *   Full-screen or large card stack.
    *   Card content: Large photo, Name, Age, Bio snippet, Compatibility Score.
    *   Floating Action Buttons: Pass (❌), Like (❤️), Super Like (⭐).
4.  **Matches Page (`/matches`)**
    *   Horizontal scroll of "New Matches" (avatars).
    *   Vertical list of recent matches with compatibility scores.
5.  **Chat Page (`/chat`)**
    *   List view of ongoing conversations.
    *   Active chat view: Real-time messages, AI conversation starter prompts, media sharing.
6.  **User Profile Page (`/profile`)**
    *   Editable profile details, photo gallery grid, verification status.
7.  **Settings Page (`/settings`)**
    *   Discovery preferences (Age, Distance, Gender), Account settings, Privacy controls.
8.  **Admin Panel (`/admin`)**
    *   Dashboard with metrics (active users, matches today).
    *   Moderation queue for reported profiles.

## 3. Component Breakdown

*   **Shared Components:**
    *   `GlassCard`: Wrapper for translucent elements.
    *   `Button`: Primary (Pink), Secondary (Purple), Outline, Ghost.
    *   `Avatar`: User profile image with online status indicator.
    *   `BottomNav`: Mobile navigation bar.
*   **Discover Components:**
    *   `SwipeCard`: Draggable framer-motion card.
    *   `ActionButtons`: The Pass/Like/SuperLike button group.
    *   `MatchModal`: "It's a Match!" full-screen overlay.
*   **Chat Components:**
    *   `ChatBubble`: Sent/received message styling.
    *   `MessageInput`: Text area with emoji and attachment icons.
    *   `AIPromptChip`: Clickable suggestions for conversation starters.
*   **Profile Components:**
    *   `InterestTag`: Pill-shaped tags for hobbies.
    *   `PhotoGrid`: Draggable grid for reordering profile pictures.

## 4. Database Schema (MongoDB)

**Collections:**

*   `Users`
    *   `_id`, `email`, `passwordHash`, `name`, `age`, `gender`, `location` (GeoJSON), `bio`, `photos` (Array of URLs), `interests` (Array of Strings), `verified` (Boolean), `compatibilityAnswers` (Object).
*   `Swipes`
    *   `_id`, `swiperId`, `swipedId`, `action` ('like', 'pass', 'superlike'), `timestamp`.
*   `Matches`
    *   `_id`, `users` (Array of 2 User IDs), `compatibilityScore`, `createdAt`, `lastMessageAt`.
*   `Messages`
    *   `_id`, `matchId`, `senderId`, `content`, `type` ('text', 'image', 'voice'), `read` (Boolean), `timestamp`.
*   `Communities`
    *   `_id`, `name`, `description`, `members` (Array of User IDs), `tags`.

## 5. API Endpoints (REST / GraphQL)

*   **Auth:**
    *   `POST /api/auth/register`
    *   `POST /api/auth/login`
*   **Users:**
    *   `GET /api/users/me`
    *   `PUT /api/users/me` (Update profile)
    *   `GET /api/users/recommendations` (Get profiles for Discover page)
*   **Interactions:**
    *   `POST /api/swipe` (Body: `{ swipedId, action }`)
    *   `GET /api/matches`
*   **Chat (via Socket.io & REST fallback):**
    *   `GET /api/messages/:matchId`
    *   `POST /api/messages/:matchId`
*   **AI Features:**
    *   `POST /api/ai/generate-bio`
    *   `POST /api/ai/icebreakers` (Body: `{ matchId }`)

## 6. System Architecture

*   **Client:** Next.js (React) application deployed on Vercel or Cloud Run. Uses Tailwind CSS for styling and Framer Motion for swipe animations.
*   **API Layer:** Node.js / Express or Next.js API Routes.
*   **Real-time Server:** Separate Node.js server running Socket.io for low-latency chat and match notifications.
*   **Database:** MongoDB Atlas (NoSQL is great for flexible user profiles and geospatial queries for location matching).
*   **AI Integration:** Google Gemini API for generating bios, analyzing compatibility, and suggesting icebreakers.
*   **Storage:** AWS S3 or Google Cloud Storage for user photos and voice notes.

## 7. Feature Roadmap

*   **Phase 1: MVP (Months 1-2)**
    *   User Auth, Profile Creation, Basic Swiping (Like/Pass), Matching logic, Real-time Text Chat.
*   **Phase 2: AI & Engagement (Months 3-4)**
    *   Gemini API integration for Bio generation and Icebreakers.
    *   Compatibility Quiz and scoring system.
    *   Super Likes and Push Notifications.
*   **Phase 3: Community & Safety (Months 5-6)**
    *   Interest Communities (Group chats based on hobbies).
    *   Profile Verification (Photo ID check).
    *   AI moderation for toxic messages.
*   **Phase 4: Monetization & Events (Months 7+)**
    *   Premium Subscriptions (See who liked you, unlimited swipes).
    *   Event-Based Dating (Local meetups integration).

## 8. Suggestions for Scalability

1.  **Geospatial Indexing:** Use MongoDB's `2dsphere` indexes to make location-based queries (finding users within X miles) extremely fast.
2.  **Caching:** Implement Redis to cache user sessions, frequent queries (like the Discover feed queue), and compatibility scores to reduce database load.
3.  **Microservices for Real-time:** Separate the Socket.io chat server from the main API server. Chat servers need to maintain persistent connections and scale differently than stateless REST APIs.
4.  **CDN for Media:** Serve all user photos and media through a CDN (like Cloudflare or CloudFront) with automatic image optimization and resizing.
5.  **Queueing System:** Use a message broker (like RabbitMQ or AWS SQS) for heavy tasks like AI processing, sending push notifications, or calculating complex compatibility scores in the background.
