# User Guide

## Admin-Replied Topic Sorting

The Admin-Replied sorting feature adds a new way to sort topics based on if an admin has replied in that topic or not, for users who want credible admin information. This feature prioritizes topics that have received replies from administrators, making it easier to identify discussions with official responses. Topics with admin replies are sorted by the timestamp of their most recent admin response, while topics without admin replies fall back to standard recent sorting.

To use this feature, apply the sort parameter `admin_replied` or `admin-replied` when browsing topics through the API or URL parameters (e.g., `/category/1?sort=admin_replied`). The system efficiently processes this sorting by batching database queries and checking administrator privileges to identify which users qualify as administrators. When a topic has multiple admin replies, only the most recent timestamp is used for sorting purposes.

**Manual Testing**: Run on localhost, then create topics with different combinations of admin and regular user replies, then verify that admin-replied topics appear first, ordered by recency of admin responses. 

**Automated Tests**: Located at `/test/topics/admin-replied.js`, the test suite includes 5 focused test cases covering core sorting logic, chronological ordering, alias compatibility, edge case handling, and multiple admin reply scenarios. Run tests with `npm run test -- test/topics/admin-replied.js` to verify functionality. The tests ensure topics with admin replies are prioritized, properly ordered by admin reply timestamps, and that both parameter variants work identically.


## Topic Endorsement

The Topic Endorsement feature allows administrators and moderators to officially endorse topics, marking them as verified, credible, or officially recognized content.Endorsed topics are stored with an `endorsed` field that can be displayed in the UI with a banner appearing next to posts.

When a topic is endorsed, the system:
1. Sets the `endorsed` field to `1` in the topic data
2. Logs an endorsement event in the topic's event history
3. Records which admin/moderator performed the endorsement
4. Fires a plugin hook (`action:topic.endorse`) for extensibility
(When a topic is unendorsed, the system reverses this process, setting the field to `0` and logging an unendorsement event)

**Manual Testing**: Run on localhost, then create topics and verify that administrators and moderators can toggle endorsement on and off (with appropriate UI changes), while regular users cannot.

**Automated Tests**: Located at `/test/topics/endorse-posts.js`, the test suite includes ~18 focused test cases covering endorsing/unendorsing topics and logging events, retrieving endorsed/unendorsed field values, etc. Run tests with `npm run test -- test/topics/endorse-posts.js` to verify functionality. The tests ensure that permissions are set up correctly and that API endpoints are correctly implemented, as well as that events are logged correctly in the history.
