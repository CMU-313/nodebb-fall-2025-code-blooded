# User Guide

## Admin-Replied Topic Sorting

The Admin-Replied sorting feature adds a new way to sort topics based on if an admin has replied in that topic or not, for users who want credible admin information. This feature prioritizes topics that have received replies from administrators, making it easier to identify discussions with official responses. Topics with admin replies are sorted by the timestamp of their most recent admin response, while topics without admin replies fall back to standard recent sorting.

To use this feature, apply the sort parameter `admin_replied` or `admin-replied` when browsing topics through the API or URL parameters (e.g., `/category/1?sort=admin_replied`). The system efficiently processes this sorting by batching database queries and checking administrator privileges to identify which users qualify as administrators. When a topic has multiple admin replies, only the most recent timestamp is used for sorting purposes.

**Manual Testing**: Run on localhost, then create topics with different combinations of admin and regular user replies, then verify that admin-replied topics appear first, ordered by recency of admin responses. 

**Automated Tests**: Located at `/test/topics/admin-replied.js`, the test suite includes 5 focused test cases covering core sorting logic, chronological ordering, alias compatibility, edge case handling, and multiple admin reply scenarios. Run tests with `npm run test -- test/topics/admin-replied.js` to verify functionality. The tests ensure topics with admin replies are prioritized, properly ordered by admin reply timestamps, and that both parameter variants work identically.