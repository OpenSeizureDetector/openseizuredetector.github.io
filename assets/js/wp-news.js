/**
 * WordPress News Fetcher
 * Dynamically loads latest posts from WordPress site and displays them in the news section
 */

(function() {
  // Configuration
  const WP_SITE_URL = 'https://openseizuredetector.org.uk';
  const WP_REST_API = WP_SITE_URL + '/wp-json/wp/v2/posts';
  const NEWS_LIST_ID = 'news-list';
  const MAX_POSTS = 5;
  const EXCERPT_LENGTH = 150; // characters

  /**
   * Strip HTML tags and entities from text
   */
  function stripHtml(html) {
    if (!html) return '';
    
    const temp = document.createElement('div');
    temp.innerHTML = html;
    let text = temp.textContent || temp.innerText || '';
    
    // Decode HTML entities
    text = text
      .replace(/&nbsp;/g, ' ')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&amp;/g, '&');
    
    return text.trim();
  }

  /**
   * Truncate text to a maximum length
   */
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  }

  /**
   * Format date in a readable format
   */
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  /**
   * Fetch and display WordPress posts
   */
  async function loadNews() {
    const newsList = document.getElementById(NEWS_LIST_ID);
    if (!newsList) return;

    try {
      // Fetch posts from WordPress REST API
      const response = await fetch(`${WP_REST_API}?per_page=${MAX_POSTS}&orderby=date&order=desc`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const posts = await response.json();

      if (!posts || posts.length === 0) {
        newsList.innerHTML = '<li style="color: #666; font-style: italic;">No news items available</li>';
        return;
      }

      // Build HTML for news items
      const newsHtml = posts.map(post => {
        const title = stripHtml(post.title.rendered);
        const excerpt = stripHtml(post.excerpt.rendered);
        const truncatedExcerpt = truncateText(excerpt, EXCERPT_LENGTH);
        const date = formatDate(post.date);
        const link = post.link;

        return `
          <li style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e0e0e0;">
            <a href="${link}" style="text-decoration: none; color: #2471a3; font-weight: 500; font-size: 1em;">
              ${title}
            </a>
            <div style="font-size: 0.85em; color: #999; margin: 5px 0;">${date}</div>
            <p style="margin: 8px 0 0 0; font-size: 0.9em; color: #555; line-height: 1.5;">
              ${truncatedExcerpt}
            </p>
            <a href="${link}" style="font-size: 0.85em; color: #2471a3; text-decoration: none;">Read more →</a>
          </li>
        `;
      }).join('');

      newsList.innerHTML = newsHtml;

    } catch (error) {
      console.error('Error loading WordPress news:', error);
      newsList.innerHTML = `
        <li style="color: #d32f2f;">
          <strong>Unable to load news</strong>
          <p style="font-size: 0.9em; margin: 5px 0 0 0;">
            We couldn't fetch the latest updates at this moment. 
            <a href="${WP_SITE_URL}/news/" style="color: #2471a3;">View all news on our main site</a>
          </p>
        </li>
      `;
    }
  }

  // Load news when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNews);
  } else {
    loadNews();
  }
})();
