# User Guide

## Admin-Replied Topic Sorting

The Admin-Replied sorting feature adds a new way to sort topics based on if an admin has replied in that topic or not, for users who want credible admin information. This feature prioritizes topics that have received replies from administrators, making it easier to identify discussions with official responses. Topics with admin replies are sorted by the timestamp of their most recent admin response, while topics without admin replies fall back to standard recent sorting.

To use this feature, apply the sort parameter `admin_replied` or `admin-replied` when browsing topics through the API or URL parameters (e.g., `/category/1?sort=admin_replied`). The system efficiently processes this sorting by batching database queries and checking administrator privileges to identify which users qualify as administrators. When a topic has multiple admin replies, only the most recent timestamp is used for sorting purposes.

**Manual Testing**: Run on localhost, then create topics with different combinations of admin and regular user replies, then verify that admin-replied topics appear first, ordered by recency of admin responses. 

**Automated Tests**: Located at `/test/topics/admin-replied.js`, the test suite includes 5 focused test cases covering core sorting logic, chronological ordering, alias compatibility, edge case handling, and multiple admin reply scenarios. Run tests with `npm run test -- test/topics/admin-replied.js` to verify functionality. The tests ensure topics with admin replies are prioritized, properly ordered by admin reply timestamps, and that both parameter variants work identically.

## Anonymous Posting

The Anonymous posting feature allows users to indicate that they 
want to post anonymously through a checkbox. Then, users can 
make anonymous topic posts or even respond anonymously. Other 
users won't be able to see their username and will see 
"Anonymous User" instead. This feature is primarily for users who want to ask a question but don't want other users to know who posted.

**Core Functionality:**
- Users can enable anonymous posting by checking the "Post anonymously" checkbox in the composer interface
- Anonymous posts are stored with a special `anonymous` flag in the database
- When displayed, anonymous posts show "Anonymous User" as the author with a generic avatar
- The actual user ID is still tracked internally for moderation and system purposes
- Anonymous posts maintain all standard post functionality (voting, replying, etc.)
- All other functionalities should work as usual

**Implementation:**
- Anonymous flag is processed in `src/controllers/composer.js` (line 50): `anonymous: body.anonymous === '1' || body.anonymous === true`
- Post creation in `src/posts/create.js` (lines 36-38): Anonymous flag is stored with post data
- Display logic in `src/topics/posts.js` (lines 139-149): Anonymous posts show generic user data
- Anonymous posts display with:
  - Username: "Anonymous User"
  - Display name: "Anonymous User" 
  - Avatar: Generic "?" icon with gray background

**How to Use**
1. Click "New Topic" or the compose button
2. Fill in your topic title and content
3. Check the "Post anonymously" checkbox
4. Submit the post
5. Follow similar steps for "Quick Reply" by scrolling to the reply section of a post

### Testing the Anonymous Posting Feature

**Manual Testing:**
1. Create a new topic or reply with the "Post anonymously" checkbox checked
2. Verify the post displays "Anonymous User" as the author with a gray "?" avatar
3. Test that anonymous posts can be voted on, bookmarked, and replied to normally
4. Confirm post editing works for the original author but not for other users

**Automated Tests:**
Located at `/test/topics/anonymous-posting.js`, the test suite includes 18 test cases covering:

- **Post Creation & Display**: Anonymous flag storage and "Anonymous User" display
- **Functionality**: Voting, bookmarking, replying, and editing capabilities  
- **Moderation**: Admin access to original poster info and moderation tools
- **API Integration**: Anonymous posting through REST API endpoints
- **Edge Cases**: Post queues and mixed content scenarios

Run tests with `npm run test -- test/topics/anonymous-posting.js` to verify functionality. The comprehensive test suite ensures anonymous posting works seamlessly with all existing forum features while maintaining privacy and moderation capabilities.



