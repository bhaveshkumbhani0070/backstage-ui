# Backstage UI Project Plan

## Overview

Backstage UI is a Next.js 16 front-end project for a challenge-based social fitness experience. The current app already presents a polished feed layout with a top navigation bar, challenge day sidebar, and feed post cards. At this stage, the project is best described as a UI prototype with static data and local-only state.

This plan turns the current prototype into a shippable product in clear stages.

## Current State

### What exists today

- App shell with a reusable header and sidebar layout
- Homepage feed built from static post data
- Day selector state managed in the layout wrapper
- Dark mode toggle stored in `localStorage`
- Tailwind-based styling with custom theme overrides
- Small component structure that is easy to extend

### Current limitations

- Feed data is hardcoded inside [`app/page.js`](/Users/bhavesh/Desktop/Project/my_PROJECTS/backstage-ui/app/page.js)
- Challenge day metadata is static and not fully connected to UI behavior
- Sidebar completion and locking logic is inferred from selected day, not real data
- Buttons are mostly presentational and do not trigger real product flows
- Remote images use plain `<img>` tags instead of optimized image handling
- Theme logic depends on client-side effects and may need hardening for production UX
- No backend, auth, persistence, API layer, or test coverage yet
- README still contains the default starter content

## Product Direction

### Core experience

The product should feel like a premium challenge dashboard where users can:

- join a challenge
- track progress by day
- submit or view daily content
- engage with other participants through reactions and comments
- maintain motivation through streaks, progress, and social proof

### Primary user goals

- Understand the current challenge status at a glance
- Move between challenge days easily
- View inspiring or useful daily content
- Post a submission with minimal friction
- See progress, streaks, and engagement clearly

## Project Goals

### Short-term goals

- Stabilize the current UI structure
- Separate content/data from presentation
- Make the challenge day flow coherent across the layout and feed
- Improve accessibility and responsive behavior
- Replace starter documentation with project-specific docs

### Mid-term goals

- Add real data models for users, posts, challenge days, and submissions
- Introduce API routes or a backend service
- Add authentication and user-specific progress
- Support comment, reaction, and submission actions

### Long-term goals

- Support multiple challenges
- Add analytics and retention features
- Add moderation and admin tooling
- Prepare for deployment and production monitoring

## Recommended Roadmap

### Phase 1: Foundation Cleanup

Goal: turn the prototype into a maintainable front-end codebase.

Tasks:

- Move static feed data out of [`app/page.js`](/Users/bhavesh/Desktop/Project/my_PROJECTS/backstage-ui/app/page.js) into a dedicated data module
- Normalize challenge and post data shapes
- Replace starter README content with project documentation
- Audit component props and remove duplicated fallback data
- Review responsive behavior for header, sidebar, and card layouts
- Improve semantic HTML and button labeling for accessibility

### Phase 2: Product Behavior

Goal: make the interface behave like a real challenge app.

Tasks:

- Connect selected challenge day to visible page content
- Define locked, unlocked, completed, and current day states clearly
- Add empty states and loading states
- Design the submission flow and comments interaction
- Add notification and profile menu behavior
- Decide whether dark mode should follow system preference by default

### Phase 3: Data and Integration

Goal: move from mock data to real app state.

Tasks:

- Choose a data source: local mock API first, then database-backed API
- Add types or schemas for challenge days, posts, users, and reactions
- Create server-side data fetching strategy for Next.js 16
- Add authentication
- Persist progress, submissions, and engagement data

### Phase 4: Quality and Launch Readiness

Goal: prepare for reliable deployment.

Tasks:

- Add linting rules aligned with the team style
- Add component and integration tests
- Optimize images and asset delivery
- Improve performance on mobile devices
- Add error boundaries and monitoring
- Create deployment and environment setup docs

## Technical Priorities

### Frontend architecture

- Keep layout components focused on shell behavior
- Move business rules out of UI components when state grows
- Prefer reusable data-driven components over one-off hardcoded sections

### Styling system

- Convert repeated color usage into shared design tokens or CSS variables
- Reduce dependence on direct utility overrides for dark mode
- Keep the visual direction warm, social, and challenge-oriented

### Data modeling

Recommended core models:

- `User`
- `Challenge`
- `ChallengeDay`
- `Post`
- `Submission`
- `Reaction`
- `Comment`

### Quality

- Add test coverage for sidebar day selection and feed rendering
- Add visual review for light and dark themes
- Validate mobile, tablet, and desktop layouts before expanding features

## Risks and Unknowns

### Product risks

- The exact challenge flow is not fully defined yet
- It is not clear whether users consume video, image, or mixed media content
- Notification, streak, and social features need product rules before implementation

### Technical risks

- Static UI logic may become difficult to extend if feature work starts before data modeling
- Theme behavior may drift if dark mode styling remains class-override heavy
- Remote image usage may require Next.js-specific configuration before production

## Suggested Next Actions

1. Replace the default README with a real project overview and setup guide.
2. Move mock posts into a separate data file and connect them through a cleaner interface.
3. Define the challenge day state model: current, completed, locked, upcoming.
4. Decide whether this project is UI-only for now or intended to gain a backend soon.
5. Add a basic testing strategy before feature count grows.

## Definition of Success

The project will be in a strong state when:

- the UI is fully data-driven rather than page-hardcoded
- challenge progression is consistent across the whole app
- users can interact with submissions and comments in a believable flow
- the app is responsive, accessible, and visually consistent
- the codebase is documented well enough for fast iteration

## Working Notes

Useful files in the current codebase:

- [`app/layout.js`](/Users/bhavesh/Desktop/Project/my_PROJECTS/backstage-ui/app/layout.js)
- [`app/page.js`](/Users/bhavesh/Desktop/Project/my_PROJECTS/backstage-ui/app/page.js)
- [`components/layout/LayoutWrapper.js`](/Users/bhavesh/Desktop/Project/my_PROJECTS/backstage-ui/components/layout/LayoutWrapper.js)
- [`components/layout/Header.js`](/Users/bhavesh/Desktop/Project/my_PROJECTS/backstage-ui/components/layout/Header.js)
- [`components/layout/Sidebar.js`](/Users/bhavesh/Desktop/Project/my_PROJECTS/backstage-ui/components/layout/Sidebar.js)
- [`components/cards/FeedPostCard.js`](/Users/bhavesh/Desktop/Project/my_PROJECTS/backstage-ui/components/cards/FeedPostCard.js)
- [`data/sidebarDays.js`](/Users/bhavesh/Desktop/Project/my_PROJECTS/backstage-ui/data/sidebarDays.js)
